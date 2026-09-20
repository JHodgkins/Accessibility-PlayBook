# QA record — 20 September 2026

## Scope and evidence

This is an agent-led content, source and browser review of the POC. It is not an
independent accessibility audit or a declaration of WCAG/EN conformance.

Environment: macOS arm64, Node.js 22.14.0, Next.js 15.5.25, Nextra 4.6.1, React 19.1.1,
Playwright Chromium 153. Browser checks use the production server, not a dev overlay.
The complete repeatable command is `npm run check` after browser installation.

- Canonical structure: all ten sections and required pages checked, plus the case study.
- Content: 58 MDX pages reviewed for purpose, useful guidance, terminology and cross-links.
- Component review: all six follow the template; form/dialog standards references use
  W3C and the explicitly versioned ETSI V3.2.1 PDF. Independent expert approval remains open.
- Automated page review: rendered headings, main landmarks, internal routes and axe
  A/AA checks across every content route. Fragment checks inspect rendered target IDs.
- Interaction review: skip link; sidebar state and hidden content; mobile open,
  navigation, Escape and focus restoration; indexed search; isolated modal, accordion
  and tab examples, including repeated dialog cancellation after confirmation.
- Layout review: 320 CSS-pixel reflow on home, form fields, dialogs and ownership table;
  desktop screenshots; a dark-theme scan and forced-colours focus check.
- Screenshots and accessibility snapshots are generated under `test-results/` for local
  review. They are QA artefacts, not permanent portfolio images, and are regenerated
  each run. CI retains the HTML report and failure traces for 14 days.

## Issues corrected during review

1. Nextra/Zod incompatibility caused every route to fail prerendering: pin Zod 4.3.6.
2. Vulnerable transitive PostCSS and xmldom versions: patched overrides and lockfile.
3. Unnamed optional page-copy menu: disabled through the theme configuration.
4. Link contrast on striped tables and syntax-token contrast: adjusted colours and
   high-contrast Shiki themes; dark and light checks included.
5. Unlabelled disabled Markdown checkboxes: use static checklist prompts.
6. Home cards could exceed narrow containers: constrain their minimum grid width.
7. Homepage hid the canonical sidebar: use the documentation layout for Home.
8. Theme navigation omitted expanded state and left hidden content interactive:
   reviewed patches expose state and apply inertness, plus mobile Escape/background
   handling and resize reset.
9. Skip-link target was not focusable: patch adds a negative tabindex.

Dependency patches are version-specific and fail installation if they stop applying.
After editing a patch, clear `.next/cache` before rebuilding; webpack can otherwise
reuse pre-patch dependency code. Do not change a test to accept an actual barrier.

## Remaining manual acceptance

The following require a human evaluator using real assistive technology. They were
not executed by browser automation and must not be marked complete from this record.

1. Navigate all sections by keyboard, including reverse travel, code-copy controls,
   theme selection, previous/next links and every mobile navigation state.
2. With VoiceOver/Safari and the product's agreed Windows combination, review home,
   sidebar, headings, landmarks, tables, code examples, search and previous/next links.
3. At actual 200% and 400% browser zoom, check reflow, focus, sticky obstructions and
   scrolling. A 320px viewport is a proxy, not a browser-zoom or OS-magnifier test.
4. On physical iOS and Android devices, check navigation, page headings/contents,
   code and table overflow with the respective screen readers.
5. Review Windows high-contrast mode and OS magnification. Chromium emulation only
   covers part of this experience.
6. Have the accessibility/domain reviewer approve the form and dialog deep dives,
   standards applicability and organisational examples.

Use the test-record template in `content/resources/templates.mdx`. Record tester,
date, build, environment versions, steps, observed result and linked defects. A failure
keeps the related acceptance item open; untested conditions are not passes.

## Maintenance and delivery limits

- The illustrative AT matrix and release/exception examples are not executed evidence.
- Nextra's transitive `mathjax-full` and the compatible ESLint 9 line have upstream
  deprecation notices. Installation audit currently reports no vulnerabilities;
  deprecation and vulnerability status are different measures.
- No remote push, hosted deployment, branch-protection configuration or CI run on
  GitHub has been performed. The repository URL was supplied by the project owner.
- Per-page edit links remain disabled until the remote contains the target branch.
- POC completion stays open until the required human smoke test and approvals exist.
