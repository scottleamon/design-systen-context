# Navigation Menu

## Import
```tsx
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
```

## Props
```tsx
interface NavigationMenuTriggerProps {
  children: React.ReactNode
  className?: string
}

interface NavigationMenuLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}
```

---

## Design Tokens

### Root Container
| Property | Token | Value |
|----------|-------|-------|
| Gap | `gap-1` | 4px between items |
| Layout | `flex items-center` | Horizontal row |

### Trigger/Link Button
| Property | Token | Value |
|----------|-------|-------|
| Height | `h-9` | 36px |
| Padding | `px-4 py-2` | 16px horizontal, 8px vertical |
| Border radius | `rounded-md` | 8px |
| Gap (trigger only) | `gap-1` | 4px (text to chevron) |
| Font | `text-sm font-medium` | 14px, Adelle Sans Semibold |
| Text color | `text-foreground` | #09090b |

### Content Popover
| Property | Token | Value |
|----------|-------|-------|
| Background | `bg-popover` | white |
| Border | `border` | 1px solid border |
| Border radius | `rounded-md` | 8px |
| Padding | `p-2` | 8px |
| Shadow | `shadow-sm` | Small drop shadow |
| Min width | — | 320px (single), 512px (2-column) |

### Menu Link Item
| Property | Token | Value |
|----------|-------|-------|
| Padding | `p-2` | 8px |
| Border radius | `rounded-sm` | 6px |
| Gap | `gap-1` | 4px (title to description) |
| Title | `text-sm font-medium text-popover-foreground` | 14px, semibold, #09090b |
| Description | `text-sm text-muted-foreground` | 14px, normal, #71717a |

---

## Icons

**Chevron Size:** h-3 w-3 (12px)
**Icon in Simple List:** h-4 w-4 (16px), `text-muted-foreground`

```tsx
// Chevron rotates automatically on open via data-state
<ChevronDown className="h-3 w-3 transition-transform group-data-[state=open]:rotate-180" />
```

---

## Content Layout Types

| Type | Min Width | Structure |
|------|-----------|-----------|
| `List` | 320px | Single column, title + description |
| `2 Column List` | 512px | `grid grid-cols-2`, wrapping |
| `Simple List` | 320px | Single column, title only |
| `Simple List with Icon` | 320px | Icon + title |
| `Custom` | 518px | Hero (210px) + list column |

---

## States

| State | Trigger/Link | Menu Link Item |
|-------|--------------|----------------|
| Default | `bg-transparent text-foreground` | `text-popover-foreground` |
| Hover | `bg-accent text-accent-foreground` | `bg-accent text-accent-foreground` (title only) |
| Focused | `bg-accent text-accent-foreground ring-3 ring-ring/50` | — |
| Open | `bg-accent text-accent-foreground` | — |

**Note:** Description text stays `text-muted-foreground` on hover.

---

## Common Patterns

### Basic Navigation
```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-2 p-2 w-[320px]">
          <ListItem href="/docs" title="Introduction">
            Re-usable components built with Radix UI.
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/docs" className={navigationMenuTriggerStyle()}>
        Documentation
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

### ListItem Helper
```tsx
const ListItem = ({ title, children, href }) => (
  <li>
    <NavigationMenuLink asChild>
      <a href={href} className="block p-2 rounded-sm hover:bg-accent group">
        <div className="text-sm font-medium group-hover:text-accent-foreground">{title}</div>
        <p className="text-sm text-muted-foreground">{children}</p>
      </a>
    </NavigationMenuLink>
  </li>
)
```

### Two Column Grid
```tsx
<NavigationMenuContent>
  <ul className="grid grid-cols-2 gap-2 p-2 w-[512px]">
    <ListItem title="Alert Dialog">Modal dialogs.</ListItem>
    <ListItem title="Hover Card">Preview on hover.</ListItem>
  </ul>
</NavigationMenuContent>
```

### With Featured Hero
```tsx
<NavigationMenuContent>
  <div className="flex gap-2 p-2 w-[518px]">
    <div className="w-[210px] rounded-sm bg-gradient-to-b from-muted/50 to-muted p-6 flex flex-col justify-end">
      <h3 className="text-lg font-medium">shadcn/ui</h3>
      <p className="text-sm text-muted-foreground">Beautiful components.</p>
    </div>
    <ul className="flex-1 grid gap-2">
      <ListItem title="Introduction">Getting started.</ListItem>
    </ul>
  </div>
</NavigationMenuContent>
```

---

## Accessibility

- Built on Radix NavigationMenu — handles keyboard and focus automatically
- Keyboard: Arrow keys to navigate triggers, Enter/Space to activate, Escape to close submenus
- Screen reader: announces navigation role
- Uses `aria-current="page"` for active links

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Link not styled as trigger | Apply `navigationMenuTriggerStyle()` |
| Chevron not rotating | Add `group` to trigger, use `group-data-[state=open]:rotate-180` |
| Content animating wrong | Use `NavigationMenuViewport` for proper positioning |
| Hover state on description | Only title gets `text-accent-foreground`, description stays muted |

---

## See Also

- **Related Components:** [Sidebar](./sidebar.md) (side navigation), [Breadcrumb](./breadcrumb.md) (location context)
- **Accessibility:** [Navigation Accessibility](../a11y/navigation.md) — Navigation ARIA patterns

---

*Last updated: February 9, 2026*
