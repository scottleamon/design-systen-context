import PreviewShell, { PreviewSection } from "./PreviewShell"
import { Check, AlertTriangle, X } from "lucide-react"

const badgeBase = "inline-flex items-center font-semibold text-[12px] leading-4 px-2 py-0.5 rounded-ds-md"

export default function BadgePreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Variants" description="All 6 badge variants with semantic color usage.">
                <div className="flex flex-wrap items-center gap-3">
                    <span className={`${badgeBase} bg-ds-primary text-ds-primary-foreground`}>
                        Default
                    </span>
                    <span className={`${badgeBase} bg-ds-secondary text-ds-secondary-foreground`}>
                        Secondary
                    </span>
                    <span className={`${badgeBase} bg-transparent text-ds-foreground border border-ds-border`}>
                        Outline
                    </span>
                    <span className={`${badgeBase} bg-ds-destructive text-ds-destructive-foreground`}>
                        Destructive
                    </span>
                    <span className={`${badgeBase} bg-ds-success text-ds-success-foreground`}>
                        Success
                    </span>
                    <span className={`${badgeBase} bg-ds-warning text-ds-warning-foreground`}>
                        Warning
                    </span>
                </div>
            </PreviewSection>

            <PreviewSection title="With Icons" description="Badges with leading icons at 12x12px with 4px gap.">
                <div className="flex flex-wrap items-center gap-3">
                    <span className={`${badgeBase} gap-1 bg-ds-success text-ds-success-foreground`}>
                        <Check className="size-3" />
                        Approved
                    </span>
                    <span className={`${badgeBase} gap-1 bg-ds-warning text-ds-warning-foreground`}>
                        <AlertTriangle className="size-3" />
                        Pending
                    </span>
                    <span className={`${badgeBase} gap-1 bg-ds-destructive text-ds-destructive-foreground`}>
                        <X className="size-3" />
                        Rejected
                    </span>
                </div>
            </PreviewSection>

            <PreviewSection title="Use Cases" description="Common real-world badge applications.">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="text-[14px] font-medium text-ds-foreground">Status:</span>
                        <span className={`${badgeBase} bg-ds-success text-ds-success-foreground`}>
                            Active
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[14px] font-medium text-ds-foreground">Category:</span>
                        <span className={`${badgeBase} bg-ds-secondary text-ds-secondary-foreground`}>
                            Wellness
                        </span>
                        <span className={`${badgeBase} bg-ds-secondary text-ds-secondary-foreground`}>
                            Counseling
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[14px] font-medium text-ds-foreground">Priority:</span>
                        <span className={`${badgeBase} bg-ds-destructive text-ds-destructive-foreground`}>
                            High
                        </span>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
