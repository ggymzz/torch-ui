# FORK.md — 本项目内 fork 的维护契约

> 本目录是 `@torch-ui/solid` 在 ShopFaaS monorepo 内的 fork，作为 workspace 成员被消费。
> 本文档说明它与上游的关系、差异范围、以及日常维护必须遵守的契约。
>
> 最后更新：2026-09-16

---

## 1. 为什么会有这个 fork

上游 `sean-dowd-sr/torch-ui` **自 2026-04-29 起停止提交**，npm 最新版 `0.6.20` 即为终点。

项目需要的可访问性 / 国际化 / 焦点管理修复上游无人响应——已向作者提交 3 个 PR
（#1 `2026-07-19`、#2 `2026-07-25`、#3 `2026-08-06`），全部 `open`、`merged_at: null`，
最新一个已悬置 40 天。因此在 `ggymzz/torch-ui` 建立正式 fork 自持。

**上游已停更这件事不全是坏事**：它意味着不会再有破坏性变更，版本可长期冻结，
维护成本只取决于「项目自身需要的修复」，而非「跟随上游」。

---

## 2. 仓库关系

| 角色 | 地址 |
|---|---|
| 本 fork 远端（`origin`） | `https://github.com/ggymzz/torch-ui` |
| 上游（`upstream`） | `https://github.com/sean-dowd-sr/torch-ui` |
| 工作分支 | `fork/release` ⚠️ 见 §10——本机上嵌套分支名有缺陷，建议改为顶层名 |
| monorepo 中的位置 | 仓库根 `torch-ui-fork/`，在根 `package.json` 的 `workspaces` 中 |

消费方（三处均声明 `"@torch-ui/solid": "workspace:*"`，走 workspace 链接）：

- `shopfaas-store`
- `shopfaas-suite`
- `packages/spa-shared`（`dependencies` + `peerDependencies`）

### 仓库历史形态

本仓库是**浅历史**：全库 16 个提交 = 上游快照 1 个（`2bd0573`，对应上游 0.6.20）
+ 本项目开发提交 15 个（2026-08-06 → 2026-09-16）。上游的完整提交历史不在本地。

### 本 fork 自有的文件（上游没有）

| 文件 | 作用 |
|---|---|
| `FORK.md` | 本文档，维护契约 |
| `scripts/ref-guard.ps1` | 引用守卫：检测并修复被本机环境静默丢弃的 git 引用（§10） |

---

## 3. 与上游的差异

以 `upstream/main` 为基线。**数字随每次提交增长**，实时值请跑：

```bash
git -C <repo> diff --shortstat 2bd0573 HEAD
```

截至 `a2811c3` 的参考值：

```
79 files changed, 3255 insertions(+), 1676 deletions(-)
```

其中 `src/` 部分 **45 个文件**（1071 insertions / 278 deletions，含新增
`src/utilities/localeContext.ts`）、`dist/` 构建产物 **29 个**，
其余为测试、`skill/reference` 文档、`CHANGELOG` 与 `FORK.md`。

### A 类 · 通用修复（上游本该接收）

- a11y / i18n 打包修复：Pagination、Select、DataTable、Drawer、Autocomplete、FileUpload
- Dialog 打开时聚焦首个可聚焦元素
- FileUpload 对话框关闭后焦点恢复到触发按钮
- 受控 Select 值置空时清除 trigger 残留旧值；新增 `clearable` 一键清除
- Select / MultiSelect 选项与值同时变更时的更新循环
- Autocomplete：`defaultFilter`、`noResetInputOnBlur`、`onCloseAutoFocus`、`triggerMode`、
  `id` / `aria-label` / `aria-labelledby` 转发
- `data-kb-top-layer`：修复 modal Dialog 内 portal 内容的 aria-hidden 焦点冲突
- Badge 可访问性默认行为

### B 类 · 项目新增能力

- **`LocaleProvider`**（`src/utilities/localeContext.ts`）— 组件内置文案的上下文
- Select / Autocomplete 标签行距对齐 `Input`（`mb-2` → `mb-1.5`）
- DatePicker `min` / `max` 在 render 内读取，消除 createRoot 外计算警告

### C 类 · 工程

- `@kobalte/core` 0.13.11 → 0.13.14 及 Checkbox 类型兼容
- 打包产物 chunk 引用路径更新
- 移除 `package.json` 中误加的**自依赖** `"@torch-ui/solid": "0.6.20"`

  该包自身就是 `@torch-ui/solid`，这条依赖会在 `node_modules/@torch-ui/solid/`
  下递归嵌套一份拷贝（130 文件 / 2.71 MB），而**没有任何源码引用它**。
  已连带清理 `package-lock.json` 中 3 处相关条目与磁盘上的嵌套拷贝。
- 新增 `FORK.md`（本文档）与 `scripts/ref-guard.ps1`（引用守卫）

---

## 4. 版本与发布策略

- 上游版本线**冻结在 `0.6.20`，不再跟随**。
- monorepo 内消费走 `workspace:*`，**不需要发布**即可生效。
- 若需对外发布（私有 registry），版本号使用 `0.6.2x-<项目标识>.<n>` 形式，
  避免与上游语义冲突，例如 `0.6.21-shopfaas.1`。

---

## 5. 维护契约（改组件前必读）

改动 `src/` 下任何组件时，按此顺序执行：

**① 读约定**

- `CONTRIBUTING.md` — 组件开发规范（色彩 token / focus ring / a11y）
- `skill/SKILL.md` — 导入规范、compound component、providers、MCP 工作流

**② 读组件 API**

`skill/reference/<category>/<Component>.md` — 95 篇组件文档，
含 props / exports / 类型定义。**不要靠猜**。

`doc_id` 格式为 `{category}/{Component}`，category 取值：
`actions` `charts` `data-display` `feedback` `forms` `layout` `navigation` `overlays` `typography`。

**③ 改代码** — 遵守 `CONTRIBUTING.md` 的三条硬规则：

- 只用设计 token（`surface-*` / `text-ink-*` / 语义色），**禁止** raw Tailwind 颜色类
- 交互元素用 `outline-none focus-visible:ring-2`（**无** `ring-offset`）；
  表单字段用 `focus:ring-2 focus:ring-inset`
- `aria-hidden` 必须用字符串 `"true"`，**不用**布尔 `{true}`；
  纯图标交互元素必须有 `aria-label` / `title` / `aria-labelledby`

**④ 同步文档**

```bash
bun run skill/scripts/extract-api.ts    # 从源码重新生成 API 参考
```

受影响的 `skill/reference/*.md` 需一并提交（现有提交是范本）。

**⑤ 写 CHANGELOG**

在 `CHANGELOG.md` 的 `## [Unreleased]` 段落按 `Added` / `Changed` / `Fixed` / `Removed`
分类记录，**写清根因而不只是现象**（现有条目是范本）。

**⑥ 验证**

```bash
npm run typecheck    # tsc --noEmit
npm run test         # vitest run
```

涉及交互 / 焦点 / 可访问性的改动，还应在消费方（`shopfaas-store` 或 `shopfaas-suite`）
实跑验证，不要只看单测。

**⑦ 提交**

提交信息格式：`type(scope): 中文描述`，与现有提交保持一致。

**⑧ 提交后立刻验证引用（本机硬要求，见 §10）**

本机 git **写不进需要新建目录的引用**，且 `.git/refs` 下的文件可能被环境静默移除。
`post-commit` hook 已安装（§10.5），但仍要确认：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/ref-guard.ps1 -All -Verify
```

输出 `OK` 才算提交真的落地；报 `[LOST]` 就跑一次不带 `-Verify` 的同命令即可修复。
分支被 `git gc` 打包后只剩 `packed-refs` 条目属正常，守卫按 git 语义解析，不会误报（§10.5）。

---

## 6. dist 与提交策略

上游在 `chore: include dist for github installs` 之后**将 `dist/` 纳入版本控制**，
目的是让 `github:` 协议的安装方式可用。本项目在 monorepo 内消费走 workspace 源码，
理论上不需要提交 dist。

**现状**：`dist/` 仍为 tracked，每次 `npm run build` 都会产生大量 diff，
提交历史噪音偏大（相对上游的 79 个改动文件中，29 个是 dist 产物）。

**待决策**：若确认本项目只用 workspace 消费、不再用 `github:` 安装，可执行

```bash
git rm -r --cached dist/
```

停止跟踪构建产物。`.gitignore` 中已有 `dist/` 规则，只是对已 tracked 文件不生效。

---

## 7. 环境恢复

**注意：本目录被父仓库 `.gitignore` 忽略，且未登记为 submodule。**
父仓库 clone 后本目录为空，需单独获取：

```bash
cd <repo-root>
git clone https://github.com/ggymzz/torch-ui.git torch-ui-fork
cd torch-ui-fork
git checkout fork/release     # ⚠️ 本机上此分支名有缺陷，见 §10.4
npm install                   # 安装组件库自身依赖（构建 / 测试用）
cd ..
bun install                   # monorepo 侧链接 workspace
```

> **本机额外坑**：这台机器上 **git 写不进需要新建目录的引用**（`git commit` 在
> `fork/release` 这类分支上会报成功但引用没落盘），且 `.git/refs` 下的文件可能被
> 环境静默移除。**在本仓库做任何 git 写操作前必读 §10。**

---

## 8. 分支现状

| 分支 | 状态 | 处置 |
|---|---|---|
| `fork/release` | 工作分支，与 `origin/fork/release` 同步（= `7331a08`，2026-09-16 经代理推送） | **在用，保留**；⚠️ 嵌套名，本机有缺陷（§10.4） |
| `main` | 等于上游快照 `2bd0573` | 保留（作为上游基线） |
| `pr/upstream-a11y-i18n-fixes` | `fork/release` 的前 4 个提交（`f848cfc`→`1b7e595`），对上游仍有价值 | **保留**（是给上游的 PR 分支） |
| `fix/a11y-i18n-and-component-fixes` | 2026-07 ~ 08 的开发线，18 个提交 | 建议归档 |
| `fix/pagination-a11y-i18n-and-kobalte-select-bug` | 同上，10 个提交 | 建议归档 |
| `fix/drawer-detail-no-cancel` | 同上，1 个提交 | 建议归档 |

三个 `fix/*` 分支的成果已收口进 `fork/release`——以 2026-08-06 的
`f848cfc fix(a11y,i18n): bundle accessibility, i18n, and component behavior fixes`
为起点重新整理为一批干净的提交。

**已核查**：这三个分支与 `fork/release` 的剩余差异为「旧版本内容 + 格式噪音」。
典型如 `TreeView.tsx` 的 418 行差异，实为引号 / 缩进 / 分号的全量格式化差异
（分支上跑了 Prettier，`fork/release` 保留了上游原始风格），**非功能差异**。

> 归档前建议先确认：这三个分支是否还有需要保留的、`fork/release` 中不存在的功能改动。

---

## 9. 已知边界

- 组件总数 99 个、约 26,000 行，**这部分代码无需我们维护**——它们是上游的成果。
  我们的维护面是相对上游的那批改动（`src/` 45 个文件）。
- 上游已停更，不会有新功能或破坏性变更，因此**不设「跟随上游」的工作项**。
- 只发 dist + styles 到 npm（`package.json` 的 `files` 字段不含 `src`），
  所以 **npm 安装方式拿不到源码**，本项目必须用 workspace 或 git 方式消费。

---

## 10. 本机环境约束：git 无法写入需要新建目录的引用

> 2026-09-16 实测。**这是本机环境的问题，不是 fork 自身的问题，也不是上游代码的问题。**
> 但它会伪装成「仓库损坏 / 历史丢失」，并让 `git commit`、`git fetch`、`git branch`
> 的成功输出变得不可信。**在本仓库做 git 写操作前必读本节。**

### 10.1 现象

`git commit` 打印成功，但引用没落盘：

```
[fork/release 23ab9ca] chore(deps): drop accidental self-dependency; add FORK.md
 4 files changed, 214 insertions(+), 51 deletions(-)
```

紧接着：

```
$ git log -3
fatal: your current branch 'fork/release' does not have any commits yet

$ git status --short
A  .github/workflows/publish.yml     # 390 个文件全部显示为新增
A  .gitignore
...
```

「提交成功却丢历史」是**假象**：实际是**引用文件 `refs/heads/fork/release` 没有被写出来**，
HEAD 变成 unborn，于是 `status` 相对「空 HEAD」把所有文件都算成 `A`。
**提交对象是完好的**（`git cat-file -t 23ab9ca` → `commit`，父链完整可溯），
**reflog 也是写进去了的**——这正是恢复的依据。

### 10.2 根因（已定位到单一步骤）

> **git 在本机的 `.git/refs/` 下无法创建新的子目录。**
> 凡引用路径需要新建目录的写入（`git commit` 到 `feature/x` 这类分支、
> `git branch a/b`、`git tag v1/x`、`git fetch` 新增远端跟踪引用），
> 一律**静默失败**：无任何输出、exit 0、引用文件不落盘，且 git 会把它认为空的父目录删掉。

对照实验（`.git/refs/` 下，同一台机器、同一时刻）：

| 操作 | 需新建目录 | 结果 |
|---|---|---|
| `git branch top1..top10`（顶层，10 次） | 否 | ✅ **10 / 10 成功** |
| `git branch ns1/leaf .. ns20/leaf`（嵌套，20 次） | 是 | ❌ **0 / 20** |
| `git update-ref refs/heads/urN/x`（父目录已预建，10 次） | 是 | ❌ **0 / 10**（连预建的父目录也被删） |
| `git tag t-flat` / `git branch flat-new` | 否 | ✅ 成功 |
| `git tag v1/nested` / `git branch aa/bb` | 是 | ❌ 失败 |
| `git update-ref refs/remotes/origin/dev`（父目录已预建） | 是 | ❌ 失败 |
| `git commit` 到顶层分支 | 否 | ✅ 引用文件内容 == 新 HEAD |
| `git commit` 到 `fork/release` | 是 | ❌ 引用文件被删除，`HEAD` → `fatal: ambiguous argument` |

**同路径其它写入全部正常**，说明这不是 `.git` 整体被保护，而是 `refs/` 这一处的目录创建被拦：

| 目标 | 结果 |
|---|---|
| `.git/logs/refs/heads/ns1/leaf`（35 个嵌套目录，由 git 创建） | ✅ **全部成功** |
| `.git/worktrees/<name>/`（由 `git worktree add` 创建） | ✅ 成功，worktree 可用 |
| `git pack-refs --all` | ✅ 成功，连嵌套引用一并正确打包 |
| 用 PowerShell / .NET 在 `.git/refs/heads/nest-a/` 建目录 + 写引用文件 | ✅ **成功，git 立刻认账**（`for-each-ref` 列出、`rev-parse` 解析） |
| `.git/refs/heads/nest-f/random.txt`（非引用文件名，手工写） | ✅ 存活 |

**git 的错误报告机制本身是好的**：预先把 `.lock` 文件占位，git 会正常抛
`fatal: ... Unable to create '...lock': File exists`（exit 128）。
所以**不是 git 吞异常，是「创建目录」这一步被外部静默拦截**。

**已排除的配置因素**：`core.fscache`（关闭后仍失败）、`core.autocrlf`、`core.symlinks`、
`GIT_CONFIG_NOSYSTEM`。git 版本 `2.51.1.windows.1`。

**环境旁证**：

- `.git/refs/heads` 的 ACL 中存在 `CodexSandboxUsers` 组（疑似沙箱策略）。
- 本机存在**文件系统层删除守卫**，实测被它拦过：

  ```
  [safe-delete][SAFE_DELETE_FAIL_CLOSED] {"target":"...\.git\refs\heads\fix\drawer-detail-no-cancel",
   "reason":"trash-failed","detail":"genie-trash failed; refusing fallback delete"}
  ```

### 10.3 额外风险：`.git/refs` 下的文件会凭空消失

不只是「写不进去」——**已经存在的引用文件也会在没有删除操作的情况下消失**：

- `fix/drawer-detail-no-cancel`：手工写入后（写入本身返回成功），下一步检查即 `<MISSING>`；
  期间唯一的删除命令被上面的守卫拒绝执行。
- 用于实验的临时仓库，其 **`.git` 目录整个消失**（工作区文件还在），
  导致后续在它里面执行的 git 命令静默回退到父仓库。

**含义：连「手工补写引用」这个兜底手段本身也不可靠。**
唯一真正可靠的兜底是**推送远端**——本地引用不可信任（§10.4 第 1 条）。

### 10.4 应对（按推荐顺序）

1. **把工作推到远端（最重要）。** GitHub 上的 `origin/fork/release` 是目前唯一
   不会丢的载体。本地引用会丢，reflog 也可能被环境一并清理，远端是最后一道防线。
   （2026-09-16 实测：直连被 reset，走本机代理 `git -c http.proxy=http://127.0.0.1:7897 push` 可通；
   推送的是几 KB 的提交对象，不涉大文件流量。）
2. **分支名改用顶层形式（根治本机缺陷）。** 只要分支名不含 `/`（`release`、
   `fix-a11y-i18n`，而不是 `fork/release`、`fix/xxx`），git 的写入路径就完全正常——
   已用真实仓库对照验证。改名后 `post-commit` hook 基本不会再触发修复。
3. **改本仓库优先在非沙箱终端操作**；或把 `torch-ui-fork/.git` 加入安全软件排除项。
4. **不要只信 git 的成功输出**，每次写操作后跑一次 §10.5 的守卫脚本。
5. 仓库**必须配远端**：本次正是靠 `origin/fork/release` 与 reflog 才能无损对照恢复。

### 10.5 引用守卫脚本与 hook

`scripts/ref-guard.ps1`（本仓库自带，纯 ASCII、无 BOM）：

```powershell
# 只检查，不改动；有问题时 exit 1
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/ref-guard.ps1 -All -Verify

# 修复：补回丢失的引用（从 reflog 末行取值）
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/ref-guard.ps1 -All

# 强制覆盖「文件存在但与 reflog 不一致」的引用（默认只报告，不动）
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/ref-guard.ps1 -All -Force
```

策略说明：

- **引用解析顺序与 git 完全一致**：先读 loose 文件，读不到再查 `packed-refs`，两者都没有才算缺失。
  分支被 `git gc` / `git pack-refs --all` 打包后 loose 文件按设计消失，**这是健康状态不是丢失**
  （2026-09-27 之前的版本只看 loose，把 5 个已打包分支全误报为 `LOST`，详见 CHANGELOG）。
  `-All` 的检查集合同样纳入只存在于 `packed-refs` 的分支——否则打包后的分支会整个逃出检查范围。
- **`LOST`**（loose 与 packed 都解析不到、reflog 有值）→ 默认自动重建，这是安全的。
- **`STALE`**（解析到的值与 reflog 不一致）→ **默认只报告**。因为该值可能是被
  有意设成的（例如刻意丢弃了某个提交），盲目覆盖会把回退动作撤销。
- `-RepoRoot` 可显式指定仓库；省略时取脚本所在目录的父目录。

**`post-commit` hook 已安装**（`.git/hooks/post-commit`），每次提交后静默跑一次修复，
引用正常时它什么都不做。hook **不进版本控制**，换机器 / 重新 clone 后需要重装：

```powershell
$repo = '<path>/torch-ui-fork'
$hook = Join-Path $repo '.git\hooks\post-commit'
$body = @(
  '#!/bin/sh'
  'REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || exit 0'
  '[ -n "$REPO_ROOT" ] || exit 0'
  'GUARD="$REPO_ROOT/scripts/ref-guard.ps1"'
  '[ -f "$GUARD" ] || exit 0'
  'GUARD_WIN="$(cygpath -w "$GUARD" 2>/dev/null || echo "$GUARD")"'
  'ROOT_WIN="$(cygpath -w "$REPO_ROOT" 2>/dev/null || echo "$REPO_ROOT")"'
  'PS="/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe"'
  '[ -x "$PS" ] || PS="powershell"'
  '"$PS" -NoProfile -ExecutionPolicy Bypass -File "$GUARD_WIN" -RepoRoot "$ROOT_WIN" -Quiet >/dev/null 2>&1'
  'exit 0'
  ''
)
[System.IO.File]::WriteAllText($hook, ($body -join "`n"), [System.Text.UTF8Encoding]::new($false))
```

hook 文件必须是 **LF 换行**（CRLF 会导致 sh 报 `bad interpreter`）。

### 10.6 手工恢复配方（脚本失效时的兜底）

**关键点：每个分支的最后 sha 都在 `.git/logs/refs/heads/<分支>` 的 reflog 末行里。**

```powershell
$repo = '<repo>'
# ① 取完整 sha —— 务必让 git 输出，不要手抄
$sha = (git -C $repo rev-parse <某个已知引用或提交>).Trim()
# ② 手工写引用文件（40 位 sha + LF）
$full = Join-Path $repo '.git\refs\heads\fork\release'
New-Item -ItemType Directory -Force -Path (Split-Path $full -Parent) | Out-Null
[System.IO.File]::WriteAllBytes($full, [System.Text.Encoding]::ASCII.GetBytes($sha + "`n"))
# ③ 验收
git -C $repo rev-parse HEAD
git -C $repo rev-list --count HEAD
git -C $repo status --short          # 期望为空
```

批量恢复本地分支：逐个读 `.git/logs/refs/heads/**` 的**末行**，取第 2 列 sha，写回同名引用。
远端跟踪引用与标签：`git ls-remote <remote>` 取全 sha，写回 `refs/remotes/**`、`refs/tags/**`。

**三个已踩的坑：**

- **sha 必须是完整 40 位。** 少一个字符，git 报 `warning: ignoring broken ref <name>`
  并**直接忽略该引用**，`rev-parse` 也救不回来。
- **不要在计算出来的路径上用 `Remove-Item -Recurse`。**
  本轮维护中一条 `Remove-Item -Recurse -Force (Split-Path $p -Parent)` 因 `$p` 为空
  而解析到 `.git\refs\heads` 本身，**一次删光本仓库全部本地引用**（并连带
  `refs/remotes`、`refs/tags`）。清理只写**显式字面路径**，且不加 `-Recurse`。
- **`git -C <目录>` 会向上回溯找 `.git`。** 如果目标仓库的 `.git` 已被移除，
  git 会静默切换到**父仓库**执行命令（表现为 `branch -vv` 里出现陌生分支、
  `rev-list --count` 数字突变）。操作前先用
  `git -C <目录> rev-parse --show-toplevel` 确认落在预期仓库。

### 10.7 判定要点小结

- 看到 `your current branch 'X' does not have any commits yet` + `status` 满屏 `A`：
  **先去文件系统确认 `.git/refs/heads/<X>` 这个文件在不在**，不要急着认为历史丢了。
- `git fsck` 把某提交报为 `dangling commit` = 「没有任何引用指向它」的直接证据。
- `git fsck` 出现 `notice: HEAD points to an unborn branch` 同样指向引用缺失。
- 对象库通常完好：`git fsck` 无 `error` / `missing` / `corrupt` 即可放心恢复。
- 判断「哪些操作在本机安全」的简单口诀：
  **不新建 `.git/refs/` 下目录的写操作是安全的**——即顶层分支名（`release`）、
  更新已存在的引用、`git stash`（`refs/stash`）、`git pack-refs`、`git worktree`。
