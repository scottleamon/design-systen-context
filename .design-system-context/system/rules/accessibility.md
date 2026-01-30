# Accessibility Guidelines (A11y)

## Overview
In the context of Healthcare and Higher Education, accessibility is **non-negotiable**. We adhere to **WCAG 2.1 Level AA** and **Section 508** compliance standards. These rules ensure our applications are usable by everyone, including those with visual, auditory, motor, or cognitive impairments.

---

## 1. Semantic HTML
Always use the most appropriate HTML element for the job. This provides built-in accessibility features that ARIA cannot easily replicate.

- **Buttons vs. Links:** Use `<button>` for actions (submit, toggle, open modal). Use `<a>` for navigation to a different URL or anchor.
- **Headings:** Maintain a logical hierarchy (`h1` -> `h2` -> `h3`). Never skip levels for styling purposes.
- **Landmarks:** Use `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`, and `<section>` (with a label) to define page structure.
- **Form Labels:** Every input **must** have a corresponding `<label>` or `aria-labelledby`.

---

## 2. Keyboard Navigation
All interactive elements must be reachable and operable via keyboard.

- **Focus Indicators:** Never remove focus rings (`outline: none`) without providing a clearly visible `focus-visible` alternative.
- **Tab Order:** Ensure a logical tabbing order that follows the visual flow of the page.
- **Interactivity:** Elements like modals and dropdowns must trap focus when open and return focus when closed.
- **Keyboard Shortcuts:** Use standard keys (Enter/Space for activation, Escape for closing Windows/Modals).

---

## 3. Visual Requirements
- **Color Contrast:** 
  - Normal text: Minimum **4.5:1** contrast ratio.
  - Large text (18pt/24px or 14pt/18.67px bold): Minimum **3:1**.
  - UI components and graphical objects: Minimum **3:1**.
- **Color as Meaning:** Never use color as the *only* way to convey information (e.g., use an icon or text label alongside a red error state).
- **Text Sizing:** Ensure layouts don't break when text is zoomed to 200%. Use relative units (`rem`, `em`) rather than `px` for typography.

---

## 4. Screen Reader Support
- **Alt Text:** All images must have an `alt` attribute. 
  - Informative images: Describe the content.
  - Decorative images: Use `alt=""` so they are ignored by screen readers.
- **ARIA Attributes:** Use sparingly. "No ARIA is better than bad ARIA."
  - Use `aria-label` for buttons with only icons.
  - Use `aria-expanded` and `aria-controls` for disclosure widgets (accordions, menus).
  - Use `aria-live` for dynamic content updates (notifications, search results).
- **Hidden Content:** Use `sr-only` class (Tailwind) to provide context for screen readers that is visually hidden.

---

## 5. Forms & Validation
- **Error Messaging:** Provide clear, descriptive error messages that are programmatically linked to the input (`aria-describedby`).
- **Required Fields:** Indicate required fields both visually and with the `required` or `aria-required` attribute.
- **Instructions:** Ensure instructions are clear and placed before the input they describe.

---

## Technical Implementation (Tailwind/Shadcn)
- Always use `focus-visible:ring-2` for interactive elements.
- Use `aria-*` props in React components correctly.
- Prefer Radix UI primitives (as used in Shadcn) which handle many A11y patterns out of the box.

---

## Checklist for AI Agents
- [ ] Is the HTML semantic?
- [ ] Can I navigate this entire feature using only the Tab and Enter keys?
- [ ] Does every icon-only button have an `aria-label`?
- [ ] Is the color contrast sufficient on all text?
- [ ] Are form errors announced to screen readers?
