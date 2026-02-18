---
description: Guidelines for theme selection and switching across 3 web properties
globs: ["**/*.tsx", "**/*.ts", "**/*.css"]
alwaysApply: false
---

# Theme Strategy & Selection Guide

## Overview

This design system supports **3 distinct themes** for 3 different web properties. This document provides guidance on selecting the appropriate theme and implementing theme switching.

> [!NOTE]
> **K-12 theme tokens are currently identical to Higher Ed** and will be updated with K-12-specific branding at a later date. The theme infrastructure is in place; only the color values will change.

---

## The 3 Properties & Their Themes

### 1. Higher Ed (Blue Theme)
**Target Users**: University students, campus administrators, staff, members  
**Brand Identity**: Trustworthy, healthcare-focused, education-oriented  
**Primary Color**: `#19518B` (Navy Blue)  
**Routes**: `/higher-ed/*`, `/campus/*`, `/member/*`, `/app/*`

**When to use**:
- Building higher education portal features
- University/campus administrator tools
- Student wellness management
- Member self-service portals
- Appointment booking interfaces
- Campus analytics and reporting

### 2. K-12 (Blue Theme — placeholder)
**Target Users**: K-12 school administrators, counselors, staff  
**Brand Identity**: Youth-focused, supportive, accessible  
**Primary Color**: `#19518B` (Navy Blue) — *placeholder; K-12-specific colors coming later*  
**Routes**: `/k12/*`, `/school/*`

**When to use**:
- Building K-12 school portal features
- School counselor and staff tools
- Student support management
- K-12 analytics and reporting

> [!IMPORTANT]
> K-12 currently shares Higher Ed's token values. When K-12-specific tokens are released, components built with semantic tokens (`bg-primary`, etc.) will automatically adapt — no code changes needed.

### 3. Admin Dashboard (Neutral Theme)
**Target Users**: Internal staff, system administrators  
**Brand Identity**: Professional, utility-focused, efficient  
**Primary Color**: `#18181B` (Near Black)  
**Routes**: `/admin/*`, `/internal/*`, `/system/*`

**When to use**:
- Building internal admin tools
- System configuration interfaces
- User management features
- Analytics and reporting dashboards
- Internal operations tools

---

## Theme Selection Decision Tree

```
┌─────────────────────────────────────┐
│ Who is the primary user?            │
└──────────────┬──────────────────────┘
               │
       ┌───────┴────────┬──────────────┐
       │                │              │
       ▼                ▼              ▼
  Higher Ed         K-12           Internal
  Users             Users          Staff
       │                │              │
       ▼                ▼              ▼
  ┌──────────┐   ┌──────────┐   ┌──────────┐
  │ HIGHER   │   │   K-12   │   │  ADMIN   │
  │ ED (Blue)│   │  (Blue)  │   │ (Neutral)│
  └──────────┘   └──────────┘   └──────────┘
```

---

## Implementation Patterns

### Pattern 1: Route-Based Theme Selection (Recommended)

Automatically select theme based on the URL route:

```tsx
// app/layout.tsx or theme provider
import { usePathname } from 'next/navigation'

function getThemeFromPath(pathname: string): 'higher-ed' | 'k12' | 'admin' {
  if (pathname.startsWith('/k12') || pathname.startsWith('/school')) {
    return 'k12'
  }
  if (pathname.startsWith('/admin') || pathname.startsWith('/internal')) {
    return 'admin'
  }
  return 'higher-ed' // Default to Higher Ed theme
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const theme = getThemeFromPath(pathname)
  
  return (
    <div className={`theme-${theme}`}>
      {children}
    </div>
  )
}
```

### Pattern 2: Environment-Based Theme Selection

Select theme based on subdomain or environment:

```tsx
// lib/theme.ts
export function getThemeFromEnvironment(): 'higher-ed' | 'k12' | 'admin' {
  const hostname = window.location.hostname
  
  if (hostname.includes('k12') || hostname.includes('school')) {
    return 'k12'
  }
  if (hostname.includes('admin') || hostname.includes('internal')) {
    return 'admin'
  }
  return 'higher-ed'
}
```

### Pattern 3: User Context-Based Theme Selection

Select theme based on the logged-in user's role:

```tsx
// lib/theme.ts
export function getThemeFromUser(user: User): 'higher-ed' | 'k12' | 'admin' {
  if (user.role === 'k12_admin' || user.role === 'counselor') {
    return 'k12'
  }
  if (user.role === 'system_admin' || user.role === 'internal') {
    return 'admin'
  }
  return 'higher-ed'
}
```

---

## CSS Theme Implementation

### Setup CSS Variables for Each Theme

```css
/* globals.css */

/* Default/Higher Ed Theme (Blue) */
:root,
.theme-higher-ed {
  --primary: 210 65% 32%;          /* #19518B */
  --primary-foreground: 0 0% 98%;  /* #FAFAFA */
  --accent: 214 65% 94%;           /* #E4EEFA */
  --accent-foreground: 210 65% 32%; /* #19518B */
  --accent-border: 214 60% 87%;    /* #C3DBF4 */
  --ring: 240 4% 65%;              /* #A1A1AA */
  
  /* Shared tokens */
  --background: 0 0% 98%;          /* #FAFAFA */
  --foreground: 240 10% 3.9%;
  --destructive: 0 84.2% 60.2%;
  --muted: 240 4.8% 95.9%;
  --border: 240 5.9% 90%;
}

/* K-12 Theme (Blue — placeholder, same as Higher Ed) */
.theme-k12 {
  --primary: 210 65% 32%;          /* #19518B */
  --primary-foreground: 0 0% 98%;  /* #FAFAFA */
  --accent: 214 65% 94%;           /* #E4EEFA */
  --accent-foreground: 210 65% 32%; /* #19518B */
  --accent-border: 214 60% 87%;    /* #C3DBF4 */
  --ring: 240 4% 65%;              /* #A1A1AA */
}

/* Admin Theme (Neutral) */
.theme-admin {
  --primary: 240 6% 10%;           /* #18181B */
  --primary-foreground: 0 0% 98%;  /* #FAFAFA */
  --accent: 240 5% 96%;            /* #F4F4F5 */
  --accent-foreground: 240 6% 10%; /* #18181B */
  --accent-border: 240 6% 90%;     /* #E4E4E7 */
  --ring: 240 4% 65%;              /* #A1A1AA */
}

/* Dark mode variants */
.dark.theme-higher-ed,
.dark.theme-k12 {
  --primary: 207 67% 60%;          /* #529DDE */
  --ring: 240 4% 46%;              /* #71717A */
}

.dark.theme-admin {
  --primary: 240 5% 90%;           /* #E4E4E7 */
  --ring: 240 4% 46%;              /* #71717A */
}
```

---

## Component Usage Guidelines

### Using Semantic Tokens (Recommended)

Components should always use semantic tokens, which automatically adapt to the active theme:

```tsx
// ✅ CORRECT - Theme-aware
<Button variant="default">Action</Button>
<div className="bg-primary text-primary-foreground">Primary element</div>
<Alert className="bg-accent text-accent-foreground">Notice</Alert>
```

### Avoiding Hard-Coded Colors

```tsx
// ❌ WRONG - Hard-coded to Higher Ed theme
<div className="bg-[#19518B]">This is always blue</div>

// ✅ CORRECT - Use semantic tokens
<div className="bg-primary">Adapts to theme</div>
<Button className="text-primary">Adapts to theme</Button>
```

---

## Admin Shell Header (Required)

All Admin shell pages must use the sticky header pattern from `system/patterns/layouts.md`:
- `sticky top-0 z-50`
- `bg-background/95 backdrop-blur`
- `h-16` with `border-b`

---

## Shared Component Library

When building shared components that work across all themes:

1. **Always use semantic tokens**: `bg-primary`, `text-accent-foreground`, etc.
2. **Test in all 3 themes**: Verify the component looks good in Higher Ed, K-12, and Admin
3. **Document theme-specific behavior**: If colors affect meaning, document it
4. **Avoid brand-specific terminology**: Use "primary" not "blue" in code/docs

### Example: Theme-Aware Alert Component

```tsx
// components/ui/alert.tsx
// This component automatically adapts to any theme
export function Alert({ children, variant = "default" }: AlertProps) {
  return (
    <div className={cn(
      "rounded-lg border p-4",
      variant === "default" && "bg-accent text-accent-foreground",
      variant === "destructive" && "bg-destructive text-destructive-foreground"
    )}>
      {children}
    </div>
  )
}
```

---

## AI Agent Guidelines

When building features, AI agents should:

### 1. Always Ask About Theme Context
If the target property/theme is unclear, ask:
- "Which property is this feature for? (Higher Ed/K-12/Admin)"
- "Should this use the Higher Ed (blue), K-12 (blue), or Admin (neutral) theme?"

### 2. Use Semantic Tokens, Not Colors
Never use hard-coded colors:
```tsx
// ❌ DON'T
<Button className="bg-[#19518B]">

// ✅ DO
<Button variant="default">
```

### 3. Default to Higher Ed Theme for Examples
When showing examples without context, default to Higher Ed theme and note:
```tsx
// Example using Higher Ed theme (blue)
// For K-12 or Admin, the primary color will adapt
<Button variant="default">Primary Action</Button>
```

### 4. Document Theme-Specific Behavior
If a feature behaves differently per theme, document it:
```md
**Theme Behavior**:
- Higher Ed: Navy blue accent for notifications
- K-12: Navy blue accent (placeholder — will update)
- Admin: Gray accent for notifications
```

---

## Testing Themes

### Manual Testing
To test a component in all 3 themes:

```tsx
// Test harness component
export function ThemeTestHarness({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-8">
      <div className="theme-higher-ed p-8 border">
        <h3 className="mb-4">Higher Ed Theme</h3>
        {children}
      </div>
      <div className="theme-k12 p-8 border">
        <h3 className="mb-4">K-12 Theme</h3>
        {children}
      </div>
      <div className="theme-admin p-8 border">
        <h3 className="mb-4">Admin Theme</h3>
        {children}
      </div>
    </div>
  )
}
```

### Automated Testing
When writing tests, consider testing components in multiple theme contexts:

```tsx
describe('Button', () => {
  it('renders with correct theme colors', () => {
    const themes = ['higher-ed', 'k12', 'admin']
    
    themes.forEach(theme => {
      const { container } = render(
        <div className={`theme-${theme}`}>
          <Button variant="default">Test</Button>
        </div>
      )
      // Assert theme-specific behavior
    })
  })
})
```

---

## Migration Guide

### If You Have Existing Hard-Coded Colors

1. **Audit the codebase** for hard-coded color values:
   ```bash
   # Find hard-coded colors
   grep -r "#19518B" src/
   grep -r "text-\[#" src/
   ```

2. **Replace with semantic tokens**:
   - `#19518B` → `bg-primary` or `text-primary`
   - `#E4EEFA` → `bg-accent`
   - Hard-coded colors → Tailwind semantic classes

3. **Test in all themes** to ensure nothing breaks

### If You Have Old Theme Class Names

Replace old theme class names with new ones:
- `.theme-member` → `.theme-higher-ed`
- `.theme-campus` → `.theme-higher-ed` (Campus merged into Higher Ed)
- `.theme-admin` → `.theme-admin` (unchanged)

---

## Common Questions

### Q: Can a single app use multiple themes?
**A**: Yes! Use route-based or context-based theme selection to switch themes within the same application.

### Q: Should I create theme-specific components?
**A**: No. Build components using semantic tokens so they work across all themes. Only create theme-specific variants if the functionality truly differs.

### Q: What if I need a color that's not in the theme?
**A**: Add it to the theme's token definitions rather than hard-coding it. Maintain the semantic token system.

### Q: How do I preview all themes during development?
**A**: Use the `ThemeTestHarness` component shown above, or add theme switcher UI in development mode.

### Q: Why do Higher Ed and K-12 look the same?
**A**: K-12 currently uses placeholder tokens identical to Higher Ed. K-12-specific branding colors will be introduced in a future update. Components built with semantic tokens will automatically adapt when the K-12 tokens change.

---

## Summary

| Decision Point | Recommendation |
|---------------|----------------|
| **Route pattern** | Use `/higher-ed/*`, `/k12/*`, `/admin/*` |
| **Component styling** | Always use semantic tokens (`bg-primary`, etc.) |
| **Default theme** | Higher Ed (blue) for examples and defaults |
| **Testing** | Verify components in all 3 themes |
| **New colors** | Add to theme tokens, don't hard-code |

---

*See also*: [`themes.md`](../tokens/themes.md) for complete theme specifications  
*Last updated*: February 13, 2026
