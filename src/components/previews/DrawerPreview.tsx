import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function DrawerPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Drawer" description="Bottom sheet style panel with drag handle and form.">
                <div className="max-w-[400px] mx-auto">
                    <div className="bg-ds-card text-ds-card-foreground border border-ds-border rounded-t-ds-xl shadow-ds p-6 pt-4">
                        <div className="w-12 h-1.5 bg-ds-muted-foreground/20 rounded-full mx-auto mb-6" />
                        <h2 className="text-[18px] font-semibold text-ds-card-foreground mb-1">Move Goal</h2>
                        <p className="text-[14px] text-ds-muted-foreground mb-6">
                            Enter the new position for this goal.
                        </p>
                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-[14px] font-medium text-ds-foreground mb-1.5">
                                    Position
                                </label>
                                <input
                                    type="text"
                                    readOnly
                                    placeholder="e.g. 1"
                                    className="w-full h-10 px-3 rounded-ds-md border border-ds-input bg-ds-background text-ds-foreground text-[14px] placeholder:text-ds-muted-foreground"
                                />
                            </div>
                        </div>
                        <div className="flex gap-2 justify-end">
                            <button
                                type="button"
                                className="h-9 px-4 rounded-ds-md border border-ds-input bg-ds-background text-ds-foreground text-[14px] font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="h-9 px-4 rounded-ds-md bg-ds-primary text-ds-primary-foreground text-[14px] font-medium"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
