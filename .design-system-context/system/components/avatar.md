# Avatar

## Import
```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
```

## Props
```tsx
interface AvatarProps {
  className?: string
  children: React.ReactNode
}

interface AvatarImageProps {
  src: string
  alt: string
  className?: string
  onLoadingStatusChange?: (status: "loading" | "loaded" | "error") => void
}

interface AvatarFallbackProps {
  className?: string
  children: React.ReactNode  // Typically 1-2 character initials
  delayMs?: number           // Delay before showing fallback
}
```

---

## Variants

| Variant | Use For | Implementation |
|---------|---------|----------------|
| Image | User has profile picture | `<AvatarImage src="..." />` |
| Fallback | No image or image fails | `<AvatarFallback>CN</AvatarFallback>` |

### Shapes

| Shape | Use For | Tailwind |
|-------|---------|----------|
| Circle | Most common, social media, modern UIs | `rounded-full` (default) |
| Rounded | Workspace/team contexts, app icons | `rounded-2xl` (16px) |

---

## Sizes

| Size | Dimensions | Tailwind | Use For |
|------|------------|----------|---------|
| 12 | 48×48px | `size-12` | Profile headers, user cards |
| 10 | 40×40px | `size-10` | Navigation, dropdowns |
| 8 | 32×32px | `size-8` | Comments, lists (default) |
| 6 | 24×24px | `size-6` | Compact lists, mentions |
| 5 | 20×20px | `size-5` | Inline, tags |

---

## Styling

### Fallback

| Property | Value |
|----------|-------|
| Background | `bg-accent` (#e4eefa) |
| Text Color | `text-accent-foreground` (#19518b) |
| Font | `font-sans` (Adelle Sans Regular) |
| Font Size | `text-sm` (14px) |
| Line Height | `leading-5` (20px) |
| Text Align | `text-center` |

### Fallback Text Size by Avatar Size

| Avatar Size | Fallback Text Size |
|-------------|-------------------|
| 12 (48px) | `text-sm` (14px) |
| 10 (40px) | `text-sm` (14px) |
| 8 (32px) | `text-xs` (12px) |
| 6 (24px) | `text-xs` (12px) |
| 5 (20px) | `text-[10px]` |

### Image Loading State

| Property | Value |
|----------|-------|
| Background | `bg-muted` (#f4f4f5) |

---

## States

| State | Implementation |
|-------|----------------|
| Active | Base appearance (default) |
| Focus | `ring-3 ring-ring` (rgba(163,163,163,0.5)) |

Focus state uses a 3px ring with the `ring` color token.

---

## Common Patterns

### Basic with Fallback
```tsx
<Avatar>
  <AvatarImage src="/user.jpg" alt="@username" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

### Different Sizes
```tsx
// Large (48px)
<Avatar className="size-12">
  <AvatarImage src="/user.jpg" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

// Small (24px)
<Avatar className="size-6">
  <AvatarImage src="/user.jpg" />
  <AvatarFallback className="text-xs">CN</AvatarFallback>
</Avatar>
```

### Rounded Square Shape
```tsx
<Avatar className="rounded-2xl">
  <AvatarImage src="/user.jpg" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

### Avatar Group (Stacked)
```tsx
<div className="flex pl-0 pr-2">
  <Avatar className="size-12 border-2 border-background -mr-2">
    <AvatarImage src="/user1.jpg" />
    <AvatarFallback>U1</AvatarFallback>
  </Avatar>
  <Avatar className="size-12 border-2 border-background -mr-2">
    <AvatarImage src="/user2.jpg" />
    <AvatarFallback>U2</AvatarFallback>
  </Avatar>
  <Avatar className="size-12 border-2 border-background -mr-2">
    <AvatarFallback>+3</AvatarFallback>
  </Avatar>
</div>
```

### With User Info
```tsx
<div className="flex items-center gap-3">
  <Avatar>
    <AvatarImage src="/user.jpg" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <div>
    <p className="text-sm font-medium">John Doe</p>
    <p className="text-xs text-muted-foreground">john@example.com</p>
  </div>
</div>
```

---

## Component Structure

```tsx
{/* Avatar container */}
<div className="relative size-12 overflow-hidden rounded-full">
  
  {/* AvatarImage */}
  <img 
    src="/user.jpg" 
    alt="User" 
    className="absolute inset-0 size-full object-cover" 
  />
  
  {/* AvatarFallback (shown when image fails/loading) */}
  <div className="absolute inset-0 flex items-center justify-center bg-accent text-sm text-accent-foreground">
    CN
  </div>
  
</div>

{/* Rounded shape variant */}
<div className="relative size-12 overflow-hidden rounded-2xl">
  ...
</div>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Fallback shows briefly before image | Use `delayMs` prop on AvatarFallback |
| Small avatar text too big | Use `text-xs` for size-8 and smaller, `text-[10px]` for size-5 |
| Group avatars not overlapping | Use `-mr-2` on each avatar (negative right margin) |
| Group avatar borders blend in | Add `border-2 border-background` to each avatar |
| Focus ring not visible | Ensure `ring-ring` token is defined |
| Rounded shape not applying | Use `rounded-2xl` (16px) not `rounded-lg` |

---

*Last updated: December 18, 2025*
