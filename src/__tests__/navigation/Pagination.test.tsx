import { describe, expect, it, vi } from 'vitest'
import { screen } from '@solidjs/testing-library'
import userEvent from '@testing-library/user-event'
import { Pagination } from '../../components/navigation/Pagination'
import { LocaleProvider } from '../../utilities/localeContext'
import { renderUI } from '../../test/test-utils'

describe('Pagination', () => {
	it('renders prev and next buttons', () => {
		renderUI(() => <Pagination page={2} totalPages={10} onPageChange={vi.fn()} />)
		expect(screen.getByRole('button', { name: 'Previous page' })).toBeInTheDocument()
		expect(screen.getByRole('button', { name: 'Next page' })).toBeInTheDocument()
	})

	it('uses Chinese labels when wrapped in a LocaleProvider locale="zh"', () => {
		renderUI(() => (
			<LocaleProvider locale="zh">
				<Pagination page={2} totalPages={10} onPageChange={vi.fn()} />
			</LocaleProvider>
		))
		expect(screen.getByRole('button', { name: '上一页' })).toBeInTheDocument()
		expect(screen.getByRole('button', { name: '下一页' })).toBeInTheDocument()
	})

	it('lets an explicit locale prop override the LocaleProvider', () => {
		renderUI(() => (
			<LocaleProvider locale="zh">
				<Pagination locale="en" page={2} totalPages={10} onPageChange={vi.fn()} />
			</LocaleProvider>
		))
		expect(screen.getByRole('button', { name: 'Previous page' })).toBeInTheDocument()
		expect(screen.getByRole('button', { name: 'Next page' })).toBeInTheDocument()
	})

	it('disables prev button on first page', () => {
		renderUI(() => <Pagination page={1} totalPages={5} onPageChange={vi.fn()} />)
		expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled()
	})

	it('disables next button on last page', () => {
		renderUI(() => <Pagination page={5} totalPages={5} onPageChange={vi.fn()} />)
		expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled()
	})

	it('calls onPageChange with next page when next is clicked', async () => {
		const user = userEvent.setup()
		const onPageChange = vi.fn()
		renderUI(() => <Pagination page={3} totalPages={10} onPageChange={onPageChange} />)
		await user.click(screen.getByRole('button', { name: 'Next page' }))
		expect(onPageChange).toHaveBeenCalledWith(4)
	})

	it('calls onPageChange with prev page when prev is clicked', async () => {
		const user = userEvent.setup()
		const onPageChange = vi.fn()
		renderUI(() => <Pagination page={3} totalPages={10} onPageChange={onPageChange} />)
		await user.click(screen.getByRole('button', { name: 'Previous page' }))
		expect(onPageChange).toHaveBeenCalledWith(2)
	})

	it('shows total items info text when totalItems provided', () => {
		renderUI(() => (
			<Pagination page={1} totalPages={5} totalItems={50} onPageChange={vi.fn()} />
		))
		expect(document.body.textContent).toContain('50')
	})
})
