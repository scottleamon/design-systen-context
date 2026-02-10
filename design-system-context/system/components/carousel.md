# Carousel

## Import
```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
```

## Props
```tsx
interface CarouselProps {
  orientation?: "horizontal" | "vertical"
  opts?: {
    align?: "start" | "center" | "end"
    loop?: boolean
    dragFree?: boolean
    // Additional Embla options
  }
  plugins?: EmblaPluginType[]
  setApi?: (api: EmblaCarouselType) => void
  className?: string
  children: React.ReactNode
}

interface CarouselItemProps {
  className?: string
  children: React.ReactNode
}
```

---

## Variants

| Variant | Use For | Tailwind |
|---------|---------|----------|
| `horizontal` | Standard carousels, image galleries | Default orientation |
| `vertical` | Testimonials, news feeds, sidebars | `orientation="vertical"` |

### Choosing a Variant
- **Horizontal:** Most use cases - product showcases, image galleries
- **Vertical:** Constrained vertical spaces, testimonial rotators

---

## Styling

### Arrow Buttons
| Property | Value | Tailwind |
|----------|-------|----------|
| Size | 32×32px | `size-8` |
| Background | `bg-background` | #fafafa (light) |
| Border | 1px solid | `border border-input` |
| Border Radius | Full circle | `rounded-full` |
| Shadow | Subtle | `shadow-xs` |
| Padding | Centered icon | `p-[10px]` |

### Arrow Icon
| Property | Value | Tailwind |
|----------|-------|----------|
| Size | 16×16px | `size-4` |
| Color | Primary | `text-primary` (#19518b) |

### CarouselItem (Card Container)
| Property | Value | Tailwind |
|----------|-------|----------|
| Background | `bg-card` | white |
| Border | 1px solid | `border border-border` |
| Border Radius | 14px | `rounded-xl` |
| Shadow | Subtle | `shadow-xs` |
| Overflow | Clip | `overflow-clip` |

### Layout
| Property | Value | Tailwind |
|----------|-------|----------|
| Gap between items | 16px | `gap-4` |
| Item padding | 4px | `p-1` |
| Arrow offset (horizontal) | -48px from content edge | `left-[-48px]` / `right-[-48px]` |
| Arrow vertical center | 50% | `top-1/2 -translate-y-1/2` |

### Description Text
| Property | Value | Tailwind |
|----------|-------|----------|
| Font | Adelle Sans Regular | `font-normal` |
| Size | 14px | `text-sm` |
| Line Height | 20px | `leading-5` |
| Color | `text-muted-foreground` | #71717a |
| Padding | 8px vertical | `py-2` |
| Alignment | Center | `text-center` |

---

## Sizes

Control items per view with `basis-*` classes on CarouselItem:

| Items Visible | Tailwind on CarouselItem |
|---------------|--------------------------|
| 1 | `basis-full` |
| 2 | `basis-1/2` |
| 3 | `basis-1/3` |
| Responsive | `basis-full md:basis-1/2 lg:basis-1/3` |

---

## States

### Arrow Button States
| State | Background | Icon | Border | Implementation |
|-------|------------|------|--------|----------------|
| Default | `bg-background` | `text-primary` | `border-input` | Base appearance |
| Hover | `bg-accent` | `text-primary` | `border-input` | `hover:bg-accent` |
| Focus | `bg-background` | `text-primary` | `border-input` | `ring-3 ring-ring rounded-full` |
| Pressed | `bg-accent` | `opacity-60` | `border-input` | `active:opacity-60` |
| Disabled | `bg-background` | `opacity-50` | `border-input` | `disabled:opacity-50` |

---

## Icons

**Size:** `size-4` (16×16px)

| Icon | Use For |
|------|---------|
| `ArrowLeft` | Previous button (horizontal) |
| `ArrowRight` | Next button (horizontal) |
| `ArrowUp` | Previous button (vertical) |
| `ArrowDown` | Next button (vertical) |

---

## Common Patterns

### Basic Carousel
```tsx
<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <Card className="border border-border rounded-xl shadow-xs overflow-clip">
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-4xl font-semibold">{index + 1}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### Multiple Items Per View
```tsx
<Carousel opts={{ align: "start" }} className="w-full max-w-sm">
  <CarouselContent className="gap-4">
    {items.map((item, index) => (
      <CarouselItem key={index} className="p-1 md:basis-1/2 lg:basis-1/3">
        <Card className="border border-border rounded-xl shadow-xs overflow-clip">
          <CardContent className="flex aspect-square items-center justify-center p-6">
            {item.content}
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### Vertical Carousel
```tsx
<Carousel orientation="vertical" className="w-full max-w-xs">
  <CarouselContent className="-mt-1 h-[200px]">
    {items.map((item, index) => (
      <CarouselItem key={index} className="pt-1 md:basis-1/2">
        <Card className="border border-border rounded-xl shadow-xs overflow-clip">
          <CardContent className="flex items-center justify-center p-6">
            {item.content}
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### With Slide Counter
```tsx
function CarouselWithCounter() {
  const [api, setApi] = useState<EmblaCarouselType>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        {/* items */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </Carousel>
  )
}
```

### With Images
```tsx
<Carousel className="w-full max-w-md">
  <CarouselContent>
    {images.map((image, index) => (
      <CarouselItem key={index}>
        <Card className="border border-border rounded-xl shadow-xs overflow-clip">
          <AspectRatio ratio={1}>
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 size-full object-cover"
            />
          </AspectRatio>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

---

## Accessibility

- Arrow buttons have accessible labels ("Previous slide" / "Next slide")
- Disabled buttons at carousel bounds
- Keyboard navigation via arrow keys
- Consider pause-on-hover for auto-play carousels

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Items not sizing correctly | Add `basis-*` class to `CarouselItem` |
| Arrows positioned wrong | Carousel needs relative positioning; arrows use absolute |
| Vertical carousel height wrong | Set explicit height on `CarouselContent` |
| Need infinite loop | Add `opts={{ loop: true }}` |
| Drag snapping too strict | Add `opts={{ dragFree: true }}` |
| Arrow buttons not round | Ensure `rounded-full` is applied |
| Icon color wrong | Use `text-primary` for icon color |
| Items have no gap | Add `gap-4` to `CarouselContent` and `p-1` to items |

---

## See Also

- **Related Components:** [Card](./card.md) (card carousel), [Aspect Ratio](./aspect-ratio.md) (slide sizing)
- **Tokens:** [Colors](../tokens/colors.md) — Theme-aware color tokens

---

*Last updated: February 9, 2026*
