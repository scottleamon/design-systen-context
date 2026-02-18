# Task: Rapid Prototype

## Goal
Build a quick proof-of-concept to validate ideas, test interactions, or demonstrate functionality. Speed over polish.

---

## When to Use This

- Exploring design ideas
- Testing user flows
- Demonstrating concepts to stakeholders
- Hackathons or time-boxed spikes
- Early-stage feature exploration

---

## Prototyping Rules

### What to KEEP (Non-Negotiable)

Even in prototypes, maintain these standards:

1. **Use system components** - Don't build custom, use existing shadcn/ui
2. **Use semantic tokens** - `bg-primary` not `bg-blue-600`
3. **Basic accessibility** - Keyboard navigation, focus states
4. **Component composition** - Combine existing components

### What to SKIP (For Speed)

1. **Perfect responsive design** - Target one breakpoint
2. **All edge cases** - Focus on happy path
3. **Complete error handling** - Basic errors only
4. **Full test coverage** - Manual testing OK
5. **Comprehensive documentation** - Inline comments sufficient
6. **All themes** - Test in one theme
7. **Performance optimization** - Ship it working first

---

## Prototype Workflow

### Step 1: Define Scope (5 min)
- What are we validating?
- What's the minimum to demonstrate the concept?
- What's out of scope?

### Step 2: Identify Components (5 min)
- What existing components can we use?
- Reference [component inventory](../system/components/)
- Reference [compositions](../system/patterns/compositions.md)

### Step 3: Build Fast (Time-boxed)
- Start with layout from [layouts.md](../system/patterns/layouts.md)
- Compose existing components
- Use inline styles only when system tokens don't exist
- Mark shortcuts with `// TODO: Prototype - [what needs fixing]`

### Step 4: Validate & Document (5 min)
- Does it demonstrate the concept?
- What would need to change for production?

---

## Quick Component Reference

### Layouts
```tsx
// Page with sidebar
<div className="flex min-h-screen">
  <aside className="w-64 border-r">...</aside>
  <main className="flex-1 p-6">...</main>
</div>

// Centered content
<div className="mx-auto max-w-2xl p-6">...</div>

// Dashboard grid
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">...</div>
```

### Common Patterns
```tsx
// Card with form
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <form>...</form>
  </CardContent>
  <CardFooter>
    <Button>Submit</Button>
  </CardFooter>
</Card>

// Loading state
<div className="flex items-center gap-2">
  <LoaderCircle className="size-4 animate-spin" />
  <span>Loading...</span>
</div>

// Empty state
<div className="text-center py-12">
  <FileQuestion className="mx-auto size-12 text-muted-foreground" />
  <p className="mt-4 text-muted-foreground">No items found</p>
  <Button className="mt-4">Add Item</Button>
</div>
```

### Quick State Handling
```tsx
// Simple loading/error/data pattern
const [state, setState] = useState<'loading' | 'error' | 'success'>('loading')
const [data, setData] = useState(null)

if (state === 'loading') return <Skeleton />
if (state === 'error') return <Alert variant="destructive">Error</Alert>
return <DataDisplay data={data} />
```

---

## Prototype Checklist

Before sharing the prototype:

- [ ] Core concept is demonstrable
- [ ] Uses system components (no custom builds)
- [ ] Uses semantic color tokens
- [ ] Basic keyboard navigation works
- [ ] Marked TODOs for production gaps

---

## Transitioning to Production

When moving from prototype to production:

1. **Review against** [review-ui.md](./review-ui.md) checklist
2. **Add proper error handling** and edge cases
3. **Implement responsive design** for all breakpoints
4. **Add comprehensive accessibility**
5. **Test across all themes**
6. **Remove TODO comments** by addressing them
7. **Add tests**
8. **Document** if new patterns emerged

---

## Common Prototype Shortcuts (and Their Fixes)

| Prototype Shortcut | Production Fix |
|-------------------|----------------|
| Hardcoded data | Connect to API/state |
| Single breakpoint | Add responsive styles |
| Happy path only | Add error boundaries, edge cases |
| No loading states | Add proper async handling |
| TODO comments | Implement proper solution |
| Inline magic numbers | Extract to tokens/constants |

---

## Related Context

- [Component Inventory](../system/components/)
- [Layout Patterns](../system/patterns/layouts.md)
- [State Patterns](../system/patterns/states.md)
- [Compositions](../system/patterns/compositions.md)

---

*Last updated: February 4, 2026*
