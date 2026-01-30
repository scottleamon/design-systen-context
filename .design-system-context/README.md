# AI Context Repository

## Purpose
This repository is the **Single Source of Truth** for the Design System and Project Standards.
AI agents (Cursor, Claude, Antigravity) use this repo to understand *how* to build applications in this ecosystem.

> [!IMPORTANT]
> **Primary Rule:** Do not hallucinate styles or components. Always check the specific documentation files linked below.

---

## 1. Project Architecture (MANDATORY)
Before writing any code, verify you are following the correct stack and structure.
- **Tech Stack:** [system/rules/tech-stack.md](./system/rules/tech-stack.md) (Next.js, Tailwind, Shadcn, Lucide)
- **Folder Structure:** [system/rules/project-structure.md](./system/rules/project-structure.md) (App Router conventions)
- **Accessibility:** [system/rules/accessibility.md](./system/rules/accessibility.md) (WCAG 2.1 / Section 508 Compliance)

---

## 2. Design Tokens
**NEVER** use arbitrary values (e.g., `text-[13px]`, `p-[7px]`, `#123456`). Always use the system tokens.

- **Colors:** [system/tokens/colors.md](./system/tokens/colors.md) (Semantic tokens like `bg-primary`, `text-muted-foreground`)
- **Typography:** [system/tokens/typography.md](./system/tokens/typography.md) (Scale like `text-sm`, `font-semibold`)
- **Spacing:** [system/tokens/spacing.md](./system/tokens/spacing.md) (Standard Tailwind scale `gap-4`, `p-6`)
- **Motion:** [system/tokens/motion.md](./system/tokens/motion.md) (Durations and easings)

---

## 3. Component Implementation
**NEVER** create custom components if a system equivalent exists.
**ALWAYS** refer to the specific component file for props, variants, and examples.

- **Component Library:** `system/components/` (e.g., [Button](./system/components/button.md), [Card](./system/components/card.md))
- **Selection Logic:** [system/patterns/component-match.md](./system/patterns/component-match.md) (What component to use when)
- **Contribution:** [Component Template](./system/patterns/component-template.md) (Use when adding new specs)

---

## 4. Icons
- **Library:** Lucide React (`import { Icon } from "lucide-react"`)
- **Inventory:** Check [system/icons/inventory.md](./system/icons/inventory.md) for naming and sizes.
- **Rules:**
  - Use `size-4` (16px) for standard inline icons.
  - Use `size-6` (24px) for navigation.
  - **Hallucination Watch:**
    - `<Spinner />` -> `LoaderCircle` (animate-spin)
    - `<Close />` -> `X`
    - `<Edit />` -> `Pencil`
    - `<Delete />` -> `Trash2`

---

## 5. Global Implementation Rules

### Imports
```tsx
// CORRECT - Use path aliases
import { Button } from "@/components/ui/button"
// WRONG - Relative paths
import { Button } from "../../../components/ui/button"
```

### Accessibility (Non-Negotiable)
Follow [Accessibility Guidelines](./system/rules/accessibility.md).
- All interactive elements must have `aria-label` if no text is present.
- Never remove focus rings.
- Use semantic HTML.

### Forms
- Always wrap forms in a `Card`.
- Always use `react-hook-form` + `zod`.
- See [system/components/form.md](./system/components/form.md) for the standard pattern.

---

## 6. Common Anti-Patterns
- ❌ Hardcoded hex colors (Use `bg-primary`)
- ❌ Arbitrary sizing (Use `w-64`, not `w-[250px]`)
- ❌ Mixing icon libraries (Lucide only)
- ❌ Confusing `default` vs `primary` (Shadcn uses `variant="default"` for primary buttons)

---

*Load this context first, then load specific files as needed.*
