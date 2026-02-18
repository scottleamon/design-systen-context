# Separator

## Import
```tsx
import { Separator } from "@/components/ui/separator"
```

## Props
```tsx
interface SeparatorProps {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
  className?: string
}
```

---

## Structure

| Orientation | Tailwind |
|-------------|----------|
| Horizontal | `h-px w-full bg-border` |
| Vertical | `h-full w-px bg-border` |

---

## Orientations

| Orientation | Use For |
|-------------|---------|
| `horizontal` | Divide stacked content sections |
| `vertical` | Separate inline items (nav links, breadcrumbs) |

---

## Common Patterns

### Horizontal (Content Divider)
```tsx
<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">Tailwind CSS</h4>
    <p className="text-sm text-muted-foreground">
      A utility-first CSS framework.
    </p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center gap-4 text-sm">
    <span>Blog</span>
    <Separator orientation="vertical" />
    <span>Docs</span>
    <Separator orientation="vertical" />
    <span>Source</span>
  </div>
</div>
```

### Vertical (Inline Items)
```tsx
<div className="flex h-5 items-center gap-4 text-sm">
  <span>Blog</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
  <Separator orientation="vertical" />
  <span>Source</span>
</div>
```

### In Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <Separator />
  <CardContent className="pt-4">
    Content here
  </CardContent>
</Card>
```

### Navigation Divider
```tsx
<nav className="flex items-center gap-2">
  <Link href="/home">Home</Link>
  <Separator orientation="vertical" className="h-4" />
  <Link href="/about">About</Link>
  <Separator orientation="vertical" className="h-4" />
  <Link href="/contact">Contact</Link>
</nav>
```

---

## Accessibility

- Built on Radix Separator
- Uses `role="separator"` by default (announced by screen readers)
- Set `decorative` prop to hide from accessibility tree when purely visual
- No keyboard interaction
- Orientation conveyed via `aria-orientation`

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Vertical not visible | Parent needs `h-*` or `items-center` with height |
| No spacing around separator | Add `my-4` (horizontal) or `mx-4` (vertical) |
| Separator too long | Constrain parent width or use `max-w-*` |
| Not accessible | Use `decorative={false}` if semantically meaningful |

---

## See Also

- **Related Components:** [Card](./card.md) (content dividers), [Resizable](./resizable.md) (panel dividers)
- **Patterns:** [Layouts](../patterns/layouts.md) — Divider patterns

---

*Last updated: February 9, 2026*




