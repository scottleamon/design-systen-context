import PreviewShell, { PreviewSection } from "./PreviewShell"
import { LayoutDashboard, Inbox, Calendar, Settings } from "lucide-react"

export default function SidebarPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Sidebar" description="Sidebar layout with nav sections and user area.">
                <div className="flex border border-ds-border rounded-ds-lg overflow-hidden max-w-2xl">
                    <div className="w-56 bg-ds-card border-r border-ds-border flex flex-col min-h-[240px]">
                        <div className="p-4 border-b border-ds-border">
                            <span className="text-[14px] font-semibold text-ds-foreground">My App</span>
                        </div>
                        <nav className="flex-1 p-2 space-y-1">
                            <div className="flex items-center gap-2 px-3 py-2 text-[14px] text-ds-foreground rounded-ds-md bg-ds-accent text-ds-accent-foreground">
                                <LayoutDashboard className="size-4 shrink-0" />
                                Dashboard
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 text-[14px] text-ds-foreground rounded-ds-md hover:bg-ds-accent">
                                <Inbox className="size-4 shrink-0 text-ds-muted-foreground" />
                                Inbox
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 text-[14px] text-ds-foreground rounded-ds-md hover:bg-ds-accent">
                                <Calendar className="size-4 shrink-0 text-ds-muted-foreground" />
                                Calendar
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 text-[14px] text-ds-foreground rounded-ds-md hover:bg-ds-accent">
                                <Settings className="size-4 shrink-0 text-ds-muted-foreground" />
                                Settings
                            </div>
                        </nav>
                        <div className="p-2 border-t border-ds-border">
                            <div className="flex items-center gap-2 px-3 py-2">
                                <div className="size-8 rounded-ds-full bg-ds-muted shrink-0" />
                                <div className="flex flex-col min-w-0">
                                    <span className="text-[13px] font-medium text-ds-foreground truncate">
                                        John Doe
                                    </span>
                                    <span className="text-[12px] text-ds-muted-foreground truncate">
                                        john@example.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-ds-background p-6">
                        <h2 className="text-[16px] font-semibold text-ds-foreground mb-2">Main Content</h2>
                        <p className="text-[14px] text-ds-muted-foreground">
                            This is the main content area. The sidebar provides navigation to different sections
                            of the application.
                        </p>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
