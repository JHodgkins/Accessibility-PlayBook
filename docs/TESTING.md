# Testing and accessibility

The playbook targets WCAG 2.2 Level AA for its interface. Automated checks support
that target but do not establish conformance or replace independent evaluation.

## Run the checks

Use Node.js 22 and install the browser before running the quality gate:

```bash
npm ci
npx playwright install chromium
npm run check
```

To run individual checks, use `npm run lint`, `npm run build` and
`npm run test:a11y`. Browser tests require an existing production build.

## Automated coverage

- Content validation protects the canonical navigation and required pages.
- Browser checks inspect rendered headings, main landmarks, internal routes and fragments.
- axe checks selected WCAG A/AA rules across the content pages.
- Interaction tests cover search, skip links, navigation disclosures, mobile dismissal
  and the documented modal, accordion and tab examples.
- Layout checks cover selected pages at narrow widths, plus dark mode and emulated
  forced colours.

The CI workflow runs the same quality gate and retains test reports and failure
traces. Generated artefacts are excluded from version control.

## Review limitations

Independent expert approval and a complete manual accessibility review remain
outstanding. Before making a conformance claim or adopting the playbook as an
organisation's baseline, evaluate:

1. Full keyboard journeys, including reverse navigation, code copying and theme controls.
2. Screen-reader navigation through headings, landmarks, tables, code, search and page links.
3. Actual 200% and 400% browser zoom, OS magnification and focus visibility.
4. Navigation and content on physical mobile devices with assistive technology.
5. System high-contrast modes, alongside browser forced-colour emulation.
6. Component guidance and standards applicability with an accessibility specialist.

A narrow viewport does not substitute for browser zoom. An accessibility-tree snapshot
does not substitute for operating a screen reader. Record observed results, coverage
gaps and defects using the [test-record template](../content/resources/templates.mdx).

The playbook's AT matrix, release reports and exception examples are illustrative.
They must not be presented as executed tests or as proof of conformance.
