# AGENTS.md

## Mission

Build and maintain a polished proof-of-concept Accessibility Playbook using
**Next.js + Nextra 4 + the Nextra Docs Theme**.

This repository is a portfolio-quality demonstration of how an accessibility
specialist can turn expert knowledge into scalable organisational guidance.

The site must feel like a credible internal product, not a WCAG checklist.

## Before changing anything

Read, in this order:

1. `AGENTS.md`
2. `REQUIREMENTS.md`
3. `PLAN.md`
4. `README.md`

Treat `REQUIREMENTS.md` as the product contract and `PLAN.md` as the delivery tracker.

Do not mark checklist items complete merely because files were created. A task is
complete only when its content/functionality is implemented and reviewed.

## Technology contract

Use:

- Next.js App Router
- Nextra 4
- `nextra-theme-docs`
- React
- MDX content stored in `content/`
- Nextra `_meta.js` files for ordering and navigation
- Git-compatible documentation-as-code workflow

Do not migrate this POC back to MkDocs.

Nextra 4 uses the Next.js App Router. The `content/` convention is intentionally used
because it keeps documentation content separate from application layout code while
retaining MDX and hot reloading.

## Accessibility-first implementation

The documentation site itself must demonstrate the practices it teaches.

When changing UI, verify:
- keyboard operation;
- visible focus;
- logical focus order;
- semantic headings and landmarks;
- link purpose;
- zoom and reflow;
- contrast;
- forced-colour resilience where practical;
- screen-reader usability;
- reduced-motion preferences when motion is introduced.

Do not add a visually impressive feature if it creates an accessibility regression.

## Information architecture

The canonical top-level structure is:

1. Getting started
2. Operating model
3. Standards
4. Design
5. Development
6. Components
7. Testing
8. Remediation
9. Delivery
10. Resources

All of these sections must remain present.

### Components

The component set is:
- Form fields
- Buttons
- Modal dialogs
- Accordions
- Tabs
- Tables

Form Fields and Modal Dialogs are the initial deep-dive examples. Supporting component
pages can be shorter, but should remain useful rather than empty placeholders.

## Documentation-type boundaries

Maintain these distinctions:

- **Policy / standard:** what the organisation requires.
- **Playbook:** how the organisation operationalises accessibility.
- **Component specification:** how a particular component must behave.
- **Pattern library:** an approved reusable solution.
- **Developer guide:** how engineers implement accessibility.
- **Testing guide:** how accessible behaviour is verified.
- **Remediation guide:** how failures are corrected.
- **Acceptance criteria:** what must be true for a feature to be considered complete.
- **Training:** what a role needs to learn in order to perform its responsibilities.

Cross-link them; do not collapse them into one generic page type.

## Page metadata convention

For substantial operational or technical guidance, include:

```md
**Audience:** Designers, Developers, QA
**Purpose:** Define accessible behaviour for form fields.
**When to use:** Design, implementation, review and testing.
**Owner:** Accessibility / Design System
```

Not every short supporting page needs every field, but deep-dive pages do.

## Component template

Deep-dive component pages should include:

1. Overview
2. User needs
3. Accessibility requirements
4. Visual behaviour
5. Keyboard behaviour
6. Screen-reader behaviour
7. Magnification and zoom
8. Voice-control considerations
9. Developer implementation
10. Code examples
11. Testing procedure
12. Common failures
13. Remediation
14. Acceptance criteria
15. Standards mapping
16. Related guidance

## Writing rules

Use plain English.

Use:
- **must** for required behaviour;
- **should** for strongly recommended behaviour;
- **may** for optional behaviour.

Avoid:
- “ensure accessibility” without saying what needs to happen;
- implying an automated scanner proves accessibility;
- prescribing one exact screen-reader announcement as universal;
- standards quotations when a practical paraphrase is more useful;
- unnecessary jargon.

## Code example rules

Examples must:
- prefer native HTML;
- use ARIA only when needed;
- explain why the pattern works;
- keep incorrect examples inert inside code blocks;
- never put a knowingly inaccessible interactive example into the live site;
- be understandable without colour alone.

## Standards traceability

Reference WCAG 2.2 and EN 301 549 where relevant, but do not reproduce the standards.

When exact normative language matters, link to the authoritative source.

Never invent standards wording or success-criterion mappings.

## POC depth strategy

Use **complete architecture, selective depth**.

Portfolio-quality deep dives:
- Home
- Roles and responsibilities
- Delivery lifecycle
- Testing baseline
- Form fields
- Modal dialogs
- Severity model
- Acceptance criteria
- Risk acceptance
- Templates
- Glossary

Supporting pages must still contain meaningful starter content.

## Change discipline

When changing structure:
- update `_meta.js`;
- update `README.md` if the conceptual model changes;
- update `REQUIREMENTS.md` if scope changes;
- update `PLAN.md` only when real progress changes.

When adding a new page:
- give it a clear purpose;
- identify its audience;
- cross-link related material;
- avoid duplicating content that belongs elsewhere.

## Definition of polished

A reviewer should be able to show this POC to an accessibility lead, product director,
principal engineer or hiring panel and see evidence of:

- accessibility expertise;
- organisational enablement;
- stakeholder awareness;
- information architecture;
- programme thinking;
- technical credibility;
- reusable process design;
- quality assurance;
- maintainability.
