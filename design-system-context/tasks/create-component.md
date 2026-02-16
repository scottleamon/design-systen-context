# Task: Create a Component

## Goal
Build a new UI component that integrates seamlessly with the design system.

---

## Pre-Requisites

Before creating a new component:

### 1. Verify It Doesn't Already Exist
- [ ] Check [system/components/](../system/components/) for existing component
- [ ] Check [system/patterns/component-match.md](../system/patterns/component-match.md) for similar components
- [ ] Search codebase for similar implementations

### 2. Clarify Theme Context
- [ ] Which property is this for? (Higher Ed/K-12/Admin/All)
- [ ] Will it need theme-aware styling?

### 3. Identify Composition Opportunities
- [ ] Can existing components be composed instead of building from scratch?
- [ ] Check [system/patterns/compositions.md](../system/patterns/compositions.md)

---

## Workflow

### Step 1: Understand Requirements
- What problem does this component solve?
- What variants are needed?
- What states must it support? (loading, error, disabled, etc.)
- What accessibility requirements exist?

### Step 2: Check Design Source
- Is there a Figma design for this component?
- What tokens does the design use?
- Are there responsive requirements?

### Step 3: Plan the API
- What props are needed?
- What's the composition model? (slots, children, compound components?)
- What are sensible defaults?

### Step 4: Build with System Tokens
Reference these files while building:
- [tokens/colors.md](../system/tokens/colors.md) - Color tokens (use semantic, never raw hex)
- [tokens/typography.md](../system/tokens/typography.md) - Font sizes, weights
- [tokens/spacing.md](../system/tokens/spacing.md) - Padding, margins, gaps
- [tokens/radii.md](../system/tokens/radii.md) - Border radius
- [tokens/shadows.md](../system/tokens/shadows.md) - Elevation
- [tokens/motion.md](../system/tokens/motion.md) - Animations, transitions

### Step 5: Implement Accessibility
Reference [rules/accessibility.md](../system/rules/accessibility.md):
- [ ] Semantic HTML elements
- [ ] Keyboard navigation
- [ ] ARIA attributes where needed
- [ ] Focus management

### Step 6: Test Across Themes
- [ ] Verify component works in Higher Ed theme
- [ ] Verify component works in K-12 theme
- [ ] Verify component works in Admin theme

---

## Component Structure Template

```tsx
// components/ui/[component-name].tsx

import * as React from "react"
import { cn } from "@/lib/utils"

// Define variants (if applicable)
const variants = {
  default: "...",
  secondary: "...",
}

// Define sizes (if applicable)
const sizes = {
  sm: "...",
  md: "...",
  lg: "...",
}

interface ComponentNameProps {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
  children?: React.ReactNode
}

export function ComponentName({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: ComponentNameProps) {
  return (
    <div
      className={cn(
        // Base styles
        "...",
        // Variant styles
        variants[variant],
        // Size styles
        sizes[size],
        // Custom classes
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
```

---

## Validation Checklist

Before considering the component complete:

### Design System Compliance
- [ ] Uses semantic color tokens (no hardcoded hex values)
- [ ] Uses system typography tokens
- [ ] Uses system spacing tokens
- [ ] Uses system border radius tokens
- [ ] Follows existing component patterns

### Accessibility
- [ ] Keyboard navigable
- [ ] Has appropriate ARIA attributes
- [ ] Focus states are visible
- [ ] Color contrast meets WCAG AA (4.5:1)

### Theme Support
- [ ] Works in all 3 themes (if applicable)
- [ ] Uses `bg-primary`, `text-primary-foreground` etc. (not theme-specific colors)

### Code Quality
- [ ] TypeScript types are complete
- [ ] Props have sensible defaults
- [ ] Component is composable
- [ ] No `any` types

---

## Common Mistakes to Avoid

| Mistake | Correct Approach |
|---------|-----------------|
| Using `bg-[#19518B]` | Use `bg-primary` |
| Using `text-[14px]` | Use `text-sm` |
| Using `p-[10px]` | Use nearest token `p-2.5` or `p-3` |
| Creating custom icon | Use Lucide React icon |
| Building without checking existing components | Always check component inventory first |
| Hardcoding to one theme | Use semantic tokens that adapt |

---

## After Creating

1. **Document the component** - See [document-component.md](./document-component.md)
2. **Add to component inventory** - Update `system/components/` if needed
3. **Record any decisions** - If new patterns were established, document in `system/decisions/`

---

## Related Context

- [Component Documentation Template](../system/patterns/component-template.md)
- [Component Selection Guide](../system/patterns/component-match.md)
- [Existing Components](../system/components/)
- [Tech Stack Rules](../system/rules/tech-stack.md)

---

*Last updated: February 4, 2026*
