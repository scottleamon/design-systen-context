# Color Tokens

> [!TIP]
> For machine-parseable token values, see [`tokens.json`](./tokens.json).

> [!IMPORTANT]
> **Multi-Theme System**: This design system supports **3 distinct themes** for 3 web properties:
> - **Higher Ed (Blue)**: Navy blue primary (`#19518B`) - Higher Ed portal (consolidates former Member + Campus)
> - **K-12 (Blue)**: Navy blue primary (`#19518B`) - K-12 portal *(placeholder — K-12-specific colors coming later)*
> - **Admin (Neutral)**: Near black primary (`#18181B`) - Admin dashboard
>
> See [`themes.md`](./themes.md) for complete theme specifications and usage guidelines.

## Color System Overview

This design system uses CSS custom properties with semantic naming. Colors automatically adapt between light and dark modes **and across themes**.

The colors shown below represent the **Higher Ed (Blue) theme** as the default reference. For Admin (Neutral) theme colors, refer to [`themes.md`](./themes.md).

---

## Theme-Specific Primary Colors

| Theme | Primary (Light) | Primary (Dark) | Accent (Light) | Use Case |
|-------|----------------|----------------|----------------|----------|
| **Higher Ed** | `#19518B` Navy | `#529DDE` Light Blue | `#E4EEFA` Pale Blue | Higher Ed portal |
| **K-12** | `#19518B` Navy | `#529DDE` Light Blue | `#E4EEFA` Pale Blue | K-12 portal *(placeholder)* |
| **Admin** | `#18181B` Black | `#E4E4E7` Light Gray | `#F4F4F5` Light Gray | Admin dashboard |

---

## Complete Theme-Specific Tokens (Per-Theme Values)

These tokens change based on the active theme. All other tokens are shared across themes.

### Higher Ed (Blue) Theme
| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| primary | `#19518B` (Navy Blue) | `#529DDE` (Light Blue) |
| primary-foreground | `#FAFAFA` (White) | `#18181B` (Near Black) |
| accent | `#E4EEFA` (Pale Blue) | `#19518B` (Navy Blue) |
| accent-foreground | `#19518B` (Navy Blue) | `#FAFAFA` (White) |
| accent-border | `#C3DBF4` (Light Blue) | `#8EBFEB` (Medium Blue) |

### K-12 (Blue) Theme — placeholder
| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| primary | `#19518B` (Navy Blue) | `#529DDE` (Light Blue) |
| primary-foreground | `#FAFAFA` (White) | `#18181B` (Near Black) |
| accent | `#E4EEFA` (Pale Blue) | `#19518B` (Navy Blue) |
| accent-foreground | `#19518B` (Navy Blue) | `#FAFAFA` (White) |
| accent-border | `#C3DBF4` (Light Blue) | `#8EBFEB` (Medium Blue) |

> *K-12 values are identical to Higher Ed and will be updated with K-12-specific branding later.*

### Admin (Neutral) Theme
| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| primary | `#18181B` (Near Black) | `#E4E4E7` (Light Gray) |
| primary-foreground | `#FAFAFA` (White) | `#18181B` (Near Black) |
| accent | `#F4F4F5` (Very Light Gray) | `#3F3F46` (Medium Gray) |
| accent-foreground | `#18181B` (Near Black) | `#FAFAFA` (White) |
| accent-border | `#E4E4E7` (Zinc 200) | `#D4D4D8` (Zinc 300) |

---

## Ring / Focus Colors (Shared Across All Themes)

> [!NOTE]
> Ring color now uses a **shared zinc neutral** across all themes, not the theme's primary color.

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| ring | `#A1A1AA` (Zinc 400) | `#71717A` (Zinc 500) | Focus ring on interactive elements |
| sidebar-ring | `#A1A1AA` (Zinc 400) | `#52525B` (Zinc 600) | Focus ring in sidebar context |

---

## Chart Colors (Per-Theme Values)

Chart colors vary by theme to ensure brand consistency in data visualizations.

### Higher Ed & K-12 Chart Colors
| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| chart-1 | `#19518B` (Navy) | `#2C81CB` (Medium Blue) |
| chart-2 | `#31B0CD` (Teal) | `#B1E6F0` (Light Teal) |
| chart-3 | `#EC570A` (Orange) | `#FB7314` (Light Orange) |
| chart-4 | `#A5240F` (Dark Red) | `#C8270D` (Red) |
| chart-5 | `#E51853` (Cherry) | `#F93A68` (Light Cherry) |

### Admin Chart Colors
| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| chart-1 | `#19518B` (Navy) | `#2C81CB` (Medium Blue) |
| chart-2 | `#487537` (Green) | `#84B771` (Light Green) |
| chart-3 | `#EC570A` (Orange) | `#FB7314` (Light Orange) |
| chart-4 | `#A5240F` (Dark Red) | `#C8270D` (Red) |
| chart-5 | `#E51853` (Cherry) | `#F93A68` (Light Cherry) |

> **Note**: Admin chart-2 uses green (`#487537`) instead of teal, providing visual distinction from Higher Ed/K-12 charts.

---

## Sidebar Colors (Per-Theme Values)

Sidebar tokens are used by the Sidebar component and adapt per theme.

### Higher Ed & K-12 Sidebar Colors
| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| sidebar-background | `#FFFFFF` | `#18181B` |
| sidebar-foreground | `#71717A` (Zinc 500) | `#FAFAFA` |
| sidebar-primary | `#18181B` (Zinc 900) | `#19518B` (Navy) |
| sidebar-primary-foreground | `#FAFAFA` | `#FAFAFA` |
| sidebar-accent | `#E4EEFA` (Pale Blue) | `#27272A` (Zinc 800) |
| sidebar-accent-foreground | `#19518B` (Navy) | `#FAFAFA` |
| sidebar-border | `#E4E4E7` (Zinc 200) | `#3F3F46` (Zinc 700) |
| sidebar-ring | `#A1A1AA` (Zinc 400) | `#52525B` (Zinc 600) |

### Admin Sidebar Colors
| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| sidebar-background | `#FFFFFF` | `#18181B` |
| sidebar-foreground | `#71717A` (Zinc 500) | `#FAFAFA` |
| sidebar-primary | `#18181B` (Zinc 900) | `#19518B` (Navy) |
| sidebar-primary-foreground | `#FAFAFA` | `#FAFAFA` |
| sidebar-accent | `#F4F4F5` (Zinc 100) | `#27272A` (Zinc 800) |
| sidebar-accent-foreground | `#18181B` (Zinc 900) | `#FAFAFA` |
| sidebar-border | `#E4E4E7` (Zinc 200) | `#3F3F46` (Zinc 700) |
| sidebar-ring | `#A1A1AA` (Zinc 400) | `#52525B` (Zinc 600) |

---

## Primary Colors (Higher Ed Theme - Default)

| Token | CSS Variable | Light | Dark | Usage |
|-------|--------------|-------|------|-------|
| primary | `--base/primary` | **#19518b** | #529dde | Primary buttons bg, links, brand |
| primary-foreground | `--base/primary-foreground` | **#fafafa** | #18181b | Text on primary backgrounds |

**Primary Color: #19518b** (Deep blue - rgba(25, 81, 139, 1))

**Note**: This is the **Higher Ed theme** primary color. K-12 currently shares this value. Admin uses `#18181B` (neutral). See [`themes.md`](./themes.md).

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
| background | `--base/background` | #fafafa | **#09090b** | Page backgrounds |
| foreground | `--base/foreground` | **#09090b** | **#fafafa** | Primary text |
| muted | `--base/muted` | **#f4f4f5** | **#27272a** | Muted backgrounds, table rows |
| muted-foreground | `--base/muted-foreground` | **#71717a** | #a1a1aa | Secondary text, placeholders |
| border | `--base/border` | **#e4e4e7** | **rgba(255,255,255,0.1)** | Borders, dividers |

**Note**: Background, foreground, muted, and border colors are **identical across all 3 themes**.

## Accent Colors (Theme-Specific)

| Token | Higher Ed (Blue) | K-12 (Blue) | Admin (Neutral) | Usage |
|-------|-----------------|-------------|-----------------|-------|
| accent (light) | **#e4eefa** | **#e4eefa** | **#f4f4f5** | Accent backgrounds |
| accent (dark) | #19518b | #19518b | #3f3f46 | Dark mode accents |
| accent-foreground | #19518b | #19518b | #18181b | Text on accent backgrounds |
| accent-border (light) | #c3dbf4 | #c3dbf4 | #e4e4e7 | Accent-colored borders |
| accent-border (dark) | #8ebfeb | #8ebfeb | #d4d4d8 | Dark mode accent borders |

## Focus/Ring Colors (VERIFIED FROM FIGMA)

> [!NOTE]
> Ring color uses `--ring` which now maps to a **shared zinc neutral** across all themes.
> Light: #A1A1AA (Zinc 400) | Dark: #71717A (Zinc 500)

| Token | CSS Variable | Value | Usage |
|-------|--------------|-------|-------|
| ring | `--custom/outline` | #A1A1AA (light) / #71717A (dark) | Focus ring on interactive elements |
| focus-default | `focus/default` | 3px spread, 0 blur | Button focus state |

## Icon Stroke Colors (VERIFIED FROM FIGMA)

> [!NOTE]
> The Primary icon color adapts to the active theme's primary color.
> Higher Ed/K-12: #19518b | Admin: #18181b

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Primary | #19518b | rgba(25, 81, 139, 1) | Primary icon color |
| Light | #fafafa | rgba(250, 250, 250, 1) | Icons on dark backgrounds |
| Dark | #09090b | rgba(9, 9, 11, 1) | Icons on light backgrounds |

## Brand Color Scale

> [!NOTE]
> The brand scale below is for the **Higher Ed (Blue)** theme.
> K-12 currently shares this scale. Admin does not have an equivalent full brand scale —
> it uses its primary + accent colors directly.

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
| zinc-400 | #a1a1aa | Ring/focus (light mode), muted text (dark mode) |
| zinc-500 | #71717a | Ring/focus (dark mode), muted text (light mode) |
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

> [!NOTE]
> Button colors use semantic tokens that automatically adapt to the active theme.
> The hex values shown below are for the **Higher Ed (Blue)** theme as reference.

| Variant | Background | Text | Border |
|---------|------------|------|--------|
| Default | `bg-primary` (Higher Ed: #19518b) | `text-primary-foreground` (#fafafa) | none |
| Default (hover) | `bg-primary/90` | `text-primary-foreground` (#fafafa) | none |
| Secondary | `bg-secondary` (#f4f4f5) | `text-secondary-foreground` (#18181b) | none |
| Destructive | `bg-destructive` (#dc2626) | `text-destructive-foreground` (#fef2f2) | none |
| Outline | `bg-transparent` | `text-primary` (Higher Ed: #19518b) | `border` (#e4e4e7) |
| Ghost | `bg-transparent` | `text-primary` (Higher Ed: #19518b) | none |
| Link | `bg-transparent` | `text-primary` (Higher Ed: #19518b) | none |

## CSS Custom Properties

```css
:root {
  /* Primary - Brand Blue (Higher Ed default) */
  --primary: 210 65% 32%;  /* #19518b */
  --primary-foreground: 0 0% 98%;  /* #fafafa */
  
  /* Secondary - Gray */
  --secondary: 240 4.8% 95.9%;  /* #f4f4f5 */
  --secondary-foreground: 240 5.9% 10%;  /* #18181b */
  
  /* Destructive - Red */
  --destructive: 0 72% 51%;  /* #dc2626 */
  --destructive-foreground: 0 86% 97%;  /* #fef2f2 */
  
  /* Base */
  --background: 0 0% 98%;  /* #fafafa */
  --foreground: 240 10% 3.9%;  /* #09090b */
  --muted: 240 4.8% 95.9%;  /* #f4f4f5 */
  --muted-foreground: 240 3.8% 46.1%;  /* #71717a */
  --border: 240 5.9% 90%;  /* #e4e4e7 */
  --input: 240 5.9% 90%;
  --ring: 240 4% 65%;  /* #a1a1aa */
  
  /* Accent - Light blue (Higher Ed) */
  --accent: 214 65% 94%;  /* #e4eefa */
  --accent-foreground: 210 65% 32%;  /* #19518b */
  --accent-border: 214 60% 87%;  /* #c3dbf4 */
  
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
  --primary-foreground: 240 6% 10%;  /* #18181b */
  
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
  --ring: 240 4% 46%;  /* #71717a */
  
  /* Accent */
  --accent: 210 65% 32%;  /* #19518b */
  --accent-foreground: 0 0% 98%;
  --accent-border: 207 55% 74%;  /* #8ebfeb */
  
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
          border: 'hsl(var(--accent-border))',
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
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
    },
  },
}
```

---

## See Also

- [Themes](./themes.md) — Theme system, strategy, and implementation
- [Shadows](./shadows.md) — Elevation and border styles

---
*Last updated: February 13, 2026*
*Source: Figma Design System - TimelyCare Kit*
