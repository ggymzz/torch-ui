import { describe, expect, it, vi } from 'vitest'
import { screen, waitFor } from '@solidjs/testing-library'
import userEvent from '@testing-library/user-event'
import { Autocomplete } from '../../components/forms/Autocomplete'
import { renderUI } from '../../test/test-utils'

const OPTIONS = [
	{ value: 'react', label: 'React' },
	{ value: 'solid', label: 'SolidJS' },
	{ value: 'vue', label: 'Vue' },
	{ value: 'angular', label: 'Angular' },
]

describe('Autocomplete', () => {
	it('renders label', () => {
		renderUI(() => (
			<Autocomplete label="Framework" options={OPTIONS} onValueChange={vi.fn()} />
		))
		expect(screen.getByText('Framework')).toBeInTheDocument()
	})

	it('renders a combobox input', () => {
		renderUI(() => (
			<Autocomplete options={OPTIONS} onValueChange={vi.fn()} />
		))
		expect(screen.getByRole('combobox')).toBeInTheDocument()
	})

	it('shows options when typing', async () => {
		const user = userEvent.setup()
		renderUI(() => (
			<Autocomplete options={OPTIONS} onValueChange={vi.fn()} />
		))
		const input = screen.getByRole('combobox')
		await user.click(input)
		await user.type(input, 'sol')
		await waitFor(() => {
			expect(document.body.textContent).toContain('SolidJS')
		}, { timeout: 2000 })
	})

	it('calls onValueChange when option is selected', async () => {
		const user = userEvent.setup()
		const onValueChange = vi.fn()
		renderUI(() => (
			<Autocomplete options={OPTIONS} onValueChange={onValueChange} />
		))
		const input = screen.getByRole('combobox')
		await user.click(input)
		await user.type(input, 'react')
		await waitFor(() => expect(document.body.textContent).toContain('React'), { timeout: 2000 })
		// Multiple elements may contain 'React' (input + option); click the option in the listbox
		const options = screen.getAllByText('React')
		await user.click(options[options.length - 1])
		expect(onValueChange).toHaveBeenCalledWith('react')
	})

	it('shows error message', () => {
		renderUI(() => (
			<Autocomplete options={OPTIONS} error="Selection required" onValueChange={vi.fn()} />
		))
		expect(screen.getByText('Selection required')).toBeInTheDocument()
	})

	it('calls onErrorClear when user types while error is shown', async () => {
		const user = userEvent.setup()
		const onErrorClear = vi.fn()
		renderUI(() => (
			<Autocomplete
				options={OPTIONS}
				error="Required"
				onErrorClear={onErrorClear}
				onValueChange={vi.fn()}
			/>
		))
		await user.type(screen.getByRole('combobox'), 'r')
		expect(onErrorClear).toHaveBeenCalled()
	})

	it('is disabled when disabled=true', () => {
		renderUI(() => (
			<Autocomplete options={OPTIONS} disabled onValueChange={vi.fn()} />
		))
		expect(screen.getByRole('combobox')).toBeDisabled()
	})

	it('leaves caller-filtered options untouched when filterOptions is provided', async () => {
		const user = userEvent.setup()
		// Async/remote search: the caller already decided what matches the query, and the
		// labels intentionally do not contain it (searching members by phone, names by handle).
		const remote = [
			{ value: 'ethan', label: 'Ethan Xu' },
			{ value: 'sophia', label: 'Sophia Wang' },
		]
		renderUI(() => (
			<Autocomplete
				options={remote}
				filterOptions={opts => opts.filter(o => o.value === 'ethan')}
				onValueChange={vi.fn()}
			/>
		))
		const input = screen.getByRole('combobox')
		await user.click(input)
		await user.type(input, '15500000013')
		await waitFor(() => {
			expect(document.body.textContent).toContain('Ethan Xu')
		}, { timeout: 2000 })
		// The caller's own filter is still honoured — this is not "show everything".
		expect(document.body.textContent).not.toContain('Sophia Wang')
	})

	it('still filters by label when filterOptions is absent', async () => {
		const user = userEvent.setup()
		renderUI(() => (
			<Autocomplete options={OPTIONS} onValueChange={vi.fn()} />
		))
		const input = screen.getByRole('combobox')
		await user.click(input)
		await user.type(input, 'vue')
		await waitFor(() => {
			expect(document.body.textContent).toContain('Vue')
		}, { timeout: 2000 })
		expect(document.body.textContent).not.toContain('Angular')
	})
})
