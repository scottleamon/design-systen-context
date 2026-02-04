# UI State Patterns

Patterns for handling loading, error, empty, and other UI states consistently.

---

## Loading States

### Page Loading (Skeleton)

Use skeleton loaders for initial page/section loads.

```tsx
// Card skeleton
<Card>
  <CardHeader>
    <Skeleton className="h-6 w-[200px]" />
    <Skeleton className="h-4 w-[300px]" />
  </CardHeader>
  <CardContent className="space-y-4">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-[250px]" />
  </CardContent>
</Card>

// Table row skeleton
<TableRow>
  <TableCell><Skeleton className="h-4 w-4" /></TableCell>
  <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
  <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
</TableRow>
```

### Skeleton Guidelines

| Element | Height | Width |
|---------|--------|-------|
| Title | `h-6` | `w-[200px]` or contextual |
| Body text | `h-4` | `w-full` or `w-[250px]` |
| Avatar | `h-10 w-10 rounded-full` | — |
| Button | `h-9` | `w-[100px]` |
| Checkbox | `h-4 w-4` | — |

### Button Loading State

```tsx
<Button disabled className="gap-2">
  <LoaderCircle className="size-4 animate-spin" />
  Saving...
</Button>
```

**Rules:**
- Always disable button during loading
- Show spinner (`LoaderCircle` with `animate-spin`)
- Change text to indicate action ("Saving...", "Loading...")
- Add `aria-busy="true"` for accessibility

### Inline Loading

For loading within existing content:

```tsx
<div className="flex items-center gap-2 text-muted-foreground">
  <LoaderCircle className="size-4 animate-spin" />
  <span className="text-sm">Loading...</span>
</div>
```

### Full Page Loading

```tsx
<div className="flex items-center justify-center min-h-[400px]">
  <div className="flex flex-col items-center gap-4">
    <LoaderCircle className="size-8 animate-spin text-primary" />
    <p className="text-sm text-muted-foreground">Loading your data...</p>
  </div>
</div>
```

---

## Error States

### Form Field Error

```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    className="border-destructive focus-visible:ring-destructive/50" 
  />
  <p className="text-sm text-destructive">Please enter a valid email address.</p>
</div>
```

**Form Error Classes:**
- Input border: `border-destructive`
- Focus ring: `focus-visible:ring-destructive/50`
- Error text: `text-sm text-destructive`

### Inline Error Alert

```tsx
<Alert variant="destructive">
  <AlertCircle className="size-4" />
  <AlertTitle>Something went wrong</AlertTitle>
  <AlertDescription>
    Unable to save your changes. Please try again.
  </AlertDescription>
</Alert>
```

### Error with Retry

```tsx
<Alert variant="destructive">
  <AlertCircle className="size-4" />
  <AlertTitle>Failed to load data</AlertTitle>
  <AlertDescription className="flex items-center justify-between">
    <span>There was a problem fetching your data.</span>
    <Button variant="outline" size="sm" onClick={retry}>
      <RotateCcw className="size-4 mr-2" />
      Retry
    </Button>
  </AlertDescription>
</Alert>
```

### Toast Error (Sonner)

```tsx
import { toast } from "sonner"

// Error toast
toast.error("Failed to save changes", {
  description: "Please check your connection and try again.",
})
```

### Full Page Error

```tsx
<div className="flex items-center justify-center min-h-[400px]">
  <div className="flex flex-col items-center gap-4 text-center max-w-md">
    <div className="size-16 rounded-full bg-destructive/10 flex items-center justify-center">
      <AlertCircle className="size-8 text-destructive" />
    </div>
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="text-muted-foreground">
        We couldn't load this page. Please try again or contact support.
      </p>
    </div>
    <div className="flex gap-2">
      <Button variant="outline" onClick={() => window.location.reload()}>
        Refresh page
      </Button>
      <Button>Contact support</Button>
    </div>
  </div>
</div>
```

---

## Empty States

### No Data (Table/List)

```tsx
<div className="flex flex-col items-center justify-center py-12 text-center">
  <div className="size-16 rounded-full bg-muted flex items-center justify-center mb-4">
    <Inbox className="size-8 text-muted-foreground" />
  </div>
  <h3 className="text-lg font-semibold">No items yet</h3>
  <p className="text-muted-foreground mt-1 max-w-sm">
    Get started by creating your first item.
  </p>
  <Button className="mt-4">
    <Plus className="size-4 mr-2" />
    Add Item
  </Button>
</div>
```

### No Search Results

```tsx
<div className="flex flex-col items-center justify-center py-12 text-center">
  <div className="size-16 rounded-full bg-muted flex items-center justify-center mb-4">
    <Search className="size-8 text-muted-foreground" />
  </div>
  <h3 className="text-lg font-semibold">No results found</h3>
  <p className="text-muted-foreground mt-1">
    Try adjusting your search or filter to find what you're looking for.
  </p>
  <Button variant="outline" className="mt-4" onClick={clearFilters}>
    Clear filters
  </Button>
</div>
```

### Empty State in Card

```tsx
<Card>
  <CardContent className="flex flex-col items-center justify-center py-12">
    <FileText className="size-12 text-muted-foreground mb-4" />
    <h3 className="font-semibold">No documents</h3>
    <p className="text-sm text-muted-foreground mt-1">
      Upload your first document to get started.
    </p>
    <Button variant="outline" className="mt-4">
      <Upload className="size-4 mr-2" />
      Upload
    </Button>
  </CardContent>
</Card>
```

### Empty State Icons

| Context | Icon |
|---------|------|
| No data | `Inbox` |
| No search results | `Search` |
| No files/documents | `FileText` |
| No notifications | `Bell` |
| No users | `Users` |
| No messages | `MessageSquare` |

---

## Success States

### Success Toast

```tsx
toast.success("Changes saved", {
  description: "Your profile has been updated successfully.",
})
```

### Success Alert

```tsx
<Alert>
  <CircleCheck className="size-4" />
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>
    Your changes have been saved.
  </AlertDescription>
</Alert>
```

### Confirmation Dialog

```tsx
<Dialog open={showSuccess} onOpenChange={setShowSuccess}>
  <DialogContent className="sm:max-w-[400px]">
    <div className="flex flex-col items-center text-center py-4">
      <div className="size-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
        <CircleCheck className="size-8 text-green-600" />
      </div>
      <DialogTitle>Payment Successful</DialogTitle>
      <DialogDescription className="mt-2">
        Your payment of $99.00 has been processed.
      </DialogDescription>
    </div>
    <DialogFooter>
      <Button className="w-full" onClick={() => setShowSuccess(false)}>
        Continue
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## Disabled States

### Disabled Button

```tsx
<Button disabled>
  Save changes
</Button>
```

**Automatic styling:** `opacity-50 cursor-not-allowed pointer-events-none`

### Disabled Form Field

```tsx
<div className="space-y-2">
  <Label htmlFor="email" className="text-muted-foreground">Email</Label>
  <Input id="email" disabled value="admin@example.com" />
  <p className="text-sm text-muted-foreground">Contact admin to change.</p>
</div>
```

### Disabled Card/Section

```tsx
<Card className="opacity-50 pointer-events-none">
  <CardHeader>
    <CardTitle>Premium Feature</CardTitle>
    <CardDescription>Upgrade to access this feature.</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

---

## Pending/Processing States

### Pending Badge

```tsx
<Badge variant="outline" className="gap-1">
  <LoaderCircle className="size-3 animate-spin" />
  Processing
</Badge>
```

### Progress Indicator

```tsx
<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Uploading...</span>
    <span className="text-muted-foreground">67%</span>
  </div>
  <Progress value={67} />
</div>
```

---

## State Hierarchy

Use appropriate feedback based on severity and user action:

| Feedback Type | Use For | Component |
|---------------|---------|-----------|
| Toast (success) | Non-blocking confirmations | Sonner |
| Toast (error) | Recoverable errors | Sonner |
| Inline alert | Important notices in context | Alert |
| Form error | Field validation | Text + border styling |
| Dialog | Critical confirmations, destructive actions | Dialog |
| Full page | Blocking errors, 404/500 | Dedicated layout |

---

## State Combinations

### Loading then Error

```tsx
{isLoading && <Skeleton />}
{error && <Alert variant="destructive">...</Alert>}
{data && <Content />}
```

### Loading then Empty

```tsx
{isLoading && <Skeleton />}
{!isLoading && data.length === 0 && <EmptyState />}
{!isLoading && data.length > 0 && <DataTable data={data} />}
```

---

## See Also

**Components Used:**
- [Skeleton](../components/skeleton.md), [Card](../components/card.md), [Button](../components/button.md)
- [Alert](../components/alert.md), [Dialog](../components/dialog.md), [Input](../components/input.md)
- [Badge](../components/badge.md), [Progress](../components/progress.md)
- [Sonner (Toast)](../components/sonner.md)

**Related Patterns:**
- [Compositions](./compositions.md) - Component combination patterns
- [Layouts](./layouts.md) - Page-level layout patterns

---

*Last updated: January 16, 2026*
