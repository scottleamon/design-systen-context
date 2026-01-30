# Menubar

## Import
```tsx
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
} from "@/components/ui/menubar"
```

## Props
```tsx
interface MenubarItemProps {
  disabled?: boolean
  onSelect?: () => void
  children: React.ReactNode
}

interface MenubarCheckboxItemProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
}

interface MenubarRadioItemProps {
  value: string
  disabled?: boolean
}
```

---

## Anatomy

| Part | Tailwind |
|------|----------|
| Menubar (container) | `h-9 bg-background border rounded-md shadow-xs p-1 gap-1` |
| MenubarTrigger | `px-3 py-1 rounded-xs text-sm text-popover-foreground` |
| MenubarContent | `bg-popover border rounded-md shadow-md p-1 min-w-48` |
| MenubarItem | `px-2 py-1.5 rounded-sm text-sm text-popover-foreground` |
| MenubarSeparator | `-mx-1 my-1 h-px bg-border` |

---

## Item Variants

| Variant | Use For | Left Padding |
|---------|---------|--------------|
| `default` | Standard menu actions | `px-2` |
| `checkbox` | Toggleable options | `pl-8 pr-2` (space for check icon) |
| `radio` | Mutually exclusive choices | `pl-8 pr-2` (space for dot indicator) |

---

## States

| State | Trigger | Item |
|-------|---------|------|
| Default | `bg-transparent text-popover-foreground` | `bg-transparent text-popover-foreground` |
| Hover/Open | `bg-accent text-accent-foreground` | `bg-accent text-accent-foreground` |
| Disabled | — | `text-muted-foreground pointer-events-none` |

---

## Icons & Shortcuts

**Indicator icons (checkbox/radio):** `h-4 w-4` at `left-2` absolute position
**SubTrigger chevron:** `h-4 w-4` ChevronRight, right-aligned
**Shortcut text:** `text-xs text-muted-foreground ml-auto tracking-widest`

---

## Common Patterns

### Basic Menubar
```tsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
      <MenubarItem>New Window <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print <MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

### With Checkbox Items
```tsx
<MenubarCheckboxItem checked={showToolbar} onCheckedChange={setShowToolbar}>
  Show Toolbar
</MenubarCheckboxItem>
```

### With Radio Group
```tsx
<MenubarRadioGroup value={profile} onValueChange={setProfile}>
  <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
  <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
</MenubarRadioGroup>
```

### With Submenu
```tsx
<MenubarSub>
  <MenubarSubTrigger>Share</MenubarSubTrigger>
  <MenubarSubContent>
    <MenubarItem>Email link</MenubarItem>
    <MenubarItem>Messages</MenubarItem>
  </MenubarSubContent>
</MenubarSub>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Shortcuts not aligned | Use `MenubarShortcut`, not plain text |
| Radio items not grouped | Wrap in `MenubarRadioGroup` with shared state |
| Submenu arrow missing | Use `MenubarSubTrigger` not `MenubarItem` |
| Checkbox spacing off | Uses `pl-8` to reserve indicator space |

---

*Last updated: December 19, 2025*
