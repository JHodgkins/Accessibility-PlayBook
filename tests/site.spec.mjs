import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import fs from 'node:fs'
import path from 'node:path'

function routesIn(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) return routesIn(file)
    if (!file.endsWith('.mdx')) return []
    return ['/' + path.relative('content', file).replace(/\.mdx$/, '').replace(/(^|\/)index$/, '')]
  })
}
const routes = routesIn('content')

for (const route of routes) {
  test(`page structure, links and axe: ${route}`, async ({ page }) => {
    const response = await page.goto(route)
    expect(response.status()).toBe(200)
    await expect(page.locator('main')).toHaveCount(1)
    await expect(page.locator('main h1')).toHaveCount(1)
    const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
    expect(result.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) }))).toEqual([])
    const links = await page.locator('a[href]').evaluateAll(elements => elements.map(el => el.getAttribute('href')))
    for (const href of links.filter(href => href.startsWith('/') && !href.startsWith('//'))) {
      const url = new URL(href, 'http://localhost')
      expect(routes, `Unknown internal route ${href} on ${route}`).toContain(url.pathname.replace(/\/$/, '') || '/')
    }
  })
}

test('narrow pages retain content without page overflow', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 })
  for (const route of ['/', '/components/form-fields', '/components/modal-dialogs', '/operating-model/roles-and-responsibilities']) {
    await page.goto(route)
    await expect(page.locator('main h1')).toBeVisible()
    const size = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, viewport: innerWidth }))
    expect(size.scroll, route).toBeLessThanOrEqual(size.viewport + 1)
  }
})

test('skip link moves keyboard focus into main content', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: /skip to content/i })).toBeFocused()
  await page.keyboard.press('Enter')
  expect(await page.evaluate(() => document.activeElement.id)).toBe('nextra-skip-nav')
})

test('mobile menu opens by keyboard and navigates to a component', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const menu = page.getByRole('button', { name: 'Menu', exact: true })
  await menu.focus()
  await page.keyboard.press('Enter')
  const link = page.locator('#playbook-mobile-navigation').getByRole('link', { name: 'Form fields', exact: true })
  await expect(link).toBeVisible()
  await link.focus()
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/\/components\/form-fields$/)
  await expect(page.locator('main h1')).toHaveText('Form fields')
  await page.screenshot({ path: 'test-results/mobile-form-fields.png', fullPage: true })
})

test('search returns and opens indexed content', async ({ page }) => {
  await page.goto('/')
  const search = page.getByRole('combobox', { name: /search documentation/i })
  await search.fill('modal')
  const result = page.getByRole('option').filter({ hasText: /modal dialogs/i }).first()
  await expect(result).toBeVisible({ timeout: 15000 })
  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/modal-dialogs/)
})

test('dark mode and forced colours preserve readable structure', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark', reducedMotion: 'reduce' })
  await page.goto('/components/form-fields')
  const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
  expect(result.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })) ).toEqual([])
  await page.screenshot({ path: 'test-results/dark-form-fields.png' })
  await page.emulateMedia({ forcedColors: 'active' })
  await page.keyboard.press('Tab')
  const focus = await page.locator(':focus').evaluate(el => ({ outline: getComputedStyle(el).outlineStyle, width: getComputedStyle(el).outlineWidth }))
  expect(focus.outline).not.toBe('none')
  expect(parseFloat(focus.width)).toBeGreaterThan(0)
  await page.screenshot({ path: 'test-results/forced-colours.png' })
})

test('capture navigation semantics and desktop layout for review', async ({ page }, testInfo) => {
  await page.goto('/operating-model/delivery-lifecycle')
  await testInfo.attach('accessibility-structure', { body: await page.locator('body').ariaSnapshot(), contentType: 'text/plain' })
  await page.screenshot({ path: 'test-results/desktop-lifecycle.png' })
  await page.goto('/')
  await page.screenshot({ path: 'test-results/desktop-home.png' })
})

test('internal fragment links resolve to rendered IDs', async ({ page, request }) => {
  const cache = new Map()
  for (const route of routes) {
    await page.goto(route)
    const links = await page.locator('a[href*="#"]').evaluateAll(elements => elements.map(el => el.getAttribute('href')))
    for (const href of links.filter(href => href.startsWith('#') || href.startsWith('/'))) {
      const url = new URL(href, `http://127.0.0.1:3100${route}`)
      if (!url.hash) continue
      if (!cache.has(url.pathname)) {
        const response = await request.get(url.pathname)
        cache.set(url.pathname, await response.text())
      }
      expect(cache.get(url.pathname), `${route} links to missing fragment ${href}`).toContain(`id="${decodeURIComponent(url.hash.slice(1))}"`)
    }
  }
})

test('navigation disclosures expose state and exclude hidden controls', async ({ page }) => {
  await page.goto('/components/form-fields')
  const sidebar = page.locator('aside').filter({ visible: true }).first()
  const section = sidebar.getByRole('button', { name: 'Components', exact: true })
  await section.focus()
  await expect(section).toHaveAttribute('aria-expanded', 'true')
  await page.keyboard.press('Enter')
  await expect(section).toHaveAttribute('aria-expanded', 'false')
  expect(await sidebar.getByRole('link', { name: 'Form fields', exact: true }).evaluate(el => Boolean(el.closest('[inert]')))).toBe(true)
  await page.keyboard.press('Tab')
  await expect(sidebar.getByRole('button', { name: 'Testing', exact: true })).toBeFocused()
  await page.keyboard.press('Shift+Tab')
  await page.keyboard.press('Enter')
  await expect(section).toHaveAttribute('aria-expanded', 'true')
  await expect(sidebar.getByRole('link', { name: 'Form fields', exact: true })).toBeVisible()
  await page.setViewportSize({ width: 390, height: 844 })
  const menu = page.getByRole('button', { name: 'Menu', exact: true })
  await expect(menu).toHaveAttribute('aria-expanded', 'false')
  await menu.focus()
  await page.keyboard.press('Enter')
  await expect(menu).toHaveAttribute('aria-expanded', 'true')
  await expect(page.locator('article')).toHaveAttribute('inert', '')
  await page.locator('#playbook-mobile-navigation').getByRole('combobox').focus()
  await page.keyboard.press('Escape')
  await expect(menu).toHaveAttribute('aria-expanded', 'false')
  await expect(menu).toBeFocused()
  await expect(page.locator('article')).not.toHaveAttribute('inert', '')
  await expect(page.locator('#playbook-mobile-navigation')).toHaveAttribute('inert', '')
})
