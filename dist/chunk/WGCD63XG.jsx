import {
  Button,
  CollapsibleContentStyled,
  CollapsibleRoot,
  CollapsibleTrigger,
  Select,
  resolveLocale,
  useIcons,
  useLocaleConfig
} from "./5X6JRKCS.jsx";
import {
  cn
} from "./N5KQYWCA.jsx";

// src/components/navigation/Breadcrumbs.tsx
import { For, Show, splitProps } from "solid-js";
import { Breadcrumbs as KobalteBreadcrumbs } from "@kobalte/core/breadcrumbs";
function DefaultSeparator(props) {
  const icons = useIcons();
  return icons.chevronRight({
    class: cn("h-4 w-4 shrink-0", props.inverted ? "text-white/50" : "text-ink-400"),
    "aria-hidden": "true"
  });
}
function Breadcrumbs(props) {
  const [local] = splitProps(props, ["items", "separator", "inverted", "class"]);
  const separator = () => local.separator ?? <DefaultSeparator inverted={local.inverted} />;
  const inv = () => local.inverted ?? false;
  return <KobalteBreadcrumbs class={cn("flex flex-wrap items-center gap-1 text-sm", local.class)}>
			<ol class="flex flex-wrap items-center gap-1">
				<For each={local.items}>
					{(item, i) => {
    const isLast = () => i() === local.items.length - 1;
    return <li
      class="flex items-center gap-1"
      classList={{
        "text-ink-500": !isLast() && !inv(),
        "text-white/50": !isLast() && inv()
      }}
    >
								<Show when={i() > 0}>
									<KobalteBreadcrumbs.Separator class="flex shrink-0">
										{separator()}
									</KobalteBreadcrumbs.Separator>
								</Show>
								<Show
      when={!!item.href && !isLast()}
      fallback={<span
        class={cn("font-medium", isLast() ? inv() ? "text-white" : "text-ink-800" : inv() ? "text-white/50" : "text-ink-500")}
        {...isLast() && { "aria-current": "page" }}
      >
											{item.label}
										</span>}
    >
									<KobalteBreadcrumbs.Link
      href={item.href}
      class={cn(
        "underline-offset-2 hover:underline",
        inv() ? "text-white/70 hover:text-white" : "text-ink-600 hover:text-ink-900"
      )}
    >
										{item.label}
									</KobalteBreadcrumbs.Link>
								</Show>
							</li>;
  }}
				</For>
			</ol>
		</KobalteBreadcrumbs>;
}

// src/components/navigation/DropdownMenu.tsx
import { splitProps as splitProps2 } from "solid-js";
import { DropdownMenu as KobalteDropdownMenu } from "@kobalte/core/dropdown-menu";
var _KbContent = KobalteDropdownMenu.Content;
var _KbItem = KobalteDropdownMenu.Item;
var _KbSeparator = KobalteDropdownMenu.Separator;
var _KbTrigger = KobalteDropdownMenu.Trigger;
function DropdownMenuContent(props) {
  const [local, others] = splitProps2(props, ["class", "children"]);
  return <KobalteDropdownMenu.Portal>
			<_KbContent
    class={cn(
      "z-[80] min-w-[160px] rounded-lg border border-surface-border bg-surface-raised p-1 shadow-lg outline-none",
      local.class
    )}
    {...others}
  >
				{local.children}
			</_KbContent>
		</KobalteDropdownMenu.Portal>;
}
function DropdownMenuItem(props) {
  const [local, others] = splitProps2(props, ["class", "children"]);
  return <_KbItem
    class={cn(
      "flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-sm text-ink-700 outline-none",
      "data-[highlighted]:bg-surface-overlay data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
      local.class
    )}
    {...others}
  >
			{local.children}
		</_KbItem>;
}
function DropdownMenuSeparator(props) {
  const [local, others] = splitProps2(props, ["class"]);
  return <_KbSeparator
    class={cn("my-1 h-px border-none bg-surface-border", local.class)}
    {...others}
  />;
}
function DropdownMenuTrigger(props) {
  const [local, others] = splitProps2(props, ["class", "children"]);
  return <_KbTrigger
    class={cn(local.class)}
    {...others}
  >
			{local.children}
		</_KbTrigger>;
}
var DropdownMenu = Object.assign(KobalteDropdownMenu, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Separator: DropdownMenuSeparator
});

// src/components/navigation/Pagination.tsx
import { Show as Show2, For as For2, splitProps as splitProps3, createEffect, on, createSignal, createUniqueId, onMount, onCleanup } from "solid-js";
var DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50];
var EN_LABELS = {
  navAriaLabel: "Pagination",
  infoPrefix: "Showing ",
  infoMiddle: " of ",
  infoSuffix: "",
  perPage: "Per page",
  firstPage: "First page",
  previousPage: "Previous page",
  nextPage: "Next page",
  lastPage: "Last page",
  currentPage: "Page {page}",
  goToPage: "Go to page {page}"
};
var ZH_LABELS = {
  navAriaLabel: "\u5206\u9875",
  infoPrefix: "\u663E\u793A ",
  infoMiddle: " \u6761\uFF0C\u5171 ",
  infoSuffix: " \u6761",
  perPage: "\u6BCF\u9875",
  firstPage: "\u7B2C\u4E00\u9875",
  previousPage: "\u4E0A\u4E00\u9875",
  nextPage: "\u4E0B\u4E00\u9875",
  lastPage: "\u6700\u540E\u4E00\u9875",
  currentPage: "\u7B2C {page} \u9875",
  goToPage: "\u8DF3\u8F6C\u5230\u7B2C {page} \u9875"
};
function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
function formatPage(tmpl, p) {
  return tmpl.replace("{page}", String(p));
}
function Pagination(props) {
  const [local, others] = splitProps3(props, [
    "page",
    "totalPages",
    "onPageChange",
    "maxPages",
    "showFirstLast",
    "totalItems",
    "pageSize",
    "onPageSizeChange",
    "pageSizeOptions",
    "selectId",
    "locale",
    "labels",
    "class"
  ]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const t = () => ({
    ...EN_LABELS,
    ...resolveLocale(local.locale, contextLocale) === "zh" ? ZH_LABELS : {},
    ...local.labels ?? {}
  });
  const total = () => Math.max(1, local.totalPages);
  const page = () => Math.max(1, Math.min(local.page, total()));
  const userMaxPages = () => local.maxPages ?? 5;
  const hasInfo = () => local.totalItems != null;
  const hasPageSize = () => local.pageSize != null && local.onPageSizeChange != null;
  const showNav = () => total() > 1;
  let navEl;
  let fixedEl;
  const [navWidth, setNavWidth] = createSignal(0);
  const [fixedWidth, setFixedWidth] = createSignal(0);
  const [btnWidth, setBtnWidth] = createSignal(40);
  let ro;
  onMount(() => {
    if (!navEl || !fixedEl) {
      return;
    }
    setNavWidth(navEl.clientWidth);
    setFixedWidth(fixedEl.scrollWidth);
    ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === navEl) setNavWidth(entry.contentRect.width);
        if (entry.target === fixedEl) setFixedWidth(entry.contentRect.width);
      }
      const btn = navEl.querySelector("button[data-page-btns]");
      if (btn) setBtnWidth(btn.offsetWidth + 4);
    });
    ro.observe(navEl);
    ro.observe(fixedEl);
  });
  onCleanup(() => ro?.disconnect());
  const iconBtnCount = () => 2 + (local.showFirstLast ? 2 : 0);
  const iconBtnsWidth = () => iconBtnCount() * 40;
  const effectiveMaxPages = () => {
    const m = userMaxPages();
    if (m === 0) return 0;
    const nw = navWidth();
    if (nw === 0) return m;
    const gap = fixedWidth() > 0 ? 16 : 0;
    const available = nw - fixedWidth() - gap - iconBtnsWidth() - 16;
    const fits = Math.floor(available / btnWidth()) - 1;
    if (fits < 3) return 0;
    return Math.min(m, fits);
  };
  const showPageNumbers = () => effectiveMaxPages() > 0;
  createEffect(on([() => local.page, total], ([currentPage, totalPages]) => {
    const clamped = Math.max(1, Math.min(currentPage, totalPages));
    if (clamped !== currentPage) local.onPageChange(clamped);
  }));
  const pageSizeVal = () => local.pageSize ?? 10;
  const start = () => (page() - 1) * pageSizeVal();
  const end = () => Math.min(start() + pageSizeVal(), local.totalItems ?? 0);
  const pageSizeOptions = () => local.pageSizeOptions ?? DEFAULT_PAGE_SIZE_OPTIONS;
  const pageSizeSelectOptions = () => pageSizeOptions().map((n) => ({ value: String(n), label: String(n) }));
  const uniqueId = createUniqueId();
  const selectElId = () => local.selectId ?? `pagination-page-size-${uniqueId}`;
  const perPageLabelId = () => `pagination-per-page-label-${uniqueId}`;
  const pageRange = () => {
    const t2 = total();
    const c = page();
    const m = effectiveMaxPages();
    if (!showPageNumbers() || t2 <= 1) return [];
    if (t2 <= m) return range(1, t2);
    const result = [];
    result.push(1);
    const windowSize = Math.max(0, m - 2);
    if (windowSize === 0) {
      if (t2 > 2) result.push("...");
      result.push(t2);
      return result;
    }
    const half = Math.floor(windowSize / 2);
    let wStart = Math.max(2, c - half);
    let wEnd = Math.min(t2 - 1, wStart + windowSize - 1);
    wStart = Math.max(2, wEnd - windowSize + 1);
    if (wStart > 2) result.push("...");
    for (let i = wStart; i <= wEnd; i++) result.push(i);
    if (wEnd < t2 - 1) result.push("...");
    result.push(t2);
    return result;
  };
  const canPrev = () => page() > 1;
  const canNext = () => page() < total();
  function handlePageSizeChange(v) {
    const newPageSize = Number(v);
    if (newPageSize === pageSizeVal()) return;
    local.onPageSizeChange?.(newPageSize);
    local.onPageChange(1);
  }
  return <nav
    ref={(el) => navEl = el}
    role="navigation"
    aria-label={t().navAriaLabel}
    {...others}
    class={cn(
      "flex w-full items-center gap-4",
      hasInfo() || hasPageSize() ? "" : "justify-center",
      local.class
    )}
  >
			{
    /* Info + per-page selector. Measured by ResizeObserver for available-width calc. */
  }
			<div ref={(el) => fixedEl = el} class="flex shrink-0 items-center gap-4">
				<Show2 when={hasInfo()}>
					<p class="shrink-0 text-sm text-ink-600">
						{(local.totalItems ?? 0) === 0 ? <>
								{t().infoPrefix}
								<span class="font-medium text-ink-900">0</span>
								{t().infoMiddle}
								<span class="font-medium text-ink-900">0</span>
								{t().infoSuffix}
							</> : <>
								{t().infoPrefix}
								<span class="font-medium text-ink-900">{start() + 1}</span>–
								<span class="font-medium text-ink-900">{end()}</span>
								{t().infoMiddle}
								<span class="font-medium text-ink-900">{local.totalItems}</span>
								{t().infoSuffix}
							</>}
					</p>
				</Show2>
				<Show2 when={hasPageSize()}>
					<div class="flex shrink-0 items-center gap-2">
						<span id={perPageLabelId()} class="whitespace-nowrap text-sm text-ink-500">
							{t().perPage}
						</span>
						<Select
    id={selectElId()}
    aria-labelledby={perPageLabelId()}
    value={String(pageSizeVal())}
    onValueChange={handlePageSizeChange}
    options={pageSizeSelectOptions()}
  />
					</div>
				</Show2>
			</div>
			{
    /* All nav buttons in one gap-1 cluster: «first ‹prev [pages] next› last» */
  }
			<Show2 when={showNav()}>
				<div class={cn("flex items-center gap-1", (hasInfo() || hasPageSize()) && "ml-auto")}>
					<Show2 when={local.showFirstLast}>
						<Button
    type="button"
    variant="outlined"
    size="sm"
    iconOnly
    icon={icons.chevronsLeft({ class: "h-4 w-4", "aria-hidden": "true" })}
    aria-label={t().firstPage}
    disabled={!canPrev()}
    onClick={() => local.onPageChange(1)}
    class="rounded-lg"
  />
					</Show2>
					<Button
    type="button"
    variant="outlined"
    size="sm"
    iconOnly
    icon={icons.chevronLeft({ class: "h-4 w-4", "aria-hidden": "true" })}
    aria-label={t().previousPage}
    disabled={!canPrev()}
    onClick={() => local.onPageChange(page() - 1)}
    class="rounded-lg"
  />
					<Show2 when={showPageNumbers()}>
						<For2 each={pageRange()}>
							{(p) => typeof p === "number" ? <Button
    type="button"
    variant={p === page() ? "primary" : "outlined"}
    size="sm"
    aria-label={p === page() ? formatPage(t().currentPage, p) : formatPage(t().goToPage, p)}
    aria-current={p === page() ? "page" : void 0}
    onClick={() => local.onPageChange(p)}
    class="min-w-[2.25rem] rounded-lg"
    data-page-btns
  >
										{p}
									</Button> : <span class="px-1 text-ink-400" aria-hidden="true">
										…
									</span>}
						</For2>
					</Show2>
					<Button
    type="button"
    variant="outlined"
    size="sm"
    iconOnly
    icon={icons.chevronRight({ class: "h-4 w-4", "aria-hidden": "true" })}
    aria-label={t().nextPage}
    disabled={!canNext()}
    onClick={() => local.onPageChange(page() + 1)}
    class="rounded-lg"
  />
					<Show2 when={local.showFirstLast}>
						<Button
    type="button"
    variant="outlined"
    size="sm"
    iconOnly
    icon={icons.chevronsRight({ class: "h-4 w-4", "aria-hidden": "true" })}
    aria-label={t().lastPage}
    disabled={!canNext()}
    onClick={() => local.onPageChange(total())}
    class="rounded-lg"
  />
					</Show2>
				</div>
			</Show2>
		</nav>;
}

// src/components/navigation/Tabs.tsx
import { For as For3, splitProps as splitProps4 } from "solid-js";
import { Tabs as KobalteTabs } from "@kobalte/core/tabs";
function Tabs(props) {
  const [local, others] = splitProps4(props, [
    "tabs",
    "value",
    "defaultValue",
    "onValueChange",
    "ariaLabel",
    "class"
  ]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const resolvedValue = () => {
    const v = local.value;
    if (v === void 0) return void 0;
    return typeof v === "function" ? v() : v;
  };
  const isControlled = () => local.value !== void 0;
  const normalizedValue = () => {
    const v = resolvedValue();
    return v && v.length > 0 ? v : void 0;
  };
  return <div class={cn("mb-6 border-b border-surface-border", local.class)}>
			<KobalteTabs
    value={isControlled() ? normalizedValue() : void 0}
    defaultValue={!isControlled() ? local.defaultValue ?? local.tabs[0]?.id : void 0}
    onChange={local.onValueChange}
    {...others}
  >
				<KobalteTabs.List
    class="flex w-full flex-nowrap gap-1 overflow-x-auto rounded-none border-0 bg-transparent p-0"
    aria-label={local.ariaLabel ?? (zh() ? "\u6807\u7B7E\u9875" : "Tabs")}
  >
					<For3 each={local.tabs}>
						{(tab) => <KobalteTabs.Trigger
    value={tab.id}
    class="shrink-0 whitespace-nowrap rounded-none border-b-2 border-transparent bg-transparent px-5 py-3 text-sm font-medium text-ink-500 transition-colors hover:border-primary-300 hover:text-primary-700 data-[selected]:border-primary-500 data-[selected]:bg-transparent data-[selected]:text-primary-600 data-[selected]:shadow-none"
  >
								{tab.label}
							</KobalteTabs.Trigger>}
					</For3>
				</KobalteTabs.List>
			</KobalteTabs>
		</div>;
}
function TabsList(props) {
  const [local, others] = splitProps4(props, ["class"]);
  return <KobalteTabs.List
    class={cn(
      "inline-flex items-center gap-1 rounded-lg border border-surface-border bg-surface-raised p-1",
      local.class
    )}
    {...others}
  />;
}
function TabsTrigger(props) {
  const [local, others] = splitProps4(props, ["class"]);
  return <KobalteTabs.Trigger
    class={cn(
      "rounded-md px-3 py-1.5 text-xs font-medium text-ink-500 transition-colors",
      "data-[selected]:bg-surface-overlay data-[selected]:text-ink-900",
      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
      local.class
    )}
    {...others}
  />;
}
function TabsContent(props) {
  const [local, others] = splitProps4(props, ["class"]);
  return <KobalteTabs.Content
    class={cn("mt-4", local.class)}
    {...others}
  />;
}

// src/components/navigation/ViewSwitcher.tsx
import { For as For4, Show as Show3, createEffect as createEffect2, createMemo, createSignal as createSignal2, onCleanup as onCleanup2, onMount as onMount2, splitProps as splitProps5 } from "solid-js";
import { DropdownMenu as KobalteDropdownMenu2 } from "@kobalte/core/dropdown-menu";
var DIVIDER_WIDTH = 1;
var ESTIMATED_TAB_WIDTH = 80;
var OVERFLOW_TRIGGER_WIDTH = 100;
var ADD_BUTTON_WIDTH = 40;
function ViewSwitcher(props) {
  const [local] = splitProps5(props, [
    "views",
    "activeId",
    "onValueChange",
    "onAdd",
    "addIcon",
    "maxVisible",
    "moreLabel",
    "variant",
    "ariaLabel",
    "class"
  ]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const [dynamicMax, setDynamicMax] = createSignal2(null);
  let containerRef;
  const widthCache = /* @__PURE__ */ new Map();
  let lastContainerWidth = 0;
  const isEmbedded = () => local.variant === "embedded";
  const dividerWidth = () => isEmbedded() ? DIVIDER_WIDTH : 0;
  const maxVisible = () => {
    if (local.maxVisible != null) return Math.max(local.maxVisible, 1);
    const d = dynamicMax();
    return d != null ? Math.max(d, 1) : local.views.length;
  };
  const measureViews = createMemo(() => {
    const pinned = local.views.filter((v) => v.pinned);
    const unpinned = local.views.filter((v) => !v.pinned);
    return [...pinned, ...unpinned];
  });
  const renderViews = createMemo(() => {
    const sorted = measureViews();
    const max = maxVisible();
    if (max <= 0) return sorted;
    const activeIdx = sorted.findIndex((v) => v.id === local.activeId);
    if (activeIdx < 0 || activeIdx < max) return sorted;
    const result = [...sorted];
    [result[max - 1], result[activeIdx]] = [result[activeIdx], result[max - 1]];
    return result;
  });
  const visibleAndOverflow = createMemo(() => {
    const all = renderViews();
    const max = Math.min(maxVisible(), all.length);
    return { visible: all.slice(0, max), overflow: all.slice(max) };
  });
  const visibleViews = createMemo(() => visibleAndOverflow().visible);
  const overflowViews = createMemo(() => visibleAndOverflow().overflow);
  const fitCount = (views, available, reserved) => {
    const divW = dividerWidth();
    let total = 0;
    let count = 0;
    for (const view of views) {
      const w = widthCache.get(view.id) ?? ESTIMATED_TAB_WIDTH;
      const nextDividers = count * divW;
      if (total + w + nextDividers + reserved > available && count > 0) break;
      total += w;
      count++;
    }
    return count;
  };
  const measure = (force = false) => {
    if (!containerRef) return;
    const containerWidth = Math.ceil(containerRef.getBoundingClientRect().width);
    if (containerWidth <= 0) return;
    if (!force && containerWidth === lastContainerWidth) return;
    lastContainerWidth = containerWidth;
    const tabElements = containerRef.querySelectorAll("[data-view-tab]");
    for (const el of tabElements) {
      const id = el.dataset.viewId;
      if (id) {
        const width = Math.ceil(el.getBoundingClientRect().width) || el.offsetWidth;
        widthCache.set(id, width);
      }
    }
    const views = measureViews();
    const addReserve = local.onAdd ? ADD_BUTTON_WIDTH : 0;
    let count = fitCount(views, containerWidth, addReserve);
    if (count < views.length) {
      count = fitCount(views, containerWidth, addReserve + OVERFLOW_TRIGGER_WIDTH);
    }
    const next = Math.max(count, 1);
    setDynamicMax((prev) => prev !== next ? next : prev);
  };
  let raf = 0;
  const scheduleMeasure = (force = false) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => measure(force));
  };
  onMount2(() => {
    if (local.maxVisible != null) return;
    if (!containerRef) return;
    const ro = new ResizeObserver(() => scheduleMeasure(false));
    ro.observe(containerRef);
    scheduleMeasure(true);
    let cancelled = false;
    const fontsReady = typeof document !== "undefined" ? document.fonts?.ready : void 0;
    fontsReady?.then(() => {
      if (!cancelled) scheduleMeasure(true);
    });
    onCleanup2(() => {
      cancelled = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
    });
  });
  createEffect2(() => {
    if (local.maxVisible != null) return;
    let acc = local.views.length;
    for (const v of local.views) {
      acc = acc * 31 + v.id.length + v.label.length + (v.count ?? 0) + (v.pinned ? 1 : 0) | 0;
    }
    void acc;
    scheduleMeasure(true);
  });
  createEffect2(() => {
    const ids = new Set(local.views.map((v) => v.id));
    for (const key of widthCache.keys()) {
      if (!ids.has(key)) widthCache.delete(key);
    }
  });
  const onTabKeyDown = (e) => {
    const key = e.key;
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(key)) return;
    e.preventDefault();
    const tabs = containerRef?.querySelectorAll("[data-view-tab]");
    if (!tabs || tabs.length === 0) return;
    const idx = Array.prototype.indexOf.call(tabs, e.currentTarget);
    let next = idx;
    if (key === "ArrowLeft") next = Math.max(0, idx - 1);
    if (key === "ArrowRight") next = Math.min(tabs.length - 1, idx + 1);
    if (key === "Home") next = 0;
    if (key === "End") next = tabs.length - 1;
    tabs[next]?.focus();
    const nextId = tabs[next]?.dataset.viewId;
    if (nextId) local.onValueChange(nextId);
  };
  const containerClass = () => isEmbedded() ? "flex min-w-0 w-full items-stretch gap-0 overflow-hidden rounded-t-2xl" : "inline-flex w-full max-w-full items-center gap-1.5 overflow-hidden rounded-xl border border-surface-border bg-surface-dim px-2 py-1.5";
  return <div
    ref={(el) => containerRef = el}
    role="group"
    aria-label={local.ariaLabel ?? (zh() ? "\u89C6\u56FE" : "Views")}
    class={cn(containerClass(), local.class)}
  >
			{(() => {
    const vis = visibleViews();
    const ov = overflowViews();
    return <>
						<For4 each={vis}>
							{(view, i) => {
      const isActive = () => view.id === local.activeId;
      const isFirst = () => i() === 0;
      const isLastVisible = () => i() === vis.length - 1;
      const hideDivider = () => {
        const next = vis[i() + 1];
        return isActive() || next?.id === local.activeId;
      };
      return <>
										<button
        type="button"
        data-view-tab
        data-view-id={view.id}
        class={cn(
          "inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors",
          isEmbedded() && "max-w-[200px] shrink-0 rounded-t-2xl rounded-b-none border border-transparent border-b-0",
          isEmbedded() && isFirst() && "rounded-tl-2xl",
          isEmbedded() && isLastVisible() && "rounded-tr-2xl",
          isEmbedded() && (isActive() ? "relative z-10 -mx-px -mt-px bg-surface-raised text-ink-900 border border-surface-border border-b-transparent" : "bg-transparent text-ink-500 hover:text-ink-700"),
          !isEmbedded() && (isActive() ? "rounded-lg border border-surface-border bg-surface-raised text-ink-900 shadow-sm" : "rounded-lg border border-transparent text-ink-500 hover:text-ink-700 hover:bg-surface-overlay")
        )}
        aria-current={isActive() ? "page" : void 0}
        tabIndex={isActive() ? 0 : -1}
        onKeyDown={onTabKeyDown}
        onClick={() => local.onValueChange(view.id)}
      >
											<Show3 when={view.pinned}>
												{icons.pin({ width: 12, height: 12, class: "shrink-0 text-ink-400", "aria-hidden": "true" })}
											</Show3>
											<span class="min-w-0 truncate">{view.label}</span>
											<Show3 when={typeof view.count === "number"}>
												<span class="shrink-0 rounded-full bg-surface-overlay/80 px-2 py-0.5 text-xs font-semibold text-ink-600">
													{view.count}
												</span>
											</Show3>
										</button>
										<Show3 when={isEmbedded() && !isLastVisible() && !hideDivider()}>
											<span class="w-px bg-surface-border" role="presentation" aria-hidden="true" />
										</Show3>
									</>;
    }}
						</For4>
						<Show3 when={ov.length > 0}>
							<KobalteDropdownMenu2>
								<KobalteDropdownMenu2.Trigger as="button" type="button" class="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-ink-600 hover:bg-surface-raised hover:text-ink-900">
									{local.moreLabel ?? (zh() ? "\u66F4\u591A" : "More")}
									<span class="rounded-full bg-surface-overlay px-2 py-0.5 text-xs font-semibold text-ink-600">
										{ov.length}
									</span>
								</KobalteDropdownMenu2.Trigger>
								<DropdownMenuContent>
									<For4 each={ov}>
										{(view) => <DropdownMenuItem onSelect={() => local.onValueChange(view.id)}>
												<div class="flex w-full items-center justify-between gap-3">
													<div class="flex min-w-0 flex-1 items-center gap-2">
														<Show3 when={view.pinned}>
															{icons.pin({ width: 12, height: 12, class: "shrink-0 text-ink-400", "aria-hidden": "true" })}
														</Show3>
														<span class="truncate">{view.label}</span>
													</div>
													<Show3 when={typeof view.count === "number"}>
														<span class="shrink-0 rounded-full bg-surface-overlay px-2 py-0.5 text-xs font-semibold text-ink-600">
															{view.count}
														</span>
													</Show3>
												</div>
											</DropdownMenuItem>}
									</For4>
								</DropdownMenuContent>
							</KobalteDropdownMenu2>
						</Show3>
					</>;
  })()}
			<Show3 when={local.onAdd}>
				<Button
    iconOnly
    variant="ghost"
    size="xs"
    icon={local.addIcon}
    label={zh() ? "\u6DFB\u52A0\u89C6\u56FE" : "Add view"}
    onClick={local.onAdd}
    class="ml-2 self-center h-7 w-7 hover:bg-surface-raised hover:text-ink-900"
  />
			</Show3>
		</div>;
}

// src/components/navigation/Sidebar.tsx
import { splitProps as splitProps6, Show as Show4, For as For5 } from "solid-js";
import { createStore } from "solid-js/store";
function hasActiveItem(items) {
  for (const item of items) {
    if (item.active) return true;
    if (item.items && hasActiveItem(item.items)) return true;
  }
  return false;
}
function ChevronIcon() {
  const icons = useIcons();
  return icons.chevronDown({ class: "h-3.5 w-3.5 shrink-0 transition-transform rotate-90 [[data-expanded]>&]:rotate-0", "aria-hidden": "true" });
}
function Sidebar(props) {
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const [local, others] = splitProps6(props, [
    "header",
    "items",
    "groups",
    "linkComponent",
    "title",
    "showTitle",
    "collapsible",
    "collapsed",
    "onCollapseChange",
    "showIcons",
    "showBadges",
    "footer",
    "variant",
    "class"
  ]);
  const variantClasses = () => {
    switch (local.variant) {
      case "minimal":
        return "";
      case "padded":
        return "border-r border-surface-border bg-surface-raised";
      default:
        return "border-r border-surface-border";
    }
  };
  const hasStickyFooter = () => local.footer != null && typeof local.footer === "object" && "sticky" in local.footer && local.footer.sticky === true;
  const sidebarClass = () => cn(
    hasStickyFooter() ? "flex flex-col h-full min-w-0" : "h-full overflow-x-hidden overflow-y-auto min-w-0",
    variantClasses(),
    local.collapsed ? "w-16" : local.variant === "padded" ? "w-72" : "w-64",
    "transition-all duration-300 ease-in-out",
    local.class
  );
  const titleClass = () => cn(
    "shrink-0 flex items-center border-b border-surface-border/50",
    local.collapsed ? "justify-center px-3 py-3" : "justify-between px-4 py-3"
  );
  const navigationClass = () => cn(
    hasStickyFooter() ? "flex-1 overflow-x-hidden overflow-y-auto" : "",
    local.variant === "minimal" ? "p-2" : "p-3"
  );
  const footerClass = () => cn(
    "border-t border-surface-border p-4",
    local.collapsed ? "hidden" : "block"
  );
  const [groupOpenByTitle, setGroupOpenByTitle] = createStore({});
  const renderLink = (item, cls, children) => {
    const LinkTag = local.linkComponent;
    if (LinkTag) {
      return <LinkTag
        href={item.href}
        class={cls}
        onClick={item.onClick}
        aria-current={item.active ? "page" : void 0}
      >

					{children}

				</LinkTag>;
    }
    return <a
      href={item.href}
      class={cls}
      onClick={item.onClick}
      aria-current={item.active ? "page" : void 0}
    >

				{children}

			</a>;
  };
  const renderSidebarItem = (item, level = 0) => {
    const itemClass = () => cn(
      "flex items-center w-full min-w-0 transition-colors",
      local.variant === "minimal" ? "rounded px-2 py-1 text-xs" : local.variant === "padded" ? "rounded-lg px-4 py-2.5 text-sm" : "rounded-lg px-3 py-2 text-sm",
      "outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-inset",
      item.active ? [
        local.variant === "minimal" ? "" : "bg-primary-500/10",
        "text-primary-600 font-medium"
      ] : [
        "text-ink-600",
        local.variant === "minimal" ? "hover:text-ink-900" : "hover:bg-surface-overlay hover:text-ink-900"
      ],
      item.disabled && "opacity-50",
      level > 0 && "ml-4"
    );
    const iconClass = () => cn(
      "w-5 h-5 flex-shrink-0",
      (local.showIcons ?? true) && !local.collapsed && "mr-3",
      (local.showIcons ?? true) && local.collapsed && "mx-auto",
      item.active ? "text-primary-600" : "text-ink-500"
    );
    const badgeClass = () => cn(
      "px-2 py-0.5 text-xs rounded-full font-medium flex-shrink-0",
      (local.showBadges ?? true) && !local.collapsed && "ml-auto",
      item.active ? "bg-primary-100 text-primary-600" : "bg-surface-dim text-ink-600"
    );
    const ItemContent = () => <>

				<Show4 when={item.icon && (local.showIcons ?? true)}>

					<div class={iconClass()}>{item.icon}</div>

				</Show4>

				<Show4 when={!local.collapsed}>

					<span class="truncate">{item.label}</span>

				</Show4>

				<Show4 when={item.badge != null && (local.showBadges ?? true) && !local.collapsed}>

					<span class={badgeClass()}>{item.badge}</span>

				</Show4>

			</>;
    if (item.items && item.items.length > 0) {
      return <li>

					<div class="space-y-0.5">

						{item.href ? renderLink(item, itemClass(), <ItemContent />) : <button
        type="button"
        class={itemClass()}
        onClick={item.onClick}
        disabled={item.disabled}
        aria-current={item.active ? "page" : void 0}
      >

									<ItemContent />

								</button>}

						<Show4 when={!local.collapsed}>

							<ul class="ml-4 space-y-0.5">

								<For5 each={item.items}>

									{(child) => renderSidebarItem(child, level + 1)}

								</For5>

							</ul>

						</Show4>

					</div>

				</li>;
    }
    return <li>

				{item.href ? renderLink(item, itemClass(), <ItemContent />) : <button
      type="button"
      class={itemClass()}
      onClick={item.onClick}
      disabled={item.disabled}
      aria-current={item.active ? "page" : void 0}
    >

							<ItemContent />

						</button>}

			</li>;
  };
  const renderGroup = (group) => {
    const groupKey = group.id ?? group.title;
    if (group.collapsible) {
      const isOpen = () => hasActiveItem(group.items) || (groupOpenByTitle[groupKey] ?? (group.defaultOpen ?? false));
      return <CollapsibleRoot
        class="mb-2"
        open={isOpen()}
        onOpenChange={(next) => setGroupOpenByTitle(groupKey, next)}
      >

					<CollapsibleTrigger
        class={cn(
          "flex w-full items-center justify-between gap-1 rounded px-2 py-1",
          "text-[11px] font-semibold uppercase tracking-wider",
          "text-ink-400 hover:text-ink-600",
          "outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-inset"
        )}
      >

						<span>{group.title}</span>

						<ChevronIcon />

					</CollapsibleTrigger>

					<CollapsibleContentStyled variant="minimal" class="pt-0.5">

						<ul class="space-y-0.5">

							<For5 each={group.items}>

								{(item) => renderSidebarItem(item)}

							</For5>

						</ul>

					</CollapsibleContentStyled>

				</CollapsibleRoot>;
    }
    return <div class="mb-2">

				<Show4 when={group.title && !local.collapsed}>

					<p class="px-2 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-wider text-ink-400 select-none">

						{group.title}

					</p>

				</Show4>

				<ul class="space-y-0.5">

					<For5 each={group.items}>

						{(item) => renderSidebarItem(item)}

					</For5>

				</ul>

			</div>;
  };
  return <div class={sidebarClass()} {...others}>

			<Show4 when={local.header}>

				<div class="shrink-0">{local.header}</div>

			</Show4>

			<Show4 when={local.title && local.showTitle !== false || local.collapsible}>

				<div class={titleClass()}>

					<Show4 when={!local.collapsed && local.title && local.showTitle !== false}>

						<span class="text-base font-semibold text-ink-900 truncate">{local.title}</span>

					</Show4>

					<Show4 when={local.collapsible}>

						<button
    type="button"
    class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-ink-400 hover:bg-surface-overlay hover:text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
    onClick={() => local.onCollapseChange?.(!local.collapsed)}
    aria-label={local.collapsed ? zh() ? "\u5C55\u5F00\u4FA7\u8FB9\u680F" : "Expand sidebar" : zh() ? "\u6298\u53E0\u4FA7\u8FB9\u680F" : "Collapse sidebar"}
  >

							{icons.chevronLeft({ class: cn("h-4 w-4 transition-transform duration-200", local.collapsed && "rotate-180"), "aria-hidden": "true" })}

						</button>

					</Show4>

				</div>

			</Show4>



			<nav
    class={navigationClass()}
    aria-label={local.title || (zh() ? "\u4FA7\u8FB9\u680F\u5BFC\u822A" : "Sidebar navigation")}
  >

				<Show4 when={local.groups} fallback={<ul class={local.variant === "padded" ? "space-y-1" : "space-y-0.5"} role="list">

						<For5 each={local.items}>

							{(item) => renderSidebarItem(item)}

						</For5>

					</ul>}>

					<For5 each={local.groups}>

						{(group) => renderGroup(group)}

					</For5>

				</Show4>

			</nav>



			<Show4 when={local.footer}>

				<div class={footerClass()}>

					{!local.collapsed && local.footer && (typeof local.footer === "object" && "content" in local.footer ? local.footer.content : local.footer)}

				</div>

			</Show4>

		</div>;
}

// src/components/navigation/NavigationMenu.tsx
import { splitProps as splitProps7, Show as Show5, onMount as onMount3 } from "solid-js";
import { Menubar as KobalteMenuBar } from "@kobalte/core/menubar";
function injectMenuBarStyles() {
  const id = "torchui-menu-bar-styles";
  if (typeof document === "undefined") return;
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("style");
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = `
    @keyframes torchui-menu-in  { from { opacity: 0; transform: scale(0.96) } to { opacity: 1; transform: scale(1) } }
    @keyframes torchui-menu-out { from { opacity: 1; transform: scale(1) } to { opacity: 0; transform: scale(0.96) } }
    .torchui-menubar-content {
        transform-origin: var(--kb-menu-content-transform-origin);
        animation: torchui-menu-out 150ms ease-in forwards;
    }
    .torchui-menubar-content[data-expanded] {
        animation: torchui-menu-in 150ms ease-out;
    }
`;
}
function MenuBarTrigger(props) {
  const [local, others] = splitProps7(props, ["class", "children", "noChevron", "variant", "icon", "iconPosition"]);
  const icons = useIcons();
  const v = () => local.variant ?? "default";
  const ip = () => local.iconPosition ?? "start";
  const isStacked = () => ip() === "top" || ip() === "bottom";
  return <KobalteMenuBar.Trigger
    class={cn(
      "group relative inline-flex text-sm font-medium text-ink-700 transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
      isStacked() ? "flex-col items-center justify-center gap-1 px-3 py-2" : "flex-row items-center gap-1.5",
      v() === "default" && [
        !isStacked() && "h-9",
        "rounded-md px-3 py-2",
        "hover:bg-surface-overlay hover:text-ink-900",
        "data-[expanded]:bg-surface-overlay data-[expanded]:text-ink-900"
      ],
      v() === "underline" && [
        !isStacked() && "h-full",
        "rounded-none px-4",
        "hover:text-primary-600 data-[expanded]:text-primary-600"
      ],
      v() === "ghost" && [
        !isStacked() && "h-9",
        "rounded-md px-3 py-2",
        "hover:text-primary-600 data-[expanded]:text-primary-600"
      ],
      local.class
    )}
    {...others}
  >
			<Show5 when={local.icon && (ip() === "start" || ip() === "top")}>
				<span class="flex h-4 w-4 shrink-0 items-center justify-center">{local.icon}</span>
			</Show5>
			<span class={cn(isStacked() && "text-xs leading-none")}>{local.children}</span>
			<Show5 when={local.icon && (ip() === "end" || ip() === "bottom")}>
				<span class="flex h-4 w-4 shrink-0 items-center justify-center">{local.icon}</span>
			</Show5>
			<Show5 when={!local.noChevron && !isStacked()}>
				{icons.chevronDown({
    class: "relative h-3.5 w-3.5 shrink-0 text-ink-400 transition-transform duration-200 group-data-[expanded]:rotate-180",
    "aria-hidden": "true"
  })}
			</Show5>
			<Show5 when={v() === "underline"}>
				<span
    aria-hidden="true"
    class="absolute inset-x-0 bottom-0 h-[2px] origin-center scale-x-0 bg-primary-500 transition-transform duration-200 group-hover:scale-x-100 group-data-[expanded]:scale-x-100"
  />
			</Show5>
		</KobalteMenuBar.Trigger>;
}
function MenuBarContent(props) {
  const [local, others] = splitProps7(props, ["class", "children"]);
  return <KobalteMenuBar.Portal>
			<KobalteMenuBar.Content
    class={cn(
      "torchui-menubar-content",
      "z-[9999] mt-2 rounded-xl border border-surface-border bg-surface-raised shadow-lg p-2 outline-none",
      local.class
    )}
    {...others}
  >
				{local.children}
			</KobalteMenuBar.Content>
		</KobalteMenuBar.Portal>;
}
function MenuBarItem(props) {
  const [local, others] = splitProps7(props, ["class", "children", "icon", "description", "iconPosition"]);
  const ip = () => local.iconPosition ?? "start";
  return <KobalteMenuBar.Item
    class={cn(
      "relative flex cursor-default select-none rounded-lg px-3 py-2 text-sm outline-none transition-colors",
      "text-ink-700 hover:bg-surface-overlay hover:text-ink-900",
      "focus-visible:bg-surface-overlay focus-visible:text-ink-900",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      ip() === "start" || ip() === "end" ? "items-start gap-2.5" : "flex-col items-center text-center gap-1.5",
      ip() === "end" && "flex-row-reverse",
      ip() === "bottom" && "flex-col-reverse",
      local.class
    )}
    {...others}
  >
			<Show5 when={local.icon}>
				<span class={cn(
    "flex shrink-0 items-center justify-center text-ink-500",
    ip() === "start" || ip() === "end" ? "mt-0.5 h-5 w-5" : "h-5 w-5"
  )}>
					{local.icon}
				</span>
			</Show5>
			<div class={cn("min-w-0", (ip() === "start" || ip() === "end") && "flex-1")}>
				<div class="font-medium text-ink-900">{local.children}</div>
				<Show5 when={local.description}>
					<div class="mt-0.5 text-xs text-ink-500 leading-relaxed">{local.description}</div>
				</Show5>
			</div>
		</KobalteMenuBar.Item>;
}
function MenuBarLabel(props) {
  return <div class={cn("px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400", props.class)}>
			{props.children}
		</div>;
}
function MenuBarDivider(props) {
  return <div role="separator" aria-orientation="horizontal" class={cn("-mx-2 my-1 h-px bg-surface-border", props.class)} />;
}
function MenuBarLink(props) {
  const v = () => props.variant ?? "default";
  const ip = () => props.iconPosition ?? "start";
  return <a
    href={props.disabled ? void 0 : props.href}
    aria-disabled={props.disabled ? "true" : void 0}
    tabIndex={props.disabled ? -1 : void 0}
    onClick={props.disabled ? (e) => e.preventDefault() : void 0}
    class={cn(
      "relative flex select-none text-sm outline-none transition-colors",
      ip() === "start" || ip() === "end" ? "items-start gap-2.5" : "flex-col items-center text-center gap-1.5",
      ip() === "end" && "flex-row-reverse",
      ip() === "bottom" && "flex-col-reverse",
      v() === "default" && [
        "rounded-lg px-3 py-2",
        props.active ? "bg-primary-50 text-primary-700" : "text-ink-700 hover:bg-surface-overlay hover:text-ink-900"
      ],
      v() === "underline" && [
        "rounded-lg px-3 py-2",
        props.active ? "text-primary-700 underline underline-offset-2" : "text-ink-700 hover:text-ink-900 hover:underline hover:underline-offset-2"
      ],
      v() === "ghost" && [
        "rounded-lg px-3 py-2",
        props.active ? "text-primary-700" : "text-ink-500 hover:text-ink-900"
      ],
      props.class
    )}
  >
			<Show5 when={props.icon}>
				<span class={cn(
    "flex shrink-0 items-center justify-center",
    ip() === "start" || ip() === "end" ? "mt-0.5 h-5 w-5" : "h-5 w-5",
    props.active ? "text-primary-500" : "text-ink-500"
  )}>
					{props.icon}
				</span>
			</Show5>
			<div class={cn("min-w-0", (ip() === "start" || ip() === "end") && "flex-1")}>
				<div class={cn("font-medium", props.active ? "text-primary-700" : "text-ink-900")}>
					{props.children}
				</div>
				<Show5 when={props.description}>
					<div class="mt-0.5 text-xs text-ink-500 leading-relaxed">{props.description}</div>
				</Show5>
			</div>
		</a>;
}
function MenuBarRoot(props) {
  const [local, others] = splitProps7(props, ["class", "children", "justify"]);
  onMount3(injectMenuBarStyles);
  return <KobalteMenuBar
    class={cn(
      "flex h-full items-center gap-1",
      local.justify === "center" && "justify-center",
      local.justify === "end" && "justify-end",
      local.class
    )}
    {...others}
  >
			{local.children}
		</KobalteMenuBar>;
}
function MenuBarMenu(props) {
  return <KobalteMenuBar.Menu {...props} />;
}
function MenuBarNavLink(props) {
  const v = () => props.variant ?? "default";
  return <a
    href={props.disabled ? void 0 : props.href}
    aria-disabled={props.disabled ? "true" : void 0}
    tabIndex={props.disabled ? -1 : void 0}
    onClick={props.disabled ? (e) => e.preventDefault() : void 0}
    class={cn(
      "group relative inline-flex h-full items-center text-sm font-medium text-ink-700 transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
      v() === "default" && "h-9 rounded-md px-3 py-2 hover:bg-surface-overlay hover:text-ink-900",
      v() === "underline" && "rounded-none px-4 hover:text-primary-600",
      v() === "ghost" && "h-9 rounded-md px-3 py-2 hover:text-primary-600",
      props.class
    )}
  >
			{props.children}
			<Show5 when={v() === "underline"}>
				<span
    aria-hidden="true"
    class="absolute inset-x-0 bottom-0 h-[2px] origin-center scale-x-0 bg-primary-500 transition-transform duration-200 group-hover:scale-x-100"
  />
			</Show5>
		</a>;
}
var MenuBar = Object.assign(MenuBarRoot, {
  Menu: MenuBarMenu,
  Trigger: MenuBarTrigger,
  Content: MenuBarContent,
  Item: MenuBarItem,
  NavLink: MenuBarNavLink,
  Label: MenuBarLabel,
  Divider: MenuBarDivider,
  Link: MenuBarLink
});

// src/components/navigation/MegaMenu.tsx
import { Show as Show6, splitProps as splitProps8, onMount as onMount4, createContext, useContext } from "solid-js";
import { Dynamic } from "solid-js/web";
import { NavigationMenu as KobalteNavigationMenu } from "@kobalte/core/navigation-menu";
var VariantContext = createContext("default");
var InvertedContext = createContext(false);
function injectMegaMenuStyles() {
  document.getElementById("torchui-mega-menu-styles")?.remove();
  document.getElementById("torchui-mega-menu-styles-v2")?.remove();
  const id = "torchui-mega-menu-styles-v3";
  const el = document.getElementById(id);
  if (el) return;
  const style = document.createElement("style");
  style.id = id;
  document.head.appendChild(style);
  style.textContent = `
		/* No width transition: animating viewport width reflows text every frame and reads as blurry. */
		.torchui-mm-viewport {
			position: relative;
			transform-origin: var(--kb-menu-content-transform-origin);
			pointer-events: none;
			opacity: 0;
			overflow-x: clip;
			overflow-y: visible;
			outline: none;
			transition: opacity 120ms ease;
		}
		.torchui-mm-viewport[data-expanded] {
			pointer-events: auto;
			opacity: 1;
			transform: none;
		}
		.torchui-mm-arrow {
			color: var(--color-surface-raised);
			transition: transform 200ms ease;
		}
		.torchui-mm-content { 
			position: absolute; 
			top: 0; 
			left: 0; 
			z-index: 1; 
			min-width: max-content;
			animation-duration: 80ms;
			animation-timing-function: ease;
			animation-fill-mode: forwards;
			pointer-events: none;
			outline: none;
		}
		.torchui-mm-viewport[data-fullwidth] .torchui-mm-content { width: 100%; min-width: unset; }
		.torchui-mm-viewport[data-fullwidth] { transform-origin: top left; }
		.torchui-mm-content:not([data-expanded]):not([data-motion]) { opacity: 0; pointer-events: none; }
		.torchui-mm-content[data-expanded]              { pointer-events: auto; z-index: 2; transform: none; }
		.torchui-mm-content[data-motion="from-end"]     { animation-name: torchui-mm-from-end;   z-index: 2; }
		.torchui-mm-content[data-motion="from-start"]   { animation-name: torchui-mm-from-start; z-index: 2; }
		.torchui-mm-content[data-motion="to-end"]       { animation-name: torchui-mm-to-end;     z-index: 1; }
		.torchui-mm-content[data-motion="to-start"]     { animation-name: torchui-mm-to-start;   z-index: 1; }
		@keyframes torchui-mm-from-end   { from { opacity: 0; } to { opacity: 1; } }
		@keyframes torchui-mm-from-start { from { opacity: 0; } to { opacity: 1; } }
		@keyframes torchui-mm-to-end     { from { opacity: 1; } to { opacity: 0; } }
		@keyframes torchui-mm-to-start   { from { opacity: 1; } to { opacity: 0; } }
		.torchui-mm-root { display: flex; gap: 0.25rem; position: relative; height: 100%; align-items: stretch; width: 100%; min-width: max-content; }
		.torchui-mm-root > div { height: 100%; }
		.torchui-mm-root > div > li { height: 100%; display: flex; }
		.torchui-mm-root[data-variant="underline"] { align-items: stretch; }
		.torchui-mm-root[data-variant="default"],
		.torchui-mm-root[data-variant="ghost"]     { align-items: center; }
		.torchui-mm-root ul[role="menubar"]        { display: flex; gap: inherit; align-items: inherit; }
		.torchui-mm-root[data-variant="underline"] button[role="menuitem"],
		.torchui-mm-root[data-variant="underline"] a { padding-top: 2px; }
	`;
}
function MegaMenuBar(props) {
  const [local, others] = splitProps8(props, ["class", "children", "variant", "fullWidth", "containerRef", "justify", "inverted"]);
  const variant = () => local.variant ?? "default";
  const isUnderline = () => variant() === "underline";
  let wrapperRef;
  onMount4(() => {
    injectMegaMenuStyles();
  });
  return <div ref={wrapperRef} class={cn(
    "relative flex h-full self-stretch",
    variant() === "underline" ? "items-stretch" : "items-center",
    local.justify === "center" && "justify-center",
    local.justify === "end" && "justify-end",
    local.justify && "w-full",
    local.class
  )}>
			<KobalteNavigationMenu
    data-variant={variant()}
    class="torchui-mm-root"
    getAnchorRect={local.fullWidth ? (() => {
      const el = local.containerRef ?? wrapperRef;
      const rect = el.getBoundingClientRect();
      return { x: rect.left, y: rect.bottom, width: rect.width, height: 0 };
    }) : void 0}
    sameWidth={local.fullWidth}
    {...others}
  >
				<VariantContext.Provider value={variant()}>
				<InvertedContext.Provider value={local.inverted ?? false}>
					{local.children}
				</InvertedContext.Provider>
				</VariantContext.Provider>

				{
    /* Viewport anchor */
  }
				<div class="z-[9999] pointer-events-none absolute top-full left-0 flex w-full justify-center">
					<KobalteNavigationMenu.Viewport
    data-fullwidth={local.fullWidth ? "" : void 0}
    class={cn(
      "torchui-mm-viewport",
      "relative isolate border border-surface-border bg-surface-raised shadow-lg",
      local.fullWidth ? "mt-0" : isUnderline() ? "mt-0" : "mt-3",
      local.fullWidth ? "w-full rounded-b-xl rounded-t-none h-[var(--kb-navigation-menu-viewport-height)]" : "rounded-xl h-[var(--kb-navigation-menu-viewport-height)] w-[var(--kb-navigation-menu-viewport-width)]"
    )}
  >
						<KobalteNavigationMenu.Arrow class="torchui-mm-arrow" />
					</KobalteNavigationMenu.Viewport>
				</div>
			</KobalteNavigationMenu>
		</div>;
}
function MegaMenuMenu(props) {
  const [local, others] = splitProps8(props, ["class"]);
  const variant = useContext(VariantContext);
  return <div class={cn(
    "flex items-stretch",
    variant === "underline" && "self-stretch",
    local.class
  )}>
			<KobalteNavigationMenu.Menu {...others} />
		</div>;
}
function MegaMenuTrigger(props) {
  const [local, others] = splitProps8(props, ["class", "children", "noChevron", "variant", "icon", "iconPosition"]);
  const icons = useIcons();
  const contextVariant = useContext(VariantContext);
  const inv = useContext(InvertedContext);
  const v = () => local.variant ?? contextVariant;
  const ip = () => local.iconPosition ?? "start";
  const isStacked = () => ip() === "top" || ip() === "bottom";
  return <KobalteNavigationMenu.Trigger
    class={cn(
      "group relative flex items-center gap-1.5 text-sm font-medium transition-colors",
      inv ? "text-white/65" : "text-ink-700",
      "outline-none",
      v() !== "underline" && (inv ? "data-[focus-visible]:ring-2 data-[focus-visible]:ring-white/40" : "data-[focus-visible]:ring-2 data-[focus-visible]:ring-primary-500/50"),
      v() === "default" && [
        !isStacked() && "h-9",
        "rounded-md px-3 py-2",
        inv ? "hover:bg-white/10 hover:text-white data-[expanded]:bg-white/10 data-[expanded]:text-white" : "hover:bg-surface-overlay hover:text-ink-900 data-[expanded]:bg-surface-overlay data-[expanded]:text-ink-900"
      ],
      v() === "underline" && [
        "h-full rounded-none px-3",
        isStacked() && "py-2",
        "border-b-2 border-transparent",
        inv ? "hover:border-white/60 hover:text-white data-[expanded]:border-white/60 data-[expanded]:text-white" : "hover:border-primary-500 hover:text-primary-600 data-[expanded]:border-primary-500 data-[expanded]:text-primary-600"
      ],
      v() === "ghost" && [
        !isStacked() && "h-9",
        "rounded-md px-3 py-2",
        inv ? "hover:text-white data-[expanded]:text-white" : "hover:text-primary-600 data-[expanded]:text-primary-600"
      ],
      local.class
    )}
    {...others}
  >
			{
    /* top/bottom: icon+label stacked in a flex-col block, chevron to the right */
  }
			<Show6 when={isStacked()}>
				<span class="flex flex-col items-center gap-1 translate-y-1">
					<Show6 when={local.icon && ip() === "top"}>
						<span class="flex h-4 w-4 shrink-0 items-center justify-center [&>svg]:h-full [&>svg]:w-full">{local.icon}</span>
					</Show6>
					<span class="text-xs leading-none">{local.children}</span>
					<Show6 when={local.icon && ip() === "bottom"}>
						<span class="flex h-4 w-4 shrink-0 items-center justify-center [&>svg]:h-full [&>svg]:w-full">{local.icon}</span>
					</Show6>
				</span>
			</Show6>
			{
    /* start/end: normal inline layout */
  }
			<Show6 when={!isStacked()}>
				<Show6 when={local.icon && ip() === "start"}>
					<span class="flex h-4 w-4 shrink-0 items-center justify-center [&>svg]:h-full [&>svg]:w-full">{local.icon}</span>
				</Show6>
				<span>{local.children}</span>
				<Show6 when={local.icon && ip() === "end"}>
					<span class="flex h-4 w-4 shrink-0 items-center justify-center [&>svg]:h-full [&>svg]:w-full">{local.icon}</span>
				</Show6>
			</Show6>
			<Show6 when={!local.noChevron && !isStacked()}>
				{icons.chevronDown({
    class: cn(
      "relative h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-data-[expanded]:rotate-180",
      inv ? "text-white/40 group-hover:text-white/60" : "text-ink-400"
    ),
    "aria-hidden": "true"
  })}
			</Show6>
		</KobalteNavigationMenu.Trigger>;
}
function MegaMenuContent(props) {
  const [local, others] = splitProps8(props, ["class", "children"]);
  return <KobalteNavigationMenu.Portal>
			{
    /* `as="div"`: default Kobalte NavigationMenu.Content is `ul`; our panel is divs + buttons. Invalid
       `ul > div` makes browsers insert implied list boxes, so each extra row looks progressively indented. */
  }
			<KobalteNavigationMenu.Content
    as="div"
    class={cn("torchui-mm-content", local.class)}
    {...others}
  >
				{local.children}
			</KobalteNavigationMenu.Content>
		</KobalteNavigationMenu.Portal>;
}
function MegaMenuPanel(props) {
  const cols = () => props.columns ?? 3;
  const gridClass = () => ({ 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4" })[cols()] ?? "grid-cols-3";
  return props.fullWidth ? <div class={cn("w-full px-6 py-5", props.class)}>
			<div class={cn("mx-auto grid gap-x-8 gap-y-2", gridClass())} style={{ "max-width": props.maxWidth ?? "1280px" }}>
				{props.children}
			</div>
		</div> : <div class={cn("grid gap-x-6 gap-y-2 p-5", gridClass(), props.class)}>
			{props.children}
		</div>;
}
function MegaMenuColumn(props) {
  return <div class={cn("flex flex-col gap-1", props.class)}>
			{props.children}
		</div>;
}
function MegaMenuSection(props) {
  return <div class={cn("flex flex-col gap-1", props.class)}>
			<div class="px-3 text-[11px] font-semibold uppercase tracking-widest text-ink-400">
				{props.label}
			</div>
			<div class="flex flex-col gap-1">
				{props.children}
			</div>
		</div>;
}
function MegaMenuItem(props) {
  return <Dynamic
    component={props.href && !props.disabled ? "a" : "button"}
    href={props.href && !props.disabled ? props.href : void 0}
    type={props.href && !props.disabled ? void 0 : "button"}
    tabIndex={props.disabled ? -1 : void 0}
    onClick={(e) => {
      if (props.disabled) {
        e.preventDefault();
        return;
      }
      props.onClick?.();
    }}
    aria-disabled={props.disabled ? "true" : void 0}
    class={cn(
      "group flex w-full min-w-0 items-start gap-3 rounded-lg px-3 py-1.5 text-left text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary-500/50",
      props.active ? "bg-primary-50" : "hover:bg-surface-overlay",
      props.disabled && "pointer-events-none opacity-40",
      props.class
    )}
  >
			<Show6 when={props.icon}>
				<span class={cn(
    "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors [&>svg]:h-4 [&>svg]:w-4",
    props.active ? "bg-primary-100 text-primary-600" : "bg-surface-overlay text-ink-500 group-hover:bg-surface-dim group-hover:text-ink-700"
  )}>
					{props.icon}
				</span>
			</Show6>
			<div class="min-w-0 flex-1">
				<div class="flex items-center gap-2">
					<span class={cn("font-medium leading-none", props.active ? "text-primary-700" : "text-ink-900")}>
						{props.label}
					</span>
					<Show6 when={props.badge}>
						<span class="rounded-full bg-primary-100 px-1.5 py-0.5 text-[10px] font-semibold text-primary-700">
							{props.badge}
						</span>
					</Show6>
				</div>
				<Show6 when={props.description}>
					<div class="mt-0.5 text-xs leading-relaxed text-ink-500">{props.description}</div>
				</Show6>
			</div>
		</Dynamic>;
}
function MegaMenuFeatured(props) {
  const icons = useIcons();
  return <Dynamic
    component={props.href ? "a" : "div"}
    href={props.href}
    class={cn(
      "group relative flex h-full flex-col justify-between overflow-hidden rounded-xl p-5 outline-none transition-opacity hover:opacity-90",
      "focus-visible:ring-2 focus-visible:ring-white/70",
      props.backgroundClass ?? "bg-gradient-to-br from-primary-500 to-primary-600",
      props.class
    )}
  >
			<Show6 when={props.image}>
				<div class="pointer-events-none absolute inset-0 opacity-20">{props.image}</div>
			</Show6>
			<div class="relative">
				<p class="text-sm font-semibold text-white">{props.title}</p>
				<Show6 when={props.description}>
					<p class="mt-1 text-xs text-white/70 leading-relaxed" style={{ "max-width": "160px" }}>{props.description}</p>
				</Show6>
			</div>
			<div class="relative mt-4 flex items-center gap-1 text-xs font-semibold text-white">
				{props.cta ?? "Learn more"}
				{icons.chevronRight({ class: "h-3 w-3 transition-transform group-hover:translate-x-0.5", "aria-hidden": "true" })}
			</div>
		</Dynamic>;
}
function MegaMenuDivider(props) {
  return <div role="separator" aria-orientation="horizontal" class={cn("my-2 h-px bg-surface-border", props.class)} />;
}
function MegaMenuFooter(props) {
  return <div class={cn("border-t border-surface-border", props.fullWidth ? "px-6 py-3" : "px-5 py-3", props.class)}>
			<div
    class="flex items-center gap-2"
    style={props.fullWidth ? { "max-width": props.maxWidth ?? "1280px", margin: "0 auto" } : {}}
  >
				{props.children}
			</div>
		</div>;
}
function MegaMenuFooterLink(props) {
  return <Dynamic
    component={props.href ? "a" : "button"}
    href={props.href}
    type={props.href ? void 0 : "button"}
    onClick={props.onClick}
    class={cn(
      "text-xs font-medium text-ink-500 hover:text-primary-600 transition-colors",
      "outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
      props.class
    )}
  >
			{props.children}
		</Dynamic>;
}
function MegaMenuBarLink(props) {
  const contextVariant = useContext(VariantContext);
  const v = () => props.variant ?? contextVariant;
  return <div class={cn("flex items-stretch", v() === "underline" && "h-full")}>
			<a
    href={props.href}
    class={cn(
      "flex items-center text-sm font-medium text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
      v() === "default" && "h-9 rounded-md px-3 py-2 hover:bg-surface-overlay hover:text-ink-900",
      v() === "underline" && [
        "h-full rounded-none px-3",
        "border-b-2 border-transparent",
        "hover:border-primary-500 hover:text-primary-600"
      ],
      v() === "ghost" && "h-9 rounded-md px-3 py-2 hover:text-primary-600",
      props.class
    )}
  >
				{props.children}
			</a>
		</div>;
}
var MegaMenu = Object.assign(MegaMenuBar, {
  Menu: MegaMenuMenu,
  Trigger: MegaMenuTrigger,
  Content: MegaMenuContent,
  Panel: MegaMenuPanel,
  Column: MegaMenuColumn,
  Section: MegaMenuSection,
  Item: MegaMenuItem,
  Featured: MegaMenuFeatured,
  Divider: MegaMenuDivider,
  Footer: MegaMenuFooter,
  FooterLink: MegaMenuFooterLink,
  BarLink: MegaMenuBarLink
});

export {
  Breadcrumbs,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenu,
  Pagination,
  KobalteTabs,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  ViewSwitcher,
  Sidebar,
  MenuBarTrigger,
  MenuBarContent,
  MenuBarItem,
  MenuBarLabel,
  MenuBarDivider,
  MenuBarLink,
  MenuBarMenu,
  MenuBarNavLink,
  MenuBar,
  MegaMenuBar,
  MegaMenuMenu,
  MegaMenuTrigger,
  MegaMenuContent,
  MegaMenuPanel,
  MegaMenuColumn,
  MegaMenuSection,
  MegaMenuItem,
  MegaMenuFeatured,
  MegaMenuDivider,
  MegaMenuFooter,
  MegaMenuFooterLink,
  MegaMenuBarLink,
  MegaMenu
};
