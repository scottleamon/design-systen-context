# Component Accessibility Requirements

## Purpose

This folder contains component-specific accessibility requirements that supplement the general [accessibility rules](../rules/accessibility.md). Each file documents the accessibility considerations unique to a specific component or component category.

---

## Why Component-Specific A11y?

General accessibility rules cover:
- Semantic HTML
- Keyboard navigation basics
- Color contrast
- Screen reader fundamentals

But each component has **unique requirements**:
- Buttons need specific ARIA states for loading/disabled
- Forms need error announcement patterns
- Modals need focus trapping
- Data tables need header associations

This folder captures those component-specific requirements.

---

## File Structure

Each component accessibility file follows this structure:

```markdown
# [Component] Accessibility

## Overview
[What makes this component's a11y unique]

## Keyboard Requirements
[Specific keyboard interactions]

## ARIA Requirements
[Required ARIA attributes and states]

## Focus Management
[Focus behavior specifics]

## Screen Reader Behavior
[What screen readers should announce]

## Common Mistakes
[A11y anti-patterns for this component]

## Testing Checklist
[How to verify a11y compliance]
```

---

## Available Files

| File | Component(s) | Status |
|------|-------------|--------|
| [forms.md](./forms.md) | Form, Input, Select, Checkbox, Radio | 🔴 Needs Input |
| [dialogs.md](./dialogs.md) | Dialog, AlertDialog, Sheet, Drawer | 🔴 Needs Input |
| [data-tables.md](./data-tables.md) | Table, DataTable | 🔴 Needs Input |
| [navigation.md](./navigation.md) | Tabs, Accordion, Navigation Menu | 🔴 Needs Input |

---

## Relationship to Component Docs

- **Component docs** (`system/components/`) focus on visual styling and usage patterns
- **A11y docs** (this folder) focus on accessibility implementation
- Both should be consulted when implementing or reviewing a component

---

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Radix UI Accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility)
- General rules: [accessibility.md](../rules/accessibility.md)

---

*Status: Structure created, component-specific requirements need input*
*Last updated: February 4, 2026*
