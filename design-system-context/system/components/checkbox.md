# Checkbox

## Import
```tsx
import { Checkbox } from "@/components/ui/checkbox"
```

## Props
```tsx
interface CheckboxProps {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  id?: string
  value?: string
  name?: string
  required?: boolean
  className?: string
}
```

---

## Variants

| Variant | Use For | Tailwind |
|---------|---------|----------|
| `checked` | Selected state | `bg-primary border-primary` + Check icon |
| `unchecked` | Unselected state | `bg-background border-input` |

### Choosing a Variant
- Checkboxes for binary choices, multi-select lists, terms acceptance
- Use radio buttons when only one option can be selected

---

## Styling

### Checkbox Box
| Property | Value | Tailwind |
|----------|-------|----------|
| Size | 16×16px | `size-4` |
| Border Radius | 4px | `rounded-[4px]` |
| Border | 1px solid | `border` |
| Shadow | Subtle | `shadow-xs` |

### Checked State
| Property | Value | Tailwind |
|----------|-------|----------|
| Background | `bg-primary` | #19518b |
| Border | `border-primary` | #19518b |
| Icon | Check centered | `size-3.5` (14×14px) |
| Icon Color | `text-primary-foreground` | #fafafa (white) |

### Unchecked State
| Property | Value | Tailwind |
|----------|-------|----------|
| Background | `bg-background` | #fafafa |
| Border | `border-input` | #e4e4e7 |

### Typography
| Element | Font | Size | Line Height | Color |
|---------|------|------|-------------|-------|
| Label | Adelle Sans Semibold | 14px (`text-sm`) | `leading-none` | `text-foreground` |
| Description | Adelle Sans Regular | 14px (`text-sm`) | 20px (`leading-5`) | `text-muted-foreground` |

### Layout
| Property | Value | Tailwind |
|----------|-------|----------|
| Gap (checkbox to label) | 8px | `gap-2` |
| Gap (label to description) | 6px | `gap-1.5` |
| Alignment (with description) | Top | `items-start` |
| Alignment (label only) | Center | `items-center` |

---

## Sizes

| Size | Dimensions | Tailwind |
|------|------------|----------|
| Default | 16×16px | `size-4` |

---

## Icons

**Icon:** `Check` from Lucide
**Size:** `size-3.5` (14×14px)
**Color:** `text-primary-foreground` (white when checked)

---

## States

| State | Checkbox | Label | Implementation |
|-------|----------|-------|----------------|
| Default | Base appearance | Normal | — |
| Focus | `ring-3 ring-ring` | Normal | `focus-visible:ring-3 focus-visible:ring-ring` |
| Disabled | `opacity-50` | `opacity-70` | `disabled:opacity-50` |
| Pressed | `opacity-60` | Normal | `active:opacity-60` |

---

## Common Patterns

### Basic Checkbox
```tsx
<Checkbox id="terms" />
```

### With Label
```tsx
<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms" className="font-semibold text-sm leading-none">
    Accept terms and conditions
  </Label>
</div>
```

### With Label and Description
```tsx
<div className="flex items-start gap-2">
  <Checkbox id="marketing" className="mt-0.5" />
  <div className="flex flex-col gap-1.5">
    <Label htmlFor="marketing" className="font-semibold text-sm leading-none">
      Marketing emails
    </Label>
    <p className="text-sm leading-5 text-muted-foreground">
      Receive emails about new products and features.
    </p>
  </div>
</div>
```

### Controlled Checkbox
```tsx
const [checked, setChecked] = useState(false)

<div className="flex items-center gap-2">
  <Checkbox 
    id="controlled" 
    checked={checked} 
    onCheckedChange={setChecked} 
  />
  <Label htmlFor="controlled" className="font-semibold text-sm leading-none">
    Controlled checkbox
  </Label>
</div>
```

### Disabled State
```tsx
<div className="flex items-center gap-2">
  <Checkbox id="disabled" disabled />
  <Label htmlFor="disabled" className="font-semibold text-sm leading-none opacity-70">
    Disabled option
  </Label>
</div>
```

### Checkbox Group
```tsx
<div className="space-y-3">
  <div className="flex items-start gap-2">
    <Checkbox id="option1" className="mt-0.5" />
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="option1" className="font-semibold text-sm leading-none">
        Option 1
      </Label>
      <p className="text-sm leading-5 text-muted-foreground">
        Description for option 1.
      </p>
    </div>
  </div>
  <div className="flex items-start gap-2">
    <Checkbox id="option2" className="mt-0.5" />
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="option2" className="font-semibold text-sm leading-none">
        Option 2
      </Label>
      <p className="text-sm leading-5 text-muted-foreground">
        Description for option 2.
      </p>
    </div>
  </div>
</div>
```

---

## Accessibility

- Always associate with a label using `id` and `htmlFor`
- Space key toggles the checkbox
- Focus ring visible on keyboard navigation
- Use `aria-describedby` for description text

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Label not clickable | Ensure `htmlFor` matches checkbox `id` |
| Checkbox misaligned with multi-line label | Add `mt-0.5` to checkbox, use `items-start` on container |
| Description not associated | Add `aria-describedby` pointing to description id |
| Indeterminate state needed | Use `data-state="indeterminate"` (Radix feature) |
| Label text not semibold | Add `font-semibold` to Label |
| Disabled label opacity wrong | Add `opacity-70` to disabled labels |

---

## See Also

- **Related Components:** [Form](./form.md) (form integration), [Switch](./switch.md) (alternative toggle), [Radio Group](./radio-group.md) (exclusive selection)
- **Accessibility:** [Forms Accessibility](../a11y/forms.md) — Checkbox ARIA patterns

---

*Last updated: February 9, 2026*
