# Radio Group

## Import
```tsx
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
```

## Props
```tsx
interface RadioGroupProps {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  className?: string
}

interface RadioGroupItemProps {
  value: string
  id?: string
  disabled?: boolean
  className?: string
}
```

---

## Structure

| Part | Tailwind |
|------|----------|
| RadioGroup | `flex flex-col gap-3` |
| Item row | `flex items-start gap-3` |
| RadioGroupItem | `size-4 rounded-full border border-border bg-input shadow-xs` |
| Selected indicator | `size-2 rounded-full bg-primary` (centered) |
| Label | `text-sm font-semibold leading-none text-foreground` |
| Description | `text-sm text-muted-foreground` |

---

## Types

| Type | Use For | Implementation |
|------|---------|----------------|
| Default | Standard selection lists | Radio + label inline |
| Box | Prominent choices, cards | Wrap in bordered container with `border rounded-lg p-4` |

---

## States

| State | Implementation |
|-------|----------------|
| Default | `border-border bg-input` |
| Selected | Inner circle `bg-primary` visible |
| Focus | `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` |
| Disabled | `disabled:opacity-50 disabled:cursor-not-allowed` |

---

## Common Patterns

### Basic Radio Group
```tsx
<RadioGroup defaultValue="option-1">
  <div className="flex items-start gap-3">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option One</Label>
  </div>
  <div className="flex items-start gap-3">
    <RadioGroupItem value="option-2" id="option-2" />
    <Label htmlFor="option-2">Option Two</Label>
  </div>
</RadioGroup>
```

### With Descriptions
```tsx
<RadioGroup defaultValue="comfortable" className="flex flex-col gap-3">
  <div className="flex items-start gap-3">
    <RadioGroupItem value="default" id="r1" className="mt-0.5" />
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="r1" className="font-semibold leading-none">Default</Label>
      <p className="text-sm text-muted-foreground">
        This is a radio description.
      </p>
    </div>
  </div>
  <div className="flex items-start gap-3">
    <RadioGroupItem value="comfortable" id="r2" className="mt-0.5" />
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="r2" className="font-semibold leading-none">Comfortable</Label>
      <p className="text-sm text-muted-foreground">
        This is a radio description.
      </p>
    </div>
  </div>
</RadioGroup>
```

### Box Style
```tsx
<RadioGroup defaultValue="card" className="flex flex-col gap-3">
  <Label
    htmlFor="card"
    className="flex items-start gap-3 border rounded-lg p-4 cursor-pointer has-[[data-state=checked]]:border-primary"
  >
    <RadioGroupItem value="card" id="card" className="mt-0.5" />
    <div className="flex flex-col gap-1.5">
      <span className="font-semibold text-sm leading-none">Card Option</span>
      <span className="text-sm text-muted-foreground">This is a radio description.</span>
    </div>
  </Label>
</RadioGroup>
```

---

## Accessibility

- Built on Radix RadioGroup — handles keyboard and focus automatically
- Keyboard: Arrow keys to navigate options, Space to select
- Screen reader: announces group label and selected option
- Requires label association via `Label` component
- Uses roving tabindex for focus management

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Label not clickable | Wrap with `<Label htmlFor>` matching radio `id` |
| Radio misaligned with multiline | Add `mt-0.5` to RadioGroupItem |
| Box not highlighting on select | Use `has-[[data-state=checked]]:border-primary` |
| Horizontal layout needed | Change RadioGroup to `flex-row` |

---

## See Also

- **Related Components:** [Form](./form.md) (form integration), [Checkbox](./checkbox.md) (multi-select alternative), [Select](./select.md) (dropdown alternative)
- **Accessibility:** [Forms Accessibility](../a11y/forms.md) — Radio group ARIA patterns

---

*Last updated: February 9, 2026*




