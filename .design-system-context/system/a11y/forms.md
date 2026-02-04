# Form Components Accessibility

## Status
🔴 **NEEDS HUMAN INPUT** - This document needs specific implementation details from the team.

---

## What This Document Should Capture

Accessibility requirements for:
- Form (wrapper component)
- Input
- Textarea
- Select
- Checkbox
- Radio Group
- Combobox
- Date Picker

---

## General Form Accessibility (Established)

These requirements are known from general a11y rules:

### Labels
- Every input **must** have an associated label
- Use `<Label htmlFor="id">` or `aria-labelledby`
- Never use placeholder as the only label

### Error Messages
- Errors **must** be programmatically associated (`aria-describedby`)
- Errors **must** be announced to screen readers
- Error state **must** be indicated beyond color alone

### Required Fields
- Use `required` or `aria-required="true"`
- Visual indicator (typically asterisk) with screen reader context

### Keyboard
- All form fields reachable via Tab
- Enter submits form (when appropriate)
- Escape clears/closes autocomplete menus

---

## 🔴 Component-Specific Details Needed

### Input Component
- [ ] What ARIA attributes are used for validation states?
- [ ] How is error message connected (aria-describedby pattern)?
- [ ] Is there a character count announcement pattern?
- [ ] How are input hints announced?

### Select Component
- [ ] How does the Radix Select handle screen readers?
- [ ] What's announced when opening/selecting?
- [ ] How are grouped options handled?
- [ ] Is there typeahead behavior?

### Checkbox Component
- [ ] Is indeterminate state used? How is it announced?
- [ ] How are checkbox groups handled?
- [ ] What's the announcement pattern for toggle?

### Radio Group Component
- [ ] How is the group role communicated?
- [ ] Arrow key navigation behavior?
- [ ] How is the selected state announced?

### Combobox Component
- [ ] How does autocomplete work with screen readers?
- [ ] What's announced when options filter?
- [ ] How is the no-results state handled?
- [ ] Is there a results count announcement?

### Date Picker Component
- [ ] How does the calendar grid work with screen readers?
- [ ] What keyboard patterns are supported?
- [ ] How are disabled dates announced?
- [ ] Is there month/year navigation?

---

## Form Validation Patterns (To Document)

### Inline Validation
- [ ] When are errors announced? (on blur? on submit?)
- [ ] How is the error associated with the field?
- [ ] What happens when error is corrected?

### Submit Validation
- [ ] Where does focus go after failed submission?
- [ ] How are multiple errors announced?
- [ ] Is there an error summary pattern?

---

## Testing Checklist (Framework)

This checklist should be customized based on implementation:

### Screen Reader Testing
- [ ] All labels announced correctly
- [ ] Errors announced when they occur
- [ ] Required fields identified
- [ ] Instructions announced before field
- [ ] Validation state changes announced

### Keyboard Testing
- [ ] All fields reachable via Tab
- [ ] Select opens with Enter/Space/ArrowDown
- [ ] Combobox supports expected keyboard patterns
- [ ] Form submits with Enter (when appropriate)
- [ ] Focus visible on all fields

### Visual Testing
- [ ] Error states visible beyond color
- [ ] Focus indicators visible
- [ ] Required fields marked visually

---

## Tips for Gathering This Information

1. **Test with VoiceOver/NVDA** - Manually test the current implementation
2. **Check Radix documentation** - Radix primitives have a11y documentation
3. **Review react-hook-form integration** - How errors are connected
4. **Check Zod validation** - How validation messages are surfaced
5. **Developer testing** - Document actual behavior during development

---

## Template for Completion

Once implementation details are known, document each component:

```markdown
### [Component Name]

**ARIA Attributes Used:**
- `aria-invalid` - [When/how applied]
- `aria-describedby` - [Error message connection]
- `aria-required` - [Required field indicator]

**Keyboard Interactions:**
| Key | Action |
|-----|--------|
| Tab | [Behavior] |
| Enter | [Behavior] |
| Space | [Behavior] |
| Escape | [Behavior] |

**Screen Reader Announcements:**
- On focus: [What's announced]
- On error: [What's announced]
- On change: [What's announced]

**Focus Management:**
- [How focus behaves in various states]
```

---

*Status: Framework created, implementation details needed*
*Last updated: February 4, 2026*
