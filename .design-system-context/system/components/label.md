# Label

## Import
```tsx
import { Label } from "@/components/ui/label"
```

## Props
```tsx
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string
  className?: string
  children: React.ReactNode
}
```

---

## Styling

| Property | Value | Tailwind |
|----------|-------|----------|
| Font | Adelle Sans Semibold | `font-semibold` |
| Size | 14px | `text-sm` |
| Line height | 14px (1:1) | `leading-none` |
| Color | Default text | `text-foreground` |

---

## States

| State | Implementation |
|-------|----------------|
| Default | `text-foreground font-semibold text-sm leading-none` |
| Disabled | `peer-disabled:opacity-70 peer-disabled:cursor-not-allowed` |
| Error | `text-destructive` (via FormLabel or manual) |

---

## Common Patterns

### Basic Label
```tsx
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />
```

### With Input (Stacked)
```tsx
<div className="space-y-2">
  <Label htmlFor="name">Name</Label>
  <Input id="name" placeholder="Enter your name" />
</div>
```

### With Checkbox
```tsx
<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>
```

### With Description
```tsx
<div className="flex items-start gap-2">
  <Checkbox id="marketing" className="mt-0.5" />
  <div className="flex flex-col gap-1.5">
    <Label htmlFor="marketing">Marketing emails</Label>
    <p className="text-sm text-muted-foreground">
      Receive emails about new products.
    </p>
  </div>
</div>
```

### Horizontal Layout
```tsx
<div className="flex items-center gap-4">
  <Label htmlFor="name" className="w-16 shrink-0 text-right">Name</Label>
  <Input id="name" placeholder="Enter name" />
</div>
```

### Required Field
```tsx
<Label htmlFor="email">
  Email <span className="text-destructive">*</span>
</Label>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Label not clickable | Match `htmlFor` to input `id` |
| Disabled label same opacity | Add `peer` to input, `peer-disabled:opacity-70` to label |
| Label misaligned with checkbox | Use `items-center` for single line, `items-start` with description |
| Font not semibold | Label requires explicit `font-semibold` class |
| Line height too tall | Use `leading-none` for form labels |
| Error state not showing | Use FormLabel or manually add `text-destructive` |

---

*Last updated: December 18, 2025*

