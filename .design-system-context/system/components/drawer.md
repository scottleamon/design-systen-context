# Drawer

## Import
```tsx
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer"
```

## Props
```tsx
interface DrawerProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  shouldScaleBackground?: boolean
  children: React.ReactNode
}

interface DrawerContentProps {
  className?: string
  children: React.ReactNode
}
```

---

## Design Tokens

### Drawer Content
| Property | Token | Value |
|----------|-------|-------|
| Background | `bg-background` | #fafafa |
| Border | `border` | 1px solid border color |
| Border radius (top) | `rounded-t-[10px]` | 10px |
| Content max-width | `max-w-sm` | 384px |

### Handle/Indicator
| Property | Token | Value |
|----------|-------|-------|
| Background | `bg-muted` | #f4f4f5 |
| Height | `h-2` | 8px |
| Width | `w-[120px]` | 120px |
| Border radius | `rounded-full` | 9999px |
| Top padding | `pt-4` | 16px |

### Drawer Header
| Property | Token | Value |
|----------|-------|-------|
| Padding | `p-4` | 16px |
| Max width | `max-w-sm` | 384px |
| Gap | `gap-1.5` | 6px between title and description |
| Alignment (md) | `text-left` | Left-aligned |
| Alignment (sm) | `text-center` | Center-aligned |

### Typography
| Element | Size | Color | Weight |
|---------|------|-------|--------|
| Title | `text-lg` (18px) | `text-foreground` | semibold |
| Description | `text-sm` (14px) | `text-muted-foreground` | normal |

### Drawer Footer
| Property | Token | Value |
|----------|-------|-------|
| Padding | `p-4` | 16px |
| Max width | `max-w-sm` | 384px |
| Gap | `gap-2` | 8px |
| Button width | `w-full` | Full width |
| Button order | — | Primary first, Cancel second |

### Buttons
| Property | Token | Value |
|----------|-------|-------|
| Height | `h-9` | 36px |
| Padding | `px-4 py-2` | 16px horizontal, 8px vertical |
| Border radius | `rounded-md` | 8px |
| Shadow | `shadow-xs` | Subtle drop shadow |

### Increment Buttons (Statistic)
| Property | Token | Value |
|----------|-------|-------|
| Size | `size-8` | 32px × 32px |
| Border radius | `rounded-full` | Circle |
| Border | `border border-input` | 1px solid input color |
| Background | `bg-input` | #fafafa |
| Shadow | `shadow-xs` | Subtle drop shadow |
| Icon size | `size-4` | 16px × 16px |
| Icon color | `text-primary` | #19518b |

### Statistic Value
| Property | Token | Value |
|----------|-------|-------|
| Font size | `text-7xl` | 72px |
| Font weight | `font-bold` | bold |
| Letter spacing | `tracking-tighter` | -0.8px |
| Unit text | `text-xs uppercase` | 12px, uppercase |
| Unit color | `text-muted-foreground` | — |

### Backdrop
| Property | Token | Value |
|----------|-------|-------|
| Background | `bg-black/80` | Black with 80% opacity |

---

## Breakpoints

| Breakpoint | Use For | Width |
|------------|---------|-------|
| `md` | Desktop/Tablet | Wider container (~706px), left-aligned header |
| `sm` | Mobile | Full-width container (~424px), centered header |

### Responsive Behavior
- Drawer slides up from bottom on all screen sizes
- On mobile (`sm`), takes full width with small margins, header text centers
- On desktop (`md`), centered with max-width constraint, header text left-aligned

---

## Content Variants

| Variant | Use For |
|---------|---------|
| Statistic | Displaying/adjusting values with +/- controls |
| Form | Collecting user input (profile editing, settings) |

---

## States

| State | Implementation |
|-------|----------------|
| Open | Slides up from bottom with backdrop |
| Closed | Slides down, backdrop fades |
| Dragging | User can swipe down to close |

### Increment Button States
| State | Implementation |
|-------|----------------|
| Default | `border border-input bg-input shadow-xs` |
| Hover | `bg-accent` |
| Focus | `ring-2 ring-ring ring-offset-2` |
| Pressed | `bg-accent scale-95` |

---

## Common Patterns

### Statistic Drawer
```tsx
<Drawer>
  <DrawerTrigger asChild>
    <Button>Set Goal</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Move Goal</DrawerTitle>
      <DrawerDescription>Set your daily activity goal.</DrawerDescription>
    </DrawerHeader>
    <div className="flex items-center justify-center gap-4 py-4">
      <Button variant="outline" size="icon" onClick={decrement}>
        <Minus className="h-4 w-4" />
      </Button>
      <span className="text-7xl font-bold">{goal}</span>
      <Button variant="outline" size="icon" onClick={increment}>
        <Plus className="h-4 w-4" />
      </Button>
    </div>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

### Form Drawer
```tsx
<DrawerContent>
  <DrawerHeader>
    <DrawerTitle>Edit profile</DrawerTitle>
    <DrawerDescription>Make changes to your profile here.</DrawerDescription>
  </DrawerHeader>
  <div className="space-y-4 px-4">
    <Input placeholder="Name" />
    <Input placeholder="Username" />
  </div>
  <DrawerFooter>
    <Button>Save changes</Button>
    <DrawerClose asChild>
      <Button variant="outline">Cancel</Button>
    </DrawerClose>
  </DrawerFooter>
</DrawerContent>
```

---

## Accessibility

- Built on Vaul — handles focus trap automatically
- Focus trapped within drawer when open
- Keyboard: Escape to close, Tab/Shift+Tab to cycle focus
- Screen reader: announces as modal dialog
- Swipe gesture to dismiss on mobile — always provide a close button as alternative

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Drawer doesn't swipe closed | Ensure `vaul` library is installed (Drawer uses it) |
| Content too tall | Add `max-h-[80vh] overflow-y-auto` to content |
| Background doesn't scale | Add `shouldScaleBackground` prop to `Drawer` |
| Handle not visible | DrawerContent includes handle by default |

---

## See Also

- **Related Components:** [Sheet](./sheet.md) (side panel), [Dialog](./dialog.md) (centered overlay)
- **Accessibility:** [Dialog Accessibility](../a11y/dialogs.md) — Focus trap and modal patterns
- **Patterns:** [Component Match](../patterns/component-match.md#overlay-components-dialog-vs-sheet-vs-drawer)

---

*Last updated: February 9, 2026*
