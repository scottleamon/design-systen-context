# Multi-Theme System

> [!IMPORTANT]
> For all color values, see [colors.md](./colors.md). This file describes the theme *system*, not individual values.

## Overview

This design system supports **3 distinct themes** for 3 different web properties. Each theme has its own brand colors while sharing common semantic tokens and component structure.

**IMPORTANT**: When building features, always clarify which property/theme you're targeting if the context is unclear.

> [!NOTE]
> **K-12 theme tokens are currently identical to Higher Ed** and will be updated with K-12-specific branding at a later date. The theme infrastructure is in place; only the color values will change.

---

## The 3 Themes

### 1. Higher Ed (Blue Theme)
**Property**: Higher Ed Portal (consolidates the former Member and Campus portals)
**Primary Use**: University/campus features, student wellness, member-facing features
**Brand Identity**: Navy blue with trust, healthcare, and education associations

For complete color values, see [colors.md](./colors.md#higher-ed-blue-theme).

---

### 2. K-12 (Blue Theme — placeholder)
**Property**: K-12 School Portal
**Primary Use**: K-12 school administrator and counselor features
**Brand Identity**: Currently uses Higher Ed branding; K-12-specific colors coming later

For complete color values, see [colors.md](./colors.md#k-12-blue-theme--placeholder).

---

### 3. Admin (Neutral Theme)
**Property**: Admin Dashboard
**Primary Use**: Internal tools and system administration
**Brand Identity**: Neutral grays with professional utility focus

For complete color values, see [colors.md](./colors.md#admin-neutral-theme).

---

## Token Ownership

| Tokens | Varies by Theme? | Source of Truth |
|--------|-------------------|-----------------|
| primary, accent, accent-foreground, accent-border | Yes — different per theme | [colors.md](./colors.md) |
| chart-1 through chart-5 | Yes — different per theme | [colors.md](./colors.md) |
| sidebar-* (background, foreground, primary, primary-foreground, accent, accent-foreground, border, ring) | Yes — can differ per theme | [colors.md](./colors.md) |
| ring | No — shared zinc neutral across themes | [colors.md](./colors.md) |
| destructive, background, foreground, muted, border, secondary | No — shared across themes | [colors.md](./colors.md) |
| spacing, typography, radii, shadows, motion | No | Individual token files |

---

## Implementation Strategy

### CSS Custom Properties

Each theme is implemented using CSS custom properties. The theme determines which values are assigned to the semantic tokens:

```css
/* Higher Ed Theme (Blue) */
.theme-higher-ed {
  --primary: 210 65% 32%;
  --accent: 214 65% 94%;
  --accent-foreground: 210 65% 32%;
  --accent-border: 214 60% 87%;
}

/* K-12 Theme (Blue — placeholder, same as Higher Ed) */
.theme-k12 {
  --primary: 210 65% 32%;
  --accent: 214 65% 94%;
  --accent-foreground: 210 65% 32%;
  --accent-border: 214 60% 87%;
}

/* Admin Theme (Neutral) */
.theme-admin {
  --primary: 240 6% 10%;
  --accent: 240 5% 96%;
  --accent-foreground: 240 6% 10%;
  --accent-border: 240 6% 90%;
}
```

### Usage in Components

Components use the semantic tokens, which automatically adapt to the active theme:

```tsx
// This button will be navy in Higher Ed/K-12, black in Admin
<Button variant="default">Primary Action</Button>

// This alert will have the correct accent color for each theme
<Alert variant="default">
  <AlertTitle>Notice</AlertTitle>
  <AlertDescription>Theme-aware accent background</AlertDescription>
</Alert>
```

---

## When to Use Which Theme

| Scenario | Theme | Rationale |
|----------|-------|-----------|
| Building higher ed / university features | **Higher Ed** | Higher Ed portal branding |
| Building K-12 school features | **K-12** | K-12 portal branding (placeholder) |
| Building internal admin tools | **Admin** | Neutral, utility-focused |
| Shared component library | **All** | Use semantic tokens, not hard-coded colors |
| Documentation examples | **Higher Ed** | Use Higher Ed as default, note theme-awareness |

---

## AI Agent Guidelines

When building features:

1. **Ask which property/theme** if the context is unclear
2. **Use semantic tokens** (`bg-primary`, `text-accent-foreground`) not hard-coded colors
3. **Never use arbitrary values** like `text-[#19518B]` - always use the token system
4. **Default to Higher Ed theme** for examples unless specified otherwise
5. **Document theme-specific behavior** when colors differ meaningfully

---

## Source Files

These themes are extracted from Figma Design Tokens:
- `Higher Ed.tokens.json`
- `K12.tokens.json`
- `X Admin.tokens.json`

For complete token definitions including all color scales, spacing, and typography, refer to the individual token files.

---

## See Also

- [Colors](./colors.md) — Complete color values and token definitions
- [Theme Strategy](../rules/theme-strategy.md) — When to use which theme
- [decisions/README.md](../decisions/README.md) — Governance process

---

*Last updated: February 13, 2026*
*Source: Figma Design System - TimelyCare Kit*
