# Tabs

## Import
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
```

## Props
```tsx
interface TabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  children: React.ReactNode
}

interface TabsTriggerProps {
  value: string
  disabled?: boolean
  className?: string
  children: React.ReactNode
}
```

---

## Structure

| Part | Tailwind |
|------|----------|
| TabsList | `h-9 bg-muted p-[3px] rounded-lg flex items-center` |
| TabsTrigger | `flex-1 px-2 py-1 rounded-md gap-2 text-sm font-semibold text-foreground` |
| TabsTrigger (active) | `bg-background shadow-sm` |
| TabsTrigger (inactive) | `bg-transparent` |
| TabsContent | `mt-2` |

---

## States

| State | Trigger Styling |
|-------|-----------------|
| Active | `bg-background shadow-sm border border-transparent` |
| Inactive | `bg-transparent` |
| Focus | `ring-[3px] ring-ring/50` |
| Disabled | `text-muted-foreground opacity-50 pointer-events-none` |

---

## Icons

**Size:** `size-4` (16px)
**Spacing:** `gap-2` (8px between icon and text)

```tsx
<TabsTrigger value="preview" className="gap-2">
  <Monitor className="size-4" />
  Preview
</TabsTrigger>
```

---

## Badge

**Style:** `h-5 min-w-5 px-1 rounded-full bg-primary text-xs font-bold text-primary-foreground`

```tsx
<TabsTrigger value="notifications" className="gap-2">
  Notifications
  <span className="h-5 min-w-5 px-1 rounded-full bg-primary text-xs font-bold text-primary-foreground flex items-center justify-center">
    8
  </span>
</TabsTrigger>
```

---

## Common Patterns

### Basic Tabs
```tsx
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings here.</TabsContent>
  <TabsContent value="password">Password settings here.</TabsContent>
</Tabs>
```

### With Icons
```tsx
<Tabs defaultValue="preview">
  <TabsList>
    <TabsTrigger value="preview" className="gap-2">
      <Monitor className="size-4" />
      Preview
    </TabsTrigger>
    <TabsTrigger value="code" className="gap-2">
      <Code className="size-4" />
      Code
    </TabsTrigger>
  </TabsList>
  <TabsContent value="preview">Preview content</TabsContent>
  <TabsContent value="code">Code content</TabsContent>
</Tabs>
```

### With Badge
```tsx
<Tabs defaultValue="billing">
  <TabsList>
    <TabsTrigger value="billing">Billing</TabsTrigger>
    <TabsTrigger value="notifications" className="gap-2">
      Notifications
      <Badge className="h-5 min-w-5 rounded-full">8</Badge>
    </TabsTrigger>
  </TabsList>
</Tabs>
```

### Controlled Tabs
```tsx
const [activeTab, setActiveTab] = useState("account")

<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
</Tabs>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Content not showing | Ensure `value` matches `defaultValue` or controlled `value` |
| Tabs not filling width | TabsTrigger uses `flex-1` by default |
| Icon alignment | Add `gap-2` to TabsTrigger for proper spacing |
| Badge spacing | Wrap badge in TabsTrigger with `gap-2` |

---

*Last updated: December 19, 2024*

