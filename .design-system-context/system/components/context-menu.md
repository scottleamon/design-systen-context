# Context Menu

## Import
```tsx
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuRadioGroup,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@/components/ui/context-menu"
```

## Props
```tsx
interface ContextMenuItemProps {
  disabled?: boolean
  onSelect?: () => void
  className?: string
  children: React.ReactNode
}

interface ContextMenuCheckboxItemProps extends ContextMenuItemProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

interface ContextMenuRadioItemProps {
  value: string
  disabled?: boolean
  children: React.ReactNode
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
| Min width | — | 256px |

### Item Sizing
| Property | Token | Value |
|----------|-------|-------|
| Height | — | 32px |
| Padding (Level 1) | `px-2 py-1.5` | 8px horizontal, 6px vertical |
| Padding (Level 2) | `pl-8 pr-2 py-1.5` | 32px left (for indicator), 8px right, 6px vertical |
| Border radius | `rounded-sm` | 6px |

### Typography
| Element | Size | Color | Weight |
|---------|------|-------|--------|
| Item text | `text-sm` (14px) | `text-popover-foreground` | normal |
| Shortcut text | `text-xs` (12px) | `text-muted-foreground` | normal |
| Label/Title | `text-sm` (14px) | `text-foreground` | semibold |

### Separator
| Property | Token | Value |
|----------|-------|-------|
| Height | `h-2` | 8px |
| Padding | `py-1` | 4px vertical |
| Border color | `border` | #e4e4e7 |

---

## Item Variants

| Variant | Use For | Tailwind |
|---------|---------|----------|
| `default` | Standard menu actions | `text-popover-foreground` |
| `checkbox` | Toggleable options | `text-popover-foreground` + checkmark indicator |
| `radio` | Single-select from group | `text-popover-foreground` + circle indicator |

### Choosing a Variant
- Use **default** for actions (Back, Forward, Save)
- Use **checkbox** for independent toggles (Show Bookmarks)
- Use **radio** for mutually exclusive choices (Select User)

---

## States

| State | Implementation |
|-------|----------------|
| Default | `text-popover-foreground` |
| Hover | `bg-accent text-accent-foreground` (automatic) |
| Focus | `focus:bg-accent focus:text-accent-foreground` |
| Disabled | `opacity-50 pointer-events-none` |

---

## Icons & Shortcuts

**Indicator icons:** `size-4` (16px × 16px)
**Indicator position:** 8px from left edge
**Shortcut spacing:** `ml-auto text-xs text-muted-foreground`
**SubTrigger chevron:** `size-4` ChevronRight icon

```tsx
<ContextMenuItem>
  Back
  <ContextMenuShortcut>⌘[</ContextMenuShortcut>
</ContextMenuItem>
```

---

## Common Patterns

### Basic Menu
```tsx
<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuItem>Forward</ContextMenuItem>
    <ContextMenuItem>Reload</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### With Submenu
```tsx
<ContextMenuSub>
  <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
  <ContextMenuSubContent>
    <ContextMenuItem>Save Page As</ContextMenuItem>
    <ContextMenuItem>Developer Tools</ContextMenuItem>
  </ContextMenuSubContent>
</ContextMenuSub>
```

### Checkbox & Radio Items
```tsx
<ContextMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
  Show Bookmarks
</ContextMenuCheckboxItem>

<ContextMenuRadioGroup value={person} onValueChange={setPerson}>
  <ContextMenuLabel>People</ContextMenuLabel>
  <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
  <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
</ContextMenuRadioGroup>
```

### With Sections
```tsx
<ContextMenuContent>
  <ContextMenuItem>Back</ContextMenuItem>
  <ContextMenuItem disabled>Forward</ContextMenuItem>
  <ContextMenuSeparator />
  <ContextMenuLabel>People</ContextMenuLabel>
  <ContextMenuRadioGroup value={person}>
    <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
  </ContextMenuRadioGroup>
</ContextMenuContent>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Menu not opening | Wrap trigger element in `ContextMenuTrigger` |
| Submenu not showing | Use `ContextMenuSub` wrapper with `SubTrigger` + `SubContent` |
| Radio items not grouped | Wrap in `ContextMenuRadioGroup` with shared `value` |
| Shortcut not aligned right | Use `ContextMenuShortcut` component (has `ml-auto`) |

---

*Last updated: December 18, 2025*

