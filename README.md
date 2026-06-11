# labcibe-home

Public marketing home for **LabCIBE-UNA** (Laboratorio de I+D+i en Ciberseguridad, Universidad Nacional de Costa Rica). It presents the lab and its fraud-reporting initiative, and redirects users that want to file a report to the `labcibe-reports-fe` application.

The visual language (palette, typography, components) mirrors `labcibe-reports-fe` so the two apps feel like one product.

## Stack

- React 19 + TypeScript + Vite 8
- Tailwind CSS v4 (`@tailwindcss/postcss`) with `tailwindcss-animate`
- `react-router-dom`, `framer-motion`, `lucide-react`
- shadcn-style primitives (`Button`, `Card`) via `class-variance-authority` + `tailwind-merge`

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Environment

Copy `.env.example` to `.env` and adjust as needed:

| Variable           | Description                                                                                  | Default                                   |
| ------------------ | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `VITE_REPORTS_URL` | URL the "Reportar fraude" CTAs redirect to (the `/reportar-estafa` route of `labcibe-reports-fe`). | `/reportar-estafa`                        |

Example for local development against a `labcibe-reports-fe` dev server on port 5174:

```
VITE_REPORTS_URL=http://localhost:5174/reportar-estafa
```

## Scripts

| Script           | What it does                  |
| ---------------- | ----------------------------- |
| `npm run dev`    | Start Vite dev server         |
| `npm run build`  | Type-check and build for prod |
| `npm run preview`| Preview the production build  |
| `npm run lint`   | Run ESLint                    |

## Project structure

```
src/
  assets/                 Hero, lab, alerts images
  components/
    landing/              Header, Hero, AboutProject, AboutLab, HowItWorks,
                          Benefits, Alerts, FAQ, Contact, Footer
    ui/                   Button, Card (shadcn-style primitives)
  lib/
    config.ts             VITE_REPORTS_URL constant
    utils.ts              cn() class merger
  pages/
    Landing.tsx           Single-page composition of all landing sections
    NotFound.tsx          404 fallback
  App.tsx                 RouterProvider mount
  router.tsx              Routes (/, *)
  index.css               Tailwind v4 entry + theme tokens
public/
  Logo/                   UNA + social media icons
```
