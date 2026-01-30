# Sidebar

## Import
```tsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
```

## Props
```tsx
interface SidebarProps {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
  className?: string
}

interface SidebarMenuButtonProps {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | TooltipContentProps
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}
```

---

## Structure

| Part | Tailwind |
|------|----------|
| Sidebar (expanded) | `w-[248px] bg-sidebar border-r border-sidebar-border` |
| Sidebar (collapsed) | `w-12` (48px, icon-only) |
| SidebarHeader | `h-16 px-6 py-3 border-b border-sidebar-border` |
| SidebarContent | `flex-1 p-2` |
| SidebarFooter | `p-2` |
| SidebarGroup | `p-2` |
| SidebarMenu | `flex flex-col` |

---

## Menu Button

| Part | Tailwind |
|------|----------|
| Container | `gap-2 p-2 rounded-md h-8` |
| Icon | `size-6 text-sidebar-foreground` |
| Text | `text-sm font-semibold leading-none text-sidebar-foreground` |
| Active text | `font-bold text-sidebar-accent-foreground` |
| Hover | `bg-sidebar-accent` |

---

## Sub-Menu

| Part | Tailwind |
|------|----------|
| SidebarMenuSub | `pl-8 pr-6 py-0.5 gap-1 border-l border-border ml-5` |
| SidebarMenuSubItem | `h-7 px-2 rounded-md` |
| Sub-item text | `text-sm font-normal leading-none text-sidebar-foreground` |

---

## Badge (Notification Count)

| Part | Tailwind |
|------|----------|
| Container | `min-w-5 h-5 px-1 rounded-full bg-primary` |
| Text | `text-xs font-bold text-primary-foreground` |

```tsx
<SidebarMenuButton>
  <Mail className="size-6" />
  <span>Messages</span>
  <SidebarMenuBadge>8</SidebarMenuBadge>
</SidebarMenuButton>
```

---

## States

| State | Implementation |
|-------|----------------|
| Default | `text-sidebar-foreground font-semibold` |
| Hover | `bg-sidebar-accent` |
| Active | `bg-sidebar-accent text-sidebar-accent-foreground font-bold` |
| Focused | `ring-2 ring-sidebar-ring ring-offset-2` |

---

## Common Patterns

### Basic Navigation
```tsx
<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <Logo />
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive>
              <Home className="size-6" />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenuButton>
        <LogOut className="size-6" />
        <span className="text-sidebar-accent-foreground">Log Out</span>
      </SidebarMenuButton>
    </SidebarFooter>
  </Sidebar>
</SidebarProvider>
```

### Collapsible with Sub-menu
```tsx
<Collapsible defaultOpen>
  <SidebarMenuItem>
    <CollapsibleTrigger asChild>
      <SidebarMenuButton>
        <Calendar className="size-6" />
        <span>Visits</span>
        <ChevronDown className="ml-auto size-4 transition-transform group-data-[state=open]:rotate-180" />
      </SidebarMenuButton>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <SidebarMenuSub>
        <SidebarMenuSubItem>
          <SidebarMenuSubButton>In Progress</SidebarMenuSubButton>
        </SidebarMenuSubItem>
        <SidebarMenuSubItem>
          <SidebarMenuSubButton>Scheduled</SidebarMenuSubButton>
        </SidebarMenuSubItem>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Icons wrong size | Use `size-6` (24px) for menu, `size-4` for collapse chevron |
| Sub-menu not indented | SidebarMenuSub has `pl-8 ml-5` with left border |
| Badge not aligned | Place inside SidebarMenuButton, after text |
| Collapsed mode icons | Icons remain `size-6`, centered in `w-12` rail |
| Log Out styling | Use `text-sidebar-accent-foreground` (primary color) |

---

*Last updated: December 19, 2024*
