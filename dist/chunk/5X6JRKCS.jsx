import {
  cn
} from "./N5KQYWCA.jsx";

// src/components/feedback/Alert.tsx
import { splitProps as splitProps2 } from "solid-js";

// src/utilities/localeContext.ts
import { createContext, createComponent, useContext } from "solid-js";
var LocaleContext = createContext(void 0);
function LocaleProvider(props) {
  return createComponent(LocaleContext.Provider, {
    value: props.locale,
    get children() {
      return props.children;
    }
  });
}
function useLocaleConfig() {
  return useContext(LocaleContext);
}
function resolveLocale(explicit, contextLocale) {
  return explicit ?? contextLocale ?? "en";
}

// src/icons/icons.tsx
import { createContext as createContext2, useContext as useContext2, splitProps, createMemo } from "solid-js";
function icon(getChildren) {
  return (props) => <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width={2}
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
			{getChildren()}
		</svg>;
}
var defaultIcons = {
  chevronDown: icon(() => <path d="m6 9 6 6 6-6" />),
  chevronUp: icon(() => <path d="m18 15-6-6-6 6" />),
  chevronLeft: icon(() => <path d="m15 18-6-6 6-6" />),
  chevronRight: icon(() => <path d="m9 18 6-6-6-6" />),
  chevronsLeft: icon(() => <>
			<path d="m11 17-5-5 5-5" />
			<path d="m18 17-5-5 5-5" />
		</>),
  chevronsRight: icon(() => <>
			<path d="m6 17 5-5-5-5" />
			<path d="m13 17 5-5-5-5" />
		</>),
  close: icon(() => <>
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</>),
  copy: icon(() => <>
			<rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
			<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
		</>),
  check: icon(() => <path d="M20 6 9 17l-5-5" />),
  search: icon(() => <>
			<path d="m21 21-4.34-4.34" />
			<circle cx="11" cy="11" r="8" />
		</>),
  spinner: icon(() => <path d="M21 12a9 9 0 1 1-6.219-8.56" />),
  sun: icon(() => <>
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2" />
			<path d="M12 20v2" />
			<path d="m4.93 4.93 1.41 1.41" />
			<path d="m17.66 17.66 1.41 1.41" />
			<path d="M2 12h2" />
			<path d="M20 12h2" />
			<path d="m6.34 17.66-1.41 1.41" />
			<path d="m19.07 4.93-1.41 1.41" />
		</>),
  moon: icon(() => <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />),
  eye: icon(() => <>
			<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
			<circle cx="12" cy="12" r="3" />
		</>),
  eyeOff: icon(() => <>
			<path d="m15 18-.722-3.25" />
			<path d="M2 8a10.645 10.645 0 0 0 20 0" />
			<path d="m20 15-1.726-2.05" />
			<path d="m4 15 1.726-2.05" />
			<path d="m9 18 .722-3.25" />
		</>),
  plus: icon(() => <>
			<path d="M5 12h14" />
			<path d="M12 5v14" />
		</>),
  minus: icon(() => <path d="M5 12h14" />),
  dragHandle: icon(() => <>
			<circle cx="9" cy="12" r="1" />
			<circle cx="9" cy="5" r="1" />
			<circle cx="9" cy="19" r="1" />
			<circle cx="15" cy="12" r="1" />
			<circle cx="15" cy="5" r="1" />
			<circle cx="15" cy="19" r="1" />
		</>),
  clock: icon(() => <>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</>),
  calendar: icon(() => <>
			<path d="M8 2v4" />
			<path d="M16 2v4" />
			<rect width="18" height="18" x="3" y="4" rx="2" />
			<path d="M3 10h18" />
		</>),
  pipette: icon(() => <>
			<path d="m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12" />
			<path d="m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" />
			<path d="m2 22 .414-.414" />
		</>),
  refresh: icon(() => <>
			<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
			<path d="M21 3v5h-5" />
			<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
			<path d="M8 16H3v5" />
		</>),
  trash: icon(() => <>
			<path d="M10 11v6" />
			<path d="M14 11v6" />
			<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
			<path d="M3 6h18" />
			<path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
		</>),
  pin: icon(() => <>
			<path d="M12 17v5" />
			<path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
		</>),
  file: icon(() => <>
			<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
			<path d="M14 2v5a1 1 0 0 0 1 1h5" />
		</>),
  fileText: icon(() => <>
			<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
			<path d="M14 2v5a1 1 0 0 0 1 1h5" />
			<path d="M10 9H8" />
			<path d="M16 13H8" />
			<path d="M16 17H8" />
		</>),
  fileCode: icon(() => <>
			<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
			<path d="M14 2v5a1 1 0 0 0 1 1h5" />
			<path d="M10 12.5 8 15l2 2.5" />
			<path d="m14 12.5 2 2.5-2 2.5" />
		</>),
  fileImage: icon(() => <>
			<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
			<path d="M14 2v5a1 1 0 0 0 1 1h5" />
			<circle cx="10" cy="12" r="2" />
			<path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" />
		</>),
  filePlay: icon(() => <>
			<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
			<path d="M14 2v5a1 1 0 0 0 1 1h5" />
			<path d="M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z" />
		</>),
  fileSpreadsheet: icon(() => <>
			<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
			<path d="M14 2v5a1 1 0 0 0 1 1h5" />
			<path d="M8 13h2" />
			<path d="M14 13h2" />
			<path d="M8 17h2" />
			<path d="M14 17h2" />
		</>),
  fileUpload: icon(() => <>
			<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
			<path d="M14 2v5a1 1 0 0 0 1 1h5" />
			<path d="M12 12v6" />
			<path d="m15 15-3-3-3 3" />
		</>),
  folderArchive: icon(() => <>
			<circle cx="15" cy="19" r="2" />
			<path d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1" />
			<path d="M15 11v-1" />
			<path d="M15 17v-2" />
		</>),
  checkCircle: icon(() => <>
			<circle cx="12" cy="12" r="10" />
			<path d="m9 12 2 2 4-4" />
		</>),
  alertCircle: icon(() => <>
			<circle cx="12" cy="12" r="10" />
			<path d="M12 8v4" />
			<path d="M12 16h.01" />
		</>),
  triangleAlert: icon(() => <>
			<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
			<path d="M12 9v4" />
			<path d="M12 17h.01" />
		</>),
  infoCircle: icon(() => <>
			<circle cx="12" cy="12" r="10" />
			<path d="M12 16v-4" />
			<path d="M12 8h.01" />
		</>)
};
var IconsContext = createContext2(() => defaultIcons);
function useIcons() {
  return useContext2(IconsContext)();
}
function IconsProvider(props) {
  const [local] = splitProps(props, ["icons", "children"]);
  const value = createMemo(() => ({ ...defaultIcons, ...local.icons ?? {} }));
  return <IconsContext.Provider value={value}>{local.children}</IconsContext.Provider>;
}

// src/components/feedback/Alert.tsx
var statusAppearanceClasses = {
  error: {
    subtle: "border-danger-500 bg-danger-50 text-danger-700",
    solid: "border-danger-500 bg-danger-500 text-white",
    outline: "border-danger-500 bg-transparent text-danger-700",
    transparent: "border-transparent bg-danger-50 text-danger-800"
  },
  success: {
    subtle: "border-success-500 bg-success-50 text-success-700",
    solid: "border-success-500 bg-success-500 text-white",
    outline: "border-success-500 bg-transparent text-success-700",
    transparent: "border-transparent bg-success-50 text-success-800"
  },
  warning: {
    subtle: "border-warning-500 bg-warning-50 text-warning-700",
    solid: "border-warning-500 bg-warning-500 text-white",
    outline: "border-warning-500 bg-transparent text-warning-700",
    transparent: "border-transparent bg-warning-50 text-warning-800"
  },
  info: {
    subtle: "border-info-500 bg-info-50 text-info-700",
    solid: "border-info-500 bg-info-500 text-white",
    outline: "border-info-500 bg-transparent text-info-700",
    transparent: "border-transparent bg-info-50 text-info-800"
  }
};
function Alert(props) {
  const icons = useIcons();
  const [local, others] = splitProps2(props, [
    "status",
    "appearance",
    "icon",
    "closeable",
    "onClose",
    "ariaLive",
    "role",
    "colorClass",
    "actions",
    "title",
    "class",
    "children",
    "ref"
  ]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const status = () => local.status ?? "error";
  const appearance = () => local.appearance ?? "subtle";
  const colorClasses2 = () => local.colorClass ?? statusAppearanceClasses[status()][appearance()];
  if (false) {
  }
  const liveMode = () => local.ariaLive ?? "polite";
  const roleAttr = () => {
    const m = liveMode();
    return m === "assertive" ? "alert" : m === "polite" ? "status" : void 0;
  };
  const role = () => local.role ?? roleAttr();
  const ariaLiveAttr = () => liveMode() === "off" ? void 0 : liveMode();
  const showClose = () => local.closeable === true && local.onClose != null;
  const hasActions = () => showClose() || local.actions != null;
  return <div
    ref={local.ref}
    class={cn(
      "flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-sm",
      colorClasses2(),
      local.class
    )}
    {...others}
    role={role()}
    aria-live={ariaLiveAttr()}
  >
			{local.icon != null && <span class="shrink-0 [&>svg]:size-4" aria-hidden="true">
					{local.icon}
				</span>}
			<div class="min-w-0 flex-1">
				{local.title != null && <div class="font-semibold">{local.title}</div>}
				{local.title != null && local.children != null && <div class="mt-0.5" />}
				{local.children}
			</div>
			{hasActions() && <div class="flex shrink-0 items-center gap-2">
					{local.actions}
					{showClose() && <button
    type="button"
    onClick={local.onClose}
    class="rounded p-1 opacity-70 hover:opacity-100 outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-inset"
    aria-label={zh() ? "\u5173\u95ED" : "Close"}
  >
							{icons.close({ class: "size-4", "aria-hidden": "true" })}
						</button>}
				</div>}
		</div>;
}

// src/components/feedback/AlertDialog.tsx
import { Show as Show21, splitProps as splitProps27, onMount as onMount8, createSignal as createSignal16 } from "solid-js";
import { AlertDialog as KobalteAlertDialog } from "@kobalte/core/alert-dialog";

// src/components/actions/Button.tsx
import { children, createMemo as createMemo2, splitProps as splitProps3 } from "solid-js";
import { Button as KobalteButton } from "@kobalte/core/button";
import { ToggleButton as KobalteToggleButton } from "@kobalte/core/toggle-button";

// src/types/component-size.ts
var inputSizeConfig = {
  xs: { h: "h-[var(--torch-h-xs)] min-h-[var(--torch-h-xs)]", py: "py-1", text: "text-xs", pl: "pl-2", pr: "pr-2", plAdorn: "pl-7", prAdorn: "pr-7", adornStart: "left-2", adornEnd: "right-2" },
  sm: { h: "h-[var(--torch-h-sm)] min-h-[var(--torch-h-sm)]", py: "py-1.5", text: "text-xs", pl: "pl-2.5", pr: "pr-2.5", plAdorn: "pl-8", prAdorn: "pr-8", adornStart: "left-2", adornEnd: "right-2" },
  md: { h: "h-[var(--torch-h-md)] min-h-[var(--torch-h-md)]", py: "py-2", text: "text-sm", pl: "pl-3", pr: "pr-3", plAdorn: "pl-9", prAdorn: "pr-9", adornStart: "left-2.5", adornEnd: "right-2.5" },
  lg: { h: "h-[var(--torch-h-lg)] min-h-[var(--torch-h-lg)]", py: "py-2", text: "text-sm", pl: "pl-3.5", pr: "pr-3.5", plAdorn: "pl-10", prAdorn: "pr-10", adornStart: "left-3", adornEnd: "right-3" },
  xl: { h: "h-[var(--torch-h-xl)] min-h-[var(--torch-h-xl)]", py: "py-2.5", text: "text-base", pl: "pl-4", pr: "pr-4", plAdorn: "pl-11", prAdorn: "pr-11", adornStart: "left-3.5", adornEnd: "right-3.5" }
};
var buttonSizeConfig = {
  xs: "h-[var(--torch-h-xs)] min-h-[var(--torch-h-xs)] px-2.5 text-xs",
  sm: "h-[var(--torch-h-sm)] min-h-[var(--torch-h-sm)] px-3 text-sm",
  md: "h-[var(--torch-h-md)] min-h-[var(--torch-h-md)] px-4 text-sm",
  lg: "h-[var(--torch-h-lg)] min-h-[var(--torch-h-lg)] px-5 text-sm",
  xl: "h-[var(--torch-h-xl)] min-h-[var(--torch-h-xl)] px-6 text-base"
};
var iconOnlySizeConfig = {
  xs: "h-[var(--torch-h-xs)] w-[var(--torch-h-xs)] p-0",
  sm: "h-[var(--torch-h-sm)] w-[var(--torch-h-sm)] p-0",
  md: "h-[var(--torch-h-md)] w-[var(--torch-h-md)] p-0",
  lg: "h-[var(--torch-h-lg)] w-[var(--torch-h-lg)] p-0",
  xl: "h-[var(--torch-h-xl)] w-[var(--torch-h-xl)] p-0"
};

// src/utilities/componentSizeContext.ts
import { createContext as createContext3, createComponent as createComponent2, useContext as useContext3 } from "solid-js";
var ComponentSizeContext = createContext3(void 0);
function ComponentSizeProvider(props) {
  return createComponent2(ComponentSizeContext.Provider, {
    value: props.size,
    get children() {
      return props.children;
    }
  });
}
function useComponentSize() {
  return useContext3(ComponentSizeContext);
}

// src/components/actions/Button.tsx
var filledVariants = ["primary", "danger", "success", "warning", "info"];
var buttonVariants = {
  primary: "border-2 border-transparent bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 focus-visible:ring-primary-500/50",
  "primary-outline": "bg-transparent text-primary-500 border-2 border-primary-500 hover:bg-primary-500/10 active:bg-primary-500/20 focus-visible:ring-primary-500/50",
  secondary: "border-2 border-surface-border bg-surface-raised text-ink-700 hover:bg-surface-overlay active:bg-surface-dim focus-visible:ring-ink-500/30",
  outlined: "bg-transparent text-primary-600 border-2 border-primary-500 hover:bg-primary-500/10 active:bg-primary-500/20 focus-visible:ring-primary-500/50",
  link: "text-primary-500 hover:text-primary-600 hover:underline underline-offset-4 focus-visible:ring-primary-500/50",
  ghost: "bg-transparent text-primary-500 border-2 border-transparent hover:bg-primary-500/10 active:bg-primary-500/20 focus-visible:ring-primary-500/50",
  danger: "border-2 border-transparent bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-700 focus-visible:ring-danger-500/50",
  "danger-outline": "bg-transparent text-danger-500 border-2 border-danger-500 hover:bg-danger-500/10 active:bg-danger-500/20 focus-visible:ring-danger-500/50",
  "danger-link": "text-danger-500 hover:text-danger-600 hover:underline underline-offset-4 focus-visible:ring-danger-500/50",
  success: "border-2 border-transparent bg-success-500 text-white hover:bg-success-600 active:bg-success-700 focus-visible:ring-success-500/50",
  "success-outline": "bg-transparent text-success-500 border-2 border-success-500 hover:bg-success-500/10 active:bg-success-500/20 focus-visible:ring-success-500/50",
  warning: "border-2 border-transparent bg-warning-500 text-white hover:bg-warning-600 active:bg-warning-700 focus-visible:ring-warning-500/50",
  "warning-outline": "bg-transparent text-warning-500 border-2 border-warning-500 hover:bg-warning-500/10 active:bg-warning-500/20 focus-visible:ring-warning-500/50",
  info: "border-2 border-transparent bg-info-500 text-white hover:bg-info-600 active:bg-info-700 focus-visible:ring-info-500/50",
  "info-outline": "bg-transparent text-info-500 border-2 border-info-500 hover:bg-info-500/10 active:bg-info-500/20 focus-visible:ring-info-500/50"
};
var radiusClasses = {
  circle: "rounded-full",
  rounded: "rounded-lg",
  square: "rounded-none"
};
var sharedButtonClass = "box-border inline-flex items-center justify-center gap-2 font-medium transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2";
var toggleModeVariants = {
  outlined: "border-2 bg-surface-raised text-ink-700 border-surface-border hover:bg-surface-overlay data-[pressed]:bg-primary-500 data-[pressed]:text-white data-[pressed]:border-primary-500 data-[pressed]:hover:bg-primary-600 data-[pressed]:hover:border-primary-600",
  ghost: "border-2 border-transparent text-ink-700 hover:bg-surface-overlay data-[pressed]:bg-primary-100 data-[pressed]:text-primary-800 data-[pressed]:hover:bg-primary-200"
};
function Button(props) {
  const [local, others] = splitProps3(props, [
    "variant",
    "size",
    "fullWidth",
    "loading",
    "disabled",
    "disableElevation",
    "iconOnly",
    "radius",
    "icon",
    "startIcon",
    "endIcon",
    "class",
    "style",
    "children",
    "label",
    "onClick",
    "href",
    "pressed",
    "onValueChange",
    "ref",
    "type"
  ]);
  const icons = useIcons();
  const contextSize = useComponentSize();
  const resolvedChildren = children(() => local.children);
  const variant = () => local.variant ?? "primary";
  const size = () => local.size ?? contextSize ?? "md";
  const isDisabled = () => local.disabled || local.loading;
  const mode = local.pressed !== void 0 && local.onValueChange != null ? "toggle" : local.href != null && local.href !== "" ? "link" : "button";
  const toggleVariant = () => local.variant === "ghost" ? "ghost" : "outlined";
  if (false) {
    if (local.iconOnly) {
      const a = others;
      if (local.label == null && a["aria-label"] == null && a["aria-labelledby"] == null && a["title"] == null) {
      }
    }
    if (mode === "toggle" && local.variant != null && !["outlined", "ghost"].includes(local.variant)) {
    }
  }
  const resolvedRadius = () => local.radius ?? (local.iconOnly ? "circle" : "rounded");
  const hasElevation = () => !local.disableElevation && filledVariants.includes(variant());
  const baseClass = () => cn(
    sharedButtonClass,
    buttonVariants[variant()],
    local.iconOnly ? iconOnlySizeConfig[size()] : buttonSizeConfig[size()],
    radiusClasses[resolvedRadius()],
    local.fullWidth && "w-full",
    hasElevation() && "shadow-sm hover:shadow",
    isDisabled() && "opacity-50 pointer-events-none",
    local.class
  );
  const toggleClass = () => cn(
    sharedButtonClass,
    "focus-visible:ring-primary-500/50 disabled:opacity-50",
    toggleModeVariants[toggleVariant()],
    local.iconOnly ? iconOnlySizeConfig[size()] : buttonSizeConfig[size()],
    radiusClasses[resolvedRadius()],
    local.fullWidth && "w-full",
    isDisabled() && "opacity-50 pointer-events-none",
    local.class
  );
  const content = createMemo2(() => {
    if (local.iconOnly) {
      return <>
					{local.loading && icons.spinner({ class: "h-4 w-4 shrink-0 animate-spin", "aria-hidden": "true" })}
					{!local.loading && (local.icon ?? local.startIcon)}
				</>;
    }
    return <>
				{local.loading && icons.spinner({ class: "h-4 w-4 shrink-0 animate-spin", "aria-hidden": "true" })}
				{!local.loading && local.startIcon}
				{local.label != null ? local.label : resolvedChildren()}
				{local.endIcon}
			</>;
  });
  if (mode === "toggle") {
    return <KobalteToggleButton
      ref={local.ref}
      pressed={local.pressed}
      onChange={local.onValueChange}
      disabled={isDisabled()}
      class={toggleClass()}
      style={local.style}
      {...others}
    >
				{content()}
			</KobalteToggleButton>;
  }
  if (mode === "link") {
    return <KobalteButton
      ref={local.ref}
      as="a"
      href={local.href}
      aria-disabled={isDisabled() ? "true" : void 0}
      {...isDisabled() ? { tabIndex: -1 } : {}}
      class={baseClass()}
      style={local.style}
      onClick={(e) => {
        if (isDisabled()) e.preventDefault();
        local.onClick?.(e);
      }}
      {...others}
    >
				{content()}
			</KobalteButton>;
  }
  return <KobalteButton
    ref={local.ref}
    as="button"
    type={local.type ?? "button"}
    disabled={isDisabled()}
    class={baseClass()}
    style={local.style}
    onClick={(e) => local.onClick?.(e)}
    {...others}
  >
			{content()}
		</KobalteButton>;
}

// src/components/actions/ButtonGroup.tsx
import {
  children as children2,
  createContext as createContext4,
  createSignal,
  splitProps as splitProps4,
  useContext as useContext4,
  For
} from "solid-js";
import { DropdownMenu as KobalteDropdownMenu } from "@kobalte/core/dropdown-menu";
import { ToggleGroup as KobalteToggleGroup } from "@kobalte/core/toggle-group";
var ButtonGroupSplitContext = createContext4({
  size: "md",
  variant: "primary",
  disabled: false
});
var splitTriggerSizes = {
  xs: "h-7 w-7 p-0",
  sm: "h-8 w-8 p-0",
  md: "h-9 w-9 p-0",
  lg: "h-10 w-10 p-0",
  xl: "h-11 w-11 p-0"
};
var splitTriggerVariants = {
  primary: "bg-primary-500 text-white border-transparent border-l-white/20 hover:bg-primary-600 active:bg-primary-700",
  "primary-outline": "bg-transparent text-primary-500 border-primary-500 border-l-primary-500 hover:bg-primary-500/10 active:bg-primary-500/20",
  secondary: "bg-surface-raised text-ink-700 border-surface-border border-l-surface-border hover:bg-surface-overlay active:bg-surface-dim",
  outlined: "bg-transparent text-primary-600 border-primary-500 border-l-primary-500 hover:bg-primary-500/10 active:bg-primary-500/20",
  ghost: "bg-transparent text-primary-500 border-surface-border hover:bg-primary-500/10 active:bg-primary-500/20",
  link: "bg-transparent text-primary-500 border-surface-border hover:bg-primary-500/10",
  danger: "bg-danger-500 text-white border-transparent border-l-white/20 hover:bg-danger-600 active:bg-danger-700",
  "danger-outline": "bg-transparent text-danger-500 border-danger-500 border-l-danger-500 hover:bg-danger-500/10 active:bg-danger-500/20",
  "danger-link": "bg-transparent text-danger-500 border-surface-border hover:bg-danger-500/10",
  success: "bg-success-500 text-white border-transparent border-l-white/20 hover:bg-success-600 active:bg-success-700",
  "success-outline": "bg-transparent text-success-500 border-success-500 border-l-success-500 hover:bg-success-500/10 active:bg-success-500/20",
  warning: "bg-warning-500 text-white border-transparent border-l-white/20 hover:bg-warning-600 active:bg-warning-700",
  "warning-outline": "bg-transparent text-warning-500 border-warning-500 border-l-warning-500 hover:bg-warning-500/10 active:bg-warning-500/20",
  info: "bg-info-500 text-white border-transparent border-l-white/20 hover:bg-info-600 active:bg-info-700",
  "info-outline": "bg-transparent text-info-500 border-info-500 border-l-info-500 hover:bg-info-500/10 active:bg-info-500/20"
};
var BUTTON_GROUP_MENU_SYMBOL = /* @__PURE__ */ Symbol.for("ButtonGroup.Menu");
function isMenuSlot(v) {
  return typeof v === "object" && v !== null && BUTTON_GROUP_MENU_SYMBOL in v;
}
function resolveSlot(value) {
  if (isMenuSlot(value)) return value.render();
  if (typeof value === "function") return value();
  return value;
}
function ButtonGroupMenuRenderer(props) {
  return <>{resolveSlot(props.content)}</>;
}
var groupBaseClasses = "inline-flex rounded-lg border border-surface-border [&>*]:!shadow-none";
var splitBaseClasses = "inline-flex rounded-lg [&>*]:!shadow-none";
var groupChildClasses = "[&>*]:!rounded-none [&>*]:!border-0 [&>*]:!border-r [&>*]:!border-surface-border [&>*:last-child]:!border-r-0 [&>*:first-child]:!rounded-l-lg [&>*:last-child]:!rounded-r-lg";
var groupChildClassesFilled = "[&>*]:!rounded-none [&>*]:!border-0 [&>*]:!border-r [&>*]:!border-white/20 [&>*:last-child]:!border-r-0 [&>*:first-child]:!rounded-l-lg [&>*:last-child]:!rounded-r-lg";
var groupChildClassesVertical = "flex-col [&>*]:!rounded-none [&>*]:!border-0 [&>*]:!border-b [&>*]:!border-surface-border [&>*:last-child]:!border-b-0 [&>*:first-child]:!rounded-t-lg [&>*:last-child]:!rounded-b-lg";
var toggleItemBaseClass = cn(
  "inline-flex items-center justify-center font-medium transition-colors outline-none",
  "bg-transparent text-ink-700 hover:bg-surface-overlay",
  "data-[pressed]:bg-primary-500 data-[pressed]:text-white",
  "data-[pressed]:hover:bg-primary-600 data-[pressed]:hover:text-white",
  "data-[pressed]:!border-white/20",
  "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50",
  "disabled:opacity-50 disabled:cursor-not-allowed",
  "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"
);
var toggleItemSizeClass = {
  xs: "h-[var(--torch-h-xs)] px-2.5 text-xs",
  sm: "h-[var(--torch-h-sm)] px-3 text-xs",
  md: "h-[var(--torch-h-md)] px-4 text-sm",
  lg: "h-[var(--torch-h-lg)] px-5 text-sm",
  xl: "h-[var(--torch-h-xl)] px-6 text-base"
};
function ButtonGroupRoot(props) {
  const [local, others] = splitProps4(props, [
    "class",
    "children",
    "split",
    "size",
    "variant",
    "filled",
    "options",
    "value",
    "onValueChange",
    "multiple",
    "orientation",
    "disabled",
    "splitButtonAriaLabel",
    "open",
    "onOpenChange"
  ]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const mode = local.options != null ? "toggle" : local.split === true ? "split" : "default";
  const [internalOpen, setInternalOpen] = createSignal(false);
  const isControlled = () => local.open !== void 0;
  const open = () => isControlled() ? local.open : internalOpen();
  const setOpen = (next) => {
    if (local.disabled && next) return;
    if (!isControlled()) setInternalOpen(next);
    local.onOpenChange?.(next);
  };
  const resolved = children2(() => local.children);
  const list = () => {
    const c = resolved();
    return Array.isArray(c) ? c : c ? [c] : [];
  };
  const main = () => list()[0];
  const menuContent = () => list()[1];
  const size = () => local.size ?? "md";
  const variant = () => local.variant ?? "primary";
  const toggleOrientation = () => local.orientation ?? "horizontal";
  const toggleRootClass = () => cn(
    groupBaseClasses,
    toggleOrientation() === "vertical" ? groupChildClassesVertical : groupChildClasses,
    local.class
  );
  if (false) {
    createEffect(() => {
      if (mode !== "split") return;
      if (list().length < 2) {
      }
    });
  }
  if (mode === "toggle") {
    if (local.multiple) {
      return <KobalteToggleGroup
        value={local.value ?? []}
        onChange={local.onValueChange}
        multiple
        orientation={toggleOrientation()}
        disabled={local.disabled}
        class={toggleRootClass()}
      >
					<For each={local.options ?? []}>
						{(opt) => <KobalteToggleGroup.Item value={opt.value} aria-label={opt.label} class={cn(toggleItemBaseClass, toggleItemSizeClass[size()])}>
								{opt.label}
							</KobalteToggleGroup.Item>}
					</For>
				</KobalteToggleGroup>;
    }
    return <KobalteToggleGroup
      value={local.value ?? null}
      onChange={local.onValueChange}
      orientation={toggleOrientation()}
      disabled={local.disabled}
      class={toggleRootClass()}
    >
				<For each={local.options ?? []}>
					{(opt) => <KobalteToggleGroup.Item value={opt.value} aria-label={opt.label} class={cn(toggleItemBaseClass, toggleItemSizeClass[size()])}>
							{opt.label}
						</KobalteToggleGroup.Item>}
				</For>
			</KobalteToggleGroup>;
  }
  if (mode === "split") {
    return <ButtonGroupSplitContext.Provider
      value={{ get size() {
        return size();
      }, get variant() {
        return variant();
      }, get disabled() {
        return !!local.disabled;
      } }}
    >
				<KobalteDropdownMenu open={open()} onOpenChange={setOpen}>
					<div
      data-torchui="button-group"
      role="group"
      aria-label={local.splitButtonAriaLabel ?? (zh() ? "\u5206\u5272\u6309\u94AE" : "Split button")}
      class={cn(splitBaseClasses, local.class)}
      {...others}
    >
						{main()}
						<KobalteDropdownMenu.Trigger
      as="button"
      type="button"
      disabled={local.disabled}
      class={cn(
        "inline-flex shrink-0 items-center justify-center border-2 border-l-2 rounded-none rounded-r-lg",
        "outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50",
        splitTriggerVariants[variant()],
        splitTriggerSizes[size()],
        local.disabled && "opacity-50"
      )}
      aria-label={zh() ? "\u6253\u5F00\u83DC\u5355" : "Open menu"}
    >
							{icons.chevronDown({ class: "h-4 w-4", "aria-hidden": "true" })}
						</KobalteDropdownMenu.Trigger>
					</div>
					<KobalteDropdownMenu.Portal>
						<KobalteDropdownMenu.Content
      class={cn(
        "z-[80] min-w-[160px] rounded-lg border border-surface-border bg-surface-raised p-1 shadow-lg"
      )}
    >
							<ButtonGroupMenuRenderer content={menuContent()} />
						</KobalteDropdownMenu.Content>
					</KobalteDropdownMenu.Portal>
				</KobalteDropdownMenu>
			</ButtonGroupSplitContext.Provider>;
  }
  const childClasses = () => local.filled ? groupChildClassesFilled : groupChildClasses;
  return <div
    data-torchui="button-group"
    role="group"
    class={cn(groupBaseClasses, childClasses(), local.class)}
    {...others}
  >
			{local.children}
		</div>;
}
function ButtonGroupMain(props) {
  const ctx = useContext4(ButtonGroupSplitContext);
  const [local, others] = splitProps4(props, ["variant", "size", "class", "children", "onChange"]);
  return <Button
    variant={local.variant ?? ctx.variant}
    size={local.size ?? ctx.size}
    disabled={others.disabled ?? ctx.disabled}
    disableElevation
    class={cn("!rounded-r-none !border-r-0", local.class)}
    {...others}
  >
			{local.children}
		</Button>;
}
function ButtonGroupMenu(props) {
  const child = props.children;
  const render = typeof child === "function" ? child : () => child ?? null;
  return { [BUTTON_GROUP_MENU_SYMBOL]: true, render };
}
var ButtonGroup = Object.assign(ButtonGroupRoot, {
  Main: ButtonGroupMain,
  Menu: ButtonGroupMenu
});

// src/components/actions/Copy.tsx
import { createMemo as createMemo3, splitProps as splitProps5 } from "solid-js";

// src/components/actions/useCopyToClipboard.ts
import { createSignal as createSignal2, onCleanup } from "solid-js";
var COPIED_RESET_MS = 2e3;
var hasAsyncClipboard = typeof navigator !== "undefined" && !!navigator.clipboard && typeof navigator.clipboard.writeText === "function";
function useCopyToClipboard() {
  const [status, setStatus] = createSignal2("idle");
  const copied = () => status() === "copied";
  let timeoutId;
  function setCopiedWithReset() {
    if (timeoutId) clearTimeout(timeoutId);
    setStatus("copied");
    timeoutId = setTimeout(() => {
      setStatus("idle");
      timeoutId = void 0;
    }, COPIED_RESET_MS);
  }
  function setError() {
    if (timeoutId) clearTimeout(timeoutId);
    setStatus("error");
    timeoutId = setTimeout(() => {
      setStatus("idle");
      timeoutId = void 0;
    }, COPIED_RESET_MS);
  }
  onCleanup(() => {
    if (timeoutId) clearTimeout(timeoutId);
  });
  function fallbackCopy(text) {
    if (typeof document === "undefined" || !document.body) return false;
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    try {
      ta.focus();
      ta.select();
      ta.setSelectionRange(0, ta.value.length);
      return document.execCommand("copy");
    } catch {
      return false;
    } finally {
      ta.parentNode?.removeChild(ta);
    }
  }
  async function copy(text) {
    if (hasAsyncClipboard) {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedWithReset();
        return true;
      } catch {
      }
    }
    const ok = fallbackCopy(text);
    if (ok) {
      setCopiedWithReset();
    } else {
      setError();
    }
    return ok;
  }
  return [copy, copied, status];
}

// src/components/actions/Copy.tsx
var filledVariants2 = ["primary", "danger", "success", "warning", "info"];
var borderlessVariants = ["ghost", "link", "danger-link"];
function Copy(props) {
  const [copy, copied] = useCopyToClipboard();
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const [local, rest] = splitProps5(props, [
    "text",
    "display",
    "label",
    "copiedLabel",
    "variant",
    "size",
    "class",
    "onCopied"
  ]);
  async function handleClick() {
    const ok = await copy(local.text);
    if (ok) local.onCopied?.();
  }
  const display = () => local.display ?? "icon-and-text";
  const label = () => local.label ?? (zh() ? "\u590D\u5236" : "Copy");
  const copiedLabel = () => local.copiedLabel ?? (zh() ? "\u5DF2\u590D\u5236" : "Copied");
  const isIconOnly = () => display() === "icon-only";
  const showIcon = () => display() === "icon-and-text" || display() === "icon-only";
  const checkIcon = createMemo3(() => icons.check({ class: "h-4 w-4 shrink-0", "aria-hidden": "true" }));
  const copyIcon = createMemo3(() => icons.copy({ class: "h-4 w-4 shrink-0", "aria-hidden": "true" }));
  const currentVariant = () => local.variant ?? "outlined";
  const resolvedVariant = () => copied() ? filledVariants2.includes(currentVariant()) ? "success" : "success-outline" : currentVariant();
  const copiedClass = () => copied() && borderlessVariants.includes(currentVariant()) ? "!border-0" : "";
  return <Button
    type="button"
    variant={resolvedVariant()}
    size={local.size ?? "sm"}
    iconOnly={isIconOnly()}
    icon={isIconOnly() ? copied() ? checkIcon() : copyIcon() : void 0}
    startIcon={!isIconOnly() && showIcon() ? copied() ? checkIcon() : copyIcon() : void 0}
    label={copied() ? copiedLabel() : label()}
    class={cn("shrink-0", copiedClass(), local.class)}
    title={isIconOnly() ? copied() ? copiedLabel() : label() : void 0}
    aria-label={isIconOnly() ? copied() ? copiedLabel() : label() : void 0}
    onClick={handleClick}
    {...rest}
  />;
}

// src/components/actions/Link.tsx
import { splitProps as splitProps6, Show } from "solid-js";
var linkVariants = {
  primary: "text-primary-500 font-medium hover:text-primary-600 hover:underline hover:underline-offset-4 focus-visible:ring-primary-500/50",
  muted: "text-ink-500 hover:text-ink-700 hover:underline hover:underline-offset-4 focus-visible:ring-ink-500/50"
};
function Link(props) {
  const [local, others] = splitProps6(props, ["variant", "class", "children", "iconStart", "iconEnd"]);
  const hasIcon = () => !!local.iconStart || !!local.iconEnd;
  return <a
    class={cn(
      "outline-none focus-visible:ring-2 rounded",
      "inline-flex items-center",
      hasIcon() && "gap-1",
      linkVariants[local.variant ?? "primary"],
      local.class
    )}
    {...others}
  >
			<Show when={local.iconStart}>{local.iconStart}</Show>
			{local.children}
			<Show when={local.iconEnd}>{local.iconEnd}</Show>
		</a>;
}

// src/components/actions/DarkModeToggle.tsx
import { createSignal as createSignal15, createEffect as createEffect10, onCleanup as onCleanup9, onMount as onMount7, Show as Show20 } from "solid-js";

// src/components/forms/Input.tsx
import { splitProps as splitProps7, Show as Show2, createSignal as createSignal3 } from "solid-js";
import { TextField as KobalteTextField } from "@kobalte/core/text-field";
function Input(props) {
  const [local, others] = splitProps7(props, [
    "label",
    "labelTrailing",
    "error",
    "helperText",
    "bare",
    "required",
    "optional",
    "size",
    "revealable",
    "type",
    "startAdornment",
    "endAdornment",
    "prefix",
    "suffix",
    "leftIcon",
    "rightIcon",
    "onValueChange",
    "onErrorClear",
    "class",
    "inputClass",
    "id",
    "value",
    "onInput",
    "ref",
    "disabled"
  ]);
  const icons = useIcons();
  const contextSize = useComponentSize();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const hasError = () => !!local.error;
  const sc = () => inputSizeConfig[local.size ?? contextSize ?? "md"];
  const handleChange = (val) => {
    if (local.error && local.onErrorClear) {
      local.onErrorClear();
    }
    local.onValueChange?.(val);
  };
  const handleInput = (e) => {
    if (local.onInput) {
      ;
      local.onInput(e);
    }
  };
  const startContent = () => local.startAdornment ?? local.leftIcon;
  const isPasswordRevealable = () => local.type === "password" && local.revealable === true;
  const [showPassword, setShowPassword] = createSignal3(false);
  const effectiveType = () => isPasswordRevealable() && showPassword() ? "text" : local.type ?? "text";
  const endContent = () => {
    if (isPasswordRevealable()) return null;
    return local.endAdornment ?? local.rightIcon;
  };
  const hasStart = () => !!startContent();
  const hasEnd = () => !!endContent() || isPasswordRevealable();
  const hasAffix = () => !!local.prefix || !!local.suffix;
  const adornmentClass = "absolute top-1/2 -translate-y-1/2 flex items-center justify-center text-ink-500 pointer-events-none z-10";
  return <KobalteTextField
    value={local.value != null ? String(local.value) : void 0}
    onChange={handleChange}
    validationState={hasError() ? "invalid" : void 0}
    required={local.required}
    disabled={local.disabled}
    class={cn("w-full", local.class)}
  >
			<Show2 when={!local.bare && (local.label || local.labelTrailing)}>
				<div class="flex items-center justify-between gap-2 mb-1.5">
					<Show2 when={local.label}>
						<KobalteTextField.Label
    class={cn(
      "block text-sm font-medium",
      hasError() ? "text-danger-600" : "text-ink-700"
    )}
  >
							{local.label}
							<Show2 when={local.required}>
								<span class="text-danger-500 dark:text-danger-400 ml-0.5" aria-hidden="true">*</span>
							</Show2>
						</KobalteTextField.Label>
					</Show2>
					<Show2 when={!local.label}>
						<span />
					</Show2>
					<div class="flex items-center gap-2 flex-shrink-0">
						<Show2 when={local.labelTrailing}>{local.labelTrailing}</Show2>
						<Show2 when={local.label && !local.required && local.optional}>
							<span class="text-xs text-ink-500">{zh() ? "\u9009\u586B" : "optional"}</span>
						</Show2>
					</div>
				</div>
			</Show2>

			<div class={cn(
    "flex items-center",
    hasAffix() && [
      "rounded-lg border overflow-hidden bg-surface-raised",
      hasError() ? "border-danger-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-danger-500" : "border-surface-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500",
      local.disabled && "bg-surface-dim"
    ],
    !hasAffix() && "relative"
  )}>
				{
    /* Prefix segment */
  }
				<Show2 when={local.prefix}>
					<div class={cn(
    "flex items-center self-stretch shrink-0 border-r border-surface-border bg-surface-overlay text-ink-500",
    sc().text,
    sc().pl,
    sc().pr
  )} aria-hidden="true">
						{local.prefix}
					</div>
				</Show2>

				{
    /* Input area */
  }
				<div class={cn("relative", hasAffix() ? "flex-1 min-w-0" : "w-full")}>
					<Show2 when={startContent()}>
						<div
    class={cn(adornmentClass, sc().text, sc().adornStart)}
    aria-hidden="true"
  >
							{startContent()}
						</div>
					</Show2>

					<KobalteTextField.Input
    ref={local.ref}
    id={local.id}
    type={effectiveType()}
    onInput={handleInput}
    class={cn(
      "w-full transition-all outline-none text-ink-900 placeholder:text-ink-400",
      sc().h,
      sc().py,
      sc().text,
      hasStart() ? sc().plAdorn : sc().pl,
      hasEnd() ? sc().prAdorn : sc().pr,
      hasAffix() ? "bg-surface-raised border-none ring-0 disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed" : cn(
        "rounded-lg border bg-surface-raised",
        hasError() ? "border-danger-500 focus:ring-2 focus:ring-inset focus:ring-danger-500 focus:border-transparent" : "border-surface-border focus:ring-2 focus:ring-inset focus:ring-primary-500 focus:border-transparent",
        "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed"
      ),
      local.inputClass
    )}
    {...others}
  />

					<Show2 when={endContent()}>
						<div
    class={cn(adornmentClass, sc().text, sc().adornEnd)}
    aria-hidden="true"
  >
							{endContent()}
						</div>
					</Show2>
					<Show2 when={isPasswordRevealable()}>
						<button
    type="button"
    onClick={() => setShowPassword((v) => !v)}
    class={cn(
      "absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded p-1 z-10 text-ink-500 hover:text-ink-700 hover:bg-surface-overlay",
      sc().adornEnd,
      sc().text
    )}
    aria-label={showPassword() ? zh() ? "\u9690\u85CF\u5BC6\u7801" : "Hide password" : zh() ? "\u663E\u793A\u5BC6\u7801" : "Show password"}
  >
							{showPassword() ? icons.eyeOff({ class: "h-4 w-4", "aria-hidden": "true" }) : icons.eye({ class: "h-4 w-4", "aria-hidden": "true" })}
						</button>
					</Show2>
				</div>

				{
    /* Suffix segment */
  }
				<Show2 when={local.suffix}>
					<div class={cn(
    "flex items-center self-stretch shrink-0 border-l border-surface-border bg-surface-overlay text-ink-500",
    sc().text,
    sc().pl,
    sc().pr
  )} aria-hidden="true">
						{local.suffix}
					</div>
				</Show2>
			</div>

			<Show2 when={!local.bare && local.helperText && !hasError()}>
				<KobalteTextField.Description class="mt-2 text-sm text-ink-500">
					{local.helperText}
				</KobalteTextField.Description>
			</Show2>

			<Show2 when={!local.bare}>
				<KobalteTextField.ErrorMessage class="mt-2 text-sm text-danger-600">
					{local.error}
				</KobalteTextField.ErrorMessage>
			</Show2>
		</KobalteTextField>;
}

// src/components/forms/TextArea.tsx
import {
  splitProps as splitProps8,
  Show as Show3,
  createEffect as createEffect2,
  onMount,
  onCleanup as onCleanup2,
  createUniqueId
} from "solid-js";
import { TextField as KobalteTextField2 } from "@kobalte/core/text-field";

// src/utilities/mergeRefs.ts
function mergeRefs(...refs) {
  return (el) => {
    for (const ref of refs) {
      if (ref == null) continue;
      if (typeof ref === "function") ref(el);
      else if (typeof ref === "object" && "current" in ref) {
        ref.current = el;
      }
    }
  };
}

// src/components/forms/TextArea.tsx
var resizeClasses = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize"
};
function TextArea(props) {
  const [local, others] = splitProps8(props, [
    "label",
    "error",
    "helperText",
    "bare",
    "required",
    "optional",
    "resize",
    "maxLength",
    "autoresize",
    "onValueChange",
    "onErrorClear",
    "class",
    "inputClass",
    "id",
    "value",
    "onInput",
    "rows",
    "ref",
    "disabled"
  ]);
  if (false) {
    if (others["aria-label"] == null && others["aria-labelledby"] == null && others["title"] == null) {
    }
  }
  const hasError = () => !!local.error;
  const valueString = () => typeof local.value === "string" ? local.value : local.value == null ? "" : String(local.value);
  const currentLength = () => valueString().length;
  const maxLen = () => local.maxLength ?? 0;
  const atOrOverLimit = () => maxLen() > 0 && currentLength() >= maxLen();
  const nearLimit = () => maxLen() > 0 && currentLength() >= maxLen() * 0.9 && currentLength() < maxLen();
  const hasMaxLengthError = () => atOrOverLimit();
  const countColorClass = () => atOrOverLimit() ? "text-danger-600 dark:text-danger-400" : nearLimit() ? "text-warning-600 dark:text-warning-400" : "text-ink-500";
  let textareaRef;
  const resizeIfAutoresize = () => {
    const el = textareaRef;
    if (!el || !local.autoresize) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };
  createEffect2(() => {
    if (!local.autoresize) return;
    valueString();
    queueMicrotask(resizeIfAutoresize);
  });
  onMount(() => {
    if (local.autoresize) queueMicrotask(resizeIfAutoresize);
  });
  onCleanup2(() => {
    if (textareaRef && local.autoresize) textareaRef.style.height = "";
  });
  const handleChange = (val) => {
    if (local.error && local.onErrorClear) local.onErrorClear();
    local.onValueChange?.(val);
  };
  const handleInput = (e) => {
    if (local.onInput) local.onInput(e);
  };
  const resizeClass = () => local.autoresize ? "resize-none" : resizeClasses[local.resize ?? "vertical"];
  const uid = createUniqueId();
  const helperId = () => !local.bare && local.helperText && !hasError() ? `ta-${uid}-help` : void 0;
  const errorId = () => !local.bare && local.error ? `ta-${uid}-error` : void 0;
  const describedBy = () => {
    const user = others["aria-describedby"];
    const own = [helperId(), errorId()].filter(Boolean).join(" ");
    return user && own ? `${user} ${own}` : user ?? (own || void 0);
  };
  return <KobalteTextField2
    value={local.value != null ? valueString() : void 0}
    onChange={handleChange}
    validationState={hasError() ? "invalid" : void 0}
    required={local.required}
    disabled={local.disabled}
    class={cn("w-full", local.class)}
  >
			<Show3 when={!local.bare && local.label}>
				<div class="flex items-center justify-between gap-2 mb-1.5">
					<KobalteTextField2.Label class={cn("block text-sm font-medium", hasError() ? "text-danger-600" : "text-ink-700")}>
						{local.label}
						<Show3 when={local.required}>
							<span class="text-danger-500 ml-0.5" aria-hidden="true">*</span>
						</Show3>
					</KobalteTextField2.Label>
					<Show3 when={local.label && !local.required && local.optional}>
						<span class="text-xs text-ink-500">optional</span>
					</Show3>
				</div>
			</Show3>

			<KobalteTextField2.TextArea
    ref={mergeRefs((el) => textareaRef = el, local.ref)}
    id={local.id}
    onInput={handleInput}
    rows={local.rows ?? 3}
    maxLength={local.maxLength}
    aria-invalid={hasError() || hasMaxLengthError() ? "true" : void 0}
    aria-describedby={describedBy()}
    aria-errormessage={hasError() ? errorId() : void 0}
    class={cn(
      "w-full py-3 px-4 rounded-lg transition-all outline-none border text-base text-ink-900 placeholder:text-ink-400 min-h-[80px] bg-surface-raised",
      resizeClass(),
      hasError() || hasMaxLengthError() ? "border-danger-500 focus:ring-2 focus:ring-inset focus:ring-danger-500 focus:border-transparent" : "border-surface-border focus:ring-2 focus:ring-inset focus:ring-primary-500 focus:border-transparent",
      "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed",
      local.inputClass
    )}
    {...others}
  />

			<Show3 when={!local.bare && local.maxLength != null && local.maxLength > 0}>
				<div class="mt-1.5 flex items-center justify-between gap-2">
					<span />
					<span class={cn("text-xs tabular-nums", countColorClass())}>
						{currentLength()}/{local.maxLength}
					</span>
				</div>
			</Show3>

			<Show3 when={!local.bare && local.helperText && !hasError()}>
				<KobalteTextField2.Description id={helperId()} class="mt-2 text-sm text-ink-500">
					{local.helperText}
				</KobalteTextField2.Description>
			</Show3>

			<Show3 when={!local.bare && local.error}>
				<KobalteTextField2.ErrorMessage id={errorId()} class="mt-2 text-sm text-danger-600">
					{local.error}
				</KobalteTextField2.ErrorMessage>
			</Show3>
		</KobalteTextField2>;
}

// src/components/forms/Select.tsx
import { createSignal as createSignal4, createUniqueId as createUniqueId2, onCleanup as onCleanup3, splitProps as splitProps9, Show as Show4 } from "solid-js";
import { Select as KobalteSelect } from "@kobalte/core/select";
function statusColorStyle(color) {
  if (color == null || color === "") return void 0;
  const t = color.trim();
  if (t.startsWith("#") || t.startsWith("rgb") || /^[a-z]+$/i.test(t)) return t;
  return void 0;
}
function resolveOptionIcon(icon2) {
  return typeof icon2 === "function" ? icon2() : icon2;
}
function StatusDot(props) {
  const style = () => {
    const c = statusColorStyle(props.color);
    return c ? { "background-color": c } : void 0;
  };
  return <span
    class="size-2.5 shrink-0 rounded-full border border-ink-200/80"
    classList={{ "bg-ink-400": !statusColorStyle(props.color) }}
    style={style()}
    aria-hidden="true"
  />;
}
var Select = (props) => {
  const [local, others] = splitProps9(props, [
    "label",
    "error",
    "helperText",
    "bare",
    "required",
    "optional",
    "options",
    "groups",
    "placeholder",
    "value",
    "onValueChange",
    "onErrorClear",
    "disabled",
    "class",
    "triggerClass",
    "size",
    "searchable",
    "clearable",
    "modal",
    "ref",
    "id",
    // aria-* on the wrapper would miss the actual trigger; forward these to KobalteSelect instead.
    "aria-label",
    "aria-labelledby"
  ]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const contextSize = useComponentSize();
  const [searchQuery, setSearchQuery] = createSignal4("");
  const sc = () => inputSizeConfig[local.size ?? contextSize ?? "md"];
  const hasError = () => !!local.error;
  const uid = createUniqueId2();
  const helperId = () => !local.bare && local.helperText ? `select-${uid}-help` : void 0;
  const errorId = () => !local.bare && local.error ? `select-${uid}-error` : void 0;
  const describedBy = () => [helperId(), errorId()].filter(Boolean).join(" ") || void 0;
  const allFlatOptions = () => {
    if (local.options) return local.options;
    if (local.groups) return local.groups.flatMap((g) => g.options);
    return [];
  };
  const selectedOption = () => local.value != null ? allFlatOptions().find((opt) => opt.value === local.value) : void 0;
  const showClear = () => !!local.clearable && !local.disabled && !!local.value && !!selectedOption();
  const controlledValue = () => local.value != null ? selectedOption() ?? null : void 0;
  const filteredOptions = () => {
    const opts = local.options ?? [];
    if (!local.searchable) return opts;
    const q = searchQuery().trim().toLowerCase();
    if (!q) return opts;
    const selected = selectedOption();
    const filtered = opts.filter((o) => o.label.toLowerCase().includes(q));
    if (selected && !filtered.some((o) => o.value === selected.value))
      return [selected, ...filtered];
    return filtered;
  };
  const filteredGroups = () => {
    const grps = local.groups ?? [];
    if (!local.searchable) return grps;
    const q = searchQuery().trim().toLowerCase();
    if (!q) return grps;
    const selectedVal = local.value;
    return grps.map((g) => ({
      ...g,
      options: g.options.filter(
        (o) => o.label.toLowerCase().includes(q) || o.value === selectedVal
      )
    })).filter((g) => g.options.length > 0);
  };
  const handleChange = (option) => {
    if (local.error && local.onErrorClear) {
      local.onErrorClear();
    }
    local.onValueChange?.(option ? option.value : "");
  };
  let searchInputRef;
  const handleOpenChange = (open) => {
    if (!open) setSearchQuery("");
    else if (local.searchable) {
      requestAnimationFrame(() => searchInputRef?.focus());
    }
  };
  const observeHighlightedScrollIntoView = (el) => {
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.attributeName === "data-highlighted" && m.target instanceof HTMLElement && m.target.hasAttribute("data-highlighted") && typeof m.target.scrollIntoView === "function") {
          m.target.scrollIntoView({ block: "nearest" });
        }
      }
    });
    observer.observe(el, {
      attributes: true,
      attributeFilter: ["data-highlighted"],
      subtree: true
    });
    onCleanup3(() => observer.disconnect());
  };
  const renderItem = (itemProps) => <KobalteSelect.Item
    item={itemProps.item}
    class="relative flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer outline-none text-ink-900 data-[highlighted]:bg-primary-50 data-[highlighted]:text-primary-900 data-[disabled]:bg-surface-dim data-[disabled]:text-ink-500 data-[disabled]:cursor-not-allowed"
  >
			<KobalteSelect.ItemLabel class="flex-1">
				<span class="flex min-w-0 items-center gap-2">
					<Show4 when={statusColorStyle(itemProps.item.rawValue.color)}>
						<StatusDot color={itemProps.item.rawValue.color} />
					</Show4>
					<Show4 when={itemProps.item.rawValue.icon}>
						<span class="flex-shrink-0 text-ink-500">{resolveOptionIcon(itemProps.item.rawValue.icon)}</span>
					</Show4>
					<span class="min-w-0 truncate">{itemProps.item.rawValue.label}</span>
				</span>
			</KobalteSelect.ItemLabel>
			<KobalteSelect.ItemIndicator class="inline-flex items-center">
				{icons.check({ class: "w-4 h-4 text-primary-500", "aria-hidden": "true" })}
			</KobalteSelect.ItemIndicator>
		</KobalteSelect.Item>;
  const renderSection = (sectionProps) => <KobalteSelect.Section class="[&+&]:border-t [&+&]:border-surface-border [&+&]:mt-1 [&+&]:pt-1">
			<div class="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-ink-400 select-none">
				{sectionProps.section.rawValue.group}
			</div>
		</KobalteSelect.Section>;
  const renderInner = () => <>
		<Show4 when={!local.bare && local.label}>

			<div class="flex items-center justify-between mb-1.5">

				<KobalteSelect.Label class={cn("block text-sm font-medium", hasError() ? "text-danger-600" : "text-ink-700")}>

					{local.label}

					<Show4 when={local.required}>

						<span class="ml-0.5 text-danger-500" aria-hidden="true">*</span>

					</Show4>

				</KobalteSelect.Label>

				<Show4 when={local.label && !local.required && local.optional}>

					<span class="text-xs text-ink-500">optional</span>

				</Show4>

			</div>

		</Show4>



		<div
    class={cn(
      "w-full flex flex-col min-h-0 relative rounded-lg border transition-all overflow-hidden",
      sc().h,
      hasError() ? "border-danger-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-danger-500 focus-within:border-transparent" : "border-surface-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 focus-within:border-transparent",
      "bg-surface-raised"
    )}
  >

			<KobalteSelect.Trigger
    aria-invalid={hasError() ? "true" : void 0}
    aria-describedby={describedBy()}
    aria-errormessage={hasError() ? errorId() : void 0}
    class={cn(
      "w-full h-full min-w-0 flex items-center gap-1 rounded-lg transition-all outline-none bg-transparent text-ink-900 text-left border-0 focus:ring-0",
      sc().py,
      sc().text,
      sc().pl,
      sc().pr,
      hasError() ? "focus:border-transparent" : "",
      "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed",
      "data-[placeholder-shown]:text-ink-400",
      showClear() && "pr-8",
      local.triggerClass
    )}
  >

				<KobalteSelect.Value class="min-w-0 flex-1 truncate text-left basis-0">

					{(state) => {
    const sel = state.selectedOption();
    const opt = sel && sel.value != null ? allFlatOptions().find((o) => o.value === sel.value) ?? sel : sel;
    if (!opt) return <span class="truncate">{local.placeholder || (zh() ? "\u8BF7\u9009\u62E9" : "Select an option")}</span>;
    return <span class="min-w-0 flex-1 truncate text-left flex items-center gap-2">

								<Show4 when={statusColorStyle(opt.color)}>

									<StatusDot color={opt.color} />

								</Show4>

								<Show4 when={opt.icon}>

									<span class="shrink-0 text-ink-500">{resolveOptionIcon(opt.icon)}</span>

								</Show4>

								<span class="min-w-0 truncate">{opt.label}</span>

							</span>;
  }}

				</KobalteSelect.Value>

				<Show4 when={!showClear()}>

					<KobalteSelect.Icon class="inline-flex shrink-0 w-4 items-center justify-center text-ink-400">

						{icons.chevronDown({ class: "h-3.5 w-3.5", "aria-hidden": "true" })}

					</KobalteSelect.Icon>

				</Show4>

			</KobalteSelect.Trigger>

			<Show4 when={showClear()}>

				<button
    type="button"
    aria-label={zh() ? "\u6E05\u9664\u9009\u62E9" : "Clear selection"}
    class="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-ink-400 hover:text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
    onClick={(e) => {
      e.stopPropagation();
      handleChange(null);
    }}
  >

					{icons.close({ class: "h-3.5 w-3.5", "aria-hidden": "true" })}

				</button>

			</Show4>

		</div>



		<Show4 when={!local.bare && !hasError() && local.helperText}>

			<KobalteSelect.Description id={helperId()} class="mt-2 text-sm text-ink-500">

				{local.helperText}

			</KobalteSelect.Description>

		</Show4>



		<Show4 when={!local.bare && hasError()}>

			<KobalteSelect.ErrorMessage id={errorId()} class="mt-2 text-sm text-danger-600">

				{local.error}

			</KobalteSelect.ErrorMessage>

		</Show4>



		<KobalteSelect.Portal>

			<KobalteSelect.Content
    data-kb-top-layer
    class={cn(
      "bg-surface-raised rounded-lg border border-surface-border shadow-lg mt-2 z-[100] flex flex-col max-h-60",
      local.searchable ? "py-0 overflow-hidden" : "py-1 overflow-auto"
    )}
  >

				<Show4 when={local.searchable}>

					<div
    class="shrink-0 border-b border-surface-border p-2"
    onKeyDown={(e) => e.stopPropagation()}
    onPointerDown={(e) => e.stopPropagation()}
    onMouseDown={(e) => e.stopPropagation()}
  >

						<input
    ref={(el) => searchInputRef = el}
    type="text"
    value={searchQuery()}
    onInput={(e) => setSearchQuery(e.currentTarget.value)}
    placeholder={zh() ? "\u641C\u7D22..." : "Search..."}
    class={cn(
      "h-9 w-full rounded-md border border-surface-border bg-surface-raised px-3 py-1.5 text-sm text-ink-900 placeholder:text-ink-400 outline-none focus:ring-2 focus:ring-inset focus:border-transparent",
      hasError() ? "focus:ring-danger-500" : "focus:ring-primary-500"
    )}
  />

					</div>

				</Show4>

				<div
    ref={observeHighlightedScrollIntoView}
    class={cn("outline-none min-h-0", local.searchable && "flex-1 overflow-auto py-1")}
  >

					<KobalteSelect.Listbox class="outline-none" />

				</div>

			</KobalteSelect.Content>

		</KobalteSelect.Portal>
	</>;
  return <div ref={local.ref} id={local.id} class={cn("w-full", local.class)} {...others}>

			<Show4
    when={local.groups && local.groups.length > 0}
    fallback={<KobalteSelect
      value={controlledValue()}
      onChange={handleChange}
      options={filteredOptions()}
      onOpenChange={handleOpenChange}
      optionValue="value"
      optionTextValue="label"
      placeholder={local.placeholder || (zh() ? "\u8BF7\u9009\u62E9" : "Select an option")}
      disabled={local.disabled}
      validationState={hasError() ? "invalid" : void 0}
      closeOnSelection={true}
      allowDuplicateSelectionEvents={false}
      itemComponent={renderItem}
      modal={local.modal}
      aria-label={local["aria-label"]}
      aria-labelledby={local["aria-labelledby"]}
    >
						{renderInner()}
					</KobalteSelect>}
  >
				<KobalteSelect
    value={controlledValue()}
    onChange={handleChange}
    options={filteredGroups()}
    onOpenChange={handleOpenChange}
    optionValue="value"
    optionTextValue="label"
    optionGroupChildren="options"
    placeholder={local.placeholder || (zh() ? "\u8BF7\u9009\u62E9" : "Select an option")}
    disabled={local.disabled}
    validationState={hasError() ? "invalid" : void 0}
    closeOnSelection={true}
    allowDuplicateSelectionEvents={false}
    itemComponent={renderItem}
    sectionComponent={renderSection}
    modal={local.modal}
    aria-label={local["aria-label"]}
    aria-labelledby={local["aria-labelledby"]}
  >
					{renderInner()}
				</KobalteSelect>
		</Show4>

		</div>;
};

// src/components/forms/Autocomplete.tsx
import { createEffect as createEffect3, createMemo as createMemo4, createSignal as createSignal5, Show as Show5, splitProps as splitProps10, onMount as onMount2 } from "solid-js";
import { Combobox as KobalteCombobox } from "@kobalte/core/combobox";
var autocompleteStyles = `

.torchui-combobox-content {

	transform-origin: var(--kb-combobox-content-transform-origin);

	opacity: 0;

	animation: torchui-combobox-hide 150ms ease-in forwards;

}

.torchui-combobox-content[data-expanded] {

	opacity: 1;

	animation: torchui-combobox-show 150ms ease-out;

}

@keyframes torchui-combobox-show {

	from { opacity: 0; transform: translateY(-8px); }

	to { opacity: 1; transform: translateY(0); }

}

@keyframes torchui-combobox-hide {

	from { opacity: 1; transform: translateY(0); }

	to { opacity: 0; transform: translateY(-8px); }

}

`;
var COMBOBOX_STYLE_ID = "torchui-combobox-styles";
function ensureComboboxStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(COMBOBOX_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = COMBOBOX_STYLE_ID;
  style.textContent = autocompleteStyles;
  document.head.appendChild(style);
}
function Autocomplete(props) {
  const [local, others] = splitProps10(props, [
    "label",
    "error",
    "helperText",
    "bare",
    "required",
    "optional",
    "options",
    "placeholder",
    "value",
    "onValueChange",
    "onErrorClear",
    "class",
    "disabled",
    "disableClearable",
    "size",
    "getOptionDisabled",
    "filterOptions",
    "inputValue",
    "onInputChange",
    "renderOption",
    "triggerMode",
    "ref",
    // forwarded to the underlying combobox input
    "id",
    "aria-label",
    "aria-labelledby"
  ]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const contextSize = useComponentSize();
  const hasError = () => !!local.error;
  const [inputValueState, setInputValueState] = createSignal5("");
  const [dirty, setDirty] = createSignal5(false);
  const inputValue = () => local.inputValue ?? inputValueState();
  createEffect3(() => {
    if (local.inputValue !== void 0) return;
    if (dirty()) return;
    const opt = local.options.find((o) => o.value === local.value) ?? null;
    setInputValueState(opt?.label ?? "");
  });
  const optionsWithDisabled = (opts) => local.getOptionDisabled ? opts.map((o) => ({ ...o, disabled: local.getOptionDisabled(o) })) : opts;
  const optionsForRoot = createMemo4(() => {
    let base = local.filterOptions && dirty() ? local.filterOptions(local.options, inputValue()) : local.options;
    const selected = local.options.find((o) => o.value === local.value);
    if (selected && !base.some((o) => o.value === selected.value)) {
      base = [selected, ...base];
    }
    return optionsWithDisabled(base);
  });
  const selectedOption = createMemo4(() => {
    if (!local.value) return null;
    return optionsForRoot().find((o) => o.value === local.value) ?? null;
  });
  const handleChange = (option) => {
    if (local.error && local.onErrorClear) local.onErrorClear();
    setDirty(false);
    if (!option) {
      if (local.inputValue === void 0) setInputValueState("");
      if (local.value) local.onValueChange?.("");
      return;
    }
    local.onValueChange?.(option.value);
    if (local.inputValue === void 0) setInputValueState(option.label);
  };
  const handleInputChange = (value) => {
    if (local.error && local.onErrorClear) local.onErrorClear();
    setDirty(true);
    if (local.inputValue === void 0) setInputValueState(value);
    local.onInputChange?.(value);
    if (value === "") {
      local.onValueChange?.("");
    }
  };
  const handleClear = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDirty(false);
    if (local.inputValue === void 0) setInputValueState("");
    local.onInputChange?.("");
    local.onValueChange?.("");
    const wrapper = e.currentTarget.closest("div.w-full");
    const input = wrapper?.querySelector("input");
    if (input && input.value !== "") {
      input.value = "";
      input.dispatchEvent(new Event("input", { bubbles: true }));
      setDirty(false);
    }
  };
  onMount2(ensureComboboxStyles);
  const sc = () => inputSizeConfig[local.size ?? contextSize ?? "md"];
  return <div ref={local.ref} class={cn("w-full", local.class)}>

			<KobalteCombobox
    options={optionsForRoot()}
    optionValue="value"
    optionTextValue="label"
    optionLabel="label"
    optionDisabled="disabled"
    value={selectedOption()}
    defaultFilter={local.filterOptions ? () => true : (option, input) => {
      const selectedLabel = selectedOption()?.label;
      if (selectedLabel && input === selectedLabel) return true;
      const label = typeof option === "object" && option !== null ? String(option.label ?? "") : String(option);
      return label.toLowerCase().includes(input.toLowerCase());
    }}
    triggerMode={local.triggerMode ?? "input"}
    disabled={local.disabled}
    onChange={handleChange}
    onInputChange={handleInputChange}
    noResetInputOnBlur
    itemComponent={(itemProps) => <KobalteCombobox.Item
      item={itemProps.item}
      class="relative flex items-center justify-between px-3 py-2 text-sm text-ink-900 cursor-pointer outline-none data-[highlighted]:bg-primary-50 data-[highlighted]:text-primary-900 data-[disabled]:bg-surface-dim data-[disabled]:text-ink-500 data-[disabled]:cursor-not-allowed"
    >

						<KobalteCombobox.ItemLabel class="flex-1">

							{local.renderOption ? local.renderOption(itemProps.item.rawValue) : <span>{itemProps.item.rawValue.label}</span>}

						</KobalteCombobox.ItemLabel>

						<KobalteCombobox.ItemIndicator class="inline-flex items-center">

							{icons.check({ class: "w-4 h-4 text-primary-500", "aria-hidden": "true" })}

						</KobalteCombobox.ItemIndicator>

					</KobalteCombobox.Item>}
  >

				<KobalteCombobox.HiddenSelect />

				<Show5 when={!local.bare && local.label}>

					<div class="flex items-center justify-between mb-1.5">

						<KobalteCombobox.Label class={cn("block text-sm font-medium", hasError() ? "text-danger-600" : "text-ink-700")}>

							{local.label}

							<Show5 when={local.required}>

								<span class="text-danger-500 ml-0.5" aria-hidden="true">*</span>

							</Show5>

						</KobalteCombobox.Label>

						<Show5 when={local.label && !local.required && local.optional}>

							<span class="text-xs text-ink-500">optional</span>

						</Show5>

					</div>

				</Show5>

				<KobalteCombobox.Control
    class={cn(
      "w-full flex cursor-pointer items-center rounded-lg transition-colors outline-none text-ink-900 bg-surface-raised border",
      hasError() ? "border-danger-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-danger-500" : "border-surface-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 focus-within:border-transparent",
      sc().h,
      sc().py,
      sc().text,
      sc().pl,
      sc().pr,
      local.disabled && "bg-surface-base text-ink-500 pointer-events-none"
    )}
  >

					<KobalteCombobox.Input
    class="flex-1 min-w-0 bg-transparent outline-none text-ink-900 placeholder:text-ink-400 disabled:cursor-not-allowed"
    placeholder={local.placeholder || (zh() ? "\u641C\u7D22..." : "Search...")}
    disabled={local.disabled}
    id={local.id}
    aria-label={local["aria-label"]}
    aria-labelledby={local["aria-labelledby"]}
  />

					{
    /* Clear + dropdown button group: tight layout with input content (no gap-2 spacing) */
  }

					<div class="flex items-center gap-0.5">

					<Show5 when={!local.disableClearable}>

						<button
    type="button"
    aria-label={zh() ? "\u6E05\u9664" : "Clear"}
    class={cn(
      "shrink-0 rounded p-0.5 text-ink-400 hover:bg-surface-overlay hover:text-ink-600 outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset",
      !local.value && inputValue().length === 0 && "invisible"
    )}
    tabIndex={!local.value && inputValue().length === 0 ? -1 : 0}
    onClick={handleClear}
  >

							{icons.close({ class: "h-4 w-4", "aria-hidden": "true" })}

						</button>

					</Show5>

					<KobalteCombobox.Trigger
    class="shrink-0 rounded p-0.5 text-ink-400 hover:bg-surface-overlay hover:text-ink-600"
    aria-label={zh() ? "\u6253\u5F00\u9009\u9879" : "Open options"}
  >

						{icons.chevronDown({ class: "h-4 w-4", "aria-hidden": "true" })}

					</KobalteCombobox.Trigger>

					</div>

				</KobalteCombobox.Control>

				<Show5 when={!local.bare && !hasError() && local.helperText}>

					<p class="mt-2 text-sm text-ink-500">{local.helperText}</p>

				</Show5>

				<Show5 when={!local.bare && hasError()}>

					<p class="mt-2 text-sm text-danger-600">{local.error}</p>

				</Show5>



				<KobalteCombobox.Portal>

					{
    /* Mark as top layer so the enclosing modal Dialog's ariaHideOutside does not set aria-hidden on this portaled content */
  }
					<KobalteCombobox.Content
    data-kb-top-layer
    class="torchui-combobox-content bg-surface-raised rounded-lg border border-surface-border shadow-lg mt-2 py-1 max-h-60 overflow-auto z-[80]"
    onCloseAutoFocus={(e) => e.preventDefault()}
  >

						<KobalteCombobox.Listbox class="outline-none" />

					</KobalteCombobox.Content>

				</KobalteCombobox.Portal>

			</KobalteCombobox>

		</div>;
}

// src/components/forms/MultiSelect.tsx
import { createMemo as createMemo6, createSignal as createSignal7, createUniqueId as createUniqueId3, For as For2, Show as Show6, splitProps as splitProps11, onMount as onMount3, onCleanup as onCleanup5 } from "solid-js";
import { Select as KobalteSelect2 } from "@kobalte/core/select";

// src/utilities/createSortableDrag.ts
import { createSignal as createSignal6, createMemo as createMemo5, onCleanup as onCleanup4 } from "solid-js";
function createSortableDrag(options) {
  const [activeId, setActiveId] = createSignal6(null);
  const [overId, setOverId] = createSignal6(null);
  let itemRects = [];
  let containerEl = null;
  let cleanupListeners = null;
  const isDragging = () => activeId() !== null;
  function getItemEls() {
    if (!containerEl) return [];
    return Array.from(
      containerEl.querySelectorAll("[data-sortable-id]")
    ).map((el) => ({ id: el.dataset.sortableId, el }));
  }
  function measureRects() {
    itemRects = getItemEls().map(({ id, el }) => ({
      id,
      rect: el.getBoundingClientRect()
    }));
  }
  function hitTest(x, y) {
    for (const { id, rect } of itemRects) {
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        return id;
      }
    }
    let closest = null;
    let closestDist = Infinity;
    for (const { id, rect } of itemRects) {
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(x - cx, y - cy);
      if (dist < closestDist) {
        closestDist = dist;
        closest = id;
      }
    }
    return closest;
  }
  function computeDisplacements(dragId, dropId) {
    const result = /* @__PURE__ */ new Map();
    const items = options.items();
    const dragIndex = items.findIndex((i) => i.id === dragId);
    const dropIndex = items.findIndex((i) => i.id === dropId);
    if (dragIndex === -1 || dropIndex === -1) return result;
    const reordered = items.map((i) => i.id);
    reordered.splice(dropIndex, 0, ...reordered.splice(dragIndex, 1));
    const rectById = new Map(itemRects.map((r) => [r.id, r.rect]));
    for (let newIdx = 0; newIdx < reordered.length; newIdx++) {
      const id = reordered[newIdx];
      if (id === dragId) continue;
      const origIdx = items.findIndex((i) => i.id === id);
      if (origIdx === newIdx) continue;
      const originalRect = rectById.get(id);
      const targetItemId = items[newIdx]?.id;
      const targetRect = targetItemId ? rectById.get(targetItemId) : void 0;
      if (!originalRect || !targetRect) continue;
      result.set(id, {
        x: targetRect.left - originalRect.left,
        y: targetRect.top - originalRect.top
      });
    }
    return result;
  }
  const displacementMap = createMemo5(() => {
    const dragId = activeId();
    const hoverOverId = overId();
    if (!dragId || !hoverOverId || dragId === hoverOverId) return /* @__PURE__ */ new Map();
    return computeDisplacements(dragId, hoverOverId);
  });
  function getTransform(id) {
    if (id === activeId()) return "";
    const d = displacementMap().get(id);
    if (!d) return "";
    return `translate(${d.x}px, ${d.y}px)`;
  }
  function onPointerMove(e) {
    const hit = hitTest(e.clientX, e.clientY);
    if (hit) setOverId(hit);
  }
  function onPointerUp() {
    const dragId = activeId();
    const dropId = overId();
    cleanupListeners?.();
    cleanupListeners = null;
    if (dragId && dropId && dragId !== dropId) {
      const items = options.items();
      const from = items.findIndex((i) => i.id === dragId);
      const to = items.findIndex((i) => i.id === dropId);
      if (from !== -1 && to !== -1) {
        const next = items.map((i) => i.id);
        next.splice(to, 0, ...next.splice(from, 1));
        options.onReorder(next);
      }
    }
    setActiveId(null);
    setOverId(null);
    itemRects = [];
  }
  function onPointerCancel() {
    cleanupListeners?.();
    cleanupListeners = null;
    setActiveId(null);
    setOverId(null);
    itemRects = [];
  }
  function handlePointerDown(id, e) {
    if (e.button !== 0) return;
    e.preventDefault();
    containerEl = e.currentTarget.closest(
      "[data-sortable-container]"
    );
    measureRects();
    setActiveId(id);
    setOverId(id);
    const move = (e2) => onPointerMove(e2);
    const up = () => onPointerUp();
    const cancel = () => onPointerCancel();
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", up);
    document.addEventListener("pointercancel", cancel);
    cleanupListeners = () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", up);
      document.removeEventListener("pointercancel", cancel);
    };
  }
  onCleanup4(() => cleanupListeners?.());
  return { activeId, overId, getTransform, isDragging, handlePointerDown };
}

// src/components/forms/MultiSelect.tsx
function ChipDragOverlay(props) {
  const icons = useIcons();
  const contextSize = useComponentSize();
  const effectiveSize = () => props.size ?? contextSize ?? "md";
  let el;
  const onMove = (e) => {
    if (!el) return;
    el.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
  };
  const cleanup = () => document.removeEventListener("pointermove", onMove);
  onMount3(() => {
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", cleanup, { once: true });
    document.addEventListener("pointercancel", cleanup, { once: true });
  });
  onCleanup5(cleanup);
  return <span
    ref={(e) => el = e}
    style={{
      position: "fixed",
      top: "0",
      left: "0",
      transform: `translate(${props.startX - 12}px, ${props.startY - 12}px)`,
      width: props.width != null ? `${props.width}px` : void 0,
      height: props.height != null ? `${props.height}px` : void 0,
      "pointer-events": "none",
      "z-index": "50",
      "will-change": "transform"
    }}
    class={cn(
      "inline-flex shrink-0 items-center gap-1.5 rounded-md font-medium bg-ink-100 text-ink-700 shadow-md select-none",
      props.width == null && "max-w-[200px]",
      effectiveSize() === "xs" && "px-1.5 py-0.5 text-xs",
      effectiveSize() === "sm" && "px-1.5 py-0.5 text-xs",
      (effectiveSize() === "md" || effectiveSize() === "lg" || effectiveSize() === "xl") && "px-2 py-1 text-sm"
    )}
  >

			{icons.dragHandle({ class: "h-3.5 w-3.5 text-ink-400", "aria-hidden": "true" })}

			<Show6 when={props.icon}>

				<span class="shrink-0 text-current opacity-70">{props.icon}</span>

			</Show6>

			<span class="min-w-0 truncate">{props.label}</span>

		</span>;
}
function ChipContent(props) {
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const isActive = () => props.isActive?.() === true;
  const isDragging = () => props.isDragging?.() === true;
  return <span
    data-sortable-id={props.opt.value}
    style={{
      transition: void 0,
      opacity: isActive() && isDragging() ? "0" : void 0,
      visibility: isActive() && isDragging() ? "hidden" : void 0,
      "pointer-events": isActive() && isDragging() ? "none" : void 0
    }}
    class={cn(
      "inline-flex shrink-0 items-center gap-1.5 rounded-md font-medium bg-ink-100 text-ink-700",
      "max-w-[200px]",
      props.size === "xs" && "px-1.5 py-0.5 text-xs",
      props.size === "sm" && "px-1.5 py-0.5 text-xs",
      (props.size === "md" || props.size === "lg" || props.size === "xl") && "px-2 py-1 text-sm"
    )}
  >

			<Show6 when={props.showGrip}>

				<button
    type="button"
    class={cn(
      "shrink-0 text-ink-400 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 rounded",
      isDragging() ? "cursor-grabbing" : "cursor-grab"
    )}
    aria-label={zh() ? "\u62D6\u52A8\u6392\u5E8F" : "Drag to reorder"}
    onPointerDown={props.onGripPointerDown}
  >

					{icons.dragHandle({ class: "h-3.5 w-3.5", "aria-hidden": "true" })}

				</button>

			</Show6>

			<Show6 when={props.opt.icon}>

				<span class="shrink-0 text-current opacity-70">{props.opt.icon}</span>

			</Show6>

			<span class="min-w-0 truncate">{props.opt.label}</span>

			<button
    type="button"
    onClick={(e) => {
      e.stopPropagation();
      e.preventDefault();
      props.onRemove(props.opt);
    }}
    onPointerDown={(e) => e.stopPropagation()}
    class="rounded p-0.5 hover:bg-surface-overlay outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
    aria-label={zh() ? `\u79FB\u9664 ${props.opt.label}` : `Remove ${props.opt.label}`}
  >

				{icons.close({ class: "h-3.5 w-3.5", "aria-hidden": "true" })}

			</button>

		</span>;
}
function ChipsList(props) {
  const drag = createSortableDrag({
    items: () => props.selectedOptions.map((o) => ({ id: o.value })),
    onReorder: props.onReorder
  });
  const previewOptions = createMemo6(() => {
    const active = drag.activeId();
    const over = drag.overId();
    const opts = props.selectedOptions;
    if (!active || !over || active === over) return opts;
    const from = opts.findIndex((o) => o.value === active);
    const to = opts.findIndex((o) => o.value === over);
    if (from === -1 || to === -1) return opts;
    const next = opts.slice();
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    return next;
  });
  let pointerX = 0;
  let pointerY = 0;
  let overlayW = 0;
  let overlayH = 0;
  return <span data-sortable-container class="inline-flex flex-wrap items-center gap-2">

			<For2 each={previewOptions()}>

				{(opt) => <ChipContent
    opt={opt}
    onRemove={props.onRemove}
    showGrip={props.reorderable}
    size={props.size}
    isActive={() => drag.activeId() === opt.value}
    isDragging={drag.isDragging}
    onGripPointerDown={props.reorderable ? (e) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
      const chip = e.currentTarget.closest("[data-sortable-id]");
      if (chip) {
        const r = chip.getBoundingClientRect();
        overlayW = r.width;
        overlayH = r.height;
      }
      drag.handlePointerDown(opt.value, e);
    } : void 0}
  />}

			</For2>



			<Show6 when={drag.activeId()}>

				{(activeId) => {
    const opt = () => props.selectedOptions.find((o) => o.value === activeId());
    return <Show6 when={opt()}>

							{(resolved) => <ChipDragOverlay
      label={resolved().label}
      icon={resolved().icon}
      startX={pointerX}
      startY={pointerY}
      width={overlayW}
      height={overlayH}
      size={props.size}
    />}

						</Show6>;
  }}

			</Show6>

		</span>;
}
function MultiSelect(props) {
  const [local] = splitProps11(props, [
    "label",
    "helperText",
    "error",
    "bare",
    "required",
    "optional",
    "options",
    "value",
    "onValueChange",
    "onErrorClear",
    "placeholder",
    "class",
    "reorderable",
    "searchable",
    "disabled",
    "size",
    "ref"
  ]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const contextSize = useComponentSize();
  const sc = () => inputSizeConfig[local.size ?? contextSize ?? "md"];
  const size = () => local.size ?? contextSize ?? "md";
  const minH = () => {
    const s = size();
    if (s === "xs") return "min-h-7";
    if (s === "sm") return "min-h-8";
    if (s === "md") return "min-h-9";
    if (s === "lg") return "min-h-10";
    return "min-h-11";
  };
  const uid = createUniqueId3();
  const helperId = () => local.helperText ? `ms-${uid}-help` : void 0;
  const errorId = () => local.error ? `ms-${uid}-error` : void 0;
  const describedBy = () => [helperId(), errorId()].filter(Boolean).join(" ") || void 0;
  const [searchQuery, setSearchQuery] = createSignal7("");
  const normalizedSearchQuery = createMemo6(() => searchQuery().trim().toLowerCase());
  const selectedOptions = createMemo6(() => {
    const base = local.options.filter((o) => local.value.includes(o.value));
    const missing = local.value.filter((v) => !local.options.some((o) => o.value === v)).map((v) => ({ value: v, label: v }));
    return missing.length ? [...missing, ...base] : base;
  });
  const optionsForSelect = () => local.options;
  const handleChange = (opts) => {
    if (local.error && local.onErrorClear) local.onErrorClear();
    const arr = opts == null ? [] : Array.isArray(opts) ? opts : [opts];
    local.onValueChange(arr.map((o) => o.value));
  };
  let searchInputRef;
  const handleOpenChange = (open) => {
    if (!open) setSearchQuery("");
    else if (local.searchable) {
      requestAnimationFrame(() => searchInputRef?.focus());
    }
  };
  const observeHighlightedScrollIntoView = (el) => {
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.attributeName === "data-highlighted" && m.target instanceof HTMLElement && m.target.hasAttribute("data-highlighted") && typeof m.target.scrollIntoView === "function") {
          m.target.scrollIntoView({ block: "nearest" });
        }
      }
    });
    observer.observe(el, {
      attributes: true,
      attributeFilter: ["data-highlighted"],
      subtree: true
    });
    onCleanup5(() => observer.disconnect());
  };
  return <div ref={local.ref} class={cn("w-full", local.class)}>

			<KobalteSelect2
    multiple
    options={optionsForSelect()}
    optionValue="value"
    optionTextValue="label"
    value={selectedOptions()}
    onChange={handleChange}
    placeholder={local.placeholder ?? (zh() ? "\u8BF7\u9009\u62E9..." : "Select...")}
    disabled={local.disabled}
    closeOnSelection={false}
    allowDuplicateSelectionEvents={false}
    onOpenChange={handleOpenChange}
    itemComponent={(itemProps) => <Show6
      when={(() => {
        if (!local.searchable) return true;
        const q = normalizedSearchQuery();
        if (!q) return true;
        return itemProps.item.rawValue.label.toLowerCase().includes(q);
      })()}
    >

						<KobalteSelect2.Item
      item={itemProps.item}
      class="relative flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer outline-none text-ink-900 data-[highlighted]:bg-primary-50 data-[highlighted]:text-primary-900 data-[disabled]:bg-surface-dim data-[disabled]:text-ink-500 data-[disabled]:cursor-not-allowed"
    >

							<KobalteSelect2.ItemLabel class="flex-1">

								<span class="flex items-center gap-2">

									<Show6 when={itemProps.item.rawValue.icon}>

										<span class="flex-shrink-0 text-ink-500">

											{itemProps.item.rawValue.icon}

										</span>

									</Show6>

									<span class="truncate">{itemProps.item.rawValue.label}</span>

								</span>

							</KobalteSelect2.ItemLabel>

							<KobalteSelect2.ItemIndicator class="inline-flex items-center">

								{icons.check({ class: "w-4 h-4 text-primary-500", "aria-hidden": "true" })}

							</KobalteSelect2.ItemIndicator>

						</KobalteSelect2.Item>

					</Show6>}
  >

				<Show6 when={!local.bare && local.label}>

					<div class="flex items-center justify-between mb-2">

						<KobalteSelect2.Label class={cn("block text-sm font-medium", local.error ? "text-danger-600" : "text-ink-700")}>

							{local.label}

							<Show6 when={local.required}>

								<span class="text-danger-500 ml-0.5" aria-hidden="true">

									*

								</span>

							</Show6>

						</KobalteSelect2.Label>

						<Show6 when={local.label && !local.required && local.optional}>

							<span class="text-xs text-ink-500">optional</span>

						</Show6>

					</div>

				</Show6>



				<div
    class={cn(
      "w-full flex flex-col min-h-0 rounded-lg border transition-all overflow-hidden",
      minH(),
      local.error ? "border-danger-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-danger-500 focus-within:border-transparent" : "border-surface-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 focus-within:border-transparent",
      "bg-surface-raised"
    )}
  >

					<div class="m-px">

						<KobalteSelect2.Trigger
    as="button"
    type="button"
    aria-invalid={local.error ? "true" : void 0}
    aria-describedby={describedBy()}
    aria-errormessage={local.error ? errorId() : void 0}
    class={cn(
      "w-full min-h-0 min-w-0 flex items-center gap-2 rounded-[7px] transition-all outline-none bg-transparent text-ink-900 text-left border-0 cursor-pointer",
      sc().py,
      sc().text,
      sc().pl,
      sc().pr,
      "data-[expanded]:hover:bg-transparent",
      "data-[disabled]:bg-surface-base data-[disabled]:text-ink-500 data-[disabled]:cursor-not-allowed",
      "data-[placeholder-shown]:text-ink-400"
    )}
  >

							<KobalteSelect2.Value class="min-w-0 flex-1 flex flex-wrap items-center gap-2 basis-0">

								{(state) => {
    const selected = state.selectedOptions();
    if (selected.length === 0) {
      return <span class="text-ink-400">

												{local.placeholder ?? (zh() ? "\u8BF7\u9009\u62E9..." : "Select...")}

											</span>;
    }
    return <ChipsList
      selectedOptions={selected}
      onRemove={(opt) => state.remove(opt)}
      reorderable={local.reorderable ?? false}
      onReorder={(newOrder) => local.onValueChange(newOrder)}
      size={size()}
    />;
  }}

							</KobalteSelect2.Value>



							<KobalteSelect2.Icon class="inline-flex shrink-0 w-4 items-center justify-center text-ink-400 transition-transform data-[expanded]:rotate-180">

								{icons.chevronDown({ class: "h-3.5 w-3.5", "aria-hidden": "true" })}

							</KobalteSelect2.Icon>

						</KobalteSelect2.Trigger>

					</div>

				</div>



				<Show6 when={!local.bare && !local.error && local.helperText}>

					<KobalteSelect2.Description id={helperId()} class="mt-2 text-sm text-ink-500">

						{local.helperText}

					</KobalteSelect2.Description>

				</Show6>



				<Show6 when={!local.bare && local.error}>

					<p id={errorId()} class="mt-2 text-sm text-danger-600" role="alert">

						{local.error}

					</p>

				</Show6>



				<KobalteSelect2.Portal>

					<KobalteSelect2.Content
    data-kb-top-layer
    class={cn(
      "bg-surface-raised rounded-lg border border-surface-border shadow-lg mt-2 z-[100] flex flex-col max-h-60",
      local.searchable ? "py-0 overflow-hidden" : "py-1 overflow-auto"
    )}
  >

						<Show6 when={local.searchable}>

							<div
    class="shrink-0 border-b border-surface-border p-2"
    onKeyDown={(e) => e.stopPropagation()}
    onPointerDown={(e) => e.stopPropagation()}
    onMouseDown={(e) => e.stopPropagation()}
  >

								<input
    ref={(el) => searchInputRef = el}
    type="text"
    value={searchQuery()}
    onInput={(e) => setSearchQuery(e.currentTarget.value)}
    placeholder={zh() ? "\u641C\u7D22..." : "Search..."}
    class={cn(
      "h-9 w-full rounded-md border border-surface-border bg-surface-raised px-3 py-1.5 text-sm text-ink-900 placeholder:text-ink-400 outline-none focus:ring-2 focus:ring-inset focus:border-transparent",
      local.error ? "focus:ring-danger-500" : "focus:ring-primary-500"
    )}
  />

							</div>

						</Show6>

						<div
    ref={observeHighlightedScrollIntoView}
    class={cn(
      "outline-none min-h-0",
      local.searchable && "flex-1 overflow-auto py-1"
    )}
  >

							<KobalteSelect2.Listbox class="outline-none" />

						</div>

					</KobalteSelect2.Content>

				</KobalteSelect2.Portal>

			</KobalteSelect2>

		</div>;
}

// src/components/forms/Checkbox.tsx
import { splitProps as splitProps12, Show as Show7 } from "solid-js";
import { Checkbox as KobalteCheckbox } from "@kobalte/core/checkbox";
var sizeClasses = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4"
};
function Checkbox(props) {
  const icons = useIcons();
  const [local, others] = splitProps12(props, [
    "label",
    "error",
    "helperText",
    "bare",
    "required",
    "optional",
    "checked",
    "onValueChange",
    "onErrorClear",
    "size",
    "indeterminate",
    "class",
    "id",
    "disabled",
    "children",
    "name",
    "value"
  ]);
  if (false) {
    if (others["aria-label"] == null && others["aria-labelledby"] == null && others["title"] == null) {
    }
  }
  const contextSize = useComponentSize();
  const hasError = () => !!local.error;
  const size = () => local.size ?? (contextSize === "xs" || contextSize === "sm" ? "sm" : "md");
  const iconSize = () => size() === "sm" ? "w-2.5 h-2.5" : "w-3 h-3";
  return <KobalteCheckbox
    checked={local.checked}
    onChange={(v) => {
      if (local.error && local.onErrorClear) local.onErrorClear();
      local.onValueChange?.(v === true);
    }}
    indeterminate={local.indeterminate}
    validationState={hasError() ? "invalid" : void 0}
    required={local.required}
    disabled={local.disabled}
    name={local.name}
    value={local.value}
    id={local.id}
    class={cn(local.bare ? "inline-flex" : "w-full", local.class)}
  >

			<div
    class={cn(
      "flex items-center select-none",
      size() === "sm" ? "gap-1.5" : "gap-2",
      local.disabled && "opacity-50",
      hasError() && "text-danger-600"
    )}
  >

				<KobalteCheckbox.Input {...others} />

				<KobalteCheckbox.Control
    class={cn(
      "relative inline-flex shrink-0 items-center justify-center rounded border cursor-pointer outline-none transition-colors",
      sizeClasses[size()],
      "bg-surface-raised border-surface-border",
      "data-[checked]:border-primary-500 data-[checked]:bg-primary-500",
      "data-[indeterminate]:border-primary-500 data-[indeterminate]:bg-primary-500",
      hasError() && "border-danger-500",
      hasError() ? "data-[focus-visible]:ring-2 data-[focus-visible]:ring-inset data-[focus-visible]:ring-danger-500 data-[focus-visible]:border-transparent" : "data-[focus-visible]:ring-2 data-[focus-visible]:ring-inset data-[focus-visible]:ring-primary-500 data-[focus-visible]:border-transparent",
      local.disabled && ""
    )}
  >

					<KobalteCheckbox.Indicator class="absolute inset-0 flex items-center justify-center text-white">

						<Show7
    when={!local.indeterminate}
    fallback={icons.minus({ class: iconSize(), "aria-hidden": "true" })}
  >

							{icons.check({ class: iconSize(), "aria-hidden": "true" })}

						</Show7>

					</KobalteCheckbox.Indicator>

				</KobalteCheckbox.Control>

				<Show7
    when={!local.bare && (local.label ?? local.children)}
    fallback={<>

							<Show7 when={!local.bare && local.helperText && !hasError()}>

								<KobalteCheckbox.Description class="mt-1.5 text-sm text-ink-500">

									{local.helperText}

								</KobalteCheckbox.Description>

							</Show7>



							<Show7 when={!local.bare && local.error}>

								<KobalteCheckbox.ErrorMessage class="mt-1.5 text-sm text-danger-600">

									{local.error}

								</KobalteCheckbox.ErrorMessage>

							</Show7>

						</>}
  >

					<div class="min-w-0">

						<KobalteCheckbox.Label
    class={cn(
      "text-ink-700 cursor-pointer",
      size() === "sm" ? "text-xs" : "text-sm",
      local.disabled && ""
    )}
  >

							{local.label ?? local.children}

							<Show7 when={local.required}>

								<span class="text-danger-500 ml-0.5" aria-hidden="true">*</span>

							</Show7>

							<Show7 when={!local.required && local.optional}>

								<span class="text-xs text-ink-500 ml-1">optional</span>

							</Show7>

						</KobalteCheckbox.Label>



						<Show7 when={!local.bare && local.helperText && !hasError()}>

							<KobalteCheckbox.Description class="mt-1 text-sm text-ink-500">

								{local.helperText}

							</KobalteCheckbox.Description>

						</Show7>



						<Show7 when={!local.bare && local.error}>

							<KobalteCheckbox.ErrorMessage class="mt-1 text-sm text-danger-600">

								{local.error}

							</KobalteCheckbox.ErrorMessage>

						</Show7>

					</div>

				</Show7>

			</div>

		</KobalteCheckbox>;
}

// src/components/forms/Switch.tsx
import { createEffect as createEffect4, createSignal as createSignal8, splitProps as splitProps13, Show as Show8, on } from "solid-js";
import { Switch as KobalteSwitch } from "@kobalte/core/switch";
var SIZE_MAP = {
  xs: { track: "h-4 w-8", thumb: "h-3 w-3", checked: "group-data-[checked]:translate-x-4", top: "1px" },
  sm: { track: "h-5 w-9", thumb: "h-4 w-4", checked: "group-data-[checked]:translate-x-4", top: "1px" },
  md: { track: "h-6 w-11", thumb: "h-5 w-5", checked: "group-data-[checked]:translate-x-5", top: "1px" },
  lg: { track: "h-8 w-14", thumb: "h-6 w-6", checked: "group-data-[checked]:translate-x-7", top: "3px" },
  xl: { track: "h-9 w-16", thumb: "h-7 w-7", checked: "group-data-[checked]:translate-x-8", top: "3px" }
};
function SwitchControl(props) {
  return <>

			<KobalteSwitch.Input class="peer sr-only" />

			<KobalteSwitch.Control
    style={props.trackStyle()}
    class={cn(
      "group relative inline-flex shrink-0 cursor-pointer rounded-full border border-surface-border transition-colors",
      props.sz().track,
      "outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-primary-500",
      "data-[disabled]:opacity-50",
      "bg-surface-dim data-[checked]:bg-success-500 data-[checked]:border-success-500",
      props.hasError() && "border-danger-500 peer-focus-visible:ring-danger-500 data-[checked]:border-danger-500",
      props.controlClass
    )}
  >

				<KobalteSwitch.Thumb
    style={{
      top: props.sz().top,
      left: "1px"
    }}
    class={cn(
      "pointer-events-none absolute flex items-center justify-center rounded-full bg-surface-base shadow ring-0 transition-transform",
      props.sz().thumb,
      "translate-x-0",
      props.sz().checked
    )}
  >

					{props.iconVariant() && (props.thumbOffIcon || props.thumbOnIcon) ? <>

							<span class={cn("block", "group-data-[checked]:hidden")}>

								{props.thumbOffIcon}

							</span>

							<span class={cn("hidden", "group-data-[checked]:block")}>

								{props.thumbOnIcon}

							</span>

						</> : null}

				</KobalteSwitch.Thumb>

			</KobalteSwitch.Control>

		</>;
}
function SwitchHelperError(props) {
  return <>

			<Show8 when={props.helperText && !props.hasError()}>

				<KobalteSwitch.Description class={cn(props.descMargin, "text-sm text-ink-500")}>

					{props.helperText}

				</KobalteSwitch.Description>

			</Show8>

			<Show8 when={props.hasError()}>

				<KobalteSwitch.ErrorMessage class={cn(props.descMargin, "text-sm text-danger-600")}>

					{props.error}

				</KobalteSwitch.ErrorMessage>

			</Show8>

		</>;
}
function Switch(props) {
  const [local, others] = splitProps13(props, [
    "label",
    "variant",
    "thumbOffIcon",
    "thumbOnIcon",
    "trackColor",
    "trackCheckedColor",
    "helperText",
    "error",
    "bare",
    "required",
    "optional",
    "checked",
    "defaultChecked",
    "onValueChange",
    "onErrorClear",
    "disabled",
    "value",
    "name",
    "size",
    "fullWidth",
    "class",
    "controlClass",
    "ref"
  ]);
  const hasError = () => !!local.error;
  const iconVariant = () => local.variant === "icon";
  const sz = () => SIZE_MAP[local.size ?? "md"];
  const [isChecked, setIsChecked] = createSignal8(!!(local.checked ?? local.defaultChecked));
  createEffect4(on(() => local.checked, (checked) => {
    if (checked !== void 0) setIsChecked(!!checked);
  }, { defer: true }));
  const trackStyle = () => {
    if (!local.trackColor && !local.trackCheckedColor) return void 0;
    const bg = isChecked() ? local.trackCheckedColor ?? local.trackColor : local.trackColor;
    return bg ? { "background-color": bg } : void 0;
  };
  const a11yNameOk = () => local.label != null || others["aria-label"] != null || others["aria-labelledby"] != null || others["title"] != null;
  if (false) {
  }
  const switchA11yProps = () => ({
    "aria-label": local.label ? void 0 : others["aria-label"],
    "aria-labelledby": local.label ? void 0 : others["aria-labelledby"],
    title: local.label ? void 0 : others["title"]
  });
  return <div
    ref={local.ref}
    class={cn(local.fullWidth === false ? "w-auto" : "w-full", local.class)}
    {...others}
  >

			<KobalteSwitch
    class={!local.label ? "flex items-center" : void 0}
    {...switchA11yProps()}
    checked={local.checked}
    defaultChecked={local.defaultChecked}
    onChange={(checked) => {
      if (local.error && local.onErrorClear) local.onErrorClear();
      setIsChecked(!!checked);
      local.onValueChange?.(!!checked);
    }}
    disabled={local.disabled}
    validationState={hasError() ? "invalid" : void 0}
    name={local.name}
    value={local.value ?? "on"}
  >

				<Show8
    when={local.label}
    fallback={<>

						<div class="flex items-center gap-2">

							<SwitchControl
      trackStyle={trackStyle}
      sz={sz}
      iconVariant={iconVariant}
      controlClass={local.controlClass}
      hasError={hasError}
      thumbOffIcon={local.thumbOffIcon}
      thumbOnIcon={local.thumbOnIcon}
    />

						</div>

						<SwitchHelperError descMargin="mt-1.5" hasError={hasError} helperText={local.helperText} error={local.error} />

					</>}
  >

				<div class="flex items-start justify-between gap-3">

					<div class="min-w-0">

						<KobalteSwitch.Label
    class={cn(
      "text-sm font-medium cursor-pointer select-none",
      hasError() ? "text-danger-600" : "text-ink-700",
      local.disabled && "opacity-50"
    )}
  >

							{local.label}

							<Show8 when={local.required}>

								<span class="text-danger-500 ml-0.5" aria-hidden="true">*</span>

							</Show8>

							<Show8 when={!local.required && local.optional}>

								<span class="text-xs text-ink-400 ml-1">optional</span>

							</Show8>

						</KobalteSwitch.Label>



						<SwitchHelperError descMargin="mt-1" hasError={hasError} helperText={local.helperText} error={local.error} />

					</div>



					<div class="shrink-0">

						<SwitchControl
    trackStyle={trackStyle}
    sz={sz}
    iconVariant={iconVariant}
    controlClass={local.controlClass}
    hasError={hasError}
    thumbOffIcon={local.thumbOffIcon}
    thumbOnIcon={local.thumbOnIcon}
  />

					</div>

				</div>

			</Show8>

		</KobalteSwitch>

	</div>;
}

// src/components/forms/RadioGroup.tsx
import { For as For3, splitProps as splitProps14, Show as Show9 } from "solid-js";
import { RadioGroup as KobalteRadioGroup } from "@kobalte/core/radio-group";
function RadioGroup(props) {
  const [local, others] = splitProps14(props, [
    "label",
    "helperText",
    "error",
    "bare",
    "required",
    "optional",
    "options",
    "value",
    "onValueChange",
    "onErrorClear",
    "disabled",
    "name",
    "orientation",
    "size",
    "compact",
    "class"
  ]);
  const hasError = () => !!local.error;
  return <div class={cn("w-full", local.class)}>

			<KobalteRadioGroup
    value={local.value}
    onChange={(v) => {
      if (local.error && local.onErrorClear) local.onErrorClear();
      local.onValueChange?.(v);
    }}
    disabled={local.disabled}
    validationState={hasError() ? "invalid" : void 0}
    name={local.name}
    orientation={local.orientation ?? "vertical"}
    {...others}
  >

				<Show9 when={local.label}>

					<div class="flex items-center justify-between mb-2">

						<KobalteRadioGroup.Label
    class={cn(
      "block text-sm font-medium",
      hasError() ? "text-danger-600" : "text-ink-700",
      local.disabled && "opacity-50"
    )}
  >

							{local.label}

							{local.required && <span class="text-danger-500 ml-0.5" aria-hidden="true">*</span>}

						</KobalteRadioGroup.Label>

						{!local.required && local.optional && <span class="text-xs text-ink-500">optional</span>}

					</div>

				</Show9>

				<div
    role="presentation"
    class={cn(
      "flex",
      local.compact ? "gap-0" : local.size === "sm" ? "gap-1" : "gap-3",
      local.orientation === "horizontal" ? "flex-row flex-wrap" : "flex-col",
      local.disabled && "opacity-50 pointer-events-none"
    )}
  >

					<For3 each={local.options}>

						{(opt) => <KobalteRadioGroup.Item
    value={opt.value}
    class={cn(
      local.compact ? "inline-flex gap-2 cursor-pointer select-none rounded border border-transparent px-1 py-1 transition-colors outline-none" : local.size === "sm" ? "inline-flex gap-2 cursor-pointer select-none rounded-md border border-transparent px-2 py-1.5 transition-colors outline-none" : "inline-flex gap-3 cursor-pointer select-none rounded-lg border border-transparent p-3 transition-colors outline-none",
      opt.description ? "items-start" : "items-center",
      "data-[disabled]:cursor-not-allowed",
      "data-[highlighted]:bg-surface-overlay",
      hasError() ? "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-danger-500" : "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500"
    )}
  >

								<KobalteRadioGroup.ItemInput class="sr-only" />

								<KobalteRadioGroup.ItemControl
    class={cn(
      "h-4 w-4 shrink-0 rounded-full flex items-center justify-center transition-colors box-border",
      opt.description && "mt-0.5",
      // Unselected: gray ring, transparent interior
      "border-2 border-surface-border bg-transparent",
      // Selected: primary ring, transparent interior; dot is the ItemIndicator
      "data-[checked]:border-primary-500 data-[checked]:bg-transparent",
      "data-[disabled]:border-surface-border"
    )}
  >

									<KobalteRadioGroup.ItemIndicator class="h-2 w-2 rounded-full bg-primary-500 shrink-0 pointer-events-none" />

								</KobalteRadioGroup.ItemControl>

								<span class="flex flex-col gap-0.5">

									<KobalteRadioGroup.ItemLabel class="text-sm font-medium text-ink-900">

										{opt.label}

									</KobalteRadioGroup.ItemLabel>

									<Show9 when={opt.description}>

										<KobalteRadioGroup.ItemDescription class="text-xs text-ink-500">

											{opt.description}

										</KobalteRadioGroup.ItemDescription>

									</Show9>

								</span>

							</KobalteRadioGroup.Item>}

					</For3>

				</div>

				<Show9 when={local.helperText && !hasError()}>

					<KobalteRadioGroup.Description class="mt-2 text-sm text-ink-500">

						{local.helperText}

					</KobalteRadioGroup.Description>

				</Show9>

				<Show9 when={hasError()}>

					<KobalteRadioGroup.ErrorMessage class="mt-2 text-sm text-danger-600">

						{local.error}

					</KobalteRadioGroup.ErrorMessage>

				</Show9>

			</KobalteRadioGroup>

		</div>;
}

// src/components/forms/NumberField.tsx
import { splitProps as splitProps15, Show as Show10 } from "solid-js";
import { NumberField as KobalteNumberField } from "@kobalte/core/number-field";
function NumberField(props) {
  const [local, others] = splitProps15(props, [
    "label",
    "error",
    "helperText",
    "bare",
    "required",
    "optional",
    "value",
    "onValueChange",
    "onErrorClear",
    "minValue",
    "maxValue",
    "step",
    "disabled",
    "placeholder",
    "size",
    "showStepper",
    "stepperVariant",
    "class",
    "ref"
  ]);
  const icons = useIcons();
  const contextSize = useComponentSize();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const effectiveSize = () => local.size ?? contextSize ?? "md";
  const hasError = () => !!local.error;
  const sc = () => inputSizeConfig[effectiveSize()];
  const stepperButtonW = () => {
    switch (effectiveSize()) {
      case "xs":
        return "w-7";
      case "sm":
        return "w-8";
      case "lg":
        return "w-10";
      case "xl":
        return "w-11";
      case "md":
      default:
        return "w-9";
    }
  };
  const stepperIconClass = () => effectiveSize() === "xs" || effectiveSize() === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  const stepperIconButtonBox = () => {
    switch (effectiveSize()) {
      case "xs":
        return "h-5 w-5";
      case "sm":
        return "h-6 w-6";
      case "lg":
        return "h-8 w-8";
      case "xl":
        return "h-9 w-9";
      case "md":
      default:
        return "h-7 w-7";
    }
  };
  const effectiveStepperVariant = () => local.stepperVariant ?? "compact";
  const showInline = () => local.showStepper && effectiveStepperVariant() === "inlineLabel";
  const handleRawValueChange = (v) => {
    if (local.error && local.onErrorClear) local.onErrorClear();
    local.onValueChange?.(v);
  };
  return <div class={cn("w-full", local.class)}>

			<KobalteNumberField
    rawValue={local.value}
    onRawValueChange={handleRawValueChange}
    minValue={local.minValue}
    maxValue={local.maxValue}
    step={local.step}
    disabled={local.disabled}
    validationState={hasError() ? "invalid" : void 0}
    {...others}
  >

				<Show10 when={!local.bare && local.label && !showInline()}>

					<div class="flex items-center justify-between mb-1.5">

						<KobalteNumberField.Label
    class={cn(
      "block text-sm font-medium",
      hasError() ? "text-danger-600" : "text-ink-700"
    )}
  >

							{local.label}

							{local.required && <span class="text-danger-500 ml-0.5" aria-hidden="true">*</span>}

						</KobalteNumberField.Label>

						{local.label && !local.required && local.optional && <span class="text-xs text-ink-500">{zh() ? "\u9009\u586B" : "optional"}</span>}

					</div>

				</Show10>

				<Show10
    when={local.showStepper}
    fallback={<KobalteNumberField.Input
      ref={local.ref}
      placeholder={local.placeholder}
      class={cn(
        "w-full rounded-lg transition-all outline-none border text-ink-900 placeholder:text-ink-400 bg-surface-raised",
        sc().h,
        sc().py,
        sc().text,
        sc().pl,
        sc().pr,
        hasError() ? "border-danger-500 focus:ring-2 focus:ring-inset focus:ring-danger-500 focus:border-transparent" : "border-surface-border focus:ring-2 focus:ring-inset focus:ring-primary-500 focus:border-transparent",
        "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed"
      )}
    />}
  >

					<div
    class={cn(
      "relative flex items-stretch gap-1 px-1 overflow-hidden rounded-lg border transition-all",
      local.disabled ? "bg-surface-dim" : "bg-surface-raised",
      hasError() ? "border-danger-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-danger-500" : "border-surface-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500"
    )}
  >

						<Show10 when={effectiveStepperVariant() === "inlineLabel" && local.label}>

							<div
    class={cn(
      "flex-1 min-w-0 flex items-center truncate text-ink-700",
      sc().text,
      sc().pl,
      "pr-4",
      sc().h
    )}
  >

								{local.label}

							</div>

						</Show10>



						<KobalteNumberField.DecrementTrigger
    class={cn(
      "flex-none flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50 rounded-md group",
      stepperButtonW(),
      "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed"
    )}
    aria-label={zh() ? "\u51CF\u5C11" : "Decrease"}
  >

							<span
    class={cn(
      "flex items-center justify-center rounded-md text-ink-600",
      stepperIconButtonBox(),
      !local.disabled && "group-hover:bg-surface-overlay"
    )}
  >

								{icons.minus({ class: stepperIconClass(), "aria-hidden": "true" })}

							</span>

						</KobalteNumberField.DecrementTrigger>



						<KobalteNumberField.Input
    ref={local.ref}
    placeholder={local.placeholder}
    class={cn(
      effectiveStepperVariant() === "inlineLabel" ? "flex-none w-14 min-w-0 bg-transparent outline-none text-center tabular-nums" : "flex-1 min-w-0 bg-transparent outline-none text-center tabular-nums",
      sc().h,
      sc().py,
      sc().text,
      "px-2 text-ink-900 placeholder:text-ink-400",
      "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed"
    )}
    aria-label={local.label}
  />



						<KobalteNumberField.IncrementTrigger
    class={cn(
      "flex-none flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50 rounded-md group",
      stepperButtonW(),
      "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed"
    )}
    aria-label={zh() ? "\u589E\u52A0" : "Increase"}
  >

							<span
    class={cn(
      "flex items-center justify-center rounded-md text-ink-600",
      stepperIconButtonBox(),
      !local.disabled && "group-hover:bg-surface-overlay"
    )}
  >

								{icons.plus({ class: stepperIconClass(), "aria-hidden": "true" })}

							</span>

						</KobalteNumberField.IncrementTrigger>

					</div>

				</Show10>

				<Show10 when={!local.bare && !hasError() && local.helperText}>

					<KobalteNumberField.Description class="mt-2 text-sm text-ink-500">

						{local.helperText}

					</KobalteNumberField.Description>

				</Show10>

				<Show10 when={!local.bare && hasError()}>

					<KobalteNumberField.ErrorMessage class="mt-2 text-sm text-danger-600">

						{local.error}

					</KobalteNumberField.ErrorMessage>

				</Show10>

			</KobalteNumberField>

		</div>;
}

// src/components/forms/CodeInput.tsx
import { createEffect as createEffect5, on as on2, splitProps as splitProps16, createUniqueId as createUniqueId4 } from "solid-js";
function CodeInput(props) {
  const variant = () => props.variant ?? "single";
  if (variant() === "digits") {
    return <CodeInputDigits {...props} />;
  }
  return <CodeInputSingle {...props} />;
}
function CodeInputSingle(props) {
  const [local, others] = splitProps16(props, [
    "variant",
    "label",
    "error",
    "helperText",
    "bare",
    "required",
    "optional",
    "length",
    "value",
    "onValueChange",
    "onErrorClear",
    "class",
    "id",
    "onInput",
    "disabled",
    "size"
  ]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const length = () => local.length ?? 6;
  const generatedId = createUniqueId4();
  const inputId = () => local.id ?? `code-input-${generatedId}`;
  const hasError = () => !!local.error;
  const msgId = () => local.error || local.helperText ? `${inputId()}-msg` : void 0;
  const describedBy = () => {
    const user = others["aria-describedby"];
    const own = msgId();
    return user && own ? `${user} ${own}` : user ?? own;
  };
  const handleInput = (e) => {
    const input = e.target;
    const raw = input.value.replace(/\D/g, "").slice(0, length());
    input.value = raw;
    if (local.error && local.onErrorClear) local.onErrorClear();
    local.onValueChange?.(raw);
    if (local.onInput) local.onInput(e);
  };
  return <div class="w-full">

			{!local.bare && local.label && <div class="mb-1.5 flex items-center justify-between gap-2">

					<label
    for={inputId()}
    class={cn(
      "block text-sm font-medium",
      hasError() ? "text-danger-600" : "text-ink-700"
    )}
  >

						{local.label}

						{local.required && <span class="text-danger-500 ml-0.5" aria-hidden="true">*</span>}

					</label>

					{!local.required && local.optional && <span class="text-xs text-ink-500">{zh() ? "\u9009\u586B" : "optional"}</span>}

				</div>}

			<input
    id={inputId()}
    type="text"
    inputMode="numeric"
    autocomplete="one-time-code"
    pattern="[0-9]*"
    maxLength={length()}
    value={local.value}
    onInput={handleInput}
    disabled={local.disabled}
    aria-invalid={hasError() ? "true" : void 0}
    aria-describedby={describedBy()}
    class={cn(
      "w-full px-4 py-3 rounded-lg transition-all outline-none text-center text-xl tracking-[0.25em] font-mono",
      "text-ink-900 placeholder:text-ink-400 placeholder:tracking-normal",
      "bg-surface-raised border",
      hasError() ? "border-danger-500 focus:ring-2 focus:ring-inset focus:ring-danger-500 focus:border-transparent" : "border-surface-border focus:ring-2 focus:ring-inset focus:ring-primary-500 focus:border-transparent",
      "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed",
      local.class
    )}
    {...others}
  />

			{(local.error || local.helperText) && <p
    id={msgId()}
    role={local.error ? "alert" : void 0}
    class={cn("mt-2 text-sm", hasError() ? "text-danger-600" : "text-ink-500")}
  >

					{local.error || local.helperText}

				</p>}

		</div>;
}
function CodeInputDigits(props) {
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const length = () => props.length ?? 6;
  const inputRefs = [];
  createEffect5(on2(length, (l) => {
    inputRefs.length = l;
  }));
  const emit = (next) => {
    if (props.error && props.onErrorClear) props.onErrorClear();
    props.onValueChange?.(next);
  };
  createEffect5(() => {
    const val = (props.value ?? "").replace(/\D/g, "").slice(0, length());
    if (val !== (props.value ?? "")) emit(val);
  });
  const onInput = (index, e) => {
    const target = e.currentTarget;
    const raw = (target.value ?? "").replace(/\D/g, "");
    const val = props.value ?? "";
    if (!raw) {
      target.value = val[index] ?? "";
      emit((val.slice(0, index) + val.slice(index + 1)).slice(0, length()));
      return;
    }
    const rest = raw.slice(0, length() - index);
    const next = (val.slice(0, index) + rest).slice(0, length());
    emit(next);
    requestAnimationFrame(
      () => inputRefs[Math.min(index + rest.length, length() - 1)]?.focus()
    );
  };
  const onKeyDown = (index, e) => {
    const val = props.value ?? "";
    if (e.key === "Backspace" && !val[index] && index > 0) {
      e.preventDefault();
      emit(val.slice(0, index - 1) + val.slice(index));
      requestAnimationFrame(() => inputRefs[index - 1]?.focus());
    } else if (e.key === "Backspace" && val[index]) {
      e.preventDefault();
      emit(val.slice(0, index) + val.slice(index + 1));
      requestAnimationFrame(() => inputRefs[Math.max(index - 1, 0)]?.focus());
    } else if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      inputRefs[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length() - 1) {
      e.preventDefault();
      inputRefs[index + 1]?.focus();
    }
  };
  const onPaste = (e) => {
    e.preventDefault();
    const pasted = (e.clipboardData?.getData("text") ?? "").replace(/\D/g, "").slice(0, length());
    if (!pasted) return;
    emit(pasted);
    requestAnimationFrame(
      () => inputRefs[Math.min(pasted.length, length() - 1)]?.focus()
    );
  };
  const generatedId = createUniqueId4();
  const firstId = () => props.id ?? `code-digits-${generatedId}`;
  const hasError = () => !!props.error;
  return <div class={cn("w-full", props.class)}>

			{!props.bare && props.label && <div class="mb-2 flex items-center justify-between gap-2">

					<label
    for={firstId()}
    class={cn(
      "block text-sm font-medium",
      hasError() ? "text-danger-600" : "text-ink-700"
    )}
  >

						{props.label}

						{props.required && <span class="text-danger-500 ml-0.5" aria-hidden="true">*</span>}

					</label>

					{!props.required && props.optional && <span class="text-xs text-ink-500">{zh() ? "\u9009\u586B" : "optional"}</span>}

				</div>}

			<div
    class="flex gap-2 justify-center"
    role="group"
    aria-label={zh() ? "\u9A8C\u8BC1\u7801\u6570\u5B57" : "Verification code digits"}
  >

				{Array.from({ length: length() }, (_, i) => <input
    ref={i === 0 ? mergeRefs((el) => inputRefs[i] = el, props.ref) : (el) => inputRefs[i] = el}
    id={i === 0 ? firstId() : void 0}
    type="text"
    inputMode="numeric"
    autocomplete={i === 0 ? "one-time-code" : "off"}
    maxLength={1}
    value={(props.value ?? "")[i] ?? ""}
    onInput={(e) => onInput(i, e)}
    onKeyDown={(e) => onKeyDown(i, e)}
    onPaste={onPaste}
    disabled={props.disabled}
    class={cn(
      "w-11 h-12 rounded-lg border text-center text-xl font-semibold font-mono tabular-nums outline-none transition-colors",
      "text-ink-900 bg-surface-raised",
      hasError() ? "border-danger-500 focus:ring-2 focus:ring-inset focus:ring-danger-500 focus:border-transparent" : "border-surface-border focus:ring-2 focus:ring-inset focus:ring-primary-500 focus:border-transparent",
      "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed"
    )}
    aria-label={zh() ? `\u7B2C ${i + 1} \u4F4D` : `Digit ${i + 1}`}
    aria-invalid={hasError() ? "true" : void 0}
  />)}

			</div>

			{(props.error || props.helperText) && <p
    class={cn(
      "mt-1.5 text-sm",
      hasError() ? "text-danger-600" : "text-ink-500"
    )}
    role={props.error ? "alert" : void 0}
  >

					{props.error || props.helperText}

				</p>}

		</div>;
}

// src/components/forms/Slider.tsx
import { splitProps as splitProps17, Show as Show11, For as For4 } from "solid-js";
import { Slider as KobalteSlider } from "@kobalte/core/slider";
function Slider(props) {
  const [local, others] = splitProps17(props, [
    "label",
    "helperText",
    "error",
    "bare",
    "required",
    "optional",
    "value",
    "defaultValue",
    "onValueChange",
    "onValueChangeEnd",
    "onErrorClear",
    "minValue",
    "maxValue",
    "step",
    "minStepsBetweenThumbs",
    "getValueLabel",
    "orientation",
    "startContent",
    "endContent",
    "size",
    "color",
    "marks",
    "disabled",
    "name",
    "class"
  ]);
  const hasError = () => !!local.error;
  const thumbCount = () => {
    const v = local.value ?? local.defaultValue ?? [50];
    return Math.max(1, Math.min(v.length, 2));
  };
  const orientation = () => local.orientation ?? "horizontal";
  const isHorizontal = () => orientation() === "horizontal";
  const size = () => local.size ?? "sm";
  const trackSizeClass = () => isHorizontal() ? size() === "sm" ? "h-2" : size() === "lg" ? "h-4" : "h-3" : size() === "sm" ? "w-2" : size() === "lg" ? "w-4" : "w-3";
  const thumbSizeClass = () => size() === "sm" ? "h-4 w-4" : size() === "lg" ? "h-6 w-6" : "h-5 w-5";
  const color = () => local.color ?? "primary";
  const trackBgClass = () => color() === "indigo" ? "bg-indigo-300/80" : color() === "rose" ? "bg-rose-300/80" : "bg-primary-300/80";
  const fillThumbClass = () => color() === "indigo" ? "bg-indigo-500" : color() === "rose" ? "bg-rose-500" : "bg-primary-500";
  const focusRingClass = () => color() === "indigo" ? "focus-visible:ring-indigo-400" : color() === "rose" ? "focus-visible:ring-rose-400" : "focus-visible:ring-primary-400";
  const thumbCenterStyle = () => isHorizontal() ? { top: "50%", transform: "translate(-50%, -50%)" } : { left: "50%", transform: "translate(-50%, 50%)" };
  return <KobalteSlider
    value={local.value}
    defaultValue={local.defaultValue ?? [50]}
    onChange={(v) => {
      if (local.error && local.onErrorClear) local.onErrorClear();
      local.onValueChange?.(v);
    }}
    onChangeEnd={local.onValueChangeEnd}
    minValue={local.minValue ?? 0}
    maxValue={local.maxValue ?? 100}
    step={local.step ?? 1}
    minStepsBetweenThumbs={local.minStepsBetweenThumbs}
    getValueLabel={local.getValueLabel}
    orientation={orientation()}
    disabled={local.disabled}
    name={local.name}
    validationState={hasError() ? "invalid" : void 0}
    class={cn(
      "group/slider flex flex-col gap-1.5",
      isHorizontal() ? "w-full" : "h-full w-fit min-h-0 flex-col items-center",
      local.disabled && "is-disabled",
      local.class
    )}
  >
			<Show11 when={local.label && isHorizontal()}>
				<div class="flex items-center justify-between gap-2 min-w-0">
					<div class="flex items-center gap-1 min-w-0">
						<KobalteSlider.Label
    class={cn(
      "text-sm font-medium text-ink-700 shrink-0",
      hasError() && "text-danger-600"
    )}
  >
							{local.label}
							{local.required && <span class="text-danger-500 ml-0.5" aria-hidden="true">*</span>}
						</KobalteSlider.Label>
						{!local.required && local.optional && <span class="text-xs text-ink-500">optional</span>}
					</div>
					<KobalteSlider.ValueLabel class="text-sm text-ink-500 shrink-0 min-w-[2.5rem] text-right tabular-nums" />
				</div>
			</Show11>
			<Show11 when={local.label && !isHorizontal()}>
				<KobalteSlider.Label
    class={cn(
      "text-sm font-medium text-ink-700 mb-2",
      hasError() && "text-danger-600"
    )}
  >
					{local.label}
					{local.required && <span class="text-danger-500 ml-0.5" aria-hidden="true">*</span>}
				</KobalteSlider.Label>
				{!local.required && local.optional && <span class="text-xs text-ink-500 mb-2">optional</span>}
			</Show11>
			<div
    class={cn(
      "flex min-w-0",
      isHorizontal() ? "w-full flex-row items-center gap-2" : "h-full min-h-0 w-fit flex-col items-center gap-2"
    )}
  >
				<Show11 when={local.startContent}>
					<div class="shrink-0 text-ink-500 [&>svg]:h-4 [&>svg]:w-4">
						{local.startContent}
					</div>
				</Show11>
				<div class={cn("flex min-w-0 flex-col gap-1", isHorizontal() ? "flex-1" : "min-h-0 flex-1")}>
					<KobalteSlider.Track
    class={cn(
      "relative shrink-0 overflow-visible rounded-full transition-colors",
      trackBgClass(),
      "group-[.is-disabled]/slider:bg-surface-dim",
      trackSizeClass(),
      isHorizontal() ? "w-full min-w-0" : "h-full min-h-0"
    )}
  >
						<KobalteSlider.Fill
    class={cn(
      "absolute rounded-full transition-colors",
      isHorizontal() ? "inset-y-0 left-0" : "inset-x-0",
      fillThumbClass(),
      "group-[.is-disabled]/slider:bg-surface-border"
    )}
  />
						<For4 each={Array.from({ length: thumbCount() })}>
							{() => <KobalteSlider.Thumb
    style={thumbCenterStyle()}
    class={cn(
      "relative z-10 block rounded-full border-0 outline-none transition cursor-pointer touch-none",
      thumbSizeClass(),
      fillThumbClass(),
      "shadow-[0_1px_3px_rgba(0,0,0,0.12)]",
      "ring-0 hover:ring-0 focus-visible:ring-2",
      focusRingClass(),
      "group-[.is-disabled]/slider:bg-surface-border group-[.is-disabled]/slider:group-[.is-disabled]/slider:shadow-none"
    )}
  >
									<KobalteSlider.Input />
								</KobalteSlider.Thumb>}
						</For4>
					</KobalteSlider.Track>
					<Show11 when={local.marks && local.marks.length > 0 && isHorizontal()}>
						<div class="relative min-h-[1.25rem] w-full min-w-0 pt-0.5 text-xs text-ink-500">
							<For4 each={local.marks}>
								{(m) => {
    const min = local.minValue ?? 0;
    const max = local.maxValue ?? 100;
    const range = max - min;
    const pct = range === 0 ? 0 : (m - min) / range * 100;
    return <span
      class="absolute -translate-x-1/2"
      style={{ left: `${pct}%` }}
    >
											{m}
										</span>;
  }}
							</For4>
						</div>
					</Show11>
				</div>
				<Show11 when={local.endContent}>
					<div class="shrink-0 text-ink-500 [&>svg]:h-4 [&>svg]:w-4">
						{local.endContent}
					</div>
				</Show11>
			</div>
			<Show11 when={local.label && !isHorizontal()}>
				<KobalteSlider.ValueLabel class="text-sm text-ink-500 text-center tabular-nums mt-2" />
			</Show11>
			<Show11 when={local.helperText}>
				<KobalteSlider.Description class="mt-1 text-xs text-ink-500">
					{local.helperText}
				</KobalteSlider.Description>
			</Show11>
			<Show11 when={local.error}>
				<KobalteSlider.ErrorMessage class="mt-1 text-xs text-danger-600">
					{local.error}
				</KobalteSlider.ErrorMessage>
			</Show11>
		</KobalteSlider>;
}

// src/components/forms/FileUpload.tsx
import { createUniqueId as createUniqueId5, createSignal as createSignal10, onMount as onMount6, onCleanup as onCleanup7, Show as Show14, For as For6, splitProps as splitProps20 } from "solid-js";

// src/components/feedback/Progress.tsx
import { createEffect as createEffect6, createMemo as createMemo7, For as For5, Show as Show12, splitProps as splitProps18, onMount as onMount4 } from "solid-js";
import { Progress as KobalteProgress } from "@kobalte/core/progress";
var ANIMATION_NAME = "torchui-progress-fill";
var INDETERMINATE_NAME = "torchui-progress-indeterminate";
var PROGRESS_STYLE_ID = "torchui-progress-styles";
function ensureProgressStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(PROGRESS_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = PROGRESS_STYLE_ID;
  style.textContent = `@keyframes ${ANIMATION_NAME} { to { width: 100%; } }
@keyframes ${INDETERMINATE_NAME} {
	0% { transform: translateX(-100%); }
	100% { transform: translateX(400%); }
}
.torchui-progress-stripes {
	position: absolute;
	inset: 0;
	pointer-events: none;
	background-image: repeating-linear-gradient(
		-45deg,
		transparent 0,
		transparent 10px,
		rgba(255,255,255,.25) 10px,
		rgba(255,255,255,.25) 20px
	);
	border-radius: inherit;
}`;
  document.head.appendChild(style);
}
var SIZE_CLASSES = {
  sm: "h-1",
  md: "h-1.5",
  lg: "h-2"
};
var RADIUS_CLASSES = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
};
var EDGE_RADIUS_CLASSES = {
  none: { left: "rounded-l-none", right: "rounded-r-none" },
  sm: { left: "rounded-l-sm", right: "rounded-r-sm" },
  md: { left: "rounded-l-md", right: "rounded-r-md" },
  lg: { left: "rounded-l-lg", right: "rounded-r-lg" },
  full: { left: "rounded-l-full", right: "rounded-r-full" }
};
var COLOR_CLASSES = {
  default: "bg-ink-500",
  primary: "bg-primary-500",
  secondary: "bg-secondary-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
  danger: "bg-danger-500"
};
function getPercent(value, min, max) {
  if (min >= max) {
    if (false) {
    }
    return 0;
  }
  return Math.min(100, Math.max(0, (value - min) / (max - min) * 100));
}
function Progress(props) {
  const [local] = splitProps18(props, [
    "value",
    "minValue",
    "maxValue",
    "label",
    "valueLabel",
    "size",
    "color",
    "radius",
    "formatOptions",
    "showValueLabel",
    "isIndeterminate",
    "isStriped",
    "disabled",
    "disableAnimation",
    "segments",
    "durationMs",
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
    "aria-valuetext",
    "aria-valuenow",
    "aria-valuemin",
    "aria-valuemax",
    "classNames",
    "class",
    "trackClass",
    "fillClass"
  ]);
  const min = () => local.minValue ?? 0;
  const max = () => local.maxValue ?? 100;
  const rawValue = () => local.value ?? 0;
  const percent = () => getPercent(rawValue(), min(), max());
  const segments = () => local.segments;
  const durationMs = () => local.durationMs;
  const size = () => local.size ?? "md";
  const color = () => local.color ?? "primary";
  const radius = () => local.radius ?? "full";
  const isIndeterminate = () => local.isIndeterminate === true;
  const showValue = () => local.showValueLabel !== false && local.valueLabel == null && durationMs() == null && !isIndeterminate();
  const ariaLabel = () => local["aria-label"] ?? (typeof local.label === "string" ? local.label : void 0);
  let warnedLabel = false;
  createEffect6(() => {
    if (false) {
      warnedLabel = true;
    }
  });
  const formatter = createMemo7(
    () => new Intl.NumberFormat(void 0, local.formatOptions ?? { style: "percent", maximumFractionDigits: 0 })
  );
  const valueDisplay = () => {
    if (local.valueLabel != null) return local.valueLabel;
    if (!showValue()) return null;
    return formatter().format(percent() / 100);
  };
  const segmentIndexes = createMemo7(
    () => segments() != null ? Array.from({ length: segments() }, (_, i) => i) : []
  );
  const classNames = () => local.classNames ?? {};
  onMount4(ensureProgressStyles);
  return <KobalteProgress
    value={isIndeterminate() || durationMs() != null ? void 0 : rawValue()}
    minValue={min()}
    maxValue={max()}
    indeterminate={isIndeterminate() || durationMs() != null}
    getValueLabel={({ value, min: min2, max: max2 }) => {
      if (local["aria-valuetext"]) return local["aria-valuetext"];
      const pct = getPercent(value, min2, max2);
      return formatter().format(pct / 100);
    }}
    class={cn("w-full", local.class, classNames().base)}
    aria-label={ariaLabel()}
    aria-labelledby={local["aria-labelledby"]}
    aria-describedby={local["aria-describedby"]}
    aria-disabled={local.disabled ? "true" : void 0}
  >
			<Show12 when={local.label != null || valueDisplay() != null}>
				<div
    class={cn(
      "flex items-center justify-between gap-2 mb-1",
      classNames().labelWrapper
    )}
  >
					<Show12 when={local.label != null}>
						<KobalteProgress.Label class={cn("text-sm font-medium text-ink-700", classNames().label)}>
							{local.label}
						</KobalteProgress.Label>
					</Show12>
					<Show12 when={valueDisplay() != null}>
						<KobalteProgress.ValueLabel class={cn("text-sm text-ink-600", classNames().value)}>
							{valueDisplay()}
						</KobalteProgress.ValueLabel>
					</Show12>
				</div>
			</Show12>
			<KobalteProgress.Track
    class={cn(
      "w-full overflow-hidden bg-surface-dim",
      SIZE_CLASSES[size()],
      RADIUS_CLASSES[radius()],
      local.trackClass,
      classNames().track
    )}
  >
				{segments() != null ? <div class="h-full w-full flex gap-0.5">
						<For5 each={segmentIndexes()}>
							{(i) => {
    const count = segments();
    const filled = () => percent() / 100 * count > i;
    const segRadius = () => i === 0 ? EDGE_RADIUS_CLASSES[radius()].left : i === count - 1 ? EDGE_RADIUS_CLASSES[radius()].right : "rounded-none";
    return <div
      class={cn(
        "h-full flex-1 transition-colors duration-200",
        segRadius(),
        filled() ? local.fillClass ?? COLOR_CLASSES[color()] : "bg-surface-dim",
        classNames().indicator
      )}
    />;
  }}
						</For5>
					</div> : <KobalteProgress.Fill
    class={cn(
      "h-full transition-[width] ease-linear relative",
      RADIUS_CLASSES[radius()],
      !durationMs() && !isIndeterminate() && !local.disableAnimation && "duration-200",
      local.fillClass ?? COLOR_CLASSES[color()],
      classNames().indicator
    )}
    style={isIndeterminate() ? {
      width: "25%",
      animation: local.disableAnimation ? void 0 : `${INDETERMINATE_NAME} 1.5s ease-in-out infinite`
    } : durationMs() != null ? {
      width: "0%",
      animation: `${ANIMATION_NAME} ${durationMs()}ms linear forwards`
    } : { width: "var(--kb-progress-fill-width)" }}
  >
						<Show12 when={local.isStriped}>
							<div class="torchui-progress-stripes" aria-hidden="true" />
						</Show12>
					</KobalteProgress.Fill>}
			</KobalteProgress.Track>
		</KobalteProgress>;
}

// src/components/overlays/Dialog.tsx
import { Show as Show13, onMount as onMount5, splitProps as splitProps19, createEffect as createEffect7, createSignal as createSignal9, on as on3, onCleanup as onCleanup6 } from "solid-js";
import { Dialog as KobalteDialog } from "@kobalte/core/dialog";
var DEFAULT_DURATION_MS = 200;
var sizeClasses2 = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: ""
  // No longer needed - positioning handled conditionally
};
var dialogStyles = `
@keyframes torchui-dialog-fade-in {
	from { opacity: 0; }
	to { opacity: 1; }
}
@keyframes torchui-dialog-fade-out {
	from { opacity: 1; }
	to { opacity: 0; }
}
@keyframes torchui-dialog-scale-in {
	from { opacity: 0; transform: scale(0.96); }
	to { opacity: 1; transform: scale(1); }
}
@keyframes torchui-dialog-scale-out {
	from { opacity: 1; transform: scale(1); }
	to { opacity: 0; transform: scale(0.96); }
}
@keyframes torchui-dialog-slide-up-in {
	from { opacity: 0; transform: translateY(0.5rem); }
	to { opacity: 1; transform: translateY(0); }
}
@keyframes torchui-dialog-slide-up-out {
	from { opacity: 1; transform: translateY(0); }
	to { opacity: 0; transform: translateY(0.5rem); }
}
.torchui-dialog-overlay {
	opacity: 0;
	animation: torchui-dialog-fade-out var(--dialog-exit-duration, 0.16s) ease-in forwards;
}
.torchui-dialog-overlay[data-expanded] {
	opacity: 1;
	animation: torchui-dialog-fade-in var(--dialog-duration, 0.2s) ease-out forwards;
}
.torchui-dialog-content[data-animation="fade"] {
	opacity: 0;
	animation: torchui-dialog-fade-out var(--dialog-exit-duration, 0.16s) ease-in forwards;
}
.torchui-dialog-content[data-animation="fade"][data-expanded] {
	opacity: 1;
	animation: torchui-dialog-fade-in var(--dialog-duration, 0.2s) ease-out forwards;
}
.torchui-dialog-content[data-animation="scale"] {
	opacity: 0;
	animation: torchui-dialog-scale-out var(--dialog-exit-duration, 0.16s) ease-in forwards;
}
.torchui-dialog-content[data-animation="scale"][data-expanded] {
	opacity: 1;
	animation: torchui-dialog-scale-in var(--dialog-duration, 0.2s) ease-out forwards;
}
.torchui-dialog-content[data-animation="slide-up"] {
	opacity: 0;
	animation: torchui-dialog-slide-up-out var(--dialog-exit-duration, 0.16s) ease-in forwards;
}
.torchui-dialog-content[data-animation="slide-up"][data-expanded] {
	opacity: 1;
	animation: torchui-dialog-slide-up-in var(--dialog-duration, 0.2s) ease-out forwards;
}
`;
var STYLE_ID = "torchui-dialog-styles";
function ensureDialogStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = dialogStyles;
  document.head.appendChild(style);
}
function Dialog(props) {
  const icons = useIcons();
  const [local, others] = splitProps19(props, [
    "open",
    "onOpenChange",
    "onClose",
    "size",
    "overlay",
    "closeOnOverlayClick",
    "overlayClass",
    "overlayDim",
    "overlayBlur",
    "showCloseButton",
    "overlayAnimation",
    "panelAnimation",
    "animationDuration",
    "animationExitDuration",
    "onCloseComplete",
    "onCloseAutoFocus",
    "class",
    "children",
    "header",
    "footer",
    "ref"
  ]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  if (false) {
    const hasAccessibleNameProp = () => "aria-label" in others || "aria-labelledby" in others || "ariaLabel" in others || "ariaLabelledby" in others;
    createEffect7(on3(
      () => local.open,
      (open) => {
        if (open && !local.header && !hasAccessibleNameProp()) {
        }
      }
    ));
  }
  onMount5(ensureDialogStyles);
  const duration = () => local.animationDuration ?? DEFAULT_DURATION_MS;
  const exitDuration = () => local.animationExitDuration ?? Math.round((local.animationDuration ?? DEFAULT_DURATION_MS) * 0.8);
  const cssVars = () => ({
    "--dialog-duration": `${duration()}ms`,
    "--dialog-exit-duration": `${exitDuration()}ms`
  });
  const [effectiveSize, setEffectiveSize] = createSignal9(local.size ?? "md");
  createEffect7(on3(
    () => [local.open, local.size],
    ([open, size]) => {
      if (open) setEffectiveSize(size ?? "md");
    }
  ));
  createEffect7(on3(() => local.open, (isOpen, wasOpen) => {
    if (wasOpen === true && !isOpen) {
      const t = setTimeout(() => local.onCloseComplete?.(), exitDuration());
      onCleanup6(() => clearTimeout(t));
    }
  }));
  const sizeClass = () => sizeClasses2[effectiveSize()];
  const isFull = () => effectiveSize() === "full";
  const showOverlay = () => local.overlay !== false;
  const closeOnOverlay = () => local.closeOnOverlayClick !== false;
  const overlayAnimation = () => local.overlayAnimation ?? "fade";
  const panelAnimation = () => local.panelAnimation ?? "scale";
  const hasCloseRow = () => (local.onClose != null || local.onOpenChange != null) && local.showCloseButton !== false;
  const hasHeaderRow = () => !!(local.header || hasCloseRow());
  let previouslyFocusedElement = null;
  const mergedContentRef = (el) => {
    if (el) {
      const active = document.activeElement;
      if (active instanceof HTMLElement && active !== document.body && active !== document.documentElement && !el.contains(active)) {
        previouslyFocusedElement = active;
      }
      const focusable = el.querySelector(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable) focusable.focus({ preventScroll: true });
      else el.focus({ preventScroll: true });
    }
    if (typeof local.ref === "function") local.ref(el);
  };
  const onCloseAutoFocus = (e) => {
    local.onCloseAutoFocus?.(e);
    if (e.defaultPrevented) return;
    const target = previouslyFocusedElement;
    previouslyFocusedElement = null;
    if (target?.isConnected) target.focus({ preventScroll: true });
  };
  return <KobalteDialog
    open={local.open}
    onOpenChange={(isOpen) => {
      local.onOpenChange?.(isOpen);
      if (!isOpen) local.onClose?.();
    }}
    modal
  >
			<KobalteDialog.Portal>
				<div class="contents" style={cssVars()}>
					<Show13 when={showOverlay()}>
						<KobalteDialog.Overlay
    class={cn(
      "fixed inset-0 z-[60]",
      overlayAnimation() !== "none" && "torchui-dialog-overlay",
      local.overlayDim !== false && "bg-black/30 dark:bg-black/50",
      local.overlayBlur !== false && "backdrop-blur-md dark:backdrop-blur-sm",
      local.overlayClass
    )}
  />
					</Show13>
					{
    /* Positioning wrapper: centering only, never animated */
  }
					<div
    class={cn(
      "fixed z-[70] w-full",
      isFull() ? "inset-0 p-0" : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4",
      // centering for normal dialogs
      !isFull() && sizeClass(),
      local.class
    )}
  >
						{
    /* Content: focus trap, role=dialog, aria-modal, escape key, animation */
  }
						<KobalteDialog.Content
    ref={mergedContentRef}
    class={cn(
      panelAnimation() !== "none" && "torchui-dialog-content",
      isFull() && "h-full min-h-0 flex flex-col"
    )}
    data-animation={panelAnimation() !== "none" ? panelAnimation() : void 0}
    onInteractOutside={(e) => {
      if (!closeOnOverlay()) e.preventDefault();
    }}
    onCloseAutoFocus={onCloseAutoFocus}
    {...others}
  >
							{
    /* Visual panel */
  }
							<div
    class={cn(
      "bg-surface-raised text-ink-900",
      isFull() ? "h-full min-h-0 flex-1 flex flex-col" : "overflow-y-auto max-h-[90vh] rounded-lg border border-surface-border p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,.2)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,.5)]"
      // Normal dialog
    )}
  >
								{
    /* Header row — sticky for full-screen, inline for normal */
  }
								<Show13 when={hasHeaderRow()}>
									<div
    class={cn(
      "flex items-center justify-between gap-4",
      isFull() ? "shrink-0 border-b border-surface-border px-4 py-3" : ""
    )}
  >
										<Show13 when={local.header}>
											<KobalteDialog.Title as="div" class="min-w-0 flex-1">
												{local.header}
											</KobalteDialog.Title>
										</Show13>
										<Show13 when={!local.header}>
											<span />
										</Show13>
										<Show13 when={hasCloseRow()}>
											<KobalteDialog.CloseButton
    aria-label={zh() ? "\u5173\u95ED" : "Close"}
    class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-overlay text-ink-500 hover:bg-surface-dim hover:text-ink-700"
  >
												{icons.close({ class: "h-5 w-5", "aria-hidden": "true" })}
											</KobalteDialog.CloseButton>
										</Show13>
									</div>
								</Show13>
								{
    /* Body — independently scrollable for full-screen */
  }
								<div
    class={cn(
      isFull() ? "flex-1 overflow-y-auto px-4 py-4" : hasHeaderRow() ? "mt-7" : ""
    )}
  >
									{local.children}
								</div>
								{
    /* Footer */
  }
								<Show13 when={local.footer}>
									<div
    class={cn(
      isFull() ? "shrink-0 border-t border-surface-border px-4 py-4" : "mt-8 border-t border-surface-border pt-5"
    )}
  >
										{local.footer}
									</div>
								</Show13>
							</div>
						</KobalteDialog.Content>
					</div>
				</div>
			</KobalteDialog.Portal>
		</KobalteDialog>;
}

// src/components/forms/FileUpload.tsx
var DEFAULT_MAX_FILES = 10;
var DEFAULT_LABELS = {
  dropzonePrompt: "Choose a file or drag & drop here",
  dropzoneDragTitle: "Drag and drop your files here",
  dropzoneDragSubtitle: "or click Browse below",
  dropzoneBrowseButton: "Browse",
  browseFilesButton: "Browse Files",
  ariaChooseFile: "Choose file",
  ariaChooseFiles: "Choose files",
  ariaBrowseFiles: "Browse files",
  ariaFileUpload: "File upload",
  ariaViewFiles: "View files",
  ariaUploadedFiles: "Uploaded files",
  ariaRetry: (name) => `Retry ${name}`,
  ariaRemove: (name) => `Remove ${name}`,
  ariaProgress: (name) => `Upload progress for ${name}`,
  statusDone: "Uploaded",
  statusPending: "Pending",
  statusFailed: "Failed",
  statusUploading: "\u2026",
  summaryUploading: (n) => `Uploading ${n}\u2026`,
  summaryDone: (n) => n === 1 ? "1 file uploaded" : `${n} files uploaded`,
  summaryFailed: (done, failed) => `${done} uploaded, ${failed} failed`,
  limitsMaxSize: (size) => `Max ${size}`,
  limitsOneFile: "1 file",
  limitsMaxFiles: (n) => `Up to ${n} files`,
  errorMaxOneFile: "Maximum 1 file allowed.",
  errorMaxFiles: (n) => `Maximum ${n} files allowed.`,
  errorOverLimit: (skipped, limitLabel) => `${skipped} file${skipped > 1 ? "s" : ""} not added: ${limitLabel} reached.`,
  errorTooLarge: (name, maxSize) => `${name}: exceeds ${maxSize}.`,
  errorBadType: (name) => `${name}: type not accepted.`
};
var ZH_LABELS = {
  dropzonePrompt: "\u9009\u62E9\u6587\u4EF6\u6216\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u6B64\u5904",
  dropzoneDragTitle: "\u5C06\u6587\u4EF6\u62D6\u5230\u8FD9\u91CC",
  dropzoneDragSubtitle: "\u6216\u70B9\u51FB\u4E0B\u65B9\u6D4F\u89C8\u6309\u94AE",
  dropzoneBrowseButton: "\u6D4F\u89C8",
  browseFilesButton: "\u6D4F\u89C8\u6587\u4EF6",
  ariaChooseFile: "\u9009\u62E9\u6587\u4EF6",
  ariaChooseFiles: "\u9009\u62E9\u6587\u4EF6",
  ariaBrowseFiles: "\u6D4F\u89C8\u6587\u4EF6",
  ariaFileUpload: "\u6587\u4EF6\u4E0A\u4F20",
  ariaViewFiles: "\u67E5\u770B\u6587\u4EF6",
  ariaUploadedFiles: "\u5DF2\u4E0A\u4F20\u6587\u4EF6",
  ariaRetry: (name) => `\u91CD\u8BD5 ${name}`,
  ariaRemove: (name) => `\u79FB\u9664 ${name}`,
  ariaProgress: (name) => `${name} \u7684\u4E0A\u4F20\u8FDB\u5EA6`,
  statusDone: "\u5DF2\u4E0A\u4F20",
  statusPending: "\u7B49\u5F85\u4E2D",
  statusFailed: "\u5931\u8D25",
  statusUploading: "\u2026",
  summaryUploading: (n) => `\u6B63\u5728\u4E0A\u4F20 ${n} \u4E2A\u2026`,
  summaryDone: (n) => n === 1 ? "\u5DF2\u4E0A\u4F20 1 \u4E2A\u6587\u4EF6" : `\u5DF2\u4E0A\u4F20 ${n} \u4E2A\u6587\u4EF6`,
  summaryFailed: (done, failed) => `\u5DF2\u4E0A\u4F20 ${done} \u4E2A\uFF0C\u5931\u8D25 ${failed} \u4E2A`,
  limitsMaxSize: (size) => `\u6700\u5927 ${size}`,
  limitsOneFile: "1 \u4E2A\u6587\u4EF6",
  limitsMaxFiles: (n) => `\u6700\u591A ${n} \u4E2A\u6587\u4EF6`,
  errorMaxOneFile: "\u6700\u591A\u5141\u8BB8 1 \u4E2A\u6587\u4EF6\u3002",
  errorMaxFiles: (n) => `\u6700\u591A\u5141\u8BB8 ${n} \u4E2A\u6587\u4EF6\u3002`,
  errorOverLimit: (skipped, limitLabel) => `\u672A\u6DFB\u52A0 ${skipped} \u4E2A\u6587\u4EF6\uFF1A\u5DF2\u8FBE${limitLabel}\u4E0A\u9650\u3002`,
  errorTooLarge: (name, maxSize) => `${name}\uFF1A\u8D85\u8FC7 ${maxSize}\u3002`,
  errorBadType: (name) => `${name}\uFF1A\u6587\u4EF6\u7C7B\u578B\u4E0D\u53D7\u652F\u6301\u3002`
};
var CODE_EXT = /* @__PURE__ */ new Set(["txt", "js", "jsx", "ts", "tsx", "mjs", "cjs", "json", "html", "htm", "css", "scss", "sass", "less", "md", "xml", "yml", "yaml", "sh", "bash", "py", "rb", "php", "java", "c", "cpp", "h", "hpp", "cs", "go", "rs", "vue", "svelte"]);
var SPREADSHEET_EXT = /* @__PURE__ */ new Set(["csv", "xls", "xlsx", "xlsm", "ods"]);
var ARCHIVE_EXT = /* @__PURE__ */ new Set(["zip", "rar", "7z", "tar", "gz", "bz2", "xz", "zst"]);
function defaultFileIcon(file, icons) {
  const t = (file.type || "").toLowerCase();
  const ext = (file.name.split(".").pop() ?? "").toLowerCase();
  const cls = "h-4 w-4 shrink-0 text-ink-400";
  if (t === "application/pdf") return icons.fileText({ class: cls, "aria-hidden": "true" });
  if (t.startsWith("image/")) return icons.fileImage({ class: cls, "aria-hidden": "true" });
  if (t.startsWith("video/")) return icons.filePlay({ class: cls, "aria-hidden": "true" });
  if (t === "text/csv" || t.includes("spreadsheet") || t.includes("excel") || SPREADSHEET_EXT.has(ext))
    return icons.fileSpreadsheet({ class: cls, "aria-hidden": "true" });
  if (t.includes("zip") || t.includes("rar") || t.includes("gzip") || t.includes("compress") || ARCHIVE_EXT.has(ext))
    return icons.folderArchive({ class: cls, "aria-hidden": "true" });
  if (t.startsWith("text/") || CODE_EXT.has(ext)) return icons.fileCode({ class: cls, "aria-hidden": "true" });
  return icons.file({ class: cls, "aria-hidden": "true" });
}
function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function validateFiles(files, accept, maxFileSize, maxFiles, currentCount, labels) {
  const errors = [];
  const valid = [];
  const remaining = Math.max(0, maxFiles - currentCount);
  if (remaining === 0) {
    errors.push(maxFiles === 1 ? labels.errorMaxOneFile : labels.errorMaxFiles(maxFiles));
    return { valid, errors };
  }
  const types = accept?.split(",").map((t) => t.trim().toLowerCase()).filter(Boolean) ?? [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (valid.length >= remaining) {
      const skipped = files.length - i;
      const limitLabel = maxFiles === 1 ? labels.limitsOneFile : labels.limitsMaxFiles(maxFiles);
      errors.push(labels.errorOverLimit(skipped, limitLabel));
      break;
    }
    if (maxFileSize != null && file.size > maxFileSize) {
      errors.push(labels.errorTooLarge(file.name, formatFileSize(maxFileSize)));
      continue;
    }
    if (types.length > 0) {
      const mime = (file.type || "").toLowerCase();
      const ext = "." + (file.name.split(".").pop() ?? "").toLowerCase();
      const allowed = types.some((t) => t === "*/*") || types.some((t) => t.startsWith(".") && ext === t) || types.some((t) => mime === t || t.endsWith("/*") && mime && mime.startsWith(t.slice(0, -1)));
      if (!allowed) {
        errors.push(labels.errorBadType(file.name));
        continue;
      }
    }
    valid.push(file);
  }
  return { valid, errors };
}
function FileUpload(props) {
  const [local, rest] = splitProps20(props, [
    "files",
    "onAddFiles",
    "onRemove",
    "onRetry",
    "label",
    "description",
    "accept",
    "maxFiles",
    "maxFileSize",
    "variant",
    "error",
    "onErrorClear",
    "disabled",
    "id",
    "ref",
    "class",
    "browseButton",
    "actions",
    "multiple",
    "fileIcon",
    "fileInline",
    "labels"
  ]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const l = () => ({ ...DEFAULT_LABELS, ...resolveLocale(void 0, contextLocale) === "zh" ? ZH_LABELS : {}, ...local.labels });
  const uid = createUniqueId5();
  const id = () => local.id ?? `file-upload-${uid}`;
  const labelId = () => `${id()}-label`;
  const descId = () => `${id()}-desc`;
  const validationId = () => `${id()}-validation`;
  const errorId = () => `${id()}-error`;
  const variant = () => local.variant ?? "dropzone";
  const isMultiple = () => local.multiple !== false;
  const maxFiles = () => local.maxFiles ?? (isMultiple() ? DEFAULT_MAX_FILES : 1);
  const fileIcon = (file) => local.fileIcon ? local.fileIcon(file) : defaultFileIcon(file, icons);
  const canAddMore = () => local.files.length < maxFiles();
  const atLimit = () => !canAddMore();
  const [dragDepth, setDragDepth] = createSignal10(0);
  const dragOver = () => dragDepth() > 0;
  const [validationErrors, setValidationErrors] = createSignal10([]);
  const [viewModalOpen, setViewModalOpen] = createSignal10(false);
  const zoneDisabled = () => local.disabled || atLimit();
  const isFileDrag = (e) => Array.from(e.dataTransfer?.types ?? []).includes("Files");
  onMount6(() => {
    const reset = () => setDragDepth(0);
    const onWinDragLeave = (e) => {
      if (e.relatedTarget == null) reset();
    };
    window.addEventListener("drop", reset);
    window.addEventListener("dragend", reset);
    window.addEventListener("dragleave", onWinDragLeave);
    document.addEventListener("drop", reset);
    document.addEventListener("dragend", reset);
    onCleanup7(() => {
      window.removeEventListener("drop", reset);
      window.removeEventListener("dragend", reset);
      window.removeEventListener("dragleave", onWinDragLeave);
      document.removeEventListener("drop", reset);
      document.removeEventListener("dragend", reset);
    });
  });
  const describedBy = () => {
    const parts = [];
    if (local.description || limitsText()) parts.push(descId());
    if (validationErrors().length > 0) parts.push(validationId());
    if (local.error) parts.push(errorId());
    return parts.length > 0 ? parts.join(" ") : void 0;
  };
  const hasAnyError = () => validationErrors().length > 0 || !!local.error;
  const ariaErrorMessage = () => validationErrors().length > 0 ? validationId() : local.error ? errorId() : void 0;
  let inputEl;
  let eyeButtonEl;
  const handleInputChange = (e) => {
    setValidationErrors([]);
    if (local.error && local.onErrorClear) local.onErrorClear();
    const input = e.currentTarget;
    const list = input.files;
    if (!list?.length) return;
    const newFiles = Array.from(list);
    const { valid, errors } = validateFiles(
      newFiles,
      local.accept,
      local.maxFileSize,
      maxFiles(),
      local.files.length,
      l()
    );
    setValidationErrors(errors);
    if (valid.length) local.onAddFiles(valid);
    input.value = "";
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setDragDepth(0);
    setValidationErrors([]);
    if (local.error && local.onErrorClear) local.onErrorClear();
    if (local.disabled || atLimit()) return;
    const list = e.dataTransfer?.files;
    if (!list?.length) return;
    const newFiles = Array.from(list);
    const { valid, errors } = validateFiles(
      newFiles,
      local.accept,
      local.maxFileSize,
      maxFiles(),
      local.files.length,
      l()
    );
    setValidationErrors(errors);
    if (valid.length) local.onAddFiles(valid);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    if (!isFileDrag(e) || local.disabled || atLimit()) return;
    setDragDepth((d) => Math.min(1, d + 1));
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    const next = e.relatedTarget;
    if (next && e.currentTarget.contains(next)) return;
    setDragDepth((d) => Math.max(0, d - 1));
  };
  const isSingleFileMode = () => local.multiple === false || maxFiles() === 1;
  const hideTrigger = () => isSingleFileMode() && local.files.length > 0;
  const showFileListBelow = () => local.files.length > 0 && (hideTrigger() || !(variant() === "button" && local.fileInline));
  const limitsText = () => {
    const parts = [];
    if (local.maxFileSize != null) parts.push(l().limitsMaxSize(formatFileSize(local.maxFileSize)));
    if (maxFiles() === 1) parts.push(l().limitsOneFile);
    else if (maxFiles() !== DEFAULT_MAX_FILES) parts.push(l().limitsMaxFiles(maxFiles()));
    return parts.length ? parts.join(". ") : void 0;
  };
  const summary = () => {
    const list = local.files;
    const done = list.filter((f) => f.status === "done").length;
    const failed = list.filter((f) => f.status === "error").length;
    const uploading = list.filter((f) => f.status === "uploading").length;
    if (failed > 0) return l().summaryFailed(done, failed);
    if (uploading > 0) return l().summaryUploading(uploading);
    if (done > 0) return l().summaryDone(done);
    return void 0;
  };
  return <div class={cn("w-full", local.class)} {...rest}>

			<Show14 when={local.label}>

				<div
    id={labelId()}
    class="mb-1.5 block text-sm font-medium text-ink-700"
  >

					{local.label}

				</div>

			</Show14>



			{variant() === "dropzone" && <Show14 when={!hideTrigger()}>

					<div
    role="group"
    aria-labelledby={local.label ? labelId() : void 0}
    aria-label={local.label ? void 0 : l().ariaFileUpload}
    class={cn(
      "rounded-lg border-2 border-dashed transition-colors",
      dragOver() ? "border-primary-500 bg-primary-50" : "border-surface-border bg-surface-base/50",
      (local.disabled || atLimit()) && "pointer-events-none opacity-50"
    )}
    onDrop={handleDrop}
    onDragOver={handleDragOver}
    onDragEnter={handleDragEnter}
    onDragLeave={handleDragLeave}
  >

					<input
    ref={mergeRefs((el) => inputEl = el, local.ref)}
    id={id()}
    type="file"
    accept={local.accept}
    multiple={isMultiple()}
    onChange={handleInputChange}
    disabled={local.disabled || atLimit()}
    class="sr-only"
    aria-labelledby={local.label ? labelId() : void 0}
    aria-label={local.label ? void 0 : isMultiple() ? l().ariaChooseFiles : l().ariaChooseFile}
    aria-describedby={describedBy()}
    aria-invalid={hasAnyError() ? "true" : void 0}
    aria-errormessage={ariaErrorMessage()}
  />

					<Show14
    when={local.browseButton}
    fallback={<div
      role="button"
      tabIndex={zoneDisabled() ? -1 : 0}
      aria-disabled={zoneDisabled() ? "true" : void 0}
      onClick={() => !zoneDisabled() && inputEl?.click()}
      onKeyDown={(e) => {
        if (zoneDisabled()) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          inputEl?.click();
        }
      }}
      class="flex min-h-[120px] cursor-pointer flex-col items-center justify-center gap-1 px-4 py-6 text-center outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 rounded-lg"
    >

								{icons.fileUpload({ class: "h-8 w-8 text-ink-400", "aria-hidden": "true" })}

								<span class="text-sm font-medium text-ink-700">

									{l().dropzonePrompt}

								</span>

								<Show14 when={limitsText()}>

									<span class="text-xs text-ink-500">{limitsText()}</span>

								</Show14>

								<Show14 when={local.description && !limitsText()}>

									<span class="text-xs text-ink-500">{local.description}</span>

								</Show14>

							</div>}
  >

						<div class="flex min-h-[140px] flex-col items-center justify-center gap-3 px-4 py-6">

							<div class="flex flex-col items-center justify-center gap-1 text-center">

								{icons.fileUpload({ class: "h-10 w-10 text-ink-400", "aria-hidden": "true" })}

								<span class="text-sm font-medium text-ink-700">

									{l().dropzoneDragTitle}

								</span>

								<span class="text-sm text-ink-500">

									{l().dropzoneDragSubtitle}

								</span>

								<Show14 when={limitsText()}>

									<span class="text-xs text-ink-500">{limitsText()}</span>

								</Show14>

								<Show14 when={local.description && !limitsText()}>

									<span class="text-xs text-ink-500">{local.description}</span>

								</Show14>

							</div>

							<button
    type="button"
    onClick={() => inputEl?.click()}
    disabled={local.disabled || atLimit()}
    class={cn(
      "inline-flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-600 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
      (local.disabled || atLimit()) && "opacity-50"
    )}
  >

								{icons.fileUpload({ class: "h-4 w-4", "aria-hidden": "true" })}

								{l().dropzoneBrowseButton}

							</button>

						</div>

					</Show14>

				</div>

				</Show14>}



			{variant() === "button" && <>

					<Show14 when={!hideTrigger()}>

						<div class="flex flex-wrap items-center gap-2">

							<input
    ref={mergeRefs((el) => inputEl = el, local.ref)}
    id={id()}
    type="file"
    accept={local.accept}
    multiple={isMultiple()}
    onChange={handleInputChange}
    disabled={local.disabled || atLimit()}
    class="sr-only"
    aria-labelledby={local.label ? labelId() : void 0}
    aria-label={local.label ? void 0 : l().ariaBrowseFiles}
    aria-describedby={describedBy()}
    aria-invalid={hasAnyError() ? "true" : void 0}
    aria-errormessage={ariaErrorMessage()}
  />

							<button
    type="button"
    onClick={() => inputEl?.click()}
    disabled={local.disabled || atLimit()}
    class={cn(
      "inline-flex items-center gap-2 rounded-lg border border-surface-border bg-surface-raised px-3 py-2 text-sm font-medium text-ink-700 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
      (local.disabled || atLimit()) && "opacity-50"
    )}
  >

								{icons.fileUpload({ class: "h-4 w-4", "aria-hidden": "true" })}

								{l().browseFilesButton}

							</button>

							<Show14 when={local.description}>

								<span class="text-sm text-ink-500">{local.description}</span>

							</Show14>

							<Show14 when={local.fileInline && local.files.length > 0}>

								<div class="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-surface-border bg-surface-raised px-3 py-2">

									<Show14
    when={local.files.length === 1 && local.files[0]}
    fallback={<span class="min-w-0 flex-1 text-sm text-ink-900">

												{local.files.length === 1 ? zh() ? "1 \u4E2A\u6587\u4EF6" : "1 file" : zh() ? `${local.files.length} \u4E2A\u6587\u4EF6` : `${local.files.length} files`}

											</span>}
  >

										<>

											{local.files[0] && fileIcon(local.files[0].file)}

											<span class="min-w-0 flex-1 truncate text-sm font-medium text-ink-900">

												{local.files[0]?.file.name}

											</span>

											<span class="shrink-0 text-xs text-ink-500">

												{local.files[0] && formatFileSize(local.files[0].file.size)}

											</span>

										</>

									</Show14>

									<button
    ref={(el) => eyeButtonEl = el}
    type="button"
    onClick={(e) => {
      e.currentTarget.blur();
      setViewModalOpen(true);
    }}
    title={l().ariaViewFiles}
    class="shrink-0 rounded p-1.5 text-ink-500 hover:bg-surface-overlay hover:text-ink-700 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
    aria-label={l().ariaViewFiles}
  >

										{icons.eye({ class: "h-4 w-4", "aria-hidden": "true" })}

									</button>

								</div>

							</Show14>

						</div>

					</Show14>

					<Dialog
    open={viewModalOpen()}
    onClose={() => setViewModalOpen(false)}
    onCloseComplete={() => eyeButtonEl?.focus({ preventScroll: true })}
    size="md"
    showCloseButton
    header={<h2 class="text-lg font-semibold text-ink-900">{l().ariaUploadedFiles}</h2>}
  >

						<p class="mb-3 text-sm text-ink-500">

							{local.files.length === 1 ? zh() ? "1 \u4E2A\u6587\u4EF6" : "1 file" : zh() ? `${local.files.length} \u4E2A\u6587\u4EF6` : `${local.files.length} files`}
						</p>

						<ul class="space-y-2" aria-label={l().ariaUploadedFiles}>

							<For6 each={local.files}>

								{(item) => <li class="flex items-center gap-2 rounded-lg border border-surface-border bg-surface-base px-3 py-2">

										{fileIcon(item.file)}

										<span class="min-w-0 flex-1 truncate text-sm font-medium text-ink-900">

											{item.file.name}

										</span>

										<span class="shrink-0 text-xs text-ink-500">

											{formatFileSize(item.file.size)}

										</span>

										<span class="shrink-0 text-xs text-ink-500">

											{item.status === "done" && l().statusDone}

											{item.status === "uploading" && (item.progress != null ? `${item.progress}%` : l().statusUploading)}

											{item.status === "error" && (item.error ?? l().statusFailed)}

											{item.status === "pending" && l().statusPending}

										</span>

										<div class="flex shrink-0 items-center gap-1">

											{item.status === "error" && local.onRetry && <button
    type="button"
    onClick={() => local.onRetry?.(item.id)}
    class="rounded p-1 text-ink-500 hover:bg-surface-overlay hover:text-ink-700 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
    aria-label={l().ariaRetry(item.file.name)}
  >

													{icons.refresh({ class: "h-4 w-4", "aria-hidden": "true" })}

												</button>}

											<button
    type="button"
    onClick={() => local.onRemove(item.id)}
    class="rounded p-1 text-ink-500 hover:bg-surface-overlay hover:text-ink-700 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
    aria-label={l().ariaRemove(item.file.name)}
  >

												{icons.trash({ class: "h-4 w-4", "aria-hidden": "true" })}

											</button>

										</div>

									</li>}

							</For6>

						</ul>

					</Dialog>

					</>}



			{
    /* File list below (when not button+fileInline, or when dropzone / single file with trigger hidden) */
  }

			<Show14 when={showFileListBelow()}>

				<ul class="mt-3 space-y-2" aria-label={l().ariaUploadedFiles}>

					<For6 each={local.files}>

						{(item) => <li class="flex flex-col gap-1.5 rounded-lg border border-surface-border bg-surface-raised px-3 py-2">

								<div class="flex items-center gap-2">

									{fileIcon(item.file)}

									<span class="min-w-0 flex-1 truncate text-sm font-medium text-ink-900">

										{item.file.name}

									</span>

									<span class="shrink-0 text-xs text-ink-500">

										{formatFileSize(item.file.size)}

									</span>

									<span class="shrink-0 text-xs text-ink-500">

										{item.status === "uploading" && (item.progress != null ? `${item.progress}%` : l().statusUploading)}

										{item.status === "done" && l().statusDone}

										{item.status === "error" && (item.error ?? l().statusFailed)}

										{item.status === "pending" && l().statusPending}

									</span>

									<div class="flex shrink-0 items-center gap-1">

										{item.status === "uploading" && icons.spinner({ class: "h-4 w-4 animate-spin text-ink-400", "aria-hidden": "true" })}

										{item.status === "error" && local.onRetry && <button
    type="button"
    onClick={() => local.onRetry?.(item.id)}
    class="rounded p-1 text-ink-500 hover:bg-surface-overlay hover:text-ink-700 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
    aria-label={l().ariaRetry(item.file.name)}
  >

												{icons.refresh({ class: "h-4 w-4", "aria-hidden": "true" })}

											</button>}

										<button
    type="button"
    onClick={() => local.onRemove(item.id)}
    class="rounded p-1 text-ink-500 hover:bg-surface-overlay hover:text-ink-700 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
    aria-label={l().ariaRemove(item.file.name)}
  >

											{icons.trash({ class: "h-4 w-4", "aria-hidden": "true" })}

										</button>

									</div>

								</div>

								<Show14 when={item.status === "uploading" && item.progress != null}>

									<Progress
    value={item.progress}
    size="sm"
    showValueLabel={false}
    class="h-1.5"
    aria-label={l().ariaProgress(item.file.name)}
  />

								</Show14>

							</li>}

					</For6>

				</ul>

			</Show14>



			<Show14 when={local.actions && !(variant() === "button" && local.fileInline)}>

				<div class="mt-3 flex w-full items-center justify-between gap-2">

					{local.actions}

				</div>

			</Show14>



			<Show14 when={summary() && !(variant() === "button" && local.fileInline)}>

				<p class="mt-2 text-xs text-ink-500">{summary()}</p>

			</Show14>



			<Show14 when={local.description || limitsText()}>

				<span id={descId()} class="sr-only">

					{
    /* In button variant, description is visible — only include limits here to avoid double-announce */
  }

					{variant() === "button" ? limitsText() : <>{local.description}{local.description && limitsText() ? " " : ""}{limitsText()}</>}

				</span>

			</Show14>



			<Show14 when={validationErrors().length > 0}>

				<ul id={validationId()} role="alert" class="mt-2 flex flex-col gap-0.5 text-sm text-danger-600 dark:text-danger-400">

					<For6 each={validationErrors()}>

						{(msg) => <li>{msg}</li>}

					</For6>

				</ul>

			</Show14>



			<Show14 when={local.error}>

				<p id={errorId()} class="mt-2 flex items-center gap-1.5 text-sm text-danger-600 dark:text-danger-400">

					{local.error}

				</p>

			</Show14>

		</div>;
}

// src/components/forms/DatePicker.tsx
import { createSignal as createSignal11, createMemo as createMemo8, Show as Show15, For as For7, splitProps as splitProps21, createUniqueId as createUniqueId6 } from "solid-js";
import { Popover as KobaltePopover } from "@kobalte/core/popover";
var DAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var ZH_DAY_NAMES = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"];
var ZH_MONTH_NAMES = [
  "\u4E00\u6708",
  "\u4E8C\u6708",
  "\u4E09\u6708",
  "\u56DB\u6708",
  "\u4E94\u6708",
  "\u516D\u6708",
  "\u4E03\u6708",
  "\u516B\u6708",
  "\u4E5D\u6708",
  "\u5341\u6708",
  "\u5341\u4E00\u6708",
  "\u5341\u4E8C\u6708"
];
function parseDate(s) {
  if (!s) return null;
  const datePart = s.slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(datePart)) return null;
  const d = /* @__PURE__ */ new Date(datePart + "T12:00:00");
  return isNaN(d.getTime()) ? null : d;
}
function toISODate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function formatDisplay(s, showTime, timeFormat) {
  if (!s) return "";
  const d = parseDate(s);
  if (!d) return "";
  const dateStr = d.toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" });
  if (!showTime || s.length < 16) return dateStr;
  const timePart = s.slice(11, 16);
  const [h, m] = timePart.split(":").map(Number);
  if (isNaN(h) || isNaN(m)) return dateStr;
  const mm = String(m).padStart(2, "0");
  if (timeFormat === "24h") return `${dateStr}, ${String(h).padStart(2, "0")}:${mm}`;
  const hour12 = h % 12 || 12;
  const ampm = h < 12 ? "AM" : "PM";
  return `${dateStr}, ${hour12}:${mm} ${ampm}`;
}
function getCalendarDays(year, month) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startPad = first.getDay();
  const flat = [];
  for (let i = 0; i < startPad; i++) flat.push(new Date(year, month, 1 - (startPad - i)));
  for (let d = 1; d <= last.getDate(); d++) flat.push(new Date(year, month, d));
  for (let n = 1; flat.length < 42; n++) flat.push(new Date(year, month + 1, n));
  const grid = [];
  for (let r = 0; r < 6; r++) grid.push(flat.slice(r * 7, (r + 1) * 7));
  return grid;
}
function DatePicker(props) {
  const [local] = splitProps21(props, [
    "value",
    "onValueChange",
    "onErrorClear",
    "placeholder",
    "disabled",
    "min",
    "max",
    "label",
    "error",
    "helperText",
    "bare",
    "required",
    "optional",
    "size",
    "class",
    "id",
    "presets",
    "showTime",
    "timeFormat"
  ]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const contextSize = useComponentSize();
  const sc = () => inputSizeConfig[local.size ?? contextSize ?? "md"];
  const generatedId = createUniqueId6();
  const inputId = () => local.id || `datepicker-${generatedId}`;
  const hourInputId = createUniqueId6();
  const minuteInputId = createUniqueId6();
  const [open, setOpen] = createSignal11(false);
  const valueDatePart = () => local.value ? local.value.slice(0, 10) : "";
  const valueDate = () => parseDate(valueDatePart());
  const viewDate = () => valueDate() ?? /* @__PURE__ */ new Date();
  const [viewMonthYear, setViewMonthYear] = createSignal11(null);
  const effectiveViewYear = () => viewMonthYear()?.year ?? viewDate().getFullYear();
  const effectiveViewMonth = () => viewMonthYear()?.month ?? viewDate().getMonth();
  const calendarDays = createMemo8(() => getCalendarDays(effectiveViewYear(), effectiveViewMonth()));
  const [viewMode, setViewMode] = createSignal11("calendar");
  const minDate = createMemo8(() => local.min ? parseDate(local.min) : null);
  const maxDate = createMemo8(() => local.max ? parseDate(local.max) : null);
  const [pendingHour, setPendingHour] = createSignal11(0);
  const [pendingMinute, setPendingMinute] = createSignal11(0);
  const is12h = () => local.timeFormat !== "24h";
  const displayHour12 = () => {
    const h = pendingHour();
    return h === 0 ? 12 : h > 12 ? h - 12 : h;
  };
  const displayAmPm = () => pendingHour() < 12 ? "AM" : "PM";
  function syncTimeFromValue() {
    if (local.value && local.value.length >= 16) {
      const [h, m] = local.value.slice(11, 16).split(":").map(Number);
      if (!isNaN(h) && !isNaN(m)) {
        setPendingHour(h);
        setPendingMinute(m);
        return;
      }
    }
    setPendingHour(0);
    setPendingMinute(0);
  }
  function buildValue(dateStr, h, m) {
    if (!local.showTime) return dateStr;
    return `${dateStr}T${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  }
  function commitTime(h, m) {
    setPendingHour(h);
    setPendingMinute(m);
    const dp = valueDatePart();
    if (dp) {
      if (local.error && local.onErrorClear) local.onErrorClear();
      local.onValueChange?.(buildValue(dp, h, m));
    }
  }
  function toggleAmPm() {
    const h = pendingHour();
    commitTime(h < 12 ? h + 12 : h - 12, pendingMinute());
  }
  const yearsList = () => {
    const current = effectiveViewYear();
    const minY = minDate()?.getFullYear() ?? current - 20;
    const maxY = maxDate()?.getFullYear() ?? current + 5;
    return Array.from({ length: maxY - minY + 1 }, (_, i) => minY + i);
  };
  function isDisabled(d) {
    const t = d.getTime();
    if (minDate() && t < minDate().getTime()) return true;
    if (maxDate() && t > maxDate().getTime()) return true;
    return false;
  }
  function isCurrentMonth(d) {
    return d.getMonth() === effectiveViewMonth() && d.getFullYear() === effectiveViewYear();
  }
  function isSelected(d) {
    return !!valueDatePart() && toISODate(d) === valueDatePart();
  }
  function selectDate(d) {
    if (isDisabled(d)) return;
    if (local.error && local.onErrorClear) local.onErrorClear();
    const dateStr = toISODate(d);
    local.onValueChange?.(buildValue(dateStr, pendingHour(), pendingMinute()));
    if (!local.showTime) setOpen(false);
  }
  function selectPreset(value) {
    if (local.error && local.onErrorClear) local.onErrorClear();
    if (local.showTime) {
      local.onValueChange?.(buildValue(value, pendingHour(), pendingMinute()));
    } else {
      local.onValueChange?.(value);
      setOpen(false);
    }
  }
  const todayISO = () => toISODate(/* @__PURE__ */ new Date());
  const todayDisabled = () => isDisabled(/* @__PURE__ */ new Date());
  function selectToday() {
    if (todayDisabled()) return;
    if (local.error && local.onErrorClear) local.onErrorClear();
    local.onValueChange?.(buildValue(todayISO(), pendingHour(), pendingMinute()));
    if (!local.showTime) setOpen(false);
  }
  function goPrevMonth() {
    const d = new Date(effectiveViewYear(), effectiveViewMonth() - 1, 1);
    setViewMonthYear({ year: d.getFullYear(), month: d.getMonth() });
  }
  function goNextMonth() {
    const d = new Date(effectiveViewYear(), effectiveViewMonth() + 1, 1);
    setViewMonthYear({ year: d.getFullYear(), month: d.getMonth() });
  }
  function goPrevYear() {
    setViewMonthYear({ year: effectiveViewYear() - 1, month: effectiveViewMonth() });
  }
  function goNextYear() {
    setViewMonthYear({ year: effectiveViewYear() + 1, month: effectiveViewMonth() });
  }
  function setMonth(m) {
    setViewMonthYear({ year: effectiveViewYear(), month: m });
    setViewMode("calendar");
  }
  function setYear(y) {
    setViewMonthYear({ year: y, month: effectiveViewMonth() });
    setViewMode("calendar");
  }
  const canGoPrevMonth = () => {
    const mn = minDate();
    if (!mn) return true;
    return new Date(effectiveViewYear(), effectiveViewMonth(), 0).getTime() >= mn.getTime();
  };
  const canGoNextMonth = () => {
    const mx = maxDate();
    if (!mx) return true;
    return new Date(effectiveViewYear(), effectiveViewMonth() + 1, 1).getTime() <= mx.getTime();
  };
  const canGoPrevYear = () => {
    const mn = minDate();
    if (!mn) return true;
    return effectiveViewYear() > mn.getFullYear();
  };
  const canGoNextYear = () => {
    const mx = maxDate();
    if (!mx) return true;
    return effectiveViewYear() < mx.getFullYear();
  };
  const isMonthDisabled = (m) => {
    const y = effectiveViewYear();
    const mn = minDate();
    const mx = maxDate();
    if (mn && new Date(y, m + 1, 0).getTime() < mn.getTime()) return true;
    if (mx && new Date(y, m, 1).getTime() > mx.getTime()) return true;
    return false;
  };
  const displayValue = () => formatDisplay(local.value ?? "", local.showTime, local.timeFormat);
  const hasError = () => !!local.error;
  const msgId = () => local.error || local.helperText ? `${inputId()}-msg` : void 0;
  const hasPresets = () => !!(local.presets && local.presets.length > 0);
  const timeHourDisplay = () => is12h() ? String(displayHour12()) : String(pendingHour()).padStart(2, "0");
  const timeMinuteDisplay = () => String(pendingMinute()).padStart(2, "0");
  const navBtnSm = "flex h-7 w-7 items-center justify-center rounded-md hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50";
  const timeBtnSm = "flex h-6 w-6 items-center justify-center rounded text-ink-500 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50";
  const timeInputCls = "w-9 rounded-md border border-surface-border bg-surface-raised py-0.5 text-center text-sm font-medium text-ink-900 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500";
  return <div class={cn("w-full", local.class)}>

			<Show15 when={!local.bare && local.label}>

				<div class="mb-2 flex items-center justify-between">

					<label
    for={inputId()}
    class={cn(
      "block text-sm font-medium",
      hasError() ? "text-danger-600" : "text-ink-700"
    )}
  >

						{local.label}

						{local.required && <span class="text-danger-500 ml-0.5" aria-hidden="true">*</span>}

					</label>

					<Show15 when={!local.required && local.optional}>

						<span class="text-xs text-ink-400">{zh() ? "\u9009\u586B" : "optional"}</span>

					</Show15>

				</div>

			</Show15>



			<KobaltePopover
    open={open()}
    onOpenChange={(next) => {
      setOpen(next);
      if (next) {
        const d = valueDate() ?? minDate() ?? /* @__PURE__ */ new Date();
        setViewMonthYear({ year: d.getFullYear(), month: d.getMonth() });
        syncTimeFromValue();
      }
      setViewMode("calendar");
    }}
    gutter={8}
  >

				<div class="relative">

					<KobaltePopover.Trigger
    as="button"
    type="button"
    id={inputId()}
    disabled={local.disabled}
    aria-describedby={msgId()}
    aria-invalid={hasError() ? "true" : void 0}
    class={cn(
      "inline-flex w-full items-center gap-2 rounded-lg border transition-colors",
      sc().h,
      sc().py,
      sc().pl,
      sc().text,
      displayValue() && !local.disabled ? "pr-8" : sc().pr,
      hasError() ? "border-danger-500 bg-surface-raised text-ink-900 hover:border-danger-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-danger-500 focus-visible:border-transparent" : "border-surface-border bg-surface-raised text-ink-900 hover:border-ink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 focus-visible:border-transparent",
      local.disabled && "opacity-50"
    )}
  >

						{icons.calendar({ class: "h-4 w-4 shrink-0 text-ink-400", "aria-hidden": "true" })}

						<span class={cn("truncate", displayValue() ? "text-ink-900" : "text-ink-400")}>

							{displayValue() || (local.placeholder ?? (zh() ? "\u9009\u62E9\u65E5\u671F" : "Select date"))}

						</span>

					</KobaltePopover.Trigger>

					<Show15 when={displayValue() && !local.disabled}>

						<button
    type="button"
    onClick={(e) => {
      e.stopPropagation();
      local.onValueChange?.("");
    }}
    class="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-ink-400 hover:text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
    aria-label={zh() ? "\u6E05\u9664\u65E5\u671F" : "Clear date"}
  >

							{icons.close({ class: "h-3.5 w-3.5", "aria-hidden": "true" })}

						</button>

					</Show15>

				</div>



			<KobaltePopover.Portal>

				<KobaltePopover.Content
    data-kb-top-layer=""
    role="dialog"
    aria-label={zh() ? "\u9009\u62E9\u65E5\u671F" : "Choose date"}
    class={cn(
      "z-[80] rounded-xl border border-surface-border bg-surface-raised shadow-xl outline-none",
      "origin-top data-[expanded]:animate-in data-[expanded]:fade-in-0 data-[expanded]:zoom-in-95",
      "data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95"
    )}
  >

						<div class={cn("p-3 flex gap-3")}>



							{
    /* Presets sidebar */
  }

							<Show15 when={hasPresets()}>

								<div class="flex flex-col gap-1 border-r border-surface-border pr-3 min-w-[110px]">

									<For7 each={local.presets}>

										{(preset) => <button
    type="button"
    onClick={() => selectPreset(preset.value)}
    class={cn(
      "w-full rounded-md px-3 py-1.5 text-left text-xs font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
      valueDatePart() === preset.value ? "bg-primary-500 text-white" : "text-ink-700 hover:bg-surface-overlay"
    )}
  >

												{preset.label}

											</button>}

									</For7>

								</div>

							</Show15>



							{
    /* Calendar body */
  }

							<div class="flex-1 min-w-0">



								{
    /* Header */
  }

								<div class="flex items-center justify-between gap-2 mb-3">

									{viewMode() !== "calendar" ? <button
    type="button"
    onClick={() => setViewMode("calendar")}
    class={cn(navBtnSm, "text-ink-500")}
    aria-label={zh() ? "\u8FD4\u56DE\u65E5\u5386" : "Back to calendar"}
  >

											{icons.chevronLeft({ class: "h-4 w-4", "aria-hidden": "true" })}

										</button> : <button
    type="button"
    onClick={goPrevMonth}
    disabled={!canGoPrevMonth()}
    class={cn(navBtnSm, "text-ink-500", !canGoPrevMonth() && "opacity-30 pointer-events-none")}
    aria-label={zh() ? "\u4E0A\u4E2A\u6708" : "Previous month"}
  >

											{icons.chevronLeft({ class: "h-4 w-4", "aria-hidden": "true" })}

										</button>}



									<div class="flex min-w-[140px] items-center justify-center gap-1">

										{viewMode() === "calendar" && <>

												<button
    type="button"
    onClick={() => setViewMode("months")}
    class="rounded-md px-2 py-1 text-sm font-semibold text-ink-900 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
  >

													{zh() ? ZH_MONTH_NAMES[effectiveViewMonth()] : MONTH_NAMES[effectiveViewMonth()]}

												</button>

												<button
    type="button"
    onClick={() => setViewMode("years")}
    class="rounded-md px-2 py-1 text-sm font-semibold text-ink-900 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
  >

													{effectiveViewYear()}

												</button>

											</>}

										{viewMode() === "months" && <>

												<button
    type="button"
    onClick={goPrevYear}
    disabled={!canGoPrevYear()}
    class={cn(navBtnSm, "text-ink-400", !canGoPrevYear() && "opacity-30 pointer-events-none")}
    aria-label={zh() ? "\u4E0A\u4E00\u5E74" : "Previous year"}
  >

													{icons.chevronLeft({ class: "h-4 w-4", "aria-hidden": "true" })}

												</button>

												<button
    type="button"
    onClick={() => setViewMode("years")}
    class="rounded-md px-2 py-1 text-sm font-semibold text-ink-900 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
  >

													{effectiveViewYear()}

												</button>

												<button
    type="button"
    onClick={goNextYear}
    disabled={!canGoNextYear()}
    class={cn(navBtnSm, "text-ink-400", !canGoNextYear() && "opacity-30 pointer-events-none")}
    aria-label={zh() ? "\u4E0B\u4E00\u5E74" : "Next year"}
  >

													{icons.chevronRight({ class: "h-4 w-4", "aria-hidden": "true" })}

												</button>

											</>}

										{viewMode() === "years" && <span class="text-sm font-semibold text-ink-900">{zh() ? "\u9009\u62E9\u5E74\u4EFD" : "Select year"}</span>}

									</div>



									{viewMode() !== "calendar" ? <div class="w-7" aria-hidden="true" /> : <button
    type="button"
    onClick={goNextMonth}
    disabled={!canGoNextMonth()}
    class={cn(navBtnSm, "text-ink-500", !canGoNextMonth() && "opacity-30 pointer-events-none")}
    aria-label={zh() ? "\u4E0B\u4E2A\u6708" : "Next month"}
  >

											{icons.chevronRight({ class: "h-4 w-4", "aria-hidden": "true" })}

										</button>}

								</div>



								{
    /* Calendar grid */
  }

								<Show15 when={viewMode() === "calendar"}>

									<div>

										<div class="grid grid-cols-7 mb-2">

											<For7 each={DAY_NAMES}>

												{(name, i) => <div class="py-1 text-center text-xs font-medium text-ink-400">{zh() ? ZH_DAY_NAMES[i()] : name}</div>}

											</For7>

										</div>

										<For7 each={calendarDays()}>

											{(week) => <div class="grid grid-cols-7">

													<For7 each={week}>

														{(d) => {
    const disabled = isDisabled(d);
    const currentMonth = isCurrentMonth(d);
    const selected = isSelected(d);
    const isToday = toISODate(d) === todayISO();
    return <div class="relative h-8 flex items-center justify-center">

																	<button
      type="button"
      disabled={disabled}
      onClick={() => selectDate(d)}
      aria-label={d.toLocaleDateString(void 0, { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
      aria-current={selected ? "date" : void 0}
      class={cn(
        "relative z-10 h-7 w-7 rounded-full text-xs transition-colors",
        "outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
        selected ? "bg-primary-500 text-white font-semibold hover:bg-primary-600" : !currentMonth ? "text-ink-300 hover:bg-surface-overlay" : isToday ? "text-primary-600 font-semibold hover:bg-surface-overlay" : "text-ink-800 hover:bg-surface-overlay",
        disabled && "opacity-30"
      )}
    >

																		{d.getDate()}

																		{isToday && !selected && <span class="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary-500" />}

																	</button>

																</div>;
  }}

													</For7>

												</div>}

										</For7>

									</div>

								</Show15>



								{
    /* Month picker */
  }

								<Show15 when={viewMode() === "months"}>

									<div class="grid grid-cols-3 gap-1">

										<For7 each={MONTH_NAMES}>

											{(name, m) => <button
    type="button"
    onClick={() => setMonth(m())}
    disabled={isMonthDisabled(m())}
    class={cn(
      "rounded-lg py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
      isMonthDisabled(m()) ? "text-ink-300 opacity-50" : m() === effectiveViewMonth() ? "bg-primary-500 text-white" : "text-ink-700 hover:bg-surface-overlay"
    )}
  >

													{zh() ? ZH_MONTH_NAMES[m()] : name}

												</button>}

										</For7>

									</div>

								</Show15>



								{
    /* Year picker */
  }

								<Show15 when={viewMode() === "years"}>

									<div class="grid max-h-48 grid-cols-4 gap-1 overflow-y-auto">

										<For7 each={yearsList()}>

											{(y) => <button
    type="button"
    onClick={() => setYear(y)}
    class={cn(
      "rounded-lg py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
      y === effectiveViewYear() ? "bg-primary-500 text-white" : "text-ink-700 hover:bg-surface-overlay"
    )}
  >

													{y}

												</button>}

										</For7>

									</div>

								</Show15>



								{
    /* Time picker */
  }

								<Show15 when={local.showTime}>

									<div class="mt-3 border-t border-surface-border pt-3">

										<div class="flex items-center justify-center gap-1">

											{
    /* Hour */
  }

											<div class="flex flex-col items-center gap-0.5">

												<button
    type="button"
    onClick={() => commitTime((pendingHour() + 1) % 24, pendingMinute())}
    class={timeBtnSm}
    aria-label={zh() ? "\u589E\u52A0\u5C0F\u65F6" : "Increment hour"}
  >

													{icons.chevronUp({ class: "h-3.5 w-3.5", "aria-hidden": "true" })}

												</button>

												<input
    type="text"
    id={hourInputId}
    name="hour"
    inputmode="numeric"
    value={timeHourDisplay()}
    onInput={(e) => {
      const v = parseInt(e.currentTarget.value, 10);
      if (isNaN(v)) return;
      if (is12h()) {
        if (v < 1 || v > 12) return;
        const isAm = pendingHour() < 12;
        commitTime(isAm ? v === 12 ? 0 : v : v === 12 ? 12 : v + 12, pendingMinute());
      } else {
        if (v < 0 || v > 23) return;
        commitTime(v, pendingMinute());
      }
    }}
    class={timeInputCls}
    aria-label={zh() ? "\u5C0F\u65F6" : "Hour"}
  />

												<button
    type="button"
    onClick={() => commitTime((pendingHour() + 23) % 24, pendingMinute())}
    class={timeBtnSm}
    aria-label={zh() ? "\u51CF\u5C11\u5C0F\u65F6" : "Decrement hour"}
  >

													{icons.chevronDown({ class: "h-3.5 w-3.5", "aria-hidden": "true" })}

												</button>

											</div>



											<span class="text-sm font-bold text-ink-400 mb-0.5">:</span>



											{
    /* Minute */
  }

											<div class="flex flex-col items-center gap-0.5">

												<button
    type="button"
    onClick={() => commitTime(pendingHour(), (pendingMinute() + 1) % 60)}
    class={timeBtnSm}
    aria-label={zh() ? "\u589E\u52A0\u5206\u949F" : "Increment minute"}
  >

													{icons.chevronUp({ class: "h-3.5 w-3.5", "aria-hidden": "true" })}

												</button>

												<input
    type="text"
    id={minuteInputId}
    name="minute"
    inputmode="numeric"
    value={timeMinuteDisplay()}
    onInput={(e) => {
      const v = parseInt(e.currentTarget.value, 10);
      if (isNaN(v) || v < 0 || v > 59) return;
      commitTime(pendingHour(), v);
    }}
    class={timeInputCls}
    aria-label={zh() ? "\u5206\u949F" : "Minute"}
  />

												<button
    type="button"
    onClick={() => commitTime(pendingHour(), (pendingMinute() + 59) % 60)}
    class={timeBtnSm}
    aria-label={zh() ? "\u51CF\u5C11\u5206\u949F" : "Decrement minute"}
  >

													{icons.chevronDown({ class: "h-3.5 w-3.5", "aria-hidden": "true" })}

												</button>

											</div>



											{
    /* AM/PM */
  }

											<Show15 when={is12h()}>

												<button
    type="button"
    onClick={toggleAmPm}
    class="ml-1 rounded-md border border-surface-border bg-surface-raised px-2 py-1 text-xs font-medium text-ink-700 hover:bg-surface-overlay transition-colors min-w-[2.5rem] outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
  >

													{displayAmPm()}

												</button>

											</Show15>

										</div>

									</div>

								</Show15>



								{
    /* Footer */
  }

								<div class="mt-3 flex items-center justify-between border-t border-surface-border pt-3">

									<div class="text-xs text-ink-400">{displayValue() || (zh() ? "\u672A\u9009\u62E9\u65E5\u671F" : "No date selected")}</div>

									<div class="flex gap-2">

										<button
    type="button"
    onClick={() => {
      local.onValueChange?.("");
      if (!local.showTime) setOpen(false);
    }}
    class={cn(
      "rounded-md px-2 py-1 text-xs text-ink-500 hover:bg-surface-overlay hover:text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
      !displayValue() && "invisible"
    )}
  >

											{zh() ? "\u6E05\u9664" : "Clear"}

										</button>

										<Show15 when={!local.showTime}>

											<button
    type="button"
    disabled={todayDisabled()}
    onClick={selectToday}
    class={cn(
      "rounded-md px-2 py-1 text-xs font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
      todayDisabled() ? "text-ink-300" : "text-primary-600 hover:bg-primary-50"
    )}
  >

												{zh() ? "\u4ECA\u5929" : "Today"}

											</button>

										</Show15>

										<Show15 when={local.showTime}>

											<button
    type="button"
    onClick={() => setOpen(false)}
    class="rounded-md px-2 py-1 text-xs font-medium text-white bg-primary-500 hover:bg-primary-600 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
  >

												{zh() ? "\u5B8C\u6210" : "Done"}

											</button>

										</Show15>

									</div>

								</div>



							</div>

						</div>

				</KobaltePopover.Content>

			</KobaltePopover.Portal>

			</KobaltePopover>



			<Show15 when={local.error || local.helperText}>

				<p
    id={msgId()}
    class={cn("mt-1.5 text-xs", hasError() ? "text-danger-600" : "text-ink-500")}
  >

					{local.error ?? local.helperText}

				</p>

			</Show15>

		</div>;
}

// src/components/forms/DateRangePicker.tsx
import { createSignal as createSignal12, createMemo as createMemo9, Show as Show16, For as For8, splitProps as splitProps22, createUniqueId as createUniqueId7, createEffect as createEffect8, on as on4 } from "solid-js";
import { Popover as KobaltePopover2 } from "@kobalte/core/popover";

// src/components/forms/TimeSelect.tsx
import { Select as KobalteSelect3 } from "@kobalte/core/select";
var fmt = (v) => String(v).padStart(2, "0");
function TimeSelect(props) {
  return <KobalteSelect3
    value={fmt(props.value)}
    onChange={(v) => {
      if (v !== null) props.onChange(Number(v));
    }}
    options={props.options.map(fmt)}
    gutter={4}
    sameWidth
    itemComponent={(p) => <KobalteSelect3.Item
      item={p.item}
      class="flex cursor-default select-none items-center rounded px-2 py-0.5 text-xs text-ink-900 data-[highlighted]:bg-primary-50 data-[highlighted]:text-primary-900 data-[selected]:font-semibold"
    >
					<KobalteSelect3.ItemLabel>{p.item.rawValue}</KobalteSelect3.ItemLabel>
				</KobalteSelect3.Item>}
  >
			<KobalteSelect3.Trigger class={cn(
    "flex min-w-[2.75rem] items-center justify-between gap-1 rounded-md border border-surface-border bg-surface-raised px-2 py-1",
    "text-xs text-ink-900 focus:outline-none focus:ring-1 focus:ring-primary-500"
  )}>
				<KobalteSelect3.Value>
					{(state) => state.selectedOption()}
				</KobalteSelect3.Value>
				<KobalteSelect3.Icon class="text-[8px] text-ink-400 leading-none">▾</KobalteSelect3.Icon>
			</KobalteSelect3.Trigger>
			<KobalteSelect3.Portal>
				{
    /* Mark as top layer so the enclosing modal Dialog's ariaHideOutside does not set aria-hidden on this portaled content */
  }
				<KobalteSelect3.Content
    data-kb-top-layer
    class={cn(
      "z-[80] min-w-[3rem] rounded-md border border-surface-border bg-surface-raised shadow-md",
      "origin-top data-[expanded]:animate-in data-[expanded]:fade-in-0 data-[expanded]:zoom-in-95",
      "data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95"
    )}
  >
					<KobalteSelect3.Listbox class="max-h-48 overflow-y-auto p-1 focus:outline-none" />
				</KobalteSelect3.Content>
			</KobalteSelect3.Portal>
		</KobalteSelect3>;
}

// src/components/forms/DateRangePicker.tsx
var DAY_NAMES2 = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var MONTH_NAMES2 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var ZH_DAY_NAMES2 = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"];
var ZH_MONTH_NAMES2 = [
  "\u4E00\u6708",
  "\u4E8C\u6708",
  "\u4E09\u6708",
  "\u56DB\u6708",
  "\u4E94\u6708",
  "\u516D\u6708",
  "\u4E03\u6708",
  "\u516B\u6708",
  "\u4E5D\u6708",
  "\u5341\u6708",
  "\u5341\u4E00\u6708",
  "\u5341\u4E8C\u6708"
];
function parseDate2(s) {
  if (!s || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return null;
  const d = /* @__PURE__ */ new Date(s + "T12:00:00");
  return isNaN(d.getTime()) ? null : d;
}
function toISODate2(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function formatDisplay2(s) {
  const d = parseDate2(s);
  if (!d) return "";
  return d.toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric" });
}
function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function getCalendarDays2(year, month) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startPad = first.getDay();
  const flat = [];
  for (let i = 0; i < startPad; i++) {
    flat.push(new Date(year, month, 1 - (startPad - i)));
  }
  for (let d = 1; d <= last.getDate(); d++) {
    flat.push(new Date(year, month, d));
  }
  while (flat.length < 42) {
    flat.push(new Date(year, month + 1, flat.length - last.getDate() - startPad + 1));
  }
  return flat;
}
function MonthGrid(props) {
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const days = createMemo9(() => getCalendarDays2(props.year, props.month));
  const isCurrentMonth = (d) => d.getMonth() === props.month;
  const isDisabled = (d) => {
    if (props.min && d < props.min) return true;
    if (props.max && d > props.max) return true;
    if (props.selectableFrom && d < props.selectableFrom) return true;
    return false;
  };
  const isStart = (d) => !!props.start && sameDay(d, props.start);
  const effectiveEndDate = () => !props.end && props.hover ? props.hover : props.end;
  const orderedRange = () => {
    const s = props.start;
    const e = effectiveEndDate();
    if (!s || !e) return null;
    return e < s ? [e, s] : [s, e];
  };
  const isInRange = (d) => {
    const range = orderedRange();
    if (!range) return false;
    return d > range[0] && d < range[1];
  };
  const isRangeStart = (d) => {
    const range = orderedRange();
    if (!range) return isStart(d);
    return sameDay(d, range[0]);
  };
  const isRangeEnd = (d) => {
    const range = orderedRange();
    if (!range) return false;
    return sameDay(d, range[1]);
  };
  const isToday = (d) => sameDay(d, /* @__PURE__ */ new Date());
  return <div>

			<div class="grid grid-cols-7 mb-2">

				<For8 each={DAY_NAMES2}>

					{(name, i) => <div class="py-1 text-center text-xs font-medium text-ink-400">{zh() ? ZH_DAY_NAMES2[i()] : name}</div>}

				</For8>

			</div>

			<div class="grid grid-cols-7 gap-y-1">

				<For8 each={days()}>

					{(day) => {
    const rangeStart = () => isRangeStart(day);
    const rangeEnd = () => isRangeEnd(day);
    const inRange = () => isInRange(day);
    const disabled = () => isDisabled(day);
    const otherMonth = () => !isCurrentMonth(day);
    const today = () => isToday(day);
    const selected = () => rangeStart() || rangeEnd();
    return <div
      class={cn(
        "relative h-8 flex items-center justify-center",
        inRange() && "bg-primary-50",
        rangeStart() && "rounded-l-full",
        rangeEnd() && "rounded-r-full"
      )}
    >

								<button
      type="button"
      disabled={disabled()}
      onClick={() => !disabled() && props.onDayClick(day)}
      onMouseEnter={() => !disabled() && props.onDayHover(day)}
      onMouseLeave={() => props.onDayHover(null)}
      class={cn(
        "relative z-10 h-7 w-7 rounded-full text-xs transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
        selected() ? "bg-primary-500 text-white font-semibold hover:bg-primary-600" : inRange() ? "text-primary-700 hover:bg-primary-100" : otherMonth() ? "text-ink-300 hover:bg-surface-overlay" : today() ? "text-primary-600 font-semibold hover:bg-surface-overlay" : "text-ink-800 hover:bg-surface-overlay",
        disabled() && "opacity-30"
      )}
    >

									{day.getDate()}

									{today() && !selected() && <span class="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary-500" />}

								</button>

							</div>;
  }}

				</For8>

			</div>

		</div>;
}
function DateRangePicker(props) {
  const [local] = splitProps22(props, [
    "start",
    "end",
    "onValueChange",
    "onErrorClear",
    "placeholder",
    "disabled",
    "min",
    "max",
    "label",
    "error",
    "helperText",
    "bare",
    "required",
    "optional",
    "dualMonth",
    "clearable",
    "size",
    "class",
    "id",
    "showTime",
    "timeFormat",
    "minuteStep"
  ]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const contextSize = useComponentSize();
  const sc = () => inputSizeConfig[local.size ?? contextSize ?? "md"];
  const generatedId = createUniqueId7();
  const inputId = () => local.id || `drp-${generatedId}`;
  const [open, setOpen] = createSignal12(false);
  const [hover, setHover] = createSignal12(null);
  const [pickingEnd, setPickingEnd] = createSignal12(false);
  const [pendingStartHour, setPendingStartHour] = createSignal12(0);
  const [pendingStartMinute, setPendingStartMinute] = createSignal12(0);
  const [pendingEndHour, setPendingEndHour] = createSignal12(23);
  const [pendingEndMinute, setPendingEndMinute] = createSignal12(59);
  const is12h = () => local.timeFormat !== "24h";
  const displayStartHour12 = () => {
    const h = pendingStartHour();
    return h === 0 ? 12 : h > 12 ? h - 12 : h;
  };
  const displayStartAmPm = () => pendingStartHour() < 12 ? "AM" : "PM";
  const displayEndHour12 = () => {
    const h = pendingEndHour();
    return h === 0 ? 12 : h > 12 ? h - 12 : h;
  };
  const displayEndAmPm = () => pendingEndHour() < 12 ? "AM" : "PM";
  function toggleStartAmPm() {
    const h = pendingStartHour();
    handleStartTimeChange(h < 12 ? h + 12 : h - 12, pendingStartMinute());
  }
  function handleStartHour12Change(h12) {
    const isAm = pendingStartHour() < 12;
    handleStartTimeChange(isAm ? h12 === 12 ? 0 : h12 : h12 === 12 ? 12 : h12 + 12, pendingStartMinute());
  }
  function toggleEndAmPm() {
    const h = pendingEndHour();
    handleEndTimeChange(h < 12 ? h + 12 : h - 12, pendingEndMinute());
  }
  function handleEndHour12Change(h12) {
    const isAm = pendingEndHour() < 12;
    handleEndTimeChange(isAm ? h12 === 12 ? 0 : h12 : h12 === 12 ? 12 : h12 + 12, pendingEndMinute());
  }
  function handleStartTimeChange(h, m) {
    setPendingStartHour(h);
    setPendingStartMinute(m);
    const dateStr = local.start ? local.start.split("T")[0] : "";
    if (dateStr) local.onValueChange?.(
      `${dateStr}T${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`,
      local.end ?? ""
    );
  }
  function handleEndTimeChange(h, m) {
    setPendingEndHour(h);
    setPendingEndMinute(m);
    const dateStr = local.end ? local.end.split("T")[0] : "";
    if (dateStr) local.onValueChange?.(
      local.start ?? "",
      `${dateStr}T${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
    );
  }
  const startDate = () => parseDate2((local.start ?? "").split("T")[0]);
  const endDate = () => parseDate2((local.end ?? "").split("T")[0]);
  const minDate = () => parseDate2(local.min ?? "");
  const maxDate = () => parseDate2(local.max ?? "");
  const dual = () => local.dualMonth !== false;
  const clearable = () => local.clearable !== false;
  const initView = () => {
    const s = startDate();
    const mn = minDate();
    const base = s ?? mn ?? /* @__PURE__ */ new Date();
    return { year: base.getFullYear(), month: base.getMonth() };
  };
  const initViewRight = () => {
    const { year, month } = initView();
    const next = new Date(year, month + 1, 1);
    return { year: next.getFullYear(), month: next.getMonth() };
  };
  const [viewLeft, _setViewLeft] = createSignal12(initView());
  const [viewRight, _setViewRight] = createSignal12(initViewRight());
  const [viewModeLeft, setViewModeLeft] = createSignal12("calendar");
  const [viewModeRight, setViewModeRight] = createSignal12("calendar");
  function setViewLeft(v) {
    _setViewLeft(v);
    const r = viewRight();
    if (v.year > r.year || v.year === r.year && v.month >= r.month) {
      const next = new Date(v.year, v.month + 1, 1);
      _setViewRight({ year: next.getFullYear(), month: next.getMonth() });
    }
  }
  function setViewRight(v) {
    _setViewRight(v);
    const l = viewLeft();
    if (v.year < l.year || v.year === l.year && v.month <= l.month) {
      const prev = new Date(v.year, v.month - 1, 1);
      _setViewLeft({ year: prev.getFullYear(), month: prev.getMonth() });
    }
  }
  createEffect8(on4(open, (isOpen) => {
    if (isOpen) {
      setViewLeft(initView());
      _setViewRight(initViewRight());
      setViewModeLeft("calendar");
      setViewModeRight("calendar");
      if (local.showTime) {
        if (local.start?.includes("T")) {
          const [, t] = local.start.split("T");
          const [h, m] = t.split(":").map(Number);
          setPendingStartHour(h || 0);
          setPendingStartMinute(m || 0);
        } else {
          setPendingStartHour(0);
          setPendingStartMinute(0);
        }
        const maxMinute = Math.floor(59 / (local.minuteStep ?? 1)) * (local.minuteStep ?? 1);
        if (local.end?.includes("T")) {
          const [, t] = local.end.split("T");
          const [h, m] = t.split(":").map(Number);
          setPendingEndHour(h || 23);
          setPendingEndMinute(m || maxMinute);
        } else {
          setPendingEndHour(23);
          setPendingEndMinute(maxMinute);
        }
      }
    } else {
      setPickingEnd(false);
      setHover(null);
    }
  }, { defer: true }));
  function handleDayClick(d) {
    if (local.error && local.onErrorClear) local.onErrorClear();
    if (!pickingEnd()) {
      if (local.showTime) {
        const h = String(pendingStartHour()).padStart(2, "0");
        const m = String(pendingStartMinute()).padStart(2, "0");
        local.onValueChange?.(`${toISODate2(d)}T${h}:${m}`, "");
      } else {
        local.onValueChange?.(toISODate2(d), "");
      }
      setPickingEnd(true);
    } else {
      const s = startDate();
      if (s && d < s) return;
      if (local.showTime) {
        const sh = String(pendingStartHour()).padStart(2, "0");
        const sm = String(pendingStartMinute()).padStart(2, "0");
        const eh = String(pendingEndHour()).padStart(2, "0");
        const em = String(pendingEndMinute()).padStart(2, "0");
        const startStr = local.start ? local.start.split("T")[0] : toISODate2(d);
        local.onValueChange?.(`${startStr}T${sh}:${sm}`, `${toISODate2(d)}T${eh}:${em}`);
        setPickingEnd(false);
      } else {
        local.onValueChange?.(local.start ?? toISODate2(d), toISODate2(d));
        setPickingEnd(false);
        setOpen(false);
      }
    }
  }
  function clearRange() {
    local.onValueChange?.("", "");
    setPickingEnd(false);
  }
  function prevLeft() {
    const { year, month } = viewLeft();
    const d = new Date(year, month - 1, 1);
    setViewLeft({ year: d.getFullYear(), month: d.getMonth() });
  }
  function nextLeft() {
    const { year, month } = viewLeft();
    const d = new Date(year, month + 1, 1);
    setViewLeft({ year: d.getFullYear(), month: d.getMonth() });
  }
  function setLeftMonth(m) {
    setViewLeft({ year: viewLeft().year, month: m });
    setViewModeLeft("calendar");
  }
  function setLeftYear(y) {
    setViewLeft({ year: y, month: viewLeft().month });
    setViewModeLeft("calendar");
  }
  function prevRight() {
    const { year, month } = viewRight();
    const d = new Date(year, month - 1, 1);
    setViewRight({ year: d.getFullYear(), month: d.getMonth() });
  }
  function nextRight() {
    const { year, month } = viewRight();
    const d = new Date(year, month + 1, 1);
    setViewRight({ year: d.getFullYear(), month: d.getMonth() });
  }
  function setRightMonth(m) {
    setViewRight({ year: viewRight().year, month: m });
    setViewModeRight("calendar");
  }
  function setRightYear(y) {
    setViewRight({ year: y, month: viewRight().month });
    setViewModeRight("calendar");
  }
  function prevMonth() {
    const { year, month } = viewLeft();
    const d = new Date(year, month - 1, 1);
    _setViewLeft({ year: d.getFullYear(), month: d.getMonth() });
  }
  function nextMonth() {
    const { year, month } = viewLeft();
    const d = new Date(year, month + 1, 1);
    _setViewLeft({ year: d.getFullYear(), month: d.getMonth() });
  }
  const isMonthDisabledFor = (viewYear, m) => {
    const mn = minDate();
    const mx = maxDate();
    if (mn && new Date(viewYear, m + 1, 0).getTime() < mn.getTime()) return true;
    if (mx && new Date(viewYear, m, 1).getTime() > mx.getTime()) return true;
    return false;
  };
  const yearsListFor = (viewYear) => {
    const minY = minDate()?.getFullYear() ?? viewYear - 20;
    const maxY = maxDate()?.getFullYear() ?? viewYear + 5;
    return Array.from({ length: maxY - minY + 1 }, (_, i) => minY + i);
  };
  const navBtnClass = "flex h-7 w-7 items-center justify-center rounded-md text-ink-500 hover:bg-surface-overlay transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50";
  const monthYearBtnClass = "rounded-md px-2 py-1 text-sm font-semibold text-ink-900 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50";
  const formatOne = (raw) => {
    if (!raw) return "";
    if (local.showTime && raw.includes("T")) {
      const [datePart, timePart] = raw.split("T");
      const d = parseDate2(datePart);
      if (!d) return "";
      const [h, m] = timePart.split(":").map(Number);
      const dateStr = d.toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric" });
      if (local.timeFormat === "24h") {
        return `${dateStr} ${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
      }
      const hour12 = h % 12 || 12;
      const ampm = h < 12 ? "AM" : "PM";
      return `${dateStr} ${hour12}:${String(m).padStart(2, "0")} ${ampm}`;
    }
    return formatDisplay2(raw.split("T")[0]);
  };
  const displayValue = () => {
    const s = formatOne(local.start ?? "");
    const e = formatOne(local.end ?? "");
    if (s && e) return `${s} \u2013 ${e}`;
    if (s) return `${s} \u2013 \u2026`;
    return "";
  };
  const TimeRow = (p) => <div class="mt-2 pt-2 border-t border-surface-border flex items-center justify-between">

			<span class="text-xs text-ink-500">{p.label}</span>

			<div class="flex items-center gap-2">

				<Show16 when={is12h()} fallback={<TimeSelect value={p.hour()} options={Array.from({ length: 24 }, (_, i) => i)} onChange={p.onHour24} />}>

					<TimeSelect value={p.hour12()} options={Array.from({ length: 12 }, (_, i) => i + 1)} onChange={p.onHour12} />

				</Show16>

				<span class="text-xs font-medium text-ink-400">:</span>

				<TimeSelect value={p.minute()} options={Array.from({ length: Math.ceil(60 / (local.minuteStep ?? 1)) }, (_, i) => i * (local.minuteStep ?? 1))} onChange={p.onMinute} />

				<Show16 when={is12h()}>

					<button type="button" onClick={p.onToggleAmPm} class="rounded-md border border-surface-border bg-surface-raised px-2 py-1 text-xs font-medium text-ink-700 hover:bg-surface-overlay transition-colors min-w-[2.5rem] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50">{p.ampm()}</button>

				</Show16>

			</div>

		</div>;
  const hasError = () => !!local.error;
  const msgId = () => local.error || local.helperText ? `${inputId()}-msg` : void 0;
  const ColumnPicker = (colProps) => <>

			<Show16 when={colProps.viewMode === "months"}>

				<div class="grid grid-cols-3 gap-1">

					<For8 each={MONTH_NAMES2}>

						{(name, mi) => <button
    type="button"
    onClick={() => colProps.onSelectMonth(mi())}
    disabled={isMonthDisabledFor(colProps.viewYear, mi())}
    class={cn(
      "rounded-lg py-2 text-xs font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50",
      isMonthDisabledFor(colProps.viewYear, mi()) ? "opacity-30" : mi() === colProps.viewMonth ? "bg-primary-500 text-white" : "text-ink-700 hover:bg-surface-overlay"
    )}
  >

								{zh() ? ZH_MONTH_NAMES2[mi()] : name.slice(0, 3)}

							</button>}

					</For8>

				</div>

			</Show16>

			<Show16 when={colProps.viewMode === "years"}>

				<div class="grid max-h-48 grid-cols-3 gap-1 overflow-y-auto">

					<For8 each={yearsListFor(colProps.viewYear)}>

						{(y) => <button
    type="button"
    onClick={() => colProps.onSelectYear(y)}
    class={cn(
      "rounded-lg py-2 text-xs font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50",
      y === colProps.viewYear ? "bg-primary-500 text-white" : "text-ink-700 hover:bg-surface-overlay"
    )}
  >

								{y}

							</button>}

					</For8>

				</div>

			</Show16>

		</>;
  return <div class={cn("w-full", local.class)}>

			<Show16 when={!local.bare && local.label}>

				<div class="mb-2 flex items-center justify-between">

					<label
    for={inputId()}
    class={cn(
      "block text-sm font-medium",
      hasError() ? "text-danger-600 dark:text-danger-400" : "text-ink-700"
    )}
  >

						{local.label}

						{local.required && <span class="text-danger-500 ml-0.5" aria-hidden="true">*</span>}

					</label>

					<Show16 when={!local.required && local.optional}>

						<span class="text-xs text-ink-400">{zh() ? "\u9009\u586B" : "optional"}</span>

					</Show16>

				</div>

			</Show16>



			<KobaltePopover2
    open={open()}
    onOpenChange={(next) => {
      setOpen(next);
    }}
    gutter={8}
  >

				<div class="relative">

					<KobaltePopover2.Trigger
    as="button"
    type="button"
    id={inputId()}
    disabled={local.disabled}
    aria-describedby={msgId()}
    aria-invalid={hasError() ? "true" : void 0}
    class={cn(
      "inline-flex w-full items-center gap-2 rounded-lg border transition-colors",
      sc().h,
      sc().py,
      sc().pl,
      sc().text,
      sc().pr,
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500",
      hasError() ? "border-danger-500 bg-surface-raised text-ink-900 hover:border-danger-600" : "border-surface-border bg-surface-raised text-ink-900 hover:border-ink-400",
      local.disabled && "opacity-50",
      clearable() && (local.start || local.end) && !local.disabled && "pr-8"
    )}
  >

						{icons.calendar({ class: "h-4 w-4 shrink-0 text-ink-400", "aria-hidden": "true" })}

						<span class={cn("truncate", displayValue() ? "text-ink-900" : "text-ink-400")}>

							{displayValue() || (local.placeholder ?? (zh() ? "\u9009\u62E9\u65E5\u671F\u8303\u56F4" : "Pick a date range"))}

						</span>

					</KobaltePopover2.Trigger>

					<Show16 when={clearable() && (local.start || local.end) && !local.disabled}>

						<button
    type="button"
    onClick={(e) => {
      e.stopPropagation();
      clearRange();
    }}
    class="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-ink-400 hover:text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
    aria-label={zh() ? "\u6E05\u9664\u65E5\u671F\u8303\u56F4" : "Clear date range"}
  >

							{icons.close({ class: "h-3.5 w-3.5", "aria-hidden": "true" })}

						</button>

					</Show16>

				</div>



				<KobaltePopover2.Portal>

					<KobaltePopover2.Content
    data-kb-top-layer=""
    class={cn(
      "z-[80] rounded-xl border border-surface-border bg-surface-raised shadow-xl",
      "origin-top data-[expanded]:animate-in data-[expanded]:fade-in-0 data-[expanded]:zoom-in-95",
      "data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95"
    )}
  >

						<div class={cn("p-3", dual() ? "w-[596px]" : "w-[268px]")}>



							{
    /* ── Dual-month layout ──────────────────────────────── */
  }

							<Show16 when={dual()}>

								<div class="flex gap-4">

									{
    /* Left column */
  }

									<div class="flex-1 min-w-0">

										{
    /* Left header */
  }

										<div class="flex items-center justify-between mb-2">

											<button type="button" onClick={prevLeft} class={navBtnClass} aria-label={zh() ? "\u4E0A\u4E2A\u6708" : "Previous month"}>

												{icons.chevronLeft({ class: "h-4 w-4", "aria-hidden": "true" })}

											</button>

											<div class="flex items-center justify-center gap-0.5">

												<button type="button" onClick={() => setViewModeLeft(viewModeLeft() === "months" ? "calendar" : "months")} class={monthYearBtnClass}>

													{zh() ? ZH_MONTH_NAMES2[viewLeft().month] : MONTH_NAMES2[viewLeft().month]}

												</button>

												<button type="button" onClick={() => setViewModeLeft(viewModeLeft() === "years" ? "calendar" : "years")} class={monthYearBtnClass}>

													{viewLeft().year}

												</button>

											</div>

											<button type="button" onClick={nextLeft} class={navBtnClass} aria-label={zh() ? "\u4E0B\u4E2A\u6708" : "Next month"}>

												{icons.chevronRight({ class: "h-4 w-4", "aria-hidden": "true" })}

											</button>

										</div>

										{
    /* Left content */
  }

										<Show16 when={viewModeLeft() === "calendar"} fallback={<ColumnPicker
    viewYear={viewLeft().year}
    viewMonth={viewLeft().month}
    viewMode={viewModeLeft()}
    onSelectMonth={setLeftMonth}
    onSelectYear={setLeftYear}
  />}>

											<MonthGrid
    year={viewLeft().year}
    month={viewLeft().month}
    start={startDate()}
    end={endDate()}
    hover={hover()}
    min={minDate()}
    max={maxDate()}
    selectableFrom={pickingEnd() ? startDate() : null}
    onDayClick={handleDayClick}
    onDayHover={setHover}
  />

										</Show16>

										<Show16 when={local.showTime}>

											<TimeRow label={zh() ? "\u5F00\u59CB" : "Start"} hour={pendingStartHour} hour12={displayStartHour12} ampm={displayStartAmPm} minute={pendingStartMinute} onHour24={(h) => handleStartTimeChange(h, pendingStartMinute())} onHour12={handleStartHour12Change} onMinute={(m) => handleStartTimeChange(pendingStartHour(), m)} onToggleAmPm={toggleStartAmPm} />

										</Show16>

									</div>



									{
    /* Divider */
  }

									<div class="w-px bg-surface-border self-stretch" />



									{
    /* Right column */
  }

									<div class="flex-1 min-w-0">

										{
    /* Right header */
  }

										<div class="flex items-center justify-between mb-2">

											<button type="button" onClick={prevRight} class={navBtnClass} aria-label={zh() ? "\u4E0A\u4E2A\u6708" : "Previous month"}>

												{icons.chevronLeft({ class: "h-4 w-4", "aria-hidden": "true" })}

											</button>

											<div class="flex items-center justify-center gap-0.5">

												<button type="button" onClick={() => setViewModeRight(viewModeRight() === "months" ? "calendar" : "months")} class={monthYearBtnClass}>

													{zh() ? ZH_MONTH_NAMES2[viewRight().month] : MONTH_NAMES2[viewRight().month]}

												</button>

												<button type="button" onClick={() => setViewModeRight(viewModeRight() === "years" ? "calendar" : "years")} class={monthYearBtnClass}>

													{viewRight().year}

												</button>

											</div>

											<button type="button" onClick={nextRight} class={navBtnClass} aria-label={zh() ? "\u4E0B\u4E2A\u6708" : "Next month"}>

												{icons.chevronRight({ class: "h-4 w-4", "aria-hidden": "true" })}

											</button>

										</div>

										{
    /* Right content */
  }

										<Show16 when={viewModeRight() === "calendar"} fallback={<ColumnPicker
    viewYear={viewRight().year}
    viewMonth={viewRight().month}
    viewMode={viewModeRight()}
    onSelectMonth={setRightMonth}
    onSelectYear={setRightYear}
  />}>

											<MonthGrid
    year={viewRight().year}
    month={viewRight().month}
    start={startDate()}
    end={endDate()}
    hover={hover()}
    min={minDate()}
    max={maxDate()}
    selectableFrom={pickingEnd() ? startDate() : null}
    onDayClick={handleDayClick}
    onDayHover={setHover}
  />

										</Show16>

										<Show16 when={local.showTime}>

											<TimeRow label={zh() ? "\u7ED3\u675F" : "End"} hour={pendingEndHour} hour12={displayEndHour12} ampm={displayEndAmPm} minute={pendingEndMinute} onHour24={(h) => handleEndTimeChange(h, pendingEndMinute())} onHour12={handleEndHour12Change} onMinute={(m) => handleEndTimeChange(pendingEndHour(), m)} onToggleAmPm={toggleEndAmPm} />

										</Show16>

									</div>

								</div>

							</Show16>



							{
    /* ── Single-month layout ─────────────────────────────── */
  }

							<Show16 when={!dual()}>

								{
    /* Single header */
  }

								<div class="flex items-center justify-between mb-2">

									<Show16 when={viewModeLeft() !== "calendar"} fallback={<button type="button" onClick={prevMonth} class={navBtnClass} aria-label={zh() ? "\u4E0A\u4E2A\u6708" : "Previous month"}>

											{icons.chevronLeft({ class: "h-4 w-4", "aria-hidden": "true" })}

										</button>}>

										<button type="button" onClick={() => setViewModeLeft("calendar")} class={navBtnClass} aria-label={zh() ? "\u8FD4\u56DE\u65E5\u5386" : "Back to calendar"}>

											{icons.chevronLeft({ class: "h-4 w-4", "aria-hidden": "true" })}

										</button>

									</Show16>

									<div class="flex items-center justify-center gap-0.5">

										<button type="button" onClick={() => setViewModeLeft(viewModeLeft() === "months" ? "calendar" : "months")} class={monthYearBtnClass}>

											{zh() ? ZH_MONTH_NAMES2[viewLeft().month] : MONTH_NAMES2[viewLeft().month]}

										</button>

										<button type="button" onClick={() => setViewModeLeft(viewModeLeft() === "years" ? "calendar" : "years")} class={monthYearBtnClass}>

											{viewLeft().year}

										</button>

									</div>

									<Show16 when={viewModeLeft() === "calendar"} fallback={<div class="w-7" />}>

										<button type="button" onClick={nextMonth} class={navBtnClass} aria-label={zh() ? "\u4E0B\u4E2A\u6708" : "Next month"}>

											{icons.chevronRight({ class: "h-4 w-4", "aria-hidden": "true" })}

										</button>

									</Show16>

								</div>

								{
    /* Single content */
  }

								<Show16 when={viewModeLeft() === "calendar"} fallback={<ColumnPicker
    viewYear={viewLeft().year}
    viewMonth={viewLeft().month}
    viewMode={viewModeLeft()}
    onSelectMonth={(m) => {
      _setViewLeft({ year: viewLeft().year, month: m });
      setViewModeLeft("calendar");
    }}
    onSelectYear={(y) => {
      _setViewLeft({ year: y, month: viewLeft().month });
      setViewModeLeft("calendar");
    }}
  />}>

									<MonthGrid
    year={viewLeft().year}
    month={viewLeft().month}
    start={startDate()}
    end={endDate()}
    hover={hover()}
    min={minDate()}
    max={maxDate()}
    selectableFrom={pickingEnd() ? startDate() : null}
    onDayClick={handleDayClick}
    onDayHover={setHover}
  />

								</Show16>

								<Show16 when={local.showTime}>

									<TimeRow label={zh() ? "\u5F00\u59CB" : "Start"} hour={pendingStartHour} hour12={displayStartHour12} ampm={displayStartAmPm} minute={pendingStartMinute} onHour24={(h) => handleStartTimeChange(h, pendingStartMinute())} onHour12={handleStartHour12Change} onMinute={(m) => handleStartTimeChange(pendingStartHour(), m)} onToggleAmPm={toggleStartAmPm} />

									<TimeRow label={zh() ? "\u7ED3\u675F" : "End"} hour={pendingEndHour} hour12={displayEndHour12} ampm={displayEndAmPm} minute={pendingEndMinute} onHour24={(h) => handleEndTimeChange(h, pendingEndMinute())} onHour12={handleEndHour12Change} onMinute={(m) => handleEndTimeChange(pendingEndHour(), m)} onToggleAmPm={toggleEndAmPm} />

								</Show16>

							</Show16>



							{
    /* Footer */
  }

							<div class="mt-3 space-y-2 border-t border-surface-border pt-3">

								<div class="flex items-center justify-between">

									<div class="text-xs text-ink-400">

										{pickingEnd() ? zh() ? "\u73B0\u5728\u9009\u62E9\u7ED3\u675F\u65E5\u671F" : "Now select an end date" : local.start && local.end ? displayValue() : zh() ? "\u9009\u62E9\u5F00\u59CB\u65E5\u671F" : "Select a start date"}

									</div>

									<div class="flex gap-2">

										<Show16 when={clearable() && (local.start || local.end)}>

											<button
    type="button"
    onClick={clearRange}
    class="rounded-md px-2 py-1 text-xs text-ink-500 hover:bg-surface-overlay hover:text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
  >

												{zh() ? "\u6E05\u9664" : "Clear"}

											</button>

										</Show16>

										<button
    type="button"
    onClick={() => setOpen(false)}
    class="rounded-md px-2 py-1 text-xs font-medium text-primary-600 hover:bg-primary-50 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
  >

											{zh() ? "\u5B8C\u6210" : "Done"}

										</button>

									</div>

								</div>

							</div>

						</div>

					</KobaltePopover2.Content>

				</KobaltePopover2.Portal>

			</KobaltePopover2>



			<Show16 when={local.error || local.helperText}>

				<p
    id={msgId()}
    class={cn(
      "mt-1.5 text-xs",
      hasError() ? "text-danger-600 dark:text-danger-400" : "text-ink-500"
    )}
  >

					{local.error ?? local.helperText}

				</p>

			</Show16>

		</div>;
}

// src/components/forms/TimePicker.tsx
import { createSignal as createSignal13, Show as Show17, splitProps as splitProps23, createUniqueId as createUniqueId8 } from "solid-js";
import { Popover as KobaltePopover3 } from "@kobalte/core/popover";
function TimePicker(props) {
  const [local] = splitProps23(props, [
    "value",
    "onValueChange",
    "onErrorClear",
    "placeholder",
    "disabled",
    "label",
    "error",
    "helperText",
    "bare",
    "required",
    "optional",
    "size",
    "class",
    "id",
    "timeFormat",
    "minuteStep"
  ]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const contextSize = useComponentSize();
  const sc = () => inputSizeConfig[local.size ?? contextSize ?? "md"];
  const generatedId = createUniqueId8();
  const inputId = () => local.id || `timepicker-${generatedId}`;
  const [open, setOpen] = createSignal13(false);
  const is12h = () => local.timeFormat !== "24h";
  const step = () => local.minuteStep ?? 1;
  const maxMinute = () => Math.floor(59 / step()) * step();
  const parseValue = () => {
    if (!local.value) return null;
    const [h, m] = local.value.split(":").map(Number);
    if (isNaN(h) || isNaN(m)) return null;
    return { h, m };
  };
  const [pendingHour, setPendingHour] = createSignal13(0);
  const [pendingMinute, setPendingMinute] = createSignal13(0);
  const displayHour12 = () => {
    const h = pendingHour();
    return h === 0 ? 12 : h > 12 ? h - 12 : h;
  };
  const displayAmPm = () => pendingHour() < 12 ? "AM" : "PM";
  function toggleAmPm() {
    const h = pendingHour();
    const next = h < 12 ? h + 12 : h - 12;
    commit(next, pendingMinute());
  }
  function handleHour12Change(h12) {
    const isAm = pendingHour() < 12;
    const next24 = isAm ? h12 === 12 ? 0 : h12 : h12 === 12 ? 12 : h12 + 12;
    commit(next24, pendingMinute());
  }
  function commit(h, m) {
    setPendingHour(h);
    setPendingMinute(m);
    if (local.error && local.onErrorClear) local.onErrorClear();
    local.onValueChange?.(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
  }
  function clearValue() {
    if (local.error && local.onErrorClear) local.onErrorClear();
    local.onValueChange?.("");
  }
  const displayValue = () => {
    const parsed = parseValue();
    if (!parsed) return "";
    const { h, m } = parsed;
    const mm = String(m).padStart(2, "0");
    if (local.timeFormat === "24h") return `${String(h).padStart(2, "0")}:${mm}`;
    const hour12 = h % 12 || 12;
    const ampm = h < 12 ? "AM" : "PM";
    return `${hour12}:${mm} ${ampm}`;
  };
  function onOpenChange(next) {
    if (next) {
      const parsed = parseValue();
      if (parsed) {
        setPendingHour(parsed.h);
        setPendingMinute(parsed.m);
      } else {
        setPendingHour(0);
        setPendingMinute(0);
      }
    }
    setOpen(next);
  }
  const hasError = () => !!local.error;
  const msgId = () => local.error || local.helperText ? `${inputId()}-msg` : void 0;
  const ampmClass = "rounded-md border border-surface-border bg-surface-raised px-2 py-1 text-xs font-medium text-ink-700 hover:bg-surface-overlay transition-colors min-w-[2.5rem] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50";
  return <div class={cn("w-full", local.class)}>

			<Show17 when={!local.bare && local.label}>

				<div class="mb-2 flex items-center justify-between">

					<label
    for={inputId()}
    class={cn(
      "block text-sm font-medium",
      hasError() ? "text-danger-600 dark:text-danger-400" : "text-ink-700"
    )}
  >

						{local.label}

						{local.required && <span class="text-danger-500 ml-0.5" aria-hidden="true">*</span>}

					</label>

					<Show17 when={!local.required && local.optional}>

						<span class="text-xs text-ink-400">{zh() ? "\u9009\u586B" : "optional"}</span>

					</Show17>

				</div>

			</Show17>



			<KobaltePopover3
    open={open()}
    onOpenChange={onOpenChange}
    gutter={8}
  >

				<div class="relative">

					<KobaltePopover3.Trigger
    as="button"
    type="button"
    id={inputId()}
    disabled={local.disabled}
    aria-describedby={msgId()}
    aria-invalid={hasError() ? "true" : void 0}
    class={cn(
      "inline-flex w-full items-center gap-2 rounded-lg border transition-colors",
      sc().h,
      sc().py,
      sc().pl,
      sc().text,
      displayValue() && !local.disabled ? "pr-8" : sc().pr,
      hasError() ? "border-danger-500 bg-surface-raised text-ink-900 hover:border-danger-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-danger-500 focus-visible:border-transparent" : "border-surface-border bg-surface-raised text-ink-900 hover:border-ink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 focus-visible:border-transparent",
      local.disabled && "opacity-50"
    )}
  >

						{icons.clock({ class: "h-4 w-4 shrink-0 text-ink-400", "aria-hidden": "true" })}

						<span class={cn("truncate", displayValue() ? "text-ink-900" : "text-ink-400")}>

							{displayValue() || (local.placeholder ?? (zh() ? "\u9009\u62E9\u65F6\u95F4" : "Select time"))}

						</span>

					</KobaltePopover3.Trigger>

					<Show17 when={displayValue() && !local.disabled}>

						<button
    type="button"
    onClick={(e) => {
      e.stopPropagation();
      clearValue();
    }}
    class="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-ink-400 hover:text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
    aria-label={zh() ? "\u6E05\u9664\u65F6\u95F4" : "Clear time"}
  >

							{icons.close({ class: "h-3.5 w-3.5", "aria-hidden": "true" })}

						</button>

					</Show17>

				</div>



				<KobaltePopover3.Portal>

					<KobaltePopover3.Content
    data-kb-top-layer=""
    role="dialog"
    aria-label={zh() ? "\u9009\u62E9\u65F6\u95F4" : "Choose time"}
    class={cn(
      "z-[80] rounded-xl border border-surface-border bg-surface-raised shadow-xl outline-none",
      "origin-top data-[expanded]:animate-in data-[expanded]:fade-in-0 data-[expanded]:zoom-in-95",
      "data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95"
    )}
  >

						<div class="w-[220px] p-4">

							{
    /* Time selectors */
  }

							<div class="flex items-center justify-center gap-2">

								{
    /* Hour */
  }

								<Show17 when={is12h()} fallback={<TimeSelect value={pendingHour()} options={Array.from({ length: 24 }, (_, i) => i)} onChange={(v) => commit(v, pendingMinute())} />}>

									<TimeSelect value={displayHour12()} options={Array.from({ length: 12 }, (_, i) => i + 1)} onChange={handleHour12Change} />

								</Show17>



								<span class="text-sm font-semibold text-ink-400">:</span>



								{
    /* Minute */
  }

								<TimeSelect value={pendingMinute()} options={Array.from({ length: Math.ceil(60 / step()) }, (_, i) => i * step())} onChange={(v) => commit(pendingHour(), v)} />



								{
    /* AM/PM */
  }

								<Show17 when={is12h()}>

									<button type="button" onClick={toggleAmPm} class={ampmClass}>

										{displayAmPm()}

									</button>

								</Show17>

							</div>



							{
    /* Footer */
  }

							<div class="mt-3 flex items-center justify-between border-t border-surface-border pt-3">

								<div class="text-xs text-ink-400">{displayValue() || (zh() ? "\u672A\u9009\u62E9\u65F6\u95F4" : "No time selected")}</div>

								<div class="flex gap-2">

									<Show17 when={displayValue()}>

										<button
    type="button"
    onClick={() => {
      clearValue();
      setOpen(false);
    }}
    class="rounded-md px-2 py-1 text-xs text-ink-500 hover:bg-surface-overlay hover:text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
  >

											{zh() ? "\u6E05\u9664" : "Clear"}

										</button>

									</Show17>

									<button
    type="button"
    onClick={() => setOpen(false)}
    class="rounded-md px-2 py-1 text-xs font-medium text-primary-600 hover:bg-primary-50 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
  >

										{zh() ? "\u5B8C\u6210" : "Done"}

									</button>

								</div>

							</div>

						</div>

					</KobaltePopover3.Content>

				</KobaltePopover3.Portal>

			</KobaltePopover3>



			<Show17 when={local.error || local.helperText}>

				<p
    id={msgId()}
    class={cn("mt-1.5 text-xs", hasError() ? "text-danger-600 dark:text-danger-400" : "text-ink-500")}
  >

					{local.error ?? local.helperText}

				</p>

			</Show17>

		</div>;
}

// src/components/forms/ColorPicker/ColorPicker.tsx
import { createSignal as createSignal14, createMemo as createMemo10, Show as Show18, For as For9, splitProps as splitProps24, createEffect as createEffect9, on as on5, createUniqueId as createUniqueId9 } from "solid-js";
import { Popover as KobaltePopover4 } from "@kobalte/core/popover";
import { ColorArea as KobalteColorArea } from "@kobalte/core/color-area";
import { ColorSlider as KobalteColorSlider } from "@kobalte/core/color-slider";
import { ColorChannelField as KobalteColorChannelField } from "@kobalte/core/color-channel-field";
import { parseColor as KobalteParseColor } from "@kobalte/core/colors";

// src/utilities/colorUtils.ts
function normalizeHex(value) {
  const v = value.trim().replace(/^(#|0x)/, "");
  if (/^[0-9a-fA-F]{6}$/.test(v)) return "#" + v.toLowerCase();
  if (/^[0-9a-fA-F]{8}$/.test(v)) return "#" + v.toLowerCase();
  if (/^[0-9a-fA-F]{3}$/.test(v)) {
    const r = v[0] + v[0];
    const g = v[1] + v[1];
    const b = v[2] + v[2];
    return ("#" + r + g + b).toLowerCase();
  }
  return "";
}
function rgbaToHex(r, g, b, a) {
  const toHex = (n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0");
  const rr = toHex(r);
  const gg = toHex(g);
  const bb = toHex(b);
  if (a >= 1) return "#" + rr + gg + bb;
  return "#" + rr + gg + bb + toHex(a * 255);
}

// src/components/forms/ColorPicker/ColorPicker.tsx
var DEFAULT_PRESETS = [
  "#000000",
  "#374151",
  "#6b7280",
  "#9ca3af",
  "#d1d5db",
  "#ffffff",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899"
];
function colorToHex(c) {
  const rgb = c.toFormat("rgb");
  const r = Math.round(rgb.getChannelValue("red"));
  const g = Math.round(rgb.getChannelValue("green"));
  const b = Math.round(rgb.getChannelValue("blue"));
  return rgbaToHex(r, g, b, 1);
}
function safeParseColor(hex) {
  const normalized = normalizeHex(hex);
  if (!normalized) return KobalteParseColor("#000000");
  try {
    return KobalteParseColor(normalized);
  } catch {
    return KobalteParseColor("#000000");
  }
}
function ColorPicker(props) {
  const [local, rest] = splitProps24(props, [
    "value",
    "onValueChange",
    "presets",
    "label",
    "error",
    "helperText",
    "bare",
    "required",
    "optional",
    "onErrorClear",
    "size",
    "disabled",
    "class",
    "lastUsedCount",
    "allowedFormats",
    "predefined"
  ]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const triggerId = createUniqueId9();
  const hasError = () => !!local.error;
  const presets = () => local.presets ?? [...DEFAULT_PRESETS];
  const lastUsedMax = () => local.lastUsedCount ?? 9;
  const [customOpen, setCustomOpen] = createSignal14(false);
  const [lastUsed, setLastUsed] = createSignal14([]);
  const currentHex = () => {
    const v = local.value?.trim();
    if (!v) return "";
    return normalizeHex(v);
  };
  const addToLastUsed = (hex) => {
    const n = normalizeHex(hex);
    if (!n) return;
    setLastUsed((prev) => {
      const next = [n, ...prev.filter((c) => c !== n)].slice(0, lastUsedMax());
      return next;
    });
  };
  const handlePresetClick = (hex) => {
    const n = normalizeHex(hex);
    if (n) {
      if (local.error && local.onErrorClear) local.onErrorClear();
      local.onValueChange?.(n);
      addToLastUsed(n);
    }
  };
  const handleCustomApply = (hex) => {
    const n = normalizeHex(hex);
    if (!n) return;
    if (local.error && local.onErrorClear) local.onErrorClear();
    local.onValueChange?.(n);
    addToLastUsed(n);
    setCustomOpen(false);
  };
  const presetSet = createMemo10(() => new Set(presets().map(normalizeHex).filter(Boolean)));
  const isPreset = (hex) => presetSet().has(normalizeHex(hex));
  return <div class={cn("w-full", local.class)} {...rest}>

			<Show18 when={!local.bare && local.label}>

				<div class="flex items-center justify-between gap-2 mb-1.5">

					<label for={triggerId} class={cn("block text-sm font-medium", hasError() ? "text-danger-600" : "text-ink-700")}>

						{local.label}

						<Show18 when={local.required}>

							<span class="text-danger-500 ml-0.5" aria-hidden="true">*</span>

						</Show18>

					</label>

					<Show18 when={!local.required && local.optional}>

						<span class="text-xs text-ink-500">{zh() ? "\u9009\u586B" : "optional"}</span>

					</Show18>

				</div>

			</Show18>



			<div class="flex flex-wrap items-center gap-2">

				{
    /* Current color swatch + trigger for custom */
  }

				<KobaltePopover4 open={customOpen()} onOpenChange={setCustomOpen}>

					<KobaltePopover4.Trigger
    as="button"
    type="button"
    id={triggerId}
    disabled={local.disabled}
    class={cn(
      "h-10 w-10 shrink-0 rounded-lg border-2 shadow-sm transition outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 disabled:opacity-50 disabled:cursor-pointer",
      hasError() ? "border-danger-500 hover:border-danger-600" : "border-surface-border hover:border-ink-300"
    )}
    style={{ "background-color": currentHex() || "transparent" }}
    title={zh() ? "\u9009\u62E9\u989C\u8272" : "Choose color"}
    aria-label={zh() ? "\u9009\u62E9\u989C\u8272" : "Choose color"}
  />

					<KobaltePopover4.Portal>

						<KobaltePopover4.Content
    class="z-[200] outline-none"
  >

							<ColorPickerCustomPanel
    value={currentHex()}
    isOpen={customOpen()}
    onApply={handleCustomApply}
    onCancel={() => setCustomOpen(false)}
    lastUsed={lastUsed()}
    onLastUsedClick={(hex) => {
      handleCustomApply(hex);
    }}
    allowedFormats={local.allowedFormats ?? ["hex"]}
    predefined={local.predefined}
  />

						</KobaltePopover4.Content>

					</KobaltePopover4.Portal>

				</KobaltePopover4>



				<Show18 when={(local.size ?? "md") !== "sm"}>

					{
    /* Preset swatches */
  }

					<div class="flex flex-wrap gap-1.5">

						<For9 each={presets()}>

							{(hex) => <button
    type="button"
    class={cn(
      "h-8 w-8 shrink-0 rounded-full border-2 shadow-sm transition hover:scale-105 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
      normalizeHex(hex) === currentHex() ? "border-primary-500 ring-2 ring-primary-200" : "border-surface-border hover:border-ink-300"
    )}
    style={{ "background-color": hex }}
    title={hex}
    aria-label={zh() ? `\u5C06\u989C\u8272\u8BBE\u7F6E\u4E3A ${hex}` : `Set color to ${hex}`}
    onClick={() => handlePresetClick(hex)}
    disabled={local.disabled}
  />}

						</For9>

						{
    /* Custom button */
  }

						<button
    type="button"
    class={cn(
      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-surface-border bg-surface-base text-ink-500 transition hover:border-primary-400 hover:bg-primary-50 hover:text-primary-600 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
      !isPreset(currentHex()) && currentHex() ? "border-primary-400 bg-primary-50 text-primary-600" : ""
    )}
    title={zh() ? "\u81EA\u5B9A\u4E49\u989C\u8272" : "Custom color"}
    aria-label={zh() ? "\u81EA\u5B9A\u4E49\u989C\u8272" : "Custom color"}
    onClick={() => setCustomOpen(true)}
    disabled={local.disabled}
  >

							{icons.pipette({ class: "h-4 w-4", "aria-hidden": "true" })}

						</button>

					</div>

				</Show18>

			</div>



			<Show18 when={!local.bare && local.helperText && !hasError()}>

				<p class="mt-2 text-sm text-ink-500">{local.helperText}</p>

			</Show18>

			<Show18 when={!local.bare && hasError()}>

				<p class="mt-2 text-sm text-danger-600">{local.error}</p>

			</Show18>

		</div>;
}
function isValidHex(v) {
  const hex = v.trim().replace(/^#/, "");
  return /^[0-9a-fA-F]{3}$/.test(hex) || /^[0-9a-fA-F]{6}$/.test(hex) || /^[0-9a-fA-F]{8}$/.test(hex);
}
function ColorPickerCustomPanel(props) {
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const formats = () => props.allowedFormats;
  const defaultFormat = () => formats().includes("hex") ? "hex" : formats()[0] ?? "hex";
  const [format, setFormat] = createSignal14(defaultFormat());
  const thumbBaseClass = "absolute rounded-full border-2 border-white shadow touch-none";
  createEffect9(() => {
    if (!props.allowedFormats.includes(format())) setFormat(defaultFormat());
  });
  const initialColor = () => {
    const v = props.value;
    if (v && isValidHex(v)) return safeParseColor(normalizeHex(v));
    return KobalteParseColor("#000000");
  };
  const [color, setColor] = createSignal14(initialColor());
  const [hexText, setHexText] = createSignal14(colorToHex(initialColor()));
  createEffect9(on5(() => props.isOpen ?? false, (open, wasOpen) => {
    if (open && !wasOpen && props.value && isValidHex(props.value)) {
      const c = safeParseColor(normalizeHex(props.value));
      setColor(c);
      setHexText(colorToHex(c));
    }
  }, { defer: true }));
  const hex = () => colorToHex(color());
  createEffect9(on5(hex, setHexText));
  const formatTabs = [
    { id: "hex", label: "Hex" },
    { id: "rgb", label: "RGB" },
    { id: "hsl", label: "HSL" },
    { id: "hsb", label: "HSB" }
  ];
  const visibleFormatTabs = () => formatTabs.filter((tab) => props.allowedFormats.includes(tab.id));
  const showFormatTabs = () => visibleFormatTabs().length > 1;
  return <div class="w-[320px] overflow-hidden rounded-xl border border-surface-border bg-surface-raised p-4 shadow-xl">

			<div class="mb-3 flex items-center justify-between">

				<span class="text-sm font-semibold text-ink-900">{zh() ? "\u989C\u8272\u9009\u62E9\u5668" : "Color Picker"}</span>

				<button
    type="button"
    class="rounded p-1 text-ink-400 hover:bg-surface-overlay hover:text-ink-600"
    onClick={props.onCancel}
    aria-label={zh() ? "\u5173\u95ED" : "Close"}
  >

					{icons.close({ class: "h-4 w-4", "aria-hidden": "true" })}

				</button>

			</div>



			{
    /* 2D saturation/brightness area (HSB). Use Kobalte default gradient so brightness (dark/light) axis matches interaction. */
  }

			<div class="mb-3">

				<KobalteColorArea
    value={color()}
    onChange={setColor}
    colorSpace="hsb"
    xChannel="saturation"
    yChannel="brightness"
    class="relative block w-full"
  >

					<KobalteColorArea.Background class="relative block h-32 w-full rounded-lg border border-surface-border cursor-crosshair touch-none" />

					<KobalteColorArea.Thumb
    class={cn("pointer-events-none h-4 w-4 shadow-md [transform:translate(-50%,-50%)]", thumbBaseClass)}
  >

						<KobalteColorArea.HiddenInputX />

						<KobalteColorArea.HiddenInputY />

					</KobalteColorArea.Thumb>

				</KobalteColorArea>

			</div>



			{
    /* Hue slider */
  }

			<div class="mb-3">

				<KobalteColorSlider channel="hue" value={color()} onChange={setColor} colorSpace="hsb">

					<KobalteColorSlider.Track class="relative block h-6 w-full rounded-full border border-surface-border cursor-pointer touch-none">

						<KobalteColorSlider.Thumb
    class={cn("h-6 w-6", thumbBaseClass)}
    style={{ top: "calc(50%)", transform: "translate(-50%, -50%)" }}
  >

							<KobalteColorSlider.Input class="sr-only" />

						</KobalteColorSlider.Thumb>

					</KobalteColorSlider.Track>

				</KobalteColorSlider>

			</div>



			{
    /* Format tabs (only when more than one format allowed) */
  }

			<Show18 when={showFormatTabs()}>

				<div class="mb-3 flex gap-1 rounded-lg bg-surface-overlay p-1">

					<For9 each={visibleFormatTabs()}>

						{(tab) => <button
    type="button"
    class={cn(
      "flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition",
      format() === tab.id ? "bg-surface-raised text-ink-900 shadow-sm" : "text-ink-600 hover:text-ink-900"
    )}
    onClick={() => setFormat(tab.id)}
  >

								{tab.label}

							</button>}

					</For9>

				</div>

			</Show18>



			{
    /* Channel fields based on format */
  }

			<div class="mb-4 flex flex-wrap items-center gap-2">

				<Show18 when={format() === "hex"}>

					<div class="flex flex-1 items-center gap-2">

						{icons.pipette({ class: "h-4 w-4 shrink-0 text-ink-400", "aria-hidden": "true" })}

						<input
    type="text"
    value={hexText()}
    onInput={(e) => {
      const v = e.target.value;
      setHexText(v);
      if (isValidHex(v)) setColor(safeParseColor(v));
    }}
    aria-label={zh() ? "\u5341\u516D\u8FDB\u5236\u989C\u8272\u503C" : "Hex color value"}
    class="w-full rounded-lg border border-surface-border bg-surface-raised px-2 py-1.5 font-mono text-sm text-ink-900"
  />

					</div>

				</Show18>

				<Show18 when={format() === "hsl"}>

					<KobalteColorChannelField value={color()} onChange={setColor} channel="hue" colorSpace="hsl">

						<div class="flex items-center gap-1">

							<KobalteColorChannelField.Label class="sr-only">H</KobalteColorChannelField.Label>

							<KobalteColorChannelField.Input class="w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900" />

						</div>

					</KobalteColorChannelField>

					<KobalteColorChannelField value={color()} onChange={setColor} channel="saturation" colorSpace="hsl">

						<div class="flex items-center gap-1">

							<KobalteColorChannelField.Label class="sr-only">S</KobalteColorChannelField.Label>

							<KobalteColorChannelField.Input class="w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900" />

						</div>

					</KobalteColorChannelField>

					<KobalteColorChannelField value={color()} onChange={setColor} channel="lightness" colorSpace="hsl">

						<div class="flex items-center gap-1">

							<KobalteColorChannelField.Label class="sr-only">L</KobalteColorChannelField.Label>

							<KobalteColorChannelField.Input class="w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900" />

						</div>

					</KobalteColorChannelField>

				</Show18>

				<Show18 when={format() === "rgb"}>

					<KobalteColorChannelField value={color()} onChange={setColor} channel="red" colorSpace="rgb">

						<div class="flex items-center gap-1">

							<KobalteColorChannelField.Label class="sr-only">R</KobalteColorChannelField.Label>

							<KobalteColorChannelField.Input class="w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900" />

						</div>

					</KobalteColorChannelField>

					<KobalteColorChannelField value={color()} onChange={setColor} channel="green" colorSpace="rgb">

						<div class="flex items-center gap-1">

							<KobalteColorChannelField.Label class="sr-only">G</KobalteColorChannelField.Label>

							<KobalteColorChannelField.Input class="w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900" />

						</div>

					</KobalteColorChannelField>

					<KobalteColorChannelField value={color()} onChange={setColor} channel="blue" colorSpace="rgb">

						<div class="flex items-center gap-1">

							<KobalteColorChannelField.Label class="sr-only">B</KobalteColorChannelField.Label>

							<KobalteColorChannelField.Input class="w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900" />

						</div>

					</KobalteColorChannelField>

				</Show18>

				<Show18 when={format() === "hsb"}>

					<KobalteColorChannelField value={color()} onChange={setColor} channel="hue" colorSpace="hsb">

						<div class="flex items-center gap-1">

							<KobalteColorChannelField.Label class="sr-only">H</KobalteColorChannelField.Label>

							<KobalteColorChannelField.Input class="w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900" />

						</div>

					</KobalteColorChannelField>

					<KobalteColorChannelField value={color()} onChange={setColor} channel="saturation" colorSpace="hsb">

						<div class="flex items-center gap-1">

							<KobalteColorChannelField.Label class="sr-only">S</KobalteColorChannelField.Label>

							<KobalteColorChannelField.Input class="w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900" />

						</div>

					</KobalteColorChannelField>

					<KobalteColorChannelField value={color()} onChange={setColor} channel="brightness" colorSpace="hsb">

						<div class="flex items-center gap-1">

							<KobalteColorChannelField.Label class="sr-only">B</KobalteColorChannelField.Label>

							<KobalteColorChannelField.Input class="w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900" />

						</div>

					</KobalteColorChannelField>

				</Show18>

			</div>



			{
    /* Last used */
  }

			<Show18 when={props.lastUsed.length > 0}>

				<div class="mb-4">

					<p class="mb-1.5 text-xs font-medium text-ink-500">{zh() ? "\u6700\u8FD1\u4F7F\u7528" : "Last used"}</p>

					<div class="flex flex-wrap gap-1.5">

						<For9 each={props.lastUsed}>

							{(hex2) => <button
    type="button"
    class="h-7 w-7 shrink-0 rounded-md border border-surface-border shadow-sm transition hover:scale-105 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
    style={{ "background-color": hex2 }}
    title={hex2}
    aria-label={zh() ? `\u5C06\u989C\u8272\u8BBE\u7F6E\u4E3A ${hex2}` : `Set color to ${hex2}`}
    onClick={() => props.onLastUsedClick(hex2)}
  />}

						</For9>

					</div>

				</div>

			</Show18>



			{
    /* Predefined (e.g. theme presets) */
  }

			<Show18 when={props.predefined && props.predefined.length > 0}>

				<div class="mb-4">

					<p class="mb-1.5 text-xs font-medium text-ink-500">{zh() ? "\u9884\u8BBE" : "Presets"}</p>

					<div class="flex flex-wrap gap-1.5">

						<For9 each={props.predefined}>

							{(hex2) => <button
    type="button"
    class="h-7 w-7 shrink-0 rounded-md border border-surface-border shadow-sm transition hover:scale-105 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
    style={{ "background-color": hex2 }}
    title={hex2}
    aria-label={zh() ? `\u5C06\u989C\u8272\u8BBE\u7F6E\u4E3A ${hex2}` : `Set color to ${hex2}`}
    onClick={() => {
      const n = normalizeHex(hex2);
      if (n) props.onApply(n);
    }}
  />}

						</For9>

					</div>

				</div>

			</Show18>



			<div class="flex justify-end gap-2">

				<Button variant="outlined" size="sm" onClick={props.onCancel}>

					{zh() ? "\u53D6\u6D88" : "Cancel"}

				</Button>

				<Button variant="primary" size="sm" onClick={() => props.onApply(hex())} aria-label={zh() ? "\u5E94\u7528\u6240\u9009\u989C\u8272" : "Apply selected color"}>

					{zh() ? "\u5E94\u7528" : "Apply"}

				</Button>

			</div>

		</div>;
}

// src/components/forms/FieldPicker.tsx
import { splitProps as splitProps25 } from "solid-js";
var FieldPicker = (props) => {
  const [local] = splitProps25(props, [
    "label",
    "options",
    "value",
    "onValueChange",
    "onAdd",
    "addLabel",
    "addIcon",
    "addDisabled",
    "placeholder",
    "class"
  ]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  return <div class={cn("space-y-2", local.class)}>
			<div class="flex items-end gap-2">
				<Autocomplete
    label={local.label}
    value={local.value}
    onValueChange={local.onValueChange}
    options={local.options}
    placeholder={local.placeholder || (zh() ? "\u641C\u7D22\u5B57\u6BB5..." : "Search fields...")}
    class="flex-1 min-w-0"
  />
				<Button
    type="button"
    variant="outlined"
    size="md"
    startIcon={local.addIcon}
    class="shrink-0 h-10"
    disabled={local.addDisabled}
    onClick={local.onAdd}
  >
					{local.addLabel || (zh() ? "\u6DFB\u52A0" : "Add")}
				</Button>
			</div>
		</div>;
};

// src/components/forms/ReorderableList.tsx
import { For as For10, Show as Show19, splitProps as splitProps26, onCleanup as onCleanup8 } from "solid-js";
function ReorderableListDragOverlay(props) {
  const icons = useIcons();
  let el;
  const onMove = (e) => {
    if (!el) return;
    el.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
  };
  const cleanup = () => document.removeEventListener("pointermove", onMove);
  document.addEventListener("pointermove", onMove);
  document.addEventListener("pointerup", cleanup, { once: true });
  document.addEventListener("pointercancel", cleanup, { once: true });
  onCleanup8(cleanup);
  return <div
    ref={el}
    style={{
      position: "fixed",
      top: "0",
      left: "0",
      transform: `translate(${props.startX - 16}px, ${props.startY - 16}px)`,
      width: props.width != null ? `${props.width}px` : void 0,
      height: props.height != null ? `${props.height}px` : void 0,
      "pointer-events": "none",
      "z-index": "50",
      "will-change": "transform"
    }}
    class="flex items-center gap-2 rounded-lg border border-surface-border bg-surface-raised px-4 py-3 text-sm shadow-lg select-none text-ink-700"
  >

      {icons.dragHandle({ class: "h-4 w-4 text-ink-400", "aria-hidden": "true" })}

      <span>{props.item.label}</span>

    </div>;
}
function ReorderableList(props) {
  const [local, others] = splitProps26(props, [
    "items",
    "onReorder",
    "onRemove",
    "showMoveButtons",
    "class"
  ]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const drag = createSortableDrag({
    items: () => local.items,
    onReorder: local.onReorder
  });
  const showMoveButtons = () => local.showMoveButtons === true;
  const move = (id, direction) => {
    const ids = local.items.map((i) => i.id);
    const index = ids.indexOf(id);
    const nextIndex = direction === "up" ? index - 1 : index + 1;
    if (index === -1 || nextIndex < 0 || nextIndex >= ids.length) return;
    const next = [...ids];
    const [moved] = next.splice(index, 1);
    next.splice(nextIndex, 0, moved);
    local.onReorder(next);
  };
  let pointerX = 0;
  let pointerY = 0;
  let overlayW = 0;
  let overlayH = 0;
  return <div
    role="list"
    data-sortable-container
    class={cn("space-y-2 w-full", local.class)}
    {...others}
  >

      <For10 each={local.items}>

        {(item, index) => {
    const isActive = () => drag.activeId() === item.id;
    const transform = () => drag.getTransform(item.id);
    const canMoveUp = () => index() > 0;
    const canMoveDown = () => index() < local.items.length - 1;
    return <div
      role="listitem"
      data-sortable-id={item.id}
      style={{
        transform: transform() || void 0,
        transition: drag.isDragging() && !isActive() ? "transform 200ms ease" : void 0,
        opacity: isActive() && drag.isDragging() ? "0" : void 0,
        "pointer-events": isActive() && drag.isDragging() ? "none" : void 0
      }}
      class="flex items-center justify-between rounded-lg border border-surface-border bg-surface-raised px-4 py-3 text-sm select-none"
    >

              <div class="flex items-center gap-2 text-ink-700">

                <button
      type="button"
      class={cn(
        "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-ink-400 hover:bg-surface-overlay touch-none",
        drag.isDragging() ? "cursor-grabbing" : "cursor-grab"
      )}
      aria-label={zh() ? `\u62D6\u52A8\u6392\u5E8F ${item.label}` : `Drag to reorder ${item.label}`}
      onKeyDown={(e) => {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          move(item.id, "up");
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          move(item.id, "down");
        }
      }}
      onPointerDown={(e) => {
        pointerX = e.clientX;
        pointerY = e.clientY;
        const row = e.currentTarget.closest(
          "[data-sortable-id]"
        );
        if (row) {
          const r = row.getBoundingClientRect();
          overlayW = r.width;
          overlayH = r.height;
        }
        drag.handlePointerDown(item.id, e);
      }}
    >

                  {icons.dragHandle({ class: "h-4 w-4", "aria-hidden": "true" })}

                </button>

                <span>{item.label}</span>

              </div>

              <div class="flex shrink-0 items-center gap-1">

                <Show19 when={showMoveButtons()}>

                  <Button
      iconOnly
      variant="ghost"
      size="xs"
      icon={icons.chevronUp({ class: "h-4 w-4", "aria-hidden": "true" })}
      label={zh() ? `\u4E0A\u79FB ${item.label}` : `Move ${item.label} up`}
      disabled={!canMoveUp()}
      onClick={() => move(item.id, "up")}
    />

                  <Button
      iconOnly
      variant="ghost"
      size="xs"
      icon={icons.chevronDown({ class: "h-4 w-4", "aria-hidden": "true" })}
      label={zh() ? `\u4E0B\u79FB ${item.label}` : `Move ${item.label} down`}
      disabled={!canMoveDown()}
      onClick={() => move(item.id, "down")}
    />

                </Show19>

                <Show19 when={local.onRemove}>

                  <Button
      iconOnly
      variant="ghost"
      size="xs"
      icon={icons.close({ class: "h-4 w-4", "aria-hidden": "true" })}
      label={zh() ? `\u79FB\u9664 ${item.label}` : `Remove ${item.label}`}
      onClick={() => local.onRemove?.(item.id)}
    />

                </Show19>

              </div>

            </div>;
  }}

      </For10>



			<Show19 when={drag.activeId()}>

				{(activeId) => {
    const item = () => local.items.find((i) => i.id === activeId());
    return <Show19 when={item()}>

							{(resolved) => <ReorderableListDragOverlay
      item={resolved()}
      startX={pointerX}
      startY={pointerY}
      width={overlayW}
      height={overlayH}
    />}

						</Show19>;
  }}

			</Show19>

		</div>;
}

// src/components/forms/RelativeDateDefaultInput.tsx
import { createMemo as createMemo11 } from "solid-js";

// src/components/forms/relativeDateDefault.ts
var RELATIVE_REGEX = /^today([+-])(\d+)$/;
function parseRelativeDateDefault(stored) {
  const m = stored.trim().match(RELATIVE_REGEX);
  if (m) return { sign: m[1], days: Math.max(0, parseInt(m[2], 10)) };
  return { sign: "+", days: 0 };
}
function formatRelativeDateDefault(sign, days) {
  const d = Math.max(0, Math.floor(days));
  return `today${d === 0 ? "+" : sign}${d}`;
}

// src/components/forms/RelativeDateDefaultInput.tsx
var SIGN_OPTIONS = [
  { value: "+", label: "+" },
  { value: "-", label: "-" }
];
function RelativeDateDefaultInput(props) {
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const parsed = createMemo11(() => parseRelativeDateDefault(props.value));
  const sign = () => parsed().sign;
  const days = () => parsed().days;
  const setSign = (s) => {
    props.onValueChange(formatRelativeDateDefault(s || "+", days()));
  };
  const setDaysFromInput = (v) => {
    const n = v === "" ? 0 : Math.max(0, parseInt(v, 10) || 0);
    props.onValueChange(formatRelativeDateDefault(sign(), n));
  };
  const daysStr = () => String(days());
  return <Inline class={cn("flex-nowrap", props.class)}>
			<span class="shrink-0 text-sm font-medium text-ink-700">
				{props.prefixLabel ?? (zh() ? "\u4ECA\u5929" : "Today")}
			</span>
			<Select
    value={sign()}
    onValueChange={setSign}
    options={[...SIGN_OPTIONS]}
    class="w-36 min-w-0 rounded-lg"
  />
			<Input
    bare
    type="number"
    min={0}
    step={1}
    value={daysStr()}
    onValueChange={setDaysFromInput}
    placeholder="0"
    class="w-24 rounded-lg pr-2"
  />
			<span class="shrink-0 text-sm text-ink-500">{props.suffixLabel ?? (zh() ? "\u5929" : "day(s)")}</span>
		</Inline>;
}

// src/components/actions/DarkModeToggle.tsx
function DarkModeToggle(props) {
  const [scheme, setScheme] = createSignal15("light");
  const icons = useIcons();
  const dark = () => scheme() === "dark";
  const key = () => props.storageKey ?? "torch-theme";
  const el = () => props.target?.() ?? document.documentElement;
  let clearSuppressTimeout;
  onCleanup9(() => {
    if (clearSuppressTimeout !== void 0) {
      window.clearTimeout(clearSuppressTimeout);
      document.body.removeAttribute("data-switching-theme");
    }
  });
  createEffect10(() => {
    if (props.value !== void 0) {
      setScheme(props.value);
      const target = props.target?.() ?? document.documentElement;
      if (target) target.classList.toggle("dark", props.value === "dark");
    }
  });
  onMount7(() => {
    if (props.value !== void 0) {
      setScheme(props.value);
      el().classList.toggle("dark", props.value === "dark");
      return;
    }
    const k = key();
    const stored = k !== false ? localStorage.getItem(k) : null;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const initial = stored ? stored === "dark" ? "dark" : "light" : mq.matches ? "dark" : "light";
    setScheme(initial);
    el().classList.toggle("dark", initial === "dark");
    const handleChange = (e) => {
      const currentStored = key() !== false ? localStorage.getItem(key()) : null;
      if (!currentStored && props.value === void 0) {
        setScheme(e.matches ? "dark" : "light");
        el().classList.toggle("dark", e.matches);
      }
    };
    mq.addEventListener("change", handleChange);
    onCleanup9(() => mq.removeEventListener("change", handleChange));
    const handleExternalScheme = (e) => {
      if (props.value !== void 0) return;
      const next = e.detail;
      setScheme(next);
    };
    window.addEventListener("torch:scheme", handleExternalScheme);
    onCleanup9(() => window.removeEventListener("torch:scheme", handleExternalScheme));
  });
  function applyScheme(next) {
    const suppress = props.suppressTransitions !== false;
    if (suppress) {
      document.body.setAttribute("data-switching-theme", "");
      if (clearSuppressTimeout !== void 0) window.clearTimeout(clearSuppressTimeout);
      clearSuppressTimeout = window.setTimeout(() => {
        document.body.removeAttribute("data-switching-theme");
        clearSuppressTimeout = void 0;
      }, 100);
    }
    if (props.value === void 0) {
      setScheme(next);
      el().classList.toggle("dark", next === "dark");
      const k = key();
      if (k !== false) localStorage.setItem(k, next);
    }
    props.onValueChange?.(next);
    window.dispatchEvent(new CustomEvent("torch:scheme", { detail: next }));
  }
  function toggle() {
    applyScheme(dark() ? "light" : "dark");
  }
  const variant = () => props.variant ?? "icon";
  return <Show20
    when={variant() === "switch"}
    fallback={<Button
      variant="ghost"
      size="sm"
      iconOnly
      icon={dark() ? icons.sun({ class: "h-4 w-4", "aria-hidden": "true" }) : icons.moon({ class: "h-4 w-4", "aria-hidden": "true" })}
      label={dark() ? "Switch to Light mode" : "Switch to Dark mode"}
      aria-pressed={dark() ? "true" : "false"}
      onClick={toggle}
      class={props.class}
    />}
  >
			<Switch
    data-theme-toggle=""
    fullWidth={false}
    class="flex h-9 w-auto items-center"
    controlClass={cn(props.class, "data-[checked]:border-surface-border")}
    variant="icon"
    trackColor="var(--surface-dim)"
    trackCheckedColor="var(--surface-dim)"
    checked={dark()}
    onValueChange={(checked) => applyScheme(checked ? "dark" : "light")}
    aria-label={dark() ? "Switch to Light mode" : "Switch to Dark mode"}
    thumbOffIcon={icons.sun({ class: "h-2.5 w-2.5 text-ink-700", "aria-hidden": "true" })}
    thumbOnIcon={icons.moon({ class: "h-2.5 w-2.5 text-ink-700", "aria-hidden": "true" })}
  />
		</Show20>;
}

// src/components/feedback/AlertDialog.tsx
var DEFAULT_DURATION_MS2 = 200;
var EXIT_DURATION_MS = Math.round(DEFAULT_DURATION_MS2 * 0.8);
var alertDialogStyles = `
@keyframes torchui-alert-overlay-fade-in {
	from { opacity: 0; }
	to { opacity: 1; }
}
@keyframes torchui-alert-overlay-fade-out {
	from { opacity: 1; }
	to { opacity: 0; }
}
@keyframes torchui-alert-panel-scale-in {
	from { opacity: 0; transform: scale(0.96); }
	to { opacity: 1; transform: scale(1); }
}
@keyframes torchui-alert-panel-scale-out {
	from { opacity: 1; transform: scale(1); }
	to { opacity: 0; transform: scale(0.96); }
}
.torchui-alert-dialog-overlay {
	animation: torchui-alert-overlay-fade-out ${EXIT_DURATION_MS}ms ease-in forwards;
}
.torchui-alert-dialog-overlay[data-expanded] {
	animation: torchui-alert-overlay-fade-in ${DEFAULT_DURATION_MS2}ms ease-out forwards;
}
.torchui-alert-dialog-content {
	animation: torchui-alert-panel-scale-out ${EXIT_DURATION_MS}ms ease-in forwards;
}
.torchui-alert-dialog-content[data-expanded] {
	animation: torchui-alert-panel-scale-in ${DEFAULT_DURATION_MS2}ms ease-out forwards;
}
`;
var STYLE_ID2 = "torchui-alert-dialog-styles";
function ensureAlertStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID2)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID2;
  style.textContent = alertDialogStyles;
  document.head.appendChild(style);
}
function AlertDialog(props) {
  const [local] = splitProps27(props, [
    "open",
    "onOpenChange",
    "onCancel",
    "title",
    "description",
    "confirmLabel",
    "cancelLabel",
    "onConfirm",
    "destructive",
    "class",
    "overlayClass"
  ]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  onMount8(ensureAlertStyles);
  const [pending, setPending] = createSignal16(false);
  let closingFromConfirm = false;
  if (false) {
    createEffect11(() => {
      if (local.open && !local.onOpenChange) {
      }
    });
  }
  const handleOpenChange = (isOpen) => {
    if (!isOpen) {
      if (!closingFromConfirm) local.onCancel?.();
      closingFromConfirm = false;
    }
    local.onOpenChange?.(isOpen);
  };
  const handleConfirm = async () => {
    if (pending()) return;
    setPending(true);
    try {
      await local.onConfirm?.();
      closingFromConfirm = true;
      handleOpenChange(false);
    } catch {
    } finally {
      setPending(false);
    }
  };
  return <KobalteAlertDialog
    open={local.open}
    onOpenChange={handleOpenChange}
  >
			<KobalteAlertDialog.Portal>
				<KobalteAlertDialog.Overlay
    class={cn(
      "torchui-alert-dialog-overlay fixed inset-0 z-[100]",
      "bg-black/30 dark:bg-black/50 backdrop-blur-md dark:backdrop-blur-sm",
      local.overlayClass
    )}
  />
				<div class="fixed left-1/2 top-1/2 z-[101] w-full max-w-md -translate-x-1/2 -translate-y-1/2 p-4">
					{
    /* ARIA alert-dialog: user must choose Cancel or Confirm; outside click should not dismiss. */
  }
					<KobalteAlertDialog.Content
    class="torchui-alert-dialog-content block w-full"
    onInteractOutside={(e) => e.preventDefault()}
  >
						<div
    class={cn(
      "torchui-alert-dialog-content-panel rounded-2xl border border-surface-border bg-surface-raised p-6 shadow-xl dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,.5)]",
      local.class
    )}
  >
							<KobalteAlertDialog.Title class="text-lg font-semibold text-ink-900">
								{local.title}
							</KobalteAlertDialog.Title>
							<Show21 when={local.description}>
								<KobalteAlertDialog.Description class="mt-2 text-sm text-ink-500">
									{local.description}
								</KobalteAlertDialog.Description>
							</Show21>
							<div class="mt-6 flex justify-end gap-3">
								<KobalteAlertDialog.CloseButton as={Button} variant="outlined" size="sm">
									{local.cancelLabel ?? (zh() ? "\u53D6\u6D88" : "Cancel")}
								</KobalteAlertDialog.CloseButton>
								<Button
    variant={local.destructive ? "danger" : "primary"}
    size="sm"
    disabled={pending()}
    onClick={handleConfirm}
  >
									{local.confirmLabel ?? (zh() ? "\u786E\u8BA4" : "Confirm")}
								</Button>
							</div>
						</div>
					</KobalteAlertDialog.Content>
				</div>
			</KobalteAlertDialog.Portal>
		</KobalteAlertDialog>;
}

// src/components/layout/Divider.tsx
import { splitProps as splitProps28 } from "solid-js";
import { Separator as KobalteSeparator } from "@kobalte/core/separator";
var weightClasses = {
  thin: "border-t",
  medium: "border-t-2",
  thick: "border-t-4"
};
var styleClasses = {
  solid: "border-solid",
  dotted: "border-dotted",
  dashed: "border-dashed"
};
var lineBase = "min-h-0 flex-1 shrink-0 border-surface-border";
function Divider(props) {
  const [local, others] = splitProps28(props, ["label", "lineStyle", "weight", "class"]);
  const lineStyle = () => local.lineStyle ?? "solid";
  const weight = () => local.weight ?? "thin";
  const lineClass = () => cn(lineBase, weightClasses[weight()], styleClasses[lineStyle()]);
  return <KobalteSeparator
    as="div"
    orientation="horizontal"
    class={cn(
      "w-full my-6",
      local.label ? "flex items-center gap-4" : "",
      local.class
    )}
    {...others}
  >
			{local.label ? <>
					<span class={lineClass()} />
					<span class="shrink-0 whitespace-nowrap text-sm font-medium text-ink-500">
						{local.label}
					</span>
					<span class={lineClass()} />
				</> : <span class={cn(lineClass(), "block w-full")} />}
		</KobalteSeparator>;
}

// src/components/overlays/Drawer.tsx
import { Show as Show22, onMount as onMount9, splitProps as splitProps29, createEffect as createEffect12, createSignal as createSignal17, on as on6, onCleanup as onCleanup10 } from "solid-js";
import { Dialog as KobalteDialog2 } from "@kobalte/core/dialog";
var sizeWidthClasses = {
  xs: "w-[320px]",
  sm: "w-[440px]",
  md: "w-[560px]",
  lg: "w-[680px]",
  xl: "w-[800px]",
  "2xl": "w-[960px]",
  full: "w-full"
};
var sizeHeightClasses = {
  xs: "h-[320px]",
  sm: "h-[440px]",
  md: "h-[560px]",
  lg: "h-[680px]",
  xl: "h-[800px]",
  "2xl": "h-[960px]",
  full: "h-full"
};
var insetClassesBySide = {
  end: { "0": "right-0 top-0 bottom-0", "2": "top-2 right-2 bottom-2", "4": "top-4 right-4 bottom-4", "6": "top-6 right-6 bottom-6" },
  start: { "0": "left-0 top-0 bottom-0", "2": "top-2 left-2 bottom-2", "4": "top-4 left-4 bottom-4", "6": "top-6 left-6 bottom-6" },
  top: { "0": "left-0 right-0 top-0", "2": "left-2 right-2 top-2", "4": "left-4 right-4 top-4", "6": "left-6 right-6 top-6" },
  bottom: { "0": "left-0 right-0 bottom-0", "2": "left-2 right-2 bottom-2", "4": "left-4 right-4 bottom-4", "6": "left-6 right-6 bottom-6" }
};
var decorationBySide = {
  start: "rounded-r-lg border-r",
  end: "rounded-l-lg border-l",
  top: "rounded-b-lg border-b",
  bottom: "rounded-t-lg border-t"
};
var drawerStyles = `

@keyframes torchui-drawer-fade-in {

	from { opacity: 0; }

	to { opacity: 1; }

}

@keyframes torchui-drawer-fade-out {

	from { opacity: 1; }

	to { opacity: 0; }

}

@keyframes torchui-drawer-slide-in-end {

	from { transform: translateX(100%); }

	to { transform: translateX(0); }

}

@keyframes torchui-drawer-slide-in-start {

	from { transform: translateX(-100%); }

	to { transform: translateX(0); }

}

@keyframes torchui-drawer-slide-in-top {

	from { transform: translateY(-100%); }

	to { transform: translateY(0); }

}

@keyframes torchui-drawer-slide-in-bottom {

	from { transform: translateY(100%); }

	to { transform: translateY(0); }

}

@keyframes torchui-drawer-slide-out-end {

	from { transform: translateX(0); }

	to { transform: translateX(100%); }

}

@keyframes torchui-drawer-slide-out-start {

	from { transform: translateX(0); }

	to { transform: translateX(-100%); }

}

@keyframes torchui-drawer-slide-out-top {

	from { transform: translateY(0); }

	to { transform: translateY(-100%); }

}

@keyframes torchui-drawer-slide-out-bottom {

	from { transform: translateY(0); }

	to { transform: translateY(100%); }

}

.torchui-drawer-overlay {

	opacity: 0;

	animation: torchui-drawer-fade-out 0.2s ease-in forwards;

}

.torchui-drawer-overlay[data-expanded] {

	opacity: 1;

	animation: torchui-drawer-fade-in 0.25s ease-out forwards;

}

.torchui-drawer-panel[data-side="end"] {

	transform: translateX(100%);

	animation: torchui-drawer-slide-out-end 0.2s ease-in forwards;

}

.torchui-drawer-panel[data-side="end"][data-expanded] {

	transform: translateX(0);

	animation: torchui-drawer-slide-in-end 0.25s ease-out forwards;

}

.torchui-drawer-panel[data-side="start"] {

	transform: translateX(-100%);

	animation: torchui-drawer-slide-out-start 0.2s ease-in forwards;

}

.torchui-drawer-panel[data-side="start"][data-expanded] {

	transform: translateX(0);

	animation: torchui-drawer-slide-in-start 0.25s ease-out forwards;

}

.torchui-drawer-panel[data-side="top"] {

	transform: translateY(-100%);

	animation: torchui-drawer-slide-out-top 0.2s ease-in forwards;

}

.torchui-drawer-panel[data-side="top"][data-expanded] {

	transform: translateY(0);

	animation: torchui-drawer-slide-in-top 0.25s ease-out forwards;

}

.torchui-drawer-panel[data-side="bottom"] {

	transform: translateY(100%);

	animation: torchui-drawer-slide-out-bottom 0.2s ease-in forwards;

}

.torchui-drawer-panel[data-side="bottom"][data-expanded] {

	transform: translateY(0);

	animation: torchui-drawer-slide-in-bottom 0.25s ease-out forwards;

}

`;
var STYLE_ID3 = "torchui-drawer-styles";
function ensureDrawerStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID3)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID3;
  style.textContent = drawerStyles;
  document.head.appendChild(style);
}
function Drawer(props) {
  const icons = useIcons();
  const [local, others] = splitProps29(props, [
    "open",
    "onClose",
    "onOpenChange",
    "size",
    "side",
    "overlay",
    "closeOnOverlayClick",
    "overlayClass",
    "overlayDim",
    "overlayBlur",
    "showCloseButton",
    "onCancel",
    "onSave",
    "cancelLabel",
    "saveLabel",
    "actionsPosition",
    "lockScroll",
    "offset",
    "onCloseComplete",
    "animationExitDuration",
    "noPadding",
    "contentClass",
    "title",
    "class",
    "children"
  ]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  onMount9(ensureDrawerStyles);
  if (false) {
    createEffect12(on6(
      () => local.open,
      (open) => {
        if (open) {
          const o = others;
          if (o["aria-label"] == null && o["aria-labelledby"] == null) {
          }
        }
      }
    ));
  }
  const side = () => local.side ?? "end";
  const isHorizontal = () => side() === "start" || side() === "end";
  const sizeClass = () => isHorizontal() ? sizeWidthClasses[effectiveSize()] : sizeHeightClasses[effectiveSize()];
  const showOverlay = () => local.overlay !== false;
  const closeOnOverlay = () => local.closeOnOverlayClick !== false;
  const hasFooter = () => local.onSave != null || local.onCancel != null;
  const actionsPosition = () => local.actionsPosition ?? "bottom";
  let closeReason = null;
  const handleOpenChange = (isOpen) => {
    local.onOpenChange?.(isOpen);
    if (!isOpen) {
      if (closeReason === "cancel") local.onCancel?.();
      closeReason = null;
      local.onClose?.();
    }
  };
  const setCancelReason = () => {
    closeReason = "cancel";
  };
  const setCloseReason = () => {
    closeReason = "close";
  };
  const canClose = () => local.onOpenChange != null || local.onClose != null;
  const [effectiveSize, setEffectiveSize] = createSignal17(local.size ?? "md");
  createEffect12(on6(
    () => [local.open, local.size],
    ([open, size]) => {
      if (open) setEffectiveSize(size ?? "md");
    }
  ));
  const exitDurationMs = () => local.animationExitDuration ?? 200;
  createEffect12(on6(() => local.open, (isOpen, wasOpen) => {
    if (wasOpen === true && !isOpen) {
      const t = setTimeout(() => local.onCloseComplete?.(), exitDurationMs());
      onCleanup10(() => clearTimeout(t));
    }
  }));
  const currentSize = () => effectiveSize();
  const isFull = () => currentSize() === "full";
  const offset = () => local.offset ?? "0";
  const hasInsetOffset = () => !isFull() && offset() !== "0";
  const panelInsetClasses = () => insetClassesBySide[side()][offset()];
  const panelDecorationClasses = () => hasInsetOffset() ? "rounded-lg" : decorationBySide[side()];
  const panelSizeStretch = () => hasInsetOffset() ? "" : isHorizontal() ? "h-full" : "w-full";
  const actionsBlock = () => <div class="flex items-center justify-end gap-3">

			<Show22 when={local.onCancel != null} fallback={<span />}>

				<KobalteDialog2.CloseButton
    as={Button}
    variant="ghost"
    size="sm"
    onClick={setCancelReason}
  >

					{local.cancelLabel ?? (zh() ? "\u53D6\u6D88" : "Cancel")}

				</KobalteDialog2.CloseButton>

			</Show22>

			<Show22 when={local.onSave}>

				<Button
    variant="primary"
    size="sm"
    class="rounded-lg"
    onClick={local.onSave}
  >

					{local.saveLabel ?? "Save"}

				</Button>

			</Show22>

		</div>;
  return <KobalteDialog2
    open={local.open}
    onOpenChange={handleOpenChange}
    modal
    preventScroll={local.lockScroll !== false}
  >

			<KobalteDialog2.Portal>

				<Show22 when={showOverlay()}>

					<KobalteDialog2.Overlay
    class={cn(
      "torchui-drawer-overlay fixed inset-0 z-[60] min-h-screen",
      local.overlayDim !== false && "bg-black/30 dark:bg-black/60",
      local.overlayBlur !== false && "backdrop-blur-md dark:backdrop-blur-md",
      local.overlayClass
    )}
    onPointerDown={() => {
      if (closeOnOverlay()) setCancelReason();
    }}
  />

				</Show22>

				<KobalteDialog2.Content
    as="aside"
    class={cn(
      "torchui-drawer-panel fixed z-[70] flex flex-col bg-surface-raised text-ink-900 shadow-[0_20px_50px_-12px_rgba(0,0,0,.15)]",
      "border border-surface-border dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,.5)]",
      panelInsetClasses(),
      panelDecorationClasses(),
      sizeClass(),
      panelSizeStretch(),
      local.class
    )}
    data-side={side()}
    onInteractOutside={(e) => {
      if (!closeOnOverlay()) {
        e.preventDefault();
        return;
      }
      setCancelReason();
    }}
    {...others}
  >

					{
    /* Header bar for top-end / top-start: inline buttons to avoid nested Show-in-function issues */
  }

				<Show22 when={actionsPosition() === "top-end" || actionsPosition() === "top-start"}>

					<div class={cn("flex shrink-0 items-center gap-2 border-b border-surface-border px-6 py-4", actionsPosition() === "top-start" ? "justify-start" : "justify-end")}>

						<Show22 when={local.onCancel != null}>

							<KobalteDialog2.CloseButton
    as={Button}
    variant="ghost"
    size="sm"
    onClick={setCancelReason}
  >

								{local.cancelLabel ?? (zh() ? "\u53D6\u6D88" : "Cancel")}

							</KobalteDialog2.CloseButton>

						</Show22>

							<Show22 when={local.onSave}>

								<Button variant="primary" size="sm" class="rounded-lg" onClick={local.onSave}>

									{local.saveLabel ?? "Save"}

								</Button>

							</Show22>

							<Show22 when={canClose() && local.showCloseButton !== false}>

								<KobalteDialog2.CloseButton
    aria-label={zh() ? "\u5173\u95ED" : "Close"}
    class="flex h-9 w-9 items-center justify-center rounded-full bg-surface-overlay text-ink-500 hover:bg-surface-dim hover:text-ink-700"
    onClick={setCloseReason}
  >

									{icons.close({ class: "h-5 w-5", "aria-hidden": "true" })}

								</KobalteDialog2.CloseButton>

							</Show22>

						</div>

					</Show22>



					{
    /* Fixed header with title and close button when actions are at bottom */
  }
					<Show22 when={actionsPosition() === "bottom" && (local.title || canClose() && local.showCloseButton !== false)}>
						<div class="flex shrink-0 items-center border-b border-surface-border px-6 py-4">
							<Show22 when={local.title}>
								<KobalteDialog2.Title class="flex-1 text-lg font-semibold text-ink-900">
									{local.title}
								</KobalteDialog2.Title>
							</Show22>
							<Show22 when={!local.title}>
								<div class="flex-1" />
							</Show22>
							<Show22 when={canClose() && local.showCloseButton !== false}>
								<KobalteDialog2.CloseButton
    aria-label={zh() ? "\u5173\u95ED" : "Close"}
    class="flex h-8 w-8 items-center justify-center rounded-full text-ink-500 hover:bg-surface-dim hover:text-ink-700"
    onClick={setCloseReason}
  >
									{icons.close({ class: "h-4 w-4", "aria-hidden": "true" })}
								</KobalteDialog2.CloseButton>
							</Show22>
						</div>
					</Show22>

					<div class={cn("relative flex min-h-0 flex-1 flex-col", !local.noPadding && "p-6")}>

						<div class={cn("flex min-h-0 flex-1 flex-col overflow-y-auto p-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden", hasFooter() && actionsPosition() === "bottom" && "min-h-0", local.contentClass)}>

							{local.children}

						</div>

					</div>



					<Show22 when={actionsPosition() === "bottom" && hasFooter()}>

						<div class="flex shrink-0 items-center justify-end gap-3 border-t border-surface-border px-6 py-4">

							{actionsBlock()}

						</div>

					</Show22>

				</KobalteDialog2.Content>

			</KobalteDialog2.Portal>

		</KobalteDialog2>;
}

// src/components/layout/WizardStep.tsx
var WizardStep = (props) => {
  return <div class={props.class}>
			<div class="mb-1 flex items-center gap-3">
				{props.stepNumber != null && <span
    class="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-sm font-semibold text-primary-600"
    aria-hidden="true"
  >
						{props.stepNumber}
					</span>}
				<h2 class="font-semibold tracking-tight text-xl text-ink-900">
					{props.title}
				</h2>
			</div>
			{props.description && <p class="mb-6 text-[0.9375rem] text-ink-500">
					{props.description}
				</p>}
			{props.children}
		</div>;
};

// src/components/layout/VerticalWizard.tsx
import { splitProps as splitProps30 } from "solid-js";
var sidebarWidths = {
  sm: "w-36",
  md: "w-48",
  lg: "w-64"
};
var gaps = {
  sm: "gap-4",
  md: "gap-8",
  lg: "gap-12",
  xl: "gap-16"
};
function VerticalWizard(props) {
  const [local] = splitProps30(props, [
    "step",
    "stepLabels",
    "variant",
    "sidebarWidth",
    "gap",
    "class",
    "sidebarClass",
    "contentClass",
    "children"
  ]);
  return <div class={cn("flex", gaps[local.gap ?? "md"], local.class)}>
			<div class={cn("shrink-0", sidebarWidths[local.sidebarWidth ?? "md"], local.sidebarClass)}>
				<WizardStepper
    step={local.step}
    totalSteps={local.stepLabels.length}
    stepLabels={local.stepLabels}
    orientation="vertical"
    variant={local.variant}
  />
			</div>
			<div class={cn("min-w-0 flex-1", local.contentClass)}>
				{local.children}
			</div>
		</div>;
}

// src/components/layout/WizardStepper.tsx
function WizardStepper(props) {
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const orientation = () => props.orientation ?? "horizontal";
  const currentStep = () => props.step;
  const variant = () => props.variant ?? "default";
  const isCompact = () => variant() === "compact";
  const isChevrons = () => variant() === "chevrons";
  const circleContent = (stepNum, isActive, isCompleted) => <span
    class={cn(
      "flex shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors",
      isCompact() ? "h-6 w-6 text-xs" : "h-8 w-8",
      isCompleted && "bg-primary-500 text-white",
      isActive && "bg-primary-500 text-white ring-4 ring-primary-500/20 dark:ring-primary-500/30",
      isCompact() && isActive && "ring-2",
      !isActive && !isCompleted && "bg-ink-200 text-ink-500"
    )}
  >
			{isCompleted ? <icons.check width={isCompact() ? 12 : 16} height={isCompact() ? 12 : 16} stroke-width={2.5} /> : stepNum}
		</span>;
  return <nav class={cn("wizard-stepper", props.class)} aria-label={zh() ? "\u8FDB\u5EA6" : "Progress"}>
			<ol class={cn("m-0 flex list-none items-center p-0", orientation() === "vertical" && "flex-col items-stretch gap-0")}>
				{props.stepLabels.map((label, index) => {
    const stepNum = index + 1;
    const isActive = currentStep() === stepNum;
    const isCompleted = currentStep() > stepNum;
    const isLast = index === props.stepLabels.length - 1;
    if (orientation() === "vertical") {
      return <li class="flex" aria-current={isActive ? "step" : void 0}>
								{
        /* Track column: circle + connector, centered so line is always under the circle */
      }
								<div class={cn("flex flex-col items-center shrink-0", isCompact() ? "w-6" : "w-8")}>
									{circleContent(stepNum, isActive, isCompleted)}
									{!isLast && <span
        class={cn(
          "w-0.5 flex-1 rounded transition-colors",
          isCompact() ? "my-1" : "my-1.5",
          isCompleted ? "bg-primary-500" : "bg-surface-dim"
        )}
        aria-hidden="true"
      />}
								</div>
								{
        /* Label column */
      }
								<div
        class={cn(
          "flex items-center",
          isCompact() ? "pl-2.5" : "pl-3",
          isLast ? "pb-0" : isCompact() ? "pb-3" : "pb-4"
        )}
      >
									<span
        class={cn(
          "font-medium text-sm",
          isActive && "text-ink-900",
          isCompleted && "text-ink-600",
          !isActive && !isCompleted && "text-ink-400"
        )}
      >
										{label}
									</span>
								</div>
							</li>;
    }
    return <>
							{index > 0 && isChevrons() && <li class="flex shrink-0 items-center text-ink-300" aria-hidden="true">
									<icons.chevronRight width={isCompact() ? 16 : 20} height={isCompact() ? 16 : 20} />
								</li>}
							<li
      class={cn(
        "flex items-center",
        isChevrons() ? "min-w-0 flex-1 basis-0 justify-center" : "min-w-0 flex-1 first:min-w-0 first:flex-initial"
      )}
      aria-current={isActive ? "step" : void 0}
    >
								{index > 0 && !isChevrons() && <span
      class={cn(
        "h-0.5 min-w-[1rem] flex-1 shrink rounded transition-colors",
        isCompact() ? "ml-2 mr-2 sm:ml-2.5 sm:mr-2.5" : "ml-3 mr-3 sm:ml-4 sm:mr-4",
        isCompleted ? "bg-primary-500" : "bg-surface-dim"
      )}
      aria-hidden="true"
    />}
								<div class={cn("flex shrink-0 items-center gap-3", isCompact() && "gap-2")}>
									{circleContent(stepNum, isActive, isCompleted)}
									<span
      class={cn(
        "font-medium",
        isCompact() ? "text-sm" : "text-xs sm:text-sm",
        isActive && "text-ink-900",
        isCompleted && "text-ink-600",
        !isActive && !isCompleted && "text-ink-400"
      )}
    >
										{label}
									</span>
								</div>
							</li>
						</>;
  })}
			</ol>
		</nav>;
}
var Wizard = {
  Stepper: WizardStepper,
  Step: WizardStep,
  Vertical: VerticalWizard
};

// src/components/layout/PromptWithAction.tsx
var defaultActionClass = "cursor-pointer font-medium text-primary-500 hover:underline rounded outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50";
function PromptWithAction(props) {
  const actionClass = () => cn(defaultActionClass, props.actionClass);
  return <p class={cn("mb-7 text-[0.9375rem] text-ink-500", props.class)}>
			{props.prompt}{" "}
			{props.href != null ? <Link href={props.href} class={actionClass()}>
					{props.actionLabel}
				</Link> : <button type="button" class={actionClass()} onClick={props.onClick}>
					{props.actionLabel}
				</button>}
		</p>;
}

// src/components/layout/Section.tsx
import { splitProps as splitProps31 } from "solid-js";
function Section(props) {
  const [local, others] = splitProps31(props, [
    "title",
    "description",
    "descriptionContent",
    "id",
    "class",
    "titleClass",
    "descriptionClass",
    "children",
    "ref"
  ]);
  return <section ref={local.ref} id={local.id} class={cn(local.class)} {...others}>
			{local.title != null && local.title !== "" && <h2
    class={cn(
      "mb-2 text-lg font-semibold text-ink-900",
      local.titleClass
    )}
  >
					{local.title}
				</h2>}
			{local.descriptionContent != null ? <div class={cn("mb-4 text-sm text-ink-500", local.descriptionClass)}>
					{local.descriptionContent}
				</div> : local.description != null && local.description !== "" ? <p class={cn("mb-4 text-sm text-ink-500", local.descriptionClass)}>
					{local.description}
				</p> : null}
			{local.children}
		</section>;
}

// src/components/layout/Inline.tsx
import { splitProps as splitProps32 } from "solid-js";
function Inline(props) {
  const [local, others] = splitProps32(props, ["class", "children"]);
  return <div class={cn("flex items-center gap-2", local.class)} {...others}>
			{local.children}
		</div>;
}

// src/components/layout/Form.tsx
import { Show as Show23, For as For11, splitProps as splitProps33 } from "solid-js";
function Form(props) {
  const [local, rest] = splitProps33(props, ["class", "children", "errorSummary", "size"]);
  return <ComponentSizeProvider size={local.size}>
			<form data-torchui-form-size={local.size} class={cn("flex flex-col gap-6", local.class)} {...rest}>
				<Show23 when={local.errorSummary && (Array.isArray(local.errorSummary) ? local.errorSummary.length > 0 : true)}>
					<>
						{Array.isArray(local.errorSummary) ? <Alert status="error" class="mb-0">
								<p class="font-medium">Please fix the following:</p>
								<ul class="mt-1 list-inside list-disc">
									<For11 each={local.errorSummary}>
										{(msg) => <li>{msg}</li>}
									</For11>
								</ul>
							</Alert> : local.errorSummary}
					</>
				</Show23>
				{local.children}
			</form>
		</ComponentSizeProvider>;
}

// src/components/layout/BlockQuote.tsx
var justifyClass = {
  start: "text-start",
  center: "text-center",
  end: "text-end"
};
function BlockQuote(props) {
  const justify = () => props.justify ?? "start";
  const alignClass = () => justifyClass[justify()];
  const hasCitation = () => props.citation != null && (typeof props.citation !== "string" || props.citation.trim() !== "");
  return <blockquote
    cite={props.cite}
    class={cn(
      "text-ink-700",
      !props.noBorder && "border-l-4 border-primary-500 pl-4",
      props.class
    )}
  >
			<div class={cn("flex gap-3", props.avatar && "items-start")}>
				{props.avatar && <div class="shrink-0" aria-hidden="true">
						{props.avatar}
					</div>}
				<div class={cn("min-w-0 flex-1", alignClass())}>
					{props.icon && <div class="mb-2 text-primary-500 [&>svg]:h-8 [&>svg]:w-8" aria-hidden="true">
							{props.icon}
						</div>}
					<div class="[&>p]:mb-2 [&>p:last-child]:mb-0">{props.children}</div>
					{hasCitation() && <footer class="mt-2 text-sm text-ink-500">
							{props.citation}
						</footer>}
				</div>
			</div>
		</blockquote>;
}

// src/components/layout/PageHeading.tsx
import { Dynamic } from "solid-js/web";
function PageHeading(props) {
  const descClass = () => cn("text-[0.9375rem] text-ink-500", props.descriptionClass ?? "mt-3");
  const level = () => props.level ?? 1;
  const headingTag = () => props.as ?? (level() === 2 ? "h2" : "h1");
  return <div class={cn(props.class)}>
			<Dynamic
    component={headingTag()}
    class={cn(
      "font-bold tracking-tight text-ink-900",
      level() === 2 ? "text-xl" : "text-2xl",
      props.titleClass
    )}
  >
				{props.title}
			</Dynamic>
			{props.descriptionContent != null ? <p class={descClass()}>{props.descriptionContent}</p> : props.description != null && props.description !== "" ? <p class={descClass()}>{props.description}</p> : null}
		</div>;
}

// src/components/layout/Card.tsx
import { splitProps as splitProps36 } from "solid-js";

// src/components/feedback/Skeleton.tsx
import { splitProps as splitProps34, Show as Show24 } from "solid-js";
var STANDALONE_CLASS = "inline-block bg-ink-200 animate-pulse";
var ROUND_CLASS = {
  full: "rounded-full",
  lg: "rounded-lg",
  md: "rounded-md",
  sm: "rounded-sm",
  none: "rounded-none"
};
function Skeleton(props) {
  const [local] = splitProps34(props, ["class", "round", "block", "loaded", "children"]);
  const roundClass = local.round ? ROUND_CLASS[local.round] : "rounded";
  if (local.children == null) {
    return <div
      class={cn(STANDALONE_CLASS, roundClass, local.class)}
      aria-hidden="true"
    />;
  }
  return <Show24
    when={!local.loaded}
    fallback={<>{local.children}</>}
  >
			<div
    class={cn("relative", local.block ? "block" : "inline-block", roundClass, local.class)}
    aria-hidden="true"
  >
				<div class="invisible">
					{local.children}
				</div>
				<div
    class={cn("absolute inset-0", roundClass, STANDALONE_CLASS)}
  />
			</div>
		</Show24>;
}

// src/components/layout/Card.tsx
import { Dynamic as Dynamic2 } from "solid-js/web";

// src/components/data-display/Avatar.tsx
import { Show as Show25, splitProps as splitProps35, createSignal as createSignal18, createEffect as createEffect13, createMemo as createMemo12, on as on7 } from "solid-js";

// src/components/data-display/avatar-utils.ts
var shapeClasses = {
  circle: "rounded-full",
  rounded: "rounded-lg",
  square: "rounded-none"
};
var avatarSizeClasses = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-sm",
  // intentionally text-sm at md — initials read clearly at this size
  lg: "h-12 w-12 text-base"
};
var neutralColorClass = "bg-ink-200 text-ink-600";
function getInitials(name) {
  const trimmed = name.trim();
  if (!trimmed) return "?";
  const parts = trimmed.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  const first = parts[0].charAt(0);
  const last = parts[parts.length - 1].charAt(0);
  return (first + last).toUpperCase();
}

// src/components/data-display/Avatar.tsx
var colorClasses = {
  neutral: neutralColorClass,
  primary: "bg-primary-100 text-primary-700",
  success: "bg-success-100 text-success-700",
  warning: "bg-warning-100 text-warning-700",
  danger: "bg-danger-100 text-danger-700",
  info: "bg-info-100 text-info-700"
};
var badgePlacementClasses = {
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0"
};
var SIZE_IDX = { sm: 0, md: 1, lg: 2 };
var BADGE_SIGNS = {
  "bottom-right": [1, 1],
  "bottom-left": [-1, 1],
  "top-right": [1, -1],
  "top-left": [-1, -1]
};
function badgeTransform(placement, avatarSize, badgeSize, kind) {
  const base = kind === "content" ? 20 : 5;
  const offset = (SIZE_IDX[badgeSize] - SIZE_IDX[avatarSize]) * 10 + base;
  const [xSign, ySign] = BADGE_SIGNS[placement];
  return `translate(${offset * xSign}%, ${offset * ySign}%)`;
}
function Avatar(props) {
  const [local, others] = splitProps35(props, [
    "name",
    "imageUrl",
    "size",
    "shape",
    "ring",
    "color",
    "badge",
    "badgeSize",
    "badgeKind",
    "badgePlacement",
    "badgeInteractive",
    "decorative",
    "class",
    "style"
  ]);
  const size = () => local.size ?? "md";
  const badgeSize = () => local.badgeSize ?? size();
  const badgeKind = () => local.badgeKind ?? "dot";
  const shape = () => local.shape ?? "circle";
  const color = () => local.color ?? "neutral";
  const badgePlacement = () => local.badgePlacement ?? "bottom-right";
  const sizeClass = () => avatarSizeClasses[size()];
  const ringClass = createMemo12(() => {
    const r = local.ring;
    if (!r) return "";
    const ringColor = r === true ? "ring-surface-base" : r.color ?? "ring-surface-base";
    const useOffset = r === true || typeof r === "object" && r.offset !== false;
    return cn(
      "ring-2",
      useOffset && "ring-offset-2 ring-offset-surface-base",
      ringColor
    );
  });
  const initials = () => getInitials(local.name);
  const hasBadge = () => local.badge != null;
  const badgeIsInteractive = () => !local.decorative && local.badgeInteractive === true;
  const badgeTransformStyle = createMemo12(() => ({
    transform: badgeTransform(badgePlacement(), size(), badgeSize(), badgeKind())
  }));
  const [imageError, setImageError] = createSignal18(false);
  const [imageLoaded, setImageLoaded] = createSignal18(false);
  const [imageStartedLoading, setImageStartedLoading] = createSignal18(false);
  createEffect13(on7(() => local.imageUrl, () => {
    setImageError(false);
    setImageLoaded(false);
    setImageStartedLoading(false);
  }));
  return <span
    {...others}
    role={local.decorative ? void 0 : "img"}
    aria-label={local.decorative ? void 0 : local.name}
    aria-hidden={local.decorative ? "true" : void 0}
    class={cn("inline-flex shrink-0", hasBadge() && "relative overflow-visible", local.class)}
    style={local.style}
  >
			<span
    class={cn(
      "relative inline-flex items-center justify-center overflow-hidden font-medium",
      colorClasses[color()],
      shapeClasses[shape()],
      sizeClass(),
      ringClass()
    )}
    title={local.decorative ? void 0 : local.name}
  >
				<Show25
    when={local.imageUrl && !imageError()}
    fallback={<span aria-hidden="true">{initials()}</span>}
  >
					<>
						<img
    src={local.imageUrl}
    alt=""
    class={cn("h-full w-full object-cover", !imageLoaded() && "opacity-0")}
    onError={() => setImageError(true)}
    onLoad={() => setImageLoaded(true)}
    onLoadStart={() => setImageStartedLoading(true)}
  />
						{imageStartedLoading() && !imageLoaded() && <Skeleton
    class="absolute inset-0"
    round={shape() === "circle" ? "full" : shape() === "square" ? "none" : "lg"}
  />}
					</>
				</Show25>
			</span>
			{hasBadge() && <span
    class={cn(
      "absolute z-10 flex",
      !badgeIsInteractive() && "pointer-events-none",
      badgePlacementClasses[badgePlacement()]
    )}
    style={badgeTransformStyle()}
  >
					{local.badge}
				</span>}
		</span>;
}

// src/components/layout/Card.tsx
var cardBase = "rounded-xl border border-surface-border bg-surface-raised";
var variantClasses = {
  default: "shadow-sm",
  flat: "shadow-none"
};
function CardRoot(props) {
  const [local, others] = splitProps36(props, ["children", "horizontal", "variant", "class", "ref"]);
  const variant = () => local.variant ?? "default";
  return <div
    ref={local.ref}
    class={cn(
      cardBase,
      variantClasses[variant()],
      local.horizontal ? "flex flex-row overflow-hidden" : "flex flex-col",
      local.class
    )}
    {...others}
  >
			{local.children}
		</div>;
}
function CardHeader(props) {
  const headingTag = () => props.as ?? "h3";
  return <div
    class={cn(
      "flex shrink-0 items-center justify-between gap-3 border-b border-surface-border px-6 py-4",
      props.class
    )}
  >
			<Dynamic2
    component={headingTag()}
    class="text-base font-semibold text-ink-900"
  >
				{props.title}
			</Dynamic2>
			{props.action}
		</div>;
}
function CardImage(props) {
  return <div
    class={cn(
      "shrink-0 overflow-hidden",
      props.horizontal ? "w-36 self-stretch" : "w-full rounded-t-xl",
      props.class
    )}
  >
			<img
    src={props.src}
    alt={props.alt}
    class={cn(
      "object-cover",
      props.horizontal ? "h-full min-h-0 w-full" : "h-auto w-full",
      props.imgClass
    )}
  />
		</div>;
}
function CardAvatarTitle(props) {
  return <div
    class={cn(
      "flex shrink-0 items-center gap-3 px-6 pt-4 pb-0",
      props.class
    )}
  >
			<Skeleton round="full" loaded={!props.loading}>
				<Avatar
    name={props.name}
    imageUrl={props.imageUrl}
    size={props.avatarSize ?? "md"}
  />
			</Skeleton>
			<Skeleton loaded={!props.loading} block>
				<span class="font-medium text-ink-900">
					{props.name}
				</span>
			</Skeleton>
		</div>;
}
var CardContent = (props) => {
  return <div class={cn("flex min-w-0 flex-1 flex-col", props.class)}>
			{props.children}
		</div>;
};
var CardBody = (props) => {
  return <div class={cn("flex-1 p-6 sm:p-8", props.class)}>{props.children}</div>;
};
var Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Image: CardImage,
  AvatarTitle: CardAvatarTitle,
  Content: CardContent,
  Body: CardBody
});

// src/components/layout/Container.tsx
var sizeClasses3 = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-[90rem]",
  full: "max-w-full"
};
var alignClasses = {
  start: "ms-0 me-auto",
  center: "mx-auto",
  end: "ms-auto me-0"
};
var Container = (props) => {
  const size = () => props.size ?? "md";
  const fluid = () => props.fluid === true;
  const align = () => props.align ?? "center";
  return <div
    class={cn(
      "w-full px-4 sm:px-6 lg:px-8",
      !fluid() && alignClasses[align()],
      !fluid() && size() !== "full" && sizeClasses3[size()],
      props.class
    )}
  >
			{props.children}
		</div>;
};

// src/components/layout/Grid.tsx
var colsClasses = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6"
};
var gapClasses = {
  none: "gap-0",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8"
};
var Grid = (props) => {
  const cols = () => props.cols ?? 1;
  const gap = () => props.gap ?? "md";
  return <div
    class={cn(
      "grid",
      colsClasses[cols()],
      gapClasses[gap()],
      props.class
    )}
  >
			{props.children}
		</div>;
};

// src/components/layout/FormActions.tsx
function FormActions(props) {
  const isSubmit = props.primaryType !== "button";
  return <div class={cn("flex gap-3 pt-2", props.class)}>
			<Button type="button" variant="ghost" onClick={props.onBack} class="rounded-lg">
				{props.backLabel}
			</Button>
			<Button
    type={isSubmit ? "submit" : "button"}
    variant="primary"
    loading={props.loading ?? false}
    disabled={props.disabled ?? false}
    onClick={isSubmit ? void 0 : props.primaryType === "button" ? props.onPrimary : void 0}
    class="rounded-lg py-2.5 font-semibold"
  >
				{props.primaryLabel}
			</Button>
		</div>;
}

// src/components/layout/TablePanel.tsx
import { splitProps as splitProps37 } from "solid-js";
function TablePanel(props) {
  const [local, others] = splitProps37(props, ["header", "headerClass", "bodyClass", "class", "children"]);
  return <div class={cn("rounded-2xl border border-surface-border bg-surface-raised shadow-sm", local.class)} {...others}>
			{local.header && <div class={cn("rounded-t-2xl border-b border-surface-border p-4", local.headerClass)}>
					{local.header}
				</div>}
			<div class={cn("p-4", local.bodyClass)}>{local.children}</div>
		</div>;
}

// src/components/layout/CodeBlock.tsx
import { createSignal as createSignal19, createEffect as createEffect14, Show as Show26, For as For12, splitProps as splitProps40, onCleanup as onCleanup11 } from "solid-js";

// src/components/layout/Collapsible.tsx
import { splitProps as splitProps38, onMount as onMount10 } from "solid-js";
import { Collapsible as KobalteCollapsible } from "@kobalte/core/collapsible";
var CollapsibleRoot = KobalteCollapsible;
var CollapsibleTrigger = KobalteCollapsible.Trigger;
var CollapsibleContent = KobalteCollapsible.Content;
var _KbCollapsibleContent = KobalteCollapsible.Content;
var _KbCollapsibleTrigger = KobalteCollapsible.Trigger;
var COLLAPSIBLE_STYLE_ID = "torchui-collapsible-styles";
var collapsibleStyles = `
.collapsible-content[data-expanded] {
	animation: torchui-collapsible-down 200ms ease-out;
}
.collapsible-content[data-closed] {
	animation: torchui-collapsible-up 200ms ease-out;
}
@keyframes torchui-collapsible-down {
	from { height: 0; opacity: 0; }
	to { height: var(--kb-collapsible-content-height); opacity: 1; }
}
@keyframes torchui-collapsible-up {
	from { height: var(--kb-collapsible-content-height); opacity: 1; }
	to { height: 0; opacity: 0; }
}
`;
function ensureCollapsibleStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(COLLAPSIBLE_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = COLLAPSIBLE_STYLE_ID;
  style.textContent = collapsibleStyles;
  document.head.appendChild(style);
}
function CollapsibleContentStyled(props) {
  const [local, others] = splitProps38(props, ["variant", "class", "children"]);
  onMount10(ensureCollapsibleStyles);
  const variant = () => local.variant ?? "default";
  return <_KbCollapsibleContent
    class={cn(
      "collapsible-content overflow-hidden",
      variant() === "default" && [
        "data-[expanded]:border data-[expanded]:border-surface-border data-[expanded]:border-t-0",
        "data-[expanded]:rounded-b-lg data-[expanded]:bg-surface-raised"
      ],
      local.class
    )}
    {...others}
  >
			{local.children}
		</_KbCollapsibleContent>;
}
function CollapsibleTriggerStyled(props) {
  const [local, others] = splitProps38(props, ["variant", "class", "children"]);
  const variant = () => local.variant ?? "default";
  const icons = useIcons();
  return <_KbCollapsibleTrigger
    class={cn(
      "flex w-full items-center justify-between gap-2 text-left",
      variant() === "default" ? [
        "rounded-lg border border-surface-border bg-surface-base px-4 py-3 text-sm font-medium text-ink-800",
        "hover:bg-surface-overlay",
        "data-[expanded]:rounded-b-none data-[expanded]:bg-surface-overlay"
      ] : [
        "rounded-lg px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-500",
        "hover:bg-transparent hover:text-ink-700",
        "data-[expanded]:text-ink-700"
      ],
      "data-[expanded]:[&>svg]:rotate-180",
      variant() === "default" ? "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500" : "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-inset",
      local.class
    )}
    {...others}
  >
			{local.children}
			{icons.chevronDown({ class: "h-4 w-4 shrink-0 transition-transform duration-200", "aria-hidden": "true" })}
		</_KbCollapsibleTrigger>;
}
var Collapsible = Object.assign(CollapsibleRoot, {
  Trigger: CollapsibleTriggerStyled,
  Content: CollapsibleContentStyled
});

// src/components/overlays/Popover.tsx
import { splitProps as splitProps39 } from "solid-js";
import { Popover as KobaltePopover5 } from "@kobalte/core/popover";
function PopoverRoot(props) {
  const [local, others] = splitProps39(props, ["align", "side", "placement"]);
  const side = () => local.side ?? "bottom";
  const align = () => local.align ?? "center";
  const placement = () => {
    if (local.placement) return local.placement;
    const s = side();
    const a = align();
    return a === "center" ? s : `${s}-${a}`;
  };
  return <KobaltePopover5
    {...others}
    placement={placement()}
  />;
}
var PopoverTrigger = KobaltePopover5.Trigger;
var PopoverAnchor = KobaltePopover5.Anchor;
var PopoverPortal = KobaltePopover5.Portal;
var PopoverContentPrimitive = KobaltePopover5.Content;
var PopoverArrow = KobaltePopover5.Arrow;
var PopoverCloseButton = KobaltePopover5.CloseButton;
function PopoverContent(props) {
  const [local, others] = splitProps39(props, ["class", "children"]);
  return <KobaltePopover5.Portal>
			<KobaltePopover5.Content
    class={cn(
      "z-[80] min-w-[180px] rounded-lg border border-surface-border bg-surface-raised p-2 shadow-lg",
      local.class
    )}
    {...others}
  >
				{local.children}
			</KobaltePopover5.Content>
		</KobaltePopover5.Portal>;
}
var Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  CloseButton: PopoverCloseButton
});

// src/components/layout/CodeBlock.tsx
function getHeaderTitle(props) {
  if (props.filename != null && props.filename !== "") return props.filename;
  if (props.label != null && props.label !== "") return props.label;
  return void 0;
}
var CODE_BLOCK_PROP_KEYS = [
  "content",
  "alternateContent",
  "language",
  "languages",
  "filename",
  "label",
  "headerIcon",
  "showLineNumbers",
  "highlightLines",
  "dark",
  "primary",
  "minHeight",
  "collapsible",
  "defaultCodeOpen",
  "embedded",
  "collapsibleLabelShow",
  "collapsibleLabelHide",
  "highlighter",
  "class",
  "preProps",
  "ref"
];
function CodeBlock(props) {
  const [local, others] = splitProps40(props, [...CODE_BLOCK_PROP_KEYS]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const primary = () => local.primary === true;
  const themeAuto = () => !primary() && local.dark !== true;
  const dark = () => local.dark === true;
  const minHeight = () => local.minHeight ?? "min-h-0";
  const showLineNumbers = () => local.showLineNumbers === true;
  const highlightLines = () => local.highlightLines ?? [];
  const [selectedIndex, setSelectedIndex] = createSignal19(0);
  const [languageOpen, setLanguageOpen] = createSignal19(false);
  const [showAlternate, setShowAlternate] = createSignal19(true);
  const [codeOpen, setCodeOpen] = createSignal19(local.defaultCodeOpen ?? false);
  const collapsible = () => local.collapsible === true;
  const embedded = () => local.embedded === true;
  const triggerClass = () => cn(
    "flex w-full items-center justify-center gap-2 py-2.5 text-sm font-medium",
    codeOpen() ? "rounded-none border-t border-surface-border" : "rounded-b-xl",
    "text-ink-600 hover:text-ink-900",
    "bg-surface-overlay hover:bg-surface-dim",
    "outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500"
  );
  const currentContent = () => {
    const langs = local.languages;
    if (langs && langs.length > 0) {
      const idx = selectedIndex();
      return langs[idx]?.content ?? langs[0].content;
    }
    return local.content ?? "";
  };
  const effectiveContent = () => {
    if (local.alternateContent != null && showAlternate()) return local.alternateContent;
    return currentContent();
  };
  const currentLanguage = () => {
    const langs = local.languages;
    if (langs && langs.length > 0) {
      const idx = selectedIndex();
      const item = langs[idx] ?? langs[0];
      return item?.language ?? item?.id ?? "text";
    }
    return local.language ?? "text";
  };
  const selectedLanguageItem = () => {
    const langs = local.languages ?? [];
    const idx = selectedIndex();
    return langs[idx] ?? langs[0];
  };
  const hasHeader = () => {
    const title = getHeaderTitle(local);
    const hasLangs = local.languages && local.languages.length > 1;
    const hasAlternate = local.alternateContent != null && local.alternateContent.trim() !== "";
    return !!(title || hasLangs || hasAlternate);
  };
  const lines = () => {
    const text = effectiveContent();
    return text.split(/\r?\n/);
  };
  const containerClass = () => {
    const base = primary() ? "bg-primary-600" : dark() ? "" : "bg-surface-raised";
    if (embedded()) return base;
    return cn(
      base,
      primary() ? "border border-primary-600/80" : "border border-surface-border"
    );
  };
  const containerStyle = () => dark() && !primary() ? { "background-color": "color-mix(in oklch, white 6%, #020b13)" } : void 0;
  const headerBorderClass = () => primary() ? "border-primary-500/60" : "border-surface-border";
  const headerTextClass = () => primary() ? "text-white/90" : "text-ink-500";
  const copyButtonClass = () => primary() ? "!border-0 !bg-transparent !shadow-none text-white/70 hover:!bg-white/15 hover:text-white focus-visible:ring-white/50" : "!border-0 !bg-transparent !shadow-none text-ink-500 hover:!bg-surface-overlay hover:text-ink-700";
  const lineNumClass = () => primary() ? "text-white/40" : "text-ink-400";
  const [codeEl, setCodeEl] = createSignal19(null);
  createEffect14(() => {
    const el = codeEl();
    if (!el) return;
    let cancelled = false;
    const content = effectiveContent();
    const _lang = currentLanguage();
    const h = local.highlighter;
    el.textContent = content;
    if (h) {
      Promise.resolve(h(content, _lang)).then((html) => {
        if (cancelled) return;
        el.innerHTML = html;
      }).catch((err) => {
      });
    }
    onCleanup11(() => {
      cancelled = true;
    });
  });
  const themeClass = () => primary() ? "code-block-primary" : dark() ? "code-block-dark" : "code-block";
  const codeContent = <>
			<Show26 when={hasHeader()}>
				<div
    class={cn(
      "flex items-center justify-between gap-2 px-3 py-2 border-b",
      headerBorderClass()
    )}
  >
					<div class="min-w-0 flex-1 flex items-center gap-2 truncate">
						<Show26 when={local.headerIcon}>
							<span class="shrink-0 flex items-center [&>svg]:size-4 [&>img]:size-4" aria-hidden="true">
								{local.headerIcon}
							</span>
						</Show26>
						<Show26 when={getHeaderTitle(local)}>
							<span
    class={cn(
      "text-xs font-medium truncate",
      headerTextClass()
    )}
  >
								{getHeaderTitle(local)}
							</span>
						</Show26>
					</div>
					<div class="flex shrink-0 items-center gap-2">
						<Show26 when={local.languages && local.languages.length > 1}>
							<PopoverRoot open={languageOpen()} onOpenChange={setLanguageOpen} align="end">
								<PopoverTrigger
    as="button"
    type="button"
    aria-label={zh() ? "\u8BED\u8A00" : "Language"}
    class={cn(
      "h-7 min-w-0 flex items-center gap-1.5 rounded border text-xs font-medium overflow-hidden cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500",
      primary() ? "bg-white/10 border-white/30 text-white hover:bg-white/15" : themeAuto() ? "bg-surface-raised border-surface-border text-ink-700 hover:bg-surface-overlay" : dark() ? "bg-surface-overlay border-surface-border text-ink-300 hover:bg-surface-dim" : "bg-surface-overlay border-surface-border text-ink-700 hover:bg-surface-dim"
    )}
  >
									<Show26 when={selectedLanguageItem()?.icon}>
										<span class="shrink-0 flex items-center pl-2 [&>svg]:size-3.5 [&>img]:size-3.5 text-inherit" aria-hidden="true">
											{typeof selectedLanguageItem().icon === "function" ? selectedLanguageItem().icon() : selectedLanguageItem().icon}
										</span>
									</Show26>
									<span class="min-w-0 flex-1 truncate text-left py-1 pr-1 pl-1.5">
										{selectedLanguageItem()?.label ?? ""}
									</span>
									{icons.chevronDown({ class: "h-3.5 w-3.5 shrink-0 mr-1.5 opacity-70", "aria-hidden": "true" })}
								</PopoverTrigger>
								<PopoverContent
    class={cn(
      "min-w-0 p-1 max-h-60 overflow-auto",
      primary() ? "bg-ink-900 border-white/20" : "bg-surface-raised border-surface-border"
    )}
  >
									<div class="flex flex-col" role="menu" aria-label={zh() ? "\u8BED\u8A00" : "Language"}>
										<For12 each={local.languages ?? []}>
											{(item, idx) => <button
    type="button"
    role="menuitemradio"
    aria-checked={selectedIndex() === idx()}
    class={cn(
      "w-full flex items-center gap-2 rounded px-2 py-1.5 text-left text-xs font-medium transition-colors",
      primary() ? "text-ink-200 hover:bg-white/10 hover:text-white" : themeAuto() ? "text-ink-700 hover:bg-surface-overlay" : dark() ? "text-ink-300 hover:bg-surface-overlay" : "text-ink-700 hover:bg-surface-overlay",
      selectedIndex() === idx() && "bg-primary-500/20 text-primary-600"
    )}
    onClick={() => {
      setSelectedIndex(idx());
      setLanguageOpen(false);
    }}
  >
													<Show26 when={item.icon && (typeof item.icon === "function" || selectedIndex() !== idx())}>
														<span class="shrink-0 flex items-center [&>svg]:size-3.5 [&>img]:size-3.5 text-inherit" aria-hidden="true">
															{typeof item.icon === "function" ? item.icon() : item.icon}
														</span>
													</Show26>
													<Show26 when={item.icon && typeof item.icon !== "function" && selectedIndex() === idx()}>
														<span class="w-3.5 shrink-0" aria-hidden="true" />
													</Show26>
													<span class="min-w-0 truncate">{item.label}</span>
												</button>}
										</For12>
									</div>
								</PopoverContent>
							</PopoverRoot>
						</Show26>
						<Show26 when={local.alternateContent != null && local.alternateContent.trim() !== ""}>
							<button
    type="button"
    onClick={() => setShowAlternate((p) => !p)}
    aria-pressed={showAlternate()}
    class={cn(
      "flex items-center gap-1.5 shrink-0 px-2 py-1 text-xs font-medium rounded transition-colors outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500",
      primary() ? "text-white/80 hover:bg-white/15 hover:text-white" : themeAuto() ? "text-ink-600 hover:bg-surface-overlay hover:text-ink-900" : dark() ? "text-ink-400 hover:bg-surface-overlay hover:text-ink-100" : "text-ink-600 hover:bg-surface-overlay hover:text-ink-900"
    )}
  >
								{showAlternate() ? zh() ? "\u5B8C\u6574\u4EE3\u7801" : "Full code" : zh() ? "\u4EC5\u7EC4\u4EF6" : "Component only"}
							</button>
						</Show26>
						<Copy
    text={effectiveContent()}
    display="icon-only"
    variant="ghost"
    size="sm"
    class={copyButtonClass()}
  />
					</div>
				</div>
			</Show26>

			<Show26 when={!hasHeader()}>
				<div
    class={cn(
      "absolute right-4 z-10 opacity-80 transition-opacity hover:opacity-100 focus-within:opacity-100",
      collapsible() ? "top-14" : "top-1/2 -translate-y-1/2"
    )}
  >
					<Copy
    text={effectiveContent()}
    display="icon-only"
    variant="ghost"
    size="sm"
    class={copyButtonClass()}
  />
				</div>
			</Show26>

			<pre
    data-torchui="code-block"
    class={cn(
      "w-full py-3 px-4 text-sm font-mono whitespace-pre overflow-x-auto overflow-y-auto outline-none",
      minHeight(),
      themeClass(),
      /* No text-* on pre: let Prism theme (or token CSS) color tokens; otherwise inherited color overrides .token */
      showLineNumbers() && "pl-0",
      local.preProps?.class
    )}
    {...local.preProps ? (() => {
      const { class: _, ...rest } = local.preProps;
      return rest;
    })() : {}}
  >
				<Show26
    when={showLineNumbers()}
    fallback={<code ref={setCodeEl} class={cn("block leading-5", `language-${currentLanguage()}`)} />}
  >
					<div class="flex min-w-0">
						<div
    class={cn(
      "select-none py-3 pr-3 pl-0 w-8 shrink-0 text-right text-xs font-mono tabular-nums",
      lineNumClass()
    )}
    aria-hidden="true"
  >
							<For12 each={lines()}>
								{(_, i) => {
    const num = i() + 1;
    const isHighlighted = () => highlightLines().includes(num);
    return <div
      class={cn(
        "leading-5",
        isHighlighted() && (primary() ? "bg-white/20 -mx-1 px-1 rounded" : "bg-surface-dim -mx-1 px-1 rounded")
      )}
    >
											{num}
										</div>;
  }}
							</For12>
						</div>
						<code
    ref={setCodeEl}
    class={cn("block flex-1 min-w-0 py-4 pr-4 pl-4 leading-6", `language-${currentLanguage()}`)}
  />
					</div>
				</Show26>
			</pre>
		</>;
  return <div
    ref={local.ref}
    data-torchui="code-block-container"
    class={cn(
      embedded() ? "overflow-hidden relative" : "rounded-lg overflow-hidden relative mt-4",
      !hasHeader() && !collapsible() && "group",
      themeClass(),
      containerClass(),
      local.class
    )}
    style={containerStyle()}
    {...others}
  >
			<Show26 when={collapsible()} fallback={codeContent}>
				<CollapsibleRoot open={codeOpen()} onOpenChange={setCodeOpen}>
					<CollapsibleTrigger class={triggerClass()}>
						{codeOpen() ? <>
								{icons.chevronUp({ class: "h-4 w-4", "aria-hidden": "true" })}
								{local.collapsibleLabelHide ?? (zh() ? "\u9690\u85CF\u4EE3\u7801" : "Hide code")}
							</> : <>
								{icons.chevronDown({ class: "h-4 w-4", "aria-hidden": "true" })}
								{local.collapsibleLabelShow ?? (zh() ? "\u663E\u793A\u4EE3\u7801" : "Show code")}
							</>}
					</CollapsibleTrigger>
					<CollapsibleContentStyled variant="minimal">
						{codeContent}
					</CollapsibleContentStyled>
				</CollapsibleRoot>
			</Show26>
		</div>;
}

// src/components/layout/Accordion.tsx
import { splitProps as splitProps41, onMount as onMount11 } from "solid-js";
import { Accordion as KobalteAccordion } from "@kobalte/core/accordion";
var AccordionRoot = KobalteAccordion;
var AccordionItem = KobalteAccordion.Item;
var AccordionHeader = KobalteAccordion.Header;
var AccordionTrigger = KobalteAccordion.Trigger;
var AccordionContent = KobalteAccordion.Content;
var accordionContentStyles = `
.accordion-content[data-expanded] {
	animation: torchui-accordion-down 200ms ease-out;
}
.accordion-content[data-closed] {
	animation: torchui-accordion-up 200ms ease-out;
}
@keyframes torchui-accordion-down {
	from { height: 0; opacity: 0; }
	to { height: var(--kb-accordion-content-height); opacity: 1; }
}
@keyframes torchui-accordion-up {
	from { height: var(--kb-accordion-content-height); opacity: 1; }
	to { height: 0; opacity: 0; }
}
`;
var ACCORDION_STYLE_ID = "torchui-accordion-styles";
function ensureAccordionStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(ACCORDION_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = ACCORDION_STYLE_ID;
  style.textContent = accordionContentStyles;
  document.head.appendChild(style);
}
function AccordionContentStyled(props) {
  const [local, others] = splitProps41(props, ["class", "children"]);
  onMount11(ensureAccordionStyles);
  return <KobalteAccordion.Content
    class={cn(
      "accordion-content overflow-hidden border-t border-surface-border bg-surface-base/50",
      local.class
    )}
    {...others}
  >
			<div class="px-4 py-3 text-sm text-ink-700">{local.children}</div>
		</KobalteAccordion.Content>;
}
function AccordionTriggerStyled(props) {
  const [local, others] = splitProps41(props, ["class", "children"]);
  const icons = useIcons();
  return <KobalteAccordion.Header as="h3" class="flex">
			<KobalteAccordion.Trigger
    class={cn(
      "flex flex-1 items-center justify-between gap-2 px-4 py-3 text-left text-sm font-medium text-ink-800",
      "hover:bg-surface-dim",
      "data-[expanded]:bg-surface-dim",
      "data-[expanded]:[&>svg]:rotate-180",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      local.class
    )}
    {...others}
  >
				{local.children}
				{icons.chevronDown({ class: "h-4 w-4 shrink-0 transition-transform duration-200", "aria-hidden": "true" })}
			</KobalteAccordion.Trigger>
		</KobalteAccordion.Header>;
}
function AccordionItemStyled(props) {
  const [local, others] = splitProps41(props, ["class", "children"]);
  return <KobalteAccordion.Item
    class={cn(
      "w-full overflow-hidden border border-surface-border first:rounded-t-lg last:rounded-b-lg [&:not(:first-child)]:-mt-px",
      "data-[disabled]:opacity-60 data-[disabled]:cursor-not-allowed",
      local.class
    )}
    {...others}
  >
			{local.children}
		</KobalteAccordion.Item>;
}

// src/components/overlays/Tooltip.tsx
import { splitProps as splitProps42 } from "solid-js";
import { Tooltip as KobalteTooltip } from "@kobalte/core/tooltip";
var TooltipRoot = KobalteTooltip;
var TooltipTrigger = KobalteTooltip.Trigger;
var TooltipPortal = KobalteTooltip.Portal;
var TooltipContentPrimitive = KobalteTooltip.Content;
var TooltipArrow = KobalteTooltip.Arrow;
var _KbContent = KobalteTooltip.Content;
function TooltipContent(props) {
  const [local, others] = splitProps42(props, ["class", "children"]);
  return <KobalteTooltip.Portal>
			<_KbContent
    class={cn(
      "z-[80] max-w-xs rounded-md border border-surface-border bg-surface-raised px-3 py-2 text-sm text-ink-900 shadow-md",
      local.class
    )}
    {...others}
  >
				{local.children}
			</_KbContent>
		</KobalteTooltip.Portal>;
}
var Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent
});

export {
  Skeleton,
  shapeClasses,
  avatarSizeClasses,
  neutralColorClass,
  Avatar,
  normalizeHex,
  TablePanel,
  LocaleProvider,
  useLocaleConfig,
  resolveLocale,
  defaultIcons,
  useIcons,
  IconsProvider,
  inputSizeConfig,
  ComponentSizeProvider,
  useComponentSize,
  Button,
  ButtonGroup,
  useCopyToClipboard,
  Copy,
  Link,
  Input,
  mergeRefs,
  TextArea,
  Select,
  Autocomplete,
  createSortableDrag,
  MultiSelect,
  Checkbox,
  Switch,
  RadioGroup,
  NumberField,
  CodeInput,
  Slider,
  Progress,
  Dialog,
  FileUpload,
  DatePicker,
  DateRangePicker,
  TimePicker,
  ColorPicker,
  FieldPicker,
  ReorderableList,
  Alert,
  AlertDialog,
  Divider,
  Drawer,
  WizardStep,
  VerticalWizard,
  WizardStepper,
  Wizard,
  PromptWithAction,
  Section,
  Inline,
  Form,
  BlockQuote,
  PageHeading,
  Card,
  Container,
  Grid,
  FormActions,
  CollapsibleRoot,
  CollapsibleTrigger,
  CollapsibleContent,
  CollapsibleContentStyled,
  CollapsibleTriggerStyled,
  Collapsible,
  PopoverRoot,
  PopoverTrigger,
  PopoverAnchor,
  PopoverPortal,
  PopoverContentPrimitive,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  Popover,
  CodeBlock,
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  AccordionContentStyled,
  AccordionTriggerStyled,
  AccordionItemStyled,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipContentPrimitive,
  TooltipArrow,
  TooltipContent,
  Tooltip,
  RelativeDateDefaultInput,
  DarkModeToggle
};
