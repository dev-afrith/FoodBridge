---
name: motion-design
description: Provide guidelines and implementation steps for adding motion, animation, and interactive transitions to the FoodBridge website.
---

# Motion Design Skill

## Goal
Create a cohesive motion language that enhances user experience, communicates state, and adds polish to the FoodBridge site without compromising performance.

## Scope
- Define animation principles and easing curves.
- Provide a token system for durations, delays, and spring parameters.
- Show how to implement motion using CSS, Framer Motion, or Web Animations API.
- Recommend best‑practice patterns (enter/exit, hover, feedback, loading spinners).
- Ensure accessibility (prefers‑reduced‑motion support).

## Actionable Steps
1. **Principles Document** – Write a short `motion-principles.md` covering consistency, purpose, and performance.
2. **Design Tokens** – Create `motion-tokens.json` with values:
   ```json
   {"duration": {"short": "150ms", "medium": "300ms", "long": "500ms"},
    "easing": {"easeOut": "cubic-bezier(0.22,1,0.36,1)"},
    "spring": {"stiffness": 150, "damping": 20}
   }
   ```
3. **CSS Framework** – Add utility classes (e.g., `.transition-fade`, `.animate-slide-up`) using the token values.
4. **Component Library** – Provide example React components using **Framer Motion** (or plain CSS) for:
   - Button hover / press
   - Card entrance
   - Modal overlay fade
   - Loading skeleton shimmer
5. **Reduced‑Motion Support** – Detect `prefers-reduced-motion` media query and disable non‑essential animations.
6. **Performance Audit** – Use Chrome DevTools to verify that animations stay on the compositor layer (transform/opacity). Document findings.
7. **Testing** – Add visual regression tests (Storybook + Chromatic) that capture key motion states.
8. **Documentation** – Write `docs/motion-design.md` summarizing token usage, component examples, and accessibility notes.

## Deliverables
- `motion-principles.md`
- `motion-tokens.json`
- CSS utility file (`src/styles/motion.css`).
- Example component snippets in `src/components/animations/`.
- Accessibility checklist for motion.
- Documentation `docs/motion-design.md`.

## Usage
Run this skill after the UI components exist to layer motion consistently across the site.

