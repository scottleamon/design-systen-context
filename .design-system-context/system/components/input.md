# Input

## Import
```tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
```

## Props
```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "email" | "password" | "file" | "number" | "search" | "tel" | "url"
  placeholder?: string
  disabled?: boolean
  className?: string
}
```

---

## Dimensions

| Property | Value |
|----------|-------|
| Height | 36px (`h-9`) |
| Padding | `px-3 py-1` (12px / 4px) |
| Border radius | `rounded-md` (8px) |
| Border | 1px solid |
| Shadow | `shadow-xs` |
| Icon size | 16px (`size-4`) |
| Icon gap | `gap-1` (4px) |

---

## Variants

| Variant | Use For | Structure |
|---------|---------|-----------|
| `default` | Text, email, password, number | Standard input field |
| `file` | File uploads | "Choose file" button + filename text |
| `with-icon` | Search, with prefix icon | Icon + input (icon `size-4`, `gap-1`) |

---

## Layout Options

| Layout | Structure | Use For |
|--------|-----------|---------|
| Vertical (`Horizontal Layout=No`) | Label → Input → Description (stacked) | Most forms, default |
| Horizontal (`Horizontal Layout=Yes`) | Label \| Input (inline) + Description below | Compact/inline forms |

### Spacing
- Label to input: `gap-2` (8px) — built into `space-y-2`
- Input to description: `gap-2` (8px)

---

## States

| State | Border | Ring | Text |
|-------|--------|------|------|
| Default | `border-input` | — | `text-muted-foreground` (placeholder) |
| Focus | `border-ring` | `ring-[3px] ring-ring/50` | — |
| Filled | `border-input` | — | `text-foreground` |
| Disabled | `border-input` | — | `opacity-50 cursor-not-allowed` |
| Error | `border-destructive` | — | — |
| Error + Focus | `border-destructive` | `ring-[3px] ring-destructive/50` | — |

---

## Common Patterns

### Vertical Layout (Default)
```tsx
<div className="space-y-2">
  <Label htmlFor="email">Label</Label>
  <Input id="email" placeholder="Placeholder" />
  <p className="text-sm text-muted-foreground">This is an input description.</p>
</div>
```

### With Leading Icon
```tsx
<div className="space-y-2">
  <Label htmlFor="search">Search</Label>
  <div className="relative">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
    <Input id="search" placeholder="Search..." className="pl-9" />
  </div>
</div>
```

### With Forgot Password Link
```tsx
<div className="space-y-2">
  <div className="flex items-center justify-between">
    <Label htmlFor="password">Password</Label>
    <a href="/forgot" className="text-sm text-muted-foreground underline">
      Forgot your password?
    </a>
  </div>
  <Input id="password" type="password" placeholder="••••••••" />
</div>
```

### Horizontal Layout
```tsx
<div className="space-y-2">
  <div className="flex items-center gap-4">
    <Label htmlFor="name" className="w-16 shrink-0 text-right">Label</Label>
    <Input id="name" placeholder="Placeholder" />
  </div>
  <p className="text-sm text-muted-foreground ml-20">This is an input description.</p>
</div>
```

### File Input
```tsx
<div className="space-y-2">
  <Label htmlFor="file">Label</Label>
  <Input 
    id="file" 
    type="file" 
    className="file:mr-3 file:px-1.5 file:py-px file:border-0 
      file:bg-transparent file:text-sm file:font-semibold file:text-foreground" 
  />
  <p className="text-sm text-muted-foreground">This is an input description.</p>
</div>
```

### Input + Button
```tsx
<div className="flex">
  <Input placeholder="Placeholder" className="rounded-r-none" />
  <Button className="rounded-l-none">Button</Button>
</div>
```

### Error State
```tsx
<div className="space-y-2">
  <Label htmlFor="email">Label</Label>
  <Input 
    id="email" 
    placeholder="Placeholder" 
    className="border-destructive focus-visible:ring-destructive/50" 
  />
  <p className="text-sm text-destructive">This field is required.</p>
</div>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Label not linked | Match `htmlFor` to input `id` |
| Error ring wrong color | Add `focus-visible:ring-destructive/50` |
| Horizontal description misaligned | Add `ml-20` (or label width) to description |
| File button unstyled | Use `file:` prefix classes |
| Input + Button gap | Use `rounded-r-none` / `rounded-l-none` |
| Icon not aligned | Use `absolute left-3 top-1/2 -translate-y-1/2` |
| Input with icon padding | Add `pl-9` to input when icon present |
| Focus ring too thick | Use `ring-[3px]` not `ring-2` |

---

## See Also

- **Accessibility:** [Form Accessibility Requirements](../a11y/forms.md) - Label associations, error handling
- **Related Components:** [Textarea](./textarea.md), [Form](./form.md), [Label](./label.md)
- **Patterns:** [Input with Button](../patterns/compositions.md#input-with-button)

---

*Last updated: December 18, 2025*
