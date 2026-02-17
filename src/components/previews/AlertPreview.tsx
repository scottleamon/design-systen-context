import PreviewShell, { PreviewSection } from "./PreviewShell"
import { CircleCheck, AlertCircle } from "lucide-react"

export default function AlertPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Default Alert" description="Alert with icon, title, and description.">
                <div className="flex flex-col gap-4 max-w-[480px]">
                    <div className="flex gap-3 p-4 rounded-ds-lg border border-ds-border bg-ds-background">
                        <CircleCheck className="size-5 text-ds-foreground shrink-0 mt-0.5" />
                        <div className="flex flex-col gap-1">
                            <h4 className="text-[14px] font-semibold text-ds-foreground">Success</h4>
                            <p className="text-[14px] text-ds-muted-foreground leading-5">
                                Your changes have been saved successfully.
                            </p>
                        </div>
                    </div>
                </div>
            </PreviewSection>

            <PreviewSection title="Destructive Alert" description="Alert for errors or destructive actions.">
                <div className="flex flex-col gap-4 max-w-[480px]">
                    <div className="flex gap-3 p-4 rounded-ds-lg border border-ds-destructive bg-ds-destructive/10">
                        <AlertCircle className="size-5 text-ds-destructive shrink-0 mt-0.5" />
                        <div className="flex flex-col gap-1">
                            <h4 className="text-[14px] font-semibold text-ds-destructive">Error</h4>
                            <p className="text-[14px] text-ds-destructive/90 leading-5">
                                Something went wrong. Please try again.
                            </p>
                        </div>
                    </div>
                </div>
            </PreviewSection>

            <PreviewSection title="Alert with Action" description="Alert with an action button.">
                <div className="flex flex-col gap-4 max-w-[480px]">
                    <div className="flex gap-3 p-4 rounded-ds-lg border border-ds-border bg-ds-background">
                        <CircleCheck className="size-5 text-ds-foreground shrink-0 mt-0.5" />
                        <div className="flex flex-col gap-2 flex-1">
                            <div>
                                <h4 className="text-[14px] font-semibold text-ds-foreground">Update available</h4>
                                <p className="text-[14px] text-ds-muted-foreground leading-5 mt-1">
                                    A new version is available. Download now to get the latest features.
                                </p>
                            </div>
                            <button className="inline-flex items-center justify-center self-start bg-ds-primary text-ds-primary-foreground text-[14px] font-semibold leading-5 h-8 px-3 rounded-ds-md shadow-ds-xs">
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
