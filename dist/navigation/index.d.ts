import * as solid_js from 'solid-js';
import { JSX, Accessor, Component } from 'solid-js';
import { DropdownMenu as DropdownMenu$1, DropdownMenuTriggerProps as DropdownMenuTriggerProps$1, DropdownMenuContentProps as DropdownMenuContentProps$1, DropdownMenuItemProps as DropdownMenuItemProps$1, DropdownMenuSeparatorProps as DropdownMenuSeparatorProps$1 } from '@kobalte/core/dropdown-menu';
export { P as Pagination, a as PaginationProps } from '../Pagination-PJmlDCzJ.js';
import { TabsRootProps, TabsContentProps as TabsContentProps$1, TabsListProps as TabsListProps$1, TabsTriggerProps as TabsTriggerProps$1 } from '@kobalte/core/tabs';
export { Tabs as KobalteTabs } from '@kobalte/core/tabs';
import { NavigationMenuMenuProps } from '@kobalte/core/navigation-menu';

interface BreadcrumbItem {
    /** Label to show. */
    label: string;
    /** If set, rendered as a link (anchor). Use your router's Link in the app if needed. */
    href?: string;
}
interface BreadcrumbsProps {
    /** List of items. Last item is typically current page (no href). */
    items: BreadcrumbItem[];
    /** Optional separator between items. Default ChevronRight. */
    separator?: JSX.Element;
    /** Use light (white-based) text for dark backgrounds in light mode */
    inverted?: boolean;
    /** Root class. */
    class?: string;
}
declare function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;

interface DropdownMenuContentProps extends DropdownMenuContentProps$1 {
    class?: string;
    children: JSX.Element;
}
declare function DropdownMenuContent(props: DropdownMenuContentProps): JSX.Element;
interface DropdownMenuItemProps extends DropdownMenuItemProps$1 {
    class?: string;
    children: JSX.Element;
}
declare function DropdownMenuItem(props: DropdownMenuItemProps): JSX.Element;
interface DropdownMenuSeparatorProps extends DropdownMenuSeparatorProps$1 {
    class?: string;
}
declare function DropdownMenuSeparator(props: DropdownMenuSeparatorProps): JSX.Element;
interface DropdownMenuTriggerProps extends Omit<DropdownMenuTriggerProps$1, 'class' | 'children'> {
    class?: string;
    children: JSX.Element;
}
declare function DropdownMenuTrigger(props: DropdownMenuTriggerProps): JSX.Element;
type DropdownMenuComponent = typeof DropdownMenu$1 & {
    Trigger: typeof DropdownMenuTrigger;
    Content: typeof DropdownMenuContent;
    Item: typeof DropdownMenuItem;
    Separator: typeof DropdownMenuSeparator;
};
declare const DropdownMenu: DropdownMenuComponent;

interface TabItem {
    id: string;
    label: string;
}
interface TabsProps extends Omit<TabsRootProps, 'value' | 'defaultValue' | 'onChange'> {
    tabs: TabItem[];
    /** Current tab id (controlled), or omit and use defaultValue for uncontrolled. */
    value?: string | Accessor<string>;
    /** Initial tab id when uncontrolled. */
    defaultValue?: string;
    /** Called when selected tab changes. Optional for uncontrolled usage. */
    onValueChange?: (tabId: string) => void;
    /** Accessible label for the tab list. Default: "Tabs". */
    ariaLabel?: string;
    class?: string;
}
/** Generic tab bar. Content is rendered by the parent based on value. */
declare function Tabs(props: TabsProps): solid_js.JSX.Element;
interface TabsListProps extends TabsListProps$1 {
    class?: string;
}
declare function TabsList(props: TabsListProps): solid_js.JSX.Element;
interface TabsTriggerProps extends TabsTriggerProps$1 {
    class?: string;
}
declare function TabsTrigger(props: TabsTriggerProps): solid_js.JSX.Element;
interface TabsContentProps extends TabsContentProps$1 {
    class?: string;
}
declare function TabsContent(props: TabsContentProps): solid_js.JSX.Element;

type ViewScope = 'user' | 'tenant';
interface ViewSwitcherItem {
    id: string;
    label: string;
    count?: number;
    scope?: ViewScope;
    pinned?: boolean;
}
interface ViewSwitcherProps {
    views: ViewSwitcherItem[];
    activeId: string;
    onValueChange: (id: string) => void;
    onAdd?: () => void;
    addIcon?: JSX.Element;
    maxVisible?: number;
    moreLabel?: string;
    variant?: 'standalone' | 'embedded';
    /** Accessible label for the view switcher group. Default: "Views". */
    ariaLabel?: string;
    class?: string;
}
/** View switcher with overflow dropdown (e.g. table views). Single use case: switch between views with optional count and overflow. */
declare function ViewSwitcher(props: ViewSwitcherProps): JSX.Element;

interface SidebarItem {
    key: string;
    label: string;
    icon?: JSX.Element;
    active?: boolean;
    disabled?: boolean;
    badge?: string | number;
    onClick?: () => void;
    href?: string;
    items?: SidebarItem[];
}
interface SidebarGroup {
    /** Unique key for this group. Falls back to `title` if omitted — use this when two groups share the same title to avoid open/close state collision. */
    id?: string;
    title: string;
    items: SidebarItem[];
    /** When true, the group header becomes a toggle that collapses/expands its items. Default false (static section header). */
    collapsible?: boolean;
    /** Only relevant when collapsible=true. Groups with active items auto-open regardless. */
    defaultOpen?: boolean;
}
interface SidebarFooter {
    content: JSX.Element;
    /** Sticky to bottom. Default false. */
    sticky?: boolean;
}
interface SidebarProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Optional JSX rendered at the very top of the sidebar, above the title and nav. */
    header?: JSX.Element;
    /** Flat navigation items. Use `items` or `groups`, not both. */
    items?: SidebarItem[];
    /** Grouped navigation. Groups are static section headers by default; set collapsible on a group to make it togglable. */
    groups?: SidebarGroup[];
    /** Router-aware link component (e.g. `A` from @solidjs/router). Falls back to `<a>`. */
    linkComponent?: Component<any>;
    title?: string;
    showTitle?: boolean;
    collapsible?: boolean;
    collapsed?: boolean;
    onCollapseChange?: (collapsed: boolean) => void;
    showIcons?: boolean;
    showBadges?: boolean;
    footer?: JSX.Element | SidebarFooter;
    variant?: 'default' | 'minimal' | 'padded';
}
/** Sidebar navigation with flat items or grouped collapsible sections. */
declare function Sidebar(props: SidebarProps): JSX.Element;

interface MenuBarTriggerProps {
    class?: string;
    children?: JSX.Element;
    /** Hide the default chevron icon */
    noChevron?: boolean;
    /** Visual style variant */
    variant?: 'default' | 'underline' | 'ghost';
    /** Optional icon element */
    icon?: JSX.Element;
    /** Icon placement relative to label */
    iconPosition?: 'start' | 'end' | 'top' | 'bottom';
}
declare function MenuBarTrigger(props: MenuBarTriggerProps): JSX.Element;
interface MenuBarContentProps {
    class?: string;
    children?: JSX.Element;
}
declare function MenuBarContent(props: MenuBarContentProps): JSX.Element;
interface MenuBarItemProps {
    class?: string;
    children?: JSX.Element;
    /** Leading icon */
    icon?: JSX.Element;
    /** Short description text below the label */
    description?: string;
    /** Icon placement relative to text */
    iconPosition?: 'start' | 'end' | 'top' | 'bottom';
}
declare function MenuBarItem(props: MenuBarItemProps): JSX.Element;
declare function MenuBarLabel(props: {
    class?: string;
    children: JSX.Element;
}): JSX.Element;
declare function MenuBarDivider(props: {
    class?: string;
}): JSX.Element;
interface MenuBarLinkProps {
    href: string;
    class?: string;
    children?: JSX.Element;
    icon?: JSX.Element;
    description?: string;
    active?: boolean;
    /** Visual style variant */
    variant?: 'default' | 'underline' | 'ghost';
    /** Icon placement relative to text */
    iconPosition?: 'start' | 'end' | 'top' | 'bottom';
    /**
     * Disabled state. Sets aria-disabled + tabIndex=-1 and prevents navigation.
     * Note: plain anchors don't participate in Menubar roving focus — if full
     * keyboard nav is needed, render via KobalteMenuBar.Item with asChild.
     */
    disabled?: boolean;
}
declare function MenuBarLink(props: MenuBarLinkProps): JSX.Element;
interface MenuBarProps {
    class?: string;
    children?: JSX.Element;
    /** Horizontal alignment of the nav items */
    justify?: 'start' | 'center' | 'end';
}
declare function MenuBarRoot(props: MenuBarProps): JSX.Element;
declare function MenuBarMenu(props: {
    children?: JSX.Element;
}): JSX.Element;
declare function MenuBarNavLink(props: MenuBarLinkProps): JSX.Element;
type MenuBarComponent = typeof MenuBarRoot & {
    Menu: typeof MenuBarMenu;
    Trigger: typeof MenuBarTrigger;
    Content: typeof MenuBarContent;
    Item: typeof MenuBarItem;
    NavLink: typeof MenuBarNavLink;
    Label: typeof MenuBarLabel;
    Divider: typeof MenuBarDivider;
    Link: typeof MenuBarLink;
};
declare const MenuBar: MenuBarComponent;

/** ─── Variant context ───────────────────────────────────────────────────────── */
type MenuVariant = 'default' | 'underline' | 'ghost';
/** ─── MegaMenuBar ───────────────────────────────────────────────────────────── */
interface MegaMenuBarProps {
    class?: string;
    children?: JSX.Element;
    /** Visual variant applied to all triggers and bar links. Default: 'default' */
    variant?: MenuVariant;
    /** Stretch the dropdown to full viewport width */
    fullWidth?: boolean;
    /** Reference to the full nav container element (e.g. the max-w-7xl div) for fullWidth anchor sizing */
    containerRef?: HTMLElement;
    /** Horizontal alignment of nav items */
    justify?: 'start' | 'center' | 'end';
    /** Use light (white-based) trigger text for dark backgrounds in light mode */
    inverted?: boolean;
    /** Standard Kobalte NavigationMenu props */
    id?: string;
    disabled?: boolean;
    orientation?: 'horizontal' | 'vertical';
}
declare function MegaMenuBar(props: MegaMenuBarProps): JSX.Element;
/** ─── MegaMenuMenu ──────────────────────────────────────────────────────────── */
declare function MegaMenuMenu(props: NavigationMenuMenuProps & {
    class?: string;
}): JSX.Element;
/** ─── MegaMenuTrigger ───────────────────────────────────────────────────────── */
interface MegaMenuTriggerProps {
    class?: string;
    children?: JSX.Element;
    /** Hide the chevron indicator. Also suppressed automatically when iconPosition is 'top' or 'bottom'. */
    noChevron?: boolean;
    /** Overrides the bar-level variant for this trigger only */
    variant?: MenuVariant;
    /** Optional icon element */
    icon?: JSX.Element;
    /** Icon placement relative to label. Default: 'start' */
    iconPosition?: 'start' | 'end' | 'top' | 'bottom';
}
declare function MegaMenuTrigger(props: MegaMenuTriggerProps): JSX.Element;
/** ─── MegaMenuContent ───────────────────────────────────────────────────────── */
interface MegaMenuContentProps {
    class?: string;
    children?: JSX.Element;
}
declare function MegaMenuContent(props: MegaMenuContentProps): JSX.Element;
/** ─── MegaMenuPanel ─────────────────────────────────────────────────────────── */
interface MegaMenuPanelProps {
    /** Number of columns. Default: 3 */
    columns?: 2 | 3 | 4;
    fullWidth?: boolean;
    /** Max content width when fullWidth is true. Default: 1280px */
    maxWidth?: string;
    class?: string;
    children: JSX.Element;
}
declare function MegaMenuPanel(props: MegaMenuPanelProps): JSX.Element;
/** ─── MegaMenuColumn ────────────────────────────────────────────────────────── */
declare function MegaMenuColumn(props: {
    class?: string;
    children: JSX.Element;
}): JSX.Element;
/** ─── MegaMenuSection ───────────────────────────────────────────────────────── */
declare function MegaMenuSection(props: {
    label: string;
    class?: string;
    children: JSX.Element;
}): JSX.Element;
/** ─── MegaMenuItem ──────────────────────────────────────────────────────────── */
interface MegaMenuItemProps {
    href?: string;
    icon?: JSX.Element;
    label: JSX.Element;
    description?: string;
    badge?: string;
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    class?: string;
}
declare function MegaMenuItem(props: MegaMenuItemProps): JSX.Element;
/** ─── MegaMenuFeatured ──────────────────────────────────────────────────────── */
interface MegaMenuFeaturedProps {
    href?: string;
    title: string;
    description?: string;
    /** Background color class. Default: primary gradient */
    backgroundClass?: string;
    image?: JSX.Element;
    /** CTA label. Default: 'Learn more' */
    cta?: string;
    class?: string;
}
declare function MegaMenuFeatured(props: MegaMenuFeaturedProps): JSX.Element;
/** ─── MegaMenuDivider ───────────────────────────────────────────────────────── */
declare function MegaMenuDivider(props: {
    class?: string;
}): JSX.Element;
/** ─── MegaMenuFooter ────────────────────────────────────────────────────────── */
declare function MegaMenuFooter(props: {
    class?: string;
    children: JSX.Element;
    fullWidth?: boolean;
    maxWidth?: string;
}): JSX.Element;
/** ─── MegaMenuFooterLink ────────────────────────────────────────────────────── */
declare function MegaMenuFooterLink(props: {
    href?: string;
    onClick?: () => void;
    children: JSX.Element;
    class?: string;
}): JSX.Element;
/** ─── MegaMenuBarLink ───────────────────────────────────────────────────────── */
interface MegaMenuBarLinkProps {
    href: string;
    class?: string;
    children?: JSX.Element;
    /** Overrides the bar-level variant for this link only */
    variant?: MenuVariant;
}
declare function MegaMenuBarLink(props: MegaMenuBarLinkProps): JSX.Element;
type MegaMenuComponent = typeof MegaMenuBar & {
    Menu: typeof MegaMenuMenu;
    Trigger: typeof MegaMenuTrigger;
    Content: typeof MegaMenuContent;
    Panel: typeof MegaMenuPanel;
    Column: typeof MegaMenuColumn;
    Section: typeof MegaMenuSection;
    Item: typeof MegaMenuItem;
    Featured: typeof MegaMenuFeatured;
    Divider: typeof MegaMenuDivider;
    Footer: typeof MegaMenuFooter;
    FooterLink: typeof MegaMenuFooterLink;
    BarLink: typeof MegaMenuBarLink;
};
declare const MegaMenu: MegaMenuComponent;

export { type BreadcrumbItem, Breadcrumbs, type BreadcrumbsProps, DropdownMenu, DropdownMenuContent, type DropdownMenuContentProps, DropdownMenuItem, type DropdownMenuItemProps, DropdownMenuSeparator, type DropdownMenuSeparatorProps, DropdownMenuTrigger, type DropdownMenuTriggerProps, MegaMenu, MegaMenuBar, MegaMenuBarLink, type MegaMenuBarProps, MegaMenuColumn, MegaMenuContent, type MegaMenuContentProps, MegaMenuDivider, MegaMenuFeatured, type MegaMenuFeaturedProps, MegaMenuFooter, MegaMenuFooterLink, MegaMenuItem, type MegaMenuItemProps, MegaMenuMenu, MegaMenuPanel, type MegaMenuPanelProps, MegaMenuSection, MegaMenuTrigger, type MegaMenuTriggerProps, MenuBar, MenuBarContent, type MenuBarContentProps, MenuBarDivider, MenuBarItem, type MenuBarItemProps, MenuBarLabel, MenuBarLink, type MenuBarLinkProps, MenuBarMenu, MenuBarNavLink, type MenuBarProps, MenuBarTrigger, type MenuBarTriggerProps, Sidebar, type SidebarFooter, type SidebarGroup, type SidebarItem, type SidebarProps, type TabItem, Tabs, TabsContent, type TabsContentProps, TabsList, type TabsListProps, type TabsProps, TabsTrigger, type TabsTriggerProps, type ViewScope, ViewSwitcher, type ViewSwitcherItem, type ViewSwitcherProps };
