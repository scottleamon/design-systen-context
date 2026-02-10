# Data Table

## Import
```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
```

## Props
```tsx
// Built with TanStack Table — configure via column definitions
interface ColumnDef<TData> {
  accessorKey?: string
  header: string | (({ column }) => React.ReactNode)
  cell?: ({ row }) => React.ReactNode
  enableSorting?: boolean
  enableHiding?: boolean
}
```

---

## Design Tokens

### Table Container
| Property | Token | Value |
|----------|-------|-------|
| Border | `border` | 1px solid border color |
| Border radius | `rounded-md` | 8px |
| Overflow | `overflow-clip` | — |
| Min width | — | 487px |

### Header Row (TableHead)
| Property | Token | Value |
|----------|-------|-------|
| Height | `h-10` | 40px |
| Border | `border-b` | 1px solid border color |
| Padding | `px-2` | 8px horizontal |
| Min width | — | 85px (text columns) |
| Text size | `text-sm` | 14px |
| Text color | `text-muted-foreground` | #71717a |
| Font weight | `font-semibold` | semibold |

### Table Cell
| Property | Token | Value |
|----------|-------|-------|
| Border | `border-b` | 1px solid border color |
| Padding | `p-2` | 8px |
| Min width | — | 85px (text columns) |
| Text size | `text-sm` | 14px |
| Text color | `text-foreground` | #09090b |
| Font weight | — | normal |

### Checkbox Column
| Property | Token | Value |
|----------|-------|-------|
| Width | `w-8` | 32px |
| Padding | `pl-3` | 12px left |
| Checkbox size | `size-4` | 16px × 16px |
| Checkbox radius | — | 4px |

### Action Column
| Property | Token | Value |
|----------|-------|-------|
| Width | `w-16` | 64px |
| Padding | `pl-3 pr-2` | 12px left, 8px right |
| Button size | `size-8` | 32px × 32px |
| Icon size | `size-4` | 16px × 16px |
| Icon color | `text-primary` | #19518b |

### Sortable Header Button
| Property | Token | Value |
|----------|-------|-------|
| Height | `h-9` | 36px |
| Padding | `px-4 py-2` | 16px horizontal, 8px vertical |
| Border radius | `rounded-md` | 8px |
| Text color | `text-muted-foreground` | #71717a |
| Background | `bg-transparent` | transparent |
| Icon | ArrowDownUp | 16px × 16px |

### Toolbar
| Property | Token | Value |
|----------|-------|-------|
| Padding | `py-4` | 16px vertical |
| Input max-width | `max-w-sm` | 384px |
| Input height | `h-9` | 36px |

### Pagination/Caption
| Property | Token | Value |
|----------|-------|-------|
| Padding | `py-4` | 16px vertical |
| Text size | `text-sm` | 14px |
| Text color | `text-muted-foreground` | #71717a |
| Button height | `h-9` | 36px |
| Button variant | `variant="outline"` | — |
| Disabled | `opacity-50` | 50% opacity |

---

## Cell Variants

| Variant | Use For | Implementation |
|---------|---------|----------------|
| `checkbox` | Row selection | `<Checkbox />` in cell |
| `text` | Default data display | Plain text content |
| `action` | Row actions menu | `<DropdownMenu>` with Ellipsis icon trigger |

## Header Variants

| Variant | Use For | Implementation |
|---------|---------|----------------|
| `checkbox` | Select all rows | `<Checkbox />` component |
| `text` | Non-sortable columns | Plain text, `text-muted-foreground font-semibold` |
| `button` | Sortable columns | `<Button variant="ghost">` with ArrowDownUp icon |

---

## States

| State | Implementation |
|-------|----------------|
| Default | `border-b border-border` |
| Hover (row) | `hover:bg-muted/50` (automatic) |
| Selected | `bg-muted` + checkbox checked |
| Sorted Asc | Header shows `ArrowUp` icon |
| Sorted Desc | Header shows `ArrowDown` icon |
| Disabled (pagination) | `opacity-50 pointer-events-none` |

---

## Icons

**Sort icon:** `size-4 ml-2` (ArrowDownUp)
**Action icon:** `size-4` (Ellipsis, `text-primary`)

```tsx
<Button variant="ghost" onClick={() => column.toggleSorting()}>
  Email <ArrowUpDown className="ml-2 size-4" />
</Button>
```

---

## Common Patterns

### Basic Table Structure
```tsx
<div className="rounded-md border">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Status</TableHead>
        <TableHead>Email</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Success</TableCell>
        <TableCell>user@example.com</TableCell>
        <TableCell className="text-right">$2,500.00</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>
```

### With Selection & Actions
```tsx
<TableRow>
  <TableCell><Checkbox /></TableCell>
  <TableCell>Success</TableCell>
  <TableCell>user@example.com</TableCell>
  <TableCell>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  </TableCell>
</TableRow>
```

### Toolbar & Pagination
```tsx
<div className="flex items-center py-4">
  <Input placeholder="Filter emails..." className="max-w-sm" />
  <DropdownMenu>/* Column visibility */</DropdownMenu>
</div>
<Table>/* ... */</Table>
<div className="flex items-center justify-between py-4">
  <span className="text-sm text-muted-foreground">
    0 of 5 row(s) selected.
  </span>
  <div className="space-x-2">
    <Button variant="outline" size="sm">Previous</Button>
    <Button variant="outline" size="sm">Next</Button>
  </div>
</div>
```

---

## Accessibility

- Built on TanStack Table — requires manual a11y implementation
- Use semantic `<table>`, `<thead>`, `<th>`, `<tbody>` structure
- Keyboard: Tab to sortable headers, Enter/Space to sort
- Screen reader: add `aria-sort` to sortable column headers
- Row selection: use `aria-selected` on selected rows

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Table overflows container | Wrap in `<div className="rounded-md border overflow-auto">` |
| Checkbox column too wide | Add `className="w-[50px]"` to TableHead |
| Actions not aligned | Use `text-right` on Amount, keep actions as last column |
| Row not clickable | Add `onClick` to `<TableRow>` with `cursor-pointer` |

---

## See Also

- **Related Components:** [Table](./table.md) (static table), [Pagination](./pagination.md) (table pagination)
- **Accessibility:** [Data Tables Accessibility](../a11y/data-tables.md) — Table ARIA and keyboard patterns

---

*Last updated: February 9, 2026*
