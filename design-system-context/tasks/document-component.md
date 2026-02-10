# Task: Document a Component

## Goal
Create or update component documentation that enables consistent, correct usage by developers and AI agents.

---

## When to Use This

- New component added to the system
- Existing component documentation is outdated
- Component behavior changed
- Variants or props were added

---

## Documentation Workflow

### Step 1: Gather Information

Before writing documentation:

- [ ] Review the component source code
- [ ] Check Figma designs for specifications
- [ ] Identify all variants and states
- [ ] Test the component to understand behavior
- [ ] Note any accessibility requirements

### Step 2: Follow the Template

Use the structure from [component-template.md](../system/patterns/component-template.md)

### Step 3: Verify Accuracy

- [ ] All code examples are tested and working
- [ ] Token values match actual implementation
- [ ] Variants are complete and accurate
- [ ] States are documented

### Step 4: Add to Inventory

- [ ] File placed in `system/components/[name].md`
- [ ] Referenced in README if needed
- [ ] Related components cross-referenced

---

## Documentation Structure

```markdown
# [Component Name]

> [!NOTE]
> [Theme-awareness note if applicable]

## Import
[Import statement]

## Props
[TypeScript interface]

## Variants
[Table of variants with use cases and styling]

## Sizes (if applicable)
[Table of sizes]

## States
[Default, hover, focus, disabled, etc.]

## Styling
[Typography, colors, spacing details]

## Icons (if applicable)
[Icon usage patterns]

## Common Patterns
[Code examples for typical use cases]

## Accessibility
[A11y requirements for this component]

## Gotchas
[Common mistakes and solutions]

---
*Last updated: [Date]*
```

---

## Writing Guidelines

### Variants Section
- Include: Variant name, use case, visual styling, Tailwind classes
- Add "Choosing a Variant" guidance if multiple options exist
- Note theme behavior for theme-aware components

Example:
```markdown
| Variant | Use For | Styling |
|---------|---------|---------|
| default | Primary actions | `bg-primary text-primary-foreground` |
| secondary | Secondary actions | `bg-secondary text-secondary-foreground` |
| destructive | Dangerous actions | `bg-destructive text-destructive-foreground` |
```

### Styling Section
- Include exact token values (font size, spacing, colors)
- Reference the Tailwind class AND the actual value
- Note where values come from (e.g., "Verified from Figma")

Example:
```markdown
### Typography
- Font: Adelle Sans Semibold (`font-semibold`)
- Size: 14px (`text-sm`)
- Line height: 20px (`leading-5`)

### Spacing
- Padding: 8px 16px (`px-4 py-2`)
- Icon gap: 8px (`gap-2`)
```

### Common Patterns Section
- Include real, copy-paste-ready code
- Show the most frequent use cases
- Include imports in examples

Example:
```tsx
// Basic usage
<Button>Click me</Button>

// With icon
<Button>
  <Plus className="size-4" />
  Add Item
</Button>

// Loading state
<Button disabled>
  <LoaderCircle className="size-4 animate-spin" />
  Saving...
</Button>
```

### Accessibility Section
- List ARIA requirements
- Note keyboard interactions
- Reference any Radix primitives used
- Include screen reader considerations

Example:
```markdown
## Accessibility
- Icon-only buttons require `aria-label`
- Use `aria-busy="true"` during loading states
- Built on Radix Primitive (handles focus, keyboard nav)
- Never use `disabled` for loading; use `aria-disabled`
```

### Gotchas Section
- Common mistakes and their solutions
- Anti-patterns to avoid
- Edge cases

Example:
```markdown
| Problem | Solution |
|---------|----------|
| Button looks wrong in Card | Add `w-full` for full-width |
| Icon not aligned | Use `gap-2` not `space-x-2` |
| Loading spinner hidden | Reduce opacity on text, not spinner |
```

---

## Information Sources

Where to find component specifications:

| Information | Source |
|-------------|--------|
| Visual specifications | Figma designs |
| Token values | `system/tokens/` files |
| Prop types | Component source code |
| Accessibility | Radix docs + `system/rules/accessibility.md` |
| Usage patterns | Existing codebase usage |
| Gotchas | Team knowledge, bug reports |

---

## Validation Checklist

Before publishing documentation:

- [ ] All code examples compile/work
- [ ] Token values verified against source
- [ ] All variants documented
- [ ] All states documented
- [ ] Accessibility section included
- [ ] Gotchas section included
- [ ] Theme behavior noted (if applicable)
- [ ] Cross-references to related components
- [ ] Date updated in footer

---

## Related Context

- [Component Template](../system/patterns/component-template.md)
- [Existing Components](../system/components/)
- [Token Documentation](../system/tokens/)
- [Accessibility Rules](../system/rules/accessibility.md)

---

*Last updated: February 4, 2026*
