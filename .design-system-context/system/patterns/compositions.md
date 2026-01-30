# Component Compositions

Guidelines for combining components together effectively.

---

## Card with Form

Forms should always be wrapped in a Card for visual grouping.

```tsx
<Card className="max-w-[374px]">
  <CardHeader>
    <CardTitle>Create Account</CardTitle>
    <CardDescription>Enter your details below.</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="name@example.com" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" />
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Create Account</Button>
  </CardFooter>
</Card>
```

### Spacing Rules

- Card padding: `p-6` (24px) via default CardHeader/Content/Footer
- Between fields: `space-y-4` (16px)
- Label to input: `space-y-2` (8px)
- Content to footer: automatic via Card structure

---

## Card with Icon Header

For feature cards or informational sections.

```tsx
<Card>
  <CardHeader className="flex-row gap-2 items-center">
    <SquareTerminal className="size-12 text-primary" />
    <div className="flex flex-col gap-1">
      <CardTitle>Feature Name</CardTitle>
      <CardDescription>Feature description goes here.</CardDescription>
    </div>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

### Icon Specifications

- Size: `size-12` (48px)
- Color: `text-primary`
- Gap to text: `gap-2` (8px)

---

## Table with Toolbar

Data tables should include filtering and actions above.

```tsx
<div className="space-y-4">
  {/* Toolbar */}
  <div className="flex items-center justify-between">
    <Input placeholder="Filter..." className="max-w-sm" />
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <SlidersHorizontal className="size-4 mr-2" />
            View
          </Button>
        </DropdownMenuTrigger>
        {/* Menu content */}
      </DropdownMenu>
      <Button size="sm">
        <Plus className="size-4 mr-2" />
        Add
      </Button>
    </div>
  </div>
  
  {/* Table */}
  <div className="rounded-md border">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]"><Checkbox /></TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* Rows */}
      </TableBody>
    </Table>
  </div>
  
  {/* Pagination */}
  <div className="flex items-center justify-between">
    <p className="text-sm text-muted-foreground">0 of 10 selected</p>
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" disabled>Previous</Button>
      <Button variant="outline" size="sm">Next</Button>
    </div>
  </div>
</div>
```

---

## Dialog with Form

Forms inside dialogs for quick actions.

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>Update your profile information.</DialogDescription>
    </DialogHeader>
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="John Doe" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@johndoe" />
      </div>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Footer Button Order

- Desktop: Cancel (left) → Primary (right)
- Mobile: Primary (top) → Cancel (bottom) — handled by DialogFooter

---

## Dropdown Menu with Icons

Action menus with icon indicators.

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon">
      <MoreHorizontal className="size-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem>
      <Pencil className="size-4 mr-2" />
      Edit
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Copy className="size-4 mr-2" />
      Duplicate
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-destructive">
      <Trash2 className="size-4 mr-2" />
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Spacing

- Icon to text: `mr-2` (8px)
- Icon size: `size-4` (16px)
- Destructive items: `text-destructive` on item

---

## Alert with Action

Alerts with optional action buttons.

```tsx
<Alert>
  <CircleCheck className="size-4" />
  <AlertTitle>Changes saved successfully</AlertTitle>
  <AlertDescription>
    Your profile has been updated.
  </AlertDescription>
  <Button variant="outline" size="sm" className="mt-2">
    View changes
  </Button>
</Alert>
```

### Alert Variants

| Type | Variant | Icon |
|------|---------|------|
| Success | `default` | `CircleCheck` |
| Error | `destructive` | `AlertCircle` |
| Info | `default` | `Info` |
| Warning | `default` | `TriangleAlert` |

---

## Input with Button

Combined input and action (e.g., search, subscribe).

```tsx
<div className="flex">
  <Input 
    placeholder="Enter email..." 
    className="rounded-r-none" 
  />
  <Button className="rounded-l-none">
    Subscribe
  </Button>
</div>
```

### Key Classes

- Input: `rounded-r-none` (removes right border radius)
- Button: `rounded-l-none` (removes left border radius)

---

## Tabs with Cards

Content sections organized by tabs.

```tsx
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview" className="space-y-4">
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Content */}
      </CardContent>
    </Card>
  </TabsContent>
  {/* Other tab contents */}
</Tabs>
```

### Spacing

- TabsList to TabsContent: `mt-2` (built into TabsContent)
- Cards within tabs: `space-y-4`

---

## Sidebar with Collapsible Sections

Navigation with expandable groups.

```tsx
<SidebarGroup>
  <SidebarGroupLabel>Platform</SidebarGroupLabel>
  <SidebarMenu>
    <Collapsible defaultOpen>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <Settings className="size-6" />
            <span>Settings</span>
            <ChevronDown className="ml-auto size-4 transition-transform group-data-[state=open]:rotate-180" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            <SidebarMenuSubItem>
              <SidebarMenuSubButton>General</SidebarMenuSubButton>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem>
              <SidebarMenuSubButton>Security</SidebarMenuSubButton>
            </SidebarMenuSubItem>
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  </SidebarMenu>
</SidebarGroup>
```

### Chevron Animation

```tsx
className="transition-transform group-data-[state=open]:rotate-180"
```

---

## Avatar Group

Stacked avatars for showing multiple users.

```tsx
<div className="flex -space-x-2">
  <Avatar className="border-2 border-background">
    <AvatarImage src="/user1.jpg" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="/user2.jpg" />
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="/user3.jpg" />
    <AvatarFallback>CD</AvatarFallback>
  </Avatar>
  <div className="flex items-center justify-center size-10 rounded-full border-2 border-background bg-muted text-sm font-medium">
    +5
  </div>
</div>
```

### Key Classes

- Overlap: `-space-x-2`
- Border to separate: `border-2 border-background`
- Overflow indicator: same size as avatars with `bg-muted`

---

## Breadcrumb with Page Title

Navigation context above page headings.

```tsx
<div className="space-y-2">
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Profile</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
  <h1 className="text-3xl font-semibold">Profile Settings</h1>
</div>
```

---

## Badge in Table Cell

Status indicators in data tables.

```tsx
<TableCell>
  <Badge variant="outline" className="gap-1">
    <span className="size-2 rounded-full bg-green-500" />
    Active
  </Badge>
</TableCell>
```

### Status Colors (via dot)

| Status | Color Class |
|--------|-------------|
| Active/Success | `bg-green-500` |
| Pending/Warning | `bg-yellow-500` |
| Error/Failed | `bg-red-500` |
| Inactive/Disabled | `bg-gray-400` |

---

## Composition Rules

1. **Cards contain, dialogs interrupt** — Use Cards for inline forms, Dialogs for focused actions
2. **One primary action per view** — Only one `variant="default"` button prominently visible
3. **Consistent icon sizes** — `size-4` for inline, `size-6` for nav, `size-12` for features
4. **Spacing hierarchy** — 8px tight, 16px standard, 24px sections
5. **Footer alignment** — Actions right-aligned in cards, spread in dialogs

---

*Last updated: January 16, 2026*
