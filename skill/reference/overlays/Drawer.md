# Drawer

**Category:** overlays
**Import:** `@torch-ui/solid/overlays`
**Source:** `src/components/overlays/Drawer.tsx`

## Exports

```ts
import {
  Drawer,
  type DrawerSize,
  type DrawerSide,
  type DrawerActionsPosition,
  type DrawerProps,
  type DrawerOffset
} from "@torch-ui/solid/overlays";
```

## Props

```ts
export interface DrawerProps extends JSX.HTMLAttributes<HTMLElement> {

	open: boolean

	onClose?: () => void

	/** Called when open state changes */

	onOpenChange?: (open: boolean) => void

	size?: DrawerSize

	side?: DrawerSide

	overlay?: boolean

	closeOnOverlayClick?: boolean

	overlayClass?: string

	/** Dark semi-transparent overlay; default true. Set false to keep background visible (e.g. reference data). */

	overlayDim?: boolean

	/** Backdrop blur on overlay; default true. Set false for no blur. */

	overlayBlur?: boolean

	/** Show a circular close (X) button when onClose is provided */

	showCloseButton?: boolean

	/** Cancel action. Also used as overlay/outside-click fallback before onClose. */

	onCancel?: () => void

	/** Primary action (e.g. Save) */

	onSave?: () => void

	cancelLabel?: string

	saveLabel?: string

	/** Where to place Cancel/Save actions. Default bottom. */

	actionsPosition?: DrawerActionsPosition

	/** Disable page scroll (hide body scrollbar) while drawer is open. Default true. */

	lockScroll?: boolean

	/** Inset from viewport edges (Tailwind spacing: 0, 2=0.5rem, 4=1rem, 6=1.5rem). No offset when size is full. Default 0. */

	offset?: '0' | '2' | '4' | '6'

	/** Called after the exit animation completes. Use this instead of onClose to defer clearing state so content doesn't change mid-animation. */

	onCloseComplete?: () => void

	/** Duration in ms for exit animation (used for onCloseComplete timing). Default 200. */

	animationExitDuration?: number

	/** Remove default p-6 padding from the content area. Use when children provide their own full-bleed layout. */

	noPadding?: boolean

	/** Optional class applied to the inner scrollable content div (the direct parent of children). */

	contentClass?: string

	/** Title text rendered in the fixed header bar. When provided with bottom actions, appears alongside the close button in a non-scrolling header. */

	title?: string

}
```

```ts
export type DrawerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
```

```ts
export type DrawerSide = 'start' | 'end' | 'top' | 'bottom'
```

```ts
export type DrawerActionsPosition = 'bottom' | 'top-end' | 'top-start'
```

```ts
export type DrawerOffset = '0' | '2' | '4' | '6'
```
