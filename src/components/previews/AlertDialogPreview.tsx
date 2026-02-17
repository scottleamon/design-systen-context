import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function AlertDialogPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Alert Dialog" description="Static dialog card with title, description, and action buttons.">
                <div className="max-w-[440px] bg-ds-card text-ds-card-foreground border border-ds-border rounded-ds-xl shadow-ds p-6">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-[18px] font-semibold text-ds-card-foreground leading-tight">
                                Are you absolutely sure?
                            </h3>
                            <p className="text-[14px] text-ds-muted-foreground mt-2 leading-5">
                                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                            </p>
                        </div>
                        <div className="flex justify-end gap-2 pt-2">
                            <button className="inline-flex items-center justify-center bg-transparent text-ds-foreground border border-ds-border text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs">
                                Cancel
                            </button>
                            <button className="inline-flex items-center justify-center bg-ds-destructive text-ds-destructive-foreground text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs">
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
