# Task: Migrate Legacy Code

## Goal
Update existing code to comply with design system standards while minimizing regression risk.

---

## When to Use This

- Refactoring old UI code
- Updating pre-design-system components
- Fixing design system violations found in review
- Modernizing inherited codebases

---

## Migration Workflow

### Step 1: Audit Current State

Before changing anything, document what exists:

```bash
# Find hardcoded colors
grep -r "bg-\[#" src/
grep -r "text-\[#" src/
grep -r "#[0-9A-Fa-f]{6}" src/

# Find arbitrary values
grep -r "w-\[" src/
grep -r "h-\[" src/
grep -r "p-\[" src/
grep -r "m-\[" src/
grep -r "text-\[" src/

# Find non-system components
grep -r "className=" src/ | grep -v "@/components/ui"
```

### Step 2: Categorize Issues

| Category | Priority | Example |
|----------|----------|---------|
| Accessibility violations | 🔴 Critical | Missing aria-label, no focus states |
| Hardcoded colors | 🟠 High | `bg-[#19518B]` |
| Non-system components | 🟠 High | Custom button implementation |
| Arbitrary values | 🟡 Medium | `p-[13px]` |
| Inconsistent patterns | 🟡 Medium | Different form layouts |

### Step 3: Plan Migration

- Group related changes
- Prioritize by impact and risk
- Plan for testing at each step

### Step 4: Execute Incrementally

Make changes in small, testable batches:
1. Fix one category at a time
2. Test after each batch
3. Commit with clear messages

---

## Common Migrations

### Hardcoded Colors → Semantic Tokens

| Before | After |
|--------|-------|
| `bg-[#19518B]` | `bg-primary` |
| `text-[#19518B]` | `text-primary` |
| `bg-[#DC2626]` | `bg-destructive` |
| `text-[#6B7280]` | `text-muted-foreground` |
| `bg-[#F3F4F6]` | `bg-muted` |
| `border-[#E5E7EB]` | `border-border` |

### Arbitrary Values → Token Scale

| Before | After | Notes |
|--------|-------|-------|
| `p-[10px]` | `p-2.5` | Closest token |
| `p-[15px]` | `p-4` | Round to nearest |
| `text-[13px]` | `text-sm` | Use scale |
| `text-[15px]` | `text-base` | Use scale |
| `w-[250px]` | `w-64` | 256px, closest |
| `rounded-[10px]` | `rounded-lg` | Use system radii |

### Custom Components → System Components

```tsx
// BEFORE: Custom button
<div 
  onClick={handleClick}
  className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
>
  Click me
</div>

// AFTER: System button
<Button onClick={handleClick}>
  Click me
</Button>
```

```tsx
// BEFORE: Custom input
<input 
  className="border px-3 py-2 rounded w-full"
  type="text"
  placeholder="Enter text"
/>

// AFTER: System input
<Input placeholder="Enter text" />
```

### Non-Semantic HTML → Semantic HTML

```tsx
// BEFORE
<div onClick={handleClick}>Submit</div>
<div className="clickable">Learn more</div>

// AFTER
<button onClick={handleClick}>Submit</button>
<a href="/learn-more">Learn more</a>
```

### Missing Accessibility → Accessible

```tsx
// BEFORE
<button><Trash2 /></button>

// AFTER
<button aria-label="Delete item"><Trash2 /></button>
```

```tsx
// BEFORE
<button className="outline-none">...</button>

// AFTER
<button className="focus-visible:ring-2 focus-visible:ring-ring">...</button>
```

---

## Migration Checklist

For each file/component being migrated:

### Before Starting
- [ ] Current behavior documented
- [ ] Tests exist (or create basic tests first)
- [ ] Stakeholders aware of changes

### During Migration
- [ ] Changes made incrementally
- [ ] Each change tested
- [ ] No new functionality added (migration only)

### After Completion
- [ ] All tests pass
- [ ] Visual regression check
- [ ] Accessibility audit
- [ ] Theme compatibility verified
- [ ] Code review completed

---

## Risk Mitigation

### Low-Risk Changes
- Adding missing ARIA attributes
- Replacing hardcoded colors with exact semantic equivalents
- Adding focus states

### Medium-Risk Changes
- Replacing custom components with system components
- Changing arbitrary values to nearest tokens
- Restructuring HTML for semantics

### High-Risk Changes
- Changing component APIs
- Removing deprecated props
- Restructuring layouts

**For high-risk changes:**
- Feature flag if possible
- Deploy to staging first
- Have rollback plan ready

---

## Testing Migration

### Visual Testing
- Screenshot before/after
- Check all states (hover, focus, disabled)
- Check all themes
- Check responsive breakpoints

### Functional Testing
- All interactions still work
- Form submissions work
- Navigation works

### Accessibility Testing
- Keyboard navigation
- Screen reader testing
- Color contrast

---

## Common Pitfalls

| Pitfall | Prevention |
|---------|-----------|
| Breaking existing functionality | Make small, testable changes |
| Changing behavior while migrating | Migration-only commits, no new features |
| Missing edge cases | Test all component states |
| Forgetting theme compatibility | Test in all 3 themes |
| Incomplete migration | Track progress, don't leave partial |

---

## Related Context

- [Token Documentation](../system/tokens/)
- [Component Documentation](../system/components/)
- [Review Checklist](./review-ui.md)
- [Theme Strategy](../system/rules/theme-strategy.md)

---

*Last updated: February 4, 2026*
