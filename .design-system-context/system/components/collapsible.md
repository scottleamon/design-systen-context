# Collapsible

## Import
```tsx
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
```

## Props
```tsx
interface CollapsibleProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

interface CollapsibleTriggerProps {
  asChild?: boolean
  className?: string
  children: React.ReactNode
}

interface CollapsibleContentProps {
  forceMount?: boolean
  className?: string
  children: React.ReactNode
}
```

---

## Variants

Collapsible is a headless/behavioral component—visual styling comes from content composition.

| Pattern | Use For |
|---------|---------|
| Basic | Simple show/hide content |
| With Icon | Chevron rotation indicating state |
| FAQ Style | Border-bottom items with expand |

---

## States

| State | Implementation |
|-------|----------------|
| Closed | Content hidden (default) |
| Open | Content visible |

### State Indicators (add to trigger)
- Chevron rotation (`rotate-180` when open)
- Plus/minus icon swap
- Text change ("Show more" → "Show less")

---

## Icons

| Icon | Use For |
|------|---------|
| `ChevronDown` | Most common - rotate on open |
| `ChevronsUpDown` | Toggle indicator |
| `Plus` / `Minus` | Add/remove style |

---

## Common Patterns

### Basic Collapsible
```tsx
<Collapsible>
  <CollapsibleTrigger>Toggle content</CollapsibleTrigger>
  <CollapsibleContent>
    <p>This content can be shown or hidden.</p>
  </CollapsibleContent>
</Collapsible>
```

### With Button Trigger and Icon
```tsx
import { ChevronsUpDown } from "lucide-react"

<Collapsible className="w-[350px] space-y-2">
  <div className="flex items-center justify-between px-4">
    <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm" className="w-9 p-0">
        <ChevronsUpDown className="h-4 w-4" />
        <span className="sr-only">Toggle</span>
      </Button>
    </CollapsibleTrigger>
  </div>
  <div className="rounded-md border px-4 py-3 font-mono text-sm">
    @radix-ui/primitives
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-3 font-mono text-sm">
      @radix-ui/colors
    </div>
    <div className="rounded-md border px-4 py-3 font-mono text-sm">
      @stitches/react
    </div>
  </CollapsibleContent>
</Collapsible>
```

### Controlled State
```tsx
const [isOpen, setIsOpen] = useState(false)

<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <CollapsibleTrigger className="flex items-center gap-2">
    <span>{isOpen ? "Hide" : "Show"} details</span>
    <ChevronDown 
      className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} 
    />
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="pt-2">
      <p>Additional details are now visible.</p>
    </div>
  </CollapsibleContent>
</Collapsible>
```

### FAQ Item Style
```tsx
<Collapsible className="border-b">
  <CollapsibleTrigger className="flex w-full items-center justify-between py-4 font-medium">
    What is your refund policy?
    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="pb-4">
      <p className="text-sm text-muted-foreground">
        We offer a 30-day money-back guarantee on all purchases.
      </p>
    </div>
  </CollapsibleContent>
</Collapsible>
```

---

## Animation

For smooth expand/collapse, add these to CollapsibleContent:

```tsx
<CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down">
```

Requires animation keyframes in Tailwind config:
```js
// tailwind.config.js
keyframes: {
  "collapse-down": {
    from: { height: "0" },
    to: { height: "var(--radix-collapsible-content-height)" },
  },
  "collapse-up": {
    from: { height: "var(--radix-collapsible-content-height)" },
    to: { height: "0" },
  },
}
```

---

## Accessibility

- Trigger has `aria-expanded` automatically
- Content linked via `aria-controls`
- Enter/Space to toggle when focused
- Use `sr-only` for icon-only triggers

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Content visible initially | Don't use `defaultOpen` unless intended |
| Icon not rotating | Add `transition-transform` and conditional `rotate-180` |
| Animation jumpy | Add `overflow-hidden` to CollapsibleContent |
| Need custom trigger element | Use `asChild` prop on CollapsibleTrigger |

---

*Last updated: December 17, 2025*
