# Sonner (Toast)

## Import
```tsx
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
```

## Setup
```tsx
// In layout or root component
<Toaster />
```

---

## Structure

| Part | Tailwind |
|------|----------|
| Container | `bg-popover border border-border rounded-md p-4 shadow-lg gap-2 flex items-center` |
| Title | `text-sm font-semibold leading-normal text-popover-foreground` |
| Description | `text-sm font-normal leading-normal text-muted-foreground` |
| Text wrapper | `flex flex-col gap-0.5` (2px gap) |
| Icon | `size-5 text-foreground` (20px) |

---

## States

| State | Implementation |
|-------|----------------|
| Default | Standard toast appearance |
| Focus | `ring-2 ring-ring ring-offset-2` |

---

## Toast Types

| Type | Icon | Method |
|------|------|--------|
| Default | None | `toast("Message")` |
| Success | Checkmark (✓) | `toast.success("Message")` |
| Info | Info circle (i) | `toast.info("Message")` |
| Warning | Triangle (⚠) | `toast.warning("Message")` |
| Error | Error circle (!) | `toast.error("Message")` |
| Loading | Spinner | `toast.loading("Message")` |

---

## Action Buttons

| Type | Tailwind | Use For |
|------|----------|---------|
| Default | `h-6 px-2 rounded bg-primary text-xs font-semibold text-primary-foreground shadow-xs` | Primary action (Undo) |
| Secondary | `h-6 px-2 rounded bg-secondary text-xs font-semibold text-secondary-foreground` | Cancel, dismiss |

---

## Common Patterns

### Simple Toast
```tsx
toast("Event has been created")
```

### With Description
```tsx
toast("Event has been created", {
  description: "Monday, January 3rd at 6:00pm",
})
```

### Success with Action
```tsx
toast.success("Event has been created", {
  description: "Sunday, December 03, 2023 at 9:00 AM",
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
})
```

### With Cancel
```tsx
toast("Event has been created", {
  cancel: {
    label: "Cancel",
    onClick: () => console.log("Cancel"),
  },
})
```

### Error Toast
```tsx
toast.error("Event has not been created")
```

### Warning Toast
```tsx
toast.warning("Event start time cannot be earlier than 8am")
```

### Info Toast
```tsx
toast.info("Be at the area 10 minutes before the event time")
```

### Loading → Success
```tsx
const toastId = toast.loading("Loading...")

// On completion
toast.success("Done!", { id: toastId })
```

---

## Positioning

```tsx
<Toaster position="bottom-right" />
```

| Position | Value |
|----------|-------|
| Bottom Right | `bottom-right` (default) |
| Bottom Center | `bottom-center` |
| Bottom Left | `bottom-left` |
| Top Right | `top-right` |
| Top Center | `top-center` |
| Top Left | `top-left` |

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Toast not showing | Ensure `<Toaster />` is in layout |
| Wrong position | Set `position` prop on `<Toaster />` |
| Action not clickable | Pass `onClick` in action object |
| Update existing toast | Pass same `id` to new toast call |
| Dismiss programmatically | `toast.dismiss(toastId)` or `toast.dismiss()` for all |

---

*Last updated: December 19, 2024*
