import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function HoverCardPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Hover Card" description="Trigger link with hover card content.">
                <div className="space-y-2">
                    <a
                        href="#"
                        className="text-[14px] font-medium text-ds-primary hover:underline"
                        onClick={(e) => e.preventDefault()}
                    >
                        @nextjs
                    </a>
                    <div className="max-w-[320px] bg-ds-card text-ds-card-foreground border border-ds-border rounded-ds-lg shadow-ds-md p-4">
                        <div className="flex gap-3">
                            <div className="size-12 rounded-full bg-ds-muted flex items-center justify-center text-ds-muted-foreground text-[18px] font-semibold shrink-0">
                                N
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="font-semibold text-ds-foreground text-[14px]">Next.js</div>
                                <p className="text-[13px] text-ds-muted-foreground mt-1">
                                    The React Framework – created and maintained by @vercel.
                                </p>
                                <p className="text-[12px] text-ds-muted-foreground mt-2">
                                    Joined December 2021
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
