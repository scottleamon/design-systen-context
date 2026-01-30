# Badge

## Import
```tsx
import { Badge } from "@/components/ui/badge"
```

## Props
```tsx
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "destructive" | "verified"
  className?: string
  children: React.ReactNode
}
```

---

## Variants

| Variant | Use For | Background | Text Color |
|---------|---------|------------|------------|
| `default` | Primary actions, main categories | `bg-primary` | `text-primary-foreground` |
| `secondary` | Neutral status, less prominent labels | `bg-secondary` | `text-secondary-foreground` |
| `outline` | Subtle indicators, bordered tags | `bg-transparent` | `text-foreground` |
| `destructive` | Errors, warnings, critical status | `bg-destructive` | `text-destructive-foreground` |
| `verified` | Verified status, trusted items | `bg-primary` | `text-white` (with BadgeCheck icon) |

### Choosing a Variant
- **Default:** Main categories, active status, primary labels
- **Secondary:** Tags, neutral metadata, less important info
- **Outline:** Minimal styling, subtle indicators
- **Destructive:** Errors, warnings, removal actions
- **Verified:** Verified accounts, trusted content (always includes BadgeCheck icon)

---

## Styling

### Typography

| Property | Value |
|----------|-------|
| Font | `font-sans` (Adelle Sans Bold) |
| Size | `text-xs` (12px) |
| Weight | `font-semibold` |
| Line Height | `leading-4` (16px) |

### Dimensions

| Property | Value |
|----------|-------|
| Height | 20px |
| Padding | `px-2 py-0.5` (8px horizontal, 2px vertical) |
| Border Radius | `rounded-md` (8px) |
| Icon Gap | `gap-1` (4px) |

---

## Icons

**Size:** `size-3` (12×12px)
**Spacing:** `gap-1` (4px) - built into badge flex layout

| Icon | Use For |
|------|---------|
| `Check` | Success, completed |
| `BadgeCheck` | Verified status (built into `verified` variant) |
| `AlertCircle` | Warnings, alerts |
| `ArrowRight` | Links, navigation |
| `X` | Removable badges |
| `Star` | Featured items |

---

## States

| State | Implementation |
|-------|----------------|
| Default | Base appearance |
| Hover | Built-in opacity/color change |
| Focus | `ring-1 ring-ring ring-offset-background` with opacity |

---

## Common Patterns

### Basic Variants
```tsx
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="verified">Verified</Badge>
```

### With Icons
```tsx
import { Check, ArrowRight, BadgeCheck } from "lucide-react"

// Left icon
<Badge className="gap-1">
  <Check className="size-3" />
  Approved
</Badge>

// Right icon
<Badge className="gap-1">
  Link
  <ArrowRight className="size-3" />
</Badge>

// Manual verified badge (if not using verified variant)
<Badge className="gap-1">
  <BadgeCheck className="size-3" />
  Verified
</Badge>
```

### Notification Count (Badge Number)
```tsx
// Single digit - circular
<Badge className="size-5 rounded-full p-0 justify-center">8</Badge>

// Double digit
<Badge className="h-5 min-w-5 rounded-full px-1.5 justify-center">99</Badge>

// Overflow
<Badge className="rounded-full px-2">20+</Badge>
```

### In Context
```tsx
// With card title
<div className="flex items-center gap-2">
  <CardTitle>Article Title</CardTitle>
  <Badge variant="secondary">New</Badge>
</div>

// User status
<div className="flex items-center gap-2">
  <Avatar />
  <span>Username</span>
  <Badge variant="verified">Verified</Badge>
</div>
```

---

## Component Structure

```tsx
{/* Standard Badge */}
<div className="inline-flex items-center gap-1 rounded-md bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
  {/* Optional left icon */}
  <Check className="size-3" />
  
  {/* Badge text */}
  Badge
  
  {/* Optional right icon */}
  <ArrowRight className="size-3" />
</div>

{/* Badge Number (circular) */}
<div className="inline-flex size-5 items-center justify-center rounded-full bg-primary p-0 text-xs font-semibold text-primary-foreground">
  8
</div>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Badge too tall | Default height is 20px; use `py-0.5` padding |
| Icon wrong size | Use `size-3` (12px) for badge icons |
| Notification badge not circular | Add `rounded-full` and `size-5` for single digit |
| Need removable badge | Add X icon with click handler |
| Icons not aligned | Use `gap-1` for proper spacing |
| Verified badge missing icon | Use `variant="verified"` which includes BadgeCheck |

---

*Last updated: December 18, 2025*
