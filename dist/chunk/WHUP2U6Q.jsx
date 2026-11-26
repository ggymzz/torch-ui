import {
  Pagination
} from "./WGCD63XG.jsx";
import {
  AlertDialog,
  Avatar,
  Button,
  Dialog,
  Input,
  avatarSizeClasses,
  neutralColorClass,
  normalizeHex,
  resolveLocale,
  shapeClasses,
  useIcons,
  useLocaleConfig
} from "./5X6JRKCS.jsx";
import {
  cn
} from "./N5KQYWCA.jsx";

// src/components/data-display/ColorSwatch.tsx
import { splitProps, createMemo } from "solid-js";
import { ColorSwatch as KobalteColorSwatch } from "@kobalte/core/color-swatch";
import { parseColor } from "@kobalte/core/colors";
var variantClass = {
  rounded: "rounded-lg",
  circle: "rounded-full",
  square: "rounded-none"
};
function ColorSwatch(props) {
  const [local, a11y, rest] = splitProps(props, ["value", "variant", "colorName", "class", "style"], ["aria-label"]);
  const normalized = createMemo(() => normalizeHex(local.value ?? ""));
  const color = createMemo(() => {
    const hex = normalized();
    if (!hex) return parseColor("hsl(0, 0%, 50%)");
    try {
      return parseColor(hex);
    } catch {
      if (false) ;
      return parseColor("hsl(0, 0%, 50%)");
    }
  });
  const shapeClass = createMemo(() => variantClass[local.variant ?? "rounded"]);
  return <KobalteColorSwatch
    value={color()}
    colorName={local.colorName}
    aria-label={a11y["aria-label"] ?? local.colorName ?? normalized() ?? "Color swatch"}
    class={cn(
      "block shrink-0 border-2 border-surface-border shadow-sm",
      shapeClass(),
      local.class
    )}
    style={local.style}
    {...rest}
  />;
}

// src/components/data-display/Persona.tsx
import { splitProps as splitProps2, createMemo as createMemo2 } from "solid-js";
var sizeStyles = {
  sm: { gap: "gap-2", name: "text-sm", secondary: "text-xs" },
  md: { gap: "gap-3", name: "text-sm", secondary: "text-sm" },
  lg: { gap: "gap-4", name: "text-base", secondary: "text-sm" }
};
function Persona(props) {
  const [local, others] = splitProps2(props, [
    "name",
    "imageUrl",
    "secondary",
    "size",
    "shape",
    "color",
    "class",
    "children"
  ]);
  const size = () => local.size ?? "md";
  const styles = createMemo2(() => sizeStyles[size()]);
  return <div
    class={cn(
      "flex items-center min-w-0",
      styles().gap,
      local.class
    )}
    {...others}
  >
			<Avatar
    decorative
    name={local.name}
    imageUrl={local.imageUrl}
    size={size()}
    shape={local.shape}
    color={local.color}
  />
			<div class="min-w-0 flex-1">
				<div class={cn("font-medium text-ink-900 truncate", styles().name)}>
					{local.name}
				</div>
				{local.secondary && <div class={cn("text-ink-500 truncate", styles().secondary)}>
						{local.secondary}
					</div>}
			</div>
			{local.children}
		</div>;
}

// src/components/data-display/Badge.tsx
import { splitProps as splitProps3 } from "solid-js";
var variantClasses = {
  neutral: "bg-ink-400",
  primary: "bg-primary-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
  danger: "bg-danger-500",
  info: "bg-info-600"
};
var sizeClasses = {
  sm: { dot: "size-2.5", pill: "h-4 min-w-4 px-0.5 text-[10px]", icon: "h-4 min-w-4 [&>svg]:size-2.5" },
  md: { dot: "size-3", pill: "h-5 min-w-5 px-1 text-xs", icon: "h-5 min-w-5 [&>svg]:size-3" },
  lg: { dot: "size-4", pill: "h-6 min-w-6 px-1.5 text-sm", icon: "h-6 min-w-6 [&>svg]:size-4" }
};
function Badge(props) {
  const [local, others] = splitProps3(props, ["variant", "size", "icon", "class", "children", "decorative"]);
  const variant = () => local.variant ?? "neutral";
  const size = () => local.size ?? "md";
  const hasIcon = () => local.icon != null;
  const hasContent = () => local.children != null;
  const usePill = () => hasIcon() || hasContent();
  const isDecorative = () => {
    if (local.decorative === true) return true;
    if (local.decorative === false) return false;
    return !usePill();
  };
  const hasA11yName = () => {
    const o = others;
    return o["aria-label"] != null || o["aria-labelledby"] != null;
  };
  return <span
    aria-hidden={isDecorative() && !hasA11yName() ? "true" : void 0}
    class={cn(
      "inline-flex shrink-0 items-center justify-center rounded-full border-2 border-surface-base font-medium leading-none text-white",
      usePill() && "shadow-sm",
      hasIcon() && hasContent() && "gap-0.5",
      variantClasses[variant()],
      usePill() ? hasIcon() && !hasContent() ? sizeClasses[size()].icon : sizeClasses[size()].pill : sizeClasses[size()].dot,
      local.class
    )}
    {...others}
  >
			{local.icon}
			{local.children}
		</span>;
}

// src/components/data-display/AvatarGroup.tsx
import { For, createMemo as createMemo3, splitProps as splitProps4 } from "solid-js";
var overlapClasses = {
  sm: "-space-x-1.5",
  md: "-space-x-2",
  lg: "-space-x-3"
};
var STACK_RING = { offset: false };
function AvatarGroup(props) {
  const [local, others] = splitProps4(props, [
    "avatars",
    "max",
    "size",
    "shape",
    "overlap",
    "stacking",
    "class"
  ]);
  const overlap = () => local.overlap ?? "md";
  const size = () => local.size ?? "md";
  const shape = () => local.shape ?? "circle";
  const stacking = () => local.stacking ?? "last-on-top";
  const displayed = createMemo3(() => {
    const list = [...local.avatars];
    const m = local.max;
    if (m == null || list.length <= m) return { items: list, overflow: 0 };
    return {
      items: list.slice(0, m),
      overflow: list.length - m
    };
  });
  const items = createMemo3(() => displayed().items);
  const overflow = createMemo3(() => displayed().overflow);
  const count = () => items().length;
  return <div
    role="group"
    class={cn(
      "inline-flex flex-row items-center",
      overlapClasses[overlap()],
      local.class
    )}
    {...others}
  >
			<For each={items()}>
				{(item, idx) => {
    const zIndex = () => stacking() === "first-on-top" ? count() - idx() : idx() + 1;
    return <Avatar
      name={item.name}
      imageUrl={item.imageUrl}
      size={size()}
      shape={shape()}
      ring={STACK_RING}
      class="relative"
      style={{ "z-index": zIndex() }}
    />;
  }}
			</For>
			{overflow() > 0 && <span
    role="img"
    aria-label={`${overflow()} more avatars`}
    class={cn(
      "relative inline-flex shrink-0 items-center justify-center font-medium ring-2 ring-surface-base",
      neutralColorClass,
      shapeClasses[shape()],
      avatarSizeClasses[size()]
    )}
    style={{ "z-index": stacking() === "first-on-top" ? 0 : count() + 1 }}
    title={`+${overflow()} more`}
  >
					+{overflow()}
				</span>}
		</div>;
}

// src/components/data-display/Carousel.tsx
import { createSignal, createMemo as createMemo4, createEffect, on, onMount, onCleanup, splitProps as splitProps5, For as For2, Show } from "solid-js";
function Carousel(props) {
  const [local, others] = splitProps5(props, [
    "slides",
    "autoPlayInterval",
    "showDots",
    "showArrows",
    "dotsPosition",
    "dotsVariant",
    "dotsBgClass",
    "dotsOverlay",
    "progressBarColor",
    "aria-label",
    "class"
  ]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const [currentSlide, setCurrentSlide] = createSignal(0);
  const [progressBarReady, setProgressBarReady] = createSignal(false);
  const autoPlayInterval = () => local.autoPlayInterval ?? 5e3;
  const [autoPlayReset, setAutoPlayReset] = createSignal(0);
  const slides = createMemo4(() => local.slides);
  createEffect(on(
    () => slides().length,
    (len) => {
      setCurrentSlide((i) => Math.min(i, Math.max(len - 1, 0)));
    }
  ));
  createEffect(() => {
    autoPlayReset();
    const interval = autoPlayInterval();
    const len = slides().length;
    if (interval > 0 && len > 1) {
      const id = setInterval(nextSlide, interval);
      onCleanup(() => clearInterval(id));
    }
    restartProgressBar();
  });
  function nextSlide() {
    const len = slides().length;
    if (len === 0) return;
    setCurrentSlide((prev) => (prev + 1) % len);
    restartProgressBar();
  }
  function restartProgressBar() {
    setProgressBarReady(false);
    requestAnimationFrame(() => setProgressBarReady(true));
  }
  function goToSlide(index) {
    const len = slides().length;
    if (len === 0) return;
    const i = (index % len + len) % len;
    setCurrentSlide(i);
    restartProgressBar();
    setAutoPlayReset((n) => n + 1);
  }
  function goPrev() {
    goToSlide(currentSlide() - 1);
  }
  function goNext() {
    goToSlide(currentSlide() + 1);
  }
  onMount(() => {
    const styleId = "torch-carousel-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `@keyframes carouselProgressBar { from { width: 0%; } to { width: 100%; } }`;
      document.head.appendChild(style);
    }
    const raf = requestAnimationFrame(() => setProgressBarReady(true));
    onCleanup(() => cancelAnimationFrame(raf));
  });
  const dotsAlign = () => {
    const p = local.dotsPosition ?? "start";
    return p === "end" ? "justify-end" : p === "center" ? "justify-center" : "justify-start";
  };
  return <div
    role="region"
    aria-roledescription="carousel"
    aria-label={local["aria-label"] ?? "Carousel"}
    {...others}
    class={cn("relative w-full", local.class)}
  >
			{
    /* Track: inline styles so overflow/position always apply regardless of Tailwind scan */
  }
			<div
    class="min-h-0 transition-opacity duration-500"
    style={{ position: "relative", width: "100%", overflow: "hidden" }}
  >
				<For2 each={slides()}>
					{(slide, index) => {
    const isActive = () => index() === currentSlide();
    return <div
      aria-hidden={!isActive() ? "true" : void 0}
      class={cn("transition-opacity duration-500", isActive() ? "pointer-events-auto" : "pointer-events-none")}
      style={isActive() ? {
        position: "relative",
        opacity: 1,
        visibility: "visible",
        "z-index": 2
      } : {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
        visibility: "hidden",
        "z-index": 1
      }}
    >
								{slide.content}
							</div>;
  }}
				</For2>
			</div>

			<Show when={local.showArrows === true && slides().length > 1}>
				<button
    type="button"
    onClick={goPrev}
    class={cn(
      "absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2",
      "bg-surface-raised/80 hover:bg-surface-raised text-ink-700 shadow-sm",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
    )}
    aria-label={zh() ? "\u4E0A\u4E00\u5F20" : "Previous slide"}
  >
					{icons.chevronLeft({ class: "h-4 w-4", "aria-hidden": "true" })}
				</button>
				<button
    type="button"
    onClick={goNext}
    class={cn(
      "absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2",
      "bg-surface-raised/80 hover:bg-surface-raised text-ink-700 shadow-sm",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
    )}
    aria-label={zh() ? "\u4E0B\u4E00\u5F20" : "Next slide"}
  >
					{icons.chevronRight({ class: "h-4 w-4", "aria-hidden": "true" })}
				</button>
			</Show>

			<Show when={local.showDots !== false && slides().length > 1}>
				<div
    class={cn(
      local.dotsOverlay ? cn("absolute bottom-3 left-0 right-0 z-10 flex gap-2 px-5 py-2", dotsAlign()) : local.dotsBgClass ? cn("flex gap-2 px-4 py-3 rounded-b-xl", local.dotsBgClass, dotsAlign()) : cn("flex gap-2 my-3", dotsAlign())
    )}
  >
					<For2 each={slides()}>
						{(_, index) => <button
    type="button"
    onClick={() => goToSlide(index())}
    class={cn(
      "h-2 rounded-full transition-all duration-300",
      index() === currentSlide() ? "w-8 relative overflow-hidden" : "w-2"
    )}
    style={{
      "background-color": local.dotsVariant === "light" || !!local.dotsBgClass ? "rgba(255,255,255,0.4)" : "var(--color-ink-400)"
    }}
    aria-label={zh() ? `\u8DF3\u8F6C\u5230\u7B2C ${index() + 1} \u5F20` : `Go to slide ${index() + 1}`}
    aria-current={index() === currentSlide() ? "true" : void 0}
  >
								<Show when={index() === currentSlide() && autoPlayInterval() > 0}>
									<div
    class="absolute top-0 left-0 h-full rounded-full"
    style={progressBarReady() ? {
      "background-color": local.progressBarColor ?? (local.dotsVariant === "light" || !!local.dotsBgClass ? "white" : "var(--color-ink-700)"),
      animation: `carouselProgressBar ${autoPlayInterval()}ms linear forwards`,
      "animation-fill-mode": "forwards"
    } : {
      "background-color": local.progressBarColor ?? (local.dotsVariant === "light" || !!local.dotsBgClass ? "white" : "var(--color-ink-700)"),
      width: "0%"
    }}
  />
								</Show>
							</button>}
					</For2>
				</div>
			</Show>

			</div>;
}

// src/components/data-display/EmptyState.tsx
import { Show as Show2, splitProps as splitProps6, createUniqueId } from "solid-js";
function EmptyState(props) {
  const [local, rest] = splitProps6(props, [
    "title",
    "description",
    "icon",
    "actions",
    "announce",
    "class"
  ]);
  const uid = createUniqueId();
  const titleId = `empty-title-${uid}`;
  const descId = `empty-desc-${uid}`;
  return <div
    {...rest}
    class={cn(
      "flex flex-col items-center justify-center gap-4 px-6 py-16 text-center",
      local.class
    )}
    role={local.announce ? "status" : void 0}
    aria-live={local.announce ? "polite" : void 0}
    aria-labelledby={local.announce ? titleId : void 0}
    aria-describedby={local.announce && local.description ? descId : void 0}
  >
			<Show2 when={local.icon}>
				<div
    class="flex h-16 w-16 items-center justify-center rounded-full bg-surface-overlay text-ink-400"
    aria-hidden="true"
  >
					{local.icon}
				</div>
			</Show2>
			<div class="space-y-1">
				<h3 id={titleId} class="text-base font-semibold text-ink-900">{local.title}</h3>
				<Show2 when={local.description}>
					<p id={descId} class="max-w-sm text-sm text-ink-500">{local.description}</p>
				</Show2>
			</div>
			<Show2 when={local.actions}>
				<div class="flex flex-wrap items-center justify-center gap-2">
					{local.actions}
				</div>
			</Show2>
		</div>;
}

// src/components/data-display/Tag.tsx
import { splitProps as splitProps7, mergeProps, Show as Show3, createMemo as createMemo5 } from "solid-js";
var tagVariants = {
  neutral: "bg-surface-raised text-ink-600 border-surface-border",
  primary: "bg-primary-50 text-primary-700 border-primary-100",
  success: "bg-success-50 text-success-700 border-success-100",
  warning: "bg-warning-50 text-warning-700 border-warning-100",
  danger: "bg-danger-50 text-danger-700 border-danger-100",
  info: "bg-info-50 text-info-700 border-info-100"
};
var tagSolidVariants = {
  neutral: "bg-surface-base text-ink-900 border-surface-border",
  primary: "bg-primary-500 text-white border-primary-600",
  success: "bg-success-500 text-white border-success-600",
  warning: "bg-warning-500 text-white border-warning-600",
  danger: "bg-danger-500 text-white border-danger-600",
  info: "bg-info-500 text-white border-info-600"
};
var tagSizes = {
  sm: "px-2 py-0.5 text-[11px]",
  md: "px-2.5 py-0.5 text-xs",
  lg: "px-3 py-1 text-sm",
  xl: "px-3.5 py-1.5 text-base"
};
function Tag(rawProps) {
  const props = mergeProps({ variant: "neutral", size: "md", visualStyle: "default" }, rawProps);
  const [local, others] = splitProps7(props, ["variant", "size", "statusColor", "statusLabel", "color", "visualStyle", "style", "class", "children", "iconStart", "iconEnd"]);
  const variant = () => local.variant;
  const size = () => local.size;
  const tagStyle = () => local.visualStyle;
  const customStyle = createMemo5(() => {
    const c = local.color;
    if (!c) return {};
    return {
      "background-color": `color-mix(in srgb, ${c} 10%, transparent)`,
      "border-color": `color-mix(in srgb, ${c} 25%, transparent)`,
      color: c
    };
  });
  const mergedStyle = createMemo5(() => {
    const base = customStyle();
    const inlineStyle = local.style;
    return typeof inlineStyle === "object" && inlineStyle != null ? { ...base, ...inlineStyle } : base;
  });
  return <span
    class={cn(
      "inline-flex items-center gap-1 rounded-full border font-medium",
      !local.color && (tagStyle() === "solid" ? tagSolidVariants[variant()] : tagVariants[variant()]),
      tagSizes[size()],
      local.class
    )}
    style={mergedStyle()}
    {...others}
  >
			<Show3 when={local.statusColor}>
				<span
    class="size-2 shrink-0 rounded-full ring-1 ring-surface-border"
    style={{ "background-color": local.statusColor }}
    aria-hidden={local.statusLabel ? void 0 : "true"}
    role={local.statusLabel ? "img" : void 0}
    aria-label={local.statusLabel}
  />
			</Show3>
			<Show3 when={local.iconStart}>{local.iconStart}</Show3>
			{local.children}
			<Show3 when={local.iconEnd}>{local.iconEnd}</Show3>
		</span>;
}

// src/components/data-display/Kbd.tsx
import { For as For3, Show as Show4, splitProps as splitProps8 } from "solid-js";
var KEY = {
  Cmd: "\u2318",
  Shift: "\u21E7",
  Option: "\u2325",
  Alt: "\u2325",
  Ctrl: "\u2303",
  Enter: "\u21B5",
  Backspace: "\u232B",
  Delete: "\u2326",
  Escape: "Esc",
  Tab: "\u21E5",
  Up: "\u2191",
  Down: "\u2193",
  Left: "\u2190",
  Right: "\u2192"
};
var variantClasses2 = {
  default: [
    "bg-surface-raised border border-surface-border border-b-2",
    "shadow-sm"
  ].join(" "),
  flat: "bg-surface-overlay border border-surface-border"
};
var sizeClasses2 = {
  sm: "h-5 min-w-5 px-1 text-[10px] rounded",
  md: "h-6 min-w-6 px-1.5 text-[11px] rounded",
  lg: "h-7 min-w-7 px-2 text-xs rounded-md"
};
function Kbd(props) {
  const [local, others] = splitProps8(props, ["variant", "size", "class", "children"]);
  const variant = () => local.variant ?? "default";
  const size = () => local.size ?? "md";
  return <kbd
    class={cn(
      "inline-flex items-center justify-center font-mono font-medium leading-none text-ink-700",
      variantClasses2[variant()],
      sizeClasses2[size()],
      local.class
    )}
    {...others}
  >
			{local.children}
		</kbd>;
}
function KbdShortcut(props) {
  const sep = () => props.separator ?? "+";
  return <span class={cn("inline-flex items-center gap-0.5", props.class)}>
			<For3 each={props.keys}>
				{(key, i) => <>
						<Show4 when={i() > 0}>
							<span
    class="mx-0.5 select-none font-sans text-[10px] text-ink-500"
    aria-hidden="true"
  >
								{sep()}
							</span>
						</Show4>
						<Kbd variant={props.variant} size={props.size}>
							{key}
						</Kbd>
					</>}
			</For3>
		</span>;
}

// src/components/data-display/StatCard.tsx
import { Show as Show5, splitProps as splitProps9, createMemo as createMemo6 } from "solid-js";
function StatCard(props) {
  const [local, others] = splitProps9(props, [
    "label",
    "subtitle",
    "icon",
    "topRight",
    "value",
    "helperText",
    "trendLabel",
    "trendSubLabel",
    "trendVariant",
    "trendIcon",
    "emptyText",
    "body",
    "chart",
    "chartPosition",
    "chartA11yLabel",
    "chartHeight",
    "chartWidth",
    "iconLabel",
    "class"
  ]);
  const chartOnRight = () => local.chart != null && local.chartPosition === "right";
  const hasHeaderContent = () => local.icon != null || local.topRight != null;
  const contentMt = () => hasHeaderContent() ? "mt-5" : "mt-2";
  const hasValue = () => local.value != null && local.value !== "";
  const trendClasses = createMemo6(() => {
    if (local.trendVariant === "negative") return "text-danger-600 dark:text-danger-400";
    if (local.trendVariant === "neutral") return "text-ink-600";
    return "text-success-600 dark:text-success-400";
  });
  const ValueOrEmpty = (p) => <Show5
    when={hasValue()}
    fallback={<div class="text-xs font-normal text-ink-400">
					{local.emptyText ?? "No data yet"}
				</div>}
  >
			<div class={cn(
    "font-bold tracking-tight text-ink-900",
    p.small ? "text-2xl sm:text-3xl" : "text-3xl"
  )}>
				{local.value}
			</div>
		</Show5>;
  const TrendBlock = (p) => <>
			<Show5 when={local.helperText}>
				<div class="mt-1 text-sm text-ink-500">{local.helperText}</div>
			</Show5>
			<Show5 when={local.trendLabel}>
				<div class={cn(p.gap ?? "mt-3")}>
					<div class="flex items-center gap-1.5 text-sm font-medium">
						<Show5 when={local.trendIcon}>
							<span class={cn("flex shrink-0", trendClasses())}>{local.trendIcon}</span>
						</Show5>
						<span class={cn("whitespace-nowrap", trendClasses())}>{local.trendLabel}</span>
					</div>
					<Show5 when={local.trendSubLabel}>
						<div class="mt-0.5 text-xs text-ink-500">{local.trendSubLabel}</div>
					</Show5>
				</div>
			</Show5>
		</>;
  return <div
    class={cn(
      "flex flex-col rounded-2xl border border-surface-border bg-surface-raised p-5 shadow-sm",
      local.class
    )}
    {...others}
  >
			{
    /* Top row: optional icon + label, optional topRight */
  }
			<div class="flex items-start justify-between gap-3">
				<div class="min-w-0 flex-1">
					<div class="flex items-center gap-2">
						<Show5 when={local.icon}>
							<span
    class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg text-[0]"
    role={local.iconLabel ? "img" : void 0}
    aria-label={local.iconLabel}
  >
								{local.icon}
							</span>
						</Show5>
						<div class="min-w-0">
							<div class="text-sm font-semibold text-ink-700">{local.label}</div>
							<Show5 when={local.subtitle}>
								<div class="mt-0.5 text-xs text-ink-500">{local.subtitle}</div>
							</Show5>
						</div>
					</div>
				</div>
				<Show5 when={local.topRight}>
					<div class="shrink-0">{local.topRight}</div>
				</Show5>
			</div>

			{
    /* Main content: when chart on right, use two columns; otherwise single column */
  }
			<Show5
    when={chartOnRight()}
    fallback={<>
						<div class={cn(contentMt(), "flex-1")}>
							<ValueOrEmpty />
							<TrendBlock />
							<Show5 when={local.body}>
								<div class="mt-3">{local.body}</div>
							</Show5>
						</div>
						<Show5 when={local.chart != null && local.chartPosition !== "right"}>
							<div
      class={cn("mt-auto pt-3 w-full min-w-0", local.chartHeight ?? "h-10")}
      aria-hidden={local.chartA11yLabel ? void 0 : "true"}
      role={local.chartA11yLabel ? "img" : void 0}
      aria-label={local.chartA11yLabel}
    >
								{local.chart}
							</div>
						</Show5>
					</>}
  >
				<div class={cn(contentMt(), "flex gap-4")}>
					<div class="min-w-0 flex-1">
						<ValueOrEmpty small />
						<TrendBlock gap="mt-2" />
						<Show5 when={local.body}>
							<div class="mt-3">{local.body}</div>
						</Show5>
					</div>
					<div
    class={cn(local.chartHeight ?? "h-20", local.chartWidth ?? "w-28 sm:w-36", "shrink-0")}
    aria-hidden={local.chartA11yLabel ? void 0 : "true"}
    role={local.chartA11yLabel ? "img" : void 0}
    aria-label={local.chartA11yLabel}
  >
						{local.chart}
					</div>
				</div>
			</Show5>
		</div>;
}

// src/components/data-display/Timeline.tsx
import { Show as Show6, For as For4, splitProps as splitProps10, createMemo as createMemo7 } from "solid-js";
var statusDotClass = {
  completed: "bg-success-500 text-white",
  active: "bg-primary-500 text-white ring-4 ring-primary-500/20",
  pending: "bg-surface-raised text-ink-400 border-2 border-surface-border",
  error: "bg-danger-500 text-white"
};
var statusConnectorClass = {
  completed: "border-success-300",
  active: "border-primary-300",
  pending: "border-surface-border",
  error: "border-danger-300"
};
function DefaultDotIcon(props) {
  const icons = useIcons();
  if (props.status === "completed") return icons.check({ class: "h-3 w-3", "aria-hidden": "true" });
  if (props.status === "error") return icons.close({ class: "h-3 w-3", "aria-hidden": "true" });
  if (props.status === "active") {
    return <span class="block h-2 w-2 rounded-full bg-white" />;
  }
  return null;
}
function Timeline(props) {
  const [local, others] = splitProps10(props, [
    "items",
    "variant",
    "connector",
    "showConnector",
    "timeLeft",
    "class"
  ]);
  const variant = () => local.variant ?? "default";
  const connector = () => local.connector ?? "solid";
  const showConnector = () => local.showConnector !== false;
  const timeLeft = () => local.timeLeft ?? false;
  const compact = createMemo7(() => variant() === "compact");
  const outlined = createMemo7(() => variant() === "outlined");
  const connectorBorderStyle = createMemo7(() => {
    const style = connector();
    if (style === "dashed") return "border-dashed";
    if (style === "dotted") return "border-dotted";
    return "border-solid";
  });
  return <div
    class={cn("relative", local.class)}
    {...others}
  >
			<ol class="list-none">
				<For4 each={local.items}>
					{(item, idx) => {
    const isLast = () => idx() === local.items.length - 1;
    const status = () => item.status ?? "pending";
    const dotClass = () => item.color ? `${item.color} text-white` : statusDotClass[status()];
    return <li class={cn("relative flex", timeLeft() ? "flex-row-reverse" : "flex-row", compact() ? "gap-3" : "gap-4")}>
								{
      /* Left side: timestamp (when timeLeft) */
    }
								<Show6 when={timeLeft() && item.time}>
									<div class="w-28 shrink-0 pt-0.5 text-right">
										<span class="text-xs text-ink-400">{item.time}</span>
									</div>
								</Show6>

								{
      /* Center: dot + connector */
    }
								<div class={cn("flex flex-col items-center", timeLeft() ? "mx-0" : "")}>
									{
      /* Dot */
    }
									<div
      class={cn(
        "relative z-10 flex shrink-0 items-center justify-center rounded-full transition-all",
        compact() ? "h-5 w-5" : "h-8 w-8",
        dotClass(),
        outlined() && "ring-2 ring-offset-2 ring-offset-surface-base"
      )}
      aria-hidden="true"
    >
										<Show6 when={item.icon} fallback={<DefaultDotIcon status={status()} />}>
											<span class={cn("flex items-center justify-center", compact() ? "[&>svg]:h-2.5 [&>svg]:w-2.5" : "[&>svg]:h-4 [&>svg]:w-4")}>
												{item.icon}
											</span>
										</Show6>
									</div>

									{
      /* Connector line */
    }
									<Show6 when={showConnector() && !isLast()}>
										<div
      class={cn(
        "flex-1 border-l-2 my-1",
        connectorBorderStyle(),
        item.color ? "border-surface-border" : statusConnectorClass[status()]
      )}
      style={{ "min-height": compact() ? "1rem" : "1.5rem" }}
      aria-hidden="true"
    />
									</Show6>
								</div>

								{
      /* Right side: content */
    }
								<div
      class={cn(
        "min-w-0 flex-1",
        !isLast() ? compact() ? "pb-4" : "pb-6" : "pb-0",
        timeLeft() ? "text-right" : ""
      )}
    >
									{
      /* Title row */
    }
									<div class={cn("flex items-start gap-2", timeLeft() ? "flex-row-reverse" : "flex-row")}>
										<span class={cn("font-medium text-ink-900 leading-none text-sm")}>
											{item.title}
										</span>
										<Show6 when={!timeLeft() && item.time}>
											<span class="shrink-0 text-xs text-ink-400 mt-0.5">{item.time}</span>
										</Show6>
									</div>

									{
      /* Description */
    }
									<Show6 when={item.description}>
										<div class={cn("mt-1 text-ink-500 leading-relaxed", compact() ? "text-xs" : "text-sm")}>
											{item.description}
										</div>
									</Show6>

									{
      /* Extra content slot */
    }
									<Show6 when={item.content}>
										<div class="mt-2">
											{item.content}
										</div>
									</Show6>
								</div>
							</li>;
  }}
				</For4>
			</ol>
		</div>;
}

// src/components/data-display/TreeView.tsx
import { Show as Show7, For as For5, createSignal as createSignal2, splitProps as splitProps11 } from "solid-js";
function TreeView(props) {
  const [local, others] = splitProps11(props, [
    "nodes",
    "selected",
    "onSelect",
    "defaultSelected",
    "expanded",
    "onExpandedChange",
    "defaultExpanded",
    "indent",
    "showLines",
    "class"
  ]);
  const icons = useIcons();
  const [internalSelected, setInternalSelected] = createSignal2(
    local.defaultSelected
  );
  const [internalExpanded, setInternalExpanded] = createSignal2(
    local.defaultExpanded ?? []
  );
  const selectedId = () => local.selected ?? internalSelected();
  const expandedIds = () => local.expanded ?? internalExpanded();
  const isSelected = (id) => selectedId() === id;
  const isExpanded = (id) => expandedIds().includes(id);
  const handleSelect = (id) => {
    if (local.selected === void 0) setInternalSelected(id);
    local.onSelect?.(id);
  };
  const toggleExpand = (id) => {
    const current = expandedIds();
    const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
    if (local.expanded === void 0) setInternalExpanded(next);
    local.onExpandedChange?.(next);
  };
  const indent = () => local.indent ?? 16;
  const showLines = () => local.showLines !== false;
  const renderNodes = (nodes, level = 0) => <ul role={level === 0 ? "tree" : "group"} class="list-none">
			<For5 each={nodes}>
				{(node) => {
    const hasChildren = () => (node.children?.length ?? 0) > 0;
    const expanded = () => isExpanded(node.id);
    const selected = () => isSelected(node.id);
    return <li role="treeitem" aria-expanded={hasChildren() ? expanded() ? "true" : "false" : void 0} aria-selected={selected() ? "true" : "false"}>
							<button
      type="button"
      disabled={node.disabled}
      data-tree-item
      data-tree-level={level}
      onClick={() => {
        if (node.disabled) return;
        if (hasChildren()) toggleExpand(node.id);
        handleSelect(node.id);
      }}
      onKeyDown={(e) => {
        if (node.disabled) return;
        const btn = e.currentTarget;
        const root = btn.closest("[data-tree-root]");
        const treeBtns = () => root ? Array.from(root.querySelectorAll("button[data-tree-item]:not(:disabled)")) : [];
        if (e.key === "ArrowDown") {
          e.preventDefault();
          const btns = treeBtns();
          btns[btns.indexOf(btn) + 1]?.focus();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          const btns = treeBtns();
          btns[btns.indexOf(btn) - 1]?.focus();
        } else if (e.key === "Home") {
          e.preventDefault();
          treeBtns()[0]?.focus();
        } else if (e.key === "End") {
          e.preventDefault();
          const btns = treeBtns();
          btns[btns.length - 1]?.focus();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          if (hasChildren() && !expanded()) {
            toggleExpand(node.id);
            queueMicrotask(() => {
              const btns = treeBtns();
              btns[btns.indexOf(btn) + 1]?.focus();
            });
          } else if (hasChildren() && expanded()) {
            const btns = treeBtns();
            btns[btns.indexOf(btn) + 1]?.focus();
          }
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          if (hasChildren() && expanded()) {
            toggleExpand(node.id);
          } else {
            const nodeLevel = Number(btn.dataset.treeLevel ?? 0);
            const btns = treeBtns();
            const idx = btns.indexOf(btn);
            const parent = btns.slice(0, idx).reverse().find(
              (b) => Number(b.dataset.treeLevel ?? 0) < nodeLevel
            );
            parent?.focus();
          }
        } else if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (hasChildren()) toggleExpand(node.id);
          handleSelect(node.id);
        }
      }}
      class={cn(
        "flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-sm transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
        selected() ? "bg-primary-50 text-primary-700 font-medium" : "text-ink-700 hover:bg-surface-overlay hover:text-ink-900",
        node.disabled && "opacity-40"
      )}
      style={{ "padding-left": `${level * indent() + 8}px` }}
    >
								{
      /* Expand/collapse chevron */
    }
								<span class={cn("flex h-4 w-4 shrink-0 items-center justify-center")}>
									<Show7 when={hasChildren()} fallback={<span class="h-4 w-4" />}>
										{icons.chevronRight({
      class: cn("h-3.5 w-3.5 text-ink-400 transition-transform duration-150", expanded() && "rotate-90"),
      "aria-hidden": "true"
    })}
									</Show7>
								</span>

								{
      /* Node icon */
    }
								<Show7 when={node.icon}>
									<span class={cn("flex h-4 w-4 shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4", selected() ? "text-primary-500" : "text-ink-500")}>
										{node.icon}
									</span>
								</Show7>

								{
      /* Label */
    }
								<span class="min-w-0 truncate">{node.label}</span>
							</button>

							{
      /* Children */
    }
							<Show7 when={hasChildren() && expanded()}>
								<div
      class={cn(
        showLines() && level < 2 ? "relative ml-[calc(var(--indent-offset)+8px)] border-l border-surface-border pl-0" : ""
      )}
      style={{ "--indent-offset": `${level * indent() + 14}px` }}
    >
									{renderNodes(node.children ?? [], level + 1)}
								</div>
							</Show7>
						</li>;
  }}
			</For5>
		</ul>;
  return <div class={cn("select-none", local.class)} data-tree-root {...others}>
			{renderNodes(local.nodes)}
		</div>;
}

// src/components/data-display/Video.tsx
import { createSignal as createSignal3, Show as Show8, splitProps as splitProps12 } from "solid-js";
function Video(props) {
  const [local, others] = splitProps12(props, [
    "src",
    "poster",
    "controls",
    "autoplay",
    "muted",
    "loop",
    "aspectRatio",
    "width",
    "height",
    "fallback",
    "preload",
    "fluid",
    "class",
    "videoClass"
  ]);
  const [error, setError] = createSignal3(false);
  const aspectRatio = () => local.aspectRatio ?? "16/9";
  const fluid = () => local.fluid !== false;
  return <div
    class={cn("relative overflow-hidden rounded-xl", local.class)}
    style={{
      "aspect-ratio": aspectRatio(),
      "max-width": local.width ?? (fluid() ? "100%" : void 0),
      "max-height": local.height
    }}
    {...others}
  >
			<Show8
    when={!error()}
    fallback={<div class="absolute inset-0 flex items-center justify-center bg-surface-raised">
						<Show8
      when={local.fallback}
      fallback={<div class="flex flex-col items-center gap-3 p-6 text-center">
									<div class="flex h-12 w-12 items-center justify-center rounded-full bg-surface-overlay">
										<svg class="h-6 w-6 text-ink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.164.841-.26 1.298-.26H19.5m-14.25 0A2.25 2.25 0 013 16.5V9.75m0 0A2.25 2.25 0 015.25 7.5H12M3 9.75l9-4.5" />
										</svg>
									</div>
									<div>
										<p class="text-sm font-medium text-ink-700">Video unavailable</p>
										<p class="mt-0.5 text-xs text-ink-400">This video could not be loaded.</p>
									</div>
								</div>}
    >
							{local.fallback}
						</Show8>
					</div>}
  >
				<video
    class={cn("h-full w-full object-cover", local.videoClass)}
    src={local.src}
    poster={local.poster}
    controls={local.controls !== false}
    autoplay={local.autoplay}
    muted={local.autoplay ? true : local.muted}
    loop={local.loop}
    preload={local.preload ?? "metadata"}
    onError={() => setError(true)}
    playsinline
  />
			</Show8>
		</div>;
}

// src/components/data-display/Image.tsx
import { Show as Show9, splitProps as splitProps13, createSignal as createSignal4, onCleanup as onCleanup2, createEffect as createEffect2, createMemo as createMemo8, on as on2 } from "solid-js";
import { Image as KobalteImage } from "@kobalte/core/image";
function Image(props) {
  const [local, others] = splitProps13(props, [
    "src",
    "alt",
    "fallbackSrc",
    "showSkeleton",
    "fallback",
    "fallbackDelay",
    "aspectRatio",
    "objectFit",
    "scale",
    "scalingConstraints",
    "objectPosition",
    "rounded",
    "lazy",
    "overlay",
    "overlayPosition",
    "overlayOnHover",
    "onLoad",
    "onError",
    "class"
  ]);
  const [showFallback, setShowFallback] = createSignal4(false);
  const [imageLoaded, setImageLoaded] = createSignal4(false);
  const [activeSrc, setActiveSrc] = createSignal4(local.src);
  const [hasTriedFallback, setHasTriedFallback] = createSignal4(false);
  let fallbackTimeout;
  createEffect2(on2(() => local.src, (newSrc) => {
    setActiveSrc(newSrc);
    setImageLoaded(false);
    setShowFallback(false);
    setHasTriedFallback(false);
    if (fallbackTimeout) {
      clearTimeout(fallbackTimeout);
      fallbackTimeout = void 0;
    }
  }, { defer: true }));
  onCleanup2(() => {
    if (fallbackTimeout) {
      clearTimeout(fallbackTimeout);
    }
  });
  const mapScaleToObjectFit = (scale) => {
    switch (scale) {
      case "stretch":
        return "fill";
      case "portrait":
        return "contain";
      // Fit portrait image within container maintaining aspect ratio
      case "landscape":
        return "contain";
      // Fit landscape image within container maintaining aspect ratio
      case "square":
        return "cover";
      // Force to fill square area
      default:
        return scale;
    }
  };
  const effectiveObjectFit = createMemo8(() => {
    if (local.scale) return mapScaleToObjectFit(local.scale);
    return local.objectFit ?? "cover";
  });
  const constraintStyles = createMemo8(() => {
    if (!local.scalingConstraints) return {};
    const styles = {};
    if (local.scalingConstraints.maxWidth) styles["max-width"] = local.scalingConstraints.maxWidth;
    if (local.scalingConstraints.maxHeight) styles["max-height"] = local.scalingConstraints.maxHeight;
    return styles;
  });
  const handleLoad = () => {
    setImageLoaded(true);
    setShowFallback(false);
    if (fallbackTimeout) {
      clearTimeout(fallbackTimeout);
      fallbackTimeout = void 0;
    }
    local.onLoad?.();
  };
  const handleError = () => {
    if (local.fallbackSrc && !hasTriedFallback() && activeSrc() !== local.fallbackSrc) {
      setHasTriedFallback(true);
      setImageLoaded(false);
      setShowFallback(false);
      if (fallbackTimeout) {
        clearTimeout(fallbackTimeout);
        fallbackTimeout = void 0;
      }
      setActiveSrc(local.fallbackSrc);
      return;
    }
    if (local.fallbackDelay) {
      fallbackTimeout = setTimeout(() => setShowFallback(true), local.fallbackDelay);
    } else {
      setShowFallback(true);
    }
    local.onError?.();
  };
  const containerClass = () => cn(
    "relative overflow-hidden",
    local.overlayOnHover && "group",
    local.aspectRatio || (local.scale || local.objectFit ? "w-full h-full" : "w-full h-auto"),
    local.rounded || "rounded-lg",
    local.class
  );
  const imageClass = () => cn(
    "w-full h-full transition-opacity duration-300",
    imageLoaded() ? "opacity-100" : "opacity-0",
    local.objectPosition
  );
  const imageStyle = () => {
    const fit = effectiveObjectFit();
    return fit ? { "object-fit": fit } : {};
  };
  const skeletonClass = () => cn(
    "absolute inset-0 bg-ink-200 animate-pulse",
    local.rounded || "rounded-lg"
  );
  const overlayPositionClass = () => {
    const position = local.overlayPosition || "bottom-right";
    const baseClasses = "absolute pointer-events-none";
    switch (position) {
      case "top-left":
        return `${baseClasses} top-2 left-2`;
      case "top-right":
        return `${baseClasses} top-2 right-2`;
      case "bottom-left":
        return `${baseClasses} bottom-2 left-2`;
      case "bottom-right":
        return `${baseClasses} bottom-2 right-2`;
      case "center":
        return `${baseClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`;
      case "full":
        return "absolute inset-0";
      default:
        return `${baseClasses} bottom-2 right-2`;
    }
  };
  const overlayClass = () => cn(
    overlayPositionClass(),
    local.overlayOnHover && "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
    !local.overlayOnHover && "opacity-100"
  );
  return <div class={containerClass()} style={constraintStyles()}>
			{
    /* Independent skeleton overlay - shows during initial load and fallback retry */
  }
			<Show9 when={local.showSkeleton && !imageLoaded() && !showFallback()}>
				<div class={skeletonClass()} />
			</Show9>
			
			<Show9 when={activeSrc()} keyed>
			{(src) => <KobalteImage onLoadingStatusChange={(status) => {
    if (status === "loaded") handleLoad();
    else if (status === "error") handleError();
  }}>
					<KobalteImage.Img
    {...others}
    src={src}
    alt={local.alt}
    loading={local.lazy ? "lazy" : "eager"}
    class={imageClass()}
    style={imageStyle()}
  />
					<KobalteImage.Fallback>
					<Show9 when={showFallback()}>
						{local.fallback || <div class="flex items-center justify-center w-full h-full bg-surface-dim border border-surface-border">
									<div class="text-center p-4">
										<svg class="w-12 h-12 mx-auto mb-2 text-ink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
										</svg>
										<p class="text-sm text-ink-500">Failed to load image</p>
									</div>
								</div>}
						</Show9>
					</KobalteImage.Fallback>
				</KobalteImage>}
		</Show9>
			<Show9 when={local.overlay && imageLoaded()}>
				<div class={overlayClass()}>
					{local.overlay}
				</div>
			</Show9>
		</div>;
}

// src/components/data-display/Board.tsx
import { createContext, createSignal as createSignal5, useContext, splitProps as splitProps14, Show as Show10 } from "solid-js";
var BoardContext = createContext();
function useBoardCtx() {
  const ctx = useContext(BoardContext);
  if (!ctx) throw new Error("Board.Column / Board.Card must be used inside <Board>");
  return ctx;
}
var ColumnContext = createContext();
function BoardRoot(props) {
  const [local, rest] = splitProps14(props, ["onCardMove", "class", "children"]);
  const [draggingCardId, setDraggingCardId] = createSignal5(null);
  const [draggingFromColumnId, setDraggingFromColumnId] = createSignal5(null);
  const [draggingCardHeight, setDraggingCardHeight] = createSignal5(60);
  const [draggingAdjacent, setDraggingAdjacent] = createSignal5({ prev: null, next: null });
  const [overColumnId, setOverColumnId] = createSignal5(null);
  const [overCardId, setOverCardId] = createSignal5(null);
  const [overCardPosition, setOverCardPosition] = createSignal5(null);
  return <BoardContext.Provider value={{
    draggingCardId,
    draggingFromColumnId,
    draggingCardHeight,
    draggingAdjacent,
    overColumnId,
    overCardId,
    overCardPosition,
    setDraggingCardId,
    setDraggingFromColumnId,
    setDraggingCardHeight,
    setDraggingAdjacent,
    setOverColumnId,
    setOverCardId,
    setOverCardPosition,
    onCardMove: local.onCardMove
  }}>
			<div
    class={cn("flex gap-4 pb-4 items-start", local.class)}
    {...rest}
  >
				{local.children}
			</div>
		</BoardContext.Provider>;
}
function BoardColumn(props) {
  const [local, rest] = splitProps14(props, ["id", "title", "count", "color", "class", "children"]);
  const ctx = useBoardCtx();
  const isOver = () => ctx.overColumnId() === local.id;
  const isDraggingFrom = () => ctx.draggingFromColumnId() === local.id;
  const handleDragOver = (e) => {
    e.preventDefault();
    ctx.setOverColumnId(local.id);
  };
  const handleDragLeave = (e) => {
    const related = e.relatedTarget;
    if (related && e.currentTarget.contains(related)) return;
    if (ctx.overColumnId() === local.id) {
      ctx.setOverColumnId(null);
      ctx.setOverCardId(null);
      ctx.setOverCardPosition(null);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const cardId = ctx.draggingCardId();
    const fromColumnId = ctx.draggingFromColumnId();
    if (!cardId || !fromColumnId) return;
    const nearCardId = ctx.overCardId() !== cardId ? ctx.overCardId() : null;
    const nearPosition = nearCardId ? ctx.overCardPosition() : null;
    if (fromColumnId !== local.id || nearCardId) {
      ctx.onCardMove?.({ cardId, fromColumnId, toColumnId: local.id, nearCardId, nearPosition });
    }
    ctx.setOverColumnId(null);
    ctx.setOverCardId(null);
    ctx.setOverCardPosition(null);
  };
  return <ColumnContext.Provider value={{ columnId: local.id }}>
			<div
    class={cn(
      "flex min-h-32 min-w-40 flex-1 flex-col rounded-xl border border-surface-border bg-surface-raised transition-colors",
      isOver() && !isDraggingFrom() && "border-primary-400 bg-primary-50/20",
      local.class
    )}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
    {...rest}
  >
				{
    /* Header */
  }
				<div class="flex items-center justify-between border-b border-surface-border/60 px-4 py-3">
					<div class="flex items-center gap-2">
						<Show10 when={local.color}>
							<span class="h-2 w-2 shrink-0 rounded-full" style={{ background: local.color }} />
						</Show10>
						<span class="text-sm font-semibold text-ink-900">{local.title}</span>
					</div>
					<Show10 when={local.count !== void 0}>
						<span class="flex h-5 min-w-5 items-center justify-center rounded-full bg-surface-overlay px-1.5 text-xs font-medium text-ink-500">
							{local.count}
						</span>
					</Show10>
				</div>

				{
    /* Cards area */
  }
				<div class="flex flex-1 flex-col p-3">
					{local.children}
				</div>
			</div>
		</ColumnContext.Provider>;
}
function DropZone(props) {
  return <div
    class="mb-2 rounded-lg border-2 border-dashed border-primary-400 bg-primary-50/25 transition-all duration-150"
    style={{ height: `${props.height}px` }}
  />;
}
function BoardCard(props) {
  const [local, rest] = splitProps14(props, ["id", "disabled", "class", "children"]);
  const ctx = useBoardCtx();
  const columnCtx = useContext(ColumnContext);
  const isDragging = () => ctx.draggingCardId() === local.id;
  const isOverBefore = () => ctx.overCardId() === local.id && ctx.overCardPosition() === "before" && !isDragging() && ctx.draggingAdjacent().next !== local.id;
  const isOverAfter = () => ctx.overCardId() === local.id && ctx.overCardPosition() === "after" && !isDragging() && ctx.draggingAdjacent().prev !== local.id;
  const handleDragStart = (e) => {
    if (local.disabled) {
      e.preventDefault();
      return;
    }
    e.dataTransfer?.setData("text/plain", local.id);
    const el = e.currentTarget;
    ctx.setDraggingCardHeight(el.offsetHeight);
    const wrapper = el.closest("[data-board-card]");
    const area = wrapper?.parentElement;
    if (area) {
      const wrappers = Array.from(area.querySelectorAll(":scope > [data-board-card]"));
      const idx = wrappers.indexOf(wrapper);
      ctx.setDraggingAdjacent({
        prev: idx > 0 ? wrappers[idx - 1].dataset.boardCard ?? null : null,
        next: idx < wrappers.length - 1 ? wrappers[idx + 1].dataset.boardCard ?? null : null
      });
    }
    ctx.setDraggingCardId(local.id);
    ctx.setDraggingFromColumnId(columnCtx?.columnId ?? null);
  };
  const handleDragEnd = () => {
    ctx.setDraggingCardId(null);
    ctx.setDraggingFromColumnId(null);
    ctx.setOverColumnId(null);
    ctx.setOverCardId(null);
    ctx.setOverCardPosition(null);
  };
  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = e.clientY < rect.top + rect.height / 2 ? "before" : "after";
    ctx.setOverColumnId(columnCtx?.columnId ?? null);
    ctx.setOverCardId(local.id);
    ctx.setOverCardPosition(pos);
  };
  return <div class="flex flex-col" data-board-card={local.id}>
			<Show10 when={isOverBefore()}>
				<DropZone height={ctx.draggingCardHeight()} />
			</Show10>
			<div
    draggable={!local.disabled}
    onDragStart={handleDragStart}
    onDragEnd={handleDragEnd}
    onDragOver={handleDragOver}
    class={cn(
      "mb-2 rounded-lg border border-surface-border bg-surface-base shadow-sm transition-all duration-150",
      !local.disabled && "cursor-grab select-none active:cursor-grabbing hover:shadow-md",
      isDragging() && "opacity-40 scale-[0.97]",
      local.class
    )}
    {...rest}
  >
				{local.children}
			</div>
			<Show10 when={isOverAfter()}>
				<DropZone height={ctx.draggingCardHeight()} />
			</Show10>
		</div>;
}
var Board = Object.assign(BoardRoot, {
  Column: BoardColumn,
  Card: BoardCard
});

// src/components/data-display/DataTable.tsx
import { Show as Show12, For as For6, createMemo as createMemo9, splitProps as splitProps16 } from "solid-js";

// src/components/data-display/Table.tsx
import { Show as Show11, splitProps as splitProps15, createContext as createContext2, useContext as useContext2 } from "solid-js";
var TableContext = createContext2(false);
var TableSectionContext = createContext2(void 0);
function Table(props) {
  const [local, others] = splitProps15(props, ["class", "striped", "caption", "children"]);
  const striped = () => local.striped === true;
  return <TableContext.Provider value={striped()}>
			<table
    class={cn("w-full text-sm text-ink-900", local.class)}
    {...others}
  >
				<Show11 when={local.caption != null}>
					<caption class={typeof local.caption === "string" ? "sr-only" : void 0}>
						{local.caption}
					</caption>
				</Show11>
				{local.children}
			</table>
		</TableContext.Provider>;
}
function TableHeader(props) {
  const [local, others] = splitProps15(props, ["class", "children"]);
  return <thead
    class={cn(
      "sticky top-0 z-10 border-b border-surface-border bg-surface-overlay",
      local.class
    )}
    {...others}
  >
			<TableSectionContext.Provider value={"head"}>{local.children}</TableSectionContext.Provider>
		</thead>;
}
function TableBody(props) {
  const [local, others] = splitProps15(props, ["class", "children"]);
  return <tbody
    class={cn(
      "divide-y divide-surface-border bg-surface-raised",
      local.class
    )}
    {...others}
  >
			<TableSectionContext.Provider value={"body"}>{local.children}</TableSectionContext.Provider>
		</tbody>;
}
function TableFooter(props) {
  const [local, others] = splitProps15(props, ["class", "children"]);
  return <tfoot
    class={cn(
      "border-t border-surface-border bg-surface-base",
      local.class
    )}
    {...others}
  >
			<TableSectionContext.Provider value={"foot"}>{local.children}</TableSectionContext.Provider>
		</tfoot>;
}
function TableRow(props) {
  const [local, others] = splitProps15(props, ["class", "hover", "stripe"]);
  const striped = useContext2(TableContext) ?? false;
  const section = useContext2(TableSectionContext);
  const inBody = section === "body";
  const allowHover = () => local.hover !== false && inBody;
  const stripeClass = () => {
    if (!inBody) return "";
    if (local.stripe !== void 0) return local.stripe ? "bg-surface-stripe" : "";
    return striped ? "even:bg-surface-stripe" : "";
  };
  return <tr
    class={cn(
      "transition-colors",
      stripeClass(),
      allowHover() ? "hover:bg-ink-900/5" : "",
      local.class
    )}
    {...others}
  />;
}
function TableHead(props) {
  const [local, others] = splitProps15(props, ["class", "scope"]);
  return <th
    scope={local.scope ?? "col"}
    class={cn(
      "px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-500",
      local.class
    )}
    {...others}
  />;
}
function TableCell(props) {
  const [local, others] = splitProps15(props, ["class"]);
  return <td class={cn("px-4 py-3 align-middle text-sm text-ink-900", local.class)} {...others} />;
}

// src/components/data-display/DataTable.tsx
var TABLE_CONTAINER_CLASS = "rounded-xl border border-surface-border bg-surface-raised";
function defaultGroupOrder(a, b) {
  if (a === b) return 0;
  if (a == null) return -1;
  if (b == null) return 1;
  return a.localeCompare(b, void 0, { sensitivity: "base" });
}
function DataTable(props) {
  const [local, others] = splitProps16(props, [
    "description",
    "search",
    "toolbarContent",
    "toolbarActions",
    "primaryButton",
    "secondaryButton",
    "addRow",
    "editModal",
    "deleteDialog",
    "groupBy",
    "pagination",
    "hideHeader",
    "emptyState",
    "loadMore",
    "loading",
    "error",
    "items",
    "columns",
    "renderRowOverride",
    "emptyMessage",
    "skeletonRows",
    "sort",
    "class",
    "bare",
    "striped",
    "caption"
  ]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  if (false) {
  }
  const colSpan = () => local.columns.length;
  const skeletonRowCount = createMemo9(() => Array.from({ length: local.skeletonRows ?? 5 }));
  const hasToolbar = () => local.description != null || local.search != null || local.toolbarContent != null || local.toolbarActions != null || local.primaryButton != null || local.secondaryButton != null || local.addRow != null;
  const groupedRows = createMemo9(() => {
    const g = local.groupBy;
    if (!g) return null;
    if (local.items.length === 0) return [];
    const order = g.groupOrder ?? defaultGroupOrder;
    const map = /* @__PURE__ */ new Map();
    for (const item of local.items) {
      const key = g.groupBy(item);
      const list = map.get(key);
      if (list) list.push(item);
      else map.set(key, [item]);
    }
    const keys = [...map.keys()].sort(order);
    return keys.map((key) => ({ key, items: map.get(key) }));
  });
  function renderEmptyRow() {
    return <Show12 when={!local.addRow?.showAddForm}>
				<TableRow hover={false}>
					<TableCell colSpan={colSpan()} class="p-0 align-top">
						{local.emptyState ? <EmptyState
      title={local.emptyState.title}
      description={local.emptyState.description}
      icon={local.emptyState.icon}
      actions={local.emptyState.actions}
    /> : <div class="py-8 text-center text-sm text-ink-500">
								{local.emptyMessage ?? (zh() ? "\u6682\u65E0\u6570\u636E" : "No data")}
							</div>}
					</TableCell>
				</TableRow>
			</Show12>;
  }
  function renderItem(item, stripe) {
    const overridden = local.renderRowOverride?.(item);
    if (false) {
    }
    return overridden ?? <TableRow stripe={stripe}>
				<For6 each={local.columns}>
					{(col) => <TableCell class={col.cellClass}>{col.cell(item)}</TableCell>}
				</For6>
			</TableRow>;
  }
  function FlatRows() {
    return <Show12 when={local.items.length > 0} fallback={renderEmptyRow()}>
				<For6 each={local.items}>{(item) => renderItem(item)}</For6>
			</Show12>;
  }
  return <div {...others} class={cn("space-y-4", local.class)}>
			{local.description}
			<Show12 when={hasToolbar()}>
				<div class="flex flex-wrap items-center gap-2">
					<Show12 when={local.search}>
						{(search) => <div class="min-w-[200px] flex-1">
								<Input bare {...search()} />
							</div>}
					</Show12>
					<Show12 when={local.toolbarContent}>
						{local.toolbarContent}
					</Show12>
					<Show12 when={local.toolbarActions}>
						<div class="flex items-center gap-2 shrink-0">
							{local.toolbarActions}
						</div>
					</Show12>
					<Show12 when={local.addRow || local.primaryButton || local.secondaryButton}>
						<div class="ml-auto flex items-center gap-2 shrink-0">
							<Show12 when={local.addRow}>
								{(addRow) => <Button
    type="button"
    variant="primary"
    size="sm"
    class="shrink-0 rounded-lg"
    label={addRow().addButtonLabel}
    startIcon={icons.plus({ width: 16, height: 16, "aria-hidden": "true" })}
    onClick={() => addRow().onToggleAddForm()}
  />}
							</Show12>
							<Show12 when={!local.addRow && local.primaryButton}>
								{(btn) => <Button
    type="button"
    variant="primary"
    size="sm"
    class="shrink-0 rounded-lg"
    label={btn().label}
    startIcon={btn().startIcon}
    onClick={() => btn().onClick()}
  />}
							</Show12>
							<Show12 when={local.secondaryButton}>
								{(btn) => <Button
    type="button"
    variant="outlined"
    size="sm"
    class="shrink-0 rounded-lg"
    label={btn().label}
    startIcon={btn().startIcon}
    onClick={() => btn().onClick()}
  />}
							</Show12>
						</div>
					</Show12>
				</div>
			</Show12>

			<Show12 when={local.error}>
				<p class="text-sm text-danger-600">
					{local.error instanceof Error ? local.error.message : zh() ? "\u52A0\u8F7D\u5931\u8D25" : "Failed to load"}
				</p>
			</Show12>
			<Show12 when={local.loading}>
				<div role="status" aria-live="polite" class="sr-only">{zh() ? "\u52A0\u8F7D\u4E2D" : "Loading"}</div>
			</Show12>
			<div class={cn("overflow-x-auto", !local.bare && TABLE_CONTAINER_CLASS)}>
				<Table class="min-w-full" striped={local.striped} caption={local.caption}>
					<Show12 when={!local.hideHeader}>
						<TableHeader>
							<TableRow>
								<For6 each={local.columns}>
									{(col) => <TableHead class={col.headClass}>
											<Show12 when={col.sortable && local.sort} fallback={col.header}>
												{(sort) => {
    const isActive = () => sort().column === col.id;
    const handleSort = () => {
      if (!isActive()) sort().onSortChange(col.id, "asc");
      else if (sort().direction === "asc") sort().onSortChange(col.id, "desc");
      else sort().onSortChange(null, "asc");
    };
    return <button
      type="button"
      class={cn(
        "inline-flex items-center gap-1.5 rounded transition-colors hover:text-ink-900",
        isActive() ? "text-ink-900" : "text-ink-500"
      )}
      onClick={handleSort}
    >
															{col.header}
															<Show12
      when={isActive()}
      fallback={<svg class="h-3.5 w-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
																		<path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" />
																	</svg>}
    >
																<Show12
      when={sort().direction === "asc"}
      fallback={<svg class="h-3.5 w-3.5 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
																			<path d="m7 15 5 5 5-5" />
																		</svg>}
    >
																	<svg class="h-3.5 w-3.5 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
																		<path d="m7 9 5-5 5 5" />
																	</svg>
																</Show12>
															</Show12>
														</button>;
  }}
											</Show12>
										</TableHead>}
								</For6>
							</TableRow>
						</TableHeader>
					</Show12>
					<TableBody aria-busy={local.loading ? "true" : void 0}>
						<Show12
    when={!local.loading}
    fallback={<For6 each={skeletonRowCount()}>
									{() => <TableRow hover={false}>
											<For6 each={local.columns}>
												{(col) => <TableCell class={cn("py-3", col.cellClass)}>
														{col.skeleton ?? <div class="h-4 w-full max-w-48 animate-pulse rounded bg-ink-200" />}
													</TableCell>}
											</For6>
										</TableRow>}
								</For6>}
  >
							<Show12 when={local.addRow?.showAddForm}>
								<TableRow class="bg-primary-50/50" hover={false}>
									{local.addRow.renderAddCells()}
								</TableRow>
							</Show12>
							<Show12 when={groupedRows()} fallback={<FlatRows />}>
								{(groups) => <Show12 when={groups().length > 0} fallback={renderEmptyRow()}>
										<For6 each={groups()}>
											{({ key, items: groupItems }) => [
    <TableRow class="bg-surface-dim font-medium text-ink-700" hover={false} stripe={false}>
													<TableCell colSpan={colSpan()} class="py-2 pl-4 text-sm font-medium" role="rowheader">
														{local.groupBy.renderGroupHeader(key)}
													</TableCell>
												</TableRow>,
    ...groupItems.map((item, i) => renderItem(item, local.striped ? i % 2 === 1 : void 0))
  ]}
										</For6>
									</Show12>}
							</Show12>
							<Show12 when={local.addRow?.addError && local.addRow?.showAddForm}>
								<TableRow hover={false}>
									<TableCell colSpan={colSpan()} class="bg-danger-50/80 text-sm text-danger-600">
										{local.addRow.addError}
									</TableCell>
								</TableRow>
							</Show12>
						</Show12>
					</TableBody>
				</Table>
				<Show12 when={local.loadMore?.hasMore}>
					<div class="flex justify-center border-t border-surface-border bg-surface-raised px-6 py-4">
						<Button
    type="button"
    variant="outlined"
    size="sm"
    class="rounded-lg"
    label={zh() ? "\u52A0\u8F7D\u66F4\u591A" : "Load more"}
    loading={local.loadMore.loading}
    onClick={() => local.loadMore.onLoadMore()}
  />
					</div>
				</Show12>
				<Show12 when={local.pagination}>
					{(pagination) => <Pagination
    {...pagination()}
    class="border-t border-surface-border bg-surface-raised px-6 py-3"
  />}
				</Show12>
			</div>

			<Show12 when={local.editModal}>
				{(modal) => <Dialog
    open={modal().open}
    onClose={modal().onClose}
    size="md"
    header={<h3 class="text-lg font-semibold text-ink-900">{modal().title}</h3>}
    footer={<div class="flex justify-end gap-2">
								<Button type="button" variant="link" size="sm" onClick={modal().onClose} class="rounded-lg">
									{zh() ? "\u53D6\u6D88" : "Cancel"}
								</Button>
								<Button
      type="button"
      variant="primary"
      size="sm"
      onClick={modal().onSave}
      loading={modal().saving}
      class="rounded-lg"
    >
									{zh() ? "\u4FDD\u5B58" : "Save"}
								</Button>
							</div>}
  >
						<div class="space-y-4">{modal().children}</div>
						<Show12 when={modal().editError}>
							<p class="mt-3 text-sm text-danger-600">{modal().editError}</p>
						</Show12>
					</Dialog>}
			</Show12>

			<Show12 when={local.deleteDialog}>
				{(dialog) => <AlertDialog
    open={dialog().open}
    onOpenChange={(open) => !open && dialog().onClose()}
    title={dialog().title}
    description={dialog().description}
    confirmLabel={zh() ? "\u5220\u9664" : "Delete"}
    destructive
    onConfirm={dialog().onConfirm}
  />}
			</Show12>
		</div>;
}

export {
  ColorSwatch,
  Persona,
  Badge,
  AvatarGroup,
  Carousel,
  EmptyState,
  Tag,
  KEY,
  Kbd,
  KbdShortcut,
  StatCard,
  Timeline,
  TreeView,
  Video,
  Image,
  Board,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TABLE_CONTAINER_CLASS,
  DataTable
};
