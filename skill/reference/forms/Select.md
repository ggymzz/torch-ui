# Select

**Category:** forms
**Import:** `@torch-ui/solid/forms`
**Source:** `src/components/forms/Select.tsx`

## Exports

```ts
import {
  Select,
  type SelectOption,
  type SelectProps
} from "@torch-ui/solid/forms";
```

## Props

```ts
export interface SelectProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'children'> {

	label?: string

	error?: JSX.Element

	helperText?: JSX.Element

	/** When true, never render label row or error/helper text (control only). */

	bare?: boolean

	required?: boolean

	/** When true, show "optional" on the label row when not required. Default false. */

	optional?: boolean

	options: SelectOption[]

	placeholder?: string

	value?: string

	onValueChange?: (value: string) => void

	onErrorClear?: () => void

	disabled?: boolean

	/** Applied to the root wrapper (label + control + helper/error). Use for layout (e.g. max-w-sm). */

	class?: string

	/** Applied to the trigger element for height/sizing (e.g. min-h-[50px] h-[50px]). */

	triggerClass?: string

	/** Input size. Controls height, text size, and padding. Default: md (36px). */

	size?: ComponentSize

	/** When true, show a search input in the dropdown to filter options by label. Default false. */

	searchable?: boolean

	/** When true and a value is selected, show a clear (×) button that resets the value to the placeholder. Default false. */

	clearable?: boolean

	/** Ref forwarded to the root wrapper div. */

	ref?: (el: HTMLDivElement) => void

	/** Id for the root wrapper (e.g. for aria-labelledby / label for). */

	id?: string

}
```

```ts
export interface SelectOption {

	value: string

	label: string

	/** Optional icon shown before the label. */

	icon?: JSX.Element

	/** Optional hex or CSS color for a status dot (e.g. #22c55e). When set, a small colored dot is shown before the label; useful for status/state fields. */

	color?: string | null

}
```
