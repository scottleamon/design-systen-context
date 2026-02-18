# Table

## Import
```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
```

---

## Structure

| Part | Tailwind |
|------|----------|
| Table | `w-full caption-bottom text-sm` |
| TableHeader | — |
| TableRow | `border-b border-border transition-colors hover:bg-muted/50` |
| TableHead | `h-10 px-2 text-left align-middle text-sm font-semibold text-muted-foreground` |
| TableCell | `p-2 align-middle text-sm text-foreground` |
| TableFooter | `bg-muted/50` |
| TableCaption | `pt-4 text-sm text-muted-foreground text-center` |

---

## Sizes

| Size | Cell Height | Use For |
|------|-------------|---------|
| default | `h-[52px]` | Standard data tables |
| md | `h-[72px]` | Tables with more content |
| lg | `h-[96px]` | Tables with rich content (images, multi-line) |

---

## Cell Variants

| Variant | Content | Use For |
|---------|---------|---------|
| Default | Text only | Simple data |
| Bold Text | Title + description | Primary column, identifiers |
| Badge | Badge component | Status indicators |
| Avatar | Avatar + text | User columns |
| Switch | Switch toggle | Settings tables |
| Button | Action button | Row actions |
| Dropdown | DropdownMenu trigger | Multiple actions |
| Progress | Progress bar | Completion status |
| Image | AspectRatio image | Media tables |
| Input | Input field | Editable cells |
| Toggle Group | Toggle buttons | Options selection |

---

## States

| State | Implementation |
|-------|----------------|
| Default | Base styling |
| Hover | `hover:bg-muted/50` on TableRow |

---

## Common Patterns

### Basic Table
```tsx
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-semibold">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### With Footer
```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {/* rows */}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell>Total</TableCell>
      <TableCell className="text-right font-semibold">$2,500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

### Cell with Title + Description
```tsx
<TableCell>
  <div className="flex flex-col">
    <span className="font-semibold">John Doe</span>
    <span className="text-muted-foreground">john@example.com</span>
  </div>
</TableCell>
```

### Cell with Avatar
```tsx
<TableCell>
  <div className="flex items-center gap-2">
    <Avatar className="size-8">
      <AvatarImage src="/avatar.jpg" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <span>John Doe</span>
  </div>
</TableCell>
```

### Cell with Badge
```tsx
<TableCell>
  <Badge variant="success">Active</Badge>
</TableCell>
```

### Right-Aligned Column (Numbers)
```tsx
<TableHead className="text-right">Amount</TableHead>
<TableCell className="text-right">$250.00</TableCell>
```

---

## Accessibility

- Standard HTML table — uses semantic markup for accessibility
- Use `<thead>`, `<tbody>`, `<th>` with `scope="col"` for proper structure
- Screen reader: header/cell associations handled automatically with proper markup
- No special keyboard interaction for static tables
- Add `role="grid"` only if table is interactive

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Caption at top | Caption is always bottom by default |
| Missing hover | Ensure `hover:bg-muted/50` on TableRow |
| Alignment issues | Use `align-middle` on cells |
| Last cell border | Remove with `border-b-0` if needed |
| Wide tables | Wrap in `overflow-x-auto` container |

---

## See Also

- **Accessibility:** [Data Table Accessibility Requirements](../a11y/data-tables.md) - Header associations, keyboard navigation
- **Related Components:** [Data Table](./data-table.md) (with sorting/filtering)
- **Patterns:** [Table with Toolbar](../patterns/compositions.md#table-with-toolbar)

---

*Last updated: February 9, 2026*

