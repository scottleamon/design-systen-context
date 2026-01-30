# Aspect Ratio

## Import
```tsx
import { AspectRatio } from "@/components/ui/aspect-ratio"
```

## Props
```tsx
interface AspectRatioProps {
  ratio?: number  // width / height (e.g., 16/9, 4/3, 1)
  className?: string
  children: React.ReactNode
}
```

---

## Ratios

| Ratio | Value | Use For |
|-------|-------|---------|
| `1:1` | `ratio={1}` | Square thumbnails, avatars, Instagram-style |
| `16:9` | `ratio={16/9}` | HD video, YouTube embeds, hero images |
| `4:3` | `ratio={4/3}` | Standard photos, presentations |
| `3:2` | `ratio={3/2}` | 35mm film, photography portfolios |
| `21:9` | `ratio={21/9}` | Ultrawide cinema, banner images |
| `9:16` | `ratio={9/16}` | Vertical video (TikTok, Reels, Stories) |
| `1.618:1` | `ratio={1.618}` | Golden ratio compositions |
| `2:1` | `ratio={2/1}` | Panoramic images |

### All Ratios Quick Reference

| Ratio | Decimal | Portrait Equivalent |
|-------|---------|---------------------|
| 1:1 | 1.0 | — |
| 5:4 | 1.25 | 4:5 (0.8) |
| 4:3 | 1.333 | 3:4 (0.75) |
| 3:2 | 1.5 | 2:3 (0.667) |
| 16:10 | 1.6 | 10:16 (0.625) |
| 1.618:1 | 1.618 | 1:1.618 (0.618) |
| 16:9 | 1.778 | 9:16 (0.5625) |
| 2:1 | 2.0 | 1:2 (0.5) |
| 21:9 | 2.333 | 9:21 (0.429) |

---

## States

Aspect Ratio is a layout utility—no interactive states.

---

## Common Patterns

### Basic Image
```tsx
<AspectRatio ratio={16 / 9}>
  <img
    src="/image.jpg"
    alt="Photo"
    className="absolute inset-0 size-full rounded-md object-cover"
  />
</AspectRatio>
```

### Square Avatar
```tsx
<AspectRatio ratio={1}>
  <img
    src="/avatar.jpg"
    alt="User"
    className="absolute inset-0 size-full rounded-full object-cover"
  />
</AspectRatio>
```

### Video Embed
```tsx
<AspectRatio ratio={16 / 9}>
  <iframe
    src="https://www.youtube.com/embed/..."
    className="absolute inset-0 size-full"
    allowFullScreen
  />
</AspectRatio>
```

### Gallery Grid
```tsx
<div className="grid grid-cols-3 gap-4">
  {images.map((src) => (
    <AspectRatio key={src} ratio={1}>
      <img src={src} className="absolute inset-0 size-full object-cover rounded-md" />
    </AspectRatio>
  ))}
</div>
```

---

## Child Content Styling

Always apply these classes to child content (images, videos):

```tsx
className="absolute inset-0 size-full object-cover"
```

| Class | Purpose |
|-------|---------|
| `absolute inset-0` | Position to fill container |
| `size-full` | Width and height 100% |
| `object-cover` | Maintain aspect ratio, crop overflow |
| `object-center` | Center the content (default) |
| `rounded-md` | Optional: round corners |

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Image distorted | Add `object-cover` to child element |
| Image not filling | Add `absolute inset-0 size-full` to child element |
| Content overflows | Container has `overflow-hidden` by default |
| Need placeholder color | Add `bg-muted` to AspectRatio |
| Child not positioned | Ensure child has `absolute inset-0` |

---

## Figma Reference

[View in Figma](https://www.figma.com/design/0rd6tPgENef5nXmN0puflu/shadcn_ui-TimelyCare-kit?node-id=296-5157&m=dev)

---

*Last updated: December 18, 2025*
