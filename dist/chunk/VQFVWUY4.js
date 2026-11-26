import { useLocaleConfig, useIcons, Progress, resolveLocale } from './LFPOAP3K.js';
import { cn } from './CZPH5U6S.js';
import { delegateEvents, spread, mergeProps, insert, createComponent, effect, setAttribute, memo, className, setStyleProperty, Portal, use, addEventListener, template } from 'solid-js/web';
import { createContext, splitProps, createSignal, onCleanup, Show, createUniqueId, createMemo, For, useContext, onMount, createEffect } from 'solid-js';

var _tmpl$ = /* @__PURE__ */ template(`<span class="shrink-0 [&amp;>svg]:size-4"aria-hidden=true>`);
var _tmpl$2 = /* @__PURE__ */ template(`<span class=shrink-0>`);
var _tmpl$3 = /* @__PURE__ */ template(`<button type=button class="ml-auto shrink-0 rounded p-1 opacity-70 hover:opacity-100 outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-inset">`);
var _tmpl$4 = /* @__PURE__ */ template(`<div><div class="mx-auto flex w-full max-w-6xl items-center gap-3"><span class=flex-1>`);
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
  const [local, others] = splitProps(props, ["status", "appearance", "icon", "action", "closeable", "onClose", "sticky", "colorClass", "class", "children"]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
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
  return (() => {
    var _el$ = _tmpl$4(), _el$2 = _el$.firstChild, _el$4 = _el$2.firstChild;
    spread(_el$, mergeProps({
      get ["class"]() {
        return cn("flex w-full items-center gap-3 px-4 py-2.5 text-sm overflow-hidden", colorCls(), local.sticky === "top" && "sticky top-0 z-40", local.sticky === "bottom" && "sticky bottom-0 z-40", closing() ? "animate-banner-out" : "animate-banner-in", local.class);
      }
    }, others), false, true);
    insert(_el$2, createComponent(Show, {
      get when() {
        return local.icon;
      },
      get children() {
        var _el$3 = _tmpl$();
        insert(_el$3, () => local.icon);
        return _el$3;
      }
    }), _el$4);
    insert(_el$4, () => local.children);
    insert(_el$2, createComponent(Show, {
      get when() {
        return local.action;
      },
      get children() {
        var _el$5 = _tmpl$2();
        insert(_el$5, () => local.action);
        return _el$5;
      }
    }), null);
    insert(_el$2, createComponent(Show, {
      get when() {
        return memo(() => !!local.closeable)() && local.onClose;
      },
      get children() {
        var _el$6 = _tmpl$3();
        _el$6.$$click = handleClose;
        insert(_el$6, () => icons.close({
          class: "size-4",
          "aria-hidden": "true"
        }));
        effect(() => setAttribute(_el$6, "aria-label", zh() ? "\u5173\u95ED" : "Dismiss"));
        return _el$6;
      }
    }), null);
    return _el$;
  })();
}
delegateEvents(["click"]);
var _tmpl$5 = /* @__PURE__ */ template(`<span>`);
var _tmpl$22 = /* @__PURE__ */ template(`<p>`);
var _tmpl$32 = /* @__PURE__ */ template(`<div><div class="flex items-center justify-between mb-1.5"><span class="text-sm font-medium text-ink-700">`);
var DEFAULT_MESSAGES = {
  empty: {
    label: "",
    helperText: "Enter a password to see strength."
  },
  poor: {
    label: "Poor",
    helperText: "Your password is easily guessable. You can do better."
  },
  fair: {
    label: "Average",
    helperText: "Getting there, but could be stronger."
  },
  good: {
    label: "Strong",
    helperText: "Your password is great. Nice work!"
  },
  excellent: {
    label: "Very Strong",
    helperText: "Excellent password. Nice work!"
  }
};
var DEFAULT_COLORS = {
  empty: {
    bg: "",
    textColor: "text-ink-500"
  },
  poor: {
    bg: "bg-danger-500",
    textColor: "text-danger-600"
  },
  fair: {
    bg: "bg-amber-500",
    textColor: "text-amber-600"
  },
  good: {
    bg: "bg-success-500",
    textColor: "text-success-600"
  },
  excellent: {
    bg: "bg-success-500",
    textColor: "text-success-600"
  }
};
function PasswordStrengthIndicator(props) {
  const [local] = splitProps(props, ["strength", "score", "details", "class", "showHelperText", "messages", "title", "segments"]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const helperId = `psi-helper-${createUniqueId()}`;
  const segmentCount = () => local.segments ?? 8;
  const messages = createMemo(() => {
    const msgs = {
      ...DEFAULT_MESSAGES
    };
    if (local.messages) {
      Object.entries(local.messages).forEach(([key, value]) => {
        if (value) {
          msgs[key] = {
            ...msgs[key],
            ...value
          };
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
  return (() => {
    var _el$ = _tmpl$32(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
    insert(_el$3, title);
    insert(_el$2, createComponent(Show, {
      get when() {
        return cfg().label;
      },
      get children() {
        var _el$4 = _tmpl$5();
        insert(_el$4, () => cfg().label);
        effect(() => className(_el$4, cn("text-sm font-medium", colors().textColor)));
        return _el$4;
      }
    }), null);
    insert(_el$, createComponent(Progress, {
      get value() {
        return score();
      },
      get segments() {
        return segmentCount();
      },
      get fillClass() {
        return colors().bg;
      },
      trackClass: "bg-transparent",
      showValueLabel: false,
      get ["aria-label"]() {
        return memo(() => !!isEmpty())() ? zh() ? "\u5BC6\u7801\u5F3A\u5EA6\uFF1A\u672A\u8BBE\u7F6E" : "Password strength: not set" : memo(() => !!zh())() ? `\u5BC6\u7801\u5F3A\u5EA6\uFF1A${cfg().label}` : `Password strength: ${cfg().label}`;
      },
      get ["aria-describedby"]() {
        return local.showHelperText !== false ? helperId : void 0;
      }
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return memo(() => local.showHelperText !== false)() && helperText();
      },
      get children() {
        var _el$5 = _tmpl$22();
        setAttribute(_el$5, "id", helperId);
        insert(_el$5, helperText);
        effect(() => className(_el$5, cn("mt-1.5 text-sm", local.strength === "poor" || local.strength === "fair" ? "text-ink-600" : "text-ink-500")));
        return _el$5;
      }
    }), null);
    effect(() => className(_el$, cn("mt-1.5", local.class)));
    return _el$;
  })();
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
var _tmpl$6 = /* @__PURE__ */ template(`<div class="h-24 w-24 shrink-0 rounded-l-xl bg-surface-overlay sm:h-28 sm:w-28">`);
var _tmpl$23 = /* @__PURE__ */ template(`<div class="flex shrink-0 items-center justify-between gap-3 border-b border-surface-border px-6 py-4"><div>`);
var _tmpl$33 = /* @__PURE__ */ template(`<div aria-hidden=true><div class="min-w-0 flex-1 flex flex-col"><div class="flex flex-1 flex-col gap-2 p-6">`);
var _tmpl$42 = /* @__PURE__ */ template(`<div>`);
var _tmpl$52 = /* @__PURE__ */ template(`<div aria-hidden=true><div></div><div class="divide-y divide-surface-border">`);
var _tmpl$62 = /* @__PURE__ */ template(`<div class="flex gap-4 px-6 py-4">`);
var _tmpl$7 = /* @__PURE__ */ template(`<div class="rounded-xl border border-surface-border bg-surface-raised p-6"><div class="flex flex-col gap-3">`);
var _tmpl$8 = /* @__PURE__ */ template(`<div aria-hidden=true><div><div>`);
var _tmpl$9 = /* @__PURE__ */ template(`<div aria-hidden=true><div>`);
var _tmpl$0 = /* @__PURE__ */ template(`<div aria-hidden=true><div class="flex gap-2 pt-2">`);
var _tmpl$1 = /* @__PURE__ */ template(`<div class=space-y-1><div></div><div>`);
var _tmpl$10 = /* @__PURE__ */ template(`<div aria-hidden=true><div></div><div class=space-y-0.5>`);
var range = (n) => Array.from({
  length: n
}, (_, i) => i);
var SKELETON_CLASS = "animate-pulse";
var BAR = "rounded bg-ink-200";
var BAR_LIGHT = "rounded bg-surface-overlay";
var CARD_BASE = "rounded-xl border border-surface-border bg-surface-raised";
var TABLE_HEAD = "border-b border-surface-border";
function SkeletonCard(props) {
  const [local] = splitProps(props, ["header", "bodyLines", "horizontal", "class"]);
  const header = () => local.header !== false;
  const bodyLines = () => local.bodyLines ?? 2;
  const horizontal = () => local.horizontal === true;
  return (() => {
    var _el$ = _tmpl$33(), _el$3 = _el$.firstChild, _el$6 = _el$3.firstChild;
    insert(_el$, createComponent(Show, {
      get when() {
        return horizontal();
      },
      get children() {
        return _tmpl$6();
      }
    }), _el$3);
    insert(_el$3, createComponent(Show, {
      get when() {
        return header();
      },
      get children() {
        var _el$4 = _tmpl$23(), _el$5 = _el$4.firstChild;
        effect(() => className(_el$5, cn("h-5 w-32", BAR)));
        return _el$4;
      }
    }), _el$6);
    insert(_el$6, createComponent(For, {
      get each() {
        return range(bodyLines());
      },
      children: (i) => (() => {
        var _el$7 = _tmpl$42();
        effect((_p$) => {
          var _v$ = cn("h-4 rounded", BAR_LIGHT), _v$2 = `${Math.max(50, 90 - (i + 1) * 15)}%`;
          _v$ !== _p$.e && className(_el$7, _p$.e = _v$);
          _v$2 !== _p$.t && setStyleProperty(_el$7, "width", _p$.t = _v$2);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$7;
      })()
    }));
    effect(() => className(_el$, cn(SKELETON_CLASS, CARD_BASE, horizontal() ? "flex flex-row overflow-hidden" : "flex flex-col", local.class)));
    return _el$;
  })();
}
function SkeletonTable(props) {
  const [local] = splitProps(props, ["rows", "columns", "class"]);
  const rows = () => local.rows ?? 5;
  const columns = () => local.columns ?? 4;
  return (() => {
    var _el$8 = _tmpl$52(), _el$9 = _el$8.firstChild, _el$0 = _el$9.nextSibling;
    insert(_el$9, createComponent(For, {
      get each() {
        return range(columns());
      },
      children: () => (() => {
        var _el$1 = _tmpl$42();
        effect(() => className(_el$1, cn("h-4 flex-1 rounded", BAR_LIGHT)));
        return _el$1;
      })()
    }));
    insert(_el$0, createComponent(For, {
      get each() {
        return range(rows());
      },
      children: () => (() => {
        var _el$10 = _tmpl$62();
        insert(_el$10, createComponent(For, {
          get each() {
            return range(columns());
          },
          children: () => (() => {
            var _el$11 = _tmpl$42();
            effect(() => className(_el$11, cn("h-4 flex-1 rounded", BAR_LIGHT)));
            return _el$11;
          })()
        }));
        return _el$10;
      })()
    }));
    effect((_p$) => {
      var _v$3 = cn(SKELETON_CLASS, "overflow-hidden rounded-xl border border-surface-border bg-surface-raised", local.class), _v$4 = cn("flex gap-4 px-6 py-3", TABLE_HEAD);
      _v$3 !== _p$.e && className(_el$8, _p$.e = _v$3);
      _v$4 !== _p$.t && className(_el$9, _p$.t = _v$4);
      return _p$;
    }, {
      e: void 0,
      t: void 0
    });
    return _el$8;
  })();
}
function SkeletonSection(props) {
  const [local] = splitProps(props, ["description", "content", "contentLines", "class"]);
  const description = () => local.description !== false;
  const content = () => local.content !== false;
  const contentLines = () => local.contentLines ?? 3;
  return (() => {
    var _el$12 = _tmpl$8(), _el$13 = _el$12.firstChild, _el$14 = _el$13.firstChild;
    insert(_el$13, createComponent(Show, {
      get when() {
        return description();
      },
      get children() {
        var _el$15 = _tmpl$42();
        effect(() => className(_el$15, cn("mt-2 h-4 max-w-md rounded", BAR_LIGHT)));
        return _el$15;
      }
    }), null);
    insert(_el$12, createComponent(Show, {
      get when() {
        return content();
      },
      get children() {
        var _el$16 = _tmpl$7(), _el$17 = _el$16.firstChild;
        insert(_el$17, createComponent(For, {
          get each() {
            return range(contentLines());
          },
          children: (i) => (() => {
            var _el$18 = _tmpl$42();
            setStyleProperty(_el$18, "width", `${90 - (i + 1) * 10}%`);
            effect(() => className(_el$18, cn("h-4 rounded", BAR_LIGHT)));
            return _el$18;
          })()
        }));
        return _el$16;
      }
    }), null);
    effect((_p$) => {
      var _v$5 = cn(SKELETON_CLASS, "space-y-4", local.class), _v$6 = cn("h-7 w-48 rounded", BAR);
      _v$5 !== _p$.e && className(_el$12, _p$.e = _v$5);
      _v$6 !== _p$.t && className(_el$14, _p$.t = _v$6);
      return _p$;
    }, {
      e: void 0,
      t: void 0
    });
    return _el$12;
  })();
}
function SkeletonHeading(props) {
  const [local] = splitProps(props, ["description", "class"]);
  const description = () => local.description !== false;
  return (() => {
    var _el$19 = _tmpl$9(), _el$20 = _el$19.firstChild;
    insert(_el$19, createComponent(Show, {
      get when() {
        return description();
      },
      get children() {
        var _el$21 = _tmpl$42();
        effect(() => className(_el$21, cn("mt-2 h-4 max-w-sm rounded", BAR_LIGHT)));
        return _el$21;
      }
    }), null);
    effect((_p$) => {
      var _v$7 = cn(SKELETON_CLASS, local.class), _v$8 = cn("h-8 w-48 rounded", BAR);
      _v$7 !== _p$.e && className(_el$19, _p$.e = _v$7);
      _v$8 !== _p$.t && className(_el$20, _p$.t = _v$8);
      return _p$;
    }, {
      e: void 0,
      t: void 0
    });
    return _el$19;
  })();
}
function SkeletonForm(props) {
  const [local] = splitProps(props, ["fields", "buttons", "class"]);
  const fields = () => local.fields ?? 2;
  const buttons = () => local.buttons ?? 2;
  return (() => {
    var _el$22 = _tmpl$0(), _el$23 = _el$22.firstChild;
    insert(_el$22, createComponent(For, {
      get each() {
        return range(fields());
      },
      children: () => (() => {
        var _el$24 = _tmpl$1(), _el$25 = _el$24.firstChild, _el$26 = _el$25.nextSibling;
        effect((_p$) => {
          var _v$9 = cn("h-4 w-32 rounded", BAR_LIGHT), _v$0 = cn("h-10 w-full rounded-lg", BAR_LIGHT);
          _v$9 !== _p$.e && className(_el$25, _p$.e = _v$9);
          _v$0 !== _p$.t && className(_el$26, _p$.t = _v$0);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$24;
      })()
    }), _el$23);
    insert(_el$23, createComponent(For, {
      get each() {
        return range(buttons());
      },
      children: () => (() => {
        var _el$27 = _tmpl$42();
        effect(() => className(_el$27, cn("h-10 w-24 rounded-lg", BAR)));
        return _el$27;
      })()
    }));
    effect(() => className(_el$22, cn(SKELETON_CLASS, "space-y-4 rounded-xl border border-surface-border bg-surface-raised p-6", local.class)));
    return _el$22;
  })();
}
function SkeletonNavBlock(props) {
  const [local] = splitProps(props, ["items", "class"]);
  const items = () => local.items ?? 4;
  return (() => {
    var _el$28 = _tmpl$10(), _el$29 = _el$28.firstChild, _el$30 = _el$29.nextSibling;
    insert(_el$30, createComponent(For, {
      get each() {
        return range(items());
      },
      children: () => (() => {
        var _el$31 = _tmpl$42();
        effect(() => className(_el$31, cn("h-9 rounded-lg", BAR_LIGHT)));
        return _el$31;
      })()
    }));
    effect((_p$) => {
      var _v$1 = cn(SKELETON_CLASS, "space-y-2", local.class), _v$10 = cn("h-3 w-20 rounded", BAR);
      _v$1 !== _p$.e && className(_el$28, _p$.e = _v$1);
      _v$10 !== _p$.t && className(_el$29, _p$.t = _v$10);
      return _p$;
    }, {
      e: void 0,
      t: void 0
    });
    return _el$28;
  })();
}

// src/components/feedback/Loading.tsx
var _tmpl$11 = /* @__PURE__ */ template(`<span class="text-sm text-ink-500">`);
var _tmpl$24 = /* @__PURE__ */ template(`<div><span aria-hidden=true>`);
var _tmpl$34 = /* @__PURE__ */ template(`<div>`);
var _tmpl$43 = /* @__PURE__ */ template(`<div class=space-y-8><div class="grid gap-6 sm:grid-cols-2">`);
var _tmpl$53 = /* @__PURE__ */ template(`<div class=space-y-6><div class=mb-6></div><div class="mb-6 flex flex-wrap items-center justify-between gap-4"><div class="flex min-w-0 max-w-2xl flex-1 items-center gap-4"><div class="h-10 min-w-0 flex-1 rounded-lg bg-surface-overlay animate-pulse"></div><div class="h-10 w-28 rounded-lg bg-surface-overlay animate-pulse"></div></div><div class="flex items-center gap-2"><div class="h-10 w-20 rounded-lg bg-surface-overlay animate-pulse"></div><div class="h-10 w-28 rounded-lg bg-surface-overlay animate-pulse">`);
var _tmpl$63 = /* @__PURE__ */ template(`<div class="flex gap-8"><aside class="w-64 flex-shrink-0 space-y-6"></aside><div class="min-w-0 flex-1 space-y-6">`);
var _tmpl$72 = /* @__PURE__ */ template(`<div class=space-y-6>`);
function Loading(props) {
  const [local, others] = splitProps(props, ["variant", "class", "message", "iconOnly", "size", "icon", "minHeight", "aria-label"]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const variant = () => local.variant ?? "spinner";
  if (variant() === "spinner") {
    const iconOnly = () => local.iconOnly === true;
    const size = () => local.size ?? "md";
    const sizeClasses = () => size() === "sm" ? "h-4 w-4" : size() === "lg" ? "h-6 w-6" : "h-5 w-5";
    const minHeight = () => local.minHeight != null ? typeof local.minHeight === "number" ? `${local.minHeight}px` : local.minHeight : iconOnly() ? void 0 : "200px";
    const defaultIcon = () => icons.spinner({
      class: cn("shrink-0 animate-spin text-ink-400", sizeClasses()),
      "aria-hidden": "true"
    });
    const resolvedIcon = () => local.icon ?? defaultIcon();
    const label = () => local["aria-label"] ?? (iconOnly() ? local.message ?? (zh() ? "\u52A0\u8F7D\u4E2D" : "Loading") : void 0);
    return (() => {
      var _el$ = _tmpl$24(), _el$2 = _el$.firstChild;
      spread(_el$, mergeProps(others, {
        get ["class"]() {
          return cn("flex items-center justify-center gap-2", local.class);
        },
        get style() {
          return memo(() => !!minHeight())() ? {
            "min-height": minHeight()
          } : void 0;
        },
        "role": "status",
        "aria-live": "polite",
        get ["aria-label"]() {
          return label();
        }
      }), false, true);
      insert(_el$2, resolvedIcon);
      insert(_el$, createComponent(Show, {
        get when() {
          return !iconOnly();
        },
        get children() {
          var _el$3 = _tmpl$11();
          insert(_el$3, () => local.message ?? (zh() ? "\u52A0\u8F7D\u4E2D\u2026" : "Loading\u2026"));
          effect(() => setAttribute(_el$3, "aria-hidden", local["aria-label"] ? "true" : void 0));
          return _el$3;
        }
      }), null);
      return _el$;
    })();
  }
  return (() => {
    var _el$4 = _tmpl$34();
    spread(_el$4, mergeProps(others, {
      get ["class"]() {
        return cn(local.class);
      },
      "role": "status",
      "aria-live": "polite",
      "aria-atomic": "true",
      get ["aria-label"]() {
        return zh() ? "\u52A0\u8F7D\u4E2D" : "Loading";
      }
    }), false, true);
    insert(_el$4, (() => {
      var _c$ = memo(() => variant() === "dashboard");
      return () => _c$() ? createComponent(DashboardSkeletonLayout, {}) : memo(() => variant() === "tablePage")() ? createComponent(TablePageSkeletonLayout, {}) : memo(() => variant() === "admin")() ? createComponent(AdminSkeletonLayout, {}) : createComponent(GenericSkeletonLayout, {});
    })());
    return _el$4;
  })();
}
function DashboardSkeletonLayout() {
  return (() => {
    var _el$5 = _tmpl$43(), _el$6 = _el$5.firstChild;
    insert(_el$5, createComponent(SkeletonHeading, {}), _el$6);
    insert(_el$6, createComponent(SkeletonCard, {
      header: true,
      bodyLines: 2
    }), null);
    insert(_el$6, createComponent(SkeletonCard, {
      header: true,
      bodyLines: 2
    }), null);
    return _el$5;
  })();
}
function TablePageSkeletonLayout() {
  return (() => {
    var _el$7 = _tmpl$53(), _el$8 = _el$7.firstChild; _el$8.nextSibling;
    insert(_el$8, createComponent(SkeletonHeading, {}));
    insert(_el$7, createComponent(SkeletonTable, {
      rows: 6,
      columns: 5
    }), null);
    return _el$7;
  })();
}
function AdminSkeletonLayout() {
  return (() => {
    var _el$0 = _tmpl$63(), _el$1 = _el$0.firstChild, _el$10 = _el$1.nextSibling;
    insert(_el$1, createComponent(SkeletonNavBlock, {
      items: 3
    }), null);
    insert(_el$1, createComponent(SkeletonNavBlock, {
      items: 5
    }), null);
    insert(_el$10, createComponent(SkeletonHeading, {}), null);
    insert(_el$10, createComponent(SkeletonForm, {
      fields: 2,
      buttons: 2
    }), null);
    return _el$0;
  })();
}
function GenericSkeletonLayout() {
  return (() => {
    var _el$11 = _tmpl$72();
    insert(_el$11, createComponent(SkeletonSection, {
      description: true,
      content: true,
      contentLines: 3
    }));
    return _el$11;
  })();
}
var _tmpl$12 = /* @__PURE__ */ template(`<div tabindex=-1 role=region>`);
var _tmpl$25 = /* @__PURE__ */ template(`<span class=shrink-0 aria-hidden=true>`);
var _tmpl$35 = /* @__PURE__ */ template(`<div class=font-medium role=heading aria-level=3>`);
var _tmpl$44 = /* @__PURE__ */ template(`<div class="text-sm opacity-90">`);
var _tmpl$54 = /* @__PURE__ */ template(`<div>`);
var _tmpl$64 = /* @__PURE__ */ template(`<button type=button class="rounded font-medium underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/40">`);
var _tmpl$73 = /* @__PURE__ */ template(`<div class="absolute bottom-0 left-0 h-1 w-full overflow-hidden rounded-b-lg"><div class="h-full bg-current/20 transition-all duration-75 ease-linear"role=progressbar aria-valuemin=0 aria-valuemax=100>`);
var _tmpl$82 = /* @__PURE__ */ template(`<div aria-atomic=true tabindex=0><div class="flex flex-1 flex-col gap-1"></div><div class="flex shrink-0 items-center gap-2"><button type=button class="shrink-0 rounded p-0.5 opacity-60 hover:opacity-100 hover:bg-current/10 active:bg-current/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/40 transition-opacity">`);
var toastSeq = 0;
var newToastId = () => `toast-${++toastSeq}`;
var ToastContext = createContext(null);
function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
function ToastProvider(props) {
  const [local] = splitProps(props, ["children", "position", "defaultAppearance", "hotkey", "maxToasts"]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const [toasts, setToasts] = createSignal([]);
  const timers = /* @__PURE__ */ new Map();
  const [regionRef, setRegionRef] = createSignal(null);
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
      timers.set(id, {
        timer,
        remaining: duration,
        startedAt: Date.now(),
        paused: false
      });
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
    onCleanup(() => document.removeEventListener("keydown", handleKeyDown));
  });
  onCleanup(() => {
    for (const entry of timers.values()) {
      if (entry.timer != null) clearTimeout(entry.timer);
    }
    timers.clear();
  });
  const value = {
    toasts,
    show,
    dismiss
  };
  return createComponent(ToastContext.Provider, {
    value,
    get children() {
      return [memo(() => local.children), createComponent(Portal, {
        get children() {
          var _el$ = _tmpl$12();
          use(setRegionRef, _el$);
          insert(_el$, createComponent(For, {
            get each() {
              return toasts();
            },
            children: (t) => createComponent(ToastItemView, {
              toast: t,
              timers,
              onDismiss: () => dismiss(t.id),
              onPause: () => pauseTimer(t.id),
              onResume: () => resumeTimer(t.id)
            })
          }));
          effect((_p$) => {
            var _v$ = cn("pointer-events-none fixed z-[100] flex gap-2 p-4", position().startsWith("bottom") ? "flex-col-reverse" : "flex-col", position() === "top-left" && "left-4 top-4", position() === "top-right" && "right-4 top-4", position() === "bottom-left" && "left-4 bottom-4", position() === "bottom-right" && "right-4 bottom-4"), _v$2 = zh() ? "\u901A\u77E5" : "Notifications";
            _v$ !== _p$.e && className(_el$, _p$.e = _v$);
            _v$2 !== _p$.t && setAttribute(_el$, "aria-label", _p$.t = _v$2);
            return _p$;
          }, {
            e: void 0,
            t: void 0
          });
          return _el$;
        }
      })];
    }
  });
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
  const [local, rest] = splitProps(props, ["toast", "onDismiss", "onPause", "onResume"]);
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
  const [progress, setProgress] = createSignal(100);
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
    onCleanup(() => clearInterval(interval));
  });
  return (() => {
    var _el$2 = _tmpl$82(), _el$4 = _el$2.firstChild, _el$8 = _el$4.nextSibling, _el$0 = _el$8.firstChild;
    _el$2.$$keydown = (e) => {
      if (e.key === "Escape") local.onDismiss();
    };
    _el$2.$$focusout = (e) => {
      const next = e.relatedTarget;
      if (next && e.currentTarget.contains(next)) return;
      local.onResume();
    };
    addEventListener(_el$2, "focusin", local.onPause, true);
    addEventListener(_el$2, "mouseleave", local.onResume);
    addEventListener(_el$2, "mouseenter", local.onPause);
    insert(_el$2, createComponent(Show, {
      get when() {
        return memo(() => t().showIcon !== false)() && iconKey();
      },
      get children() {
        var _el$3 = _tmpl$25();
        insert(_el$3, () => icons[iconKey()]({
          class: "h-4 w-4"
        }));
        return _el$3;
      }
    }), _el$4);
    insert(_el$4, createComponent(Show, {
      get when() {
        return t().title;
      },
      get children() {
        var _el$5 = _tmpl$35();
        insert(_el$5, () => t().title);
        return _el$5;
      }
    }), null);
    insert(_el$4, createComponent(Show, {
      get when() {
        return t().description;
      },
      get children() {
        var _el$6 = _tmpl$44();
        insert(_el$6, () => t().description);
        return _el$6;
      }
    }), null);
    insert(_el$4, createComponent(Show, {
      get when() {
        return memo(() => !!!t().title)() && !t().description;
      },
      get children() {
        var _el$7 = _tmpl$54();
        insert(_el$7, () => t().message);
        return _el$7;
      }
    }), null);
    insert(_el$8, createComponent(Show, {
      get when() {
        return memo(() => !!t().actionLabel)() && t().onAction;
      },
      get children() {
        var _el$9 = _tmpl$64();
        _el$9.$$click = () => {
          t().onAction?.();
          local.onDismiss();
        };
        insert(_el$9, () => t().actionLabel);
        return _el$9;
      }
    }), _el$0);
    addEventListener(_el$0, "click", local.onDismiss, true);
    insert(_el$0, () => icons.close({
      class: "h-4 w-4",
      "aria-hidden": "true"
    }));
    insert(_el$2, createComponent(Show, {
      get when() {
        return memo(() => !!(t().showProgress !== false && t().duration))() && t().duration > 0;
      },
      get children() {
        var _el$1 = _tmpl$73(), _el$10 = _el$1.firstChild;
        effect((_p$) => {
          var _v$3 = `${progress()}%`, _v$4 = progress(), _v$5 = zh() ? "\u5269\u4F59\u65F6\u95F4" : "Time remaining";
          _v$3 !== _p$.e && setStyleProperty(_el$10, "width", _p$.e = _v$3);
          _v$4 !== _p$.t && setAttribute(_el$10, "aria-valuenow", _p$.t = _v$4);
          _v$5 !== _p$.a && setAttribute(_el$10, "aria-label", _p$.a = _v$5);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        });
        return _el$1;
      }
    }), null);
    effect((_p$) => {
      var _v$6 = isAlert() ? "alert" : "status", _v$7 = cn("relative pointer-events-auto flex min-w-[280px] max-w-md items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm shadow-lg", variantClasses()), _v$8 = zh() ? "\u5173\u95ED" : "Dismiss";
      _v$6 !== _p$.e && setAttribute(_el$2, "role", _p$.e = _v$6);
      _v$7 !== _p$.t && className(_el$2, _p$.t = _v$7);
      _v$8 !== _p$.a && setAttribute(_el$0, "aria-label", _p$.a = _v$8);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    });
    return _el$2;
  })();
}
delegateEvents(["focusin", "focusout", "keydown", "click"]);

export { Banner, Loading, PasswordStrengthIndicator, SkeletonCard, SkeletonForm, SkeletonHeading, SkeletonNavBlock, SkeletonSection, SkeletonTable, ToastProvider, isPasswordWeak, useToast, validatePassword };
