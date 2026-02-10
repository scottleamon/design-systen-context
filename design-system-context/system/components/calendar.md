# Calendar

## Import
```tsx
import { Calendar } from "@/components/ui/calendar"
```

## Props
```tsx
interface CalendarProps {
  mode?: "single" | "range" | "multiple"
  selected?: Date | DateRange | Date[]
  onSelect?: (date: Date | DateRange | Date[] | undefined) => void
  disabled?: Date[] | ((date: Date) => boolean)
  fromDate?: Date
  toDate?: Date
  defaultMonth?: Date
  numberOfMonths?: number
  showOutsideDays?: boolean
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  captionLayout?: "buttons" | "dropdown" | "dropdown-buttons"
  fromYear?: number
  toYear?: number
  className?: string
}

interface DateRange {
  from: Date
  to?: Date
}
```

---

## Variants

| Variant | Use For | Props |
|---------|---------|-------|
| `single` | Simple date selection | Default mode |
| `range` | Date range selection (bookings, filters) | `mode="range" numberOfMonths={2}` |
| `multiple` | Selecting multiple individual dates | `mode="multiple"` |

### Display Variants

| Type | Use For | Props |
|------|---------|-------|
| Basic | Standard date picker | Default |
| Month/Year Selector | Quick jump to distant dates, birth dates | `captionLayout="dropdown-buttons"` |
| Multi-Month | Range selection, quarter views | `numberOfMonths={2}` or `numberOfMonths={3}` |
| Mobile | Touch-friendly targets | Custom day cell sizing |

### Choosing a Variant
- **Single:** Default for most date inputs
- **Range:** Booking systems, date filters, vacation planning
- **Month/Year Dropdown:** Birth date selection, historical dates

---

## Sizes

| Size | Day Cell | Use For |
|------|----------|---------|
| Default | `size-8` (32×32px) | Standard desktop |
| Mobile | `size-12` (48×48px) | Touch-friendly mobile |

---

## Styling

### Day Cell Button
- **Size:** `size-8` (32×32px)
- **Border radius:** `rounded-md` (8px)
- **Typography:** Adelle Sans Regular, `text-sm` (14px), `leading-5` (20px)

### Day Header (Weekday labels)
- **Width:** `w-8` (32px)
- **Height:** 21px
- **Typography:** Adelle Sans Regular, `text-xs` (12px), `leading-4` (16px)
- **Color:** `text-muted-foreground`

### Month Caption
- **Typography:** Adelle Sans Semibold, `text-sm` (14px), `leading-5` (20px)
- **Color:** `text-foreground`

### Navigation Buttons
- **Size:** `size-8` (32×32px)
- **Border radius:** `rounded-md` (8px)
- **Icon:** `size-4` (16px), `text-primary`

### Layout
- **Row gap:** `gap-2` (8px)
- **Container:** `shadow-sm`, `rounded-md`

---

## States

| State | Background | Text Color | Border |
|-------|------------|------------|--------|
| Default | transparent | `text-foreground` | none |
| Outside | transparent | `text-muted-foreground` | none |
| Today | `bg-accent` | `text-accent-foreground` | none |
| Hover | `bg-accent` | `text-accent-foreground` | none |
| Selected | `bg-primary` | `text-primary-foreground` | none |
| Selected + Focus | `bg-primary` | `text-primary-foreground` | `ring-3 ring-ring` |
| Range (middle) | `bg-accent` | `text-accent-foreground` | none |
| Range Start | `bg-primary` | `text-primary-foreground` | left: `rounded-md`, right: `rounded-none` |
| Range End | `bg-primary` | `text-primary-foreground` | left: `rounded-none`, right: `rounded-md` |
| Disabled | transparent | `opacity-50` | none |
| Unavailable | transparent | `line-through opacity-50` | none |

---

## Icons

**Size:** `size-4` (16×16px)
**Color:** `text-primary`

| Icon | Use For |
|------|---------|
| `ChevronLeft` | Previous month navigation |
| `ChevronRight` | Next month navigation |
| `ChevronDown` | Month/year dropdown indicator |

```tsx
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
```

---

## Common Patterns

### Basic Date Picker
```tsx
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

const [date, setDate] = useState<Date | undefined>()

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>
```

### Date Range Selection
```tsx
import { Calendar } from "@/components/ui/calendar"
import { DateRange } from "react-day-picker"
import { useState } from "react"

const [dateRange, setDateRange] = useState<DateRange | undefined>()

<Calendar
  mode="range"
  selected={dateRange}
  onSelect={setDateRange}
  numberOfMonths={2}
/>
```

### With Month/Year Dropdowns
```tsx
<Calendar
  mode="single"
  captionLayout="dropdown-buttons"
  fromYear={1900}
  toYear={2100}
/>
```

### With Disabled Dates
```tsx
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={(date) =>
    date > new Date() || date < new Date("1900-01-01")
  }
/>
```

### Mobile-Friendly Calendar
```tsx
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  classNames={{
    day: "size-12 text-base",
    head_cell: "w-12",
  }}
/>
```

### Three-Month Range Calendar
```tsx
<Calendar
  mode="range"
  selected={dateRange}
  onSelect={setDateRange}
  numberOfMonths={3}
/>
```

---

## Accessibility

- Arrow keys navigate between days
- Enter/Space to select
- Month navigation via buttons
- Screen readers announce date selections
- Focus ring visible on keyboard navigation: `ring-3 ring-ring`

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Range selection only shows one month | Add `numberOfMonths={2}` |
| Past dates still selectable | Add `disabled` function or `fromDate` |
| Need quick year navigation | Use `captionLayout="dropdown-buttons"` with `fromYear`/`toYear` |
| Mobile touch targets too small | Use `classNames` to increase day cell size to `size-12` |
| Today's date not highlighted | Ensure `today` class applies `bg-accent text-accent-foreground` |
| Range endpoints look wrong | Check that rounded corners apply: start gets left radius, end gets right radius |

---

## See Also

- **Related Components:** [Date Picker](./date-picker.md) (calendar in popover), [Form](./form.md) (form field usage)
- **Accessibility:** [Forms Accessibility](../a11y/forms.md) — Date input patterns

---

*Last updated: February 9, 2026*
