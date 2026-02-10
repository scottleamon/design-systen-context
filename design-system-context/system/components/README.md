# Component Library

> 50 components available. All based on [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) primitives unless noted as custom.

For component selection guidance, see [Component Match](../patterns/component-match.md).

---

## Quick Reference

| Component | File | Variants | Theme-Aware | Category |
|-----------|------|----------|-------------|----------|
| Accordion | [accordion.md](./accordion.md) | — | No | Disclosure |
| Alert | [alert.md](./alert.md) | default, destructive | Yes | Feedback |
| Alert Dialog | [alert-dialog.md](./alert-dialog.md) | — | No | Feedback |
| Aspect Ratio | [aspect-ratio.md](./aspect-ratio.md) | — | No | Layout |
| Avatar | [avatar.md](./avatar.md) | — | No | Data Display |
| Badge | [badge.md](./badge.md) | default, secondary, outline, destructive, success, warning | Yes | Data Display |
| Breadcrumb | [breadcrumb.md](./breadcrumb.md) | — | No | Navigation |
| Button | [button.md](./button.md) | default, secondary, destructive, outline, ghost, link | Yes | Action |
| Calendar | [calendar.md](./calendar.md) | single, range, multiple | Yes | Data Display |
| Card | [card.md](./card.md) | — | Yes | Data Display |
| Carousel | [carousel.md](./carousel.md) | horizontal, vertical | No | Data Display |
| Chart | [chart.md](./chart.md) | bar, area, line, pie, radar, radial | No | Data Display |
| Checkbox | [checkbox.md](./checkbox.md) | — | Yes | Form |
| Collapsible | [collapsible.md](./collapsible.md) | — | No | Disclosure |
| Combobox | [combobox.md](./combobox.md) | — | No | Form |
| Command | [command.md](./command.md) | — | No | Navigation |
| Context Menu | [context-menu.md](./context-menu.md) | default, checkbox, radio | No | Navigation |
| Data Table | [data-table.md](./data-table.md) | — | No | Data Display |
| Date Picker | [date-picker.md](./date-picker.md) | icon-left, icon-right, with-input | No | Form |
| Dialog | [dialog.md](./dialog.md) | — | No | Overlay |
| Drawer | [drawer.md](./drawer.md) | — | No | Overlay |
| Dropdown Menu | [dropdown-menu.md](./dropdown-menu.md) | default, checkbox, radio, icon | No | Navigation |
| Form | [form.md](./form.md) | — | No | Form |
| Header | [header.md](./header.md) | desktop, mobile | No | Layout |
| Hover Card | [hover-card.md](./hover-card.md) | — | No | Data Display |
| Input | [input.md](./input.md) | default, file, with-icon | No | Form |
| Input OTP | [input-otp.md](./input-otp.md) | digits-only, with-separator, simple, with-spacing | No | Form |
| Label | [label.md](./label.md) | — | No | Form |
| Menubar | [menubar.md](./menubar.md) | default, checkbox, radio | No | Navigation |
| Navigation Menu | [navigation-menu.md](./navigation-menu.md) | — | No | Navigation |
| Pagination | [pagination.md](./pagination.md) | previous, next, link, ellipsis | Yes | Navigation |
| Popover | [popover.md](./popover.md) | — | No | Overlay |
| Progress | [progress.md](./progress.md) | — | Yes | Feedback |
| Radio Group | [radio-group.md](./radio-group.md) | default, box | Yes | Form |
| Resizable | [resizable.md](./resizable.md) | horizontal, vertical | No | Layout |
| Scroll Area | [scroll-area.md](./scroll-area.md) | — | No | Layout |
| Select | [select.md](./select.md) | — | No | Form |
| Separator | [separator.md](./separator.md) | horizontal, vertical | No | Layout |
| Sheet | [sheet.md](./sheet.md) | top, right, bottom, left | No | Overlay |
| Sidebar | [sidebar.md](./sidebar.md) | sidebar, floating, inset | Yes | Navigation |
| Skeleton | [skeleton.md](./skeleton.md) | — | No | Feedback |
| Slider | [slider.md](./slider.md) | single, range | Yes | Form |
| Sonner | [sonner.md](./sonner.md) | default, success, info, warning, error, loading | Yes | Feedback |
| Switch | [switch.md](./switch.md) | default, box | Yes | Form |
| Table | [table.md](./table.md) | — | No | Data Display |
| Tabs | [tabs.md](./tabs.md) | — | No | Navigation |
| Textarea | [textarea.md](./textarea.md) | — | No | Form |
| Toggle | [toggle.md](./toggle.md) | default, outline | No | Disclosure |
| Toggle Group | [toggle-group.md](./toggle-group.md) | default, outline | No | Disclosure |
| Tooltip | [tooltip.md](./tooltip.md) | — | Yes | Overlay |

---

## By Category

### Action

- [Button](./button.md) — Primary interactive element with 6 variants (default, secondary, destructive, outline, ghost, link) and 4 sizes

### Data Display

- [Avatar](./avatar.md) — User profile image with fallback initials, 5 sizes and 2 shapes
- [Badge](./badge.md) — Inline status label with 6 variants including success and warning
- [Calendar](./calendar.md) — Date selection grid supporting single, range, and multi-date modes
- [Card](./card.md) — Flexible content container with header, content, and footer sections
- [Carousel](./carousel.md) — Scrollable content slider powered by Embla, horizontal or vertical
- [Chart](./chart.md) — Data visualization wrapper for Recharts with 6 chart types and themed color tokens
- [Data Table](./data-table.md) — Interactive table with sorting, filtering, selection, and pagination via TanStack Table
- [Hover Card](./hover-card.md) — Rich content preview displayed on hover with configurable delay
- [Table](./table.md) — Static data table with header, body, footer, and caption

### Feedback

- [Alert](./alert.md) — Inline notice with icon, title, and description in default or destructive variants
- [Alert Dialog](./alert-dialog.md) — Modal confirmation dialog that blocks interaction until resolved
- [Progress](./progress.md) — Horizontal bar showing completion percentage with animated indicator
- [Skeleton](./skeleton.md) — Pulsing placeholder shapes for loading states (line, circle, square)
- [Sonner](./sonner.md) — Toast notification system with 6 types including success, error, and loading

### Form

- [Checkbox](./checkbox.md) — Binary toggle with label support, 16px square with check icon
- [Combobox](./combobox.md) — Searchable dropdown combining Command + Popover, supports multi-select
- [Date Picker](./date-picker.md) — Calendar-based date input with 3 layout types (icon-left, icon-right, with-input)
- [Form](./form.md) — React Hook Form + Zod integration wrapper with validation and error handling
- [Input](./input.md) — Standard text input field with label, description, icon, and error states
- [Input OTP](./input-otp.md) — One-time password entry with 4 layout variants for verification codes
- [Label](./label.md) — Form field label with semibold styling and disabled state support
- [Radio Group](./radio-group.md) — Single-select option group with default and box-style variants
- [Select](./select.md) — Native-style dropdown for choosing from a list of options
- [Slider](./slider.md) — Draggable range control for single or dual-thumb value selection
- [Switch](./switch.md) — On/off toggle with track and thumb, default and box-style types
- [Textarea](./textarea.md) — Multi-line text input with resizing, character count, and error states

### Layout

- [Aspect Ratio](./aspect-ratio.md) — Maintains consistent width-to-height ratio for images and media
- [Header](./header.md) — Custom app header with responsive desktop/mobile layouts and navigation *(not a shadcn primitive)*
- [Resizable](./resizable.md) — Drag-to-resize panel groups with horizontal or vertical orientation
- [Scroll Area](./scroll-area.md) — Custom-styled scrollbar container for overflow content
- [Separator](./separator.md) — Visual divider line in horizontal or vertical orientation

### Navigation

- [Breadcrumb](./breadcrumb.md) — Hierarchical page trail with links, ellipsis, and dropdown support
- [Command](./command.md) — Searchable command palette (⌘K pattern) with grouped items and shortcuts
- [Context Menu](./context-menu.md) — Right-click menu with items, checkboxes, radio groups, and submenus
- [Dropdown Menu](./dropdown-menu.md) — Click-triggered menu with items, checkboxes, radio groups, and submenus
- [Menubar](./menubar.md) — Horizontal menu bar with multiple dropdown menus (File, Edit, View pattern)
- [Navigation Menu](./navigation-menu.md) — Top-level site navigation with dropdown content panels
- [Pagination](./pagination.md) — Page navigation controls with previous/next buttons and page numbers
- [Sidebar](./sidebar.md) — Collapsible side navigation with menu items, sub-menus, and badges
- [Tabs](./tabs.md) — Tabbed content switcher with pill-style tab list and content panels

### Overlay

- [Dialog](./dialog.md) — Modal window for forms or content, centered with backdrop overlay
- [Drawer](./drawer.md) — Bottom sheet overlay that slides up, swipe-to-close, mobile-friendly
- [Popover](./popover.md) — Floating content panel anchored to a trigger element
- [Sheet](./sheet.md) — Side panel overlay from any edge (top, right, bottom, left)
- [Tooltip](./tooltip.md) — Small informational popup on hover with arrow indicator

### Disclosure

- [Accordion](./accordion.md) — Expandable content sections with single or multiple open items
- [Collapsible](./collapsible.md) — Simple show/hide toggle for content blocks
- [Toggle](./toggle.md) — Pressable button with on/off state in default or outline variants
- [Toggle Group](./toggle-group.md) — Grouped toggle buttons for single or multiple selection

---

*Last updated: February 9, 2026*
