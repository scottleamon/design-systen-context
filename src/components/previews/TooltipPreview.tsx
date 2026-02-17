import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function TooltipPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Tooltip (Top)" description="Static tooltip above a button.">
                <div className="flex flex-col items-center gap-2 pt-12">
                    <div className="relative flex flex-col items-center">
                        <div className="rounded-ds-md bg-ds-foreground px-3 py-1.5 text-[12px] text-ds-background shadow-ds-md">
                            Add to favorites
                        </div>
                        <div
                            className="border-4 border-transparent border-t-ds-foreground"
                            style={{
                                position: "absolute",
                                top: "100%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                marginTop: "-1px",
                            }}
                        />
                    </div>
                    <button className="rounded-ds-md bg-ds-primary px-4 py-2 text-[14px] font-semibold text-ds-primary-foreground">
                        Hover me
                    </button>
                </div>
            </PreviewSection>

            <PreviewSection title="Tooltip Positions" description="Conceptual labels for top, right, bottom, left.">
                <div className="flex flex-col items-center gap-16 py-8">
                    <div className="relative flex flex-col items-center">
                        <div className="rounded-ds-md bg-ds-foreground px-3 py-1.5 text-[12px] text-ds-background shadow-ds-md">
                            Top
                        </div>
                        <div
                            className="border-4 border-transparent border-t-ds-foreground"
                            style={{
                                position: "absolute",
                                top: "100%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                marginTop: "-1px",
                            }}
                        />
                    </div>
                    <div className="flex items-center gap-16">
                        <div className="relative flex flex-col items-end">
                            <div className="rounded-ds-md bg-ds-foreground px-3 py-1.5 text-[12px] text-ds-background shadow-ds-md">
                                Left
                            </div>
                            <div
                                className="absolute right-0 top-1/2 -translate-y-1/2 border-4 border-transparent border-r-ds-foreground"
                                style={{ marginRight: "-9px" }}
                            />
                        </div>
                        <button className="rounded-ds-md border border-ds-border px-4 py-2 text-[14px] font-medium text-ds-foreground">
                            Target
                        </button>
                        <div className="relative flex flex-col items-start">
                            <div className="rounded-ds-md bg-ds-foreground px-3 py-1.5 text-[12px] text-ds-background shadow-ds-md">
                                Right
                            </div>
                            <div
                                className="absolute left-0 top-1/2 -translate-y-1/2 border-4 border-transparent border-l-ds-foreground"
                                style={{ marginLeft: "-9px" }}
                            />
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <button className="rounded-ds-md border border-ds-border px-4 py-2 text-[14px] font-medium text-ds-foreground">
                            Target
                        </button>
                        <div className="relative flex flex-col items-center">
                            <div
                                className="absolute bottom-full mb-2 border-4 border-transparent border-b-ds-foreground"
                                style={{ left: "50%", transform: "translateX(-50%)" }}
                            />
                            <div className="rounded-ds-md bg-ds-foreground px-3 py-1.5 text-[12px] text-ds-background shadow-ds-md">
                                Bottom
                            </div>
                        </div>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
