# Multi-Theme System

> [!IMPORTANT]
> For all color values, see [colors.md](./colors.md). This file describes the theme *system*, not individual values.

## Overview

This design system supports **3 distinct themes** for 3 different web properties. Each theme has its own brand colors while sharing common semantic tokens and component structure.

**IMPORTANT**: When building features, always clarify which property/theme you're targeting if the context is unclear.

---

## The 3 Themes

### 1. Member (Blue Theme)
**Property**: Member Portal
**Primary Use**: Patient/member-facing features
**Brand Identity**: Navy blue with trust and healthcare associations

For complete color values, see [colors.md](./colors.md#member-blue-theme).

---

### 2. Campus (Green Theme)
**Property**: Campus Portal
**Primary Use**: University/campus administrator features
**Brand Identity**: Green with education and growth associations

For complete color values, see [colors.md](./colors.md#campus-green-theme).

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
| primary, accent, accent-foreground, ring | Yes — different per theme | [colors.md](./colors.md) |
| destructive, background, foreground, muted, border, secondary | No — shared across themes | [colors.md](./colors.md) |
| spacing, typography, radii, shadows, motion | No | Individual token files |

---

## Implementation Strategy

### CSS Custom Properties

Each theme is implemented using CSS custom properties. The theme determines which values are assigned to the semantic tokens:

```css
/* Member Theme (Blue) */
.theme-member {
  --primary: 210 65% 32%;
  --accent: 214 65% 94%;
  --accent-foreground: 210 65% 32%;
}

/* Campus Theme (Green) */
.theme-campus {
  --primary: 100 36% 40%;
  --accent: 100 45% 92%;
  --accent-foreground: 100 36% 40%;
}

/* Admin Theme (Neutral) */
.theme-admin {
  --primary: 240 6% 10%;
  --accent: 240 5% 96%;
  --accent-foreground: 240 6% 10%;
}
```

### Usage in Components

Components use the semantic tokens, which automatically adapt to the active theme:

```tsx
// This button will be navy in Member, green in Campus, black in Admin
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
| Building patient-facing features | **Member** | Member portal branding |
| Building university admin features | **Campus** | Campus portal branding |
| Building internal admin tools | **Admin** | Neutral, utility-focused |
| Shared component library | **All** | Use semantic tokens, not hard-coded colors |
| Documentation examples | **Member** | Use Member as default, note theme-awareness |

---

## AI Agent Guidelines

When building features:

1. **Ask which property/theme** if the context is unclear
2. **Use semantic tokens** (`bg-primary`, `text-accent-foreground`) not hard-coded colors
3. **Never use arbitrary values** like `text-[#19518B]` - always use the token system
4. **Default to Member theme** for examples unless specified otherwise
5. **Document theme-specific behavior** when colors differ meaningfully

---

## Source Files

These themes are extracted from Figma Design Tokens:
- `Member - blue.tokens.json`
- `Campus - green.tokens.json`
- `Admin.tokens.json`

For complete token definitions including all color scales, spacing, and typography, refer to the individual token files.

---

## See Also

- [Colors](./colors.md) — Complete color values and token definitions
- [Theme Strategy](../rules/theme-strategy.md) — When to use which theme
- [decisions/README.md](../decisions/README.md) — Governance process

---

*Last updated: February 9, 2026*
*Source: Figma Design System - TimelyCare Kit*
