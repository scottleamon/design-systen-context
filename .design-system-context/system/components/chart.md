# Chart

## Import
```tsx
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
```

## Props
```tsx
interface ChartConfig {
  [key: string]: {
    label: string
    color?: string  // Use CSS variables like "hsl(var(--chart-1))"
    icon?: React.ComponentType
  }
}

interface ChartContainerProps {
  config: ChartConfig
  className?: string
  children: React.ReactNode
}
```

---

## Chart Types

### Bar Chart

| Type | Use For |
|------|---------|
| Basic | Simple category comparisons |
| Horizontal | Long category names, many categories |
| Stacked | Composition + total values |
| Multiple | Direct comparison of multiple series |
| Negative | Positive/negative values (profit/loss) |
| Label | When exact values needed inline |

### Area Chart

| Type | Use For |
|------|---------|
| Basic | Volume/magnitude over time |
| Gradient | More visually appealing areas |
| Linear | Exact data without smoothing |
| Step | Discrete value changes, pricing |
| Stacked | Composition over time |
| Stacked Expanded | Proportion changes (100% height) |

### Line Chart

| Type | Use For |
|------|---------|
| Basic | Trends over time |
| Linear | Exact data points |
| Step | Discrete values |
| Multiple | Comparing multiple series |
| Dots | Emphasizing individual data points |
| Label | Inline value display |

### Pie/Donut Chart

| Type | Use For |
|------|---------|
| Full Pie | Proportions of a whole |
| Donut | Proportions with center info |
| Interactive | Interactive with center metric display |
| Stacked Donut | Multiple concentric rings |

### Radar Chart

| Type | Use For |
|------|---------|
| Basic | Multi-dimensional comparison |
| Multiple | Comparing entities across dimensions |
| Lines Only | Cleaner look for multiple series |
| Grid Circle | Traditional radar appearance |

### Radial Chart

| Type | Use For |
|------|---------|
| Basic | Multiple progress metrics |
| Text | Single metric with center text |
| Stacked | Comparing multiple metrics |

---

## Chart Colors

Use these CSS variables for data series:

| Token | Tailwind Variable | Use For |
|-------|-------------------|---------|
| Chart 1 | `--chart-1` | Primary series (blue) |
| Chart 2 | `--chart-2` | Second series (green) |
| Chart 3 | `--chart-3` | Third series (orange) |
| Chart 4 | `--chart-4` | Fourth series (red-brown) |
| Chart 5 | `--chart-5` | Fifth series (pink) |

```tsx
// In chart config
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile", 
    color: "hsl(var(--chart-2))",
  },
}
```

---

## Common Patterns

### Basic Bar Chart
```tsx
import { Bar, BarChart, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", value: 186 },
  { month: "Feb", value: 305 },
  { month: "Mar", value: 237 },
]

const chartConfig = {
  value: { label: "Value", color: "hsl(var(--chart-1))" },
}

<ChartContainer config={chartConfig}>
  <BarChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="value" fill="var(--color-value)" radius={4} />
  </BarChart>
</ChartContainer>
```

### Area Chart with Gradient
```tsx
import { Area, AreaChart, XAxis, YAxis } from "recharts"

<ChartContainer config={chartConfig}>
  <AreaChart data={data}>
    <defs>
      <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="var(--color-value)" stopOpacity={0.8} />
        <stop offset="95%" stopColor="var(--color-value)" stopOpacity={0.1} />
      </linearGradient>
    </defs>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Area
      dataKey="value"
      type="monotone"
      fill="url(#fillValue)"
      stroke="var(--color-value)"
    />
  </AreaChart>
</ChartContainer>
```

### Line Chart with Multiple Series
```tsx
import { Line, LineChart, XAxis, YAxis } from "recharts"

const chartConfig = {
  desktop: { label: "Desktop", color: "hsl(var(--chart-1))" },
  mobile: { label: "Mobile", color: "hsl(var(--chart-2))" },
}

<ChartContainer config={chartConfig}>
  <LineChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Line dataKey="desktop" stroke="var(--color-desktop)" />
    <Line dataKey="mobile" stroke="var(--color-mobile)" />
  </LineChart>
</ChartContainer>
```

### Donut Chart
```tsx
import { Pie, PieChart } from "recharts"

const data = [
  { name: "Chrome", value: 275, fill: "var(--color-chrome)" },
  { name: "Safari", value: 200, fill: "var(--color-safari)" },
  { name: "Firefox", value: 187, fill: "var(--color-firefox)" },
]

<ChartContainer config={chartConfig}>
  <PieChart>
    <ChartTooltip content={<ChartTooltipContent />} />
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      innerRadius={60}
      outerRadius={80}
    />
  </PieChart>
</ChartContainer>
```

---

## Tooltip & Legend

```tsx
// Basic tooltip
<ChartTooltip content={<ChartTooltipContent />} />

// Tooltip with indicator
<ChartTooltip content={<ChartTooltipContent indicator="line" />} />

// Legend
<ChartLegend content={<ChartLegendContent />} />
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Colors not applying | Use CSS variables in config: `"hsl(var(--chart-1))"` |
| Tooltip not showing | Wrap chart in `ChartContainer` with config |
| Legend items wrong color | Ensure config keys match data keys |
| Grid lines too prominent | Use `stroke="hsl(var(--border))"` with low opacity |
| Charts not responsive | `ChartContainer` handles responsiveness |

---

*Last updated: December 17, 2025*
