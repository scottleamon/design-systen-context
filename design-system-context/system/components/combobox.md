# Combobox

## Import
```tsx
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
```

## Props
```tsx
// Combobox is composed from Command + Popover
// See Command component for CommandInput, CommandItem props

interface ComboboxOption {
  value: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
  disabled?: boolean
}
```

---

## Variants

| Variant | Use For | Implementation |
|---------|---------|----------------|
| Default | Standard searchable select | Popover + Command with simple items |
| With Group Label | Status/category context | Two-line trigger with group label |
| With Avatar | User/assignee picker | Items with Avatar component |
| Multi-select | Selecting multiple items | Checkbox items, badge display |
| With Groups | Organized categories | CommandGroup with headings |

### Item Types

| Type | Use For | Elements |
|------|---------|----------|
| Simple | Basic text options | Text + optional check |
| Icon | Items with meaningful icons | Icon + text + check |
| Avatar | User selection | Avatar (20px) + text + check |
| Checkbox | Multi-select | Checkbox + text |

---

## Styling

### Trigger Button
| Property | Value | Tailwind |
|----------|-------|----------|
| Height (default) | 36px | `h-9` |
| Height (group label) | 48px | `h-12` |
| Padding | 16px horizontal, 8px vertical | `px-4 py-2` |
| Gap | 8px | `gap-2` |
| Background | #fafafa | `bg-background` |
| Border | 1px solid | `border border-input` |
| Border Radius | 8px | `rounded-md` |
| Shadow | xs | `shadow-xs` |

### Trigger Typography
| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Label | Adelle Sans | 14px | Semibold | `text-foreground` |
| Placeholder/Value | Adelle Sans | 14px/20px | Semibold | `text-foreground` |
| Group Label | Adelle Sans | 12px/16px | Regular | `text-muted-foreground` |
| Description | Adelle Sans | 14px/20px | Regular | `text-muted-foreground` |

### Command Menu
| Property | Value | Tailwind |
|----------|-------|----------|
| Width | 250px | `w-[250px]` |
| Background | white | `bg-popover` |
| Border | 1px solid | `border border-border` |
| Border Radius | 8px | `rounded-md` |
| Shadow | md | `shadow-md` |

### Search Input
| Property | Value | Tailwind |
|----------|-------|----------|
| Padding | 12px horizontal, 10px vertical | `px-3 py-2.5` |
| Gap | 8px | `gap-2` |
| Border | Bottom only | `border-b border-border` |
| Icon Size | ~11px | `size-[11px]` |
| Text | 14px/20px | `text-sm leading-5` |
| Placeholder Color | #71717a | `text-muted-foreground` |

### Menu Items
| Property | Value | Tailwind |
|----------|-------|----------|
| Padding | 8px horizontal, 6px vertical | `px-2 py-1.5` |
| Gap | 8px | `gap-2` |
| Border Radius | 6px | `rounded-sm` |
| Text | 14px/20px Regular | `text-sm font-normal` |
| Avatar Size | 20px | `size-5` |
| Icon Size | ~11px | `size-[11px]` |

---

## States

### Trigger States

| State | Background | Border | Text | Other |
|-------|------------|--------|------|-------|
| Default | `bg-background` | `border-input` | `text-foreground` | `shadow-xs` |
| Hover | `bg-accent` | `border-input` | `text-accent-foreground` | `shadow-xs` |
| Focus | `bg-background` | `border-ring` | `text-foreground` | `ring-3 ring-ring` |
| Pressed | `bg-background` | `border-input` | `text-foreground` | `opacity-60` on trigger |
| Disabled | `bg-background` | `border-input` | `text-foreground` | `opacity-50 pointer-events-none` |
| Open | - | - | - | Popover visible |

### Menu Item States

| State | Background | Text Color | Check Icon |
|-------|------------|------------|------------|
| Default | transparent | `text-foreground` | `text-muted-foreground` |
| Hover | `bg-accent` | `text-accent-foreground` | `text-accent-foreground` |

---

## Icons

**Trigger Icon Size:** `size-4` (16×16px) with `opacity-50`

| Icon | Use For |
|------|---------|
| `ChevronsUpDown` | Default trigger indicator |
| `ChevronDown` | Group label trigger indicator |

**Menu Icon Size:** `size-[11px]` (~11px)

| Icon | Use For |
|------|---------|
| `Search` | Search input |
| `Check` | Selected item indicator |
| `CirclePlus` | "Add new" action |

---

## Common Patterns

### Basic Combobox
```tsx
const [open, setOpen] = useState(false)
const [value, setValue] = useState("")

const frameworks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
]

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      role="combobox"
      aria-expanded={open}
      className="w-[200px] justify-between"
    >
      {value
        ? frameworks.find((f) => f.value === value)?.label
        : "Select framework..."}
      <ChevronsUpDown className="size-4 shrink-0 opacity-50" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-[250px] p-0">
    <Command>
      <CommandInput placeholder="Search framework..." />
      <CommandList>
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandGroup>
          {frameworks.map((framework) => (
            <CommandItem
              key={framework.value}
              value={framework.value}
              onSelect={(currentValue) => {
                setValue(currentValue === value ? "" : currentValue)
                setOpen(false)
              }}
            >
              {framework.label}
              <Check
                className={cn(
                  "ml-auto size-[11px]",
                  value === framework.value ? "opacity-100" : "opacity-0"
                )}
              />
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>
```

### With Group Label
```tsx
<Button
  variant="outline"
  role="combobox"
  aria-expanded={open}
  className="h-12 w-[200px] justify-between"
>
  <div className="flex flex-col items-start gap-0.5">
    <span className="text-xs text-muted-foreground">Group Label</span>
    <span className="text-sm font-semibold">{value || "Placeholder"}</span>
  </div>
  <ChevronDown className="size-4 shrink-0 opacity-50" />
</Button>
```

### With Avatars (User Picker)
```tsx
<CommandItem className="gap-2">
  <Avatar className="size-5">
    <AvatarImage src={user.avatar} />
    <AvatarFallback>{user.initials}</AvatarFallback>
  </Avatar>
  {user.name}
  <Check className={cn("ml-auto size-[11px]", selected ? "opacity-100" : "opacity-0")} />
</CommandItem>
```

### Multi-Select with Checkboxes
```tsx
const [selected, setSelected] = useState<string[]>([])

<CommandItem
  className="gap-2"
  onSelect={() => {
    setSelected((prev) =>
      prev.includes(item.value)
        ? prev.filter((v) => v !== item.value)
        : [...prev, item.value]
    )
  }}
>
  <Checkbox checked={selected.includes(item.value)} />
  {item.label}
</CommandItem>
```

### With Grouped Items
```tsx
<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

### With "Add New" Action
```tsx
<CommandGroup>
  {/* Items */}
</CommandGroup>
<CommandSeparator />
<CommandGroup>
  <CommandItem className="gap-2" onSelect={handleAddNew}>
    <CirclePlus className="size-[11px]" />
    Add new
  </CommandItem>
</CommandGroup>
```

---

## Accessibility

- Implements ARIA combobox pattern
- Arrow keys navigate options
- Enter selects current option
- Escape closes dropdown
- Type-ahead filters options
- `aria-expanded` on trigger
- `aria-selected` on items

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Popover closes on item select | Intentional for single-select; for multi-select, don't call `setOpen(false)` |
| Search not filtering | CommandInput filters by item `value` prop - ensure values are searchable |
| Check mark always visible | Use conditional opacity: `opacity-100` when selected, `opacity-0` otherwise |
| Need empty state | Add `<CommandEmpty>No results.</CommandEmpty>` |
| Items not clickable | Ensure `onSelect` handler is on CommandItem |
| Icon not aligned | Use `ml-auto` on Check icon to push to end |
| Trigger icon too prominent | Add `opacity-50` to trigger icons |

---

## See Also

- **Related Components:** [Select](./select.md) (without search), [Form](./form.md) (form integration), [Command](./command.md) (underlying primitive)
- **Accessibility:** [Forms Accessibility](../a11y/forms.md) — Combobox ARIA patterns
- **Patterns:** [Component Match](../patterns/component-match.md) — Select vs Combobox

---

*Last updated: February 9, 2026*
