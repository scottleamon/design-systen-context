# Hover Card

## Import
```tsx
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"
```

## Props
```tsx
interface HoverCardProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  openDelay?: number  // default 700ms
  closeDelay?: number // default 300ms
  children: React.ReactNode
}

interface HoverCardContentProps {
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  sideOffset?: number
  className?: string
  children: React.ReactNode
}
```

---

## Trigger States

| State | Text Style | Decoration |
|-------|------------|------------|
| Default | `text-primary font-semibold` | None |
| Hover | `text-primary font-semibold` | `underline` |
| Focus | `text-primary font-semibold` | Focus ring (3px spread) |
| Disabled | `text-primary font-semibold opacity-50` | None, `pointer-events-none` |
| Pressed | `text-primary font-semibold` | None |

---

## Card Appearance

| Property | Value |
|----------|-------|
| Background | `bg-popover` |
| Border | `border border-border` |
| Shadow | `shadow-md` |
| Radius | `rounded-md` (8px) |
| Width | `w-80` (320px) |
| Padding | `p-4` (16px) |

---

## Content Structure

| Element | Specification |
|---------|---------------|
| Layout | `flex gap-4` horizontal |
| Avatar | 48×48px (`size-12`), `rounded-full` |
| Text wrapper | `flex flex-col gap-1` |
| Title | `text-sm font-semibold` |
| Description | `text-sm` |
| Meta row | `pt-2`, `flex items-center gap-2` |
| Meta icon | `size-4 opacity-70` |
| Meta text | `text-xs text-muted-foreground` |

---

## Common Patterns

### User Profile Card
```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <a href="/user" className="text-primary font-semibold hover:underline">
      @nextjs
    </a>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex gap-4">
      <Avatar className="size-12">
        <AvatarImage src="/avatar.jpg" />
        <AvatarFallback>NX</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">
          The React Framework - created and maintained by @vercel.
        </p>
        <div className="flex items-center gap-2 pt-2">
          <CalendarDays className="size-4 opacity-70" />
          <span className="text-xs text-muted-foreground">
            Joined December 2024
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

### Link Preview
```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <a href={url} className="text-primary font-semibold hover:underline">
      {linkText}
    </a>
  </HoverCardTrigger>
  <HoverCardContent side="top" className="w-80">
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </HoverCardContent>
</HoverCard>
```

### Controlled Hover Card
```tsx
const [open, setOpen] = useState(false)

<HoverCard open={open} onOpenChange={setOpen}>
  <HoverCardTrigger>Hover me</HoverCardTrigger>
  <HoverCardContent>{/* content */}</HoverCardContent>
</HoverCard>
```

### Inline Trigger
```tsx
<p className="text-sm">
  Created by{" "}
  <HoverCard>
    <HoverCardTrigger asChild>
      <span className="text-primary font-semibold cursor-pointer hover:underline">
        @vercel
      </span>
    </HoverCardTrigger>
    <HoverCardContent>{/* profile content */}</HoverCardContent>
  </HoverCard>
  {" "}team.
</p>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Card appears too fast | Increase `openDelay` prop (default 700ms) |
| Card closes too fast | Increase `closeDelay` prop (default 300ms) |
| Trigger not working | Add `asChild` prop when wrapping custom elements |
| Card position wrong | Adjust `side` and `align` props |
| Touch devices | HoverCard doesn't work on touch — use Popover instead |
| No underline on default | Underline only appears on hover, not default state |
| Trigger text not styled | Use `text-primary font-semibold` for trigger styling |

---

*Last updated: December 18, 2025*
