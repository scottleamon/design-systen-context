# Decision: Component Library Choice (shadcn/ui + Radix)

## Status
🔴 **NEEDS HUMAN INPUT** - This document requires information from engineering/architecture stakeholders.

---

## What This Document Should Capture

This document should explain the rationale behind:
1. Why shadcn/ui was chosen as the component library
2. Why Radix UI primitives as the accessibility foundation
3. Why "copy into project" model vs. npm package dependency
4. What alternatives were evaluated and why they were rejected
5. Any trade-offs or limitations accepted with this choice

---

## Current State

From `rules/tech-stack.md`:
- **Component Library:** shadcn/ui (copy into `@/components/ui`)
- **Accessibility Primitives:** Radix UI (used by shadcn/ui)
- **Styling:** Tailwind CSS

---

## Questions to Answer

### Why shadcn/ui?
- [ ] What drove the decision to use shadcn/ui?
- [ ] Was this a recent adoption or legacy decision?
- [ ] What problems was it solving?

### Alternatives Evaluated
- [ ] Was Chakra UI considered? Why/why not?
- [ ] Was Material UI considered? Why/why not?
- [ ] Was Headless UI considered? Why/why not?
- [ ] Were custom components from scratch considered?
- [ ] Was a commercial component library considered?

### Trade-offs Accepted
- [ ] What are the known limitations of this approach?
- [ ] What maintenance burden does "copy into project" create?
- [ ] Are there components where shadcn/ui falls short?

### Radix Primitives
- [ ] Why Radix specifically for accessibility?
- [ ] Were other headless UI libraries considered (Headless UI, React Aria)?
- [ ] What accessibility certifications/compliance does this support?

### Customization Strategy
- [ ] How much customization of shadcn/ui components is acceptable?
- [ ] When should a component be modified vs. wrapped vs. replaced?
- [ ] How are updates from upstream shadcn/ui handled?

---

## Tips for Gathering This Information

1. **Architecture decision records (ADRs)** - Check if formal ADRs exist
2. **Tech lead/architect** - Interview whoever made the initial decision
3. **Git history** - Find the PR/commit that introduced shadcn/ui
4. **Slack/Teams archives** - Search for "shadcn", "component library", "radix" discussions
5. **Comparison documents** - Check if a formal evaluation was done

---

## Template for Completion

Once information is gathered, fill in:

```markdown
## Context
[What was the situation when this decision was made? New project? Migration?]

## Decision
We chose shadcn/ui with Radix UI primitives as our component library foundation.

## Rationale
[Primary reasons for this choice]

## Alternatives Considered

### Chakra UI
**Pros:** [What was good about it]
**Cons:** [Why it was rejected]

### Material UI
**Pros:** [What was good about it]
**Cons:** [Why it was rejected]

### Custom Components
**Pros:** [What was good about it]
**Cons:** [Why it was rejected]

### [Other alternatives evaluated]

## Consequences
**Positive:**
- [Benefits we get from this choice]

**Negative:**
- [Trade-offs we accepted]

## Customization Rules
- [When is it OK to modify shadcn components?]
- [When should we wrap vs. modify?]
- [How do we handle upstream updates?]

## When to Revisit
[Under what circumstances should this decision be reconsidered?]
```

---

*Status: Awaiting input from engineering/architecture team*
*Last updated: February 4, 2026*
