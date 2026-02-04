# Decision: Color System & Theme Colors

## Status
🔴 **NEEDS HUMAN INPUT** - This document requires information from design/brand stakeholders.

---

## What This Document Should Capture

This document should explain the rationale behind:
1. Why these specific primary colors for each theme (Member Blue, Campus Green, Admin Neutral)
2. Why certain colors are shared across themes vs. theme-specific
3. Why HSL format was chosen for CSS variables
4. Any accessibility considerations that influenced color choices
5. Brand alignment decisions

---

## Current State (Values Only)

From [`tokens/colors.md`](../tokens/colors.md):

| Theme | Primary Color | Hex Value |
|-------|--------------|-----------|
| Member | Navy Blue | #19518B |
| Campus | Forest Green | #487537 |
| Admin | Near Black | #18181B |

**Destructive colors** are shared across all themes: `#DC2626` (Red 600)

---

## Questions to Answer

### Primary Colors
- [ ] Why was #19518B chosen for Member theme? (Brand guidelines? Accessibility? Legacy?)
- [ ] Why was #487537 chosen for Campus theme?
- [ ] Why was #18181B chosen for Admin theme?
- [ ] Were other color options considered? If so, why were they rejected?

### Color Relationships
- [ ] Why are destructive colors shared but primary colors theme-specific?
- [ ] Why were these specific accent colors chosen for each theme?
- [ ] How do these colors relate to existing brand guidelines?

### Technical Decisions
- [ ] Why HSL format for CSS variables instead of hex or RGB?
- [ ] Why these specific color scales (50-900)?

### Accessibility
- [ ] What contrast ratio targets were used?
- [ ] Were any colors adjusted for accessibility compliance?
- [ ] Are there any known contrast issues to be aware of?

---

## Tips for Gathering This Information

1. **Figma source files** - Check for color style descriptions or documentation frames
2. **Brand guidelines document** - Usually contains color rationale
3. **Design team lead** - Schedule a 15-min call to capture decision history
4. **Original PRs** - Search git history for when theme colors were introduced
5. **Accessibility audits** - Check if contrast testing documentation exists

---

## Template for Completion

Once information is gathered, fill in:

```markdown
## Context
[What problem were we solving with the color system?]

## Decision
[Summary of the color system approach]

## Member Theme (Blue) - #19518B
**Rationale:** [Why this specific blue?]
**Alternatives considered:** [What other blues were evaluated?]
**Brand alignment:** [How does this connect to brand?]

## Campus Theme (Green) - #487537
**Rationale:** [Why this specific green?]
**Alternatives considered:** [What other greens were evaluated?]
**Brand alignment:** [How does this connect to brand?]

## Admin Theme (Neutral) - #18181B
**Rationale:** [Why neutral instead of branded?]
**Alternatives considered:** [Were colored admin themes considered?]

## Shared vs. Theme-Specific Decision
**Rationale:** [Why are some colors shared and others not?]

## When to Revisit
[Under what circumstances should these colors be reconsidered?]
```

---

*Status: Awaiting input from design/brand team*
*Last updated: February 4, 2026*
