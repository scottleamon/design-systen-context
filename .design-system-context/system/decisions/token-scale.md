# Decision: Token Scale & Spacing System

## Status
🔴 **NEEDS HUMAN INPUT** - This document requires information from design stakeholders.

---

## What This Document Should Capture

This document should explain the rationale behind:
1. Why the 4px base unit for spacing (vs. 8px which is more common)
2. Why these specific breakpoint values
3. Why these border radius values
4. Why this shadow elevation scale
5. Why this typography scale

---

## Current State (Values Only)

### Spacing Scale
From `tokens/spacing.md`: Uses Tailwind default 4px base unit (0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96)

### Breakpoints
From `tokens/breakpoints.md`:
| Name | Value | Target |
|------|-------|--------|
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Small laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

### Border Radius
From `tokens/radii.md`:
| Token | Value |
|-------|-------|
| rounded-sm | 6px |
| rounded-md | 8px |
| rounded-lg | 12px |
| rounded-xl | 14px |

### Typography Scale
From `tokens/typography.md`: Uses Adelle Sans with sizes from xs (12px) to 5xl (48px)

---

## Questions to Answer

### Spacing
- [ ] Why use Tailwind's default 4px base unit? Was 8px considered?
- [ ] Are there density requirements that influenced this choice?
- [ ] Were there specific components that drove the spacing decisions?

### Breakpoints
- [ ] Why these specific breakpoint values?
- [ ] What devices/viewports are being targeted?
- [ ] Was there analytics data that informed these choices?
- [ ] Are there any device-specific requirements (healthcare kiosks, tablets in clinics, etc.)?

### Border Radius
- [ ] Why 6px for small radius instead of 4px?
- [ ] Why 14px for xl instead of 16px?
- [ ] What visual style were these trying to achieve?
- [ ] Were these values verified against Figma? (Notes suggest they were)

### Typography
- [ ] Why Adelle Sans font family?
- [ ] Is there a licensing consideration?
- [ ] Why this specific size scale?
- [ ] Were other fonts considered?

### Shadows
- [ ] Why this elevation scale?
- [ ] What visual hierarchy do the shadow levels represent?

---

## Tips for Gathering This Information

1. **Figma design files** - Check spacing/grid documentation
2. **Design system documentation** - Look for original specifications
3. **Device analytics** - Check what devices users actually use
4. **Accessibility requirements** - Touch target sizes, readability considerations
5. **Designer interviews** - Ask about intentional density decisions

---

## Template for Completion

Once information is gathered, fill in:

```markdown
## Context
[What constraints and requirements existed when defining these scales?]

## Spacing Decision
**Base unit:** 4px
**Rationale:** [Why 4px? Density? Legacy? Tailwind defaults?]
**Alternatives considered:** [Was 8px base unit evaluated?]

## Breakpoint Decision
**Rationale:** [Why these specific values?]
**Device targets:** [What specific devices/contexts?]
**Alternatives considered:** [Were other breakpoint systems evaluated?]

## Border Radius Decision
**Rationale:** [What visual style was the goal?]
**Figma alignment:** [How were these verified against design?]

## Typography Decision
**Font choice:** Adelle Sans
**Rationale:** [Why this font? Brand? Licensing? Readability?]
**Scale rationale:** [Why these specific sizes?]

## When to Revisit
[Under what circumstances should these scales be reconsidered?]
```

---

*Status: Awaiting input from design team*
*Last updated: February 4, 2026*
