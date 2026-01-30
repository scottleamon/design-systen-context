# Slider

## Import
```tsx
import { Slider } from "@/components/ui/slider"
```

## Props
```tsx
interface SliderProps {
  value?: number[]
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
  onValueChange?: (value: number[]) => void
  disabled?: boolean
  orientation?: "horizontal" | "vertical"
  className?: string
}
```

---

## Structure

| Part | Tailwind |
|------|----------|
| Root | `relative flex w-full touch-none select-none items-center` |
| Track | `relative h-1.5 w-full grow overflow-hidden rounded-full bg-muted` |
| Range (filled) | `absolute h-full bg-primary rounded-full` |
| Thumb | `size-4 rounded-full border border-primary bg-background shadow-sm` |

---

## Thumb States

| State | Tailwind |
|-------|----------|
| Default | `size-4 rounded-full border border-primary bg-background shadow-sm` |
| Hover | `ring-2 ring-muted-foreground/50` (outer glow) |
| Focus | `ring-2 ring-ring ring-offset-2` |
| Disabled | `opacity-50 pointer-events-none` |

---

## Variants

| Variant | Use For | Value Format |
|---------|---------|--------------|
| Single | Volume, brightness | `defaultValue={[50]}` |
| Range | Price range, min/max | `defaultValue={[25, 75]}` |

---

## Common Patterns

### Single Value
```tsx
<Slider defaultValue={[50]} max={100} step={1} />
```

### Range Selection
```tsx
<Slider defaultValue={[25, 75]} max={100} step={1} />
```

### With Label and Value Display
```tsx
const [value, setValue] = useState([50])

<div className="space-y-2">
  <div className="flex justify-between">
    <Label>Volume</Label>
    <span className="text-sm text-muted-foreground">{value}%</span>
  </div>
  <Slider
    value={value}
    onValueChange={setValue}
    max={100}
    step={1}
  />
</div>
```

### Vertical Orientation
```tsx
<Slider
  defaultValue={[50]}
  max={100}
  orientation="vertical"
  className="h-[200px]"
/>
```

---

## Sizing

| Part | Value |
|------|-------|
| Track height | `h-1.5` (6px) |
| Thumb size | `size-4` (16px) |
| Track width | `w-full` (horizontal) |
| Vertical height | Custom via `className` |

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Value must be array | Use `value={[50]}` not `value={50}` |
| Range needs two values | `defaultValue={[25, 75]}` |
| Vertical needs height | Add `className="h-[200px]"` |
| Controlled not updating | Use `onValueChange` callback |
| Thumb touch target small | Consider wrapper padding for mobile |

---

*Last updated: December 19, 2024*
