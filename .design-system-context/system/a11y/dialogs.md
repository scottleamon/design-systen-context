# Dialog Components Accessibility

> [!CAUTION]
> **BASED ON STANDARD RADIX/SHADCN PATTERNS — VERIFY AGAINST YOUR IMPLEMENTATION**
> These accessibility patterns are derived from Radix UI primitive documentation and WAI-ARIA best practices.
> Your actual component implementations may differ. Test with a screen reader before relying on this guidance.

---

## Applies To

- **Dialog** — general-purpose modal overlay (Radix Dialog primitive)
- **AlertDialog** — confirmation/destructive-action modal (Radix AlertDialog primitive)
- **Sheet** — side panel overlay (built on Radix Dialog primitive)
- **Drawer** — bottom/side drawer (built on Vaul, wraps Radix Dialog patterns)

---

## Shared Modal Accessibility Fundamentals

All four overlay components share these core accessibility requirements:

### Focus Management

| Behavior | Requirement |
|----------|-------------|
| **Focus on open** | Focus **must** move into the overlay when it opens |
| **Focus trap** | Focus **must** be trapped inside the overlay while it's open — Tab/Shift+Tab cannot leave |
| **Focus on close** | Focus **must** return to the element that triggered the overlay |

Radix Dialog handles all three automatically. If you're wrapping Radix primitives (as shadcn/ui does), this behavior is inherited.

### ARIA Attributes (All Overlays)

| Attribute | Value | Purpose |
|-----------|-------|---------|
| `role` | `"dialog"` or `"alertdialog"` | Identifies the overlay to assistive technology |
| `aria-modal` | `"true"` | Tells screen readers that content behind the overlay is inert |
| `aria-labelledby` | ID of the title element | Screen reader announces the title when the overlay opens |
| `aria-describedby` | ID of the description element (optional) | Screen reader announces the description after the title |

### Keyboard Interactions (All Overlays)

| Key | Action |
|-----|--------|
| **Tab** | Move focus to next focusable element inside the overlay |
| **Shift+Tab** | Move focus to previous focusable element inside the overlay |
| **Escape** | Close the overlay (except AlertDialog — see below) |
| **Enter** | Activate the focused button/control |

---

## Dialog

The standard modal dialog for forms, content, and general-purpose interactions.

### Role & ARIA

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    {/* Radix renders: role="dialog" aria-modal="true" aria-labelledby aria-describedby */}
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>           {/* auto-linked via aria-labelledby */}
      <DialogDescription>                               {/* auto-linked via aria-describedby */}
        Make changes to your profile information.
      </DialogDescription>
    </DialogHeader>
    {/* ... content ... */}
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

Radix Dialog automatically applies:
- `role="dialog"` on the content element
- `aria-modal="true"`
- `aria-labelledby` pointing to `DialogTitle`
- `aria-describedby` pointing to `DialogDescription`

### Focus Behavior

| Event | Focus Target |
|-------|-------------|
| **Opens** | First focusable element inside the dialog. To customize, use Radix's `onOpenAutoFocus` to move focus to a specific element (e.g., an input field). |
| **Tab at last element** | Wraps to first focusable element (focus trap) |
| **Shift+Tab at first element** | Wraps to last focusable element (focus trap) |
| **Closes** | Returns to the `DialogTrigger` element. To customize, use `onCloseAutoFocus`. |

### Close Behavior

- **Escape** closes the dialog
- **Click on overlay backdrop** closes the dialog
- **Close button** (X) closes the dialog — this button must have `aria-label="Close"` (or visible "Close" text)

### Screen Reader Announcements

| Event | What's Announced |
|-------|-----------------|
| Open | "Edit Profile, dialog" (role + title via `aria-labelledby`) then description if `aria-describedby` present |
| Close | Focus returns to trigger — screen reader announces the trigger element |

---

## AlertDialog

A modal for confirmation and destructive actions. More restrictive than Dialog — the user **must** make an explicit choice.

### Role & ARIA

```tsx
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    {/* Radix renders: role="alertdialog" aria-modal="true" aria-labelledby aria-describedby */}
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Yes, delete account</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### Key Differences from Dialog

| Behavior | Dialog | AlertDialog |
|----------|--------|-------------|
| `role` | `"dialog"` | `"alertdialog"` |
| Escape to close | Yes | **No** — user must click Cancel or Confirm |
| Click backdrop to close | Yes | **No** — overlay click does not dismiss |
| Initial focus | First focusable element | **Cancel button** (the safe/non-destructive action) |

### Focus Behavior

| Event | Focus Target |
|-------|-------------|
| **Opens** | The `AlertDialogCancel` button (safe action) — Radix does this automatically |
| **Closes** | Returns to `AlertDialogTrigger` |

### Keyboard Interactions

| Key | Action |
|-----|--------|
| **Tab** | Cycle between Cancel and Action buttons |
| **Shift+Tab** | Reverse cycle |
| **Enter** | Activate focused button |
| **Space** | Activate focused button |
| **Escape** | **Does nothing** — this is intentional for AlertDialog |

### Screen Reader Announcements

| Event | What's Announced |
|-------|-----------------|
| Open | "Are you sure?, alertdialog" + description. The `alertdialog` role signals a more urgent context to screen readers. |
| Close | Focus returns to trigger element |

---

## Sheet

A side panel overlay — structurally identical to Dialog in accessibility. Uses Radix Dialog internally.

### Role & ARIA

Same as Dialog: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`.

```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button>Open Settings</Button>
  </SheetTrigger>
  <SheetContent side="right">
    {/* Radix renders dialog role and ARIA automatically */}
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
      <SheetDescription>Adjust your preferences.</SheetDescription>
    </SheetHeader>
    {/* ... content ... */}
  </SheetContent>
</Sheet>
```

### Focus Behavior

Identical to Dialog:
- **Opens:** Focus moves to first focusable element inside the sheet
- **Trapped:** Tab/Shift+Tab cannot leave the sheet
- **Closes:** Focus returns to `SheetTrigger`

### Close Behavior

Same as Dialog:
- **Escape** closes the sheet
- **Click on overlay backdrop** closes the sheet
- **Close button** (X) needs `aria-label="Close"`

### Animation and Reduced Motion

The sheet slides in from the side. Ensure:
- The slide animation respects `prefers-reduced-motion: reduce` — either disable animation or use a simple fade
- Animation does not delay focus movement — focus should land inside the sheet immediately, not after the transition completes

---

## Drawer

A bottom or side drawer, typically used on mobile. Built with Vaul which wraps Radix Dialog patterns.

### Role & ARIA

Same as Dialog: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`.

```tsx
<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Move Goal</DrawerTitle>
      <DrawerDescription>Set your daily activity goal.</DrawerDescription>
    </DrawerHeader>
    {/* ... content ... */}
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

### Focus Behavior

Identical to Dialog:
- **Opens:** Focus moves to first focusable element inside the drawer
- **Trapped:** Tab/Shift+Tab cannot leave
- **Closes:** Focus returns to `DrawerTrigger`

### Drag-to-Close Gesture

Vaul supports drag-to-close (swipe down on mobile). This gesture **must** have a keyboard equivalent:
- **Escape** closes the drawer (inherits from Radix Dialog)
- A visible close/cancel button must be present for users who cannot perform drag gestures
- The drag handle (if visible) should be `aria-hidden="true"` — it's a visual affordance, not an interactive element for assistive technology

### Animation and Reduced Motion

Same requirements as Sheet:
- Respect `prefers-reduced-motion: reduce`
- Don't delay focus movement behind animations

---

## Stacked/Nested Overlays

When one overlay opens another (e.g., a Dialog opens an AlertDialog):

- The inner overlay traps focus — the outer overlay is effectively inert
- When the inner overlay closes, focus returns to the element in the outer overlay that triggered it
- When the outer overlay closes, focus returns to the original page trigger
- Screen readers should announce the new dialog role/title at each layer
- **Avoid deeply nested overlays** — more than 2 layers deep creates a confusing experience

---

## Common Mistakes

| Mistake | Why It's a Problem | Correct Approach |
|---------|-------------------|------------------|
| Missing `DialogTitle` / `SheetTitle` | Screen reader announces "dialog" with no context — user doesn't know what opened | Always include a title. If you don't want it visible, use `className="sr-only"` on the title element. |
| Close button (X) without `aria-label` | Screen reader announces "button" with no context | Add `aria-label="Close"` to the close button |
| Focus not returning to trigger on close | User loses their place on the page | Use Radix primitives as-is — they handle this. Don't override `onCloseAutoFocus` without setting focus elsewhere. |
| Using Dialog when AlertDialog is needed | Users can accidentally dismiss a destructive confirmation via Escape or backdrop click | Use `AlertDialog` for any action that is destructive or irreversible |
| Visible title missing but no `sr-only` title | `aria-labelledby` points to nothing, or console warning about missing title | Radix warns when title is missing. Always provide one, even if visually hidden. |
| Content behind overlay is scrollable/interactive | Screen reader users can navigate to content "behind" the modal | Radix applies `aria-modal="true"` and makes content inert. Verify this works with your portal setup. |
| Animation delays focus movement | User presses Tab before overlay is "ready" and focus goes somewhere unexpected | Ensure focus is moved to the overlay immediately, not after CSS transition ends |
| Using `autoFocus` on a destructive action button | In AlertDialog, user could accidentally press Enter on the destructive action | AlertDialog should focus the Cancel (safe) button first |
| Overlay without description for complex content | Screen reader only announces the title — user doesn't know what to expect | Add `DialogDescription` / `AlertDialogDescription` for context |

---

## Testing Checklist

### Screen Reader Testing
- [ ] Dialog/AlertDialog role announced on open ("dialog" / "alertdialog")
- [ ] Title announced on open (via `aria-labelledby`)
- [ ] Description announced on open (via `aria-describedby`), if present
- [ ] Focus is inside the overlay — screen reader cannot read page content behind it
- [ ] Closing returns focus to trigger and trigger element is announced
- [ ] AlertDialog: Escape does NOT close it

### Keyboard Testing
- [ ] Tab cycles through focusable elements inside the overlay only
- [ ] Shift+Tab cycles backwards through overlay content only
- [ ] Cannot Tab to elements outside the overlay (focus trap working)
- [ ] Escape closes Dialog, Sheet, Drawer
- [ ] Escape does NOT close AlertDialog
- [ ] Enter activates the focused button
- [ ] After close, focus returns to the trigger element

### Visual Testing
- [ ] Focus ring visible on all interactive elements inside the overlay
- [ ] Background/backdrop visually obscures page content
- [ ] Sheet/Drawer animation respects `prefers-reduced-motion`
- [ ] Close button (X) has a visible focus indicator

---

## References

- [WAI-ARIA Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [WAI-ARIA AlertDialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/)
- [Radix Dialog Primitive](https://www.radix-ui.com/primitives/docs/components/dialog)
- [Radix AlertDialog Primitive](https://www.radix-ui.com/primitives/docs/components/alert-dialog)
- [Vaul Drawer](https://vaul.emilkowal.ski/)

---

*Last updated: February 9, 2026*
