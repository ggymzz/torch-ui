import { cn } from './CZPH5U6S.js';
import { delegateEvents, createComponent, spread, mergeProps, insert, use, effect, className, setAttribute, Dynamic, memo, style, addEventListener, template, setStyleProperty } from 'solid-js/web';
import { createContext, splitProps, createSignal, children, For, useContext, onMount, createMemo, Show, createEffect, on, createComponent as createComponent$1, onCleanup, createUniqueId } from 'solid-js';
import { AlertDialog as AlertDialog$1 } from '@kobalte/core/alert-dialog';
import { Button as Button$1 } from '@kobalte/core/button';
import { ToggleButton } from '@kobalte/core/toggle-button';
import { DropdownMenu } from '@kobalte/core/dropdown-menu';
import { ToggleGroup } from '@kobalte/core/toggle-group';
import { TextField } from '@kobalte/core/text-field';
import { Select as Select$1 } from '@kobalte/core/select';
import { Combobox } from '@kobalte/core/combobox';
import { Checkbox as Checkbox$1 } from '@kobalte/core/checkbox';
import { Switch as Switch$1 } from '@kobalte/core/switch';
import { RadioGroup as RadioGroup$1 } from '@kobalte/core/radio-group';
import { NumberField as NumberField$1 } from '@kobalte/core/number-field';
import { Slider as Slider$1 } from '@kobalte/core/slider';
import { Progress as Progress$1 } from '@kobalte/core/progress';
import { Dialog as Dialog$1 } from '@kobalte/core/dialog';
import { Popover as Popover$1 } from '@kobalte/core/popover';
import { ColorArea } from '@kobalte/core/color-area';
import { ColorSlider } from '@kobalte/core/color-slider';
import { ColorChannelField } from '@kobalte/core/color-channel-field';
import { parseColor } from '@kobalte/core/colors';
import { Separator } from '@kobalte/core/separator';
import { Collapsible as Collapsible$1 } from '@kobalte/core/collapsible';
import { Accordion } from '@kobalte/core/accordion';
import { Tooltip as Tooltip$1 } from '@kobalte/core/tooltip';

var LocaleContext = createContext(void 0);
function LocaleProvider(props) {
  return createComponent$1(LocaleContext.Provider, {
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
var _tmpl$ = /* @__PURE__ */ template(`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
var _tmpl$2 = /* @__PURE__ */ template(`<svg><path d="m6 9 6 6 6-6"></svg>`, false, true, false);
var _tmpl$3 = /* @__PURE__ */ template(`<svg><path d="m18 15-6-6-6 6"></svg>`, false, true, false);
var _tmpl$4 = /* @__PURE__ */ template(`<svg><path d="m15 18-6-6 6-6"></svg>`, false, true, false);
var _tmpl$5 = /* @__PURE__ */ template(`<svg><path d="m9 18 6-6-6-6"></svg>`, false, true, false);
var _tmpl$6 = /* @__PURE__ */ template(`<svg><path d="m11 17-5-5 5-5"></svg>`, false, true, false);
var _tmpl$7 = /* @__PURE__ */ template(`<svg><path d="m18 17-5-5 5-5"></svg>`, false, true, false);
var _tmpl$8 = /* @__PURE__ */ template(`<svg><path d="m6 17 5-5-5-5"></svg>`, false, true, false);
var _tmpl$9 = /* @__PURE__ */ template(`<svg><path d="m13 17 5-5-5-5"></svg>`, false, true, false);
var _tmpl$0 = /* @__PURE__ */ template(`<svg><path d="M18 6 6 18"></svg>`, false, true, false);
var _tmpl$1 = /* @__PURE__ */ template(`<svg><path d="m6 6 12 12"></svg>`, false, true, false);
var _tmpl$10 = /* @__PURE__ */ template(`<svg><rect width=14 height=14 x=8 y=8 rx=2 ry=2></svg>`, false, true, false);
var _tmpl$11 = /* @__PURE__ */ template(`<svg><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></svg>`, false, true, false);
var _tmpl$12 = /* @__PURE__ */ template(`<svg><path d="M20 6 9 17l-5-5"></svg>`, false, true, false);
var _tmpl$13 = /* @__PURE__ */ template(`<svg><path d="m21 21-4.34-4.34"></svg>`, false, true, false);
var _tmpl$14 = /* @__PURE__ */ template(`<svg><circle cx=11 cy=11 r=8></svg>`, false, true, false);
var _tmpl$15 = /* @__PURE__ */ template(`<svg><path d="M21 12a9 9 0 1 1-6.219-8.56"></svg>`, false, true, false);
var _tmpl$16 = /* @__PURE__ */ template(`<svg><circle cx=12 cy=12 r=4></svg>`, false, true, false);
var _tmpl$17 = /* @__PURE__ */ template(`<svg><path d="M12 2v2"></svg>`, false, true, false);
var _tmpl$18 = /* @__PURE__ */ template(`<svg><path d="M12 20v2"></svg>`, false, true, false);
var _tmpl$19 = /* @__PURE__ */ template(`<svg><path d="m4.93 4.93 1.41 1.41"></svg>`, false, true, false);
var _tmpl$20 = /* @__PURE__ */ template(`<svg><path d="m17.66 17.66 1.41 1.41"></svg>`, false, true, false);
var _tmpl$21 = /* @__PURE__ */ template(`<svg><path d="M2 12h2"></svg>`, false, true, false);
var _tmpl$22 = /* @__PURE__ */ template(`<svg><path d="M20 12h2"></svg>`, false, true, false);
var _tmpl$23 = /* @__PURE__ */ template(`<svg><path d="m6.34 17.66-1.41 1.41"></svg>`, false, true, false);
var _tmpl$24 = /* @__PURE__ */ template(`<svg><path d="m19.07 4.93-1.41 1.41"></svg>`, false, true, false);
var _tmpl$25 = /* @__PURE__ */ template(`<svg><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"></svg>`, false, true, false);
var _tmpl$26 = /* @__PURE__ */ template(`<svg><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></svg>`, false, true, false);
var _tmpl$27 = /* @__PURE__ */ template(`<svg><circle cx=12 cy=12 r=3></svg>`, false, true, false);
var _tmpl$28 = /* @__PURE__ */ template(`<svg><path d="m15 18-.722-3.25"></svg>`, false, true, false);
var _tmpl$29 = /* @__PURE__ */ template(`<svg><path d="M2 8a10.645 10.645 0 0 0 20 0"></svg>`, false, true, false);
var _tmpl$30 = /* @__PURE__ */ template(`<svg><path d="m20 15-1.726-2.05"></svg>`, false, true, false);
var _tmpl$31 = /* @__PURE__ */ template(`<svg><path d="m4 15 1.726-2.05"></svg>`, false, true, false);
var _tmpl$32 = /* @__PURE__ */ template(`<svg><path d="m9 18 .722-3.25"></svg>`, false, true, false);
var _tmpl$33 = /* @__PURE__ */ template(`<svg><path d="M5 12h14"></svg>`, false, true, false);
var _tmpl$34 = /* @__PURE__ */ template(`<svg><path d="M12 5v14"></svg>`, false, true, false);
var _tmpl$35 = /* @__PURE__ */ template(`<svg><circle cx=9 cy=12 r=1></svg>`, false, true, false);
var _tmpl$36 = /* @__PURE__ */ template(`<svg><circle cx=9 cy=5 r=1></svg>`, false, true, false);
var _tmpl$37 = /* @__PURE__ */ template(`<svg><circle cx=9 cy=19 r=1></svg>`, false, true, false);
var _tmpl$38 = /* @__PURE__ */ template(`<svg><circle cx=15 cy=12 r=1></svg>`, false, true, false);
var _tmpl$39 = /* @__PURE__ */ template(`<svg><circle cx=15 cy=5 r=1></svg>`, false, true, false);
var _tmpl$40 = /* @__PURE__ */ template(`<svg><circle cx=15 cy=19 r=1></svg>`, false, true, false);
var _tmpl$41 = /* @__PURE__ */ template(`<svg><circle cx=12 cy=12 r=10></svg>`, false, true, false);
var _tmpl$42 = /* @__PURE__ */ template(`<svg><polyline points="12 6 12 12 16 14"></svg>`, false, true, false);
var _tmpl$43 = /* @__PURE__ */ template(`<svg><path d="M8 2v4"></svg>`, false, true, false);
var _tmpl$44 = /* @__PURE__ */ template(`<svg><path d="M16 2v4"></svg>`, false, true, false);
var _tmpl$45 = /* @__PURE__ */ template(`<svg><rect width=18 height=18 x=3 y=4 rx=2></svg>`, false, true, false);
var _tmpl$46 = /* @__PURE__ */ template(`<svg><path d="M3 10h18"></svg>`, false, true, false);
var _tmpl$47 = /* @__PURE__ */ template(`<svg><path d="m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"></svg>`, false, true, false);
var _tmpl$48 = /* @__PURE__ */ template(`<svg><path d="m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z"></svg>`, false, true, false);
var _tmpl$49 = /* @__PURE__ */ template(`<svg><path d="m2 22 .414-.414"></svg>`, false, true, false);
var _tmpl$50 = /* @__PURE__ */ template(`<svg><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></svg>`, false, true, false);
var _tmpl$51 = /* @__PURE__ */ template(`<svg><path d="M21 3v5h-5"></svg>`, false, true, false);
var _tmpl$52 = /* @__PURE__ */ template(`<svg><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></svg>`, false, true, false);
var _tmpl$53 = /* @__PURE__ */ template(`<svg><path d="M8 16H3v5"></svg>`, false, true, false);
var _tmpl$54 = /* @__PURE__ */ template(`<svg><path d="M10 11v6"></svg>`, false, true, false);
var _tmpl$55 = /* @__PURE__ */ template(`<svg><path d="M14 11v6"></svg>`, false, true, false);
var _tmpl$56 = /* @__PURE__ */ template(`<svg><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></svg>`, false, true, false);
var _tmpl$57 = /* @__PURE__ */ template(`<svg><path d="M3 6h18"></svg>`, false, true, false);
var _tmpl$58 = /* @__PURE__ */ template(`<svg><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></svg>`, false, true, false);
var _tmpl$59 = /* @__PURE__ */ template(`<svg><path d="M12 17v5"></svg>`, false, true, false);
var _tmpl$60 = /* @__PURE__ */ template(`<svg><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></svg>`, false, true, false);
var _tmpl$61 = /* @__PURE__ */ template(`<svg><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></svg>`, false, true, false);
var _tmpl$62 = /* @__PURE__ */ template(`<svg><path d="M14 2v5a1 1 0 0 0 1 1h5"></svg>`, false, true, false);
var _tmpl$63 = /* @__PURE__ */ template(`<svg><path d="M10 9H8"></svg>`, false, true, false);
var _tmpl$64 = /* @__PURE__ */ template(`<svg><path d="M16 13H8"></svg>`, false, true, false);
var _tmpl$65 = /* @__PURE__ */ template(`<svg><path d="M16 17H8"></svg>`, false, true, false);
var _tmpl$66 = /* @__PURE__ */ template(`<svg><path d="M10 12.5 8 15l2 2.5"></svg>`, false, true, false);
var _tmpl$67 = /* @__PURE__ */ template(`<svg><path d="m14 12.5 2 2.5-2 2.5"></svg>`, false, true, false);
var _tmpl$68 = /* @__PURE__ */ template(`<svg><circle cx=10 cy=12 r=2></svg>`, false, true, false);
var _tmpl$69 = /* @__PURE__ */ template(`<svg><path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></svg>`, false, true, false);
var _tmpl$70 = /* @__PURE__ */ template(`<svg><path d="M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z"></svg>`, false, true, false);
var _tmpl$71 = /* @__PURE__ */ template(`<svg><path d="M8 13h2"></svg>`, false, true, false);
var _tmpl$72 = /* @__PURE__ */ template(`<svg><path d="M14 13h2"></svg>`, false, true, false);
var _tmpl$73 = /* @__PURE__ */ template(`<svg><path d="M8 17h2"></svg>`, false, true, false);
var _tmpl$74 = /* @__PURE__ */ template(`<svg><path d="M14 17h2"></svg>`, false, true, false);
var _tmpl$75 = /* @__PURE__ */ template(`<svg><path d="M12 12v6"></svg>`, false, true, false);
var _tmpl$76 = /* @__PURE__ */ template(`<svg><path d="m15 15-3-3-3 3"></svg>`, false, true, false);
var _tmpl$77 = /* @__PURE__ */ template(`<svg><circle cx=15 cy=19 r=2></svg>`, false, true, false);
var _tmpl$78 = /* @__PURE__ */ template(`<svg><path d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"></svg>`, false, true, false);
var _tmpl$79 = /* @__PURE__ */ template(`<svg><path d="M15 11v-1"></svg>`, false, true, false);
var _tmpl$80 = /* @__PURE__ */ template(`<svg><path d="M15 17v-2"></svg>`, false, true, false);
var _tmpl$81 = /* @__PURE__ */ template(`<svg><path d="m9 12 2 2 4-4"></svg>`, false, true, false);
var _tmpl$82 = /* @__PURE__ */ template(`<svg><path d="M12 8v4"></svg>`, false, true, false);
var _tmpl$83 = /* @__PURE__ */ template(`<svg><path d="M12 16h.01"></svg>`, false, true, false);
var _tmpl$84 = /* @__PURE__ */ template(`<svg><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></svg>`, false, true, false);
var _tmpl$85 = /* @__PURE__ */ template(`<svg><path d="M12 9v4"></svg>`, false, true, false);
var _tmpl$86 = /* @__PURE__ */ template(`<svg><path d="M12 17h.01"></svg>`, false, true, false);
var _tmpl$87 = /* @__PURE__ */ template(`<svg><path d="M12 16v-4"></svg>`, false, true, false);
var _tmpl$88 = /* @__PURE__ */ template(`<svg><path d="M12 8h.01"></svg>`, false, true, false);
function icon(getChildren) {
  return (props) => (() => {
    var _el$ = _tmpl$();
    spread(_el$, props, true, true);
    insert(_el$, getChildren);
    return _el$;
  })();
}
var defaultIcons = {
  chevronDown: icon(() => _tmpl$2()),
  chevronUp: icon(() => _tmpl$3()),
  chevronLeft: icon(() => _tmpl$4()),
  chevronRight: icon(() => _tmpl$5()),
  chevronsLeft: icon(() => [_tmpl$6(), _tmpl$7()]),
  chevronsRight: icon(() => [_tmpl$8(), _tmpl$9()]),
  close: icon(() => [_tmpl$0(), _tmpl$1()]),
  copy: icon(() => [_tmpl$10(), _tmpl$11()]),
  check: icon(() => _tmpl$12()),
  search: icon(() => [_tmpl$13(), _tmpl$14()]),
  spinner: icon(() => _tmpl$15()),
  sun: icon(() => [_tmpl$16(), _tmpl$17(), _tmpl$18(), _tmpl$19(), _tmpl$20(), _tmpl$21(), _tmpl$22(), _tmpl$23(), _tmpl$24()]),
  moon: icon(() => _tmpl$25()),
  eye: icon(() => [_tmpl$26(), _tmpl$27()]),
  eyeOff: icon(() => [_tmpl$28(), _tmpl$29(), _tmpl$30(), _tmpl$31(), _tmpl$32()]),
  plus: icon(() => [_tmpl$33(), _tmpl$34()]),
  minus: icon(() => _tmpl$33()),
  dragHandle: icon(() => [_tmpl$35(), _tmpl$36(), _tmpl$37(), _tmpl$38(), _tmpl$39(), _tmpl$40()]),
  clock: icon(() => [_tmpl$41(), _tmpl$42()]),
  calendar: icon(() => [_tmpl$43(), _tmpl$44(), _tmpl$45(), _tmpl$46()]),
  pipette: icon(() => [_tmpl$47(), _tmpl$48(), _tmpl$49()]),
  refresh: icon(() => [_tmpl$50(), _tmpl$51(), _tmpl$52(), _tmpl$53()]),
  trash: icon(() => [_tmpl$54(), _tmpl$55(), _tmpl$56(), _tmpl$57(), _tmpl$58()]),
  pin: icon(() => [_tmpl$59(), _tmpl$60()]),
  file: icon(() => [_tmpl$61(), _tmpl$62()]),
  fileText: icon(() => [_tmpl$61(), _tmpl$62(), _tmpl$63(), _tmpl$64(), _tmpl$65()]),
  fileCode: icon(() => [_tmpl$61(), _tmpl$62(), _tmpl$66(), _tmpl$67()]),
  fileImage: icon(() => [_tmpl$61(), _tmpl$62(), _tmpl$68(), _tmpl$69()]),
  filePlay: icon(() => [_tmpl$61(), _tmpl$62(), _tmpl$70()]),
  fileSpreadsheet: icon(() => [_tmpl$61(), _tmpl$62(), _tmpl$71(), _tmpl$72(), _tmpl$73(), _tmpl$74()]),
  fileUpload: icon(() => [_tmpl$61(), _tmpl$62(), _tmpl$75(), _tmpl$76()]),
  folderArchive: icon(() => [_tmpl$77(), _tmpl$78(), _tmpl$79(), _tmpl$80()]),
  checkCircle: icon(() => [_tmpl$41(), _tmpl$81()]),
  alertCircle: icon(() => [_tmpl$41(), _tmpl$82(), _tmpl$83()]),
  triangleAlert: icon(() => [_tmpl$84(), _tmpl$85(), _tmpl$86()]),
  infoCircle: icon(() => [_tmpl$41(), _tmpl$87(), _tmpl$88()])
};
var IconsContext = createContext(() => defaultIcons);
function useIcons() {
  return useContext(IconsContext)();
}
function IconsProvider(props) {
  const [local] = splitProps(props, ["icons", "children"]);
  const value = createMemo(() => ({
    ...defaultIcons,
    ...local.icons ?? {}
  }));
  return createComponent(IconsContext.Provider, {
    value,
    get children() {
      return local.children;
    }
  });
}

// src/components/feedback/Alert.tsx
var _tmpl$89 = /* @__PURE__ */ template(`<div><div class="min-w-0 flex-1">`);
var _tmpl$210 = /* @__PURE__ */ template(`<span class="shrink-0 [&amp;>svg]:size-4"aria-hidden=true>`);
var _tmpl$310 = /* @__PURE__ */ template(`<div class=font-semibold>`);
var _tmpl$410 = /* @__PURE__ */ template(`<div class=mt-0.5>`);
var _tmpl$510 = /* @__PURE__ */ template(`<div class="flex shrink-0 items-center gap-2">`);
var _tmpl$610 = /* @__PURE__ */ template(`<button type=button class="rounded p-1 opacity-70 hover:opacity-100 outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-inset">`);
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
  const [local, others] = splitProps(props, ["status", "appearance", "icon", "closeable", "onClose", "ariaLive", "role", "colorClass", "actions", "title", "class", "children", "ref"]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const status = () => local.status ?? "error";
  const appearance = () => local.appearance ?? "subtle";
  const colorClasses2 = () => local.colorClass ?? statusAppearanceClasses[status()][appearance()];
  const liveMode = () => local.ariaLive ?? "polite";
  const roleAttr = () => {
    const m = liveMode();
    return m === "assertive" ? "alert" : m === "polite" ? "status" : void 0;
  };
  const role = () => local.role ?? roleAttr();
  const ariaLiveAttr = () => liveMode() === "off" ? void 0 : liveMode();
  const showClose = () => local.closeable === true && local.onClose != null;
  const hasActions = () => showClose() || local.actions != null;
  return (() => {
    var _el$ = _tmpl$89(), _el$2 = _el$.firstChild;
    var _ref$ = local.ref;
    typeof _ref$ === "function" ? use(_ref$, _el$) : local.ref = _el$;
    spread(_el$, mergeProps({
      get ["class"]() {
        return cn("flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-sm", colorClasses2(), local.class);
      }
    }, others, {
      get role() {
        return role();
      },
      get ["aria-live"]() {
        return ariaLiveAttr();
      }
    }), false, true);
    insert(_el$, (() => {
      var _c$ = memo(() => local.icon != null);
      return () => _c$() && (() => {
        var _el$3 = _tmpl$210();
        insert(_el$3, () => local.icon);
        return _el$3;
      })();
    })(), _el$2);
    insert(_el$2, (() => {
      var _c$2 = memo(() => local.title != null);
      return () => _c$2() && (() => {
        var _el$4 = _tmpl$310();
        insert(_el$4, () => local.title);
        return _el$4;
      })();
    })(), null);
    insert(_el$2, (() => {
      var _c$3 = memo(() => !!(local.title != null && local.children != null));
      return () => _c$3() && _tmpl$410();
    })(), null);
    insert(_el$2, () => local.children, null);
    insert(_el$, (() => {
      var _c$4 = memo(() => !!hasActions());
      return () => _c$4() && (() => {
        var _el$6 = _tmpl$510();
        insert(_el$6, () => local.actions, null);
        insert(_el$6, (() => {
          var _c$5 = memo(() => !!showClose());
          return () => _c$5() && (() => {
            var _el$7 = _tmpl$610();
            addEventListener(_el$7, "click", local.onClose, true);
            insert(_el$7, () => icons.close({
              class: "size-4",
              "aria-hidden": "true"
            }));
            effect(() => setAttribute(_el$7, "aria-label", zh() ? "\u5173\u95ED" : "Close"));
            return _el$7;
          })();
        })(), null);
        return _el$6;
      })();
    })(), null);
    return _el$;
  })();
}
delegateEvents(["click"]);

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
var ComponentSizeContext = createContext(void 0);
function ComponentSizeProvider(props) {
  return createComponent$1(ComponentSizeContext.Provider, {
    value: props.size,
    get children() {
      return props.children;
    }
  });
}
function useComponentSize() {
  return useContext(ComponentSizeContext);
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
  const [local, others] = splitProps(props, ["variant", "size", "fullWidth", "loading", "disabled", "disableElevation", "iconOnly", "radius", "icon", "startIcon", "endIcon", "class", "style", "children", "label", "onClick", "href", "pressed", "onValueChange", "ref", "type"]);
  const icons = useIcons();
  const contextSize = useComponentSize();
  const resolvedChildren = children(() => local.children);
  const variant = () => local.variant ?? "primary";
  const size = () => local.size ?? contextSize ?? "md";
  const isDisabled = () => local.disabled || local.loading;
  const mode = local.pressed !== void 0 && local.onValueChange != null ? "toggle" : local.href != null && local.href !== "" ? "link" : "button";
  const toggleVariant = () => local.variant === "ghost" ? "ghost" : "outlined";
  const resolvedRadius = () => local.radius ?? (local.iconOnly ? "circle" : "rounded");
  const hasElevation = () => !local.disableElevation && filledVariants.includes(variant());
  const baseClass = () => cn(sharedButtonClass, buttonVariants[variant()], local.iconOnly ? iconOnlySizeConfig[size()] : buttonSizeConfig[size()], radiusClasses[resolvedRadius()], local.fullWidth && "w-full", hasElevation() && "shadow-sm hover:shadow", isDisabled() && "opacity-50 pointer-events-none", local.class);
  const toggleClass = () => cn(sharedButtonClass, "focus-visible:ring-primary-500/50 disabled:opacity-50", toggleModeVariants[toggleVariant()], local.iconOnly ? iconOnlySizeConfig[size()] : buttonSizeConfig[size()], radiusClasses[resolvedRadius()], local.fullWidth && "w-full", isDisabled() && "opacity-50 pointer-events-none", local.class);
  const content = createMemo(() => {
    if (local.iconOnly) {
      return [memo(() => memo(() => !!local.loading)() && icons.spinner({
        class: "h-4 w-4 shrink-0 animate-spin",
        "aria-hidden": "true"
      })), memo(() => memo(() => !!!local.loading)() && (local.icon ?? local.startIcon))];
    }
    return [memo(() => memo(() => !!local.loading)() && icons.spinner({
      class: "h-4 w-4 shrink-0 animate-spin",
      "aria-hidden": "true"
    })), memo(() => memo(() => !!!local.loading)() && local.startIcon), memo(() => memo(() => local.label != null)() ? local.label : resolvedChildren()), memo(() => local.endIcon)];
  });
  if (mode === "toggle") {
    return createComponent(ToggleButton, mergeProps({
      ref(r$) {
        var _ref$ = local.ref;
        typeof _ref$ === "function" ? _ref$(r$) : local.ref = r$;
      },
      get pressed() {
        return local.pressed;
      },
      get onChange() {
        return local.onValueChange;
      },
      get disabled() {
        return isDisabled();
      },
      get ["class"]() {
        return toggleClass();
      },
      get style() {
        return local.style;
      }
    }, others, {
      get children() {
        return content();
      }
    }));
  }
  if (mode === "link") {
    return createComponent(Button$1, mergeProps({
      ref(r$) {
        var _ref$2 = local.ref;
        typeof _ref$2 === "function" ? _ref$2(r$) : local.ref = r$;
      },
      as: "a",
      get href() {
        return local.href;
      },
      get ["aria-disabled"]() {
        return isDisabled() ? "true" : void 0;
      }
    }, () => isDisabled() ? {
      tabIndex: -1
    } : {}, {
      get ["class"]() {
        return baseClass();
      },
      get style() {
        return local.style;
      },
      onClick: (e) => {
        if (isDisabled()) e.preventDefault();
        local.onClick?.(e);
      }
    }, others, {
      get children() {
        return content();
      }
    }));
  }
  return createComponent(Button$1, mergeProps({
    ref(r$) {
      var _ref$3 = local.ref;
      typeof _ref$3 === "function" ? _ref$3(r$) : local.ref = r$;
    },
    as: "button",
    get type() {
      return local.type ?? "button";
    },
    get disabled() {
      return isDisabled();
    },
    get ["class"]() {
      return baseClass();
    },
    get style() {
      return local.style;
    },
    onClick: (e) => local.onClick?.(e)
  }, others, {
    get children() {
      return content();
    }
  }));
}
var _tmpl$90 = /* @__PURE__ */ template(`<div data-torchui=button-group role=group>`);
var ButtonGroupSplitContext = createContext({
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
  return memo(() => resolveSlot(props.content));
}
var groupBaseClasses = "inline-flex rounded-lg border border-surface-border [&>*]:!shadow-none";
var splitBaseClasses = "inline-flex rounded-lg [&>*]:!shadow-none";
var groupChildClasses = "[&>*]:!rounded-none [&>*]:!border-0 [&>*]:!border-r [&>*]:!border-surface-border [&>*:last-child]:!border-r-0 [&>*:first-child]:!rounded-l-lg [&>*:last-child]:!rounded-r-lg";
var groupChildClassesFilled = "[&>*]:!rounded-none [&>*]:!border-0 [&>*]:!border-r [&>*]:!border-white/20 [&>*:last-child]:!border-r-0 [&>*:first-child]:!rounded-l-lg [&>*:last-child]:!rounded-r-lg";
var groupChildClassesVertical = "flex-col [&>*]:!rounded-none [&>*]:!border-0 [&>*]:!border-b [&>*]:!border-surface-border [&>*:last-child]:!border-b-0 [&>*:first-child]:!rounded-t-lg [&>*:last-child]:!rounded-b-lg";
var toggleItemBaseClass = cn("inline-flex items-center justify-center font-medium transition-colors outline-none", "bg-transparent text-ink-700 hover:bg-surface-overlay", "data-[pressed]:bg-primary-500 data-[pressed]:text-white", "data-[pressed]:hover:bg-primary-600 data-[pressed]:hover:text-white", "data-[pressed]:!border-white/20", "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50", "disabled:opacity-50 disabled:cursor-not-allowed", "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed");
var toggleItemSizeClass = {
  xs: "h-[var(--torch-h-xs)] px-2.5 text-xs",
  sm: "h-[var(--torch-h-sm)] px-3 text-xs",
  md: "h-[var(--torch-h-md)] px-4 text-sm",
  lg: "h-[var(--torch-h-lg)] px-5 text-sm",
  xl: "h-[var(--torch-h-xl)] px-6 text-base"
};
function ButtonGroupRoot(props) {
  const [local, others] = splitProps(props, ["class", "children", "split", "size", "variant", "filled", "options", "value", "onValueChange", "multiple", "orientation", "disabled", "splitButtonAriaLabel", "open", "onOpenChange"]);
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
  const resolved = children(() => local.children);
  const list = () => {
    const c = resolved();
    return Array.isArray(c) ? c : c ? [c] : [];
  };
  const main = () => list()[0];
  const menuContent = () => list()[1];
  const size = () => local.size ?? "md";
  const variant = () => local.variant ?? "primary";
  const toggleOrientation = () => local.orientation ?? "horizontal";
  const toggleRootClass = () => cn(groupBaseClasses, toggleOrientation() === "vertical" ? groupChildClassesVertical : groupChildClasses, local.class);
  if (mode === "toggle") {
    if (local.multiple) {
      return createComponent(ToggleGroup, {
        get value() {
          return local.value ?? [];
        },
        get onChange() {
          return local.onValueChange;
        },
        multiple: true,
        get orientation() {
          return toggleOrientation();
        },
        get disabled() {
          return local.disabled;
        },
        get ["class"]() {
          return toggleRootClass();
        },
        get children() {
          return createComponent(For, {
            get each() {
              return local.options ?? [];
            },
            children: (opt) => createComponent(ToggleGroup.Item, {
              get value() {
                return opt.value;
              },
              get ["aria-label"]() {
                return opt.label;
              },
              get ["class"]() {
                return cn(toggleItemBaseClass, toggleItemSizeClass[size()]);
              },
              get children() {
                return opt.label;
              }
            })
          });
        }
      });
    }
    return createComponent(ToggleGroup, {
      get value() {
        return local.value ?? null;
      },
      get onChange() {
        return local.onValueChange;
      },
      get orientation() {
        return toggleOrientation();
      },
      get disabled() {
        return local.disabled;
      },
      get ["class"]() {
        return toggleRootClass();
      },
      get children() {
        return createComponent(For, {
          get each() {
            return local.options ?? [];
          },
          children: (opt) => createComponent(ToggleGroup.Item, {
            get value() {
              return opt.value;
            },
            get ["aria-label"]() {
              return opt.label;
            },
            get ["class"]() {
              return cn(toggleItemBaseClass, toggleItemSizeClass[size()]);
            },
            get children() {
              return opt.label;
            }
          })
        });
      }
    });
  }
  if (mode === "split") {
    return createComponent(ButtonGroupSplitContext.Provider, {
      value: {
        get size() {
          return size();
        },
        get variant() {
          return variant();
        },
        get disabled() {
          return !!local.disabled;
        }
      },
      get children() {
        return createComponent(DropdownMenu, {
          get open() {
            return open();
          },
          onOpenChange: setOpen,
          get children() {
            return [(() => {
              var _el$ = _tmpl$90();
              spread(_el$, mergeProps({
                get ["aria-label"]() {
                  return local.splitButtonAriaLabel ?? (zh() ? "\u5206\u5272\u6309\u94AE" : "Split button");
                },
                get ["class"]() {
                  return cn(splitBaseClasses, local.class);
                }
              }, others), false, true);
              insert(_el$, main, null);
              insert(_el$, createComponent(DropdownMenu.Trigger, {
                as: "button",
                type: "button",
                get disabled() {
                  return local.disabled;
                },
                get ["class"]() {
                  return cn("inline-flex shrink-0 items-center justify-center border-2 border-l-2 rounded-none rounded-r-lg", "outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50", splitTriggerVariants[variant()], splitTriggerSizes[size()], local.disabled && "opacity-50");
                },
                get ["aria-label"]() {
                  return zh() ? "\u6253\u5F00\u83DC\u5355" : "Open menu";
                },
                get children() {
                  return icons.chevronDown({
                    class: "h-4 w-4",
                    "aria-hidden": "true"
                  });
                }
              }), null);
              return _el$;
            })(), createComponent(DropdownMenu.Portal, {
              get children() {
                return createComponent(DropdownMenu.Content, {
                  get ["class"]() {
                    return cn("z-[80] min-w-[160px] rounded-lg border border-surface-border bg-surface-raised p-1 shadow-lg");
                  },
                  get children() {
                    return createComponent(ButtonGroupMenuRenderer, {
                      get content() {
                        return menuContent();
                      }
                    });
                  }
                });
              }
            })];
          }
        });
      }
    });
  }
  const childClasses = () => local.filled ? groupChildClassesFilled : groupChildClasses;
  return (() => {
    var _el$2 = _tmpl$90();
    spread(_el$2, mergeProps({
      get ["class"]() {
        return cn(groupBaseClasses, childClasses(), local.class);
      }
    }, others), false, true);
    insert(_el$2, () => local.children);
    return _el$2;
  })();
}
function ButtonGroupMain(props) {
  const ctx = useContext(ButtonGroupSplitContext);
  const [local, others] = splitProps(props, ["variant", "size", "class", "children", "onChange"]);
  return createComponent(Button, mergeProps({
    get variant() {
      return local.variant ?? ctx.variant;
    },
    get size() {
      return local.size ?? ctx.size;
    },
    get disabled() {
      return others.disabled ?? ctx.disabled;
    },
    disableElevation: true,
    get ["class"]() {
      return cn("!rounded-r-none !border-r-0", local.class);
    }
  }, others, {
    get children() {
      return local.children;
    }
  }));
}
function ButtonGroupMenu(props) {
  const child = props.children;
  const render = typeof child === "function" ? child : () => child ?? null;
  return {
    [BUTTON_GROUP_MENU_SYMBOL]: true,
    render
  };
}
var ButtonGroup = Object.assign(ButtonGroupRoot, {
  Main: ButtonGroupMain,
  Menu: ButtonGroupMenu
});
var COPIED_RESET_MS = 2e3;
var hasAsyncClipboard = typeof navigator !== "undefined" && !!navigator.clipboard && typeof navigator.clipboard.writeText === "function";
function useCopyToClipboard() {
  const [status, setStatus] = createSignal("idle");
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
  const [local, rest] = splitProps(props, ["text", "display", "label", "copiedLabel", "variant", "size", "class", "onCopied"]);
  async function handleClick() {
    const ok = await copy(local.text);
    if (ok) local.onCopied?.();
  }
  const display = () => local.display ?? "icon-and-text";
  const label = () => local.label ?? (zh() ? "\u590D\u5236" : "Copy");
  const copiedLabel = () => local.copiedLabel ?? (zh() ? "\u5DF2\u590D\u5236" : "Copied");
  const isIconOnly = () => display() === "icon-only";
  const showIcon = () => display() === "icon-and-text" || display() === "icon-only";
  const checkIcon = createMemo(() => icons.check({
    class: "h-4 w-4 shrink-0",
    "aria-hidden": "true"
  }));
  const copyIcon = createMemo(() => icons.copy({
    class: "h-4 w-4 shrink-0",
    "aria-hidden": "true"
  }));
  const currentVariant = () => local.variant ?? "outlined";
  const resolvedVariant = () => copied() ? filledVariants2.includes(currentVariant()) ? "success" : "success-outline" : currentVariant();
  const copiedClass = () => copied() && borderlessVariants.includes(currentVariant()) ? "!border-0" : "";
  return createComponent(Button, mergeProps({
    type: "button",
    get variant() {
      return resolvedVariant();
    },
    get size() {
      return local.size ?? "sm";
    },
    get iconOnly() {
      return isIconOnly();
    },
    get icon() {
      return memo(() => !!isIconOnly())() ? memo(() => !!copied())() ? checkIcon() : copyIcon() : void 0;
    },
    get startIcon() {
      return memo(() => !!(!isIconOnly() && showIcon()))() ? memo(() => !!copied())() ? checkIcon() : copyIcon() : void 0;
    },
    get label() {
      return memo(() => !!copied())() ? copiedLabel() : label();
    },
    get ["class"]() {
      return cn("shrink-0", copiedClass(), local.class);
    },
    get title() {
      return memo(() => !!isIconOnly())() ? memo(() => !!copied())() ? copiedLabel() : label() : void 0;
    },
    get ["aria-label"]() {
      return memo(() => !!isIconOnly())() ? memo(() => !!copied())() ? copiedLabel() : label() : void 0;
    },
    onClick: handleClick
  }, rest));
}
var _tmpl$91 = /* @__PURE__ */ template(`<a>`);
var linkVariants = {
  primary: "text-primary-500 font-medium hover:text-primary-600 hover:underline hover:underline-offset-4 focus-visible:ring-primary-500/50",
  muted: "text-ink-500 hover:text-ink-700 hover:underline hover:underline-offset-4 focus-visible:ring-ink-500/50"
};
function Link(props) {
  const [local, others] = splitProps(props, ["variant", "class", "children", "iconStart", "iconEnd"]);
  const hasIcon = () => !!local.iconStart || !!local.iconEnd;
  return (() => {
    var _el$ = _tmpl$91();
    spread(_el$, mergeProps({
      get ["class"]() {
        return cn("outline-none focus-visible:ring-2 rounded", "inline-flex items-center", hasIcon() && "gap-1", linkVariants[local.variant ?? "primary"], local.class);
      }
    }, others), false, true);
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
var _tmpl$92 = /* @__PURE__ */ template(`<span class="text-danger-500 dark:text-danger-400 ml-0.5"aria-hidden=true>*`);
var _tmpl$211 = /* @__PURE__ */ template(`<span>`);
var _tmpl$311 = /* @__PURE__ */ template(`<span class="text-xs text-ink-500">`);
var _tmpl$411 = /* @__PURE__ */ template(`<div class="flex items-center justify-between gap-2 mb-1.5"><div class="flex items-center gap-2 flex-shrink-0">`);
var _tmpl$511 = /* @__PURE__ */ template(`<div aria-hidden=true>`);
var _tmpl$611 = /* @__PURE__ */ template(`<button type=button>`);
var _tmpl$710 = /* @__PURE__ */ template(`<div><div>`);
function Input(props) {
  const [local, others] = splitProps(props, ["label", "labelTrailing", "error", "helperText", "bare", "required", "optional", "size", "revealable", "type", "startAdornment", "endAdornment", "prefix", "suffix", "leftIcon", "rightIcon", "onValueChange", "onErrorClear", "class", "inputClass", "id", "value", "onInput", "ref", "disabled"]);
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
      local.onInput(e);
    }
  };
  const startContent = () => local.startAdornment ?? local.leftIcon;
  const isPasswordRevealable = () => local.type === "password" && local.revealable === true;
  const [showPassword, setShowPassword] = createSignal(false);
  const effectiveType = () => isPasswordRevealable() && showPassword() ? "text" : local.type ?? "text";
  const endContent = () => {
    if (isPasswordRevealable()) return null;
    return local.endAdornment ?? local.rightIcon;
  };
  const hasStart = () => !!startContent();
  const hasEnd = () => !!endContent() || isPasswordRevealable();
  const hasAffix = () => !!local.prefix || !!local.suffix;
  const adornmentClass = "absolute top-1/2 -translate-y-1/2 flex items-center justify-center text-ink-500 pointer-events-none z-10";
  return createComponent(TextField, {
    get value() {
      return memo(() => local.value != null)() ? String(local.value) : void 0;
    },
    onChange: handleChange,
    get validationState() {
      return hasError() ? "invalid" : void 0;
    },
    get required() {
      return local.required;
    },
    get disabled() {
      return local.disabled;
    },
    get ["class"]() {
      return cn("w-full", local.class);
    },
    get children() {
      return [createComponent(Show, {
        get when() {
          return memo(() => !!!local.bare)() && (local.label || local.labelTrailing);
        },
        get children() {
          var _el$ = _tmpl$411(), _el$4 = _el$.firstChild;
          insert(_el$, createComponent(Show, {
            get when() {
              return local.label;
            },
            get children() {
              return createComponent(TextField.Label, {
                get ["class"]() {
                  return cn("block text-sm font-medium", hasError() ? "text-danger-600" : "text-ink-700");
                },
                get children() {
                  return [memo(() => local.label), createComponent(Show, {
                    get when() {
                      return local.required;
                    },
                    get children() {
                      return _tmpl$92();
                    }
                  })];
                }
              });
            }
          }), _el$4);
          insert(_el$, createComponent(Show, {
            get when() {
              return !local.label;
            },
            get children() {
              return _tmpl$211();
            }
          }), _el$4);
          insert(_el$4, createComponent(Show, {
            get when() {
              return local.labelTrailing;
            },
            get children() {
              return local.labelTrailing;
            }
          }), null);
          insert(_el$4, createComponent(Show, {
            get when() {
              return memo(() => !!(local.label && !local.required))() && local.optional;
            },
            get children() {
              var _el$5 = _tmpl$311();
              insert(_el$5, () => zh() ? "\u9009\u586B" : "optional");
              return _el$5;
            }
          }), null);
          return _el$;
        }
      }), (() => {
        var _el$6 = _tmpl$710(), _el$8 = _el$6.firstChild;
        insert(_el$6, createComponent(Show, {
          get when() {
            return local.prefix;
          },
          get children() {
            var _el$7 = _tmpl$511();
            insert(_el$7, () => local.prefix);
            effect(() => className(_el$7, cn("flex items-center self-stretch shrink-0 border-r border-surface-border bg-surface-overlay text-ink-500", sc().text, sc().pl, sc().pr)));
            return _el$7;
          }
        }), _el$8);
        insert(_el$8, createComponent(Show, {
          get when() {
            return startContent();
          },
          get children() {
            var _el$9 = _tmpl$511();
            insert(_el$9, startContent);
            effect(() => className(_el$9, cn(adornmentClass, sc().text, sc().adornStart)));
            return _el$9;
          }
        }), null);
        insert(_el$8, createComponent(TextField.Input, mergeProps({
          ref(r$) {
            var _ref$ = local.ref;
            typeof _ref$ === "function" ? _ref$(r$) : local.ref = r$;
          },
          get id() {
            return local.id;
          },
          get type() {
            return effectiveType();
          },
          onInput: handleInput,
          get ["class"]() {
            return cn("w-full transition-all outline-none text-ink-900 placeholder:text-ink-400", sc().h, sc().py, sc().text, hasStart() ? sc().plAdorn : sc().pl, hasEnd() ? sc().prAdorn : sc().pr, hasAffix() ? "bg-surface-raised border-none ring-0 disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed" : cn("rounded-lg border bg-surface-raised", hasError() ? "border-danger-500 focus:ring-2 focus:ring-inset focus:ring-danger-500 focus:border-transparent" : "border-surface-border focus:ring-2 focus:ring-inset focus:ring-primary-500 focus:border-transparent", "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed"), local.inputClass);
          }
        }, others)), null);
        insert(_el$8, createComponent(Show, {
          get when() {
            return endContent();
          },
          get children() {
            var _el$0 = _tmpl$511();
            insert(_el$0, endContent);
            effect(() => className(_el$0, cn(adornmentClass, sc().text, sc().adornEnd)));
            return _el$0;
          }
        }), null);
        insert(_el$8, createComponent(Show, {
          get when() {
            return isPasswordRevealable();
          },
          get children() {
            var _el$1 = _tmpl$611();
            _el$1.$$click = () => setShowPassword((v) => !v);
            insert(_el$1, (() => {
              var _c$ = memo(() => !!showPassword());
              return () => _c$() ? icons.eyeOff({
                class: "h-4 w-4",
                "aria-hidden": "true"
              }) : icons.eye({
                class: "h-4 w-4",
                "aria-hidden": "true"
              });
            })());
            effect((_p$) => {
              var _v$ = cn("absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded p-1 z-10 text-ink-500 hover:text-ink-700 hover:bg-surface-overlay", sc().adornEnd, sc().text), _v$2 = showPassword() ? zh() ? "\u9690\u85CF\u5BC6\u7801" : "Hide password" : zh() ? "\u663E\u793A\u5BC6\u7801" : "Show password";
              _v$ !== _p$.e && className(_el$1, _p$.e = _v$);
              _v$2 !== _p$.t && setAttribute(_el$1, "aria-label", _p$.t = _v$2);
              return _p$;
            }, {
              e: void 0,
              t: void 0
            });
            return _el$1;
          }
        }), null);
        insert(_el$6, createComponent(Show, {
          get when() {
            return local.suffix;
          },
          get children() {
            var _el$10 = _tmpl$511();
            insert(_el$10, () => local.suffix);
            effect(() => className(_el$10, cn("flex items-center self-stretch shrink-0 border-l border-surface-border bg-surface-overlay text-ink-500", sc().text, sc().pl, sc().pr)));
            return _el$10;
          }
        }), null);
        effect((_p$) => {
          var _v$3 = cn("flex items-center", hasAffix() && ["rounded-lg border overflow-hidden bg-surface-raised", hasError() ? "border-danger-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-danger-500" : "border-surface-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500", local.disabled && "bg-surface-dim"], !hasAffix() && "relative"), _v$4 = cn("relative", hasAffix() ? "flex-1 min-w-0" : "w-full");
          _v$3 !== _p$.e && className(_el$6, _p$.e = _v$3);
          _v$4 !== _p$.t && className(_el$8, _p$.t = _v$4);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$6;
      })(), createComponent(Show, {
        get when() {
          return memo(() => !!(!local.bare && local.helperText))() && !hasError();
        },
        get children() {
          return createComponent(TextField.Description, {
            "class": "mt-2 text-sm text-ink-500",
            get children() {
              return local.helperText;
            }
          });
        }
      }), createComponent(Show, {
        get when() {
          return !local.bare;
        },
        get children() {
          return createComponent(TextField.ErrorMessage, {
            "class": "mt-2 text-sm text-danger-600",
            get children() {
              return local.error;
            }
          });
        }
      })];
    }
  });
}
delegateEvents(["click"]);

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
var _tmpl$93 = /* @__PURE__ */ template(`<span class="text-danger-500 ml-0.5"aria-hidden=true>*`);
var _tmpl$212 = /* @__PURE__ */ template(`<span class="text-xs text-ink-500">optional`);
var _tmpl$312 = /* @__PURE__ */ template(`<div class="flex items-center justify-between gap-2 mb-1.5">`);
var _tmpl$412 = /* @__PURE__ */ template(`<div class="mt-1.5 flex items-center justify-between gap-2"><span></span><span>/`);
var resizeClasses = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize"
};
function TextArea(props) {
  const [local, others] = splitProps(props, ["label", "error", "helperText", "bare", "required", "optional", "resize", "maxLength", "autoresize", "onValueChange", "onErrorClear", "class", "inputClass", "id", "value", "onInput", "rows", "ref", "disabled"]);
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
  createEffect(() => {
    if (!local.autoresize) return;
    valueString();
    queueMicrotask(resizeIfAutoresize);
  });
  onMount(() => {
    if (local.autoresize) queueMicrotask(resizeIfAutoresize);
  });
  onCleanup(() => {
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
  return createComponent(TextField, {
    get value() {
      return memo(() => local.value != null)() ? valueString() : void 0;
    },
    onChange: handleChange,
    get validationState() {
      return hasError() ? "invalid" : void 0;
    },
    get required() {
      return local.required;
    },
    get disabled() {
      return local.disabled;
    },
    get ["class"]() {
      return cn("w-full", local.class);
    },
    get children() {
      return [createComponent(Show, {
        get when() {
          return memo(() => !!!local.bare)() && local.label;
        },
        get children() {
          var _el$ = _tmpl$312();
          insert(_el$, createComponent(TextField.Label, {
            get ["class"]() {
              return cn("block text-sm font-medium", hasError() ? "text-danger-600" : "text-ink-700");
            },
            get children() {
              return [memo(() => local.label), createComponent(Show, {
                get when() {
                  return local.required;
                },
                get children() {
                  return _tmpl$93();
                }
              })];
            }
          }), null);
          insert(_el$, createComponent(Show, {
            get when() {
              return memo(() => !!(local.label && !local.required))() && local.optional;
            },
            get children() {
              return _tmpl$212();
            }
          }), null);
          return _el$;
        }
      }), createComponent(TextField.TextArea, mergeProps({
        ref(r$) {
          var _ref$ = mergeRefs((el) => textareaRef = el, local.ref);
          typeof _ref$ === "function" && _ref$(r$);
        },
        get id() {
          return local.id;
        },
        onInput: handleInput,
        get rows() {
          return local.rows ?? 3;
        },
        get maxLength() {
          return local.maxLength;
        },
        get ["aria-invalid"]() {
          return hasError() || hasMaxLengthError() ? "true" : void 0;
        },
        get ["aria-describedby"]() {
          return describedBy();
        },
        get ["aria-errormessage"]() {
          return memo(() => !!hasError())() ? errorId() : void 0;
        },
        get ["class"]() {
          return cn("w-full py-3 px-4 rounded-lg transition-all outline-none border text-base text-ink-900 placeholder:text-ink-400 min-h-[80px] bg-surface-raised", resizeClass(), hasError() || hasMaxLengthError() ? "border-danger-500 focus:ring-2 focus:ring-inset focus:ring-danger-500 focus:border-transparent" : "border-surface-border focus:ring-2 focus:ring-inset focus:ring-primary-500 focus:border-transparent", "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed", local.inputClass);
        }
      }, others)), createComponent(Show, {
        get when() {
          return memo(() => !!(!local.bare && local.maxLength != null))() && local.maxLength > 0;
        },
        get children() {
          var _el$4 = _tmpl$412(), _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$7 = _el$6.firstChild;
          insert(_el$6, currentLength, _el$7);
          insert(_el$6, () => local.maxLength, null);
          effect(() => className(_el$6, cn("text-xs tabular-nums", countColorClass())));
          return _el$4;
        }
      }), createComponent(Show, {
        get when() {
          return memo(() => !!(!local.bare && local.helperText))() && !hasError();
        },
        get children() {
          return createComponent(TextField.Description, {
            get id() {
              return helperId();
            },
            "class": "mt-2 text-sm text-ink-500",
            get children() {
              return local.helperText;
            }
          });
        }
      }), createComponent(Show, {
        get when() {
          return memo(() => !!!local.bare)() && local.error;
        },
        get children() {
          return createComponent(TextField.ErrorMessage, {
            get id() {
              return errorId();
            },
            "class": "mt-2 text-sm text-danger-600",
            get children() {
              return local.error;
            }
          });
        }
      })];
    }
  });
}
var _tmpl$94 = /* @__PURE__ */ template(`<span class="size-2.5 shrink-0 rounded-full border border-ink-200/80"aria-hidden=true>`);
var _tmpl$213 = /* @__PURE__ */ template(`<span class="flex-shrink-0 text-ink-500">`);
var _tmpl$313 = /* @__PURE__ */ template(`<span class="flex min-w-0 items-center gap-2"><span class="min-w-0 truncate">`);
var _tmpl$413 = /* @__PURE__ */ template(`<div class="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-ink-400 select-none">`);
var _tmpl$512 = /* @__PURE__ */ template(`<span class="ml-0.5 text-danger-500"aria-hidden=true>*`);
var _tmpl$612 = /* @__PURE__ */ template(`<span class="text-xs text-ink-500">optional`);
var _tmpl$711 = /* @__PURE__ */ template(`<div class="flex items-center justify-between mb-1.5">`);
var _tmpl$810 = /* @__PURE__ */ template(`<button type=button class="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-ink-400 hover:text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$95 = /* @__PURE__ */ template(`<div>`);
var _tmpl$02 = /* @__PURE__ */ template(`<div class="shrink-0 border-b border-surface-border p-2"><input type=text>`);
var _tmpl$110 = /* @__PURE__ */ template(`<span class=truncate>`);
var _tmpl$102 = /* @__PURE__ */ template(`<span class="shrink-0 text-ink-500">`);
var _tmpl$112 = /* @__PURE__ */ template(`<span class="min-w-0 flex-1 truncate text-left flex items-center gap-2"><span class="min-w-0 truncate">`);
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
  const style$1 = () => {
    const c = statusColorStyle(props.color);
    return c ? {
      "background-color": c
    } : void 0;
  };
  return (() => {
    var _el$ = _tmpl$94();
    effect((_p$) => {
      var _v$ = !statusColorStyle(props.color), _v$2 = style$1();
      _v$ !== _p$.e && _el$.classList.toggle("bg-ink-400", _p$.e = _v$);
      _p$.t = style(_el$, _v$2, _p$.t);
      return _p$;
    }, {
      e: void 0,
      t: void 0
    });
    return _el$;
  })();
}
var Select = (props) => {
  const [local, others] = splitProps(props, [
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
  const [searchQuery, setSearchQuery] = createSignal("");
  const sc = () => inputSizeConfig[local.size ?? contextSize ?? "md"];
  const hasError = () => !!local.error;
  const uid = createUniqueId();
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
    if (selected && !filtered.some((o) => o.value === selected.value)) return [selected, ...filtered];
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
      options: g.options.filter((o) => o.label.toLowerCase().includes(q) || o.value === selectedVal)
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
          m.target.scrollIntoView({
            block: "nearest"
          });
        }
      }
    });
    observer.observe(el, {
      attributes: true,
      attributeFilter: ["data-highlighted"],
      subtree: true
    });
    onCleanup(() => observer.disconnect());
  };
  const renderItem = (itemProps) => createComponent(Select$1.Item, {
    get item() {
      return itemProps.item;
    },
    "class": "relative flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer outline-none text-ink-900 data-[highlighted]:bg-primary-50 data-[highlighted]:text-primary-900 data-[disabled]:bg-surface-dim data-[disabled]:text-ink-500 data-[disabled]:cursor-not-allowed",
    get children() {
      return [createComponent(Select$1.ItemLabel, {
        "class": "flex-1",
        get children() {
          var _el$2 = _tmpl$313(), _el$4 = _el$2.firstChild;
          insert(_el$2, createComponent(Show, {
            get when() {
              return statusColorStyle(itemProps.item.rawValue.color);
            },
            get children() {
              return createComponent(StatusDot, {
                get color() {
                  return itemProps.item.rawValue.color;
                }
              });
            }
          }), _el$4);
          insert(_el$2, createComponent(Show, {
            get when() {
              return itemProps.item.rawValue.icon;
            },
            get children() {
              var _el$3 = _tmpl$213();
              insert(_el$3, () => resolveOptionIcon(itemProps.item.rawValue.icon));
              return _el$3;
            }
          }), _el$4);
          insert(_el$4, () => itemProps.item.rawValue.label);
          return _el$2;
        }
      }), createComponent(Select$1.ItemIndicator, {
        "class": "inline-flex items-center",
        get children() {
          return icons.check({
            class: "w-4 h-4 text-primary-500",
            "aria-hidden": "true"
          });
        }
      })];
    }
  });
  const renderSection = (sectionProps) => createComponent(Select$1.Section, {
    "class": "[&+&]:border-t [&+&]:border-surface-border [&+&]:mt-1 [&+&]:pt-1",
    get children() {
      var _el$5 = _tmpl$413();
      insert(_el$5, () => sectionProps.section.rawValue.group);
      return _el$5;
    }
  });
  const renderInner = () => [createComponent(Show, {
    get when() {
      return memo(() => !!!local.bare)() && local.label;
    },
    get children() {
      var _el$6 = _tmpl$711();
      insert(_el$6, createComponent(Select$1.Label, {
        get ["class"]() {
          return cn("block text-sm font-medium", hasError() ? "text-danger-600" : "text-ink-700");
        },
        get children() {
          return [memo(() => local.label), createComponent(Show, {
            get when() {
              return local.required;
            },
            get children() {
              return _tmpl$512();
            }
          })];
        }
      }), null);
      insert(_el$6, createComponent(Show, {
        get when() {
          return memo(() => !!(local.label && !local.required))() && local.optional;
        },
        get children() {
          return _tmpl$612();
        }
      }), null);
      return _el$6;
    }
  }), (() => {
    var _el$9 = _tmpl$95();
    insert(_el$9, createComponent(Select$1.Trigger, {
      get ["aria-invalid"]() {
        return hasError() ? "true" : void 0;
      },
      get ["aria-describedby"]() {
        return describedBy();
      },
      get ["aria-errormessage"]() {
        return memo(() => !!hasError())() ? errorId() : void 0;
      },
      get ["class"]() {
        return cn("w-full h-full min-w-0 flex items-center gap-1 rounded-lg transition-all outline-none bg-transparent text-ink-900 text-left border-0 focus:ring-0", sc().py, sc().text, sc().pl, sc().pr, hasError() ? "focus:border-transparent" : "", "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed", "data-[placeholder-shown]:text-ink-400", showClear() && "pr-8", local.triggerClass);
      },
      get children() {
        return [createComponent(Select$1.Value, {
          "class": "min-w-0 flex-1 truncate text-left basis-0",
          children: (state) => {
            const sel = state.selectedOption();
            const opt = sel && sel.value != null ? allFlatOptions().find((o) => o.value === sel.value) ?? sel : sel;
            if (!opt) return (() => {
              var _el$12 = _tmpl$110();
              insert(_el$12, () => local.placeholder || (zh() ? "\u8BF7\u9009\u62E9" : "Select an option"));
              return _el$12;
            })();
            return (() => {
              var _el$13 = _tmpl$112(), _el$15 = _el$13.firstChild;
              insert(_el$13, createComponent(Show, {
                get when() {
                  return statusColorStyle(opt.color);
                },
                get children() {
                  return createComponent(StatusDot, {
                    get color() {
                      return opt.color;
                    }
                  });
                }
              }), _el$15);
              insert(_el$13, createComponent(Show, {
                get when() {
                  return opt.icon;
                },
                get children() {
                  var _el$14 = _tmpl$102();
                  insert(_el$14, () => resolveOptionIcon(opt.icon));
                  return _el$14;
                }
              }), _el$15);
              insert(_el$15, () => opt.label);
              return _el$13;
            })();
          }
        }), createComponent(Show, {
          get when() {
            return !showClear();
          },
          get children() {
            return createComponent(Select$1.Icon, {
              "class": "inline-flex shrink-0 w-4 items-center justify-center text-ink-400",
              get children() {
                return icons.chevronDown({
                  class: "h-3.5 w-3.5",
                  "aria-hidden": "true"
                });
              }
            });
          }
        })];
      }
    }), null);
    insert(_el$9, createComponent(Show, {
      get when() {
        return showClear();
      },
      get children() {
        var _el$0 = _tmpl$810();
        _el$0.$$click = (e) => {
          e.stopPropagation();
          handleChange(null);
        };
        insert(_el$0, () => icons.close({
          class: "h-3.5 w-3.5",
          "aria-hidden": "true"
        }));
        effect(() => setAttribute(_el$0, "aria-label", zh() ? "\u6E05\u9664\u9009\u62E9" : "Clear selection"));
        return _el$0;
      }
    }), null);
    effect(() => className(_el$9, cn("w-full flex flex-col min-h-0 relative rounded-lg border transition-all overflow-hidden", sc().h, hasError() ? "border-danger-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-danger-500 focus-within:border-transparent" : "border-surface-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 focus-within:border-transparent", "bg-surface-raised")));
    return _el$9;
  })(), createComponent(Show, {
    get when() {
      return memo(() => !!(!local.bare && !hasError()))() && local.helperText;
    },
    get children() {
      return createComponent(Select$1.Description, {
        get id() {
          return helperId();
        },
        "class": "mt-2 text-sm text-ink-500",
        get children() {
          return local.helperText;
        }
      });
    }
  }), createComponent(Show, {
    get when() {
      return memo(() => !!!local.bare)() && hasError();
    },
    get children() {
      return createComponent(Select$1.ErrorMessage, {
        get id() {
          return errorId();
        },
        "class": "mt-2 text-sm text-danger-600",
        get children() {
          return local.error;
        }
      });
    }
  }), createComponent(Select$1.Portal, {
    get children() {
      return createComponent(Select$1.Content, {
        "data-kb-top-layer": true,
        get ["class"]() {
          return cn("bg-surface-raised rounded-lg border border-surface-border shadow-lg mt-2 z-[100] flex flex-col max-h-60", local.searchable ? "py-0 overflow-hidden" : "py-1 overflow-auto");
        },
        get children() {
          return [createComponent(Show, {
            get when() {
              return local.searchable;
            },
            get children() {
              var _el$1 = _tmpl$02(), _el$10 = _el$1.firstChild;
              _el$1.$$mousedown = (e) => e.stopPropagation();
              _el$1.$$pointerdown = (e) => e.stopPropagation();
              _el$1.$$keydown = (e) => e.stopPropagation();
              _el$10.$$input = (e) => setSearchQuery(e.currentTarget.value);
              use((el) => searchInputRef = el, _el$10);
              effect((_p$) => {
                var _v$3 = zh() ? "\u641C\u7D22..." : "Search...", _v$4 = cn("h-9 w-full rounded-md border border-surface-border bg-surface-raised px-3 py-1.5 text-sm text-ink-900 placeholder:text-ink-400 outline-none focus:ring-2 focus:ring-inset focus:border-transparent", hasError() ? "focus:ring-danger-500" : "focus:ring-primary-500");
                _v$3 !== _p$.e && setAttribute(_el$10, "placeholder", _p$.e = _v$3);
                _v$4 !== _p$.t && className(_el$10, _p$.t = _v$4);
                return _p$;
              }, {
                e: void 0,
                t: void 0
              });
              effect(() => _el$10.value = searchQuery());
              return _el$1;
            }
          }), (() => {
            var _el$11 = _tmpl$95();
            use(observeHighlightedScrollIntoView, _el$11);
            insert(_el$11, createComponent(Select$1.Listbox, {
              "class": "outline-none"
            }));
            effect(() => className(_el$11, cn("outline-none min-h-0", local.searchable && "flex-1 overflow-auto py-1")));
            return _el$11;
          })()];
        }
      });
    }
  })];
  return (() => {
    var _el$16 = _tmpl$95();
    var _ref$ = local.ref;
    typeof _ref$ === "function" ? use(_ref$, _el$16) : local.ref = _el$16;
    spread(_el$16, mergeProps({
      get id() {
        return local.id;
      },
      get ["class"]() {
        return cn("w-full", local.class);
      }
    }, others), false, true);
    insert(_el$16, createComponent(Show, {
      get when() {
        return memo(() => !!local.groups)() && local.groups.length > 0;
      },
      get fallback() {
        return createComponent(Select$1, {
          get value() {
            return controlledValue();
          },
          onChange: handleChange,
          get options() {
            return filteredOptions();
          },
          onOpenChange: handleOpenChange,
          optionValue: "value",
          optionTextValue: "label",
          get placeholder() {
            return local.placeholder || (zh() ? "\u8BF7\u9009\u62E9" : "Select an option");
          },
          get disabled() {
            return local.disabled;
          },
          get validationState() {
            return hasError() ? "invalid" : void 0;
          },
          closeOnSelection: true,
          allowDuplicateSelectionEvents: false,
          itemComponent: renderItem,
          get modal() {
            return local.modal;
          },
          get ["aria-label"]() {
            return local["aria-label"];
          },
          get ["aria-labelledby"]() {
            return local["aria-labelledby"];
          },
          get children() {
            return renderInner();
          }
        });
      },
      get children() {
        return createComponent(Select$1, {
          get value() {
            return controlledValue();
          },
          onChange: handleChange,
          get options() {
            return filteredGroups();
          },
          onOpenChange: handleOpenChange,
          optionValue: "value",
          optionTextValue: "label",
          optionGroupChildren: "options",
          get placeholder() {
            return local.placeholder || (zh() ? "\u8BF7\u9009\u62E9" : "Select an option");
          },
          get disabled() {
            return local.disabled;
          },
          get validationState() {
            return hasError() ? "invalid" : void 0;
          },
          closeOnSelection: true,
          allowDuplicateSelectionEvents: false,
          itemComponent: renderItem,
          sectionComponent: renderSection,
          get modal() {
            return local.modal;
          },
          get ["aria-label"]() {
            return local["aria-label"];
          },
          get ["aria-labelledby"]() {
            return local["aria-labelledby"];
          },
          get children() {
            return renderInner();
          }
        });
      }
    }));
    return _el$16;
  })();
};
delegateEvents(["click", "keydown", "pointerdown", "mousedown", "input"]);
var _tmpl$96 = /* @__PURE__ */ template(`<span class="text-danger-500 ml-0.5"aria-hidden=true>*`);
var _tmpl$214 = /* @__PURE__ */ template(`<span class="text-xs text-ink-500">optional`);
var _tmpl$314 = /* @__PURE__ */ template(`<div class="flex items-center justify-between mb-1.5">`);
var _tmpl$414 = /* @__PURE__ */ template(`<button type=button>`);
var _tmpl$513 = /* @__PURE__ */ template(`<div class="flex items-center gap-0.5">`);
var _tmpl$613 = /* @__PURE__ */ template(`<p class="mt-2 text-sm text-ink-500">`);
var _tmpl$712 = /* @__PURE__ */ template(`<p class="mt-2 text-sm text-danger-600">`);
var _tmpl$811 = /* @__PURE__ */ template(`<div>`);
var _tmpl$97 = /* @__PURE__ */ template(`<span>`);
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
  const [local, others] = splitProps(props, [
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
  const [inputValueState, setInputValueState] = createSignal("");
  const [dirty, setDirty] = createSignal(false);
  const inputValue = () => local.inputValue ?? inputValueState();
  createEffect(() => {
    if (local.inputValue !== void 0) return;
    if (dirty()) return;
    const opt = local.options.find((o) => o.value === local.value) ?? null;
    setInputValueState(opt?.label ?? "");
  });
  const optionsWithDisabled = (opts) => local.getOptionDisabled ? opts.map((o) => ({
    ...o,
    disabled: local.getOptionDisabled(o)
  })) : opts;
  const optionsForRoot = createMemo(() => {
    let base = local.filterOptions && dirty() ? local.filterOptions(local.options, inputValue()) : local.options;
    const selected = local.options.find((o) => o.value === local.value);
    if (selected && !base.some((o) => o.value === selected.value)) {
      base = [selected, ...base];
    }
    return optionsWithDisabled(base);
  });
  const selectedOption = createMemo(() => {
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
      input.dispatchEvent(new Event("input", {
        bubbles: true
      }));
      setDirty(false);
    }
  };
  onMount(ensureComboboxStyles);
  const sc = () => inputSizeConfig[local.size ?? contextSize ?? "md"];
  return (() => {
    var _el$ = _tmpl$811();
    var _ref$ = local.ref;
    typeof _ref$ === "function" ? use(_ref$, _el$) : local.ref = _el$;
    insert(_el$, createComponent(Combobox, {
      get options() {
        return optionsForRoot();
      },
      optionValue: "value",
      optionTextValue: "label",
      optionLabel: "label",
      optionDisabled: "disabled",
      get value() {
        return selectedOption();
      },
      get defaultFilter() {
        return local.filterOptions ? () => true : (option, input) => {
          const selectedLabel = selectedOption()?.label;
          if (selectedLabel && input === selectedLabel) return true;
          const label = typeof option === "object" && option !== null ? String(option.label ?? "") : String(option);
          return label.toLowerCase().includes(input.toLowerCase());
        };
      },
      get triggerMode() {
        return local.triggerMode ?? "input";
      },
      get disabled() {
        return local.disabled;
      },
      onChange: handleChange,
      onInputChange: handleInputChange,
      noResetInputOnBlur: true,
      itemComponent: (itemProps) => createComponent(Combobox.Item, {
        get item() {
          return itemProps.item;
        },
        "class": "relative flex items-center justify-between px-3 py-2 text-sm text-ink-900 cursor-pointer outline-none data-[highlighted]:bg-primary-50 data-[highlighted]:text-primary-900 data-[disabled]:bg-surface-dim data-[disabled]:text-ink-500 data-[disabled]:cursor-not-allowed",
        get children() {
          return [createComponent(Combobox.ItemLabel, {
            "class": "flex-1",
            get children() {
              return memo(() => !!local.renderOption)() ? local.renderOption(itemProps.item.rawValue) : (() => {
                var _el$9 = _tmpl$97();
                insert(_el$9, () => itemProps.item.rawValue.label);
                return _el$9;
              })();
            }
          }), createComponent(Combobox.ItemIndicator, {
            "class": "inline-flex items-center",
            get children() {
              return icons.check({
                class: "w-4 h-4 text-primary-500",
                "aria-hidden": "true"
              });
            }
          })];
        }
      }),
      get children() {
        return [createComponent(Combobox.HiddenSelect, {}), createComponent(Show, {
          get when() {
            return memo(() => !!!local.bare)() && local.label;
          },
          get children() {
            var _el$2 = _tmpl$314();
            insert(_el$2, createComponent(Combobox.Label, {
              get ["class"]() {
                return cn("block text-sm font-medium", hasError() ? "text-danger-600" : "text-ink-700");
              },
              get children() {
                return [memo(() => local.label), createComponent(Show, {
                  get when() {
                    return local.required;
                  },
                  get children() {
                    return _tmpl$96();
                  }
                })];
              }
            }), null);
            insert(_el$2, createComponent(Show, {
              get when() {
                return memo(() => !!(local.label && !local.required))() && local.optional;
              },
              get children() {
                return _tmpl$214();
              }
            }), null);
            return _el$2;
          }
        }), createComponent(Combobox.Control, {
          get ["class"]() {
            return cn("w-full flex cursor-pointer items-center rounded-lg transition-colors outline-none text-ink-900 bg-surface-raised border", hasError() ? "border-danger-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-danger-500" : "border-surface-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 focus-within:border-transparent", sc().h, sc().py, sc().text, sc().pl, sc().pr, local.disabled && "bg-surface-base text-ink-500 pointer-events-none");
          },
          get children() {
            return [createComponent(Combobox.Input, {
              "class": "flex-1 min-w-0 bg-transparent outline-none text-ink-900 placeholder:text-ink-400 disabled:cursor-not-allowed",
              get placeholder() {
                return local.placeholder || (zh() ? "\u641C\u7D22..." : "Search...");
              },
              get disabled() {
                return local.disabled;
              },
              get id() {
                return local.id;
              },
              get ["aria-label"]() {
                return local["aria-label"];
              },
              get ["aria-labelledby"]() {
                return local["aria-labelledby"];
              }
            }), (() => {
              var _el$5 = _tmpl$513();
              insert(_el$5, createComponent(Show, {
                get when() {
                  return !local.disableClearable;
                },
                get children() {
                  var _el$6 = _tmpl$414();
                  _el$6.$$click = handleClear;
                  insert(_el$6, () => icons.close({
                    class: "h-4 w-4",
                    "aria-hidden": "true"
                  }));
                  effect((_p$) => {
                    var _v$ = zh() ? "\u6E05\u9664" : "Clear", _v$2 = cn("shrink-0 rounded p-0.5 text-ink-400 hover:bg-surface-overlay hover:text-ink-600 outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset", !local.value && inputValue().length === 0 && "invisible"), _v$3 = !local.value && inputValue().length === 0 ? -1 : 0;
                    _v$ !== _p$.e && setAttribute(_el$6, "aria-label", _p$.e = _v$);
                    _v$2 !== _p$.t && className(_el$6, _p$.t = _v$2);
                    _v$3 !== _p$.a && setAttribute(_el$6, "tabindex", _p$.a = _v$3);
                    return _p$;
                  }, {
                    e: void 0,
                    t: void 0,
                    a: void 0
                  });
                  return _el$6;
                }
              }), null);
              insert(_el$5, createComponent(Combobox.Trigger, {
                "class": "shrink-0 rounded p-0.5 text-ink-400 hover:bg-surface-overlay hover:text-ink-600",
                get ["aria-label"]() {
                  return zh() ? "\u6253\u5F00\u9009\u9879" : "Open options";
                },
                get children() {
                  return icons.chevronDown({
                    class: "h-4 w-4",
                    "aria-hidden": "true"
                  });
                }
              }), null);
              return _el$5;
            })()];
          }
        }), createComponent(Show, {
          get when() {
            return memo(() => !!(!local.bare && !hasError()))() && local.helperText;
          },
          get children() {
            var _el$7 = _tmpl$613();
            insert(_el$7, () => local.helperText);
            return _el$7;
          }
        }), createComponent(Show, {
          get when() {
            return memo(() => !!!local.bare)() && hasError();
          },
          get children() {
            var _el$8 = _tmpl$712();
            insert(_el$8, () => local.error);
            return _el$8;
          }
        }), createComponent(Combobox.Portal, {
          get children() {
            return createComponent(Combobox.Content, {
              "data-kb-top-layer": true,
              "class": "torchui-combobox-content bg-surface-raised rounded-lg border border-surface-border shadow-lg mt-2 py-1 max-h-60 overflow-auto z-[80]",
              onCloseAutoFocus: (e) => e.preventDefault(),
              get children() {
                return createComponent(Combobox.Listbox, {
                  "class": "outline-none"
                });
              }
            });
          }
        })];
      }
    }));
    effect(() => className(_el$, cn("w-full", local.class)));
    return _el$;
  })();
}
delegateEvents(["click"]);
function createSortableDrag(options) {
  const [activeId, setActiveId] = createSignal(null);
  const [overId, setOverId] = createSignal(null);
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
  const displacementMap = createMemo(() => {
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
  onCleanup(() => cleanupListeners?.());
  return { activeId, overId, getTransform, isDragging, handlePointerDown };
}

// src/components/forms/MultiSelect.tsx
var _tmpl$98 = /* @__PURE__ */ template(`<span class="shrink-0 text-current opacity-70">`);
var _tmpl$215 = /* @__PURE__ */ template(`<span style=position:fixed;top:0;left:0;pointer-events:none;z-index:50;will-change:transform><span class="min-w-0 truncate">`);
var _tmpl$315 = /* @__PURE__ */ template(`<button type=button>`);
var _tmpl$415 = /* @__PURE__ */ template(`<span><span class="min-w-0 truncate"></span><button type=button class="rounded p-0.5 hover:bg-surface-overlay outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$514 = /* @__PURE__ */ template(`<span data-sortable-container class="inline-flex flex-wrap items-center gap-2">`);
var _tmpl$614 = /* @__PURE__ */ template(`<span class="text-danger-500 ml-0.5"aria-hidden=true>*`);
var _tmpl$713 = /* @__PURE__ */ template(`<span class="text-xs text-ink-500">optional`);
var _tmpl$812 = /* @__PURE__ */ template(`<div class="flex items-center justify-between mb-2">`);
var _tmpl$99 = /* @__PURE__ */ template(`<div><div class=m-px>`);
var _tmpl$03 = /* @__PURE__ */ template(`<p class="mt-2 text-sm text-danger-600"role=alert>`);
var _tmpl$111 = /* @__PURE__ */ template(`<div class="shrink-0 border-b border-surface-border p-2"><input type=text>`);
var _tmpl$103 = /* @__PURE__ */ template(`<div>`);
var _tmpl$113 = /* @__PURE__ */ template(`<span class="flex-shrink-0 text-ink-500">`);
var _tmpl$122 = /* @__PURE__ */ template(`<span class="flex items-center gap-2"><span class=truncate>`);
var _tmpl$132 = /* @__PURE__ */ template(`<span class=text-ink-400>`);
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
  onMount(() => {
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", cleanup, {
      once: true
    });
    document.addEventListener("pointercancel", cleanup, {
      once: true
    });
  });
  onCleanup(cleanup);
  return (() => {
    var _el$ = _tmpl$215(), _el$3 = _el$.firstChild;
    use((e) => el = e, _el$);
    insert(_el$, () => icons.dragHandle({
      class: "h-3.5 w-3.5 text-ink-400",
      "aria-hidden": "true"
    }), _el$3);
    insert(_el$, createComponent(Show, {
      get when() {
        return props.icon;
      },
      get children() {
        var _el$2 = _tmpl$98();
        insert(_el$2, () => props.icon);
        return _el$2;
      }
    }), _el$3);
    insert(_el$3, () => props.label);
    effect((_p$) => {
      var _v$ = `translate(${props.startX - 12}px, ${props.startY - 12}px)`, _v$2 = props.width != null ? `${props.width}px` : void 0, _v$3 = props.height != null ? `${props.height}px` : void 0, _v$4 = cn("inline-flex shrink-0 items-center gap-1.5 rounded-md font-medium bg-ink-100 text-ink-700 shadow-md select-none", props.width == null && "max-w-[200px]", effectiveSize() === "xs" && "px-1.5 py-0.5 text-xs", effectiveSize() === "sm" && "px-1.5 py-0.5 text-xs", (effectiveSize() === "md" || effectiveSize() === "lg" || effectiveSize() === "xl") && "px-2 py-1 text-sm");
      _v$ !== _p$.e && setStyleProperty(_el$, "transform", _p$.e = _v$);
      _v$2 !== _p$.t && setStyleProperty(_el$, "width", _p$.t = _v$2);
      _v$3 !== _p$.a && setStyleProperty(_el$, "height", _p$.a = _v$3);
      _v$4 !== _p$.o && className(_el$, _p$.o = _v$4);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    });
    return _el$;
  })();
}
function ChipContent(props) {
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const isActive = () => props.isActive?.() === true;
  const isDragging = () => props.isDragging?.() === true;
  return (() => {
    var _el$4 = _tmpl$415(), _el$7 = _el$4.firstChild, _el$8 = _el$7.nextSibling;
    insert(_el$4, createComponent(Show, {
      get when() {
        return props.showGrip;
      },
      get children() {
        var _el$5 = _tmpl$315();
        addEventListener(_el$5, "pointerdown", props.onGripPointerDown, true);
        insert(_el$5, () => icons.dragHandle({
          class: "h-3.5 w-3.5",
          "aria-hidden": "true"
        }));
        effect((_p$) => {
          var _v$5 = cn("shrink-0 text-ink-400 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 rounded", isDragging() ? "cursor-grabbing" : "cursor-grab"), _v$6 = zh() ? "\u62D6\u52A8\u6392\u5E8F" : "Drag to reorder";
          _v$5 !== _p$.e && className(_el$5, _p$.e = _v$5);
          _v$6 !== _p$.t && setAttribute(_el$5, "aria-label", _p$.t = _v$6);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$5;
      }
    }), _el$7);
    insert(_el$4, createComponent(Show, {
      get when() {
        return props.opt.icon;
      },
      get children() {
        var _el$6 = _tmpl$98();
        insert(_el$6, () => props.opt.icon);
        return _el$6;
      }
    }), _el$7);
    insert(_el$7, () => props.opt.label);
    _el$8.$$pointerdown = (e) => e.stopPropagation();
    _el$8.$$click = (e) => {
      e.stopPropagation();
      e.preventDefault();
      props.onRemove(props.opt);
    };
    insert(_el$8, () => icons.close({
      class: "h-3.5 w-3.5",
      "aria-hidden": "true"
    }));
    effect((_p$) => {
      var _v$7 = props.opt.value, _v$8 = isActive() && isDragging() ? "0" : void 0, _v$9 = isActive() && isDragging() ? "hidden" : void 0, _v$0 = isActive() && isDragging() ? "none" : void 0, _v$1 = cn("inline-flex shrink-0 items-center gap-1.5 rounded-md font-medium bg-ink-100 text-ink-700", "max-w-[200px]", props.size === "xs" && "px-1.5 py-0.5 text-xs", props.size === "sm" && "px-1.5 py-0.5 text-xs", (props.size === "md" || props.size === "lg" || props.size === "xl") && "px-2 py-1 text-sm"), _v$10 = zh() ? `\u79FB\u9664 ${props.opt.label}` : `Remove ${props.opt.label}`;
      _v$7 !== _p$.e && setAttribute(_el$4, "data-sortable-id", _p$.e = _v$7);
      _v$8 !== _p$.t && setStyleProperty(_el$4, "opacity", _p$.t = _v$8);
      _v$9 !== _p$.a && setStyleProperty(_el$4, "visibility", _p$.a = _v$9);
      _v$0 !== _p$.o && setStyleProperty(_el$4, "pointer-events", _p$.o = _v$0);
      _v$1 !== _p$.i && className(_el$4, _p$.i = _v$1);
      _v$10 !== _p$.n && setAttribute(_el$8, "aria-label", _p$.n = _v$10);
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
function ChipsList(props) {
  const drag = createSortableDrag({
    items: () => props.selectedOptions.map((o) => ({
      id: o.value
    })),
    onReorder: props.onReorder
  });
  const previewOptions = createMemo(() => {
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
  return (() => {
    var _el$9 = _tmpl$514();
    insert(_el$9, createComponent(For, {
      get each() {
        return previewOptions();
      },
      children: (opt) => createComponent(ChipContent, {
        opt,
        get onRemove() {
          return props.onRemove;
        },
        get showGrip() {
          return props.reorderable;
        },
        get size() {
          return props.size;
        },
        isActive: () => drag.activeId() === opt.value,
        get isDragging() {
          return drag.isDragging;
        },
        get onGripPointerDown() {
          return props.reorderable ? (e) => {
            pointerX = e.clientX;
            pointerY = e.clientY;
            const chip = e.currentTarget.closest("[data-sortable-id]");
            if (chip) {
              const r = chip.getBoundingClientRect();
              overlayW = r.width;
              overlayH = r.height;
            }
            drag.handlePointerDown(opt.value, e);
          } : void 0;
        }
      })
    }), null);
    insert(_el$9, createComponent(Show, {
      get when() {
        return drag.activeId();
      },
      children: (activeId) => {
        const opt = () => props.selectedOptions.find((o) => o.value === activeId());
        return createComponent(Show, {
          get when() {
            return opt();
          },
          children: (resolved) => createComponent(ChipDragOverlay, {
            get label() {
              return resolved().label;
            },
            get icon() {
              return resolved().icon;
            },
            startX: pointerX,
            startY: pointerY,
            width: overlayW,
            height: overlayH,
            get size() {
              return props.size;
            }
          })
        });
      }
    }), null);
    return _el$9;
  })();
}
function MultiSelect(props) {
  const [local] = splitProps(props, ["label", "helperText", "error", "bare", "required", "optional", "options", "value", "onValueChange", "onErrorClear", "placeholder", "class", "reorderable", "searchable", "disabled", "size", "ref"]);
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
  const uid = createUniqueId();
  const helperId = () => local.helperText ? `ms-${uid}-help` : void 0;
  const errorId = () => local.error ? `ms-${uid}-error` : void 0;
  const describedBy = () => [helperId(), errorId()].filter(Boolean).join(" ") || void 0;
  const [searchQuery, setSearchQuery] = createSignal("");
  const normalizedSearchQuery = createMemo(() => searchQuery().trim().toLowerCase());
  const selectedOptions = createMemo(() => {
    const base = local.options.filter((o) => local.value.includes(o.value));
    const missing = local.value.filter((v) => !local.options.some((o) => o.value === v)).map((v) => ({
      value: v,
      label: v
    }));
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
          m.target.scrollIntoView({
            block: "nearest"
          });
        }
      }
    });
    observer.observe(el, {
      attributes: true,
      attributeFilter: ["data-highlighted"],
      subtree: true
    });
    onCleanup(() => observer.disconnect());
  };
  return (() => {
    var _el$0 = _tmpl$103();
    var _ref$ = local.ref;
    typeof _ref$ === "function" ? use(_ref$, _el$0) : local.ref = _el$0;
    insert(_el$0, createComponent(Select$1, {
      multiple: true,
      get options() {
        return optionsForSelect();
      },
      optionValue: "value",
      optionTextValue: "label",
      get value() {
        return selectedOptions();
      },
      onChange: handleChange,
      get placeholder() {
        return local.placeholder ?? (zh() ? "\u8BF7\u9009\u62E9..." : "Select...");
      },
      get disabled() {
        return local.disabled;
      },
      closeOnSelection: false,
      allowDuplicateSelectionEvents: false,
      onOpenChange: handleOpenChange,
      itemComponent: (itemProps) => createComponent(Show, {
        get when() {
          if (!local.searchable) return true;
          const q = normalizedSearchQuery();
          if (!q) return true;
          return itemProps.item.rawValue.label.toLowerCase().includes(q);
        },
        get children() {
          return createComponent(Select$1.Item, {
            get item() {
              return itemProps.item;
            },
            "class": "relative flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer outline-none text-ink-900 data-[highlighted]:bg-primary-50 data-[highlighted]:text-primary-900 data-[disabled]:bg-surface-dim data-[disabled]:text-ink-500 data-[disabled]:cursor-not-allowed",
            get children() {
              return [createComponent(Select$1.ItemLabel, {
                "class": "flex-1",
                get children() {
                  var _el$18 = _tmpl$122(), _el$20 = _el$18.firstChild;
                  insert(_el$18, createComponent(Show, {
                    get when() {
                      return itemProps.item.rawValue.icon;
                    },
                    get children() {
                      var _el$19 = _tmpl$113();
                      insert(_el$19, () => itemProps.item.rawValue.icon);
                      return _el$19;
                    }
                  }), _el$20);
                  insert(_el$20, () => itemProps.item.rawValue.label);
                  return _el$18;
                }
              }), createComponent(Select$1.ItemIndicator, {
                "class": "inline-flex items-center",
                get children() {
                  return icons.check({
                    class: "w-4 h-4 text-primary-500",
                    "aria-hidden": "true"
                  });
                }
              })];
            }
          });
        }
      }),
      get children() {
        return [createComponent(Show, {
          get when() {
            return memo(() => !!!local.bare)() && local.label;
          },
          get children() {
            var _el$1 = _tmpl$812();
            insert(_el$1, createComponent(Select$1.Label, {
              get ["class"]() {
                return cn("block text-sm font-medium", local.error ? "text-danger-600" : "text-ink-700");
              },
              get children() {
                return [memo(() => local.label), createComponent(Show, {
                  get when() {
                    return local.required;
                  },
                  get children() {
                    return _tmpl$614();
                  }
                })];
              }
            }), null);
            insert(_el$1, createComponent(Show, {
              get when() {
                return memo(() => !!(local.label && !local.required))() && local.optional;
              },
              get children() {
                return _tmpl$713();
              }
            }), null);
            return _el$1;
          }
        }), (() => {
          var _el$12 = _tmpl$99(), _el$13 = _el$12.firstChild;
          insert(_el$13, createComponent(Select$1.Trigger, {
            as: "button",
            type: "button",
            get ["aria-invalid"]() {
              return local.error ? "true" : void 0;
            },
            get ["aria-describedby"]() {
              return describedBy();
            },
            get ["aria-errormessage"]() {
              return memo(() => !!local.error)() ? errorId() : void 0;
            },
            get ["class"]() {
              return cn("w-full min-h-0 min-w-0 flex items-center gap-2 rounded-[7px] transition-all outline-none bg-transparent text-ink-900 text-left border-0 cursor-pointer", sc().py, sc().text, sc().pl, sc().pr, "data-[expanded]:hover:bg-transparent", "data-[disabled]:bg-surface-base data-[disabled]:text-ink-500 data-[disabled]:cursor-not-allowed", "data-[placeholder-shown]:text-ink-400");
            },
            get children() {
              return [createComponent(Select$1.Value, {
                "class": "min-w-0 flex-1 flex flex-wrap items-center gap-2 basis-0",
                children: (state) => {
                  const selected = state.selectedOptions();
                  if (selected.length === 0) {
                    return (() => {
                      var _el$21 = _tmpl$132();
                      insert(_el$21, () => local.placeholder ?? (zh() ? "\u8BF7\u9009\u62E9..." : "Select..."));
                      return _el$21;
                    })();
                  }
                  return createComponent(ChipsList, {
                    selectedOptions: selected,
                    onRemove: (opt) => state.remove(opt),
                    get reorderable() {
                      return local.reorderable ?? false;
                    },
                    onReorder: (newOrder) => local.onValueChange(newOrder),
                    get size() {
                      return size();
                    }
                  });
                }
              }), createComponent(Select$1.Icon, {
                "class": "inline-flex shrink-0 w-4 items-center justify-center text-ink-400 transition-transform data-[expanded]:rotate-180",
                get children() {
                  return icons.chevronDown({
                    class: "h-3.5 w-3.5",
                    "aria-hidden": "true"
                  });
                }
              })];
            }
          }));
          effect(() => className(_el$12, cn("w-full flex flex-col min-h-0 rounded-lg border transition-all overflow-hidden", minH(), local.error ? "border-danger-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-danger-500 focus-within:border-transparent" : "border-surface-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 focus-within:border-transparent", "bg-surface-raised")));
          return _el$12;
        })(), createComponent(Show, {
          get when() {
            return memo(() => !!(!local.bare && !local.error))() && local.helperText;
          },
          get children() {
            return createComponent(Select$1.Description, {
              get id() {
                return helperId();
              },
              "class": "mt-2 text-sm text-ink-500",
              get children() {
                return local.helperText;
              }
            });
          }
        }), createComponent(Show, {
          get when() {
            return memo(() => !!!local.bare)() && local.error;
          },
          get children() {
            var _el$14 = _tmpl$03();
            insert(_el$14, () => local.error);
            effect(() => setAttribute(_el$14, "id", errorId()));
            return _el$14;
          }
        }), createComponent(Select$1.Portal, {
          get children() {
            return createComponent(Select$1.Content, {
              "data-kb-top-layer": true,
              get ["class"]() {
                return cn("bg-surface-raised rounded-lg border border-surface-border shadow-lg mt-2 z-[100] flex flex-col max-h-60", local.searchable ? "py-0 overflow-hidden" : "py-1 overflow-auto");
              },
              get children() {
                return [createComponent(Show, {
                  get when() {
                    return local.searchable;
                  },
                  get children() {
                    var _el$15 = _tmpl$111(), _el$16 = _el$15.firstChild;
                    _el$15.$$mousedown = (e) => e.stopPropagation();
                    _el$15.$$pointerdown = (e) => e.stopPropagation();
                    _el$15.$$keydown = (e) => e.stopPropagation();
                    _el$16.$$input = (e) => setSearchQuery(e.currentTarget.value);
                    use((el) => searchInputRef = el, _el$16);
                    effect((_p$) => {
                      var _v$11 = zh() ? "\u641C\u7D22..." : "Search...", _v$12 = cn("h-9 w-full rounded-md border border-surface-border bg-surface-raised px-3 py-1.5 text-sm text-ink-900 placeholder:text-ink-400 outline-none focus:ring-2 focus:ring-inset focus:border-transparent", local.error ? "focus:ring-danger-500" : "focus:ring-primary-500");
                      _v$11 !== _p$.e && setAttribute(_el$16, "placeholder", _p$.e = _v$11);
                      _v$12 !== _p$.t && className(_el$16, _p$.t = _v$12);
                      return _p$;
                    }, {
                      e: void 0,
                      t: void 0
                    });
                    effect(() => _el$16.value = searchQuery());
                    return _el$15;
                  }
                }), (() => {
                  var _el$17 = _tmpl$103();
                  use(observeHighlightedScrollIntoView, _el$17);
                  insert(_el$17, createComponent(Select$1.Listbox, {
                    "class": "outline-none"
                  }));
                  effect(() => className(_el$17, cn("outline-none min-h-0", local.searchable && "flex-1 overflow-auto py-1")));
                  return _el$17;
                })()];
              }
            });
          }
        })];
      }
    }));
    effect(() => className(_el$0, cn("w-full", local.class)));
    return _el$0;
  })();
}
delegateEvents(["pointerdown", "click", "keydown", "mousedown", "input"]);
var _tmpl$100 = /* @__PURE__ */ template(`<span class="text-danger-500 ml-0.5"aria-hidden=true>*`);
var _tmpl$216 = /* @__PURE__ */ template(`<span class="text-xs text-ink-500 ml-1">optional`);
var _tmpl$316 = /* @__PURE__ */ template(`<div class=min-w-0>`);
var _tmpl$416 = /* @__PURE__ */ template(`<div>`);
var sizeClasses = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4"
};
function Checkbox(props) {
  const icons = useIcons();
  const [local, others] = splitProps(props, ["label", "error", "helperText", "bare", "required", "optional", "checked", "onValueChange", "onErrorClear", "size", "indeterminate", "class", "id", "disabled", "children", "name", "value"]);
  const contextSize = useComponentSize();
  const hasError = () => !!local.error;
  const size = () => local.size ?? (contextSize === "xs" || contextSize === "sm" ? "sm" : "md");
  const iconSize = () => size() === "sm" ? "w-2.5 h-2.5" : "w-3 h-3";
  return createComponent(Checkbox$1, {
    get checked() {
      return local.checked;
    },
    onChange: (v) => {
      if (local.error && local.onErrorClear) local.onErrorClear();
      local.onValueChange?.(v === true);
    },
    get indeterminate() {
      return local.indeterminate;
    },
    get validationState() {
      return hasError() ? "invalid" : void 0;
    },
    get required() {
      return local.required;
    },
    get disabled() {
      return local.disabled;
    },
    get name() {
      return local.name;
    },
    get value() {
      return local.value;
    },
    get id() {
      return local.id;
    },
    get ["class"]() {
      return cn(local.bare ? "inline-flex" : "w-full", local.class);
    },
    get children() {
      var _el$ = _tmpl$416();
      insert(_el$, createComponent(Checkbox$1.Input, others), null);
      insert(_el$, createComponent(Checkbox$1.Control, {
        get ["class"]() {
          return cn("relative inline-flex shrink-0 items-center justify-center rounded border cursor-pointer outline-none transition-colors", sizeClasses[size()], "bg-surface-raised border-surface-border", "data-[checked]:border-primary-500 data-[checked]:bg-primary-500", "data-[indeterminate]:border-primary-500 data-[indeterminate]:bg-primary-500", hasError() && "border-danger-500", hasError() ? "data-[focus-visible]:ring-2 data-[focus-visible]:ring-inset data-[focus-visible]:ring-danger-500 data-[focus-visible]:border-transparent" : "data-[focus-visible]:ring-2 data-[focus-visible]:ring-inset data-[focus-visible]:ring-primary-500 data-[focus-visible]:border-transparent", local.disabled && "");
        },
        get children() {
          return createComponent(Checkbox$1.Indicator, {
            "class": "absolute inset-0 flex items-center justify-center text-white",
            get children() {
              return createComponent(Show, {
                get when() {
                  return !local.indeterminate;
                },
                get fallback() {
                  return icons.minus({
                    class: iconSize(),
                    "aria-hidden": "true"
                  });
                },
                get children() {
                  return icons.check({
                    class: iconSize(),
                    "aria-hidden": "true"
                  });
                }
              });
            }
          });
        }
      }), null);
      insert(_el$, createComponent(Show, {
        get when() {
          return memo(() => !!!local.bare)() && (local.label ?? local.children);
        },
        get fallback() {
          return [createComponent(Show, {
            get when() {
              return memo(() => !!(!local.bare && local.helperText))() && !hasError();
            },
            get children() {
              return createComponent(Checkbox$1.Description, {
                "class": "mt-1.5 text-sm text-ink-500",
                get children() {
                  return local.helperText;
                }
              });
            }
          }), createComponent(Show, {
            get when() {
              return memo(() => !!!local.bare)() && local.error;
            },
            get children() {
              return createComponent(Checkbox$1.ErrorMessage, {
                "class": "mt-1.5 text-sm text-danger-600",
                get children() {
                  return local.error;
                }
              });
            }
          })];
        },
        get children() {
          var _el$2 = _tmpl$316();
          insert(_el$2, createComponent(Checkbox$1.Label, {
            get ["class"]() {
              return cn("text-ink-700 cursor-pointer", size() === "sm" ? "text-xs" : "text-sm", local.disabled && "");
            },
            get children() {
              return [memo(() => local.label ?? local.children), createComponent(Show, {
                get when() {
                  return local.required;
                },
                get children() {
                  return _tmpl$100();
                }
              }), createComponent(Show, {
                get when() {
                  return memo(() => !!!local.required)() && local.optional;
                },
                get children() {
                  return _tmpl$216();
                }
              })];
            }
          }), null);
          insert(_el$2, createComponent(Show, {
            get when() {
              return memo(() => !!(!local.bare && local.helperText))() && !hasError();
            },
            get children() {
              return createComponent(Checkbox$1.Description, {
                "class": "mt-1 text-sm text-ink-500",
                get children() {
                  return local.helperText;
                }
              });
            }
          }), null);
          insert(_el$2, createComponent(Show, {
            get when() {
              return memo(() => !!!local.bare)() && local.error;
            },
            get children() {
              return createComponent(Checkbox$1.ErrorMessage, {
                "class": "mt-1 text-sm text-danger-600",
                get children() {
                  return local.error;
                }
              });
            }
          }), null);
          return _el$2;
        }
      }), null);
      effect(() => className(_el$, cn("flex items-center select-none", size() === "sm" ? "gap-1.5" : "gap-2", local.disabled && "opacity-50", hasError() && "text-danger-600")));
      return _el$;
    }
  });
}
var _tmpl$101 = /* @__PURE__ */ template(`<span>`);
var _tmpl$217 = /* @__PURE__ */ template(`<span class="text-danger-500 ml-0.5"aria-hidden=true>*`);
var _tmpl$317 = /* @__PURE__ */ template(`<span class="text-xs text-ink-400 ml-1">optional`);
var _tmpl$417 = /* @__PURE__ */ template(`<div class="flex items-start justify-between gap-3"><div class=min-w-0></div><div class=shrink-0>`);
var _tmpl$515 = /* @__PURE__ */ template(`<div>`);
var _tmpl$615 = /* @__PURE__ */ template(`<div class="flex items-center gap-2">`);
var SIZE_MAP = {
  xs: {
    track: "h-4 w-8",
    thumb: "h-3 w-3",
    checked: "group-data-[checked]:translate-x-4",
    top: "1px"
  },
  sm: {
    track: "h-5 w-9",
    thumb: "h-4 w-4",
    checked: "group-data-[checked]:translate-x-4",
    top: "1px"
  },
  md: {
    track: "h-6 w-11",
    thumb: "h-5 w-5",
    checked: "group-data-[checked]:translate-x-5",
    top: "1px"
  },
  lg: {
    track: "h-8 w-14",
    thumb: "h-6 w-6",
    checked: "group-data-[checked]:translate-x-7",
    top: "3px"
  },
  xl: {
    track: "h-9 w-16",
    thumb: "h-7 w-7",
    checked: "group-data-[checked]:translate-x-8",
    top: "3px"
  }
};
function SwitchControl(props) {
  return [createComponent(Switch$1.Input, {
    "class": "peer sr-only"
  }), createComponent(Switch$1.Control, {
    get style() {
      return props.trackStyle();
    },
    get ["class"]() {
      return cn("group relative inline-flex shrink-0 cursor-pointer rounded-full border border-surface-border transition-colors", props.sz().track, "outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-primary-500", "data-[disabled]:opacity-50", "bg-surface-dim data-[checked]:bg-success-500 data-[checked]:border-success-500", props.hasError() && "border-danger-500 peer-focus-visible:ring-danger-500 data-[checked]:border-danger-500", props.controlClass);
    },
    get children() {
      return createComponent(Switch$1.Thumb, {
        get style() {
          return {
            top: props.sz().top,
            left: "1px"
          };
        },
        get ["class"]() {
          return cn("pointer-events-none absolute flex items-center justify-center rounded-full bg-surface-base shadow ring-0 transition-transform", props.sz().thumb, "translate-x-0", props.sz().checked);
        },
        get children() {
          return memo(() => !!(props.iconVariant() && (props.thumbOffIcon || props.thumbOnIcon)))() ? [(() => {
            var _el$ = _tmpl$101();
            insert(_el$, () => props.thumbOffIcon);
            effect(() => className(_el$, cn("block", "group-data-[checked]:hidden")));
            return _el$;
          })(), (() => {
            var _el$2 = _tmpl$101();
            insert(_el$2, () => props.thumbOnIcon);
            effect(() => className(_el$2, cn("hidden", "group-data-[checked]:block")));
            return _el$2;
          })()] : null;
        }
      });
    }
  })];
}
function SwitchHelperError(props) {
  return [createComponent(Show, {
    get when() {
      return memo(() => !!props.helperText)() && !props.hasError();
    },
    get children() {
      return createComponent(Switch$1.Description, {
        get ["class"]() {
          return cn(props.descMargin, "text-sm text-ink-500");
        },
        get children() {
          return props.helperText;
        }
      });
    }
  }), createComponent(Show, {
    get when() {
      return props.hasError();
    },
    get children() {
      return createComponent(Switch$1.ErrorMessage, {
        get ["class"]() {
          return cn(props.descMargin, "text-sm text-danger-600");
        },
        get children() {
          return props.error;
        }
      });
    }
  })];
}
function Switch(props) {
  const [local, others] = splitProps(props, ["label", "variant", "thumbOffIcon", "thumbOnIcon", "trackColor", "trackCheckedColor", "helperText", "error", "bare", "required", "optional", "checked", "defaultChecked", "onValueChange", "onErrorClear", "disabled", "value", "name", "size", "fullWidth", "class", "controlClass", "ref"]);
  const hasError = () => !!local.error;
  const iconVariant = () => local.variant === "icon";
  const sz = () => SIZE_MAP[local.size ?? "md"];
  const [isChecked, setIsChecked] = createSignal(!!(local.checked ?? local.defaultChecked));
  createEffect(on(() => local.checked, (checked) => {
    if (checked !== void 0) setIsChecked(!!checked);
  }, {
    defer: true
  }));
  const trackStyle = () => {
    if (!local.trackColor && !local.trackCheckedColor) return void 0;
    const bg = isChecked() ? local.trackCheckedColor ?? local.trackColor : local.trackColor;
    return bg ? {
      "background-color": bg
    } : void 0;
  };
  const switchA11yProps = () => ({
    "aria-label": local.label ? void 0 : others["aria-label"],
    "aria-labelledby": local.label ? void 0 : others["aria-labelledby"],
    title: local.label ? void 0 : others["title"]
  });
  return (() => {
    var _el$3 = _tmpl$515();
    var _ref$ = local.ref;
    typeof _ref$ === "function" ? use(_ref$, _el$3) : local.ref = _el$3;
    spread(_el$3, mergeProps({
      get ["class"]() {
        return cn(local.fullWidth === false ? "w-auto" : "w-full", local.class);
      }
    }, others), false, true);
    insert(_el$3, createComponent(Switch$1, mergeProps({
      get ["class"]() {
        return !local.label ? "flex items-center" : void 0;
      }
    }, switchA11yProps, {
      get checked() {
        return local.checked;
      },
      get defaultChecked() {
        return local.defaultChecked;
      },
      onChange: (checked) => {
        if (local.error && local.onErrorClear) local.onErrorClear();
        setIsChecked(!!checked);
        local.onValueChange?.(!!checked);
      },
      get disabled() {
        return local.disabled;
      },
      get validationState() {
        return hasError() ? "invalid" : void 0;
      },
      get name() {
        return local.name;
      },
      get value() {
        return local.value ?? "on";
      },
      get children() {
        return createComponent(Show, {
          get when() {
            return local.label;
          },
          get fallback() {
            return [(() => {
              var _el$9 = _tmpl$615();
              insert(_el$9, createComponent(SwitchControl, {
                trackStyle,
                sz,
                iconVariant,
                get controlClass() {
                  return local.controlClass;
                },
                hasError,
                get thumbOffIcon() {
                  return local.thumbOffIcon;
                },
                get thumbOnIcon() {
                  return local.thumbOnIcon;
                }
              }));
              return _el$9;
            })(), createComponent(SwitchHelperError, {
              descMargin: "mt-1.5",
              hasError,
              get helperText() {
                return local.helperText;
              },
              get error() {
                return local.error;
              }
            })];
          },
          get children() {
            var _el$4 = _tmpl$417(), _el$5 = _el$4.firstChild, _el$8 = _el$5.nextSibling;
            insert(_el$5, createComponent(Switch$1.Label, {
              get ["class"]() {
                return cn("text-sm font-medium cursor-pointer select-none", hasError() ? "text-danger-600" : "text-ink-700", local.disabled && "opacity-50");
              },
              get children() {
                return [memo(() => local.label), createComponent(Show, {
                  get when() {
                    return local.required;
                  },
                  get children() {
                    return _tmpl$217();
                  }
                }), createComponent(Show, {
                  get when() {
                    return memo(() => !!!local.required)() && local.optional;
                  },
                  get children() {
                    return _tmpl$317();
                  }
                })];
              }
            }), null);
            insert(_el$5, createComponent(SwitchHelperError, {
              descMargin: "mt-1",
              hasError,
              get helperText() {
                return local.helperText;
              },
              get error() {
                return local.error;
              }
            }), null);
            insert(_el$8, createComponent(SwitchControl, {
              trackStyle,
              sz,
              iconVariant,
              get controlClass() {
                return local.controlClass;
              },
              hasError,
              get thumbOffIcon() {
                return local.thumbOffIcon;
              },
              get thumbOnIcon() {
                return local.thumbOnIcon;
              }
            }));
            return _el$4;
          }
        });
      }
    })));
    return _el$3;
  })();
}
var _tmpl$104 = /* @__PURE__ */ template(`<div class="flex items-center justify-between mb-2">`);
var _tmpl$218 = /* @__PURE__ */ template(`<div role=presentation>`);
var _tmpl$318 = /* @__PURE__ */ template(`<div>`);
var _tmpl$418 = /* @__PURE__ */ template(`<span class="text-danger-500 ml-0.5"aria-hidden=true>*`);
var _tmpl$516 = /* @__PURE__ */ template(`<span class="text-xs text-ink-500">optional`);
var _tmpl$616 = /* @__PURE__ */ template(`<span class="flex flex-col gap-0.5">`);
function RadioGroup(props) {
  const [local, others] = splitProps(props, ["label", "helperText", "error", "bare", "required", "optional", "options", "value", "onValueChange", "onErrorClear", "disabled", "name", "orientation", "size", "compact", "class"]);
  const hasError = () => !!local.error;
  return (() => {
    var _el$ = _tmpl$318();
    insert(_el$, createComponent(RadioGroup$1, mergeProps({
      get value() {
        return local.value;
      },
      onChange: (v) => {
        if (local.error && local.onErrorClear) local.onErrorClear();
        local.onValueChange?.(v);
      },
      get disabled() {
        return local.disabled;
      },
      get validationState() {
        return hasError() ? "invalid" : void 0;
      },
      get name() {
        return local.name;
      },
      get orientation() {
        return local.orientation ?? "vertical";
      }
    }, others, {
      get children() {
        return [createComponent(Show, {
          get when() {
            return local.label;
          },
          get children() {
            var _el$2 = _tmpl$104();
            insert(_el$2, createComponent(RadioGroup$1.Label, {
              get ["class"]() {
                return cn("block text-sm font-medium", hasError() ? "text-danger-600" : "text-ink-700", local.disabled && "opacity-50");
              },
              get children() {
                return [memo(() => local.label), memo(() => memo(() => !!local.required)() && _tmpl$418())];
              }
            }), null);
            insert(_el$2, (() => {
              var _c$ = memo(() => !!(!local.required && local.optional));
              return () => _c$() && _tmpl$516();
            })(), null);
            return _el$2;
          }
        }), (() => {
          var _el$3 = _tmpl$218();
          insert(_el$3, createComponent(For, {
            get each() {
              return local.options;
            },
            children: (opt) => createComponent(RadioGroup$1.Item, {
              get value() {
                return opt.value;
              },
              get ["class"]() {
                return cn(local.compact ? "inline-flex gap-2 cursor-pointer select-none rounded border border-transparent px-1 py-1 transition-colors outline-none" : local.size === "sm" ? "inline-flex gap-2 cursor-pointer select-none rounded-md border border-transparent px-2 py-1.5 transition-colors outline-none" : "inline-flex gap-3 cursor-pointer select-none rounded-lg border border-transparent p-3 transition-colors outline-none", opt.description ? "items-start" : "items-center", "data-[disabled]:cursor-not-allowed", "data-[highlighted]:bg-surface-overlay", hasError() ? "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-danger-500" : "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500");
              },
              get children() {
                return [createComponent(RadioGroup$1.ItemInput, {
                  "class": "sr-only"
                }), createComponent(RadioGroup$1.ItemControl, {
                  get ["class"]() {
                    return cn(
                      "h-4 w-4 shrink-0 rounded-full flex items-center justify-center transition-colors box-border",
                      opt.description && "mt-0.5",
                      // Unselected: gray ring, transparent interior
                      "border-2 border-surface-border bg-transparent",
                      // Selected: primary ring, transparent interior; dot is the ItemIndicator
                      "data-[checked]:border-primary-500 data-[checked]:bg-transparent",
                      "data-[disabled]:border-surface-border"
                    );
                  },
                  get children() {
                    return createComponent(RadioGroup$1.ItemIndicator, {
                      "class": "h-2 w-2 rounded-full bg-primary-500 shrink-0 pointer-events-none"
                    });
                  }
                }), (() => {
                  var _el$6 = _tmpl$616();
                  insert(_el$6, createComponent(RadioGroup$1.ItemLabel, {
                    "class": "text-sm font-medium text-ink-900",
                    get children() {
                      return opt.label;
                    }
                  }), null);
                  insert(_el$6, createComponent(Show, {
                    get when() {
                      return opt.description;
                    },
                    get children() {
                      return createComponent(RadioGroup$1.ItemDescription, {
                        "class": "text-xs text-ink-500",
                        get children() {
                          return opt.description;
                        }
                      });
                    }
                  }), null);
                  return _el$6;
                })()];
              }
            })
          }));
          effect(() => className(_el$3, cn("flex", local.compact ? "gap-0" : local.size === "sm" ? "gap-1" : "gap-3", local.orientation === "horizontal" ? "flex-row flex-wrap" : "flex-col", local.disabled && "opacity-50 pointer-events-none")));
          return _el$3;
        })(), createComponent(Show, {
          get when() {
            return memo(() => !!local.helperText)() && !hasError();
          },
          get children() {
            return createComponent(RadioGroup$1.Description, {
              "class": "mt-2 text-sm text-ink-500",
              get children() {
                return local.helperText;
              }
            });
          }
        }), createComponent(Show, {
          get when() {
            return hasError();
          },
          get children() {
            return createComponent(RadioGroup$1.ErrorMessage, {
              "class": "mt-2 text-sm text-danger-600",
              get children() {
                return local.error;
              }
            });
          }
        })];
      }
    })));
    effect(() => className(_el$, cn("w-full", local.class)));
    return _el$;
  })();
}
var _tmpl$105 = /* @__PURE__ */ template(`<div class="flex items-center justify-between mb-1.5">`);
var _tmpl$219 = /* @__PURE__ */ template(`<div>`);
var _tmpl$319 = /* @__PURE__ */ template(`<span>`);
var _tmpl$419 = /* @__PURE__ */ template(`<span class="text-danger-500 ml-0.5"aria-hidden=true>*`);
var _tmpl$517 = /* @__PURE__ */ template(`<span class="text-xs text-ink-500">`);
function NumberField(props) {
  const [local, others] = splitProps(props, ["label", "error", "helperText", "bare", "required", "optional", "value", "onValueChange", "onErrorClear", "minValue", "maxValue", "step", "disabled", "placeholder", "size", "showStepper", "stepperVariant", "class", "ref"]);
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
  return (() => {
    var _el$ = _tmpl$219();
    insert(_el$, createComponent(NumberField$1, mergeProps({
      get rawValue() {
        return local.value;
      },
      onRawValueChange: handleRawValueChange,
      get minValue() {
        return local.minValue;
      },
      get maxValue() {
        return local.maxValue;
      },
      get step() {
        return local.step;
      },
      get disabled() {
        return local.disabled;
      },
      get validationState() {
        return hasError() ? "invalid" : void 0;
      }
    }, others, {
      get children() {
        return [createComponent(Show, {
          get when() {
            return memo(() => !!(!local.bare && local.label))() && !showInline();
          },
          get children() {
            var _el$2 = _tmpl$105();
            insert(_el$2, createComponent(NumberField$1.Label, {
              get ["class"]() {
                return cn("block text-sm font-medium", hasError() ? "text-danger-600" : "text-ink-700");
              },
              get children() {
                return [memo(() => local.label), memo(() => memo(() => !!local.required)() && _tmpl$419())];
              }
            }), null);
            insert(_el$2, (() => {
              var _c$ = memo(() => !!(local.label && !local.required && local.optional));
              return () => _c$() && (() => {
                var _el$8 = _tmpl$517();
                insert(_el$8, () => zh() ? "\u9009\u586B" : "optional");
                return _el$8;
              })();
            })(), null);
            return _el$2;
          }
        }), createComponent(Show, {
          get when() {
            return local.showStepper;
          },
          get fallback() {
            return createComponent(NumberField$1.Input, {
              ref(r$) {
                var _ref$2 = local.ref;
                typeof _ref$2 === "function" ? _ref$2(r$) : local.ref = r$;
              },
              get placeholder() {
                return local.placeholder;
              },
              get ["class"]() {
                return cn("w-full rounded-lg transition-all outline-none border text-ink-900 placeholder:text-ink-400 bg-surface-raised", sc().h, sc().py, sc().text, sc().pl, sc().pr, hasError() ? "border-danger-500 focus:ring-2 focus:ring-inset focus:ring-danger-500 focus:border-transparent" : "border-surface-border focus:ring-2 focus:ring-inset focus:ring-primary-500 focus:border-transparent", "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed");
              }
            });
          },
          get children() {
            var _el$3 = _tmpl$219();
            insert(_el$3, createComponent(Show, {
              get when() {
                return memo(() => effectiveStepperVariant() === "inlineLabel")() && local.label;
              },
              get children() {
                var _el$4 = _tmpl$219();
                insert(_el$4, () => local.label);
                effect(() => className(_el$4, cn("flex-1 min-w-0 flex items-center truncate text-ink-700", sc().text, sc().pl, "pr-4", sc().h)));
                return _el$4;
              }
            }), null);
            insert(_el$3, createComponent(NumberField$1.DecrementTrigger, {
              get ["class"]() {
                return cn("flex-none flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50 rounded-md group", stepperButtonW(), "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed");
              },
              get ["aria-label"]() {
                return zh() ? "\u51CF\u5C11" : "Decrease";
              },
              get children() {
                var _el$5 = _tmpl$319();
                insert(_el$5, () => icons.minus({
                  class: stepperIconClass(),
                  "aria-hidden": "true"
                }));
                effect(() => className(_el$5, cn("flex items-center justify-center rounded-md text-ink-600", stepperIconButtonBox(), !local.disabled && "group-hover:bg-surface-overlay")));
                return _el$5;
              }
            }), null);
            insert(_el$3, createComponent(NumberField$1.Input, {
              ref(r$) {
                var _ref$ = local.ref;
                typeof _ref$ === "function" ? _ref$(r$) : local.ref = r$;
              },
              get placeholder() {
                return local.placeholder;
              },
              get ["class"]() {
                return cn(effectiveStepperVariant() === "inlineLabel" ? "flex-none w-14 min-w-0 bg-transparent outline-none text-center tabular-nums" : "flex-1 min-w-0 bg-transparent outline-none text-center tabular-nums", sc().h, sc().py, sc().text, "px-2 text-ink-900 placeholder:text-ink-400", "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed");
              },
              get ["aria-label"]() {
                return local.label;
              }
            }), null);
            insert(_el$3, createComponent(NumberField$1.IncrementTrigger, {
              get ["class"]() {
                return cn("flex-none flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50 rounded-md group", stepperButtonW(), "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed");
              },
              get ["aria-label"]() {
                return zh() ? "\u589E\u52A0" : "Increase";
              },
              get children() {
                var _el$6 = _tmpl$319();
                insert(_el$6, () => icons.plus({
                  class: stepperIconClass(),
                  "aria-hidden": "true"
                }));
                effect(() => className(_el$6, cn("flex items-center justify-center rounded-md text-ink-600", stepperIconButtonBox(), !local.disabled && "group-hover:bg-surface-overlay")));
                return _el$6;
              }
            }), null);
            effect(() => className(_el$3, cn("relative flex items-stretch gap-1 px-1 overflow-hidden rounded-lg border transition-all", local.disabled ? "bg-surface-dim" : "bg-surface-raised", hasError() ? "border-danger-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-danger-500" : "border-surface-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500")));
            return _el$3;
          }
        }), createComponent(Show, {
          get when() {
            return memo(() => !!(!local.bare && !hasError()))() && local.helperText;
          },
          get children() {
            return createComponent(NumberField$1.Description, {
              "class": "mt-2 text-sm text-ink-500",
              get children() {
                return local.helperText;
              }
            });
          }
        }), createComponent(Show, {
          get when() {
            return memo(() => !!!local.bare)() && hasError();
          },
          get children() {
            return createComponent(NumberField$1.ErrorMessage, {
              "class": "mt-2 text-sm text-danger-600",
              get children() {
                return local.error;
              }
            });
          }
        })];
      }
    })));
    effect(() => className(_el$, cn("w-full", local.class)));
    return _el$;
  })();
}
var _tmpl$106 = /* @__PURE__ */ template(`<div class=w-full><input type=text inputmode=numeric autocomplete=one-time-code pattern=[0-9]*>`);
var _tmpl$220 = /* @__PURE__ */ template(`<div class="mb-1.5 flex items-center justify-between gap-2"><label>`);
var _tmpl$320 = /* @__PURE__ */ template(`<span class="text-danger-500 ml-0.5"aria-hidden=true>*`);
var _tmpl$420 = /* @__PURE__ */ template(`<span class="text-xs text-ink-500">`);
var _tmpl$518 = /* @__PURE__ */ template(`<p>`);
var _tmpl$617 = /* @__PURE__ */ template(`<div><div class="flex gap-2 justify-center"role=group>`);
var _tmpl$714 = /* @__PURE__ */ template(`<div class="mb-2 flex items-center justify-between gap-2"><label>`);
var _tmpl$813 = /* @__PURE__ */ template(`<input type=text inputmode=numeric maxlength=1>`);
function CodeInput(props) {
  const variant = () => props.variant ?? "single";
  if (variant() === "digits") {
    return createComponent(CodeInputDigits, props);
  }
  return createComponent(CodeInputSingle, props);
}
function CodeInputSingle(props) {
  const [local, others] = splitProps(props, ["variant", "label", "error", "helperText", "bare", "required", "optional", "length", "value", "onValueChange", "onErrorClear", "class", "id", "onInput", "disabled", "size"]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const length = () => local.length ?? 6;
  const generatedId = createUniqueId();
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
  return (() => {
    var _el$ = _tmpl$106(), _el$2 = _el$.firstChild;
    insert(_el$, (() => {
      var _c$ = memo(() => !!(!local.bare && local.label));
      return () => _c$() && (() => {
        var _el$3 = _tmpl$220(), _el$4 = _el$3.firstChild;
        insert(_el$4, () => local.label, null);
        insert(_el$4, (() => {
          var _c$3 = memo(() => !!local.required);
          return () => _c$3() && _tmpl$320();
        })(), null);
        insert(_el$3, (() => {
          var _c$4 = memo(() => !!(!local.required && local.optional));
          return () => _c$4() && (() => {
            var _el$6 = _tmpl$420();
            insert(_el$6, () => zh() ? "\u9009\u586B" : "optional");
            return _el$6;
          })();
        })(), null);
        effect((_p$) => {
          var _v$ = inputId(), _v$2 = cn("block text-sm font-medium", hasError() ? "text-danger-600" : "text-ink-700");
          _v$ !== _p$.e && setAttribute(_el$4, "for", _p$.e = _v$);
          _v$2 !== _p$.t && className(_el$4, _p$.t = _v$2);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$3;
      })();
    })(), _el$2);
    _el$2.$$input = handleInput;
    spread(_el$2, mergeProps({
      get id() {
        return inputId();
      },
      get maxLength() {
        return length();
      },
      get value() {
        return local.value;
      },
      get disabled() {
        return local.disabled;
      },
      get ["aria-invalid"]() {
        return hasError() ? "true" : void 0;
      },
      get ["aria-describedby"]() {
        return describedBy();
      },
      get ["class"]() {
        return cn("w-full px-4 py-3 rounded-lg transition-all outline-none text-center text-xl tracking-[0.25em] font-mono", "text-ink-900 placeholder:text-ink-400 placeholder:tracking-normal", "bg-surface-raised border", hasError() ? "border-danger-500 focus:ring-2 focus:ring-inset focus:ring-danger-500 focus:border-transparent" : "border-surface-border focus:ring-2 focus:ring-inset focus:ring-primary-500 focus:border-transparent", "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed", local.class);
      }
    }, others), false, false);
    insert(_el$, (() => {
      var _c$2 = memo(() => !!(local.error || local.helperText));
      return () => _c$2() && (() => {
        var _el$7 = _tmpl$518();
        insert(_el$7, () => local.error || local.helperText);
        effect((_p$) => {
          var _v$3 = msgId(), _v$4 = local.error ? "alert" : void 0, _v$5 = cn("mt-2 text-sm", hasError() ? "text-danger-600" : "text-ink-500");
          _v$3 !== _p$.e && setAttribute(_el$7, "id", _p$.e = _v$3);
          _v$4 !== _p$.t && setAttribute(_el$7, "role", _p$.t = _v$4);
          _v$5 !== _p$.a && className(_el$7, _p$.a = _v$5);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        });
        return _el$7;
      })();
    })(), null);
    return _el$;
  })();
}
function CodeInputDigits(props) {
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const length = () => props.length ?? 6;
  const inputRefs = [];
  createEffect(on(length, (l) => {
    inputRefs.length = l;
  }));
  const emit = (next) => {
    if (props.error && props.onErrorClear) props.onErrorClear();
    props.onValueChange?.(next);
  };
  createEffect(() => {
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
    requestAnimationFrame(() => inputRefs[Math.min(index + rest.length, length() - 1)]?.focus());
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
    requestAnimationFrame(() => inputRefs[Math.min(pasted.length, length() - 1)]?.focus());
  };
  const generatedId = createUniqueId();
  const firstId = () => props.id ?? `code-digits-${generatedId}`;
  const hasError = () => !!props.error;
  return (() => {
    var _el$8 = _tmpl$617(), _el$9 = _el$8.firstChild;
    insert(_el$8, (() => {
      var _c$5 = memo(() => !!(!props.bare && props.label));
      return () => _c$5() && (() => {
        var _el$0 = _tmpl$714(), _el$1 = _el$0.firstChild;
        insert(_el$1, () => props.label, null);
        insert(_el$1, (() => {
          var _c$7 = memo(() => !!props.required);
          return () => _c$7() && _tmpl$320();
        })(), null);
        insert(_el$0, (() => {
          var _c$8 = memo(() => !!(!props.required && props.optional));
          return () => _c$8() && (() => {
            var _el$11 = _tmpl$420();
            insert(_el$11, () => zh() ? "\u9009\u586B" : "optional");
            return _el$11;
          })();
        })(), null);
        effect((_p$) => {
          var _v$8 = firstId(), _v$9 = cn("block text-sm font-medium", hasError() ? "text-danger-600" : "text-ink-700");
          _v$8 !== _p$.e && setAttribute(_el$1, "for", _p$.e = _v$8);
          _v$9 !== _p$.t && className(_el$1, _p$.t = _v$9);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$0;
      })();
    })(), _el$9);
    insert(_el$9, () => Array.from({
      length: length()
    }, (_, i) => (() => {
      var _el$12 = _tmpl$813();
      _el$12.addEventListener("paste", onPaste);
      _el$12.$$keydown = (e) => onKeyDown(i, e);
      _el$12.$$input = (e) => onInput(i, e);
      var _ref$ = i === 0 ? mergeRefs((el) => inputRefs[i] = el, props.ref) : (el) => inputRefs[i] = el;
      typeof _ref$ === "function" && use(_ref$, _el$12);
      setAttribute(_el$12, "autocomplete", i === 0 ? "one-time-code" : "off");
      effect((_p$) => {
        var _v$0 = i === 0 ? firstId() : void 0, _v$1 = props.disabled, _v$10 = cn("w-11 h-12 rounded-lg border text-center text-xl font-semibold font-mono tabular-nums outline-none transition-colors", "text-ink-900 bg-surface-raised", hasError() ? "border-danger-500 focus:ring-2 focus:ring-inset focus:ring-danger-500 focus:border-transparent" : "border-surface-border focus:ring-2 focus:ring-inset focus:ring-primary-500 focus:border-transparent", "disabled:bg-surface-dim disabled:text-ink-500 disabled:cursor-not-allowed"), _v$11 = zh() ? `\u7B2C ${i + 1} \u4F4D` : `Digit ${i + 1}`, _v$12 = hasError() ? "true" : void 0;
        _v$0 !== _p$.e && setAttribute(_el$12, "id", _p$.e = _v$0);
        _v$1 !== _p$.t && (_el$12.disabled = _p$.t = _v$1);
        _v$10 !== _p$.a && className(_el$12, _p$.a = _v$10);
        _v$11 !== _p$.o && setAttribute(_el$12, "aria-label", _p$.o = _v$11);
        _v$12 !== _p$.i && setAttribute(_el$12, "aria-invalid", _p$.i = _v$12);
        return _p$;
      }, {
        e: void 0,
        t: void 0,
        a: void 0,
        o: void 0,
        i: void 0
      });
      effect(() => _el$12.value = (props.value ?? "")[i] ?? "");
      return _el$12;
    })()));
    insert(_el$8, (() => {
      var _c$6 = memo(() => !!(props.error || props.helperText));
      return () => _c$6() && (() => {
        var _el$13 = _tmpl$518();
        insert(_el$13, () => props.error || props.helperText);
        effect((_p$) => {
          var _v$13 = cn("mt-1.5 text-sm", hasError() ? "text-danger-600" : "text-ink-500"), _v$14 = props.error ? "alert" : void 0;
          _v$13 !== _p$.e && className(_el$13, _p$.e = _v$13);
          _v$14 !== _p$.t && setAttribute(_el$13, "role", _p$.t = _v$14);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$13;
      })();
    })(), null);
    effect((_p$) => {
      var _v$6 = cn("w-full", props.class), _v$7 = zh() ? "\u9A8C\u8BC1\u7801\u6570\u5B57" : "Verification code digits";
      _v$6 !== _p$.e && className(_el$8, _p$.e = _v$6);
      _v$7 !== _p$.t && setAttribute(_el$9, "aria-label", _p$.t = _v$7);
      return _p$;
    }, {
      e: void 0,
      t: void 0
    });
    return _el$8;
  })();
}
delegateEvents(["input", "keydown"]);
var _tmpl$107 = /* @__PURE__ */ template(`<div class="flex items-center justify-between gap-2 min-w-0"><div class="flex items-center gap-1 min-w-0">`);
var _tmpl$221 = /* @__PURE__ */ template(`<div class="shrink-0 text-ink-500 [&amp;>svg]:h-4 [&amp;>svg]:w-4">`);
var _tmpl$321 = /* @__PURE__ */ template(`<div class="relative min-h-[1.25rem] w-full min-w-0 pt-0.5 text-xs text-ink-500">`);
var _tmpl$421 = /* @__PURE__ */ template(`<div><div>`);
var _tmpl$519 = /* @__PURE__ */ template(`<span class="text-danger-500 ml-0.5"aria-hidden=true>*`);
var _tmpl$618 = /* @__PURE__ */ template(`<span class="text-xs text-ink-500">optional`);
var _tmpl$715 = /* @__PURE__ */ template(`<span class="text-xs text-ink-500 mb-2">optional`);
var _tmpl$814 = /* @__PURE__ */ template(`<span class="absolute -translate-x-1/2">`);
function Slider(props) {
  const [local, others] = splitProps(props, ["label", "helperText", "error", "bare", "required", "optional", "value", "defaultValue", "onValueChange", "onValueChangeEnd", "onErrorClear", "minValue", "maxValue", "step", "minStepsBetweenThumbs", "getValueLabel", "orientation", "startContent", "endContent", "size", "color", "marks", "disabled", "name", "class"]);
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
  const thumbCenterStyle = () => isHorizontal() ? {
    top: "50%",
    transform: "translate(-50%, -50%)"
  } : {
    left: "50%",
    transform: "translate(-50%, 50%)"
  };
  return createComponent(Slider$1, {
    get value() {
      return local.value;
    },
    get defaultValue() {
      return local.defaultValue ?? [50];
    },
    onChange: (v) => {
      if (local.error && local.onErrorClear) local.onErrorClear();
      local.onValueChange?.(v);
    },
    get onChangeEnd() {
      return local.onValueChangeEnd;
    },
    get minValue() {
      return local.minValue ?? 0;
    },
    get maxValue() {
      return local.maxValue ?? 100;
    },
    get step() {
      return local.step ?? 1;
    },
    get minStepsBetweenThumbs() {
      return local.minStepsBetweenThumbs;
    },
    get getValueLabel() {
      return local.getValueLabel;
    },
    get orientation() {
      return orientation();
    },
    get disabled() {
      return local.disabled;
    },
    get name() {
      return local.name;
    },
    get validationState() {
      return hasError() ? "invalid" : void 0;
    },
    get ["class"]() {
      return cn("group/slider flex flex-col gap-1.5", isHorizontal() ? "w-full" : "h-full w-fit min-h-0 flex-col items-center", local.disabled && "is-disabled", local.class);
    },
    get children() {
      return [createComponent(Show, {
        get when() {
          return memo(() => !!local.label)() && isHorizontal();
        },
        get children() {
          var _el$ = _tmpl$107(), _el$2 = _el$.firstChild;
          insert(_el$2, createComponent(Slider$1.Label, {
            get ["class"]() {
              return cn("text-sm font-medium text-ink-700 shrink-0", hasError() && "text-danger-600");
            },
            get children() {
              return [memo(() => local.label), memo(() => memo(() => !!local.required)() && _tmpl$519())];
            }
          }), null);
          insert(_el$2, (() => {
            var _c$ = memo(() => !!(!local.required && local.optional));
            return () => _c$() && _tmpl$618();
          })(), null);
          insert(_el$, createComponent(Slider$1.ValueLabel, {
            "class": "text-sm text-ink-500 shrink-0 min-w-[2.5rem] text-right tabular-nums"
          }), null);
          return _el$;
        }
      }), createComponent(Show, {
        get when() {
          return memo(() => !!local.label)() && !isHorizontal();
        },
        get children() {
          return [createComponent(Slider$1.Label, {
            get ["class"]() {
              return cn("text-sm font-medium text-ink-700 mb-2", hasError() && "text-danger-600");
            },
            get children() {
              return [memo(() => local.label), memo(() => memo(() => !!local.required)() && _tmpl$519())];
            }
          }), memo(() => memo(() => !!(!local.required && local.optional))() && _tmpl$715())];
        }
      }), (() => {
        var _el$3 = _tmpl$421(), _el$5 = _el$3.firstChild;
        insert(_el$3, createComponent(Show, {
          get when() {
            return local.startContent;
          },
          get children() {
            var _el$4 = _tmpl$221();
            insert(_el$4, () => local.startContent);
            return _el$4;
          }
        }), _el$5);
        insert(_el$5, createComponent(Slider$1.Track, {
          get ["class"]() {
            return cn("relative shrink-0 overflow-visible rounded-full transition-colors", trackBgClass(), "group-[.is-disabled]/slider:bg-surface-dim", trackSizeClass(), isHorizontal() ? "w-full min-w-0" : "h-full min-h-0");
          },
          get children() {
            return [createComponent(Slider$1.Fill, {
              get ["class"]() {
                return cn("absolute rounded-full transition-colors", isHorizontal() ? "inset-y-0 left-0" : "inset-x-0", fillThumbClass(), "group-[.is-disabled]/slider:bg-surface-border");
              }
            }), createComponent(For, {
              get each() {
                return Array.from({
                  length: thumbCount()
                });
              },
              children: () => createComponent(Slider$1.Thumb, {
                get style() {
                  return thumbCenterStyle();
                },
                get ["class"]() {
                  return cn("relative z-10 block rounded-full border-0 outline-none transition cursor-pointer touch-none", thumbSizeClass(), fillThumbClass(), "shadow-[0_1px_3px_rgba(0,0,0,0.12)]", "ring-0 hover:ring-0 focus-visible:ring-2", focusRingClass(), "group-[.is-disabled]/slider:bg-surface-border group-[.is-disabled]/slider:group-[.is-disabled]/slider:shadow-none");
                },
                get children() {
                  return createComponent(Slider$1.Input, {});
                }
              })
            })];
          }
        }), null);
        insert(_el$5, createComponent(Show, {
          get when() {
            return memo(() => !!(local.marks && local.marks.length > 0))() && isHorizontal();
          },
          get children() {
            var _el$6 = _tmpl$321();
            insert(_el$6, createComponent(For, {
              get each() {
                return local.marks;
              },
              children: (m) => {
                const min = local.minValue ?? 0;
                const max = local.maxValue ?? 100;
                const range = max - min;
                const pct = range === 0 ? 0 : (m - min) / range * 100;
                return (() => {
                  var _el$10 = _tmpl$814();
                  setStyleProperty(_el$10, "left", `${pct}%`);
                  insert(_el$10, m);
                  return _el$10;
                })();
              }
            }));
            return _el$6;
          }
        }), null);
        insert(_el$3, createComponent(Show, {
          get when() {
            return local.endContent;
          },
          get children() {
            var _el$7 = _tmpl$221();
            insert(_el$7, () => local.endContent);
            return _el$7;
          }
        }), null);
        effect((_p$) => {
          var _v$ = cn("flex min-w-0", isHorizontal() ? "w-full flex-row items-center gap-2" : "h-full min-h-0 w-fit flex-col items-center gap-2"), _v$2 = cn("flex min-w-0 flex-col gap-1", isHorizontal() ? "flex-1" : "min-h-0 flex-1");
          _v$ !== _p$.e && className(_el$3, _p$.e = _v$);
          _v$2 !== _p$.t && className(_el$5, _p$.t = _v$2);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$3;
      })(), createComponent(Show, {
        get when() {
          return memo(() => !!local.label)() && !isHorizontal();
        },
        get children() {
          return createComponent(Slider$1.ValueLabel, {
            "class": "text-sm text-ink-500 text-center tabular-nums mt-2"
          });
        }
      }), createComponent(Show, {
        get when() {
          return local.helperText;
        },
        get children() {
          return createComponent(Slider$1.Description, {
            "class": "mt-1 text-xs text-ink-500",
            get children() {
              return local.helperText;
            }
          });
        }
      }), createComponent(Show, {
        get when() {
          return local.error;
        },
        get children() {
          return createComponent(Slider$1.ErrorMessage, {
            "class": "mt-1 text-xs text-danger-600",
            get children() {
              return local.error;
            }
          });
        }
      })];
    }
  });
}
var _tmpl$108 = /* @__PURE__ */ template(`<div>`);
var _tmpl$222 = /* @__PURE__ */ template(`<div class="h-full w-full flex gap-0.5">`);
var _tmpl$322 = /* @__PURE__ */ template(`<div class=torchui-progress-stripes aria-hidden=true>`);
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
  none: {
    left: "rounded-l-none",
    right: "rounded-r-none"
  },
  sm: {
    left: "rounded-l-sm",
    right: "rounded-r-sm"
  },
  md: {
    left: "rounded-l-md",
    right: "rounded-r-md"
  },
  lg: {
    left: "rounded-l-lg",
    right: "rounded-r-lg"
  },
  full: {
    left: "rounded-l-full",
    right: "rounded-r-full"
  }
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
    return 0;
  }
  return Math.min(100, Math.max(0, (value - min) / (max - min) * 100));
}
function Progress(props) {
  const [local] = splitProps(props, ["value", "minValue", "maxValue", "label", "valueLabel", "size", "color", "radius", "formatOptions", "showValueLabel", "isIndeterminate", "isStriped", "disabled", "disableAnimation", "segments", "durationMs", "aria-label", "aria-labelledby", "aria-describedby", "aria-valuetext", "aria-valuenow", "aria-valuemin", "aria-valuemax", "classNames", "class", "trackClass", "fillClass"]);
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
  createEffect(() => {
  });
  const formatter = createMemo(() => new Intl.NumberFormat(void 0, local.formatOptions ?? {
    style: "percent",
    maximumFractionDigits: 0
  }));
  const valueDisplay = () => {
    if (local.valueLabel != null) return local.valueLabel;
    if (!showValue()) return null;
    return formatter().format(percent() / 100);
  };
  const segmentIndexes = createMemo(() => segments() != null ? Array.from({
    length: segments()
  }, (_, i) => i) : []);
  const classNames = () => local.classNames ?? {};
  onMount(ensureProgressStyles);
  return createComponent(Progress$1, {
    get value() {
      return memo(() => !!(isIndeterminate() || durationMs() != null))() ? void 0 : rawValue();
    },
    get minValue() {
      return min();
    },
    get maxValue() {
      return max();
    },
    get indeterminate() {
      return isIndeterminate() || durationMs() != null;
    },
    getValueLabel: ({
      value,
      min: min2,
      max: max2
    }) => {
      if (local["aria-valuetext"]) return local["aria-valuetext"];
      const pct = getPercent(value, min2, max2);
      return formatter().format(pct / 100);
    },
    get ["class"]() {
      return cn("w-full", local.class, classNames().base);
    },
    get ["aria-label"]() {
      return ariaLabel();
    },
    get ["aria-labelledby"]() {
      return local["aria-labelledby"];
    },
    get ["aria-describedby"]() {
      return local["aria-describedby"];
    },
    get ["aria-disabled"]() {
      return local.disabled ? "true" : void 0;
    },
    get children() {
      return [createComponent(Show, {
        get when() {
          return local.label != null || valueDisplay() != null;
        },
        get children() {
          var _el$ = _tmpl$108();
          insert(_el$, createComponent(Show, {
            get when() {
              return local.label != null;
            },
            get children() {
              return createComponent(Progress$1.Label, {
                get ["class"]() {
                  return cn("text-sm font-medium text-ink-700", classNames().label);
                },
                get children() {
                  return local.label;
                }
              });
            }
          }), null);
          insert(_el$, createComponent(Show, {
            get when() {
              return valueDisplay() != null;
            },
            get children() {
              return createComponent(Progress$1.ValueLabel, {
                get ["class"]() {
                  return cn("text-sm text-ink-600", classNames().value);
                },
                get children() {
                  return valueDisplay();
                }
              });
            }
          }), null);
          effect(() => className(_el$, cn("flex items-center justify-between gap-2 mb-1", classNames().labelWrapper)));
          return _el$;
        }
      }), createComponent(Progress$1.Track, {
        get ["class"]() {
          return cn("w-full overflow-hidden bg-surface-dim", SIZE_CLASSES[size()], RADIUS_CLASSES[radius()], local.trackClass, classNames().track);
        },
        get children() {
          return memo(() => segments() != null)() ? (() => {
            var _el$2 = _tmpl$222();
            insert(_el$2, createComponent(For, {
              get each() {
                return segmentIndexes();
              },
              children: (i) => {
                const count = segments();
                const filled = () => percent() / 100 * count > i;
                const segRadius = () => i === 0 ? EDGE_RADIUS_CLASSES[radius()].left : i === count - 1 ? EDGE_RADIUS_CLASSES[radius()].right : "rounded-none";
                return (() => {
                  var _el$3 = _tmpl$108();
                  effect(() => className(_el$3, cn("h-full flex-1 transition-colors duration-200", segRadius(), filled() ? local.fillClass ?? COLOR_CLASSES[color()] : "bg-surface-dim", classNames().indicator)));
                  return _el$3;
                })();
              }
            }));
            return _el$2;
          })() : createComponent(Progress$1.Fill, {
            get ["class"]() {
              return cn("h-full transition-[width] ease-linear relative", RADIUS_CLASSES[radius()], !durationMs() && !isIndeterminate() && !local.disableAnimation && "duration-200", local.fillClass ?? COLOR_CLASSES[color()], classNames().indicator);
            },
            get style() {
              return memo(() => !!isIndeterminate())() ? {
                width: "25%",
                animation: local.disableAnimation ? void 0 : `${INDETERMINATE_NAME} 1.5s ease-in-out infinite`
              } : memo(() => durationMs() != null)() ? {
                width: "0%",
                animation: `${ANIMATION_NAME} ${durationMs()}ms linear forwards`
              } : {
                width: "var(--kb-progress-fill-width)"
              };
            },
            get children() {
              return createComponent(Show, {
                get when() {
                  return local.isStriped;
                },
                get children() {
                  return _tmpl$322();
                }
              });
            }
          });
        }
      })];
    }
  });
}
var _tmpl$109 = /* @__PURE__ */ template(`<span>`);
var _tmpl$223 = /* @__PURE__ */ template(`<div>`);
var _tmpl$323 = /* @__PURE__ */ template(`<div><div>`);
var _tmpl$422 = /* @__PURE__ */ template(`<div class=contents><div>`);
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
  const [local, others] = splitProps(props, ["open", "onOpenChange", "onClose", "size", "overlay", "closeOnOverlayClick", "overlayClass", "overlayDim", "overlayBlur", "showCloseButton", "overlayAnimation", "panelAnimation", "animationDuration", "animationExitDuration", "onCloseComplete", "onCloseAutoFocus", "class", "children", "header", "footer", "ref"]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  onMount(ensureDialogStyles);
  const duration = () => local.animationDuration ?? DEFAULT_DURATION_MS;
  const exitDuration = () => local.animationExitDuration ?? Math.round((local.animationDuration ?? DEFAULT_DURATION_MS) * 0.8);
  const cssVars = () => ({
    "--dialog-duration": `${duration()}ms`,
    "--dialog-exit-duration": `${exitDuration()}ms`
  });
  const [effectiveSize, setEffectiveSize] = createSignal(local.size ?? "md");
  createEffect(on(() => [local.open, local.size], ([open, size]) => {
    if (open) setEffectiveSize(size ?? "md");
  }));
  createEffect(on(() => local.open, (isOpen, wasOpen) => {
    if (wasOpen === true && !isOpen) {
      const t = setTimeout(() => local.onCloseComplete?.(), exitDuration());
      onCleanup(() => clearTimeout(t));
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
      const focusable = el.querySelector('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (focusable) focusable.focus({
        preventScroll: true
      });
      else el.focus({
        preventScroll: true
      });
    }
    if (typeof local.ref === "function") local.ref(el);
  };
  const onCloseAutoFocus = (e) => {
    local.onCloseAutoFocus?.(e);
    if (e.defaultPrevented) return;
    const target = previouslyFocusedElement;
    previouslyFocusedElement = null;
    if (target?.isConnected) target.focus({
      preventScroll: true
    });
  };
  return createComponent(Dialog$1, {
    get open() {
      return local.open;
    },
    onOpenChange: (isOpen) => {
      local.onOpenChange?.(isOpen);
      if (!isOpen) local.onClose?.();
    },
    modal: true,
    get children() {
      return createComponent(Dialog$1.Portal, {
        get children() {
          var _el$ = _tmpl$422(), _el$2 = _el$.firstChild;
          insert(_el$, createComponent(Show, {
            get when() {
              return showOverlay();
            },
            get children() {
              return createComponent(Dialog$1.Overlay, {
                get ["class"]() {
                  return cn("fixed inset-0 z-[60]", overlayAnimation() !== "none" && "torchui-dialog-overlay", local.overlayDim !== false && "bg-black/30 dark:bg-black/50", local.overlayBlur !== false && "backdrop-blur-md dark:backdrop-blur-sm", local.overlayClass);
                }
              });
            }
          }), _el$2);
          insert(_el$2, createComponent(Dialog$1.Content, mergeProps({
            ref: mergedContentRef,
            get ["class"]() {
              return cn(panelAnimation() !== "none" && "torchui-dialog-content", isFull() && "h-full min-h-0 flex flex-col");
            },
            get ["data-animation"]() {
              return memo(() => panelAnimation() !== "none")() ? panelAnimation() : void 0;
            },
            onInteractOutside: (e) => {
              if (!closeOnOverlay()) e.preventDefault();
            },
            onCloseAutoFocus
          }, others, {
            get children() {
              var _el$3 = _tmpl$323(), _el$6 = _el$3.firstChild;
              insert(_el$3, createComponent(Show, {
                get when() {
                  return hasHeaderRow();
                },
                get children() {
                  var _el$4 = _tmpl$223();
                  insert(_el$4, createComponent(Show, {
                    get when() {
                      return local.header;
                    },
                    get children() {
                      return createComponent(Dialog$1.Title, {
                        as: "div",
                        "class": "min-w-0 flex-1",
                        get children() {
                          return local.header;
                        }
                      });
                    }
                  }), null);
                  insert(_el$4, createComponent(Show, {
                    get when() {
                      return !local.header;
                    },
                    get children() {
                      return _tmpl$109();
                    }
                  }), null);
                  insert(_el$4, createComponent(Show, {
                    get when() {
                      return hasCloseRow();
                    },
                    get children() {
                      return createComponent(Dialog$1.CloseButton, {
                        get ["aria-label"]() {
                          return zh() ? "\u5173\u95ED" : "Close";
                        },
                        "class": "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-overlay text-ink-500 hover:bg-surface-dim hover:text-ink-700",
                        get children() {
                          return icons.close({
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          });
                        }
                      });
                    }
                  }), null);
                  effect(() => className(_el$4, cn("flex items-center justify-between gap-4", isFull() ? "shrink-0 border-b border-surface-border px-4 py-3" : "")));
                  return _el$4;
                }
              }), _el$6);
              insert(_el$6, () => local.children);
              insert(_el$3, createComponent(Show, {
                get when() {
                  return local.footer;
                },
                get children() {
                  var _el$7 = _tmpl$223();
                  insert(_el$7, () => local.footer);
                  effect(() => className(_el$7, cn(isFull() ? "shrink-0 border-t border-surface-border px-4 py-4" : "mt-8 border-t border-surface-border pt-5")));
                  return _el$7;
                }
              }), null);
              effect((_p$) => {
                var _v$ = cn(
                  "bg-surface-raised text-ink-900",
                  isFull() ? "h-full min-h-0 flex-1 flex flex-col" : "overflow-y-auto max-h-[90vh] rounded-lg border border-surface-border p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,.2)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,.5)]"
                  // Normal dialog
                ), _v$2 = cn(isFull() ? "flex-1 overflow-y-auto px-4 py-4" : hasHeaderRow() ? "mt-7" : "");
                _v$ !== _p$.e && className(_el$3, _p$.e = _v$);
                _v$2 !== _p$.t && className(_el$6, _p$.t = _v$2);
                return _p$;
              }, {
                e: void 0,
                t: void 0
              });
              return _el$3;
            }
          })));
          effect((_p$) => {
            var _v$3 = cssVars(), _v$4 = cn(
              "fixed z-[70] w-full",
              isFull() ? "inset-0 p-0" : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4",
              // centering for normal dialogs
              !isFull() && sizeClass(),
              local.class
            );
            _p$.e = style(_el$, _v$3, _p$.e);
            _v$4 !== _p$.t && className(_el$2, _p$.t = _v$4);
            return _p$;
          }, {
            e: void 0,
            t: void 0
          });
          return _el$;
        }
      });
    }
  });
}

// src/components/forms/FileUpload.tsx
var _tmpl$114 = /* @__PURE__ */ template(`<div class="mb-1.5 block text-sm font-medium text-ink-700">`);
var _tmpl$224 = /* @__PURE__ */ template(`<ul class="mt-3 space-y-2">`);
var _tmpl$324 = /* @__PURE__ */ template(`<div class="mt-3 flex w-full items-center justify-between gap-2">`);
var _tmpl$423 = /* @__PURE__ */ template(`<p class="mt-2 text-xs text-ink-500">`);
var _tmpl$520 = /* @__PURE__ */ template(`<span class=sr-only>`);
var _tmpl$619 = /* @__PURE__ */ template(`<ul role=alert class="mt-2 flex flex-col gap-0.5 text-sm text-danger-600 dark:text-danger-400">`);
var _tmpl$716 = /* @__PURE__ */ template(`<p class="mt-2 flex items-center gap-1.5 text-sm text-danger-600 dark:text-danger-400">`);
var _tmpl$815 = /* @__PURE__ */ template(`<div>`);
var _tmpl$910 = /* @__PURE__ */ template(`<span class="text-xs text-ink-500">`);
var _tmpl$04 = /* @__PURE__ */ template(`<div class="flex min-h-[140px] flex-col items-center justify-center gap-3 px-4 py-6"><div class="flex flex-col items-center justify-center gap-1 text-center"><span class="text-sm font-medium text-ink-700"></span><span class="text-sm text-ink-500"></span></div><button type=button>`);
var _tmpl$115 = /* @__PURE__ */ template(`<div role=group><input type=file class=sr-only>`);
var _tmpl$1010 = /* @__PURE__ */ template(`<div role=button class="flex min-h-[120px] cursor-pointer flex-col items-center justify-center gap-1 px-4 py-6 text-center outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 rounded-lg"><span class="text-sm font-medium text-ink-700">`);
var _tmpl$116 = /* @__PURE__ */ template(`<span class="text-sm text-ink-500">`);
var _tmpl$123 = /* @__PURE__ */ template(`<span class="min-w-0 flex-1 truncate text-sm font-medium text-ink-900">`);
var _tmpl$133 = /* @__PURE__ */ template(`<span class="shrink-0 text-xs text-ink-500">`);
var _tmpl$142 = /* @__PURE__ */ template(`<div class="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-surface-border bg-surface-raised px-3 py-2"><button type=button class="shrink-0 rounded p-1.5 text-ink-500 hover:bg-surface-overlay hover:text-ink-700 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$152 = /* @__PURE__ */ template(`<div class="flex flex-wrap items-center gap-2"><input type=file class=sr-only><button type=button>`);
var _tmpl$162 = /* @__PURE__ */ template(`<p class="mb-3 text-sm text-ink-500">`);
var _tmpl$172 = /* @__PURE__ */ template(`<ul class=space-y-2>`);
var _tmpl$182 = /* @__PURE__ */ template(`<span class="min-w-0 flex-1 text-sm text-ink-900">`);
var _tmpl$192 = /* @__PURE__ */ template(`<h2 class="text-lg font-semibold text-ink-900">`);
var _tmpl$202 = /* @__PURE__ */ template(`<li class="flex items-center gap-2 rounded-lg border border-surface-border bg-surface-base px-3 py-2"><span class="min-w-0 flex-1 truncate text-sm font-medium text-ink-900"></span><span class="shrink-0 text-xs text-ink-500"></span><span class="shrink-0 text-xs text-ink-500"></span><div class="flex shrink-0 items-center gap-1"><button type=button class="rounded p-1 text-ink-500 hover:bg-surface-overlay hover:text-ink-700 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$2110 = /* @__PURE__ */ template(`<button type=button class="rounded p-1 text-ink-500 hover:bg-surface-overlay hover:text-ink-700 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$225 = /* @__PURE__ */ template(`<li class="flex flex-col gap-1.5 rounded-lg border border-surface-border bg-surface-raised px-3 py-2"><div class="flex items-center gap-2"><span class="min-w-0 flex-1 truncate text-sm font-medium text-ink-900"></span><span class="shrink-0 text-xs text-ink-500"></span><span class="shrink-0 text-xs text-ink-500"></span><div class="flex shrink-0 items-center gap-1"><button type=button class="rounded p-1 text-ink-500 hover:bg-surface-overlay hover:text-ink-700 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$232 = /* @__PURE__ */ template(`<li>`);
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
  if (t === "application/pdf") return icons.fileText({
    class: cls,
    "aria-hidden": "true"
  });
  if (t.startsWith("image/")) return icons.fileImage({
    class: cls,
    "aria-hidden": "true"
  });
  if (t.startsWith("video/")) return icons.filePlay({
    class: cls,
    "aria-hidden": "true"
  });
  if (t === "text/csv" || t.includes("spreadsheet") || t.includes("excel") || SPREADSHEET_EXT.has(ext)) return icons.fileSpreadsheet({
    class: cls,
    "aria-hidden": "true"
  });
  if (t.includes("zip") || t.includes("rar") || t.includes("gzip") || t.includes("compress") || ARCHIVE_EXT.has(ext)) return icons.folderArchive({
    class: cls,
    "aria-hidden": "true"
  });
  if (t.startsWith("text/") || CODE_EXT.has(ext)) return icons.fileCode({
    class: cls,
    "aria-hidden": "true"
  });
  return icons.file({
    class: cls,
    "aria-hidden": "true"
  });
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
    return {
      valid,
      errors
    };
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
  return {
    valid,
    errors
  };
}
function FileUpload(props) {
  const [local, rest] = splitProps(props, ["files", "onAddFiles", "onRemove", "onRetry", "label", "description", "accept", "maxFiles", "maxFileSize", "variant", "error", "onErrorClear", "disabled", "id", "ref", "class", "browseButton", "actions", "multiple", "fileIcon", "fileInline", "labels"]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const l = () => ({
    ...DEFAULT_LABELS,
    ...resolveLocale(void 0, contextLocale) === "zh" ? ZH_LABELS : {},
    ...local.labels
  });
  const uid = createUniqueId();
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
  const [dragDepth, setDragDepth] = createSignal(0);
  const dragOver = () => dragDepth() > 0;
  const [validationErrors, setValidationErrors] = createSignal([]);
  const [viewModalOpen, setViewModalOpen] = createSignal(false);
  const zoneDisabled = () => local.disabled || atLimit();
  const isFileDrag = (e) => Array.from(e.dataTransfer?.types ?? []).includes("Files");
  onMount(() => {
    const reset = () => setDragDepth(0);
    const onWinDragLeave = (e) => {
      if (e.relatedTarget == null) reset();
    };
    window.addEventListener("drop", reset);
    window.addEventListener("dragend", reset);
    window.addEventListener("dragleave", onWinDragLeave);
    document.addEventListener("drop", reset);
    document.addEventListener("dragend", reset);
    onCleanup(() => {
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
    const {
      valid,
      errors
    } = validateFiles(newFiles, local.accept, local.maxFileSize, maxFiles(), local.files.length, l());
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
    const {
      valid,
      errors
    } = validateFiles(newFiles, local.accept, local.maxFileSize, maxFiles(), local.files.length, l());
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
  return (() => {
    var _el$ = _tmpl$815();
    spread(_el$, mergeProps({
      get ["class"]() {
        return cn("w-full", local.class);
      }
    }, rest), false, true);
    insert(_el$, createComponent(Show, {
      get when() {
        return local.label;
      },
      get children() {
        var _el$2 = _tmpl$114();
        insert(_el$2, () => local.label);
        effect(() => setAttribute(_el$2, "id", labelId()));
        return _el$2;
      }
    }), null);
    insert(_el$, (() => {
      var _c$ = memo(() => variant() === "dropzone");
      return () => _c$() && createComponent(Show, {
        get when() {
          return !hideTrigger();
        },
        get children() {
          var _el$9 = _tmpl$115(), _el$0 = _el$9.firstChild;
          _el$9.addEventListener("dragleave", handleDragLeave);
          _el$9.addEventListener("dragenter", handleDragEnter);
          _el$9.addEventListener("dragover", handleDragOver);
          _el$9.addEventListener("drop", handleDrop);
          _el$0.addEventListener("change", handleInputChange);
          var _ref$ = mergeRefs((el) => inputEl = el, local.ref);
          typeof _ref$ === "function" && use(_ref$, _el$0);
          insert(_el$9, createComponent(Show, {
            get when() {
              return local.browseButton;
            },
            get fallback() {
              return (() => {
                var _el$16 = _tmpl$1010(), _el$17 = _el$16.firstChild;
                _el$16.$$keydown = (e) => {
                  if (zoneDisabled()) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    inputEl?.click();
                  }
                };
                _el$16.$$click = () => !zoneDisabled() && inputEl?.click();
                insert(_el$16, () => icons.fileUpload({
                  class: "h-8 w-8 text-ink-400",
                  "aria-hidden": "true"
                }), _el$17);
                insert(_el$17, () => l().dropzonePrompt);
                insert(_el$16, createComponent(Show, {
                  get when() {
                    return limitsText();
                  },
                  get children() {
                    var _el$18 = _tmpl$910();
                    insert(_el$18, limitsText);
                    return _el$18;
                  }
                }), null);
                insert(_el$16, createComponent(Show, {
                  get when() {
                    return memo(() => !!local.description)() && !limitsText();
                  },
                  get children() {
                    var _el$19 = _tmpl$910();
                    insert(_el$19, () => local.description);
                    return _el$19;
                  }
                }), null);
                effect((_p$) => {
                  var _v$13 = zoneDisabled() ? -1 : 0, _v$14 = zoneDisabled() ? "true" : void 0;
                  _v$13 !== _p$.e && setAttribute(_el$16, "tabindex", _p$.e = _v$13);
                  _v$14 !== _p$.t && setAttribute(_el$16, "aria-disabled", _p$.t = _v$14);
                  return _p$;
                }, {
                  e: void 0,
                  t: void 0
                });
                return _el$16;
              })();
            },
            get children() {
              var _el$1 = _tmpl$04(), _el$10 = _el$1.firstChild, _el$11 = _el$10.firstChild, _el$12 = _el$11.nextSibling, _el$15 = _el$10.nextSibling;
              insert(_el$10, () => icons.fileUpload({
                class: "h-10 w-10 text-ink-400",
                "aria-hidden": "true"
              }), _el$11);
              insert(_el$11, () => l().dropzoneDragTitle);
              insert(_el$12, () => l().dropzoneDragSubtitle);
              insert(_el$10, createComponent(Show, {
                get when() {
                  return limitsText();
                },
                get children() {
                  var _el$13 = _tmpl$910();
                  insert(_el$13, limitsText);
                  return _el$13;
                }
              }), null);
              insert(_el$10, createComponent(Show, {
                get when() {
                  return memo(() => !!local.description)() && !limitsText();
                },
                get children() {
                  var _el$14 = _tmpl$910();
                  insert(_el$14, () => local.description);
                  return _el$14;
                }
              }), null);
              _el$15.$$click = () => inputEl?.click();
              insert(_el$15, () => icons.fileUpload({
                class: "h-4 w-4",
                "aria-hidden": "true"
              }), null);
              insert(_el$15, () => l().dropzoneBrowseButton, null);
              effect((_p$) => {
                var _v$ = local.disabled || atLimit(), _v$2 = cn("inline-flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-600 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", (local.disabled || atLimit()) && "opacity-50");
                _v$ !== _p$.e && (_el$15.disabled = _p$.e = _v$);
                _v$2 !== _p$.t && className(_el$15, _p$.t = _v$2);
                return _p$;
              }, {
                e: void 0,
                t: void 0
              });
              return _el$1;
            }
          }), null);
          effect((_p$) => {
            var _v$3 = local.label ? labelId() : void 0, _v$4 = local.label ? void 0 : l().ariaFileUpload, _v$5 = cn("rounded-lg border-2 border-dashed transition-colors", dragOver() ? "border-primary-500 bg-primary-50" : "border-surface-border bg-surface-base/50", (local.disabled || atLimit()) && "pointer-events-none opacity-50"), _v$6 = id(), _v$7 = local.accept, _v$8 = isMultiple(), _v$9 = local.disabled || atLimit(), _v$0 = local.label ? labelId() : void 0, _v$1 = local.label ? void 0 : isMultiple() ? l().ariaChooseFiles : l().ariaChooseFile, _v$10 = describedBy(), _v$11 = hasAnyError() ? "true" : void 0, _v$12 = ariaErrorMessage();
            _v$3 !== _p$.e && setAttribute(_el$9, "aria-labelledby", _p$.e = _v$3);
            _v$4 !== _p$.t && setAttribute(_el$9, "aria-label", _p$.t = _v$4);
            _v$5 !== _p$.a && className(_el$9, _p$.a = _v$5);
            _v$6 !== _p$.o && setAttribute(_el$0, "id", _p$.o = _v$6);
            _v$7 !== _p$.i && setAttribute(_el$0, "accept", _p$.i = _v$7);
            _v$8 !== _p$.n && (_el$0.multiple = _p$.n = _v$8);
            _v$9 !== _p$.s && (_el$0.disabled = _p$.s = _v$9);
            _v$0 !== _p$.h && setAttribute(_el$0, "aria-labelledby", _p$.h = _v$0);
            _v$1 !== _p$.r && setAttribute(_el$0, "aria-label", _p$.r = _v$1);
            _v$10 !== _p$.d && setAttribute(_el$0, "aria-describedby", _p$.d = _v$10);
            _v$11 !== _p$.l && setAttribute(_el$0, "aria-invalid", _p$.l = _v$11);
            _v$12 !== _p$.u && setAttribute(_el$0, "aria-errormessage", _p$.u = _v$12);
            return _p$;
          }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0,
            s: void 0,
            h: void 0,
            r: void 0,
            d: void 0,
            l: void 0,
            u: void 0
          });
          return _el$9;
        }
      });
    })(), null);
    insert(_el$, (() => {
      var _c$2 = memo(() => variant() === "button");
      return () => _c$2() && [createComponent(Show, {
        get when() {
          return !hideTrigger();
        },
        get children() {
          var _el$20 = _tmpl$152(), _el$21 = _el$20.firstChild, _el$22 = _el$21.nextSibling;
          _el$21.addEventListener("change", handleInputChange);
          var _ref$2 = mergeRefs((el) => inputEl = el, local.ref);
          typeof _ref$2 === "function" && use(_ref$2, _el$21);
          _el$22.$$click = () => inputEl?.click();
          insert(_el$22, () => icons.fileUpload({
            class: "h-4 w-4",
            "aria-hidden": "true"
          }), null);
          insert(_el$22, () => l().browseFilesButton, null);
          insert(_el$20, createComponent(Show, {
            get when() {
              return local.description;
            },
            get children() {
              var _el$23 = _tmpl$116();
              insert(_el$23, () => local.description);
              return _el$23;
            }
          }), null);
          insert(_el$20, createComponent(Show, {
            get when() {
              return memo(() => !!local.fileInline)() && local.files.length > 0;
            },
            get children() {
              var _el$24 = _tmpl$142(), _el$27 = _el$24.firstChild;
              insert(_el$24, createComponent(Show, {
                get when() {
                  return memo(() => local.files.length === 1)() && local.files[0];
                },
                get fallback() {
                  return (() => {
                    var _el$30 = _tmpl$182();
                    insert(_el$30, (() => {
                      var _c$6 = memo(() => local.files.length === 1);
                      return () => _c$6() ? zh() ? "1 \u4E2A\u6587\u4EF6" : "1 file" : memo(() => !!zh())() ? `${local.files.length} \u4E2A\u6587\u4EF6` : `${local.files.length} files`;
                    })());
                    return _el$30;
                  })();
                },
                get children() {
                  return [memo(() => memo(() => !!local.files[0])() && fileIcon(local.files[0].file)), (() => {
                    var _el$25 = _tmpl$123();
                    insert(_el$25, () => local.files[0]?.file.name);
                    return _el$25;
                  })(), (() => {
                    var _el$26 = _tmpl$133();
                    insert(_el$26, (() => {
                      var _c$4 = memo(() => !!local.files[0]);
                      return () => _c$4() && formatFileSize(local.files[0].file.size);
                    })());
                    return _el$26;
                  })()];
                }
              }), _el$27);
              _el$27.$$click = (e) => {
                e.currentTarget.blur();
                setViewModalOpen(true);
              };
              use((el) => eyeButtonEl = el, _el$27);
              insert(_el$27, () => icons.eye({
                class: "h-4 w-4",
                "aria-hidden": "true"
              }));
              effect((_p$) => {
                var _v$15 = l().ariaViewFiles, _v$16 = l().ariaViewFiles;
                _v$15 !== _p$.e && setAttribute(_el$27, "title", _p$.e = _v$15);
                _v$16 !== _p$.t && setAttribute(_el$27, "aria-label", _p$.t = _v$16);
                return _p$;
              }, {
                e: void 0,
                t: void 0
              });
              return _el$24;
            }
          }), null);
          effect((_p$) => {
            var _v$17 = id(), _v$18 = local.accept, _v$19 = isMultiple(), _v$20 = local.disabled || atLimit(), _v$21 = local.label ? labelId() : void 0, _v$22 = local.label ? void 0 : l().ariaBrowseFiles, _v$23 = describedBy(), _v$24 = hasAnyError() ? "true" : void 0, _v$25 = ariaErrorMessage(), _v$26 = local.disabled || atLimit(), _v$27 = cn("inline-flex items-center gap-2 rounded-lg border border-surface-border bg-surface-raised px-3 py-2 text-sm font-medium text-ink-700 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", (local.disabled || atLimit()) && "opacity-50");
            _v$17 !== _p$.e && setAttribute(_el$21, "id", _p$.e = _v$17);
            _v$18 !== _p$.t && setAttribute(_el$21, "accept", _p$.t = _v$18);
            _v$19 !== _p$.a && (_el$21.multiple = _p$.a = _v$19);
            _v$20 !== _p$.o && (_el$21.disabled = _p$.o = _v$20);
            _v$21 !== _p$.i && setAttribute(_el$21, "aria-labelledby", _p$.i = _v$21);
            _v$22 !== _p$.n && setAttribute(_el$21, "aria-label", _p$.n = _v$22);
            _v$23 !== _p$.s && setAttribute(_el$21, "aria-describedby", _p$.s = _v$23);
            _v$24 !== _p$.h && setAttribute(_el$21, "aria-invalid", _p$.h = _v$24);
            _v$25 !== _p$.r && setAttribute(_el$21, "aria-errormessage", _p$.r = _v$25);
            _v$26 !== _p$.d && (_el$22.disabled = _p$.d = _v$26);
            _v$27 !== _p$.l && className(_el$22, _p$.l = _v$27);
            return _p$;
          }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0,
            s: void 0,
            h: void 0,
            r: void 0,
            d: void 0,
            l: void 0
          });
          return _el$20;
        }
      }), createComponent(Dialog, {
        get open() {
          return viewModalOpen();
        },
        onClose: () => setViewModalOpen(false),
        onCloseComplete: () => eyeButtonEl?.focus({
          preventScroll: true
        }),
        size: "md",
        showCloseButton: true,
        get header() {
          return (() => {
            var _el$31 = _tmpl$192();
            insert(_el$31, () => l().ariaUploadedFiles);
            return _el$31;
          })();
        },
        get children() {
          return [(() => {
            var _el$28 = _tmpl$162();
            insert(_el$28, (() => {
              var _c$5 = memo(() => local.files.length === 1);
              return () => _c$5() ? zh() ? "1 \u4E2A\u6587\u4EF6" : "1 file" : memo(() => !!zh())() ? `${local.files.length} \u4E2A\u6587\u4EF6` : `${local.files.length} files`;
            })());
            return _el$28;
          })(), (() => {
            var _el$29 = _tmpl$172();
            insert(_el$29, createComponent(For, {
              get each() {
                return local.files;
              },
              children: (item) => (() => {
                var _el$32 = _tmpl$202(), _el$33 = _el$32.firstChild, _el$34 = _el$33.nextSibling, _el$35 = _el$34.nextSibling, _el$36 = _el$35.nextSibling, _el$37 = _el$36.firstChild;
                insert(_el$32, () => fileIcon(item.file), _el$33);
                insert(_el$33, () => item.file.name);
                insert(_el$34, () => formatFileSize(item.file.size));
                insert(_el$35, (() => {
                  var _c$7 = memo(() => item.status === "done");
                  return () => _c$7() && l().statusDone;
                })(), null);
                insert(_el$35, (() => {
                  var _c$8 = memo(() => item.status === "uploading");
                  return () => _c$8() && (item.progress != null ? `${item.progress}%` : l().statusUploading);
                })(), null);
                insert(_el$35, (() => {
                  var _c$9 = memo(() => item.status === "error");
                  return () => _c$9() && (item.error ?? l().statusFailed);
                })(), null);
                insert(_el$35, (() => {
                  var _c$0 = memo(() => item.status === "pending");
                  return () => _c$0() && l().statusPending;
                })(), null);
                insert(_el$36, (() => {
                  var _c$1 = memo(() => !!(item.status === "error" && local.onRetry));
                  return () => _c$1() && (() => {
                    var _el$38 = _tmpl$2110();
                    _el$38.$$click = () => local.onRetry?.(item.id);
                    insert(_el$38, () => icons.refresh({
                      class: "h-4 w-4",
                      "aria-hidden": "true"
                    }));
                    effect(() => setAttribute(_el$38, "aria-label", l().ariaRetry(item.file.name)));
                    return _el$38;
                  })();
                })(), _el$37);
                _el$37.$$click = () => local.onRemove(item.id);
                insert(_el$37, () => icons.trash({
                  class: "h-4 w-4",
                  "aria-hidden": "true"
                }));
                effect(() => setAttribute(_el$37, "aria-label", l().ariaRemove(item.file.name)));
                return _el$32;
              })()
            }));
            effect(() => setAttribute(_el$29, "aria-label", l().ariaUploadedFiles));
            return _el$29;
          })()];
        }
      })];
    })(), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return showFileListBelow();
      },
      get children() {
        var _el$3 = _tmpl$224();
        insert(_el$3, createComponent(For, {
          get each() {
            return local.files;
          },
          children: (item) => (() => {
            var _el$39 = _tmpl$225(), _el$40 = _el$39.firstChild, _el$41 = _el$40.firstChild, _el$42 = _el$41.nextSibling, _el$43 = _el$42.nextSibling, _el$44 = _el$43.nextSibling, _el$45 = _el$44.firstChild;
            insert(_el$40, () => fileIcon(item.file), _el$41);
            insert(_el$41, () => item.file.name);
            insert(_el$42, () => formatFileSize(item.file.size));
            insert(_el$43, (() => {
              var _c$10 = memo(() => item.status === "uploading");
              return () => _c$10() && (item.progress != null ? `${item.progress}%` : l().statusUploading);
            })(), null);
            insert(_el$43, (() => {
              var _c$11 = memo(() => item.status === "done");
              return () => _c$11() && l().statusDone;
            })(), null);
            insert(_el$43, (() => {
              var _c$12 = memo(() => item.status === "error");
              return () => _c$12() && (item.error ?? l().statusFailed);
            })(), null);
            insert(_el$43, (() => {
              var _c$13 = memo(() => item.status === "pending");
              return () => _c$13() && l().statusPending;
            })(), null);
            insert(_el$44, (() => {
              var _c$14 = memo(() => item.status === "uploading");
              return () => _c$14() && icons.spinner({
                class: "h-4 w-4 animate-spin text-ink-400",
                "aria-hidden": "true"
              });
            })(), _el$45);
            insert(_el$44, (() => {
              var _c$15 = memo(() => !!(item.status === "error" && local.onRetry));
              return () => _c$15() && (() => {
                var _el$46 = _tmpl$2110();
                _el$46.$$click = () => local.onRetry?.(item.id);
                insert(_el$46, () => icons.refresh({
                  class: "h-4 w-4",
                  "aria-hidden": "true"
                }));
                effect(() => setAttribute(_el$46, "aria-label", l().ariaRetry(item.file.name)));
                return _el$46;
              })();
            })(), _el$45);
            _el$45.$$click = () => local.onRemove(item.id);
            insert(_el$45, () => icons.trash({
              class: "h-4 w-4",
              "aria-hidden": "true"
            }));
            insert(_el$39, createComponent(Show, {
              get when() {
                return memo(() => item.status === "uploading")() && item.progress != null;
              },
              get children() {
                return createComponent(Progress, {
                  get value() {
                    return item.progress;
                  },
                  size: "sm",
                  showValueLabel: false,
                  "class": "h-1.5",
                  get ["aria-label"]() {
                    return l().ariaProgress(item.file.name);
                  }
                });
              }
            }), null);
            effect(() => setAttribute(_el$45, "aria-label", l().ariaRemove(item.file.name)));
            return _el$39;
          })()
        }));
        effect(() => setAttribute(_el$3, "aria-label", l().ariaUploadedFiles));
        return _el$3;
      }
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return memo(() => !!local.actions)() && !(variant() === "button" && local.fileInline);
      },
      get children() {
        var _el$4 = _tmpl$324();
        insert(_el$4, () => local.actions);
        return _el$4;
      }
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return memo(() => !!summary())() && !(variant() === "button" && local.fileInline);
      },
      get children() {
        var _el$5 = _tmpl$423();
        insert(_el$5, summary);
        return _el$5;
      }
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return local.description || limitsText();
      },
      get children() {
        var _el$6 = _tmpl$520();
        insert(_el$6, (() => {
          var _c$3 = memo(() => variant() === "button");
          return () => _c$3() ? limitsText() : [memo(() => local.description), memo(() => local.description && limitsText() ? " " : ""), memo(limitsText)];
        })());
        effect(() => setAttribute(_el$6, "id", descId()));
        return _el$6;
      }
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return validationErrors().length > 0;
      },
      get children() {
        var _el$7 = _tmpl$619();
        insert(_el$7, createComponent(For, {
          get each() {
            return validationErrors();
          },
          children: (msg) => (() => {
            var _el$47 = _tmpl$232();
            insert(_el$47, msg);
            return _el$47;
          })()
        }));
        effect(() => setAttribute(_el$7, "id", validationId()));
        return _el$7;
      }
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return local.error;
      },
      get children() {
        var _el$8 = _tmpl$716();
        insert(_el$8, () => local.error);
        effect(() => setAttribute(_el$8, "id", errorId()));
        return _el$8;
      }
    }), null);
    return _el$;
  })();
}
delegateEvents(["click", "keydown"]);
var _tmpl$117 = /* @__PURE__ */ template(`<span class="text-xs text-ink-400">`);
var _tmpl$226 = /* @__PURE__ */ template(`<div class="mb-2 flex items-center justify-between"><label>`);
var _tmpl$325 = /* @__PURE__ */ template(`<span>`);
var _tmpl$424 = /* @__PURE__ */ template(`<button type=button class="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-ink-400 hover:text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$521 = /* @__PURE__ */ template(`<div class=relative>`);
var _tmpl$620 = /* @__PURE__ */ template(`<div class="flex flex-col gap-1 border-r border-surface-border pr-3 min-w-[110px]">`);
var _tmpl$717 = /* @__PURE__ */ template(`<div><div class="grid grid-cols-7 mb-2">`);
var _tmpl$816 = /* @__PURE__ */ template(`<div class="grid grid-cols-3 gap-1">`);
var _tmpl$911 = /* @__PURE__ */ template(`<div class="grid max-h-48 grid-cols-4 gap-1 overflow-y-auto">`);
var _tmpl$05 = /* @__PURE__ */ template(`<button type=button class="ml-1 rounded-md border border-surface-border bg-surface-raised px-2 py-1 text-xs font-medium text-ink-700 hover:bg-surface-overlay transition-colors min-w-[2.5rem] outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$118 = /* @__PURE__ */ template(`<div class="mt-3 border-t border-surface-border pt-3"><div class="flex items-center justify-center gap-1"><div class="flex flex-col items-center gap-0.5"><button type=button class="flex h-6 w-6 items-center justify-center rounded text-ink-500 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"></button><input type=text name=hour inputmode=numeric class="w-9 rounded-md border border-surface-border bg-surface-raised py-0.5 text-center text-sm font-medium text-ink-900 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500"><button type=button class="flex h-6 w-6 items-center justify-center rounded text-ink-500 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"></button></div><span class="text-sm font-bold text-ink-400 mb-0.5">:</span><div class="flex flex-col items-center gap-0.5"><button type=button class="flex h-6 w-6 items-center justify-center rounded text-ink-500 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"></button><input type=text name=minute inputmode=numeric class="w-9 rounded-md border border-surface-border bg-surface-raised py-0.5 text-center text-sm font-medium text-ink-900 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500"><button type=button class="flex h-6 w-6 items-center justify-center rounded text-ink-500 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$1011 = /* @__PURE__ */ template(`<button type=button>`);
var _tmpl$119 = /* @__PURE__ */ template(`<button type=button class="rounded-md px-2 py-1 text-xs font-medium text-white bg-primary-500 hover:bg-primary-600 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$124 = /* @__PURE__ */ template(`<div><div class="flex-1 min-w-0"><div class="flex items-center justify-between gap-2 mb-3"><div class="flex min-w-[140px] items-center justify-center gap-1"></div></div><div class="mt-3 flex items-center justify-between border-t border-surface-border pt-3"><div class="text-xs text-ink-400"></div><div class="flex gap-2"><button type=button>`);
var _tmpl$134 = /* @__PURE__ */ template(`<p>`);
var _tmpl$143 = /* @__PURE__ */ template(`<div>`);
var _tmpl$153 = /* @__PURE__ */ template(`<span class="text-danger-500 ml-0.5"aria-hidden=true>*`);
var _tmpl$163 = /* @__PURE__ */ template(`<button type=button class="rounded-md px-2 py-1 text-sm font-semibold text-ink-900 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$173 = /* @__PURE__ */ template(`<span class="text-sm font-semibold text-ink-900">`);
var _tmpl$183 = /* @__PURE__ */ template(`<div class=w-7 aria-hidden=true>`);
var _tmpl$193 = /* @__PURE__ */ template(`<div class="py-1 text-center text-xs font-medium text-ink-400">`);
var _tmpl$203 = /* @__PURE__ */ template(`<div class="grid grid-cols-7">`);
var _tmpl$2111 = /* @__PURE__ */ template(`<div class="relative h-8 flex items-center justify-center"><button type=button>`);
var _tmpl$227 = /* @__PURE__ */ template(`<span class="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary-500">`);
var DAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var ZH_DAY_NAMES = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"];
var ZH_MONTH_NAMES = ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"];
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
  const dateStr = d.toLocaleDateString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
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
  const [local] = splitProps(props, ["value", "onValueChange", "onErrorClear", "placeholder", "disabled", "min", "max", "label", "error", "helperText", "bare", "required", "optional", "size", "class", "id", "presets", "showTime", "timeFormat"]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const contextSize = useComponentSize();
  const sc = () => inputSizeConfig[local.size ?? contextSize ?? "md"];
  const generatedId = createUniqueId();
  const inputId = () => local.id || `datepicker-${generatedId}`;
  const hourInputId = createUniqueId();
  const minuteInputId = createUniqueId();
  const [open, setOpen] = createSignal(false);
  const valueDatePart = () => local.value ? local.value.slice(0, 10) : "";
  const valueDate = () => parseDate(valueDatePart());
  const viewDate = () => valueDate() ?? /* @__PURE__ */ new Date();
  const [viewMonthYear, setViewMonthYear] = createSignal(null);
  const effectiveViewYear = () => viewMonthYear()?.year ?? viewDate().getFullYear();
  const effectiveViewMonth = () => viewMonthYear()?.month ?? viewDate().getMonth();
  const calendarDays = createMemo(() => getCalendarDays(effectiveViewYear(), effectiveViewMonth()));
  const [viewMode, setViewMode] = createSignal("calendar");
  const minDate = createMemo(() => local.min ? parseDate(local.min) : null);
  const maxDate = createMemo(() => local.max ? parseDate(local.max) : null);
  const [pendingHour, setPendingHour] = createSignal(0);
  const [pendingMinute, setPendingMinute] = createSignal(0);
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
    return Array.from({
      length: maxY - minY + 1
    }, (_, i) => minY + i);
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
    setViewMonthYear({
      year: d.getFullYear(),
      month: d.getMonth()
    });
  }
  function goNextMonth() {
    const d = new Date(effectiveViewYear(), effectiveViewMonth() + 1, 1);
    setViewMonthYear({
      year: d.getFullYear(),
      month: d.getMonth()
    });
  }
  function goPrevYear() {
    setViewMonthYear({
      year: effectiveViewYear() - 1,
      month: effectiveViewMonth()
    });
  }
  function goNextYear() {
    setViewMonthYear({
      year: effectiveViewYear() + 1,
      month: effectiveViewMonth()
    });
  }
  function setMonth(m) {
    setViewMonthYear({
      year: effectiveViewYear(),
      month: m
    });
    setViewMode("calendar");
  }
  function setYear(y) {
    setViewMonthYear({
      year: y,
      month: effectiveViewMonth()
    });
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
  return (() => {
    var _el$ = _tmpl$143();
    insert(_el$, createComponent(Show, {
      get when() {
        return memo(() => !!!local.bare)() && local.label;
      },
      get children() {
        var _el$2 = _tmpl$226(), _el$3 = _el$2.firstChild;
        insert(_el$3, () => local.label, null);
        insert(_el$3, (() => {
          var _c$ = memo(() => !!local.required);
          return () => _c$() && _tmpl$153();
        })(), null);
        insert(_el$2, createComponent(Show, {
          get when() {
            return memo(() => !!!local.required)() && local.optional;
          },
          get children() {
            var _el$4 = _tmpl$117();
            insert(_el$4, () => zh() ? "\u9009\u586B" : "optional");
            return _el$4;
          }
        }), null);
        effect((_p$) => {
          var _v$ = inputId(), _v$2 = cn("block text-sm font-medium", hasError() ? "text-danger-600" : "text-ink-700");
          _v$ !== _p$.e && setAttribute(_el$3, "for", _p$.e = _v$);
          _v$2 !== _p$.t && className(_el$3, _p$.t = _v$2);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$2;
      }
    }), null);
    insert(_el$, createComponent(Popover$1, {
      get open() {
        return open();
      },
      onOpenChange: (next) => {
        setOpen(next);
        if (next) {
          const d = valueDate() ?? minDate() ?? /* @__PURE__ */ new Date();
          setViewMonthYear({
            year: d.getFullYear(),
            month: d.getMonth()
          });
          syncTimeFromValue();
        }
        setViewMode("calendar");
      },
      gutter: 8,
      get children() {
        return [(() => {
          var _el$5 = _tmpl$521();
          insert(_el$5, createComponent(Popover$1.Trigger, {
            as: "button",
            type: "button",
            get id() {
              return inputId();
            },
            get disabled() {
              return local.disabled;
            },
            get ["aria-describedby"]() {
              return msgId();
            },
            get ["aria-invalid"]() {
              return hasError() ? "true" : void 0;
            },
            get ["class"]() {
              return cn("inline-flex w-full items-center gap-2 rounded-lg border transition-colors", sc().h, sc().py, sc().pl, sc().text, displayValue() && !local.disabled ? "pr-8" : sc().pr, hasError() ? "border-danger-500 bg-surface-raised text-ink-900 hover:border-danger-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-danger-500 focus-visible:border-transparent" : "border-surface-border bg-surface-raised text-ink-900 hover:border-ink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 focus-visible:border-transparent", local.disabled && "opacity-50");
            },
            get children() {
              return [memo(() => icons.calendar({
                class: "h-4 w-4 shrink-0 text-ink-400",
                "aria-hidden": "true"
              })), (() => {
                var _el$6 = _tmpl$325();
                insert(_el$6, () => displayValue() || (local.placeholder ?? (zh() ? "\u9009\u62E9\u65E5\u671F" : "Select date")));
                effect(() => className(_el$6, cn("truncate", displayValue() ? "text-ink-900" : "text-ink-400")));
                return _el$6;
              })()];
            }
          }), null);
          insert(_el$5, createComponent(Show, {
            get when() {
              return memo(() => !!displayValue())() && !local.disabled;
            },
            get children() {
              var _el$7 = _tmpl$424();
              _el$7.$$click = (e) => {
                e.stopPropagation();
                local.onValueChange?.("");
              };
              insert(_el$7, () => icons.close({
                class: "h-3.5 w-3.5",
                "aria-hidden": "true"
              }));
              effect(() => setAttribute(_el$7, "aria-label", zh() ? "\u6E05\u9664\u65E5\u671F" : "Clear date"));
              return _el$7;
            }
          }), null);
          return _el$5;
        })(), createComponent(Popover$1.Portal, {
          get children() {
            return createComponent(Popover$1.Content, {
              "data-kb-top-layer": "",
              role: "dialog",
              get ["aria-label"]() {
                return zh() ? "\u9009\u62E9\u65E5\u671F" : "Choose date";
              },
              get ["class"]() {
                return cn("z-[80] rounded-xl border border-surface-border bg-surface-raised shadow-xl outline-none", "origin-top data-[expanded]:animate-in data-[expanded]:fade-in-0 data-[expanded]:zoom-in-95", "data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95");
              },
              get children() {
                var _el$8 = _tmpl$124(), _el$0 = _el$8.firstChild, _el$1 = _el$0.firstChild, _el$10 = _el$1.firstChild, _el$27 = _el$1.nextSibling, _el$28 = _el$27.firstChild, _el$29 = _el$28.nextSibling, _el$30 = _el$29.firstChild;
                insert(_el$8, createComponent(Show, {
                  get when() {
                    return hasPresets();
                  },
                  get children() {
                    var _el$9 = _tmpl$620();
                    insert(_el$9, createComponent(For, {
                      get each() {
                        return local.presets;
                      },
                      children: (preset) => (() => {
                        var _el$35 = _tmpl$1011();
                        _el$35.$$click = () => selectPreset(preset.value);
                        insert(_el$35, () => preset.label);
                        effect(() => className(_el$35, cn("w-full rounded-md px-3 py-1.5 text-left text-xs font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", valueDatePart() === preset.value ? "bg-primary-500 text-white" : "text-ink-700 hover:bg-surface-overlay")));
                        return _el$35;
                      })()
                    }));
                    return _el$9;
                  }
                }), _el$0);
                insert(_el$1, (() => {
                  var _c$2 = memo(() => viewMode() !== "calendar");
                  return () => _c$2() ? (() => {
                    var _el$36 = _tmpl$1011();
                    _el$36.$$click = () => setViewMode("calendar");
                    insert(_el$36, () => icons.chevronLeft({
                      class: "h-4 w-4",
                      "aria-hidden": "true"
                    }));
                    effect((_p$) => {
                      var _v$13 = cn(navBtnSm, "text-ink-500"), _v$14 = zh() ? "\u8FD4\u56DE\u65E5\u5386" : "Back to calendar";
                      _v$13 !== _p$.e && className(_el$36, _p$.e = _v$13);
                      _v$14 !== _p$.t && setAttribute(_el$36, "aria-label", _p$.t = _v$14);
                      return _p$;
                    }, {
                      e: void 0,
                      t: void 0
                    });
                    return _el$36;
                  })() : (() => {
                    var _el$37 = _tmpl$1011();
                    _el$37.$$click = goPrevMonth;
                    insert(_el$37, () => icons.chevronLeft({
                      class: "h-4 w-4",
                      "aria-hidden": "true"
                    }));
                    effect((_p$) => {
                      var _v$15 = !canGoPrevMonth(), _v$16 = cn(navBtnSm, "text-ink-500", !canGoPrevMonth() && "opacity-30 pointer-events-none"), _v$17 = zh() ? "\u4E0A\u4E2A\u6708" : "Previous month";
                      _v$15 !== _p$.e && (_el$37.disabled = _p$.e = _v$15);
                      _v$16 !== _p$.t && className(_el$37, _p$.t = _v$16);
                      _v$17 !== _p$.a && setAttribute(_el$37, "aria-label", _p$.a = _v$17);
                      return _p$;
                    }, {
                      e: void 0,
                      t: void 0,
                      a: void 0
                    });
                    return _el$37;
                  })();
                })(), _el$10);
                insert(_el$10, (() => {
                  var _c$3 = memo(() => viewMode() === "calendar");
                  return () => _c$3() && [(() => {
                    var _el$38 = _tmpl$163();
                    _el$38.$$click = () => setViewMode("months");
                    insert(_el$38, (() => {
                      var _c$7 = memo(() => !!zh());
                      return () => _c$7() ? ZH_MONTH_NAMES[effectiveViewMonth()] : MONTH_NAMES[effectiveViewMonth()];
                    })());
                    return _el$38;
                  })(), (() => {
                    var _el$39 = _tmpl$163();
                    _el$39.$$click = () => setViewMode("years");
                    insert(_el$39, effectiveViewYear);
                    return _el$39;
                  })()];
                })(), null);
                insert(_el$10, (() => {
                  var _c$4 = memo(() => viewMode() === "months");
                  return () => _c$4() && [(() => {
                    var _el$40 = _tmpl$1011();
                    _el$40.$$click = goPrevYear;
                    insert(_el$40, () => icons.chevronLeft({
                      class: "h-4 w-4",
                      "aria-hidden": "true"
                    }));
                    effect((_p$) => {
                      var _v$18 = !canGoPrevYear(), _v$19 = cn(navBtnSm, "text-ink-400", !canGoPrevYear() && "opacity-30 pointer-events-none"), _v$20 = zh() ? "\u4E0A\u4E00\u5E74" : "Previous year";
                      _v$18 !== _p$.e && (_el$40.disabled = _p$.e = _v$18);
                      _v$19 !== _p$.t && className(_el$40, _p$.t = _v$19);
                      _v$20 !== _p$.a && setAttribute(_el$40, "aria-label", _p$.a = _v$20);
                      return _p$;
                    }, {
                      e: void 0,
                      t: void 0,
                      a: void 0
                    });
                    return _el$40;
                  })(), (() => {
                    var _el$41 = _tmpl$163();
                    _el$41.$$click = () => setViewMode("years");
                    insert(_el$41, effectiveViewYear);
                    return _el$41;
                  })(), (() => {
                    var _el$42 = _tmpl$1011();
                    _el$42.$$click = goNextYear;
                    insert(_el$42, () => icons.chevronRight({
                      class: "h-4 w-4",
                      "aria-hidden": "true"
                    }));
                    effect((_p$) => {
                      var _v$21 = !canGoNextYear(), _v$22 = cn(navBtnSm, "text-ink-400", !canGoNextYear() && "opacity-30 pointer-events-none"), _v$23 = zh() ? "\u4E0B\u4E00\u5E74" : "Next year";
                      _v$21 !== _p$.e && (_el$42.disabled = _p$.e = _v$21);
                      _v$22 !== _p$.t && className(_el$42, _p$.t = _v$22);
                      _v$23 !== _p$.a && setAttribute(_el$42, "aria-label", _p$.a = _v$23);
                      return _p$;
                    }, {
                      e: void 0,
                      t: void 0,
                      a: void 0
                    });
                    return _el$42;
                  })()];
                })(), null);
                insert(_el$10, (() => {
                  var _c$5 = memo(() => viewMode() === "years");
                  return () => _c$5() && (() => {
                    var _el$43 = _tmpl$173();
                    insert(_el$43, () => zh() ? "\u9009\u62E9\u5E74\u4EFD" : "Select year");
                    return _el$43;
                  })();
                })(), null);
                insert(_el$1, (() => {
                  var _c$6 = memo(() => viewMode() !== "calendar");
                  return () => _c$6() ? _tmpl$183() : (() => {
                    var _el$45 = _tmpl$1011();
                    _el$45.$$click = goNextMonth;
                    insert(_el$45, () => icons.chevronRight({
                      class: "h-4 w-4",
                      "aria-hidden": "true"
                    }));
                    effect((_p$) => {
                      var _v$24 = !canGoNextMonth(), _v$25 = cn(navBtnSm, "text-ink-500", !canGoNextMonth() && "opacity-30 pointer-events-none"), _v$26 = zh() ? "\u4E0B\u4E2A\u6708" : "Next month";
                      _v$24 !== _p$.e && (_el$45.disabled = _p$.e = _v$24);
                      _v$25 !== _p$.t && className(_el$45, _p$.t = _v$25);
                      _v$26 !== _p$.a && setAttribute(_el$45, "aria-label", _p$.a = _v$26);
                      return _p$;
                    }, {
                      e: void 0,
                      t: void 0,
                      a: void 0
                    });
                    return _el$45;
                  })();
                })(), null);
                insert(_el$0, createComponent(Show, {
                  get when() {
                    return viewMode() === "calendar";
                  },
                  get children() {
                    var _el$11 = _tmpl$717(), _el$12 = _el$11.firstChild;
                    insert(_el$12, createComponent(For, {
                      each: DAY_NAMES,
                      children: (name, i) => (() => {
                        var _el$46 = _tmpl$193();
                        insert(_el$46, (() => {
                          var _c$8 = memo(() => !!zh());
                          return () => _c$8() ? ZH_DAY_NAMES[i()] : name;
                        })());
                        return _el$46;
                      })()
                    }));
                    insert(_el$11, createComponent(For, {
                      get each() {
                        return calendarDays();
                      },
                      children: (week) => (() => {
                        var _el$47 = _tmpl$203();
                        insert(_el$47, createComponent(For, {
                          each: week,
                          children: (d) => {
                            const disabled = isDisabled(d);
                            const currentMonth = isCurrentMonth(d);
                            const selected = isSelected(d);
                            const isToday = toISODate(d) === todayISO();
                            return (() => {
                              var _el$48 = _tmpl$2111(), _el$49 = _el$48.firstChild;
                              _el$49.$$click = () => selectDate(d);
                              _el$49.disabled = disabled;
                              setAttribute(_el$49, "aria-current", selected ? "date" : void 0);
                              insert(_el$49, () => d.getDate(), null);
                              insert(_el$49, isToday && !selected && _tmpl$227(), null);
                              effect((_p$) => {
                                var _v$27 = d.toLocaleDateString(void 0, {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric"
                                }), _v$28 = cn("relative z-10 h-7 w-7 rounded-full text-xs transition-colors", "outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", selected ? "bg-primary-500 text-white font-semibold hover:bg-primary-600" : !currentMonth ? "text-ink-300 hover:bg-surface-overlay" : isToday ? "text-primary-600 font-semibold hover:bg-surface-overlay" : "text-ink-800 hover:bg-surface-overlay", disabled && "opacity-30");
                                _v$27 !== _p$.e && setAttribute(_el$49, "aria-label", _p$.e = _v$27);
                                _v$28 !== _p$.t && className(_el$49, _p$.t = _v$28);
                                return _p$;
                              }, {
                                e: void 0,
                                t: void 0
                              });
                              return _el$48;
                            })();
                          }
                        }));
                        return _el$47;
                      })()
                    }), null);
                    return _el$11;
                  }
                }), _el$27);
                insert(_el$0, createComponent(Show, {
                  get when() {
                    return viewMode() === "months";
                  },
                  get children() {
                    var _el$13 = _tmpl$816();
                    insert(_el$13, createComponent(For, {
                      each: MONTH_NAMES,
                      children: (name, m) => (() => {
                        var _el$51 = _tmpl$1011();
                        _el$51.$$click = () => setMonth(m());
                        insert(_el$51, (() => {
                          var _c$9 = memo(() => !!zh());
                          return () => _c$9() ? ZH_MONTH_NAMES[m()] : name;
                        })());
                        effect((_p$) => {
                          var _v$29 = isMonthDisabled(m()), _v$30 = cn("rounded-lg py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", isMonthDisabled(m()) ? "text-ink-300 opacity-50" : m() === effectiveViewMonth() ? "bg-primary-500 text-white" : "text-ink-700 hover:bg-surface-overlay");
                          _v$29 !== _p$.e && (_el$51.disabled = _p$.e = _v$29);
                          _v$30 !== _p$.t && className(_el$51, _p$.t = _v$30);
                          return _p$;
                        }, {
                          e: void 0,
                          t: void 0
                        });
                        return _el$51;
                      })()
                    }));
                    return _el$13;
                  }
                }), _el$27);
                insert(_el$0, createComponent(Show, {
                  get when() {
                    return viewMode() === "years";
                  },
                  get children() {
                    var _el$14 = _tmpl$911();
                    insert(_el$14, createComponent(For, {
                      get each() {
                        return yearsList();
                      },
                      children: (y) => (() => {
                        var _el$52 = _tmpl$1011();
                        _el$52.$$click = () => setYear(y);
                        insert(_el$52, y);
                        effect(() => className(_el$52, cn("rounded-lg py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", y === effectiveViewYear() ? "bg-primary-500 text-white" : "text-ink-700 hover:bg-surface-overlay")));
                        return _el$52;
                      })()
                    }));
                    return _el$14;
                  }
                }), _el$27);
                insert(_el$0, createComponent(Show, {
                  get when() {
                    return local.showTime;
                  },
                  get children() {
                    var _el$15 = _tmpl$118(), _el$16 = _el$15.firstChild, _el$17 = _el$16.firstChild, _el$18 = _el$17.firstChild, _el$19 = _el$18.nextSibling, _el$20 = _el$19.nextSibling, _el$21 = _el$17.nextSibling, _el$22 = _el$21.nextSibling, _el$23 = _el$22.firstChild, _el$24 = _el$23.nextSibling, _el$25 = _el$24.nextSibling;
                    _el$18.$$click = () => commitTime((pendingHour() + 1) % 24, pendingMinute());
                    insert(_el$18, () => icons.chevronUp({
                      class: "h-3.5 w-3.5",
                      "aria-hidden": "true"
                    }));
                    _el$19.$$input = (e) => {
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
                    };
                    setAttribute(_el$19, "id", hourInputId);
                    _el$20.$$click = () => commitTime((pendingHour() + 23) % 24, pendingMinute());
                    insert(_el$20, () => icons.chevronDown({
                      class: "h-3.5 w-3.5",
                      "aria-hidden": "true"
                    }));
                    _el$23.$$click = () => commitTime(pendingHour(), (pendingMinute() + 1) % 60);
                    insert(_el$23, () => icons.chevronUp({
                      class: "h-3.5 w-3.5",
                      "aria-hidden": "true"
                    }));
                    _el$24.$$input = (e) => {
                      const v = parseInt(e.currentTarget.value, 10);
                      if (isNaN(v) || v < 0 || v > 59) return;
                      commitTime(pendingHour(), v);
                    };
                    setAttribute(_el$24, "id", minuteInputId);
                    _el$25.$$click = () => commitTime(pendingHour(), (pendingMinute() + 59) % 60);
                    insert(_el$25, () => icons.chevronDown({
                      class: "h-3.5 w-3.5",
                      "aria-hidden": "true"
                    }));
                    insert(_el$16, createComponent(Show, {
                      get when() {
                        return is12h();
                      },
                      get children() {
                        var _el$26 = _tmpl$05();
                        _el$26.$$click = toggleAmPm;
                        insert(_el$26, displayAmPm);
                        return _el$26;
                      }
                    }), null);
                    effect((_p$) => {
                      var _v$3 = zh() ? "\u589E\u52A0\u5C0F\u65F6" : "Increment hour", _v$4 = zh() ? "\u5C0F\u65F6" : "Hour", _v$5 = zh() ? "\u51CF\u5C11\u5C0F\u65F6" : "Decrement hour", _v$6 = zh() ? "\u589E\u52A0\u5206\u949F" : "Increment minute", _v$7 = zh() ? "\u5206\u949F" : "Minute", _v$8 = zh() ? "\u51CF\u5C11\u5206\u949F" : "Decrement minute";
                      _v$3 !== _p$.e && setAttribute(_el$18, "aria-label", _p$.e = _v$3);
                      _v$4 !== _p$.t && setAttribute(_el$19, "aria-label", _p$.t = _v$4);
                      _v$5 !== _p$.a && setAttribute(_el$20, "aria-label", _p$.a = _v$5);
                      _v$6 !== _p$.o && setAttribute(_el$23, "aria-label", _p$.o = _v$6);
                      _v$7 !== _p$.i && setAttribute(_el$24, "aria-label", _p$.i = _v$7);
                      _v$8 !== _p$.n && setAttribute(_el$25, "aria-label", _p$.n = _v$8);
                      return _p$;
                    }, {
                      e: void 0,
                      t: void 0,
                      a: void 0,
                      o: void 0,
                      i: void 0,
                      n: void 0
                    });
                    effect(() => _el$19.value = timeHourDisplay());
                    effect(() => _el$24.value = timeMinuteDisplay());
                    return _el$15;
                  }
                }), _el$27);
                insert(_el$28, () => displayValue() || (zh() ? "\u672A\u9009\u62E9\u65E5\u671F" : "No date selected"));
                _el$30.$$click = () => {
                  local.onValueChange?.("");
                  if (!local.showTime) setOpen(false);
                };
                insert(_el$30, () => zh() ? "\u6E05\u9664" : "Clear");
                insert(_el$29, createComponent(Show, {
                  get when() {
                    return !local.showTime;
                  },
                  get children() {
                    var _el$31 = _tmpl$1011();
                    _el$31.$$click = selectToday;
                    insert(_el$31, () => zh() ? "\u4ECA\u5929" : "Today");
                    effect((_p$) => {
                      var _v$9 = todayDisabled(), _v$0 = cn("rounded-md px-2 py-1 text-xs font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", todayDisabled() ? "text-ink-300" : "text-primary-600 hover:bg-primary-50");
                      _v$9 !== _p$.e && (_el$31.disabled = _p$.e = _v$9);
                      _v$0 !== _p$.t && className(_el$31, _p$.t = _v$0);
                      return _p$;
                    }, {
                      e: void 0,
                      t: void 0
                    });
                    return _el$31;
                  }
                }), null);
                insert(_el$29, createComponent(Show, {
                  get when() {
                    return local.showTime;
                  },
                  get children() {
                    var _el$32 = _tmpl$119();
                    _el$32.$$click = () => setOpen(false);
                    insert(_el$32, () => zh() ? "\u5B8C\u6210" : "Done");
                    return _el$32;
                  }
                }), null);
                effect((_p$) => {
                  var _v$1 = cn("p-3 flex gap-3"), _v$10 = cn("rounded-md px-2 py-1 text-xs text-ink-500 hover:bg-surface-overlay hover:text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", !displayValue() && "invisible");
                  _v$1 !== _p$.e && className(_el$8, _p$.e = _v$1);
                  _v$10 !== _p$.t && className(_el$30, _p$.t = _v$10);
                  return _p$;
                }, {
                  e: void 0,
                  t: void 0
                });
                return _el$8;
              }
            });
          }
        })];
      }
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return local.error || local.helperText;
      },
      get children() {
        var _el$33 = _tmpl$134();
        insert(_el$33, () => local.error ?? local.helperText);
        effect((_p$) => {
          var _v$11 = msgId(), _v$12 = cn("mt-1.5 text-xs", hasError() ? "text-danger-600" : "text-ink-500");
          _v$11 !== _p$.e && setAttribute(_el$33, "id", _p$.e = _v$11);
          _v$12 !== _p$.t && className(_el$33, _p$.t = _v$12);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$33;
      }
    }), null);
    effect(() => className(_el$, cn("w-full", local.class)));
    return _el$;
  })();
}
delegateEvents(["click", "input"]);
var fmt = (v) => String(v).padStart(2, "0");
function TimeSelect(props) {
  return createComponent(Select$1, {
    get value() {
      return fmt(props.value);
    },
    onChange: (v) => {
      if (v !== null) props.onChange(Number(v));
    },
    get options() {
      return props.options.map(fmt);
    },
    gutter: 4,
    sameWidth: true,
    itemComponent: (p) => createComponent(Select$1.Item, {
      get item() {
        return p.item;
      },
      "class": "flex cursor-default select-none items-center rounded px-2 py-0.5 text-xs text-ink-900 data-[highlighted]:bg-primary-50 data-[highlighted]:text-primary-900 data-[selected]:font-semibold",
      get children() {
        return createComponent(Select$1.ItemLabel, {
          get children() {
            return p.item.rawValue;
          }
        });
      }
    }),
    get children() {
      return [createComponent(Select$1.Trigger, {
        get ["class"]() {
          return cn("flex min-w-[2.75rem] items-center justify-between gap-1 rounded-md border border-surface-border bg-surface-raised px-2 py-1", "text-xs text-ink-900 focus:outline-none focus:ring-1 focus:ring-primary-500");
        },
        get children() {
          return [createComponent(Select$1.Value, {
            children: (state) => state.selectedOption()
          }), createComponent(Select$1.Icon, {
            "class": "text-[8px] text-ink-400 leading-none",
            children: "\u25BE"
          })];
        }
      }), createComponent(Select$1.Portal, {
        get children() {
          return createComponent(Select$1.Content, {
            "data-kb-top-layer": true,
            get ["class"]() {
              return cn("z-[80] min-w-[3rem] rounded-md border border-surface-border bg-surface-raised shadow-md", "origin-top data-[expanded]:animate-in data-[expanded]:fade-in-0 data-[expanded]:zoom-in-95", "data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95");
            },
            get children() {
              return createComponent(Select$1.Listbox, {
                "class": "max-h-48 overflow-y-auto p-1 focus:outline-none"
              });
            }
          });
        }
      })];
    }
  });
}

// src/components/forms/DateRangePicker.tsx
var _tmpl$120 = /* @__PURE__ */ template(`<div><div class="grid grid-cols-7 mb-2"></div><div class="grid grid-cols-7 gap-y-1">`);
var _tmpl$228 = /* @__PURE__ */ template(`<div class="py-1 text-center text-xs font-medium text-ink-400">`);
var _tmpl$326 = /* @__PURE__ */ template(`<div><button type=button>`);
var _tmpl$425 = /* @__PURE__ */ template(`<span class="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary-500">`);
var _tmpl$522 = /* @__PURE__ */ template(`<button type=button class="rounded-md border border-surface-border bg-surface-raised px-2 py-1 text-xs font-medium text-ink-700 hover:bg-surface-overlay transition-colors min-w-[2.5rem] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50">`);
var _tmpl$621 = /* @__PURE__ */ template(`<div class="mt-2 pt-2 border-t border-surface-border flex items-center justify-between"><span class="text-xs text-ink-500"></span><div class="flex items-center gap-2"><span class="text-xs font-medium text-ink-400">:`);
var _tmpl$718 = /* @__PURE__ */ template(`<div class="grid grid-cols-3 gap-1">`);
var _tmpl$817 = /* @__PURE__ */ template(`<div class="grid max-h-48 grid-cols-3 gap-1 overflow-y-auto">`);
var _tmpl$912 = /* @__PURE__ */ template(`<button type=button>`);
var _tmpl$06 = /* @__PURE__ */ template(`<span class="text-xs text-ink-400">`);
var _tmpl$121 = /* @__PURE__ */ template(`<div class="mb-2 flex items-center justify-between"><label>`);
var _tmpl$1012 = /* @__PURE__ */ template(`<span>`);
var _tmpl$1110 = /* @__PURE__ */ template(`<button type=button class="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-ink-400 hover:text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$125 = /* @__PURE__ */ template(`<div class=relative>`);
var _tmpl$135 = /* @__PURE__ */ template(`<div class="flex gap-4"><div class="flex-1 min-w-0"><div class="flex items-center justify-between mb-2"><button type=button class="flex h-7 w-7 items-center justify-center rounded-md text-ink-500 hover:bg-surface-overlay transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"></button><div class="flex items-center justify-center gap-0.5"><button type=button class="rounded-md px-2 py-1 text-sm font-semibold text-ink-900 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"></button><button type=button class="rounded-md px-2 py-1 text-sm font-semibold text-ink-900 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"></button></div><button type=button class="flex h-7 w-7 items-center justify-center rounded-md text-ink-500 hover:bg-surface-overlay transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"></button></div></div><div class="w-px bg-surface-border self-stretch"></div><div class="flex-1 min-w-0"><div class="flex items-center justify-between mb-2"><button type=button class="flex h-7 w-7 items-center justify-center rounded-md text-ink-500 hover:bg-surface-overlay transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"></button><div class="flex items-center justify-center gap-0.5"><button type=button class="rounded-md px-2 py-1 text-sm font-semibold text-ink-900 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"></button><button type=button class="rounded-md px-2 py-1 text-sm font-semibold text-ink-900 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"></button></div><button type=button class="flex h-7 w-7 items-center justify-center rounded-md text-ink-500 hover:bg-surface-overlay transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$144 = /* @__PURE__ */ template(`<button type=button class="flex h-7 w-7 items-center justify-center rounded-md text-ink-500 hover:bg-surface-overlay transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$154 = /* @__PURE__ */ template(`<div class="flex items-center justify-between mb-2"><div class="flex items-center justify-center gap-0.5"><button type=button class="rounded-md px-2 py-1 text-sm font-semibold text-ink-900 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"></button><button type=button class="rounded-md px-2 py-1 text-sm font-semibold text-ink-900 hover:bg-surface-overlay transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$164 = /* @__PURE__ */ template(`<button type=button class="rounded-md px-2 py-1 text-xs text-ink-500 hover:bg-surface-overlay hover:text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$174 = /* @__PURE__ */ template(`<div><div class="mt-3 space-y-2 border-t border-surface-border pt-3"><div class="flex items-center justify-between"><div class="text-xs text-ink-400"></div><div class="flex gap-2"><button type=button class="rounded-md px-2 py-1 text-xs font-medium text-primary-600 hover:bg-primary-50 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$184 = /* @__PURE__ */ template(`<p>`);
var _tmpl$194 = /* @__PURE__ */ template(`<div>`);
var _tmpl$204 = /* @__PURE__ */ template(`<span class="text-danger-500 ml-0.5"aria-hidden=true>*`);
var _tmpl$2112 = /* @__PURE__ */ template(`<div class=w-7>`);
var DAY_NAMES2 = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var MONTH_NAMES2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var ZH_DAY_NAMES2 = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"];
var ZH_MONTH_NAMES2 = ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"];
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
  return d.toLocaleDateString(void 0, {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
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
  const days = createMemo(() => getCalendarDays2(props.year, props.month));
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
  return (() => {
    var _el$ = _tmpl$120(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
    insert(_el$2, createComponent(For, {
      each: DAY_NAMES2,
      children: (name, i) => (() => {
        var _el$4 = _tmpl$228();
        insert(_el$4, (() => {
          var _c$ = memo(() => !!zh());
          return () => _c$() ? ZH_DAY_NAMES2[i()] : name;
        })());
        return _el$4;
      })()
    }));
    insert(_el$3, createComponent(For, {
      get each() {
        return days();
      },
      children: (day) => {
        const rangeStart = () => isRangeStart(day);
        const rangeEnd = () => isRangeEnd(day);
        const inRange = () => isInRange(day);
        const disabled = () => isDisabled(day);
        const otherMonth = () => !isCurrentMonth(day);
        const today = () => isToday(day);
        const selected = () => rangeStart() || rangeEnd();
        return (() => {
          var _el$5 = _tmpl$326(), _el$6 = _el$5.firstChild;
          _el$6.addEventListener("mouseleave", () => props.onDayHover(null));
          _el$6.addEventListener("mouseenter", () => !disabled() && props.onDayHover(day));
          _el$6.$$click = () => !disabled() && props.onDayClick(day);
          insert(_el$6, () => day.getDate(), null);
          insert(_el$6, (() => {
            var _c$2 = memo(() => !!(today() && !selected()));
            return () => _c$2() && _tmpl$425();
          })(), null);
          effect((_p$) => {
            var _v$ = cn("relative h-8 flex items-center justify-center", inRange() && "bg-primary-50", rangeStart() && "rounded-l-full", rangeEnd() && "rounded-r-full"), _v$2 = disabled(), _v$3 = cn("relative z-10 h-7 w-7 rounded-full text-xs transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", selected() ? "bg-primary-500 text-white font-semibold hover:bg-primary-600" : inRange() ? "text-primary-700 hover:bg-primary-100" : otherMonth() ? "text-ink-300 hover:bg-surface-overlay" : today() ? "text-primary-600 font-semibold hover:bg-surface-overlay" : "text-ink-800 hover:bg-surface-overlay", disabled() && "opacity-30");
            _v$ !== _p$.e && className(_el$5, _p$.e = _v$);
            _v$2 !== _p$.t && (_el$6.disabled = _p$.t = _v$2);
            _v$3 !== _p$.a && className(_el$6, _p$.a = _v$3);
            return _p$;
          }, {
            e: void 0,
            t: void 0,
            a: void 0
          });
          return _el$5;
        })();
      }
    }));
    return _el$;
  })();
}
function DateRangePicker(props) {
  const [local] = splitProps(props, ["start", "end", "onValueChange", "onErrorClear", "placeholder", "disabled", "min", "max", "label", "error", "helperText", "bare", "required", "optional", "dualMonth", "clearable", "size", "class", "id", "showTime", "timeFormat", "minuteStep"]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const contextSize = useComponentSize();
  const sc = () => inputSizeConfig[local.size ?? contextSize ?? "md"];
  const generatedId = createUniqueId();
  const inputId = () => local.id || `drp-${generatedId}`;
  const [open, setOpen] = createSignal(false);
  const [hover, setHover] = createSignal(null);
  const [pickingEnd, setPickingEnd] = createSignal(false);
  const [pendingStartHour, setPendingStartHour] = createSignal(0);
  const [pendingStartMinute, setPendingStartMinute] = createSignal(0);
  const [pendingEndHour, setPendingEndHour] = createSignal(23);
  const [pendingEndMinute, setPendingEndMinute] = createSignal(59);
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
    if (dateStr) local.onValueChange?.(`${dateStr}T${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`, local.end ?? "");
  }
  function handleEndTimeChange(h, m) {
    setPendingEndHour(h);
    setPendingEndMinute(m);
    const dateStr = local.end ? local.end.split("T")[0] : "";
    if (dateStr) local.onValueChange?.(local.start ?? "", `${dateStr}T${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
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
    return {
      year: base.getFullYear(),
      month: base.getMonth()
    };
  };
  const initViewRight = () => {
    const {
      year,
      month
    } = initView();
    const next = new Date(year, month + 1, 1);
    return {
      year: next.getFullYear(),
      month: next.getMonth()
    };
  };
  const [viewLeft, _setViewLeft] = createSignal(initView());
  const [viewRight, _setViewRight] = createSignal(initViewRight());
  const [viewModeLeft, setViewModeLeft] = createSignal("calendar");
  const [viewModeRight, setViewModeRight] = createSignal("calendar");
  function setViewLeft(v) {
    _setViewLeft(v);
    const r = viewRight();
    if (v.year > r.year || v.year === r.year && v.month >= r.month) {
      const next = new Date(v.year, v.month + 1, 1);
      _setViewRight({
        year: next.getFullYear(),
        month: next.getMonth()
      });
    }
  }
  function setViewRight(v) {
    _setViewRight(v);
    const l = viewLeft();
    if (v.year < l.year || v.year === l.year && v.month <= l.month) {
      const prev = new Date(v.year, v.month - 1, 1);
      _setViewLeft({
        year: prev.getFullYear(),
        month: prev.getMonth()
      });
    }
  }
  createEffect(on(open, (isOpen) => {
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
  }, {
    defer: true
  }));
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
    const {
      year,
      month
    } = viewLeft();
    const d = new Date(year, month - 1, 1);
    setViewLeft({
      year: d.getFullYear(),
      month: d.getMonth()
    });
  }
  function nextLeft() {
    const {
      year,
      month
    } = viewLeft();
    const d = new Date(year, month + 1, 1);
    setViewLeft({
      year: d.getFullYear(),
      month: d.getMonth()
    });
  }
  function setLeftMonth(m) {
    setViewLeft({
      year: viewLeft().year,
      month: m
    });
    setViewModeLeft("calendar");
  }
  function setLeftYear(y) {
    setViewLeft({
      year: y,
      month: viewLeft().month
    });
    setViewModeLeft("calendar");
  }
  function prevRight() {
    const {
      year,
      month
    } = viewRight();
    const d = new Date(year, month - 1, 1);
    setViewRight({
      year: d.getFullYear(),
      month: d.getMonth()
    });
  }
  function nextRight() {
    const {
      year,
      month
    } = viewRight();
    const d = new Date(year, month + 1, 1);
    setViewRight({
      year: d.getFullYear(),
      month: d.getMonth()
    });
  }
  function setRightMonth(m) {
    setViewRight({
      year: viewRight().year,
      month: m
    });
    setViewModeRight("calendar");
  }
  function setRightYear(y) {
    setViewRight({
      year: y,
      month: viewRight().month
    });
    setViewModeRight("calendar");
  }
  function prevMonth() {
    const {
      year,
      month
    } = viewLeft();
    const d = new Date(year, month - 1, 1);
    _setViewLeft({
      year: d.getFullYear(),
      month: d.getMonth()
    });
  }
  function nextMonth() {
    const {
      year,
      month
    } = viewLeft();
    const d = new Date(year, month + 1, 1);
    _setViewLeft({
      year: d.getFullYear(),
      month: d.getMonth()
    });
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
    return Array.from({
      length: maxY - minY + 1
    }, (_, i) => minY + i);
  };
  const formatOne = (raw) => {
    if (!raw) return "";
    if (local.showTime && raw.includes("T")) {
      const [datePart, timePart] = raw.split("T");
      const d = parseDate2(datePart);
      if (!d) return "";
      const [h, m] = timePart.split(":").map(Number);
      const dateStr = d.toLocaleDateString(void 0, {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
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
  const TimeRow = (p) => (() => {
    var _el$8 = _tmpl$621(), _el$9 = _el$8.firstChild, _el$0 = _el$9.nextSibling, _el$1 = _el$0.firstChild;
    insert(_el$9, () => p.label);
    insert(_el$0, createComponent(Show, {
      get when() {
        return is12h();
      },
      get fallback() {
        return createComponent(TimeSelect, {
          get value() {
            return p.hour();
          },
          get options() {
            return Array.from({
              length: 24
            }, (_, i) => i);
          },
          get onChange() {
            return p.onHour24;
          }
        });
      },
      get children() {
        return createComponent(TimeSelect, {
          get value() {
            return p.hour12();
          },
          get options() {
            return Array.from({
              length: 12
            }, (_, i) => i + 1);
          },
          get onChange() {
            return p.onHour12;
          }
        });
      }
    }), _el$1);
    insert(_el$0, createComponent(TimeSelect, {
      get value() {
        return p.minute();
      },
      get options() {
        return Array.from({
          length: Math.ceil(60 / (local.minuteStep ?? 1))
        }, (_, i) => i * (local.minuteStep ?? 1));
      },
      get onChange() {
        return p.onMinute;
      }
    }), null);
    insert(_el$0, createComponent(Show, {
      get when() {
        return is12h();
      },
      get children() {
        var _el$10 = _tmpl$522();
        addEventListener(_el$10, "click", p.onToggleAmPm, true);
        insert(_el$10, () => p.ampm());
        return _el$10;
      }
    }), null);
    return _el$8;
  })();
  const hasError = () => !!local.error;
  const msgId = () => local.error || local.helperText ? `${inputId()}-msg` : void 0;
  const ColumnPicker = (colProps) => [createComponent(Show, {
    get when() {
      return colProps.viewMode === "months";
    },
    get children() {
      var _el$11 = _tmpl$718();
      insert(_el$11, createComponent(For, {
        each: MONTH_NAMES2,
        children: (name, mi) => (() => {
          var _el$13 = _tmpl$912();
          _el$13.$$click = () => colProps.onSelectMonth(mi());
          insert(_el$13, (() => {
            var _c$3 = memo(() => !!zh());
            return () => _c$3() ? ZH_MONTH_NAMES2[mi()] : name.slice(0, 3);
          })());
          effect((_p$) => {
            var _v$4 = isMonthDisabledFor(colProps.viewYear, mi()), _v$5 = cn("rounded-lg py-2 text-xs font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50", isMonthDisabledFor(colProps.viewYear, mi()) ? "opacity-30" : mi() === colProps.viewMonth ? "bg-primary-500 text-white" : "text-ink-700 hover:bg-surface-overlay");
            _v$4 !== _p$.e && (_el$13.disabled = _p$.e = _v$4);
            _v$5 !== _p$.t && className(_el$13, _p$.t = _v$5);
            return _p$;
          }, {
            e: void 0,
            t: void 0
          });
          return _el$13;
        })()
      }));
      return _el$11;
    }
  }), createComponent(Show, {
    get when() {
      return colProps.viewMode === "years";
    },
    get children() {
      var _el$12 = _tmpl$817();
      insert(_el$12, createComponent(For, {
        get each() {
          return yearsListFor(colProps.viewYear);
        },
        children: (y) => (() => {
          var _el$14 = _tmpl$912();
          _el$14.$$click = () => colProps.onSelectYear(y);
          insert(_el$14, y);
          effect(() => className(_el$14, cn("rounded-lg py-2 text-xs font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50", y === colProps.viewYear ? "bg-primary-500 text-white" : "text-ink-700 hover:bg-surface-overlay")));
          return _el$14;
        })()
      }));
      return _el$12;
    }
  })];
  return (() => {
    var _el$15 = _tmpl$194();
    insert(_el$15, createComponent(Show, {
      get when() {
        return memo(() => !!!local.bare)() && local.label;
      },
      get children() {
        var _el$16 = _tmpl$121(), _el$17 = _el$16.firstChild;
        insert(_el$17, () => local.label, null);
        insert(_el$17, (() => {
          var _c$4 = memo(() => !!local.required);
          return () => _c$4() && _tmpl$204();
        })(), null);
        insert(_el$16, createComponent(Show, {
          get when() {
            return memo(() => !!!local.required)() && local.optional;
          },
          get children() {
            var _el$18 = _tmpl$06();
            insert(_el$18, () => zh() ? "\u9009\u586B" : "optional");
            return _el$18;
          }
        }), null);
        effect((_p$) => {
          var _v$6 = inputId(), _v$7 = cn("block text-sm font-medium", hasError() ? "text-danger-600 dark:text-danger-400" : "text-ink-700");
          _v$6 !== _p$.e && setAttribute(_el$17, "for", _p$.e = _v$6);
          _v$7 !== _p$.t && className(_el$17, _p$.t = _v$7);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$16;
      }
    }), null);
    insert(_el$15, createComponent(Popover$1, {
      get open() {
        return open();
      },
      onOpenChange: (next) => {
        setOpen(next);
      },
      gutter: 8,
      get children() {
        return [(() => {
          var _el$19 = _tmpl$125();
          insert(_el$19, createComponent(Popover$1.Trigger, {
            as: "button",
            type: "button",
            get id() {
              return inputId();
            },
            get disabled() {
              return local.disabled;
            },
            get ["aria-describedby"]() {
              return msgId();
            },
            get ["aria-invalid"]() {
              return hasError() ? "true" : void 0;
            },
            get ["class"]() {
              return cn("inline-flex w-full items-center gap-2 rounded-lg border transition-colors", sc().h, sc().py, sc().pl, sc().text, sc().pr, "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500", hasError() ? "border-danger-500 bg-surface-raised text-ink-900 hover:border-danger-600" : "border-surface-border bg-surface-raised text-ink-900 hover:border-ink-400", local.disabled && "opacity-50", clearable() && (local.start || local.end) && !local.disabled && "pr-8");
            },
            get children() {
              return [memo(() => icons.calendar({
                class: "h-4 w-4 shrink-0 text-ink-400",
                "aria-hidden": "true"
              })), (() => {
                var _el$20 = _tmpl$1012();
                insert(_el$20, () => displayValue() || (local.placeholder ?? (zh() ? "\u9009\u62E9\u65E5\u671F\u8303\u56F4" : "Pick a date range")));
                effect(() => className(_el$20, cn("truncate", displayValue() ? "text-ink-900" : "text-ink-400")));
                return _el$20;
              })()];
            }
          }), null);
          insert(_el$19, createComponent(Show, {
            get when() {
              return memo(() => !!(clearable() && (local.start || local.end)))() && !local.disabled;
            },
            get children() {
              var _el$21 = _tmpl$1110();
              _el$21.$$click = (e) => {
                e.stopPropagation();
                clearRange();
              };
              insert(_el$21, () => icons.close({
                class: "h-3.5 w-3.5",
                "aria-hidden": "true"
              }));
              effect(() => setAttribute(_el$21, "aria-label", zh() ? "\u6E05\u9664\u65E5\u671F\u8303\u56F4" : "Clear date range"));
              return _el$21;
            }
          }), null);
          return _el$19;
        })(), createComponent(Popover$1.Portal, {
          get children() {
            return createComponent(Popover$1.Content, {
              "data-kb-top-layer": "",
              get ["class"]() {
                return cn("z-[80] rounded-xl border border-surface-border bg-surface-raised shadow-xl", "origin-top data-[expanded]:animate-in data-[expanded]:fade-in-0 data-[expanded]:zoom-in-95", "data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95");
              },
              get children() {
                var _el$22 = _tmpl$174(), _el$45 = _el$22.firstChild, _el$46 = _el$45.firstChild, _el$47 = _el$46.firstChild, _el$48 = _el$47.nextSibling, _el$50 = _el$48.firstChild;
                insert(_el$22, createComponent(Show, {
                  get when() {
                    return dual();
                  },
                  get children() {
                    var _el$23 = _tmpl$135(), _el$24 = _el$23.firstChild, _el$25 = _el$24.firstChild, _el$26 = _el$25.firstChild, _el$27 = _el$26.nextSibling, _el$28 = _el$27.firstChild, _el$29 = _el$28.nextSibling, _el$30 = _el$27.nextSibling, _el$31 = _el$24.nextSibling, _el$32 = _el$31.nextSibling, _el$33 = _el$32.firstChild, _el$34 = _el$33.firstChild, _el$35 = _el$34.nextSibling, _el$36 = _el$35.firstChild, _el$37 = _el$36.nextSibling, _el$38 = _el$35.nextSibling;
                    _el$26.$$click = prevLeft;
                    insert(_el$26, () => icons.chevronLeft({
                      class: "h-4 w-4",
                      "aria-hidden": "true"
                    }));
                    _el$28.$$click = () => setViewModeLeft(viewModeLeft() === "months" ? "calendar" : "months");
                    insert(_el$28, (() => {
                      var _c$5 = memo(() => !!zh());
                      return () => _c$5() ? ZH_MONTH_NAMES2[viewLeft().month] : MONTH_NAMES2[viewLeft().month];
                    })());
                    _el$29.$$click = () => setViewModeLeft(viewModeLeft() === "years" ? "calendar" : "years");
                    insert(_el$29, () => viewLeft().year);
                    _el$30.$$click = nextLeft;
                    insert(_el$30, () => icons.chevronRight({
                      class: "h-4 w-4",
                      "aria-hidden": "true"
                    }));
                    insert(_el$24, createComponent(Show, {
                      get when() {
                        return viewModeLeft() === "calendar";
                      },
                      get fallback() {
                        return createComponent(ColumnPicker, {
                          get viewYear() {
                            return viewLeft().year;
                          },
                          get viewMonth() {
                            return viewLeft().month;
                          },
                          get viewMode() {
                            return viewModeLeft();
                          },
                          onSelectMonth: setLeftMonth,
                          onSelectYear: setLeftYear
                        });
                      },
                      get children() {
                        return createComponent(MonthGrid, {
                          get year() {
                            return viewLeft().year;
                          },
                          get month() {
                            return viewLeft().month;
                          },
                          get start() {
                            return startDate();
                          },
                          get end() {
                            return endDate();
                          },
                          get hover() {
                            return hover();
                          },
                          get min() {
                            return minDate();
                          },
                          get max() {
                            return maxDate();
                          },
                          get selectableFrom() {
                            return memo(() => !!pickingEnd())() ? startDate() : null;
                          },
                          onDayClick: handleDayClick,
                          onDayHover: setHover
                        });
                      }
                    }), null);
                    insert(_el$24, createComponent(Show, {
                      get when() {
                        return local.showTime;
                      },
                      get children() {
                        return createComponent(TimeRow, {
                          get label() {
                            return zh() ? "\u5F00\u59CB" : "Start";
                          },
                          hour: pendingStartHour,
                          hour12: displayStartHour12,
                          ampm: displayStartAmPm,
                          minute: pendingStartMinute,
                          onHour24: (h) => handleStartTimeChange(h, pendingStartMinute()),
                          onHour12: handleStartHour12Change,
                          onMinute: (m) => handleStartTimeChange(pendingStartHour(), m),
                          onToggleAmPm: toggleStartAmPm
                        });
                      }
                    }), null);
                    _el$34.$$click = prevRight;
                    insert(_el$34, () => icons.chevronLeft({
                      class: "h-4 w-4",
                      "aria-hidden": "true"
                    }));
                    _el$36.$$click = () => setViewModeRight(viewModeRight() === "months" ? "calendar" : "months");
                    insert(_el$36, (() => {
                      var _c$6 = memo(() => !!zh());
                      return () => _c$6() ? ZH_MONTH_NAMES2[viewRight().month] : MONTH_NAMES2[viewRight().month];
                    })());
                    _el$37.$$click = () => setViewModeRight(viewModeRight() === "years" ? "calendar" : "years");
                    insert(_el$37, () => viewRight().year);
                    _el$38.$$click = nextRight;
                    insert(_el$38, () => icons.chevronRight({
                      class: "h-4 w-4",
                      "aria-hidden": "true"
                    }));
                    insert(_el$32, createComponent(Show, {
                      get when() {
                        return viewModeRight() === "calendar";
                      },
                      get fallback() {
                        return createComponent(ColumnPicker, {
                          get viewYear() {
                            return viewRight().year;
                          },
                          get viewMonth() {
                            return viewRight().month;
                          },
                          get viewMode() {
                            return viewModeRight();
                          },
                          onSelectMonth: setRightMonth,
                          onSelectYear: setRightYear
                        });
                      },
                      get children() {
                        return createComponent(MonthGrid, {
                          get year() {
                            return viewRight().year;
                          },
                          get month() {
                            return viewRight().month;
                          },
                          get start() {
                            return startDate();
                          },
                          get end() {
                            return endDate();
                          },
                          get hover() {
                            return hover();
                          },
                          get min() {
                            return minDate();
                          },
                          get max() {
                            return maxDate();
                          },
                          get selectableFrom() {
                            return memo(() => !!pickingEnd())() ? startDate() : null;
                          },
                          onDayClick: handleDayClick,
                          onDayHover: setHover
                        });
                      }
                    }), null);
                    insert(_el$32, createComponent(Show, {
                      get when() {
                        return local.showTime;
                      },
                      get children() {
                        return createComponent(TimeRow, {
                          get label() {
                            return zh() ? "\u7ED3\u675F" : "End";
                          },
                          hour: pendingEndHour,
                          hour12: displayEndHour12,
                          ampm: displayEndAmPm,
                          minute: pendingEndMinute,
                          onHour24: (h) => handleEndTimeChange(h, pendingEndMinute()),
                          onHour12: handleEndHour12Change,
                          onMinute: (m) => handleEndTimeChange(pendingEndHour(), m),
                          onToggleAmPm: toggleEndAmPm
                        });
                      }
                    }), null);
                    effect((_p$) => {
                      var _v$8 = zh() ? "\u4E0A\u4E2A\u6708" : "Previous month", _v$9 = zh() ? "\u4E0B\u4E2A\u6708" : "Next month", _v$0 = zh() ? "\u4E0A\u4E2A\u6708" : "Previous month", _v$1 = zh() ? "\u4E0B\u4E2A\u6708" : "Next month";
                      _v$8 !== _p$.e && setAttribute(_el$26, "aria-label", _p$.e = _v$8);
                      _v$9 !== _p$.t && setAttribute(_el$30, "aria-label", _p$.t = _v$9);
                      _v$0 !== _p$.a && setAttribute(_el$34, "aria-label", _p$.a = _v$0);
                      _v$1 !== _p$.o && setAttribute(_el$38, "aria-label", _p$.o = _v$1);
                      return _p$;
                    }, {
                      e: void 0,
                      t: void 0,
                      a: void 0,
                      o: void 0
                    });
                    return _el$23;
                  }
                }), _el$45);
                insert(_el$22, createComponent(Show, {
                  get when() {
                    return !dual();
                  },
                  get children() {
                    return [(() => {
                      var _el$39 = _tmpl$154(), _el$41 = _el$39.firstChild, _el$42 = _el$41.firstChild, _el$43 = _el$42.nextSibling;
                      insert(_el$39, createComponent(Show, {
                        get when() {
                          return viewModeLeft() !== "calendar";
                        },
                        get fallback() {
                          return (() => {
                            var _el$53 = _tmpl$144();
                            _el$53.$$click = prevMonth;
                            insert(_el$53, () => icons.chevronLeft({
                              class: "h-4 w-4",
                              "aria-hidden": "true"
                            }));
                            effect(() => setAttribute(_el$53, "aria-label", zh() ? "\u4E0A\u4E2A\u6708" : "Previous month"));
                            return _el$53;
                          })();
                        },
                        get children() {
                          var _el$40 = _tmpl$144();
                          _el$40.$$click = () => setViewModeLeft("calendar");
                          insert(_el$40, () => icons.chevronLeft({
                            class: "h-4 w-4",
                            "aria-hidden": "true"
                          }));
                          effect(() => setAttribute(_el$40, "aria-label", zh() ? "\u8FD4\u56DE\u65E5\u5386" : "Back to calendar"));
                          return _el$40;
                        }
                      }), _el$41);
                      _el$42.$$click = () => setViewModeLeft(viewModeLeft() === "months" ? "calendar" : "months");
                      insert(_el$42, (() => {
                        var _c$7 = memo(() => !!zh());
                        return () => _c$7() ? ZH_MONTH_NAMES2[viewLeft().month] : MONTH_NAMES2[viewLeft().month];
                      })());
                      _el$43.$$click = () => setViewModeLeft(viewModeLeft() === "years" ? "calendar" : "years");
                      insert(_el$43, () => viewLeft().year);
                      insert(_el$39, createComponent(Show, {
                        get when() {
                          return viewModeLeft() === "calendar";
                        },
                        get fallback() {
                          return _tmpl$2112();
                        },
                        get children() {
                          var _el$44 = _tmpl$144();
                          _el$44.$$click = nextMonth;
                          insert(_el$44, () => icons.chevronRight({
                            class: "h-4 w-4",
                            "aria-hidden": "true"
                          }));
                          effect(() => setAttribute(_el$44, "aria-label", zh() ? "\u4E0B\u4E2A\u6708" : "Next month"));
                          return _el$44;
                        }
                      }), null);
                      return _el$39;
                    })(), createComponent(Show, {
                      get when() {
                        return viewModeLeft() === "calendar";
                      },
                      get fallback() {
                        return createComponent(ColumnPicker, {
                          get viewYear() {
                            return viewLeft().year;
                          },
                          get viewMonth() {
                            return viewLeft().month;
                          },
                          get viewMode() {
                            return viewModeLeft();
                          },
                          onSelectMonth: (m) => {
                            _setViewLeft({
                              year: viewLeft().year,
                              month: m
                            });
                            setViewModeLeft("calendar");
                          },
                          onSelectYear: (y) => {
                            _setViewLeft({
                              year: y,
                              month: viewLeft().month
                            });
                            setViewModeLeft("calendar");
                          }
                        });
                      },
                      get children() {
                        return createComponent(MonthGrid, {
                          get year() {
                            return viewLeft().year;
                          },
                          get month() {
                            return viewLeft().month;
                          },
                          get start() {
                            return startDate();
                          },
                          get end() {
                            return endDate();
                          },
                          get hover() {
                            return hover();
                          },
                          get min() {
                            return minDate();
                          },
                          get max() {
                            return maxDate();
                          },
                          get selectableFrom() {
                            return memo(() => !!pickingEnd())() ? startDate() : null;
                          },
                          onDayClick: handleDayClick,
                          onDayHover: setHover
                        });
                      }
                    }), createComponent(Show, {
                      get when() {
                        return local.showTime;
                      },
                      get children() {
                        return [createComponent(TimeRow, {
                          get label() {
                            return zh() ? "\u5F00\u59CB" : "Start";
                          },
                          hour: pendingStartHour,
                          hour12: displayStartHour12,
                          ampm: displayStartAmPm,
                          minute: pendingStartMinute,
                          onHour24: (h) => handleStartTimeChange(h, pendingStartMinute()),
                          onHour12: handleStartHour12Change,
                          onMinute: (m) => handleStartTimeChange(pendingStartHour(), m),
                          onToggleAmPm: toggleStartAmPm
                        }), createComponent(TimeRow, {
                          get label() {
                            return zh() ? "\u7ED3\u675F" : "End";
                          },
                          hour: pendingEndHour,
                          hour12: displayEndHour12,
                          ampm: displayEndAmPm,
                          minute: pendingEndMinute,
                          onHour24: (h) => handleEndTimeChange(h, pendingEndMinute()),
                          onHour12: handleEndHour12Change,
                          onMinute: (m) => handleEndTimeChange(pendingEndHour(), m),
                          onToggleAmPm: toggleEndAmPm
                        })];
                      }
                    })];
                  }
                }), _el$45);
                insert(_el$47, (() => {
                  var _c$8 = memo(() => !!pickingEnd());
                  return () => _c$8() ? zh() ? "\u73B0\u5728\u9009\u62E9\u7ED3\u675F\u65E5\u671F" : "Now select an end date" : memo(() => !!(local.start && local.end))() ? displayValue() : zh() ? "\u9009\u62E9\u5F00\u59CB\u65E5\u671F" : "Select a start date";
                })());
                insert(_el$48, createComponent(Show, {
                  get when() {
                    return memo(() => !!clearable())() && (local.start || local.end);
                  },
                  get children() {
                    var _el$49 = _tmpl$164();
                    _el$49.$$click = clearRange;
                    insert(_el$49, () => zh() ? "\u6E05\u9664" : "Clear");
                    return _el$49;
                  }
                }), _el$50);
                _el$50.$$click = () => setOpen(false);
                insert(_el$50, () => zh() ? "\u5B8C\u6210" : "Done");
                effect(() => className(_el$22, cn("p-3", dual() ? "w-[596px]" : "w-[268px]")));
                return _el$22;
              }
            });
          }
        })];
      }
    }), null);
    insert(_el$15, createComponent(Show, {
      get when() {
        return local.error || local.helperText;
      },
      get children() {
        var _el$51 = _tmpl$184();
        insert(_el$51, () => local.error ?? local.helperText);
        effect((_p$) => {
          var _v$10 = msgId(), _v$11 = cn("mt-1.5 text-xs", hasError() ? "text-danger-600 dark:text-danger-400" : "text-ink-500");
          _v$10 !== _p$.e && setAttribute(_el$51, "id", _p$.e = _v$10);
          _v$11 !== _p$.t && className(_el$51, _p$.t = _v$11);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$51;
      }
    }), null);
    effect(() => className(_el$15, cn("w-full", local.class)));
    return _el$15;
  })();
}
delegateEvents(["click"]);
var _tmpl$126 = /* @__PURE__ */ template(`<span class="text-xs text-ink-400">`);
var _tmpl$229 = /* @__PURE__ */ template(`<div class="mb-2 flex items-center justify-between"><label>`);
var _tmpl$327 = /* @__PURE__ */ template(`<span>`);
var _tmpl$426 = /* @__PURE__ */ template(`<button type=button class="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-ink-400 hover:text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$523 = /* @__PURE__ */ template(`<div class=relative>`);
var _tmpl$622 = /* @__PURE__ */ template(`<button type=button class="rounded-md border border-surface-border bg-surface-raised px-2 py-1 text-xs font-medium text-ink-700 hover:bg-surface-overlay transition-colors min-w-[2.5rem] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50">`);
var _tmpl$719 = /* @__PURE__ */ template(`<button type=button class="rounded-md px-2 py-1 text-xs text-ink-500 hover:bg-surface-overlay hover:text-ink-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$818 = /* @__PURE__ */ template(`<div class="w-[220px] p-4"><div class="flex items-center justify-center gap-2"><span class="text-sm font-semibold text-ink-400">:</span></div><div class="mt-3 flex items-center justify-between border-t border-surface-border pt-3"><div class="text-xs text-ink-400"></div><div class="flex gap-2"><button type=button class="rounded-md px-2 py-1 text-xs font-medium text-primary-600 hover:bg-primary-50 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var _tmpl$913 = /* @__PURE__ */ template(`<p>`);
var _tmpl$07 = /* @__PURE__ */ template(`<div>`);
var _tmpl$127 = /* @__PURE__ */ template(`<span class="text-danger-500 ml-0.5"aria-hidden=true>*`);
function TimePicker(props) {
  const [local] = splitProps(props, ["value", "onValueChange", "onErrorClear", "placeholder", "disabled", "label", "error", "helperText", "bare", "required", "optional", "size", "class", "id", "timeFormat", "minuteStep"]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const contextSize = useComponentSize();
  const sc = () => inputSizeConfig[local.size ?? contextSize ?? "md"];
  const generatedId = createUniqueId();
  const inputId = () => local.id || `timepicker-${generatedId}`;
  const [open, setOpen] = createSignal(false);
  const is12h = () => local.timeFormat !== "24h";
  const step = () => local.minuteStep ?? 1;
  const parseValue = () => {
    if (!local.value) return null;
    const [h, m] = local.value.split(":").map(Number);
    if (isNaN(h) || isNaN(m)) return null;
    return {
      h,
      m
    };
  };
  const [pendingHour, setPendingHour] = createSignal(0);
  const [pendingMinute, setPendingMinute] = createSignal(0);
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
    const {
      h,
      m
    } = parsed;
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
  return (() => {
    var _el$ = _tmpl$07();
    insert(_el$, createComponent(Show, {
      get when() {
        return memo(() => !!!local.bare)() && local.label;
      },
      get children() {
        var _el$2 = _tmpl$229(), _el$3 = _el$2.firstChild;
        insert(_el$3, () => local.label, null);
        insert(_el$3, (() => {
          var _c$ = memo(() => !!local.required);
          return () => _c$() && _tmpl$127();
        })(), null);
        insert(_el$2, createComponent(Show, {
          get when() {
            return memo(() => !!!local.required)() && local.optional;
          },
          get children() {
            var _el$4 = _tmpl$126();
            insert(_el$4, () => zh() ? "\u9009\u586B" : "optional");
            return _el$4;
          }
        }), null);
        effect((_p$) => {
          var _v$ = inputId(), _v$2 = cn("block text-sm font-medium", hasError() ? "text-danger-600 dark:text-danger-400" : "text-ink-700");
          _v$ !== _p$.e && setAttribute(_el$3, "for", _p$.e = _v$);
          _v$2 !== _p$.t && className(_el$3, _p$.t = _v$2);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$2;
      }
    }), null);
    insert(_el$, createComponent(Popover$1, {
      get open() {
        return open();
      },
      onOpenChange,
      gutter: 8,
      get children() {
        return [(() => {
          var _el$5 = _tmpl$523();
          insert(_el$5, createComponent(Popover$1.Trigger, {
            as: "button",
            type: "button",
            get id() {
              return inputId();
            },
            get disabled() {
              return local.disabled;
            },
            get ["aria-describedby"]() {
              return msgId();
            },
            get ["aria-invalid"]() {
              return hasError() ? "true" : void 0;
            },
            get ["class"]() {
              return cn("inline-flex w-full items-center gap-2 rounded-lg border transition-colors", sc().h, sc().py, sc().pl, sc().text, displayValue() && !local.disabled ? "pr-8" : sc().pr, hasError() ? "border-danger-500 bg-surface-raised text-ink-900 hover:border-danger-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-danger-500 focus-visible:border-transparent" : "border-surface-border bg-surface-raised text-ink-900 hover:border-ink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 focus-visible:border-transparent", local.disabled && "opacity-50");
            },
            get children() {
              return [memo(() => icons.clock({
                class: "h-4 w-4 shrink-0 text-ink-400",
                "aria-hidden": "true"
              })), (() => {
                var _el$6 = _tmpl$327();
                insert(_el$6, () => displayValue() || (local.placeholder ?? (zh() ? "\u9009\u62E9\u65F6\u95F4" : "Select time")));
                effect(() => className(_el$6, cn("truncate", displayValue() ? "text-ink-900" : "text-ink-400")));
                return _el$6;
              })()];
            }
          }), null);
          insert(_el$5, createComponent(Show, {
            get when() {
              return memo(() => !!displayValue())() && !local.disabled;
            },
            get children() {
              var _el$7 = _tmpl$426();
              _el$7.$$click = (e) => {
                e.stopPropagation();
                clearValue();
              };
              insert(_el$7, () => icons.close({
                class: "h-3.5 w-3.5",
                "aria-hidden": "true"
              }));
              effect(() => setAttribute(_el$7, "aria-label", zh() ? "\u6E05\u9664\u65F6\u95F4" : "Clear time"));
              return _el$7;
            }
          }), null);
          return _el$5;
        })(), createComponent(Popover$1.Portal, {
          get children() {
            return createComponent(Popover$1.Content, {
              "data-kb-top-layer": "",
              role: "dialog",
              get ["aria-label"]() {
                return zh() ? "\u9009\u62E9\u65F6\u95F4" : "Choose time";
              },
              get ["class"]() {
                return cn("z-[80] rounded-xl border border-surface-border bg-surface-raised shadow-xl outline-none", "origin-top data-[expanded]:animate-in data-[expanded]:fade-in-0 data-[expanded]:zoom-in-95", "data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95");
              },
              get children() {
                var _el$8 = _tmpl$818(), _el$9 = _el$8.firstChild, _el$0 = _el$9.firstChild, _el$10 = _el$9.nextSibling, _el$11 = _el$10.firstChild, _el$12 = _el$11.nextSibling, _el$14 = _el$12.firstChild;
                insert(_el$9, createComponent(Show, {
                  get when() {
                    return is12h();
                  },
                  get fallback() {
                    return createComponent(TimeSelect, {
                      get value() {
                        return pendingHour();
                      },
                      get options() {
                        return Array.from({
                          length: 24
                        }, (_, i) => i);
                      },
                      onChange: (v) => commit(v, pendingMinute())
                    });
                  },
                  get children() {
                    return createComponent(TimeSelect, {
                      get value() {
                        return displayHour12();
                      },
                      get options() {
                        return Array.from({
                          length: 12
                        }, (_, i) => i + 1);
                      },
                      onChange: handleHour12Change
                    });
                  }
                }), _el$0);
                insert(_el$9, createComponent(TimeSelect, {
                  get value() {
                    return pendingMinute();
                  },
                  get options() {
                    return Array.from({
                      length: Math.ceil(60 / step())
                    }, (_, i) => i * step());
                  },
                  onChange: (v) => commit(pendingHour(), v)
                }), null);
                insert(_el$9, createComponent(Show, {
                  get when() {
                    return is12h();
                  },
                  get children() {
                    var _el$1 = _tmpl$622();
                    _el$1.$$click = toggleAmPm;
                    insert(_el$1, displayAmPm);
                    return _el$1;
                  }
                }), null);
                insert(_el$11, () => displayValue() || (zh() ? "\u672A\u9009\u62E9\u65F6\u95F4" : "No time selected"));
                insert(_el$12, createComponent(Show, {
                  get when() {
                    return displayValue();
                  },
                  get children() {
                    var _el$13 = _tmpl$719();
                    _el$13.$$click = () => {
                      clearValue();
                      setOpen(false);
                    };
                    insert(_el$13, () => zh() ? "\u6E05\u9664" : "Clear");
                    return _el$13;
                  }
                }), _el$14);
                _el$14.$$click = () => setOpen(false);
                insert(_el$14, () => zh() ? "\u5B8C\u6210" : "Done");
                return _el$8;
              }
            });
          }
        })];
      }
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return local.error || local.helperText;
      },
      get children() {
        var _el$15 = _tmpl$913();
        insert(_el$15, () => local.error ?? local.helperText);
        effect((_p$) => {
          var _v$3 = msgId(), _v$4 = cn("mt-1.5 text-xs", hasError() ? "text-danger-600 dark:text-danger-400" : "text-ink-500");
          _v$3 !== _p$.e && setAttribute(_el$15, "id", _p$.e = _v$3);
          _v$4 !== _p$.t && className(_el$15, _p$.t = _v$4);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$15;
      }
    }), null);
    effect(() => className(_el$, cn("w-full", local.class)));
    return _el$;
  })();
}
delegateEvents(["click"]);

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
  return "#" + rr + gg + bb;
}

// src/components/forms/ColorPicker/ColorPicker.tsx
var _tmpl$128 = /* @__PURE__ */ template(`<span class="text-danger-500 ml-0.5"aria-hidden=true>*`);
var _tmpl$230 = /* @__PURE__ */ template(`<span class="text-xs text-ink-500">`);
var _tmpl$328 = /* @__PURE__ */ template(`<div class="flex items-center justify-between gap-2 mb-1.5"><label>`);
var _tmpl$427 = /* @__PURE__ */ template(`<div class="flex flex-wrap gap-1.5"><button type=button>`);
var _tmpl$524 = /* @__PURE__ */ template(`<p class="mt-2 text-sm text-ink-500">`);
var _tmpl$623 = /* @__PURE__ */ template(`<p class="mt-2 text-sm text-danger-600">`);
var _tmpl$720 = /* @__PURE__ */ template(`<div><div class="flex flex-wrap items-center gap-2">`);
var _tmpl$819 = /* @__PURE__ */ template(`<button type=button>`);
var _tmpl$914 = /* @__PURE__ */ template(`<div class="mb-3 flex gap-1 rounded-lg bg-surface-overlay p-1">`);
var _tmpl$08 = /* @__PURE__ */ template(`<div class="flex flex-1 items-center gap-2"><input type=text class="w-full rounded-lg border border-surface-border bg-surface-raised px-2 py-1.5 font-mono text-sm text-ink-900">`);
var _tmpl$129 = /* @__PURE__ */ template(`<div class="flex items-center gap-1">`);
var _tmpl$1013 = /* @__PURE__ */ template(`<div class=mb-4><p class="mb-1.5 text-xs font-medium text-ink-500"></p><div class="flex flex-wrap gap-1.5">`);
var _tmpl$1111 = /* @__PURE__ */ template(`<div class="w-[320px] overflow-hidden rounded-xl border border-surface-border bg-surface-raised p-4 shadow-xl"><div class="mb-3 flex items-center justify-between"><span class="text-sm font-semibold text-ink-900"></span><button type=button class="rounded p-1 text-ink-400 hover:bg-surface-overlay hover:text-ink-600"></button></div><div class=mb-3></div><div class=mb-3></div><div class="mb-4 flex flex-wrap items-center gap-2"></div><div class="flex justify-end gap-2">`);
var _tmpl$1210 = /* @__PURE__ */ template(`<button type=button class="h-7 w-7 shrink-0 rounded-md border border-surface-border shadow-sm transition hover:scale-105 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">`);
var DEFAULT_PRESETS = ["#000000", "#374151", "#6b7280", "#9ca3af", "#d1d5db", "#ffffff", "#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899"];
function colorToHex(c) {
  const rgb = c.toFormat("rgb");
  const r = Math.round(rgb.getChannelValue("red"));
  const g = Math.round(rgb.getChannelValue("green"));
  const b = Math.round(rgb.getChannelValue("blue"));
  return rgbaToHex(r, g, b);
}
function safeParseColor(hex) {
  const normalized = normalizeHex(hex);
  if (!normalized) return parseColor("#000000");
  try {
    return parseColor(normalized);
  } catch {
    return parseColor("#000000");
  }
}
function ColorPicker(props) {
  const [local, rest] = splitProps(props, ["value", "onValueChange", "presets", "label", "error", "helperText", "bare", "required", "optional", "onErrorClear", "size", "disabled", "class", "lastUsedCount", "allowedFormats", "predefined"]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const triggerId = createUniqueId();
  const hasError = () => !!local.error;
  const presets = () => local.presets ?? [...DEFAULT_PRESETS];
  const lastUsedMax = () => local.lastUsedCount ?? 9;
  const [customOpen, setCustomOpen] = createSignal(false);
  const [lastUsed, setLastUsed] = createSignal([]);
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
  const presetSet = createMemo(() => new Set(presets().map(normalizeHex).filter(Boolean)));
  const isPreset = (hex) => presetSet().has(normalizeHex(hex));
  return (() => {
    var _el$ = _tmpl$720(), _el$6 = _el$.firstChild;
    spread(_el$, mergeProps({
      get ["class"]() {
        return cn("w-full", local.class);
      }
    }, rest), false, true);
    insert(_el$, createComponent(Show, {
      get when() {
        return memo(() => !!!local.bare)() && local.label;
      },
      get children() {
        var _el$2 = _tmpl$328(), _el$3 = _el$2.firstChild;
        setAttribute(_el$3, "for", triggerId);
        insert(_el$3, () => local.label, null);
        insert(_el$3, createComponent(Show, {
          get when() {
            return local.required;
          },
          get children() {
            return _tmpl$128();
          }
        }), null);
        insert(_el$2, createComponent(Show, {
          get when() {
            return memo(() => !!!local.required)() && local.optional;
          },
          get children() {
            var _el$5 = _tmpl$230();
            insert(_el$5, () => zh() ? "\u9009\u586B" : "optional");
            return _el$5;
          }
        }), null);
        effect(() => className(_el$3, cn("block text-sm font-medium", hasError() ? "text-danger-600" : "text-ink-700")));
        return _el$2;
      }
    }), _el$6);
    insert(_el$6, createComponent(Popover$1, {
      get open() {
        return customOpen();
      },
      onOpenChange: setCustomOpen,
      get children() {
        return [createComponent(Popover$1.Trigger, {
          as: "button",
          type: "button",
          id: triggerId,
          get disabled() {
            return local.disabled;
          },
          get ["class"]() {
            return cn("h-10 w-10 shrink-0 rounded-lg border-2 shadow-sm transition outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 disabled:opacity-50 disabled:cursor-pointer", hasError() ? "border-danger-500 hover:border-danger-600" : "border-surface-border hover:border-ink-300");
          },
          get style() {
            return {
              "background-color": currentHex() || "transparent"
            };
          },
          get title() {
            return zh() ? "\u9009\u62E9\u989C\u8272" : "Choose color";
          },
          get ["aria-label"]() {
            return zh() ? "\u9009\u62E9\u989C\u8272" : "Choose color";
          }
        }), createComponent(Popover$1.Portal, {
          get children() {
            return createComponent(Popover$1.Content, {
              "class": "z-[200] outline-none",
              get children() {
                return createComponent(ColorPickerCustomPanel, {
                  get value() {
                    return currentHex();
                  },
                  get isOpen() {
                    return customOpen();
                  },
                  onApply: handleCustomApply,
                  onCancel: () => setCustomOpen(false),
                  get lastUsed() {
                    return lastUsed();
                  },
                  onLastUsedClick: (hex) => {
                    handleCustomApply(hex);
                  },
                  get allowedFormats() {
                    return local.allowedFormats ?? ["hex"];
                  },
                  get predefined() {
                    return local.predefined;
                  }
                });
              }
            });
          }
        })];
      }
    }), null);
    insert(_el$6, createComponent(Show, {
      get when() {
        return (local.size ?? "md") !== "sm";
      },
      get children() {
        var _el$7 = _tmpl$427(), _el$8 = _el$7.firstChild;
        insert(_el$7, createComponent(For, {
          get each() {
            return presets();
          },
          children: (hex) => (() => {
            var _el$1 = _tmpl$819();
            _el$1.$$click = () => handlePresetClick(hex);
            setStyleProperty(_el$1, "background-color", hex);
            setAttribute(_el$1, "title", hex);
            effect((_p$) => {
              var _v$5 = cn("h-8 w-8 shrink-0 rounded-full border-2 shadow-sm transition hover:scale-105 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", normalizeHex(hex) === currentHex() ? "border-primary-500 ring-2 ring-primary-200" : "border-surface-border hover:border-ink-300"), _v$6 = zh() ? `\u5C06\u989C\u8272\u8BBE\u7F6E\u4E3A ${hex}` : `Set color to ${hex}`, _v$7 = local.disabled;
              _v$5 !== _p$.e && className(_el$1, _p$.e = _v$5);
              _v$6 !== _p$.t && setAttribute(_el$1, "aria-label", _p$.t = _v$6);
              _v$7 !== _p$.a && (_el$1.disabled = _p$.a = _v$7);
              return _p$;
            }, {
              e: void 0,
              t: void 0,
              a: void 0
            });
            return _el$1;
          })()
        }), _el$8);
        _el$8.$$click = () => setCustomOpen(true);
        insert(_el$8, () => icons.pipette({
          class: "h-4 w-4",
          "aria-hidden": "true"
        }));
        effect((_p$) => {
          var _v$ = cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-surface-border bg-surface-base text-ink-500 transition hover:border-primary-400 hover:bg-primary-50 hover:text-primary-600 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50", !isPreset(currentHex()) && currentHex() ? "border-primary-400 bg-primary-50 text-primary-600" : ""), _v$2 = zh() ? "\u81EA\u5B9A\u4E49\u989C\u8272" : "Custom color", _v$3 = zh() ? "\u81EA\u5B9A\u4E49\u989C\u8272" : "Custom color", _v$4 = local.disabled;
          _v$ !== _p$.e && className(_el$8, _p$.e = _v$);
          _v$2 !== _p$.t && setAttribute(_el$8, "title", _p$.t = _v$2);
          _v$3 !== _p$.a && setAttribute(_el$8, "aria-label", _p$.a = _v$3);
          _v$4 !== _p$.o && (_el$8.disabled = _p$.o = _v$4);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0,
          o: void 0
        });
        return _el$7;
      }
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return memo(() => !!(!local.bare && local.helperText))() && !hasError();
      },
      get children() {
        var _el$9 = _tmpl$524();
        insert(_el$9, () => local.helperText);
        return _el$9;
      }
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return memo(() => !!!local.bare)() && hasError();
      },
      get children() {
        var _el$0 = _tmpl$623();
        insert(_el$0, () => local.error);
        return _el$0;
      }
    }), null);
    return _el$;
  })();
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
  const [format, setFormat] = createSignal(defaultFormat());
  const thumbBaseClass = "absolute rounded-full border-2 border-white shadow touch-none";
  createEffect(() => {
    if (!props.allowedFormats.includes(format())) setFormat(defaultFormat());
  });
  const initialColor = () => {
    const v = props.value;
    if (v && isValidHex(v)) return safeParseColor(normalizeHex(v));
    return parseColor("#000000");
  };
  const [color, setColor] = createSignal(initialColor());
  const [hexText, setHexText] = createSignal(colorToHex(initialColor()));
  createEffect(on(() => props.isOpen ?? false, (open, wasOpen) => {
    if (open && !wasOpen && props.value && isValidHex(props.value)) {
      const c = safeParseColor(normalizeHex(props.value));
      setColor(c);
      setHexText(colorToHex(c));
    }
  }, {
    defer: true
  }));
  const hex = () => colorToHex(color());
  createEffect(on(hex, setHexText));
  const formatTabs = [{
    id: "hex",
    label: "Hex"
  }, {
    id: "rgb",
    label: "RGB"
  }, {
    id: "hsl",
    label: "HSL"
  }, {
    id: "hsb",
    label: "HSB"
  }];
  const visibleFormatTabs = () => formatTabs.filter((tab) => props.allowedFormats.includes(tab.id));
  const showFormatTabs = () => visibleFormatTabs().length > 1;
  return (() => {
    var _el$10 = _tmpl$1111(), _el$11 = _el$10.firstChild, _el$12 = _el$11.firstChild, _el$13 = _el$12.nextSibling, _el$14 = _el$11.nextSibling, _el$15 = _el$14.nextSibling, _el$17 = _el$15.nextSibling, _el$35 = _el$17.nextSibling;
    insert(_el$12, () => zh() ? "\u989C\u8272\u9009\u62E9\u5668" : "Color Picker");
    addEventListener(_el$13, "click", props.onCancel, true);
    insert(_el$13, () => icons.close({
      class: "h-4 w-4",
      "aria-hidden": "true"
    }));
    insert(_el$14, createComponent(ColorArea, {
      get value() {
        return color();
      },
      onChange: setColor,
      colorSpace: "hsb",
      xChannel: "saturation",
      yChannel: "brightness",
      "class": "relative block w-full",
      get children() {
        return [createComponent(ColorArea.Background, {
          "class": "relative block h-32 w-full rounded-lg border border-surface-border cursor-crosshair touch-none"
        }), createComponent(ColorArea.Thumb, {
          get ["class"]() {
            return cn("pointer-events-none h-4 w-4 shadow-md [transform:translate(-50%,-50%)]", thumbBaseClass);
          },
          get children() {
            return [createComponent(ColorArea.HiddenInputX, {}), createComponent(ColorArea.HiddenInputY, {})];
          }
        })];
      }
    }));
    insert(_el$15, createComponent(ColorSlider, {
      channel: "hue",
      get value() {
        return color();
      },
      onChange: setColor,
      colorSpace: "hsb",
      get children() {
        return createComponent(ColorSlider.Track, {
          "class": "relative block h-6 w-full rounded-full border border-surface-border cursor-pointer touch-none",
          get children() {
            return createComponent(ColorSlider.Thumb, {
              get ["class"]() {
                return cn("h-6 w-6", thumbBaseClass);
              },
              style: {
                top: "calc(50%)",
                transform: "translate(-50%, -50%)"
              },
              get children() {
                return createComponent(ColorSlider.Input, {
                  "class": "sr-only"
                });
              }
            });
          }
        });
      }
    }));
    insert(_el$10, createComponent(Show, {
      get when() {
        return showFormatTabs();
      },
      get children() {
        var _el$16 = _tmpl$914();
        insert(_el$16, createComponent(For, {
          get each() {
            return visibleFormatTabs();
          },
          children: (tab) => (() => {
            var _el$36 = _tmpl$819();
            _el$36.$$click = () => setFormat(tab.id);
            insert(_el$36, () => tab.label);
            effect(() => className(_el$36, cn("flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition", format() === tab.id ? "bg-surface-raised text-ink-900 shadow-sm" : "text-ink-600 hover:text-ink-900")));
            return _el$36;
          })()
        }));
        return _el$16;
      }
    }), _el$17);
    insert(_el$17, createComponent(Show, {
      get when() {
        return format() === "hex";
      },
      get children() {
        var _el$18 = _tmpl$08(), _el$19 = _el$18.firstChild;
        insert(_el$18, () => icons.pipette({
          class: "h-4 w-4 shrink-0 text-ink-400",
          "aria-hidden": "true"
        }), _el$19);
        _el$19.$$input = (e) => {
          const v = e.target.value;
          setHexText(v);
          if (isValidHex(v)) setColor(safeParseColor(v));
        };
        effect(() => setAttribute(_el$19, "aria-label", zh() ? "\u5341\u516D\u8FDB\u5236\u989C\u8272\u503C" : "Hex color value"));
        effect(() => _el$19.value = hexText());
        return _el$18;
      }
    }), null);
    insert(_el$17, createComponent(Show, {
      get when() {
        return format() === "hsl";
      },
      get children() {
        return [createComponent(ColorChannelField, {
          get value() {
            return color();
          },
          onChange: setColor,
          channel: "hue",
          colorSpace: "hsl",
          get children() {
            var _el$20 = _tmpl$129();
            insert(_el$20, createComponent(ColorChannelField.Label, {
              "class": "sr-only",
              children: "H"
            }), null);
            insert(_el$20, createComponent(ColorChannelField.Input, {
              "class": "w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900"
            }), null);
            return _el$20;
          }
        }), createComponent(ColorChannelField, {
          get value() {
            return color();
          },
          onChange: setColor,
          channel: "saturation",
          colorSpace: "hsl",
          get children() {
            var _el$21 = _tmpl$129();
            insert(_el$21, createComponent(ColorChannelField.Label, {
              "class": "sr-only",
              children: "S"
            }), null);
            insert(_el$21, createComponent(ColorChannelField.Input, {
              "class": "w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900"
            }), null);
            return _el$21;
          }
        }), createComponent(ColorChannelField, {
          get value() {
            return color();
          },
          onChange: setColor,
          channel: "lightness",
          colorSpace: "hsl",
          get children() {
            var _el$22 = _tmpl$129();
            insert(_el$22, createComponent(ColorChannelField.Label, {
              "class": "sr-only",
              children: "L"
            }), null);
            insert(_el$22, createComponent(ColorChannelField.Input, {
              "class": "w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900"
            }), null);
            return _el$22;
          }
        })];
      }
    }), null);
    insert(_el$17, createComponent(Show, {
      get when() {
        return format() === "rgb";
      },
      get children() {
        return [createComponent(ColorChannelField, {
          get value() {
            return color();
          },
          onChange: setColor,
          channel: "red",
          colorSpace: "rgb",
          get children() {
            var _el$23 = _tmpl$129();
            insert(_el$23, createComponent(ColorChannelField.Label, {
              "class": "sr-only",
              children: "R"
            }), null);
            insert(_el$23, createComponent(ColorChannelField.Input, {
              "class": "w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900"
            }), null);
            return _el$23;
          }
        }), createComponent(ColorChannelField, {
          get value() {
            return color();
          },
          onChange: setColor,
          channel: "green",
          colorSpace: "rgb",
          get children() {
            var _el$24 = _tmpl$129();
            insert(_el$24, createComponent(ColorChannelField.Label, {
              "class": "sr-only",
              children: "G"
            }), null);
            insert(_el$24, createComponent(ColorChannelField.Input, {
              "class": "w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900"
            }), null);
            return _el$24;
          }
        }), createComponent(ColorChannelField, {
          get value() {
            return color();
          },
          onChange: setColor,
          channel: "blue",
          colorSpace: "rgb",
          get children() {
            var _el$25 = _tmpl$129();
            insert(_el$25, createComponent(ColorChannelField.Label, {
              "class": "sr-only",
              children: "B"
            }), null);
            insert(_el$25, createComponent(ColorChannelField.Input, {
              "class": "w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900"
            }), null);
            return _el$25;
          }
        })];
      }
    }), null);
    insert(_el$17, createComponent(Show, {
      get when() {
        return format() === "hsb";
      },
      get children() {
        return [createComponent(ColorChannelField, {
          get value() {
            return color();
          },
          onChange: setColor,
          channel: "hue",
          colorSpace: "hsb",
          get children() {
            var _el$26 = _tmpl$129();
            insert(_el$26, createComponent(ColorChannelField.Label, {
              "class": "sr-only",
              children: "H"
            }), null);
            insert(_el$26, createComponent(ColorChannelField.Input, {
              "class": "w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900"
            }), null);
            return _el$26;
          }
        }), createComponent(ColorChannelField, {
          get value() {
            return color();
          },
          onChange: setColor,
          channel: "saturation",
          colorSpace: "hsb",
          get children() {
            var _el$27 = _tmpl$129();
            insert(_el$27, createComponent(ColorChannelField.Label, {
              "class": "sr-only",
              children: "S"
            }), null);
            insert(_el$27, createComponent(ColorChannelField.Input, {
              "class": "w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900"
            }), null);
            return _el$27;
          }
        }), createComponent(ColorChannelField, {
          get value() {
            return color();
          },
          onChange: setColor,
          channel: "brightness",
          colorSpace: "hsb",
          get children() {
            var _el$28 = _tmpl$129();
            insert(_el$28, createComponent(ColorChannelField.Label, {
              "class": "sr-only",
              children: "B"
            }), null);
            insert(_el$28, createComponent(ColorChannelField.Input, {
              "class": "w-14 rounded border border-surface-border bg-surface-raised px-1.5 py-1 text-sm text-ink-900"
            }), null);
            return _el$28;
          }
        })];
      }
    }), null);
    insert(_el$10, createComponent(Show, {
      get when() {
        return props.lastUsed.length > 0;
      },
      get children() {
        var _el$29 = _tmpl$1013(), _el$30 = _el$29.firstChild, _el$31 = _el$30.nextSibling;
        insert(_el$30, () => zh() ? "\u6700\u8FD1\u4F7F\u7528" : "Last used");
        insert(_el$31, createComponent(For, {
          get each() {
            return props.lastUsed;
          },
          children: (hex2) => (() => {
            var _el$37 = _tmpl$1210();
            _el$37.$$click = () => props.onLastUsedClick(hex2);
            setStyleProperty(_el$37, "background-color", hex2);
            setAttribute(_el$37, "title", hex2);
            effect(() => setAttribute(_el$37, "aria-label", zh() ? `\u5C06\u989C\u8272\u8BBE\u7F6E\u4E3A ${hex2}` : `Set color to ${hex2}`));
            return _el$37;
          })()
        }));
        return _el$29;
      }
    }), _el$35);
    insert(_el$10, createComponent(Show, {
      get when() {
        return memo(() => !!props.predefined)() && props.predefined.length > 0;
      },
      get children() {
        var _el$32 = _tmpl$1013(), _el$33 = _el$32.firstChild, _el$34 = _el$33.nextSibling;
        insert(_el$33, () => zh() ? "\u9884\u8BBE" : "Presets");
        insert(_el$34, createComponent(For, {
          get each() {
            return props.predefined;
          },
          children: (hex2) => (() => {
            var _el$38 = _tmpl$1210();
            _el$38.$$click = () => {
              const n = normalizeHex(hex2);
              if (n) props.onApply(n);
            };
            setStyleProperty(_el$38, "background-color", hex2);
            setAttribute(_el$38, "title", hex2);
            effect(() => setAttribute(_el$38, "aria-label", zh() ? `\u5C06\u989C\u8272\u8BBE\u7F6E\u4E3A ${hex2}` : `Set color to ${hex2}`));
            return _el$38;
          })()
        }));
        return _el$32;
      }
    }), _el$35);
    insert(_el$35, createComponent(Button, {
      variant: "outlined",
      size: "sm",
      get onClick() {
        return props.onCancel;
      },
      get children() {
        return zh() ? "\u53D6\u6D88" : "Cancel";
      }
    }), null);
    insert(_el$35, createComponent(Button, {
      variant: "primary",
      size: "sm",
      onClick: () => props.onApply(hex()),
      get ["aria-label"]() {
        return zh() ? "\u5E94\u7528\u6240\u9009\u989C\u8272" : "Apply selected color";
      },
      get children() {
        return zh() ? "\u5E94\u7528" : "Apply";
      }
    }), null);
    effect(() => setAttribute(_el$13, "aria-label", zh() ? "\u5173\u95ED" : "Close"));
    return _el$10;
  })();
}
delegateEvents(["click", "input"]);
var _tmpl$130 = /* @__PURE__ */ template(`<div><div class="flex items-end gap-2">`);
var FieldPicker = (props) => {
  const [local] = splitProps(props, ["label", "options", "value", "onValueChange", "onAdd", "addLabel", "addIcon", "addDisabled", "placeholder", "class"]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  return (() => {
    var _el$ = _tmpl$130(), _el$2 = _el$.firstChild;
    insert(_el$2, createComponent(Autocomplete, {
      get label() {
        return local.label;
      },
      get value() {
        return local.value;
      },
      get onValueChange() {
        return local.onValueChange;
      },
      get options() {
        return local.options;
      },
      get placeholder() {
        return local.placeholder || (zh() ? "\u641C\u7D22\u5B57\u6BB5..." : "Search fields...");
      },
      "class": "flex-1 min-w-0"
    }), null);
    insert(_el$2, createComponent(Button, {
      type: "button",
      variant: "outlined",
      size: "md",
      get startIcon() {
        return local.addIcon;
      },
      "class": "shrink-0 h-10",
      get disabled() {
        return local.addDisabled;
      },
      get onClick() {
        return local.onAdd;
      },
      get children() {
        return local.addLabel || (zh() ? "\u6DFB\u52A0" : "Add");
      }
    }), null);
    effect(() => className(_el$, cn("space-y-2", local.class)));
    return _el$;
  })();
};
var _tmpl$131 = /* @__PURE__ */ template(`<div class="flex items-center gap-2 rounded-lg border border-surface-border bg-surface-raised px-4 py-3 text-sm shadow-lg select-none text-ink-700"style=position:fixed;top:0;left:0;pointer-events:none;z-index:50;will-change:transform><span>`);
var _tmpl$231 = /* @__PURE__ */ template(`<div role=list data-sortable-container>`);
var _tmpl$329 = /* @__PURE__ */ template(`<div role=listitem class="flex items-center justify-between rounded-lg border border-surface-border bg-surface-raised px-4 py-3 text-sm select-none"><div class="flex items-center gap-2 text-ink-700"><button type=button></button><span></span></div><div class="flex shrink-0 items-center gap-1">`);
function ReorderableListDragOverlay(props) {
  const icons = useIcons();
  let el;
  const onMove = (e) => {
    if (!el) return;
    el.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
  };
  const cleanup = () => document.removeEventListener("pointermove", onMove);
  document.addEventListener("pointermove", onMove);
  document.addEventListener("pointerup", cleanup, {
    once: true
  });
  document.addEventListener("pointercancel", cleanup, {
    once: true
  });
  onCleanup(cleanup);
  return (() => {
    var _el$ = _tmpl$131(), _el$2 = _el$.firstChild;
    var _ref$ = el;
    typeof _ref$ === "function" ? use(_ref$, _el$) : el = _el$;
    insert(_el$, () => icons.dragHandle({
      class: "h-4 w-4 text-ink-400",
      "aria-hidden": "true"
    }), _el$2);
    insert(_el$2, () => props.item.label);
    effect((_p$) => {
      var _v$ = `translate(${props.startX - 16}px, ${props.startY - 16}px)`, _v$2 = props.width != null ? `${props.width}px` : void 0, _v$3 = props.height != null ? `${props.height}px` : void 0;
      _v$ !== _p$.e && setStyleProperty(_el$, "transform", _p$.e = _v$);
      _v$2 !== _p$.t && setStyleProperty(_el$, "width", _p$.t = _v$2);
      _v$3 !== _p$.a && setStyleProperty(_el$, "height", _p$.a = _v$3);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    });
    return _el$;
  })();
}
function ReorderableList(props) {
  const [local, others] = splitProps(props, ["items", "onReorder", "onRemove", "showMoveButtons", "class"]);
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
  return (() => {
    var _el$3 = _tmpl$231();
    spread(_el$3, mergeProps({
      get ["class"]() {
        return cn("space-y-2 w-full", local.class);
      }
    }, others), false, true);
    insert(_el$3, createComponent(For, {
      get each() {
        return local.items;
      },
      children: (item, index) => {
        const isActive = () => drag.activeId() === item.id;
        const transform = () => drag.getTransform(item.id);
        const canMoveUp = () => index() > 0;
        const canMoveDown = () => index() < local.items.length - 1;
        return (() => {
          var _el$4 = _tmpl$329(), _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling, _el$8 = _el$5.nextSibling;
          _el$6.$$pointerdown = (e) => {
            pointerX = e.clientX;
            pointerY = e.clientY;
            const row = e.currentTarget.closest("[data-sortable-id]");
            if (row) {
              const r = row.getBoundingClientRect();
              overlayW = r.width;
              overlayH = r.height;
            }
            drag.handlePointerDown(item.id, e);
          };
          _el$6.$$keydown = (e) => {
            if (e.key === "ArrowUp") {
              e.preventDefault();
              move(item.id, "up");
            } else if (e.key === "ArrowDown") {
              e.preventDefault();
              move(item.id, "down");
            }
          };
          insert(_el$6, () => icons.dragHandle({
            class: "h-4 w-4",
            "aria-hidden": "true"
          }));
          insert(_el$7, () => item.label);
          insert(_el$8, createComponent(Show, {
            get when() {
              return showMoveButtons();
            },
            get children() {
              return [createComponent(Button, {
                iconOnly: true,
                variant: "ghost",
                size: "xs",
                get icon() {
                  return icons.chevronUp({
                    class: "h-4 w-4",
                    "aria-hidden": "true"
                  });
                },
                get label() {
                  return memo(() => !!zh())() ? `\u4E0A\u79FB ${item.label}` : `Move ${item.label} up`;
                },
                get disabled() {
                  return !canMoveUp();
                },
                onClick: () => move(item.id, "up")
              }), createComponent(Button, {
                iconOnly: true,
                variant: "ghost",
                size: "xs",
                get icon() {
                  return icons.chevronDown({
                    class: "h-4 w-4",
                    "aria-hidden": "true"
                  });
                },
                get label() {
                  return memo(() => !!zh())() ? `\u4E0B\u79FB ${item.label}` : `Move ${item.label} down`;
                },
                get disabled() {
                  return !canMoveDown();
                },
                onClick: () => move(item.id, "down")
              })];
            }
          }), null);
          insert(_el$8, createComponent(Show, {
            get when() {
              return local.onRemove;
            },
            get children() {
              return createComponent(Button, {
                iconOnly: true,
                variant: "ghost",
                size: "xs",
                get icon() {
                  return icons.close({
                    class: "h-4 w-4",
                    "aria-hidden": "true"
                  });
                },
                get label() {
                  return memo(() => !!zh())() ? `\u79FB\u9664 ${item.label}` : `Remove ${item.label}`;
                },
                onClick: () => local.onRemove?.(item.id)
              });
            }
          }), null);
          effect((_p$) => {
            var _v$4 = item.id, _v$5 = transform() || void 0, _v$6 = drag.isDragging() && !isActive() ? "transform 200ms ease" : void 0, _v$7 = isActive() && drag.isDragging() ? "0" : void 0, _v$8 = isActive() && drag.isDragging() ? "none" : void 0, _v$9 = cn("inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-ink-400 hover:bg-surface-overlay touch-none", drag.isDragging() ? "cursor-grabbing" : "cursor-grab"), _v$0 = zh() ? `\u62D6\u52A8\u6392\u5E8F ${item.label}` : `Drag to reorder ${item.label}`;
            _v$4 !== _p$.e && setAttribute(_el$4, "data-sortable-id", _p$.e = _v$4);
            _v$5 !== _p$.t && setStyleProperty(_el$4, "transform", _p$.t = _v$5);
            _v$6 !== _p$.a && setStyleProperty(_el$4, "transition", _p$.a = _v$6);
            _v$7 !== _p$.o && setStyleProperty(_el$4, "opacity", _p$.o = _v$7);
            _v$8 !== _p$.i && setStyleProperty(_el$4, "pointer-events", _p$.i = _v$8);
            _v$9 !== _p$.n && className(_el$6, _p$.n = _v$9);
            _v$0 !== _p$.s && setAttribute(_el$6, "aria-label", _p$.s = _v$0);
            return _p$;
          }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0,
            s: void 0
          });
          return _el$4;
        })();
      }
    }), null);
    insert(_el$3, createComponent(Show, {
      get when() {
        return drag.activeId();
      },
      children: (activeId) => {
        const item = () => local.items.find((i) => i.id === activeId());
        return createComponent(Show, {
          get when() {
            return item();
          },
          children: (resolved) => createComponent(ReorderableListDragOverlay, {
            get item() {
              return resolved();
            },
            startX: pointerX,
            startY: pointerY,
            width: overlayW,
            height: overlayH
          })
        });
      }
    }), null);
    return _el$3;
  })();
}
delegateEvents(["keydown", "pointerdown"]);

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
var _tmpl$136 = /* @__PURE__ */ template(`<span class="shrink-0 text-sm font-medium text-ink-700">`);
var _tmpl$233 = /* @__PURE__ */ template(`<span class="shrink-0 text-sm text-ink-500">`);
var SIGN_OPTIONS = [{
  value: "+",
  label: "+"
}, {
  value: "-",
  label: "-"
}];
function RelativeDateDefaultInput(props) {
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const parsed = createMemo(() => parseRelativeDateDefault(props.value));
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
  return createComponent(Inline, {
    get ["class"]() {
      return cn("flex-nowrap", props.class);
    },
    get children() {
      return [(() => {
        var _el$ = _tmpl$136();
        insert(_el$, () => props.prefixLabel ?? (zh() ? "\u4ECA\u5929" : "Today"));
        return _el$;
      })(), createComponent(Select, {
        get value() {
          return sign();
        },
        onValueChange: setSign,
        get options() {
          return [...SIGN_OPTIONS];
        },
        "class": "w-36 min-w-0 rounded-lg"
      }), createComponent(Input, {
        bare: true,
        type: "number",
        min: 0,
        step: 1,
        get value() {
          return daysStr();
        },
        onValueChange: setDaysFromInput,
        placeholder: "0",
        "class": "w-24 rounded-lg pr-2"
      }), (() => {
        var _el$2 = _tmpl$233();
        insert(_el$2, () => props.suffixLabel ?? (zh() ? "\u5929" : "day(s)"));
        return _el$2;
      })()];
    }
  });
}

// src/components/actions/DarkModeToggle.tsx
function DarkModeToggle(props) {
  const [scheme, setScheme] = createSignal("light");
  const icons = useIcons();
  const dark = () => scheme() === "dark";
  const key = () => props.storageKey ?? "torch-theme";
  const el = () => props.target?.() ?? document.documentElement;
  let clearSuppressTimeout;
  onCleanup(() => {
    if (clearSuppressTimeout !== void 0) {
      window.clearTimeout(clearSuppressTimeout);
      document.body.removeAttribute("data-switching-theme");
    }
  });
  createEffect(() => {
    if (props.value !== void 0) {
      setScheme(props.value);
      const target = props.target?.() ?? document.documentElement;
      if (target) target.classList.toggle("dark", props.value === "dark");
    }
  });
  onMount(() => {
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
    onCleanup(() => mq.removeEventListener("change", handleChange));
    const handleExternalScheme = (e) => {
      if (props.value !== void 0) return;
      const next = e.detail;
      setScheme(next);
    };
    window.addEventListener("torch:scheme", handleExternalScheme);
    onCleanup(() => window.removeEventListener("torch:scheme", handleExternalScheme));
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
    window.dispatchEvent(new CustomEvent("torch:scheme", {
      detail: next
    }));
  }
  function toggle() {
    applyScheme(dark() ? "light" : "dark");
  }
  const variant = () => props.variant ?? "icon";
  return createComponent(Show, {
    get when() {
      return variant() === "switch";
    },
    get fallback() {
      return createComponent(Button, {
        variant: "ghost",
        size: "sm",
        iconOnly: true,
        get icon() {
          return memo(() => !!dark())() ? icons.sun({
            class: "h-4 w-4",
            "aria-hidden": "true"
          }) : icons.moon({
            class: "h-4 w-4",
            "aria-hidden": "true"
          });
        },
        get label() {
          return dark() ? "Switch to Light mode" : "Switch to Dark mode";
        },
        get ["aria-pressed"]() {
          return dark() ? "true" : "false";
        },
        onClick: toggle,
        get ["class"]() {
          return props.class;
        }
      });
    },
    get children() {
      return createComponent(Switch, {
        "data-theme-toggle": "",
        fullWidth: false,
        "class": "flex h-9 w-auto items-center",
        get controlClass() {
          return cn(props.class, "data-[checked]:border-surface-border");
        },
        variant: "icon",
        trackColor: "var(--surface-dim)",
        trackCheckedColor: "var(--surface-dim)",
        get checked() {
          return dark();
        },
        onValueChange: (checked) => applyScheme(checked ? "dark" : "light"),
        get ["aria-label"]() {
          return dark() ? "Switch to Light mode" : "Switch to Dark mode";
        },
        get thumbOffIcon() {
          return icons.sun({
            class: "h-2.5 w-2.5 text-ink-700",
            "aria-hidden": "true"
          });
        },
        get thumbOnIcon() {
          return icons.moon({
            class: "h-2.5 w-2.5 text-ink-700",
            "aria-hidden": "true"
          });
        }
      });
    }
  });
}

// src/components/feedback/AlertDialog.tsx
var _tmpl$137 = /* @__PURE__ */ template(`<div><div class="mt-6 flex justify-end gap-3">`);
var _tmpl$234 = /* @__PURE__ */ template(`<div class="fixed left-1/2 top-1/2 z-[101] w-full max-w-md -translate-x-1/2 -translate-y-1/2 p-4">`);
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
  const [local] = splitProps(props, ["open", "onOpenChange", "onCancel", "title", "description", "confirmLabel", "cancelLabel", "onConfirm", "destructive", "class", "overlayClass"]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  onMount(ensureAlertStyles);
  const [pending, setPending] = createSignal(false);
  let closingFromConfirm = false;
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
  return createComponent(AlertDialog$1, {
    get open() {
      return local.open;
    },
    onOpenChange: handleOpenChange,
    get children() {
      return createComponent(AlertDialog$1.Portal, {
        get children() {
          return [createComponent(AlertDialog$1.Overlay, {
            get ["class"]() {
              return cn("torchui-alert-dialog-overlay fixed inset-0 z-[100]", "bg-black/30 dark:bg-black/50 backdrop-blur-md dark:backdrop-blur-sm", local.overlayClass);
            }
          }), (() => {
            var _el$ = _tmpl$234();
            insert(_el$, createComponent(AlertDialog$1.Content, {
              "class": "torchui-alert-dialog-content block w-full",
              onInteractOutside: (e) => e.preventDefault(),
              get children() {
                var _el$2 = _tmpl$137(), _el$3 = _el$2.firstChild;
                insert(_el$2, createComponent(AlertDialog$1.Title, {
                  "class": "text-lg font-semibold text-ink-900",
                  get children() {
                    return local.title;
                  }
                }), _el$3);
                insert(_el$2, createComponent(Show, {
                  get when() {
                    return local.description;
                  },
                  get children() {
                    return createComponent(AlertDialog$1.Description, {
                      "class": "mt-2 text-sm text-ink-500",
                      get children() {
                        return local.description;
                      }
                    });
                  }
                }), _el$3);
                insert(_el$3, createComponent(AlertDialog$1.CloseButton, {
                  as: Button,
                  variant: "outlined",
                  size: "sm",
                  get children() {
                    return local.cancelLabel ?? (zh() ? "\u53D6\u6D88" : "Cancel");
                  }
                }), null);
                insert(_el$3, createComponent(Button, {
                  get variant() {
                    return local.destructive ? "danger" : "primary";
                  },
                  size: "sm",
                  get disabled() {
                    return pending();
                  },
                  onClick: handleConfirm,
                  get children() {
                    return local.confirmLabel ?? (zh() ? "\u786E\u8BA4" : "Confirm");
                  }
                }), null);
                effect(() => className(_el$2, cn("torchui-alert-dialog-content-panel rounded-2xl border border-surface-border bg-surface-raised p-6 shadow-xl dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,.5)]", local.class)));
                return _el$2;
              }
            }));
            return _el$;
          })()];
        }
      });
    }
  });
}
var _tmpl$138 = /* @__PURE__ */ template(`<span>`);
var _tmpl$235 = /* @__PURE__ */ template(`<span class="shrink-0 whitespace-nowrap text-sm font-medium text-ink-500">`);
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
  const [local, others] = splitProps(props, ["label", "lineStyle", "weight", "class"]);
  const lineStyle = () => local.lineStyle ?? "solid";
  const weight = () => local.weight ?? "thin";
  const lineClass = () => cn(lineBase, weightClasses[weight()], styleClasses[lineStyle()]);
  return createComponent(Separator, mergeProps({
    as: "div",
    orientation: "horizontal",
    get ["class"]() {
      return cn("w-full my-6", local.label ? "flex items-center gap-4" : "", local.class);
    }
  }, others, {
    get children() {
      return memo(() => !!local.label)() ? [(() => {
        var _el$ = _tmpl$138();
        effect(() => className(_el$, lineClass()));
        return _el$;
      })(), (() => {
        var _el$2 = _tmpl$235();
        insert(_el$2, () => local.label);
        return _el$2;
      })(), (() => {
        var _el$3 = _tmpl$138();
        effect(() => className(_el$3, lineClass()));
        return _el$3;
      })()] : (() => {
        var _el$4 = _tmpl$138();
        effect(() => className(_el$4, cn(lineClass(), "block w-full")));
        return _el$4;
      })();
    }
  }));
}
var _tmpl$139 = /* @__PURE__ */ template(`<div class="flex items-center justify-end gap-3">`);
var _tmpl$236 = /* @__PURE__ */ template(`<span>`);
var _tmpl$330 = /* @__PURE__ */ template(`<div>`);
var _tmpl$428 = /* @__PURE__ */ template(`<div class=flex-1>`);
var _tmpl$525 = /* @__PURE__ */ template(`<div class="flex shrink-0 items-center border-b border-surface-border px-6 py-4">`);
var _tmpl$624 = /* @__PURE__ */ template(`<div><div>`);
var _tmpl$721 = /* @__PURE__ */ template(`<div class="flex shrink-0 items-center justify-end gap-3 border-t border-surface-border px-6 py-4">`);
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
  end: {
    "0": "right-0 top-0 bottom-0",
    "2": "top-2 right-2 bottom-2",
    "4": "top-4 right-4 bottom-4",
    "6": "top-6 right-6 bottom-6"
  },
  start: {
    "0": "left-0 top-0 bottom-0",
    "2": "top-2 left-2 bottom-2",
    "4": "top-4 left-4 bottom-4",
    "6": "top-6 left-6 bottom-6"
  },
  top: {
    "0": "left-0 right-0 top-0",
    "2": "left-2 right-2 top-2",
    "4": "left-4 right-4 top-4",
    "6": "left-6 right-6 top-6"
  },
  bottom: {
    "0": "left-0 right-0 bottom-0",
    "2": "left-2 right-2 bottom-2",
    "4": "left-4 right-4 bottom-4",
    "6": "left-6 right-6 bottom-6"
  }
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
  const [local, others] = splitProps(props, ["open", "onClose", "onOpenChange", "size", "side", "overlay", "closeOnOverlayClick", "overlayClass", "overlayDim", "overlayBlur", "showCloseButton", "onCancel", "onSave", "cancelLabel", "saveLabel", "actionsPosition", "lockScroll", "offset", "onCloseComplete", "animationExitDuration", "noPadding", "contentClass", "title", "class", "children"]);
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  onMount(ensureDrawerStyles);
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
  const [effectiveSize, setEffectiveSize] = createSignal(local.size ?? "md");
  createEffect(on(() => [local.open, local.size], ([open, size]) => {
    if (open) setEffectiveSize(size ?? "md");
  }));
  const exitDurationMs = () => local.animationExitDuration ?? 200;
  createEffect(on(() => local.open, (isOpen, wasOpen) => {
    if (wasOpen === true && !isOpen) {
      const t = setTimeout(() => local.onCloseComplete?.(), exitDurationMs());
      onCleanup(() => clearTimeout(t));
    }
  }));
  const currentSize = () => effectiveSize();
  const isFull = () => currentSize() === "full";
  const offset = () => local.offset ?? "0";
  const hasInsetOffset = () => !isFull() && offset() !== "0";
  const panelInsetClasses = () => insetClassesBySide[side()][offset()];
  const panelDecorationClasses = () => hasInsetOffset() ? "rounded-lg" : decorationBySide[side()];
  const panelSizeStretch = () => hasInsetOffset() ? "" : isHorizontal() ? "h-full" : "w-full";
  const actionsBlock = () => (() => {
    var _el$ = _tmpl$139();
    insert(_el$, createComponent(Show, {
      get when() {
        return local.onCancel != null;
      },
      get fallback() {
        return _tmpl$236();
      },
      get children() {
        return createComponent(Dialog$1.CloseButton, {
          as: Button,
          variant: "ghost",
          size: "sm",
          onClick: setCancelReason,
          get children() {
            return local.cancelLabel ?? (zh() ? "\u53D6\u6D88" : "Cancel");
          }
        });
      }
    }), null);
    insert(_el$, createComponent(Show, {
      get when() {
        return local.onSave;
      },
      get children() {
        return createComponent(Button, {
          variant: "primary",
          size: "sm",
          "class": "rounded-lg",
          get onClick() {
            return local.onSave;
          },
          get children() {
            return local.saveLabel ?? "Save";
          }
        });
      }
    }), null);
    return _el$;
  })();
  return createComponent(Dialog$1, {
    get open() {
      return local.open;
    },
    onOpenChange: handleOpenChange,
    modal: true,
    get preventScroll() {
      return local.lockScroll !== false;
    },
    get children() {
      return createComponent(Dialog$1.Portal, {
        get children() {
          return [createComponent(Show, {
            get when() {
              return showOverlay();
            },
            get children() {
              return createComponent(Dialog$1.Overlay, {
                get ["class"]() {
                  return cn("torchui-drawer-overlay fixed inset-0 z-[60] min-h-screen", local.overlayDim !== false && "bg-black/30 dark:bg-black/60", local.overlayBlur !== false && "backdrop-blur-md dark:backdrop-blur-md", local.overlayClass);
                },
                onPointerDown: () => {
                  if (closeOnOverlay()) setCancelReason();
                }
              });
            }
          }), createComponent(Dialog$1.Content, mergeProps({
            as: "aside",
            get ["class"]() {
              return cn("torchui-drawer-panel fixed z-[70] flex flex-col bg-surface-raised text-ink-900 shadow-[0_20px_50px_-12px_rgba(0,0,0,.15)]", "border border-surface-border dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,.5)]", panelInsetClasses(), panelDecorationClasses(), sizeClass(), panelSizeStretch(), local.class);
            },
            get ["data-side"]() {
              return side();
            },
            onInteractOutside: (e) => {
              if (!closeOnOverlay()) {
                e.preventDefault();
                return;
              }
              setCancelReason();
            }
          }, others, {
            get children() {
              return [createComponent(Show, {
                get when() {
                  return actionsPosition() === "top-end" || actionsPosition() === "top-start";
                },
                get children() {
                  var _el$3 = _tmpl$330();
                  insert(_el$3, createComponent(Show, {
                    get when() {
                      return local.onCancel != null;
                    },
                    get children() {
                      return createComponent(Dialog$1.CloseButton, {
                        as: Button,
                        variant: "ghost",
                        size: "sm",
                        onClick: setCancelReason,
                        get children() {
                          return local.cancelLabel ?? (zh() ? "\u53D6\u6D88" : "Cancel");
                        }
                      });
                    }
                  }), null);
                  insert(_el$3, createComponent(Show, {
                    get when() {
                      return local.onSave;
                    },
                    get children() {
                      return createComponent(Button, {
                        variant: "primary",
                        size: "sm",
                        "class": "rounded-lg",
                        get onClick() {
                          return local.onSave;
                        },
                        get children() {
                          return local.saveLabel ?? "Save";
                        }
                      });
                    }
                  }), null);
                  insert(_el$3, createComponent(Show, {
                    get when() {
                      return memo(() => !!canClose())() && local.showCloseButton !== false;
                    },
                    get children() {
                      return createComponent(Dialog$1.CloseButton, {
                        get ["aria-label"]() {
                          return zh() ? "\u5173\u95ED" : "Close";
                        },
                        "class": "flex h-9 w-9 items-center justify-center rounded-full bg-surface-overlay text-ink-500 hover:bg-surface-dim hover:text-ink-700",
                        onClick: setCloseReason,
                        get children() {
                          return icons.close({
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          });
                        }
                      });
                    }
                  }), null);
                  effect(() => className(_el$3, cn("flex shrink-0 items-center gap-2 border-b border-surface-border px-6 py-4", actionsPosition() === "top-start" ? "justify-start" : "justify-end")));
                  return _el$3;
                }
              }), createComponent(Show, {
                get when() {
                  return memo(() => actionsPosition() === "bottom")() && (local.title || canClose() && local.showCloseButton !== false);
                },
                get children() {
                  var _el$4 = _tmpl$525();
                  insert(_el$4, createComponent(Show, {
                    get when() {
                      return local.title;
                    },
                    get children() {
                      return createComponent(Dialog$1.Title, {
                        "class": "flex-1 text-lg font-semibold text-ink-900",
                        get children() {
                          return local.title;
                        }
                      });
                    }
                  }), null);
                  insert(_el$4, createComponent(Show, {
                    get when() {
                      return !local.title;
                    },
                    get children() {
                      return _tmpl$428();
                    }
                  }), null);
                  insert(_el$4, createComponent(Show, {
                    get when() {
                      return memo(() => !!canClose())() && local.showCloseButton !== false;
                    },
                    get children() {
                      return createComponent(Dialog$1.CloseButton, {
                        get ["aria-label"]() {
                          return zh() ? "\u5173\u95ED" : "Close";
                        },
                        "class": "flex h-8 w-8 items-center justify-center rounded-full text-ink-500 hover:bg-surface-dim hover:text-ink-700",
                        onClick: setCloseReason,
                        get children() {
                          return icons.close({
                            class: "h-4 w-4",
                            "aria-hidden": "true"
                          });
                        }
                      });
                    }
                  }), null);
                  return _el$4;
                }
              }), (() => {
                var _el$6 = _tmpl$624(), _el$7 = _el$6.firstChild;
                insert(_el$7, () => local.children);
                effect((_p$) => {
                  var _v$ = cn("relative flex min-h-0 flex-1 flex-col", !local.noPadding && "p-6"), _v$2 = cn("flex min-h-0 flex-1 flex-col overflow-y-auto p-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden", hasFooter() && actionsPosition() === "bottom" && "min-h-0", local.contentClass);
                  _v$ !== _p$.e && className(_el$6, _p$.e = _v$);
                  _v$2 !== _p$.t && className(_el$7, _p$.t = _v$2);
                  return _p$;
                }, {
                  e: void 0,
                  t: void 0
                });
                return _el$6;
              })(), createComponent(Show, {
                get when() {
                  return memo(() => actionsPosition() === "bottom")() && hasFooter();
                },
                get children() {
                  var _el$8 = _tmpl$721();
                  insert(_el$8, actionsBlock);
                  return _el$8;
                }
              })];
            }
          }))];
        }
      });
    }
  });
}
var _tmpl$140 = /* @__PURE__ */ template(`<div><div class="mb-1 flex items-center gap-3"><h2 class="font-semibold tracking-tight text-xl text-ink-900">`);
var _tmpl$237 = /* @__PURE__ */ template(`<span class="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-sm font-semibold text-primary-600"aria-hidden=true>`);
var _tmpl$331 = /* @__PURE__ */ template(`<p class="mb-6 text-[0.9375rem] text-ink-500">`);
var WizardStep = (props) => {
  return (() => {
    var _el$ = _tmpl$140(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
    insert(_el$2, (() => {
      var _c$ = memo(() => props.stepNumber != null);
      return () => _c$() && (() => {
        var _el$4 = _tmpl$237();
        insert(_el$4, () => props.stepNumber);
        return _el$4;
      })();
    })(), _el$3);
    insert(_el$3, () => props.title);
    insert(_el$, (() => {
      var _c$2 = memo(() => !!props.description);
      return () => _c$2() && (() => {
        var _el$5 = _tmpl$331();
        insert(_el$5, () => props.description);
        return _el$5;
      })();
    })(), null);
    insert(_el$, () => props.children, null);
    effect(() => className(_el$, props.class));
    return _el$;
  })();
};
var _tmpl$141 = /* @__PURE__ */ template(`<div><div></div><div>`);
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
  const [local] = splitProps(props, ["step", "stepLabels", "variant", "sidebarWidth", "gap", "class", "sidebarClass", "contentClass", "children"]);
  return (() => {
    var _el$ = _tmpl$141(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
    insert(_el$2, createComponent(WizardStepper, {
      get step() {
        return local.step;
      },
      get totalSteps() {
        return local.stepLabels.length;
      },
      get stepLabels() {
        return local.stepLabels;
      },
      orientation: "vertical",
      get variant() {
        return local.variant;
      }
    }));
    insert(_el$3, () => local.children);
    effect((_p$) => {
      var _v$ = cn("flex", gaps[local.gap ?? "md"], local.class), _v$2 = cn("shrink-0", sidebarWidths[local.sidebarWidth ?? "md"], local.sidebarClass), _v$3 = cn("min-w-0 flex-1", local.contentClass);
      _v$ !== _p$.e && className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && className(_el$2, _p$.t = _v$2);
      _v$3 !== _p$.a && className(_el$3, _p$.a = _v$3);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    });
    return _el$;
  })();
}

// src/components/layout/WizardStepper.tsx
var _tmpl$145 = /* @__PURE__ */ template(`<span>`);
var _tmpl$238 = /* @__PURE__ */ template(`<nav><ol>`);
var _tmpl$332 = /* @__PURE__ */ template(`<li class=flex><div></div><div><span>`);
var _tmpl$429 = /* @__PURE__ */ template(`<span aria-hidden=true>`);
var _tmpl$526 = /* @__PURE__ */ template(`<li><div><span>`);
var _tmpl$625 = /* @__PURE__ */ template(`<li class="flex shrink-0 items-center text-ink-300"aria-hidden=true>`);
function WizardStepper(props) {
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const orientation = () => props.orientation ?? "horizontal";
  const currentStep = () => props.step;
  const variant = () => props.variant ?? "default";
  const isCompact = () => variant() === "compact";
  const isChevrons = () => variant() === "chevrons";
  const circleContent = (stepNum, isActive, isCompleted) => (() => {
    var _el$ = _tmpl$145();
    insert(_el$, isCompleted ? createComponent(icons.check, {
      get width() {
        return isCompact() ? 12 : 16;
      },
      get height() {
        return isCompact() ? 12 : 16;
      },
      "stroke-width": 2.5
    }) : stepNum);
    effect(() => className(_el$, cn("flex shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors", isCompact() ? "h-6 w-6 text-xs" : "h-8 w-8", isCompleted && "bg-primary-500 text-white", isActive && "bg-primary-500 text-white ring-4 ring-primary-500/20 dark:ring-primary-500/30", isCompact() && isActive && "ring-2", !isActive && !isCompleted && "bg-ink-200 text-ink-500")));
    return _el$;
  })();
  return (() => {
    var _el$2 = _tmpl$238(), _el$3 = _el$2.firstChild;
    insert(_el$3, () => props.stepLabels.map((label, index) => {
      const stepNum = index + 1;
      const isActive = currentStep() === stepNum;
      const isCompleted = currentStep() > stepNum;
      const isLast = index === props.stepLabels.length - 1;
      if (orientation() === "vertical") {
        return (() => {
          var _el$4 = _tmpl$332(), _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$7 = _el$6.firstChild;
          setAttribute(_el$4, "aria-current", isActive ? "step" : void 0);
          insert(_el$5, () => circleContent(stepNum, isActive, isCompleted), null);
          insert(_el$5, !isLast && (() => {
            var _el$8 = _tmpl$429();
            effect(() => className(_el$8, cn("w-0.5 flex-1 rounded transition-colors", isCompact() ? "my-1" : "my-1.5", isCompleted ? "bg-primary-500" : "bg-surface-dim")));
            return _el$8;
          })(), null);
          insert(_el$7, label);
          effect((_p$) => {
            var _v$4 = cn("flex flex-col items-center shrink-0", isCompact() ? "w-6" : "w-8"), _v$5 = cn("flex items-center", isCompact() ? "pl-2.5" : "pl-3", isLast ? "pb-0" : isCompact() ? "pb-3" : "pb-4"), _v$6 = cn("font-medium text-sm", isActive && "text-ink-900", isCompleted && "text-ink-600", !isActive && !isCompleted && "text-ink-400");
            _v$4 !== _p$.e && className(_el$5, _p$.e = _v$4);
            _v$5 !== _p$.t && className(_el$6, _p$.t = _v$5);
            _v$6 !== _p$.a && className(_el$7, _p$.a = _v$6);
            return _p$;
          }, {
            e: void 0,
            t: void 0,
            a: void 0
          });
          return _el$4;
        })();
      }
      return [memo(() => memo(() => !!(index > 0 && isChevrons()))() && (() => {
        var _el$10 = _tmpl$625();
        insert(_el$10, createComponent(icons.chevronRight, {
          get width() {
            return isCompact() ? 16 : 20;
          },
          get height() {
            return isCompact() ? 16 : 20;
          }
        }));
        return _el$10;
      })()), (() => {
        var _el$9 = _tmpl$526(), _el$0 = _el$9.firstChild, _el$1 = _el$0.firstChild;
        setAttribute(_el$9, "aria-current", isActive ? "step" : void 0);
        insert(_el$9, (() => {
          var _c$ = memo(() => !!(index > 0 && !isChevrons()));
          return () => _c$() && (() => {
            var _el$11 = _tmpl$429();
            effect(() => className(_el$11, cn("h-0.5 min-w-[1rem] flex-1 shrink rounded transition-colors", isCompact() ? "ml-2 mr-2 sm:ml-2.5 sm:mr-2.5" : "ml-3 mr-3 sm:ml-4 sm:mr-4", isCompleted ? "bg-primary-500" : "bg-surface-dim")));
            return _el$11;
          })();
        })(), _el$0);
        insert(_el$0, () => circleContent(stepNum, isActive, isCompleted), _el$1);
        insert(_el$1, label);
        effect((_p$) => {
          var _v$7 = cn("flex items-center", isChevrons() ? "min-w-0 flex-1 basis-0 justify-center" : "min-w-0 flex-1 first:min-w-0 first:flex-initial"), _v$8 = cn("flex shrink-0 items-center gap-3", isCompact() && "gap-2"), _v$9 = cn("font-medium", isCompact() ? "text-sm" : "text-xs sm:text-sm", isActive && "text-ink-900", isCompleted && "text-ink-600", !isActive && !isCompleted && "text-ink-400");
          _v$7 !== _p$.e && className(_el$9, _p$.e = _v$7);
          _v$8 !== _p$.t && className(_el$0, _p$.t = _v$8);
          _v$9 !== _p$.a && className(_el$1, _p$.a = _v$9);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        });
        return _el$9;
      })()];
    }));
    effect((_p$) => {
      var _v$ = cn("wizard-stepper", props.class), _v$2 = zh() ? "\u8FDB\u5EA6" : "Progress", _v$3 = cn("m-0 flex list-none items-center p-0", orientation() === "vertical" && "flex-col items-stretch gap-0");
      _v$ !== _p$.e && className(_el$2, _p$.e = _v$);
      _v$2 !== _p$.t && setAttribute(_el$2, "aria-label", _p$.t = _v$2);
      _v$3 !== _p$.a && className(_el$3, _p$.a = _v$3);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    });
    return _el$2;
  })();
}
var Wizard = {
  Stepper: WizardStepper,
  Step: WizardStep,
  Vertical: VerticalWizard
};
var _tmpl$146 = /* @__PURE__ */ template(`<p> `);
var _tmpl$239 = /* @__PURE__ */ template(`<button type=button>`);
var defaultActionClass = "cursor-pointer font-medium text-primary-500 hover:underline rounded outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50";
function PromptWithAction(props) {
  const actionClass = () => cn(defaultActionClass, props.actionClass);
  return (() => {
    var _el$ = _tmpl$146(), _el$2 = _el$.firstChild;
    insert(_el$, () => props.prompt, _el$2);
    insert(_el$, (() => {
      var _c$ = memo(() => props.href != null);
      return () => _c$() ? createComponent(Link, {
        get href() {
          return props.href;
        },
        get ["class"]() {
          return actionClass();
        },
        get children() {
          return props.actionLabel;
        }
      }) : (() => {
        var _el$3 = _tmpl$239();
        addEventListener(_el$3, "click", props.onClick, true);
        insert(_el$3, () => props.actionLabel);
        effect(() => className(_el$3, actionClass()));
        return _el$3;
      })();
    })(), null);
    effect(() => className(_el$, cn("mb-7 text-[0.9375rem] text-ink-500", props.class)));
    return _el$;
  })();
}
delegateEvents(["click"]);
var _tmpl$147 = /* @__PURE__ */ template(`<section>`);
var _tmpl$240 = /* @__PURE__ */ template(`<h2>`);
var _tmpl$333 = /* @__PURE__ */ template(`<div>`);
var _tmpl$430 = /* @__PURE__ */ template(`<p>`);
function Section(props) {
  const [local, others] = splitProps(props, ["title", "description", "descriptionContent", "id", "class", "titleClass", "descriptionClass", "children", "ref"]);
  return (() => {
    var _el$ = _tmpl$147();
    var _ref$ = local.ref;
    typeof _ref$ === "function" ? use(_ref$, _el$) : local.ref = _el$;
    spread(_el$, mergeProps({
      get id() {
        return local.id;
      },
      get ["class"]() {
        return cn(local.class);
      }
    }, others), false, true);
    insert(_el$, (() => {
      var _c$ = memo(() => !!(local.title != null && local.title !== ""));
      return () => _c$() && (() => {
        var _el$2 = _tmpl$240();
        insert(_el$2, () => local.title);
        effect(() => className(_el$2, cn("mb-2 text-lg font-semibold text-ink-900", local.titleClass)));
        return _el$2;
      })();
    })(), null);
    insert(_el$, (() => {
      var _c$2 = memo(() => local.descriptionContent != null);
      return () => _c$2() ? (() => {
        var _el$3 = _tmpl$333();
        insert(_el$3, () => local.descriptionContent);
        effect(() => className(_el$3, cn("mb-4 text-sm text-ink-500", local.descriptionClass)));
        return _el$3;
      })() : memo(() => !!(local.description != null && local.description !== ""))() ? (() => {
        var _el$4 = _tmpl$430();
        insert(_el$4, () => local.description);
        effect(() => className(_el$4, cn("mb-4 text-sm text-ink-500", local.descriptionClass)));
        return _el$4;
      })() : null;
    })(), null);
    insert(_el$, () => local.children, null);
    return _el$;
  })();
}
var _tmpl$148 = /* @__PURE__ */ template(`<div>`);
function Inline(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (() => {
    var _el$ = _tmpl$148();
    spread(_el$, mergeProps({
      get ["class"]() {
        return cn("flex items-center gap-2", local.class);
      }
    }, others), false, true);
    insert(_el$, () => local.children);
    return _el$;
  })();
}
var _tmpl$149 = /* @__PURE__ */ template(`<form>`);
var _tmpl$241 = /* @__PURE__ */ template(`<p class=font-medium>Please fix the following:`);
var _tmpl$334 = /* @__PURE__ */ template(`<ul class="mt-1 list-inside list-disc">`);
var _tmpl$431 = /* @__PURE__ */ template(`<li>`);
function Form(props) {
  const [local, rest] = splitProps(props, ["class", "children", "errorSummary", "size"]);
  return createComponent(ComponentSizeProvider, {
    get size() {
      return local.size;
    },
    get children() {
      var _el$ = _tmpl$149();
      spread(_el$, mergeProps({
        get ["data-torchui-form-size"]() {
          return local.size;
        },
        get ["class"]() {
          return cn("flex flex-col gap-6", local.class);
        }
      }, rest), false, true);
      insert(_el$, createComponent(Show, {
        get when() {
          return memo(() => !!local.errorSummary)() && (Array.isArray(local.errorSummary) ? local.errorSummary.length > 0 : true);
        },
        get children() {
          return memo(() => memo(() => !!Array.isArray(local.errorSummary))() ? createComponent(Alert, {
            status: "error",
            "class": "mb-0",
            get children() {
              return [_tmpl$241(), (() => {
                var _el$3 = _tmpl$334();
                insert(_el$3, createComponent(For, {
                  get each() {
                    return local.errorSummary;
                  },
                  children: (msg) => (() => {
                    var _el$4 = _tmpl$431();
                    insert(_el$4, msg);
                    return _el$4;
                  })()
                }));
                return _el$3;
              })()];
            }
          }) : local.errorSummary);
        }
      }), null);
      insert(_el$, () => local.children, null);
      return _el$;
    }
  });
}
var _tmpl$150 = /* @__PURE__ */ template(`<blockquote><div><div><div class="[&amp;>p]:mb-2 [&amp;>p:last-child]:mb-0">`);
var _tmpl$242 = /* @__PURE__ */ template(`<div class=shrink-0 aria-hidden=true>`);
var _tmpl$335 = /* @__PURE__ */ template(`<div class="mb-2 text-primary-500 [&amp;>svg]:h-8 [&amp;>svg]:w-8"aria-hidden=true>`);
var _tmpl$432 = /* @__PURE__ */ template(`<footer class="mt-2 text-sm text-ink-500">`);
var justifyClass = {
  start: "text-start",
  center: "text-center",
  end: "text-end"
};
function BlockQuote(props) {
  const justify = () => props.justify ?? "start";
  const alignClass = () => justifyClass[justify()];
  const hasCitation = () => props.citation != null && (typeof props.citation !== "string" || props.citation.trim() !== "");
  return (() => {
    var _el$ = _tmpl$150(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild;
    insert(_el$2, (() => {
      var _c$ = memo(() => !!props.avatar);
      return () => _c$() && (() => {
        var _el$5 = _tmpl$242();
        insert(_el$5, () => props.avatar);
        return _el$5;
      })();
    })(), _el$3);
    insert(_el$3, (() => {
      var _c$2 = memo(() => !!props.icon);
      return () => _c$2() && (() => {
        var _el$6 = _tmpl$335();
        insert(_el$6, () => props.icon);
        return _el$6;
      })();
    })(), _el$4);
    insert(_el$4, () => props.children);
    insert(_el$3, (() => {
      var _c$3 = memo(() => !!hasCitation());
      return () => _c$3() && (() => {
        var _el$7 = _tmpl$432();
        insert(_el$7, () => props.citation);
        return _el$7;
      })();
    })(), null);
    effect((_p$) => {
      var _v$ = props.cite, _v$2 = cn("text-ink-700", !props.noBorder && "border-l-4 border-primary-500 pl-4", props.class), _v$3 = cn("flex gap-3", props.avatar && "items-start"), _v$4 = cn("min-w-0 flex-1", alignClass());
      _v$ !== _p$.e && setAttribute(_el$, "cite", _p$.e = _v$);
      _v$2 !== _p$.t && className(_el$, _p$.t = _v$2);
      _v$3 !== _p$.a && className(_el$2, _p$.a = _v$3);
      _v$4 !== _p$.o && className(_el$3, _p$.o = _v$4);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    });
    return _el$;
  })();
}
var _tmpl$151 = /* @__PURE__ */ template(`<div>`);
var _tmpl$243 = /* @__PURE__ */ template(`<p>`);
function PageHeading(props) {
  const descClass = () => cn("text-[0.9375rem] text-ink-500", props.descriptionClass ?? "mt-3");
  const level = () => props.level ?? 1;
  const headingTag = () => props.as ?? (level() === 2 ? "h2" : "h1");
  return (() => {
    var _el$ = _tmpl$151();
    insert(_el$, createComponent(Dynamic, {
      get component() {
        return headingTag();
      },
      get ["class"]() {
        return cn("font-bold tracking-tight text-ink-900", level() === 2 ? "text-xl" : "text-2xl", props.titleClass);
      },
      get children() {
        return props.title;
      }
    }), null);
    insert(_el$, (() => {
      var _c$ = memo(() => props.descriptionContent != null);
      return () => _c$() ? (() => {
        var _el$2 = _tmpl$243();
        insert(_el$2, () => props.descriptionContent);
        effect(() => className(_el$2, descClass()));
        return _el$2;
      })() : memo(() => !!(props.description != null && props.description !== ""))() ? (() => {
        var _el$3 = _tmpl$243();
        insert(_el$3, () => props.description);
        effect(() => className(_el$3, descClass()));
        return _el$3;
      })() : null;
    })(), null);
    effect(() => className(_el$, cn(props.class)));
    return _el$;
  })();
}
var _tmpl$155 = /* @__PURE__ */ template(`<div aria-hidden=true>`);
var _tmpl$244 = /* @__PURE__ */ template(`<div aria-hidden=true><div class=invisible></div><div>`);
var STANDALONE_CLASS = "inline-block bg-ink-200 animate-pulse";
var ROUND_CLASS = {
  full: "rounded-full",
  lg: "rounded-lg",
  md: "rounded-md",
  sm: "rounded-sm",
  none: "rounded-none"
};
function Skeleton(props) {
  const [local] = splitProps(props, ["class", "round", "block", "loaded", "children"]);
  const roundClass = local.round ? ROUND_CLASS[local.round] : "rounded";
  if (local.children == null) {
    return (() => {
      var _el$ = _tmpl$155();
      effect(() => className(_el$, cn(STANDALONE_CLASS, roundClass, local.class)));
      return _el$;
    })();
  }
  return createComponent(Show, {
    get when() {
      return !local.loaded;
    },
    get fallback() {
      return memo(() => local.children);
    },
    get children() {
      var _el$2 = _tmpl$244(), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling;
      insert(_el$3, () => local.children);
      effect((_p$) => {
        var _v$ = cn("relative", local.block ? "block" : "inline-block", roundClass, local.class), _v$2 = cn("absolute inset-0", roundClass, STANDALONE_CLASS);
        _v$ !== _p$.e && className(_el$2, _p$.e = _v$);
        _v$2 !== _p$.t && className(_el$4, _p$.t = _v$2);
        return _p$;
      }, {
        e: void 0,
        t: void 0
      });
      return _el$2;
    }
  });
}

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
var _tmpl$156 = /* @__PURE__ */ template(`<img alt>`);
var _tmpl$245 = /* @__PURE__ */ template(`<span><span>`);
var _tmpl$336 = /* @__PURE__ */ template(`<span aria-hidden=true>`);
var _tmpl$433 = /* @__PURE__ */ template(`<span>`);
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
var SIZE_IDX = {
  sm: 0,
  md: 1,
  lg: 2
};
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
  const [local, others] = splitProps(props, ["name", "imageUrl", "size", "shape", "ring", "color", "badge", "badgeSize", "badgeKind", "badgePlacement", "badgeInteractive", "decorative", "class", "style"]);
  const size = () => local.size ?? "md";
  const badgeSize = () => local.badgeSize ?? size();
  const badgeKind = () => local.badgeKind ?? "dot";
  const shape = () => local.shape ?? "circle";
  const color = () => local.color ?? "neutral";
  const badgePlacement = () => local.badgePlacement ?? "bottom-right";
  const sizeClass = () => avatarSizeClasses[size()];
  const ringClass = createMemo(() => {
    const r = local.ring;
    if (!r) return "";
    const ringColor = r === true ? "ring-surface-base" : r.color ?? "ring-surface-base";
    const useOffset = r === true || typeof r === "object" && r.offset !== false;
    return cn("ring-2", useOffset && "ring-offset-2 ring-offset-surface-base", ringColor);
  });
  const initials = () => getInitials(local.name);
  const hasBadge = () => local.badge != null;
  const badgeIsInteractive = () => !local.decorative && local.badgeInteractive === true;
  const badgeTransformStyle = createMemo(() => ({
    transform: badgeTransform(badgePlacement(), size(), badgeSize(), badgeKind())
  }));
  const [imageError, setImageError] = createSignal(false);
  const [imageLoaded, setImageLoaded] = createSignal(false);
  const [imageStartedLoading, setImageStartedLoading] = createSignal(false);
  createEffect(on(() => local.imageUrl, () => {
    setImageError(false);
    setImageLoaded(false);
    setImageStartedLoading(false);
  }));
  return (() => {
    var _el$ = _tmpl$245(), _el$2 = _el$.firstChild;
    spread(_el$, mergeProps(others, {
      get role() {
        return local.decorative ? void 0 : "img";
      },
      get ["aria-label"]() {
        return memo(() => !!local.decorative)() ? void 0 : local.name;
      },
      get ["aria-hidden"]() {
        return local.decorative ? "true" : void 0;
      },
      get ["class"]() {
        return cn("inline-flex shrink-0", hasBadge() && "relative overflow-visible", local.class);
      },
      get style() {
        return local.style;
      }
    }), false, true);
    insert(_el$2, createComponent(Show, {
      get when() {
        return memo(() => !!local.imageUrl)() && !imageError();
      },
      get fallback() {
        return (() => {
          var _el$4 = _tmpl$336();
          insert(_el$4, initials);
          return _el$4;
        })();
      },
      get children() {
        return [(() => {
          var _el$3 = _tmpl$156();
          _el$3.addEventListener("loadstart", () => setImageStartedLoading(true));
          _el$3.addEventListener("load", () => setImageLoaded(true));
          _el$3.addEventListener("error", () => setImageError(true));
          effect((_p$) => {
            var _v$ = local.imageUrl, _v$2 = cn("h-full w-full object-cover", !imageLoaded() && "opacity-0");
            _v$ !== _p$.e && setAttribute(_el$3, "src", _p$.e = _v$);
            _v$2 !== _p$.t && className(_el$3, _p$.t = _v$2);
            return _p$;
          }, {
            e: void 0,
            t: void 0
          });
          return _el$3;
        })(), memo(() => memo(() => !!(imageStartedLoading() && !imageLoaded()))() && createComponent(Skeleton, {
          "class": "absolute inset-0",
          get round() {
            return memo(() => shape() === "circle")() ? "full" : shape() === "square" ? "none" : "lg";
          }
        }))];
      }
    }));
    insert(_el$, (() => {
      var _c$ = memo(() => !!hasBadge());
      return () => _c$() && (() => {
        var _el$5 = _tmpl$433();
        insert(_el$5, () => local.badge);
        effect((_p$) => {
          var _v$5 = cn("absolute z-10 flex", !badgeIsInteractive() && "pointer-events-none", badgePlacementClasses[badgePlacement()]), _v$6 = badgeTransformStyle();
          _v$5 !== _p$.e && className(_el$5, _p$.e = _v$5);
          _p$.t = style(_el$5, _v$6, _p$.t);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$5;
      })();
    })(), null);
    effect((_p$) => {
      var _v$3 = cn("relative inline-flex items-center justify-center overflow-hidden font-medium", colorClasses[color()], shapeClasses[shape()], sizeClass(), ringClass()), _v$4 = local.decorative ? void 0 : local.name;
      _v$3 !== _p$.e && className(_el$2, _p$.e = _v$3);
      _v$4 !== _p$.t && setAttribute(_el$2, "title", _p$.t = _v$4);
      return _p$;
    }, {
      e: void 0,
      t: void 0
    });
    return _el$;
  })();
}

// src/components/layout/Card.tsx
var _tmpl$157 = /* @__PURE__ */ template(`<div>`);
var _tmpl$246 = /* @__PURE__ */ template(`<div><img>`);
var _tmpl$337 = /* @__PURE__ */ template(`<span class="font-medium text-ink-900">`);
var cardBase = "rounded-xl border border-surface-border bg-surface-raised";
var variantClasses = {
  default: "shadow-sm",
  flat: "shadow-none"
};
function CardRoot(props) {
  const [local, others] = splitProps(props, ["children", "horizontal", "variant", "class", "ref"]);
  const variant = () => local.variant ?? "default";
  return (() => {
    var _el$ = _tmpl$157();
    var _ref$ = local.ref;
    typeof _ref$ === "function" ? use(_ref$, _el$) : local.ref = _el$;
    spread(_el$, mergeProps({
      get ["class"]() {
        return cn(cardBase, variantClasses[variant()], local.horizontal ? "flex flex-row overflow-hidden" : "flex flex-col", local.class);
      }
    }, others), false, true);
    insert(_el$, () => local.children);
    return _el$;
  })();
}
function CardHeader(props) {
  const headingTag = () => props.as ?? "h3";
  return (() => {
    var _el$2 = _tmpl$157();
    insert(_el$2, createComponent(Dynamic, {
      get component() {
        return headingTag();
      },
      "class": "text-base font-semibold text-ink-900",
      get children() {
        return props.title;
      }
    }), null);
    insert(_el$2, () => props.action, null);
    effect(() => className(_el$2, cn("flex shrink-0 items-center justify-between gap-3 border-b border-surface-border px-6 py-4", props.class)));
    return _el$2;
  })();
}
function CardImage(props) {
  return (() => {
    var _el$3 = _tmpl$246(), _el$4 = _el$3.firstChild;
    effect((_p$) => {
      var _v$ = cn("shrink-0 overflow-hidden", props.horizontal ? "w-36 self-stretch" : "w-full rounded-t-xl", props.class), _v$2 = props.src, _v$3 = props.alt, _v$4 = cn("object-cover", props.horizontal ? "h-full min-h-0 w-full" : "h-auto w-full", props.imgClass);
      _v$ !== _p$.e && className(_el$3, _p$.e = _v$);
      _v$2 !== _p$.t && setAttribute(_el$4, "src", _p$.t = _v$2);
      _v$3 !== _p$.a && setAttribute(_el$4, "alt", _p$.a = _v$3);
      _v$4 !== _p$.o && className(_el$4, _p$.o = _v$4);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    });
    return _el$3;
  })();
}
function CardAvatarTitle(props) {
  return (() => {
    var _el$5 = _tmpl$157();
    insert(_el$5, createComponent(Skeleton, {
      round: "full",
      get loaded() {
        return !props.loading;
      },
      get children() {
        return createComponent(Avatar, {
          get name() {
            return props.name;
          },
          get imageUrl() {
            return props.imageUrl;
          },
          get size() {
            return props.avatarSize ?? "md";
          }
        });
      }
    }), null);
    insert(_el$5, createComponent(Skeleton, {
      get loaded() {
        return !props.loading;
      },
      block: true,
      get children() {
        var _el$6 = _tmpl$337();
        insert(_el$6, () => props.name);
        return _el$6;
      }
    }), null);
    effect(() => className(_el$5, cn("flex shrink-0 items-center gap-3 px-6 pt-4 pb-0", props.class)));
    return _el$5;
  })();
}
var CardContent = (props) => {
  return (() => {
    var _el$7 = _tmpl$157();
    insert(_el$7, () => props.children);
    effect(() => className(_el$7, cn("flex min-w-0 flex-1 flex-col", props.class)));
    return _el$7;
  })();
};
var CardBody = (props) => {
  return (() => {
    var _el$8 = _tmpl$157();
    insert(_el$8, () => props.children);
    effect(() => className(_el$8, cn("flex-1 p-6 sm:p-8", props.class)));
    return _el$8;
  })();
};
var Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Image: CardImage,
  AvatarTitle: CardAvatarTitle,
  Content: CardContent,
  Body: CardBody
});
var _tmpl$158 = /* @__PURE__ */ template(`<div>`);
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
  return (() => {
    var _el$ = _tmpl$158();
    insert(_el$, () => props.children);
    effect(() => className(_el$, cn("w-full px-4 sm:px-6 lg:px-8", !fluid() && alignClasses[align()], !fluid() && size() !== "full" && sizeClasses3[size()], props.class)));
    return _el$;
  })();
};
var _tmpl$159 = /* @__PURE__ */ template(`<div>`);
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
  return (() => {
    var _el$ = _tmpl$159();
    insert(_el$, () => props.children);
    effect(() => className(_el$, cn("grid", colsClasses[cols()], gapClasses[gap()], props.class)));
    return _el$;
  })();
};
var _tmpl$160 = /* @__PURE__ */ template(`<div>`);
function FormActions(props) {
  const isSubmit = props.primaryType !== "button";
  return (() => {
    var _el$ = _tmpl$160();
    insert(_el$, createComponent(Button, {
      type: "button",
      variant: "ghost",
      get onClick() {
        return props.onBack;
      },
      "class": "rounded-lg",
      get children() {
        return props.backLabel;
      }
    }), null);
    insert(_el$, createComponent(Button, {
      type: isSubmit ? "submit" : "button",
      variant: "primary",
      get loading() {
        return props.loading ?? false;
      },
      get disabled() {
        return props.disabled ?? false;
      },
      get onClick() {
        return isSubmit ? void 0 : props.primaryType === "button" ? props.onPrimary : void 0;
      },
      "class": "rounded-lg py-2.5 font-semibold",
      get children() {
        return props.primaryLabel;
      }
    }), null);
    effect(() => className(_el$, cn("flex gap-3 pt-2", props.class)));
    return _el$;
  })();
}
var _tmpl$161 = /* @__PURE__ */ template(`<div><div>`);
var _tmpl$247 = /* @__PURE__ */ template(`<div>`);
function TablePanel(props) {
  const [local, others] = splitProps(props, ["header", "headerClass", "bodyClass", "class", "children"]);
  return (() => {
    var _el$ = _tmpl$161(), _el$2 = _el$.firstChild;
    spread(_el$, mergeProps({
      get ["class"]() {
        return cn("rounded-2xl border border-surface-border bg-surface-raised shadow-sm", local.class);
      }
    }, others), false, true);
    insert(_el$, (() => {
      var _c$ = memo(() => !!local.header);
      return () => _c$() && (() => {
        var _el$3 = _tmpl$247();
        insert(_el$3, () => local.header);
        effect(() => className(_el$3, cn("rounded-t-2xl border-b border-surface-border p-4", local.headerClass)));
        return _el$3;
      })();
    })(), _el$2);
    insert(_el$2, () => local.children);
    effect(() => className(_el$2, cn("p-4", local.bodyClass)));
    return _el$;
  })();
}
var CollapsibleRoot = Collapsible$1;
var CollapsibleTrigger = Collapsible$1.Trigger;
var CollapsibleContent = Collapsible$1.Content;
var _KbCollapsibleContent = Collapsible$1.Content;
var _KbCollapsibleTrigger = Collapsible$1.Trigger;
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
  const [local, others] = splitProps(props, ["variant", "class", "children"]);
  onMount(ensureCollapsibleStyles);
  const variant = () => local.variant ?? "default";
  return createComponent(_KbCollapsibleContent, mergeProps({
    get ["class"]() {
      return cn("collapsible-content overflow-hidden", variant() === "default" && ["data-[expanded]:border data-[expanded]:border-surface-border data-[expanded]:border-t-0", "data-[expanded]:rounded-b-lg data-[expanded]:bg-surface-raised"], local.class);
    }
  }, others, {
    get children() {
      return local.children;
    }
  }));
}
function CollapsibleTriggerStyled(props) {
  const [local, others] = splitProps(props, ["variant", "class", "children"]);
  const variant = () => local.variant ?? "default";
  const icons = useIcons();
  return createComponent(_KbCollapsibleTrigger, mergeProps({
    get ["class"]() {
      return cn("flex w-full items-center justify-between gap-2 text-left", variant() === "default" ? ["rounded-lg border border-surface-border bg-surface-base px-4 py-3 text-sm font-medium text-ink-800", "hover:bg-surface-overlay", "data-[expanded]:rounded-b-none data-[expanded]:bg-surface-overlay"] : ["rounded-lg px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-500", "hover:bg-transparent hover:text-ink-700", "data-[expanded]:text-ink-700"], "data-[expanded]:[&>svg]:rotate-180", variant() === "default" ? "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500" : "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-inset", local.class);
    }
  }, others, {
    get children() {
      return [memo(() => local.children), memo(() => icons.chevronDown({
        class: "h-4 w-4 shrink-0 transition-transform duration-200",
        "aria-hidden": "true"
      }))];
    }
  }));
}
var Collapsible = Object.assign(CollapsibleRoot, {
  Trigger: CollapsibleTriggerStyled,
  Content: CollapsibleContentStyled
});
function PopoverRoot(props) {
  const [local, others] = splitProps(props, ["align", "side", "placement"]);
  const side = () => local.side ?? "bottom";
  const align = () => local.align ?? "center";
  const placement = () => {
    if (local.placement) return local.placement;
    const s = side();
    const a = align();
    return a === "center" ? s : `${s}-${a}`;
  };
  return createComponent(Popover$1, mergeProps(others, {
    get placement() {
      return placement();
    }
  }));
}
var PopoverTrigger = Popover$1.Trigger;
var PopoverAnchor = Popover$1.Anchor;
var PopoverPortal = Popover$1.Portal;
var PopoverContentPrimitive = Popover$1.Content;
var PopoverArrow = Popover$1.Arrow;
var PopoverCloseButton = Popover$1.CloseButton;
function PopoverContent(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return createComponent(Popover$1.Portal, {
    get children() {
      return createComponent(Popover$1.Content, mergeProps({
        get ["class"]() {
          return cn("z-[80] min-w-[180px] rounded-lg border border-surface-border bg-surface-raised p-2 shadow-lg", local.class);
        }
      }, others, {
        get children() {
          return local.children;
        }
      }));
    }
  });
}
var Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  CloseButton: PopoverCloseButton
});

// src/components/layout/CodeBlock.tsx
var _tmpl$165 = /* @__PURE__ */ template(`<span class="shrink-0 flex items-center [&amp;>svg]:size-4 [&amp;>img]:size-4"aria-hidden=true>`);
var _tmpl$248 = /* @__PURE__ */ template(`<span>`);
var _tmpl$338 = /* @__PURE__ */ template(`<span class="shrink-0 flex items-center pl-2 [&amp;>svg]:size-3.5 [&amp;>img]:size-3.5 text-inherit"aria-hidden=true>`);
var _tmpl$434 = /* @__PURE__ */ template(`<span class="min-w-0 flex-1 truncate text-left py-1 pr-1 pl-1.5">`);
var _tmpl$527 = /* @__PURE__ */ template(`<div class="flex flex-col"role=menu>`);
var _tmpl$626 = /* @__PURE__ */ template(`<button type=button>`);
var _tmpl$722 = /* @__PURE__ */ template(`<div><div class="min-w-0 flex-1 flex items-center gap-2 truncate"></div><div class="flex shrink-0 items-center gap-2">`);
var _tmpl$820 = /* @__PURE__ */ template(`<div>`);
var _tmpl$915 = /* @__PURE__ */ template(`<div class="flex min-w-0"><div aria-hidden=true></div><code>`);
var _tmpl$09 = /* @__PURE__ */ template(`<pre data-torchui=code-block>`);
var _tmpl$166 = /* @__PURE__ */ template(`<span class="shrink-0 flex items-center [&amp;>svg]:size-3.5 [&amp;>img]:size-3.5 text-inherit"aria-hidden=true>`);
var _tmpl$1014 = /* @__PURE__ */ template(`<span class="w-3.5 shrink-0"aria-hidden=true>`);
var _tmpl$1112 = /* @__PURE__ */ template(`<button type=button role=menuitemradio><span class="min-w-0 truncate">`);
var _tmpl$1211 = /* @__PURE__ */ template(`<code>`);
var _tmpl$1310 = /* @__PURE__ */ template(`<div data-torchui=code-block-container>`);
function getHeaderTitle(props) {
  if (props.filename != null && props.filename !== "") return props.filename;
  if (props.label != null && props.label !== "") return props.label;
  return void 0;
}
var CODE_BLOCK_PROP_KEYS = ["content", "alternateContent", "language", "languages", "filename", "label", "headerIcon", "showLineNumbers", "highlightLines", "dark", "primary", "minHeight", "collapsible", "defaultCodeOpen", "embedded", "collapsibleLabelShow", "collapsibleLabelHide", "highlighter", "class", "preProps", "ref"];
function CodeBlock(props) {
  const [local, others] = splitProps(props, [...CODE_BLOCK_PROP_KEYS]);
  const icons = useIcons();
  const contextLocale = useLocaleConfig();
  const zh = () => resolveLocale(void 0, contextLocale) === "zh";
  const primary = () => local.primary === true;
  const themeAuto = () => !primary() && local.dark !== true;
  const dark = () => local.dark === true;
  const minHeight = () => local.minHeight ?? "min-h-0";
  const showLineNumbers = () => local.showLineNumbers === true;
  const highlightLines = () => local.highlightLines ?? [];
  const [selectedIndex, setSelectedIndex] = createSignal(0);
  const [languageOpen, setLanguageOpen] = createSignal(false);
  const [showAlternate, setShowAlternate] = createSignal(true);
  const [codeOpen, setCodeOpen] = createSignal(local.defaultCodeOpen ?? false);
  const collapsible = () => local.collapsible === true;
  const embedded = () => local.embedded === true;
  const triggerClass = () => cn("flex w-full items-center justify-center gap-2 py-2.5 text-sm font-medium", codeOpen() ? "rounded-none border-t border-surface-border" : "rounded-b-xl", "text-ink-600 hover:text-ink-900", "bg-surface-overlay hover:bg-surface-dim", "outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500");
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
    return cn(base, primary() ? "border border-primary-600/80" : "border border-surface-border");
  };
  const containerStyle = () => dark() && !primary() ? {
    "background-color": "color-mix(in oklch, white 6%, #020b13)"
  } : void 0;
  const headerBorderClass = () => primary() ? "border-primary-500/60" : "border-surface-border";
  const headerTextClass = () => primary() ? "text-white/90" : "text-ink-500";
  const copyButtonClass = () => primary() ? "!border-0 !bg-transparent !shadow-none text-white/70 hover:!bg-white/15 hover:text-white focus-visible:ring-white/50" : "!border-0 !bg-transparent !shadow-none text-ink-500 hover:!bg-surface-overlay hover:text-ink-700";
  const lineNumClass = () => primary() ? "text-white/40" : "text-ink-400";
  const [codeEl, setCodeEl] = createSignal(null);
  createEffect(() => {
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
    onCleanup(() => {
      cancelled = true;
    });
  });
  const themeClass = () => primary() ? "code-block-primary" : dark() ? "code-block-dark" : "code-block";
  const codeContent = [createComponent(Show, {
    get when() {
      return hasHeader();
    },
    get children() {
      var _el$ = _tmpl$722(), _el$2 = _el$.firstChild, _el$5 = _el$2.nextSibling;
      insert(_el$2, createComponent(Show, {
        get when() {
          return local.headerIcon;
        },
        get children() {
          var _el$3 = _tmpl$165();
          insert(_el$3, () => local.headerIcon);
          return _el$3;
        }
      }), null);
      insert(_el$2, createComponent(Show, {
        get when() {
          return getHeaderTitle(local);
        },
        get children() {
          var _el$4 = _tmpl$248();
          insert(_el$4, () => getHeaderTitle(local));
          effect(() => className(_el$4, cn("text-xs font-medium truncate", headerTextClass())));
          return _el$4;
        }
      }), null);
      insert(_el$5, createComponent(Show, {
        get when() {
          return memo(() => !!local.languages)() && local.languages.length > 1;
        },
        get children() {
          return createComponent(PopoverRoot, {
            get open() {
              return languageOpen();
            },
            onOpenChange: setLanguageOpen,
            align: "end",
            get children() {
              return [createComponent(PopoverTrigger, {
                as: "button",
                type: "button",
                get ["aria-label"]() {
                  return zh() ? "\u8BED\u8A00" : "Language";
                },
                get ["class"]() {
                  return cn("h-7 min-w-0 flex items-center gap-1.5 rounded border text-xs font-medium overflow-hidden cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500", primary() ? "bg-white/10 border-white/30 text-white hover:bg-white/15" : themeAuto() ? "bg-surface-raised border-surface-border text-ink-700 hover:bg-surface-overlay" : dark() ? "bg-surface-overlay border-surface-border text-ink-300 hover:bg-surface-dim" : "bg-surface-overlay border-surface-border text-ink-700 hover:bg-surface-dim");
                },
                get children() {
                  return [createComponent(Show, {
                    get when() {
                      return selectedLanguageItem()?.icon;
                    },
                    get children() {
                      var _el$6 = _tmpl$338();
                      insert(_el$6, () => typeof selectedLanguageItem().icon === "function" ? selectedLanguageItem().icon() : selectedLanguageItem().icon);
                      return _el$6;
                    }
                  }), (() => {
                    var _el$7 = _tmpl$434();
                    insert(_el$7, () => selectedLanguageItem()?.label ?? "");
                    return _el$7;
                  })(), memo(() => icons.chevronDown({
                    class: "h-3.5 w-3.5 shrink-0 mr-1.5 opacity-70",
                    "aria-hidden": "true"
                  }))];
                }
              }), createComponent(PopoverContent, {
                get ["class"]() {
                  return cn("min-w-0 p-1 max-h-60 overflow-auto", primary() ? "bg-ink-900 border-white/20" : "bg-surface-raised border-surface-border");
                },
                get children() {
                  var _el$8 = _tmpl$527();
                  insert(_el$8, createComponent(For, {
                    get each() {
                      return local.languages ?? [];
                    },
                    children: (item, idx) => (() => {
                      var _el$13 = _tmpl$1112(), _el$16 = _el$13.firstChild;
                      _el$13.$$click = () => {
                        setSelectedIndex(idx());
                        setLanguageOpen(false);
                      };
                      insert(_el$13, createComponent(Show, {
                        get when() {
                          return memo(() => !!item.icon)() && (typeof item.icon === "function" || selectedIndex() !== idx());
                        },
                        get children() {
                          var _el$14 = _tmpl$166();
                          insert(_el$14, (() => {
                            var _c$2 = memo(() => typeof item.icon === "function");
                            return () => _c$2() ? item.icon() : item.icon;
                          })());
                          return _el$14;
                        }
                      }), _el$16);
                      insert(_el$13, createComponent(Show, {
                        get when() {
                          return memo(() => !!(item.icon && typeof item.icon !== "function"))() && selectedIndex() === idx();
                        },
                        get children() {
                          return _tmpl$1014();
                        }
                      }), _el$16);
                      insert(_el$16, () => item.label);
                      effect((_p$) => {
                        var _v$5 = selectedIndex() === idx(), _v$6 = cn("w-full flex items-center gap-2 rounded px-2 py-1.5 text-left text-xs font-medium transition-colors", primary() ? "text-ink-200 hover:bg-white/10 hover:text-white" : themeAuto() ? "text-ink-700 hover:bg-surface-overlay" : dark() ? "text-ink-300 hover:bg-surface-overlay" : "text-ink-700 hover:bg-surface-overlay", selectedIndex() === idx() && "bg-primary-500/20 text-primary-600");
                        _v$5 !== _p$.e && setAttribute(_el$13, "aria-checked", _p$.e = _v$5);
                        _v$6 !== _p$.t && className(_el$13, _p$.t = _v$6);
                        return _p$;
                      }, {
                        e: void 0,
                        t: void 0
                      });
                      return _el$13;
                    })()
                  }));
                  effect(() => setAttribute(_el$8, "aria-label", zh() ? "\u8BED\u8A00" : "Language"));
                  return _el$8;
                }
              })];
            }
          });
        }
      }), null);
      insert(_el$5, createComponent(Show, {
        get when() {
          return memo(() => local.alternateContent != null)() && local.alternateContent.trim() !== "";
        },
        get children() {
          var _el$9 = _tmpl$626();
          _el$9.$$click = () => setShowAlternate((p) => !p);
          insert(_el$9, (() => {
            var _c$ = memo(() => !!showAlternate());
            return () => _c$() ? zh() ? "\u5B8C\u6574\u4EE3\u7801" : "Full code" : zh() ? "\u4EC5\u7EC4\u4EF6" : "Component only";
          })());
          effect((_p$) => {
            var _v$ = showAlternate(), _v$2 = cn("flex items-center gap-1.5 shrink-0 px-2 py-1 text-xs font-medium rounded transition-colors outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500", primary() ? "text-white/80 hover:bg-white/15 hover:text-white" : themeAuto() ? "text-ink-600 hover:bg-surface-overlay hover:text-ink-900" : dark() ? "text-ink-400 hover:bg-surface-overlay hover:text-ink-100" : "text-ink-600 hover:bg-surface-overlay hover:text-ink-900");
            _v$ !== _p$.e && setAttribute(_el$9, "aria-pressed", _p$.e = _v$);
            _v$2 !== _p$.t && className(_el$9, _p$.t = _v$2);
            return _p$;
          }, {
            e: void 0,
            t: void 0
          });
          return _el$9;
        }
      }), null);
      insert(_el$5, createComponent(Copy, {
        get text() {
          return effectiveContent();
        },
        display: "icon-only",
        variant: "ghost",
        size: "sm",
        get ["class"]() {
          return copyButtonClass();
        }
      }), null);
      effect(() => className(_el$, cn("flex items-center justify-between gap-2 px-3 py-2 border-b", headerBorderClass())));
      return _el$;
    }
  }), createComponent(Show, {
    get when() {
      return !hasHeader();
    },
    get children() {
      var _el$0 = _tmpl$820();
      insert(_el$0, createComponent(Copy, {
        get text() {
          return effectiveContent();
        },
        display: "icon-only",
        variant: "ghost",
        size: "sm",
        get ["class"]() {
          return copyButtonClass();
        }
      }));
      effect(() => className(_el$0, cn("absolute right-4 z-10 opacity-80 transition-opacity hover:opacity-100 focus-within:opacity-100", collapsible() ? "top-14" : "top-1/2 -translate-y-1/2")));
      return _el$0;
    }
  }), (() => {
    var _el$1 = _tmpl$09();
    spread(_el$1, mergeProps({
      get ["class"]() {
        return cn(
          "w-full py-3 px-4 text-sm font-mono whitespace-pre overflow-x-auto overflow-y-auto outline-none",
          minHeight(),
          themeClass(),
          /* No text-* on pre: let Prism theme (or token CSS) color tokens; otherwise inherited color overrides .token */
          showLineNumbers() && "pl-0",
          local.preProps?.class
        );
      }
    }, () => local.preProps ? (() => {
      const {
        class: _,
        ...rest
      } = local.preProps;
      return rest;
    })() : {}), false, true);
    insert(_el$1, createComponent(Show, {
      get when() {
        return showLineNumbers();
      },
      get fallback() {
        return (() => {
          var _el$17 = _tmpl$1211();
          use(setCodeEl, _el$17);
          effect(() => className(_el$17, cn("block leading-5", `language-${currentLanguage()}`)));
          return _el$17;
        })();
      },
      get children() {
        var _el$10 = _tmpl$915(), _el$11 = _el$10.firstChild, _el$12 = _el$11.nextSibling;
        insert(_el$11, createComponent(For, {
          get each() {
            return lines();
          },
          children: (_, i) => {
            const num = i() + 1;
            const isHighlighted = () => highlightLines().includes(num);
            return (() => {
              var _el$18 = _tmpl$820();
              insert(_el$18, num);
              effect(() => className(_el$18, cn("leading-5", isHighlighted() && (primary() ? "bg-white/20 -mx-1 px-1 rounded" : "bg-surface-dim -mx-1 px-1 rounded"))));
              return _el$18;
            })();
          }
        }));
        use(setCodeEl, _el$12);
        effect((_p$) => {
          var _v$3 = cn("select-none py-3 pr-3 pl-0 w-8 shrink-0 text-right text-xs font-mono tabular-nums", lineNumClass()), _v$4 = cn("block flex-1 min-w-0 py-4 pr-4 pl-4 leading-6", `language-${currentLanguage()}`);
          _v$3 !== _p$.e && className(_el$11, _p$.e = _v$3);
          _v$4 !== _p$.t && className(_el$12, _p$.t = _v$4);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$10;
      }
    }));
    return _el$1;
  })()];
  return (() => {
    var _el$19 = _tmpl$1310();
    var _ref$ = local.ref;
    typeof _ref$ === "function" ? use(_ref$, _el$19) : local.ref = _el$19;
    spread(_el$19, mergeProps({
      get ["class"]() {
        return cn(embedded() ? "overflow-hidden relative" : "rounded-lg overflow-hidden relative mt-4", !hasHeader() && !collapsible() && "group", themeClass(), containerClass(), local.class);
      },
      get style() {
        return containerStyle();
      }
    }, others), false, true);
    insert(_el$19, createComponent(Show, {
      get when() {
        return collapsible();
      },
      fallback: codeContent,
      get children() {
        return createComponent(CollapsibleRoot, {
          get open() {
            return codeOpen();
          },
          onOpenChange: setCodeOpen,
          get children() {
            return [createComponent(CollapsibleTrigger, {
              get ["class"]() {
                return triggerClass();
              },
              get children() {
                return memo(() => !!codeOpen())() ? [memo(() => icons.chevronUp({
                  class: "h-4 w-4",
                  "aria-hidden": "true"
                })), memo(() => local.collapsibleLabelHide ?? (zh() ? "\u9690\u85CF\u4EE3\u7801" : "Hide code"))] : [memo(() => icons.chevronDown({
                  class: "h-4 w-4",
                  "aria-hidden": "true"
                })), memo(() => local.collapsibleLabelShow ?? (zh() ? "\u663E\u793A\u4EE3\u7801" : "Show code"))];
              }
            }), createComponent(CollapsibleContentStyled, {
              variant: "minimal",
              children: codeContent
            })];
          }
        });
      }
    }));
    return _el$19;
  })();
}
delegateEvents(["click"]);
var _tmpl$167 = /* @__PURE__ */ template(`<div class="px-4 py-3 text-sm text-ink-700">`);
var AccordionRoot = Accordion;
var AccordionItem = Accordion.Item;
var AccordionHeader = Accordion.Header;
var AccordionTrigger = Accordion.Trigger;
var AccordionContent = Accordion.Content;
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
  const [local, others] = splitProps(props, ["class", "children"]);
  onMount(ensureAccordionStyles);
  return createComponent(Accordion.Content, mergeProps({
    get ["class"]() {
      return cn("accordion-content overflow-hidden border-t border-surface-border bg-surface-base/50", local.class);
    }
  }, others, {
    get children() {
      var _el$ = _tmpl$167();
      insert(_el$, () => local.children);
      return _el$;
    }
  }));
}
function AccordionTriggerStyled(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
  const icons = useIcons();
  return createComponent(Accordion.Header, {
    as: "h3",
    "class": "flex",
    get children() {
      return createComponent(Accordion.Trigger, mergeProps({
        get ["class"]() {
          return cn("flex flex-1 items-center justify-between gap-2 px-4 py-3 text-left text-sm font-medium text-ink-800", "hover:bg-surface-dim", "data-[expanded]:bg-surface-dim", "data-[expanded]:[&>svg]:rotate-180", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500", "data-[disabled]:pointer-events-none data-[disabled]:opacity-50", local.class);
        }
      }, others, {
        get children() {
          return [memo(() => local.children), memo(() => icons.chevronDown({
            class: "h-4 w-4 shrink-0 transition-transform duration-200",
            "aria-hidden": "true"
          }))];
        }
      }));
    }
  });
}
function AccordionItemStyled(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return createComponent(Accordion.Item, mergeProps({
    get ["class"]() {
      return cn("w-full overflow-hidden border border-surface-border first:rounded-t-lg last:rounded-b-lg [&:not(:first-child)]:-mt-px", "data-[disabled]:opacity-60 data-[disabled]:cursor-not-allowed", local.class);
    }
  }, others, {
    get children() {
      return local.children;
    }
  }));
}
var TooltipRoot = Tooltip$1;
var TooltipTrigger = Tooltip$1.Trigger;
var TooltipPortal = Tooltip$1.Portal;
var TooltipContentPrimitive = Tooltip$1.Content;
var TooltipArrow = Tooltip$1.Arrow;
var _KbContent = Tooltip$1.Content;
function TooltipContent(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
  return createComponent(Tooltip$1.Portal, {
    get children() {
      return createComponent(_KbContent, mergeProps({
        get ["class"]() {
          return cn("z-[80] max-w-xs rounded-md border border-surface-border bg-surface-raised px-3 py-2 text-sm text-ink-900 shadow-md", local.class);
        }
      }, others, {
        get children() {
          return local.children;
        }
      }));
    }
  });
}
var Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent
});

export { AccordionContent, AccordionContentStyled, AccordionHeader, AccordionItem, AccordionItemStyled, AccordionRoot, AccordionTrigger, AccordionTriggerStyled, Alert, AlertDialog, Autocomplete, Avatar, BlockQuote, Button, ButtonGroup, Card, Checkbox, CodeBlock, CodeInput, Collapsible, CollapsibleContent, CollapsibleContentStyled, CollapsibleRoot, CollapsibleTrigger, CollapsibleTriggerStyled, ColorPicker, ComponentSizeProvider, Container, Copy, DarkModeToggle, DatePicker, DateRangePicker, Dialog, Divider, Drawer, FieldPicker, FileUpload, Form, FormActions, Grid, IconsProvider, Inline, Input, Link, LocaleProvider, MultiSelect, NumberField, PageHeading, Popover, PopoverAnchor, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverContentPrimitive, PopoverPortal, PopoverRoot, PopoverTrigger, Progress, PromptWithAction, RadioGroup, RelativeDateDefaultInput, ReorderableList, Section, Select, Skeleton, Slider, Switch, TablePanel, TextArea, TimePicker, Tooltip, TooltipArrow, TooltipContent, TooltipContentPrimitive, TooltipPortal, TooltipRoot, TooltipTrigger, VerticalWizard, Wizard, WizardStep, WizardStepper, avatarSizeClasses, createSortableDrag, defaultIcons, inputSizeConfig, mergeRefs, neutralColorClass, normalizeHex, resolveLocale, shapeClasses, useComponentSize, useCopyToClipboard, useIcons, useLocaleConfig };
