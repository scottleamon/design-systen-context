# Popover

## Import
```tsx
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
```

## Props
```tsx
interface PopoverProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  modal?: boolean
}

interface PopoverContentProps {
  align?: "start" | "center" | "end"
  side?: "top" | "right" | "bottom" | "left"
  sideOffset?: number
  className?: string
  children: React.ReactNode
}
```

---

## Structure

| Part | Tailwind |
|------|----------|
| `PopoverContent` | `bg-popover text-popover-foreground border rounded-md shadow-md p-4 w-80` |
| Header title | `font-semibold text-base leading-none text-popover-foreground` |
| Header description | `text-sm text-muted-foreground` |
| Header spacing | `space-y-2` (gap between title and description) |
| Content spacing | `gap-4` (between header and content sections) |

---

## Alignment

| Prop | Values | Default |
|------|--------|---------|
| `align` | `start`, `center`, `end` | `center` |
| `side` | `top`, `right`, `bottom`, `left` | `bottom` |
| `sideOffset` | number (px) | `4` |

---

## Common Patterns

### Basic Popover
```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p className="text-sm">Content goes here.</p>
  </PopoverContent>
</Popover>
```

### With Header
```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Settings</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-2">
      <h4 className="font-semibold leading-none">Dimensions</h4>
      <p className="text-sm text-muted-foreground">
        Set the dimensions for the layer.
      </p>
    </div>
  </PopoverContent>
</Popover>
```

### With Form Grid
```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Dimensions</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <h4 className="font-semibold leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="width" className="text-right">Width</Label>
          <Input id="width" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="height" className="text-right">Height</Label>
          <Input id="height" className="col-span-2 h-8" />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>
```

### Controlled
```tsx
const [open, setOpen] = useState(false)

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button>Toggle</Button>
  </PopoverTrigger>
  <PopoverContent>
    <Button size="sm" onClick={() => setOpen(false)}>Close</Button>
  </PopoverContent>
</Popover>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Trigger not clickable | Add `asChild` prop to PopoverTrigger |
| Content width varies | Set explicit `className="w-80"` |
| Form labels misaligned | Use `grid grid-cols-3` with `text-right` on labels |
| Z-index conflicts | PopoverContent uses `z-50` by default |

---

*Last updated: December 19, 2025*
