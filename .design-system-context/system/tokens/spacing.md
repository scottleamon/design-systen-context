# Spacing Tokens

> [!TIP]
> For machine-parseable token values, see [`tokens.json`](./tokens.json).

## Spacing Scale

| Token | CSS Variable | Value | Pixels | Usage |
|-------|--------------|-------|--------|-------|
| 0 | `--spacing/0` | 0 | 0px | None |
| px | `--spacing/px` | 1px | 1px | Hairline |
| 0.5 | `--spacing/0.5` | 0.125rem | 2px | Micro |
| 1 | `--spacing/1` | 0.25rem | 4px | Tight |
| 1.5 | `--spacing/1.5` | 0.375rem | 6px | Extra small |
| 2 | `--spacing/2` | 0.5rem | 8px | Small |
| 2.5 | `--spacing/2.5` | 0.625rem | 10px | Small+ |
| 3 | `--spacing/3` | 0.75rem | 12px | Medium-small |
| 3.5 | `--spacing/3.5` | 0.875rem | 14px | Medium-small+ |
| 4 | `--spacing/4` | 1rem | 16px | Base |
| 5 | `--spacing/5` | 1.25rem | 20px | Base+ |
| 6 | `--spacing/6` | 1.5rem | 24px | Medium |
| 7 | `--spacing/7` | 1.75rem | 28px | Medium+ |
| 8 | `--spacing/8` | 2rem | 32px | Large |
| 9 | `--spacing/9` | 2.25rem | 36px | Large+ |
| 10 | `--spacing/10` | 2.5rem | 40px | Extra large |
| 11 | `--spacing/11` | 2.75rem | 44px | Extra large+ |
| 12 | `--spacing/12` | 3rem | 48px | 2X large |
| 14 | `--spacing/14` | 3.5rem | 56px | 2X large+ |
| 16 | `--spacing/16` | 4rem | 64px | 3X large |
| 20 | `--spacing/20` | 5rem | 80px | 4X large |
| 24 | `--spacing/24` | 6rem | 96px | 5X large |
| 28 | `--spacing/28` | 7rem | 112px | 6X large |
| 32 | `--spacing/32` | 8rem | 128px | 7X large |
| 36 | `--spacing/36` | 9rem | 144px | 8X large |
| 40 | `--spacing/40` | 10rem | 160px | 9X large |
| 44 | `--spacing/44` | 11rem | 176px | 10X large |
| 48 | `--spacing/48` | 12rem | 192px | 11X large |
| 52 | `--spacing/52` | 13rem | 208px | 12X large |
| 56 | `--spacing/56` | 14rem | 224px | 13X large |
| 60 | `--spacing/60` | 15rem | 240px | 14X large |
| 64 | `--spacing/64` | 16rem | 256px | 15X large |
| 72 | `--spacing/72` | 18rem | 288px | 16X large |
| 80 | `--spacing/80` | 20rem | 320px | 17X large |
| 96 | `--spacing/96` | 24rem | 384px | 18X large |

## Common Usage Patterns

| Use Case | Token | Pixels |
|----------|-------|--------|
| Button padding (x) | 4 | 16px |
| Button padding (y) | 2 | 8px |
| Card padding | 6 | 24px |
| Input padding (x) | 3 | 12px |
| Input padding (y) | 2 | 8px |
| Gap between items | 2-4 | 8-16px |
| Section spacing | 8-10 | 32-40px |
| Page margins | 4-8 | 16-32px |
| Heading margin-top | 8-10 | 32-40px |
| Paragraph spacing | 6 | 24px |
| List item margin | 2 | 8px |
| List indentation | 6 | 24px |

## Verified Spacing (Extracted from Figma)

| Token | Value | Source |
|-------|-------|--------|
| spacing/2 | 8px | Typography blockquote padding |
| spacing/4 | 16px | Table cell padding, button padding |
| spacing/6 | 24px | Paragraph spacing, list padding |
| spacing/8 | 32px | Heading spacing |
| spacing/10 | 40px | H2 top padding |
| spacing/32 | 128px | Section vertical padding |

## CSS Custom Properties

```css
:root {
  --spacing-0: 0;
  --spacing-px: 1px;
  --spacing-0-5: 0.125rem;
  --spacing-1: 0.25rem;
  --spacing-1-5: 0.375rem;
  --spacing-2: 0.5rem;
  --spacing-2-5: 0.625rem;
  --spacing-3: 0.75rem;
  --spacing-3-5: 0.875rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-7: 1.75rem;
  --spacing-8: 2rem;
  --spacing-9: 2.25rem;
  --spacing-10: 2.5rem;
  --spacing-11: 2.75rem;
  --spacing-12: 3rem;
  --spacing-14: 3.5rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;
  --spacing-28: 7rem;
  --spacing-32: 8rem;
}
```

## Tailwind Classes

```
p-0 p-px p-0.5 p-1 p-1.5 p-2 p-2.5 p-3 p-3.5 p-4 p-5 p-6 p-7 p-8 p-9 p-10 p-11 p-12
m-0 m-px m-0.5 m-1 m-1.5 m-2 m-2.5 m-3 m-3.5 m-4 m-5 m-6 m-7 m-8 m-9 m-10 m-11 m-12
gap-0 gap-px gap-0.5 gap-1 gap-1.5 gap-2 gap-2.5 gap-3 gap-3.5 gap-4 gap-5 gap-6 gap-8
```

---

## See Also

- **Related Tokens:**
  - [Breakpoints](./breakpoints.md) - Responsive spacing patterns
  - [Radii](./radii.md) - Border radius scale (follows similar progression)
  - [Typography](./typography.md) - Line heights that relate to spacing
- **Design System:**
  - [Themes](./themes.md) - Multi-theme system overview

---
*Last extracted: December 16, 2025*
