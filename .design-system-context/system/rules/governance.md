# Governance Rules

## Purpose

This document defines what's enforceable vs. negotiable in the design system. It helps AI agents and developers understand:
- What constraints can never be violated
- What requires human review
- What can be auto-validated
- How to handle edge cases

> **Source:** This governance process is documented in Figma at the [Governance page](https://www.figma.com/design/0rd6tPgENef5nXmN0puflu/shadcn_ui-TimelyCare-kit?node-id=19575-290675).

---

## The Gist: High-Level Governance Flow

```
┌──────────────┐    Questions?     ┌──────┐   If new work    ┌──────────────┐
│ Use the      │   Concerns?       │      │   needs to       │ Design &     │
│ System       │ ─────────────────▶│ Talk │ ─────────────────▶│ Build        │
└──────────────┘   Don't see       │  ★   │   happen         └──────────────┘
                   what you need?  └──────┘                          │
                                                                     │ Stage new work
                                                                     │ for release
                                                                     ▼
┌──────────────┐   Team pulls     ┌──────────────┐               ┌──────────────┐
│ Adopt        │◀──in new DS ─────│ Release      │◀──────────────│              │
│              │   work           │              │                └──────────────┘
└──────────────┘                  └──────────────┘
```

---

## New Component Decision Tree

Before creating a new component, follow this decision flow:

```
                        ┌─────────────────────────────┐
                        │ Does a similar component    │
                        │ exist?                      │
                        └─────────────┬───────────────┘
                    Yes ┌─────────────┴───────────────┐ No
                        ▼                             ▼
            ┌───────────────────┐         ┌───────────────────┐
            │ Does it fulfill   │         │ Can you override  │
            │ the brief?        │         │ a different       │
            └─────────┬─────────┘         │ component to fit? │
         Yes │        │ No                └─────────┬─────────┘
             ▼        ▼                        Yes │ No
        ┌────────┐  ┌─────────────────┐            ▼    │
        │ Use it!│  │ Can it be       │   ┌──────────────┐
        └────────┘  │ adjusted to fit?│   │ Can this edit│
                    └────────┬────────┘   │ be reused    │
                        Yes │ No          │ across files?│
                            ▼             └──────┬───────┘
               ┌─────────────────────┐       Yes │ No
               │ Should adjustment   │           │   │
               │ be available        │           │   │
               │ globally?           │           │   ▼
               └──────────┬──────────┘           │ ┌─────────────┐
                    Yes   │ No                   │ │ Create a    │
                          │   │                  │ │ "snowflake" │
                          ▼   ▼                  │ └─────────────┘
         ┌────────────────────────┐              │
         │ Propose new component  │◀─────────────┘
         │ (see The Process)      │
         └────────────────────────┘
```

**Snowflake** = A localized, very specific component that doesn't belong in the design system.

---

## The Process: Adding to the Design System

When a new component or variant is approved for the design system:

### Step 1: Discuss Proposal
Discuss proposal with design systems team before starting work.

### Step 2: Design & Build (Cross-Disciplinary)
Create feature branch in both design tool and code:
- Create component/variant in UI library (Figma)
- Create component/variant in code library

### Step 3: Testing
Test the component for:
- Content
- Functionality
- **Accessibility**
- Responsive behavior
- Cross-browser/device
- Internationalization
- Unit tests
- Visual regression testing
- Trial in application (collab with product devs)
- Create stress test stories
- Code review
- Design review

### Step 4: Review with Product Team
- Get approval from product team
- If no approval: Iterate and return to review
- If approved: Continue to documentation

### Step 5: Documentation
- Create documentation for the component
- Fill out the description tab at component level in library file
- Documentation drafted on reference website
- Code feature branch merged into development branch

### Step 6: Stage for Release
Create enough work for new release before cutting.

### Step 7: Release
- Development branch merged into main
- Design tool feature branch merged into main
- Bump version number according to versioning guidelines
- Cut new release
- Release notes/changelog
- Communicate new release via all channels

### Step 8: Adopt
- Product team updates to new DS version
- Product team wires new/updated component to application and tests
- If it works: Launch!
- If it doesn't work: Follow DS guidelines for raising an issue & filing a bug

---

## Talk Section: Triage Process

When someone comes to the DS team with a need:

### What's the nature of the work?

**New Feature:**
1. Does the new feature belong in the DS?
   - **Yes, it's a new DS component/variant:** Can DS create in time to meet product timeline?
     - Yes → Add to DS backlog, follow The Process
     - No → DS team adds to backlog with note to follow up; product team may own production work initially
   - **No, it's a recipe or snowflake:** Product team adds to product backlog and owns production work

**Visual Discrepancy:**
1. Is the discrepancy between DS Figma library and DS code library?
   - Yes, it is a DS inconsistency → Add to DS backlog
   - No, it is product-level → Product team handles
2. Is the discrepancy deliberate and justifiable?
   - No, accidental/not justifiable → Product team updates design to adhere to DS conventions
   - Yes, intentional/justifiable → Product team moves forward with custom design; DS team captures for research

**Bug:**
- Bug added to DS backlog with high priority status

---

## Hard Constraints (Never Bend)

These rules are **non-negotiable**. AI agents should refuse to generate code that violates these.

### Color Usage
- ❌ **Never** use hardcoded hex colors (`#XXXXXX`)
- ❌ **Never** use hardcoded RGB/HSL values
- ✅ **Always** use semantic tokens (`bg-primary`, `text-muted-foreground`)

### Accessibility
- ❌ **Never** use `outline-none` without a `focus-visible` alternative
- ❌ **Never** create icon-only buttons without `aria-label`
- ❌ **Never** use `<div>` for interactive elements (use `<button>`, `<a>`)
- ✅ **Always** maintain heading hierarchy (h1 → h2 → h3)
- ✅ **Always** associate labels with form inputs

### Component Usage
- ❌ **Never** create new components without checking existing inventory
- ❌ **Never** modify shadcn/ui source files directly
- ✅ **Always** use `@/components/ui` imports for system components

### Icons
- ❌ **Never** use icon libraries other than Lucide React
- ❌ **Never** invent icon names (check [inventory.md](../icons/inventory.md))
- ✅ **Always** use system sizes (`size-4`, `size-6`, etc.)

### TypeScript
- ❌ **Never** use `any` type
- ✅ **Always** use `@/` path aliases for imports

---

## Requires Human Review

These changes should be flagged for human approval before merging:

### New Patterns
- [ ] Creating a new component variant
- [ ] Creating a new layout pattern
- [ ] Introducing a new composition pattern
- [ ] Adding new tokens or token values

### Breaking Changes
- [ ] Changing component API (props, types)
- [ ] Changing token values
- [ ] Removing deprecated patterns
- [ ] Changes affecting multiple files/features

### Architecture
- [ ] Adding new dependencies
- [ ] Changing build configuration
- [ ] Modifying shared utilities
- [ ] Changes to the design system context itself

### Accessibility
- [ ] Any exception to accessibility rules
- [ ] New interactive patterns without documented a11y approach

---

## Can Be Auto-Validated

These can be checked automatically (linting, CI, AI review):

### Lintable Rules
- Uses semantic color tokens
- Uses system spacing tokens
- Uses `@/` import aliases
- No `any` types
- Focus states present on interactive elements

### Pattern Checks
- Component from system inventory used
- Correct variant for use case
- Form uses react-hook-form + zod pattern
- Card wraps form content

### Theme Checks
- No theme-specific hardcoded values
- Semantic tokens used for theme-aware properties

---

## Edge Cases & Exceptions

### When Rules Can Be Bent

| Rule | Exception Condition | Required Action |
|------|-------------------|-----------------|
| Use system components | No existing component fits | Document why, get approval, add to system |
| Use token values | Token doesn't exist for need | Use nearest token, flag for review |
| Semantic color tokens | Exact brand color required (logo) | Use raw value with comment, get approval |

### Exception Request Process

If you must violate a rule:

1. **Document the constraint** - Why can't the rule be followed?
2. **Show alternatives considered** - What compliant options were evaluated?
3. **Propose solution** - What's the best path forward?
4. **Get approval** - Human review required
5. **Add TODO or decision doc** - Track for future resolution

Example:
```tsx
// EXCEPTION: Brand logo requires exact hex per brand guidelines
// Approved by: [Name] on [Date]
// Tracked in: decisions/brand-logo-colors.md
<Logo color="#19518B" />
```

---

## Decision Escalation

When uncertain about a rule, escalate using this hierarchy:

```
┌─────────────────────────────────────┐
│ 1. Check documentation              │
│    (this repo, component docs)      │
└──────────────┬──────────────────────┘
               │ Not found
               ▼
┌─────────────────────────────────────┐
│ 2. Check similar patterns           │
│    (existing code, compositions)    │
└──────────────┬──────────────────────┘
               │ Still unclear
               ▼
┌─────────────────────────────────────┐
│ 3. Talk to DS team                  │
│    (don't guess on constraints)     │
└─────────────────────────────────────┘
```

---

## Severity of Violations

| Severity | Definition | Response |
|----------|-----------|----------|
| 🔴 **Critical** | Accessibility violation, security risk | Block merge, fix immediately |
| 🟠 **Major** | Hard constraint violation | Block merge, must fix |
| 🟡 **Minor** | Soft rule violation | Flag for review, should fix |
| 🔵 **Advisory** | Best practice suggestion | Note for consideration |

---

## 🔴 NEEDS HUMAN INPUT

The following sections require input from team leads to complete:

### Approval Authority
- [ ] Who can approve new component variants?
- [ ] Who can approve new tokens?
- [ ] Who can approve exceptions to hard constraints?
- [ ] What is the review process for design system changes?

### Enforcement Tooling
- [ ] Are there existing ESLint rules enforcing these?
- [ ] Is there CI/CD validation?
- [ ] Are there Figma plugins for validation?
- [ ] What automated checks already exist?

### Communication Channels
- [ ] Where are DS releases communicated? (Slack channel? Email?)
- [ ] How do product teams request DS work?
- [ ] Where is the DS backlog maintained?

---

## Related Resources

- [Brad Frost: A Design System Governance Process](https://bradfrost.com/blog/post/a-design-system-governance-process/)
- [Brad Frost: Master design system governance with this one weird trick](https://bradfrost.com/blog/post/master-design-system-governance-with-this-one-weird-trick/) (The trick: TALK)
- [Brad Frost: "The design system isn't working for me!"](https://bradfrost.com/blog/post/the-design-system-isnt-working-for-me/)

---

*Status: Governance flows documented from Figma, approval authority needs human input*
*Last updated: February 4, 2026*
