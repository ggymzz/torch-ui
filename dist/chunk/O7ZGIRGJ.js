import { useIcons, useLocaleConfig, resolveLocale } from './LFPOAP3K.js';
import { cn } from './CZPH5U6S.js';
import { delegateEvents, createComponent, mergeProps, effect, className, insert, memo, template, use, setAttribute } from 'solid-js/web';
import { splitProps, createSignal, createEffect, on, onMount, onCleanup, Show, For, Index } from 'solid-js';
import { ContextMenu as ContextMenu$1 } from '@kobalte/core/context-menu';
import { HoverCard as HoverCard$1 } from '@kobalte/core/hover-card';
import { Dialog } from '@kobalte/core/dialog';

var _KbContent = ContextMenu$1.Content;
var _KbItem = ContextMenu$1.Item;
var _KbSeparator = ContextMenu$1.Separator;
var ContextMenuRoot = ContextMenu$1;
var ContextMenuTrigger = ContextMenu$1.Trigger;
function ContextMenuContent(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return createComponent(ContextMenu$1.Portal, {
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
function ContextMenuItem(props) {
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
function ContextMenuSeparator(props) {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(_KbSeparator, mergeProps({
    get ["class"]() {
      return cn("my-1 h-px border-none bg-surface-border", local.class);
    }
  }, others));
}
var ContextMenu = Object.assign(ContextMenuRoot, {
  Trigger: ContextMenuTrigger,
  Content: ContextMenuContent,
  Item: ContextMenuItem,
  Separator: ContextMenuSeparator
});
var _tmpl$ = /* @__PURE__ */ template(`<div>`);
function HoverCardRoot(props) {
  const [local, others] = splitProps(props, ["align", "side", "placement"]);
  const side = () => local.side ?? "bottom";
  const align = () => local.align ?? "center";
  const placement = () => {
    if (local.placement) return local.placement;
    const s = side();
    const a = align();
    return a === "center" ? s : `${s}-${a}`;
  };
  return createComponent(HoverCard$1, mergeProps(others, {
    get placement() {
      return placement();
    }
  }));
}
var HoverCardTrigger = HoverCard$1.Trigger;
var HoverCardPortal = HoverCard$1.Portal;
var HoverCardArrow = HoverCard$1.Arrow;
function HoverCardContent(props) {
  const [local, others] = splitProps(props, ["class", "children", "showArrow"]);
  return createComponent(HoverCard$1.Portal, {
    get children() {
      return createComponent(HoverCard$1.Content, mergeProps({
        get ["class"]() {
          return cn("z-[80] min-w-[220px] max-w-sm rounded-xl border border-surface-border bg-surface-raised shadow-lg", "data-[expanded]:animate-in data-[closed]:animate-out", "data-[expanded]:fade-in-0 data-[closed]:fade-out-0", "data-[expanded]:zoom-in-95 data-[closed]:zoom-out-95", "data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2", "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2", local.class);
        }
      }, others, {
        get children() {
          return [memo(() => local.children), memo(() => memo(() => local.showArrow !== false)() && createComponent(HoverCard$1.Arrow, {
            "class": "fill-surface-raised stroke-surface-border"
          }))];
        }
      }));
    }
  });
}
function HoverCardHeader(props) {
  return (() => {
    var _el$ = _tmpl$();
    insert(_el$, () => props.children);
    effect(() => className(_el$, cn("px-4 pt-4 pb-2", props.class)));
    return _el$;
  })();
}
function HoverCardBody(props) {
  return (() => {
    var _el$2 = _tmpl$();
    insert(_el$2, () => props.children);
    effect(() => className(_el$2, cn("px-4 py-3", props.class)));
    return _el$2;
  })();
}
function HoverCardFooter(props) {
  return (() => {
    var _el$3 = _tmpl$();
    insert(_el$3, () => props.children);
    effect(() => className(_el$3, cn("px-4 pb-4 pt-2 border-t border-surface-border", props.class)));
    return _el$3;
  })();
}
function HoverCardSeparator(props) {
  return (() => {
    var _el$4 = _tmpl$();
    effect(() => className(_el$4, cn("h-px bg-surface-border", props.class)));
    return _el$4;
  })();
}
var HoverCard = Object.assign(HoverCardRoot, {
  Trigger: HoverCardTrigger,
  Content: HoverCardContent,
  Header: HoverCardHeader,
  Body: HoverCardBody,
  Footer: HoverCardFooter,
  Separator: HoverCardSeparator
});
var _tmpl$2 = /* @__PURE__ */ template(`<button type=button class="shrink-0 rounded p-0.5 text-ink-400 hover:text-ink-600 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$22 = /* @__PURE__ */ template(`<div class="flex items-center gap-3 border-b border-surface-border px-4 py-3"><input type=text class="flex-1 bg-transparent text-sm text-ink-900 placeholder:text-ink-400 outline-none">`);
var _tmpl$3 = /* @__PURE__ */ template(`<div class="border-b border-surface-border px-4 py-3"><p class="mb-2 text-xs font-medium text-ink-500"></p><div class="flex flex-wrap gap-1.5">`);
var _tmpl$4 = /* @__PURE__ */ template(`<div class="flex-1 overflow-y-auto"role=listbox>`);
var _tmpl$5 = /* @__PURE__ */ template(`<div class="flex items-center gap-4 border-t border-surface-border px-4 py-2 text-xs text-ink-400"><span class="inline-flex items-center gap-1"><kbd class="rounded border border-surface-border bg-surface-overlay px-1 py-0.5 font-mono text-[10px] text-ink-700">\u2191</kbd><kbd class="rounded border border-surface-border bg-surface-overlay px-1 py-0.5 font-mono text-[10px] text-ink-700">\u2193</kbd>To navigate</span><span class="inline-flex items-center gap-1"><kbd class="rounded border border-surface-border bg-surface-overlay px-1 py-0.5 font-mono text-[10px] text-ink-700">\u21B5</kbd>To select</span><span class="inline-flex items-center gap-1"><kbd class="rounded border border-surface-border bg-surface-overlay px-1 py-0.5 font-mono text-[10px] text-ink-700">esc</kbd>To close`);
var _tmpl$6 = /* @__PURE__ */ template(`<div class="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">`);
var _tmpl$7 = /* @__PURE__ */ template(`<span class="h-3.5 w-3.5">`);
var _tmpl$8 = /* @__PURE__ */ template(`<button type=button>`);
var _tmpl$9 = /* @__PURE__ */ template(`<div class="px-4 py-8 text-center text-sm text-ink-500">`);
var _tmpl$0 = /* @__PURE__ */ template(`<button type=button class="px-4 py-1.5 text-xs font-medium text-primary-500 hover:text-primary-600 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$1 = /* @__PURE__ */ template(`<div class=py-2><p class="px-4 pb-1 text-xs font-medium text-ink-500">`);
var _tmpl$10 = /* @__PURE__ */ template(`<span class="flex h-5 w-5 shrink-0 items-center justify-center text-ink-400">`);
var _tmpl$11 = /* @__PURE__ */ template(`<span class="block truncate text-xs text-ink-400 mt-0.5">`);
var _tmpl$12 = /* @__PURE__ */ template(`<span class=shrink-0>`);
var _tmpl$13 = /* @__PURE__ */ template(`<button type=button role=option><span class="min-w-0 flex-1"><span class="block truncate">`);
function SearchPalette(props) {
  const [local, others] = splitProps(props, ["open", "onOpenChange", "query", "onQueryChange", "categories", "selectedCategories", "onCategoryChange", "groups", "onSelect", "placeholder", "emptyMessage", "categoriesLabel", "showKeyboardHints", "class"]);
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
  return createComponent(Dialog, {
    get open() {
      return local.open;
    },
    get onOpenChange() {
      return local.onOpenChange;
    },
    get children() {
      return createComponent(Dialog.Portal, {
        get children() {
          return [createComponent(Dialog.Overlay, {
            "class": "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          }), (() => {
            var _el$ = _tmpl$6();
            insert(_el$, createComponent(Dialog.Content, {
              get ["class"]() {
                return cn("w-full max-w-lg rounded-xl bg-surface-raised shadow-2xl border border-surface-border", "flex flex-col max-h-[60vh]", local.class);
              },
              onKeyDown: handleKeyDown,
              get children() {
                return [(() => {
                  var _el$2 = _tmpl$22(), _el$3 = _el$2.firstChild;
                  insert(_el$2, () => icons.search({
                    class: "h-5 w-5 shrink-0 text-ink-400",
                    "aria-hidden": "true"
                  }), _el$3);
                  _el$3.$$input = (e) => local.onQueryChange(e.currentTarget.value);
                  var _ref$ = inputRef;
                  typeof _ref$ === "function" ? use(_ref$, _el$3) : inputRef = _el$3;
                  insert(_el$2, createComponent(Show, {
                    get when() {
                      return local.query.length > 0;
                    },
                    get children() {
                      var _el$4 = _tmpl$2();
                      _el$4.$$click = () => {
                        local.onQueryChange("");
                        inputRef?.focus();
                      };
                      insert(_el$4, () => icons.close({
                        class: "h-4 w-4",
                        "aria-hidden": "true"
                      }));
                      effect(() => setAttribute(_el$4, "aria-label", zh() ? "\u6E05\u9664\u641C\u7D22" : "Clear search"));
                      return _el$4;
                    }
                  }), null);
                  effect(() => setAttribute(_el$3, "placeholder", local.placeholder ?? (zh() ? "\u641C\u7D22\u2026" : "Search\u2026")));
                  effect(() => _el$3.value = local.query);
                  return _el$2;
                })(), createComponent(Show, {
                  get when() {
                    return memo(() => !!local.categories)() && local.categories.length > 0;
                  },
                  get children() {
                    var _el$5 = _tmpl$3(), _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling;
                    insert(_el$6, () => local.categoriesLabel ?? (zh() ? "\u6B63\u5728\u641C\u7D22\u2026" : "I'm Searching\u2026"));
                    insert(_el$7, createComponent(For, {
                      get each() {
                        return local.categories;
                      },
                      children: (cat) => {
                        const isSelected = () => (local.selectedCategories ?? []).includes(cat.key);
                        return (() => {
                          var _el$0 = _tmpl$8();
                          _el$0.$$click = () => toggleCategory(cat.key);
                          insert(_el$0, createComponent(Show, {
                            get when() {
                              return cat.icon;
                            },
                            get children() {
                              var _el$1 = _tmpl$7();
                              insert(_el$1, () => resolveContent(cat.icon));
                              return _el$1;
                            }
                          }), null);
                          insert(_el$0, () => cat.label, null);
                          effect(() => className(_el$0, cn("inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors", "outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", isSelected() ? "border-primary-500 bg-primary-50 text-primary-600" : "border-surface-border bg-surface-raised text-ink-600 hover:bg-surface-overlay")));
                          return _el$0;
                        })();
                      }
                    }));
                    return _el$5;
                  }
                }), (() => {
                  var _el$8 = _tmpl$4();
                  insert(_el$8, createComponent(Show, {
                    get when() {
                      return totalItems() > 0;
                    },
                    get fallback() {
                      return (() => {
                        var _el$10 = _tmpl$9();
                        insert(_el$10, () => local.emptyMessage ?? (zh() ? "\u6682\u65E0\u7ED3\u679C" : "No results found."));
                        return _el$10;
                      })();
                    },
                    get children() {
                      return createComponent(Index, {
                        get each() {
                          return local.groups;
                        },
                        children: (group, gi) => (() => {
                          var _el$11 = _tmpl$1(), _el$12 = _el$11.firstChild;
                          insert(_el$12, () => group().title);
                          insert(_el$11, createComponent(For, {
                            get each() {
                              return group().items;
                            },
                            children: (item, ii) => {
                              const idx = () => flatIndex(gi, ii());
                              return (() => {
                                var _el$14 = _tmpl$13(), _el$16 = _el$14.firstChild, _el$17 = _el$16.firstChild;
                                _el$14.addEventListener("mouseenter", () => setActiveIndex(idx()));
                                _el$14.$$click = () => local.onSelect(item);
                                insert(_el$14, createComponent(Show, {
                                  get when() {
                                    return item.icon;
                                  },
                                  get children() {
                                    var _el$15 = _tmpl$10();
                                    insert(_el$15, () => resolveContent(item.icon));
                                    return _el$15;
                                  }
                                }), _el$16);
                                insert(_el$17, () => item.label);
                                insert(_el$16, createComponent(Show, {
                                  get when() {
                                    return item.description;
                                  },
                                  get children() {
                                    var _el$18 = _tmpl$11();
                                    insert(_el$18, () => item.description);
                                    return _el$18;
                                  }
                                }), null);
                                insert(_el$14, createComponent(Show, {
                                  get when() {
                                    return item.trailing;
                                  },
                                  get children() {
                                    var _el$19 = _tmpl$12();
                                    insert(_el$19, () => resolveContent(item.trailing));
                                    return _el$19;
                                  }
                                }), null);
                                effect((_p$) => {
                                  var _v$ = activeIndex() === idx() ? "true" : "false", _v$2 = cn("flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors", "outline-none", activeIndex() === idx() ? "bg-surface-overlay text-ink-900" : "text-ink-700 hover:bg-surface-overlay");
                                  _v$ !== _p$.e && setAttribute(_el$14, "aria-selected", _p$.e = _v$);
                                  _v$2 !== _p$.t && className(_el$14, _p$.t = _v$2);
                                  return _p$;
                                }, {
                                  e: void 0,
                                  t: void 0
                                });
                                return _el$14;
                              })();
                            }
                          }), null);
                          insert(_el$11, createComponent(Show, {
                            get when() {
                              return group().seeAll;
                            },
                            get children() {
                              var _el$13 = _tmpl$0();
                              _el$13.$$click = () => group().seeAll.onClick();
                              insert(_el$13, () => group().seeAll.label);
                              return _el$13;
                            }
                          }), null);
                          return _el$11;
                        })()
                      });
                    }
                  }));
                  return _el$8;
                })(), createComponent(Show, {
                  get when() {
                    return local.showKeyboardHints !== false;
                  },
                  get children() {
                    return _tmpl$5();
                  }
                })];
              }
            }));
            return _el$;
          })()];
        }
      });
    }
  });
}
delegateEvents(["input", "click"]);

export { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuRoot, ContextMenuSeparator, ContextMenuTrigger, HoverCard, HoverCardArrow, HoverCardBody, HoverCardContent, HoverCardFooter, HoverCardHeader, HoverCardPortal, HoverCardRoot, HoverCardSeparator, HoverCardTrigger, SearchPalette };
