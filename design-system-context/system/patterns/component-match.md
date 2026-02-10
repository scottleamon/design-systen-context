# Component Selection Patterns

Quick reference for choosing the right component when multiple options exist.

---

## Overlay Components: Dialog vs Sheet vs Drawer

### When to Use Each

| Component | Use For | Position | Size |
|-----------|---------|----------|------|
| **Dialog** | Focused tasks, confirmations, forms | Center | Fixed width |
| **Sheet** | Supplementary content, filters, panels | Side (right/left) | Partial width |
| **Drawer** | Mobile navigation, bottom panels | Bottom/Side | Variable |

### Decision Flow

```
Need to interrupt user for focused action?
├── Yes → Is it a simple confirmation?
│         ├── Yes → AlertDialog
│         └── No → Dialog
└── No → Is it supplementary/contextual content?
          ├── Yes → Does it need significant space?
          │         ├── Yes → Sheet
          │         └── No → Popover
          └── No → Is it mobile navigation?
                    ├── Yes → Drawer
                    └── No → Consider inline content
```

### Specific Use Cases

| Use Case | Component |
|----------|-----------|
| Delete confirmation | AlertDialog |
| Edit profile form | Dialog |
| Create new item form | Dialog |
| Filter panel | Sheet |
| Detail preview | Sheet |
| Mobile menu | Drawer |
| Settings panel | Sheet |
| Quick actions | Popover or DropdownMenu |

---

## Feedback Components: Alert vs Toast vs Dialog

### When to Use Each

| Component | Use For | Persistence | User Action |
|-----------|---------|-------------|-------------|
| **Toast (Sonner)** | Non-blocking feedback | Auto-dismiss | Optional |
| **Alert** | Important inline notices | Persistent | Optional |
| **AlertDialog** | Critical confirmations | Blocking | Required |

### Decision Flow

```
Is immediate user action required?
├── Yes → Is it destructive/irreversible?
│         ├── Yes → AlertDialog with confirm
│         └── No → AlertDialog or Dialog
└── No → Should it persist until dismissed?
          ├── Yes → Alert (inline)
          └── No → Toast (Sonner)
```

### Specific Use Cases

| Use Case | Component |
|----------|-----------|
| "Changes saved" | Toast (success) |
| "Error saving" (recoverable) | Toast (error) |
| "Session expired" | Alert or Dialog |
| "Delete this item?" | AlertDialog |
| "Unsaved changes" | AlertDialog |
| Form validation error | Inline error text |
| Important system notice | Alert |

---

## Selection Components: Select vs Combobox vs RadioGroup

### When to Use Each

| Component | Best For | Searchable | Multi-select |
|-----------|----------|------------|--------------|
| **Select** | 5-15 predefined options | No | No |
| **Combobox** | Many options, needs search | Yes | Optional |
| **RadioGroup** | 2-5 mutually exclusive options | No | No |
| **Checkbox** | Independent boolean choices | No | Yes (multiple) |

### Decision Flow

```
How many options?
├── 2-5 options → Are they mutually exclusive?
│                 ├── Yes → RadioGroup
│                 └── No → Multiple Checkboxes
├── 5-15 options → Select
└── 15+ options → Combobox (searchable)

Need to select multiple?
├── Yes → Is it a short list?
│         ├── Yes → Checkbox group
│         └── No → Multi-select Combobox
└── No → Select, Combobox, or RadioGroup
```

### Specific Use Cases

| Use Case | Component |
|----------|-----------|
| Gender selection (M/F/Other) | RadioGroup |
| Country selection | Combobox |
| State/province | Select |
| Assign users to task | Multi-select Combobox |
| Notification preferences | Checkboxes |
| Payment method | RadioGroup |
| Timezone | Combobox |
| Status filter | Select |

---

## Text Input Components: Input vs Textarea vs Rich Text

### When to Use Each

| Component | Best For | Lines |
|-----------|----------|-------|
| **Input** | Single-line text | 1 |
| **Textarea** | Multi-line plain text | 2-10 |
| **Rich Text Editor** | Formatted content | Variable |

### Decision Flow

```
Is the content single-line?
├── Yes → Input (with appropriate type)
└── No → Does it need formatting?
          ├── Yes → Rich Text Editor
          └── No → Textarea
```

### Input Types

| Data Type | Input Type | Extra |
|-----------|------------|-------|
| Email | `type="email"` | Built-in validation |
| Password | `type="password"` | Toggle visibility |
| Phone | `type="tel"` | Pattern validation |
| Number | `type="number"` | Min/max constraints |
| Search | `type="search"` | With search icon |
| URL | `type="url"` | Built-in validation |

---

## Navigation Components: Tabs vs Accordion vs Stepper

### When to Use Each

| Component | Best For | Content Visibility |
|-----------|----------|-------------------|
| **Tabs** | Parallel content sections | One at a time |
| **Accordion** | FAQ, collapsible sections | Multiple possible |
| **Stepper** | Sequential process | One at a time |

### Decision Flow

```
Is this a multi-step process?
├── Yes → Stepper or multi-page wizard
└── No → Are sections peer-level content?
          ├── Yes → Is space limited?
          │         ├── Yes → Tabs
          │         └── No → Separate cards
          └── No → Is it Q&A or details?
                    ├── Yes → Accordion
                    └── No → Tabs or separate sections
```

### Specific Use Cases

| Use Case | Component |
|----------|-----------|
| Account/Password settings | Tabs |
| FAQ page | Accordion |
| Checkout flow | Stepper |
| Product details | Tabs |
| File/folder tree | Collapsible tree |
| Code preview/output | Tabs |

---

## Button Variants

### When to Use Each Variant

| Variant | Use For | Visual Weight |
|---------|---------|---------------|
| **default** | Primary action | Highest |
| **secondary** | Supporting action | Medium |
| **outline** | Neutral/cancel actions | Low |
| **ghost** | Toolbar/subtle actions | Lowest |
| **destructive** | Delete/remove actions | High (danger) |
| **link** | Navigation-like actions | Lowest |

### Decision Flow

```
Is this the main action on the page?
├── Yes → default (primary)
└── No → Is it destructive?
          ├── Yes → destructive
          └── No → Is it a cancel/dismiss?
                    ├── Yes → outline
                    └── No → Is it in a toolbar?
                              ├── Yes → ghost
                              └── No → secondary
```

### Button Pairing Rules

| Primary Action | Secondary Action |
|----------------|------------------|
| `default` | `outline` |
| `destructive` | `outline` |
| `default` | `ghost` |

**Rule:** Never pair two `default` buttons side by side.

---

## Menu Components: DropdownMenu vs ContextMenu vs Menubar

### When to Use Each

| Component | Trigger | Position |
|-----------|---------|----------|
| **DropdownMenu** | Click button | Below trigger |
| **ContextMenu** | Right-click | At cursor |
| **Menubar** | Click menu label | App-level navigation |
| **Command** | Keyboard shortcut (⌘K) | Center modal |

### Decision Flow

```
How is the menu triggered?
├── Click on button → DropdownMenu
├── Right-click → ContextMenu
├── Keyboard shortcut → Command (palette)
└── App navigation bar → Menubar
```

---

## Data Display: Table vs DataTable vs List

### When to Use Each

| Component | Best For | Features |
|-----------|----------|----------|
| **Table** | Simple data display | Basic |
| **DataTable** | Interactive data | Sort, filter, paginate |
| **Card list** | Visual items | Images, rich content |

### Decision Flow

```
Is the data tabular (rows/columns)?
├── Yes → Needs sorting/filtering?
│         ├── Yes → DataTable (with TanStack)
│         └── No → Table
└── No → Is each item visually rich?
          ├── Yes → Card grid/list
          └── No → Simple list
```

---

## Tooltip vs Popover vs HoverCard

### When to Use Each

| Component | Content | Trigger | Persistence |
|-----------|---------|---------|-------------|
| **Tooltip** | Brief text label | Hover | Disappears on leave |
| **HoverCard** | Rich preview | Hover | Disappears on leave |
| **Popover** | Interactive content | Click | Until dismissed |

### Decision Flow

```
Is the content interactive (buttons, links)?
├── Yes → Popover
└── No → Is it a rich preview?
          ├── Yes → HoverCard
          └── No → Tooltip
```

### Specific Use Cases

| Use Case | Component |
|----------|-----------|
| Icon button label | Tooltip |
| User profile preview | HoverCard |
| Date picker | Popover |
| Color picker | Popover |
| Abbreviation explanation | Tooltip |
| Link preview | HoverCard |

---

## Quick Reference Table

| Need | Use |
|------|-----|
| Centered modal for forms | [Dialog](../components/dialog.md) |
| Side panel for filters | [Sheet](../components/sheet.md) |
| Mobile menu | [Drawer](../components/drawer.md) |
| Confirmation before delete | [AlertDialog](../components/alert-dialog.md) |
| Success notification | [Toast](../components/sonner.md) |
| Important notice in context | [Alert](../components/alert.md) |
| 3 choices, pick one | [RadioGroup](../components/radio-group.md) |
| Many choices, searchable | [Combobox](../components/combobox.md) |
| Medium list, no search | [Select](../components/select.md) |
| Multi-line text | [Textarea](../components/textarea.md) |
| Sequential steps | Stepper |
| Parallel sections | [Tabs](../components/tabs.md) |
| Collapsible Q&A | [Accordion](../components/accordion.md) |
| Main action | [Button default](../components/button.md) |
| Cancel action | [Button outline](../components/button.md) |
| Subtle helper text | [Tooltip](../components/tooltip.md) |
| Rich preview on hover | [HoverCard](../components/hover-card.md) |
| Interactive menu | [Popover](../components/popover.md) |

---

*Last updated: February 4, 2026*
