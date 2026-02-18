# Breakpoint Tokens

> [!TIP]
> For machine-parseable token values, see [`tokens.json`](./tokens.json).

Responsive design breakpoints and patterns for consistent layouts across devices.

---

## Breakpoint Scale

| Token | Min Width | Target Devices |
|-------|-----------|----------------|
| `sm` | 640px | Large phones (landscape) |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops, tablets (landscape) |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

### Mobile-First Approach

Tailwind uses mobile-first breakpoints. Unprefixed classes apply to all sizes, prefixed classes apply at that breakpoint and up.

```tsx
// Applies to all: single column
// md and up: two columns
<div className="grid grid-cols-1 md:grid-cols-2">
```

---

## Common Patterns

### Stack to Row

```tsx
// Stack on mobile, row on tablet+
<div className="flex flex-col md:flex-row gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Responsive Grid

```tsx
// 1 column → 2 columns → 3 columns → 4 columns
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {items.map(item => <Card key={item.id} />)}
</div>
```

### Hide/Show Elements

```tsx
// Hidden on mobile, visible on desktop
<div className="hidden lg:block">Desktop only</div>

// Visible on mobile, hidden on desktop
<div className="block lg:hidden">Mobile only</div>
```

### Responsive Typography

```tsx
// Smaller on mobile, larger on desktop
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
  Heading
</h1>
```

### Responsive Spacing

```tsx
// Tighter on mobile, more spacious on desktop
<section className="py-8 md:py-12 lg:py-16">
  <div className="px-4 md:px-6 lg:px-8">
    Content
  </div>
</section>
```

---

## Layout Breakpoint Patterns

### Sidebar Layout

```tsx
// Mobile: sidebar hidden or overlay
// Desktop: sidebar visible
<div className="flex">
  <aside className="hidden lg:block w-64">
    Sidebar
  </aside>
  <main className="flex-1">
    Content
  </main>
</div>
```

### Dialog Footer Buttons

```tsx
// Mobile: stacked, full-width
// Desktop: side-by-side, right-aligned
<DialogFooter className="flex-col-reverse sm:flex-row sm:justify-end gap-2">
  <Button variant="outline">Cancel</Button>
  <Button>Save</Button>
</DialogFooter>
```

### Form Layout

```tsx
// Mobile: single column
// Desktop: two column for dense forms
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <FormField name="firstName" />
  <FormField name="lastName" />
  <FormField name="email" className="md:col-span-2" />
</div>
```

### Card Grid

```tsx
// Responsive card layout
<div className="grid gap-4 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                xl:grid-cols-4">
  {cards.map(card => <Card key={card.id} />)}
</div>
```

---

## Container Widths

### Max Width Constraints

| Class | Max Width | Use For |
|-------|-----------|---------|
| `max-w-sm` | 384px | Small cards, narrow forms |
| `max-w-md` | 448px | Login forms, dialogs |
| `max-w-lg` | 512px | Medium content |
| `max-w-xl` | 576px | Wide forms |
| `max-w-2xl` | 672px | Settings pages |
| `max-w-3xl` | 768px | Article content |
| `max-w-4xl` | 896px | Wide content |
| `max-w-5xl` | 1024px | Dashboard sections |
| `max-w-6xl` | 1152px | Full page content |
| `max-w-7xl` | 1280px | Wide layouts |

### Centered Container

```tsx
<div className="container mx-auto px-4">
  {/* Content constrained to container width with padding */}
</div>

// Or with explicit max width
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

---

## Component-Specific Breakpoints

### Dialog

```tsx
// Full screen on mobile, centered on desktop
<DialogContent className="w-full h-full sm:h-auto sm:max-w-[425px] sm:rounded-lg">
```

### Sheet

```tsx
// Sheet is inherently responsive via side prop
<Sheet>
  <SheetContent side="bottom" className="sm:side-right sm:w-[400px]">
```

### Navigation

```tsx
// Mobile: hamburger menu
// Desktop: horizontal nav
<header>
  <nav className="hidden md:flex gap-4">
    {/* Desktop navigation */}
  </nav>
  <Button variant="ghost" className="md:hidden">
    <Menu className="size-6" />
  </Button>
</header>
```

### Table

```tsx
// Horizontal scroll on mobile
<div className="overflow-x-auto">
  <Table className="min-w-[600px]">
    {/* Table content */}
  </Table>
</div>
```

---

## Tailwind Configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
}
```

---

## CSS Custom Properties

```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

---

## Testing Responsive Designs

### Key Test Widths

| Width | Represents |
|-------|------------|
| 320px | Small phones (iPhone SE) |
| 375px | Standard phones (iPhone) |
| 414px | Large phones |
| 768px | Tablets (iPad portrait) |
| 1024px | Tablets (iPad landscape), small laptops |
| 1280px | Laptops |
| 1440px | Desktops |
| 1920px | Large desktops |

### Breakpoint Debugging

```tsx
// Add to development only - shows current breakpoint
<div className="fixed bottom-4 right-4 bg-black text-white p-2 text-xs rounded z-50">
  <span className="sm:hidden">xs</span>
  <span className="hidden sm:inline md:hidden">sm</span>
  <span className="hidden md:inline lg:hidden">md</span>
  <span className="hidden lg:inline xl:hidden">lg</span>
  <span className="hidden xl:inline 2xl:hidden">xl</span>
  <span className="hidden 2xl:inline">2xl</span>
</div>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Mobile styles applying on desktop | Remember mobile-first: unprefixed is mobile |
| Element not hiding at breakpoint | Use `hidden` + `lg:block`, not `lg:hidden` alone |
| Content jumping at breakpoints | Use consistent spacing tokens at each breakpoint |
| Table overflows on mobile | Wrap in `overflow-x-auto` container |
| Dialog too wide on mobile | Use `w-full sm:max-w-[425px]` pattern |
| Grid gaps inconsistent | Define gap at each breakpoint if needed |

---

## See Also

- **Related Tokens:**
  - [Spacing](./spacing.md) - Responsive spacing values
  - [Typography](./typography.md) - Responsive type scale
- **Related Patterns:**
  - [Layouts](../patterns/layouts.md) - Responsive layout patterns
- **Design System:**
  - [Themes](./themes.md) - Multi-theme system overview

---

*Last updated: January 16, 2026*
