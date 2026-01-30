# Skeleton

## Import
```tsx
import { Skeleton } from "@/components/ui/skeleton"
```

## Props
```tsx
interface SkeletonProps {
  className?: string
}
```

---

## Structure

| Element | Tailwind |
|---------|----------|
| Base | `bg-accent animate-pulse` |
| Line | `h-4 rounded-md bg-accent` |
| Circle (avatar) | `size-10 rounded-full bg-accent` |
| Square (image) | `aspect-square rounded-md bg-accent` |
| Line gap | `gap-2` (8px) |

---

## Shapes

| Shape | Use For | Tailwind |
|-------|---------|----------|
| Line | Text placeholders | `h-4 w-[width] rounded-md bg-accent` |
| Circle | Avatar, icon placeholders | `size-10 rounded-full bg-accent` |
| Square | Image placeholders | `aspect-square w-full rounded-md bg-accent` |

---

## Common Patterns

### Avatar with Text
```tsx
<div className="flex items-center gap-4">
  <Skeleton className="size-10 rounded-full" />
  <div className="flex flex-col gap-2">
    <Skeleton className="h-4 w-[150px]" />
    <Skeleton className="h-4 w-[100px]" />
  </div>
</div>
```

### Card Placeholder
```tsx
<div className="flex flex-col gap-4 p-4">
  <div className="flex flex-col gap-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
  </div>
  <Skeleton className="aspect-square w-full rounded-md" />
</div>
```

### Text Lines
```tsx
<div className="flex flex-col gap-2">
  <Skeleton className="h-4 w-[222px]" />
  <Skeleton className="h-4 w-[167px]" />
</div>
```

### Table Row
```tsx
<div className="flex items-center gap-4">
  <Skeleton className="h-4 w-[80px]" />
  <Skeleton className="h-4 w-[120px]" />
  <Skeleton className="h-4 w-[100px]" />
</div>
```

---

## Sizing Guide

| Content Type | Width |
|--------------|-------|
| Short label | `w-[80px]` - `w-[100px]` |
| Medium text | `w-[150px]` - `w-[200px]` |
| Long text | `w-[250px]` or `w-full` |
| Title | `w-3/4` or `w-[200px]` |
| Description | `w-full` |

---

## Animation

The skeleton uses `animate-pulse` by default. This creates a subtle fade in/out effect.

```tsx
// Already included in base component
<Skeleton className="animate-pulse ..." />
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| No animation | Ensure `animate-pulse` is applied |
| Wrong color | Use `bg-accent` (not `bg-muted`) |
| Lines too tall | Standard height is `h-4` (16px) |
| Varying widths | Use different widths per line for natural look |
| Accessibility | Add `aria-hidden="true"` to skeleton containers |

---

*Last updated: December 19, 2024*

