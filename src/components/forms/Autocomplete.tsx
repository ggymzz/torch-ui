/**

 * Autocomplete: text input with a dropdown of suggested options (combobox).

 * Built on Kobalte Combobox. For "free solo" or creatable, use custom options or a creatable pattern in the app layer.

 */

import { createEffect, createMemo, createSignal, Show, splitProps, onMount } from 'solid-js'

import { type JSX } from 'solid-js'

import { Combobox as KobalteCombobox } from '@kobalte/core/combobox'

import { cn } from '../../utilities/classNames'

import { type ComponentSize, inputSizeConfig } from '../../types/component-size'

import { useIcons } from '../../icons'

import { useComponentSize } from '../../utilities/componentSizeContext'

import { useLocaleConfig, resolveLocale } from '../../utilities/localeContext'



const autocompleteStyles = `

.torchui-combobox-content {

	transform-origin: var(--kb-combobox-content-transform-origin);

	opacity: 0;

	animation: torchui-combobox-hide 150ms ease-in forwards;

}

.torchui-combobox-content[data-expanded] {

	opacity: 1;

	animation: torchui-combobox-show 150ms ease-out;

}

@keyframes torchui-combobox-show {

	from { opacity: 0; transform: translateY(-8px); }

	to { opacity: 1; transform: translateY(0); }

}

@keyframes torchui-combobox-hide {

	from { opacity: 1; transform: translateY(0); }

	to { opacity: 0; transform: translateY(-8px); }

}

`



const COMBOBOX_STYLE_ID = 'torchui-combobox-styles'

function ensureComboboxStyles() {

	if (typeof document === 'undefined') return

	if (document.getElementById(COMBOBOX_STYLE_ID)) return

	const style = document.createElement('style')

	style.id = COMBOBOX_STYLE_ID

	style.textContent = autocompleteStyles

	document.head.appendChild(style)

}



export interface AutocompleteOption {

	value: string

	label: string

	/** When true, option is not selectable. */

	disabled?: boolean

}



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



/** Option shape passed to Combobox when we add disabled from getOptionDisabled. */

type OptionWithDisabled = AutocompleteOption & { disabled?: boolean }



export function Autocomplete(props: AutocompleteProps) {

	const [local, others] = splitProps(props, [

		'label',

		'error',

		'helperText',

		'bare',

		'required',

		'optional',

		'options',

		'placeholder',

		'value',

		'onValueChange',

		'onErrorClear',

		'class',

		'disabled',

		'disableClearable',

		'size',

		'getOptionDisabled',

		'filterOptions',

		'inputValue',

		'onInputChange',

		'renderOption',

		'triggerMode',

		'ref',

		// forwarded to the underlying combobox input
		'id',
		'aria-label',
		'aria-labelledby',

	])

	const icons = useIcons()

	const contextLocale = useLocaleConfig()

	const zh = () => resolveLocale(undefined, contextLocale) === 'zh'

	const contextSize = useComponentSize()

	const hasError = () => !!local.error



	const [inputValueState, setInputValueState] = createSignal('')

	const [dirty, setDirty] = createSignal(false)



	const inputValue = () => local.inputValue ?? inputValueState()



	createEffect(() => {

		if (local.inputValue !== undefined) return

		if (dirty()) return

		const opt = local.options.find((o) => o.value === local.value) ?? null

		setInputValueState(opt?.label ?? '')

	})



	const optionsWithDisabled = (opts: AutocompleteOption[]): OptionWithDisabled[] =>

		local.getOptionDisabled ? opts.map((o) => ({ ...o, disabled: local.getOptionDisabled!(o) })) : opts



	const optionsForRoot = createMemo<OptionWithDisabled[]>(() => {

		let base = local.filterOptions && dirty()

			? local.filterOptions(local.options, inputValue())

			: local.options

		const selected = local.options.find((o) => o.value === local.value)

		if (selected && !base.some((o) => o.value === selected.value)) {

			base = [selected, ...base]

		}

		return optionsWithDisabled(base)

	})



	const selectedOption = createMemo<OptionWithDisabled | null>(() => {

		if (!local.value) return null

		return optionsForRoot().find((o: OptionWithDisabled) => o.value === local.value) ?? null

	})



	const handleChange = (option: OptionWithDisabled | null) => {

		if (local.error && local.onErrorClear) local.onErrorClear()

		setDirty(false)

		if (!option) {

			if (local.inputValue === undefined) setInputValueState('')

			if (local.value) local.onValueChange?.('')

			return

		}

		local.onValueChange?.(option.value)

		if (local.inputValue === undefined) setInputValueState(option.label)

	}



	const handleInputChange = (value: string) => {

		if (local.error && local.onErrorClear) local.onErrorClear()

		setDirty(true)

		if (local.inputValue === undefined) setInputValueState(value)

		local.onInputChange?.(value)

		if (value === '') {

			local.onValueChange?.('')

		}

	}



	const handleClear = (e: MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setDirty(false)
		if (local.inputValue === undefined) setInputValueState('')
		local.onInputChange?.('')
		local.onValueChange?.('')

		// KobalteCombobox.Input is uncontrolled; the callbacks above don't clear its
		// internal display value. Clear the input DOM and dispatch an input event
		// directly so Kobalte syncs its internal state.
		const wrapper = (e.currentTarget as HTMLElement).closest('div.w-full')
		const input = wrapper?.querySelector('input')
		if (input && input.value !== '') {
			input.value = ''
			input.dispatchEvent(new Event('input', { bubbles: true }))
			setDirty(false)
		}
	}



	onMount(ensureComboboxStyles)

	const sc = () => inputSizeConfig[local.size ?? contextSize ?? 'md']



	return (

		<div ref={local.ref} class={cn('w-full', local.class)}>

			<KobalteCombobox<OptionWithDisabled>

				options={optionsForRoot()}

				optionValue="value"

				optionTextValue="label"

				optionLabel="label"

				optionDisabled="disabled"

				value={selectedOption()}

			defaultFilter={local.filterOptions ? undefined : (option, input) => {
				// When the input equals the current selected item's label (i.e., the user is
			// viewing the selected value, not typing), show all options so they can switch
			// to another value (official behavior: with a value selected, opening the
			// dropdown shows the full list with the current value checked).
			// Only filter by input when the user types text different from the selected value.
				const selectedLabel = selectedOption()?.label
				if (selectedLabel && input === selectedLabel) return true
				const label = typeof option === 'object' && option !== null ? String((option as AutocompleteOption).label ?? '') : String(option)
				return label.toLowerCase().includes(input.toLowerCase())
			}}


			triggerMode={local.triggerMode ?? 'input'}

				disabled={local.disabled}

				onChange={handleChange}

				onInputChange={handleInputChange}

				// Kobalte Combobox calls resetInputValue on selectedKeys change: if there's no
			// selected item (e.g., user typed custom text not in options) and
			// noResetInputOnBlur is not set, it clears the input (setInputValue("")).
			// This loses user input in "free input + blur to submit" scenarios (e.g., custom
			// spec name entry). With noResetInputOnBlur enabled, the input is only reset to
			// the selected label when a selection exists; custom text is preserved otherwise.
				noResetInputOnBlur

				itemComponent={(itemProps) => (

					<KobalteCombobox.Item

						item={itemProps.item}

						class="relative flex items-center justify-between px-3 py-2 text-sm text-ink-900 cursor-pointer outline-none data-[highlighted]:bg-primary-50 data-[highlighted]:text-primary-900 data-[disabled]:bg-surface-dim data-[disabled]:text-ink-500 data-[disabled]:cursor-not-allowed"

					>

						<KobalteCombobox.ItemLabel class="flex-1">

							{local.renderOption ? (

								local.renderOption(itemProps.item.rawValue)

							) : (

								<span>{itemProps.item.rawValue.label}</span>

							)}

						</KobalteCombobox.ItemLabel>

						<KobalteCombobox.ItemIndicator class="inline-flex items-center">

							{icons.check({ class: 'w-4 h-4 text-primary-500', 'aria-hidden': 'true' })}

						</KobalteCombobox.ItemIndicator>

					</KobalteCombobox.Item>

				)}

			>

				<KobalteCombobox.HiddenSelect />

				<Show when={!local.bare && local.label}>

					<div class="flex items-center justify-between mb-2">

						<KobalteCombobox.Label class={cn('block text-sm font-medium', hasError() ? 'text-danger-600' : 'text-ink-700')}>

							{local.label}

							<Show when={local.required}>

								<span class="text-danger-500 ml-0.5" aria-hidden="true">*</span>

							</Show>

						</KobalteCombobox.Label>

						<Show when={local.label && !local.required && local.optional}>

							<span class="text-xs text-ink-500">optional</span>

						</Show>

					</div>

				</Show>

				<KobalteCombobox.Control

					class={cn(

						'w-full flex cursor-pointer items-center rounded-lg transition-colors outline-none text-ink-900 bg-surface-raised border',

						hasError() ? 'border-danger-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-danger-500' : 'border-surface-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 focus-within:border-transparent',

						sc().h, sc().py, sc().text, sc().pl, sc().pr,

						local.disabled &&

							'bg-surface-base text-ink-500 pointer-events-none'

					)}

				>

					<KobalteCombobox.Input

					class="flex-1 min-w-0 bg-transparent outline-none text-ink-900 placeholder:text-ink-400 disabled:cursor-not-allowed"

					placeholder={local.placeholder || (zh() ? '搜索...' : 'Search...')}

					disabled={local.disabled}

					id={local.id}

					aria-label={local['aria-label']}

					aria-labelledby={local['aria-labelledby']}

				/>

					{/* Clear + dropdown button group: tight layout with input content (no gap-2 spacing) */}

					<div class="flex items-center gap-0.5">

					<Show when={!local.disableClearable}>

						<button

							type="button"

							aria-label={zh() ? '清除' : 'Clear'}

							class={cn(

								'shrink-0 rounded p-0.5 text-ink-400 hover:bg-surface-overlay hover:text-ink-600 outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset',

								!local.value && inputValue().length === 0 && 'invisible'

							)}

							tabIndex={!local.value && inputValue().length === 0 ? -1 : 0}

							onClick={handleClear}

						>

							{icons.close({ class: 'h-4 w-4', 'aria-hidden': 'true' })}

						</button>

					</Show>

					<KobalteCombobox.Trigger

						class="shrink-0 rounded p-0.5 text-ink-400 hover:bg-surface-overlay hover:text-ink-600"

						aria-label={zh() ? '打开选项' : 'Open options'}

					>

						{icons.chevronDown({ class: 'h-4 w-4', 'aria-hidden': 'true' })}

					</KobalteCombobox.Trigger>

					</div>

				</KobalteCombobox.Control>

				<Show when={!local.bare && !hasError() && local.helperText}>

					<p class="mt-2 text-sm text-ink-500">{local.helperText}</p>

				</Show>

				<Show when={!local.bare && hasError()}>

					<p class="mt-2 text-sm text-danger-600">{local.error}</p>

				</Show>



				<KobalteCombobox.Portal>

					{/* Mark as top layer so the enclosing modal Dialog's ariaHideOutside does not set aria-hidden on this portaled content */}
					<KobalteCombobox.Content

						data-kb-top-layer

						class="torchui-combobox-content bg-surface-raised rounded-lg border border-surface-border shadow-lg mt-2 py-1 max-h-60 overflow-auto z-[80]"

						// Prevent Kobalte's FocusScope from pulling focus back to the input on Content close.
					// Otherwise, combined with triggerMode="focus", focus restoration re-triggers the
					// dropdown open (repeated pop-ups after clicking outside).
						onCloseAutoFocus={(e) => e.preventDefault()}

					>

						<KobalteCombobox.Listbox class="outline-none" />

					</KobalteCombobox.Content>

				</KobalteCombobox.Portal>

			</KobalteCombobox>

		</div>

	)

}

