import { test, expect } from '@playwright/test'
import fs from 'node:fs'

function example(slug) {
  const source = fs.readFileSync(`content/components/${slug}.mdx`, 'utf8')
  return source.match(/```html\n([\s\S]*?)\n```/)[1]
}

test('dialog sample distinguishes confirm from later Escape and restores focus', async ({ page }) => {
  await page.setContent(example('modal-dialogs'))
  const opener = page.getByRole('button', { name: 'Archive project', exact: true })
  await opener.focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('dialog')).toHaveAccessibleName('Archive project?')
  await expect(page.getByRole('button', { name: 'Cancel', exact: true })).toBeFocused()
  await page.keyboard.press('Tab')
  await page.keyboard.press('Enter')
  await expect(opener).toBeFocused()
  await expect(page.getByRole('status')).toContainText('Archive confirmed')
  await page.keyboard.press('Enter')
  await page.keyboard.press('Escape')
  await expect(opener).toBeFocused()
  await expect(page.getByRole('status')).toHaveText('Archive cancelled.')
})

test('accordion sample synchronises keyboard activation with exposed state', async ({ page }) => {
  await page.setContent(example('accordions'))
  const trigger = page.getByRole('button', { name: 'Delivery options' })
  await trigger.focus()
  await page.keyboard.press('Space')
  await expect(trigger).toHaveAttribute('aria-expanded', 'true')
  await expect(page.getByText('Standard delivery takes three working days.')).toBeVisible()
  await page.keyboard.press('Enter')
  await expect(trigger).toHaveAttribute('aria-expanded', 'false')
  await expect(page.locator('#delivery-panel')).toBeHidden()
})

test('tabs sample separates arrow focus from manual selection', async ({ page }) => {
  await page.setContent(example('tabs'))
  await page.getByRole('tab', { name: 'Summary' }).focus()
  await page.keyboard.press('ArrowRight')
  const history = page.getByRole('tab', { name: 'History' })
  await expect(history).toBeFocused()
  await expect(history).toHaveAttribute('aria-selected', 'false')
  await page.keyboard.press('Space')
  await expect(history).toHaveAttribute('aria-selected', 'true')
  await expect(page.getByRole('tabpanel', { name: 'History' })).toBeVisible()
  await page.keyboard.press('Tab')
  await expect(page.getByRole('tabpanel', { name: 'History' })).toBeFocused()
})
