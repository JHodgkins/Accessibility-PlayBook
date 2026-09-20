# Accessibility Playbook

A proof of concept showing how accessibility expertise can become practical,
shared guidance across the product-delivery lifecycle.

The playbook connects ownership, design, implementation, testing, remediation and
release decisions. It serves product and delivery teams, designers, developers,
QA, accessibility specialists and organisational stakeholders.

Built with **Next.js App Router, Nextra 4 and the Nextra Docs Theme**, with MDX
content and navigation stored in `content/`.

## Explore the playbook

| Section | What it covers |
| --- | --- |
| Getting started | Purpose, audiences, reading paths and the project case study |
| Operating model | Responsibilities, lifecycle checkpoints and exceptions |
| Standards | WCAG 2.2, EN 301 549 and an illustrative organisation baseline |
| Design | Contrast, focus, forms, responsive layouts and errors |
| Development | Semantic HTML, accessible names, keyboard operation and ARIA |
| Components | Form fields, buttons, modal dialogs, accordions, tabs and tables |
| Testing | Keyboard, screen readers, zoom, mobile, automation and UAT |
| Remediation | User-impact severity, fixes and retesting |
| Delivery | Acceptance criteria, release gates, risk acceptance and reporting |
| Resources | Checklists, templates, tools, glossary and authoritative references |

Form fields and modal dialogs provide detailed component examples. Worked ownership,
defect and release scenarios show how technical guidance supports delivery decisions.
See [Building the playbook](content/getting-started/case-study.mdx) for the design rationale.

Policy defines requirements; the playbook explains how teams operationalise them.
Component specifications, reusable patterns, developer guidance, acceptance criteria,
testing, remediation and training retain distinct purposes and cross-link to each other.

## Run locally

Use Node.js 22, then run:

```bash
npm ci
npm run build
npm run dev
```

Open the local address printed in the terminal. The initial build generates the
search index; rebuild after content changes to refresh development search results.

To serve the production build:

```bash
npm run start
```

Installation applies the dependency patches in `patches/`. Include development
dependencies and allow installation scripts so patching and search indexing work.

## Contributing

Edit guidance in `content/` and maintain each section's `_meta.js` navigation.
Preserve the ten sections above, use plain English and cross-link related guidance.
Describe testable behaviour, prefer native HTML in examples and cite authoritative
standards sources. Keep intentionally incorrect examples inside code blocks.

Run the checks before submitting a change:

```bash
npx playwright install chromium
npm run check
```

The checks include JavaScript linting, content and navigation validation, a production
build, search indexing, internal links and browser accessibility tests. Automated
checks complement manual evaluation; they do not establish conformance.
See [Testing and accessibility](docs/TESTING.md) for coverage and review limitations.

## Repository structure

| Path | Purpose |
| --- | --- |
| `app/` | Application layout, routing and styles |
| `content/` | Playbook guidance and navigation metadata |
| `docs/` | Contributor testing and deployment guidance |
| `scripts/` | Content and navigation validation |
| `tests/` | Browser and component-example checks |
| `patches/` | Version-specific dependency accessibility fixes |
| `.github/workflows/` | Continuous integration checks |

Generated builds, search indexes, test reports and local settings are excluded from
version control. The lockfile is included for reproducible installations.

## Maintenance and deployment

See [Deployment](docs/DEPLOYMENT.md) for Vercel and Node hosting. The build command
includes Pagefind indexing; deploying only `.next` omits the search assets in `public`.

Zod is pinned to 4.3.6 for [Nextra compatibility](https://github.com/shuding/nextra/issues/4989).
PostCSS and xmldom overrides select patched transitive versions. Review these overrides
when upgrading the framework.

The dependency patches expose navigation state, prevent interaction with hidden
content, support mobile dismissal and make the skip-link target focusable. Installation
fails if a patch cannot apply. After changing patches, clear `.next/cache` before
rebuilding, then run the browser checks. Remove patches only when upstream replacements
pass the same checks.

The optional page-copy menu is disabled because its trigger lacked an accessible name.
Code-block copying and search remain available. Nextra's MathJax dependency and the
compatible ESLint 9 line have deprecation notices to consider during maintenance.

## Scope and accessibility status

This is an educational proof of concept, not legal advice or a certified conformance
framework. Independent expert review and manual assistive-technology evaluation are
still required. Illustrative test matrices, release reports and risk records describe
a process; they are not evidence of production adoption or user outcomes.
