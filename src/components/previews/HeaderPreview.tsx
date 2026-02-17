import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function HeaderPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Header" description="Navbar with logo, nav links, and user avatar.">
                <div className="bg-ds-card text-ds-card-foreground border-b border-ds-border">
                    <div className="flex items-center justify-between h-14 px-6">
                        <div className="font-semibold text-ds-foreground text-[16px]">TimelyCare</div>
                        <nav className="flex items-center gap-6">
                            <span className="text-[14px] font-medium text-ds-foreground">Dashboard</span>
                            <span className="text-[14px] text-ds-muted-foreground">Appointments</span>
                            <span className="text-[14px] text-ds-muted-foreground">Messages</span>
                        </nav>
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-ds-primary text-ds-primary-foreground flex items-center justify-center text-[14px] font-medium">
                                JD
                            </div>
                            <span className="text-[14px] font-medium text-ds-foreground">John Doe</span>
                        </div>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
