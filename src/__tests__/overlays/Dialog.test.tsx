import { describe, expect, it, vi } from 'vitest'
import { createSignal } from 'solid-js'
import { screen, waitFor } from '@solidjs/testing-library'
import userEvent from '@testing-library/user-event'
import { Dialog } from '../../components/overlays/Dialog'
import { renderUI } from '../../test/test-utils'

describe('Dialog', () => {
	it('does not render when closed', () => {
		renderUI(() => (
			<Dialog open={false} onOpenChange={vi.fn()}>
				<p>Dialog body</p>
			</Dialog>
		))
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
	})

	it('renders when open=true', () => {
		renderUI(() => (
			<Dialog open onOpenChange={vi.fn()}>
				<p>Dialog body</p>
			</Dialog>
		))
		expect(screen.getByRole('dialog')).toBeInTheDocument()
	})

	it('renders header content', () => {
		renderUI(() => (
			<Dialog open header="Confirm Action" onOpenChange={vi.fn()}>
				<p>Are you sure?</p>
			</Dialog>
		))
		expect(screen.getByText('Confirm Action')).toBeInTheDocument()
	})

	it('renders children body', () => {
		renderUI(() => (
			<Dialog open onOpenChange={vi.fn()}>
				<p>Dialog content here</p>
			</Dialog>
		))
		expect(screen.getByText('Dialog content here')).toBeInTheDocument()
	})

	it('renders footer content', () => {
		renderUI(() => (
			<Dialog open footer={<button type="button">Save</button>} onOpenChange={vi.fn()}>
				<p>Body</p>
			</Dialog>
		))
		expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
	})

	it('calls onClose when close button is clicked', async () => {
		const user = userEvent.setup()
		const onClose = vi.fn()
		renderUI(() => (
			<Dialog open showCloseButton onClose={onClose} onOpenChange={vi.fn()}>
				<p>Body</p>
			</Dialog>
		))
		const closeBtn = screen.getByRole('button', { name: /close/i })
		await user.click(closeBtn)
		expect(onClose).toHaveBeenCalledTimes(1)
	})

	it('restores focus after Escape when no Kobalte trigger is registered', async () => {
		const user = userEvent.setup()
		const [open, setOpen] = createSignal(false)
		const ControlledDialog = () => (
			<Dialog
				open={open()}
				onOpenChange={setOpen}
				animationDuration={0}
				overlay={false}
				panelAnimation="none"
				overlayAnimation="none"
				header="Controlled dialog"
			>
				<button type="button">Inside</button>
			</Dialog>
		)
		renderUI(() => (
			<>
				<button type="button" onClick={() => setOpen(true)}>Open dialog</button>
				<ControlledDialog />
			</>
		))
		const trigger = screen.getByRole('button', { name: 'Open dialog' })
		await user.click(trigger)
		const dialog = screen.getByRole('dialog')
		await user.keyboard('{Escape}')
		const animationEnd = new Event('animationend', { bubbles: true })
		Object.defineProperty(animationEnd, 'animationName', { value: '' })
		dialog.dispatchEvent(animationEnd)
		await waitFor(() => expect(document.activeElement).toBe(trigger))
	})
})
