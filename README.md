# Accessibility Playbook

A proof of concept showing how accessibility expertise can become practical,
shared guidance across the product-delivery lifecycle.

The playbook connects ownership, design, implementation, testing, remediation and
release decisions. It serves product and delivery teams, designers, developers,
QA, accessibility specialists and organisational stakeholders.

Built with **Next.js App Router, Nextra 4 and the Nextra Docs Theme**, with MDX
content and navigation stored in `content/`.

## Playbook architecture

The site is organised into ten sections. Each description explains what the section
contains, who it serves and why it belongs in the playbook. Page links open the
corresponding source guidance on GitHub.


### Getting started

**What it is:** Orientation explaining the purpose, scope, intended audiences and
conventions used by the playbook.

**Who it is for:** Everyone.

**Why it exists:** Readers need to understand what the playbook is, what it is not and
where to begin before they encounter detailed accessibility guidance.

**Pages:**

- [Overview](content/getting-started/index.mdx)
- [Purpose and scope](content/getting-started/purpose.mdx)
- [Who this playbook is for](content/getting-started/audiences.mdx)
- [How to use the playbook](content/getting-started/how-to-use.mdx)
- [Building the playbook](content/getting-started/case-study.mdx)

### Operating model

**What it is:** The process and ownership model for embedding accessibility into
discovery, requirements, design, development, QA, UAT, release and post-release work.

**Who it is for:** Sponsors, Product, Delivery, Design, Engineering, QA, Accessibility,
Risk and Governance teams.

**Why it exists:** Accessibility becomes inconsistent when it is treated as a final
test performed by one specialist. The operating model makes responsibilities and
checkpoints explicit.

**Pages:**

- [Overview](content/operating-model/index.mdx)
- [Roles and responsibilities](content/operating-model/roles-and-responsibilities.mdx)
- [Delivery lifecycle](content/operating-model/delivery-lifecycle.mdx)
- [Definition of Done](content/operating-model/definition-of-done.mdx)
- [Escalation and exceptions](content/operating-model/escalation-and-exceptions.mdx)

### Standards

**What it is:** Practical context for WCAG 2.2, EN 301 549 and the organisation's own
testing/accessibility baseline.

**Who it is for:** Accessibility specialists, Product, Design, Development, QA, Legal,
Risk and Procurement.

**Why it exists:** Teams need to know what requirements underpin the playbook without
every reader independently interpreting complete technical standards.

**Pages:**

- [Overview](content/standards/index.mdx)
- [WCAG 2.2](content/standards/wcag-2-2.mdx)
- [EN 301 549](content/standards/en-301-549.mdx)
- [Organisation requirements](content/standards/organisational-requirements.mdx)
- [Testing baseline](content/standards/testing-baseline.mdx)

### Design

**What it is:** Preventative accessibility guidance used before implementation.

**Who it is for:** UX/UI designers, content designers, product teams and design
systems.

**Why it exists:** Many accessibility barriers originate in design decisions.
Preventing them is cheaper and more reliable than finding them after build.

**Pages:**

- [Overview](content/design/index.mdx)
- [Colour and contrast](content/design/colour-and-contrast.mdx)
- [Focus states](content/design/focus-states.mdx)
- [Forms](content/design/forms.mdx)
- [Responsive design](content/design/responsive-design.mdx)
- [Error handling](content/design/error-handling.mdx)

### Development

**What it is:** Engineering guidance for semantic HTML, accessible names, keyboard
behaviour, WAI-ARIA and focus management.

**Who it is for:** Developers, technical leads, architects, design-system engineers
and technically focused QA.

**Why it exists:** Engineers need implementation guidance that translates
accessibility requirements into code and interaction behaviour.

**Pages:**

- [Overview](content/development/index.mdx)
- [Semantic HTML](content/development/semantic-html.mdx)
- [Accessible names](content/development/accessible-names.mdx)
- [Keyboard interaction](content/development/keyboard-interaction.mdx)
- [WAI-ARIA](content/development/aria.mdx)
- [Focus management](content/development/focus-management.mdx)

### Components

**What it is:** Shared specifications describing how common UI components should
behave visually, with keyboard input and with assistive technology.

**Who it is for:** Designers, developers, QA, design-system teams and accessibility
specialists.

**Why it exists:** Design, engineering and testing need the same definition of
“correct” behaviour.

**Pages:**

- [Overview](content/components/index.mdx)
- [Form fields](content/components/form-fields.mdx)
- [Buttons](content/components/buttons.mdx)
- [Modal dialogs](content/components/modal-dialogs.mdx)
- [Accordions](content/components/accordions.mdx)
- [Tabs](content/components/tabs.mdx)
- [Tables](content/components/tables.mdx)

Form fields and modal dialogs provide the most detailed component examples.

### Testing

**What it is:** A repeatable evaluation methodology covering keyboard, screen readers,
magnification/zoom, mobile, automation and UAT.

**Who it is for:** Accessibility test engineers, QA, developers performing self-checks
and UAT teams.

**Why it exists:** Teams need to know how to verify expected accessible behaviour and
where automated testing stops being sufficient.

**Pages:**

- [Overview](content/testing/index.mdx)
- [Keyboard testing](content/testing/keyboard.mdx)
- [Screen-reader testing](content/testing/screen-readers.mdx)
- [Magnification and zoom](content/testing/magnification-and-zoom.mdx)
- [Mobile accessibility](content/testing/mobile.mdx)
- [Automated testing](content/testing/automated-testing.mdx)
- [UAT guidance](content/testing/uat.mdx)

### Remediation

**What it is:** Guidance for understanding user impact, assigning severity, fixing
common failures and verifying fixes.

**Who it is for:** QA, developers, designers, Product and Accessibility.

**Why it exists:** Finding an issue is only the first step. Teams need a consistent
way to prioritise and correct barriers.

**Pages:**

- [Overview](content/remediation/index.mdx)
- [Common failures](content/remediation/common-failures.mdx)
- [Severity model](content/remediation/severity-model.mdx)
- [Fix examples](content/remediation/fix-examples.mdx)
- [Retesting](content/remediation/retesting.mdx)

### Delivery

**What it is:** Accessibility controls integrated into ordinary product management:
acceptance criteria, release gates, risk acceptance and reporting.

**Who it is for:** Product owners, business analysts, delivery managers, QA leads,
accessibility specialists and senior decision makers.

**Why it exists:** Accessibility becomes sustainable when it participates in the same
delivery decisions as security, quality and other product risks.

**Pages:**

- [Overview](content/delivery/index.mdx)
- [Accessibility acceptance criteria](content/delivery/acceptance-criteria.mdx)
- [Release gates](content/delivery/release-gates.mdx)
- [Risk acceptance](content/delivery/risk-acceptance.mdx)
- [Reporting](content/delivery/reporting.mdx)

### Resources

**What it is:** Reusable checklists, templates, tool guidance, glossary entries and
further-reading references.

**Who it is for:** All delivery roles.

**Why it exists:** Reusable assets reduce repeated explanation and make good practice
easier to adopt consistently.

**Pages:**

- [Overview](content/resources/index.mdx)
- [Checklists](content/resources/checklists.mdx)
- [Templates](content/resources/templates.mdx)
- [Tools](content/resources/tools.mdx)
- [Glossary](content/resources/glossary.mdx)
- [Further reading](content/resources/further-reading.mdx)

## How the documentation types work together

```text
Policy / organisational standard
        │
        │  What must we achieve?
        ▼
Accessibility playbook
        │
        │  How do we make it happen?
        ▼
Component specifications and patterns
        │
        │  How should interfaces behave?
        ▼
Developer guidance
        │
        │  How do we implement them?
        ▼
Acceptance criteria
        │
        │  What must be true for this feature?
        ▼
Testing guidance
        │
        │  How do we verify it?
        ▼
Remediation guidance
        │
        │  How do we fix failures?
        ▼
Release, risk and reporting
           How do we manage outcomes over time?
```

Training and capability building sit across the whole model.


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
| `.github/workflows/` | Quality checks and GitHub Pages deployment |

Generated builds, search indexes, test reports and local settings are excluded from
version control. The lockfile is included for reproducible installations.

## Maintenance and deployment

See [Deployment](docs/DEPLOYMENT.md) for GitHub Pages setup and the documentation
editing workflow, plus alternative Vercel and Node hosting. Successful checks on
pushes to `main` automatically publish the static site to
[the playbook website](https://jhodgkins.github.io/Accessibility-PlayBook/).
The Pages build exports the website and search index to `out/`.

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
