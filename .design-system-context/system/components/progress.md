# Progress

## Import
```tsx
import { Progress } from "@/components/ui/progress"
```

## Props
```tsx
interface ProgressProps {
  value?: number          // 0-100 percentage
  max?: number            // Default 100
  className?: string
}
```

---

## Structure

| Part | Tailwind |
|------|----------|
| Root (track) | `relative h-2 w-full overflow-hidden rounded-full bg-primary/20` |
| Indicator | `h-full bg-primary rounded-full transition-all` |

---

## Anatomy

```
┌─────────────────────────────────────────┐  ← Root (bg-primary/20)
│████████████████████                     │  ← Indicator (bg-primary)
└─────────────────────────────────────────┘
         └── width based on value prop
```

---

## Common Patterns

### Basic Progress
```tsx
<Progress value={33} />
```

### With Label
```tsx
<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Progress</span>
    <span className="text-muted-foreground">33%</span>
  </div>
  <Progress value={33} />
</div>
```

### Animated Progress
```tsx
const [progress, setProgress] = useState(0)

useEffect(() => {
  const timer = setTimeout(() => setProgress(66), 500)
  return () => clearTimeout(timer)
}, [])

<Progress value={progress} />
```

### Task Completion
```tsx
const completed = 3
const total = 5

<div className="space-y-2">
  <p className="text-sm text-muted-foreground">
    {completed} of {total} tasks completed
  </p>
  <Progress value={(completed / total) * 100} />
</div>
```

---

## States

| State | Appearance |
|-------|------------|
| Empty (0%) | Only track visible (`bg-primary/20`) |
| Partial | Indicator fills proportionally |
| Complete (100%) | Indicator fills entire track |
| Indeterminate | Use CSS animation (not built-in) |

---

## Indeterminate Pattern

```tsx
// Add to globals.css
@keyframes progress-indeterminate {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}

// Component usage
<Progress 
  value={undefined} 
  className="[&>div]:animate-[progress-indeterminate_1.5s_ease-in-out_infinite] [&>div]:w-1/4" 
/>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Value exceeds 100 | Clamp value: `Math.min(100, value)` |
| No visual feedback at 0% | Track (`bg-primary/20`) always visible |
| Jerky animation | Add `transition-all` to indicator |
| Indeterminate not supported | Use custom CSS animation pattern above |

---

*Last updated: December 19, 2025*




