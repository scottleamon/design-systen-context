# Form Components Accessibility

> [!CAUTION]
> **BASED ON STANDARD RADIX/SHADCN PATTERNS — VERIFY AGAINST YOUR IMPLEMENTATION**
> These accessibility patterns are derived from Radix UI primitive documentation and WAI-ARIA best practices.
> Your actual component implementations may differ. Test with a screen reader before relying on this guidance.

---

## Applies To

- **Form** — wrapper component (react-hook-form + Radix Form)
- **Input** — text input fields
- **Textarea** — multi-line text input
- **Select** — dropdown selection (Radix Select primitive)
- **Checkbox** — toggle check (Radix Checkbox primitive)
- **Radio Group** — exclusive option selection (Radix RadioGroup primitive)
- **Switch** — toggle on/off (Radix Switch primitive)
- **Combobox** — autocomplete/search select (Radix Popover + Command)
- **Date Picker** — calendar-based date selection

---

## General Form Accessibility

### Label Association

Every form control **must** have a programmatically associated label. There are no exceptions.

| Method | When to Use | Example |
|--------|-------------|---------|
| `<Label htmlFor="id">` | Standard — visible label above/beside field | `<Label htmlFor="email">Email</Label><Input id="email" />` |
| `aria-label` | Visually hidden label (e.g., search input with icon) | `<Input aria-label="Search" />` |
| `aria-labelledby` | Label text exists elsewhere on page | `<Input aria-labelledby="section-heading" />` |

**Never** use `placeholder` as the sole label — it disappears when the user starts typing.

### Error Messages and Descriptions

Link hints and error messages to their fields via `aria-describedby`:

```tsx
<div>
  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    aria-describedby="email-hint email-error"
    aria-invalid={!!errors.email}
  />
  <p id="email-hint" className="text-sm text-muted-foreground">
    We'll never share your email.
  </p>
  {errors.email && (
    <p id="email-error" role="alert" className="text-sm text-destructive">
      {errors.email.message}
    </p>
  )}
</div>
```

**Key points:**
- `aria-describedby` can reference multiple IDs (space-separated) — the hint and error are both announced
- `aria-invalid="true"` tells screen readers the field has an error
- Use `role="alert"` on dynamically appearing error messages so they're announced immediately
- The error message element should only be in the DOM when there's an error (or use `aria-live="assertive"` on a container)

### Required Fields

```tsx
<Label htmlFor="name">
  Name <span aria-hidden="true">*</span>
</Label>
<Input id="name" required aria-required="true" />
```

- Use the native `required` attribute AND/OR `aria-required="true"`
- If using a visual asterisk (*), hide it from screen readers with `aria-hidden="true"` — the `required`/`aria-required` attribute already communicates this information
- Alternatively, include text "(required)" as `sr-only` in the label

---

## Component-Specific Patterns

### Input

Based on standard HTML `<input>` — no Radix primitive.

**ARIA attributes:**

| Attribute | When | Purpose |
|-----------|------|---------|
| `aria-invalid="true"` | Field has a validation error | Screen reader announces "invalid" |
| `aria-describedby="hint-id error-id"` | Field has hints or errors | Associates descriptions with the field |
| `aria-required="true"` | Field is required | Screen reader announces "required" |
| `aria-disabled="true"` | Field is disabled (if not using native `disabled`) | Screen reader announces "dimmed" or "disabled" |

**Keyboard:**

| Key | Action |
|-----|--------|
| **Tab** | Focus the input |
| **Shift+Tab** | Move focus to previous element |
| Any character | Types into the field |

**Screen reader announcement on focus:**
> "Email, required, edit text, We'll never share your email" (label + required + role + description)

If invalid:
> "Email, required, invalid, edit text, Please enter a valid email" (adds invalid state + error message)

### Textarea

Identical to Input for accessibility. Same ARIA attributes and keyboard patterns apply.

Additionally:
- If there's a character count, announce it: `aria-describedby` pointing to the counter
- Auto-expanding textareas should not interfere with screen reader operation

### Select (Radix)

Built on Radix Select primitive — a custom dropdown that replaces native `<select>`.

**ARIA attributes (handled by Radix):**

| Attribute | Applied To | Value |
|-----------|-----------|-------|
| `role="combobox"` | Trigger | Identifies it as a combo box |
| `aria-expanded` | Trigger | `"true"` when open, `"false"` when closed |
| `aria-haspopup="listbox"` | Trigger | Tells AT a listbox will appear |
| `role="listbox"` | Content dropdown | Container for options |
| `role="option"` | Each item | Individual selectable option |
| `aria-selected="true"` | Selected option | Currently selected value |

**Keyboard interactions:**

| Key | Action |
|-----|--------|
| **Space / Enter** | Open the select dropdown |
| **Arrow Down** | Open dropdown; move to next option |
| **Arrow Up** | Move to previous option |
| **Home** | Move to first option |
| **End** | Move to last option |
| **Typeahead** (type characters) | Jump to matching option (e.g., typing "Ca" jumps to "California") |
| **Enter / Space** | Select the focused option and close |
| **Escape** | Close without selecting |

**Grouped options:**
- Radix `SelectGroup` renders `role="group"` with `aria-labelledby` pointing to the `SelectLabel`
- Screen readers announce group label before options in that group

**Screen reader announcement on focus:**
> "Country, combo box, collapsed, United States" (label + role + state + current value)

On open:
> "listbox, 5 items" + focused option announced

### Checkbox (Radix)

Built on Radix Checkbox primitive.

**ARIA attributes (handled by Radix):**

| Attribute | Value | When |
|-----------|-------|------|
| `role="checkbox"` | Always | Implicit from Radix |
| `aria-checked="true"` | Checked | Box is checked |
| `aria-checked="false"` | Unchecked | Box is not checked |
| `aria-checked="mixed"` | Indeterminate | When `checked="indeterminate"` is passed |

**Keyboard interactions:**

| Key | Action |
|-----|--------|
| **Space** | Toggle checked/unchecked (or cycle through indeterminate) |
| **Tab** | Move focus to next element |

**Do NOT use Enter to toggle** — this is the standard behavior per WAI-ARIA. Radix enforces this.

**Implementation pattern:**

```tsx
<div className="flex items-center gap-2">
  <Checkbox
    id="terms"
    checked={checked}
    onCheckedChange={setChecked}
    aria-describedby="terms-desc"
  />
  <Label htmlFor="terms">Accept terms and conditions</Label>
  <p id="terms-desc" className="sr-only">
    You must accept the terms to continue.
  </p>
</div>
```

**Indeterminate state** (e.g., "select all" when some items are selected):
- Pass `checked="indeterminate"` to Radix Checkbox
- Screen reader announces: "Accept all, checkbox, mixed"

**Screen reader announcement:**
> "Accept terms and conditions, checkbox, not checked" → (press Space) → "checked"

### Radio Group (Radix)

Built on Radix RadioGroup primitive.

**ARIA attributes (handled by Radix):**

| Attribute | Applied To | Value |
|-----------|-----------|-------|
| `role="radiogroup"` | Container | Groups the radio buttons |
| `role="radio"` | Each item | Individual option |
| `aria-checked="true"` | Selected item | Currently selected |
| `aria-checked="false"` | Other items | Not selected |

**Keyboard interactions:**

| Key | Action |
|-----|--------|
| **Tab** | Move focus **into** the radio group (lands on the selected item, or first item if none selected) |
| **Arrow Down / Arrow Right** | Move to next radio and select it |
| **Arrow Up / Arrow Left** | Move to previous radio and select it |
| **Tab** (again) | Move focus **out of** the radio group |

**Important:** Arrow keys both move focus AND select the option — this is the standard radio group behavior per WAI-ARIA. Individual radios are NOT separately tab-focusable.

**Implementation pattern:**

```tsx
<RadioGroup value={value} onValueChange={setValue} aria-label="Notification preference">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="all" id="all" />
    <Label htmlFor="all">All notifications</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="mentions" id="mentions" />
    <Label htmlFor="mentions">Mentions only</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="none" id="none" />
    <Label htmlFor="none">None</Label>
  </div>
</RadioGroup>
```

**Screen reader announcement:**
> "Notification preference, radio group" → "All notifications, radio, 1 of 3, selected"

### Switch (Radix)

Built on Radix Switch primitive. Visually a toggle, semantically a switch.

**ARIA attributes (handled by Radix):**

| Attribute | Value |
|-----------|-------|
| `role="switch"` | Distinguishes from checkbox — "on/off" rather than "checked/unchecked" |
| `aria-checked="true"` | Switch is on |
| `aria-checked="false"` | Switch is off |

**Keyboard interactions:**

| Key | Action |
|-----|--------|
| **Space** | Toggle on/off |
| **Tab** | Move focus to next element |

**Implementation pattern:**

```tsx
<div className="flex items-center gap-2">
  <Switch
    id="airplane"
    checked={enabled}
    onCheckedChange={setEnabled}
  />
  <Label htmlFor="airplane">Airplane mode</Label>
</div>
```

**Screen reader announcement:**
> "Airplane mode, switch, off" → (press Space) → "on"

**Note:** `role="switch"` is distinct from `role="checkbox"`. Use Switch when the control represents an immediate on/off state (like a light switch). Use Checkbox when the value is submitted as part of a form.

### Combobox (Autocomplete)

Typically built with Radix Popover + Command (cmdk) — not a single Radix primitive.

**ARIA attributes:**

| Attribute | Applied To | Value |
|-----------|-----------|-------|
| `role="combobox"` | Input field | Identifies as combobox |
| `aria-expanded` | Input field | `"true"` when listbox is open |
| `aria-controls` | Input field | ID of the listbox popup |
| `aria-activedescendant` | Input field | ID of the currently highlighted option |
| `role="listbox"` | Options container | List of options |
| `role="option"` | Each option | Individual selectable option |
| `aria-selected="true"` | Highlighted option | Currently active option |

**Keyboard interactions:**

| Key | Action |
|-----|--------|
| **Type characters** | Filter options, open listbox if closed |
| **Arrow Down** | Open listbox; move highlight to next option |
| **Arrow Up** | Move highlight to previous option |
| **Enter** | Select the highlighted option |
| **Escape** | Close listbox without selecting |
| **Home / End** | Move to first / last option |

**Implementation pattern:**

```tsx
<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      role="combobox"
      aria-expanded={open}
      aria-label="Select framework"
    >
      {selectedValue || "Select framework..."}
      <ChevronsUpDown className="size-4" aria-hidden="true" />
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <Command>
      <CommandInput placeholder="Search framework..." aria-label="Search frameworks" />
      <CommandEmpty>No framework found.</CommandEmpty>
      <CommandGroup>
        <CommandItem onSelect={handleSelect}>React</CommandItem>
        <CommandItem onSelect={handleSelect}>Vue</CommandItem>
      </CommandGroup>
    </Command>
  </PopoverContent>
</Popover>
```

**Key points:**
- The "No results found" state (`CommandEmpty`) must be announced — `aria-live="polite"` on the container or use the cmdk built-in announcements
- Consider announcing the result count: "5 options available" when the listbox opens or filters change
- `aria-activedescendant` on the input tracks which option is highlighted — this allows the input to keep DOM focus while the listbox item is virtually focused

**Screen reader announcement:**
> "Select framework, combo box, expanded" → "React, option, 1 of 5"

### Date Picker

Typically built with a text input + Radix Popover containing a calendar grid. This is one of the most complex form widgets for accessibility.

**ARIA for the calendar grid:**

| Attribute | Applied To | Value |
|-----------|-----------|-------|
| `role="grid"` | Calendar month grid | Identifies as navigable grid |
| `role="row"` | Each week row | |
| `role="gridcell"` | Each day cell | |
| `aria-selected="true"` | Selected date | Currently chosen date |
| `aria-disabled="true"` | Disabled dates | Dates that cannot be selected |
| `aria-label` | Each day cell | Full date: "January 15, 2026" (not just "15") |

**Keyboard interactions:**

| Key | Action |
|-----|--------|
| **Arrow Left/Right** | Move to previous/next day |
| **Arrow Up/Down** | Move to same day in previous/next week |
| **Home** | Move to first day of the week |
| **End** | Move to last day of the week |
| **Page Up** | Move to same day in previous month |
| **Page Down** | Move to same day in next month |
| **Shift+Page Up** | Move to same day in previous year |
| **Shift+Page Down** | Move to same day in next year |
| **Enter / Space** | Select the focused date |
| **Escape** | Close the calendar popup, return focus to input |

**Key points:**
- Each date cell must have a full accessible label ("January 15, 2026"), not just the day number
- The month/year navigation buttons need `aria-label` (e.g., "Go to previous month", "Go to next month")
- Disabled dates should have `aria-disabled="true"` — explain *why* if possible (e.g., "January 10, 2026, not available")
- When the calendar opens, focus should move to the currently selected date (or today if no selection)
- When a date is selected, announce it: "January 15, 2026, selected" and close the popup

---

## Form Validation Patterns

### Inline Validation (On Blur)

```tsx
<FormField
  control={form.control}
  name="email"
  render={({ field, fieldState }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input
          {...field}
          aria-invalid={!!fieldState.error}
          aria-describedby={fieldState.error ? "email-error" : "email-hint"}
        />
      </FormControl>
      <FormDescription id="email-hint">Enter your work email.</FormDescription>
      {fieldState.error && (
        <FormMessage id="email-error" role="alert">
          {fieldState.error.message}
        </FormMessage>
      )}
    </FormItem>
  )}
/>
```

**Key points:**
- Set `aria-invalid="true"` when the field has an error
- Error message appears with `role="alert"` so it's immediately announced
- When the error is corrected, remove `aria-invalid` and the error message — the screen reader won't announce the removal (which is the correct behavior)

### Submit Validation (Error Summary)

When a form is submitted with errors:

1. **Move focus to the first field with an error** (or to an error summary at the top of the form)
2. If using an error summary:
   ```tsx
   <div role="alert" aria-label="Form errors">
     <h2>Please correct the following errors:</h2>
     <ul>
       <li><a href="#email">Email is required</a></li>
       <li><a href="#password">Password must be at least 8 characters</a></li>
     </ul>
   </div>
   ```
3. Each error in the summary should link to the corresponding field (via anchor to the field's `id`)
4. Screen reader will announce: "Form errors, alert, Please correct the following errors: ..."

### Live Region for Validation State

For real-time validation feedback (e.g., password strength):

```tsx
<div aria-live="polite" aria-atomic="true" className="sr-only">
  {passwordStrength} {/* e.g., "Password strength: strong" */}
</div>
```

Debounce updates (300–500ms) to avoid excessive announcements while typing.

---

## Common Mistakes

| Mistake | Why It's a Problem | Correct Approach |
|---------|-------------------|------------------|
| Placeholder as only label | Disappears on input; many screen readers don't announce it | Always use `<Label>` or `aria-label` |
| Error message not linked to field | Screen reader user doesn't know which field has the error | Use `aria-describedby` pointing to the error message ID |
| Missing `aria-invalid` on error fields | Screen reader doesn't announce the error state | Set `aria-invalid="true"` when field has validation error |
| Custom Select without keyboard support | Keyboard users can't operate it | Use Radix Select which handles all keyboard patterns |
| Radio buttons individually tab-focusable | Violates WAI-ARIA pattern; confusing keyboard behavior | Use Radix RadioGroup — Tab enters group, arrows navigate |
| Switch using `role="checkbox"` | Incorrect semantics — switch is on/off, not checked/unchecked | Use Radix Switch which applies `role="switch"` |
| Asterisk (*) with no alternative for required | Screen reader users may not hear the visual asterisk | Use `aria-required="true"` or `required` attribute |
| Error appears but not announced | Screen reader user doesn't know an error occurred | Use `role="alert"` or `aria-live="assertive"` on error messages |
| Combobox options not labelled | Screen reader says "option" with no text | Ensure each option has text content or `aria-label` |
| Date picker calendar without full date labels | Screen reader says "15" instead of "January 15, 2026" | Use `aria-label` with full date on each day cell |

---

## Testing Checklist

### Screen Reader Testing
- [ ] All labels announced correctly on focus
- [ ] Required state announced ("required")
- [ ] Error messages announced when they appear (`role="alert"`)
- [ ] `aria-invalid` state announced on errored fields
- [ ] Hint/description text announced via `aria-describedby`
- [ ] Select: options and groups announced, selected value announced
- [ ] Checkbox: checked/unchecked/mixed state announced
- [ ] Radio: group label, selected option, "X of Y" position announced
- [ ] Switch: "on"/"off" state announced
- [ ] Combobox: filtered options and selection announced
- [ ] Date picker: full date labels and navigation announced

### Keyboard Testing
- [ ] All form fields reachable via Tab
- [ ] Select: Space/Enter opens, arrows navigate, Escape closes, typeahead works
- [ ] Checkbox: Space toggles
- [ ] Radio Group: Tab enters, arrows navigate AND select, Tab exits
- [ ] Switch: Space toggles
- [ ] Combobox: type to filter, arrows to navigate, Enter to select, Escape to close
- [ ] Date Picker: arrows navigate days, Page Up/Down for months, Enter selects
- [ ] Form: Enter submits from text inputs (when appropriate)
- [ ] Focus visible on all fields and controls

### Visual Testing
- [ ] Error states visible beyond color alone (icon, border, text)
- [ ] Focus ring visible on all form controls
- [ ] Required indicator visible
- [ ] Disabled state visually distinct

---

## References

- [WAI-ARIA Forms Pattern](https://www.w3.org/WAI/tutorials/forms/)
- [WAI-ARIA Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [WAI-ARIA Checkbox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)
- [WAI-ARIA Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
- [WAI-ARIA Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
- [Radix Select Primitive](https://www.radix-ui.com/primitives/docs/components/select)
- [Radix Checkbox Primitive](https://www.radix-ui.com/primitives/docs/components/checkbox)
- [Radix RadioGroup Primitive](https://www.radix-ui.com/primitives/docs/components/radio-group)
- [Radix Switch Primitive](https://www.radix-ui.com/primitives/docs/components/switch)

---

*Last updated: February 9, 2026*
