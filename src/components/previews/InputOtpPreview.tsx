import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function InputOtpPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Input OTP" description="OTP digit boxes with group separators.">
                <div className="space-y-8">
                    <div>
                        <p className="text-[12px] text-ds-muted-foreground mb-2">Filled example</p>
                        <div className="flex items-center gap-1">
                            <div className="size-10 flex items-center justify-center rounded-ds-md border border-ds-input bg-ds-background text-ds-foreground text-[16px] font-semibold">
                                1
                            </div>
                            <div className="size-10 flex items-center justify-center rounded-ds-md border border-ds-input bg-ds-background text-ds-foreground text-[16px] font-semibold">
                                2
                            </div>
                            <div className="size-10 flex items-center justify-center rounded-ds-md border border-ds-input bg-ds-background text-ds-foreground text-[16px] font-semibold">
                                3
                            </div>
                            <span className="text-ds-muted-foreground text-[16px] font-semibold px-1">-</span>
                            <div className="size-10 flex items-center justify-center rounded-ds-md border border-ds-input bg-ds-background text-ds-foreground text-[16px] font-semibold">
                                4
                            </div>
                            <div className="size-10 flex items-center justify-center rounded-ds-md border border-ds-input bg-ds-background text-ds-foreground text-[16px] font-semibold">
                                5
                            </div>
                            <div className="size-10 flex items-center justify-center rounded-ds-md border border-ds-input bg-ds-background text-ds-foreground text-[16px] font-semibold">
                                6
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-[12px] text-ds-muted-foreground mb-2">Empty example</p>
                        <div className="flex items-center gap-1">
                            <div className="size-10 flex items-center justify-center rounded-ds-md border border-ds-input bg-ds-background text-ds-muted-foreground text-[16px] font-semibold">
                                &nbsp;
                            </div>
                            <div className="size-10 flex items-center justify-center rounded-ds-md border border-ds-input bg-ds-background text-ds-muted-foreground text-[16px] font-semibold">
                                &nbsp;
                            </div>
                            <div className="size-10 flex items-center justify-center rounded-ds-md border border-ds-input bg-ds-background text-ds-muted-foreground text-[16px] font-semibold">
                                &nbsp;
                            </div>
                            <span className="text-ds-muted-foreground text-[16px] font-semibold px-1">-</span>
                            <div className="size-10 flex items-center justify-center rounded-ds-md border border-ds-input bg-ds-background text-ds-muted-foreground text-[16px] font-semibold">
                                &nbsp;
                            </div>
                            <div className="size-10 flex items-center justify-center rounded-ds-md border border-ds-input bg-ds-background text-ds-muted-foreground text-[16px] font-semibold">
                                &nbsp;
                            </div>
                            <div className="size-10 flex items-center justify-center rounded-ds-md border border-ds-input bg-ds-background text-ds-muted-foreground text-[16px] font-semibold">
                                &nbsp;
                            </div>
                        </div>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
