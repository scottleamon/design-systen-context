# Decisions Log

## Purpose

This folder captures the **rationale** behind design system decisions. It answers "why" not just "what."

When AI agents or new team members encounter a pattern, they should understand:
- What was chosen
- What alternatives were considered and rejected
- When it's acceptable to deviate
- Who made the decision and when

---

## Why This Matters

From the "Taste 1.0" model:

> "If you accept a new pattern, write down why. If you reject it, write down the rejection rule. This is how taste compounds instead of resetting every quarter."

Without decision documentation:
- The same debates resurface repeatedly
- AI agents can't distinguish intentional constraints from arbitrary ones
- New team members don't understand the "why" behind patterns

---

## How to Document a Decision

Each decision file should follow this structure:

```markdown
# Decision: [Short Title]

## Status
[Accepted | Superseded | Deprecated]

## Date
[When the decision was made]

## Context
[What problem were we solving? What constraints existed?]

## Decision
[What we decided to do]

## Alternatives Considered
[What other options were evaluated and why they were rejected]

## Consequences
[What are the implications of this decision?]

## When to Revisit
[Under what circumstances should this decision be reconsidered?]
```

---

## Tips for Gathering Decision Information

1. **Check Figma comments** - Design decisions often have discussion threads
2. **Review PRs and commits** - Look for discussions in code review
3. **Interview stakeholders** - Schedule 15-min calls with designers/engineers who made key decisions
4. **Check Slack/Teams archives** - Search for discussions about color, typography, spacing choices
5. **Review brand guidelines** - Marketing/brand teams often have documented rationale

---

## Current Status

This folder is reserved for future decision records. No active decisions are currently documented here. Decision rationale is embedded in the relevant reference documentation (e.g., themes.md, colors.md, tech-stack.md).

---

*This folder should be updated whenever significant design system decisions are made.*
