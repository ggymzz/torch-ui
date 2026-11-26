import { useIcons, useLocaleConfig, Select, Button, resolveLocale, CollapsibleRoot, CollapsibleTrigger, CollapsibleContentStyled } from './LFPOAP3K.js';
import { cn } from './CZPH5U6S.js';
import { delegateEvents, createComponent, mergeProps, addEventListener, insert, effect, className, setAttribute, memo, use, Dynamic, style, setStyleProperty, spread, template } from 'solid-js/web';
import { createContext, splitProps, onMount, Show, useContext, For, createSignal, onCleanup, createEffect, on, createUniqueId, createMemo } from 'solid-js';
import { Breadcrumbs as Breadcrumbs$1 } from '@kobalte/core/breadcrumbs';
import { DropdownMenu as DropdownMenu$1 } from '@kobalte/core/dropdown-menu';
import { Tabs as Tabs$1 } from '@kobalte/core/tabs';
export { Tabs as KobalteTabs } from '@kobalte/core/tabs';
import { createStore } from 'solid-js/store';
import { Menubar } from '@kobalte/core/menubar';
import { NavigationMenu } from '@kobalte/core/navigation-menu';

var _tmpl$ = /* @__PURE__ */ template(`<ol class="flex flex-wrap items-center gap-1">`);
var _tmpl$2 = /* @__PURE__ */ template(`<li class="flex items-center gap-1">`);
var _tmpl$3 = /* @__PURE__ */ template(`<span>`);
function DefaultSeparator(props) {
  const icons = useIcons();
  return icons.chevronRight({
    class: cn("h-4 w-4 shrink-0", props.inverted ? "text-white/50" : "text-ink-400"),
    "aria-hidden": "true"
  });
}
function Breadcrumbs(props) {
  const [local] = splitProps(props, ["items", "separator", "inverted", "class"]);
  const separator = () => local.separator ?? createComponent(DefaultSeparator, {
    get inverted() {
      return local.inverted;
    }
  });
  const inv = () => local.inverted ?? false;
  return createComponent(Breadcrumbs$1, {
    get ["class"]() {
      return cn("flex flex-wrap items-center gap-1 text-sm", local.class);
    },
    get children() {
      var _el$ = _tmpl$();
      insert(_el$, createComponent(For, {
        get each() {
          return local.items;
        },
        children: (item, i) => {
          const isLast = () => i() === local.items.length - 1;
          return (() => {
            var _el$2 = _tmpl$2();
            insert(_el$2, createComponent(Show, {
              get when() {
                return i() > 0;
              },
              get children() {
                return createComponent(Breadcrumbs$1.Separator, {
                  "class": "flex shrink-0",
                  get children() {
                    return separator();
                  }
                });
              }
            }), null);
            insert(_el$2, createComponent(Show, {
              get when() {
                return memo(() => !!!!item.href)() && !isLast();
              },
              get fallback() {
                return (() => {
                  var _el$3 = _tmpl$3();
                  spread(_el$3, mergeProps({
                    get ["class"]() {
                      return cn("font-medium", isLast() ? inv() ? "text-white" : "text-ink-800" : inv() ? "text-white/50" : "text-ink-500");
                    }
                  }, () => isLast() && {
                    "aria-current": "page"
                  }), false, true);
                  insert(_el$3, () => item.label);
                  return _el$3;
                })();
              },
              get children() {
                return createComponent(Breadcrumbs$1.Link, {
                  get href() {
                    return item.href;
                  },
                  get ["class"]() {
                    return cn("underline-offset-2 hover:underline", inv() ? "text-white/70 hover:text-white" : "text-ink-600 hover:text-ink-900");
                  },
                  get children() {
                    return item.label;
                  }
                });
              }
            }), null);
            effect((_p$) => {
              var _v$ = !!(!isLast() && !inv()), _v$2 = !!(!isLast() && inv());
              _v$ !== _p$.e && _el$2.classList.toggle("text-ink-500", _p$.e = _v$);
              _v$2 !== _p$.t && _el$2.classList.toggle("text-white/50", _p$.t = _v$2);
              return _p$;
            }, {
              e: void 0,
              t: void 0
            });
            return _el$2;
          })();
        }
      }));
      return _el$;
    }
  });
}
var _KbContent = DropdownMenu$1.Content;
var _KbItem = DropdownMenu$1.Item;
var _KbSeparator = DropdownMenu$1.Separator;
var _KbTrigger = DropdownMenu$1.Trigger;
function DropdownMenuContent(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return createComponent(DropdownMenu$1.Portal, {
    get children() {
      return createComponent(_KbContent, mergeProps({
        get ["class"]() {
          return cn("z-[80] min-w-[160px] rounded-lg border border-surface-border bg-surface-raised p-1 shadow-lg outline-none", local.class);
        }
      }, others, {
        get children() {
          return local.children;
        }
      }));
    }
  });
}
function DropdownMenuItem(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return createComponent(_KbItem, mergeProps({
    get ["class"]() {
      return cn("flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-sm text-ink-700 outline-none", "data-[highlighted]:bg-surface-overlay data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed", local.class);
    }
  }, others, {
    get children() {
      return local.children;
    }
  }));
}
function DropdownMenuSeparator(props) {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(_KbSeparator, mergeProps({
    get ["class"]() {
      return cn("my-1 h-px border-none bg-surface-border", local.class);
    }
  }, others));
}
function DropdownMenuTrigger(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return createComponent(_KbTrigger, mergeProps({
    get ["class"]() {
      return cn(local.class);
    }
  }, others, {
    get children() {
      return local.children;
    }
  }));
}
var DropdownMenu = Object.assign(DropdownMenu$1, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Separator: DropdownMenuSeparator
});
var _tmpl$4 = /* @__PURE__ */ template(`<p class="shrink-0 text-sm text-ink-600">`);
var _tmpl$22 = /* @__PURE__ */ template(`<div class="flex shrink-0 items-center gap-2"><span class="whitespace-nowrap text-sm text-ink-500">`);
var _tmpl$32 = /* @__PURE__ */ template(`<div>`);
var _tmpl$42 = /* @__PURE__ */ template(`<nav role=navigation><div class="flex shrink-0 items-center gap-4">`);
var _tmpl$5 = /* @__PURE__ */ template(`<span class="font-medium text-ink-900">0`);
var _tmpl$6 = /* @__PURE__ */ template(`<span class="font-medium text-ink-900">`);
var _tmpl$7 = /* @__PURE__ */ template(`<span class="px-1 text-ink-400"aria-hidden=true>\u2026`);
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
  return Array.from({
    length: end - start + 1
  }, (_, i) => start + i);
}
function formatPage(tmpl, p) {
  return tmpl.replace("{page}", String(p));
}
function Pagination(props) {
  const [local, others] = splitProps(props, ["page", "totalPages", "onPageChange", "maxPages", "showFirstLast", "totalItems", "pageSize", "onPageSizeChange", "pageSizeOptions", "selectId", "locale", "labels", "class"]);
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
  const pageSizeSelectOptions = () => pageSizeOptions().map((n) => ({
    value: String(n),
    label: String(n)
  }));
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
  return (() => {
    var _el$ = _tmpl$42(), _el$2 = _el$.firstChild;
    use((el) => navEl = el, _el$);
    spread(_el$, mergeProps({
      get ["aria-label"]() {
        return t().navAriaLabel;
      }
    }, others, {
      get ["class"]() {
        return cn("flex w-full items-center gap-4", hasInfo() || hasPageSize() ? "" : "justify-center", local.class);
      }
    }), false, true);
    use((el) => fixedEl = el, _el$2);
    insert(_el$2, createComponent(Show, {
      get when() {
        return hasInfo();
      },
      get children() {
        var _el$3 = _tmpl$4();
        insert(_el$3, (() => {
          var _c$ = memo(() => (local.totalItems ?? 0) === 0);
          return () => _c$() ? [memo(() => t().infoPrefix), _tmpl$5(), memo(() => t().infoMiddle), _tmpl$5(), memo(() => t().infoSuffix)] : [memo(() => t().infoPrefix), (() => {
            var _el$9 = _tmpl$6();
            insert(_el$9, () => start() + 1);
            return _el$9;
          })(), "\u2013", (() => {
            var _el$0 = _tmpl$6();
            insert(_el$0, end);
            return _el$0;
          })(), memo(() => t().infoMiddle), (() => {
            var _el$1 = _tmpl$6();
            insert(_el$1, () => local.totalItems);
            return _el$1;
          })(), memo(() => t().infoSuffix)];
        })());
        return _el$3;
      }
    }), null);
    insert(_el$2, createComponent(Show, {
      get when() {
        return hasPageSize();
      },
      get children() {
        var _el$4 = _tmpl$22(), _el$5 = _el$4.firstChild;
        insert(_el$5, () => t().perPage);
        insert(_el$4, createComponent(Select, {
          get id() {
            return selectElId();
          },
          get ["aria-labelledby"]() {
            return perPageLabelId();
          },
          get value() {
            return String(pageSizeVal());
          },
          onValueChange: handlePageSizeChange,
          get options() {
            return pageSizeSelectOptions();
          }
        }), null);
        effect(() => setAttribute(_el$5, "id", perPageLabelId()));
        return _el$4;
      }
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return showNav();
      },
      get children() {
        var _el$6 = _tmpl$32();
        insert(_el$6, createComponent(Show, {
          get when() {
            return local.showFirstLast;
          },
          get children() {
            return createComponent(Button, {
              type: "button",
              variant: "outlined",
              size: "sm",
              iconOnly: true,
              get icon() {
                return icons.chevronsLeft({
                  class: "h-4 w-4",
                  "aria-hidden": "true"
                });
              },
              get ["aria-label"]() {
                return t().firstPage;
              },
              get disabled() {
                return !canPrev();
              },
              onClick: () => local.onPageChange(1),
              "class": "rounded-lg"
            });
          }
        }), null);
        insert(_el$6, createComponent(Button, {
          type: "button",
          variant: "outlined",
          size: "sm",
          iconOnly: true,
          get icon() {
            return icons.chevronLeft({
              class: "h-4 w-4",
              "aria-hidden": "true"
            });
          },
          get ["aria-label"]() {
            return t().previousPage;
          },
          get disabled() {
            return !canPrev();
          },
          onClick: () => local.onPageChange(page() - 1),
          "class": "rounded-lg"
        }), null);
        insert(_el$6, createComponent(Show, {
          get when() {
            return showPageNumbers();
          },
          get children() {
            return createComponent(For, {
              get each() {
                return pageRange();
              },
              children: (p) => typeof p === "number" ? createComponent(Button, {
                type: "button",
                get variant() {
                  return p === page() ? "primary" : "outlined";
                },
                size: "sm",
                get ["aria-label"]() {
                  return memo(() => p === page())() ? formatPage(t().currentPage, p) : formatPage(t().goToPage, p);
                },
                get ["aria-current"]() {
                  return p === page() ? "page" : void 0;
                },
                onClick: () => local.onPageChange(p),
                "class": "min-w-[2.25rem] rounded-lg",
                "data-page-btns": true,
                children: p
              }) : _tmpl$7()
            });
          }
        }), null);
        insert(_el$6, createComponent(Button, {
          type: "button",
          variant: "outlined",
          size: "sm",
          iconOnly: true,
          get icon() {
            return icons.chevronRight({
              class: "h-4 w-4",
              "aria-hidden": "true"
            });
          },
          get ["aria-label"]() {
            return t().nextPage;
          },
          get disabled() {
            return !canNext();
          },
          onClick: () => local.onPageChange(page() + 1),
          "class": "rounded-lg"
        }), null);
        insert(_el$6, createComponent(Show, {
          get when() {
            return local.showFirstLast;
          },
          get children() {
            return createComponent(Button, {
              type: "button",
              variant: "outlined",
              size: "sm",
              iconOnly: true,
              get icon() {
                return icons.chevronsRight({
                  class: "h-4 w-4",
                  "aria-hidden": "true"
                });
              },
              get ["aria-label"]() {
                return t().lastPage;
              },
              get disabled() {
                return !canNext();
              },
              onClick: () => local.onPageChange(total()),
              "class": "rounded-lg"
            });
          }
        }), null);
        effect(() => className(_el$6, cn("flex items-center gap-1", (hasInfo() || hasPageSize()) && "ml-auto")));
        return _el$6;
      }
    }), null);
    return _el$;
  })();
}
var _tmpl$8 = /* @__PURE__ */ template(`<div>`);
function Tabs(props) {
  const [local, others] = splitProps(props, ["tabs", "value", "defaultValue", "onValueChange", "ariaLabel", "class"]);
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
  return (() => {
    var _el$ = _tmpl$8();
    insert(_el$, createComponent(Tabs$1, mergeProps({
      get value() {
        return memo(() => !!isControlled())() ? normalizedValue() : void 0;
      },
      get defaultValue() {
        return memo(() => !!!isControlled())() ? local.defaultValue ?? local.tabs[0]?.id : void 0;
      },
      get onChange() {
        return local.onValueChange;
      }
    }, others, {
      get children() {
        return createComponent(Tabs$1.List, {
          "class": "flex w-full flex-nowrap gap-1 overflow-x-auto rounded-none border-0 bg-transparent p-0",
          get ["aria-label"]() {
            return local.ariaLabel ?? (zh() ? "\u6807\u7B7E\u9875" : "Tabs");
          },
          get children() {
            return createComponent(For, {
              get each() {
                return local.tabs;
              },
              children: (tab) => createComponent(Tabs$1.Trigger, {
                get value() {
                  return tab.id;
                },
                "class": "shrink-0 whitespace-nowrap rounded-none border-b-2 border-transparent bg-transparent px-5 py-3 text-sm font-medium text-ink-500 transition-colors hover:border-primary-300 hover:text-primary-700 data-[selected]:border-primary-500 data-[selected]:bg-transparent data-[selected]:text-primary-600 data-[selected]:shadow-none",
                get children() {
                  return tab.label;
                }
              })
            });
          }
        });
      }
    })));
    effect(() => className(_el$, cn("mb-6 border-b border-surface-border", local.class)));
    return _el$;
  })();
}
function TabsList(props) {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(Tabs$1.List, mergeProps({
    get ["class"]() {
      return cn("inline-flex items-center gap-1 rounded-lg border border-surface-border bg-surface-raised p-1", local.class);
    }
  }, others));
}
function TabsTrigger(props) {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(Tabs$1.Trigger, mergeProps({
    get ["class"]() {
      return cn("rounded-md px-3 py-1.5 text-xs font-medium text-ink-500 transition-colors", "data-[selected]:bg-surface-overlay data-[selected]:text-ink-900", "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed", local.class);
    }
  }, others));
}
function TabsContent(props) {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(Tabs$1.Content, mergeProps({
    get ["class"]() {
      return cn("mt-4", local.class);
    }
  }, others));
}
var _tmpl$9 = /* @__PURE__ */ template(`<div role=group>`);
var _tmpl$23 = /* @__PURE__ */ template(`<span class="rounded-full bg-surface-overlay px-2 py-0.5 text-xs font-semibold text-ink-600">`);
var _tmpl$33 = /* @__PURE__ */ template(`<span class="shrink-0 rounded-full bg-surface-overlay/80 px-2 py-0.5 text-xs font-semibold text-ink-600">`);
var _tmpl$43 = /* @__PURE__ */ template(`<button type=button data-view-tab><span class="min-w-0 truncate">`);
var _tmpl$52 = /* @__PURE__ */ template(`<span class="w-px bg-surface-border"role=presentation aria-hidden=true>`);
var _tmpl$62 = /* @__PURE__ */ template(`<span class="shrink-0 rounded-full bg-surface-overlay px-2 py-0.5 text-xs font-semibold text-ink-600">`);
var _tmpl$72 = /* @__PURE__ */ template(`<div class="flex w-full items-center justify-between gap-3"><div class="flex min-w-0 flex-1 items-center gap-2"><span class=truncate>`);
var DIVIDER_WIDTH = 1;
var ESTIMATED_TAB_WIDTH = 80;
var OVERFLOW_TRIGGER_WIDTH = 100;
var ADD_BUTTON_WIDTH = 40;
function ViewSwitcher(props) {
  const [local] = splitProps(props, ["views", "activeId", "onValueChange", "onAdd", "addIcon", "maxVisible", "moreLabel", "variant", "ariaLabel", "class"]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const [dynamicMax, setDynamicMax] = createSignal(null);
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
    return {
      visible: all.slice(0, max),
      overflow: all.slice(max)
    };
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
  onMount(() => {
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
    onCleanup(() => {
      cancelled = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
    });
  });
  createEffect(() => {
    if (local.maxVisible != null) return;
    let acc = local.views.length;
    for (const v of local.views) {
      acc = acc * 31 + v.id.length + v.label.length + (v.count ?? 0) + (v.pinned ? 1 : 0) | 0;
    }
    scheduleMeasure(true);
  });
  createEffect(() => {
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
  return (() => {
    var _el$ = _tmpl$9();
    use((el) => containerRef = el, _el$);
    insert(_el$, () => {
      const vis = visibleViews();
      const ov = overflowViews();
      return [createComponent(For, {
        each: vis,
        children: (view, i) => {
          const isActive = () => view.id === local.activeId;
          const isFirst = () => i() === 0;
          const isLastVisible = () => i() === vis.length - 1;
          const hideDivider = () => {
            const next = vis[i() + 1];
            return isActive() || next?.id === local.activeId;
          };
          return [(() => {
            var _el$3 = _tmpl$43(), _el$4 = _el$3.firstChild;
            _el$3.$$click = () => local.onValueChange(view.id);
            _el$3.$$keydown = onTabKeyDown;
            insert(_el$3, createComponent(Show, {
              get when() {
                return view.pinned;
              },
              get children() {
                return icons.pin({
                  width: 12,
                  height: 12,
                  class: "shrink-0 text-ink-400",
                  "aria-hidden": "true"
                });
              }
            }), _el$4);
            insert(_el$4, () => view.label);
            insert(_el$3, createComponent(Show, {
              get when() {
                return typeof view.count === "number";
              },
              get children() {
                var _el$5 = _tmpl$33();
                insert(_el$5, () => view.count);
                return _el$5;
              }
            }), null);
            effect((_p$) => {
              var _v$3 = view.id, _v$4 = cn("inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors", isEmbedded() && "max-w-[200px] shrink-0 rounded-t-2xl rounded-b-none border border-transparent border-b-0", isEmbedded() && isFirst() && "rounded-tl-2xl", isEmbedded() && isLastVisible() && "rounded-tr-2xl", isEmbedded() && (isActive() ? "relative z-10 -mx-px -mt-px bg-surface-raised text-ink-900 border border-surface-border border-b-transparent" : "bg-transparent text-ink-500 hover:text-ink-700"), !isEmbedded() && (isActive() ? "rounded-lg border border-surface-border bg-surface-raised text-ink-900 shadow-sm" : "rounded-lg border border-transparent text-ink-500 hover:text-ink-700 hover:bg-surface-overlay")), _v$5 = isActive() ? "page" : void 0, _v$6 = isActive() ? 0 : -1;
              _v$3 !== _p$.e && setAttribute(_el$3, "data-view-id", _p$.e = _v$3);
              _v$4 !== _p$.t && className(_el$3, _p$.t = _v$4);
              _v$5 !== _p$.a && setAttribute(_el$3, "aria-current", _p$.a = _v$5);
              _v$6 !== _p$.o && setAttribute(_el$3, "tabindex", _p$.o = _v$6);
              return _p$;
            }, {
              e: void 0,
              t: void 0,
              a: void 0,
              o: void 0
            });
            return _el$3;
          })(), createComponent(Show, {
            get when() {
              return memo(() => !!(isEmbedded() && !isLastVisible()))() && !hideDivider();
            },
            get children() {
              return _tmpl$52();
            }
          })];
        }
      }), createComponent(Show, {
        get when() {
          return ov.length > 0;
        },
        get children() {
          return createComponent(DropdownMenu$1, {
            get children() {
              return [createComponent(DropdownMenu$1.Trigger, {
                as: "button",
                type: "button",
                "class": "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-ink-600 hover:bg-surface-raised hover:text-ink-900",
                get children() {
                  return [memo(() => local.moreLabel ?? (zh() ? "\u66F4\u591A" : "More")), (() => {
                    var _el$2 = _tmpl$23();
                    insert(_el$2, () => ov.length);
                    return _el$2;
                  })()];
                }
              }), createComponent(DropdownMenuContent, {
                get children() {
                  return createComponent(For, {
                    each: ov,
                    children: (view) => createComponent(DropdownMenuItem, {
                      onSelect: () => local.onValueChange(view.id),
                      get children() {
                        var _el$7 = _tmpl$72(), _el$8 = _el$7.firstChild, _el$9 = _el$8.firstChild;
                        insert(_el$8, createComponent(Show, {
                          get when() {
                            return view.pinned;
                          },
                          get children() {
                            return icons.pin({
                              width: 12,
                              height: 12,
                              class: "shrink-0 text-ink-400",
                              "aria-hidden": "true"
                            });
                          }
                        }), _el$9);
                        insert(_el$9, () => view.label);
                        insert(_el$7, createComponent(Show, {
                          get when() {
                            return typeof view.count === "number";
                          },
                          get children() {
                            var _el$0 = _tmpl$62();
                            insert(_el$0, () => view.count);
                            return _el$0;
                          }
                        }), null);
                        return _el$7;
                      }
                    })
                  });
                }
              })];
            }
          });
        }
      })];
    }, null);
    insert(_el$, createComponent(Show, {
      get when() {
        return local.onAdd;
      },
      get children() {
        return createComponent(Button, {
          iconOnly: true,
          variant: "ghost",
          size: "xs",
          get icon() {
            return local.addIcon;
          },
          get label() {
            return zh() ? "\u6DFB\u52A0\u89C6\u56FE" : "Add view";
          },
          get onClick() {
            return local.onAdd;
          },
          "class": "ml-2 self-center h-7 w-7 hover:bg-surface-raised hover:text-ink-900"
        });
      }
    }), null);
    effect((_p$) => {
      var _v$ = local.ariaLabel ?? (zh() ? "\u89C6\u56FE" : "Views"), _v$2 = cn(containerClass(), local.class);
      _v$ !== _p$.e && setAttribute(_el$, "aria-label", _p$.e = _v$);
      _v$2 !== _p$.t && className(_el$, _p$.t = _v$2);
      return _p$;
    }, {
      e: void 0,
      t: void 0
    });
    return _el$;
  })();
}
delegateEvents(["keydown", "click"]);
var _tmpl$10 = /* @__PURE__ */ template(`<a>`);
var _tmpl$24 = /* @__PURE__ */ template(`<div>`);
var _tmpl$34 = /* @__PURE__ */ template(`<span class=truncate>`);
var _tmpl$44 = /* @__PURE__ */ template(`<span>`);
var _tmpl$53 = /* @__PURE__ */ template(`<ul class="ml-4 space-y-0.5">`);
var _tmpl$63 = /* @__PURE__ */ template(`<li><div class=space-y-0.5>`);
var _tmpl$73 = /* @__PURE__ */ template(`<button type=button>`);
var _tmpl$82 = /* @__PURE__ */ template(`<li>`);
var _tmpl$92 = /* @__PURE__ */ template(`<ul class=space-y-0.5>`);
var _tmpl$0 = /* @__PURE__ */ template(`<p class="px-2 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-wider text-ink-400 select-none">`);
var _tmpl$1 = /* @__PURE__ */ template(`<div class=mb-2><ul class=space-y-0.5>`);
var _tmpl$102 = /* @__PURE__ */ template(`<div class=shrink-0>`);
var _tmpl$11 = /* @__PURE__ */ template(`<span class="text-base font-semibold text-ink-900 truncate">`);
var _tmpl$12 = /* @__PURE__ */ template(`<button type=button class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-ink-400 hover:bg-surface-overlay hover:text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$13 = /* @__PURE__ */ template(`<div><nav>`);
var _tmpl$14 = /* @__PURE__ */ template(`<ul role=list>`);
function hasActiveItem(items) {
  for (const item of items) {
    if (item.active) return true;
    if (item.items && hasActiveItem(item.items)) return true;
  }
  return false;
}
function ChevronIcon() {
  const icons = useIcons();
  return icons.chevronDown({
    class: "h-3.5 w-3.5 shrink-0 transition-transform rotate-90 [[data-expanded]>&]:rotate-0",
    "aria-hidden": "true"
  });
}
function Sidebar(props) {
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const [local, others] = splitProps(props, ["header", "items", "groups", "linkComponent", "title", "showTitle", "collapsible", "collapsed", "onCollapseChange", "showIcons", "showBadges", "footer", "variant", "class"]);
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
  const sidebarClass = () => cn(hasStickyFooter() ? "flex flex-col h-full min-w-0" : "h-full overflow-x-hidden overflow-y-auto min-w-0", variantClasses(), local.collapsed ? "w-16" : local.variant === "padded" ? "w-72" : "w-64", "transition-all duration-300 ease-in-out", local.class);
  const titleClass = () => cn("shrink-0 flex items-center border-b border-surface-border/50", local.collapsed ? "justify-center px-3 py-3" : "justify-between px-4 py-3");
  const navigationClass = () => cn(hasStickyFooter() ? "flex-1 overflow-x-hidden overflow-y-auto" : "", local.variant === "minimal" ? "p-2" : "p-3");
  const footerClass = () => cn("border-t border-surface-border p-4", local.collapsed ? "hidden" : "block");
  const [groupOpenByTitle, setGroupOpenByTitle] = createStore({});
  const renderLink = (item, cls, children) => {
    const LinkTag = local.linkComponent;
    if (LinkTag) {
      return createComponent(LinkTag, {
        get href() {
          return item.href;
        },
        "class": cls,
        get onClick() {
          return item.onClick;
        },
        get ["aria-current"]() {
          return item.active ? "page" : void 0;
        },
        children
      });
    }
    return (() => {
      var _el$ = _tmpl$10();
      addEventListener(_el$, "click", item.onClick, true);
      className(_el$, cls);
      insert(_el$, children);
      effect((_p$) => {
        var _v$ = item.href, _v$2 = item.active ? "page" : void 0;
        _v$ !== _p$.e && setAttribute(_el$, "href", _p$.e = _v$);
        _v$2 !== _p$.t && setAttribute(_el$, "aria-current", _p$.t = _v$2);
        return _p$;
      }, {
        e: void 0,
        t: void 0
      });
      return _el$;
    })();
  };
  const renderSidebarItem = (item, level = 0) => {
    const itemClass = () => cn("flex items-center w-full min-w-0 transition-colors", local.variant === "minimal" ? "rounded px-2 py-1 text-xs" : local.variant === "padded" ? "rounded-lg px-4 py-2.5 text-sm" : "rounded-lg px-3 py-2 text-sm", "outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-inset", item.active ? [local.variant === "minimal" ? "" : "bg-primary-500/10", "text-primary-600 font-medium"] : ["text-ink-600", local.variant === "minimal" ? "hover:text-ink-900" : "hover:bg-surface-overlay hover:text-ink-900"], item.disabled && "opacity-50", level > 0 && "ml-4");
    const iconClass = () => cn("w-5 h-5 flex-shrink-0", (local.showIcons ?? true) && !local.collapsed && "mr-3", (local.showIcons ?? true) && local.collapsed && "mx-auto", item.active ? "text-primary-600" : "text-ink-500");
    const badgeClass = () => cn("px-2 py-0.5 text-xs rounded-full font-medium flex-shrink-0", (local.showBadges ?? true) && !local.collapsed && "ml-auto", item.active ? "bg-primary-100 text-primary-600" : "bg-surface-dim text-ink-600");
    const ItemContent = () => [createComponent(Show, {
      get when() {
        return memo(() => !!item.icon)() && (local.showIcons ?? true);
      },
      get children() {
        var _el$2 = _tmpl$24();
        insert(_el$2, () => item.icon);
        effect(() => className(_el$2, iconClass()));
        return _el$2;
      }
    }), createComponent(Show, {
      get when() {
        return !local.collapsed;
      },
      get children() {
        var _el$3 = _tmpl$34();
        insert(_el$3, () => item.label);
        return _el$3;
      }
    }), createComponent(Show, {
      get when() {
        return memo(() => !!(item.badge != null && (local.showBadges ?? true)))() && !local.collapsed;
      },
      get children() {
        var _el$4 = _tmpl$44();
        insert(_el$4, () => item.badge);
        effect(() => className(_el$4, badgeClass()));
        return _el$4;
      }
    })];
    if (item.items && item.items.length > 0) {
      return (() => {
        var _el$5 = _tmpl$63(), _el$6 = _el$5.firstChild;
        insert(_el$6, (() => {
          var _c$ = memo(() => !!item.href);
          return () => _c$() ? renderLink(item, itemClass(), createComponent(ItemContent, {})) : (() => {
            var _el$8 = _tmpl$73();
            addEventListener(_el$8, "click", item.onClick, true);
            insert(_el$8, createComponent(ItemContent, {}));
            effect((_p$) => {
              var _v$3 = itemClass(), _v$4 = item.disabled, _v$5 = item.active ? "page" : void 0;
              _v$3 !== _p$.e && className(_el$8, _p$.e = _v$3);
              _v$4 !== _p$.t && (_el$8.disabled = _p$.t = _v$4);
              _v$5 !== _p$.a && setAttribute(_el$8, "aria-current", _p$.a = _v$5);
              return _p$;
            }, {
              e: void 0,
              t: void 0,
              a: void 0
            });
            return _el$8;
          })();
        })(), null);
        insert(_el$6, createComponent(Show, {
          get when() {
            return !local.collapsed;
          },
          get children() {
            var _el$7 = _tmpl$53();
            insert(_el$7, createComponent(For, {
              get each() {
                return item.items;
              },
              children: (child) => renderSidebarItem(child, level + 1)
            }));
            return _el$7;
          }
        }), null);
        return _el$5;
      })();
    }
    return (() => {
      var _el$9 = _tmpl$82();
      insert(_el$9, (() => {
        var _c$2 = memo(() => !!item.href);
        return () => _c$2() ? renderLink(item, itemClass(), createComponent(ItemContent, {})) : (() => {
          var _el$0 = _tmpl$73();
          addEventListener(_el$0, "click", item.onClick, true);
          insert(_el$0, createComponent(ItemContent, {}));
          effect((_p$) => {
            var _v$6 = itemClass(), _v$7 = item.disabled, _v$8 = item.active ? "page" : void 0;
            _v$6 !== _p$.e && className(_el$0, _p$.e = _v$6);
            _v$7 !== _p$.t && (_el$0.disabled = _p$.t = _v$7);
            _v$8 !== _p$.a && setAttribute(_el$0, "aria-current", _p$.a = _v$8);
            return _p$;
          }, {
            e: void 0,
            t: void 0,
            a: void 0
          });
          return _el$0;
        })();
      })());
      return _el$9;
    })();
  };
  const renderGroup = (group) => {
    const groupKey = group.id ?? group.title;
    if (group.collapsible) {
      const isOpen = () => hasActiveItem(group.items) || (groupOpenByTitle[groupKey] ?? group.defaultOpen ?? false);
      return createComponent(CollapsibleRoot, {
        "class": "mb-2",
        get open() {
          return isOpen();
        },
        onOpenChange: (next) => setGroupOpenByTitle(groupKey, next),
        get children() {
          return [createComponent(CollapsibleTrigger, {
            get ["class"]() {
              return cn("flex w-full items-center justify-between gap-1 rounded px-2 py-1", "text-[11px] font-semibold uppercase tracking-wider", "text-ink-400 hover:text-ink-600", "outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-inset");
            },
            get children() {
              return [(() => {
                var _el$1 = _tmpl$44();
                insert(_el$1, () => group.title);
                return _el$1;
              })(), createComponent(ChevronIcon, {})];
            }
          }), createComponent(CollapsibleContentStyled, {
            variant: "minimal",
            "class": "pt-0.5",
            get children() {
              var _el$10 = _tmpl$92();
              insert(_el$10, createComponent(For, {
                get each() {
                  return group.items;
                },
                children: (item) => renderSidebarItem(item)
              }));
              return _el$10;
            }
          })];
        }
      });
    }
    return (() => {
      var _el$11 = _tmpl$1(), _el$13 = _el$11.firstChild;
      insert(_el$11, createComponent(Show, {
        get when() {
          return memo(() => !!group.title)() && !local.collapsed;
        },
        get children() {
          var _el$12 = _tmpl$0();
          insert(_el$12, () => group.title);
          return _el$12;
        }
      }), _el$13);
      insert(_el$13, createComponent(For, {
        get each() {
          return group.items;
        },
        children: (item) => renderSidebarItem(item)
      }));
      return _el$11;
    })();
  };
  return (() => {
    var _el$14 = _tmpl$13(), _el$19 = _el$14.firstChild;
    spread(_el$14, mergeProps({
      get ["class"]() {
        return sidebarClass();
      }
    }, others), false, true);
    insert(_el$14, createComponent(Show, {
      get when() {
        return local.header;
      },
      get children() {
        var _el$15 = _tmpl$102();
        insert(_el$15, () => local.header);
        return _el$15;
      }
    }), _el$19);
    insert(_el$14, createComponent(Show, {
      get when() {
        return memo(() => !!local.title)() && local.showTitle !== false || local.collapsible;
      },
      get children() {
        var _el$16 = _tmpl$24();
        insert(_el$16, createComponent(Show, {
          get when() {
            return memo(() => !!(!local.collapsed && local.title))() && local.showTitle !== false;
          },
          get children() {
            var _el$17 = _tmpl$11();
            insert(_el$17, () => local.title);
            return _el$17;
          }
        }), null);
        insert(_el$16, createComponent(Show, {
          get when() {
            return local.collapsible;
          },
          get children() {
            var _el$18 = _tmpl$12();
            _el$18.$$click = () => local.onCollapseChange?.(!local.collapsed);
            insert(_el$18, () => icons.chevronLeft({
              class: cn("h-4 w-4 transition-transform duration-200", local.collapsed && "rotate-180"),
              "aria-hidden": "true"
            }));
            effect(() => setAttribute(_el$18, "aria-label", local.collapsed ? zh() ? "\u5C55\u5F00\u4FA7\u8FB9\u680F" : "Expand sidebar" : zh() ? "\u6298\u53E0\u4FA7\u8FB9\u680F" : "Collapse sidebar"));
            return _el$18;
          }
        }), null);
        effect(() => className(_el$16, titleClass()));
        return _el$16;
      }
    }), _el$19);
    insert(_el$19, createComponent(Show, {
      get when() {
        return local.groups;
      },
      get fallback() {
        return (() => {
          var _el$21 = _tmpl$14();
          insert(_el$21, createComponent(For, {
            get each() {
              return local.items;
            },
            children: (item) => renderSidebarItem(item)
          }));
          effect(() => className(_el$21, local.variant === "padded" ? "space-y-1" : "space-y-0.5"));
          return _el$21;
        })();
      },
      get children() {
        return createComponent(For, {
          get each() {
            return local.groups;
          },
          children: (group) => renderGroup(group)
        });
      }
    }));
    insert(_el$14, createComponent(Show, {
      get when() {
        return local.footer;
      },
      get children() {
        var _el$20 = _tmpl$24();
        insert(_el$20, (() => {
          var _c$3 = memo(() => !!(!local.collapsed && local.footer));
          return () => _c$3() && (typeof local.footer === "object" && "content" in local.footer ? local.footer.content : local.footer);
        })());
        effect(() => className(_el$20, footerClass()));
        return _el$20;
      }
    }), null);
    effect((_p$) => {
      var _v$9 = navigationClass(), _v$0 = local.title || (zh() ? "\u4FA7\u8FB9\u680F\u5BFC\u822A" : "Sidebar navigation");
      _v$9 !== _p$.e && className(_el$19, _p$.e = _v$9);
      _v$0 !== _p$.t && setAttribute(_el$19, "aria-label", _p$.t = _v$0);
      return _p$;
    }, {
      e: void 0,
      t: void 0
    });
    return _el$14;
  })();
}
delegateEvents(["click"]);
var _tmpl$15 = /* @__PURE__ */ template(`<span class="flex h-4 w-4 shrink-0 items-center justify-center">`);
var _tmpl$25 = /* @__PURE__ */ template(`<span>`);
var _tmpl$35 = /* @__PURE__ */ template(`<span aria-hidden=true class="absolute inset-x-0 bottom-0 h-[2px] origin-center scale-x-0 bg-primary-500 transition-transform duration-200 group-hover:scale-x-100 group-data-[expanded]:scale-x-100">`);
var _tmpl$45 = /* @__PURE__ */ template(`<div class="mt-0.5 text-xs text-ink-500 leading-relaxed">`);
var _tmpl$54 = /* @__PURE__ */ template(`<div><div class="font-medium text-ink-900">`);
var _tmpl$64 = /* @__PURE__ */ template(`<div>`);
var _tmpl$74 = /* @__PURE__ */ template(`<div role=separator aria-orientation=horizontal>`);
var _tmpl$83 = /* @__PURE__ */ template(`<a><div><div>`);
var _tmpl$93 = /* @__PURE__ */ template(`<span aria-hidden=true class="absolute inset-x-0 bottom-0 h-[2px] origin-center scale-x-0 bg-primary-500 transition-transform duration-200 group-hover:scale-x-100">`);
var _tmpl$02 = /* @__PURE__ */ template(`<a>`);
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
  const [local, others] = splitProps(props, ["class", "children", "noChevron", "variant", "icon", "iconPosition"]);
  const icons = useIcons();
  const v = () => local.variant ?? "default";
  const ip = () => local.iconPosition ?? "start";
  const isStacked = () => ip() === "top" || ip() === "bottom";
  return createComponent(Menubar.Trigger, mergeProps({
    get ["class"]() {
      return cn("group relative inline-flex text-sm font-medium text-ink-700 transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", isStacked() ? "flex-col items-center justify-center gap-1 px-3 py-2" : "flex-row items-center gap-1.5", v() === "default" && [!isStacked() && "h-9", "rounded-md px-3 py-2", "hover:bg-surface-overlay hover:text-ink-900", "data-[expanded]:bg-surface-overlay data-[expanded]:text-ink-900"], v() === "underline" && [!isStacked() && "h-full", "rounded-none px-4", "hover:text-primary-600 data-[expanded]:text-primary-600"], v() === "ghost" && [!isStacked() && "h-9", "rounded-md px-3 py-2", "hover:text-primary-600 data-[expanded]:text-primary-600"], local.class);
    }
  }, others, {
    get children() {
      return [createComponent(Show, {
        get when() {
          return memo(() => !!local.icon)() && (ip() === "start" || ip() === "top");
        },
        get children() {
          var _el$ = _tmpl$15();
          insert(_el$, () => local.icon);
          return _el$;
        }
      }), (() => {
        var _el$2 = _tmpl$25();
        insert(_el$2, () => local.children);
        effect(() => className(_el$2, cn(isStacked() && "text-xs leading-none")));
        return _el$2;
      })(), createComponent(Show, {
        get when() {
          return memo(() => !!local.icon)() && (ip() === "end" || ip() === "bottom");
        },
        get children() {
          var _el$3 = _tmpl$15();
          insert(_el$3, () => local.icon);
          return _el$3;
        }
      }), createComponent(Show, {
        get when() {
          return memo(() => !!!local.noChevron)() && !isStacked();
        },
        get children() {
          return icons.chevronDown({
            class: "relative h-3.5 w-3.5 shrink-0 text-ink-400 transition-transform duration-200 group-data-[expanded]:rotate-180",
            "aria-hidden": "true"
          });
        }
      }), createComponent(Show, {
        get when() {
          return v() === "underline";
        },
        get children() {
          return _tmpl$35();
        }
      })];
    }
  }));
}
function MenuBarContent(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return createComponent(Menubar.Portal, {
    get children() {
      return createComponent(Menubar.Content, mergeProps({
        get ["class"]() {
          return cn("torchui-menubar-content", "z-[9999] mt-2 rounded-xl border border-surface-border bg-surface-raised shadow-lg p-2 outline-none", local.class);
        }
      }, others, {
        get children() {
          return local.children;
        }
      }));
    }
  });
}
function MenuBarItem(props) {
  const [local, others] = splitProps(props, ["class", "children", "icon", "description", "iconPosition"]);
  const ip = () => local.iconPosition ?? "start";
  return createComponent(Menubar.Item, mergeProps({
    get ["class"]() {
      return cn("relative flex cursor-default select-none rounded-lg px-3 py-2 text-sm outline-none transition-colors", "text-ink-700 hover:bg-surface-overlay hover:text-ink-900", "focus-visible:bg-surface-overlay focus-visible:text-ink-900", "data-[disabled]:pointer-events-none data-[disabled]:opacity-50", ip() === "start" || ip() === "end" ? "items-start gap-2.5" : "flex-col items-center text-center gap-1.5", ip() === "end" && "flex-row-reverse", ip() === "bottom" && "flex-col-reverse", local.class);
    }
  }, others, {
    get children() {
      return [createComponent(Show, {
        get when() {
          return local.icon;
        },
        get children() {
          var _el$5 = _tmpl$25();
          insert(_el$5, () => local.icon);
          effect(() => className(_el$5, cn("flex shrink-0 items-center justify-center text-ink-500", ip() === "start" || ip() === "end" ? "mt-0.5 h-5 w-5" : "h-5 w-5")));
          return _el$5;
        }
      }), (() => {
        var _el$6 = _tmpl$54(), _el$7 = _el$6.firstChild;
        insert(_el$7, () => local.children);
        insert(_el$6, createComponent(Show, {
          get when() {
            return local.description;
          },
          get children() {
            var _el$8 = _tmpl$45();
            insert(_el$8, () => local.description);
            return _el$8;
          }
        }), null);
        effect(() => className(_el$6, cn("min-w-0", (ip() === "start" || ip() === "end") && "flex-1")));
        return _el$6;
      })()];
    }
  }));
}
function MenuBarLabel(props) {
  return (() => {
    var _el$9 = _tmpl$64();
    insert(_el$9, () => props.children);
    effect(() => className(_el$9, cn("px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400", props.class)));
    return _el$9;
  })();
}
function MenuBarDivider(props) {
  return (() => {
    var _el$0 = _tmpl$74();
    effect(() => className(_el$0, cn("-mx-2 my-1 h-px bg-surface-border", props.class)));
    return _el$0;
  })();
}
function MenuBarLink(props) {
  const v = () => props.variant ?? "default";
  const ip = () => props.iconPosition ?? "start";
  return (() => {
    var _el$1 = _tmpl$83(), _el$11 = _el$1.firstChild, _el$12 = _el$11.firstChild;
    addEventListener(_el$1, "click", props.disabled ? (e) => e.preventDefault() : void 0, true);
    insert(_el$1, createComponent(Show, {
      get when() {
        return props.icon;
      },
      get children() {
        var _el$10 = _tmpl$25();
        insert(_el$10, () => props.icon);
        effect(() => className(_el$10, cn("flex shrink-0 items-center justify-center", ip() === "start" || ip() === "end" ? "mt-0.5 h-5 w-5" : "h-5 w-5", props.active ? "text-primary-500" : "text-ink-500")));
        return _el$10;
      }
    }), _el$11);
    insert(_el$12, () => props.children);
    insert(_el$11, createComponent(Show, {
      get when() {
        return props.description;
      },
      get children() {
        var _el$13 = _tmpl$45();
        insert(_el$13, () => props.description);
        return _el$13;
      }
    }), null);
    effect((_p$) => {
      var _v$ = props.disabled ? void 0 : props.href, _v$2 = props.disabled ? "true" : void 0, _v$3 = props.disabled ? -1 : void 0, _v$4 = cn("relative flex select-none text-sm outline-none transition-colors", ip() === "start" || ip() === "end" ? "items-start gap-2.5" : "flex-col items-center text-center gap-1.5", ip() === "end" && "flex-row-reverse", ip() === "bottom" && "flex-col-reverse", v() === "default" && ["rounded-lg px-3 py-2", props.active ? "bg-primary-50 text-primary-700" : "text-ink-700 hover:bg-surface-overlay hover:text-ink-900"], v() === "underline" && ["rounded-lg px-3 py-2", props.active ? "text-primary-700 underline underline-offset-2" : "text-ink-700 hover:text-ink-900 hover:underline hover:underline-offset-2"], v() === "ghost" && ["rounded-lg px-3 py-2", props.active ? "text-primary-700" : "text-ink-500 hover:text-ink-900"], props.class), _v$5 = cn("min-w-0", (ip() === "start" || ip() === "end") && "flex-1"), _v$6 = cn("font-medium", props.active ? "text-primary-700" : "text-ink-900");
      _v$ !== _p$.e && setAttribute(_el$1, "href", _p$.e = _v$);
      _v$2 !== _p$.t && setAttribute(_el$1, "aria-disabled", _p$.t = _v$2);
      _v$3 !== _p$.a && setAttribute(_el$1, "tabindex", _p$.a = _v$3);
      _v$4 !== _p$.o && className(_el$1, _p$.o = _v$4);
      _v$5 !== _p$.i && className(_el$11, _p$.i = _v$5);
      _v$6 !== _p$.n && className(_el$12, _p$.n = _v$6);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0,
      n: void 0
    });
    return _el$1;
  })();
}
function MenuBarRoot(props) {
  const [local, others] = splitProps(props, ["class", "children", "justify"]);
  onMount(injectMenuBarStyles);
  return createComponent(Menubar, mergeProps({
    get ["class"]() {
      return cn("flex h-full items-center gap-1", local.justify === "center" && "justify-center", local.justify === "end" && "justify-end", local.class);
    }
  }, others, {
    get children() {
      return local.children;
    }
  }));
}
function MenuBarMenu(props) {
  return createComponent(Menubar.Menu, props);
}
function MenuBarNavLink(props) {
  const v = () => props.variant ?? "default";
  return (() => {
    var _el$14 = _tmpl$02();
    addEventListener(_el$14, "click", props.disabled ? (e) => e.preventDefault() : void 0, true);
    insert(_el$14, () => props.children, null);
    insert(_el$14, createComponent(Show, {
      get when() {
        return v() === "underline";
      },
      get children() {
        return _tmpl$93();
      }
    }), null);
    effect((_p$) => {
      var _v$7 = props.disabled ? void 0 : props.href, _v$8 = props.disabled ? "true" : void 0, _v$9 = props.disabled ? -1 : void 0, _v$0 = cn("group relative inline-flex h-full items-center text-sm font-medium text-ink-700 transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", v() === "default" && "h-9 rounded-md px-3 py-2 hover:bg-surface-overlay hover:text-ink-900", v() === "underline" && "rounded-none px-4 hover:text-primary-600", v() === "ghost" && "h-9 rounded-md px-3 py-2 hover:text-primary-600", props.class);
      _v$7 !== _p$.e && setAttribute(_el$14, "href", _p$.e = _v$7);
      _v$8 !== _p$.t && setAttribute(_el$14, "aria-disabled", _p$.t = _v$8);
      _v$9 !== _p$.a && setAttribute(_el$14, "tabindex", _p$.a = _v$9);
      _v$0 !== _p$.o && className(_el$14, _p$.o = _v$0);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    });
    return _el$14;
  })();
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
delegateEvents(["click"]);
var _tmpl$16 = /* @__PURE__ */ template(`<div class="z-[9999] pointer-events-none absolute top-full left-0 flex w-full justify-center">`);
var _tmpl$26 = /* @__PURE__ */ template(`<div>`);
var _tmpl$36 = /* @__PURE__ */ template(`<span class="flex h-4 w-4 shrink-0 items-center justify-center [&amp;>svg]:h-full [&amp;>svg]:w-full">`);
var _tmpl$46 = /* @__PURE__ */ template(`<span class="flex flex-col items-center gap-1 translate-y-1"><span class="text-xs leading-none">`);
var _tmpl$55 = /* @__PURE__ */ template(`<span>`);
var _tmpl$65 = /* @__PURE__ */ template(`<div><div>`);
var _tmpl$75 = /* @__PURE__ */ template(`<div><div class="px-3 text-[11px] font-semibold uppercase tracking-widest text-ink-400"></div><div class="flex flex-col gap-1">`);
var _tmpl$84 = /* @__PURE__ */ template(`<span class="rounded-full bg-primary-100 px-1.5 py-0.5 text-[10px] font-semibold text-primary-700">`);
var _tmpl$94 = /* @__PURE__ */ template(`<div class="mt-0.5 text-xs leading-relaxed text-ink-500">`);
var _tmpl$03 = /* @__PURE__ */ template(`<div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span>`);
var _tmpl$17 = /* @__PURE__ */ template(`<div class="pointer-events-none absolute inset-0 opacity-20">`);
var _tmpl$103 = /* @__PURE__ */ template(`<p class="mt-1 text-xs text-white/70 leading-relaxed"style=max-width:160px>`);
var _tmpl$112 = /* @__PURE__ */ template(`<div class=relative><p class="text-sm font-semibold text-white">`);
var _tmpl$122 = /* @__PURE__ */ template(`<div class="relative mt-4 flex items-center gap-1 text-xs font-semibold text-white">`);
var _tmpl$132 = /* @__PURE__ */ template(`<div role=separator aria-orientation=horizontal>`);
var _tmpl$142 = /* @__PURE__ */ template(`<div><div class="flex items-center gap-2">`);
var _tmpl$152 = /* @__PURE__ */ template(`<div><a>`);
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
  const [local, others] = splitProps(props, ["class", "children", "variant", "fullWidth", "containerRef", "justify", "inverted"]);
  const variant = () => local.variant ?? "default";
  const isUnderline = () => variant() === "underline";
  let wrapperRef;
  onMount(() => {
    injectMegaMenuStyles();
  });
  return (() => {
    var _el$ = _tmpl$26();
    var _ref$ = wrapperRef;
    typeof _ref$ === "function" ? use(_ref$, _el$) : wrapperRef = _el$;
    insert(_el$, createComponent(NavigationMenu, mergeProps({
      get ["data-variant"]() {
        return variant();
      },
      "class": "torchui-mm-root",
      get getAnchorRect() {
        return local.fullWidth ? () => {
          const el = local.containerRef ?? wrapperRef;
          const rect = el.getBoundingClientRect();
          return {
            x: rect.left,
            y: rect.bottom,
            width: rect.width,
            height: 0
          };
        } : void 0;
      },
      get sameWidth() {
        return local.fullWidth;
      }
    }, others, {
      get children() {
        return [createComponent(VariantContext.Provider, {
          get value() {
            return variant();
          },
          get children() {
            return createComponent(InvertedContext.Provider, {
              get value() {
                return local.inverted ?? false;
              },
              get children() {
                return local.children;
              }
            });
          }
        }), (() => {
          var _el$2 = _tmpl$16();
          insert(_el$2, createComponent(NavigationMenu.Viewport, {
            get ["data-fullwidth"]() {
              return local.fullWidth ? "" : void 0;
            },
            get ["class"]() {
              return cn("torchui-mm-viewport", "relative isolate border border-surface-border bg-surface-raised shadow-lg", local.fullWidth ? "mt-0" : isUnderline() ? "mt-0" : "mt-3", local.fullWidth ? "w-full rounded-b-xl rounded-t-none h-[var(--kb-navigation-menu-viewport-height)]" : "rounded-xl h-[var(--kb-navigation-menu-viewport-height)] w-[var(--kb-navigation-menu-viewport-width)]");
            },
            get children() {
              return createComponent(NavigationMenu.Arrow, {
                "class": "torchui-mm-arrow"
              });
            }
          }));
          return _el$2;
        })()];
      }
    })));
    effect(() => className(_el$, cn("relative flex h-full self-stretch", variant() === "underline" ? "items-stretch" : "items-center", local.justify === "center" && "justify-center", local.justify === "end" && "justify-end", local.justify && "w-full", local.class)));
    return _el$;
  })();
}
function MegaMenuMenu(props) {
  const [local, others] = splitProps(props, ["class"]);
  const variant = useContext(VariantContext);
  return (() => {
    var _el$3 = _tmpl$26();
    insert(_el$3, createComponent(NavigationMenu.Menu, others));
    effect(() => className(_el$3, cn("flex items-stretch", variant === "underline" && "self-stretch", local.class)));
    return _el$3;
  })();
}
function MegaMenuTrigger(props) {
  const [local, others] = splitProps(props, ["class", "children", "noChevron", "variant", "icon", "iconPosition"]);
  const icons = useIcons();
  const contextVariant = useContext(VariantContext);
  const inv = useContext(InvertedContext);
  const v = () => local.variant ?? contextVariant;
  const ip = () => local.iconPosition ?? "start";
  const isStacked = () => ip() === "top" || ip() === "bottom";
  return createComponent(NavigationMenu.Trigger, mergeProps({
    get ["class"]() {
      return cn("group relative flex items-center gap-1.5 text-sm font-medium transition-colors", inv ? "text-white/65" : "text-ink-700", "outline-none", v() !== "underline" && (inv ? "data-[focus-visible]:ring-2 data-[focus-visible]:ring-white/40" : "data-[focus-visible]:ring-2 data-[focus-visible]:ring-primary-500/50"), v() === "default" && [!isStacked() && "h-9", "rounded-md px-3 py-2", inv ? "hover:bg-white/10 hover:text-white data-[expanded]:bg-white/10 data-[expanded]:text-white" : "hover:bg-surface-overlay hover:text-ink-900 data-[expanded]:bg-surface-overlay data-[expanded]:text-ink-900"], v() === "underline" && ["h-full rounded-none px-3", isStacked() && "py-2", "border-b-2 border-transparent", inv ? "hover:border-white/60 hover:text-white data-[expanded]:border-white/60 data-[expanded]:text-white" : "hover:border-primary-500 hover:text-primary-600 data-[expanded]:border-primary-500 data-[expanded]:text-primary-600"], v() === "ghost" && [!isStacked() && "h-9", "rounded-md px-3 py-2", inv ? "hover:text-white data-[expanded]:text-white" : "hover:text-primary-600 data-[expanded]:text-primary-600"], local.class);
    }
  }, others, {
    get children() {
      return [createComponent(Show, {
        get when() {
          return isStacked();
        },
        get children() {
          var _el$4 = _tmpl$46(), _el$6 = _el$4.firstChild;
          insert(_el$4, createComponent(Show, {
            get when() {
              return memo(() => !!local.icon)() && ip() === "top";
            },
            get children() {
              var _el$5 = _tmpl$36();
              insert(_el$5, () => local.icon);
              return _el$5;
            }
          }), _el$6);
          insert(_el$6, () => local.children);
          insert(_el$4, createComponent(Show, {
            get when() {
              return memo(() => !!local.icon)() && ip() === "bottom";
            },
            get children() {
              var _el$7 = _tmpl$36();
              insert(_el$7, () => local.icon);
              return _el$7;
            }
          }), null);
          return _el$4;
        }
      }), createComponent(Show, {
        get when() {
          return !isStacked();
        },
        get children() {
          return [createComponent(Show, {
            get when() {
              return memo(() => !!local.icon)() && ip() === "start";
            },
            get children() {
              var _el$8 = _tmpl$36();
              insert(_el$8, () => local.icon);
              return _el$8;
            }
          }), (() => {
            var _el$9 = _tmpl$55();
            insert(_el$9, () => local.children);
            return _el$9;
          })(), createComponent(Show, {
            get when() {
              return memo(() => !!local.icon)() && ip() === "end";
            },
            get children() {
              var _el$0 = _tmpl$36();
              insert(_el$0, () => local.icon);
              return _el$0;
            }
          })];
        }
      }), createComponent(Show, {
        get when() {
          return memo(() => !!!local.noChevron)() && !isStacked();
        },
        get children() {
          return icons.chevronDown({
            class: cn("relative h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-data-[expanded]:rotate-180", inv ? "text-white/40 group-hover:text-white/60" : "text-ink-400"),
            "aria-hidden": "true"
          });
        }
      })];
    }
  }));
}
function MegaMenuContent(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return createComponent(NavigationMenu.Portal, {
    get children() {
      return createComponent(NavigationMenu.Content, mergeProps({
        as: "div",
        get ["class"]() {
          return cn("torchui-mm-content", local.class);
        }
      }, others, {
        get children() {
          return local.children;
        }
      }));
    }
  });
}
function MegaMenuPanel(props) {
  const cols = () => props.columns ?? 3;
  const gridClass = () => ({
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4"
  })[cols()] ?? "grid-cols-3";
  return props.fullWidth ? (() => {
    var _el$1 = _tmpl$65(), _el$10 = _el$1.firstChild;
    insert(_el$10, () => props.children);
    effect((_p$) => {
      var _v$ = cn("w-full px-6 py-5", props.class), _v$2 = cn("mx-auto grid gap-x-8 gap-y-2", gridClass()), _v$3 = props.maxWidth ?? "1280px";
      _v$ !== _p$.e && className(_el$1, _p$.e = _v$);
      _v$2 !== _p$.t && className(_el$10, _p$.t = _v$2);
      _v$3 !== _p$.a && setStyleProperty(_el$10, "max-width", _p$.a = _v$3);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    });
    return _el$1;
  })() : (() => {
    var _el$11 = _tmpl$26();
    insert(_el$11, () => props.children);
    effect(() => className(_el$11, cn("grid gap-x-6 gap-y-2 p-5", gridClass(), props.class)));
    return _el$11;
  })();
}
function MegaMenuColumn(props) {
  return (() => {
    var _el$12 = _tmpl$26();
    insert(_el$12, () => props.children);
    effect(() => className(_el$12, cn("flex flex-col gap-1", props.class)));
    return _el$12;
  })();
}
function MegaMenuSection(props) {
  return (() => {
    var _el$13 = _tmpl$75(), _el$14 = _el$13.firstChild, _el$15 = _el$14.nextSibling;
    insert(_el$14, () => props.label);
    insert(_el$15, () => props.children);
    effect(() => className(_el$13, cn("flex flex-col gap-1", props.class)));
    return _el$13;
  })();
}
function MegaMenuItem(props) {
  return createComponent(Dynamic, {
    get component() {
      return props.href && !props.disabled ? "a" : "button";
    },
    get href() {
      return memo(() => !!(props.href && !props.disabled))() ? props.href : void 0;
    },
    get type() {
      return props.href && !props.disabled ? void 0 : "button";
    },
    get tabIndex() {
      return props.disabled ? -1 : void 0;
    },
    onClick: (e) => {
      if (props.disabled) {
        e.preventDefault();
        return;
      }
      props.onClick?.();
    },
    get ["aria-disabled"]() {
      return props.disabled ? "true" : void 0;
    },
    get ["class"]() {
      return cn("group flex w-full min-w-0 items-start gap-3 rounded-lg px-3 py-1.5 text-left text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary-500/50", props.active ? "bg-primary-50" : "hover:bg-surface-overlay", props.disabled && "pointer-events-none opacity-40", props.class);
    },
    get children() {
      return [createComponent(Show, {
        get when() {
          return props.icon;
        },
        get children() {
          var _el$16 = _tmpl$55();
          insert(_el$16, () => props.icon);
          effect(() => className(_el$16, cn("mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors [&>svg]:h-4 [&>svg]:w-4", props.active ? "bg-primary-100 text-primary-600" : "bg-surface-overlay text-ink-500 group-hover:bg-surface-dim group-hover:text-ink-700")));
          return _el$16;
        }
      }), (() => {
        var _el$17 = _tmpl$03(), _el$18 = _el$17.firstChild, _el$19 = _el$18.firstChild;
        insert(_el$19, () => props.label);
        insert(_el$18, createComponent(Show, {
          get when() {
            return props.badge;
          },
          get children() {
            var _el$20 = _tmpl$84();
            insert(_el$20, () => props.badge);
            return _el$20;
          }
        }), null);
        insert(_el$17, createComponent(Show, {
          get when() {
            return props.description;
          },
          get children() {
            var _el$21 = _tmpl$94();
            insert(_el$21, () => props.description);
            return _el$21;
          }
        }), null);
        effect(() => className(_el$19, cn("font-medium leading-none", props.active ? "text-primary-700" : "text-ink-900")));
        return _el$17;
      })()];
    }
  });
}
function MegaMenuFeatured(props) {
  const icons = useIcons();
  return createComponent(Dynamic, {
    get component() {
      return props.href ? "a" : "div";
    },
    get href() {
      return props.href;
    },
    get ["class"]() {
      return cn("group relative flex h-full flex-col justify-between overflow-hidden rounded-xl p-5 outline-none transition-opacity hover:opacity-90", "focus-visible:ring-2 focus-visible:ring-white/70", props.backgroundClass ?? "bg-gradient-to-br from-primary-500 to-primary-600", props.class);
    },
    get children() {
      return [createComponent(Show, {
        get when() {
          return props.image;
        },
        get children() {
          var _el$22 = _tmpl$17();
          insert(_el$22, () => props.image);
          return _el$22;
        }
      }), (() => {
        var _el$23 = _tmpl$112(), _el$24 = _el$23.firstChild;
        insert(_el$24, () => props.title);
        insert(_el$23, createComponent(Show, {
          get when() {
            return props.description;
          },
          get children() {
            var _el$25 = _tmpl$103();
            insert(_el$25, () => props.description);
            return _el$25;
          }
        }), null);
        return _el$23;
      })(), (() => {
        var _el$26 = _tmpl$122();
        insert(_el$26, () => props.cta ?? "Learn more", null);
        insert(_el$26, () => icons.chevronRight({
          class: "h-3 w-3 transition-transform group-hover:translate-x-0.5",
          "aria-hidden": "true"
        }), null);
        return _el$26;
      })()];
    }
  });
}
function MegaMenuDivider(props) {
  return (() => {
    var _el$27 = _tmpl$132();
    effect(() => className(_el$27, cn("my-2 h-px bg-surface-border", props.class)));
    return _el$27;
  })();
}
function MegaMenuFooter(props) {
  return (() => {
    var _el$28 = _tmpl$142(), _el$29 = _el$28.firstChild;
    insert(_el$29, () => props.children);
    effect((_p$) => {
      var _v$4 = cn("border-t border-surface-border", props.fullWidth ? "px-6 py-3" : "px-5 py-3", props.class), _v$5 = props.fullWidth ? {
        "max-width": props.maxWidth ?? "1280px",
        margin: "0 auto"
      } : {};
      _v$4 !== _p$.e && className(_el$28, _p$.e = _v$4);
      _p$.t = style(_el$29, _v$5, _p$.t);
      return _p$;
    }, {
      e: void 0,
      t: void 0
    });
    return _el$28;
  })();
}
function MegaMenuFooterLink(props) {
  return createComponent(Dynamic, {
    get component() {
      return props.href ? "a" : "button";
    },
    get href() {
      return props.href;
    },
    get type() {
      return props.href ? void 0 : "button";
    },
    get onClick() {
      return props.onClick;
    },
    get ["class"]() {
      return cn("text-xs font-medium text-ink-500 hover:text-primary-600 transition-colors", "outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", props.class);
    },
    get children() {
      return props.children;
    }
  });
}
function MegaMenuBarLink(props) {
  const contextVariant = useContext(VariantContext);
  const v = () => props.variant ?? contextVariant;
  return (() => {
    var _el$30 = _tmpl$152(), _el$31 = _el$30.firstChild;
    insert(_el$31, () => props.children);
    effect((_p$) => {
      var _v$6 = cn("flex items-stretch", v() === "underline" && "h-full"), _v$7 = props.href, _v$8 = cn("flex items-center text-sm font-medium text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", v() === "default" && "h-9 rounded-md px-3 py-2 hover:bg-surface-overlay hover:text-ink-900", v() === "underline" && ["h-full rounded-none px-3", "border-b-2 border-transparent", "hover:border-primary-500 hover:text-primary-600"], v() === "ghost" && "h-9 rounded-md px-3 py-2 hover:text-primary-600", props.class);
      _v$6 !== _p$.e && className(_el$30, _p$.e = _v$6);
      _v$7 !== _p$.t && setAttribute(_el$31, "href", _p$.t = _v$7);
      _v$8 !== _p$.a && className(_el$31, _p$.a = _v$8);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    });
    return _el$30;
  })();
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

export { Breadcrumbs, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, MegaMenu, MegaMenuBar, MegaMenuBarLink, MegaMenuColumn, MegaMenuContent, MegaMenuDivider, MegaMenuFeatured, MegaMenuFooter, MegaMenuFooterLink, MegaMenuItem, MegaMenuMenu, MegaMenuPanel, MegaMenuSection, MegaMenuTrigger, MenuBar, MenuBarContent, MenuBarDivider, MenuBarItem, MenuBarLabel, MenuBarLink, MenuBarMenu, MenuBarNavLink, MenuBarTrigger, Pagination, Sidebar, Tabs, TabsContent, TabsList, TabsTrigger, ViewSwitcher };
