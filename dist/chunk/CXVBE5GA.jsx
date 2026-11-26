import {
  Progress,
  resolveLocale,
  useIcons,
  useLocaleConfig
} from "./5X6JRKCS.jsx";
import {
  cn
} from "./N5KQYWCA.jsx";

// src/components/feedback/Banner.tsx
import { splitProps, Show, createSignal, onCleanup } from "solid-js";
var statusClasses = {
  primary: {
    solid: "bg-primary-500 text-white",
    subtle: "bg-primary-100 border-y border-primary-500 text-primary-800"
  },
  info: {
    solid: "bg-info-500 text-white",
    subtle: "bg-info-100 border-y border-info-500 text-info-800"
  },
  success: {
    solid: "bg-success-500 text-white",
    subtle: "bg-success-100 border-y border-success-500 text-success-800"
  },
  warning: {
    solid: "bg-warning-500 text-white",
    subtle: "bg-warning-100 border-y border-warning-500 text-warning-800"
  },
  error: {
    solid: "bg-danger-500 text-white",
    subtle: "bg-danger-100 border-y border-danger-500 text-danger-800"
  }
};
function Banner(props) {
  const [local, others] = splitProps(props, [
    "status",
    "appearance",
    "icon",
    "action",
    "closeable",
    "onClose",
    "sticky",
    "colorClass",
    "class",
    "children"
  ]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  if (false) {
  }
  const status = () => local.status ?? "primary";
  const appearance = () => local.appearance ?? "solid";
  const colorCls = () => local.colorClass ?? statusClasses[status()][appearance()];
  const icons = useIcons();
  const [closing, setClosing] = createSignal(false);
  let closeTimer;
  onCleanup(() => clearTimeout(closeTimer));
  const handleClose = () => {
    setClosing(true);
    closeTimer = setTimeout(() => local.onClose?.(), 180);
  };
  return <div
    class={cn(
      "flex w-full items-center gap-3 px-4 py-2.5 text-sm overflow-hidden",
      colorCls(),
      local.sticky === "top" && "sticky top-0 z-40",
      local.sticky === "bottom" && "sticky bottom-0 z-40",
      closing() ? "animate-banner-out" : "animate-banner-in",
      local.class
    )}
    {...others}
  >
			<div class="mx-auto flex w-full max-w-6xl items-center gap-3">
				<Show when={local.icon}>
					<span class="shrink-0 [&>svg]:size-4" aria-hidden="true">{local.icon}</span>
				</Show>
				<span class="flex-1">{local.children}</span>
				<Show when={local.action}>
					<span class="shrink-0">{local.action}</span>
				</Show>
				<Show when={local.closeable && local.onClose}>
					<button
    type="button"
    onClick={handleClose}
    class="ml-auto shrink-0 rounded p-1 opacity-70 hover:opacity-100 outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-inset"
    aria-label={zh() ? "\u5173\u95ED" : "Dismiss"}
  >
						{icons.close({ class: "size-4", "aria-hidden": "true" })}
					</button>
				</Show>
			</div>
		</div>;
}

// src/components/feedback/password/PasswordStrengthIndicator.tsx
import { createMemo, createUniqueId, Show as Show2, splitProps as splitProps2 } from "solid-js";
var DEFAULT_MESSAGES = {
  empty: { label: "", helperText: "Enter a password to see strength." },
  poor: { label: "Poor", helperText: "Your password is easily guessable. You can do better." },
  fair: { label: "Average", helperText: "Getting there, but could be stronger." },
  good: { label: "Strong", helperText: "Your password is great. Nice work!" },
  excellent: { label: "Very Strong", helperText: "Excellent password. Nice work!" }
};
var DEFAULT_COLORS = {
  empty: { bg: "", textColor: "text-ink-500" },
  poor: { bg: "bg-danger-500", textColor: "text-danger-600" },
  fair: { bg: "bg-amber-500", textColor: "text-amber-600" },
  good: { bg: "bg-success-500", textColor: "text-success-600" },
  excellent: { bg: "bg-success-500", textColor: "text-success-600" }
};
function PasswordStrengthIndicator(props) {
  const [local] = splitProps2(props, [
    "strength",
    "score",
    "details",
    "class",
    "showHelperText",
    "messages",
    "title",
    "segments"
  ]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const helperId = `psi-helper-${createUniqueId()}`;
  const segmentCount = () => local.segments ?? 8;
  const messages = createMemo(() => {
    const msgs = { ...DEFAULT_MESSAGES };
    if (local.messages) {
      Object.entries(local.messages).forEach(([key, value]) => {
        if (value) {
          msgs[key] = { ...msgs[key], ...value };
        }
      });
    }
    return msgs;
  });
  const cfg = createMemo(() => messages()[local.strength]);
  const colors = createMemo(() => DEFAULT_COLORS[local.strength]);
  const helperText = createMemo(() => {
    if (local.strength === "empty") return cfg().helperText;
    const customHelper = cfg().helperText;
    if (customHelper && !customHelper.includes("requirements")) {
      return customHelper;
    }
    if ((local.strength === "poor" || local.strength === "fair") && local.details) {
      const failed = local.details.filter((d) => !d.passed && !d.optional);
      if (failed.length === 0) return customHelper;
      if (failed.length === 1) return `Must contain ${failed[0].name}.`;
      return `Must contain ${failed.slice(0, -1).map((d) => d.name).join(", ")}, and ${failed[failed.length - 1].name}.`;
    }
    return customHelper;
  });
  const isEmpty = () => local.strength === "empty";
  const title = () => local.title ?? "Password Strength";
  const score = () => local.score ?? 0;
  return <div class={cn("mt-1.5", local.class)}>
			<div class="flex items-center justify-between mb-1.5">
				<span class="text-sm font-medium text-ink-700">{title()}</span>
				<Show2 when={cfg().label}>
					<span class={cn("text-sm font-medium", colors().textColor)}>{cfg().label}</span>
				</Show2>
			</div>
			<Progress
    value={score()}
    segments={segmentCount()}
    fillClass={colors().bg}
    trackClass="bg-transparent"
    showValueLabel={false}
    aria-label={isEmpty() ? zh() ? "\u5BC6\u7801\u5F3A\u5EA6\uFF1A\u672A\u8BBE\u7F6E" : "Password strength: not set" : zh() ? `\u5BC6\u7801\u5F3A\u5EA6\uFF1A${cfg().label}` : `Password strength: ${cfg().label}`}
    aria-describedby={local.showHelperText !== false ? helperId : void 0}
  />
			<Show2 when={local.showHelperText !== false && helperText()}>
				<p
    id={helperId}
    class={cn(
      "mt-1.5 text-sm",
      local.strength === "poor" || local.strength === "fair" ? "text-ink-600" : "text-ink-500"
    )}
  >
					{helperText()}
				</p>
			</Show2>
		</div>;
}

// src/components/feedback/password/password-validation-data.ts
var COMMON_WORDS = [
  "password",
  "admin",
  "welcome",
  "letmein",
  "welcome1",
  "monkey",
  "dragon",
  "master",
  "sunshine",
  "princess",
  "football",
  "iloveyou",
  "admin123",
  "root",
  "pass",
  "passw0rd",
  "password1",
  "qwerty123",
  "abc123",
  "admin1",
  "welcome123"
];
var KEYBOARD_WALKS = [
  "qwertyuiop",
  "asdfghjkl",
  "qazwsx",
  "1qaz2wsx",
  "qweasd",
  "123qwe",
  "qwe123",
  "poiuyt",
  "lkjhgf",
  "mnbvcx",
  "1q2w3e4r",
  "q1w2e3r4",
  "zaq1wsx",
  "xsw2zaq"
];
var SEQUENTIAL_DIGITS = [
  "0123456789",
  "1234567890",
  "9876543210",
  "0987654321"
];
var SEQUENTIAL_LETTERS = [
  "abcdefghijklmnopqrstuvwxyz",
  "zyxwvutsrqponmlkjihgfedcba"
];

// src/components/feedback/password/password-validation.ts
function containsBlockedPattern(trimmed) {
  const lower = trimmed.toLowerCase();
  for (const word of COMMON_WORDS) {
    if (lower === word || lower.includes(word)) {
      return "Password contains a common word. Choose something more unique.";
    }
  }
  for (const walk of KEYBOARD_WALKS) {
    if (lower.includes(walk)) {
      return "Password contains a common keyboard pattern.";
    }
  }
  for (const seq of SEQUENTIAL_DIGITS) {
    if (lower.includes(seq)) {
      return "Password contains sequential numbers.";
    }
  }
  for (const seq of SEQUENTIAL_LETTERS) {
    if (lower.includes(seq)) {
      return "Password contains sequential letters.";
    }
  }
  if (/(.)\1{2,}/.test(trimmed)) {
    return "Password contains too many repeated characters.";
  }
  if (trimmed.length >= 6) {
    for (let len = 1; len <= 3; len++) {
      const pattern = lower.slice(0, len);
      let repeats = 1;
      for (let i = len; i < lower.length; i += len) {
        if (lower.slice(i, i + len) === pattern) repeats++;
        else break;
      }
      if (repeats >= 3 && repeats * len >= 6) {
        return "Password is too repetitive.";
      }
    }
  }
  return null;
}
function validatePassword(password) {
  const p = password.trim();
  if (p.length < 8) {
    return { valid: false, error: "Password must be at least 8 characters" };
  }
  const error = containsBlockedPattern(p);
  return error ? { valid: false, error } : { valid: true };
}
function isPasswordWeak(password) {
  const p = password.trim();
  if (!p) return false;
  return containsBlockedPattern(p) !== null;
}

// src/components/feedback/Loading.tsx
import { Show as Show4, splitProps as splitProps4 } from "solid-js";

// src/components/feedback/SkeletonBlocks.tsx
import { For, Show as Show3, splitProps as splitProps3 } from "solid-js";
var range = (n) => Array.from({ length: n }, (_, i) => i);
var SKELETON_CLASS = "animate-pulse";
var BAR = "rounded bg-ink-200";
var BAR_LIGHT = "rounded bg-surface-overlay";
var CARD_BASE = "rounded-xl border border-surface-border bg-surface-raised";
var TABLE_HEAD = "border-b border-surface-border";
var TABLE_DIVIDE = "divide-y divide-surface-border";
function SkeletonCard(props) {
  const [local] = splitProps3(props, ["header", "bodyLines", "horizontal", "class"]);
  const header = () => local.header !== false;
  const bodyLines = () => local.bodyLines ?? 2;
  const horizontal = () => local.horizontal === true;
  return <div
    class={cn(
      SKELETON_CLASS,
      CARD_BASE,
      horizontal() ? "flex flex-row overflow-hidden" : "flex flex-col",
      local.class
    )}
    aria-hidden="true"
  >
			<Show3 when={horizontal()}>
				<div class="h-24 w-24 shrink-0 rounded-l-xl bg-surface-overlay sm:h-28 sm:w-28" />
			</Show3>
			<div class="min-w-0 flex-1 flex flex-col">
				<Show3 when={header()}>
					<div class="flex shrink-0 items-center justify-between gap-3 border-b border-surface-border px-6 py-4">
						<div class={cn("h-5 w-32", BAR)} />
					</div>
				</Show3>
				<div class="flex flex-1 flex-col gap-2 p-6">
					<For each={range(bodyLines())}>
						{(i) => <div
    class={cn("h-4 rounded", BAR_LIGHT)}
    style={{ width: `${Math.max(50, 90 - (i + 1) * 15)}%` }}
  />}
					</For>
				</div>
			</div>
		</div>;
}
function SkeletonTable(props) {
  const [local] = splitProps3(props, ["rows", "columns", "class"]);
  const rows = () => local.rows ?? 5;
  const columns = () => local.columns ?? 4;
  return <div class={cn(SKELETON_CLASS, "overflow-hidden rounded-xl border border-surface-border bg-surface-raised", local.class)} aria-hidden="true">
			<div class={cn("flex gap-4 px-6 py-3", TABLE_HEAD)}>
				<For each={range(columns())}>
					{() => <div class={cn("h-4 flex-1 rounded", BAR_LIGHT)} />}
				</For>
			</div>
			<div class={TABLE_DIVIDE}>
				<For each={range(rows())}>
					{() => <div class="flex gap-4 px-6 py-4">
							<For each={range(columns())}>
								{() => <div class={cn("h-4 flex-1 rounded", BAR_LIGHT)} />}
							</For>
						</div>}
				</For>
			</div>
		</div>;
}
function SkeletonSection(props) {
  const [local] = splitProps3(props, ["description", "content", "contentLines", "class"]);
  const description = () => local.description !== false;
  const content = () => local.content !== false;
  const contentLines = () => local.contentLines ?? 3;
  return <div class={cn(SKELETON_CLASS, "space-y-4", local.class)} aria-hidden="true">
			<div>
				<div class={cn("h-7 w-48 rounded", BAR)} />
				<Show3 when={description()}>
					<div class={cn("mt-2 h-4 max-w-md rounded", BAR_LIGHT)} />
				</Show3>
			</div>
			<Show3 when={content()}>
				<div class="rounded-xl border border-surface-border bg-surface-raised p-6">
					<div class="flex flex-col gap-3">
						<For each={range(contentLines())}>
							{(i) => <div
    class={cn("h-4 rounded", BAR_LIGHT)}
    style={{ width: `${90 - (i + 1) * 10}%` }}
  />}
						</For>
					</div>
				</div>
			</Show3>
		</div>;
}
function SkeletonHeading(props) {
  const [local] = splitProps3(props, ["description", "class"]);
  const description = () => local.description !== false;
  return <div class={cn(SKELETON_CLASS, local.class)} aria-hidden="true">
			<div class={cn("h-8 w-48 rounded", BAR)} />
			<Show3 when={description()}>
				<div class={cn("mt-2 h-4 max-w-sm rounded", BAR_LIGHT)} />
			</Show3>
		</div>;
}
function SkeletonForm(props) {
  const [local] = splitProps3(props, ["fields", "buttons", "class"]);
  const fields = () => local.fields ?? 2;
  const buttons = () => local.buttons ?? 2;
  return <div class={cn(SKELETON_CLASS, "space-y-4 rounded-xl border border-surface-border bg-surface-raised p-6", local.class)} aria-hidden="true">
			<For each={range(fields())}>
				{() => <div class="space-y-1">
						<div class={cn("h-4 w-32 rounded", BAR_LIGHT)} />
						<div class={cn("h-10 w-full rounded-lg", BAR_LIGHT)} />
					</div>}
			</For>
			<div class="flex gap-2 pt-2">
				<For each={range(buttons())}>
					{() => <div class={cn("h-10 w-24 rounded-lg", BAR)} />}
				</For>
			</div>
		</div>;
}
function SkeletonNavBlock(props) {
  const [local] = splitProps3(props, ["items", "class"]);
  const items = () => local.items ?? 4;
  return <div class={cn(SKELETON_CLASS, "space-y-2", local.class)} aria-hidden="true">
			<div class={cn("h-3 w-20 rounded", BAR)} />
			<div class="space-y-0.5">
				<For each={range(items())}>
					{() => <div class={cn("h-9 rounded-lg", BAR_LIGHT)} />}
				</For>
			</div>
		</div>;
}

// src/components/feedback/Loading.tsx
function Loading(props) {
  const [local, others] = splitProps4(props, [
    "variant",
    "class",
    "message",
    "iconOnly",
    "size",
    "icon",
    "minHeight",
    "aria-label"
  ]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const variant = () => local.variant ?? "spinner";
  if (variant() === "spinner") {
    const iconOnly = () => local.iconOnly === true;
    const size = () => local.size ?? "md";
    const sizeClasses = () => size() === "sm" ? "h-4 w-4" : size() === "lg" ? "h-6 w-6" : "h-5 w-5";
    const minHeight = () => local.minHeight != null ? typeof local.minHeight === "number" ? `${local.minHeight}px` : local.minHeight : iconOnly() ? void 0 : "200px";
    const defaultIcon = () => icons.spinner({ class: cn("shrink-0 animate-spin text-ink-400", sizeClasses()), "aria-hidden": "true" });
    const resolvedIcon = () => local.icon ?? defaultIcon();
    const label = () => local["aria-label"] ?? (iconOnly() ? local.message ?? (zh() ? "\u52A0\u8F7D\u4E2D" : "Loading") : void 0);
    return <div
      {...others}
      class={cn("flex items-center justify-center gap-2", local.class)}
      style={minHeight() ? { "min-height": minHeight() } : void 0}
      role="status"
      aria-live="polite"
      aria-label={label()}
    >
				<span aria-hidden="true">{resolvedIcon()}</span>
				<Show4 when={!iconOnly()}>
					<span
      class="text-sm text-ink-500"
      aria-hidden={local["aria-label"] ? "true" : void 0}
    >
						{local.message ?? (zh() ? "\u52A0\u8F7D\u4E2D\u2026" : "Loading\u2026")}
					</span>
				</Show4>
			</div>;
  }
  return <div {...others} class={cn(local.class)} role="status" aria-live="polite" aria-atomic="true" aria-label={zh() ? "\u52A0\u8F7D\u4E2D" : "Loading"}>
			{variant() === "dashboard" ? <DashboardSkeletonLayout /> : variant() === "tablePage" ? <TablePageSkeletonLayout /> : variant() === "admin" ? <AdminSkeletonLayout /> : <GenericSkeletonLayout />}
		</div>;
}
function DashboardSkeletonLayout() {
  return <div class="space-y-8">
			<SkeletonHeading />
			<div class="grid gap-6 sm:grid-cols-2">
				<SkeletonCard header bodyLines={2} />
				<SkeletonCard header bodyLines={2} />
			</div>
		</div>;
}
function TablePageSkeletonLayout() {
  return <div class="space-y-6">
			<div class="mb-6">
				<SkeletonHeading />
			</div>
			<div class="mb-6 flex flex-wrap items-center justify-between gap-4">
				<div class="flex min-w-0 max-w-2xl flex-1 items-center gap-4">
					<div class="h-10 min-w-0 flex-1 rounded-lg bg-surface-overlay animate-pulse" />
					<div class="h-10 w-28 rounded-lg bg-surface-overlay animate-pulse" />
				</div>
				<div class="flex items-center gap-2">
					<div class="h-10 w-20 rounded-lg bg-surface-overlay animate-pulse" />
					<div class="h-10 w-28 rounded-lg bg-surface-overlay animate-pulse" />
				</div>
			</div>
			<SkeletonTable rows={6} columns={5} />
		</div>;
}
function AdminSkeletonLayout() {
  return <div class="flex gap-8">
			<aside class="w-64 flex-shrink-0 space-y-6">
				<SkeletonNavBlock items={3} />
				<SkeletonNavBlock items={5} />
			</aside>
			<div class="min-w-0 flex-1 space-y-6">
				<SkeletonHeading />
				<SkeletonForm fields={2} buttons={2} />
			</div>
		</div>;
}
function GenericSkeletonLayout() {
  return <div class="space-y-6">
			<SkeletonSection description content contentLines={3} />
		</div>;
}

// src/components/feedback/Toast.tsx
import { createSignal as createSignal2, createContext, useContext, onCleanup as onCleanup2, For as For2, Show as Show5, splitProps as splitProps5, onMount, createEffect } from "solid-js";
import { Portal } from "solid-js/web";
var toastSeq = 0;
var newToastId = () => `toast-${++toastSeq}`;
var ToastContext = createContext(null);
function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
function ToastProvider(props) {
  const [local] = splitProps5(props, ["children", "position", "defaultAppearance", "hotkey", "maxToasts"]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const [toasts, setToasts] = createSignal2([]);
  const timers = /* @__PURE__ */ new Map();
  const [regionRef, setRegionRef] = createSignal2(null);
  const position = () => local.position ?? "bottom-right";
  const hotkey = () => local.hotkey ?? "Alt+T";
  const maxToasts = () => local.maxToasts ?? 5;
  const startTimer = (id, duration) => {
    const existing = timers.get(id);
    if (existing?.timer != null) clearTimeout(existing.timer);
    const timer = setTimeout(() => {
      if (!timers.has(id)) return;
      timers.delete(id);
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
    if (existing) {
      existing.timer = timer;
      existing.remaining = duration;
      existing.startedAt = Date.now();
      existing.paused = false;
    } else {
      timers.set(id, { timer, remaining: duration, startedAt: Date.now(), paused: false });
    }
  };
  const clearTimer = (id) => {
    const entry = timers.get(id);
    if (entry != null) {
      if (entry.timer != null) clearTimeout(entry.timer);
      timers.delete(id);
    }
  };
  const pauseTimer = (id) => {
    const entry = timers.get(id);
    if (entry == null || entry.paused) return;
    if (entry.timer != null) clearTimeout(entry.timer);
    entry.timer = null;
    entry.remaining = Math.max(0, entry.remaining - (Date.now() - entry.startedAt));
    entry.paused = true;
  };
  const resumeTimer = (id) => {
    const entry = timers.get(id);
    if (entry == null || !entry.paused) return;
    if (entry.remaining <= 0) {
      timers.delete(id);
      setToasts((prev) => prev.filter((t) => t.id !== id));
      return;
    }
    startTimer(id, entry.remaining);
  };
  const show = (title, description, options) => {
    const id = newToastId();
    const isLegacyMessage = title && !description && !options?.variant;
    const item = {
      id,
      title: isLegacyMessage ? void 0 : title,
      description: isLegacyMessage ? void 0 : description,
      message: isLegacyMessage ? title : void 0,
      variant: options?.variant ?? "default",
      appearance: options?.appearance ?? local.defaultAppearance ?? "subtle",
      duration: options?.duration ?? 5e3,
      showProgress: options?.showProgress,
      showIcon: options?.showIcon,
      actionLabel: options?.actionLabel,
      onAction: options?.onAction
    };
    const prev = toasts();
    const next = [...prev, item].slice(-maxToasts());
    if (prev.length >= maxToasts()) {
      const nextIds = new Set(next.map((t) => t.id));
      for (const t of prev) {
        if (!nextIds.has(t.id)) clearTimer(t.id);
      }
    }
    setToasts(next);
    if (item.duration && item.duration > 0) {
      startTimer(id, item.duration);
    }
    return id;
  };
  const dismiss = (id) => {
    clearTimer(id);
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };
  onMount(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        const current = toasts();
        if (current.length > 0) {
          e.preventDefault();
          dismiss(current[current.length - 1].id);
        }
        return;
      }
      const keys = hotkey().split("+").map((k) => k.toLowerCase());
      const alt = keys.includes("alt") && e.altKey;
      const ctrl = keys.includes("ctrl") && e.ctrlKey;
      const shift = keys.includes("shift") && e.shiftKey;
      const meta = keys.includes("meta") && e.metaKey;
      const key = keys.find((k) => !["alt", "ctrl", "shift", "meta"].includes(k));
      if (key && e.key.toLowerCase() === key && alt && !ctrl && !shift && !meta) {
        e.preventDefault();
        regionRef()?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    onCleanup2(() => document.removeEventListener("keydown", handleKeyDown));
  });
  onCleanup2(() => {
    for (const entry of timers.values()) {
      if (entry.timer != null) clearTimeout(entry.timer);
    }
    timers.clear();
  });
  const value = { toasts, show, dismiss };
  return <ToastContext.Provider value={value}>
			{local.children}
			<Portal>
				<div
    ref={setRegionRef}
    tabIndex={-1}
    class={cn(
      "pointer-events-none fixed z-[100] flex gap-2 p-4",
      position().startsWith("bottom") ? "flex-col-reverse" : "flex-col",
      position() === "top-left" && "left-4 top-4",
      position() === "top-right" && "right-4 top-4",
      position() === "bottom-left" && "left-4 bottom-4",
      position() === "bottom-right" && "right-4 bottom-4"
    )}
    role="region"
    aria-label={zh() ? "\u901A\u77E5" : "Notifications"}
  >
					<For2 each={toasts()}>
						{(t) => <ToastItemView
    toast={t}
    timers={timers}
    onDismiss={() => dismiss(t.id)}
    onPause={() => pauseTimer(t.id)}
    onResume={() => resumeTimer(t.id)}
  />}
					</For2>
				</div>
			</Portal>
		</ToastContext.Provider>;
}
var subtleClasses = {
  default: "bg-surface-overlay text-ink-900 border border-surface-border",
  success: "bg-success-50 text-success-800 border border-success-200",
  error: "bg-danger-50 text-danger-800 border border-danger-200",
  warning: "bg-warning-50 text-warning-800 border border-warning-200",
  info: "bg-info-50 text-info-800 border border-info-200"
};
var solidClasses = {
  default: "bg-surface-overlay text-ink-900 border border-surface-border",
  success: "bg-success-600 text-white border border-success-600",
  error: "bg-danger-600 text-white border border-danger-600",
  warning: "bg-warning-500 text-white border border-warning-500",
  info: "bg-info-600 text-white border border-info-600"
};
var variantIconMap = {
  success: "checkCircle",
  error: "alertCircle",
  warning: "triangleAlert",
  info: "infoCircle"
};
function ToastItemView(props) {
  const [local, rest] = splitProps5(props, ["toast", "onDismiss", "onPause", "onResume"]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const t = () => local.toast;
  const variant = () => t().variant ?? "default";
  const appearance = () => t().appearance ?? "subtle";
  const isSolid = () => appearance() === "solid";
  const isAlert = () => variant() === "error" || variant() === "warning";
  const variantClasses = () => isSolid() ? solidClasses[variant()] : subtleClasses[variant()];
  const iconKey = () => variantIconMap[variant()];
  const [progress, setProgress] = createSignal2(100);
  createEffect(() => {
    const id = t().id;
    const interval = setInterval(() => {
      const timer = rest.timers.get(id);
      if (!timer) {
        setProgress(100);
        return;
      }
      if (timer.paused) {
        return;
      }
      const totalDuration = timer.remaining + (Date.now() - timer.startedAt);
      if (totalDuration <= 0) {
        setProgress(100);
        return;
      }
      const elapsed = Date.now() - timer.startedAt;
      const remaining = Math.max(0, timer.remaining - elapsed);
      const percentage = remaining / totalDuration * 100;
      setProgress(percentage);
    }, 50);
    onCleanup2(() => clearInterval(interval));
  });
  return <div
    role={isAlert() ? "alert" : "status"}
    aria-atomic="true"
    tabIndex={0}
    class={cn(
      "relative pointer-events-auto flex min-w-[280px] max-w-md items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm shadow-lg",
      variantClasses()
    )}
    onMouseEnter={local.onPause}
    onMouseLeave={local.onResume}
    onFocusIn={local.onPause}
    onFocusOut={(e) => {
      const next = e.relatedTarget;
      if (next && e.currentTarget.contains(next)) return;
      local.onResume();
    }}
    onKeyDown={(e) => {
      if (e.key === "Escape") local.onDismiss();
    }}
  >
			<Show5 when={t().showIcon !== false && iconKey()}>
				<span class="shrink-0" aria-hidden="true">
					{icons[iconKey()]({ class: "h-4 w-4" })}
				</span>
			</Show5>
			<div class="flex flex-1 flex-col gap-1">
				<Show5 when={t().title}>
					<div class="font-medium" role="heading" aria-level={3}>
						{t().title}
					</div>
				</Show5>
				<Show5 when={t().description}>
					<div class="text-sm opacity-90">
						{t().description}
					</div>
				</Show5>
				<Show5 when={!t().title && !t().description}>
					{
    /* Fallback for legacy single message */
  }
					<div>{t().message}</div>
				</Show5>
			</div>
			<div class="flex shrink-0 items-center gap-2">
				<Show5 when={t().actionLabel && t().onAction}>
					<button
    type="button"
    onClick={() => {
      t().onAction?.();
      local.onDismiss();
    }}
    class="rounded font-medium underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/40"
  >
						{t().actionLabel}
					</button>
				</Show5>
				<button
    type="button"
    aria-label={zh() ? "\u5173\u95ED" : "Dismiss"}
    onClick={local.onDismiss}
    class="shrink-0 rounded p-0.5 opacity-60 hover:opacity-100 hover:bg-current/10 active:bg-current/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/40 transition-opacity"
  >
					{icons.close({ class: "h-4 w-4", "aria-hidden": "true" })}
				</button>
			</div>
			<Show5 when={t().showProgress !== false && t().duration && t().duration > 0}>
				<div class="absolute bottom-0 left-0 h-1 w-full overflow-hidden rounded-b-lg">
					<div
    class="h-full bg-current/20 transition-all duration-75 ease-linear"
    style={{ width: `${progress()}%` }}
    role="progressbar"
    aria-valuenow={progress()}
    aria-valuemin={0}
    aria-valuemax={100}
    aria-label={zh() ? "\u5269\u4F59\u65F6\u95F4" : "Time remaining"}
  />
				</div>
			</Show5>
		</div>;
}

export {
  Banner,
  PasswordStrengthIndicator,
  validatePassword,
  isPasswordWeak,
  SkeletonCard,
  SkeletonTable,
  SkeletonSection,
  SkeletonHeading,
  SkeletonForm,
  SkeletonNavBlock,
  Loading,
  useToast,
  ToastProvider
};
