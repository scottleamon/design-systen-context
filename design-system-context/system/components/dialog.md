# Dialog

## Import
```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
```

## Props
```tsx
interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

interface DialogContentProps {
  className?: string
  children: React.ReactNode
}
```

---

## Design Tokens

### Dialog Content
| Property | Token | Value |
|----------|-------|-------|
| Background | `bg-background` | white |
| Border | `border` | 1px solid border color |
| Border radius | `rounded-lg` | — |
| Shadow | `shadow-lg` | Multi-layer drop shadow |
| Padding | `p-6` | 24px |

### Dialog Header
| Property | Token | Value |
|----------|-------|-------|
| Gap | `gap-1.5` | 6px between title and description |
| Alignment (lg) | `text-left` | Left-aligned |
| Alignment (sm) | `text-center` | Center-aligned |

### Typography
| Element | Size | Color | Weight |
|---------|------|-------|--------|
| Title | `text-lg` (18px) | `text-foreground` | semibold |
| Description | `text-sm` (14px) | `text-muted-foreground` | normal |

### Dialog Footer
| Property | Desktop (lg) | Mobile (sm) |
|----------|--------------|-------------|
| Direction | `flex-row` | `flex-col` |
| Gap | `gap-2` (8px) | `gap-2` (8px) |
| Alignment | `justify-end` | `items-start` (full width) |
| Button width | Auto | Full width (`w-full`) |
| Button order | Cancel → Primary | Primary → Cancel |

### Close Icon
| Property | Token | Value |
|----------|-------|-------|
| Size | `size-4` | 16px × 16px |
| Position | `right-4 top-4` | 15px from edges |
| Border radius | `rounded-xs` | 2px |
| Default opacity | `opacity-70` | 70% |
| Color | `text-primary` | #19518b |

### Buttons
| Property | Token | Value |
|----------|-------|-------|
| Height | `h-9` | 36px |
| Padding | `px-4 py-2` | 16px horizontal, 8px vertical |
| Border radius | `rounded-md` | 8px |
| Shadow | `shadow-xs` | Subtle drop shadow |

---

## Breakpoints

| Breakpoint | Use For | Layout |
|------------|---------|--------|
| `lg` | Desktop | Side-by-side footer buttons, left-aligned header |
| `sm` | Mobile | Stacked footer buttons (full-width), centered header |

### Responsive Behavior
- On mobile (`sm`), buttons stack vertically with primary action first, header text centers
- On desktop (`lg`), buttons align horizontally in footer with cancel first, header left-aligned

---

## Content Types

| Type | Use For |
|------|---------|
| Form | Collecting user input (name, email, settings) |
| Text | Displaying information, confirmations, long content |

---

## States

| State | Implementation |
|-------|----------------|
| Open | Controlled via `open` prop or `DialogTrigger` |
| Closed | `onOpenChange(false)` or close button click |
| Overlay | `bg-black/80` backdrop, closes on click |

### Close Icon States
| State | Implementation |
|-------|----------------|
| Default | `opacity-70 text-primary` |
| Hover | `opacity-100` (automatic) |
| Focus | `ring-2 ring-ring` |

---

## Common Patterns

### Form Dialog
```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog title</DialogTitle>
      <DialogDescription>This is a dialog description.</DialogDescription>
    </DialogHeader>
    <div className="space-y-4 py-4">
      <Input placeholder="Name" />
      <Input placeholder="Username" />
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Text/Confirmation Dialog
```tsx
<DialogContent>
  <DialogHeader>
    <DialogTitle>Dialog title</DialogTitle>
    <DialogDescription>This is a dialog description.</DialogDescription>
  </DialogHeader>
  <div className="text-sm text-muted-foreground">
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
  <DialogFooter>
    <DialogClose asChild>
      <Button variant="outline">Cancel</Button>
    </DialogClose>
  </DialogFooter>
</DialogContent>
```

### Controlled Dialog
```tsx
const [open, setOpen] = useState(false)

<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>/* ... */</DialogContent>
</Dialog>
```

---

## Accessibility

- Built on Radix Dialog — handles focus trap and keyboard automatically
- Focus trapped within dialog when open; returns to trigger on close
- Keyboard: Escape to close, Tab/Shift+Tab to cycle focus
- Screen reader: announces as `dialog` role with `aria-modal="true"`
- Title/description linked via `aria-labelledby`/`aria-describedby`

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Dialog won't close | Use `DialogClose` wrapper or control via `onOpenChange` |
| Trigger not working | Add `asChild` prop to `DialogTrigger` |
| Footer buttons misaligned | Use `DialogFooter` — handles responsive layout |
| Content overflows | Add `max-h-[80vh] overflow-y-auto` to content area |

---

## See Also

- **Accessibility:** [Dialog Accessibility Requirements](../a11y/dialogs.md) - Focus trapping, keyboard behavior, ARIA
- **Related Components:** [Alert Dialog](./alert-dialog.md), [Sheet](./sheet.md), [Drawer](./drawer.md)
- **Patterns:** [Dialog with Form](../patterns/compositions.md#dialog-with-form), [Component Match](../patterns/component-match.md#overlay-components-dialog-vs-sheet-vs-drawer)

---

*Last updated: February 9, 2026*

