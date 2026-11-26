import {
  resolveLocale,
  useIcons,
  useLocaleConfig
} from "./5X6JRKCS.jsx";
import {
  cn
} from "./N5KQYWCA.jsx";

// src/components/overlays/ContextMenu.tsx
import { splitProps } from "solid-js";
import { ContextMenu as KobalteContextMenu } from "@kobalte/core/context-menu";
var _KbContent = KobalteContextMenu.Content;
var _KbItem = KobalteContextMenu.Item;
var _KbSeparator = KobalteContextMenu.Separator;
var ContextMenuRoot = KobalteContextMenu;
var ContextMenuTrigger = KobalteContextMenu.Trigger;
function ContextMenuContent(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return <KobalteContextMenu.Portal>
			<_KbContent
    class={cn(
      "z-[80] min-w-[160px] rounded-lg border border-surface-border bg-surface-raised p-1 shadow-lg outline-none",
      local.class
    )}
    {...others}
  >
				{local.children}
			</_KbContent>
		</KobalteContextMenu.Portal>;
}
function ContextMenuItem(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
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
function ContextMenuSeparator(props) {
  const [local, others] = splitProps(props, ["class"]);
  return <_KbSeparator
    class={cn("my-1 h-px border-none bg-surface-border", local.class)}
    {...others}
  />;
}
var ContextMenu = Object.assign(ContextMenuRoot, {
  Trigger: ContextMenuTrigger,
  Content: ContextMenuContent,
  Item: ContextMenuItem,
  Separator: ContextMenuSeparator
});

// src/components/overlays/HoverCard.tsx
import { splitProps as splitProps2 } from "solid-js";
import { HoverCard as KobalteHoverCard } from "@kobalte/core/hover-card";
function HoverCardRoot(props) {
  const [local, others] = splitProps2(props, ["align", "side", "placement"]);
  const side = () => local.side ?? "bottom";
  const align = () => local.align ?? "center";
  const placement = () => {
    if (local.placement) return local.placement;
    const s = side();
    const a = align();
    return a === "center" ? s : `${s}-${a}`;
  };
  return <KobalteHoverCard
    {...others}
    placement={placement()}
  />;
}
var HoverCardTrigger = KobalteHoverCard.Trigger;
var HoverCardPortal = KobalteHoverCard.Portal;
var HoverCardArrow = KobalteHoverCard.Arrow;
function HoverCardContent(props) {
  const [local, others] = splitProps2(props, ["class", "children", "showArrow"]);
  return <KobalteHoverCard.Portal>
			<KobalteHoverCard.Content
    class={cn(
      "z-[80] min-w-[220px] max-w-sm rounded-xl border border-surface-border bg-surface-raised shadow-lg",
      "data-[expanded]:animate-in data-[closed]:animate-out",
      "data-[expanded]:fade-in-0 data-[closed]:fade-out-0",
      "data-[expanded]:zoom-in-95 data-[closed]:zoom-out-95",
      "data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2",
      "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
      local.class
    )}
    {...others}
  >
				{local.children}
				{local.showArrow !== false && <KobalteHoverCard.Arrow class="fill-surface-raised stroke-surface-border" />}
			</KobalteHoverCard.Content>
		</KobalteHoverCard.Portal>;
}
function HoverCardHeader(props) {
  return <div class={cn("px-4 pt-4 pb-2", props.class)}>
			{props.children}
		</div>;
}
function HoverCardBody(props) {
  return <div class={cn("px-4 py-3", props.class)}>
			{props.children}
		</div>;
}
function HoverCardFooter(props) {
  return <div class={cn("px-4 pb-4 pt-2 border-t border-surface-border", props.class)}>
			{props.children}
		</div>;
}
function HoverCardSeparator(props) {
  return <div class={cn("h-px bg-surface-border", props.class)} />;
}
var HoverCard = Object.assign(HoverCardRoot, {
  Trigger: HoverCardTrigger,
  Content: HoverCardContent,
  Header: HoverCardHeader,
  Body: HoverCardBody,
  Footer: HoverCardFooter,
  Separator: HoverCardSeparator
});

// src/components/overlays/SearchPalette.tsx
import { createSignal, createEffect, on, Show, For, Index, splitProps as splitProps3, onMount, onCleanup } from "solid-js";
import { Dialog as KobalteDialog } from "@kobalte/core/dialog";
function SearchPalette(props) {
  const [local, others] = splitProps3(props, [
    "open",
    "onOpenChange",
    "query",
    "onQueryChange",
    "categories",
    "selectedCategories",
    "onCategoryChange",
    "groups",
    "onSelect",
    "placeholder",
    "emptyMessage",
    "categoriesLabel",
    "showKeyboardHints",
    "class"
  ]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  let inputRef;
  const [activeIndex, setActiveIndex] = createSignal(-1);
  const flatItems = () => {
    const items = [];
    for (const group of local.groups) {
      for (const item of group.items) {
        items.push(item);
      }
    }
    return items;
  };
  createEffect(on(() => local.groups, () => setActiveIndex(-1)));
  createEffect(on(() => local.open, (open) => {
    if (open) {
      setActiveIndex(-1);
      requestAnimationFrame(() => inputRef?.focus());
    }
  }));
  const handleGlobalKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      local.onOpenChange(!local.open);
    }
  };
  onMount(() => {
    document.addEventListener("keydown", handleGlobalKeyDown);
  });
  onCleanup(() => {
    document.removeEventListener("keydown", handleGlobalKeyDown);
  });
  function handleKeyDown(e) {
    const items = flatItems();
    const count = items.length;
    if (count === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % count);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => i <= 0 ? count - 1 : i - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const idx = activeIndex();
      if (idx >= 0 && idx < count) {
        local.onSelect(items[idx]);
      }
    }
  }
  function toggleCategory(key) {
    const current = local.selectedCategories ?? [];
    const next = current.includes(key) ? current.filter((k) => k !== key) : [...current, key];
    local.onCategoryChange?.(next);
  }
  const totalItems = () => {
    let n = 0;
    for (const g of local.groups) n += g.items.length;
    return n;
  };
  const flatIndex = (groupIdx, itemIdx) => {
    let idx = 0;
    for (let g = 0; g < groupIdx; g++) {
      idx += local.groups[g].items.length;
    }
    return idx + itemIdx;
  };
  const resolveContent = (value) => typeof value === "function" ? value() : value;
  return <KobalteDialog open={local.open} onOpenChange={local.onOpenChange}>
			<KobalteDialog.Portal>
				<KobalteDialog.Overlay
    class="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
  />
				<div class="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
					<KobalteDialog.Content
    class={cn(
      "w-full max-w-lg rounded-xl bg-surface-raised shadow-2xl border border-surface-border",
      "flex flex-col max-h-[60vh]",
      local.class
    )}
    onKeyDown={handleKeyDown}
  >
						{
    /* Search input */
  }
						<div class="flex items-center gap-3 border-b border-surface-border px-4 py-3">
							{icons.search({ class: "h-5 w-5 shrink-0 text-ink-400", "aria-hidden": "true" })}
							<input
    ref={inputRef}
    type="text"
    value={local.query}
    onInput={(e) => local.onQueryChange(e.currentTarget.value)}
    placeholder={local.placeholder ?? (zh() ? "\u641C\u7D22\u2026" : "Search\u2026")}
    class="flex-1 bg-transparent text-sm text-ink-900 placeholder:text-ink-400 outline-none"
  />
							<Show when={local.query.length > 0}>
								<button
    type="button"
    onClick={() => {
      local.onQueryChange("");
      inputRef?.focus();
    }}
    class="shrink-0 rounded p-0.5 text-ink-400 hover:text-ink-600 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
    aria-label={zh() ? "\u6E05\u9664\u641C\u7D22" : "Clear search"}
  >
									{icons.close({ class: "h-4 w-4", "aria-hidden": "true" })}
								</button>
							</Show>
						</div>

						{
    /* Categories */
  }
						<Show when={local.categories && local.categories.length > 0}>
							<div class="border-b border-surface-border px-4 py-3">
								<p class="mb-2 text-xs font-medium text-ink-500">
									{local.categoriesLabel ?? (zh() ? "\u6B63\u5728\u641C\u7D22\u2026" : "I'm Searching\u2026")}
								</p>
								<div class="flex flex-wrap gap-1.5">
									<For each={local.categories}>
										{(cat) => {
    const isSelected = () => (local.selectedCategories ?? []).includes(cat.key);
    return <button
      type="button"
      onClick={() => toggleCategory(cat.key)}
      class={cn(
        "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors",
        "outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50",
        isSelected() ? "border-primary-500 bg-primary-50 text-primary-600" : "border-surface-border bg-surface-raised text-ink-600 hover:bg-surface-overlay"
      )}
    >
													<Show when={cat.icon}>
														<span class="h-3.5 w-3.5">{resolveContent(cat.icon)}</span>
													</Show>
													{cat.label}
												</button>;
  }}
									</For>
								</div>
							</div>
						</Show>

						{
    /* Results */
  }
						<div class="flex-1 overflow-y-auto" role="listbox">
							<Show
    when={totalItems() > 0}
    fallback={<div class="px-4 py-8 text-center text-sm text-ink-500">
										{local.emptyMessage ?? (zh() ? "\u6682\u65E0\u7ED3\u679C" : "No results found.")}
									</div>}
  >
								<Index each={local.groups}>
									{(group, gi) => <div class="py-2">
											<p class="px-4 pb-1 text-xs font-medium text-ink-500">
												{group().title}
											</p>
											<For each={group().items}>
												{(item, ii) => {
    const idx = () => flatIndex(gi, ii());
    return <button
      type="button"
      role="option"
      aria-selected={activeIndex() === idx() ? "true" : "false"}
      onClick={() => local.onSelect(item)}
      onMouseEnter={() => setActiveIndex(idx())}
      class={cn(
        "flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors",
        "outline-none",
        activeIndex() === idx() ? "bg-surface-overlay text-ink-900" : "text-ink-700 hover:bg-surface-overlay"
      )}
    >
															<Show when={item.icon}>
																<span class="flex h-5 w-5 shrink-0 items-center justify-center text-ink-400">
																	{resolveContent(item.icon)}
																</span>
															</Show>
															<span class="min-w-0 flex-1">
																<span class="block truncate">{item.label}</span>
																<Show when={item.description}>
																	<span class="block truncate text-xs text-ink-400 mt-0.5">{item.description}</span>
																</Show>
															</span>
															<Show when={item.trailing}>
																<span class="shrink-0">{resolveContent(item.trailing)}</span>
															</Show>
														</button>;
  }}
											</For>
											<Show when={group().seeAll}>
												<button
    type="button"
    onClick={() => group().seeAll.onClick()}
    class="px-4 py-1.5 text-xs font-medium text-primary-500 hover:text-primary-600 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
  >
													{group().seeAll.label}
												</button>
											</Show>
										</div>}
								</Index>
							</Show>
						</div>

						{
    /* Keyboard hints */
  }
						<Show when={local.showKeyboardHints !== false}>
							<div class="flex items-center gap-4 border-t border-surface-border px-4 py-2 text-xs text-ink-400">
								<span class="inline-flex items-center gap-1">
									<kbd class="rounded border border-surface-border bg-surface-overlay px-1 py-0.5 font-mono text-[10px] text-ink-700">↑</kbd>
									<kbd class="rounded border border-surface-border bg-surface-overlay px-1 py-0.5 font-mono text-[10px] text-ink-700">↓</kbd>
									To navigate
								</span>
								<span class="inline-flex items-center gap-1">
									<kbd class="rounded border border-surface-border bg-surface-overlay px-1 py-0.5 font-mono text-[10px] text-ink-700">↵</kbd>
									To select
								</span>
								<span class="inline-flex items-center gap-1">
									<kbd class="rounded border border-surface-border bg-surface-overlay px-1 py-0.5 font-mono text-[10px] text-ink-700">esc</kbd>
									To close
								</span>
							</div>
						</Show>
					</KobalteDialog.Content>
				</div>
			</KobalteDialog.Portal>
		</KobalteDialog>;
}

export {
  ContextMenuRoot,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenu,
  HoverCardRoot,
  HoverCardTrigger,
  HoverCardPortal,
  HoverCardArrow,
  HoverCardContent,
  HoverCardHeader,
  HoverCardBody,
  HoverCardFooter,
  HoverCardSeparator,
  HoverCard,
  SearchPalette
};
