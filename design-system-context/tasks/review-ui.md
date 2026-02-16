# Task: Review UI

## Goal
Evaluate existing UI code for design system compliance, consistency, accessibility, and quality.

---

## When to Use This

- Code review for UI changes
- Auditing existing screens/features
- Validating AI-generated UI code
- Pre-release quality checks

---

## Review Workflow

### Step 1: Understand Context
- What feature/screen is being reviewed?
- Which theme/property is this for?
- What's the scope of changes?

### Step 2: Run Through Checklists (below)

### Step 3: Document Findings
- List issues found with severity (blocker/major/minor)
- Provide specific fix recommendations
- Reference relevant documentation

---

## Consistency Checklist

### Component Usage
- [ ] Uses existing design system components (not custom implementations)
- [ ] Correct component selected for the use case (see [component-match.md](../system/patterns/component-match.md))
- [ ] Component variants used correctly (`default` vs `secondary` vs `ghost`)
- [ ] No unnecessary component wrapping

### Token Usage
- [ ] No hardcoded colors (`#XXXXXX`, `rgb()`, etc.)
- [ ] No hardcoded sizes (`w-[250px]`, `text-[13px]`)
- [ ] Uses semantic tokens (`bg-primary` not `bg-blue-600`)
- [ ] Spacing follows token scale (no arbitrary values)

### Pattern Compliance
- [ ] Layout follows established patterns (see [layouts.md](../system/patterns/layouts.md))
- [ ] States handled correctly (see [states.md](../system/patterns/states.md))
- [ ] Compositions follow patterns (see [compositions.md](../system/patterns/compositions.md))

---

## Accessibility Checklist

### Semantic HTML
- [ ] Correct HTML elements used (button for actions, a for navigation)
- [ ] Heading hierarchy is logical (h1 → h2 → h3, no skipped levels)
- [ ] Landmark elements used appropriately (main, nav, aside)

### Keyboard Navigation
- [ ] All interactive elements reachable via Tab
- [ ] Focus order is logical
- [ ] Focus indicators visible (no `outline-none` without `focus-visible` alternative)
- [ ] Escape closes modals/dropdowns
- [ ] Enter/Space activates buttons

### Screen Reader Support
- [ ] Icon-only buttons have `aria-label`
- [ ] Images have appropriate `alt` text
- [ ] Form inputs have associated labels
- [ ] Error messages linked via `aria-describedby`
- [ ] Dynamic content uses `aria-live` regions

### Visual
- [ ] Color contrast meets 4.5:1 for normal text
- [ ] Color not used as only indicator (icons/text accompany)
- [ ] Text resizable to 200% without breaking layout

---

## Interaction Checklist

### Forms
- [ ] Validation errors are clear and specific
- [ ] Required fields indicated visually and programmatically
- [ ] Form wrapped in Card component
- [ ] Uses react-hook-form + zod pattern

### Loading States
- [ ] Loading states use skeleton or spinner patterns
- [ ] Loading indicator matches content being loaded
- [ ] No layout shift when content loads

### Error States
- [ ] Errors are user-friendly (not technical messages)
- [ ] Recovery actions provided where possible
- [ ] Errors don't lose user's input

### Empty States
- [ ] Empty states have helpful messaging
- [ ] Call-to-action provided when relevant
- [ ] Icon used to reinforce message

---

## Theme Compatibility Checklist

- [ ] No theme-specific hardcoded colors
- [ ] Component looks correct in Higher Ed theme (blue)
- [ ] Component looks correct in K-12 theme (blue — placeholder)
- [ ] Component looks correct in Admin theme (neutral)
- [ ] Focus rings adapt to theme

---

## Code Quality Checklist

### TypeScript
- [ ] No `any` types
- [ ] Props properly typed
- [ ] No type assertions without justification

### Structure
- [ ] Components in correct directory (`ui/`, `shared/`, `features/`)
- [ ] Imports use `@/` path aliases
- [ ] No circular dependencies

### Performance
- [ ] No unnecessary re-renders
- [ ] Large lists use virtualization
- [ ] Images optimized

---

## Severity Levels

| Level | Definition | Action |
|-------|-----------|--------|
| 🔴 **Blocker** | Accessibility violation, broken functionality | Must fix before merge |
| 🟠 **Major** | Design system violation, inconsistency | Should fix before merge |
| 🟡 **Minor** | Style preference, minor inconsistency | Consider fixing |
| 🔵 **Suggestion** | Improvement opportunity | Optional |

---

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| `className="bg-[#19518B]"` | Use `className="bg-primary"` |
| `<div onClick={...}>` | Use `<button onClick={...}>` |
| Missing focus ring | Add `focus-visible:ring-2` |
| `outline-none` without alternative | Add `focus-visible:ring-2 focus-visible:ring-ring` |
| Hardcoded icon size | Use `size-4` or `size-6` from system |
| New variant for existing use case | Use existing variant, check [component docs](../system/components/) |

---

## Review Output Template

```markdown
## UI Review: [Feature/Component Name]

### Summary
[Brief assessment: Approved / Needs Changes / Blocked]

### Issues Found

#### 🔴 Blockers
- [Issue description] - [File:Line] - [Fix recommendation]

#### 🟠 Major
- [Issue description] - [File:Line] - [Fix recommendation]

#### 🟡 Minor
- [Issue description] - [File:Line] - [Fix recommendation]

### Positive Notes
- [What was done well]

### Recommendations
- [Additional suggestions]
```

---

## Related Context

- [Accessibility Rules](../system/rules/accessibility.md)
- [Component Match Guide](../system/patterns/component-match.md)
- [State Patterns](../system/patterns/states.md)
- [Token Documentation](../system/tokens/)

---

*Last updated: February 4, 2026*
