# MegaMenu

**Category:** navigation
**Import:** `@torch-ui/solid/navigation`
**Source:** `src/components/navigation/MegaMenu.tsx`
**Pattern:** Compound component (use `MegaMenu.SubComponent`)

## Exports

```ts
import {
  MegaMenuBar,
  MegaMenuMenu,
  MegaMenuTrigger,
  MegaMenuContent,
  MegaMenuPanel,
  MegaMenuColumn,
  MegaMenuSection,
  MegaMenuItem,
  MegaMenuFeatured,
  MegaMenuDivider,
  MegaMenuFooter,
  MegaMenuFooterLink,
  MegaMenuBarLink,
  MegaMenu,
  type MegaMenuBarProps,
  type MegaMenuTriggerProps,
  type MegaMenuContentProps,
  type MegaMenuPanelProps,
  type MegaMenuItemProps,
  type MegaMenuFeaturedProps,
  type MegaMenuBarLinkProps
} from "@torch-ui/solid/navigation";
```

## Props

```ts
export interface MegaMenuBarProps {
	class?: string
	children?: JSX.Element
	/** Visual variant applied to all triggers and bar links. Default: 'default' */
	variant?: MenuVariant
	/** Stretch the dropdown to full viewport width */
	fullWidth?: boolean
	/** Reference to the full nav container element (e.g. the max-w-7xl div) for fullWidth anchor sizing */
	containerRef?: HTMLElement
	/** Horizontal alignment of nav items */
	justify?: 'start' | 'center' | 'end'
	/** Use light (white-based) trigger text for dark backgrounds in light mode */
	inverted?: boolean
	/** Standard Kobalte NavigationMenu props */
	id?: string
	disabled?: boolean
	orientation?: 'horizontal' | 'vertical'
}
```

```ts
export interface MegaMenuTriggerProps {
	class?: string
	children?: JSX.Element
	/** Hide the chevron indicator. Also suppressed automatically when iconPosition is 'top' or 'bottom'. */
	noChevron?: boolean
	/** Overrides the bar-level variant for this trigger only */
	variant?: MenuVariant
	/** Optional icon element */
	icon?: JSX.Element
	/** Icon placement relative to label. Default: 'start' */
	iconPosition?: 'start' | 'end' | 'top' | 'bottom'
}
```

```ts
export interface MegaMenuContentProps {
	class?: string
	children?: JSX.Element
}
```

```ts
export interface MegaMenuPanelProps {
	/** Number of columns. Default: 3 */
	columns?: 2 | 3 | 4
	fullWidth?: boolean
	/** Max content width when fullWidth is true. Default: 1280px */
	maxWidth?: string
	class?: string
	children: JSX.Element
}
```

```ts
export interface MegaMenuItemProps {
	href?: string
	icon?: JSX.Element
	label: JSX.Element
	description?: string
	badge?: string
	active?: boolean
	disabled?: boolean
	onClick?: () => void
	class?: string
}
```

```ts
export interface MegaMenuFeaturedProps {
	href?: string
	title: string
	description?: string
	/** Background color class. Default: primary gradient */
	backgroundClass?: string
	image?: JSX.Element
	/** CTA label. Default: 'Learn more' */
	cta?: string
	class?: string
}
```

```ts
export interface MegaMenuBarLinkProps {
	href: string
	class?: string
	children?: JSX.Element
	/** Overrides the bar-level variant for this link only */
	variant?: MenuVariant
}
```
