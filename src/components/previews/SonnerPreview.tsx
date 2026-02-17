import PreviewShell, { PreviewSection } from "./PreviewShell"
import { CheckCircle, XCircle } from "lucide-react"

export default function SonnerPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Default Toast" description="Standard toast notification with title and description.">
                <div className="max-w-[360px] bg-ds-card border border-ds-border rounded-ds-lg shadow-ds-lg p-4 flex flex-col gap-1">
                    <p className="text-[14px] font-semibold text-ds-foreground">Event has been created</p>
                    <p className="text-[14px] text-ds-muted-foreground">Sunday, December 03, 2023 at 9:00 AM</p>
                </div>
            </PreviewSection>

            <PreviewSection title="Success Toast" description="Toast with success icon.">
                <div className="max-w-[360px] bg-ds-card border border-ds-border rounded-ds-lg shadow-ds-lg p-4 flex items-start gap-3">
                    <CheckCircle className="size-5 text-ds-success shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                        <p className="text-[14px] font-semibold text-ds-foreground">Changes saved</p>
                        <p className="text-[14px] text-ds-muted-foreground">Your profile has been updated successfully.</p>
                    </div>
                </div>
            </PreviewSection>

            <PreviewSection title="Error Toast" description="Destructive toast for errors.">
                <div className="max-w-[360px] bg-ds-card border border-ds-destructive/30 rounded-ds-lg shadow-ds-lg p-4 flex items-start gap-3">
                    <XCircle className="size-5 text-ds-destructive shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                        <p className="text-[14px] font-semibold text-ds-destructive">Something went wrong</p>
                        <p className="text-[14px] text-ds-muted-foreground">There was an error processing your request.</p>
                    </div>
                </div>
            </PreviewSection>

            <PreviewSection title="With Action" description="Toast with an action button.">
                <div className="max-w-[360px] bg-ds-card border border-ds-border rounded-ds-lg shadow-ds-lg p-4 flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-[14px] font-semibold text-ds-foreground">Email sent</p>
                        <p className="text-[14px] text-ds-muted-foreground">The invitation has been sent.</p>
                    </div>
                    <button className="shrink-0 inline-flex items-center justify-center bg-ds-primary text-ds-primary-foreground text-[12px] font-semibold h-7 px-3 rounded-ds-md shadow-ds-xs">
                        Undo
                    </button>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
