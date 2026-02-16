# AI Agent Workflow

## Purpose

This document explains how AI agents should use the design system context. Following this workflow ensures consistent, high-quality output that aligns with organizational standards.

---

## The Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│  1. ORIENT     →  2. ROUTE     →  3. LOAD      →  4. GENERATE  │
│  Understand       Select task      Load relevant     Create      │
│  the request      context file     documentation     output      │
└─────────────────────────────────────────────────────────────────┘
                                                           │
                                                           ▼
┌─────────────────────────────────────────────────────────────────┐
│  5. VALIDATE   →  6. CAPTURE   →  7. DELIVER                    │
│  Check against     Document any     Present to                   │
│  checklists        new decisions    user                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## Step 1: Orient

Before starting any task, understand:

### What's Being Asked?
- Is this creating something new?
- Is this reviewing existing work?
- Is this a prototype or production work?
- Is this migration/refactoring?

### What's the Context?
- Which theme/property? (Higher Ed/K-12/Admin)
- What's the scope? (component, feature, page)
- Are there existing patterns to follow?

### Key Questions to Clarify
If any of these are unclear, ask:
- "Which property is this for? (Higher Ed/K-12/Admin)"
- "Is there an existing Figma design?"
- "Should this be production-ready or a prototype?"

---

## Step 2: Route

Select the appropriate task context file:

| If the task is... | Load this file |
|-------------------|----------------|
| Creating a new component | [tasks/create-component.md](./tasks/create-component.md) |
| Reviewing existing UI | [tasks/review-ui.md](./tasks/review-ui.md) |
| Building a quick prototype | [tasks/prototype.md](./tasks/prototype.md) |
| Migrating legacy code | [tasks/migrate.md](./tasks/migrate.md) |
| Writing documentation | [tasks/document-component.md](./tasks/document-component.md) |

**Always also load:** This [README.md](./README.md) for core context.

---

## Step 3: Load

Based on the task, load relevant documentation:

### For Component Work
- [system/patterns/component-match.md](./system/patterns/component-match.md) - What component to use
- [system/components/[name].md](./system/components/) - Specific component docs
- [system/patterns/compositions.md](./system/patterns/compositions.md) - How to combine components

### For Token Usage
- [system/tokens/colors.md](./system/tokens/colors.md)
- [system/tokens/typography.md](./system/tokens/typography.md)
- [system/tokens/spacing.md](./system/tokens/spacing.md)
- [system/tokens/themes.md](./system/tokens/themes.md)

### For Patterns
- [system/patterns/layouts.md](./system/patterns/layouts.md)
- [system/patterns/states.md](./system/patterns/states.md)

### For Rules
- [system/rules/accessibility.md](./system/rules/accessibility.md)
- [system/rules/tech-stack.md](./system/rules/tech-stack.md)
- [system/rules/governance.md](./system/rules/governance.md)

---

## Step 4: Generate

Create output following loaded context:

### Do
- Use existing components before creating new ones
- Use semantic tokens for all colors
- Follow the patterns and compositions documented
- Include accessibility attributes
- Consider all 3 themes

### Don't
- Invent new patterns without checking existing ones
- Hardcode colors, sizes, or other token values
- Skip accessibility considerations
- Assume a single theme

---

## Step 5: Validate

Check output against relevant checklists:

### Quick Validation
- [ ] Uses system components (not custom)
- [ ] Uses semantic color tokens (not hex)
- [ ] Uses system spacing tokens (not arbitrary)
- [ ] Has accessibility attributes (aria-labels, focus states)
- [ ] Works across themes (if applicable)

### Detailed Validation
See [tasks/review-ui.md](./tasks/review-ui.md) for comprehensive checklists.

---

## Step 6: Capture

If new decisions were made during the task:

### New Pattern Established
If you created a new pattern not yet documented:
1. Note it in output
2. Suggest adding to appropriate documentation
3. Flag for human review

### Exception Needed
If you had to deviate from a rule:
1. Document why
2. Show alternatives considered
3. Request approval

### Decision Made
If the task required a judgment call:
1. Document the decision
2. Explain rationale
3. Consider adding to [system/decisions/](./system/decisions/)

---

## Step 7: Deliver

Present output to user with:

### Summary
- What was created/changed
- Key decisions made
- Any items flagged for review

### Code
- Complete, working code
- All imports included
- Following system patterns

### Caveats
- Assumptions made
- Things that need human input
- Recommendations for next steps

---

## Context Loading Priority

When context budget is limited, prioritize:

1. **Always load:** README.md (core context)
2. **Task-specific:** The relevant task file from `tasks/`
3. **Component-specific:** If working on specific components
4. **Token docs:** Only the token types needed (e.g., just colors if that's the issue)

---

## Common Scenarios

### "Build a form"
1. Load: README.md → tasks/create-component.md
2. Check: components/form.md, components/card.md, components/input.md
3. Follow: Form pattern (react-hook-form + zod, wrapped in Card)

### "Review this component"
1. Load: README.md → tasks/review-ui.md
2. Run through: Consistency, accessibility, interaction, theme checklists
3. Output: Structured review with issues and recommendations

### "Quick prototype for stakeholder"
1. Load: README.md → tasks/prototype.md
2. Use: Existing components, system tokens
3. Skip: Perfect responsive, all edge cases, full testing
4. Mark: TODOs for production gaps

### "Update old code to design system"
1. Load: README.md → tasks/migrate.md
2. Audit: Find violations
3. Fix: Incrementally with testing
4. Validate: Run review checklist

---

## Anti-Patterns to Avoid

| Anti-Pattern | Why It's Bad | What to Do Instead |
|--------------|--------------|---------------------|
| Loading all documentation | Dilutes focus, wastes context | Load task-specific + relevant docs only |
| Skipping component inventory check | May recreate existing components | Always check before creating |
| Hardcoding theme colors | Breaks in other themes | Use semantic tokens |
| Guessing on constraints | May violate hard rules | Ask when uncertain |
| Not validating output | Ships non-compliant code | Run through checklists |

---

*This workflow should be followed for all design system work.*
*Last updated: February 4, 2026*
