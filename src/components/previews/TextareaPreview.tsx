import PreviewShell, { PreviewSection } from "./PreviewShell"

const textareaBase = "flex w-full min-h-[80px] px-3 py-2 text-[14px] leading-5 bg-transparent border border-ds-input rounded-ds-md shadow-ds-xs text-ds-foreground placeholder:text-ds-muted-foreground outline-none resize-none"

export default function TextareaPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Default" description="Standard textarea with placeholder.">
                <div className="max-w-[360px]">
                    <textarea
                        placeholder="Type your message here."
                        className={textareaBase}
                        readOnly
                    />
                </div>
            </PreviewSection>

            <PreviewSection title="With Label" description="Textarea with label and description.">
                <div className="max-w-[360px] space-y-2">
                    <label className="text-[14px] font-semibold leading-5 text-ds-foreground">Bio</label>
                    <textarea
                        placeholder="Tell us about yourself"
                        className={textareaBase}
                        readOnly
                    />
                    <p className="text-[14px] text-ds-muted-foreground">
                        You can @mention other users and organizations.
                    </p>
                </div>
            </PreviewSection>

            <PreviewSection title="Disabled" description="Textarea in disabled state.">
                <div className="max-w-[360px]">
                    <textarea
                        placeholder="Disabled textarea"
                        className={`${textareaBase} opacity-50 cursor-not-allowed`}
                        disabled
                        readOnly
                    />
                </div>
            </PreviewSection>

            <PreviewSection title="Error State" description="Textarea with validation error.">
                <div className="max-w-[360px] space-y-2">
                    <label className="text-[14px] font-semibold leading-5 text-ds-foreground">Message</label>
                    <textarea
                        defaultValue="Hi"
                        className={`${textareaBase} border-ds-destructive`}
                        readOnly
                    />
                    <p className="text-[14px] text-ds-destructive">
                        Message must be at least 10 characters.
                    </p>
                </div>
            </PreviewSection>

            <PreviewSection title="With Character Count" description="Textarea showing remaining characters.">
                <div className="max-w-[360px] space-y-2">
                    <label className="text-[14px] font-semibold leading-5 text-ds-foreground">Description</label>
                    <textarea
                        defaultValue="This is a sample description for the component."
                        className={textareaBase}
                        readOnly
                    />
                    <div className="flex justify-end">
                        <span className="text-[12px] text-ds-muted-foreground">48/200</span>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
