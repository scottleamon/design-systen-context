# Color Tokens

> [!IMPORTANT]
> **Multi-Theme System**: This design system supports **3 distinct themes** for 3 web properties:
> - **Member (Blue)**: Navy blue primary (`#19518B`) - Member portal
> - **Campus (Green)**: Forest green primary (`#487537`) - Campus portal  
> - **Admin (Neutral)**: Near black primary (`#18181B`) - Admin dashboard
>
> See [`themes.md`](./themes.md) for complete theme specifications and usage guidelines.

## Color System Overview

This design system uses CSS custom properties with semantic naming. Colors automatically adapt between light and dark modes **and across themes**.

The colors shown below represent the **Member (Blue) theme** as the default reference. For Campus (Green) and Admin (Neutral) theme colors, refer to [`themes.md`](./themes.md).

---

## Theme-Specific Primary Colors

| Theme | Primary (Light) | Primary (Dark) | Accent (Light) | Use Case |
|-------|----------------|----------------|----------------|----------|
| **Member** | `#19518B` Navy | `#529DDE` Light Blue | `#E4EEFA` Pale Blue | Member portal |
| **Campus** | `#487537` Green | `#84B771` Light Green | `#E8F4E4` Pale Green | Campus portal |
| **Admin** | `#18181B` Black | `#E4E4E7` Light Gray | `#F4F4F5` Light Gray | Admin dashboard |

---

## Primary Colors (Member Theme - Default)

| Token | CSS Variable | Light | Dark | Usage |
|-------|--------------|-------|------|-------|
| primary | `--base/primary` | **#19518b** | #529dde | Primary buttons bg, links, brand |
| primary-foreground | `--base/primary-foreground` | **#fafafa** | #09090b | Text on primary backgrounds |

**Primary Color: #19518b** (Deep blue - rgba(25, 81, 139, 1))

**Note**: This is the **Member theme** primary color. Campus uses `#487537` (green), Admin uses `#18181B` (neutral). See [`themes.md`](./themes.md).

## Secondary Colors (VERIFIED FROM FIGMA)

| Token | CSS Variable | Light | Dark | Usage |
|-------|--------------|-------|------|-------|
| secondary | `--base/secondary` | #f4f4f5 | #27272a | Secondary button backgrounds |
| secondary-foreground | `--base/secondary-foreground` | **#18181b** | #fafafa | Text on secondary backgrounds |

## Destructive Colors (Shared Across All Themes)

| Token | CSS Variable | Light | Dark | Usage |
|-------|--------------|-------|------|-------|
| destructive | `--base/destructive` | #dc2626 | #7f1d1d | Destructive button backgrounds |
| destructive-foreground | `--base/destructive-foreground` | **#fef2f2** | #fef2f2 | Text on destructive (light red tint) |

**Note**: Destructive colors are **identical across all 3 themes** for consistency in error/warning states.

## Base/Background Colors (Shared Across All Themes)

| Token | CSS Variable | Light | Dark | Usage |
|-------|--------------|-------|------|-------|
| background | `--base/background` | #ffffff | **#09090b** | Page backgrounds |
| foreground | `--base/foreground` | **#09090b** | **#fafafa** | Primary text |
| muted | `--base/muted` | **#f4f4f5** | **#27272a** | Muted backgrounds, table rows |
| muted-foreground | `--base/muted-foreground` | **#71717a** | #a1a1aa | Secondary text, placeholders |
| border | `--base/border` | **#e4e4e7** | **rgba(255,255,255,0.1)** | Borders, dividers |

**Note**: Background, foreground, muted, and border colors are **identical across all 3 themes**.

## Accent Colors (Theme-Specific)

| Token | Member (Blue) | Campus (Green) | Admin (Neutral) | Usage |
|-------|--------------|----------------|-----------------|-------|
| accent (light) | **#e4eefa** | **#e8f4e4** | **#f4f4f5** | Accent backgrounds |
| accent (dark) | #1e3a5f | #3f6431 | #3f3f46 | Dark mode accents |
| accent-foreground | #19518b | #487537 | #18181b | Text on accent backgrounds |

## Focus/Ring Colors (VERIFIED FROM FIGMA)

| Token | CSS Variable | Value | Usage |
|-------|--------------|-------|-------|
| ring | `--custom/outline` | #19518b (3px spread) | Focus ring on interactive elements |
| focus-default | `focus/default` | 3px spread, 0 blur | Button focus state |

## Icon Stroke Colors (VERIFIED FROM FIGMA)

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Primary | #19518b | rgba(25, 81, 139, 1) | Primary icon color |
| Light | #fafafa | rgba(250, 250, 250, 1) | Icons on dark backgrounds |
| Dark | #09090b | rgba(9, 9, 11, 1) | Icons on light backgrounds |

## Brand Color Scale

| Token | Value | Usage |
|-------|-------|-------|
| brand-50 | #e4eefa | Lightest brand (accent bg) |
| brand-100 | #c9ddf5 | Very light brand |
| brand-200 | #9fc4ed | Light brand |
| brand-300 | #75abe5 | Light-medium brand |
| brand-400 | #529dde | Medium brand (dark mode primary) |
| brand-500 | #3383c7 | Base brand |
| brand-600 | #19518b | **Primary brand color** |
| brand-700 | #144373 | Dark brand |
| brand-800 | #0f355b | Darker brand |
| brand-900 | #0a2743 | Darkest brand |

## Zinc Scale (Neutrals)

| Token | Value | Usage |
|-------|-------|-------|
| zinc-50 | #fafafa | Lightest (primary-foreground light) |
| zinc-100 | #f4f4f5 | Light backgrounds (muted, secondary) |
| zinc-200 | #e4e4e7 | Borders (light mode) |
| zinc-300 | #d4d4d8 | Disabled states |
| zinc-400 | #a1a1aa | Muted text (dark mode) |
| zinc-500 | #71717a | Muted text (light mode) |
| zinc-600 | #52525b | Secondary text |
| zinc-700 | #3f3f46 | Dark backgrounds |
| zinc-800 | #27272a | Darker backgrounds (muted dark) |
| zinc-900 | #18181b | Very dark (secondary-foreground) |
| zinc-950 | #09090b | Near black (foreground, dark bg) |

## Red Scale (Destructive)

| Token | Value | Usage |
|-------|-------|-------|
| red-50 | #fef2f2 | Destructive foreground |
| red-100 | #fee2e2 | Light error backgrounds |
| red-500 | #ef4444 | Error text |
| red-600 | #dc2626 | Destructive backgrounds |
| red-900 | #7f1d1d | Dark mode destructive |

## Button-Specific Colors

| Variant | Background | Text | Border |
|---------|------------|------|--------|
| Default | #19518b | #fafafa | none |
| Default (hover) | #19518b + 10% white overlay | #fafafa | none |
| Secondary | #f4f4f5 | #18181b | none |
| Destructive | #dc2626 | #fef2f2 | none |
| Outline | transparent | #19518b | #e4e4e7 |
| Ghost | transparent | #19518b | none |
| Link | transparent | #19518b | none |

## CSS Custom Properties

```css
:root {
  /* Primary - Brand Blue */
  --primary: 210 65% 32%;  /* #19518b */
  --primary-foreground: 0 0% 98%;  /* #fafafa */
  
  /* Secondary - Gray */
  --secondary: 240 4.8% 95.9%;  /* #f4f4f5 */
  --secondary-foreground: 240 5.9% 10%;  /* #18181b */
  
  /* Destructive - Red */
  --destructive: 0 72% 51%;  /* #dc2626 */
  --destructive-foreground: 0 86% 97%;  /* #fef2f2 */
  
  /* Base */
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;  /* #09090b */
  --muted: 240 4.8% 95.9%;  /* #f4f4f5 */
  --muted-foreground: 240 3.8% 46.1%;  /* #71717a */
  --border: 240 5.9% 90%;  /* #e4e4e7 */
  --input: 240 5.9% 90%;
  --ring: 210 65% 32%;  /* #19518b */
  
  /* Accent - Light blue */
  --accent: 214 65% 94%;  /* #e4eefa */
  --accent-foreground: 210 65% 32%;  /* #19518b */
  
  /* Card */
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  
  /* Popover */
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  
  /* Radius */
  --radius: 0.5rem;
}

.dark {
  /* Primary - Lighter blue for dark mode */
  --primary: 207 67% 60%;  /* #529dde */
  --primary-foreground: 240 10% 3.9%;  /* #09090b */
  
  /* Secondary */
  --secondary: 240 3.7% 15.9%;  /* #27272a */
  --secondary-foreground: 0 0% 98%;  /* #fafafa */
  
  /* Destructive */
  --destructive: 0 62.8% 30.6%;  /* #7f1d1d */
  --destructive-foreground: 0 86% 97%;  /* #fef2f2 */
  
  /* Base */
  --background: 240 10% 3.9%;  /* #09090b */
  --foreground: 0 0% 98%;  /* #fafafa */
  --muted: 240 3.7% 15.9%;  /* #27272a */
  --muted-foreground: 240 5% 64.9%;
  --border: 0 0% 100% / 0.1;  /* rgba(255,255,255,0.1) */
  --input: 240 3.7% 15.9%;
  --ring: 207 67% 60%;  /* #529dde */
  
  /* Accent */
  --accent: 210 50% 25%;  /* #1e3a5f */
  --accent-foreground: 0 0% 98%;
  
  /* Card */
  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;
  
  /* Popover */
  --popover: 240 10% 3.9%;
  --popover-foreground: 0 0% 98%;
}
```

## Tailwind Configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
      },
    },
  },
}
```

---

## See Also

- **Related Tokens:**
  - [Themes](./themes.md) - Complete theme specifications for Member/Campus/Admin
  - [Shadows](./shadows.md) - Elevation and border styles
- **Design Decisions:**
  - [Color System Rationale](../decisions/color-system.md) - Why these colors were chosen
  - [Multi-Theme Strategy](../decisions/multi-theme.md) - Why 3 themes exist

---
*Last extracted: December 16, 2025*
*Source: ShadcnDesign UI Kit - Button page*
