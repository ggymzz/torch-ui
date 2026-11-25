# Pagination

**Category:** navigation
**Import:** `@torch-ui/solid/navigation`
**Source:** `src/components/navigation/Pagination.tsx`

## Exports

```ts
import {
  Pagination,
  type PaginationLocale,
  type PaginationLabels,
  type PaginationProps
} from "@torch-ui/solid/navigation";
```

## Props

```ts
export interface PaginationProps extends JSX.HTMLAttributes<HTMLElement> {
	/** Current 1-based page. */
	page: number
	/** Total number of pages. */
	totalPages: number
	/** Called when page changes. */
	onPageChange: (page: number) => void
	/** Max page-number buttons to show (excluding prev/next). Default: 5. Set 0 to hide page numbers. */
	maxPages?: number
	/** Show first/last page buttons (double chevrons). Default: false. */
	showFirstLast?: boolean
	/** Total item count. When set, renders "Showing X–Y of Z" info text. */
	totalItems?: number
	/** Current page size. When set alongside onPageSizeChange, renders per-page selector. */
	pageSize?: number
	/** Called when page size changes. Required alongside pageSize for the per-page selector to render. */
	onPageSizeChange?: (size: number) => void
	/** Options for per-page selector. Default: [10, 25, 50]. */
	pageSizeOptions?: number[]
	/** Optional id for the per-page select wrapper (for label association / testing). */
	selectId?: string
	/** Locale for built-in labels. Default: "en". When omitted, falls back to the nearest `LocaleProvider` locale. */
	locale?: PaginationLocale
	/** Override any built-in label. Merged on top of locale defaults. */
	labels?: PaginationLabels
}
```

```ts
export type PaginationLocale = 'en' | 'zh'
```

```ts
export interface PaginationLabels {
	/** aria-label on the <nav> element. Default: "Pagination" / "分页". */
	navAriaLabel?: string
	/** Info text before the start index. Default: "Showing " / "显示 ". */
	infoPrefix?: string
	/** Info text between end index and total. Default: " of " / " 条，共 ". */
	infoMiddle?: string
	/** Info text after total. Default: "" / " 条". */
	infoSuffix?: string
	/** Visible label and aria-label for the per-page selector. Default: "Per page" / "每页". */
	perPage?: string
	/** aria-label for the first-page button. Default: "First page" / "第一页". */
	firstPage?: string
	/** aria-label for the previous-page button. Default: "Previous page" / "上一页". */
	previousPage?: string
	/** aria-label for the next-page button. Default: "Next page" / "下一页". */
	nextPage?: string
	/** aria-label for the last-page button. Default: "Last page" / "最后一页". */
	lastPage?: string
	/** aria-label for the current page button. Use "{page}" as a placeholder. Default: "Page {page}" / "第 {page} 页". */
	currentPage?: string
	/** aria-label for a non-current page button. Use "{page}" as a placeholder. Default: "Go to page {page}" / "跳转到第 {page} 页". */
	goToPage?: string
}
```
