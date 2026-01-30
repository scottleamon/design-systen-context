# Sheet

## Import
```tsx
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
```

## Props
```tsx
interface SheetProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

interface SheetContentProps {
  side?: "top" | "right" | "bottom" | "left"
  className?: string
  children: React.ReactNode
}
```

---

## Structure

| Part | Tailwind |
|------|----------|
| Overlay | `bg-black/80 fixed inset-0` |
| SheetContent | `bg-background p-6 gap-4 shadow-lg` |
| Side panels | `w-96` (384px), full height |
| Top/bottom | Full width, auto height |
| SheetHeader | `flex flex-col gap-2` |
| SheetTitle | `text-lg font-bold leading-7 text-foreground` |
| SheetDescription | `text-sm text-muted-foreground` |
| Close button | `absolute right-4 top-4 size-4 rounded-xs` |

---

## Positions

| Side | Border | Layout |
|------|--------|--------|
| `right` | `border-l` | Fixed right, `w-96`, full height |
| `left` | `border-r` | Fixed left, `w-96`, full height |
| `top` | `border-b` | Fixed top, full width |
| `bottom` | `border-t` | Fixed bottom, full width |

---

## Close Icon States

| State | Implementation |
|-------|----------------|
| Default | `opacity-70` |
| Hover | `opacity-100` |
| Focus | `focus-visible:ring-2 focus-visible:ring-ring` |

---

## Common Patterns

### Basic Sheet
```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Title Text</SheetTitle>
      <SheetDescription>
        This is a sheet description.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">Content goes here</div>
  </SheetContent>
</Sheet>
```

### With Form
```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button>Edit Profile</Button>
  </SheetTrigger>
  <SheetContent className="flex flex-col gap-4">
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Placeholder" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="Placeholder" />
      </div>
    </div>
    <SheetFooter>
      <Button type="submit">Button</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

### Top/Bottom Position
```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">From Top</Button>
  </SheetTrigger>
  <SheetContent side="top">
    <SheetHeader>
      <SheetTitle>Title Text</SheetTitle>
      <SheetDescription>This is a sheet description.</SheetDescription>
    </SheetHeader>
    <div className="py-4">Content</div>
    <Button>Button</Button>
  </SheetContent>
</Sheet>
```

### Mobile Navigation
```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline" size="icon">
      <Menu className="h-4 w-4" />
    </Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Navigation</SheetTitle>
    </SheetHeader>
    <nav className="flex flex-col gap-2 py-4">
      <a href="#" className="text-sm">Home</a>
      <a href="#" className="text-sm">About</a>
      <a href="#" className="text-sm">Contact</a>
    </nav>
  </SheetContent>
</Sheet>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Trigger not clickable | Add `asChild` prop to SheetTrigger |
| Content overflows | Add `overflow-y-auto` to content |
| Width too wide/narrow | Override with `className="w-[500px]"` |
| Footer at bottom | Use `flex flex-col` and `mt-auto` on footer |

---

*Last updated: December 19, 2025*
