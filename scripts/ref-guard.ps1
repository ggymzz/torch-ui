<#
.SYNOPSIS
    Detect and repair git refs that were silently lost while being written.

.DESCRIPTION
    On some hardened Windows environments git cannot create NEW subdirectories
    under .git/refs/. Every ref path that needs such a directory (for example
    refs/heads/feature/x) is then dropped without any error: git reports
    success, but the loose ref file never appears and HEAD becomes unborn.

    The commit objects survive and the reflog entry IS written, so the ref can
    always be rebuilt from the reflog. Plain file IO (used by this script)
    works fine - only git's own lock/rename path is affected.

    This script compares every target ref's loose file with the last line of
    its reflog and, unless -Verify is given, rewrites the file directly.

.PARAMETER RepoRoot
    Repository root. Defaults to the parent directory of this script.

.PARAMETER Verify
    Report only, write nothing. Exit code 1 when a mismatch is detected.

.PARAMETER All
    Check every local branch (including refs whose file is already gone but
    whose reflog still exists). Default is the current HEAD branch only.

.PARAMETER Force
    Also overwrite a ref file that exists but disagrees with the reflog.
    Without it, such a ref is only reported (it may have been set on purpose,
    for example when a commit was deliberately dropped).

.PARAMETER Quiet
    Print only when something is wrong or was repaired. Intended for hooks.

.EXAMPLE
    powershell -NoProfile -ExecutionPolicy Bypass -File scripts/ref-guard.ps1 -Verify

.EXAMPLE
    powershell -NoProfile -ExecutionPolicy Bypass -File scripts/ref-guard.ps1 -All

.NOTES
    Exit codes: 0 = clean or repaired, 1 = problem found in -Verify mode,
                2 = fatal error (not a repository, unreadable HEAD, ...).
#>
[CmdletBinding()]
param(
    [string] $RepoRoot = '',
    [switch] $Verify,
    [switch] $All,
    [switch] $Force,
    [switch] $Quiet
)

$ErrorActionPreference = 'Stop'

# ---------------------------------------------------------------- helpers ---

function Write-Line {
    param([string] $Text, [switch] $Force)
    if ($Force -or -not $Quiet) { Write-Output $Text }
}

function Get-RepoRoot {
    param([string] $Explicit)
    if (-not [string]::IsNullOrWhiteSpace($Explicit)) {
        return [System.IO.Path]::GetFullPath($Explicit)
    }
    $scriptDir = $PSScriptRoot
    if ([string]::IsNullOrWhiteSpace($scriptDir)) { $scriptDir = (Get-Location).Path }
    return [System.IO.Path]::GetFullPath((Split-Path -Parent $scriptDir))
}

function Get-HeadRefName {
    param([string] $GitDir)
    $headFile = Join-Path $GitDir 'HEAD'
    if (-not [System.IO.File]::Exists($headFile)) { return $null }
    $head = [System.IO.File]::ReadAllText($headFile).Trim()
    if ($head.StartsWith('ref:')) { return $head.Substring(4).Trim() }
    return $null   # detached HEAD - no branch ref to guard
}

function Get-LastReflogSha {
    param([string] $GitDir, [string] $RefName)
    $logPath = Join-Path (Join-Path $GitDir 'logs') ($RefName -replace '/', '\')
    if (-not [System.IO.File]::Exists($logPath)) { return $null }
    $lines = [System.IO.File]::ReadAllLines($logPath)
    for ($i = $lines.Length - 1; $i -ge 0; $i--) {
        $line = $lines[$i]
        if ($line.Trim().Length -eq 0) { continue }
        $m = [regex]::Match($line, '^[0-9a-f]{40} ([0-9a-f]{40}) ')
        if ($m.Success) { return $m.Groups[1].Value }
        return $null
    }
    return $null
}

function Get-RefFileSha {
    param([string] $GitDir, [string] $RefName)
    $p = Join-Path $GitDir ($RefName -replace '/', '\')
    if (-not [System.IO.File]::Exists($p)) { return $null }
    return [System.IO.File]::ReadAllText($p).Trim()
}

function Set-RefFile {
    param([string] $GitDir, [string] $RefName, [string] $Sha)
    $p   = Join-Path $GitDir ($RefName -replace '/', '\')
    $dir = Split-Path -Parent $p
    if (-not [System.IO.Directory]::Exists($dir)) {
        $null = [System.IO.Directory]::CreateDirectory($dir)
    }
    [System.IO.File]::WriteAllBytes($p, [System.Text.Encoding]::ASCII.GetBytes($Sha + "`n"))
    return [System.IO.File]::Exists($p)
}

function Get-AllLocalRefNames {
    param([string] $GitDir)
    $found = New-Object System.Collections.Generic.HashSet[string]
    foreach ($sub in @('refs\heads', 'logs\refs\heads')) {
        $root = Join-Path $GitDir $sub
        if (-not [System.IO.Directory]::Exists($root)) { continue }
        foreach ($f in [System.IO.Directory]::GetFiles($root, '*', [System.IO.SearchOption]::AllDirectories)) {
            $rel = $f.Substring($root.Length).TrimStart('\') -replace '\\', '/'
            [void]$found.Add('refs/heads/' + $rel)
        }
    }
    return @($found) | Sort-Object
}

function Test-Sha {
    param([string] $Sha)
    return ($Sha -match '^[0-9a-f]{40}$')
}

# ------------------------------------------------------------------- main ---

try {
    $root = Get-RepoRoot -Explicit $RepoRoot
} catch {
    Write-Output ('FATAL: cannot resolve repository root: ' + $_.Exception.Message)
    exit 2
}

$gitDir = Join-Path $root '.git'
if (-not [System.IO.Directory]::Exists($gitDir)) {
    Write-Output ('FATAL: not a git repository (no .git directory): ' + $root)
    exit 2
}

Write-Line ('ref-guard: repo = ' + $root)

$targets = New-Object System.Collections.ArrayList
if ($All) {
    foreach ($n in (Get-AllLocalRefNames -GitDir $gitDir)) { [void]$targets.Add($n) }
} else {
    $headRef = Get-HeadRefName -GitDir $gitDir
    if ($null -ne $headRef) { [void]$targets.Add($headRef) }
}

if ($targets.Count -eq 0) {
    Write-Line 'ref-guard: no branch ref to check (detached HEAD?)'
    exit 0
}

$problems = 0
$repaired = 0

foreach ($refName in $targets) {
    $expected = Get-LastReflogSha -GitDir $gitDir -RefName $refName
    $actual   = Get-RefFileSha   -GitDir $gitDir -RefName $refName

    if (-not (Test-Sha $expected)) {
        if ($null -eq $expected) {
            # no reflog: nothing authoritative to compare against
            if ($null -eq $actual) {
                Write-Line ('  [WARN ] ' + $refName + ' : no ref file and no reflog') $true
            }
        }
        continue
    }

    if ($actual -eq $expected) { continue }

    $problems++
    $state = if ($null -eq $actual) { 'LOST' } else { 'STALE' }
    Write-Line ('  [' + $state + '] ' + $refName + ' : file=' + $(if ($null -eq $actual) { '<missing>' } else { $actual.Substring(0, 12) }) + ' reflog=' + $expected.Substring(0, 12)) $true

    if ($Verify) { continue }

    # LOST (file gone, reflog has the truth) is always safe to rebuild.
    # STALE (file exists but disagrees) needs -Force: the file may have been
    # set on purpose, e.g. when a commit was deliberately dropped.
    if ($state -eq 'STALE' -and -not $Force) {
        Write-Line ('  [SKIP ] ' + $refName + ' : stale, kept as-is (pass -Force to overwrite)') $true
        continue
    }

    if (Set-RefFile -GitDir $gitDir -RefName $refName -Sha $expected) {
        $repaired++
        Write-Line ('  [FIXED] ' + $refName + ' -> ' + $expected.Substring(0, 12)) $true
    } else {
        Write-Line ('  [FAILED] ' + $refName + ' : could not write ref file') $true
    }
}

if ($problems -eq 0) {
    Write-Line 'ref-guard: OK - all checked refs match their reflog'
    exit 0
}

if ($Verify) {
    Write-Line ('ref-guard: ' + $problems + ' problem(s) found (verify mode, nothing written)')
    exit 1
}

Write-Line ('ref-guard: ' + $problems + ' problem(s) found, ' + $repaired + ' repaired')
exit 0
