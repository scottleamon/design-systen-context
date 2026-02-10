# Toggle Group

## Import
```tsx
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
```

## Props
```tsx
interface ToggleGroupProps {
  type: "single" | "multiple"
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

interface ToggleGroupItemProps {
  value: string
  disabled?: boolean
  className?: string
  children: React.ReactNode
}
```

---

## Structure

| Part | Tailwind |
|------|----------|
| ToggleGroup (default) | `flex items-center gap-1` |
| ToggleGroup (outline) | `flex items-center` (items joined) |
| ToggleGroupItem | `inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold` |
| Icon | `size-4` (16px) |

---

## Variants

| Variant | Container | Item Styling |
|---------|-----------|--------------|
| default | `gap-1` (4px between items) | `bg-transparent` → `bg-accent` when pressed |
| outline | Items joined, borders collapse | `border border-input bg-background shadow-xs` |

### Outline Border Radius
- **First item:** `rounded-l-md rounded-r-none`
- **Middle items:** `rounded-none`
- **Last item:** `rounded-r-md rounded-l-none`
- **Overlap:** `mr-[-1px]` to collapse borders

---

## Sizes

| Size | Height | Padding |
|------|--------|---------|
| sm | `h-8` (32px) | `px-3` |
| default | `h-9` (36px) | `px-2` |
| lg | `h-10` (40px) | `px-2.5` |

---

## States

| State | Item Styling |
|-------|--------------|
| Default (off) | `bg-transparent` or `bg-background` (outline) |
| Hover | `hover:bg-muted hover:text-muted-foreground` |
| Pressed (on) | `bg-accent text-accent-foreground` |
| Focus | `ring-[3px] ring-ring/50` |
| Disabled | `opacity-50 pointer-events-none` |

---

## Common Patterns

### Icon Only (Single Select)
```tsx
<ToggleGroup type="single" variant="default">
  <ToggleGroupItem value="bold"><Bold className="size-4" /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><Italic className="size-4" /></ToggleGroupItem>
  <ToggleGroupItem value="underline"><Underline className="size-4" /></ToggleGroupItem>
</ToggleGroup>
```

### Text (Single Select with Outline)
```tsx
<ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="all">All</ToggleGroupItem>
  <ToggleGroupItem value="missed">Missed</ToggleGroupItem>
</ToggleGroup>
```

### Multiple Selection
```tsx
<ToggleGroup type="multiple" variant="default">
  <ToggleGroupItem value="bold"><Bold className="size-4" /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><Italic className="size-4" /></ToggleGroupItem>
</ToggleGroup>
```

---

## Accessibility

- Built on Radix ToggleGroup — handles keyboard and focus automatically
- Keyboard: Arrow keys to navigate between items, Enter/Space to toggle
- Screen reader: announces group with item pressed states
- Uses roving tabindex for focus management
- Single vs. multiple selection mode affects `aria-pressed`

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Border double-thick between items | Use `mr-[-1px]` on items (except last) |
| Wrong border radius on middle items | Apply `rounded-none` to middle items |
| Selection not working | Ensure `type` prop is set to "single" or "multiple" |

---

## See Also

- **Related Components:** [Toggle](./toggle.md) (single toggle), [Tabs](./tabs.md) (content switching)
- **Accessibility:** [Navigation Accessibility](../a11y/navigation.md) — Toggle group ARIA patterns

---

*Last updated: February 9, 2026*

