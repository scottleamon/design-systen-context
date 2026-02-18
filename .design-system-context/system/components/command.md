# Command

## Import
```tsx
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
```

## Props
```tsx
interface CommandProps {
  className?: string
  children: React.ReactNode
}

interface CommandInputProps {
  placeholder?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
}

interface CommandItemProps {
  value?: string
  disabled?: boolean
  onSelect?: () => void
  className?: string
  children: React.ReactNode
}

interface CommandGroupProps {
  heading?: string
  className?: string
  children: React.ReactNode
}
```

---

## Variants

| Variant | Use For |
|---------|---------|
| Suggestions | Full command menu with grouped actions |
| Empty | No results state |
| Dialog | ⌘K command palette overlay |

### Item Types

| Type | Use For | Elements |
|------|---------|----------|
| Default | Text-only commands | Text + optional check |
| Icon | Commands with leading icon | Icon + text + optional shortcut |

---

## Styling

### Container
| Property | Value | Tailwind |
|----------|-------|----------|
| Max Width | 512px | `max-w-lg` |
| Background | white | `bg-popover` |
| Border | 1px solid | `border border-border` |
| Border Radius | 8px | `rounded-md` |
| Shadow | md | `shadow-md` |
| Overflow | hidden | `overflow-hidden` |

### Command Input
| Property | Value | Tailwind |
|----------|-------|----------|
| Height | 48px | `h-12` |
| Padding | 12px | `p-3` |
| Gap | 8px | `gap-2` |
| Background | transparent | `bg-transparent` |
| Border | Bottom only | `border-b border-border` |
| Search Icon | 16px, 50% opacity | `size-4 opacity-50` |
| Clear Icon | ~11px | `size-[11px]` |
| Text | 14px/20px Regular | `text-sm` |
| Placeholder Color | #71717a | `text-muted-foreground` |

### Command Group
| Property | Value | Tailwind |
|----------|-------|----------|
| Padding | 8px horizontal, 4px vertical | `px-2 py-1` |

### Group Heading
| Property | Value | Tailwind |
|----------|-------|----------|
| Padding | 8px horizontal, 6px vertical | `px-2 py-1.5` |
| Font | Adelle Sans Semibold | `font-semibold` |
| Size | 12px/16px | `text-xs leading-4` |
| Color | #71717a | `text-muted-foreground` |
| Overflow | ellipsis | `truncate` |

### Command Item
| Property | Value | Tailwind |
|----------|-------|----------|
| Padding | 8px horizontal, 12px vertical | `px-2 py-3` |
| Gap | 8px | `gap-2` |
| Border Radius | 6px | `rounded-sm` |
| Text | 14px/20px Regular | `text-sm font-normal` |
| Icon Size | 16px | `size-4` |
| Icon Color | #71717a | `text-muted-foreground` |

### Command Shortcut
| Property | Value | Tailwind |
|----------|-------|----------|
| Font | Adelle Sans Regular | `font-normal` |
| Size | 12px/16px | `text-xs` |
| Color | #71717a | `text-muted-foreground` |
| Alignment | Right | `ml-auto` |

### Command Separator
| Property | Value | Tailwind |
|----------|-------|----------|
| Height | 1px | `h-px` |
| Color | #e4e4e7 | `bg-border` |
| Margin | 1px horizontal | `mx-px` |

### Command Empty
| Property | Value | Tailwind |
|----------|-------|----------|
| Padding | 24px vertical | `py-6` |
| Text | 14px/20px Regular | `text-sm` |
| Color | #09090b | `text-popover-foreground` |
| Alignment | Centered | `text-center` |

---

## States

| State | Background | Text Color | Other |
|-------|------------|------------|-------|
| Default | transparent | `text-foreground` | - |
| Hover | `bg-accent` (#e4eefa) | `text-accent-foreground` (#19518b) | - |
| Selected | - | - | Check icon visible |
| Disabled | - | - | `opacity-50 pointer-events-none` |

---

## Icons

**Item Icon Size:** `size-4` (16×16px) with `text-muted-foreground`

**Check Icon Size:** `size-4` (16×16px)

| Icon | Use For |
|------|---------|
| `Search` | Input search icon (with `opacity-50`) |
| `X` | Clear input icon (~11px) |
| `Check` | Selected indicator |
| Any Lucide icon | Command item icons |

---

## Common Patterns

### Basic Command Menu
```tsx
<Command className="rounded-md border shadow-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Calendar className="size-4 text-muted-foreground" />
        Calendar
      </CommandItem>
      <CommandItem>
        <Smile className="size-4 text-muted-foreground" />
        Search Emoji
      </CommandItem>
      <CommandItem>
        <Calculator className="size-4 text-muted-foreground" />
        Calculator
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

### With Keyboard Shortcuts
```tsx
<CommandItem className="gap-2">
  <User className="size-4 text-muted-foreground" />
  Profile
  <CommandShortcut>⌘P</CommandShortcut>
</CommandItem>
```

### Multiple Groups with Separator
```tsx
<Command>
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

### Command Dialog (⌘K Pattern)
```tsx
function CommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={() => setOpen(false)}>
            <Calendar className="size-4 text-muted-foreground" />
            Calendar
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
```

### With Selection State
```tsx
const [selectedValue, setSelectedValue] = useState("")

<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandGroup heading="Options">
      {options.map((option) => (
        <CommandItem
          key={option.value}
          onSelect={() => setSelectedValue(option.value)}
          className="gap-2"
        >
          {option.label}
          <Check
            className={cn(
              "ml-auto size-4",
              selectedValue === option.value ? "opacity-100" : "opacity-0"
            )}
          />
        </CommandItem>
      ))}
    </CommandGroup>
  </CommandList>
</Command>
```

---

## Accessibility

- ARIA combobox/listbox pattern
- Arrow Up/Down navigates items
- Enter selects current item
- Escape closes dialog
- Type-to-search filters in real-time
- Screen readers announce item count and selection

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Items not filtering | CommandInput filters by `value` prop on CommandItem |
| Dialog not closing on select | Add `onSelect={() => setOpen(false)}` to items |
| Shortcut not aligned right | CommandShortcut uses `ml-auto` for alignment |
| Need custom empty state | Use `<CommandEmpty>Your message</CommandEmpty>` |
| ⌘K not working | Ensure keyboard listener is set up and not prevented elsewhere |
| Icon not colored correctly | Add `text-muted-foreground` to icons |
| Check mark always visible | Use conditional opacity: `opacity-100` when selected, `opacity-0` otherwise |

---

## See Also

- **Related Components:** [Combobox](./combobox.md) (search select), [Dialog](./dialog.md) (command palette dialog)
- **Accessibility:** [Navigation Accessibility](../a11y/navigation.md) — Command/listbox patterns

---

*Last updated: February 9, 2026*
