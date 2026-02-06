# Layout Patterns

Common page-level layout patterns for consistent UI structure.

---

## App Shell with Sidebar

The standard application layout with a collapsible sidebar.

```tsx
import { SidebarProvider, Sidebar, SidebarContent } from "@/components/ui/sidebar"

<SidebarProvider>
  <div className="flex min-h-screen">
    <Sidebar>
      <SidebarContent>
        {/* Navigation */}
      </SidebarContent>
    </Sidebar>
    <main className="flex-1 p-6">
      {/* Page content */}
    </main>
  </div>
</SidebarProvider>
```

### Structure

| Part | Width | Notes |
|------|-------|-------|
| Sidebar (expanded) | 248px | `w-[248px]` |
| Sidebar (collapsed) | 48px | `w-12` icon-only rail |
| Main content | flex-1 | Fills remaining space |
| Main padding | 24px | `p-6` |

---

## Page with Header

Standard page layout with a sticky header. Admin shell pages must use this pattern.

```tsx
<div className="min-h-screen flex flex-col">
  <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
    <div className="container flex h-16 items-center justify-between">
      <Logo />
      <nav className="flex items-center gap-4">
        {/* Navigation items */}
      </nav>
    </div>
  </header>
  <main className="flex-1">
    {/* Page content */}
  </main>
</div>
```

### Header Specifications

| Property | Value |
|----------|-------|
| Height | 64px (`h-16`) |
| Position | Sticky top |
| Z-index | 50 (`z-50`) |
| Background | `bg-background/95 backdrop-blur` |
| Border | `border-b` |

---

## Centered Content Page

For auth pages, single forms, or focused content.

```tsx
<div className="min-h-screen flex items-center justify-center p-4">
  <Card className="w-full max-w-[420px]">
    <CardHeader>
      <CardTitle>Page Title</CardTitle>
      <CardDescription>Description text.</CardDescription>
    </CardHeader>
    <CardContent>
      {/* Content */}
    </CardContent>
  </Card>
</div>
```

### Use Cases

- Login/signup forms
- Password reset
- Single-action pages
- Error pages (404, 500)

---

## Dashboard Grid

For dashboard pages with multiple cards/widgets.

```tsx
<div className="p-6 space-y-6">
  {/* Page header */}
  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="text-muted-foreground">Overview of your account.</p>
    </div>
    <Button>Action</Button>
  </div>
  
  {/* Stats row */}
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <Card>/* Stat card */</Card>
    <Card>/* Stat card */</Card>
    <Card>/* Stat card */</Card>
    <Card>/* Stat card */</Card>
  </div>
  
  {/* Main content grid */}
  <div className="grid gap-6 lg:grid-cols-2">
    <Card className="lg:col-span-1">/* Chart */</Card>
    <Card className="lg:col-span-1">/* Table */</Card>
  </div>
</div>
```

### Grid Breakpoints

| Breakpoint | Columns | Use |
|------------|---------|-----|
| Default | 1 | Mobile |
| `md:` (768px) | 2 | Tablet |
| `lg:` (1024px) | 4 (stats) / 2 (content) | Desktop |

---

## Settings Page

Multi-section settings with sidebar navigation.

```tsx
<div className="flex gap-6 p-6">
  {/* Settings navigation */}
  <nav className="w-[200px] shrink-0">
    <div className="space-y-1">
      <Button variant="ghost" className="w-full justify-start">General</Button>
      <Button variant="ghost" className="w-full justify-start">Security</Button>
      <Button variant="ghost" className="w-full justify-start">Notifications</Button>
    </div>
  </nav>
  
  {/* Settings content */}
  <div className="flex-1 max-w-2xl space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Section Title</CardTitle>
        <CardDescription>Section description.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Settings form */}
      </CardContent>
    </Card>
  </div>
</div>
```

### Settings Card Width

- Max width: `max-w-2xl` (672px)
- Prevents overly wide forms on large screens

---

## List/Table Page

Standard CRUD list page with toolbar and pagination.

```tsx
<div className="p-6 space-y-4">
  {/* Page header */}
  <div className="flex items-center justify-between">
    <h1 className="text-3xl font-semibold">Items</h1>
    <Button><Plus className="size-4 mr-2" />Add Item</Button>
  </div>
  
  {/* Toolbar */}
  <div className="flex items-center gap-4">
    <Input placeholder="Search..." className="max-w-sm" />
    <DropdownMenu>/* Filters */</DropdownMenu>
  </div>
  
  {/* Table */}
  <div className="rounded-md border">
    <Table>
      {/* Table content */}
    </Table>
  </div>
  
  {/* Pagination */}
  <div className="flex items-center justify-between">
    <p className="text-sm text-muted-foreground">Showing 1-10 of 100</p>
    <Pagination />
  </div>
</div>
```

---

## Split View

Two-panel layout for master-detail interfaces.

```tsx
<div className="flex h-[calc(100vh-64px)]"> {/* Subtract header height */}
  {/* Master list */}
  <div className="w-[320px] border-r overflow-y-auto">
    <div className="p-4 space-y-2">
      {/* List items */}
    </div>
  </div>
  
  {/* Detail panel */}
  <div className="flex-1 overflow-y-auto p-6">
    {/* Selected item details */}
  </div>
</div>
```

### Use Cases

- Email clients
- Chat applications
- File browsers
- Documentation viewers

---

## Modal/Dialog Centered

Standard dialog positioning.

```tsx
<Dialog>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description.</DialogDescription>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Dialog Widths

| Size | Width | Use For |
|------|-------|---------|
| Small | `max-w-[425px]` | Simple confirmations, short forms |
| Medium | `max-w-[600px]` | Standard forms |
| Large | `max-w-[800px]` | Complex forms, previews |
| Full | `max-w-[90vw]` | Large content (rarely needed) |

---

## Page Spacing Guidelines

| Element | Spacing | Token |
|---------|---------|-------|
| Page padding | 24px | `p-6` |
| Section gap | 24-32px | `space-y-6` or `space-y-8` |
| Card gap in grids | 16-24px | `gap-4` or `gap-6` |
| Header to content | 24px | `mb-6` |

---

## Responsive Patterns

### Container Widths

```tsx
// Full width with max constraint
<div className="container mx-auto px-4 max-w-7xl">

// Prose-width for reading content
<div className="max-w-prose mx-auto">
```

### Stack to Grid

```tsx
// Stack on mobile, grid on desktop
<div className="flex flex-col lg:flex-row gap-6">
  <div className="lg:w-1/3">/* Sidebar */</div>
  <div className="lg:flex-1">/* Main */</div>
</div>
```

---

## See Also

**Components Used:**
- [Sidebar](../components/sidebar.md), [Card](../components/card.md), [Button](../components/button.md)
- [Dialog](../components/dialog.md), [Table](../components/table.md), [Input](../components/input.md)
- [Pagination](../components/pagination.md)

**Related Patterns:**
- [Compositions](./compositions.md) - Component combination patterns
- [States](./states.md) - Loading, error, empty states

**Related Tokens:**
- [Breakpoints](../tokens/breakpoints.md) - Responsive breakpoints
- [Spacing](../tokens/spacing.md) - Spacing scale

---

*Last updated: January 16, 2026*
