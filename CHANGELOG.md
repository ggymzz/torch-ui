# Changelog

All notable changes to `@torch-ui/solid` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **`Select`**: new `clearable` prop — when set and a value is selected, a clear (×) button appears in the trigger that resets the value back to the placeholder (fires `onValueChange('')`).

### Fixed
- **`DatePicker`**: `min`/`max`/`value` props are now read eagerly inside the render root via `createMemo`. Solid lazily memoizes reactive prop getters, and the previous first access happened inside the `onOpenChange` event handler (outside `createRoot`), producing the dev warning "computations created outside a `createRoot` or `render` will never be disposed" and leaking the memo. This also fixes the same warning on any page passing reactive `min`/`max` (e.g. combo bundles, discount creation). Time-picker hour/minute `<input>` now carry `id` and `name` attributes for accessibility.
- **`Select`**: controlled `value` set to `''` (e.g. selecting an empty-value option like "All" or clearing via the new clear button) now correctly resets the displayed selection to the placeholder. Previously the trigger kept showing the last selected value because `undefined` was passed to Kobalte, which treats it as "uncontrolled" and retains its internal selection. The controlled empty state now passes `null` so Kobalte clears the selection.

## [0.6.5] - 2026-04-13

### Fixed
- **`Breadcrumbs`**: inverted separator color changed from `text-white/30` to `text-white/50` for better contrast on dark backgrounds.
- **`MegaMenuColumn`**: gap between items increased from `gap-0.5` to `gap-1` so hover/active states no longer touch.
- **`MegaMenuSection`**: section label and children wrapped in `gap-1` flex column; removed `mb-1` from label so spacing is consistent.
- **`TableRow`**: added explicit `stripe` prop so grouped `DataTable` rows reset the stripe pattern at the start of each group instead of continuing the CSS `even:` count across group boundaries.

## [0.6.3] - 2026-04-10

### Fixed
- **`MegaMenu`**: `MegaMenu.Content` now renders **`as="div"`** instead of Kobalte’s default **`ul`**. Custom panel markup (grids, sections, `button` rows) is not valid inside `ul`, so browsers could “repair” the tree and show **progressively indented / staggered** rows when multiple items appeared in one column.
- **`MegaMenuItem`**: added **`min-w-0`** and **`text-left`** so labels stay aligned in flex layouts.
- **`MegaMenu`**: injected styles id **`torchui-mega-menu-styles-v3`** (drops legacy v1/v2 tags on mount); viewport uses **opacity** transition only — **no `width` transition** (width animation reflows text and looked blurry).

## [0.6.2] - 2026-04-10

### Fixed
- **`MegaMenu`**: viewport and content motion use **opacity-only** animations (no 3D `rotateX`, `scale`, or horizontal `translateX`) so dropdown text and icons stay sharp on HiDPI. Removed arrow `drop-shadow` filter; bumped injected stylesheet id to `torchui-mega-menu-styles-v2` and remove legacy `torchui-mega-menu-styles` on mount.
- **`MegaMenu`**: re-applied v0.6.0 **alignment** tweaks — section/item horizontal rhythm (`px-3` items, tighter column `gap-0.5`), **`MegaMenuBarLink`** underline bar stretch (`flex items-stretch` / `h-full`), description as **`div`**; item vertical padding **`py-1.5`** (with `px-3`) for density vs v0.6.0’s `py-2.5`.

## [0.6.1] - 2026-04-09

### Fixed
- Restored **`MegaMenu`** and **`Breadcrumbs`** behavior from v0.5.15 (`InvertedContext`, `inverted` prop) after an accidental regression in v0.6.0.
- **`DropdownMenu`**, **`ContextMenu`**, and many form/navigation components: repaired truncated Tailwind classes (`data-[disabled]:…`, `disabled:…`) that produced invalid CSS in v0.6.0; restored intended `cursor-not-allowed` and disabled surface styling consistent with v0.5.15.
- **`NumberField`**: stepper triggers no longer used a broken `disabled:disabled:opacity-50` class string; disabled styling matches the standalone input path.

## [0.4.0] - 2026-03-18

### Added
- `Wizard.Vertical`: new two-column layout component that combines the vertical stepper with a content panel side-by-side. Props: `step`, `stepLabels`, `variant`, `sidebarWidth` (`'sm' | 'md' | 'lg'`), `gap` (`'sm' | 'md' | 'lg' | 'xl'`), `sidebarClass`, `contentClass`, `class`, `children`. Also exported as `VerticalWizard`.

### Fixed
- `theme.css`: added `color-scheme: light` to `:root` and `color-scheme: dark` to `.dark`. Without this, Safari/WebKit on iOS and iPadOS rendered native elements (inputs, selects, scrollbars, focus rings) using the system `prefers-color-scheme` rather than the active `.dark` class, causing those elements to appear inverted relative to the page theme.
- `WizardStepper` (vertical): refactored to a track-column layout (`flex-col items-center`) so the connector line is always pixel-perfect centered under the step circle regardless of variant or label length.

## [0.3.6] - 2026-03-18

### Fixed
- `Carousel`: `setInterval` callback was reading `local.slides` (a prop getter) on every tick, which re-evaluated the prop expression and created JSX outside the reactive tree, causing "computations created outside createRoot or render" warnings. Fixed by wrapping `local.slides` in `createMemo`, so the timer reads a stable cached value instead of re-evaluating JSX on each tick.

## [0.3.5] - 2026-03-17

### Changed
- **All form components** (`Input`, `TextArea`, `Select`, `Autocomplete`, `NumberField`, `DatePicker`, `DateRangePicker`, `MultiSelect`, `RadioGroup`, `Slider`, `Switch`, `TimePicker`, `ColorPicker`, `CodeInput`, `Checkbox`, `FileUpload`): `error` and `helperText` props widened from `string` to `JSX.Element`, allowing rich content like links or formatted text in validation messages and hints.
- `PromptWithAction`: `actionLabel` widened from `string` to `JSX.Element`.
- `AlertDialog`: `description` widened from `string` to `JSX.Element`.
- `EmptyState`: `description` widened from `string` to `JSX.Element`.

### Fixed
- `Checkbox`: label was visually lower than the box due to line-height half-leading. Changed wrapper to `items-center` and removed manual `mt-0.5`/`mt-[3px]` offset on the control. Also changed inner row from `inline-flex` to `flex` to eliminate 2px descender gap when the checkbox is used inside a flex row alongside other controls.
- `RadioGroup`: same alignment fix — items without a `description` now use `items-center`; `mt-0.5` on the radio circle is applied only when a description is present (multi-line layout).
- `Link`: always renders `inline-flex items-center` instead of plain `inline`, fixing vertical misalignment when used as a flex child alongside form controls.

## [0.3.4] - 2026-03-17

### Added
- `Link`: New `iconStart` and `iconEnd` props (`JSX.Element`) for inline icons. When either is set, the link renders as `inline-flex items-center gap-1`.
- `Tag`: New `iconStart` and `iconEnd` props (`JSX.Element`) for inline icons before/after the label.
- `Input`: New `prefix` and `suffix` props for fixed text/content segments separated by a border divider (e.g. `prefix="https://"`, `suffix=".com"`). Unlike `startAdornment`/`endAdornment`, these render outside the text area entirely so typed text can never overflow into them.

### Fixed
- `Input`: When `suffix` or `prefix` is present, the border and focus ring move to the wrapper container so the compound input renders as a single cohesive unit.

## [0.3.3] - 2026-03-15

### Changed
- `CodeBlock`: Removed built-in `prismjs` dependency. Syntax highlighting is now opt-in via a `highlighter` prop — pass any function `(code: string, language: string) => string | Promise<string>` (e.g. Prism, Shiki, highlight.js). Without a highlighter, code renders as plain text. This eliminates the `prismjs` peer dependency and all related CJS/ESM interop issues across bundlers and runtimes.

### Removed
- `prismjs` removed from `peerDependencies`. Consumers handle their own highlighter.

## [0.3.2] - 2026-03-15

### Fixed
- CSS files now shipped at root-level `styles/` in addition to `dist/styles/` so that `@import '@torch-ui/solid/styles/theme.css'` resolves correctly in `@tailwindcss/vite` and other CSS processors that use physical file paths rather than the `exports` map.

## [0.3.1] - 2026-03-15

### Added
- `--surface-stripe` CSS token — programmatically 1.5% darker than `surface-raised`, used for even striped table rows. Fully dynamic: adapts to any `--surface-light` / `--surface-dark` seed.
- `--color-surface-stripe` registered in `@theme` so `bg-surface-stripe` is available as a Tailwind utility.

### Changed
- **Surface elevation ladder refined** — `--surface-light` default updated to `#fdfdfd`; `--surface-raised` derives via `color-mix` from seed (lighter than base in light mode, lighter than base in dark mode).
- **Disabled form inputs** (`Input`, `CodeInput`, `Select`, `NumberField`, `TextArea`) now use `bg-surface-dim` so disabled fields are visibly muted against the page background.
- **Tag** dark-mode variant backgrounds (`success`, `warning`, `danger`, `info`) now use opacity-based tints (e.g. `success-500/20`) for consistency with the `primary` variant.
- **Table** `thead`/`tfoot` use `bg-surface-overlay`; body rows use `bg-surface-raised`; striped even rows use `bg-surface-stripe`; row hover uses `hover:bg-primary-500/20` (works in both light and dark mode).
- **CodeBlock** container background changed to `bg-surface-raised`; collapsible "Show code" trigger uses `bg-surface-overlay` (was transparent when embedded, making it invisible).

## [0.2.0] - 2026-03-13

### Changed (Breaking)
- **Compound component pattern** for `DropdownMenu`, `ContextMenu`, `Tooltip`, `Popover`, `HoverCard`, `Collapsible`, `MenuBar` (previously `NavigationMenu`), `MegaMenu`, and `Wizard`/`Stepper`. Sub-components are now accessed as properties of the root (e.g. `DropdownMenu.Trigger`, `HoverCard.Content`) instead of separate named exports. Update imports accordingly.
- `HoverCard.Content` `showArrow` now defaults to `true` (was `false`). Pass `showArrow={false}` to opt out.

### Fixed
- Resolved `computations created outside a createRoot or render will never be disposed` SolidJS warning — caused by JSX expressions in module-level data arrays in consumer apps, not by the icon helper.
- Fixed infinite recursion in `Collapsible`, `DropdownMenu`, `ContextMenu`, and `Tooltip` caused by `Object.assign` mutating Kobalte's namespace object — original sub-component references are now captured before reassignment.
- Fixed `MegaMenu` full-width variant opening taller than content then shrinking — removed `height` from viewport CSS transition so height snaps immediately.

## [0.1.1] - 2026-03-10

### Added
- `MegaMenuBarLink` exported from `@torch-ui/solid/navigation` barrel
- `FileUploadLabels` interface and `labels` prop on `FileUpload` — override any of the 27 built-in UI strings (dropzone copy, button text, aria-labels, status text, validation errors, summary messages) for full localisation support; English defaults preserved for backwards compatibility

### Fixed
- Component prop corrections across navigation components

## [0.1.0] - 2026-03-09

### Added
- Initial release of `@torch-ui/solid`
- 60+ accessible components across actions, charts, data-display, feedback, forms, layout, navigation, overlays, and typography
- Full SolidJS reactivity with Kobalte accessible primitives (ARIA, keyboard navigation)
- Tailwind CSS v4 theming via `theme.css` CSS custom properties (`surface-*`, `ink-*`, `primary-*`, `danger-*`, `success-*`, `warning-*`, `info-*`)
- Bring-your-own-icons model via `IconsProvider` — built-in Lucide-derived SVG defaults with per-icon overrides
- Custom drag-and-drop for `ReorderableList` and `MultiSelect` (no external DnD library)
- Subpath exports: `@torch-ui/solid/actions`, `/forms`, `/layout`, `/overlays`, `/navigation`, `/data-display`, `/feedback`, `/typography`, `/charts`
- `CodeBlock` with Prism syntax highlighting, language switcher, line numbers, collapsible, and forced dark mode
- `ColorPicker` with HSB area, hue slider, hex/RGB/HSL/HSB channel fields, presets, last-used colors, `error` and `helperText` support
- `DatePicker`, `Autocomplete`, `MultiSelect`, `FileUpload`, `Select`, `Slider`, `NumberField`, `CodeInput`
- `DataTable` / `TablePanel` with sorting, filtering, pagination, and column visibility
- `Sidebar`, `Drawer`, `Dialog`, `AlertDialog`, `Popover`, `Tooltip`, `HoverCard`, `ContextMenu`, `DropdownMenu`, `SearchPalette`
- `Chart` and `Sparkline` (Chart.js peer dep, optional)
- `DarkModeToggle` — reads `localStorage` and `prefers-color-scheme`, reacts to OS theme changes, persists user preference
- Component height scale tokens (`--torch-h-xs` through `--torch-h-xl`) for resizing all interactive controls globally
- 423 unit tests across 69 test files

