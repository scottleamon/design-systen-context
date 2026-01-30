# Component Template

Use this template when creating or updating component documentation.

---

## Standard Structure

Every component file should follow this exact order:

```markdown
# ComponentName

## Import
[Copy-paste ready imports]

## Props
[TypeScript interface]

---

## Variants
[Table of variants with use cases]

### Choosing a Variant
[Decision guidance]

---

## Sizes (if applicable)
[Table of sizes]

---

## Styling / Structure
[Design tokens table - use "Structure" for composite components, "Styling" for simple ones]

---

## States
[Table of all interactive states]

---

## Icons (if component uses icons)
[Icon specs and usage]

---

## Common Patterns
[2-4 copy-paste code examples]

---

## Accessibility
[Component-specific a11y requirements]

---

## Gotchas
[Problem/Solution table]

---

## Figma Reference
[Link to Figma Dev Mode]

---

*Last updated: [Date]*
```

---

## Section Templates

### Import Section

```markdown
## Import
\`\`\`tsx
import { ComponentName } from "@/components/ui/component-name"
\`\`\`
```

### Props Section

```markdown
## Props
\`\`\`tsx
interface ComponentProps {
  variant?: "default" | "secondary"
  size?: "default" | "sm" | "lg"
  disabled?: boolean
  className?: string
  children: React.ReactNode
}
\`\`\`
```

---

## Formatting Rules

1. **Tables:** Use pipe-delimited markdown tables
2. **Code blocks:** Use tsx syntax highlighting
3. **Tokens:** Reference Tailwind classes, not raw values
4. **Links:** Use relative paths within system/ (e.g., [Colors](../tokens/colors.md))
5. **Dates:** Format as "Month DD, YYYY" (e.g., January 16, 2026)

---

*This template last updated: January 29, 2026*
