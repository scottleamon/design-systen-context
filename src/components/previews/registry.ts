import dynamic from "next/dynamic"
import type { ComponentType } from "react"

const previewRegistry: Record<string, ComponentType> = {
    accordion: dynamic(() => import("./AccordionPreview")),
    alert: dynamic(() => import("./AlertPreview")),
    "alert-dialog": dynamic(() => import("./AlertDialogPreview")),
    "aspect-ratio": dynamic(() => import("./AspectRatioPreview")),
    avatar: dynamic(() => import("./AvatarPreview")),
    badge: dynamic(() => import("./BadgePreview")),
    breadcrumb: dynamic(() => import("./BreadcrumbPreview")),
    button: dynamic(() => import("./ButtonPreview")),
    calendar: dynamic(() => import("./CalendarPreview")),
    card: dynamic(() => import("./CardPreview")),
    carousel: dynamic(() => import("./CarouselPreview")),
    chart: dynamic(() => import("./ChartPreview")),
    checkbox: dynamic(() => import("./CheckboxPreview")),
    collapsible: dynamic(() => import("./CollapsiblePreview")),
    combobox: dynamic(() => import("./ComboboxPreview")),
    command: dynamic(() => import("./CommandPreview")),
    "context-menu": dynamic(() => import("./ContextMenuPreview")),
    "data-table": dynamic(() => import("./DataTablePreview")),
    "date-picker": dynamic(() => import("./DatePickerPreview")),
    dialog: dynamic(() => import("./DialogPreview")),
    drawer: dynamic(() => import("./DrawerPreview")),
    "dropdown-menu": dynamic(() => import("./DropdownMenuPreview")),
    form: dynamic(() => import("./FormPreview")),
    header: dynamic(() => import("./HeaderPreview")),
    "hover-card": dynamic(() => import("./HoverCardPreview")),
    input: dynamic(() => import("./InputPreview")),
    "input-otp": dynamic(() => import("./InputOtpPreview")),
    label: dynamic(() => import("./LabelPreview")),
    menubar: dynamic(() => import("./MenubarPreview")),
    "navigation-menu": dynamic(() => import("./NavigationMenuPreview")),
    pagination: dynamic(() => import("./PaginationPreview")),
    popover: dynamic(() => import("./PopoverPreview")),
    progress: dynamic(() => import("./ProgressPreview")),
    "radio-group": dynamic(() => import("./RadioGroupPreview")),
    resizable: dynamic(() => import("./ResizablePreview")),
    "scroll-area": dynamic(() => import("./ScrollAreaPreview")),
    select: dynamic(() => import("./SelectPreview")),
    separator: dynamic(() => import("./SeparatorPreview")),
    sheet: dynamic(() => import("./SheetPreview")),
    sidebar: dynamic(() => import("./SidebarPreview")),
    skeleton: dynamic(() => import("./SkeletonPreview")),
    slider: dynamic(() => import("./SliderPreview")),
    sonner: dynamic(() => import("./SonnerPreview")),
    switch: dynamic(() => import("./SwitchPreview")),
    table: dynamic(() => import("./TablePreview")),
    tabs: dynamic(() => import("./TabsPreview")),
    textarea: dynamic(() => import("./TextareaPreview")),
    toggle: dynamic(() => import("./TogglePreview")),
    "toggle-group": dynamic(() => import("./ToggleGroupPreview")),
    tooltip: dynamic(() => import("./TooltipPreview")),
    "icons-full-list": dynamic(() => import("./IconsFullListPreview")),
    inventory: dynamic(() => import("./IconInventoryPreview")),
    // Token previews
    colors: dynamic(() => import("./tokens/ColorsPreview")),
    typography: dynamic(() => import("./tokens/TypographyPreview")),
    spacing: dynamic(() => import("./tokens/SpacingPreview")),
    shadows: dynamic(() => import("./tokens/ShadowsPreview")),
    radii: dynamic(() => import("./tokens/RadiiPreview")),
    motion: dynamic(() => import("./tokens/MotionPreview")),
    breakpoints: dynamic(() => import("./tokens/BreakpointsPreview")),
    themes: dynamic(() => import("./tokens/ThemesPreview")),
}

export function getPreviewComponent(slug: string): ComponentType | null {
    return previewRegistry[slug] ?? null
}

export function hasPreview(slug: string): boolean {
    return slug in previewRegistry
}
