import PreviewShell, { PreviewSection } from "./PreviewShell"
import { User } from "lucide-react"

export default function AvatarPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Avatar Sizes" description="Avatar circles in sm (32px), default (40px), and lg (48px).">
                <div className="flex flex-wrap items-end gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-8 rounded-ds-full bg-ds-muted flex items-center justify-center text-ds-foreground text-[12px] font-semibold">
                            JD
                        </div>
                        <span className="text-[12px] text-ds-muted-foreground">sm</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-10 rounded-ds-full bg-ds-muted flex items-center justify-center text-ds-foreground text-[14px] font-semibold">
                            JD
                        </div>
                        <span className="text-[12px] text-ds-muted-foreground">default</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-12 rounded-ds-full bg-ds-muted flex items-center justify-center text-ds-foreground text-[16px] font-semibold">
                            JD
                        </div>
                        <span className="text-[12px] text-ds-muted-foreground">lg</span>
                    </div>
                </div>
            </PreviewSection>

            <PreviewSection title="Fallback Avatar" description="Avatar with User icon when no image or initials.">
                <div className="flex flex-wrap items-center gap-6">
                    <div className="size-10 rounded-ds-full bg-ds-muted flex items-center justify-center text-ds-muted-foreground">
                        <User className="size-5" />
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
