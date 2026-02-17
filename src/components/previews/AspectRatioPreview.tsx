import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function AspectRatioPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Aspect Ratios" description="Boxes with different aspect ratios and placeholder backgrounds.">
                <div className="flex flex-wrap gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="w-[240px] aspect-video bg-ds-muted rounded-ds-md flex items-center justify-center">
                            <span className="text-[14px] font-medium text-ds-muted-foreground">16:9</span>
                        </div>
                        <span className="text-[12px] text-ds-muted-foreground">16:9</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="w-[240px] aspect-[4/3] bg-ds-muted rounded-ds-md flex items-center justify-center">
                            <span className="text-[14px] font-medium text-ds-muted-foreground">4:3</span>
                        </div>
                        <span className="text-[12px] text-ds-muted-foreground">4:3</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="w-[240px] aspect-square bg-ds-muted rounded-ds-md flex items-center justify-center">
                            <span className="text-[14px] font-medium text-ds-muted-foreground">1:1</span>
                        </div>
                        <span className="text-[12px] text-ds-muted-foreground">1:1</span>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
