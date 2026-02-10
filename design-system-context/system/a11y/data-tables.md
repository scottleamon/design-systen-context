# Data Table Accessibility

> [!CAUTION]
> **BASED ON STANDARD RADIX/SHADCN PATTERNS — VERIFY AGAINST YOUR IMPLEMENTATION**
> These accessibility patterns are derived from Radix UI primitive documentation and WAI-ARIA best practices.
> Your actual component implementations may differ. Test with a screen reader before relying on this guidance.

---

## Applies To

- **Table** — basic data display component (`<table>` semantics)
- **DataTable** — interactive table built on TanStack Table (sorting, pagination, selection, filtering)

---

## General Table Accessibility

### Semantic Table Structure

Use native HTML table elements — they provide built-in screen reader support that is extremely difficult to replicate with ARIA roles alone.

```tsx
<table>
  <caption>User accounts</caption>    {/* or aria-label on <table> */}
  <thead>
    <tr>
      <th scope="col">Name</th>       {/* scope tells AT this heads a column */}
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jane Doe</td>
      <td>jane@example.com</td>
    </tr>
  </tbody>
</table>
```

**Key rules:**
- Headers **must** use `<th>`, never `<td>` styled to look like a header
- Use `scope="col"` on column headers and `scope="row"` on row headers (when applicable)
- Every table needs an accessible name via `<caption>`, `aria-label`, or `aria-labelledby`
- Empty cells should contain a dash, "N/A", or `aria-label="No value"` — never truly empty

### When to Use `role="grid"` vs `<table>`

| Use Case | Recommended Role | Rationale |
|----------|-----------------|-----------|
| Static data display | `<table>` (implicit `role="table"`) | Screen readers have excellent built-in table navigation |
| Sortable columns only | `<table>` with `aria-sort` on headers | Sorting buttons are in headers; table semantics still work |
| Row selection with checkboxes | `<table>` with `aria-selected` on rows | Checkboxes are standard interactive elements within cells |
| Inline cell editing | `role="grid"` | Grid role enables cell-by-cell keyboard navigation |
| Spreadsheet-like interaction | `role="grid"` | Full arrow-key cell navigation expected |

**Default recommendation:** Use `<table>` semantics (what shadcn/ui Table provides). Only upgrade to `role="grid"` if your DataTable supports inline editing or requires cell-by-cell arrow key navigation.

---

## DataTable-Specific Patterns

### Sortable Columns

When a column is sortable, its header needs to communicate the current sort state and provide keyboard-accessible sorting.

**ARIA attributes on `<th>`:**

| Sort State | Attribute | When |
|------------|-----------|------|
| Not sorted | `aria-sort="none"` (or omit) | Column is sortable but not currently sorted |
| Ascending | `aria-sort="ascending"` | Sorted A→Z, low→high |
| Descending | `aria-sort="descending"` | Sorted Z→A, high→low |

**Implementation pattern:**

```tsx
<th scope="col" aria-sort={column.getIsSorted() === "asc" ? "ascending" : column.getIsSorted() === "desc" ? "descending" : "none"}>
  <button
    onClick={column.getToggleSortingHandler()}
    className="flex items-center gap-1"
  >
    {column.columnDef.header}
    <ArrowUpDown className="size-4" aria-hidden="true" />
    <span className="sr-only">
      {column.getIsSorted() === "asc"
        ? ", sorted ascending"
        : column.getIsSorted() === "desc"
        ? ", sorted descending"
        : ", click to sort"}
    </span>
  </button>
</th>
```

**Key points:**
- The sort button inside the header must be keyboard focusable
- The visual sort indicator icon should be `aria-hidden="true"` (the `aria-sort` attribute provides the information to screen readers)
- Only one column should have `aria-sort="ascending"` or `aria-sort="descending"` at a time
- Screen readers announce the sort state automatically when `aria-sort` is present

**Screen reader announcement example:**
> "Name, column header, sorted ascending"

### Row Selection

Row selection typically uses a checkbox pattern within the first column.

**ARIA attributes on `<tr>`:**

```tsx
<tr
  aria-selected={row.getIsSelected()}
  data-state={row.getIsSelected() ? "selected" : undefined}
>
  <td>
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label={`Select row ${row.getValue("name") || row.index + 1}`}
    />
  </td>
  {/* ... other cells */}
</tr>
```

**Key points:**
- Each row checkbox **must** have a contextual `aria-label` (e.g., "Select row John Doe"), not just "Select"
- `aria-selected="true"` on the `<tr>` communicates selection to screen readers
- The "select all" checkbox in the header should use `aria-label="Select all rows"` (or "Select all rows on this page" for paginated tables)
- Indeterminate state: when some but not all rows are selected, the header checkbox should be `aria-checked="mixed"` (Radix Checkbox supports this via `checked="indeterminate"`)

**Screen reader announcement when toggling:**
> "Select row John Doe, checkbox, checked" / "not checked"

### Pagination

Pagination must communicate the current page context and announce page changes.

**Implementation pattern:**

```tsx
<nav aria-label="Table pagination">
  <div aria-live="polite" aria-atomic="true" className="sr-only">
    Page {currentPage} of {totalPages}, showing {startRow}–{endRow} of {totalRows} results
  </div>

  <Button
    onClick={() => table.previousPage()}
    disabled={!table.getCanPreviousPage()}
    aria-label="Go to previous page"
  >
    Previous
  </Button>

  <span aria-current="page">
    Page {currentPage} of {totalPages}
  </span>

  <Button
    onClick={() => table.nextPage()}
    disabled={!table.getCanNextPage()}
    aria-label="Go to next page"
  >
    Next
  </Button>
</nav>
```

**Key points:**
- Wrap pagination controls in `<nav aria-label="Table pagination">`
- Use `aria-label` on Previous/Next buttons, not just icon-only buttons
- Include an `aria-live="polite"` region that announces the current page context when it changes
- Rows-per-page selector needs a visible `<label>` or `aria-label`
- After page change, move focus back to the first row or keep focus on the pagination control (do not move focus to the top of the page)

### Filtering

When filters change the visible data, screen reader users need to know that results have updated.

**Implementation pattern:**

```tsx
{/* Filter input */}
<label htmlFor="name-filter">Filter by name</label>
<Input
  id="name-filter"
  value={table.getColumn("name")?.getFilterValue() ?? ""}
  onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
  aria-describedby="filter-results"
/>

{/* Live region for result count */}
<div id="filter-results" aria-live="polite" aria-atomic="true" className="sr-only">
  {table.getFilteredRowModel().rows.length} results found
</div>
```

**Key points:**
- Filter inputs must have associated labels (`<label>`, `aria-label`, or `aria-labelledby`)
- Use `aria-live="polite"` to announce updated result counts — debounce the announcement (300–500ms) to avoid excessive chatter during typing
- If filtering yields zero results, announce "No results found" clearly
- Consider including the filter context: "3 results found for 'Jane'"

### Expandable Rows

When rows can expand to show detail content:

```tsx
<tr>
  <td>
    <button
      aria-expanded={row.getIsExpanded()}
      aria-controls={`row-detail-${row.id}`}
      aria-label={`${row.getIsExpanded() ? "Collapse" : "Expand"} details for ${row.getValue("name")}`}
      onClick={row.getToggleExpandedHandler()}
    >
      <ChevronRight className={cn("size-4", row.getIsExpanded() && "rotate-90")} aria-hidden="true" />
    </button>
  </td>
  {/* ... other cells */}
</tr>
{row.getIsExpanded() && (
  <tr id={`row-detail-${row.id}`}>
    <td colSpan={columns.length}>
      {/* detail content */}
    </td>
  </tr>
)}
```

**Key points:**
- Toggle button needs `aria-expanded` reflecting the current state
- `aria-controls` must point to the expanded content's `id`
- The label must include context (which row is being expanded)

---

## Keyboard Navigation

### Standard Table (No Grid Role)

When using `<table>` semantics (the default for shadcn/ui Table), keyboard navigation relies on standard Tab behavior plus screen reader table navigation:

| Key | Action |
|-----|--------|
| **Tab** | Move to the next interactive element (sort button, checkbox, link, action button) |
| **Shift+Tab** | Move to the previous interactive element |
| **Space** | Toggle checkbox or activate button |
| **Enter** | Activate button or link |

Screen reader users additionally get:
- **Ctrl+Alt+Arrow keys** (VoiceOver) or **Ctrl+Alt+Arrow keys** (NVDA) — cell-by-cell navigation
- Headers are automatically announced when navigating to cells in that column/row

### Grid Role Navigation (If Used)

If you upgrade to `role="grid"` for inline editing, implement these additional keyboard patterns:

| Key | Action |
|-----|--------|
| **Arrow Up/Down** | Move between rows |
| **Arrow Left/Right** | Move between cells in the same row |
| **Home** | Move to first cell in the row |
| **End** | Move to last cell in the row |
| **Ctrl+Home** | Move to first cell in the table |
| **Ctrl+End** | Move to last cell in the table |
| **Page Down** | Scroll down one page of rows |
| **Page Up** | Scroll up one page of rows |
| **Enter** | Activate cell (begin editing, follow link, etc.) |
| **Escape** | Exit cell editing mode |

**Roving tabindex:** Use `tabindex="0"` on the active cell and `tabindex="-1"` on all others so that Tab moves focus out of the grid, not through every cell.

---

## Screen Reader Patterns

### Table Announcements

| Event | Announcement Strategy |
|-------|----------------------|
| Table gains focus | Screen reader announces table name (`<caption>` or `aria-label`) and dimensions ("table, 5 columns, 10 rows") |
| Navigate to cell | Column header + cell content ("Name, Jane Doe") |
| Sort column | `aria-sort` change causes re-announcement on next header focus |
| Select row | Checkbox state change announced ("Select row Jane Doe, checked") |
| Page change | `aria-live="polite"` region: "Page 2 of 5, showing 11–20 of 47 results" |
| Filter results change | `aria-live="polite"` region: "8 results found" |
| Expand row | "Expand details for Jane Doe, expanded" |

### Live Region Announcements

Use a single shared `aria-live="polite"` region for table state changes. Update its text content — screen readers will announce the new text.

```tsx
<div aria-live="polite" aria-atomic="true" className="sr-only" role="status">
  {statusMessage}
</div>
```

Update `statusMessage` when:
- Pagination changes: "Page 2 of 5, showing 11–20 of 47 results"
- Filter changes (debounced): "8 results found"
- Bulk selection: "5 of 20 rows selected"
- Sort changes: "Sorted by Name, ascending"

---

## Bulk Actions

When rows are selected and a bulk action bar appears:

- Announce the number of selected rows via `aria-live`: "5 rows selected"
- The bulk action bar should be keyboard reachable (Tab into it)
- Each bulk action button needs a clear label: "Delete 5 selected rows", not just "Delete"
- After a bulk action executes, announce the result: "5 rows deleted" and move focus appropriately (e.g., back to the table)
- If bulk actions appear/disappear dynamically, they should not steal focus — let the user Tab to them

---

## Actions Column

When a table has a row-level actions column (e.g., a dropdown menu per row):

- **Contextual labels are mandatory:** `aria-label="Actions for John Doe"`, not just "Actions" or an unlabeled icon button
- If using a dropdown menu, follow the Dropdown Menu accessibility pattern (see `a11y/navigation.md`)
- The trigger button must identify the row: use `aria-label` that includes the row's identifying value

```tsx
<DropdownMenuTrigger asChild>
  <Button variant="ghost" size="icon" aria-label={`Actions for ${row.getValue("name")}`}>
    <MoreHorizontal className="size-4" aria-hidden="true" />
  </Button>
</DropdownMenuTrigger>
```

---

## Common Mistakes

| Mistake | Why It's a Problem | Correct Approach |
|---------|-------------------|------------------|
| Using `<div>` styled as a table | Screen readers cannot navigate cell-by-cell | Use semantic `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` |
| Sort icon with no screen reader text | Users don't know a column is sortable | Add `aria-sort` on `<th>` and `sr-only` text or `aria-label` on the sort button |
| Checkbox with label "Select" on every row | All checkboxes sound identical to screen readers | Use contextual labels: "Select row John Doe" |
| No announcement on page/filter change | Users don't know the table content updated | Use `aria-live="polite"` region to announce changes |
| Icon-only action buttons without labels | Screen reader announces just "button" | Always add `aria-label` with row context |
| `aria-sort` on non-sortable columns | Confuses screen reader users | Only apply `aria-sort` to columns that actually support sorting |
| Focus moves to page top after pagination | Users lose their place | Keep focus on pagination controls or first data row |
| Missing table caption/name | Screen reader says "table" with no context | Always provide `<caption>`, `aria-label`, or `aria-labelledby` |

---

## Testing Checklist

### Screen Reader Testing
- [ ] Table name (`<caption>` or `aria-label`) announced on focus
- [ ] Column headers announced when navigating to cells
- [ ] `aria-sort` state announced on sortable column headers
- [ ] Row selection state announced (checkbox label includes row context)
- [ ] Pagination change announced via live region
- [ ] Filter result count announced via live region
- [ ] Expandable row state (`aria-expanded`) announced

### Keyboard Testing
- [ ] All interactive elements (sort buttons, checkboxes, action menus, pagination) reachable via Tab
- [ ] Sort columns togglable via Enter/Space on header button
- [ ] Row checkboxes toggleable via Space
- [ ] Pagination controls operable via keyboard
- [ ] Expanded row content reachable via Tab
- [ ] Filter input reachable and operable

### Visual Testing
- [ ] Focus ring visible on all interactive elements inside the table
- [ ] Sort direction indicator visible
- [ ] Selected row state visible beyond color alone (e.g., background + checkbox)
- [ ] Focus visible on pagination controls

---

## References

- [WAI-ARIA Table Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/table/)
- [WAI-ARIA Grid Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) (for inline-editable tables)
- [TanStack Table Documentation](https://tanstack.com/table)

---

*Last updated: February 9, 2026*
