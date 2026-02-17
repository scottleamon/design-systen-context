import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function FormPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Form" description="Form with inputs, labels, descriptions, and error state.">
                <div className="max-w-[400px] space-y-6">
                    <div>
                        <label className="block text-[14px] font-medium text-ds-foreground mb-1.5">
                            Username
                        </label>
                        <p className="text-[12px] text-ds-muted-foreground mb-1.5">
                            This is your public display name.
                        </p>
                        <input
                            type="text"
                            readOnly
                            defaultValue="johndoe"
                            className="w-full h-10 px-3 rounded-ds-md border border-ds-input bg-ds-background text-ds-foreground text-[14px]"
                        />
                    </div>
                    <div>
                        <label className="block text-[14px] font-medium text-ds-foreground mb-1.5">
                            Email
                        </label>
                        <input
                            type="email"
                            readOnly
                            defaultValue="john@example.com"
                            className="w-full h-10 px-3 rounded-ds-md border border-ds-input bg-ds-background text-ds-foreground text-[14px]"
                        />
                    </div>
                    <div>
                        <label className="block text-[14px] font-medium text-ds-foreground mb-1.5">
                            Invalid Field
                        </label>
                        <input
                            type="text"
                            readOnly
                            defaultValue="invalid value"
                            className="w-full h-10 px-3 rounded-ds-md border-2 border-ds-destructive bg-ds-background text-ds-foreground text-[14px]"
                        />
                        <p className="text-[12px] text-ds-destructive mt-1.5">This field is required.</p>
                    </div>
                    <button
                        type="button"
                        className="h-9 px-4 rounded-ds-md bg-ds-primary text-ds-primary-foreground text-[14px] font-medium"
                    >
                        Submit
                    </button>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
