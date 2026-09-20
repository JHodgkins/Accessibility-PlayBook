# REQUIREMENTS.md

## Product

Accessibility Playbook POC

## Goal

Create a polished, working Next.js/Nextra documentation site that demonstrates how
accessibility can be embedded into the complete product-delivery lifecycle.

The POC should communicate both technical accessibility expertise and the ability to
scale that expertise across an organisation.

## Framework requirements

The POC must use:

- Next.js with the App Router;
- Nextra 4;
- Nextra Docs Theme;
- MDX content in the Nextra `content/` directory;
- `_meta.js` files to define documentation order/navigation.

The site must build with `npm run build`.

## Canonical information architecture

### Getting started
- Overview
- Purpose and scope
- Who this playbook is for
- How to use the playbook
- Building the playbook (supplementary portfolio case study)

### Operating model
- Overview
- Roles and responsibilities
- Delivery lifecycle
- Definition of Done
- Escalation and exceptions

### Standards
- Overview
- WCAG 2.2
- EN 301 549
- Organisation requirements
- Testing baseline

### Design
- Overview
- Colour and contrast
- Focus states
- Forms
- Responsive design
- Error handling

### Development
- Overview
- Semantic HTML
- Accessible names
- Keyboard interaction
- WAI-ARIA
- Focus management

### Components
- Overview
- Form fields
- Buttons
- Modal dialogs
- Accordions
- Tabs
- Tables

### Testing
- Overview
- Keyboard testing
- Screen-reader testing
- Magnification and zoom
- Mobile accessibility
- Automated testing
- UAT guidance

### Remediation
- Overview
- Common failures
- Severity model
- Fix examples
- Retesting

### Delivery
- Overview
- Accessibility acceptance criteria
- Release gates
- Risk acceptance
- Reporting

### Resources
- Overview
- Checklists
- Templates
- Tools
- Glossary
- Further reading

No top-level section should be removed without deliberately revising these requirements.

## Audience requirements

The playbook must serve:
- executive sponsors and senior stakeholders;
- product owners;
- business analysts;
- programme/delivery managers;
- designers;
- content designers;
- developers;
- technical leads/architects;
- QA and accessibility test engineers;
- UAT testers;
- design-system teams;
- accessibility specialists;
- legal/risk/compliance;
- procurement;
- learning/enablement teams.

## Content requirements

The site must demonstrate:
- roles and accountability;
- lifecycle integration;
- design guidance;
- implementation guidance;
- component specifications;
- keyboard testing;
- screen-reader testing;
- zoom/magnification;
- mobile considerations;
- automated-test limitations;
- user-impact based severity;
- remediation;
- accessibility acceptance criteria;
- release gates;
- risk acceptance;
- reporting;
- reusable templates/checklists.

## Deep-dive requirements

### Form fields

Must include:
- user needs;
- labels and accessible names;
- required/invalid state;
- instructions and errors;
- keyboard behaviour;
- screen-reader expectations;
- magnification/zoom;
- voice control;
- HTML examples;
- test procedure;
- common failures;
- acceptance criteria;
- standards context.

### Modal dialogs

Must include:
- accessible name;
- semantics;
- opening focus;
- background interaction;
- keyboard operation;
- dismissal;
- focus restoration;
- screen-reader expectations;
- magnification/zoom;
- implementation example;
- testing;
- common failures;
- acceptance criteria.

## Site accessibility requirements

The POC should target WCAG 2.2 Level AA for its own interface.

Review:
- keyboard access;
- visible focus;
- focus order;
- headings;
- landmarks;
- descriptive links;
- contrast;
- 200% and 400% zoom;
- reflow;
- screen-reader navigation;
- mobile navigation;
- high contrast/forced colours where practical;
- reduced motion if motion is introduced.

## Content quality

The site must not:
- be an empty skeleton;
- be a re-listing of WCAG;
- imply automated testing proves conformance;
- use unexplained jargon where plain English is available;
- use inaccessible live examples to demonstrate failures.

## POC completion criteria

The POC is complete when:
- `npm run build` passes;
- all canonical sections are present;
- the deep-dive pages are polished;
- navigation is understandable;
- no knowingly broken internal links remain;
- the site has completed a manual accessibility smoke test;
- README, AGENTS, REQUIREMENTS and PLAN match the delivered implementation.
