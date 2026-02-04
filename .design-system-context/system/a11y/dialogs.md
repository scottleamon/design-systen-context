# Dialog Components Accessibility

## Status
🔴 **NEEDS HUMAN INPUT** - This document needs verification of implementation details.

---

## What This Document Should Capture

Accessibility requirements for:
- Dialog (general purpose modal)
- AlertDialog (confirmation/alert modal)
- Sheet (side panel)
- Drawer (bottom/side drawer)
- Popover (attached overlay)

---

## General Dialog Accessibility (Established)

These are standard modal accessibility patterns:

### Focus Management
- Focus **must** move into the dialog when opened
- Focus **must** be trapped inside the dialog while open
- Focus **must** return to the trigger when closed

### Keyboard
- **Escape** closes the dialog (unless confirmation required)
- **Tab** cycles through focusable elements
- Focus trap prevents tabbing outside

### Screen Readers
- Dialog role announced on open
- Title announced (via aria-labelledby)
- Description announced (via aria-describedby)

### Close Behavior
- Close button must be keyboard accessible
- Clicking outside closes (except AlertDialog)
- Escape closes (except AlertDialog)

---

## Component-Specific Requirements

### Dialog Component

**Expected behavior (to verify):**
- Uses Radix Dialog primitive
- `role="dialog"` applied
- `aria-modal="true"` applied
- Focus moves to first focusable element or close button

**Questions to answer:**
- [ ] Where does initial focus land? (first focusable? close button? title?)
- [ ] Is there a focus-on attribute or pattern to customize initial focus?
- [ ] What's the focus return behavior? (always trigger? last focused?)

### AlertDialog Component

**Expected behavior (to verify):**
- Uses Radix AlertDialog primitive
- `role="alertdialog"` applied
- Escape does NOT close (requires explicit action)
- Click outside does NOT close

**Questions to answer:**
- [ ] Is confirm button auto-focused?
- [ ] What keyboard shortcuts exist? (Enter to confirm?)
- [ ] How is the destructive nature communicated to screen readers?

### Sheet Component

**Expected behavior (to verify):**
- Side panel behavior
- Same focus trapping as Dialog
- Animates in from side

**Questions to answer:**
- [ ] Does it use the same a11y pattern as Dialog?
- [ ] Any differences in screen reader announcement?
- [ ] Is the animation accessible (reduced motion)?

### Drawer Component

**Expected behavior (to verify):**
- Similar to Sheet but typically from bottom
- Touch gesture support on mobile

**Questions to answer:**
- [ ] How are touch gestures handled for accessibility?
- [ ] Is there keyboard equivalent for drag-to-close?
- [ ] Does it differ from Sheet in a11y behavior?

---

## Implementation Patterns (To Document)

### Focus Trap Implementation
- [ ] How is focus trap implemented? (Radix built-in?)
- [ ] Are there edge cases where focus escapes?
- [ ] How does it handle dynamic content (new focusable elements)?

### Stacked Dialogs
- [ ] How are nested dialogs handled?
- [ ] Does the system support dialog-over-dialog?
- [ ] Focus behavior when inner dialog closes?

### Live Regions
- [ ] Are there any aria-live regions inside dialogs?
- [ ] How are dynamic content changes announced?

---

## Testing Checklist (Framework)

### Screen Reader Testing
- [ ] Dialog role announced on open
- [ ] Title announced on open
- [ ] Description announced (if present)
- [ ] Focus is inside dialog
- [ ] Cannot interact with content behind dialog
- [ ] Closing returns focus and announces return

### Keyboard Testing
- [ ] Tab cycles through dialog content
- [ ] Shift+Tab cycles backwards
- [ ] Cannot Tab outside dialog
- [ ] Escape closes (except AlertDialog)
- [ ] Enter activates focused button

### Visual Testing
- [ ] Focus visible on all interactive elements
- [ ] Background content visually obscured
- [ ] Animation respects reduced motion preference

---

## Common Accessibility Mistakes (To Document)

| Mistake | Correct Approach |
|---------|-----------------|
| Focus doesn't move to dialog | [Proper implementation] |
| Focus escapes dialog | [How to prevent] |
| No focus return on close | [Proper implementation] |
| Missing dialog role | [Use Radix primitive correctly] |
| Missing title association | [Use aria-labelledby] |

---

## Tips for Gathering This Information

1. **Test with screen readers** - VoiceOver, NVDA, JAWS
2. **Check Radix documentation** - Dialog and AlertDialog primitives
3. **Keyboard testing** - Manually test Tab, Escape, Enter behavior
4. **Review existing implementations** - Check current codebase for patterns
5. **Animation testing** - Test with prefers-reduced-motion

---

## Template for Completion

Once verified, document each component:

```markdown
### [Component Name]

**Role & ARIA:**
- `role="[dialog|alertdialog]"`
- `aria-modal="true"`
- `aria-labelledby="[title-id]"`
- `aria-describedby="[description-id]"` (optional)

**Focus Behavior:**
- Initial focus: [Where focus lands]
- Focus trap: [How implemented]
- Focus return: [Behavior on close]

**Keyboard Interactions:**
| Key | Action |
|-----|--------|
| Tab | [Behavior] |
| Shift+Tab | [Behavior] |
| Escape | [Behavior] |
| Enter | [Behavior] |

**Screen Reader Announcements:**
- On open: "[Role], [Title], [Description]"
- On close: [What's announced]
```

---

*Status: Framework created, implementation verification needed*
*Last updated: February 4, 2026*
