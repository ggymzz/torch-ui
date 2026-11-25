# Autocomplete

**Category:** forms
**Import:** `@torch-ui/solid/forms`
**Source:** `src/components/forms/Autocomplete.tsx`

## Exports

```ts
import {
  Autocomplete,
  type AutocompleteOption,
  type AutocompleteProps
} from "@torch-ui/solid/forms";
```

## Props

```ts
export interface AutocompleteProps {

	label?: string

	/** Error message and invalid styling. */
	error?: JSX.Element

	/** Hint text below the control. */
	helperText?: JSX.Element

	/** When true, never render label row or error/helper text (control only). */
	bare?: boolean

	/** When true, show required indicator on label. */
	required?: boolean

	/** When true, show "optional" on the label row when not required. Default false. */
	optional?: boolean

	options: AutocompleteOption[]

	placeholder?: string

	value?: string

	onValueChange?: (value: string) => void

	/** Called when the user interacts with the control while an error is shown, allowing the parent to clear the error. */
	onErrorClear?: () => void

	class?: string

	/** Disable the control and input. */
	disabled?: boolean

	/** When true, hide the clear (X) button. */
	disableClearable?: boolean

	/** Input size. Controls height, text size, and padding. Default: md (36px). */
	size?: ComponentSize

	/** Disable specific options. Overrides option.disabled when provided. */
	getOptionDisabled?: (option: AutocompleteOption) => boolean

	/** Custom filter. Receives full options and current input value; return filtered options. Use (x) => x for async (you manage options). */
	filterOptions?: (options: AutocompleteOption[], inputValue: string) => AutocompleteOption[]

	/** Controlled input value (typed text). When provided with onInputChange, enables controlled input for async/search-as-you-type. */
	inputValue?: string

	/** Called when the user types. Use with filterOptions or for controlled input. */
	onInputChange?: (value: string) => void

	/** Custom render for each option. Receives the option; return JSX (e.g. label + description). */
	renderOption?: (option: AutocompleteOption) => JSX.Element

	/**
	 * Kobalte Combobox triggerMode. Default "input" (listbox opens only when typing).
	 * Use "focus" to open the listbox on input focus (e.g. EntityPicker click-to-show).
	 */
	triggerMode?: 'input' | 'focus' | 'manual'

	/** Ref forwarded to the root wrapper div. */
	ref?: (el: HTMLDivElement) => void

	/** ID forwarded to the underlying combobox input (e.g. for label[for] association). */
	id?: string

	/** Accessible label for the input (when no visible label is rendered). Forwarded to the underlying combobox input. */
	'aria-label'?: string

	/** ID of an element that labels this control. Forwarded to the underlying combobox input. */
	'aria-labelledby'?: string

}
```

```ts
export interface AutocompleteOption {

	value: string

	label: string

	/** When true, option is not selectable. */

	disabled?: boolean

}
```
