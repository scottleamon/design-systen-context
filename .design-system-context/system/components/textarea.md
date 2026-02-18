# Textarea

## Import
```tsx
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
```

## Props
```tsx
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}
```

---

## Structure

| Part | Tailwind |
|------|----------|
| Textarea | `min-h-[60px] w-full px-3 py-2 rounded-md bg-background border border-input shadow-xs text-sm` |
| Label | `text-sm font-semibold leading-none text-foreground` |
| Description | `text-sm font-normal leading-normal text-muted-foreground` |
| Placeholder | `text-muted-foreground` |
| Container | `flex flex-col gap-2` |

---

## States

| State | Border | Ring | Text |
|-------|--------|------|------|
| Default | `border-input` | — | `text-foreground` |
| Filled | `border-input` | — | `text-foreground` |
| Focus | `border-ring` | `ring-[3px] ring-ring/50` | `text-foreground` |
| Disabled | `border-input` | — | `opacity-50 cursor-not-allowed` |
| Error | `border-destructive` | — | `text-foreground` |
| Error (Focus) | `border-destructive` | `ring-[3px] ring-destructive/50` | `text-foreground` |

---

## Common Patterns

### Basic Textarea
```tsx
<Textarea placeholder="Type your message here" />
```

### With Label
```tsx
<div className="flex flex-col gap-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Type your message here" />
</div>
```

### With Label and Description
```tsx
<div className="flex flex-col gap-2">
  <Label htmlFor="bio">Bio</Label>
  <Textarea id="bio" placeholder="Tell us about yourself" />
  <p className="text-sm text-muted-foreground">
    Your bio will be visible on your public profile.
  </p>
</div>
```

### Disabled
```tsx
<Textarea 
  placeholder="Type your message here" 
  disabled 
/>
```

### Error State
```tsx
<div className="flex flex-col gap-2">
  <Label htmlFor="message">Message</Label>
  <Textarea 
    id="message" 
    placeholder="Type your message here"
    className="border-destructive focus-visible:ring-destructive/50"
  />
  <p className="text-sm text-destructive">
    Message is required.
  </p>
</div>
```

### With Character Count
```tsx
const [value, setValue] = useState("")
const maxLength = 280

<div className="flex flex-col gap-2">
  <Label htmlFor="tweet">Tweet</Label>
  <Textarea 
    id="tweet"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    maxLength={maxLength}
    placeholder="What's happening?"
  />
  <p className="text-sm text-muted-foreground text-right">
    {value.length}/{maxLength}
  </p>
</div>
```

### Fixed Height
```tsx
<Textarea 
  placeholder="Type your message here"
  className="h-32 resize-none"
/>
```

---

## Accessibility

- Standard HTML textarea enhanced with design tokens
- Keyboard: standard text input behavior
- Screen reader: label announced via `htmlFor`/`id` association
- Requirements: `aria-describedby` for hints, `aria-invalid` for errors
- Focus visible ring applied automatically

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Textarea not resizing | Default allows resize; use `resize-none` to disable |
| Label not clickable | Use `htmlFor` matching Textarea `id` |
| Error ring color | Override with `focus-visible:ring-destructive/50` |
| Min height too small | Default is `min-h-[60px]`, adjust as needed |

---

## See Also

- **Related Components:** [Input](./input.md) (single-line input), [Form](./form.md) (form integration)
- **Accessibility:** [Forms Accessibility](../a11y/forms.md) — Textarea ARIA patterns

---

*Last updated: February 9, 2026*

