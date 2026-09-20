# PLAN.md

This is the implementation tracker for the Accessibility Playbook POC.

Only mark an item complete after the corresponding work is actually delivered and
reviewed.

## Phase 1 — Framework and repository

- [x] Adopt Next.js as the application framework.
- [x] Adopt Nextra 4 and the Nextra Docs Theme.
- [x] Use the Nextra `content/` MDX convention.
- [x] Add root application layout.
- [x] Add Nextra catch-all content route.
- [x] Add `mdx-components.jsx`.
- [x] Add package scripts.
- [x] Add initial global accessibility-oriented CSS.
- [x] Run `npm install`.
- [x] Run `npm run build` in the target development environment.
- [ ] Resolve any framework/version warnings.
- [x] Commit lockfile.

## Phase 2 — Complete polished architecture

- [x] Getting started section.
- [x] Operating model section.
- [x] Standards section.
- [x] Design section.
- [x] Development section.
- [x] Components section.
- [x] Testing section.
- [x] Remediation section.
- [x] Delivery section.
- [x] Resources section.
- [x] Add `_meta.js` ordering for every section.
- [x] Review sidebar wording after running the site.
- [x] Review mobile navigation behaviour.

## Phase 3 — Seed content

- [x] Homepage with role entry points.
- [x] Purpose and scope.
- [x] Audience overview.
- [x] How-to-use guidance.
- [x] Roles and responsibilities.
- [x] Delivery lifecycle.
- [x] Definition of Done.
- [x] Escalation and exceptions.
- [x] WCAG overview.
- [x] EN 301 549 overview.
- [x] Organisation baseline.
- [x] Testing baseline.
- [x] Seed design guidance.
- [x] Seed development guidance.
- [x] Seed all component pages.
- [x] Seed all testing pages.
- [x] Seed remediation pages.
- [x] Seed delivery-control pages.
- [x] Seed resources.

## Phase 4 — Deep dive: Form fields

- [x] User needs.
- [x] Requirements.
- [x] Keyboard behaviour.
- [x] Screen-reader expectations.
- [x] Zoom/magnification.
- [x] Voice-control consideration.
- [x] Native HTML example.
- [x] Invalid-state example.
- [x] Common failures.
- [x] Testing procedure.
- [x] Acceptance-criteria example.
- [x] Add verified WCAG 2.2 mappings.
- [x] Add verified EN 301 549 mappings.
- [x] Add related-guidance links.
- [ ] Expert content review.

## Phase 5 — Deep dive: Modal dialogs

- [x] User needs.
- [x] Required behaviour.
- [x] Focus model.
- [x] Keyboard behaviour.
- [x] Screen-reader expectations.
- [x] Zoom/magnification.
- [x] Native dialog example.
- [x] Test procedure.
- [x] Common failures.
- [x] Acceptance-criteria example.
- [x] Add fuller implementation example.
- [x] Verify current platform support guidance.
- [x] Add verified standards mappings.
- [ ] Expert content review.

## Phase 6 — Operating-model polish

- [x] Add a RACI-style ownership view if it adds value.
- [x] Add accessible lifecycle diagram or text equivalent.
- [x] Add example evidence produced at each lifecycle stage.
- [x] Refine Definition of Done for different product risks.
- [x] Add exception review/expiry example.

## Phase 7 — Component expansion

- [x] Expand Buttons to full component template.
- [x] Expand Accordions to full component template.
- [x] Expand Tabs to full component template.
- [x] Expand Tables to full component template.
- [x] Add cross-links among patterns, development guidance and tests.

## Phase 8 — Testing-method polish

- [x] Define supported AT/browser matrix as an illustrative example.
- [x] Add screen-reader test-record template.
- [x] Add keyboard test-record template.
- [x] Add magnification test-record template.
- [x] Add mobile test-record template.
- [x] Add automation-in-CI example.
- [x] Add UAT scenario examples.

## Phase 9 — Remediation and delivery polish

- [x] User-impact severity model.
- [x] Example fix patterns.
- [x] Retest workflow.
- [x] Acceptance-criteria examples.
- [x] Release-gate example.
- [x] Risk-acceptance model.
- [x] Reporting concepts.
- [x] Add worked end-to-end defect case study.
- [x] Add example accessibility release report.

## Phase 10 — Resources

- [x] Designer checklist.
- [x] Developer checklist.
- [x] QA release checklist.
- [x] Defect template.
- [x] Component-specification template.
- [x] Risk-acceptance pointer.
- [x] Tool categories.
- [x] Glossary seed.
- [x] Verify and add authoritative external links.
- [x] Expand glossary as new terminology appears.

## Phase 11 — Site accessibility QA

Browser-based evidence and remaining human checks are distinguished in `docs/QA.md`.
Checked navigation/reflow items have Chromium evidence; this does not complete the
manual screen-reader, physical-device or actual browser-zoom review.

### Keyboard
- [ ] Navigate the full site without a mouse.
- [ ] Verify visible focus.
- [x] Verify sidebar/menu operation.
- [x] Verify search if enabled.
- [ ] Check for keyboard traps.

### Screen reader
- [ ] Smoke-test homepage.
- [ ] Smoke-test sidebar.
- [ ] Check headings and landmarks.
- [ ] Check tables.
- [ ] Check code examples.
- [ ] Check previous/next navigation.

### Low vision
- [ ] Test 200% zoom.
- [ ] Test 400% zoom.
- [x] Test narrow reflow.
- [ ] Test high contrast/forced colours.
- [ ] Review focus visibility at zoom.

### Mobile
- [ ] Test navigation.
- [ ] Test page TOC.
- [ ] Check code block overflow.
- [ ] Check tables.

## Phase 12 — Engineering quality

- [x] Add linting strategy.
- [x] Add internal-link checker.
- [x] Add automated accessibility smoke test.
- [x] Add CI workflow.
- [x] Make build/check failures visible in CI.
- [x] Add deployment configuration.
- [x] Document deployment.

## Phase 13 — Portfolio polish

- [x] Replace placeholder repository links with real project repository.
- [x] Add an accessible architecture visual with text equivalent.
- [x] Add a short “case study” page explaining design decisions.
- [ ] Add screenshots only where they add value.
- [x] Review tone for interview/public portfolio context.
- [x] Remove any unfinished notes.
- [x] Review spelling and terminology.
- [x] Confirm all pages provide genuine value.

## Phase 14 — Final acceptance

- [x] `npm install` succeeds.
- [x] `npm run build` succeeds.
- [x] Navigation matches REQUIREMENTS.md.
- [x] No broken internal links.
- [ ] Form-field deep dive approved.
- [ ] Modal-dialog deep dive approved.
- [ ] Manual accessibility smoke test complete.
- [x] Known limitations documented.
- [x] README matches delivered project.
- [x] AGENTS.md matches agent workflow.
- [x] REQUIREMENTS.md matches delivered scope.
- [x] PLAN.md accurately reflects completion.

**POC COMPLETE:** [ ]


## Review evidence and remaining acceptance — 20 September 2026

Implementation and agent content review cover all phases. `docs/QA.md` records the
browser checks, corrected theme failures, environment and manual handoff procedure.
Final local validation passed: installation with zero audit vulnerabilities, lint,
production build, search indexing and 69 browser tests. The implementation and
lockfile were committed locally as `f3a8703`; no remote push was performed.
The canonical structure now has 58 content pages including a supplementary case study.
`REQUIREMENTS.md` records that addition; no canonical section or page was removed.

The framework build failure was corrected with a Zod override. Transitive vulnerability
fixes are locked. The warning-resolution item remains open for Nextra's deprecated
MathJax dependency and the compatible ESLint line's deprecation notice. Do not apply
unreviewed major upgrades to clear these notices.

Screenshots are generated for QA review only. The optional portfolio-screenshot item
remains open because static images currently add less value than the working site and
accessible text architecture. CI/deployment configuration is implemented and locally
reviewed; a hosted CI run, branch protection, remote publication and deployment have
not been performed.

Expert content approval and human accessibility smoke testing remain open. Automated
checks and source review are not substitutes. **POC COMPLETE remains unchecked.**
