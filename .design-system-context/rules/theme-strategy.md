---
description: Guidelines for theme selection and switching across 3 web properties
globs: ["**/*.tsx", "**/*.ts", "**/*.css"]
alwaysApply: false
---

# Theme Strategy & Selection Guide

## Overview

This design system supports **3 distinct themes** for 3 different web properties. This document provides guidance on selecting the appropriate theme and implementing theme switching.

---

## The 3 Properties & Their Themes

### 1. Member Portal (Blue Theme)
**Target Users**: Patients, members, end-users  
**Brand Identity**: Trustworthy, healthcare-focused, accessible  
**Primary Color**: `#19518B` (Navy Blue)  
**Routes**: `/member/*`, `/patient/*`, `/app/*`

**When to use**:
- Building patient-facing features
- Member self-service portals
- Appointment booking interfaces
- Health record access
- Member communication features

### 2. Campus Portal (Green Theme)
**Target Users**: University administrators, campus staff  
**Brand Identity**: Educational, growth-oriented, collaborative  
**Primary Color**: `#487537` (Forest Green)  
**Routes**: `/campus/*`, `/university/*`, `/staff/*`

**When to use**:
- Building campus administrator features
- University staff tools
- Student wellness management
- Campus analytics and reporting
- Staff communication features

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
  Patients/        University      Internal
  Members          Staff           Staff
       │                │              │
       ▼                ▼              ▼
  ┌─────────┐    ┌──────────┐   ┌──────────┐
  │ MEMBER  │    │  CAMPUS  │   │  ADMIN   │
  │  (Blue) │    │ (Green)  │   │ (Neutral)│
  └─────────┘    └──────────┘   └──────────┘
```

---

## Implementation Patterns

### Pattern 1: Route-Based Theme Selection (Recommended)

Automatically select theme based on the URL route:

```tsx
// app/layout.tsx or theme provider
import { usePathname } from 'next/navigation'

function getThemeFromPath(pathname: string): 'member' | 'campus' | 'admin' {
  if (pathname.startsWith('/campus') || pathname.startsWith('/university')) {
    return 'campus'
  }
  if (pathname.startsWith('/admin') || pathname.startsWith('/internal')) {
    return 'admin'
  }
  return 'member' // Default to member theme
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
export function getThemeFromEnvironment(): 'member' | 'campus' | 'admin' {
  const hostname = window.location.hostname
  
  if (hostname.includes('campus') || hostname.includes('university')) {
    return 'campus'
  }
  if (hostname.includes('admin') || hostname.includes('internal')) {
    return 'admin'
  }
  return 'member'
}
```

### Pattern 3: User Context-Based Theme Selection

Select theme based on the logged-in user's role:

```tsx
// lib/theme.ts
export function getThemeFromUser(user: User): 'member' | 'campus' | 'admin' {
  if (user.role === 'campus_admin' || user.role === 'staff') {
    return 'campus'
  }
  if (user.role === 'system_admin' || user.role === 'internal') {
    return 'admin'
  }
  return 'member'
}
```

---

## CSS Theme Implementation

### Setup CSS Variables for Each Theme

```css
/* globals.css */

/* Default/Member Theme (Blue) */
:root,
.theme-member {
  --primary: 210 65% 32%;          /* #19518B */
  --primary-foreground: 0 0% 98%;  /* #FAFAFA */
  --accent: 214 65% 94%;           /* #E4EEFA */
  --accent-foreground: 210 65% 32%; /* #19518B */
  
  /* Shared tokens */
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --destructive: 0 84.2% 60.2%;
  --muted: 240 4.8% 95.9%;
  --border: 240 5.9% 90%;
}

/* Campus Theme (Green) */
.theme-campus {
  --primary: 100 36% 40%;          /* #487537 */
  --primary-foreground: 0 0% 98%;  /* #FAFAFA */
  --accent: 100 45% 92%;           /* #E8F4E4 */
  --accent-foreground: 100 36% 40%; /* #487537 */
}

/* Admin Theme (Neutral) */
.theme-admin {
  --primary: 240 6% 10%;           /* #18181B */
  --primary-foreground: 0 0% 98%;  /* #FAFAFA */
  --accent: 240 5% 96%;            /* #F4F4F5 */
  --accent-foreground: 240 6% 10%; /* #18181B */
}

/* Dark mode variants */
.dark.theme-member {
  --primary: 207 67% 60%;          /* #529DDE */
}

.dark.theme-campus {
  --primary: 100 35% 59%;          /* #84B771 */
}

.dark.theme-admin {
  --primary: 240 5% 90%;           /* #E4E4E7 */
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
// ❌ WRONG - Hard-coded to Member theme
<div className="bg-[#19518B]">This is always blue</div>
<Button className="text-[#487537]">This is always green</Button>

// ✅ CORRECT - Use semantic tokens
<div className="bg-primary">Adapts to theme</div>
<Button className="text-primary">Adapts to theme</Button>
```

---

## Shared Component Library

When building shared components that work across all themes:

1. **Always use semantic tokens**: `bg-primary`, `text-accent-foreground`, etc.
2. **Test in all 3 themes**: Verify the component looks good in Member, Campus, and Admin
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
- "Which property is this feature for? (Member/Campus/Admin)"
- "Should this use the Member (blue), Campus (green), or Admin (neutral) theme?"

### 2. Use Semantic Tokens, Not Colors
Never use hard-coded colors:
```tsx
// ❌ DON'T
<Button className="bg-[#19518B]">

// ✅ DO
<Button variant="default">
```

### 3. Default to Member Theme for Examples
When showing examples without context, default to Member theme and note:
```tsx
// Example using Member theme (blue)
// For Campus (green) or Admin (neutral), the primary color will adapt
<Button variant="default">Primary Action</Button>
```

### 4. Document Theme-Specific Behavior
If a feature behaves differently per theme, document it:
```md
**Theme Behavior**:
- Member: Blue accent for notifications
- Campus: Green accent for notifications  
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
      <div className="theme-member p-8 border">
        <h3 className="mb-4">Member Theme</h3>
        {children}
      </div>
      <div className="theme-campus p-8 border">
        <h3 className="mb-4">Campus Theme</h3>
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
    const themes = ['member', 'campus', 'admin']
    
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

---

## Summary

| Decision Point | Recommendation |
|---------------|----------------|
| **Route pattern** | Use `/member/*`, `/campus/*`, `/admin/*` |
| **Component styling** | Always use semantic tokens (`bg-primary`, etc.) |
| **Default theme** | Member (blue) for examples and defaults |
| **Testing** | Verify components in all 3 themes |
| **New colors** | Add to theme tokens, don't hard-code |

---

*See also*: [`themes.md`](../system/tokens/themes.md) for complete theme specifications  
*Last updated*: February 4, 2026
