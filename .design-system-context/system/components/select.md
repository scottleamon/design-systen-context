# Select

## Import
```tsx
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
```

## Props
```tsx
interface SelectProps {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
}

interface SelectTriggerProps {
  className?: string
  children: React.ReactNode
}

interface SelectItemProps {
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
| SelectTrigger | `h-9 px-3 py-2 gap-2 bg-input border border-input rounded-md shadow-xs` |
| Placeholder | `text-sm text-muted-foreground` |
| Selected value | `text-sm text-foreground` |
| Chevron icon | `size-4 text-muted-foreground` |
| SelectContent | `bg-popover border border-border rounded-md shadow-md p-1` |
| SelectItem | `pl-2 pr-8 py-1.5 gap-2 rounded-sm text-sm text-popover-foreground` |
| SelectItem hover | `bg-accent text-accent-foreground` |
| SelectLabel | `px-2 py-1.5 text-xs font-semibold text-muted-foreground` |
| Check icon | `size-4 absolute right-2` |

---

## States

| State | Trigger Appearance |
|-------|-------------------|
| Default | `border-input bg-input` placeholder visible |
| Focus | `ring-2 ring-ring ring-offset-2` |
| Filled | Selected value in `text-foreground` |
| Filled (Focus) | Ring + selected value |
| Disabled | `opacity-50 cursor-not-allowed` |

---

## Item Variants

| Variant | Use For | Implementation |
|---------|---------|----------------|
| Default | Standard selection | Text only, check on selected |
| With Icon | Visual identification | Icon (size-2.5) + text + check |
| Checkbox | Multi-appearance | Circle indicator + text + check |

---

## Common Patterns

### Basic Select
```tsx
<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

### With Label and Description
```tsx
<div className="space-y-2">
  <Label htmlFor="framework" className="font-semibold text-sm">
    Label
  </Label>
  <Select>
    <SelectTrigger id="framework" className="w-[200px]">
      <SelectValue placeholder="Placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="next">Next.js</SelectItem>
      <SelectItem value="remix">Remix</SelectItem>
    </SelectContent>
  </Select>
  <p className="text-sm text-muted-foreground">
    This is a select description.
  </p>
</div>
```

### With Groups
```tsx
<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="carrot">Carrot</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

### Scrollable List
```tsx
<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Large list" />
  </SelectTrigger>
  <SelectContent className="max-h-[200px]">
    {items.map((item) => (
      <SelectItem key={item.value} value={item.value}>
        {item.label}
      </SelectItem>
    ))}
  </SelectContent>
</Select>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Placeholder not showing | Use `<SelectValue placeholder="..." />` |
| Check icon misaligned | Item has `pr-8` to reserve space |
| Width inconsistent | Set explicit width: `w-[200px]` or `w-full` |
| Scroll not showing | Add `max-h-[200px]` to SelectContent |

---

*Last updated: December 19, 2025*
