# Accessibility Playbook POC

A portfolio-quality proof of concept showing how accessibility expertise can be
turned into a living organisational playbook.

The site is built with **Next.js + Nextra 4 + Nextra Docs Theme** and stores the
documentation in MDX under `content/`.

## Why Nextra

Nextra provides a documentation-focused layer on top of Next.js. For this POC that
means the project can combine:

- structured MDX documentation;
- generated sidebar navigation;
- page tables of contents;
- React/Next.js when richer examples are needed;
- documentation-as-code workflow;
- a path to deploy like a normal Next.js application.

The POC uses Nextra's `content/` directory convention so content remains easy to
author and is separated cleanly from the application shell.

Repository: [JHodgkins/Accessibility-PlayBook](https://github.com/JHodgkins/Accessibility-PlayBook).

## Run locally

```bash
npm install
npm run dev
```

Use Node.js 22. Then open the local URL printed by Next.js. Run a production build
at least once to generate the search index; development search uses that index and
needs another build after content changes. `npm ci` reproduces the committed lockfile.
Installation applies the reviewed patches in `patches/`; do not use `--ignore-scripts`.
The install environment needs development dependencies for patching and search indexing.

Create a production build with:

```bash
npm run build
npm run start
```

## Project control files

### `AGENTS.md`

The operating instructions for an AI coding agent. It defines the technology
contract, accessibility rules, content conventions, deep-dive templates and quality
bar.

### `REQUIREMENTS.md`

The product requirements. It defines the canonical information architecture,
audiences, mandatory content and completion criteria.

### `PLAN.md`

The checkable delivery plan. It records what is already scaffolded and what still
needs review, expansion or QA.

## Playbook architecture

### Getting started

**What it is:** Orientation explaining the purpose, scope, intended audiences and
conventions used by the playbook.

**Who it is for:** Everyone.

**Why it exists:** Readers need to understand what the playbook is, what it is not and
where to begin before they encounter detailed accessibility guidance.

### Operating model

**What it is:** The process and ownership model for embedding accessibility into
discovery, requirements, design, development, QA, UAT, release and post-release work.

**Who it is for:** Sponsors, Product, Delivery, Design, Engineering, QA, Accessibility,
Risk and Governance teams.

**Why it exists:** Accessibility becomes inconsistent when it is treated as a final
test performed by one specialist. The operating model makes responsibilities and
checkpoints explicit.

### Standards

**What it is:** Practical context for WCAG 2.2, EN 301 549 and the organisation's own
testing/accessibility baseline.

**Who it is for:** Accessibility specialists, Product, Design, Development, QA, Legal,
Risk and Procurement.

**Why it exists:** Teams need to know what requirements underpin the playbook without
every reader independently interpreting complete technical standards.

### Design

**What it is:** Preventative accessibility guidance used before implementation.

**Who it is for:** UX/UI designers, content designers, product teams and design
systems.

**Why it exists:** Many accessibility barriers originate in design decisions.
Preventing them is cheaper and more reliable than finding them after build.

### Development

**What it is:** Engineering guidance for semantic HTML, accessible names, keyboard
behaviour, WAI-ARIA and focus management.

**Who it is for:** Developers, technical leads, architects, design-system engineers
and technically focused QA.

**Why it exists:** Engineers need implementation guidance that translates
accessibility requirements into code and interaction behaviour.

### Components

**What it is:** Shared specifications describing how common UI components should
behave visually, with keyboard input and with assistive technology.

**Who it is for:** Designers, developers, QA, design-system teams and accessibility
specialists.

**Why it exists:** Design, engineering and testing need the same definition of
“correct” behaviour.

The full POC architecture includes:
- Form fields
- Buttons
- Modal dialogs
- Accordions
- Tabs
- Tables

Form Fields and Modal Dialogs are the initial deep dives.

### Testing

**What it is:** A repeatable evaluation methodology covering keyboard, screen readers,
magnification/zoom, mobile, automation and UAT.

**Who it is for:** Accessibility test engineers, QA, developers performing self-checks
and UAT teams.

**Why it exists:** Teams need to know how to verify expected accessible behaviour and
where automated testing stops being sufficient.

### Remediation

**What it is:** Guidance for understanding user impact, assigning severity, fixing
common failures and verifying fixes.

**Who it is for:** QA, developers, designers, Product and Accessibility.

**Why it exists:** Finding an issue is only the first step. Teams need a consistent
way to prioritise and correct barriers.

### Delivery

**What it is:** Accessibility controls integrated into ordinary product management:
acceptance criteria, release gates, risk acceptance and reporting.

**Who it is for:** Product owners, business analysts, delivery managers, QA leads,
accessibility specialists and senior decision makers.

**Why it exists:** Accessibility becomes sustainable when it participates in the same
delivery decisions as security, quality and other product risks.

### Resources

**What it is:** Reusable checklists, templates, tool guidance, glossary entries and
further-reading references.

**Who it is for:** All delivery roles.

**Why it exists:** Reusable assets reduce repeated explanation and make good practice
easier to adopt consistently.

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

## Repository structure

```text
.
├── AGENTS.md
├── REQUIREMENTS.md
├── PLAN.md
├── README.md
├── app/
│   ├── [[...mdxPath]]/
│   │   └── page.jsx
│   ├── globals.css
│   └── layout.jsx
├── content/
│   ├── _meta.js
│   ├── index.mdx
│   ├── getting-started/
│   ├── operating-model/
│   ├── standards/
│   ├── design/
│   ├── development/
│   ├── components/
│   ├── testing/
│   ├── remediation/
│   ├── delivery/
│   └── resources/
├── mdx-components.jsx
├── next.config.mjs
├── package.json
└── scripts/
```

## Development principle

Use **complete architecture, selective depth**.

The navigation should always show a credible mature playbook. Development effort
should then deepen the highest-value examples rather than generating dozens of
superficial pages.

## Delivered examples

The implementation contains operational guidance and worked examples for:

- role-based homepage;
- accessibility lifecycle;
- responsibility model;
- standards/testing baseline;
- design and developer guidance;
- form-field deep dive with versioned standards mappings;
- modal-dialog deep dive with a complete confirmation example;
- buttons, accordions, tabs and tables using the component template;
- testing approaches;
- user-impact severity;
- remediation examples;
- acceptance criteria;
- release gates;
- risk acceptance;
- checklists;
- templates;
- glossary.

The supplementary “Building the playbook” page under Getting started explains the
architecture and design choices. All ten canonical sections and their required pages
remain present. The site contains 58 MDX pages.

Use `PLAN.md` for delivered work and remaining acceptance reviews.

## Checks and maintenance

```bash
npx playwright install chromium
npm run lint
npm run build
npm run test:a11y
# Or run the complete sequence:
npm run check
```

ESLint covers application/configuration JavaScript. The content checker protects the
canonical pages and navigation, requires page metadata/headings and checks internal
routes. Browser checks verify rendered links and anchors, axe rules, keyboard state
transitions, search, reflow and the documented interactive code examples. CI runs the
same checks and retains failure reports. See [QA evidence and remaining manual work](docs/QA.md).

The build generates Pagefind assets under `public/_pagefind`; generated files and
browser reports are ignored by Git. [Deployment instructions](docs/DEPLOYMENT.md)
cover Vercel and Node hosting. No production deployment or remote push is implied by
creating these configuration files.

### Dependency decisions

- Next.js 15.5.25, Nextra 4.6.1 and React 19.1.1 retain the required App Router stack.
- Zod is overridden to 4.3.6 because newer releases reject Nextra's layout validation.
  See [upstream compatibility issue](https://github.com/shuding/nextra/issues/4989).
- PostCSS and xmldom overrides select patched transitive versions; the lockfile records
  the exact resolution. Review overrides when updating the framework.
- Version-specific patches add expanded state to navigation, make hidden navigation
  inert, support mobile Escape/background handling, and make the skip target focusable.
  Browser tests exercise these patches. Remove them only after an upstream replacement
  passes the same tests. `patch-package --error-on-fail` prevents silent patch loss.
- The optional Nextra page-copy menu is disabled because its trigger lacked a name.
  Search and code-block copying remain enabled. High-contrast syntax themes and custom
  link colours address failures found in the browser review.
- Nextra still depends on deprecated `mathjax-full`; ESLint 9 reports its upstream
  support deprecation. Neither is silently upgraded across a major compatibility
  boundary. Track these maintenance warnings in `PLAN.md`.

## Important note

This POC is educational and demonstrative. It is not legal advice, and the standards
mappings should be verified against authoritative sources before the project is
presented as a production conformance framework.
