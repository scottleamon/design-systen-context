# Typography Tokens

## Font Families

| Token | Value (EXACT from Figma) | CSS Variable | Usage |
|-------|--------------------------|--------------|-------|
| Sans | **Adelle Sans** | `--font/font-sans` | All UI text |
| Mono | **Adelle Mono** | `--font/font-mono` | Code blocks, inline code |

### Font Family Variants (Adelle Sans)
- `Adelle_Sans:Regular` - Body text
- `Adelle_Sans:Semibold` - Labels, small text emphasis
- `Adelle_Sans:Bold` - Headings, buttons
- `Adelle_Sans:Extrabold` - H1 headings

### Font Family Variants (Adelle Mono)
- `Adelle_Mono:Regular` - Code blocks
- `Adelle_Mono:Bold` - Code emphasis

## Font Sizes

| Token | Size | Line Height | CSS Variables |
|-------|------|-------------|---------------|
| xs | 12px | 16px | `--text/xs/font-size`, `--text/xs/line-height` |
| sm | 14px | 20px | `--text/sm/font-size`, `--text/sm/line-height` |
| base | 16px | 24px | `--text/base/font-size`, `--text/base/line-height` |
| lg | 18px | 28px | `--text/lg/font-size`, `--text/lg/line-height` |
| xl | 20px | 28px | `--text/xl/font-size`, `--text/xl/line-height` |
| 2xl | 24px | 32px | `--text/2xl/font-size`, `--text/2xl/line-height` |
| 3xl | 30px | 36px | `--text/3xl/font-size`, `--text/3xl/line-height` |
| 4xl | 36px | 40px | `--text/4xl/font-size`, `--text/4xl/line-height` |
| 5xl | 48px | 48px | `--text/5xl/font-size`, `--text/5xl/line-height` |

## Font Weights

| Token | Value | CSS Variable | Usage |
|-------|-------|--------------|-------|
| normal | 400 | `--font-weight/normal` | Body text (Regular) |
| medium | 500 | `--font-weight/medium` | Labels (Semibold) |
| semibold | 600 | `--font-weight/semibold` | Buttons, headings (Bold) |
| bold | 700 | `--font-weight/bold` | Strong emphasis (Bold) |
| extrabold | 800 | `--font-weight/extrabold` | H1 headings (Extrabold) |

## Typography Scale (Heading Hierarchy)

| Element | Size Token | Weight | Line Height | Font |
|---------|------------|--------|-------------|------|
| H1 (Desktop) | 5xl (48px) | extrabold | 48px | Adelle Sans Extrabold |
| H1 (Mobile) | 4xl (36px) | extrabold | 40px | Adelle Sans Extrabold |
| H2 | 3xl (30px) | semibold | 36px | Adelle Sans Bold |
| H3 | 2xl (24px) | semibold | 32px | Adelle Sans Bold |
| H4 | xl (20px) | semibold | 28px | Adelle Sans Bold |
| Lead | xl (20px) | normal | 28px | Adelle Sans Regular |
| Large | lg (18px) | semibold | 28px | Adelle Sans Bold |
| P (body) | base (16px) | normal | 24px | Adelle Sans Regular |
| Small | sm (14px) | semibold | 20px | Adelle Sans Semibold |
| Muted | sm (14px) | semibold | 20px | Adelle Sans Semibold |

## Additional Typography Styles

| Element | Size | Weight | Line Height | Additional Styling |
|---------|------|--------|-------------|-------------------|
| Blockquote | base (16px) | normal | 24px | Left border 2px, `pl-6`, `mt-6` |
| List | base (16px) | normal | 24px | `pl-6`, item spacing `mb-2` |
| Table Header | base (16px) | bold | 24px | `px-4 py-2`, border |
| Table Cell | base (16px) | normal | 24px | `px-4 py-2`, border |
| Table Cell (striped) | base (16px) | normal | 24px | `bg-muted`, same padding |

### H2 Special Styling

H2 headings include a bottom border for visual separation:
- Border: `border-b border-border`
- Padding: `pb-2` (8px bottom padding)

## Code Typography

| Element | Size | Line Height | Font |
|---------|------|-------------|------|
| Code block | base (16px) | 24px | Adelle Mono Regular |
| Inline code | sm (14px) | 20px | Adelle Mono Regular |

### Inline Code Styling

- Background: `bg-muted`
- Border radius: `rounded-sm` (6px)
- Padding: ~5px horizontal, ~3px vertical

### Code Block Styling

- Background: `bg-zinc-900` (dark theme)
- Border: `border border-border`
- Border radius: `rounded-lg` (10px)
- Padding: `p-4` (16px)

## Tailwind Configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Adelle Sans', 'sans-serif'],
      mono: ['Adelle Mono', 'monospace'],
    },
    fontSize: {
      xs: ['12px', { lineHeight: '16px' }],
      sm: ['14px', { lineHeight: '20px' }],
      base: ['16px', { lineHeight: '24px' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['20px', { lineHeight: '28px' }],
      '2xl': ['24px', { lineHeight: '32px' }],
      '3xl': ['30px', { lineHeight: '36px' }],
      '4xl': ['36px', { lineHeight: '40px' }],
      '5xl': ['48px', { lineHeight: '48px' }],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
  },
}
```

## CSS Custom Properties

```css
:root {
  /* Font Families */
  --font-font-sans: 'Adelle Sans', sans-serif;
  --font-font-mono: 'Adelle Mono', monospace;
  
  /* Font Sizes */
  --text-xs-font-size: 12px;
  --text-sm-font-size: 14px;
  --text-base-font-size: 16px;
  --text-lg-font-size: 18px;
  --text-xl-font-size: 20px;
  --text-2xl-font-size: 24px;
  --text-3xl-font-size: 30px;
  --text-4xl-font-size: 36px;
  --text-5xl-font-size: 48px;
  
  /* Line Heights */
  --text-xs-line-height: 16px;
  --text-sm-line-height: 20px;
  --text-base-line-height: 24px;
  --text-lg-line-height: 28px;
  --text-xl-line-height: 28px;
  --text-2xl-line-height: 32px;
  --text-3xl-line-height: 36px;
  --text-4xl-line-height: 40px;
  --text-5xl-line-height: 48px;
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
}
```

---
*Last extracted: January 16, 2026*
