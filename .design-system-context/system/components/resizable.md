# Resizable

## Import
```tsx
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"
```

## Props
```tsx
interface ResizablePanelGroupProps {
  direction: "horizontal" | "vertical"
  className?: string
  children: React.ReactNode
}

interface ResizablePanelProps {
  defaultSize?: number      // Percentage (0-100)
  minSize?: number          // Minimum percentage
  maxSize?: number          // Maximum percentage
  collapsible?: boolean
  className?: string
  children: React.ReactNode
}

interface ResizableHandleProps {
  withHandle?: boolean      // Show grip icon
  className?: string
}
```

---

## Structure

| Part | Tailwind |
|------|----------|
| PanelGroup | `flex bg-background border border-border rounded-lg` |
| Panel | `flex-1 overflow-hidden` |
| Handle (line) | `w-px bg-border` (vertical) / `h-px bg-border` (horizontal) |
| Handle grip | `w-3 h-4 bg-border border border-border rounded-xs` |
| Grip icon | `size-2.5 text-foreground` (GripVertical) |

---

## Direction

| Direction | Layout | Handle |
|-----------|--------|--------|
| `horizontal` | Side-by-side panels | Vertical divider with grip |
| `vertical` | Stacked panels | Horizontal divider with grip |

---

## States

| State | Implementation |
|-------|----------------|
| Default | Handle grip visible with `bg-border` |
| Hover | Cursor changes to `col-resize` or `row-resize` |
| Dragging | Active resize, panels update width/height |
| Focus | `focus-visible:ring-2 focus-visible:ring-ring` on handle |

---

## Common Patterns

### Two Panels Horizontal
```tsx
<ResizablePanelGroup direction="horizontal" className="rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">One</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Two</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>
```

### Three Panels with Nesting
```tsx
<ResizablePanelGroup direction="horizontal" className="rounded-lg border">
  <ResizablePanel defaultSize={25}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Sidebar</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={75}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={30}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Footer</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>
```

### Collapsible Sidebar
```tsx
<ResizablePanelGroup direction="horizontal" className="rounded-lg border">
  <ResizablePanel defaultSize={20} minSize={15} maxSize={30} collapsible>
    <div className="p-4">Sidebar</div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={80}>
    <div className="p-4">Main Content</div>
  </ResizablePanel>
</ResizablePanelGroup>
```

---

## Accessibility

- Built on react-resizable-panels
- Keyboard: Arrow keys to resize when handle is focused
- Handle is focusable with visible focus indicator
- Screen reader: announces panel sizes
- Add `aria-label` on panels for context

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Panels collapse unexpectedly | Set `minSize` prop on panels |
| No visible handle | Add `withHandle` prop to ResizableHandle |
| Content overflows panel | Add `overflow-hidden` or `overflow-auto` to panel |
| Height not filling container | Set explicit height on PanelGroup or parent |

---

## See Also

- **Related Components:** [Scroll Area](./scroll-area.md) (scrollable panels), [Separator](./separator.md) (visual dividers)
- **Patterns:** [Layouts](../patterns/layouts.md) — Panel layout patterns

---

*Last updated: February 9, 2026*




