# Table

**Category:** data-display
**Import:** `@torch-ui/solid/data-display`
**Source:** `src/components/data-display/Table.tsx`

## Exports

```ts
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  type TableProps,
  type TableHeaderProps,
  type TableBodyProps,
  type TableFooterProps,
  type TableRowProps,
  type TableHeadProps,
  type TableCellProps
} from "@torch-ui/solid/data-display";
```

## Props

```ts
export interface TableProps extends JSX.HTMLAttributes<HTMLTableElement> {
	/** When true, even rows get a subtle background (striped). Default: false.
	 * Note: striping uses CSS `even:` which counts every `<tr>` in the `<tbody>`,
	 * including group headers, add-form rows, etc. If you mix data rows with non-data
	 * rows, stripes will be based on DOM order, not logical data-row index. */
	striped?: boolean
	/** Accessible caption for the table. Rendered as a visually-hidden `<caption>` by default. Pass JSX for a visible caption. */
	caption?: JSX.Element | string
}
```

```ts
export interface TableHeaderProps
	extends JSX.HTMLAttributes<HTMLTableSectionElement> {}
```

```ts
export interface TableBodyProps
	extends JSX.HTMLAttributes<HTMLTableSectionElement> {}
```

```ts
export interface TableFooterProps
	extends JSX.HTMLAttributes<HTMLTableSectionElement> {}
```

```ts
export interface TableRowProps extends JSX.HTMLAttributes<HTMLTableRowElement> {
	/** When false, hover background is not applied (e.g. for empty state, loading, or group header rows). Default true for body rows. */
	hover?: boolean
	/**
	 * Explicit stripe override for grouped tables. When defined, overrides CSS `even:` striping so
	 * the stripe pattern resets to white at the start of each group.
	 * Omit (undefined) to fall back to CSS `even:bg-surface-stripe` (flat tables).
	 */
	stripe?: boolean
}
```

```ts
export interface TableHeadProps
	extends JSX.ThHTMLAttributes<HTMLTableCellElement> {}
```

```ts
export interface TableCellProps
	extends JSX.TdHTMLAttributes<HTMLTableCellElement> {}
```
