# Icon Inventory

## Critical Rule

**NEVER guess icon names.** AI models frequently hallucinate icon names. Common mistakes:

- `<Spinner />` → Use `<LoaderCircle />`
- `<Close />` → Use `<X />`
- `<Trash />` → Use `<Trash2 />`
- `<Hamburger />` → Use `<Menu />`
- `<Caret />` → Use `<ChevronDown />`

**ALWAYS check this inventory or https://lucide.dev/icons before using any icon.**

---

## Source

- **Library:** Lucide React (lucide-react)
- **Design Kit:** ShadcnDesign UI Kit (Figma)
- **Total Icons:** 1,468+

---

## Icon Naming Convention

All icons in Figma use the format: `Icon / IconName`

To convert to Lucide React import:
- Figma: `Icon / ChevronDown` → Lucide: `ChevronDown`
- Figma: `Icon / ArrowUpRight` → Lucide: `ArrowUpRight`

---

## Size Classes

| Size | Class | Pixels | Use For |
|------|-------|--------|---------|
| xs | `size-3` | 12px | Badge icons |
| sm | `size-4` | 16px | Buttons, inputs, inline (DEFAULT) |
| md | `size-5` | 20px | Medium emphasis |
| lg | `size-6` | 24px | Sidebar nav, emphasis |
| xl | `size-8` | 32px | Large display |
| 2xl | `size-12` | 48px | Card headers, features |

---

## Code Pattern

```tsx
import { IconName } from "lucide-react"

// Standard size (16px)
<IconName className="size-4" />

// With text (use gap for spacing)
<Button className="gap-2">
  <IconName className="size-4" />
  Button Text
</Button>

// Spinner
<LoaderCircle className="size-4 animate-spin" />
```

---

## Common Naming Gotchas

| What You Might Guess | Correct Lucide Import | Notes |
|---------------------|----------------------|-------|
| `Loader` or `Spinner` | `LoaderCircle` | LoaderCircle is the standard spinner |
| `Trash` | `Trash2` | Trash2 is the standard trash icon |
| `Loader2` | `LoaderCircle` | Loader2 is deprecated, use LoaderCircle |
| `Close` | `X` | Not "Close" or "Cancel" |
| `Dropdown` | `ChevronDown` | Not "Dropdown" or "Caret" |
| `Menu` or `Hamburger` | `Menu` | Three horizontal lines |
| `More` | `MoreHorizontal` or `MoreVertical` | Three dots |
| `Search` | `Search` | Magnifying glass |
| `Settings` or `Gear` | `Settings` | Not "Gear" or "Cog" |
| `Edit` | `Pencil` or `Pen` | Not "Edit" |
| `Delete` | `Trash2` | Not "Delete" |
| `Add` | `Plus` | Not "Add" |
| `Remove` | `Minus` or `X` | Context dependent |
| `User` | `User`, `UserRound`, or `CircleUser` | Multiple variants exist |
| `Message` | `MessageSquare` or `MessageCircle` | Multiple variants exist |
| `Alert` | `AlertCircle` or `TriangleAlert` | Multiple variants exist |
| `Info` | `Info` or `CircleHelp` | Multiple variants exist |

---

## Most Used Icons (Quick Reference)

| Purpose | Icon | Import |
|---------|------|--------|
| Loading/spinner | LoaderCircle | `<LoaderCircle className="size-4 animate-spin" />` |
| Close/dismiss | X | `<X className="size-4" />` |
| Dropdown indicator | ChevronDown | `<ChevronDown className="size-4" />` |
| Navigation prev/next | ChevronLeft, ChevronRight | `<ChevronLeft className="size-4" />` |
| Menu toggle | Menu | `<Menu className="size-4" />` |
| Search | Search | `<Search className="size-4" />` |
| Settings | Settings | `<Settings className="size-4" />` |
| User/profile | User | `<User className="size-4" />` |
| Add/create | Plus | `<Plus className="size-4" />` |
| Delete | Trash2 | `<Trash2 className="size-4" />` |
| Edit | Pencil | `<Pencil className="size-4" />` |
| Success/check | Check | `<Check className="size-4" />` |
| Error/warning | AlertCircle | `<AlertCircle className="size-4" />` |
| Info | Info | `<Info className="size-4" />` |
| External link | ExternalLink | `<ExternalLink className="size-4" />` |
| Copy | Copy | `<Copy className="size-4" />` |
| Download | Download | `<Download className="size-4" />` |
| Upload | Upload | `<Upload className="size-4" />` |
| More options | MoreHorizontal | `<MoreHorizontal className="size-4" />` |
| Calendar/date | Calendar | `<Calendar className="size-4" />` |

---

## Icons Used in Design System Components

| Component | Icon Purpose | Lucide Import |
|-----------|--------------|---------------|
| Button (loading) | Spinner | `LoaderCircle` with `animate-spin` |
| Select | Dropdown indicator | `ChevronDown` |
| Dialog | Close button | `X` |
| Sheet | Close button | `X` |
| Alert | Info icon | `Info`, `AlertCircle`, `TriangleAlert`, `CheckCircle` |
| Toast/Sonner | Status icons | `Check`, `X`, `AlertCircle`, `Info` |
| Command | Search icon | `Search` |
| Accordion | Expand/collapse | `ChevronDown` |
| Collapsible | Expand/collapse | `ChevronDown` or `ChevronsUpDown` |
| DropdownMenu | Submenu indicator | `ChevronRight` |
| Breadcrumb | Separator | `ChevronRight` |
| Pagination | Nav arrows | `ChevronLeft`, `ChevronRight` |
| Calendar | Nav arrows | `ChevronLeft`, `ChevronRight` |
| Sidebar | Collapse toggle | `PanelLeft` |

---

## Status Icons

| Status | Icon | Color Class |
|--------|------|-------------|
| Success | `CircleCheck` or `Check` | `text-green-600` |
| Error | `AlertCircle` or `X` | `text-destructive` |
| Warning | `TriangleAlert` | `text-yellow-600` |
| Info | `Info` | `text-primary` |

---

## Custom Icons (Non-Lucide)

These are custom icons specific to this design system:

| Figma Layer Name | Notes |
|------------------|-------|
| Custom Icon / Inner-shadow-top | Custom |
| Custom Icon / Brightness | Custom |
| Custom Icon / Dashboard | Custom |
| Custom Icon / List | Custom |
| Custom Icon / Chartbar | Custom |
| Custom Icon / CirclePlus | Custom |

---

## Full Icon List

For the complete A-Z list of all 1,468 icons, see [icons-full-list.md](./icons-full-list.md).

---

*Last updated: January 16, 2026*
