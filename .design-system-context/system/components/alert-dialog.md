# Alert Dialog

## Import
```tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
```

## Props
```tsx
interface AlertDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

interface AlertDialogTriggerProps {
  asChild?: boolean
  children: React.ReactNode
}

interface AlertDialogContentProps {
  className?: string
  children: React.ReactNode
}

interface AlertDialogHeaderProps {
  className?: string
  children: React.ReactNode
}

interface AlertDialogFooterProps {
  className?: string
  children: React.ReactNode
}

interface AlertDialogTitleProps {
  className?: string
  children: React.ReactNode
}

interface AlertDialogDescriptionProps {
  className?: string
  children: React.ReactNode
}

interface AlertDialogActionProps {
  className?: string
  children: React.ReactNode
}

interface AlertDialogCancelProps {
  className?: string
  children: React.ReactNode
}
```

---

## Variants

| Breakpoint | Viewport | Header Alignment | Footer Layout | Button Width | Button Order |
|------------|----------|------------------|---------------|--------------|--------------|
| `md` | ≥768px | Left-aligned | Horizontal, right-aligned | Auto | Cancel, Action |
| `sm` | <768px | Center-aligned | Stacked, full-width | 100% | Action, Cancel |

### Choosing a Variant
- Use responsive footer classes to automatically switch: `flex-col sm:flex-row sm:justify-end`
- Desktop: Cancel first, then Action (reading order, right-aligned)
- Mobile: Action on top (stacked), Cancel below, both full-width

---

## Sizes

| Size | Use For | Tailwind |
|------|---------|----------|
| Default | Standard dialogs | `max-w-lg` (512px) |

---

## Styling

### Typography

| Element | Font | Size | Weight | Line Height | Color |
|---------|------|------|--------|-------------|-------|
| Title | `font-sans` (Adelle Sans) | `text-lg` (18px) | `font-semibold` (Bold) | `leading-7` (28px) | `text-foreground` |
| Description | `font-sans` (Adelle Sans) | `text-sm` (14px) | `font-normal` (Regular) | `leading-5` (20px) | `text-muted-foreground` |

### Spacing

| Element | Property | Value |
|---------|----------|-------|
| Header | Title-to-description gap | `gap-2` (8px) |
| Footer | Button gap | `gap-2` (8px) |
| Content | Header-to-footer gap | Component spacing (typically `gap-4` or `gap-6`) |

### Buttons

| Button | Variant | Height | Padding | Text |
|--------|---------|--------|---------|------|
| Cancel | `outline` | `h-9` (36px) | `px-4` (16px) | `text-primary` |
| Action | `default` | `h-9` (36px) | `px-4` (16px) | `text-primary-foreground` |

Both buttons use:
- Border radius: `rounded-md` (8px)
- Shadow: `shadow-xs` (0px 1px 2px rgba(0,0,0,0.05))
- Font: Adelle Sans Semibold, 14px

---

## States

| State | Implementation |
|-------|----------------|
| Closed | Not visible (default) |
| Open | Centered dialog with dark overlay backdrop |

**Button states:** Cancel and Action buttons follow standard Button component states.

---

## Common Patterns

### Basic Confirmation
```tsx
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### Controlled Dialog
```tsx
const [open, setOpen] = useState(false)

<AlertDialog open={open} onOpenChange={setOpen}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Discard changes?</AlertDialogTitle>
      <AlertDialogDescription>
        You have unsaved changes. Are you sure you want to leave?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Keep Editing</AlertDialogCancel>
      <AlertDialogAction onClick={handleDiscard}>Discard</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### Destructive Action Button
```tsx
<AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
  Delete
</AlertDialogAction>
```

---

## Component Structure

```tsx
{/* Desktop (md+) */}
<div className="max-w-lg">
  
  {/* AlertDialogHeader */}
  <div className="flex flex-col gap-2 text-left">
    <h2 className="text-lg font-semibold leading-7 text-foreground">
      {title}
    </h2>
    <p className="text-sm font-normal leading-5 text-muted-foreground">
      {description}
    </p>
  </div>
  
  {/* AlertDialogFooter */}
  <div className="flex gap-2 items-center justify-end">
    <Button variant="outline" className="h-9 px-4">Cancel</Button>
    <Button className="h-9 px-4">Continue</Button>
  </div>
  
</div>

{/* Mobile (sm) */}
<div className="max-w-lg">
  
  {/* AlertDialogHeader */}
  <div className="flex flex-col gap-2 text-center">
    <h2 className="text-lg font-semibold leading-7 text-foreground">
      {title}
    </h2>
    <p className="text-sm font-normal leading-5 text-muted-foreground">
      {description}
    </p>
  </div>
  
  {/* AlertDialogFooter - stacked, action first */}
  <div className="flex flex-col gap-2 w-full">
    <Button className="h-9 px-4 w-full">Continue</Button>
    <Button variant="outline" className="h-9 px-4 w-full">Cancel</Button>
  </div>
  
</div>
```

---

## Accessibility

- Focus trapped within dialog when open
- Escape key triggers cancel action
- Initial focus goes to Cancel button (safest action)
- Screen readers announce as "alertdialog" role
- Title/description linked via aria-labelledby/aria-describedby

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Click outside doesn't close | By design - requires explicit button action |
| Buttons stack wrong on mobile | Use `flex-col sm:flex-row sm:justify-end` on footer |
| Need async action before close | Use controlled `open` state with `onOpenChange` |
| Action should look dangerous | Add `bg-destructive text-destructive-foreground` to AlertDialogAction |
| Mobile text not centered | Add `text-center` to header on mobile breakpoint |
| Button order reversed on mobile | Action button should be first (on top) on mobile |

---

## Figma Reference

[View in Figma](https://www.figma.com/design/0rd6tPgENef5nXmN0puflu/shadcn_ui-TimelyCare-kit?node-id=296-5121&m=dev)

---

## See Also

- **Accessibility:** [Dialog Accessibility Requirements](../a11y/dialogs.md) - Focus trapping, keyboard behavior, ARIA alertdialog role
- **Related Components:** [Dialog](./dialog.md) (non-blocking), [Alert](./alert.md) (inline notice)
- **Patterns:** [Component Match](../patterns/component-match.md#feedback-components-alert-vs-toast-vs-dialog)

---

*Last updated: December 18, 2025*
