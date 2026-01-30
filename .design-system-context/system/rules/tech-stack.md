# Technology Stack & Constraints

## Purpose
This file lists the **MANDATORY** technologies and libraries for this project.
AI agents must strictly adhere to this stack. Do not introduce new dependencies without explicit permission.

---

## Core Framework
- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Language:** TypeScript (`.tsx`, `.ts`)
- **Package Manager:** `npm` or `pnpm` (Check lockfile)

---

## styling
- **Engine:** [Tailwind CSS](https://tailwindcss.com/)
- **CSS Variables:** Used for theme switching (see `../tokens/colors.md`)
- **Animation:** `tailwindcss-animate` plugin
- **Icons:** [Lucide React](https://lucide.dev/) (`lucide-react`)
  - **Rule:** NEVER import from other icon icons libraries (e.g. FontAwesome, Heroicons).
  - **Rule:** ALWAYS check `../icons/inventory.md` if available, or assume standard Lucide names.

---

## UI Component Library
- **Base:** [shadcn/ui](https://ui.shadcn.com/)
- **Primitives:** [Radix UI](https://www.radix-ui.com/) (headless accessible primitives)
- **Location:** All components must live in `@/components/ui/`
- **Rule:** Do not install full component libraries (MUI, Chakra, Mantine). Use the shadcn pattern of copying source code.

---

## State Management
- **Server State:** React Server Components (RSC) for fetching.
- **Client State:**
  - `React.useState` / `React.useReducer` for local state.
  - `nuqs` (URL state) for searchable/filterable lists.
  - `zustand` for complex global client state (if needed).
- **Forms:** `react-hook-form` + `zod` (Validation).

---

## Data Fetching
- **Server:** Direct DB calls in Server Components or Server Actions.
- **Client:** `tanstack-query` (aka React Query) for client-side fetching/syncing if widely used interactively.

---

## Testing (If applicable)
- **Unit:** Vitest + React Testing Library
- **E2E:** Playwright

---

## Linting & Quality
- **Linter:** ESLint (Next.js config)
- **Formatter:** Prettier (Tailwind plugin enabled)
