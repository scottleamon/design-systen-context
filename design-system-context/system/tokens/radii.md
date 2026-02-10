# Border Radius Tokens

> [!TIP]
> For machine-parseable token values, see [`tokens.json`](./tokens.json).

## Radius Scale

| Token | CSS Variable | Value | Pixels | Usage |
|-------|--------------|-------|--------|-------|
| none | `--border-radius/rounded-none` | 0 | 0px | No rounding |
| sm | `--border-radius/rounded-sm` | 0.375rem | 6px | Subtle rounding (inline code, badges) |
| DEFAULT | `--border-radius/rounded` | 0.5rem | 8px | Default rounding |
| md | `--border-radius/rounded-md` | 0.5rem | 8px | Medium rounding (filled icons, inputs) |
| lg | `--border-radius/rounded-lg` | 0.625rem | 10px | Large rounding (cards, modals) |
| xl | `--border-radius/rounded-xl` | 0.875rem | 14px | Extra large rounding (containers) |
| 2xl | `--border-radius/rounded-2xl` | 1rem | 16px | 2X large rounding |
| 3xl | `--border-radius/rounded-3xl` | 1.5rem | 24px | 3X large rounding |
| full | `--border-radius/rounded-full` | 9999px | 9999px | Circular/pill shapes |

> [!NOTE]
> `rounded` (DEFAULT) and `rounded-md` both resolve to **8px** in this design system,
> as verified from Figma. The standard shadcn/ui Tailwind config uses
> `calc(var(--radius) - 2px)` for `md` which would compute to 6px with the default
> `--radius: 0.5rem`. Our system overrides this so both produce 8px.
> **FLAGGED:** Verify against the actual Tailwind config in the codebase.

## Verified Radii (Extracted from Figma)

| Token | Value | Source |
|-------|-------|--------|
| rounded-sm | 6px | Inline code background |
| rounded-md | 8px | Filled icon containers |
| rounded-lg | 10px | Code blocks |
| rounded-xl | 14px | Dark mode containers |

## Common Usage Patterns

| Component | Token | Value |
|-----------|-------|-------|
| Buttons | md | 8px |
| Inputs | md | 8px |
| Cards | lg | 10px |
| Modals | lg-xl | 10-14px |
| Badges | sm | 6px |
| Inline code | sm | 6px |
| Avatars | full | 9999px |
| Pills/tags | full | 9999px |
| Tooltips | md | 8px |
| Dropdowns | md | 8px |
| Containers | xl | 14px |

## CSS Custom Properties

```css
:root {
  --radius: 0.5rem; /* Base radius variable used by shadcn/ui */
  
  --border-radius-none: 0;
  --border-radius-sm: calc(var(--radius) - 4px);    /* 6px */
  --border-radius: var(--radius);                    /* 8px */
  --border-radius-md: calc(var(--radius));          /* 8px */
  --border-radius-lg: calc(var(--radius) + 2px);    /* 10px */
  --border-radius-xl: calc(var(--radius) + 6px);    /* 14px */
  --border-radius-2xl: calc(var(--radius) + 8px);   /* 16px */
  --border-radius-3xl: calc(var(--radius) + 16px);  /* 24px */
  --border-radius-full: 9999px;
}
```

## Tailwind Configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
}
```

## Tailwind Classes

```
rounded-none     /* 0px */
rounded-sm       /* 6px */
rounded          /* 8px */
rounded-md       /* 8px */
rounded-lg       /* 10px */
rounded-xl       /* 14px */
rounded-2xl      /* 16px */
rounded-3xl      /* 24px */
rounded-full     /* 9999px (circular) */
```

---

## See Also

- **Related Tokens:**
  - [Spacing](./spacing.md) - Spacing scale (related progression)
  - [Shadows](./shadows.md) - Often paired with radius for elevation
- **Design System:**
  - [Themes](./themes.md) - Multi-theme system overview

---
*Last extracted: December 16, 2025*
