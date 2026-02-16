# Alert

> [!NOTE]
> **Theme-Aware Component**: Alert icon colors adapt to the active theme when using the `default` variant.
> - Higher Ed theme: Navy blue icon (`#19518B`)
> - K-12 theme: Navy blue icon (`#19518B`) *(placeholder — K-12-specific colors coming later)*
> - Admin theme: Neutral icon (`#18181B`)
> - Destructive variant uses red across all themes for consistency.

## Import
```tsx
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
```

## Props
```tsx
interface AlertProps {
  variant?: "default" | "destructive"
  className?: string
  children: React.ReactNode
}

interface AlertTitleProps {
  className?: string
  children: React.ReactNode
}

interface AlertDescriptionProps {
  className?: string
  children: React.ReactNode
}
```

---

## Variants

| Variant | Icon Color | Title Color | Description Color | Theme Behavior |
|---------|------------|-------------|-------------------|----------------|
| `default` | `text-primary` | `text-foreground` | `text-muted-foreground` | Icon adapts to theme (navy/neutral) |
| `destructive` | `text-destructive` | `text-destructive` | `text-destructive` | Red across all themes |

### Choosing a Variant
- **Default:** Success confirmations, informational notices, system status
- **Destructive:** Errors, failed actions, critical warnings requiring attention

---

## Styling

### Typography

| Element | Font | Size | Weight | Line Height | Color (Default) | Color (Destructive) |
|---------|------|------|--------|-------------|-----------------|---------------------|
| Title | `font-sans` (Adelle Sans) | `text-sm` (14px) | `font-medium` (Semibold) | `leading-5` (20px) | `text-foreground` | `text-destructive` |
| Description | `font-sans` (Adelle Sans) | `text-sm` (14px) | `font-normal` (Regular) | `leading-5` (20px) | `text-muted-foreground` | `text-destructive` |

### Layout

| Property | Value |
|----------|-------|
| Icon-to-content gap | `gap-3` (12px) |
| Title-to-description gap | `gap-1` (4px) |
| Icon top offset | `pt-[2px]` (aligns with text baseline) |

### Title Overflow
- Title uses `truncate` (text-overflow: ellipsis, overflow: hidden, white-space: nowrap)
- Description wraps normally

---

## Icons

**Size:** `size-4` (16×16px)
**Alignment:** Top-aligned with 2px offset to align with title text baseline

| Icon | Use For | Variant |
|------|---------|---------|
| `CircleCheck` | Success messages | default |
| `AlertCircle` | Errors and warnings | destructive |
| `Terminal` | Code/CLI related alerts | default |
| `Info` | Informational notices | default |

```tsx
import { CircleCheck } from "lucide-react"

<Alert>
  <CircleCheck className="size-4" />
  <AlertTitle>Title</AlertTitle>
</Alert>
```

---

## States

| State | Implementation |
|-------|----------------|
| Default | Static display, no interactive states |
| Destructive | Use `variant="destructive"` |

Alert is a static display component. Any action buttons within it have their own states.

---

## Common Patterns

### Success Alert
```tsx
import { CircleCheck } from "lucide-react"

<Alert>
  <CircleCheck className="size-4" />
  <AlertTitle>Success! Your changes have been saved.</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
</Alert>
```

### Error Alert
```tsx
import { AlertCircle } from "lucide-react"

<Alert variant="destructive">
  <AlertCircle className="size-4" />
  <AlertTitle>Something went wrong!</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>
```

### With Action Button
```tsx
<Alert>
  <CircleCheck className="size-4" />
  <AlertTitle>The selected emails have been marked as spam.</AlertTitle>
  <Button variant="outline" size="sm" className="h-6 px-3 text-xs">
    Undo
  </Button>
</Alert>
```

### Description Only
```tsx
<Alert>
  <AlertDescription>
    This one has a description only. No title. No icon.
  </AlertDescription>
</Alert>
```

---

## Component Structure

```tsx
// Alert container
<div className="flex items-start gap-3">
  
  {/* Icon wrapper - offset to align with text */}
  <div className="pt-[2px]">
    <CircleCheck className="size-4 text-primary" />
    {/* For destructive: text-destructive */}
  </div>
  
  {/* Content wrapper */}
  <div className="flex-1 flex flex-col gap-1">
    
    {/* AlertTitle */}
    <p className="text-sm font-medium leading-5 text-foreground truncate">
      {/* For destructive: text-destructive */}
      {title}
    </p>
    
    {/* AlertDescription */}
    <p className="text-sm font-normal leading-5 text-muted-foreground">
      {/* For destructive: text-destructive */}
      {description}
    </p>
    
  </div>
  
  {/* Optional action button */}
  <Button variant="outline" size="sm" className="h-6 px-3 text-xs text-primary">
    Action
  </Button>
  
</div>
```

---

## Accessibility

- Static container component — not built on a Radix interactive primitive
- Uses `role="alert"` for important messages (announced immediately by screen readers)
- No keyboard interaction needed (static content)
- Ensure decorative icons have `aria-hidden="true"`

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Icon not aligned with title | Icon wrapper needs `pt-[2px]` offset |
| Destructive text hard to read | Only use for critical errors; keep text concise |
| Need dismissible alert | Add a close button; Alert doesn't auto-dismiss |
| Alert too wide | Contains to parent width; wrap in constrained container |
| Title too long | Title uses `truncate`; keep titles concise or use description |
| Action button wrong color | Button text should be `text-primary` for default variant |

---

## See Also

- **Related Components:** [Alert Dialog](./alert-dialog.md) (blocking confirmation), [Sonner](./sonner.md) (toast notifications)
- **Patterns:** [States & Feedback](../patterns/states.md), [Component Match](../patterns/component-match.md#feedback-components-alert-vs-toast-vs-dialog)

---

## Figma Reference

[View in Figma](https://www.figma.com/design/0rd6tPgENef5nXmN0puflu/shadcn_ui-TimelyCare-kit?node-id=399-690&m=dev)

---

*Last updated: February 9, 2026*
