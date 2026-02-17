import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function SeparatorPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Horizontal" description="Separators between text blocks.">
                <div className="space-y-4 max-w-md">
                    <p className="text-[14px] text-ds-foreground">First section content.</p>
                    <div className="h-px bg-ds-border w-full" />
                    <p className="text-[14px] text-ds-foreground">Second section content.</p>
                    <div className="h-px bg-ds-border w-full" />
                    <p className="text-[14px] text-ds-foreground">Third section content.</p>
                </div>
            </PreviewSection>
            <PreviewSection title="Vertical (Toolbar)" description="Separators in a horizontal toolbar.">
                <div className="flex items-center gap-2 h-9 px-2 bg-ds-card border border-ds-border rounded-ds-md w-fit">
                    <button
                        type="button"
                        className="px-2 py-1 text-[13px] text-ds-foreground rounded-ds-sm"
                    >
                        Bold
                    </button>
                    <button
                        type="button"
                        className="px-2 py-1 text-[13px] text-ds-foreground rounded-ds-sm"
                    >
                        Italic
                    </button>
                    <div className="w-px h-6 bg-ds-border shrink-0" />
                    <button
                        type="button"
                        className="px-2 py-1 text-[13px] text-ds-foreground rounded-ds-sm"
                    >
                        Align Left
                    </button>
                    <button
                        type="button"
                        className="px-2 py-1 text-[13px] text-ds-foreground rounded-ds-sm"
                    >
                        Align Center
                    </button>
                    <div className="w-px h-6 bg-ds-border shrink-0" />
                    <button
                        type="button"
                        className="px-2 py-1 text-[13px] text-ds-foreground rounded-ds-sm"
                    >
                        List
                    </button>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
