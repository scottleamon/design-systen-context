# Toggle

## Import
```tsx
import { Toggle } from "@/components/ui/toggle"
```

## Props
```tsx
interface ToggleProps {
  pressed?: boolean
  onPressedChange?: (pressed: boolean) => void
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  disabled?: boolean
  className?: string
  children: React.ReactNode
}
```

---

## Structure

| Part | Tailwind |
|------|----------|
| Base | `inline-flex items-center justify-center rounded-md gap-2 text-sm font-semibold text-foreground` |
| Icon | `size-4` (16px) |
| Text | `text-sm font-semibold leading-normal text-foreground` |

---

## Variants

| Variant | Off State | On State |
|---------|-----------|----------|
| default | `bg-transparent` | `bg-accent` |
| outline | `border border-input bg-transparent shadow-xs` | `bg-accent` |

### Choosing a Variant
- **Default:** Use for toolbars and compact controls
- **Outline:** Use when you need a visible boundary in the off state

---

## Sizes

| Size | Height | Padding | Use For |
|------|--------|---------|---------|
| sm | `h-8` (32px) | `px-1.5` | Compact toolbars |
| default | `h-9` (36px) | `px-2` | Standard controls |
| lg | `h-10` (40px) | `px-2.5` | Prominent actions |

---

## Icons

**Size:** `size-4` (16px)  
**Spacing:** `gap-2` (8px between icon and text)

```tsx
<Toggle>
  <Bold className="size-4" />
</Toggle>
```

---

## States

| State | Styling |
|-------|---------|
| Default (off) | `bg-transparent` |
| Hover | `hover:bg-muted hover:text-muted-foreground` |
| Focus | `ring-[3px] ring-ring/50` |
| Pressed (on) | `bg-accent text-accent-foreground` |
| Disabled | `opacity-50 pointer-events-none` |

---

## Common Patterns

### Icon Only
```tsx
<Toggle aria-label="Toggle bold">
  <Bold className="size-4" />
</Toggle>
```

### With Text
```tsx
<Toggle>
  <Italic className="size-4" />
  Italic
</Toggle>
```

### Outline Variant
```tsx
<Toggle variant="outline">
  <Underline className="size-4" />
</Toggle>
```

### Text Only
```tsx
<Toggle>Text</Toggle>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Toggle doesn't show pressed state | Use `pressed` prop for controlled state |
| Icon not centered | Ensure icon has `size-4` class |
| No focus ring visible | Check `ring-ring` color is defined |

---

*Last updated: December 19, 2024*

