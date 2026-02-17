import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function SheetPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Sheet" description="Side sheet panel with form content.">
                <div className="relative border border-ds-border rounded-ds-lg overflow-hidden max-w-2xl">
                    <div className="absolute inset-0 bg-ds-background/80" />
                    <div className="relative flex">
                        <div className="flex-1 p-8 min-h-[200px]" />
                        <div className="w-80 bg-ds-card border-l border-ds-border shadow-ds-lg p-6 flex flex-col gap-6">
                            <div>
                                <h3 className="text-[16px] font-semibold text-ds-foreground">Edit Profile</h3>
                                <p className="text-[13px] text-ds-muted-foreground mt-1">
                                    Make changes to your profile here.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[13px] text-ds-foreground block mb-2">Name</label>
                                    <input
                                        readOnly
                                        value="John Doe"
                                        className="w-full h-9 px-3 rounded-ds-md border border-ds-input bg-ds-background text-[14px] text-ds-foreground"
                                    />
                                </div>
                                <div>
                                    <label className="text-[13px] text-ds-foreground block mb-2">Username</label>
                                    <input
                                        readOnly
                                        value="@johndoe"
                                        className="w-full h-9 px-3 rounded-ds-md border border-ds-input bg-ds-background text-[14px] text-ds-foreground"
                                    />
                                </div>
                            </div>
                            <button
                                type="button"
                                className="h-9 px-4 rounded-ds-md bg-ds-primary text-ds-primary-foreground text-[14px] font-medium w-fit"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
