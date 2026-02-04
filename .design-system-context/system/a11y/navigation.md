# Navigation Components Accessibility

## Status
🔴 **NEEDS HUMAN INPUT** - This document needs implementation verification.

---

## What This Document Should Capture

Accessibility requirements for:
- Tabs
- Accordion
- Navigation Menu
- Breadcrumb
- Sidebar
- Dropdown Menu

---

## Tabs Component

### Expected Behavior (Standard Pattern)

**ARIA Roles:**
- Tab list: `role="tablist"`
- Individual tab: `role="tab"`
- Tab panel: `role="tabpanel"`

**ARIA Attributes:**
- `aria-selected="true"` on active tab
- `aria-controls` pointing to panel ID
- `aria-labelledby` on panel pointing to tab ID

**Keyboard Pattern:**
| Key | Action |
|-----|--------|
| Tab | Moves focus into tablist, then to panel content |
| Arrow Left/Right | Moves between tabs |
| Home | Moves to first tab |
| End | Moves to last tab |
| Enter/Space | Activates tab (if not auto-activated) |

**Questions to verify:**
- [ ] Does our Tabs use automatic or manual activation?
- [ ] Is roving tabindex implemented?
- [ ] What's the focus behavior when tab changes?

---

## Accordion Component

### Expected Behavior (Standard Pattern)

**ARIA Attributes:**
- Trigger: `aria-expanded="true|false"`
- Trigger: `aria-controls` pointing to content ID
- Content: `role="region"` with `aria-labelledby` (optional for 6+ panels)

**Keyboard Pattern:**
| Key | Action |
|-----|--------|
| Enter/Space | Toggle expanded state |
| Tab | Move to next focusable element |
| Arrow Down | Move to next accordion header (optional) |
| Arrow Up | Move to previous accordion header (optional) |
| Home | First accordion header (optional) |
| End | Last accordion header (optional) |

**Questions to verify:**
- [ ] Does our Accordion support arrow key navigation?
- [ ] Can multiple panels be open?
- [ ] Is there a "collapse all" / "expand all" pattern?

---

## Navigation Menu Component

### Expected Behavior (Standard Pattern)

**ARIA Roles:**
- Navigation container: `<nav>` with `aria-label`
- Menu: `role="menu"` (for dropdown portions)
- Menu item: `role="menuitem"`
- Submenu trigger: `aria-haspopup="true"`, `aria-expanded`

**Keyboard Pattern:**
| Key | Action |
|-----|--------|
| Tab | Move through top-level items |
| Enter/Space | Activate item or open submenu |
| Arrow Down | Open submenu, move to first item |
| Arrow Up | Move to previous item in submenu |
| Escape | Close submenu |
| Arrow Left/Right | Between top-level items |

**Questions to verify:**
- [ ] How does our Navigation Menu handle submenus?
- [ ] Is there hover vs. click to open?
- [ ] What's the mobile pattern?

---

## Breadcrumb Component

### Expected Behavior (Standard Pattern)

**Structure:**
- Container: `<nav aria-label="Breadcrumb">`
- List: `<ol>` (ordered list for path sequence)
- Current page: `aria-current="page"`
- Separator: Hidden from screen readers or decorative

**Questions to verify:**
- [ ] Is our breadcrumb using `<nav>` with label?
- [ ] Is `aria-current="page"` on the last item?
- [ ] Are separators hidden from assistive tech?

---

## Sidebar Component

### Expected Behavior

**ARIA:**
- `<aside>` or `role="complementary"`
- `aria-label` describing the sidebar purpose
- Collapsible: `aria-expanded` on toggle

**Questions to verify:**
- [ ] How is collapsed state communicated?
- [ ] Is there keyboard shortcut to toggle?
- [ ] How does focus behave when collapsed?

---

## Dropdown Menu Component

### Expected Behavior (Standard Pattern)

**ARIA Roles:**
- Trigger: `aria-haspopup="menu"`, `aria-expanded`
- Menu: `role="menu"`
- Menu item: `role="menuitem"`
- Divider: `role="separator"`

**Keyboard Pattern:**
| Key | Action |
|-----|--------|
| Enter/Space | Open menu |
| Arrow Down | Open menu, move to first/next item |
| Arrow Up | Move to previous item |
| Escape | Close menu |
| Tab | Close menu, move to next element |
| Home | First menu item |
| End | Last menu item |
| Character | Jump to matching menu item |

**Questions to verify:**
- [ ] Does character/typeahead search work?
- [ ] What happens to focus when menu closes?
- [ ] How are disabled items announced?

---

## Common Patterns to Document

### Focus Management
- [ ] Where does focus go when menu opens?
- [ ] Where does focus go when menu closes?
- [ ] How is focus restored after navigation?

### Mobile Considerations
- [ ] Are there different patterns for mobile?
- [ ] Touch gesture accessibility?
- [ ] Reduced motion considerations?

---

## Testing Checklist (Framework)

### Screen Reader Testing
- [ ] Tabs: role, selection state announced
- [ ] Accordion: expanded state announced
- [ ] Nav Menu: menu structure announced
- [ ] Breadcrumb: current page identified
- [ ] All: keyboard operable

### Keyboard Testing
- [ ] All components keyboard navigable
- [ ] Expected keyboard patterns work
- [ ] Focus visible throughout
- [ ] Escape closes open menus/panels

---

## Tips for Gathering This Information

1. **Test with Radix documentation** - All these use Radix primitives
2. **Test with screen readers** - Verify announcements
3. **Test keyboard navigation** - Document actual behavior
4. **Check ARIA Authoring Practices** - Reference W3C patterns
5. **Test on mobile** - Document touch behavior

---

## References

- [ARIA Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [ARIA Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- [ARIA Menu Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/)
- [ARIA Breadcrumb Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)

---

*Status: Framework created, implementation verification needed*
*Last updated: February 4, 2026*
