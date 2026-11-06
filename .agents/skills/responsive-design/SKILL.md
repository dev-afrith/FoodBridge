---
name: responsive-design
description: Provide guidelines and implementation steps to make FoodBridge website adapt gracefully across devices and screen sizes.
---

# Responsive Design Skill

## Goal
Ensure the FoodBridge web interface looks and works flawlessly on smartphones, tablets, laptops, and large‑screen desktops.

## Scope
- Define breakpoints and fluid grid system.
- Create responsive component variants.
- Implement mobile‑first CSS utilities.
- Test layout across common device viewports.
- Optimize images and media for responsive delivery.

## Actionable Steps
1. **Breakpoint Strategy** – Choose a set of widths (e.g., 320‑sm, 640‑md, 1024‑lg, 1440‑xl) and document them in `responsive-config.json`.
2. **Fluid Grid** – Configure Tailwind or CSS Grid with `max-w-full`, `flex`, `grid-template-columns` that use `repeat(auto-fit, minmax(…) )`.
3. **Component Responsiveness** – For each UI component, add responsive variants (e.g., `Button.sm`, `Button.lg`) using utility classes or CSS media queries.
4. **Typography Scaling** – Use `clamp()` or fluid type scales to adjust font sizes per breakpoint.
5. **Image Handling** – Generate `srcset` and `sizes` attributes, or use an image CDN that serves appropriate resolutions.
6. **Testing** – Run Playwright or Cypress visual tests at defined viewport sizes; capture screenshots for regression.
7. **Performance** – Enable lazy loading for off‑screen images and use `picture` element for art direction.
8. **Accessibility Check** – Verify touch target size ≥ 44 px and maintain sufficient color contrast at all breakpoints.
9. **Documentation** – Add a `responsive-design.md` guide describing breakpoints, CSS utilities, and component patterns.

## Deliverables
- `responsive-config.json` with breakpoint definitions.
- Updated component library with responsive classes.
- Visual test suite covering at least 4 viewport sizes.
- Documentation file `docs/responsive-design.md`.

## Usage
Invoke this skill after the base UI components are built to adapt them for all target devices.

