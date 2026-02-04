# Data Table Accessibility

## Status
🔴 **NEEDS HUMAN INPUT** - This document needs implementation details and verification.

---

## What This Document Should Capture

Accessibility requirements for:
- Table (basic table component)
- DataTable (interactive data table with sorting, pagination, etc.)

---

## General Table Accessibility (Established)

### Table Structure
- Use `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`
- Headers **must** use `<th>` not `<td>`
- Use `scope="col"` on column headers
- Use `scope="row"` on row headers (when applicable)

### Caption
- Tables should have a `<caption>` or `aria-label`/`aria-labelledby`
- Caption describes the table's purpose

### Data Cells
- Empty cells should have a placeholder or be marked appropriately
- Complex content in cells should be accessible

---

## DataTable-Specific Requirements (To Document)

### Sortable Columns
- [ ] How is sort state communicated? (`aria-sort`)
- [ ] What's the keyboard pattern for sorting?
- [ ] What's announced when sort changes?

**Expected ARIA:**
- `aria-sort="ascending"` or `aria-sort="descending"` on `<th>`
- Sort indicator should have accessible text

### Row Selection
- [ ] How is selection communicated?
- [ ] Checkbox accessibility in table context?
- [ ] What's announced when row is selected?

**Expected ARIA:**
- `aria-selected` on selected rows
- Checkboxes should have accessible labels (often "Select row [identifier]")

### Pagination
- [ ] How is pagination connected to table?
- [ ] What's announced when page changes?
- [ ] Is there a "results per page" accessibility pattern?

### Filtering
- [ ] How is filter state communicated to screen readers?
- [ ] What's announced when results change?
- [ ] Is there a results count announcement?

### Expandable Rows
- [ ] How is expand/collapse communicated?
- [ ] What's the keyboard pattern?
- [ ] Is there `aria-expanded`?

---

## Keyboard Navigation (To Verify)

### Basic Table Navigation
Standard table navigation varies by screen reader:

| Action | Behavior |
|--------|----------|
| Tab | Moves to next interactive element in table |
| Arrow keys | Screen reader table navigation mode |

### Interactive Table Navigation
For DataTable with interactive elements:

- [ ] How does Tab move through interactive elements?
- [ ] Is there roving tabindex for efficiency?
- [ ] Can users sort via keyboard?
- [ ] Can users select rows via keyboard?

---

## Screen Reader Patterns (To Document)

### Table Announcements
- [ ] What's announced on table focus?
- [ ] How are column headers announced?
- [ ] How is sort state announced?
- [ ] How is selection state announced?

### Live Region Updates
- [ ] Is there a live region for row count?
- [ ] What's announced when filters change?
- [ ] What's announced when page changes?

---

## Common DataTable Patterns (To Document)

### Bulk Actions
- [ ] How is bulk action bar announced?
- [ ] What happens to focus when selecting multiple rows?
- [ ] How is selected count announced?

### Inline Editing
- [ ] How does edit mode work for accessibility?
- [ ] How is edit state announced?
- [ ] What's the keyboard pattern for saving/canceling?

### Actions Column
- [ ] Are action buttons labeled contextually?
- [ ] How is the row identifier included in action labels?

---

## Testing Checklist (Framework)

### Screen Reader Testing
- [ ] Table role and caption announced
- [ ] Can navigate between cells
- [ ] Headers associated with data cells
- [ ] Sort state announced on sortable columns
- [ ] Selection state announced on selectable rows
- [ ] Pagination changes announced

### Keyboard Testing
- [ ] All interactive elements reachable
- [ ] Sort columns via keyboard
- [ ] Select rows via keyboard
- [ ] Pagination controls keyboard accessible
- [ ] Filter controls keyboard accessible

### Visual Testing
- [ ] Focus visible on all interactive elements
- [ ] Sort indicators visible
- [ ] Selection state visible beyond color

---

## Tips for Gathering This Information

1. **Test with screen readers** - Tables have complex screen reader navigation
2. **Check TanStack Table docs** - If using react-table, check their a11y guidance
3. **Review ARIA grid pattern** - Complex tables may need grid role
4. **Check current implementation** - Document actual behavior
5. **Test different screen readers** - VoiceOver and NVDA behave differently with tables

---

## Important Considerations

### When to Use `role="grid"` vs `<table>`

Simple data display: Use `<table>`
- Static content
- No inline editing
- Simple selection

Complex interactive table: Consider `role="grid"`
- Inline editing
- Complex keyboard navigation
- Cell-by-cell interaction

**Question for team:**
- [ ] Does DataTable use `<table>` or `role="grid"`?
- [ ] What's the reasoning for the choice?

---

## Template for Completion

Once implementation is verified:

```markdown
### DataTable Component

**Structure:**
- Uses [table | grid] role
- Headers use `<th scope="col">`
- [Other structural details]

**Sorting:**
- `aria-sort` on sortable headers
- Keyboard: [How to sort]
- Announcement: "[What's announced]"

**Selection:**
- `aria-selected` on rows
- Checkbox pattern: [Details]
- Announcement: "[What's announced]"

**Pagination:**
- Connected via: [aria-controls? live region?]
- Announcement: "[What's announced on page change]"

**Keyboard Navigation:**
| Key | Action |
|-----|--------|
| Tab | [Behavior] |
| Space | [Behavior] |
| Enter | [Behavior] |
```

---

*Status: Framework created, implementation details needed*
*Last updated: February 4, 2026*
