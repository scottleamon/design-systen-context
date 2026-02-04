# Decision: Multi-Theme Architecture (3 Properties)

## Status
🔴 **NEEDS HUMAN INPUT** - This document requires information from product/design stakeholders.

---

## What This Document Should Capture

This document should explain the rationale behind:
1. Why 3 separate themes instead of 1 unified theme
2. Why these specific 3 properties (Member, Campus, Admin)
3. The strategy for what's shared vs. theme-specific
4. How the themes relate to the overall product architecture
5. Future theme considerations

---

## Current State

From [`rules/theme-strategy.md`](../rules/theme-strategy.md):

| Theme | Property | Primary User | Primary Color |
|-------|----------|--------------|---------------|
| Member | Patient Portal | Patients, members | #19518B (Blue) |
| Campus | University Portal | Campus staff, admins | #487537 (Green) |
| Admin | Internal Dashboard | Internal staff | #18181B (Neutral) |

**Shared across themes:** Base colors, destructive colors, border styles, spacing, typography
**Theme-specific:** Primary color, accent color, focus ring color

---

## Questions to Answer

### Why Multi-Theme?
- [ ] What drove the need for 3 separate themes?
- [ ] Are these 3 separate products or 1 product with 3 faces?
- [ ] Is this about branding, user segmentation, or something else?

### Why These 3 Specific Themes?
- [ ] Why Member/Campus/Admin specifically?
- [ ] Are there other user groups that were considered?
- [ ] Could there be more themes in the future?

### Shared vs. Theme-Specific Strategy
- [ ] Why are certain tokens shared while others are theme-specific?
- [ ] What's the rule for deciding if something should be shared?
- [ ] Are there any components that behave differently per theme (beyond color)?

### Product Architecture
- [ ] Do these themes correspond to separate deployments?
- [ ] Are they different routes in one app or separate apps?
- [ ] How do users switch between themes (if ever)?

### Business Context
- [ ] What is the relationship between these 3 properties?
- [ ] Are they different products, different tiers, or different audiences?
- [ ] Is there a parent brand that ties them together?

---

## Tips for Gathering This Information

1. **Product documentation** - Check product strategy docs
2. **Product manager** - Interview about the multi-property strategy
3. **Original design specs** - Look for theme system documentation
4. **Brand team** - Ask about the relationship between the 3 brands
5. **Architecture docs** - Check how themes map to deployment

---

## Template for Completion

Once information is gathered, fill in:

```markdown
## Context
[What business/product context led to the multi-theme approach?]

## Decision
We support 3 distinct themes for 3 user-facing properties.

## Rationale
[Why multi-theme instead of unified? What problem does this solve?]

## The 3 Properties

### Member Portal (Blue)
**Target users:** [Detailed user description]
**Business purpose:** [What is this property for?]
**Why blue:** [Brand/psychological rationale]

### Campus Portal (Green)
**Target users:** [Detailed user description]
**Business purpose:** [What is this property for?]
**Why green:** [Brand/psychological rationale]

### Admin Dashboard (Neutral)
**Target users:** [Detailed user description]
**Business purpose:** [What is this property for?]
**Why neutral:** [Brand/psychological rationale]

## Shared vs. Theme-Specific Rules

### What's Shared (and Why)
- [Token category]: [Rationale for sharing]

### What's Theme-Specific (and Why)
- [Token category]: [Rationale for separation]

## Future Considerations
- [ ] Are additional themes planned?
- [ ] What would trigger adding a new theme?
- [ ] Are there known limitations of the current approach?

## When to Revisit
[Under what circumstances should the theme architecture be reconsidered?]
```

---

*Status: Awaiting input from product/design team*
*Last updated: February 4, 2026*
