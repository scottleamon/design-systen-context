# Multi-Theme System

## Overview

This design system supports **3 distinct themes** for 3 different web properties. Each theme has its own brand colors while sharing common semantic tokens and component structure.

**IMPORTANT**: When building features, always clarify which property/theme you're targeting if the context is unclear.

---

## The 3 Themes

### 1. Member (Blue Theme)
**Property**: Member Portal  
**Primary Use**: Patient/member-facing features  
**Brand Identity**: Navy blue with trust and healthcare associations

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| **Primary** | `#19518B` (Navy Blue) | `#529DDE` (Light Blue) | Primary buttons, links, brand elements |
| **Accent** | `#E4EEFA` (Pale Blue) | `#19518B` (Navy Blue) | Accent backgrounds, highlights |
| **Accent Foreground** | `#19518B` (Navy Blue) | `#FAFAFA` (White) | Text on accent backgrounds |

**CSS Variable Names**:
- `--primary` → Navy blue in light, lighter blue in dark
- `--accent` → Pale blue accent backgrounds
- `--accent-foreground` → Navy blue text on accents

---

### 2. Campus (Green Theme)
**Property**: Campus Portal  
**Primary Use**: University/campus administrator features  
**Brand Identity**: Green with education and growth associations

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| **Primary** | `#487537` (Forest Green) | `#84B771` (Light Green) | Primary buttons, links, brand elements |
| **Accent** | `#E8F4E4` (Pale Green) | `#3F6431` (Dark Green) | Accent backgrounds, highlights |
| **Accent Foreground** | `#487537` (Forest Green) | `#FAFAFA` (White) | Text on accent backgrounds |

**CSS Variable Names**:
- `--primary` → Forest green in light, lighter green in dark
- `--accent` → Pale green accent backgrounds
- `--accent-foreground` → Forest green text on accents

---

### 3. Admin (Neutral Theme)
**Property**: Admin Dashboard  
**Primary Use**: Internal tools and system administration  
**Brand Identity**: Neutral grays with professional utility focus

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| **Primary** | `#18181B` (Near Black) | `#E4E4E7` (Light Gray) | Primary buttons, links, brand elements |
| **Accent** | `#F4F4F5` (Very Light Gray) | `#3F3F46` (Medium Gray) | Accent backgrounds, highlights |
| **Accent Foreground** | `#18181B` (Near Black) | `#FAFAFA` (White) | Text on accent backgrounds |

**CSS Variable Names**:
- `--primary` → Near black in light, light gray in dark
- `--accent` → Very light gray accent backgrounds
- `--accent-foreground` → Near black text on accents

---

## Shared Semantic Tokens

All 3 themes share these common semantic tokens (same values across themes):

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| **Destructive** | `#DC2626` (Red) | `#F87171` (Light Red) | Error states, destructive actions |
| **Background** | `#FFFFFF` (White) | `#09090B` (Near Black) | Page backgrounds |
| **Foreground** | `#09090B` (Near Black) | `#FAFAFA` (White) | Primary text |
| **Muted** | `#F4F4F5` (Light Gray) | `#27272A` (Dark Gray) | Muted backgrounds |
| **Muted Foreground** | `#71717A` (Gray) | `#A1A1AA` (Light Gray) | Secondary text |
| **Border** | `#E4E4E7` (Gray) | `rgba(255,255,255,0.1)` | Borders, dividers |

---

## Theme Comparison at a Glance

| Property | Primary Brand (Light) | Accent (Light) | Use Case |
|----------|----------------------|----------------|----------|
| **Member** | `#19518B` Navy Blue | `#E4EEFA` Pale Blue | Patient/member portal |
| **Campus** | `#487537` Forest Green | `#E8F4E4` Pale Green | University/campus portal |
| **Admin** | `#18181B` Near Black | `#F4F4F5` Light Gray | Internal admin tools |

---

## Implementation Strategy

### CSS Custom Properties

Each theme is implemented using CSS custom properties. The theme determines which values are assigned to the semantic tokens:

```css
/* Member Theme (Blue) */
.theme-member {
  --primary: 210 65% 32%;        /* #19518B */
  --accent: 214 65% 94%;          /* #E4EEFA */
  --accent-foreground: 210 65% 32%; /* #19518B */
}

/* Campus Theme (Green) */
.theme-campus {
  --primary: 100 36% 40%;         /* #487537 */
  --accent: 100 45% 92%;          /* #E8F4E4 */
  --accent-foreground: 100 36% 40%; /* #487537 */
}

/* Admin Theme (Neutral) */
.theme-admin {
  --primary: 240 6% 10%;          /* #18181B */
  --accent: 240 5% 96%;           /* #F4F4F5 */
  --accent-foreground: 240 6% 10%; /* #18181B */
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

*Last updated: February 4, 2026*  
*Source: Figma Design System - TimelyCare Kit*
