# Card

> [!NOTE]
> **Theme-Aware Component**: Card borders and accents adapt to the active theme.
> When using accent colors (like icons or highlights), they will automatically use the theme's primary color.
> Examples below use Member theme (navy blue) but will adapt to Campus (green) or Admin (neutral).

## Import
```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
```

## Props
```tsx
interface CardProps {
  className?: string
  children: React.ReactNode
}

interface CardHeaderProps {
  className?: string
  children: React.ReactNode
}

interface CardTitleProps {
  className?: string
  children: React.ReactNode
}

interface CardDescriptionProps {
  className?: string
  children: React.ReactNode
}

interface CardContentProps {
  className?: string
  children: React.ReactNode
}

interface CardFooterProps {
  className?: string
  children: React.ReactNode
}
```

---

## Variants

| Variant | Use For | Tailwind |
|---------|---------|----------|
| `default` | All standard card implementations | `bg-card text-card-foreground border border-border rounded-xl shadow-sm overflow-clip` |

### Choosing a Variant
Cards are container components - visual variations come from content composition, not card variants.

---

## Styling

### Card Container
| Property | Value | Tailwind |
|----------|-------|----------|
| Background | `bg-card` | Light: white, Dark: #18181b |
| Border | 1px solid | `border border-border` |
| Border Radius | 14px | `rounded-xl` |
| Shadow | Double shadow | `shadow-sm` |
| Overflow | Clip | `overflow-clip` |
| Section Gap | 24px | `gap-6` |
| Vertical Padding | 24px | `py-6` |
| Horizontal Padding | 0px | Content sections handle padding |

### Typography
| Element | Font | Size | Line Height | Color |
|---------|------|------|-------------|-------|
| Title | Adelle Sans Bold | 16px (`text-base`) | `leading-none` | `text-card-foreground` |
| Description | Adelle Sans Regular | 14px (`text-sm`) | 20px (`leading-5`) | `text-muted-foreground` |
| Body Text | Adelle Sans Regular | 14px (`text-sm`) | 20px (`leading-5`) | `text-card-foreground` |

---

## Spacing

| Property | Tailwind | Pixels |
|----------|----------|--------|
| Card vertical padding | `py-6` | 24px |
| Section horizontal padding | `px-6` | 24px |
| Gap between sections | `gap-6` | 24px |
| Title to description gap | `gap-1` | 4px |
| Icon to text gap (header with icon) | `gap-2` | 8px |

---

## Sizes

| Size | Use For | Notes |
|------|---------|-------|
| Flexible | All use cases | Width/height adapt to container and content |
| Fixed Width | Forms, dialogs | Use `w-[420px]` or similar constraints |

---

## Header Variants

### Text Only (Default)
```tsx
<CardHeader>
  <CardTitle>Title Text</CardTitle>
  <CardDescription>This is a card description.</CardDescription>
</CardHeader>
```
- Title/description stack vertically with `gap-1.5` (6px)

### With Icon
```tsx
<CardHeader className="flex-row gap-2 items-center">
  <Icon className="size-12 text-primary" />
  <div className="flex flex-col gap-1">
    <CardTitle>Title Text</CardTitle>
    <CardDescription>This is a card description.</CardDescription>
  </div>
</CardHeader>
```
- Icon size: `size-12` (48×48px)
- Icon color: `text-primary` (#19518b)
- Gap between icon and text: `gap-2` (8px)

---

## States

| State | Implementation |
|-------|----------------|
| Default | Base appearance with shadow |

Cards are container components with no interactive states. Child elements (buttons, links) have their own states.

---

## Common Patterns

### Basic Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title Text</CardTitle>
    <CardDescription>This is a card description.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Card with Icon Header
```tsx
<Card className="w-[420px]">
  <CardHeader className="flex-row gap-2 items-center">
    <SquareTerminal className="size-12 text-primary" />
    <div className="flex flex-col gap-1">
      <CardTitle>Title Text</CardTitle>
      <CardDescription>This is a card description.</CardDescription>
    </div>
  </CardHeader>
  <CardContent>
    <p>Your content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Login Card
```tsx
<Card className="w-[420px]">
  <CardHeader className="flex-row gap-2 items-center">
    <SquareTerminal className="size-12 text-primary" />
    <div className="flex flex-col gap-1">
      <CardTitle>Login to your account</CardTitle>
      <CardDescription>
        Enter your email below to login to your account
      </CardDescription>
    </div>
  </CardHeader>
  <CardContent className="space-y-6">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="m@example.com" />
    </div>
    <div className="space-y-2">
      <div className="flex justify-between">
        <Label htmlFor="password">Password</Label>
        <a href="#" className="text-sm text-muted-foreground underline">
          Forgot your password?
        </a>
      </div>
      <Input id="password" type="password" />
    </div>
  </CardContent>
  <CardFooter className="flex-col gap-2">
    <Button className="w-full">Login</Button>
    <Button variant="outline" className="w-full">Login with Google</Button>
    <p className="text-sm text-card-foreground pt-4 text-center">
      Don't have an account? <a href="#" className="underline">Sign up</a>
    </p>
  </CardFooter>
</Card>
```

### Card with Full-Bleed Image
```tsx
<Card className="w-[420px]">
  <CardHeader className="flex-row gap-2 items-center">
    <SquareTerminal className="size-12 text-primary" />
    <div className="flex flex-col gap-1">
      <CardTitle>Is this an image?</CardTitle>
      <CardDescription>This is a card with an image.</CardDescription>
    </div>
  </CardHeader>
  <CardContent className="px-0">
    <AspectRatio ratio={16/9}>
      <img
        src="/image.jpg"
        alt="Property"
        className="absolute inset-0 size-full object-cover"
      />
    </AspectRatio>
  </CardContent>
  <CardFooter className="flex justify-between">
    <div className="flex gap-2">
      <Badge variant="outline"><Bed className="size-3" /> 4</Badge>
      <Badge variant="outline"><Bath className="size-3" /> 2</Badge>
      <Badge variant="outline"><LandPlot className="size-3" /> 350m²</Badge>
    </div>
    <span className="font-semibold">$135,000</span>
  </CardFooter>
</Card>
```

### Card with Inline Image
```tsx
<Card className="w-[420px]">
  <CardContent>
    <AspectRatio ratio={2/1} className="rounded-md overflow-clip">
      <img
        src="/image.jpg"
        alt="Description"
        className="absolute inset-0 size-full object-cover"
      />
    </AspectRatio>
  </CardContent>
</Card>
```
- Inline images use `rounded-md` (8px) border radius
- Full-bleed images remove horizontal padding with `px-0` on CardContent

### Meeting Notes Card
```tsx
<Card className="w-[420px]">
  <CardHeader className="flex-row gap-2 items-center">
    <SquareTerminal className="size-12 text-primary" />
    <div className="flex flex-col gap-1">
      <CardTitle>Meeting Notes</CardTitle>
      <CardDescription>Transcript from the meeting with the client.</CardDescription>
    </div>
  </CardHeader>
  <CardContent>
    <div className="text-sm leading-5 text-card-foreground space-y-2">
      <p>Client requested dashboard redesign with focus on mobile responsiveness.</p>
      <ol className="list-decimal list-inside space-y-1">
        <li>New analytics widgets for daily/weekly metrics</li>
        <li>Simplified navigation menu</li>
        <li>Dark mode support</li>
        <li>Timeline: 6 weeks</li>
        <li>Follow-up meeting scheduled for next Tuesday</li>
      </ol>
    </div>
  </CardContent>
  <CardFooter>
    <AvatarGroup />
  </CardFooter>
</Card>
```

---

## Dark Mode

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Background | `white` | `#18181b` |
| Border | `#e4e4e7` | `rgba(255,255,255,0.1)` |
| Card Foreground | `#09090b` | `#fafafa` |
| Muted Foreground | `#71717a` | `#a1a1aa` |

Dark mode colors are applied automatically via CSS variables when the dark class is present on a parent element.

---

## Accessibility

- Styled container — no Radix interactive primitive
- Use semantic elements: `<h3>` in CardTitle, `<p>` in CardDescription
- If card is interactive, ensure entire card is focusable or use a link wrapper
- No special ARIA required for static display cards

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Card too wide | Set explicit width via `className="w-[420px]"` or use grid/flex container |
| Image has side padding | Add `px-0` to `CardContent` for full-bleed images |
| Footer buttons not aligned | Use `flex justify-between` or `flex-col gap-2` on CardFooter |
| Need compact card | Override padding with `py-4` on Card, reduce section gap |
| Header icon misaligned | Add `flex-row gap-2 items-center` to CardHeader |
| Title/description gap wrong | Wrap in div with `flex flex-col gap-1` when using icon header |

---

## See Also

- **Related Components:** [Dialog](./dialog.md) (card with modal), [Form](./form.md) (card with form)
- **Patterns:** [Layouts](../patterns/layouts.md) — Card layout patterns
- **Tokens:** [Colors](../tokens/colors.md) — Theme-aware color tokens

---

*Last updated: February 9, 2026*
