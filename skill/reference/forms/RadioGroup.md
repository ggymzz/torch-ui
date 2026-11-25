# RadioGroup

**Category:** forms
**Import:** `@torch-ui/solid/forms`
**Source:** `src/components/forms/RadioGroup.tsx`

## Exports

```ts
import {
  RadioGroup,
  type RadioGroupOption,
  type RadioGroupProps
} from "@torch-ui/solid/forms";
```

## Props

```ts
export interface RadioGroupProps {

	/** Group label (e.g. "Choose one"). */

	label?: string

	/** Hint text below the control. */

	helperText?: JSX.Element

	/** Error message and invalid styling. */

	error?: JSX.Element

	/** When true, never render label row or error/helper text (control only). */

	bare?: boolean

	/** When true, show required indicator on label. */

	required?: boolean

	/** When true, show "optional" on the label row when not required. Default false. */

	optional?: boolean

	/** Options to display (value + label, optional description). */

	options: RadioGroupOption[]

	/** Selected value (controlled). */

	value?: string

	/** Called when selection changes. */

	onValueChange?: (value: string) => void

	/** Called when the user interacts with the control while an error is shown, allowing the parent to clear the error. */

	onErrorClear?: () => void

	/** Disables all options. */

	disabled?: boolean

	/** Form name. */

	name?: string

	/** Layout: vertical list (default) or horizontal. */

	orientation?: 'vertical' | 'horizontal'

	/** Component size. Default 'md'. */

	size?: ComponentSize

	/** Removes item padding and tightens gap — for dense UIs like filter/sort drawers. */

	compact?: boolean

	/** Additional class for the root. */

	class?: string

}
```

```ts
export interface RadioGroupOption {

	value: string

	label: string

	/** Optional description for the option. */

	description?: string

}
```
