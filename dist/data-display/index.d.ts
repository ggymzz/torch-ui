import { JSX } from 'solid-js';
export { T as TablePanel, a as TablePanelProps } from '../TablePanel-C7i99nvl.js';
export { BubblePoint, Chart, ChartData, ChartDataset, ChartProps, ChartType, ScatterPoint, Sparkline, SparklineProps } from '../charts/index.js';
import { a as InputProps } from '../Input-Dzvde_F6.js';
import { a as PaginationProps } from '../Pagination-PJmlDCzJ.js';
import 'chart.js';
import '../component-size-BIaRRIRi.js';

type AvatarShape = 'circle' | 'rounded' | 'square';
type AvatarColor = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
type SizeKey = 'sm' | 'md' | 'lg';

type AvatarRing = true | {
    color?: string; /** When false, ring sits on the avatar edge (no gap). Use for stacks. Default true. */
    offset?: boolean;
};
type AvatarBadgePlacement = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
interface AvatarProps extends Omit<JSX.HTMLAttributes<HTMLSpanElement>, 'children'> {
    /** Display name: used for title and for initials. Initials = first letter of first name + first letter of last name (last word = last name, rest = first name). Single word → one letter. */
    name: string;
    /** Optional image URL; when set, shows image instead of initials. */
    imageUrl?: string | null;
    /** Size: sm = 32px, md = 40px, lg = 48px. */
    size?: SizeKey;
    /** Shape: circle (default), rounded (rounded-lg), or square. */
    shape?: AvatarShape;
    /** Ring outline around the avatar. true = default ring with offset; or { color?, offset?: boolean } for custom or no-offset (e.g. ring={{ offset: false }} for stack cutout). */
    ring?: AvatarRing;
    /** Background and text color when showing initials. Ignored when imageUrl is set. */
    color?: AvatarColor;
    /** Optional badge (e.g. Badge) overlaid on a corner. Use badgePlacement to choose which corner (default bottom-right). */
    badge?: JSX.Element;
    /** When true, badge receives pointer events (e.g. for clickable status menus). Default false (decorative). */
    badgeInteractive?: boolean;
    /** Pass the same size as your Badge so placement is correct. Default: same as avatar size. */
    badgeSize?: SizeKey;
    /** Dot = status dot only; content = icon or count badge (larger dimensions). Content uses a larger base offset for proper placement. Default: dot. */
    badgeKind?: 'dot' | 'content';
    /** Where the badge sits on the avatar. Default: bottom-right. */
    badgePlacement?: AvatarBadgePlacement;
    /** When true, avatar is purely decorative: aria-hidden, no role/label. Use when visible name text is adjacent (e.g. inside Persona). */
    decorative?: boolean;
}
/**
 * Avatar with initials or image, optional ring, badge overlay, and multiple shapes/colors.
 * Use as a standalone avatar or compose with Badge for status indicators.
 *
 * <Avatar name="Jane" badge={<Badge variant="success" />} />
 */
declare function Avatar(props: AvatarProps): JSX.Element;

type ColorSwatchVariant = 'rounded' | 'circle' | 'square';
interface ColorSwatchProps {
    /** Color as hex string (e.g. #3b82f6). */
    value: string;
    /** Shape: rounded (default), circle, or square. */
    variant?: ColorSwatchVariant;
    /** Optional accessible name for the color. */
    colorName?: string;
    class?: string;
    style?: JSX.CSSProperties;
    'aria-label'?: string;
}
/** Renders a color swatch (Kobalte ColorSwatch). Value is a hex string. */
declare function ColorSwatch(props: ColorSwatchProps): JSX.Element;

interface PersonaProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Display name (primary text); also used for avatar initials. */
    name: string;
    /** Optional image URL for the avatar. */
    imageUrl?: string | null;
    /** Optional secondary line (e.g. role, email). */
    secondary?: string;
    /** Avatar and text size. Default: md. */
    size?: SizeKey;
    /** Avatar shape passed through to Avatar. Default: circle. */
    shape?: AvatarShape;
    /** Avatar color passed through to Avatar. Default: neutral. */
    color?: AvatarColor;
    /** Optional content after the text block (e.g. actions). */
    children?: JSX.Element;
}
/**
 * A row combining Avatar with primary name and optional secondary text.
 * Use in lists, dropdowns, or cards for a compact user/profile display.
 */
declare function Persona(props: PersonaProps): JSX.Element;

type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
type BadgeSize = 'sm' | 'md' | 'lg';
interface BadgeProps extends Omit<JSX.HTMLAttributes<HTMLSpanElement>, 'children'> {
    /** Color variant. Default: neutral. */
    variant?: BadgeVariant;
    /** Badge size; scales dot and pill. Default: md. */
    size?: BadgeSize;
    /** Optional icon shown inside the badge. Use for icon-only badge. */
    icon?: JSX.Element;
    /** Optional count or label shown inside the badge (e.g. "3"). When omitted and no icon, renders as a dot only. */
    children?: JSX.Element;
    /** When true (default), badge is hidden from assistive tech. Set false for meaningful status/count badges. */
    decorative?: boolean;
}
/**
 * Small badge for the corner of an avatar (e.g. online status dot or count).
 * Use as the badge prop of Avatar: <Avatar name="Jane" badge={<Badge variant="success" />} />
 */
declare function Badge(props: BadgeProps): JSX.Element;

interface AvatarGroupItem {
    name: string;
    imageUrl?: string | null;
}
type AvatarStacking = 'first-on-top' | 'last-on-top';
interface AvatarGroupProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** List of avatars to show. When max is set, only this many are shown plus a "+N" overflow. */
    avatars: AvatarGroupItem[];
    /** Max avatars to show before showing "+N". Omit to show all. */
    max?: number;
    /** Size passed to each Avatar. */
    size?: SizeKey;
    /** Shape passed to each Avatar. */
    shape?: AvatarShape;
    /** Overlap amount: sm = tighter stack, md = default, lg = more overlap. */
    overlap?: 'sm' | 'md' | 'lg';
    /** Z-index stacking order for overlapping avatars. Default: last-on-top (DOM-natural). */
    stacking?: AvatarStacking;
}
/**
 * Group of avatars stacked horizontally with overlap. Use max to show a "+N" overflow.
 */
declare function AvatarGroup(props: AvatarGroupProps): JSX.Element;

interface CarouselSlide {
    id: string;
    content: JSX.Element;
}
interface CarouselProps extends JSX.HTMLAttributes<HTMLDivElement> {
    slides: CarouselSlide[];
    /** Auto-advance interval in ms (cycle time); 0 to disable */
    autoPlayInterval?: number;
    /** Show dot indicators below the carousel. Default true; set false to hide. */
    showDots?: boolean;
    /** Show prev/next arrow buttons. Default false; set showArrows or showArrows={true} to enable. */
    showArrows?: boolean;
    /** Dot indicators alignment: start, center, or end. Default start. */
    dotsPosition?: 'start' | 'center' | 'end';
    /** Dot color scheme: 'light' (white dots, for dark/colored backgrounds) or 'dark' (ink dots, for light backgrounds). Default 'light'. */
    dotsVariant?: 'light' | 'dark';
    /** Optional Tailwind class(es) applied as a background strip behind the dots row (e.g. 'bg-primary-500'). Forces white dots when set. */
    dotsBgClass?: string;
    /** When true, renders dots absolutely positioned over the bottom of the slide (instead of below it). Slide content should add bottom padding to avoid overlap. */
    dotsOverlay?: boolean;
    /** Custom color for the progress bar (e.g. '#3b82f6', 'var(--color-primary-500)', or 'bg-primary-500'). When set, overrides the default progress bar color. */
    progressBarColor?: string;
    /** Accessible label for the carousel region. */
    'aria-label'?: string;
}
declare function Carousel(props: CarouselProps): JSX.Element;

interface EmptyStateProps extends JSX.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: JSX.Element;
    icon?: JSX.Element;
    actions?: JSX.Element;
    /** When true, sets role="status" + aria-live="polite" so screen readers announce the empty state. Default: false. */
    announce?: boolean;
}
declare function EmptyState(props: EmptyStateProps): JSX.Element;

type TagVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
type TagStyle = 'default' | 'solid';
type TagSize = 'sm' | 'md' | 'lg' | 'xl';
interface TagProps extends Omit<JSX.HTMLAttributes<HTMLSpanElement>, 'color'> {
    /** Semantic color variant. Ignored when color is set. Default: neutral. */
    variant?: TagVariant;
    /** Tag size. Default: md. */
    size?: TagSize;
    /** Visual style: default (light background) or solid (surface background). Default: default. */
    visualStyle?: TagStyle;
    /** CSS color for a status indicator dot before children (e.g. "#22c55e"). */
    statusColor?: string;
    /** Accessible label for the status dot (e.g. "Active"). Rendered as sr-only text. When omitted, the dot is purely decorative. */
    statusLabel?: string;
    /** Arbitrary CSS color for a fully custom tag. Sets bg (10% opacity), border (25% opacity), and text color. Overrides variant. */
    color?: string;
    /** Icon rendered before the label. */
    iconStart?: JSX.Element;
    /** Icon rendered after the label. */
    iconEnd?: JSX.Element;
}
declare function Tag(rawProps: TagProps): JSX.Element;

type KbdVariant = 'default' | 'flat';
type KbdSize = 'sm' | 'md' | 'lg';
interface KbdProps extends JSX.HTMLAttributes<HTMLElement> {
    /** Visual style. default = raised key with bottom border; flat = simple outlined. Default: default. */
    variant?: KbdVariant;
    /** Size. Default: md. */
    size?: KbdSize;
    children?: JSX.Element;
}
interface KbdShortcutProps {
    /** Ordered list of key labels to display (e.g. [KEY.Cmd, 'K']). */
    keys: string[];
    /** Passed to each Kbd. Default: default. */
    variant?: KbdVariant;
    /** Passed to each Kbd. Default: md. */
    size?: KbdSize;
    /** Separator rendered between keys. Default: '+'. */
    separator?: string;
    class?: string;
}
/** Common special key symbols for use with Kbd and KbdShortcut. */
declare const KEY: {
    readonly Cmd: "⌘";
    readonly Shift: "⇧";
    readonly Option: "⌥";
    readonly Alt: "⌥";
    readonly Ctrl: "⌃";
    readonly Enter: "↵";
    readonly Backspace: "⌫";
    readonly Delete: "⌦";
    readonly Escape: "Esc";
    readonly Tab: "⇥";
    readonly Up: "↑";
    readonly Down: "↓";
    readonly Left: "←";
    readonly Right: "→";
};
/**
 * Displays a single keyboard key.
 * Use KbdShortcut for multi-key combinations.
 */
declare function Kbd(props: KbdProps): JSX.Element;
/**
 * Displays a keyboard shortcut as a sequence of Kbd keys separated by a delimiter.
 *
 * @example
 * <KbdShortcut keys={[KEY.Cmd, 'K']} />
 * <KbdShortcut keys={['Ctrl', 'Shift', 'P']} separator="+" />
 */
declare function KbdShortcut(props: KbdShortcutProps): JSX.Element;

interface StatCardProps extends JSX.HTMLAttributes<HTMLDivElement> {
    label: string;
    /** Optional subtitle or category below the label (e.g. "Travel and tourism"). */
    subtitle?: string;
    /** Optional icon (e.g. app logo) shown at top left. */
    icon?: JSX.Element;
    /** Accessible label for the icon when it conveys meaning. When set, icon wrapper gets role="img" + aria-label. When omitted, the wrapper is transparent — the icon child controls its own accessibility. */
    iconLabel?: string;
    /** Optional content at top right (e.g. Tag or "Connect" button). */
    topRight?: JSX.Element;
    value?: string | number | null;
    helperText?: string;
    trendLabel?: string;
    /** Optional secondary line below trendLabel (e.g. "last week"). Rendered smaller and muted. */
    trendSubLabel?: string;
    /** Default: 'positive' (emerald). */
    trendVariant?: 'positive' | 'neutral' | 'negative';
    trendIcon?: JSX.Element;
    emptyText?: string;
    /** Optional content rendered below the trend block. Use for breakdown rows, sub-metrics, or any body content. Works with both chartPosition values. */
    body?: JSX.Element;
    /** Optional chart or sparkline. Use chartPosition to place under the trend or to the right. */
    chart?: JSX.Element;
    /** Where to render the chart: under the trend (default) or in a column to the right of the value/trend. */
    chartPosition?: 'under' | 'right';
    /** When set, the chart wrapper gets role="img" + aria-label instead of aria-hidden. The chart child should be decorative (aria-hidden) to avoid duplicate announcements. */
    chartA11yLabel?: string;
    /** Tailwind height class for the chart wrapper. Default 'h-10' (under) or 'h-20' (right). */
    chartHeight?: string;
    /** Tailwind width classes for the right-position chart wrapper. Default 'w-36 sm:w-44'. Only applies when chartPosition is 'right'. */
    chartWidth?: string;
}
declare function StatCard(props: StatCardProps): JSX.Element;

type TimelineItemStatus = 'completed' | 'active' | 'pending' | 'error';
type TimelineVariant = 'default' | 'compact' | 'outlined';
type TimelineConnector = 'solid' | 'dashed' | 'dotted';
interface TimelineItem {
    id?: string;
    /** Main heading for the event */
    title: JSX.Element;
    /** Secondary description text */
    description?: JSX.Element;
    /** Timestamp or label shown beside the title */
    time?: JSX.Element;
    /** Custom icon/content inside the dot. If omitted, a default dot or status icon renders. */
    icon?: JSX.Element;
    /** Controls the dot color and default icon. Default: 'pending'. */
    status?: TimelineItemStatus;
    /** Extra content slot rendered below description */
    content?: JSX.Element;
    /** Override the dot color with any Tailwind bg class e.g. 'bg-purple-500' */
    color?: string;
}
interface TimelineProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Timeline entries */
    items: TimelineItem[];
    /** Visual style. Default: 'default'. */
    variant?: TimelineVariant;
    /** Connector line style. Default: 'solid'. */
    connector?: TimelineConnector;
    /** Show connector line between items. Default: true. */
    showConnector?: boolean;
    /** Place timestamp to the left of the connector. Default: false. */
    timeLeft?: boolean;
}
declare function Timeline(props: TimelineProps): JSX.Element;

interface TreeNode {
    /** Unique identifier */
    id: string;
    /** Display label */
    label: JSX.Element;
    /** Optional icon shown before the label */
    icon?: JSX.Element;
    /** Child nodes */
    children?: TreeNode[];
    /** Prevents selection and interaction */
    disabled?: boolean;
}
interface TreeViewProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'children' | 'onSelect'> {
    /** Tree data */
    nodes: TreeNode[];
    /** Controlled selected node id */
    selected?: string;
    /** Callback when a node is selected */
    onSelect?: (id: string) => void;
    /** Default selected node id (uncontrolled) */
    defaultSelected?: string;
    /** Controlled expanded node ids */
    expanded?: string[];
    /** Callback when expanded state changes */
    onExpandedChange?: (ids: string[]) => void;
    /** Default expanded ids (uncontrolled) */
    defaultExpanded?: string[];
    /** Pixels of indentation per level. Default: 16. */
    indent?: number;
    /** Show connecting lines between nodes. Default: true. */
    showLines?: boolean;
}
declare function TreeView(props: TreeViewProps): JSX.Element;

interface VideoProps {
    /** Video source URL */
    src: string;
    /** Poster image URL shown before playback */
    poster?: string;
    /** Show native browser controls. Default: true */
    controls?: boolean;
    /** Autoplay the video. Default: false. Note: forces muted=true to satisfy browser autoplay policy. */
    autoplay?: boolean;
    /** Mute the video. Default: false */
    muted?: boolean;
    /** Loop the video. Default: false */
    loop?: boolean;
    /** CSS aspect-ratio value e.g. '16/9', '4/3', '1/1', '9/16'. Default: '16/9' */
    aspectRatio?: string;
    /** Max width of the container (CSS value). Default: '100%' */
    width?: string;
    /** Max height of the container (CSS value). Rarely needed with aspect-ratio. */
    height?: string;
    /** Fallback content to render when the video fails to load */
    fallback?: JSX.Element;
    /** Preload strategy. Default: 'metadata' */
    preload?: 'none' | 'metadata' | 'auto';
    /** Whether the video fills its container. Default: true */
    fluid?: boolean;
    class?: string;
    /** Forwarded to the <video> element */
    videoClass?: string;
}
declare function Video(props: VideoProps): JSX.Element;

interface ImageProps extends Omit<JSX.ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
    /** Image source URL */
    src: string;
    /** Alternative text for accessibility */
    alt: string;
    /** Fallback source to try if main src fails */
    fallbackSrc?: string;
    /** Show loading skeleton while image loads */
    showSkeleton?: boolean;
    /** Custom fallback content (overrides skeleton) */
    fallback?: JSX.Element;
    /** Delay before showing fallback to avoid flash */
    fallbackDelay?: number;
    /** Aspect ratio class (e.g. 'aspect-square', 'aspect-video') */
    aspectRatio?: string;
    /** Object fit class */
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    /** Intuitive scaling aliases - easier to remember than objectFit */
    scale?: 'contain' | 'cover' | 'stretch' | 'none' | 'scale-down' | 'portrait' | 'landscape' | 'square';
    /** Smart scaling constraints */
    scalingConstraints?: {
        /** Maximum width the image should scale to */
        maxWidth?: string;
        /** Maximum height the image should scale to */
        maxHeight?: string;
    };
    /** Object position class */
    objectPosition?: string;
    /** Border radius class */
    rounded?: string;
    /** Whether to lazy load the image */
    lazy?: boolean;
    /** Content to overlay on top of the image */
    overlay?: JSX.Element;
    /** Overlay position class */
    overlayPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'full';
    /** Show overlay on hover only */
    overlayOnHover?: boolean;
    /** Callback when image loads successfully */
    onLoad?: () => void;
    /** Callback when image fails to load */
    onError?: () => void;
}
/**
 * Image component with loading states, error handling, and accessibility features.
 * Built on top of Kobalte's Image primitive for enhanced accessibility.
 */
declare function Image(props: ImageProps): JSX.Element;

interface BoardMoveEvent {
    /** ID of the card that was moved. */
    cardId: string;
    /** Column the card came from. */
    fromColumnId: string;
    /** Column the card was dropped onto. */
    toColumnId: string;
    /**
     * The card the dragged card was dropped near.
     * Null means dropped at the end of the column with no adjacent card.
     */
    nearCardId: string | null;
    /** Whether the card was dropped before or after `nearCardId`. */
    nearPosition: 'before' | 'after' | null;
}
interface BoardProps {
    /** Called when a card is dropped (cross-column move or same-column reorder). */
    onCardMove?: (event: BoardMoveEvent) => void;
    class?: string;
    children?: JSX.Element;
}
interface BoardColumnProps {
    /** Unique identifier for this column — used in `BoardMoveEvent`. */
    id: string;
    title: string;
    /** Badge count shown in the column header. */
    count?: number;
    /** CSS color value for the indicator dot. */
    color?: string;
    class?: string;
    children?: JSX.Element;
}
interface BoardCardProps {
    /** Unique identifier for this card — used in `BoardMoveEvent`. */
    id: string;
    /** Prevents drag interaction when true. */
    disabled?: boolean;
    class?: string;
    children?: JSX.Element;
}
declare function BoardRoot(props: BoardProps): JSX.Element;
declare function BoardColumn(props: BoardColumnProps): JSX.Element;
declare function BoardCard(props: BoardCardProps): JSX.Element;
type BoardComponent = typeof BoardRoot & {
    Column: typeof BoardColumn;
    Card: typeof BoardCard;
};
declare const Board: BoardComponent;

interface TableProps extends JSX.HTMLAttributes<HTMLTableElement> {
    /** When true, even rows get a subtle background (striped). Default: false.
     * Note: striping uses CSS `even:` which counts every `<tr>` in the `<tbody>`,
     * including group headers, add-form rows, etc. If you mix data rows with non-data
     * rows, stripes will be based on DOM order, not logical data-row index. */
    striped?: boolean;
    /** Accessible caption for the table. Rendered as a visually-hidden `<caption>` by default. Pass JSX for a visible caption. */
    caption?: JSX.Element | string;
}
declare function Table(props: TableProps): JSX.Element;
interface TableHeaderProps extends JSX.HTMLAttributes<HTMLTableSectionElement> {
}
/**
 * Renders `<thead>` with sticky positioning.
 * Sticky header requires a vertically scrollable ancestor (e.g. `max-h-* overflow-y-auto`).
 */
declare function TableHeader(props: TableHeaderProps): JSX.Element;
interface TableBodyProps extends JSX.HTMLAttributes<HTMLTableSectionElement> {
}
declare function TableBody(props: TableBodyProps): JSX.Element;
interface TableFooterProps extends JSX.HTMLAttributes<HTMLTableSectionElement> {
}
declare function TableFooter(props: TableFooterProps): JSX.Element;
interface TableRowProps extends JSX.HTMLAttributes<HTMLTableRowElement> {
    /** When false, hover background is not applied (e.g. for empty state, loading, or group header rows). Default true for body rows. */
    hover?: boolean;
    /**
     * Explicit stripe override for grouped tables. When defined, overrides CSS `even:` striping so
     * the stripe pattern resets to white at the start of each group.
     * Omit (undefined) to fall back to CSS `even:bg-surface-stripe` (flat tables).
     */
    stripe?: boolean;
}
declare function TableRow(props: TableRowProps): JSX.Element;
interface TableHeadProps extends JSX.ThHTMLAttributes<HTMLTableCellElement> {
}
declare function TableHead(props: TableHeadProps): JSX.Element;
interface TableCellProps extends JSX.TdHTMLAttributes<HTMLTableCellElement> {
}
declare function TableCell(props: TableCellProps): JSX.Element;

/** Shared table container styling: white background, border, rounded. Use with overflow-x-auto or overflow-hidden. */
declare const TABLE_CONTAINER_CLASS = "rounded-xl border border-surface-border bg-surface-raised";
type DataTableSearchProps = InputProps;
interface DataTableButtonProps {
    label: string;
    onClick: () => void;
    startIcon?: JSX.Element;
}
interface DataTableAddRowProps {
    showAddForm: boolean;
    onToggleAddForm: () => void;
    addButtonLabel: string;
    renderAddCells: () => JSX.Element;
    addError?: string;
}
interface DataTableEditModalProps {
    open: boolean;
    title: string;
    onClose: () => void;
    children: JSX.Element;
    editError?: string;
    onSave: () => void;
    saving?: boolean;
}
interface DataTableDeleteDialogProps {
    open: boolean;
    title: string;
    description: string;
    onClose: () => void;
    onConfirm: () => void;
}
interface ColumnDef<T> {
    id: string;
    /** Column header label or JSX. */
    header: JSX.Element | string;
    /** Class applied to the <TableHead>. */
    headClass?: string;
    /** Class applied to each <TableCell> in this column (data rows and skeleton). */
    cellClass?: string;
    /** Return cell content; DataTable wraps it in <TableCell class={cellClass}>. */
    cell: (item: T) => JSX.Element | string | number | null;
    /** Custom skeleton element for loading state. Defaults to a pulse bar. */
    skeleton?: JSX.Element;
    /** When true, renders a sort button in the header. Requires the sort prop on DataTable. */
    sortable?: boolean;
}
interface DataTableSortProps {
    /** Currently sorted column id, or null for no sort. */
    column: string | null;
    /** Current sort direction. */
    direction: 'asc' | 'desc';
    /** Called when the user clicks a sortable header. column is null when clearing sort. */
    onSortChange: (column: string | null, direction: 'asc' | 'desc') => void;
}
interface DataTableGroupByProps<T> {
    /** Return group key for each item; null = uncategorized. When set, rows are rendered in groups with a header row per group. */
    groupBy: (item: T) => string | null;
    /** Render the group header row (one cell with colSpan). Required when groupBy is set. */
    renderGroupHeader: (groupKey: string | null) => JSX.Element;
    /** Sort group keys: null (uncategorized) first, then others by key. Override for custom order. */
    groupOrder?: (a: string | null, b: string | null) => number;
}
type DataTablePagination = Pick<PaginationProps, 'totalItems' | 'page' | 'totalPages' | 'pageSize' | 'onPageChange' | 'onPageSizeChange' | 'pageSizeOptions' | 'maxPages' | 'showFirstLast' | 'locale' | 'labels'>;
type DataTablePagingProps = {
    pagination: DataTablePagination;
    loadMore?: never;
} | {
    loadMore: {
        hasMore: boolean;
        onLoadMore: () => void;
        loading?: boolean;
    };
    pagination?: never;
} | {
    pagination?: undefined;
    loadMore?: undefined;
};
type DataTableProps<T> = JSX.HTMLAttributes<HTMLDivElement> & DataTablePagingProps & {
    description?: JSX.Element;
    search?: DataTableSearchProps;
    /** Controlled sort state. Pair with sortable: true on ColumnDef. Sort the items array in the parent. */
    sort?: DataTableSortProps;
    toolbarContent?: JSX.Element;
    toolbarActions?: JSX.Element;
    primaryButton?: DataTableButtonProps;
    secondaryButton?: DataTableButtonProps;
    addRow?: DataTableAddRowProps;
    editModal?: DataTableEditModalProps;
    deleteDialog?: DataTableDeleteDialogProps;
    groupBy?: DataTableGroupByProps<T>;
    /** When true, the table header row is not rendered. */
    hideHeader?: boolean;
    /** When true, removes the outer border/background/rounded container so the table can be embedded inside an existing panel. */
    bare?: boolean;
} & Pick<TableProps, 'striped' | 'caption'> & {
    emptyState?: {
        title: string;
        description?: string;
        icon?: JSX.Element;
        actions?: JSX.Element;
    };
    loading?: boolean;
    error?: Error | unknown;
    items: T[];
    /** Column definitions. Drives header, body cells, skeleton, and colSpan automatically. */
    columns: ColumnDef<T>[];
    /** Escape hatch: return a complete <TableRow> to override, or null/undefined for column-based default. Returning anything else (fragment, bare text, false) produces invalid table markup. */
    renderRowOverride?: (item: T) => JSX.Element | null | undefined;
    /** Message shown when items is empty and no emptyState is provided. Default: "No data". */
    emptyMessage?: string;
    /** Number of skeleton rows to show while loading. Default: 5. */
    skeletonRows?: number;
};
/**
 * Data table with optional toolbar, inline add row, edit modal, delete dialog, and row grouping.
 * Use groupBy to render rows in groups with a header row per group. All action buttons use type="button" so the table can be used inside a form without causing submit.
 */
declare function DataTable<T>(props: DataTableProps<T>): JSX.Element;

export { Avatar, type AvatarBadgePlacement, type AvatarColor, AvatarGroup, type AvatarGroupItem, type AvatarGroupProps, type AvatarProps, type AvatarRing, type AvatarShape, type AvatarStacking, Badge, type BadgeProps, type BadgeSize, type BadgeVariant, Board, type BoardCardProps, type BoardColumnProps, type BoardMoveEvent, type BoardProps, Carousel, type CarouselProps, type CarouselSlide, ColorSwatch, type ColorSwatchProps, type ColorSwatchVariant, type ColumnDef, DataTable, type DataTableAddRowProps, type DataTableButtonProps, type DataTableDeleteDialogProps, type DataTableEditModalProps, type DataTableGroupByProps, type DataTablePagination, type DataTablePagingProps, type DataTableProps, type DataTableSearchProps, type DataTableSortProps, EmptyState, type EmptyStateProps, Image, type ImageProps, KEY, Kbd, type KbdProps, KbdShortcut, type KbdShortcutProps, type KbdSize, type KbdVariant, Persona, type PersonaProps, type SizeKey, StatCard, type StatCardProps, TABLE_CONTAINER_CLASS, Table, TableBody, type TableBodyProps, TableCell, type TableCellProps, TableFooter, type TableFooterProps, TableHead, type TableHeadProps, TableHeader, type TableHeaderProps, type TableProps, TableRow, type TableRowProps, Tag, type TagProps, type TagSize, type TagStyle, type TagVariant, Timeline, type TimelineConnector, type TimelineItem, type TimelineItemStatus, type TimelineProps, type TimelineVariant, type TreeNode, TreeView, type TreeViewProps, Video, type VideoProps };
