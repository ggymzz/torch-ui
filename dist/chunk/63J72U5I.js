import { Pagination } from './XZHJKI6P.js';
import { normalizeHex, Avatar, neutralColorClass, shapeClasses, avatarSizeClasses, useIcons, useLocaleConfig, Input, Button, Dialog, AlertDialog, resolveLocale } from './LFPOAP3K.js';
import { cn } from './CZPH5U6S.js';
import { delegateEvents, createComponent, spread, mergeProps, insert, effect, setAttribute, setStyleProperty, memo, className, style, template } from 'solid-js/web';
import { createContext, splitProps, createSignal, useContext, Show, createMemo, For, createEffect, on, onCleanup, onMount, createUniqueId, mergeProps as mergeProps$1 } from 'solid-js';
import { ColorSwatch as ColorSwatch$1 } from '@kobalte/core/color-swatch';
import { parseColor } from '@kobalte/core/colors';
import { Image as Image$1 } from '@kobalte/core/image';

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
      return parseColor("hsl(0, 0%, 50%)");
    }
  });
  const shapeClass = createMemo(() => variantClass[local.variant ?? "rounded"]);
  return createComponent(ColorSwatch$1, mergeProps({
    get value() {
      return color();
    },
    get colorName() {
      return local.colorName;
    },
    get ["aria-label"]() {
      return a11y["aria-label"] ?? local.colorName ?? normalized() ?? "Color swatch";
    },
    get ["class"]() {
      return cn("block shrink-0 border-2 border-surface-border shadow-sm", shapeClass(), local.class);
    },
    get style() {
      return local.style;
    }
  }, rest));
}
var _tmpl$ = /* @__PURE__ */ template(`<div><div class="min-w-0 flex-1"><div>`);
var _tmpl$2 = /* @__PURE__ */ template(`<div>`);
var sizeStyles = {
  sm: {
    gap: "gap-2",
    name: "text-sm",
    secondary: "text-xs"
  },
  md: {
    gap: "gap-3",
    name: "text-sm",
    secondary: "text-sm"
  },
  lg: {
    gap: "gap-4",
    name: "text-base",
    secondary: "text-sm"
  }
};
function Persona(props) {
  const [local, others] = splitProps(props, ["name", "imageUrl", "secondary", "size", "shape", "color", "class", "children"]);
  const size = () => local.size ?? "md";
  const styles = createMemo(() => sizeStyles[size()]);
  return (() => {
    var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
    spread(_el$, mergeProps({
      get ["class"]() {
        return cn("flex items-center min-w-0", styles().gap, local.class);
      }
    }, others), false, true);
    insert(_el$, createComponent(Avatar, {
      decorative: true,
      get name() {
        return local.name;
      },
      get imageUrl() {
        return local.imageUrl;
      },
      get size() {
        return size();
      },
      get shape() {
        return local.shape;
      },
      get color() {
        return local.color;
      }
    }), _el$2);
    insert(_el$3, () => local.name);
    insert(_el$2, (() => {
      var _c$ = memo(() => !!local.secondary);
      return () => _c$() && (() => {
        var _el$4 = _tmpl$2();
        insert(_el$4, () => local.secondary);
        effect(() => className(_el$4, cn("text-ink-500 truncate", styles().secondary)));
        return _el$4;
      })();
    })(), null);
    insert(_el$, () => local.children, null);
    effect(() => className(_el$3, cn("font-medium text-ink-900 truncate", styles().name)));
    return _el$;
  })();
}
var _tmpl$3 = /* @__PURE__ */ template(`<span>`);
var variantClasses = {
  neutral: "bg-ink-400",
  primary: "bg-primary-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
  danger: "bg-danger-500",
  info: "bg-info-600"
};
var sizeClasses = {
  sm: {
    dot: "size-2.5",
    pill: "h-4 min-w-4 px-0.5 text-[10px]",
    icon: "h-4 min-w-4 [&>svg]:size-2.5"
  },
  md: {
    dot: "size-3",
    pill: "h-5 min-w-5 px-1 text-xs",
    icon: "h-5 min-w-5 [&>svg]:size-3"
  },
  lg: {
    dot: "size-4",
    pill: "h-6 min-w-6 px-1.5 text-sm",
    icon: "h-6 min-w-6 [&>svg]:size-4"
  }
};
function Badge(props) {
  const [local, others] = splitProps(props, ["variant", "size", "icon", "class", "children", "decorative"]);
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
  return (() => {
    var _el$ = _tmpl$3();
    spread(_el$, mergeProps({
      get ["aria-hidden"]() {
        return isDecorative() && !hasA11yName() ? "true" : void 0;
      },
      get ["class"]() {
        return cn("inline-flex shrink-0 items-center justify-center rounded-full border-2 border-surface-base font-medium leading-none text-white", usePill() && "shadow-sm", hasIcon() && hasContent() && "gap-0.5", variantClasses[variant()], usePill() ? hasIcon() && !hasContent() ? sizeClasses[size()].icon : sizeClasses[size()].pill : sizeClasses[size()].dot, local.class);
      }
    }, others), false, true);
    insert(_el$, () => local.icon, null);
    insert(_el$, () => local.children, null);
    return _el$;
  })();
}
var _tmpl$4 = /* @__PURE__ */ template(`<div role=group>`);
var _tmpl$22 = /* @__PURE__ */ template(`<span role=img>+`);
var overlapClasses = {
  sm: "-space-x-1.5",
  md: "-space-x-2",
  lg: "-space-x-3"
};
var STACK_RING = {
  offset: false
};
function AvatarGroup(props) {
  const [local, others] = splitProps(props, ["avatars", "max", "size", "shape", "overlap", "stacking", "class"]);
  const overlap = () => local.overlap ?? "md";
  const size = () => local.size ?? "md";
  const shape = () => local.shape ?? "circle";
  const stacking = () => local.stacking ?? "last-on-top";
  const displayed = createMemo(() => {
    const list = [...local.avatars];
    const m = local.max;
    if (m == null || list.length <= m) return {
      items: list,
      overflow: 0
    };
    return {
      items: list.slice(0, m),
      overflow: list.length - m
    };
  });
  const items = createMemo(() => displayed().items);
  const overflow = createMemo(() => displayed().overflow);
  const count = () => items().length;
  return (() => {
    var _el$ = _tmpl$4();
    spread(_el$, mergeProps({
      get ["class"]() {
        return cn("inline-flex flex-row items-center", overlapClasses[overlap()], local.class);
      }
    }, others), false, true);
    insert(_el$, createComponent(For, {
      get each() {
        return items();
      },
      children: (item, idx) => {
        const zIndex = () => stacking() === "first-on-top" ? count() - idx() : idx() + 1;
        return createComponent(Avatar, {
          get name() {
            return item.name;
          },
          get imageUrl() {
            return item.imageUrl;
          },
          get size() {
            return size();
          },
          get shape() {
            return shape();
          },
          ring: STACK_RING,
          "class": "relative",
          get style() {
            return {
              "z-index": zIndex()
            };
          }
        });
      }
    }), null);
    insert(_el$, (() => {
      var _c$ = memo(() => overflow() > 0);
      return () => _c$() && (() => {
        var _el$2 = _tmpl$22(); _el$2.firstChild;
        insert(_el$2, overflow, null);
        effect((_p$) => {
          var _v$ = `${overflow()} more avatars`, _v$2 = cn("relative inline-flex shrink-0 items-center justify-center font-medium ring-2 ring-surface-base", neutralColorClass, shapeClasses[shape()], avatarSizeClasses[size()]), _v$3 = stacking() === "first-on-top" ? 0 : count() + 1, _v$4 = `+${overflow()} more`;
          _v$ !== _p$.e && setAttribute(_el$2, "aria-label", _p$.e = _v$);
          _v$2 !== _p$.t && className(_el$2, _p$.t = _v$2);
          _v$3 !== _p$.a && setStyleProperty(_el$2, "z-index", _p$.a = _v$3);
          _v$4 !== _p$.o && setAttribute(_el$2, "title", _p$.o = _v$4);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0,
          o: void 0
        });
        return _el$2;
      })();
    })(), null);
    return _el$;
  })();
}
var _tmpl$5 = /* @__PURE__ */ template(`<button type=button>`);
var _tmpl$23 = /* @__PURE__ */ template(`<div>`);
var _tmpl$32 = /* @__PURE__ */ template(`<div role=region aria-roledescription=carousel><div class="min-h-0 transition-opacity duration-500"style=position:relative;width:100%;overflow:hidden>`);
var _tmpl$42 = /* @__PURE__ */ template(`<div class="absolute top-0 left-0 h-full rounded-full">`);
function Carousel(props) {
  const [local, others] = splitProps(props, ["slides", "autoPlayInterval", "showDots", "showArrows", "dotsPosition", "dotsVariant", "dotsBgClass", "dotsOverlay", "progressBarColor", "aria-label", "class"]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const [currentSlide, setCurrentSlide] = createSignal(0);
  const [progressBarReady, setProgressBarReady] = createSignal(false);
  const autoPlayInterval = () => local.autoPlayInterval ?? 5e3;
  const [autoPlayReset, setAutoPlayReset] = createSignal(0);
  const slides = createMemo(() => local.slides);
  createEffect(on(() => slides().length, (len) => {
    setCurrentSlide((i) => Math.min(i, Math.max(len - 1, 0)));
  }));
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
  return (() => {
    var _el$ = _tmpl$32(), _el$2 = _el$.firstChild;
    spread(_el$, mergeProps({
      get ["aria-label"]() {
        return local["aria-label"] ?? "Carousel";
      }
    }, others, {
      get ["class"]() {
        return cn("relative w-full", local.class);
      }
    }), false, true);
    insert(_el$2, createComponent(For, {
      get each() {
        return slides();
      },
      children: (slide, index) => {
        const isActive = () => index() === currentSlide();
        return (() => {
          var _el$6 = _tmpl$23();
          insert(_el$6, () => slide.content);
          effect((_p$) => {
            var _v$5 = !isActive() ? "true" : void 0, _v$6 = cn("transition-opacity duration-500", isActive() ? "pointer-events-auto" : "pointer-events-none"), _v$7 = isActive() ? {
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
            };
            _v$5 !== _p$.e && setAttribute(_el$6, "aria-hidden", _p$.e = _v$5);
            _v$6 !== _p$.t && className(_el$6, _p$.t = _v$6);
            _p$.a = style(_el$6, _v$7, _p$.a);
            return _p$;
          }, {
            e: void 0,
            t: void 0,
            a: void 0
          });
          return _el$6;
        })();
      }
    }));
    insert(_el$, createComponent(Show, {
      get when() {
        return memo(() => local.showArrows === true)() && slides().length > 1;
      },
      get children() {
        return [(() => {
          var _el$3 = _tmpl$5();
          _el$3.$$click = goPrev;
          insert(_el$3, () => icons.chevronLeft({
            class: "h-4 w-4",
            "aria-hidden": "true"
          }));
          effect((_p$) => {
            var _v$ = cn("absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2", "bg-surface-raised/80 hover:bg-surface-raised text-ink-700 shadow-sm", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"), _v$2 = zh() ? "\u4E0A\u4E00\u5F20" : "Previous slide";
            _v$ !== _p$.e && className(_el$3, _p$.e = _v$);
            _v$2 !== _p$.t && setAttribute(_el$3, "aria-label", _p$.t = _v$2);
            return _p$;
          }, {
            e: void 0,
            t: void 0
          });
          return _el$3;
        })(), (() => {
          var _el$4 = _tmpl$5();
          _el$4.$$click = goNext;
          insert(_el$4, () => icons.chevronRight({
            class: "h-4 w-4",
            "aria-hidden": "true"
          }));
          effect((_p$) => {
            var _v$3 = cn("absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2", "bg-surface-raised/80 hover:bg-surface-raised text-ink-700 shadow-sm", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"), _v$4 = zh() ? "\u4E0B\u4E00\u5F20" : "Next slide";
            _v$3 !== _p$.e && className(_el$4, _p$.e = _v$3);
            _v$4 !== _p$.t && setAttribute(_el$4, "aria-label", _p$.t = _v$4);
            return _p$;
          }, {
            e: void 0,
            t: void 0
          });
          return _el$4;
        })()];
      }
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return memo(() => local.showDots !== false)() && slides().length > 1;
      },
      get children() {
        var _el$5 = _tmpl$23();
        insert(_el$5, createComponent(For, {
          get each() {
            return slides();
          },
          children: (_, index) => (() => {
            var _el$7 = _tmpl$5();
            _el$7.$$click = () => goToSlide(index());
            insert(_el$7, createComponent(Show, {
              get when() {
                return memo(() => index() === currentSlide())() && autoPlayInterval() > 0;
              },
              get children() {
                var _el$8 = _tmpl$42();
                effect((_$p) => style(_el$8, progressBarReady() ? {
                  "background-color": local.progressBarColor ?? (local.dotsVariant === "light" || !!local.dotsBgClass ? "white" : "var(--color-ink-700)"),
                  animation: `carouselProgressBar ${autoPlayInterval()}ms linear forwards`,
                  "animation-fill-mode": "forwards"
                } : {
                  "background-color": local.progressBarColor ?? (local.dotsVariant === "light" || !!local.dotsBgClass ? "white" : "var(--color-ink-700)"),
                  width: "0%"
                }, _$p));
                return _el$8;
              }
            }));
            effect((_p$) => {
              var _v$8 = cn("h-2 rounded-full transition-all duration-300", index() === currentSlide() ? "w-8 relative overflow-hidden" : "w-2"), _v$9 = local.dotsVariant === "light" || !!local.dotsBgClass ? "rgba(255,255,255,0.4)" : "var(--color-ink-400)", _v$0 = zh() ? `\u8DF3\u8F6C\u5230\u7B2C ${index() + 1} \u5F20` : `Go to slide ${index() + 1}`, _v$1 = index() === currentSlide() ? "true" : void 0;
              _v$8 !== _p$.e && className(_el$7, _p$.e = _v$8);
              _v$9 !== _p$.t && setStyleProperty(_el$7, "background-color", _p$.t = _v$9);
              _v$0 !== _p$.a && setAttribute(_el$7, "aria-label", _p$.a = _v$0);
              _v$1 !== _p$.o && setAttribute(_el$7, "aria-current", _p$.o = _v$1);
              return _p$;
            }, {
              e: void 0,
              t: void 0,
              a: void 0,
              o: void 0
            });
            return _el$7;
          })()
        }));
        effect(() => className(_el$5, cn(local.dotsOverlay ? cn("absolute bottom-3 left-0 right-0 z-10 flex gap-2 px-5 py-2", dotsAlign()) : local.dotsBgClass ? cn("flex gap-2 px-4 py-3 rounded-b-xl", local.dotsBgClass, dotsAlign()) : cn("flex gap-2 my-3", dotsAlign()))));
        return _el$5;
      }
    }), null);
    return _el$;
  })();
}
delegateEvents(["click"]);
var _tmpl$6 = /* @__PURE__ */ template(`<div class="flex h-16 w-16 items-center justify-center rounded-full bg-surface-overlay text-ink-400"aria-hidden=true>`);
var _tmpl$24 = /* @__PURE__ */ template(`<p class="max-w-sm text-sm text-ink-500">`);
var _tmpl$33 = /* @__PURE__ */ template(`<div class="flex flex-wrap items-center justify-center gap-2">`);
var _tmpl$43 = /* @__PURE__ */ template(`<div><div class=space-y-1><h3 class="text-base font-semibold text-ink-900">`);
function EmptyState(props) {
  const [local, rest] = splitProps(props, ["title", "description", "icon", "actions", "announce", "class"]);
  const uid = createUniqueId();
  const titleId = `empty-title-${uid}`;
  const descId = `empty-desc-${uid}`;
  return (() => {
    var _el$ = _tmpl$43(), _el$3 = _el$.firstChild, _el$4 = _el$3.firstChild;
    spread(_el$, mergeProps(rest, {
      get ["class"]() {
        return cn("flex flex-col items-center justify-center gap-4 px-6 py-16 text-center", local.class);
      },
      get role() {
        return local.announce ? "status" : void 0;
      },
      get ["aria-live"]() {
        return local.announce ? "polite" : void 0;
      },
      get ["aria-labelledby"]() {
        return local.announce ? titleId : void 0;
      },
      get ["aria-describedby"]() {
        return local.announce && local.description ? descId : void 0;
      }
    }), false, true);
    insert(_el$, createComponent(Show, {
      get when() {
        return local.icon;
      },
      get children() {
        var _el$2 = _tmpl$6();
        insert(_el$2, () => local.icon);
        return _el$2;
      }
    }), _el$3);
    setAttribute(_el$4, "id", titleId);
    insert(_el$4, () => local.title);
    insert(_el$3, createComponent(Show, {
      get when() {
        return local.description;
      },
      get children() {
        var _el$5 = _tmpl$24();
        setAttribute(_el$5, "id", descId);
        insert(_el$5, () => local.description);
        return _el$5;
      }
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return local.actions;
      },
      get children() {
        var _el$6 = _tmpl$33();
        insert(_el$6, () => local.actions);
        return _el$6;
      }
    }), null);
    return _el$;
  })();
}
var _tmpl$7 = /* @__PURE__ */ template(`<span class="size-2 shrink-0 rounded-full ring-1 ring-surface-border">`);
var _tmpl$25 = /* @__PURE__ */ template(`<span>`);
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
  const props = mergeProps$1({
    variant: "neutral",
    size: "md",
    visualStyle: "default"
  }, rawProps);
  const [local, others] = splitProps(props, ["variant", "size", "statusColor", "statusLabel", "color", "visualStyle", "style", "class", "children", "iconStart", "iconEnd"]);
  const variant = () => local.variant;
  const size = () => local.size;
  const tagStyle = () => local.visualStyle;
  const customStyle = createMemo(() => {
    const c = local.color;
    if (!c) return {};
    return {
      "background-color": `color-mix(in srgb, ${c} 10%, transparent)`,
      "border-color": `color-mix(in srgb, ${c} 25%, transparent)`,
      color: c
    };
  });
  const mergedStyle = createMemo(() => {
    const base = customStyle();
    const inlineStyle = local.style;
    return typeof inlineStyle === "object" && inlineStyle != null ? {
      ...base,
      ...inlineStyle
    } : base;
  });
  return (() => {
    var _el$ = _tmpl$25();
    spread(_el$, mergeProps({
      get ["class"]() {
        return cn("inline-flex items-center gap-1 rounded-full border font-medium", !local.color && (tagStyle() === "solid" ? tagSolidVariants[variant()] : tagVariants[variant()]), tagSizes[size()], local.class);
      },
      get style() {
        return mergedStyle();
      }
    }, others), false, true);
    insert(_el$, createComponent(Show, {
      get when() {
        return local.statusColor;
      },
      get children() {
        var _el$2 = _tmpl$7();
        effect((_p$) => {
          var _v$ = local.statusColor, _v$2 = local.statusLabel ? void 0 : "true", _v$3 = local.statusLabel ? "img" : void 0, _v$4 = local.statusLabel;
          _v$ !== _p$.e && setStyleProperty(_el$2, "background-color", _p$.e = _v$);
          _v$2 !== _p$.t && setAttribute(_el$2, "aria-hidden", _p$.t = _v$2);
          _v$3 !== _p$.a && setAttribute(_el$2, "role", _p$.a = _v$3);
          _v$4 !== _p$.o && setAttribute(_el$2, "aria-label", _p$.o = _v$4);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0,
          o: void 0
        });
        return _el$2;
      }
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return local.iconStart;
      },
      get children() {
        return local.iconStart;
      }
    }), null);
    insert(_el$, () => local.children, null);
    insert(_el$, createComponent(Show, {
      get when() {
        return local.iconEnd;
      },
      get children() {
        return local.iconEnd;
      }
    }), null);
    return _el$;
  })();
}
var _tmpl$8 = /* @__PURE__ */ template(`<kbd>`);
var _tmpl$26 = /* @__PURE__ */ template(`<span>`);
var _tmpl$34 = /* @__PURE__ */ template(`<span class="mx-0.5 select-none font-sans text-[10px] text-ink-500"aria-hidden=true>`);
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
  default: ["bg-surface-raised border border-surface-border border-b-2", "shadow-sm"].join(" "),
  flat: "bg-surface-overlay border border-surface-border"
};
var sizeClasses2 = {
  sm: "h-5 min-w-5 px-1 text-[10px] rounded",
  md: "h-6 min-w-6 px-1.5 text-[11px] rounded",
  lg: "h-7 min-w-7 px-2 text-xs rounded-md"
};
function Kbd(props) {
  const [local, others] = splitProps(props, ["variant", "size", "class", "children"]);
  const variant = () => local.variant ?? "default";
  const size = () => local.size ?? "md";
  return (() => {
    var _el$ = _tmpl$8();
    spread(_el$, mergeProps({
      get ["class"]() {
        return cn("inline-flex items-center justify-center font-mono font-medium leading-none text-ink-700", variantClasses2[variant()], sizeClasses2[size()], local.class);
      }
    }, others), false, true);
    insert(_el$, () => local.children);
    return _el$;
  })();
}
function KbdShortcut(props) {
  const sep = () => props.separator ?? "+";
  return (() => {
    var _el$2 = _tmpl$26();
    insert(_el$2, createComponent(For, {
      get each() {
        return props.keys;
      },
      children: (key, i) => [createComponent(Show, {
        get when() {
          return i() > 0;
        },
        get children() {
          var _el$3 = _tmpl$34();
          insert(_el$3, sep);
          return _el$3;
        }
      }), createComponent(Kbd, {
        get variant() {
          return props.variant;
        },
        get size() {
          return props.size;
        },
        children: key
      })]
    }));
    effect(() => className(_el$2, cn("inline-flex items-center gap-0.5", props.class)));
    return _el$2;
  })();
}
var _tmpl$9 = /* @__PURE__ */ template(`<div>`);
var _tmpl$27 = /* @__PURE__ */ template(`<div class="text-xs font-normal text-ink-400">`);
var _tmpl$35 = /* @__PURE__ */ template(`<div class="mt-1 text-sm text-ink-500">`);
var _tmpl$44 = /* @__PURE__ */ template(`<span>`);
var _tmpl$52 = /* @__PURE__ */ template(`<div class="mt-0.5 text-xs text-ink-500">`);
var _tmpl$62 = /* @__PURE__ */ template(`<div><div class="flex items-center gap-1.5 text-sm font-medium"><span>`);
var _tmpl$72 = /* @__PURE__ */ template(`<span class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg text-[0]">`);
var _tmpl$82 = /* @__PURE__ */ template(`<div class=shrink-0>`);
var _tmpl$92 = /* @__PURE__ */ template(`<div class=mt-3>`);
var _tmpl$0 = /* @__PURE__ */ template(`<div><div class="min-w-0 flex-1"></div><div>`);
var _tmpl$1 = /* @__PURE__ */ template(`<div><div class="flex items-start justify-between gap-3"><div class="min-w-0 flex-1"><div class="flex items-center gap-2"><div class=min-w-0><div class="text-sm font-semibold text-ink-700">`);
function StatCard(props) {
  const [local, others] = splitProps(props, ["label", "subtitle", "icon", "topRight", "value", "helperText", "trendLabel", "trendSubLabel", "trendVariant", "trendIcon", "emptyText", "body", "chart", "chartPosition", "chartA11yLabel", "chartHeight", "chartWidth", "iconLabel", "class"]);
  const chartOnRight = () => local.chart != null && local.chartPosition === "right";
  const hasHeaderContent = () => local.icon != null || local.topRight != null;
  const contentMt = () => hasHeaderContent() ? "mt-5" : "mt-2";
  const hasValue = () => local.value != null && local.value !== "";
  const trendClasses = createMemo(() => {
    if (local.trendVariant === "negative") return "text-danger-600 dark:text-danger-400";
    if (local.trendVariant === "neutral") return "text-ink-600";
    return "text-success-600 dark:text-success-400";
  });
  const ValueOrEmpty = (p) => createComponent(Show, {
    get when() {
      return hasValue();
    },
    get fallback() {
      return (() => {
        var _el$2 = _tmpl$27();
        insert(_el$2, () => local.emptyText ?? "No data yet");
        return _el$2;
      })();
    },
    get children() {
      var _el$ = _tmpl$9();
      insert(_el$, () => local.value);
      effect(() => className(_el$, cn("font-bold tracking-tight text-ink-900", p.small ? "text-2xl sm:text-3xl" : "text-3xl")));
      return _el$;
    }
  });
  const TrendBlock = (p) => [createComponent(Show, {
    get when() {
      return local.helperText;
    },
    get children() {
      var _el$3 = _tmpl$35();
      insert(_el$3, () => local.helperText);
      return _el$3;
    }
  }), createComponent(Show, {
    get when() {
      return local.trendLabel;
    },
    get children() {
      var _el$4 = _tmpl$62(), _el$5 = _el$4.firstChild, _el$7 = _el$5.firstChild;
      insert(_el$5, createComponent(Show, {
        get when() {
          return local.trendIcon;
        },
        get children() {
          var _el$6 = _tmpl$44();
          insert(_el$6, () => local.trendIcon);
          effect(() => className(_el$6, cn("flex shrink-0", trendClasses())));
          return _el$6;
        }
      }), _el$7);
      insert(_el$7, () => local.trendLabel);
      insert(_el$4, createComponent(Show, {
        get when() {
          return local.trendSubLabel;
        },
        get children() {
          var _el$8 = _tmpl$52();
          insert(_el$8, () => local.trendSubLabel);
          return _el$8;
        }
      }), null);
      effect((_p$) => {
        var _v$ = cn(p.gap ?? "mt-3"), _v$2 = cn("whitespace-nowrap", trendClasses());
        _v$ !== _p$.e && className(_el$4, _p$.e = _v$);
        _v$2 !== _p$.t && className(_el$7, _p$.t = _v$2);
        return _p$;
      }, {
        e: void 0,
        t: void 0
      });
      return _el$4;
    }
  })];
  return (() => {
    var _el$9 = _tmpl$1(), _el$0 = _el$9.firstChild, _el$1 = _el$0.firstChild, _el$10 = _el$1.firstChild, _el$12 = _el$10.firstChild, _el$13 = _el$12.firstChild;
    spread(_el$9, mergeProps({
      get ["class"]() {
        return cn("flex flex-col rounded-2xl border border-surface-border bg-surface-raised p-5 shadow-sm", local.class);
      }
    }, others), false, true);
    insert(_el$10, createComponent(Show, {
      get when() {
        return local.icon;
      },
      get children() {
        var _el$11 = _tmpl$72();
        insert(_el$11, () => local.icon);
        effect((_p$) => {
          var _v$3 = local.iconLabel ? "img" : void 0, _v$4 = local.iconLabel;
          _v$3 !== _p$.e && setAttribute(_el$11, "role", _p$.e = _v$3);
          _v$4 !== _p$.t && setAttribute(_el$11, "aria-label", _p$.t = _v$4);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$11;
      }
    }), _el$12);
    insert(_el$13, () => local.label);
    insert(_el$12, createComponent(Show, {
      get when() {
        return local.subtitle;
      },
      get children() {
        var _el$14 = _tmpl$52();
        insert(_el$14, () => local.subtitle);
        return _el$14;
      }
    }), null);
    insert(_el$0, createComponent(Show, {
      get when() {
        return local.topRight;
      },
      get children() {
        var _el$15 = _tmpl$82();
        insert(_el$15, () => local.topRight);
        return _el$15;
      }
    }), null);
    insert(_el$9, createComponent(Show, {
      get when() {
        return chartOnRight();
      },
      get fallback() {
        return [(() => {
          var _el$20 = _tmpl$9();
          insert(_el$20, createComponent(ValueOrEmpty, {}), null);
          insert(_el$20, createComponent(TrendBlock, {}), null);
          insert(_el$20, createComponent(Show, {
            get when() {
              return local.body;
            },
            get children() {
              var _el$21 = _tmpl$92();
              insert(_el$21, () => local.body);
              return _el$21;
            }
          }), null);
          effect(() => className(_el$20, cn(contentMt(), "flex-1")));
          return _el$20;
        })(), createComponent(Show, {
          get when() {
            return memo(() => local.chart != null)() && local.chartPosition !== "right";
          },
          get children() {
            var _el$22 = _tmpl$9();
            insert(_el$22, () => local.chart);
            effect((_p$) => {
              var _v$0 = cn("mt-auto pt-3 w-full min-w-0", local.chartHeight ?? "h-10"), _v$1 = local.chartA11yLabel ? void 0 : "true", _v$10 = local.chartA11yLabel ? "img" : void 0, _v$11 = local.chartA11yLabel;
              _v$0 !== _p$.e && className(_el$22, _p$.e = _v$0);
              _v$1 !== _p$.t && setAttribute(_el$22, "aria-hidden", _p$.t = _v$1);
              _v$10 !== _p$.a && setAttribute(_el$22, "role", _p$.a = _v$10);
              _v$11 !== _p$.o && setAttribute(_el$22, "aria-label", _p$.o = _v$11);
              return _p$;
            }, {
              e: void 0,
              t: void 0,
              a: void 0,
              o: void 0
            });
            return _el$22;
          }
        })];
      },
      get children() {
        var _el$16 = _tmpl$0(), _el$17 = _el$16.firstChild, _el$19 = _el$17.nextSibling;
        insert(_el$17, createComponent(ValueOrEmpty, {
          small: true
        }), null);
        insert(_el$17, createComponent(TrendBlock, {
          gap: "mt-2"
        }), null);
        insert(_el$17, createComponent(Show, {
          get when() {
            return local.body;
          },
          get children() {
            var _el$18 = _tmpl$92();
            insert(_el$18, () => local.body);
            return _el$18;
          }
        }), null);
        insert(_el$19, () => local.chart);
        effect((_p$) => {
          var _v$5 = cn(contentMt(), "flex gap-4"), _v$6 = cn(local.chartHeight ?? "h-20", local.chartWidth ?? "w-28 sm:w-36", "shrink-0"), _v$7 = local.chartA11yLabel ? void 0 : "true", _v$8 = local.chartA11yLabel ? "img" : void 0, _v$9 = local.chartA11yLabel;
          _v$5 !== _p$.e && className(_el$16, _p$.e = _v$5);
          _v$6 !== _p$.t && className(_el$19, _p$.t = _v$6);
          _v$7 !== _p$.a && setAttribute(_el$19, "aria-hidden", _p$.a = _v$7);
          _v$8 !== _p$.o && setAttribute(_el$19, "role", _p$.o = _v$8);
          _v$9 !== _p$.i && setAttribute(_el$19, "aria-label", _p$.i = _v$9);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0,
          o: void 0,
          i: void 0
        });
        return _el$16;
      }
    }), null);
    return _el$9;
  })();
}
var _tmpl$10 = /* @__PURE__ */ template(`<span class="block h-2 w-2 rounded-full bg-white">`);
var _tmpl$28 = /* @__PURE__ */ template(`<div><ol class=list-none>`);
var _tmpl$36 = /* @__PURE__ */ template(`<div class="w-28 shrink-0 pt-0.5 text-right"><span class="text-xs text-ink-400">`);
var _tmpl$45 = /* @__PURE__ */ template(`<span>`);
var _tmpl$53 = /* @__PURE__ */ template(`<div aria-hidden=true>`);
var _tmpl$63 = /* @__PURE__ */ template(`<span class="shrink-0 text-xs text-ink-400 mt-0.5">`);
var _tmpl$73 = /* @__PURE__ */ template(`<div>`);
var _tmpl$83 = /* @__PURE__ */ template(`<div class=mt-2>`);
var _tmpl$93 = /* @__PURE__ */ template(`<li><div><div aria-hidden=true></div></div><div><div><span>`);
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
  if (props.status === "completed") return icons.check({
    class: "h-3 w-3",
    "aria-hidden": "true"
  });
  if (props.status === "error") return icons.close({
    class: "h-3 w-3",
    "aria-hidden": "true"
  });
  if (props.status === "active") {
    return _tmpl$10();
  }
  return null;
}
function Timeline(props) {
  const [local, others] = splitProps(props, ["items", "variant", "connector", "showConnector", "timeLeft", "class"]);
  const variant = () => local.variant ?? "default";
  const connector = () => local.connector ?? "solid";
  const showConnector = () => local.showConnector !== false;
  const timeLeft = () => local.timeLeft ?? false;
  const compact = createMemo(() => variant() === "compact");
  const outlined = createMemo(() => variant() === "outlined");
  const connectorBorderStyle = createMemo(() => {
    const style = connector();
    if (style === "dashed") return "border-dashed";
    if (style === "dotted") return "border-dotted";
    return "border-solid";
  });
  return (() => {
    var _el$2 = _tmpl$28(), _el$3 = _el$2.firstChild;
    spread(_el$2, mergeProps({
      get ["class"]() {
        return cn("relative", local.class);
      }
    }, others), false, true);
    insert(_el$3, createComponent(For, {
      get each() {
        return local.items;
      },
      children: (item, idx) => {
        const isLast = () => idx() === local.items.length - 1;
        const status = () => item.status ?? "pending";
        const dotClass = () => item.color ? `${item.color} text-white` : statusDotClass[status()];
        return (() => {
          var _el$4 = _tmpl$93(), _el$7 = _el$4.firstChild, _el$8 = _el$7.firstChild, _el$1 = _el$7.nextSibling, _el$10 = _el$1.firstChild, _el$11 = _el$10.firstChild;
          insert(_el$4, createComponent(Show, {
            get when() {
              return memo(() => !!timeLeft())() && item.time;
            },
            get children() {
              var _el$5 = _tmpl$36(), _el$6 = _el$5.firstChild;
              insert(_el$6, () => item.time);
              return _el$5;
            }
          }), _el$7);
          insert(_el$8, createComponent(Show, {
            get when() {
              return item.icon;
            },
            get fallback() {
              return createComponent(DefaultDotIcon, {
                get status() {
                  return status();
                }
              });
            },
            get children() {
              var _el$9 = _tmpl$45();
              insert(_el$9, () => item.icon);
              effect(() => className(_el$9, cn("flex items-center justify-center", compact() ? "[&>svg]:h-2.5 [&>svg]:w-2.5" : "[&>svg]:h-4 [&>svg]:w-4")));
              return _el$9;
            }
          }));
          insert(_el$7, createComponent(Show, {
            get when() {
              return memo(() => !!showConnector())() && !isLast();
            },
            get children() {
              var _el$0 = _tmpl$53();
              effect((_p$) => {
                var _v$ = cn("flex-1 border-l-2 my-1", connectorBorderStyle(), item.color ? "border-surface-border" : statusConnectorClass[status()]), _v$2 = compact() ? "1rem" : "1.5rem";
                _v$ !== _p$.e && className(_el$0, _p$.e = _v$);
                _v$2 !== _p$.t && setStyleProperty(_el$0, "min-height", _p$.t = _v$2);
                return _p$;
              }, {
                e: void 0,
                t: void 0
              });
              return _el$0;
            }
          }), null);
          insert(_el$11, () => item.title);
          insert(_el$10, createComponent(Show, {
            get when() {
              return memo(() => !!!timeLeft())() && item.time;
            },
            get children() {
              var _el$12 = _tmpl$63();
              insert(_el$12, () => item.time);
              return _el$12;
            }
          }), null);
          insert(_el$1, createComponent(Show, {
            get when() {
              return item.description;
            },
            get children() {
              var _el$13 = _tmpl$73();
              insert(_el$13, () => item.description);
              effect(() => className(_el$13, cn("mt-1 text-ink-500 leading-relaxed", compact() ? "text-xs" : "text-sm")));
              return _el$13;
            }
          }), null);
          insert(_el$1, createComponent(Show, {
            get when() {
              return item.content;
            },
            get children() {
              var _el$14 = _tmpl$83();
              insert(_el$14, () => item.content);
              return _el$14;
            }
          }), null);
          effect((_p$) => {
            var _v$3 = cn("relative flex", timeLeft() ? "flex-row-reverse" : "flex-row", compact() ? "gap-3" : "gap-4"), _v$4 = cn("flex flex-col items-center", timeLeft() ? "mx-0" : ""), _v$5 = cn("relative z-10 flex shrink-0 items-center justify-center rounded-full transition-all", compact() ? "h-5 w-5" : "h-8 w-8", dotClass(), outlined() && "ring-2 ring-offset-2 ring-offset-surface-base"), _v$6 = cn("min-w-0 flex-1", !isLast() ? compact() ? "pb-4" : "pb-6" : "pb-0", timeLeft() ? "text-right" : ""), _v$7 = cn("flex items-start gap-2", timeLeft() ? "flex-row-reverse" : "flex-row"), _v$8 = cn("font-medium text-ink-900 leading-none text-sm");
            _v$3 !== _p$.e && className(_el$4, _p$.e = _v$3);
            _v$4 !== _p$.t && className(_el$7, _p$.t = _v$4);
            _v$5 !== _p$.a && className(_el$8, _p$.a = _v$5);
            _v$6 !== _p$.o && className(_el$1, _p$.o = _v$6);
            _v$7 !== _p$.i && className(_el$10, _p$.i = _v$7);
            _v$8 !== _p$.n && className(_el$11, _p$.n = _v$8);
            return _p$;
          }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0
          });
          return _el$4;
        })();
      }
    }));
    return _el$2;
  })();
}
var _tmpl$11 = /* @__PURE__ */ template(`<ul class=list-none>`);
var _tmpl$29 = /* @__PURE__ */ template(`<span>`);
var _tmpl$37 = /* @__PURE__ */ template(`<div>`);
var _tmpl$46 = /* @__PURE__ */ template(`<li role=treeitem><button type=button data-tree-item><span></span><span class="min-w-0 truncate">`);
var _tmpl$54 = /* @__PURE__ */ template(`<span class="h-4 w-4">`);
var _tmpl$64 = /* @__PURE__ */ template(`<div data-tree-root>`);
function TreeView(props) {
  const [local, others] = splitProps(props, ["nodes", "selected", "onSelect", "defaultSelected", "expanded", "onExpandedChange", "defaultExpanded", "indent", "showLines", "class"]);
  const icons = useIcons();
  const [internalSelected, setInternalSelected] = createSignal(local.defaultSelected);
  const [internalExpanded, setInternalExpanded] = createSignal(local.defaultExpanded ?? []);
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
  const renderNodes = (nodes, level = 0) => (() => {
    var _el$ = _tmpl$11();
    setAttribute(_el$, "role", level === 0 ? "tree" : "group");
    insert(_el$, createComponent(For, {
      each: nodes,
      children: (node) => {
        const hasChildren = () => (node.children?.length ?? 0) > 0;
        const expanded = () => isExpanded(node.id);
        const selected = () => isSelected(node.id);
        return (() => {
          var _el$2 = _tmpl$46(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$6 = _el$4.nextSibling;
          _el$3.$$keydown = (e) => {
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
                const parent = btns.slice(0, idx).reverse().find((b) => Number(b.dataset.treeLevel ?? 0) < nodeLevel);
                parent?.focus();
              }
            } else if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (hasChildren()) toggleExpand(node.id);
              handleSelect(node.id);
            }
          };
          _el$3.$$click = () => {
            if (node.disabled) return;
            if (hasChildren()) toggleExpand(node.id);
            handleSelect(node.id);
          };
          setAttribute(_el$3, "data-tree-level", level);
          insert(_el$4, createComponent(Show, {
            get when() {
              return hasChildren();
            },
            get fallback() {
              return _tmpl$54();
            },
            get children() {
              return icons.chevronRight({
                class: cn("h-3.5 w-3.5 text-ink-400 transition-transform duration-150", expanded() && "rotate-90"),
                "aria-hidden": "true"
              });
            }
          }));
          insert(_el$3, createComponent(Show, {
            get when() {
              return node.icon;
            },
            get children() {
              var _el$5 = _tmpl$29();
              insert(_el$5, () => node.icon);
              effect(() => className(_el$5, cn("flex h-4 w-4 shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4", selected() ? "text-primary-500" : "text-ink-500")));
              return _el$5;
            }
          }), _el$6);
          insert(_el$6, () => node.label);
          insert(_el$2, createComponent(Show, {
            get when() {
              return memo(() => !!hasChildren())() && expanded();
            },
            get children() {
              var _el$7 = _tmpl$37();
              insert(_el$7, () => renderNodes(node.children ?? [], level + 1));
              effect((_p$) => {
                var _v$ = cn(showLines() && level < 2 ? "relative ml-[calc(var(--indent-offset)+8px)] border-l border-surface-border pl-0" : ""), _v$2 = {
                  "--indent-offset": `${level * indent() + 14}px`
                };
                _v$ !== _p$.e && className(_el$7, _p$.e = _v$);
                _p$.t = style(_el$7, _v$2, _p$.t);
                return _p$;
              }, {
                e: void 0,
                t: void 0
              });
              return _el$7;
            }
          }), null);
          effect((_p$) => {
            var _v$3 = hasChildren() ? expanded() ? "true" : "false" : void 0, _v$4 = selected() ? "true" : "false", _v$5 = node.disabled, _v$6 = cn("flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-sm transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", selected() ? "bg-primary-50 text-primary-700 font-medium" : "text-ink-700 hover:bg-surface-overlay hover:text-ink-900", node.disabled && "opacity-40"), _v$7 = `${level * indent() + 8}px`, _v$8 = cn("flex h-4 w-4 shrink-0 items-center justify-center");
            _v$3 !== _p$.e && setAttribute(_el$2, "aria-expanded", _p$.e = _v$3);
            _v$4 !== _p$.t && setAttribute(_el$2, "aria-selected", _p$.t = _v$4);
            _v$5 !== _p$.a && (_el$3.disabled = _p$.a = _v$5);
            _v$6 !== _p$.o && className(_el$3, _p$.o = _v$6);
            _v$7 !== _p$.i && setStyleProperty(_el$3, "padding-left", _p$.i = _v$7);
            _v$8 !== _p$.n && className(_el$4, _p$.n = _v$8);
            return _p$;
          }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0
          });
          return _el$2;
        })();
      }
    }));
    return _el$;
  })();
  return (() => {
    var _el$9 = _tmpl$64();
    spread(_el$9, mergeProps({
      get ["class"]() {
        return cn("select-none", local.class);
      }
    }, others), false, true);
    insert(_el$9, () => renderNodes(local.nodes));
    return _el$9;
  })();
}
delegateEvents(["click", "keydown"]);
var _tmpl$12 = /* @__PURE__ */ template(`<video playsinline>`);
var _tmpl$210 = /* @__PURE__ */ template(`<div>`);
var _tmpl$38 = /* @__PURE__ */ template(`<div class="absolute inset-0 flex items-center justify-center bg-surface-raised">`);
var _tmpl$47 = /* @__PURE__ */ template(`<div class="flex flex-col items-center gap-3 p-6 text-center"><div class="flex h-12 w-12 items-center justify-center rounded-full bg-surface-overlay"><svg class="h-6 w-6 text-ink-400"fill=none stroke=currentColor viewBox="0 0 24 24"aria-hidden=true><path stroke-linecap=round stroke-linejoin=round stroke-width=1.5 d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.164.841-.26 1.298-.26H19.5m-14.25 0A2.25 2.25 0 013 16.5V9.75m0 0A2.25 2.25 0 015.25 7.5H12M3 9.75l9-4.5"></path></svg></div><div><p class="text-sm font-medium text-ink-700">Video unavailable</p><p class="mt-0.5 text-xs text-ink-400">This video could not be loaded.`);
function Video(props) {
  const [local, others] = splitProps(props, ["src", "poster", "controls", "autoplay", "muted", "loop", "aspectRatio", "width", "height", "fallback", "preload", "fluid", "class", "videoClass"]);
  const [error, setError] = createSignal(false);
  const aspectRatio = () => local.aspectRatio ?? "16/9";
  const fluid = () => local.fluid !== false;
  return (() => {
    var _el$ = _tmpl$210();
    spread(_el$, mergeProps({
      get ["class"]() {
        return cn("relative overflow-hidden rounded-xl", local.class);
      },
      get style() {
        return {
          "aspect-ratio": aspectRatio(),
          "max-width": local.width ?? (fluid() ? "100%" : void 0),
          "max-height": local.height
        };
      }
    }, others), false, true);
    insert(_el$, createComponent(Show, {
      get when() {
        return !error();
      },
      get fallback() {
        return (() => {
          var _el$3 = _tmpl$38();
          insert(_el$3, createComponent(Show, {
            get when() {
              return local.fallback;
            },
            get fallback() {
              return _tmpl$47();
            },
            get children() {
              return local.fallback;
            }
          }));
          return _el$3;
        })();
      },
      get children() {
        var _el$2 = _tmpl$12();
        _el$2.addEventListener("error", () => setError(true));
        effect((_p$) => {
          var _v$ = cn("h-full w-full object-cover", local.videoClass), _v$2 = local.src, _v$3 = local.poster, _v$4 = local.controls !== false, _v$5 = local.autoplay, _v$6 = local.autoplay ? true : local.muted, _v$7 = local.loop, _v$8 = local.preload ?? "metadata";
          _v$ !== _p$.e && className(_el$2, _p$.e = _v$);
          _v$2 !== _p$.t && setAttribute(_el$2, "src", _p$.t = _v$2);
          _v$3 !== _p$.a && setAttribute(_el$2, "poster", _p$.a = _v$3);
          _v$4 !== _p$.o && (_el$2.controls = _p$.o = _v$4);
          _v$5 !== _p$.i && (_el$2.autoplay = _p$.i = _v$5);
          _v$6 !== _p$.n && (_el$2.muted = _p$.n = _v$6);
          _v$7 !== _p$.s && (_el$2.loop = _p$.s = _v$7);
          _v$8 !== _p$.h && setAttribute(_el$2, "preload", _p$.h = _v$8);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0,
          o: void 0,
          i: void 0,
          n: void 0,
          s: void 0,
          h: void 0
        });
        return _el$2;
      }
    }));
    return _el$;
  })();
}
var _tmpl$13 = /* @__PURE__ */ template(`<div>`);
var _tmpl$211 = /* @__PURE__ */ template(`<div class="flex items-center justify-center w-full h-full bg-surface-dim border border-surface-border"><div class="text-center p-4"><svg class="w-12 h-12 mx-auto mb-2 text-ink-400"fill=none stroke=currentColor viewBox="0 0 24 24"aria-hidden=true><path stroke-linecap=round stroke-linejoin=round stroke-width=1.5 d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><p class="text-sm text-ink-500">Failed to load image`);
function Image(props) {
  const [local, others] = splitProps(props, ["src", "alt", "fallbackSrc", "showSkeleton", "fallback", "fallbackDelay", "aspectRatio", "objectFit", "scale", "scalingConstraints", "objectPosition", "rounded", "lazy", "overlay", "overlayPosition", "overlayOnHover", "onLoad", "onError", "class"]);
  const [showFallback, setShowFallback] = createSignal(false);
  const [imageLoaded, setImageLoaded] = createSignal(false);
  const [activeSrc, setActiveSrc] = createSignal(local.src);
  const [hasTriedFallback, setHasTriedFallback] = createSignal(false);
  let fallbackTimeout;
  createEffect(on(() => local.src, (newSrc) => {
    setActiveSrc(newSrc);
    setImageLoaded(false);
    setShowFallback(false);
    setHasTriedFallback(false);
    if (fallbackTimeout) {
      clearTimeout(fallbackTimeout);
      fallbackTimeout = void 0;
    }
  }, {
    defer: true
  }));
  onCleanup(() => {
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
  const effectiveObjectFit = createMemo(() => {
    if (local.scale) return mapScaleToObjectFit(local.scale);
    return local.objectFit ?? "cover";
  });
  const constraintStyles = createMemo(() => {
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
  const containerClass = () => cn("relative overflow-hidden", local.overlayOnHover && "group", local.aspectRatio || (local.scale || local.objectFit ? "w-full h-full" : "w-full h-auto"), local.rounded || "rounded-lg", local.class);
  const imageClass = () => cn("w-full h-full transition-opacity duration-300", imageLoaded() ? "opacity-100" : "opacity-0", local.objectPosition);
  const imageStyle = () => {
    const fit = effectiveObjectFit();
    return fit ? {
      "object-fit": fit
    } : {};
  };
  const skeletonClass = () => cn("absolute inset-0 bg-ink-200 animate-pulse", local.rounded || "rounded-lg");
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
  const overlayClass = () => cn(overlayPositionClass(), local.overlayOnHover && "opacity-0 group-hover:opacity-100 transition-opacity duration-200", !local.overlayOnHover && "opacity-100");
  return (() => {
    var _el$ = _tmpl$13();
    insert(_el$, createComponent(Show, {
      get when() {
        return memo(() => !!(local.showSkeleton && !imageLoaded()))() && !showFallback();
      },
      get children() {
        var _el$2 = _tmpl$13();
        effect(() => className(_el$2, skeletonClass()));
        return _el$2;
      }
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return activeSrc();
      },
      keyed: true,
      children: (src) => createComponent(Image$1, {
        onLoadingStatusChange: (status) => {
          if (status === "loaded") handleLoad();
          else if (status === "error") handleError();
        },
        get children() {
          return [createComponent(Image$1.Img, mergeProps(others, {
            src,
            get alt() {
              return local.alt;
            },
            get loading() {
              return local.lazy ? "lazy" : "eager";
            },
            get ["class"]() {
              return imageClass();
            },
            get style() {
              return imageStyle();
            }
          })), createComponent(Image$1.Fallback, {
            get children() {
              return createComponent(Show, {
                get when() {
                  return showFallback();
                },
                get children() {
                  return local.fallback || _tmpl$211();
                }
              });
            }
          })];
        }
      })
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return memo(() => !!local.overlay)() && imageLoaded();
      },
      get children() {
        var _el$3 = _tmpl$13();
        insert(_el$3, () => local.overlay);
        effect(() => className(_el$3, overlayClass()));
        return _el$3;
      }
    }), null);
    effect((_p$) => {
      var _v$ = containerClass(), _v$2 = constraintStyles();
      _v$ !== _p$.e && className(_el$, _p$.e = _v$);
      _p$.t = style(_el$, _v$2, _p$.t);
      return _p$;
    }, {
      e: void 0,
      t: void 0
    });
    return _el$;
  })();
}
var _tmpl$14 = /* @__PURE__ */ template(`<div>`);
var _tmpl$212 = /* @__PURE__ */ template(`<span class="h-2 w-2 shrink-0 rounded-full">`);
var _tmpl$39 = /* @__PURE__ */ template(`<span class="flex h-5 min-w-5 items-center justify-center rounded-full bg-surface-overlay px-1.5 text-xs font-medium text-ink-500">`);
var _tmpl$48 = /* @__PURE__ */ template(`<div><div class="flex items-center justify-between border-b border-surface-border/60 px-4 py-3"><div class="flex items-center gap-2"><span class="text-sm font-semibold text-ink-900"></span></div></div><div class="flex flex-1 flex-col p-3">`);
var _tmpl$55 = /* @__PURE__ */ template(`<div class="mb-2 rounded-lg border-2 border-dashed border-primary-400 bg-primary-50/25 transition-all duration-150">`);
var _tmpl$65 = /* @__PURE__ */ template(`<div class="flex flex-col"><div>`);
var BoardContext = createContext();
function useBoardCtx() {
  const ctx = useContext(BoardContext);
  if (!ctx) throw new Error("Board.Column / Board.Card must be used inside <Board>");
  return ctx;
}
var ColumnContext = createContext();
function BoardRoot(props) {
  const [local, rest] = splitProps(props, ["onCardMove", "class", "children"]);
  const [draggingCardId, setDraggingCardId] = createSignal(null);
  const [draggingFromColumnId, setDraggingFromColumnId] = createSignal(null);
  const [draggingCardHeight, setDraggingCardHeight] = createSignal(60);
  const [draggingAdjacent, setDraggingAdjacent] = createSignal({
    prev: null,
    next: null
  });
  const [overColumnId, setOverColumnId] = createSignal(null);
  const [overCardId, setOverCardId] = createSignal(null);
  const [overCardPosition, setOverCardPosition] = createSignal(null);
  return createComponent(BoardContext.Provider, {
    get value() {
      return {
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
      };
    },
    get children() {
      var _el$ = _tmpl$14();
      spread(_el$, mergeProps({
        get ["class"]() {
          return cn("flex gap-4 pb-4 items-start", local.class);
        }
      }, rest), false, true);
      insert(_el$, () => local.children);
      return _el$;
    }
  });
}
function BoardColumn(props) {
  const [local, rest] = splitProps(props, ["id", "title", "count", "color", "class", "children"]);
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
      ctx.onCardMove?.({
        cardId,
        fromColumnId,
        toColumnId: local.id,
        nearCardId,
        nearPosition
      });
    }
    ctx.setOverColumnId(null);
    ctx.setOverCardId(null);
    ctx.setOverCardPosition(null);
  };
  return createComponent(ColumnContext.Provider, {
    get value() {
      return {
        columnId: local.id
      };
    },
    get children() {
      var _el$2 = _tmpl$48(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$6 = _el$4.firstChild, _el$8 = _el$3.nextSibling;
      _el$2.addEventListener("drop", handleDrop);
      _el$2.addEventListener("dragleave", handleDragLeave);
      _el$2.addEventListener("dragover", handleDragOver);
      spread(_el$2, mergeProps({
        get ["class"]() {
          return cn("flex min-h-32 min-w-40 flex-1 flex-col rounded-xl border border-surface-border bg-surface-raised transition-colors", isOver() && !isDraggingFrom() && "border-primary-400 bg-primary-50/20", local.class);
        }
      }, rest), false, true);
      insert(_el$4, createComponent(Show, {
        get when() {
          return local.color;
        },
        get children() {
          var _el$5 = _tmpl$212();
          effect((_$p) => setStyleProperty(_el$5, "background", local.color));
          return _el$5;
        }
      }), _el$6);
      insert(_el$6, () => local.title);
      insert(_el$3, createComponent(Show, {
        get when() {
          return local.count !== void 0;
        },
        get children() {
          var _el$7 = _tmpl$39();
          insert(_el$7, () => local.count);
          return _el$7;
        }
      }), null);
      insert(_el$8, () => local.children);
      return _el$2;
    }
  });
}
function DropZone(props) {
  return (() => {
    var _el$9 = _tmpl$55();
    effect((_$p) => setStyleProperty(_el$9, "height", `${props.height}px`));
    return _el$9;
  })();
}
function BoardCard(props) {
  const [local, rest] = splitProps(props, ["id", "disabled", "class", "children"]);
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
  return (() => {
    var _el$0 = _tmpl$65(), _el$1 = _el$0.firstChild;
    insert(_el$0, createComponent(Show, {
      get when() {
        return isOverBefore();
      },
      get children() {
        return createComponent(DropZone, {
          get height() {
            return ctx.draggingCardHeight();
          }
        });
      }
    }), _el$1);
    _el$1.addEventListener("dragover", handleDragOver);
    _el$1.addEventListener("dragend", handleDragEnd);
    _el$1.addEventListener("dragstart", handleDragStart);
    spread(_el$1, mergeProps({
      get draggable() {
        return !local.disabled;
      },
      get ["class"]() {
        return cn("mb-2 rounded-lg border border-surface-border bg-surface-base shadow-sm transition-all duration-150", !local.disabled && "cursor-grab select-none active:cursor-grabbing hover:shadow-md", isDragging() && "opacity-40 scale-[0.97]", local.class);
      }
    }, rest), false, true);
    insert(_el$1, () => local.children);
    insert(_el$0, createComponent(Show, {
      get when() {
        return isOverAfter();
      },
      get children() {
        return createComponent(DropZone, {
          get height() {
            return ctx.draggingCardHeight();
          }
        });
      }
    }), null);
    effect(() => setAttribute(_el$0, "data-board-card", local.id));
    return _el$0;
  })();
}
var Board = Object.assign(BoardRoot, {
  Column: BoardColumn,
  Card: BoardCard
});
var _tmpl$15 = /* @__PURE__ */ template(`<caption>`);
var _tmpl$213 = /* @__PURE__ */ template(`<table>`);
var _tmpl$310 = /* @__PURE__ */ template(`<thead>`);
var _tmpl$49 = /* @__PURE__ */ template(`<tbody>`);
var _tmpl$56 = /* @__PURE__ */ template(`<tfoot>`);
var _tmpl$66 = /* @__PURE__ */ template(`<tr>`);
var _tmpl$74 = /* @__PURE__ */ template(`<th>`);
var _tmpl$84 = /* @__PURE__ */ template(`<td>`);
var TableContext = createContext(false);
var TableSectionContext = createContext(void 0);
function Table(props) {
  const [local, others] = splitProps(props, ["class", "striped", "caption", "children"]);
  const striped = () => local.striped === true;
  return createComponent(TableContext.Provider, {
    get value() {
      return striped();
    },
    get children() {
      var _el$ = _tmpl$213();
      spread(_el$, mergeProps({
        get ["class"]() {
          return cn("w-full text-sm text-ink-900", local.class);
        }
      }, others), false, true);
      insert(_el$, createComponent(Show, {
        get when() {
          return local.caption != null;
        },
        get children() {
          var _el$2 = _tmpl$15();
          insert(_el$2, () => local.caption);
          effect(() => className(_el$2, typeof local.caption === "string" ? "sr-only" : void 0));
          return _el$2;
        }
      }), null);
      insert(_el$, () => local.children, null);
      return _el$;
    }
  });
}
function TableHeader(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (() => {
    var _el$3 = _tmpl$310();
    spread(_el$3, mergeProps({
      get ["class"]() {
        return cn("sticky top-0 z-10 border-b border-surface-border bg-surface-overlay", local.class);
      }
    }, others), false, true);
    insert(_el$3, createComponent(TableSectionContext.Provider, {
      value: "head",
      get children() {
        return local.children;
      }
    }));
    return _el$3;
  })();
}
function TableBody(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (() => {
    var _el$4 = _tmpl$49();
    spread(_el$4, mergeProps({
      get ["class"]() {
        return cn("divide-y divide-surface-border bg-surface-raised", local.class);
      }
    }, others), false, true);
    insert(_el$4, createComponent(TableSectionContext.Provider, {
      value: "body",
      get children() {
        return local.children;
      }
    }));
    return _el$4;
  })();
}
function TableFooter(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (() => {
    var _el$5 = _tmpl$56();
    spread(_el$5, mergeProps({
      get ["class"]() {
        return cn("border-t border-surface-border bg-surface-base", local.class);
      }
    }, others), false, true);
    insert(_el$5, createComponent(TableSectionContext.Provider, {
      value: "foot",
      get children() {
        return local.children;
      }
    }));
    return _el$5;
  })();
}
function TableRow(props) {
  const [local, others] = splitProps(props, ["class", "hover", "stripe"]);
  const striped = useContext(TableContext) ?? false;
  const section = useContext(TableSectionContext);
  const inBody = section === "body";
  const allowHover = () => local.hover !== false && inBody;
  const stripeClass = () => {
    if (!inBody) return "";
    if (local.stripe !== void 0) return local.stripe ? "bg-surface-stripe" : "";
    return striped ? "even:bg-surface-stripe" : "";
  };
  return (() => {
    var _el$6 = _tmpl$66();
    spread(_el$6, mergeProps({
      get ["class"]() {
        return cn("transition-colors", stripeClass(), allowHover() ? "hover:bg-ink-900/5" : "", local.class);
      }
    }, others), false, false);
    return _el$6;
  })();
}
function TableHead(props) {
  const [local, others] = splitProps(props, ["class", "scope"]);
  return (() => {
    var _el$7 = _tmpl$74();
    spread(_el$7, mergeProps({
      get scope() {
        return local.scope ?? "col";
      },
      get ["class"]() {
        return cn("px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-500", local.class);
      }
    }, others), false, false);
    return _el$7;
  })();
}
function TableCell(props) {
  const [local, others] = splitProps(props, ["class"]);
  return (() => {
    var _el$8 = _tmpl$84();
    spread(_el$8, mergeProps({
      get ["class"]() {
        return cn("px-4 py-3 align-middle text-sm text-ink-900", local.class);
      }
    }, others), false, false);
    return _el$8;
  })();
}

// src/components/data-display/DataTable.tsx
var _tmpl$16 = /* @__PURE__ */ template(`<div class="py-8 text-center text-sm text-ink-500">`);
var _tmpl$214 = /* @__PURE__ */ template(`<div class="flex items-center gap-2 shrink-0">`);
var _tmpl$311 = /* @__PURE__ */ template(`<div class="ml-auto flex items-center gap-2 shrink-0">`);
var _tmpl$410 = /* @__PURE__ */ template(`<div class="flex flex-wrap items-center gap-2">`);
var _tmpl$57 = /* @__PURE__ */ template(`<p class="text-sm text-danger-600">`);
var _tmpl$67 = /* @__PURE__ */ template(`<div role=status aria-live=polite class=sr-only>`);
var _tmpl$75 = /* @__PURE__ */ template(`<div class="flex justify-center border-t border-surface-border bg-surface-raised px-6 py-4">`);
var _tmpl$85 = /* @__PURE__ */ template(`<div><div>`);
var _tmpl$94 = /* @__PURE__ */ template(`<div class="min-w-[200px] flex-1">`);
var _tmpl$02 = /* @__PURE__ */ template(`<svg class="h-3.5 w-3.5 text-primary-500"viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d="m7 9 5-5 5 5">`);
var _tmpl$17 = /* @__PURE__ */ template(`<button type=button>`);
var _tmpl$102 = /* @__PURE__ */ template(`<svg class="h-3.5 w-3.5 text-ink-300"viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5">`);
var _tmpl$112 = /* @__PURE__ */ template(`<svg class="h-3.5 w-3.5 text-primary-500"viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d="m7 15 5 5 5-5">`);
var _tmpl$122 = /* @__PURE__ */ template(`<div class="h-4 w-full max-w-48 animate-pulse rounded bg-ink-200">`);
var _tmpl$132 = /* @__PURE__ */ template(`<div class=space-y-4>`);
var _tmpl$142 = /* @__PURE__ */ template(`<p class="mt-3 text-sm text-danger-600">`);
var _tmpl$152 = /* @__PURE__ */ template(`<h3 class="text-lg font-semibold text-ink-900">`);
var _tmpl$162 = /* @__PURE__ */ template(`<div class="flex justify-end gap-2">`);
var TABLE_CONTAINER_CLASS = "rounded-xl border border-surface-border bg-surface-raised";
function defaultGroupOrder(a, b) {
  if (a === b) return 0;
  if (a == null) return -1;
  if (b == null) return 1;
  return a.localeCompare(b, void 0, {
    sensitivity: "base"
  });
}
function DataTable(props) {
  const [local, others] = splitProps(props, ["description", "search", "toolbarContent", "toolbarActions", "primaryButton", "secondaryButton", "addRow", "editModal", "deleteDialog", "groupBy", "pagination", "hideHeader", "emptyState", "loadMore", "loading", "error", "items", "columns", "renderRowOverride", "emptyMessage", "skeletonRows", "sort", "class", "bare", "striped", "caption"]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const colSpan = () => local.columns.length;
  const skeletonRowCount = createMemo(() => Array.from({
    length: local.skeletonRows ?? 5
  }));
  const hasToolbar = () => local.description != null || local.search != null || local.toolbarContent != null || local.toolbarActions != null || local.primaryButton != null || local.secondaryButton != null || local.addRow != null;
  const groupedRows = createMemo(() => {
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
    return keys.map((key) => ({
      key,
      items: map.get(key)
    }));
  });
  function renderEmptyRow() {
    return createComponent(Show, {
      get when() {
        return !local.addRow?.showAddForm;
      },
      get children() {
        return createComponent(TableRow, {
          hover: false,
          get children() {
            return createComponent(TableCell, {
              get colSpan() {
                return colSpan();
              },
              "class": "p-0 align-top",
              get children() {
                return memo(() => !!local.emptyState)() ? createComponent(EmptyState, {
                  get title() {
                    return local.emptyState.title;
                  },
                  get description() {
                    return local.emptyState.description;
                  },
                  get icon() {
                    return local.emptyState.icon;
                  },
                  get actions() {
                    return local.emptyState.actions;
                  }
                }) : (() => {
                  var _el$ = _tmpl$16();
                  insert(_el$, () => local.emptyMessage ?? (zh() ? "\u6682\u65E0\u6570\u636E" : "No data"));
                  return _el$;
                })();
              }
            });
          }
        });
      }
    });
  }
  function renderItem(item, stripe) {
    const overridden = local.renderRowOverride?.(item);
    return overridden ?? createComponent(TableRow, {
      stripe,
      get children() {
        return createComponent(For, {
          get each() {
            return local.columns;
          },
          children: (col) => createComponent(TableCell, {
            get ["class"]() {
              return col.cellClass;
            },
            get children() {
              return col.cell(item);
            }
          })
        });
      }
    });
  }
  function FlatRows() {
    return createComponent(Show, {
      get when() {
        return local.items.length > 0;
      },
      get fallback() {
        return renderEmptyRow();
      },
      get children() {
        return createComponent(For, {
          get each() {
            return local.items;
          },
          children: (item) => renderItem(item)
        });
      }
    });
  }
  return (() => {
    var _el$2 = _tmpl$85(), _el$8 = _el$2.firstChild;
    spread(_el$2, mergeProps(others, {
      get ["class"]() {
        return cn("space-y-4", local.class);
      }
    }), false, true);
    insert(_el$2, () => local.description, _el$8);
    insert(_el$2, createComponent(Show, {
      get when() {
        return hasToolbar();
      },
      get children() {
        var _el$3 = _tmpl$410();
        insert(_el$3, createComponent(Show, {
          get when() {
            return local.search;
          },
          children: (search) => (() => {
            var _el$0 = _tmpl$94();
            insert(_el$0, createComponent(Input, mergeProps({
              bare: true
            }, search)));
            return _el$0;
          })()
        }), null);
        insert(_el$3, createComponent(Show, {
          get when() {
            return local.toolbarContent;
          },
          get children() {
            return local.toolbarContent;
          }
        }), null);
        insert(_el$3, createComponent(Show, {
          get when() {
            return local.toolbarActions;
          },
          get children() {
            var _el$4 = _tmpl$214();
            insert(_el$4, () => local.toolbarActions);
            return _el$4;
          }
        }), null);
        insert(_el$3, createComponent(Show, {
          get when() {
            return local.addRow || local.primaryButton || local.secondaryButton;
          },
          get children() {
            var _el$5 = _tmpl$311();
            insert(_el$5, createComponent(Show, {
              get when() {
                return local.addRow;
              },
              children: (addRow) => createComponent(Button, {
                type: "button",
                variant: "primary",
                size: "sm",
                "class": "shrink-0 rounded-lg",
                get label() {
                  return addRow().addButtonLabel;
                },
                get startIcon() {
                  return icons.plus({
                    width: 16,
                    height: 16,
                    "aria-hidden": "true"
                  });
                },
                onClick: () => addRow().onToggleAddForm()
              })
            }), null);
            insert(_el$5, createComponent(Show, {
              get when() {
                return memo(() => !!!local.addRow)() && local.primaryButton;
              },
              children: (btn) => createComponent(Button, {
                type: "button",
                variant: "primary",
                size: "sm",
                "class": "shrink-0 rounded-lg",
                get label() {
                  return btn().label;
                },
                get startIcon() {
                  return btn().startIcon;
                },
                onClick: () => btn().onClick()
              })
            }), null);
            insert(_el$5, createComponent(Show, {
              get when() {
                return local.secondaryButton;
              },
              children: (btn) => createComponent(Button, {
                type: "button",
                variant: "outlined",
                size: "sm",
                "class": "shrink-0 rounded-lg",
                get label() {
                  return btn().label;
                },
                get startIcon() {
                  return btn().startIcon;
                },
                onClick: () => btn().onClick()
              })
            }), null);
            return _el$5;
          }
        }), null);
        return _el$3;
      }
    }), _el$8);
    insert(_el$2, createComponent(Show, {
      get when() {
        return local.error;
      },
      get children() {
        var _el$6 = _tmpl$57();
        insert(_el$6, (() => {
          var _c$ = memo(() => local.error instanceof Error);
          return () => _c$() ? local.error.message : zh() ? "\u52A0\u8F7D\u5931\u8D25" : "Failed to load";
        })());
        return _el$6;
      }
    }), _el$8);
    insert(_el$2, createComponent(Show, {
      get when() {
        return local.loading;
      },
      get children() {
        var _el$7 = _tmpl$67();
        insert(_el$7, () => zh() ? "\u52A0\u8F7D\u4E2D" : "Loading");
        return _el$7;
      }
    }), _el$8);
    insert(_el$8, createComponent(Table, {
      "class": "min-w-full",
      get striped() {
        return local.striped;
      },
      get caption() {
        return local.caption;
      },
      get children() {
        return [createComponent(Show, {
          get when() {
            return !local.hideHeader;
          },
          get children() {
            return createComponent(TableHeader, {
              get children() {
                return createComponent(TableRow, {
                  get children() {
                    return createComponent(For, {
                      get each() {
                        return local.columns;
                      },
                      children: (col) => createComponent(TableHead, {
                        get ["class"]() {
                          return col.headClass;
                        },
                        get children() {
                          return createComponent(Show, {
                            get when() {
                              return memo(() => !!col.sortable)() && local.sort;
                            },
                            get fallback() {
                              return col.header;
                            },
                            children: (sort) => {
                              const isActive = () => sort().column === col.id;
                              const handleSort = () => {
                                if (!isActive()) sort().onSortChange(col.id, "asc");
                                else if (sort().direction === "asc") sort().onSortChange(col.id, "desc");
                                else sort().onSortChange(null, "asc");
                              };
                              return (() => {
                                var _el$1 = _tmpl$17();
                                _el$1.$$click = handleSort;
                                insert(_el$1, () => col.header, null);
                                insert(_el$1, createComponent(Show, {
                                  get when() {
                                    return isActive();
                                  },
                                  get fallback() {
                                    return _tmpl$102();
                                  },
                                  get children() {
                                    return createComponent(Show, {
                                      get when() {
                                        return sort().direction === "asc";
                                      },
                                      get fallback() {
                                        return _tmpl$112();
                                      },
                                      get children() {
                                        return _tmpl$02();
                                      }
                                    });
                                  }
                                }), null);
                                effect(() => className(_el$1, cn("inline-flex items-center gap-1.5 rounded transition-colors hover:text-ink-900", isActive() ? "text-ink-900" : "text-ink-500")));
                                return _el$1;
                              })();
                            }
                          });
                        }
                      })
                    });
                  }
                });
              }
            });
          }
        }), createComponent(TableBody, {
          get ["aria-busy"]() {
            return local.loading ? "true" : void 0;
          },
          get children() {
            return createComponent(Show, {
              get when() {
                return !local.loading;
              },
              get fallback() {
                return createComponent(For, {
                  get each() {
                    return skeletonRowCount();
                  },
                  children: () => createComponent(TableRow, {
                    hover: false,
                    get children() {
                      return createComponent(For, {
                        get each() {
                          return local.columns;
                        },
                        children: (col) => createComponent(TableCell, {
                          get ["class"]() {
                            return cn("py-3", col.cellClass);
                          },
                          get children() {
                            return col.skeleton ?? _tmpl$122();
                          }
                        })
                      });
                    }
                  })
                });
              },
              get children() {
                return [createComponent(Show, {
                  get when() {
                    return local.addRow?.showAddForm;
                  },
                  get children() {
                    return createComponent(TableRow, {
                      "class": "bg-primary-50/50",
                      hover: false,
                      get children() {
                        return local.addRow.renderAddCells();
                      }
                    });
                  }
                }), createComponent(Show, {
                  get when() {
                    return groupedRows();
                  },
                  get fallback() {
                    return createComponent(FlatRows, {});
                  },
                  children: (groups) => createComponent(Show, {
                    get when() {
                      return groups().length > 0;
                    },
                    get fallback() {
                      return renderEmptyRow();
                    },
                    get children() {
                      return createComponent(For, {
                        get each() {
                          return groups();
                        },
                        children: ({
                          key,
                          items: groupItems
                        }) => [createComponent(TableRow, {
                          "class": "bg-surface-dim font-medium text-ink-700",
                          hover: false,
                          stripe: false,
                          get children() {
                            return createComponent(TableCell, {
                              get colSpan() {
                                return colSpan();
                              },
                              "class": "py-2 pl-4 text-sm font-medium",
                              role: "rowheader",
                              get children() {
                                return local.groupBy.renderGroupHeader(key);
                              }
                            });
                          }
                        }), ...groupItems.map((item, i) => renderItem(item, local.striped ? i % 2 === 1 : void 0))]
                      });
                    }
                  })
                }), createComponent(Show, {
                  get when() {
                    return memo(() => !!local.addRow?.addError)() && local.addRow?.showAddForm;
                  },
                  get children() {
                    return createComponent(TableRow, {
                      hover: false,
                      get children() {
                        return createComponent(TableCell, {
                          get colSpan() {
                            return colSpan();
                          },
                          "class": "bg-danger-50/80 text-sm text-danger-600",
                          get children() {
                            return local.addRow.addError;
                          }
                        });
                      }
                    });
                  }
                })];
              }
            });
          }
        })];
      }
    }), null);
    insert(_el$8, createComponent(Show, {
      get when() {
        return local.loadMore?.hasMore;
      },
      get children() {
        var _el$9 = _tmpl$75();
        insert(_el$9, createComponent(Button, {
          type: "button",
          variant: "outlined",
          size: "sm",
          "class": "rounded-lg",
          get label() {
            return zh() ? "\u52A0\u8F7D\u66F4\u591A" : "Load more";
          },
          get loading() {
            return local.loadMore.loading;
          },
          onClick: () => local.loadMore.onLoadMore()
        }));
        return _el$9;
      }
    }), null);
    insert(_el$8, createComponent(Show, {
      get when() {
        return local.pagination;
      },
      children: (pagination) => createComponent(Pagination, mergeProps(pagination, {
        "class": "border-t border-surface-border bg-surface-raised px-6 py-3"
      }))
    }), null);
    insert(_el$2, createComponent(Show, {
      get when() {
        return local.editModal;
      },
      children: (modal) => createComponent(Dialog, {
        get open() {
          return modal().open;
        },
        get onClose() {
          return modal().onClose;
        },
        size: "md",
        get header() {
          return (() => {
            var _el$16 = _tmpl$152();
            insert(_el$16, () => modal().title);
            return _el$16;
          })();
        },
        get footer() {
          return (() => {
            var _el$17 = _tmpl$162();
            insert(_el$17, createComponent(Button, {
              type: "button",
              variant: "link",
              size: "sm",
              get onClick() {
                return modal().onClose;
              },
              "class": "rounded-lg",
              get children() {
                return zh() ? "\u53D6\u6D88" : "Cancel";
              }
            }), null);
            insert(_el$17, createComponent(Button, {
              type: "button",
              variant: "primary",
              size: "sm",
              get onClick() {
                return modal().onSave;
              },
              get loading() {
                return modal().saving;
              },
              "class": "rounded-lg",
              get children() {
                return zh() ? "\u4FDD\u5B58" : "Save";
              }
            }), null);
            return _el$17;
          })();
        },
        get children() {
          return [(() => {
            var _el$14 = _tmpl$132();
            insert(_el$14, () => modal().children);
            return _el$14;
          })(), createComponent(Show, {
            get when() {
              return modal().editError;
            },
            get children() {
              var _el$15 = _tmpl$142();
              insert(_el$15, () => modal().editError);
              return _el$15;
            }
          })];
        }
      })
    }), null);
    insert(_el$2, createComponent(Show, {
      get when() {
        return local.deleteDialog;
      },
      children: (dialog) => createComponent(AlertDialog, {
        get open() {
          return dialog().open;
        },
        onOpenChange: (open) => !open && dialog().onClose(),
        get title() {
          return dialog().title;
        },
        get description() {
          return dialog().description;
        },
        get confirmLabel() {
          return zh() ? "\u5220\u9664" : "Delete";
        },
        destructive: true,
        get onConfirm() {
          return dialog().onConfirm;
        }
      })
    }), null);
    effect(() => className(_el$8, cn("overflow-x-auto", !local.bare && TABLE_CONTAINER_CLASS)));
    return _el$2;
  })();
}
delegateEvents(["click"]);

export { AvatarGroup, Badge, Board, Carousel, ColorSwatch, DataTable, EmptyState, Image, KEY, Kbd, KbdShortcut, Persona, StatCard, TABLE_CONTAINER_CLASS, Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tag, Timeline, TreeView, Video };
