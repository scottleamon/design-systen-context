# Pagination

## Import
```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination"
```

## Props
```tsx
interface PaginationLinkProps {
  isActive?: boolean
  className?: string
  href?: string
}

interface PaginationItemProps {
  variant: "previous" | "next" | "link" | "ellipsis"
  state?: "default" | "hover" | "focus" | "active" | "disabled"
}
```

---

## Item Variants

| Variant | Use For | Tailwind |
|---------|---------|----------|
| `previous` | Navigate to previous page | `gap-1 h-9 pl-2.5 pr-4 rounded-md` |
| `next` | Navigate to next page | `gap-1 h-9 pl-4 pr-2.5 rounded-md` |
| `link` | Page number buttons | `size-9 rounded-md` |
| `ellipsis` | Indicate skipped pages | `size-9 p-2.5` |

### Choosing a Variant
- Use `previous`/`next` for sequential navigation at edges
- Use `link` for direct page access
- Use `ellipsis` between visible page ranges (e.g., 1 2 ... 8 9)

---

## States

| State | Variant | Tailwind |
|-------|---------|----------|
| Default | previous/next | `bg-transparent text-foreground` |
| Default | link | `bg-transparent text-foreground` |
| Hover | previous/next | `bg-accent text-accent-foreground` |
| Hover | link | `bg-accent text-accent-foreground` |
| Focus | all | `ring-2 ring-ring ring-offset-2` |
| Active | link | `bg-background border border-input shadow-xs` |
| Active+Hover | link | `bg-primary text-primary-foreground` |
| Disabled | all | `text-muted-foreground pointer-events-none opacity-50` |

---

## Icons

**Size:** h-4 w-4 (16px)
**Spacing:** gap-1 between icon and text

```tsx
<PaginationPrevious href="#" />  {/* ChevronLeft + "Previous" */}
<PaginationNext href="#" />      {/* "Next" + ChevronRight */}
<PaginationEllipsis />           {/* MoreHorizontal icon */}
```

---

## Common Patterns

### Basic Pagination
```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### Disabled Navigation (First Page)
```tsx
<PaginationPrevious 
  href="#" 
  aria-disabled="true"
  className="pointer-events-none opacity-50 text-muted-foreground"
/>
```

### Controlled State
```tsx
<PaginationLink 
  onClick={(e) => { e.preventDefault(); setPage(n); }}
  isActive={currentPage === n}
>
  {n}
</PaginationLink>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Active page not styled | Add `isActive` prop to `PaginationLink` |
| No focus ring visible | Ensure `ring-offset-background` is set on parent |
| Nav buttons always active | Add disabled styling when on first/last page |

---

*Last updated: December 19, 2025*
