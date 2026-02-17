import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function DialogPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Dialog" description="Modal dialog with overlay hint, form fields, and footer.">
                <div className="max-w-[480px]">
                    <div className="h-2 bg-black/50 rounded-t-ds-lg" aria-hidden />
                    <div className="bg-ds-card text-ds-card-foreground border border-ds-border border-t-0 rounded-b-ds-lg shadow-ds p-6">
                        <h2 className="text-[18px] font-semibold text-ds-card-foreground mb-1">Edit Profile</h2>
                        <p className="text-[14px] text-ds-muted-foreground mb-6">
                            Make changes to your profile here. Click save when you&apos;re done.
                        </p>
                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-[14px] font-medium text-ds-foreground mb-1.5">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    readOnly
                                    defaultValue="John Doe"
                                    className="w-full h-10 px-3 rounded-ds-md border border-ds-input bg-ds-background text-ds-foreground text-[14px]"
                                />
                            </div>
                            <div>
                                <label className="block text-[14px] font-medium text-ds-foreground mb-1.5">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    readOnly
                                    defaultValue="@johndoe"
                                    className="w-full h-10 px-3 rounded-ds-md border border-ds-input bg-ds-background text-ds-foreground text-[14px]"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="h-9 px-4 rounded-ds-md bg-ds-primary text-ds-primary-foreground text-[14px] font-medium"
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
