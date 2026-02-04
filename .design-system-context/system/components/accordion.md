# Accordion

## Import
```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
```

## Props
```tsx
interface AccordionProps {
  type?: "single" | "multiple"  // Allow one or multiple items open
  collapsible?: boolean         // Allow closing all items (single mode)
  defaultValue?: string | string[]
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  children: React.ReactNode
}

interface AccordionItemProps {
  value: string               // Unique identifier
  disabled?: boolean
  children: React.ReactNode
}

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}
```

---

## Variants

| Variant | Use For | Visual Indicator |
|---------|---------|------------------|
| `collapsed` | Default state, content hidden | Chevron points down |
| `expanded` | User has opened item | Chevron `rotate-180`, content visible |

### Choosing a Variant
- Use `type="single"` for FAQs or settings where only one answer should be visible
- Use `type="multiple"` when users need to compare multiple sections
- Add `collapsible` prop to allow closing all items in single mode

---

## States

| State | Trigger Text | Icon | Implementation |
|-------|--------------|------|----------------|
| Default | `text-foreground` | `text-muted-foreground` | Base appearance |
| Hover | `underline` | Unchanged | `hover:underline` on trigger text |
| Focus | Unchanged | Unchanged | `focus:ring-3 focus:ring-ring focus:rounded-md` |
| Pressed | `opacity-60` | `opacity-60` | Reduced opacity on entire trigger |

---

## Styling

### Typography

| Element | Font | Size | Weight | Line Height | Color |
|---------|------|------|--------|-------------|-------|
| Trigger | `font-sans` (Adelle Sans) | `text-sm` (14px) | `font-medium` (Semibold) | `leading-5` (20px) | `text-foreground` |
| Content | `font-sans` (Adelle Sans) | `text-sm` (14px) | `font-normal` (Regular) | `leading-5` (20px) | `text-foreground` |

### Spacing

| Element | Property | Value |
|---------|----------|-------|
| AccordionTrigger | Padding | `py-4` (16px vertical), `px-0` |
| AccordionContent | Padding | `pb-4` (16px bottom), `pt-0`, `px-0` |

### Borders

| Property | Value |
|----------|-------|
| Border | `border-b border-border` (bottom only) |
| Border Width | `1px` |
| Border Color | `border` token (#e4e4e7) |

---

## Icons

**Icon:** ChevronDown
**Size:** `size-4` (16×16px)
**Color:** `text-muted-foreground` (#71717a)
**Animation:** `transition-transform duration-200` with `rotate-180` when expanded
**Alignment:** Flex shrink-0, positioned at end of trigger row

```tsx
<ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
```

---

## Common Patterns

### Basic FAQ
```tsx
<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match the design system.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Multiple Open
```tsx
<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Section One</AccordionTrigger>
    <AccordionContent>Content one</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section Two</AccordionTrigger>
    <AccordionContent>Content two</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

## Component Structure

```tsx
// AccordionItem wrapper
<div className="border-b border-border">
  
  {/* AccordionTrigger */}
  <button className="flex w-full items-center justify-between py-4 text-sm font-medium text-foreground hover:underline focus:ring-3 focus:ring-ring focus:rounded-md [&[data-state=open]>svg]:rotate-180">
    {children}
    <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
  </button>
  
  {/* AccordionContent (when expanded) */}
  <div className="pb-4 text-sm text-foreground">
    {children}
  </div>
  
</div>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Item won't close in single mode | Add `collapsible` prop to Accordion |
| Multiple items open when shouldn't | Use `type="single"` not `type="multiple"` |
| Chevron not animating | Ensure `transition-transform` class is present |
| Focus ring not visible | Ensure `ring-ring` token is defined in theme |
| Underline missing on hover | Use `hover:underline` not separate text-decoration |

---

## Figma Reference

[View in Figma](https://www.figma.com/design/0rd6tPgENef5nXmN0puflu/shadcn_ui-TimelyCare-kit?node-id=34-526&m=dev)

---

## See Also

- **Accessibility:** [Navigation Accessibility Requirements](../a11y/navigation.md) - Keyboard navigation, ARIA expanded state
- **Related Components:** [Tabs](./tabs.md) (for parallel sections), [Collapsible](./collapsible.md)
- **Patterns:** [Component Match](../patterns/component-match.md#navigation-components-tabs-vs-accordion-vs-stepper)

---

*Last updated: December 18, 2025*
