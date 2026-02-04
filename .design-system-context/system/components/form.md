# Form

## Import
```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
```

## Props
```tsx
interface FormFieldProps {
  name: string
  control: Control<any>
  render: ({ field }) => React.ReactNode
}

interface FormItemProps {
  className?: string
  children: React.ReactNode
}
```

---

## Form Layouts

| Layout | Use For | Structure |
|--------|---------|-----------|
| Single column | Simple forms, mobile | `space-y-4` stacked fields |
| Two column | Complex forms, desktop | `grid grid-cols-2 gap-4` or flex with two columns |
| Card wrapper | Standalone forms | Card with Header, Content, Footer |

### Choosing a Layout
- Use **single column** for 1-4 fields or mobile views
- Use **two column** for 5+ fields on desktop
- Always wrap in **Card** for visual grouping

---

## Field Spacing

| Element | Spacing | Token |
|---------|---------|-------|
| Card padding | 24px | `p-6` |
| Between card sections | 24px | `gap-6` |
| Between fields | 16px | `space-y-4` or `gap-4` |
| Label to input | 8px | `space-y-2` |
| Input to description | 8px | Built into FormItem |
| Title to description (header) | 6px | `gap-1.5` |
| Form to footer | 24px | Part of card structure |

---

## Card Constraints

| Property | Value |
|----------|-------|
| Max width | 374px |
| Min width | 190px |
| Border radius | `rounded-lg` (10px) |
| Padding | `p-6` (24px) |

---

## Supported Field Types

Forms commonly include these field components:
- **Input** — text fields with label and optional description
- **Select** — dropdown selection
- **Combobox** — searchable dropdown with optional avatar
- **Textarea** — multi-line text input
- **Switch** — toggle with label and description
- **Radio Group** — single selection from options
- **Checkbox** — boolean selection with label and description
- **Date Picker** — date selection trigger

---

## Common Patterns

### Basic Form
```tsx
<Card>
  <CardHeader>
    <CardTitle>Sign up</CardTitle>
    <CardDescription>Create your new account.</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="name@example.com" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </CardContent>
  <CardFooter>
    <Button type="submit" className="w-full">Create account</Button>
  </CardFooter>
</Card>
```

### Two Column Form
```tsx
<CardContent>
  <div className="flex gap-4">
    <div className="flex-1 space-y-4">
      <FormField name="firstName" /* ... */ />
      <FormField name="email" /* ... */ />
    </div>
    <div className="flex-1 space-y-4">
      <FormField name="lastName" /* ... */ />
      <FormField name="phone" /* ... */ />
    </div>
  </div>
</CardContent>
```

### Responsive Two Column
```tsx
<CardContent>
  <div className="flex flex-col md:flex-row gap-4">
    <div className="flex-1 space-y-4">
      {/* Left column fields */}
    </div>
    <div className="flex-1 space-y-4">
      {/* Right column fields */}
    </div>
  </div>
</CardContent>
```

### With Multiple Actions
```tsx
<CardFooter className="flex justify-between">
  <Button variant="outline" type="button">Cancel</Button>
  <Button type="submit">Submit</Button>
</CardFooter>
```

### Field with Description
```tsx
<FormItem>
  <FormLabel>Bio</FormLabel>
  <FormControl>
    <Textarea placeholder="Tell us about yourself" {...field} />
  </FormControl>
  <FormDescription>Max 500 characters.</FormDescription>
  <FormMessage />
</FormItem>
```

### With Switch Field
```tsx
<FormField
  control={form.control}
  name="notifications"
  render={({ field }) => (
    <FormItem className="flex gap-3 items-start">
      <FormControl>
        <Switch checked={field.value} onCheckedChange={field.onChange} />
      </FormControl>
      <div className="space-y-1.5">
        <FormLabel>Enable notifications</FormLabel>
        <FormDescription>Receive email notifications.</FormDescription>
      </div>
    </FormItem>
  )}
/>
```

### With Checkbox Field
```tsx
<FormField
  control={form.control}
  name="terms"
  render={({ field }) => (
    <FormItem className="flex gap-2 items-start">
      <FormControl>
        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
      </FormControl>
      <div className="space-y-1.5">
        <FormLabel>Accept terms</FormLabel>
        <FormDescription>I agree to the terms and conditions.</FormDescription>
      </div>
    </FormItem>
  )}
/>
```

### With Radio Group
```tsx
<FormField
  control={form.control}
  name="type"
  render={({ field }) => (
    <FormItem className="space-y-2">
      <FormLabel>Select type</FormLabel>
      <FormControl>
        <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <Label htmlFor="option1">Option 1</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option2" id="option2" />
            <Label htmlFor="option2">Option 2</Label>
          </div>
        </RadioGroup>
      </FormControl>
    </FormItem>
  )}
/>
```

---

## Gotchas

| Problem | Solution |
|---------|----------|
| Validation not showing | Wrap input in `FormControl`, add `FormMessage` |
| Submit not working | Wrap entire form in `Form` component with `onSubmit` |
| Fields not registering | Pass `{...field}` spread to input components |
| Two columns on mobile | Add `flex-col md:flex-row` for responsive |
| Switch/Checkbox alignment | Use `flex items-start gap-3` for horizontal layout |
| Card too wide | Apply `max-w-[374px]` to constrain width |

---

## See Also

- **Accessibility:** [Form Accessibility Requirements](../a11y/forms.md) - Error handling, label associations, screen reader behavior
- **Related Components:** [Input](./input.md), [Select](./select.md), [Checkbox](./checkbox.md), [Radio Group](./radio-group.md)
- **Patterns:** [Card with Form](../patterns/compositions.md#card-with-form)

---

*Last updated: December 18, 2025*
