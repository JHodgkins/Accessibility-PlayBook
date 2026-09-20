import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve('content')
const required = {
  'getting-started': ['index', 'purpose', 'audiences', 'how-to-use'],
  'operating-model': ['index', 'roles-and-responsibilities', 'delivery-lifecycle', 'definition-of-done', 'escalation-and-exceptions'],
  standards: ['index', 'wcag-2-2', 'en-301-549', 'organisational-requirements', 'testing-baseline'],
  design: ['index', 'colour-and-contrast', 'focus-states', 'forms', 'responsive-design', 'error-handling'],
  development: ['index', 'semantic-html', 'accessible-names', 'keyboard-interaction', 'aria', 'focus-management'],
  components: ['index', 'form-fields', 'buttons', 'modal-dialogs', 'accordions', 'tabs', 'tables'],
  testing: ['index', 'keyboard', 'screen-readers', 'magnification-and-zoom', 'mobile', 'automated-testing', 'uat'],
  remediation: ['index', 'common-failures', 'severity-model', 'fix-examples', 'retesting'],
  delivery: ['index', 'acceptance-criteria', 'release-gates', 'risk-acceptance', 'reporting'],
  resources: ['index', 'checklists', 'templates', 'tools', 'glossary', 'further-reading']
}
const failures = []
const fail = message => failures.push(message)
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(file) : [file]
  })
}
const files = walk(root)
const pages = files.filter(file => file.endsWith('.mdx'))
const routes = new Set(pages.map(file => '/' + path.relative(root, file).replace(/\.mdx$/, '').replace(/(^|\/)index$/, '')))
const rootMeta = fs.readFileSync(path.join(root, '_meta.js'), 'utf8')
let previous = -1
for (const [section, names] of Object.entries(required)) {
  const position = rootMeta.indexOf(`"${section}"`)
  if (position < 0 || position <= previous) fail(`Missing or out-of-order canonical section: ${section}`)
  previous = position
  for (const name of names) {
    if (!fs.existsSync(path.join(root, section, name + '.mdx'))) fail(`Missing required page: ${section}/${name}`)
  }
}
for (const dir of [root, ...Object.keys(required).map(section => path.join(root, section))]) {
  const metaPath = path.join(dir, '_meta.js')
  if (!fs.existsSync(metaPath)) { fail(`Missing navigation: ${metaPath}`); continue }
  const source = fs.readFileSync(metaPath, 'utf8')
  const keys = [...source.matchAll(/^\s*"([^"]+)":/gm)].map(match => match[1])
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() || entry.name.endsWith('.mdx')) {
      const key = entry.name.replace(/\.mdx$/, '')
      if (!keys.includes(key)) fail(`Page missing from navigation: ${path.relative(root, dir)}/${key}`)
    }
  }
  for (const key of keys) {
    if (!fs.existsSync(path.join(dir, key)) && !fs.existsSync(path.join(dir, key + '.mdx'))) fail(`Navigation target missing: ${dir}/${key}`)
  }
}
for (const file of pages) {
  const raw = fs.readFileSync(file, 'utf8')
  const text = raw.replace(/^```[^\n]*\n[\s\S]*?^```\s*$/gm, '')
  const name = path.relative(root, file)
  if (!/^---\n[\s\S]*?\ntitle:|^---\ntitle:/m.test(raw)) fail(`Missing title front matter: ${name}`)
  if ((text.match(/^#\s+/gm) || []).length !== 1) fail(`Expected one H1: ${name}`)
  if (/## POC status|replace this list|TODO|TBD/.test(text)) fail(`Unfinished content: ${name}`)
  const links = [...text.matchAll(/\]\(([^\s)]+)(?:\s+"[^"]*")?\)|href="([^"]+)"/g)]
  for (const match of links) {
    const href = match[1] || match[2]
    if (/^(https?:|mailto:|#)/.test(href)) continue
    const sourceRoute = '/' + name.replace(/\.mdx$/, '').replace(/(^|\/)index$/, '')
    const url = new URL(href, `https://playbook.invalid${sourceRoute}`)
    const route = decodeURIComponent(url.pathname).replace(/\/$/, '') || '/'
    if (!routes.has(route)) fail(`Broken internal link in ${name}: ${href}`)
  }
}
if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}
console.log(`Content, canonical navigation and internal route checks passed for ${pages.length} MDX pages.`)
