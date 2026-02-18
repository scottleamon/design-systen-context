# Navigation Components Accessibility

> [!CAUTION]
> **BASED ON STANDARD RADIX/SHADCN PATTERNS — VERIFY AGAINST YOUR IMPLEMENTATION**
> These accessibility patterns are derived from Radix UI primitive documentation and WAI-ARIA best practices.
> Your actual component implementations may differ. Test with a screen reader before relying on this guidance.

---

## Applies To

- **Tabs** — tabbed interface (Radix Tabs primitive)
- **Accordion** — collapsible content sections (Radix Accordion primitive)
- **Navigation Menu** — top-level site navigation (Radix NavigationMenu primitive)
- **Breadcrumb** — hierarchical path indicator
- **Sidebar** — collapsible sidebar navigation
- **Dropdown Menu** — action menu (Radix DropdownMenu primitive)

---

## Tabs

Built on Radix Tabs primitive.

### ARIA Roles and Attributes

Radix Tabs automatically applies the correct ARIA roles:

| Element | Role/Attribute | Purpose |
|---------|---------------|---------|
| `TabsList` | `role="tablist"` | Container for tab triggers |
| `TabsTrigger` | `role="tab"` | Individual tab button |
| `TabsTrigger` (active) | `aria-selected="true"` | Currently active tab |
| `TabsTrigger` | `aria-controls="panel-id"` | Links tab to its panel |
| `TabsContent` | `role="tabpanel"` | Content area for the active tab |
| `TabsContent` | `aria-labelledby="tab-id"` | Links panel back to its tab |

### Keyboard Interactions

| Key | Action |
|-----|--------|
| **Tab** | Move focus into the tablist (lands on the active tab). Next Tab moves to the panel content. |
| **Arrow Left / Arrow Right** | Move between tabs (horizontal tablist) |
| **Arrow Up / Arrow Down** | Move between tabs (vertical tablist, e.g., `orientation="vertical"`) |
| **Home** | Move to the first tab |
| **End** | Move to the last tab |
| **Space / Enter** | Activate the focused tab (only needed if using manual activation) |

### Activation Mode

Radix Tabs supports two modes:

| Mode | Behavior | Prop |
|------|----------|------|
| **Automatic** (default) | Arrow keys move focus AND activate the tab immediately | `activationMode="automatic"` |
| **Manual** | Arrow keys move focus only; Space/Enter required to activate | `activationMode="manual"` |

**Recommendation:** Use automatic activation for most cases — it's faster and matches user expectations. Use manual activation only if tab content is expensive to load.

### Implementation Pattern

```tsx
<Tabs defaultValue="account">
  <TabsList aria-label="Account settings">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    {/* Account content */}
  </TabsContent>
  <TabsContent value="password">
    {/* Password content */}
  </TabsContent>
  <TabsContent value="notifications">
    {/* Notifications content */}
  </TabsContent>
</Tabs>
```

**Key points:**
- Add `aria-label` to `TabsList` to describe the tab group (e.g., "Account settings")
- Radix handles roving tabindex: only the active tab has `tabindex="0"`, others have `tabindex="-1"`
- Tab panels are automatically hidden when not active (`display: none` or equivalent)

### Screen Reader Announcement

| Event | Announcement |
|-------|-------------|
| Focus enters tablist | "Account settings, tablist, 3 tabs" |
| Tab focused | "Account, tab, 1 of 3, selected" |
| Arrow to next tab | "Password, tab, 2 of 3" (+ "selected" in automatic mode) |
| Tab into panel | Panel content is read |

### Common Mistakes

| Mistake | Correct Approach |
|---------|-----------------|
| Using buttons/links styled as tabs without `role="tablist"`/`role="tab"` | Use Radix Tabs which provides correct ARIA roles |
| Missing `aria-label` on `TabsList` | Add descriptive label: `aria-label="Account settings"` |
| Tab panels always rendered in DOM (just hidden) without `aria-hidden` | Radix handles this — inactive panels are properly hidden |
| Disabled tabs removed from the tab order entirely | Disabled tabs should still be focusable but not activatable — Radix handles this |

---

## Accordion

Built on Radix Accordion primitive.

### ARIA Roles and Attributes

| Element | Role/Attribute | Purpose |
|---------|---------------|---------|
| `AccordionTrigger` | `<button>` inside a heading element | Trigger to expand/collapse |
| `AccordionTrigger` | `aria-expanded="true/false"` | Current state of the section |
| `AccordionTrigger` | `aria-controls="content-id"` | Links trigger to its content |
| `AccordionContent` | `role="region"` | Content area (when expanded) |
| `AccordionContent` | `aria-labelledby="trigger-id"` | Links content back to its trigger |

Radix wraps each trigger in a heading element. The heading level is configurable — set it to match your page hierarchy:

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    {/* Radix renders: <h3><button aria-expanded="false" aria-controls="...">...</button></h3> */}
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Keyboard Interactions

| Key | Action |
|-----|--------|
| **Tab** | Move focus to the next accordion trigger (or out of the accordion) |
| **Enter / Space** | Toggle the focused section open/closed |
| **Arrow Down** | Move focus to the next accordion trigger |
| **Arrow Up** | Move focus to the previous accordion trigger |
| **Home** | Move focus to the first accordion trigger |
| **End** | Move focus to the last accordion trigger |

### Accordion Types

| Type | Behavior |
|------|----------|
| `type="single"` | Only one section open at a time; opening one closes the other |
| `type="single" collapsible` | One section at a time, but it can also be fully collapsed |
| `type="multiple"` | Multiple sections can be open simultaneously |

### Screen Reader Announcement

| Event | Announcement |
|-------|-------------|
| Focus on trigger | "Is it accessible?, collapsed, button" (or "expanded") |
| Toggle open | "expanded" |
| Toggle closed | "collapsed" |
| Navigate into content | Content is read (region labeled by the trigger) |

### Common Mistakes

| Mistake | Correct Approach |
|---------|-----------------|
| Accordion trigger is not a `<button>` | Use Radix AccordionTrigger which renders a button inside a heading |
| Wrong heading level — all `<h3>` regardless of context | Set the heading level to match your page hierarchy |
| `role="region"` on content when there are 6+ sections | WAI-ARIA recommends omitting `role="region"` for accordions with 6+ sections to avoid landmark clutter — verify Radix behavior |
| Expand/collapse icon not `aria-hidden` | Visual chevron/plus-minus icons should be `aria-hidden="true"` since `aria-expanded` provides the state |

---

## Navigation Menu

Built on Radix NavigationMenu primitive. Designed for site-level navigation with optional dropdown submenus.

### ARIA Roles and Attributes

| Element | Role/Attribute | Purpose |
|---------|---------------|---------|
| `NavigationMenu` | `<nav>` | Landmark region for navigation |
| `NavigationMenuList` | `<ul>` | List of navigation items |
| `NavigationMenuTrigger` | `aria-expanded="true/false"` | Indicates if submenu is open |
| `NavigationMenuTrigger` | `aria-haspopup="true"` | Indicates a submenu will appear |
| `NavigationMenuContent` | Dropdown content | Submenu content area |
| Active link | `aria-current="page"` | Identifies the current page |

### Keyboard Interactions

| Key | Action |
|-----|--------|
| **Tab** | Move between top-level navigation items |
| **Enter / Space** | Open submenu or follow link |
| **Arrow Down** | Open submenu, move focus to first item |
| **Arrow Up** | Move focus to previous submenu item |
| **Arrow Left / Arrow Right** | Move between top-level items |
| **Escape** | Close the submenu, return focus to trigger |

### Implementation Pattern

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/products/widgets">Widgets</NavigationMenuLink>
        <NavigationMenuLink href="/products/tools">Tools</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/about" aria-current={isCurrentPage ? "page" : undefined}>
        About
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

**Key points:**
- Use `aria-current="page"` on the link that matches the current page
- The `<nav>` element should have an `aria-label` if there are multiple navigation landmarks: `<NavigationMenu aria-label="Main navigation">`
- Submenu triggers need to convey that they open a submenu (Radix adds `aria-haspopup` and `aria-expanded`)

### Common Mistakes

| Mistake | Correct Approach |
|---------|-----------------|
| No `aria-current="page"` on active link | Add `aria-current="page"` to identify the user's current location |
| Multiple `<nav>` elements without labels | Add `aria-label` to distinguish: "Main navigation", "Footer navigation" |
| Submenu opens on hover only | Hover-to-open must also work with keyboard focus — Radix handles this |
| Links open in new tab without warning | If a link opens externally, indicate it: "Opens in new tab" via `aria-label` or visible text |

---

## Breadcrumb

Not a Radix primitive — built with semantic HTML.

### ARIA Roles and Attributes

| Element | Role/Attribute | Purpose |
|---------|---------------|---------|
| Container | `<nav aria-label="Breadcrumb">` | Landmark for breadcrumb navigation |
| List | `<ol>` | Ordered list — breadcrumbs represent a hierarchy |
| Link items | `<a href="...">` | Navigable breadcrumb segments |
| Current page | `aria-current="page"` | Identifies the last item as the current page |
| Separators | `aria-hidden="true"` | Visual separators hidden from screen readers |

### Implementation Pattern

```tsx
<nav aria-label="Breadcrumb">
  <ol className="flex items-center gap-2">
    <li>
      <a href="/">Home</a>
    </li>
    <li aria-hidden="true">/</li>
    <li>
      <a href="/settings">Settings</a>
    </li>
    <li aria-hidden="true">/</li>
    <li>
      <span aria-current="page">Profile</span>
    </li>
  </ol>
</nav>
```

**Key points:**
- Use `<nav>` with `aria-label="Breadcrumb"` — this creates a navigation landmark
- Use `<ol>` (ordered list), not `<ul>` — the order is semantically meaningful
- The current page (last item) gets `aria-current="page"` and should NOT be a link (it's the page you're already on)
- Separators (/, >, →) must be `aria-hidden="true"` — screen readers should announce "Home, link, Settings, link, Profile, current page" not "Home, slash, Settings, slash, Profile"

### Screen Reader Announcement

> "Breadcrumb, navigation" → "list, 3 items" → "Home, link" → "Settings, link" → "Profile, current page"

### Common Mistakes

| Mistake | Correct Approach |
|---------|-----------------|
| Missing `aria-label="Breadcrumb"` on `<nav>` | Always add it — distinguishes from other `<nav>` landmarks |
| Separators announced by screen reader | Add `aria-hidden="true"` to separator elements |
| Current page is a clickable link | Last item should not be a link — use `<span>` with `aria-current="page"` |
| Using `<div>` instead of `<ol>` | Use `<ol>` — screen readers announce "list, 3 items" which helps users understand the hierarchy |

---

## Sidebar

Typically a custom component — not a single Radix primitive.

### ARIA Roles and Attributes

| Element | Role/Attribute | Purpose |
|---------|---------------|---------|
| Sidebar container | `<aside>` or `<nav>` | Landmark region |
| Container | `aria-label="Sidebar navigation"` | Identifies the sidebar |
| Toggle button | `aria-expanded="true/false"` | Communicates collapsed/expanded state |
| Toggle button | `aria-controls="sidebar-id"` | Links button to the sidebar it controls |
| Sidebar | `id="sidebar-id"` | Target of `aria-controls` |

### Keyboard Interactions

| Key | Action |
|-----|--------|
| **Tab** | Navigate through sidebar links and controls |
| **Enter / Space** | Activate link or toggle section |
| **Escape** | Close sidebar on mobile (if it overlays content) |
| **Keyboard shortcut** (e.g., Ctrl+B) | Toggle sidebar (if implemented) — announce the shortcut to users |

### Implementation Pattern

```tsx
<>
  <Button
    aria-expanded={sidebarOpen}
    aria-controls="main-sidebar"
    aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
    onClick={toggleSidebar}
  >
    <PanelLeft className="size-4" aria-hidden="true" />
  </Button>

  <aside
    id="main-sidebar"
    aria-label="Sidebar navigation"
    className={cn(sidebarOpen ? "w-64" : "w-0 overflow-hidden")}
  >
    <nav>
      <ul>
        <li><a href="/dashboard" aria-current={isActive ? "page" : undefined}>Dashboard</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </nav>
  </aside>
</>
```

**Key points:**
- Use `<aside>` for supplementary navigation; use `<nav>` if the sidebar is the primary navigation
- The toggle button must have `aria-expanded` and a clear `aria-label`
- When collapsed, sidebar content should be hidden from screen readers (not just visually hidden) — use `display: none`, `visibility: hidden`, or `aria-hidden="true"` + `tabindex="-1"` on all focusable elements
- Use `aria-current="page"` on the active link within the sidebar
- If the sidebar overlays content on mobile, it should behave like a dialog (focus trap, Escape to close)

### Common Mistakes

| Mistake | Correct Approach |
|---------|-----------------|
| Collapsed sidebar still focusable | Hidden sidebar content must be removed from tab order |
| Toggle button has no label | Add `aria-label="Open sidebar"` / `"Close sidebar"` |
| No `aria-expanded` on toggle | Add `aria-expanded` that reflects the sidebar state |
| Mobile sidebar doesn't trap focus | On mobile, treat the sidebar as an overlay — trap focus inside it |
| Active page link not identified | Use `aria-current="page"` on the active sidebar link |

---

## Dropdown Menu

Built on Radix DropdownMenu primitive.

### ARIA Roles and Attributes

| Element | Role/Attribute | Purpose |
|---------|---------------|---------|
| `DropdownMenuTrigger` | `aria-haspopup="menu"` | Indicates a menu will appear |
| `DropdownMenuTrigger` | `aria-expanded="true/false"` | Current menu state |
| `DropdownMenuContent` | `role="menu"` | Container for menu items |
| `DropdownMenuItem` | `role="menuitem"` | Standard menu item |
| `DropdownMenuCheckboxItem` | `role="menuitemcheckbox"` | Checkable menu item |
| `DropdownMenuRadioItem` | `role="menuitemradio"` | Radio-selectable menu item |
| `DropdownMenuSeparator` | `role="separator"` | Visual divider |
| `DropdownMenuLabel` | Non-interactive label | Group heading |
| `DropdownMenuSub` | `aria-haspopup="menu"`, `aria-expanded` | Submenu trigger |

### Keyboard Interactions

| Key | Action |
|-----|--------|
| **Enter / Space** | Open menu (from trigger) or activate focused item |
| **Arrow Down** | Open menu; move to next item |
| **Arrow Up** | Move to previous item |
| **Arrow Right** | Open submenu (if focused item has one) |
| **Arrow Left** | Close submenu, return to parent item |
| **Home** | Move to first item |
| **End** | Move to last item |
| **Escape** | Close menu, return focus to trigger |
| **Type characters** | Typeahead — jump to item starting with typed characters |

### Typeahead Behavior

Radix DropdownMenu supports typeahead search:
- Typing "d" focuses the first item starting with "d"
- Quickly typing "de" focuses the first item starting with "de"
- After a brief pause, the typeahead buffer resets

This is handled automatically by Radix.

### Implementation Pattern

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon" aria-label="User menu">
      <MoreVertical className="size-4" aria-hidden="true" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <User className="mr-2 size-4" aria-hidden="true" />
      Profile
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Settings className="mr-2 size-4" aria-hidden="true" />
      Settings
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <LogOut className="mr-2 size-4" aria-hidden="true" />
      Log out
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

**Key points:**
- The trigger button **must** have a label — if icon-only, use `aria-label`
- Icons next to menu items should be `aria-hidden="true"` (the text label provides the accessible name)
- Disabled items: use `disabled` prop on `DropdownMenuItem` — Radix makes them non-interactive but still visible/focusable for discoverability
- When the menu closes, focus returns to the trigger automatically

### Screen Reader Announcement

| Event | Announcement |
|-------|-------------|
| Focus on trigger | "User menu, button, collapsed" |
| Open menu | "menu" + first item announced |
| Navigate items | "Profile, menuitem" → "Settings, menuitem" → "Log out, menuitem" |
| Activate item | Item action executed, menu closes, trigger re-announced |
| Typeahead | Focus jumps to matching item |

### Common Mistakes

| Mistake | Correct Approach |
|---------|-----------------|
| Icon-only trigger without `aria-label` | Always add `aria-label` (e.g., "User menu", "More options") |
| Using `onClick` on menu items without `role="menuitem"` | Use Radix DropdownMenuItem which provides the correct role |
| Icons inside items not hidden from AT | Add `aria-hidden="true"` to decorative icons |
| Submenu items not reachable via keyboard | Use Radix DropdownMenuSub — Arrow Right opens, Arrow Left closes |
| Menu doesn't close on item activation | Radix handles this by default — don't prevent it unless intentional |
| Custom menu built with `<div>` elements | Use Radix DropdownMenu for full keyboard + ARIA support |

---

## Cross-Component Focus Management

### Focus Return Pattern

All components that open content (tabs panels, accordion sections, menus, submenus) must manage focus predictably:

| Component | Focus On Open | Focus On Close |
|-----------|--------------|----------------|
| Tabs | Panel content (via Tab) | Stays in tablist (via Shift+Tab) |
| Accordion | Content flows naturally after trigger | Focus stays on trigger |
| Navigation Menu (submenu) | First submenu item | Return to trigger |
| Dropdown Menu | First menu item | Return to trigger |
| Sidebar (mobile overlay) | First focusable element in sidebar | Return to toggle button |

### Reduced Motion

All navigation components that animate (accordion expand, menu open, sidebar slide) should respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  [data-state="open"],
  [data-state="closed"] {
    animation-duration: 0ms !important;
    transition-duration: 0ms !important;
  }
}
```

---

## Testing Checklist

### Screen Reader Testing
- [ ] Tabs: `role="tablist"`, `role="tab"`, `role="tabpanel"` announced correctly
- [ ] Tabs: "selected" state announced on active tab; "X of Y" position announced
- [ ] Accordion: `aria-expanded` state announced on triggers
- [ ] Accordion: content `role="region"` with label announced when navigating inside
- [ ] Navigation Menu: `<nav>` landmark announced with label
- [ ] Navigation Menu: `aria-current="page"` on active link announced as "current page"
- [ ] Breadcrumb: navigation landmark announced; separators NOT announced
- [ ] Breadcrumb: last item announced as "current page"
- [ ] Sidebar: expanded/collapsed state announced; active link identified
- [ ] Dropdown Menu: `role="menu"` and `role="menuitem"` announced; typeahead works

### Keyboard Testing
- [ ] Tabs: Tab enters tablist, arrows move between tabs, Tab moves to panel
- [ ] Accordion: Enter/Space toggles, arrow keys move between triggers
- [ ] Navigation Menu: Tab moves between top items, arrows open/navigate submenus, Escape closes
- [ ] Breadcrumb: Tab navigates between links
- [ ] Sidebar: Toggle button operable, links navigable, Escape closes (mobile)
- [ ] Dropdown Menu: Enter/Space/ArrowDown opens, arrows navigate, Escape closes, typeahead works

### Visual Testing
- [ ] Focus ring visible on all interactive elements in every component
- [ ] Active/selected states visible beyond color alone
- [ ] Expanded/collapsed states have visible indicators
- [ ] Animations respect `prefers-reduced-motion`

---

## References

- [WAI-ARIA Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [WAI-ARIA Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- [WAI-ARIA Menu Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/)
- [WAI-ARIA Breadcrumb Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)
- [Radix Tabs Primitive](https://www.radix-ui.com/primitives/docs/components/tabs)
- [Radix Accordion Primitive](https://www.radix-ui.com/primitives/docs/components/accordion)
- [Radix NavigationMenu Primitive](https://www.radix-ui.com/primitives/docs/components/navigation-menu)
- [Radix DropdownMenu Primitive](https://www.radix-ui.com/primitives/docs/components/dropdown-menu)

---

*Last updated: February 9, 2026*
