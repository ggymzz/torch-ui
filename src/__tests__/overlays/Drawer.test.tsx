import { describe, expect, it, vi } from 'vitest'
import { screen } from '@solidjs/testing-library'
import userEvent from '@testing-library/user-event'
import { Drawer } from '../../components/overlays/Drawer'
import { renderUI } from '../../test/test-utils'

describe('Drawer', () => {
	it('does not render when closed', () => {
		renderUI(() => (
			<Drawer open={false} onClose={vi.fn()}>
				<p>Drawer content</p>
			</Drawer>
		))
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
	})

	it('renders when open=true', () => {
		renderUI(() => (
			<Drawer open aria-label="Drawer" onClose={vi.fn()}>
				<p>Drawer content</p>
			</Drawer>
		))
		expect(screen.getByRole('alertdialog', { name: 'Drawer' })).toBeInTheDocument()
	})

	it('renders children', () => {
		renderUI(() => (
			<Drawer open aria-label="Settings" onClose={vi.fn()}>
				<p>Sidebar settings</p>
			</Drawer>
		))
		expect(screen.getByText('Sidebar settings')).toBeInTheDocument()
	})

	it('renders cancel and save buttons when callbacks provided', () => {
		renderUI(() => (
			<Drawer
				open
				aria-label="Form"
				onClose={vi.fn()}
				onCancel={vi.fn()}
				onSave={vi.fn()}
				cancelLabel="Discard"
				saveLabel="Apply"
			>
				<p>Content</p>
			</Drawer>
		))
		expect(document.body.textContent).toContain('Discard')
		expect(document.body.textContent).toContain('Apply')
	})

	it('calls onSave when save button clicked', async () => {
		const user = userEvent.setup()
		const onSave = vi.fn()
		renderUI(() => (
			<Drawer open aria-label="Edit" onClose={vi.fn()} onCancel={vi.fn()} onSave={onSave} saveLabel="Save">
				<p>Content</p>
			</Drawer>
		))
		await user.click(screen.getByRole('button', { name: 'Save' }))
		expect(onSave).toHaveBeenCalledTimes(1)
	})

	it('renders close button when showCloseButton and onClose provided', () => {
		renderUI(() => (
			<Drawer open aria-label="Panel" showCloseButton onClose={vi.fn()}>
				<p>Content</p>
			</Drawer>
		))
		expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
	})

	it('does not render footer when only onClose provided (detail drawer)', () => {
		renderUI(() => (
			<Drawer open aria-label="Detail" onClose={vi.fn()} title="详情">
				<p>Detail content</p>
			</Drawer>
		))
		// 详情型 Drawer 不应渲染 Cancel 按钮 (无底部 footer)
		expect(screen.queryByRole('button', { name: 'Cancel' })).not.toBeInTheDocument()
		// 但仍应渲染右上角 X 关闭按钮
		expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
	})

	it('renders footer with Cancel button when onCancel provided', () => {
		renderUI(() => (
			<Drawer open aria-label="Form" onClose={vi.fn()} onCancel={vi.fn()} cancelLabel="取消">
				<p>Form content</p>
			</Drawer>
		))
		expect(screen.getByRole('button', { name: '取消' })).toBeInTheDocument()
	})
})
