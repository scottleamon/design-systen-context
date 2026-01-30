# Dropdown Menu

## Import
```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu"
```

## Props
```tsx
interface DropdownMenuItemProps {
  disabled?: boolean
  onSelect?: () => void
  className?: string
  children: React.ReactNode
}

interface DropdownMenuCheckboxItemProps extends DropdownMenuItemProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}
```

---

## Design Tokens

### Container
| Property | Token | Value |
|----------|-------|-------|
| Background | `bg-popover` | white |
| Border | `border` | 1px solid border color |
| Border radius | `rounded-md` | 8px |
| Padding | `p-1` | 4px |
| Shadow | `shadow-md` | Multi-layer drop shadow |
| Min width | — | 224px |

### Item Sizing
| Property | Token | Value |
|----------|-------|-------|
| Height | — | 32px |
| Padding (default) | `px-2 py-1.5` | 8px horizontal, 6px vertical |
| Padding (with indicator) | `pl-8 pr-2 py-1.5` | 32px left, 8px right, 6px vertical |
| Border radius | `rounded-sm` | 6px |
| Gap | `gap-2` | 8px |

### Typography
| Element | Size | Color | Weight |
|---------|------|-------|--------|
| Item text | `text-sm` (14px) | `text-popover-foreground` | normal |
| Shortcut text | `text-xs` (12px) | `opacity-60` | normal |
| Label | `text-sm` (14px) | `text-popover-foreground` | semibold |

### Icons & Indicators
| Property | Token | Value |
|----------|-------|-------|
| Icon size | `size-4` | 16px × 16px |
| Indicator position | `left-2` | 8px from left edge |
| Icon color (default) | `text-muted-foreground` | #71717a |
| Check indicator color | `text-foreground` | #09090b |
| SubTrigger chevron | `size-4` | ChevronRight icon |

### Separator
| Property | Token | Value |
|----------|-------|-------|
| Height | `h-px` | 1px |
| Color | `border` | #e4e4e7 |

---

## Item Variants

| Variant | Use For | Tailwind |
|---------|---------|----------|
| `default` | Standard actions | `text-popover-foreground` |
| `checkbox` | Toggleable settings | `text-popover-foreground` + checkmark indicator |
| `radio` | Single-select options | `text-popover-foreground` + dot indicator |
| `icon` | Actions with leading icons | Icon (`text-muted-foreground`) + text |

### Choosing a Variant
- Use **default** for actions (Profile, Logout, Delete)
- Use **checkbox** for independent toggles (Show Status Bar)
- Use **radio** for mutually exclusive choices (Panel Position)
- Use **icon** for items with contextual icons

---

## States

| State | Implementation |
|-------|----------------|
| Default | `text-popover-foreground` |
| Hover | `bg-accent text-accent-foreground` (automatic) |
| Focus | `bg-accent text-accent-foreground` |
| Disabled | `opacity-50 pointer-events-none` |
| Error | `text-destructive` (icon variant only) |

---

## Common Patterns

### Basic Menu
```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      Profile <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### With Submenu
```tsx
<DropdownMenuSub>
  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
  <DropdownMenuSubContent>
    <DropdownMenuItem>Email</DropdownMenuItem>
    <DropdownMenuItem>Message</DropdownMenuItem>
  </DropdownMenuSubContent>
</DropdownMenuSub>
```

### Checkbox & Radio Items
```tsx
<DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
  Status Bar
</DropdownMenuCheckboxItem>

<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
  <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
  <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>
```

### Avatar Trigger
```tsx
<DropdownMenuTrigger asChild>
  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
    <Avatar><AvatarImage src="/user.jpg" /></Avatar>
  </Button>
</DropdownMenuTrigger>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Menu not opening | Add `asChild` to `DropdownMenuTrigger` |
| Shortcut not aligned | Use `DropdownMenuShortcut` (has `ml-auto`) |
| Submenu not showing | Wrap in `DropdownMenuSub` with SubTrigger + SubContent |
| Radio items not grouped | Wrap in `DropdownMenuRadioGroup` |

---

*Last updated: December 18, 2025*

