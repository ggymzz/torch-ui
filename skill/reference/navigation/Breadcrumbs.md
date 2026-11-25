# Breadcrumbs

**Category:** navigation
**Import:** `@torch-ui/solid/navigation`
**Source:** `src/components/navigation/Breadcrumbs.tsx`

## Exports

```ts
import {
  Breadcrumbs,
  type BreadcrumbItem,
  type BreadcrumbsProps
} from "@torch-ui/solid/navigation";
```

## Props

```ts
export interface BreadcrumbsProps {
	/** List of items. Last item is typically current page (no href). */
	items: BreadcrumbItem[]
	/** Optional separator between items. Default ChevronRight. */
	separator?: JSX.Element
	/** Use light (white-based) text for dark backgrounds in light mode */
	inverted?: boolean
	/** Root class. */
	class?: string
}
```

```ts
export interface BreadcrumbItem {
	/** Label to show. */
	label: string
	/** If set, rendered as a link (anchor). Use your router's Link in the app if needed. */
	href?: string
}
```
