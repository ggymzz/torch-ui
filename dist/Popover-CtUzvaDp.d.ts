import { JSX } from 'solid-js';
import * as _kobalte_core_dropdown_menu from '@kobalte/core/dropdown-menu';
import * as _kobalte_core_tooltip from '@kobalte/core/tooltip';
import { TooltipContentProps as TooltipContentProps$1 } from '@kobalte/core/tooltip';
import * as _kobalte_core_popover from '@kobalte/core/popover';
import { PopoverContentProps as PopoverContentProps$1, PopoverRootProps as PopoverRootProps$1 } from '@kobalte/core/popover';

type DrawerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
type DrawerSide = 'start' | 'end' | 'top' | 'bottom';
/** Where to place the action buttons (Cancel/Save). Default bottom. */
type DrawerActionsPosition = 'bottom' | 'top-end' | 'top-start';
interface DrawerProps extends JSX.HTMLAttributes<HTMLElement> {
    open: boolean;
    onClose?: () => void;
    /** Called when open state changes */
    onOpenChange?: (open: boolean) => void;
    size?: DrawerSize;
    side?: DrawerSide;
    overlay?: boolean;
    closeOnOverlayClick?: boolean;
    overlayClass?: string;
    /** Dark semi-transparent overlay; default true. Set false to keep background visible (e.g. reference data). */
    overlayDim?: boolean;
    /** Backdrop blur on overlay; default true. Set false for no blur. */
    overlayBlur?: boolean;
    /** Show a circular close (X) button when onClose is provided */
    showCloseButton?: boolean;
    /** Cancel action. Also used as overlay/outside-click fallback before onClose. */
    onCancel?: () => void;
    /** Primary action (e.g. Save) */
    onSave?: () => void;
    cancelLabel?: string;
    saveLabel?: string;
    /** Where to place Cancel/Save actions. Default bottom. */
    actionsPosition?: DrawerActionsPosition;
    /** Disable page scroll (hide body scrollbar) while drawer is open. Default true. */
    lockScroll?: boolean;
    /** Inset from viewport edges (Tailwind spacing: 0, 2=0.5rem, 4=1rem, 6=1.5rem). No offset when size is full. Default 0. */
    offset?: '0' | '2' | '4' | '6';
    /** Called after the exit animation completes. Use this instead of onClose to defer clearing state so content doesn't change mid-animation. */
    onCloseComplete?: () => void;
    /** Duration in ms for exit animation (used for onCloseComplete timing). Default 200. */
    animationExitDuration?: number;
    /** Remove default p-6 padding from the content area. Use when children provide their own full-bleed layout. */
    noPadding?: boolean;
    /** Optional class applied to the inner scrollable content div (the direct parent of children). */
    contentClass?: string;
    /** Title text rendered in the fixed header bar. When provided with bottom actions, appears alongside the close button in a non-scrolling header. */
    title?: string;
}
type DrawerOffset = '0' | '2' | '4' | '6';
declare function Drawer(props: DrawerProps): JSX.Element;

type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
/** Overlay animation. Default fade. */
type DialogOverlayAnimation = 'fade' | 'none';
/** Panel animation. Default scale. */
type DialogPanelAnimation = 'fade' | 'scale' | 'slide-up' | 'none';
interface DialogProps extends JSX.HTMLAttributes<HTMLDivElement> {
    /** Whether the dialog is open */
    open: boolean;
    /** Called when open state changes */
    onOpenChange?: (open: boolean) => void;
    /** Called when dialog closes (alias for onOpenChange with false) */
    onClose?: () => void;
    /** Header content (e.g. title text or heading element). Rendered in a row alongside the close button. Referenced by aria-labelledby for screen readers.
     * If not provided, consider passing aria-label or aria-labelledby for accessibility. */
    header?: JSX.Element;
    /** Optional footer content (e.g. action buttons). Rendered below the body with a top border and padding. */
    footer?: JSX.Element;
    /** Dialog size */
    size?: DialogSize;
    /** Show overlay */
    overlay?: boolean;
    /** Close on overlay click */
    closeOnOverlayClick?: boolean;
    /** Custom overlay class */
    overlayClass?: string;
    /** Dark semi-transparent overlay; default true. Set false to keep background visible (e.g. reference data). */
    overlayDim?: boolean;
    /** Backdrop blur on overlay; default true. Set false for no blur. */
    overlayBlur?: boolean;
    /** Show a circular close (X) button in the top-right when onClose or onOpenChange is provided */
    showCloseButton?: boolean;
    /** Overlay animation. Default fade. */
    overlayAnimation?: DialogOverlayAnimation;
    /** Panel animation. Default scale. */
    panelAnimation?: DialogPanelAnimation;
    /** Duration in ms for enter animation. Default 200. */
    animationDuration?: number;
    /** Duration in ms for exit animation. Default 80% of animationDuration. */
    animationExitDuration?: number;
    /** Called after the exit animation completes. Use this instead of onClose to defer clearing state so content doesn't change mid-animation. */
    onCloseComplete?: () => void;
}
declare function Dialog(props: DialogProps): JSX.Element;

declare const TooltipRoot: typeof _kobalte_core_tooltip.Root & {
    Arrow: typeof _kobalte_core_dropdown_menu.Arrow;
    Content: typeof _kobalte_core_tooltip.Content;
    Portal: typeof _kobalte_core_tooltip.Portal;
    Trigger: typeof _kobalte_core_tooltip.Trigger;
};
declare const TooltipTrigger: typeof _kobalte_core_tooltip.Trigger;
declare const TooltipPortal: typeof _kobalte_core_tooltip.Portal;
declare const TooltipContentPrimitive: typeof _kobalte_core_tooltip.Content;
declare const TooltipArrow: typeof _kobalte_core_dropdown_menu.Arrow;
interface TooltipContentProps extends TooltipContentProps$1 {
    class?: string;
    children?: JSX.Element;
}
declare function TooltipContent(props: TooltipContentProps): JSX.Element;
type TooltipComponent = typeof TooltipRoot & {
    Trigger: typeof TooltipTrigger;
    Content: typeof TooltipContent;
};
declare const Tooltip: TooltipComponent;

declare const SIDES: readonly ["top", "bottom", "left", "right"];
declare const ALIGNMENTS: readonly ["start", "center", "end"];
type PopoverSide = (typeof SIDES)[number];
type PopoverAlign = (typeof ALIGNMENTS)[number];
type NonCenterAlign = Exclude<PopoverAlign, 'center'>;
type DerivedPlacement = PopoverSide | `${PopoverSide}-${NonCenterAlign}`;
type PopoverPlacement = DerivedPlacement;
interface PopoverRootProps extends Omit<PopoverRootProps$1, 'placement'> {
    /** Horizontal alignment relative to trigger. Use 'end' to right-align panel to trigger. Ignored if placement is set. */
    align?: PopoverAlign;
    /** Side of the trigger the panel appears on. Ignored if placement is set. Default 'bottom'. */
    side?: PopoverSide;
    /** Override placement. If not provided, derived from side + align. */
    placement?: PopoverPlacement;
}
/** Root with align/side support; placement is derived as side + align (e.g. bottom-end). */
declare function PopoverRoot(props: PopoverRootProps): JSX.Element;
declare const PopoverTrigger: typeof _kobalte_core_popover.Trigger;
declare const PopoverAnchor: typeof _kobalte_core_popover.Anchor;
declare const PopoverPortal: typeof _kobalte_core_popover.Portal;
declare const PopoverContentPrimitive: typeof _kobalte_core_popover.Content;
declare const PopoverArrow: typeof _kobalte_core_dropdown_menu.Arrow;
declare const PopoverCloseButton: typeof _kobalte_core_popover.CloseButton;
interface PopoverContentProps extends PopoverContentProps$1 {
    class?: string;
    children?: JSX.Element;
}
declare function PopoverContent(props: PopoverContentProps): JSX.Element;
type PopoverComponent = typeof PopoverRoot & {
    Trigger: typeof PopoverTrigger;
    Content: typeof PopoverContent;
    CloseButton: typeof PopoverCloseButton;
};
declare const Popover: PopoverComponent;

export { TooltipPortal as A, TooltipRoot as B, TooltipTrigger as C, Dialog as D, Popover as P, Tooltip as T, type DialogOverlayAnimation as a, type DialogPanelAnimation as b, type DialogProps as c, type DialogSize as d, Drawer as e, type DrawerActionsPosition as f, type DrawerOffset as g, type DrawerProps as h, type DrawerSide as i, type DrawerSize as j, type PopoverAlign as k, PopoverAnchor as l, PopoverArrow as m, PopoverCloseButton as n, PopoverContent as o, PopoverContentPrimitive as p, type PopoverContentProps as q, PopoverPortal as r, PopoverRoot as s, type PopoverRootProps as t, type PopoverSide as u, PopoverTrigger as v, TooltipArrow as w, TooltipContent as x, TooltipContentPrimitive as y, type TooltipContentProps as z };
