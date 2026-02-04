# Decision: Typography System (Adelle Sans)

## Status
🔴 **NEEDS HUMAN INPUT** - This document requires information from design/brand stakeholders.

---

## What This Document Should Capture

This document should explain the rationale behind:
1. Why Adelle Sans was chosen as the primary font family
2. Why Adelle Mono for code/monospace
3. Licensing and hosting considerations
4. Fallback font strategy
5. Any accessibility considerations for typography

---

## Current State

From `tokens/typography.md`:
- **Primary Font:** Adelle Sans (Regular, Medium, Semibold, Bold, Extrabold)
- **Monospace Font:** Adelle Mono
- **Size Scale:** xs (12px) to 5xl (48px)
- **Source:** "EXACT from Figma"

---

## Questions to Answer

### Font Choice
- [ ] Why Adelle Sans specifically?
- [ ] Is this a brand-mandated font?
- [ ] What characteristics made it suitable? (readability, personality, etc.)
- [ ] Were other fonts considered?

### Licensing
- [ ] What is the licensing situation for Adelle Sans?
- [ ] Is it self-hosted or served via a font service?
- [ ] Are there usage restrictions?
- [ ] What is the cost/licensing model?

### Fallback Strategy
- [ ] What system fonts are used as fallbacks?
- [ ] How does the UI degrade if Adelle Sans fails to load?
- [ ] Is there a FOUT (flash of unstyled text) strategy?

### Accessibility
- [ ] Why these specific line heights?
- [ ] Were readability studies done for the size scale?
- [ ] Are there minimum size requirements for accessibility?

### Weights
- [ ] Why these specific weights (Regular through Extrabold)?
- [ ] Are all weights actually used in the system?
- [ ] What is each weight intended for?

---

## Tips for Gathering This Information

1. **Brand guidelines** - Typography choices are often documented there
2. **Font license agreement** - Check for documentation
3. **Design team** - Ask about the selection process
4. **Figma files** - Check for typography documentation frames
5. **Font loading implementation** - Check how fonts are currently loaded in code

---

## Template for Completion

Once information is gathered, fill in:

```markdown
## Context
[What requirements existed? Brand guidelines? Accessibility? Performance?]

## Decision
We use Adelle Sans as our primary font family.

## Rationale
[Why this font was chosen]

## Brand Alignment
[How does this connect to brand guidelines?]

## Licensing
**License type:** [Commercial, open source, etc.]
**Hosting:** [Self-hosted, Google Fonts, Adobe Fonts, etc.]
**Restrictions:** [Any usage limitations]

## Alternatives Considered
[What other fonts were evaluated and why they were rejected]

### [Font Name 1]
**Pros:** [What was good]
**Cons:** [Why rejected]

### [Font Name 2]
**Pros:** [What was good]
**Cons:** [Why rejected]

## Weight Usage Guide
| Weight | Token | Use For |
|--------|-------|---------|
| 400 | font-normal | Body text |
| 500 | font-medium | [Purpose] |
| 600 | font-semibold | [Purpose] |
| 700 | font-bold | [Purpose] |
| 800 | font-extrabold | [Purpose] |

## Fallback Stack
[What fonts are used if Adelle Sans doesn't load?]

## When to Revisit
[Under what circumstances should typography be reconsidered?]
```

---

*Status: Awaiting input from design/brand team*
*Last updated: February 4, 2026*
