---
name: frontend-development
description: Provide step‑by‑step instructions for implementing the FoodBridge website frontend using modern frameworks and tooling.
---

# Frontend Development Skill

## Goal
Translate the UI/UX design assets into production‑ready code that is maintainable, performant, and aligned with the project’s technology stack.

## Scope
- Set up the project scaffold (package manager, bundler, linting, testing).
- Implement component architecture (React/Vue/Next.js etc.).
- Integrate state management and API services.
- Configure build pipeline, CI, and deployment.
- Write unit, integration, and visual regression tests.

## Actionable Steps
1. **Initialize Repo** – `npm init -y`, add `vite`/`next` based on chosen framework.
2. **Add Core Dependencies** – React, React‑DOM, TypeScript, Tailwind (or CSS‑in‑JS), ESLint, Prettier.
3. **Project Structure** – Create directories:
   - `src/components/`
   - `src/pages/`
   - `src/hooks/`
   - `src/services/`
   - `src/styles/`
4. **Component Library** – Scaffold reusable UI components matching the design system (Button, Card, Modal, FormInput).
5. **Routing** – Set up client‑side router with routes matching the sitemap.
6. **State Management** – Implement a global store (e.g., Redux Toolkit or Zustand) for user session, cart, and menu data.
7. **API Layer** – Write thin wrappers around backend endpoints (fetch meals, submit orders, auth).
8. **Styling** – Apply Tailwind config or CSS modules using the design tokens from `design-system.json`.
9. **Testing** – Add Jest + React Testing Library tests for each component and Cypress end‑to‑end flows.
10. **Performance** – Enable code‑splitting, lazy‑load images, and set up Lighthouse CI.
11. **CI/CD** – Create GitHub Actions workflow to lint, test, build, and deploy to Vercel/Netlify.
12. **Documentation** – Write a `README.md` with setup, development, and deployment instructions.

## Deliverables
- Fully scaffolded repo with `package.json`.
- Source code under `src/`.
- Test suite with coverage report.
- CI workflow file (`.github/workflows/ci.yml`).
- Deployment instructions.

## Usage
Run this skill after the design hand‑off to start coding the UI. All generated files belong under the project root.

