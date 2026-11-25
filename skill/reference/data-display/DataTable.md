# DataTable

**Category:** data-display
**Import:** `@torch-ui/solid/data-display`
**Source:** `src/components/data-display/DataTable.tsx`

## Exports

```ts
import {
  TABLE_CONTAINER_CLASS,
  DataTable,
  type DataTableSearchProps,
  type DataTableButtonProps,
  type DataTableAddRowProps,
  type DataTableEditModalProps,
  type DataTableDeleteDialogProps,
  type ColumnDef,
  type DataTableSortProps,
  type DataTableGroupByProps,
  type DataTablePagination,
  type DataTablePagingProps,
  type DataTableProps
} from "@torch-ui/solid/data-display";
```

## Props

```ts
export type DataTableSearchProps = InputProps
```

```ts
export interface DataTableButtonProps {
	label: string
	onClick: () => void
	startIcon?: JSX.Element
}
```

```ts
export interface DataTableAddRowProps {
	showAddForm: boolean
	onToggleAddForm: () => void
	addButtonLabel: string
	renderAddCells: () => JSX.Element
	addError?: string
}
```

```ts
export interface DataTableEditModalProps {
	open: boolean
	title: string
	onClose: () => void
	children: JSX.Element
	editError?: string
	onSave: () => void
	saving?: boolean
}
```

```ts
export interface DataTableDeleteDialogProps {
	open: boolean
	title: string
	description: string
	onClose: () => void
	onConfirm: () => void
}
```

```ts
export interface DataTableSortProps {
	/** Currently sorted column id, or null for no sort. */
	column: string | null
	/** Current sort direction. */
	direction: 'asc' | 'desc'
	/** Called when the user clicks a sortable header. column is null when clearing sort. */
	onSortChange: (column: string | null, direction: 'asc' | 'desc') => void
}
```

```ts
export interface DataTableGroupByProps<T> {
	/** Return group key for each item; null = uncategorized. When set, rows are rendered in groups with a header row per group. */
	groupBy: (item: T) => string | null
	/** Render the group header row (one cell with colSpan). Required when groupBy is set. */
	renderGroupHeader: (groupKey: string | null) => JSX.Element
	/** Sort group keys: null (uncategorized) first, then others by key. Override for custom order. */
	groupOrder?: (a: string | null, b: string | null) => number
}
```

```ts
export type DataTablePagingProps =
	| { pagination: DataTablePagination; loadMore?: never }
	| { loadMore: { hasMore: boolean; onLoadMore: () => void; loading?: boolean }; pagination?: never }
	| { pagination?: undefined; loadMore?: undefined }
```

```ts
export type DataTableProps<T> = JSX.HTMLAttributes<HTMLDivElement> & DataTablePagingProps & {
	description?: JSX.Element
	search?: DataTableSearchProps
	/** Controlled sort state. Pair with sortable: true on ColumnDef. Sort the items array in the parent. */
	sort?: DataTableSortProps
	toolbarContent?: JSX.Element
	toolbarActions?: JSX.Element
	primaryButton?: DataTableButtonProps
	secondaryButton?: DataTableButtonProps
	addRow?: DataTableAddRowProps
	editModal?: DataTableEditModalProps
	deleteDialog?: DataTableDeleteDialogProps
	groupBy?: DataTableGroupByProps<T>
	/** When true, the table header row is not rendered. */
	hideHeader?: boolean
	/** When true, removes the outer border/background/rounded container so the table can be embedded inside an existing panel. */
	bare?: boolean
	/** Visual props forwarded to the inner Table (striped, caption). */
} & Pick<TableProps, 'striped' | 'caption'> & {
	emptyState?: {
		title: string
		description?: string
		icon?: JSX.Element
		actions?: JSX.Element
	}
	loading?: boolean
	error?: Error | unknown
	items: T[]
	/** Column definitions. Drives header, body cells, skeleton, and colSpan automatically. */
	columns: ColumnDef<T>[]
	/** Escape hatch: return a complete <TableRow> to override, or null/undefined for column-based default. Returning anything else (fragment, bare text, false) produces invalid table markup. */
	renderRowOverride?: (item: T) => JSX.Element | null | undefined
	/** Message shown when items is empty and no emptyState is provided. Default: "No data". */
	emptyMessage?: string
	/** Number of skeleton rows to show while loading. Default: 5. */
	skeletonRows?: number
}
```

```ts
export interface ColumnDef<T> {
	id: string
	/** Column header label or JSX. */
	header: JSX.Element | string
	/** Class applied to the <TableHead>. */
	headClass?: string
	/** Class applied to each <TableCell> in this column (data rows and skeleton). */
	cellClass?: string
	/** Return cell content; DataTable wraps it in <TableCell class={cellClass}>. */
	cell: (item: T) => JSX.Element | string | number | null
	/** Custom skeleton element for loading state. Defaults to a pulse bar. */
	skeleton?: JSX.Element
	/** When true, renders a sort button in the header. Requires the sort prop on DataTable. */
	sortable?: boolean
}
```

```ts
export type DataTablePagination = Pick<
	PaginationProps,
	'totalItems' | 'page' | 'totalPages' | 'pageSize' | 'onPageChange' | 'onPageSizeChange' | 'pageSizeOptions' | 'maxPages' | 'showFirstLast' | 'locale' | 'labels'
>
```
