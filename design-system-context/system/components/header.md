# Header

> Custom component — not a shadcn primitive

## Import
```tsx
import { Header } from "@/components/custom/header"
```

## Props
```tsx
interface HeaderProps {
  logo?: React.ReactNode
  breadcrumbs?: BreadcrumbItem[]
  searchPlaceholder?: string
  onSearch?: (query: string) => void
  actions?: React.ReactNode
  user?: { name: string; avatar?: string }
  navigation?: NavItem[]
  showPanelIcon?: boolean
  showInput?: boolean
  className?: string
}

interface NavItem {
  label: string
  href: string
  icon?: React.ComponentType
}
```

---

## Dimensions

| Element | Desktop | Mobile |
|---------|---------|--------|
| Header height | 64px (`h-16`) | 56px (`h-14`) |
| Avatar size | 40×40px | 40×40px |
| Icon button size | 28×28px | 36×36px |
| Search input width | 300px | Hidden (icon only) |
| Mobile nav width | — | 300px |

---

## Breakpoints

| Breakpoint | Layout | Menu State |
|------------|--------|------------|
| `desktop` | Full navigation bar | Always visible |
| `mobile` | Collapsed with hamburger | `open` / `closed` |

### Responsive Behavior
- Desktop shows: panel toggle, separator, breadcrumbs, search input, action buttons, avatar
- Mobile closed shows: hamburger menu (left), centered logo, search icon + action icons (right)
- Mobile closed also shows: breadcrumbs below header bar in separate row
- Mobile open: Sheet overlay from left with full navigation

---

## Icon Button States

| State | Ghost Variant | Primary Variant |
|-------|---------------|-----------------|
| Default | `bg-transparent` | `bg-primary text-primary-foreground` |
| Hover | `bg-secondary` | `bg-primary/90` |
| Pressed | `bg-secondary scale-95` | `bg-primary/80 scale-95` |

---

## Mobile Menu Structure

```
┌─────────────────────────────┐
│ [Logo]                 [X]  │  ← Header with close button
├─────────────────────────────┤
│ 🤲 Self-Care                │
│ 🛡️ Provider Care            │
│ 💬 Community                │
│ 🏆 Success Coaching         │
│ ✉️ Messages                 │
├─────────────────────────────┤  ← Separator
│ ❓ Help Center              │
│ ⚙️ Account                  │
│ ↩️ Log Out                  │
├─────────────────────────────┤
│ ┌─────────────────────────┐ │
│ │ New Feature!            │ │  ← Optional promo card
│ │ Description text...     │ │
│ │ [View]        [Dismiss] │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

---

## Common Patterns

### Desktop Header
```tsx
<header className="border-b">
  <div className="flex h-16 items-center gap-2 px-4">
    {/* Panel toggle with separator */}
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" className="size-7">
        <PanelLeft className="size-4" />
      </Button>
      <Separator orientation="vertical" className="h-4" />
    </div>
    
    {/* Breadcrumbs - fills available space */}
    <Breadcrumb className="flex-1">{/* breadcrumbs */}</Breadcrumb>
    
    {/* Search input - fixed width */}
    <div className="relative w-[300px]">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
      <Input placeholder="I'm seeking resources for..." className="pl-9" />
    </div>
    
    {/* Action buttons */}
    <Button variant="outline">Button</Button>
    <Button>Button</Button>
    
    {/* Avatar */}
    <Avatar className="size-10 rounded-xl">
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </div>
</header>
```

### Mobile Header (Closed)
```tsx
<header className="border-b">
  {/* Main bar */}
  <div className="flex h-14 items-center justify-between px-3">
    <Button variant="ghost" size="icon" className="size-9">
      <Menu className="size-5" />
    </Button>
    
    {/* Centered logo */}
    <Logo className="absolute left-1/2 -translate-x-1/2" />
    
    <div className="flex items-center gap-3">
      <Button variant="ghost" size="icon" className="size-9">
        <Search className="size-5" />
      </Button>
      <Button size="icon" className="size-9">
        <Zap className="size-5" />
      </Button>
    </div>
  </div>
  
  {/* Breadcrumbs row */}
  <div className="px-4 py-4">
    <Breadcrumb>{/* breadcrumbs */}</Breadcrumb>
  </div>
</header>
```

### Mobile Menu (Open)
```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon"><Menu className="size-5" /></Button>
  </SheetTrigger>
  <SheetContent side="left" className="w-[300px] p-4">
    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <Logo />
      <SheetClose asChild>
        <Button variant="secondary" size="icon" className="size-9">
          <X className="size-5" />
        </Button>
      </SheetClose>
    </div>
    
    {/* Primary navigation */}
    <nav className="space-y-1 p-2">
      <NavItem icon={HandHeart} label="Self-Care" />
      <NavItem icon={ShieldUser} label="Provider Care" />
      <NavItem icon={MessageSquareText} label="Community" />
      <NavItem icon={Trophy} label="Success Coaching" />
      <NavItem icon={Mail} label="Messages" />
    </nav>
    
    <Separator className="my-4" />
    
    {/* Secondary navigation */}
    <nav className="space-y-1 p-2">
      <NavItem icon={CircleHelp} label="Help Center" />
      <NavItem icon={UserCog} label="Account" />
      <NavItem icon={LogOut} label="Log Out" />
    </nav>
    
    {/* Optional promo card at bottom */}
    <Card className="absolute bottom-6 left-4 right-4">
      <CardHeader>
        <CardTitle>New Feature!</CardTitle>
        <CardDescription>Check out our new Breathwork Tool</CardDescription>
      </CardHeader>
      <CardFooter className="justify-between">
        <Button variant="link" size="sm">View</Button>
        <Button variant="link" size="sm">Dismiss</Button>
      </CardFooter>
    </Card>
  </SheetContent>
</Sheet>
```

### Navigation Item
```tsx
<a href={item.href} className="flex items-center gap-2 p-2 text-base font-medium text-muted-foreground rounded-md hover:bg-accent">
  <item.icon className="size-6" />
  {item.label}
</a>
```

---

## Accessibility

- Custom component — requires manual a11y implementation
- Use `<header>` landmark element for the container
- Add `aria-label` to `<nav>` for navigation sections
- Ensure mobile menu toggle has `aria-expanded` and `aria-controls`
- Consider adding a skip-to-content link

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Menu doesn't close on nav | Add `onOpenChange` handler to Sheet |
| Breadcrumbs overflow | Use `truncate` or hide on mobile |
| Search not responsive | Hide input on mobile, show icon trigger |
| Logo not centered mobile | Use absolute positioning with `left-1/2 -translate-x-1/2` |
| Mobile nav icons too small | Use `size-6` (24px) for mobile nav icons vs `size-4` (16px) desktop |
| Avatar not matching design | Use `rounded-xl` (14px radius) not `rounded-full` |

---

## See Also

- **Related Components:** [Sidebar](./sidebar.md) (side navigation), [Navigation Menu](./navigation-menu.md) (nav links)
- **Patterns:** [Layouts](../patterns/layouts.md) — Page layout patterns

---

*Last updated: February 9, 2026*
