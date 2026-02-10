# Button

> [!NOTE]
> **Theme-Aware Component**: Button colors adapt to the active theme (Member/Campus/Admin).
> The `default` variant uses `bg-primary` which will be navy in Member, green in Campus, and neutral in Admin.
> Always use semantic variants, not hard-coded colors.

## Import
```tsx
import { Button } from "@/components/ui/button"
```

## Props
```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
  children: React.ReactNode
}
```

---

## Variants

| Variant | Background | Text Color | Border | Shadow | Theme Behavior |
|---------|------------|------------|--------|--------|----------------|
| `default` | `bg-primary` | `text-primary-foreground` | none | `shadow-xs` | Navy (Member), Green (Campus), Black (Admin) |
| `secondary` | `bg-secondary` | `text-secondary-foreground` | none | `shadow-xs` | Same across themes |
| `destructive` | `bg-destructive` | `text-destructive-foreground` | none | `shadow-xs` | Red across all themes |
| `outline` | `bg-transparent` | `text-primary` | `border border-border` | `shadow-xs` | Border color adapts to theme |
| `ghost` | `bg-transparent` | `text-primary` | none | none | Text color adapts to theme |
| `link` | `bg-transparent` | `text-primary` | none | none | Text color adapts to theme |

### Choosing a Variant
- **Default:** Use for the most important action on a page (one per view ideally)
- **Secondary:** Use for supporting actions that don't compete with primary
- **Destructive:** Reserve for irreversible actions; pair with confirmation dialog
- **Outline/Ghost:** Use for repeated or low-priority actions in toolbars, tables
- **Link:** Use when action should feel like navigation, not a button

---

## Sizes

| Size | Height | Padding | Use For |
|------|--------|---------|---------|
| `default` | `h-9` (36px) | `px-4 py-2` | Standard actions |
| `sm` | `h-8` (32px) | `px-3` | Compact UIs, table rows |
| `lg` | `h-10` (40px) | `px-8` | Hero sections, prominent CTAs |
| `icon` | `size-9` (36×36px) | centered | Icon-only buttons |

---

## Styling

### Typography
- **Font:** Adelle Sans Semibold
- **Size:** `text-sm` (14px)
- **Line height:** `leading-5` (20px)

### Border Radius
- All sizes: `rounded-md` (8px)

### Icon Sizing
- **Size:** `size-4` (16×16px)
- **Spacing:** `gap-2` (8px) between icon and text using flex layout

---

## Icons

```tsx
import { Mail, ArrowRight, LoaderCircle } from "lucide-react"

// Left icon (using gap)
<Button className="gap-2">
  <Mail className="size-4" />
  Login with Email
</Button>

// Right icon (using gap)
<Button className="gap-2">
  Continue
  <ArrowRight className="size-4" />
</Button>

// Icon-only
<Button size="icon" aria-label="Settings">
  <Settings className="size-4" />
</Button>
```

---

## States

| State | Text/Icon | Background | Implementation |
|-------|-----------|------------|----------------|
| Default | Base colors | Base background | — |
| Hover | Base colors | `+10% white overlay` | `hover:bg-primary/90` (or variant equivalent) |
| Focus | Base colors | Base background | `ring-3 ring-ring rounded-md` |
| Pressed | Base colors | Base background | No additional styling (per design preference) |
| Disabled | `opacity-50` | `opacity-50` | `disabled` prop, `pointer-events-none` |
| Loading | Base colors | Base background | `disabled` + `LoaderCircle` with `animate-spin` |

### Focus Ring
```tsx
// Focus state (using focus-visible to prevent click focus)
focus-visible:ring-3 focus-visible:ring-ring focus-visible:outline-none
```

### Hover Effect
Hover applies a 10% white overlay on solid backgrounds:
```tsx
// Default variant hover
hover:bg-[linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.1)),linear-gradient(var(--primary),var(--primary))]

// Or simplified with opacity
hover:bg-primary/90
```

---

## Common Patterns

### Basic Usage
```tsx
<Button>Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
```

### Loading State
```tsx
import { LoaderCircle } from "lucide-react"

<Button disabled className="gap-2">
  <LoaderCircle className="size-4 animate-spin" />
  Please wait
</Button>
```

### As Link (Next.js)
```tsx
import Link from "next/link"

<Button asChild>
  <Link href="/dashboard">Dashboard</Link>
</Button>
```

### Icon Button
```tsx
<Button size="icon" variant="ghost" aria-label="More options">
  <MoreHorizontal className="size-4" />
</Button>
```

### Button Group
```tsx
<div className="flex gap-2">
  <Button variant="outline">Cancel</Button>
  <Button>Save Changes</Button>
</div>
```

---

## Accessibility

- Use `aria-label` for icon-only buttons
- Add `aria-busy="true"` for loading state
- Disabled buttons get `aria-disabled="true"` automatically

```tsx
// Icon-only with accessible name
<Button size="icon" aria-label="Settings">
  <Settings className="size-4" />
</Button>

// Loading with aria-busy
<Button disabled aria-busy="true" className="gap-2">
  <LoaderCircle className="size-4 animate-spin" />
  Saving...
</Button>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Icon-only button has no accessible name | Add `aria-label` prop |
| Loading state still clickable | Always use `disabled` with loading |
| Button inside Link causes hydration error | Use `asChild` prop instead |
| Focus ring visible on click | Use `focus-visible:` not `focus:` |
| Icons misaligned with text | Use `gap-2` on button, `size-4` on icon |
| Hover effect shows wrong on pressed | Pressed state intentionally has no special styling |

---

## See Also

- **Related Components:** [Toggle](./toggle.md) (toggleable button), [Badge](./badge.md) (button with badge)
- **Tokens:** [Colors](../tokens/colors.md) — Theme-aware color tokens

---

*Last updated: February 9, 2026*
