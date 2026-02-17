import PreviewShell, { PreviewSection } from "./PreviewShell"
import { CreditCard, Bell } from "lucide-react"

export default function CardPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Default Card" description="Standard card with header, content, and footer sections.">
                <div className="max-w-[420px]">
                    <div className="bg-ds-card text-ds-card-foreground border border-ds-border rounded-ds-xl shadow-ds-sm overflow-clip flex flex-col gap-6 py-6">
                        {/* CardHeader */}
                        <div className="px-6 flex flex-col gap-1.5">
                            <h3 className="text-[16px] font-bold leading-none text-ds-card-foreground">
                                Card Title
                            </h3>
                            <p className="text-[14px] leading-5 text-ds-muted-foreground">
                                This is a card description with supporting text.
                            </p>
                        </div>
                        {/* CardContent */}
                        <div className="px-6">
                            <p className="text-[14px] leading-5 text-ds-card-foreground">
                                Card content goes here. This area contains the main body of the card,
                                which can include text, forms, lists, or any other content.
                            </p>
                        </div>
                        {/* CardFooter */}
                        <div className="px-6 flex items-center gap-2">
                            <button className="inline-flex items-center justify-center bg-transparent text-ds-primary border border-ds-border text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs">
                                Cancel
                            </button>
                            <button className="inline-flex items-center justify-center bg-ds-primary text-ds-primary-foreground text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </PreviewSection>

            <PreviewSection title="Header with Icon" description="Card header with a leading icon using the theme's primary color.">
                <div className="max-w-[420px]">
                    <div className="bg-ds-card text-ds-card-foreground border border-ds-border rounded-ds-xl shadow-ds-sm overflow-clip flex flex-col gap-6 py-6">
                        <div className="px-6 flex items-start gap-3">
                            <div className="size-10 rounded-ds-lg bg-ds-accent flex items-center justify-center shrink-0">
                                <Bell className="size-5 text-ds-accent-foreground" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <h3 className="text-[16px] font-bold leading-none text-ds-card-foreground">
                                    Notifications
                                </h3>
                                <p className="text-[14px] leading-5 text-ds-muted-foreground">
                                    You have 3 unread messages.
                                </p>
                            </div>
                        </div>
                        <div className="px-6">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between py-2 border-b border-ds-border">
                                    <span className="text-[14px] text-ds-card-foreground">New appointment scheduled</span>
                                    <span className="text-[12px] text-ds-muted-foreground">2m ago</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-ds-border">
                                    <span className="text-[14px] text-ds-card-foreground">Session reminder</span>
                                    <span className="text-[12px] text-ds-muted-foreground">1h ago</span>
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <span className="text-[14px] text-ds-card-foreground">Profile updated</span>
                                    <span className="text-[12px] text-ds-muted-foreground">3h ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PreviewSection>

            <PreviewSection title="Compact Card" description="Minimal card without footer, used for info display.">
                <div className="grid grid-cols-2 gap-4 max-w-[500px]">
                    <div className="bg-ds-card text-ds-card-foreground border border-ds-border rounded-ds-xl shadow-ds-sm overflow-clip flex flex-col gap-4 py-6">
                        <div className="px-6 flex flex-col gap-1">
                            <p className="text-[12px] font-semibold text-ds-muted-foreground uppercase tracking-wider">
                                Total Sessions
                            </p>
                            <p className="text-[24px] font-bold text-ds-card-foreground leading-none">
                                1,284
                            </p>
                        </div>
                        <div className="px-6">
                            <p className="text-[12px] text-ds-muted-foreground">
                                <span className="text-ds-success font-semibold">+12%</span> from last month
                            </p>
                        </div>
                    </div>
                    <div className="bg-ds-card text-ds-card-foreground border border-ds-border rounded-ds-xl shadow-ds-sm overflow-clip flex flex-col gap-4 py-6">
                        <div className="px-6 flex flex-col gap-1">
                            <p className="text-[12px] font-semibold text-ds-muted-foreground uppercase tracking-wider">
                                Active Users
                            </p>
                            <p className="text-[24px] font-bold text-ds-card-foreground leading-none">
                                573
                            </p>
                        </div>
                        <div className="px-6">
                            <p className="text-[12px] text-ds-muted-foreground">
                                <span className="text-ds-success font-semibold">+4%</span> from last month
                            </p>
                        </div>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
