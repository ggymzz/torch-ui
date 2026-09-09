export { A as AlertDialog, a as AlertDialogProps } from '../AlertDialog-BhMAi-uk.js';
export { D as Dialog, a as DialogOverlayAnimation, b as DialogPanelAnimation, c as DialogProps, d as DialogSize, e as Drawer, f as DrawerActionsPosition, g as DrawerOffset, h as DrawerProps, i as DrawerSide, j as DrawerSize, P as Popover, k as PopoverAlign, l as PopoverAnchor, m as PopoverArrow, n as PopoverCloseButton, o as PopoverContent, p as PopoverContentPrimitive, q as PopoverContentProps, r as PopoverPortal, s as PopoverRoot, t as PopoverRootProps, u as PopoverSide, v as PopoverTrigger, T as Tooltip, w as TooltipArrow, x as TooltipContent, y as TooltipContentPrimitive, z as TooltipContentProps, A as TooltipPortal, B as TooltipRoot, C as TooltipTrigger } from '../Popover-CtUzvaDp.js';
import * as _kobalte_core_menu from '@kobalte/core/menu';
import * as _kobalte_core_dropdown_menu from '@kobalte/core/dropdown-menu';
import * as _kobalte_core_context_menu from '@kobalte/core/context-menu';
import { ContextMenuContentProps as ContextMenuContentProps$1, ContextMenuItemProps as ContextMenuItemProps$1, ContextMenuSeparatorProps as ContextMenuSeparatorProps$1 } from '@kobalte/core/context-menu';
import { JSX } from 'solid-js';
import * as _kobalte_core_hover_card from '@kobalte/core/hover-card';
import { HoverCardRootProps as HoverCardRootProps$1, HoverCardContentProps as HoverCardContentProps$1 } from '@kobalte/core/hover-card';
import '@kobalte/core/alert-dialog';
import '@kobalte/core/tooltip';
import '@kobalte/core/popover';

/** Pass-through to Kobalte's ContextMenu.Root. See Kobalte docs for available props (e.g. onOpenChange). */
declare const ContextMenuRoot: typeof _kobalte_core_context_menu.Root & {
    Arrow: typeof _kobalte_core_dropdown_menu.Arrow;
    CheckboxItem: typeof _kobalte_core_menu.MenuCheckboxItem;
    Content: typeof _kobalte_core_context_menu.Content;
    Group: typeof _kobalte_core_menu.MenuGroup;
    GroupLabel: typeof _kobalte_core_menu.MenuGroupLabel;
    Icon: typeof _kobalte_core_menu.MenuIcon;
    Item: typeof _kobalte_core_menu.MenuItem;
    ItemDescription: typeof _kobalte_core_menu.MenuItemDescription;
    ItemIndicator: typeof _kobalte_core_menu.MenuItemIndicator;
    ItemLabel: typeof _kobalte_core_menu.MenuItemLabel;
    Portal: typeof _kobalte_core_menu.MenuPortal;
    RadioGroup: typeof _kobalte_core_menu.MenuRadioGroup;
    RadioItem: typeof _kobalte_core_menu.MenuRadioItem;
    Separator: typeof _kobalte_core_dropdown_menu.Separator;
    Sub: typeof _kobalte_core_menu.MenuSub;
    SubContent: typeof _kobalte_core_menu.MenuSubContent;
    SubTrigger: typeof _kobalte_core_menu.MenuSubTrigger;
    Trigger: typeof _kobalte_core_context_menu.Trigger;
};
/** Pass-through to Kobalte's ContextMenu.Trigger. Renders as the element that responds to right-click. */
declare const ContextMenuTrigger: typeof _kobalte_core_context_menu.Trigger;
interface ContextMenuContentProps extends ContextMenuContentProps$1 {
    class?: string;
    children?: JSX.Element;
}
declare function ContextMenuContent(props: ContextMenuContentProps): JSX.Element;
interface ContextMenuItemProps extends ContextMenuItemProps$1 {
    class?: string;
    children: JSX.Element;
}
declare function ContextMenuItem(props: ContextMenuItemProps): JSX.Element;
interface ContextMenuSeparatorProps extends ContextMenuSeparatorProps$1 {
    class?: string;
}
declare function ContextMenuSeparator(props: ContextMenuSeparatorProps): JSX.Element;
type ContextMenuComponent = typeof ContextMenuRoot & {
    Trigger: typeof ContextMenuTrigger;
    Content: typeof ContextMenuContent;
    Item: typeof ContextMenuItem;
    Separator: typeof ContextMenuSeparator;
};
declare const ContextMenu: ContextMenuComponent;

declare const SIDES: readonly ["top", "bottom", "left", "right"];
declare const ALIGNMENTS: readonly ["start", "center", "end"];
type HoverCardSide = (typeof SIDES)[number];
type HoverCardAlign = (typeof ALIGNMENTS)[number];
type NonCenterAlign = Exclude<HoverCardAlign, 'center'>;
type DerivedPlacement = HoverCardSide | `${HoverCardSide}-${NonCenterAlign}`;
type HoverCardPlacement = DerivedPlacement;
interface HoverCardRootProps extends Omit<HoverCardRootProps$1, 'placement'> {
    /** Side of the trigger the card appears on. Default 'bottom'. */
    side?: HoverCardSide;
    /** Alignment relative to the trigger. Default 'center'. */
    align?: HoverCardAlign;
    /** Override placement directly. If not provided, derived from side + align. */
    placement?: HoverCardPlacement;
}
declare function HoverCardRoot(props: HoverCardRootProps): JSX.Element;
declare const HoverCardTrigger: typeof _kobalte_core_hover_card.Trigger;
declare const HoverCardPortal: typeof _kobalte_core_hover_card.Portal;
declare const HoverCardArrow: typeof _kobalte_core_dropdown_menu.Arrow;
interface HoverCardContentProps extends HoverCardContentProps$1 {
    class?: string;
    children?: JSX.Element;
    /** Show an arrow pointing to the trigger. Default true. */
    showArrow?: boolean;
}
declare function HoverCardContent(props: HoverCardContentProps): JSX.Element;
/** Convenience sub-components for structured card content */
declare function HoverCardHeader(props: {
    class?: string;
    children: JSX.Element;
}): JSX.Element;
declare function HoverCardBody(props: {
    class?: string;
    children: JSX.Element;
}): JSX.Element;
declare function HoverCardFooter(props: {
    class?: string;
    children: JSX.Element;
}): JSX.Element;
declare function HoverCardSeparator(props: {
    class?: string;
}): JSX.Element;
type HoverCardComponent = typeof HoverCardRoot & {
    Trigger: typeof HoverCardTrigger;
    Content: typeof HoverCardContent;
    Header: typeof HoverCardHeader;
    Body: typeof HoverCardBody;
    Footer: typeof HoverCardFooter;
    Separator: typeof HoverCardSeparator;
};
declare const HoverCard: HoverCardComponent;

interface SearchPaletteCategory {
    key: string;
    label: string;
    icon?: JSX.Element | (() => JSX.Element);
}
interface SearchPaletteItem {
    key: string;
    label: string;
    description?: string;
    icon?: JSX.Element | (() => JSX.Element);
    category?: string;
    trailing?: JSX.Element | (() => JSX.Element);
}
interface SearchPaletteGroup {
    title: string;
    items: SearchPaletteItem[];
    /** Optional "See all" link at the bottom of the group. */
    seeAll?: {
        label: string;
        onClick: () => void;
    };
}
interface SearchPaletteProps {
    /** Whether the palette is open. */
    open: boolean;
    /** Called when the open state changes. */
    onOpenChange: (open: boolean) => void;
    /** Current search query (controlled). */
    query: string;
    /** Called when the query changes. */
    onQueryChange: (query: string) => void;
    /** Optional category chips for filtering. */
    categories?: SearchPaletteCategory[];
    /** Currently selected category keys. */
    selectedCategories?: string[];
    /** Called when category selection changes. */
    onCategoryChange?: (categories: string[]) => void;
    /** Grouped result items to display. */
    groups: SearchPaletteGroup[];
    /** Called when the user selects an item. */
    onSelect: (item: SearchPaletteItem) => void;
    /** Input placeholder text. Default: "Search…" */
    placeholder?: string;
    /** Text shown when no results match. Default: "No results found." */
    emptyMessage?: string;
    /** Category chips label. Default: "I'm Searching…" */
    categoriesLabel?: string;
    /** Show keyboard hint bar at the bottom. Default: true. */
    showKeyboardHints?: boolean;
    class?: string;
}
declare function SearchPalette(props: SearchPaletteProps): JSX.Element;

export { ContextMenu, ContextMenuContent, type ContextMenuContentProps, ContextMenuItem, type ContextMenuItemProps, ContextMenuRoot, ContextMenuSeparator, type ContextMenuSeparatorProps, ContextMenuTrigger, HoverCard, type HoverCardAlign, HoverCardArrow, HoverCardBody, HoverCardContent, type HoverCardContentProps, HoverCardFooter, HoverCardHeader, type HoverCardPlacement, HoverCardPortal, HoverCardRoot, type HoverCardRootProps, HoverCardSeparator, type HoverCardSide, HoverCardTrigger, SearchPalette, type SearchPaletteCategory, type SearchPaletteGroup, type SearchPaletteItem, type SearchPaletteProps };
