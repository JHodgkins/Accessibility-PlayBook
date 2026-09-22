import { createServer } from 'node:http'
import { readFile, stat, readdir } from 'node:fs/promises'
import path from 'node:path'
import assert from 'node:assert/strict'
import { chromium, expect } from '@playwright/test'

// Serve the export at its real deployment path, without a Next.js server or SPA fallback.
const base = '/Accessibility-PlayBook'
const root = path.resolve('out')
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.wasm': 'application/wasm', '.json': 'application/json', '.svg': 'image/svg+xml' }
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
    if (!pathname.startsWith(base + '/')) throw new Error('Outside deployment path')
    let file = path.resolve(root, '.' + pathname.slice(base.length))
    if (file !== root && !file.startsWith(root + path.sep)) throw new Error('Outside export')
    if ((await stat(file)).isDirectory()) {
      if (!pathname.endsWith('/')) {
        res.writeHead(301, { Location: pathname + '/' })
        res.end()
        return
      }
      file = path.join(file, 'index.html')
    }
    const body = await readFile(file)
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' })
    res.end(body)
  } catch {
    res.writeHead(404)
    res.end('Not found')
  }
})
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
let browser
try {
  browser = await chromium.launch()
  const page = await browser.newPage()
  const origin = `http://127.0.0.1:${server.address().port}`
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('response', response => {
    if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`)
  })
  const files = await readdir('content', { recursive: true })
  const routes = files.filter(file => file.endsWith('.mdx')).map(file =>
    base + '/' + file.replace(/\.mdx$/, '').replace(/(^|\/)index$/, '').replace(/(.+[^/])$/, '$1/')
  )
  for (const route of routes) {
    const response = await page.goto(origin + route)
    assert.equal(response.status(), 200, route)
    await expect(page.locator('main h1')).toBeVisible()
    for (const href of await page.locator('a[href]').evaluateAll(links => links.map(link => link.getAttribute('href')))) {
      if (href.startsWith('/') && !href.startsWith('//')) {
        assert.ok(routes.includes(new URL(href, origin).pathname), `Invalid exported link: ${href}`)
      }
    }
  }
  await page.goto(origin + base + '/')
  await page.getByRole('link', { name: 'Explore design guidance' }).click()
  await expect(page).toHaveURL(new RegExp(base + '/design/?$'))
  await page.reload()
  await expect(page.locator('main h1')).toBeVisible()
  await page.getByRole('combobox', { name: /search documentation/i }).fill('modal')
  const result = page.getByRole('option').filter({ hasText: /modal dialogs/i }).first()
  await expect(result).toBeVisible({ timeout: 15000 })
  await result.click()
  await expect(page).toHaveURL(new RegExp(base + '/components/modal-dialogs(?:/|#|$)'))
  await page.reload()
  await expect(page.locator('main h1')).toHaveText('Modal dialogs')
  assert.deepEqual(errors, [], 'Export must load without failed resources or browser errors')
  console.log(`Pages export passed: ${routes.length} routes, internal links, navigation, reload and search.`)
} finally {
  await browser?.close()
  await new Promise(resolve => server.close(resolve))
}
