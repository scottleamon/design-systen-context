# Breadcrumb

## Import
```tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb"
```

## Props
```tsx
interface BreadcrumbProps {
  children: React.ReactNode
  separator?: React.ReactNode
  className?: string
}

interface BreadcrumbListProps {
  children: React.ReactNode
  className?: string
}

interface BreadcrumbItemProps {
  children: React.ReactNode
  className?: string
}

interface BreadcrumbLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

interface BreadcrumbPageProps {
  children: React.ReactNode
  className?: string
}

interface BreadcrumbSeparatorProps {
  children?: React.ReactNode
  className?: string
}

interface BreadcrumbEllipsisProps {
  className?: string
}
```

---

## Variants

| Variant | Use For | Text Color |
|---------|---------|------------|
| `Link` | Navigable ancestor pages | `text-muted-foreground` |
| `Link Current` | Current page (last item) | `text-foreground` |
| `Dropdown` | Items with child navigation | `text-muted-foreground` + ChevronDown |
| `Ellipsis` | Collapsed middle items | Ellipsis icon, `text-muted-foreground` |

---

## Styling

### Typography

| Property | Value |
|----------|-------|
| Font | `font-sans` (Adelle Sans Regular) |
| Size | `text-sm` (14px) |
| Weight | `font-normal` |
| Line Height | `leading-5` (20px) |

### Dropdown Item

| Property | Value |
|----------|-------|
| Gap | `gap-1` (4px) between text and icon |
| Text Overflow | `truncate` (ellipsis on overflow) |
| Border Radius | `rounded-xs` (2px) for focus state |

### Ellipsis Item

| Property | Value |
|----------|-------|
| Container | `size-9` (36×36px) |
| Icon | `size-4` (16px) centered |

---

## Separators

| Type | Icon | Size | Color |
|------|------|------|-------|
| Chevron (default) | `ChevronRight` | `size-[15px]` | `text-muted-foreground` |
| Slash | `Slash` | `size-4` | `text-muted-foreground` |

---

## Icons

**Separator:** `size-[15px]` (15px)
**Dropdown/Ellipsis:** `size-4` (16px)
**Color:** `text-muted-foreground` (#71717a)

| Icon | Use For |
|------|---------|
| `ChevronRight` | Default separator |
| `Slash` | Alternative separator |
| `ChevronDown` | Dropdown indicator |
| `Ellipsis` | Collapsed items |

---

## States

| State | Text Color | Implementation |
|-------|------------|----------------|
| Default | `text-muted-foreground` | Base appearance |
| Hover | `text-foreground` | `hover:text-foreground` |
| Focus | `text-foreground` | Focus ring with `rounded-xs` |
| Current | `text-foreground` | Non-clickable, last item |

---

## Common Patterns

### Basic
```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### With Ellipsis
```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis className="size-9" />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### With Dropdown
```tsx
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          Components
          <ChevronDown className="size-[15px]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Button</DropdownMenuItem>
          <DropdownMenuItem>Card</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Custom Separator (Slash)
```tsx
import { Slash } from "lucide-react"

<BreadcrumbSeparator>
  <Slash className="size-4" />
</BreadcrumbSeparator>
```

---

## Component Structure

```tsx
{/* Breadcrumb container */}
<nav aria-label="Breadcrumb">
  <ol className="flex items-center">
    
    {/* BreadcrumbItem - Link */}
    <li className="flex items-center">
      <a href="/" className="text-sm text-muted-foreground hover:text-foreground">
        Home
      </a>
    </li>
    
    {/* BreadcrumbSeparator */}
    <li className="flex items-center">
      <ChevronRight className="size-[15px] text-muted-foreground" />
    </li>
    
    {/* BreadcrumbItem - Ellipsis */}
    <li className="flex size-9 items-center justify-center">
      <Ellipsis className="size-4 text-muted-foreground" />
    </li>
    
    {/* BreadcrumbItem - Dropdown */}
    <li className="flex items-center gap-1 text-sm text-muted-foreground">
      Components
      <ChevronDown className="size-[15px]" />
    </li>
    
    {/* BreadcrumbItem - Current Page */}
    <li className="flex items-center">
      <span className="text-sm text-foreground">
        Current
      </span>
    </li>
    
  </ol>
</nav>
```

---

## Accessibility

- Use `<nav>` element with `aria-label="Breadcrumb"`
- Use `<ol>` for the list structure
- Mark current page with `aria-current="page"`
- Ellipsis should be focusable and expandable

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Last item clickable | Use `BreadcrumbPage` not `BreadcrumbLink` for current |
| Separator after last item | Don't add separator after current page |
| Dropdown not styled | Add `text-sm text-muted-foreground` to DropdownMenuTrigger |
| Too many items | Use `BreadcrumbEllipsis` to collapse middle items |
| Ellipsis not centered | Add `size-9` container with `flex items-center justify-center` |
| ChevronDown wrong size | Use `size-[15px]` not `size-4` for dropdown chevron |

---

## See Also

- **Related Components:** [Navigation Menu](./navigation-menu.md) (primary navigation), [Pagination](./pagination.md) (sequential navigation)
- **Accessibility:** [Navigation Accessibility](../a11y/navigation.md) — Breadcrumb ARIA patterns

---

*Last updated: February 9, 2026*
