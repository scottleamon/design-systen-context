# Switch

## Import
```tsx
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
```

## Props
```tsx
interface SwitchProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
}
```

---

## Structure

| Part | Tailwind |
|------|----------|
| Track | `w-9 h-5 rounded-full px-0.5` (36×20px) |
| Track (off) | `bg-input border-2 border-transparent` |
| Track (on) | `bg-primary border-2 border-transparent justify-end` |
| Thumb | `size-4 rounded-full bg-background shadow-lg` (16px) |
| Label | `text-sm font-semibold leading-none text-foreground` |
| Description | `text-sm font-normal leading-normal text-muted-foreground` |
| Label wrapper | `flex flex-col gap-2` (8px) |

---

## Types

| Type | Container | Use For |
|------|-----------|---------|
| Default | None | Inline toggle settings |
| Box | `border border-border rounded-lg p-4 shadow-xs` | Form sections, grouped settings |

---

## Label Position (Side)

| Position | Layout |
|----------|--------|
| Left | Switch first, label after |
| Right | Label first, switch at end |

---

## States

| State | Track Styling |
|-------|---------------|
| Off | `bg-input` (thumb at start) |
| On | `bg-primary justify-end` (thumb at end) |
| Focus | `ring-[3px] ring-ring/50` |
| Disabled | `opacity-50 cursor-not-allowed` |

---

## Common Patterns

### Basic Switch
```tsx
<div className="flex items-center gap-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>
```

### With Description (Side=Left)
```tsx
<div className="flex items-start gap-3">
  <Switch id="notifications" />
  <div className="flex flex-col gap-2">
    <Label htmlFor="notifications" className="text-sm font-semibold leading-none">
      Push Notifications
    </Label>
    <p className="text-sm text-muted-foreground">
      Receive push notifications when someone mentions you.
    </p>
  </div>
</div>
```

### Side=Right (Label First)
```tsx
<div className="flex items-center justify-between">
  <div className="flex flex-col gap-2">
    <Label htmlFor="marketing">Marketing emails</Label>
    <p className="text-sm text-muted-foreground">
      Receive emails about new products and features.
    </p>
  </div>
  <Switch id="marketing" />
</div>
```

### Box Type
```tsx
<div className="flex items-start gap-3 rounded-lg border p-4 shadow-xs">
  <Switch id="analytics" />
  <div className="flex flex-col gap-2">
    <Label htmlFor="analytics">Analytics</Label>
    <p className="text-sm text-muted-foreground">
      Share usage data to help improve our product.
    </p>
  </div>
</div>
```

### Controlled Switch
```tsx
const [enabled, setEnabled] = useState(false)

<Switch checked={enabled} onCheckedChange={setEnabled} />
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Label not clickable | Use `htmlFor` matching Switch `id` |
| Alignment issues | Use `items-center` for single line, `items-start` with description |
| Box type missing shadow | Add `shadow-xs` to container |

---

*Last updated: December 19, 2024*
