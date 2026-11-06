---
name: accessibility
description: Provide guidelines and concrete steps to ensure FoodBridge website meets WCAG 2.1 AA accessibility standards.
---

# Accessibility Skill

## Goal
Make the FoodBridge website perceivable, operable, understandable, and robust for all users, including those with disabilities.

## Scope
- Semantic HTML structure and ARIA usage.
- Color contrast, keyboard navigation, focus management.
- Screen‑reader testing and accessible component patterns.
- Accessible forms, error handling, and validation messages.
- Compliance verification (automated and manual).

## Actionable Steps
1. **Semantic Foundations** – Use proper heading hierarchy (`<h1>`‑`<h6>`), landmarks (`<nav>`, `<main>`, `<footer>`), and native form elements.
2. **Color Contrast** – Define contrast ratios in the design system (≥ 4.5:1 for normal text, ≥ 3:1 for large text). Add a `color-contrast.json` token file.
3. **Keyboard Navigation** – Ensure all interactive elements are reachable via `Tab`. Implement a visible focus indicator (e.g., `outline: 2px solid var(--color-primary)`).
4. **ARIA Roles & Labels** – Add ARIA attributes where native semantics are insufficient (e.g., `role="alert"`, `aria‑label`, `aria‑describedby`).
5. **Forms Accessibility** – Associate `<label>` with inputs, provide clear error messages, and use `aria-invalid`.
6. **Reduced‑Motion Integration** – Respect `prefers-reduced-motion` (reuse tokens from the Motion Design skill).
7. **Testing Suite** –
   - **Automated**: Run `axe-core` via `npm test:axe` and capture JSON reports.
   - **Screen Reader**: Conduct manual checks with NVDA/VoiceOver.
   - **Keyboard**: Use a script to tab through the site and log focus traps.
8. **Documentation** – Create `docs/accessibility.md` covering the above checklist, token files, and test commands.
9. **Continuous Integration** – Add the axe test to the CI workflow (`.github/workflows/ci.yml`).

## Deliverables
- `color-contrast.json` with token values.
- Accessibility checklist (`accessibility-checklist.md`).
- Test script (`scripts/run-axe.js`).
- Updated CI workflow step for axe.
- Comprehensive guide `docs/accessibility.md`.

## Usage
Invoke this skill after the UI components are built to audit and retrofit any accessibility gaps before launch.

