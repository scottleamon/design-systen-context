# Motion Tokens

Animation and transition specifications for consistent UI motion.

---

## Duration Scale

| Token | Value | Use For |
|-------|-------|---------|
| `duration-75` | 75ms | Micro-interactions (opacity changes) |
| `duration-100` | 100ms | Quick feedback (hover states) |
| `duration-150` | 150ms | Standard transitions (DEFAULT) |
| `duration-200` | 200ms | Slightly slower transitions |
| `duration-300` | 300ms | Medium transitions (accordion, collapse) |
| `duration-500` | 500ms | Slow transitions (page elements) |
| `duration-700` | 700ms | Very slow (dramatic reveals) |
| `duration-1000` | 1000ms | Extended animations |

### Recommended Defaults

| Context | Duration |
|---------|----------|
| Hover states | `duration-150` |
| Focus rings | `duration-150` |
| Button states | `duration-150` |
| Accordion expand/collapse | `duration-200` |
| Dialog/Sheet open | `duration-200` |
| Page transitions | `duration-300` |

---

## Easing Functions

| Token | Value | Use For |
|-------|-------|---------|
| `ease-linear` | `linear` | Progress bars, constant motion |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving viewport |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering viewport (DEFAULT) |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Elements moving within viewport |

### Recommended Defaults

| Context | Easing |
|---------|--------|
| Hover/focus states | `ease-out` or `ease-in-out` |
| Opening dialogs | `ease-out` |
| Closing dialogs | `ease-in` |
| Accordion | `ease-in-out` |
| General UI | `ease-in-out` |

---

## Common Animations

### Spinner

```tsx
<Loader2 className="size-4 animate-spin" />
```

Built-in Tailwind animation: rotates 360° in 1 second, linear, infinite.

### Pulse (Skeleton)

```tsx
<Skeleton className="animate-pulse" />
```

Built-in Tailwind animation: opacity fades between 1 and 0.5.

### Bounce (Attention)

```tsx
<div className="animate-bounce">
  <ArrowDown className="size-4" />
</div>
```

Use sparingly for attention-grabbing elements.

### Ping (Notification Dot)

```tsx
<span className="relative flex size-3">
  <span className="animate-ping absolute inline-flex size-full rounded-full bg-primary opacity-75" />
  <span className="relative inline-flex rounded-full size-3 bg-primary" />
</span>
```

---

## Transition Properties

### Standard Transition

```tsx
// Default transition for most UI elements
className="transition-colors duration-150 ease-in-out"

// Transform transitions (scale, rotate, translate)
className="transition-transform duration-200 ease-in-out"

// All properties
className="transition-all duration-150 ease-in-out"
```

### Specific Properties

| Tailwind Class | Properties |
|----------------|------------|
| `transition-none` | No transition |
| `transition-all` | All properties |
| `transition-colors` | color, background-color, border-color, text-decoration-color, fill, stroke |
| `transition-opacity` | opacity |
| `transition-shadow` | box-shadow |
| `transition-transform` | transform |

---

## Component-Specific Animations

### Accordion Chevron

```tsx
<ChevronDown 
  className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 
             data-[state=open]:rotate-180" 
/>
```

### Collapsible Content

```tsx
// Height animation handled by Radix
// Duration is set via CSS or data attributes
```

### Dialog/Sheet

```tsx
// Overlay fade
<DialogOverlay className="data-[state=open]:animate-in data-[state=closed]:animate-out 
                          data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

// Content slide
<DialogContent className="data-[state=open]:animate-in data-[state=closed]:animate-out
                          data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
                          data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95" />
```

### Dropdown/Popover

```tsx
<DropdownMenuContent 
  className="data-[state=open]:animate-in data-[state=closed]:animate-out
             data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
             data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
             data-[side=bottom]:slide-in-from-top-2
             data-[side=left]:slide-in-from-right-2
             data-[side=right]:slide-in-from-left-2
             data-[side=top]:slide-in-from-bottom-2"
/>
```

---

## CSS Custom Properties

```css
:root {
  /* Durations */
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  
  /* Easing */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
}
```

---

## Tailwind Configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: '150ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
}
```

---

## Accessibility Considerations

### Reduced Motion

Always respect user preferences for reduced motion:

```tsx
// In your component
<div className="motion-safe:animate-bounce motion-reduce:animate-none">

// Or via media query in CSS
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Guidelines

- Keep animations under 300ms for UI feedback
- Avoid animations that flash, blink, or have rapid motion
- Provide static alternatives for essential animations
- Test with `prefers-reduced-motion` enabled

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Animation feels slow | Use 150ms for micro-interactions, 200ms max for most UI |
| Jerky accordion | Ensure `ease-in-out` easing is applied |
| Spinner not animating | Use `animate-spin` class (includes infinite) |
| Skeleton flashing | `animate-pulse` uses 2s duration by default |
| Dropdown appears abruptly | Add Radix animate-in/out classes |

---

*Last updated: January 16, 2026*
