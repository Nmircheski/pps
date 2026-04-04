# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Layout

This is an NX monorepo for **Promo Paper Solutions (PPS)**, an Angular 21 frontend with an Azure Functions API backend (located at `../api/` — one level above the monorepo root).

```
pps/          ← NX monorepo root (this directory)
  apps/
    pps/      ← Main Angular app
    pps-e2e/  ← Playwright E2E tests
  libs/
    about-us/feature-about-us/
    contact/feature-contact/
    home/feature-home/
    products/feature-products/
    ui/       ← Shared UI components (banner, button, card, navbar, footer, etc.)
../api/       ← Azure Functions API (separate Node.js project)
  src/functions/contactForm.ts   ← Single function: handles contact form email via SMTP
```

## Commands

All frontend commands run from the `pps/` monorepo root:

```bash
yarn start                  # Dev server at http://localhost:4200
yarn build                  # Production build → dist/apps/pps/
yarn build:azure            # Production build → ./dist/ (for Azure deployment)
yarn nx test pps            # Unit tests for the app
yarn nx test <lib-name>     # Unit tests for a specific library (e.g., feature-home)
yarn nx lint pps            # Lint the app
yarn nx e2e pps-e2e         # Run Playwright E2E tests
yarn nx run pps:test --testFile=path/to/spec.ts  # Run a single test file
```

Azure Function commands run from `../api/`:

```bash
npm run build               # Compile TypeScript → dist/
npm start                   # Build + start local Functions runtime (requires azure-functions-core-tools)
```

## Architecture

**Frontend (Angular 21 standalone components):**
- Routes are lazy-loaded via `loadChildren()` in `apps/pps/src/app/app.routes.ts`
- Feature libs each export a route config (`featureXxxRoutes`) and a set of standalone components
- Shared UI components live in `libs/ui/` and are imported directly by feature components
- Styling uses Tailwind CSS + SCSS; some components use `ViewEncapsulation.None`
- Path aliases (e.g., `@pps/ui/button`, `@pps/feature-home`) are defined in `tsconfig.base.json`

**Backend (`../api/`):**
- Single Azure Function `sendContactEmail` in `src/functions/contactForm.ts`
- Uses `nodemailer` to send emails via SMTP
- Required env vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `RECIPIENT_EMAIL`, `ALLOWED_ORIGIN`
- Local settings go in `../api/local.settings.json` (not committed)

**Deployment:**
- Frontend → Azure Static Web Apps (config: `apps/pps/src/azure/staticwebapp.config.json`)
- API → Azure Functions, wired to the Static Web App via GitHub Actions (`.github/workflows/`)
- CI/CD: `yarn build:azure` outputs to `./dist` which the workflow picks up

## NX Module Boundaries

NX enforces import rules via `.eslintrc.json`. Libraries should only be imported via their path aliases, not by relative paths crossing library boundaries.

## Content Language

Application UI content is in **Macedonian**.
