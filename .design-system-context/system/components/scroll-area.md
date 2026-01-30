# Scroll Area

## Import
```tsx
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
```

## Props
```tsx
interface ScrollAreaProps {
  type?: "auto" | "always" | "scroll" | "hover"
  scrollHideDelay?: number    // ms before scrollbar hides
  className?: string
  children: React.ReactNode
}

interface ScrollBarProps {
  orientation?: "vertical" | "horizontal"
  className?: string
}
```

---

## Structure

| Part | Tailwind |
|------|----------|
| ScrollArea root | `relative overflow-hidden` |
| Viewport | `h-full w-full rounded-[inherit]` |
| Scrollbar track | `flex touch-none select-none p-0.5 transition-colors` |
| Scrollbar thumb | `relative rounded-full bg-border` |
| Vertical scrollbar | `h-full w-2.5 border-l border-l-transparent` |
| Horizontal scrollbar | `h-2.5 w-full border-t border-t-transparent` |

---

## Scrollbar Visibility

| Type | Behavior |
|------|----------|
| `auto` | Shows when content overflows, hides when idle |
| `always` | Always visible when content overflows |
| `scroll` | Shows only while scrolling |
| `hover` | Shows on hover when content overflows |

---

## Common Patterns

### Vertical Scroll
```tsx
<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    {items.map((item) => (
      <div key={item} className="text-sm">{item}</div>
    ))}
  </div>
</ScrollArea>
```

### Horizontal Scroll
```tsx
<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max gap-4 p-4">
    {items.map((item) => (
      <div key={item} className="w-40 shrink-0">{item}</div>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
```

### Both Directions
```tsx
<ScrollArea className="h-72 w-96 rounded-md border">
  <div className="w-[600px] p-4">
    {/* Wide and tall content */}
  </div>
  <ScrollBar orientation="vertical" />
  <ScrollBar orientation="horizontal" />
</ScrollArea>
```

### Tags/Chips Row
```tsx
<ScrollArea className="w-full whitespace-nowrap">
  <div className="flex gap-2 pb-3">
    {tags.map((tag) => (
      <Badge key={tag} variant="secondary">{tag}</Badge>
    ))}
  </div>
  <ScrollBar orientation="horizontal" className="h-2" />
</ScrollArea>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Horizontal scroll not working | Add `whitespace-nowrap` and explicit `ScrollBar orientation="horizontal"` |
| Content not filling width | Inner content needs `w-max` or explicit width |
| Scrollbar always visible | Default is `auto`; content must overflow to show |
| Border radius not inherited | Add `rounded-md` to both ScrollArea and content wrapper |

---

## Note

> This component is React-specific and has no Figma representation. It wraps Radix UI's ScrollArea primitive with custom styling for the scrollbar thumb (`bg-border`) and track.

---

*Last updated: December 19, 2025*




