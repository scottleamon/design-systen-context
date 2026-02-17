import PreviewShell, { PreviewSection } from "./PreviewShell"
import { ArrowLeft, ArrowRight, RotateCw, Save, Printer, Code } from "lucide-react"

export default function ContextMenuPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Context Menu" description="Right-click style menu with items and separators.">
                <div className="inline-block bg-ds-card text-ds-card-foreground border border-ds-border rounded-ds-lg shadow-ds-md p-1 min-w-[180px]">
                    <div className="flex items-center gap-2 px-2 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm">
                        <ArrowLeft className="size-4 shrink-0 text-ds-muted-foreground" />
                        Back
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm">
                        <ArrowRight className="size-4 shrink-0 text-ds-muted-foreground" />
                        Forward
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm">
                        <RotateCw className="size-4 shrink-0 text-ds-muted-foreground" />
                        Reload
                    </div>
                    <div className="my-1 h-px bg-ds-border" />
                    <div className="flex items-center gap-2 px-2 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm bg-ds-accent text-ds-accent-foreground">
                        <Save className="size-4 shrink-0" />
                        Save As...
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm">
                        <Printer className="size-4 shrink-0 text-ds-muted-foreground" />
                        Print
                    </div>
                    <div className="my-1 h-px bg-ds-border" />
                    <div className="flex items-center gap-2 px-2 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm">
                        <Code className="size-4 shrink-0 text-ds-muted-foreground" />
                        View Source
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
