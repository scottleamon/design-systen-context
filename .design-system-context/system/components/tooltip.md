# Tooltip

## Import
```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
```

## Props
```tsx
interface TooltipContentProps {
  side?: "top" | "bottom" | "left" | "right"
  sideOffset?: number
  className?: string
  children: React.ReactNode
}
```

---

## Structure

| Part | Tailwind |
|------|----------|
| TooltipContent | `bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-xs max-w-sm` |
| Arrow | `size-2.5` (10px), `fill-primary` |
| Text | `text-xs font-normal leading-normal text-primary-foreground` (12px) |

---

## Positions

| Side | Arrow Position | Use For |
|------|----------------|---------|
| top | Bottom center of tooltip | Default, most common |
| bottom | Top center of tooltip | When space above is limited |
| left | Right center of tooltip | Horizontal layouts |
| right | Left center of tooltip | Horizontal layouts |

---

## Specs

| Property | Value |
|----------|-------|
| Background | `bg-primary` |
| Text color | `text-primary-foreground` |
| Font size | `text-xs` (12px) |
| Line height | `leading-normal` (16px) |
| Padding | `px-3 py-1.5` (12px × 6px) |
| Border radius | `rounded-md` (8px) |
| Max width | `max-w-sm` (384px) |
| Arrow size | `size-2.5` (10px) |

---

## Common Patterns

### Basic Tooltip
```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>This is a tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### With Position
```tsx
<TooltipContent side="right">
  <p>Tooltip on the right</p>
</TooltipContent>
```

### Icon Button with Tooltip
```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="icon">
      <Settings className="size-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>Settings</TooltipContent>
</Tooltip>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Tooltip not showing | Wrap with `<TooltipProvider>` at app root |
| Arrow not visible | Ensure `sideOffset` has default value (usually 4) |
| Tooltip clipped | Adjust `side` prop or use `avoidCollisions` |
| Text too long | Tooltip respects `max-w-sm`, text will wrap |

---

*Last updated: December 19, 2024*

