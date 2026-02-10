# Input OTP

## Import
```tsx
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp"
```

## Props
```tsx
interface InputOTPProps {
  maxLength: number
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  pattern?: string // REGEXP_ONLY_DIGITS
  className?: string
}

interface InputOTPSlotProps {
  index: number
  className?: string
}
```

---

## Variants

| Variant | Slots | Layout | Width |
|---------|-------|--------|-------|
| `digits-only` | 6 | `[ ][ ][ ][ ][ ][ ]` | 216px |
| `with-separator` | 6 | `[ ][ ] — [ ][ ] — [ ][ ]` | 296px |
| `simple` | 6 | `[ ][ ][ ] — [ ][ ][ ]` | 256px |
| `with-spacing` | 4 | `[ ]  [ ]  [ ]  [ ]` | 168px |

### Choosing a Variant
- **digits-only** — Standard verification codes (6 digits, no breaks)
- **with-separator** — Grouped as XX-XX-XX with dashes
- **simple** — Two groups XXX-XXX format
- **with-spacing** — 4-digit PINs with visual spacing

---

## Label Option

| Label | Display |
|-------|---------|
| `true` | Shows "Label" text above input |
| `false` | No label, slots only |

---

## Slot States

| State | Border | Ring | Content |
|-------|--------|------|---------|
| Default | `border-input` | — | Empty |
| Focus | `border-input` | `ring-2 ring-ring` | Caret |
| Filled | `border-input` | — | Digit (e.g., "1") |
| Error | `border-destructive` | — | Empty/digit |
| Error (Focus) | `border-destructive` | `ring-2 ring-destructive` | Caret |

**Slot Size:** 36×36px

---

## Common Patterns

### Digits Only
```tsx
<InputOTP maxLength={6}>
  <InputOTPGroup>
    {[0,1,2,3,4,5].map(i => <InputOTPSlot key={i} index={i} />)}
  </InputOTPGroup>
</InputOTP>
```

### With Separator (XX-XX-XX)
```tsx
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} /><InputOTPSlot index={1} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={2} /><InputOTPSlot index={3} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={4} /><InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

### Simple (XXX-XXX)
```tsx
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} /><InputOTPSlot index={1} /><InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} /><InputOTPSlot index={4} /><InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

### With Label
```tsx
<div className="space-y-2">
  <Label>Label</Label>
  <InputOTP maxLength={6}>
    <InputOTPGroup>
      {[0,1,2,3,4,5].map(i => <InputOTPSlot key={i} index={i} />)}
    </InputOTPGroup>
  </InputOTP>
</div>
```

---

## Accessibility

- Built on input-otp library
- Keyboard: digits auto-advance to next slot, Backspace to go back
- Screen reader: slots announced with position context
- Requires label association for form context
- Tab moves between slot groups when using separators

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Slots not grouped | Wrap related slots in `InputOTPGroup` |
| Separator missing | Add `InputOTPSeparator` between groups |
| Wrong maxLength | Match `maxLength` to total slot count |
| Non-numeric input | Add `pattern={REGEXP_ONLY_DIGITS}` |

---

## See Also

- **Related Components:** [Input](./input.md) (standard text input), [Form](./form.md) (form integration)
- **Accessibility:** [Forms Accessibility](../a11y/forms.md) — Input ARIA patterns

---

*Last updated: February 9, 2026*
