import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function LabelPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Label" description="Labels in different contexts.">
                <div className="space-y-8 max-w-[400px]">
                    <div>
                        <p className="text-[12px] text-ds-muted-foreground mb-2">Standalone label</p>
                        <label className="text-[14px] font-semibold leading-5 text-ds-foreground">
                            Email address
                        </label>
                    </div>
                    <div>
                        <p className="text-[12px] text-ds-muted-foreground mb-2">Label with input</p>
                        <label className="block text-[14px] font-semibold leading-5 text-ds-foreground mb-1.5">
                            Username
                        </label>
                        <input
                            type="text"
                            readOnly
                            placeholder="Enter username"
                            className="w-full h-10 px-3 rounded-ds-md border border-ds-input bg-ds-background text-ds-foreground text-[14px] placeholder:text-ds-muted-foreground"
                        />
                    </div>
                    <div>
                        <p className="text-[12px] text-ds-muted-foreground mb-2">Label with checkbox</p>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <div className="size-4 rounded border border-ds-input flex items-center justify-center">
                                <div className="size-2.5 rounded-sm bg-ds-primary" />
                            </div>
                            <span className="text-[14px] font-semibold leading-5 text-ds-foreground">
                                Accept terms and conditions
                            </span>
                        </label>
                    </div>
                    <div>
                        <p className="text-[12px] text-ds-muted-foreground mb-2">Disabled label</p>
                        <label className="text-[14px] font-semibold leading-5 text-ds-foreground opacity-50">
                            Disabled field
                        </label>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
