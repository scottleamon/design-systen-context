# Date Picker

## Import
```tsx
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
```

## Props
```tsx
interface DatePickerProps {
  date?: Date
  onSelect?: (date: Date | undefined) => void
  disabled?: boolean
  placeholder?: string
  className?: string
}

type DatePickerType = "icon-left" | "icon-right" | "with-input"
```

---

## Design Tokens

### Trigger/Input
| Property | Token | Value |
|----------|-------|-------|
| Height | `h-9` | 36px |
| Padding | `px-3 py-2` | 12px horizontal, 8px vertical |
| Border | `border` | 1px solid input color |
| Border radius | `rounded-md` | 8px |
| Background | `bg-input` | #fafafa |
| Shadow | `shadow-xs` | Subtle drop shadow |
| Gap | `gap-2` | 8px between icon and text |

### With Input Type
| Property | Token | Value |
|----------|-------|-------|
| Padding | `pl-3 pr-10` | 12px left, 40px right (for button) |
| Button size | `size-6` | 24px × 24px |
| Button icon | `h-3.5 w-3.5` | 14px × 14px |
| Button position | `right-[7px] top-[5px]` | Absolute positioned |

### Typography
| Element | Size | Color | Weight |
|---------|------|-------|--------|
| Label | `text-sm` (14px) | `text-foreground` | semibold |
| Placeholder/Value | `text-sm` (14px) | `text-foreground` | semibold (icon types) / normal (with input) |
| Description | `text-sm` (14px) | `text-muted-foreground` | normal |

### Label & Description
| Property | Token | Value |
|----------|-------|-------|
| Horizontal padding | `px-1` | 4px |
| Line height (label) | `leading-none` | 1 |
| Line height (description) | `leading-normal` | 20px |

---

## Types

| Type | Use For | Layout |
|------|---------|--------|
| `icon-left` | Default date picker | Calendar icon → date text |
| `icon-right` | Alternative layout | Date text → calendar icon |
| `with-input` | Editable date entry | Input field with icon trigger button |

### Choosing a Type
- Use **icon-left** as the default for most forms
- Use **icon-right** when right-aligned icons fit the layout better
- Use **with-input** when users need to type dates directly

---

## States

| State | Implementation |
|-------|----------------|
| Default | `border border-input bg-input shadow-xs` |
| Hover | `hover:bg-accent hover:text-accent-foreground` |
| Focus | `ring-2 ring-ring ring-offset-2` |
| Pressed | Calendar popover open, trigger shows active state |
| Disabled | `opacity-50 pointer-events-none` |

---

## Icons

**Size:** `size-4` (16px × 16px)
**Color:** `text-foreground` (#09090b)
**With Input button icon:** `h-3.5 w-3.5` (14px)

```tsx
<CalendarIcon className="size-4 text-foreground" />
```

---

## Common Patterns

### Basic Date Picker
```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
      <CalendarIcon className="mr-2 h-4 w-4" />
      {date ? format(date, "PPP") : <span className="text-muted-foreground">Pick a date</span>}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0">
    <Calendar mode="single" selected={date} onSelect={setDate} />
  </PopoverContent>
</Popover>
```

### Date with Time
```tsx
<div className="flex gap-2">
  <DatePicker date={date} onSelect={setDate} />
  <Input type="time" value={time} onChange={setTime} className="w-[120px]" />
</div>
```

### Date Range
```tsx
<div className="flex flex-col gap-2">
  <DatePicker placeholder="Start date" />
  <DatePicker placeholder="End date" />
</div>
```

### Form Field with Label
```tsx
<div className="space-y-2">
  <Label>Date of birth</Label>
  <DatePicker date={dob} onSelect={setDob} />
</div>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Calendar cuts off | Use `PopoverContent align="start"` or wrap in container |
| Date format wrong | Use `date-fns` `format()` with locale-appropriate pattern |
| No placeholder shown | Check conditional: `{date ? format(date) : "Pick a date"}` |
| Z-index issues | Add `z-50` to PopoverContent |

---

*Last updated: December 18, 2025*

