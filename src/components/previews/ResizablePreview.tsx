import PreviewShell, { PreviewSection } from "./PreviewShell"
import { GripVertical } from "lucide-react"

export default function ResizablePreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Resizable" description="Side-by-side panels with a vertical divider handle.">
                <div className="flex border border-ds-border rounded-ds-md overflow-hidden max-w-2xl">
                    <div className="w-1/3 bg-ds-card p-4 flex items-center justify-center min-h-[120px]">
                        <span className="text-[14px] text-ds-muted-foreground">Sidebar</span>
                    </div>
                    <div className="w-px bg-ds-border flex items-center justify-center shrink-0">
                        <div className="flex flex-col gap-0.5 p-1 cursor-col-resize">
                            <GripVertical className="size-3 text-ds-muted-foreground" />
                            <GripVertical className="size-3 text-ds-muted-foreground" />
                            <GripVertical className="size-3 text-ds-muted-foreground" />
                        </div>
                    </div>
                    <div className="w-2/3 bg-ds-background p-4 flex items-center justify-center min-h-[120px]">
                        <span className="text-[14px] text-ds-muted-foreground">Content</span>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
