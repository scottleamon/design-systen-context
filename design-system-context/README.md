# AI Context Repository

## Purpose
This repository is the **Single Source of Truth** for the Design System and Project Standards.
AI agents (Cursor, Claude, Antigravity) use this repo to understand *how* to build applications in this ecosystem.

> [!IMPORTANT]
> **Primary Rule:** Do not hallucinate styles or components. Always check the specific documentation files linked below.

> [!NOTE]
> **Multi-Property System:** This design system supports **3 distinct themes** for 3 web properties:
> - **Member (Blue)** - Patient/member-facing portal
> - **Campus (Green)** - University/campus administrator portal
> - **Admin (Neutral)** - Internal admin dashboard
>
> When building features, always clarify which property you're targeting. See [Theme Strategy](./system/rules/theme-strategy.md).

> [!TIP]
> **File Structure:** This repo contains two types of rule files:
> - `rules/*.mdc` - Cursor IDE rules (auto-applied based on globs, concise enforcement)
> - `system/rules/*.md` - Documentation (detailed guidelines, rationale, examples)
>
> The `.mdc` files reference the `.md` files for full details.

---

## 1. Project Architecture (MANDATORY)
Before writing any code, verify you are following the correct stack and structure.
- **Tech Stack:** [system/rules/tech-stack.md](./system/rules/tech-stack.md) (Next.js, Tailwind, Shadcn, Lucide)
- **Folder Structure:** [system/rules/project-structure.md](./system/rules/project-structure.md) (App Router conventions)
- **Accessibility:** [system/rules/accessibility.md](./system/rules/accessibility.md) (WCAG 2.1 / Section 508 Compliance)

---

## 2. Design Tokens
**NEVER** use arbitrary values (e.g., `text-[13px]`, `p-[7px]`, `#123456`). Always use the system tokens.

- **Themes:** [system/tokens/themes.md](./system/tokens/themes.md) — Theme system, strategy, and when to use which theme
- **Colors:** [system/tokens/colors.md](./system/tokens/colors.md) — All color values, semantic tokens, and theme-specific palettes (**source of truth for all color values**)
- **Typography:** [system/tokens/typography.md](./system/tokens/typography.md) (Scale like `text-sm`, `font-semibold`)
- **Spacing:** [system/tokens/spacing.md](./system/tokens/spacing.md) (Standard Tailwind scale `gap-4`, `p-6`)
- **Breakpoints:** [system/tokens/breakpoints.md](./system/tokens/breakpoints.md) (Responsive breakpoints `sm`, `md`, `lg`, `xl`, `2xl`)
- **Radii:** [system/tokens/radii.md](./system/tokens/radii.md) (Border radius `rounded-md`, `rounded-lg`, `rounded-xl`)
- **Shadows:** [system/tokens/shadows.md](./system/tokens/shadows.md) (Elevation `shadow-sm`, `shadow-md`, `shadow-lg`)
- **Motion:** [system/tokens/motion.md](./system/tokens/motion.md) (Durations and easings)
- **Machine-Readable Tokens:** [system/tokens/tokens.json](./system/tokens/tokens.json) — Structured JSON for deterministic parsing

---

## 3. Component Implementation
**NEVER** create custom components if a system equivalent exists.
**ALWAYS** refer to the specific component file for props, variants, and examples.

- **Component Index:** [system/components/README.md](./system/components/README.md) — Master list of all 50 components with categories and variants
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

## 6. Accessibility Guidelines

Detailed accessibility requirements by component category. See also [General Accessibility Rules](./system/rules/accessibility.md).

- **Overview:** [system/a11y/README.md](./system/a11y/README.md)
- **Forms:** [system/a11y/forms.md](./system/a11y/forms.md) (Input, Select, Checkbox, Radio, Date Picker)
- **Dialogs:** [system/a11y/dialogs.md](./system/a11y/dialogs.md) (Dialog, AlertDialog, Sheet, Drawer, Popover)
- **Data Tables:** [system/a11y/data-tables.md](./system/a11y/data-tables.md) (Table, DataTable)
- **Navigation:** [system/a11y/navigation.md](./system/a11y/navigation.md) (Tabs, Accordion, Sidebar, Breadcrumb)

---

## 7. Design Decisions

Decision rationale for the design system is embedded in the relevant reference documentation:
- **Why 3 themes?** See [themes.md](./system/tokens/themes.md) overview section
- **Why these colors?** See [colors.md](./system/tokens/colors.md) theme-specific primary colors section
- **Why shadcn/ui?** See [tech-stack.md](./system/rules/tech-stack.md)

For the governance process around new decisions, see [decisions/README.md](./system/decisions/README.md).

---

## 8. Common Anti-Patterns
- ❌ Hardcoded hex colors (Use `bg-primary`, not `bg-[#19518B]`)
- ❌ Arbitrary sizing (Use `w-64`, not `w-[250px]`)
- ❌ Mixing icon libraries (Lucide only)
- ❌ Confusing `default` vs `primary` (Shadcn uses `variant="default"` for primary buttons)
- ❌ Building without knowing the theme (Always clarify: Member/Campus/Admin?)
- ❌ Theme-specific hard-coding (Use semantic tokens that adapt across themes)

---

*Load this context first, then load specific files as needed.*
