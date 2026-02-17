import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function NavigationMenuPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Navigation Menu" description="Horizontal nav with mega-menu dropdown.">
                <div className="inline-flex flex-col">
                    <div className="flex items-center gap-1 bg-ds-background">
                        <button
                            type="button"
                            className="px-3 py-2 text-[14px] font-medium text-ds-foreground rounded-ds-md hover:bg-ds-accent"
                        >
                            Getting Started
                        </button>
                        <div className="relative">
                            <button
                                type="button"
                                className="px-3 py-2 text-[14px] font-medium text-ds-foreground rounded-ds-md bg-ds-accent text-ds-accent-foreground"
                            >
                                Components
                            </button>
                            <div className="absolute left-0 top-full mt-1 bg-ds-card border border-ds-border rounded-ds-lg shadow-ds p-4 min-w-[280px]">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="px-3 py-2 text-[14px] font-medium text-ds-foreground rounded-ds-md hover:bg-ds-accent">
                                        Alert Dialog
                                    </div>
                                    <div className="px-3 py-2 text-[14px] font-medium text-ds-foreground rounded-ds-md hover:bg-ds-accent">
                                        Hover Card
                                    </div>
                                    <div className="px-3 py-2 text-[14px] font-medium text-ds-foreground rounded-ds-md hover:bg-ds-accent">
                                        Progress
                                    </div>
                                    <div className="px-3 py-2 text-[14px] font-medium text-ds-foreground rounded-ds-md hover:bg-ds-accent">
                                        Tabs
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="px-3 py-2 text-[14px] font-medium text-ds-foreground rounded-ds-md hover:bg-ds-accent"
                        >
                            Documentation
                        </button>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
