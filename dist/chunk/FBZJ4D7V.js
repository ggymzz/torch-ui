import { Copy } from './LFPOAP3K.js';
import { cn } from './CZPH5U6S.js';
import { spread, mergeProps, insert, createComponent, memo, template } from 'solid-js/web';
import { splitProps, Show } from 'solid-js';

var _tmpl$ = /* @__PURE__ */ template(`<div class="absolute right-2 top-1/2 -translate-y-1/2 shrink-0">`);
var _tmpl$2 = /* @__PURE__ */ template(`<div><code class="flex-1 min-w-0 truncate block">`);
var _tmpl$3 = /* @__PURE__ */ template(`<code>`);
function Code(props) {
  const inlineClass = "inline-flex items-baseline rounded bg-surface-overlay px-2 leading-none text-[0.9em] font-mono text-ink-800 mx-0.5";
  const blockClass = "flex items-center gap-2 rounded-lg border border-surface-border bg-surface-base px-3 py-2 text-sm font-mono text-ink-800";
  if (props.block) {
    const [local2, divProps] = splitProps(props, ["children", "block", "copyable", "text", "class"]);
    const copyText = () => (local2.text ?? "").trim();
    const displayText = () => local2.children ?? copyText();
    return (() => {
      var _el$ = _tmpl$2(), _el$2 = _el$.firstChild;
      spread(_el$, mergeProps({
        get ["class"]() {
          return cn("w-full relative", blockClass, local2.copyable && "pr-12", local2.class);
        }
      }, divProps), false, true);
      insert(_el$2, displayText);
      insert(_el$, createComponent(Show, {
        get when() {
          return memo(() => !!local2.copyable)() && copyText();
        },
        get children() {
          var _el$3 = _tmpl$();
          insert(_el$3, createComponent(Copy, {
            get text() {
              return copyText();
            },
            display: "icon-only",
            variant: "ghost",
            size: "xs"
          }));
          return _el$3;
        }
      }), null);
      return _el$;
    })();
  }
  const [local, codeProps] = splitProps(props, ["children", "block", "copyable", "text", "class"]);
  return (() => {
    var _el$4 = _tmpl$3();
    spread(_el$4, mergeProps({
      get ["class"]() {
        return cn(inlineClass, local.class);
      }
    }, codeProps), false, true);
    insert(_el$4, () => local.children);
    return _el$4;
  })();
}
var _tmpl$4 = /* @__PURE__ */ template(`<img alt aria-hidden=true>`);
function Icon(props) {
  const [local, others] = splitProps(props, ["src", "size", "class"]);
  const size = () => local.size ?? 16;
  return (() => {
    var _el$ = _tmpl$4();
    spread(_el$, mergeProps({
      get src() {
        return local.src;
      },
      get width() {
        return size();
      },
      get height() {
        return size();
      },
      get ["class"]() {
        return cn("inline-block shrink-0", local.class);
      }
    }, others), false, false);
    return _el$;
  })();
}

export { Code, Icon };
