import PreviewShell, { PreviewSection } from "./PreviewShell"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CarouselPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Carousel" description="Horizontal row of slides with prev/next arrow buttons.">
                <div className="flex items-center gap-2 max-w-[560px]">
                    <button className="inline-flex items-center justify-center size-10 rounded-ds-md border border-ds-border bg-ds-background text-ds-foreground shrink-0" aria-label="Previous">
                        <ChevronLeft className="size-5" />
                    </button>
                    <div className="flex gap-4 overflow-hidden flex-1">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="min-w-[160px] flex-1 bg-ds-card text-ds-card-foreground border border-ds-border rounded-ds-lg p-4 shadow-ds-sm"
                            >
                                <div className="h-20 bg-ds-muted rounded-ds-md mb-3 flex items-center justify-center">
                                    <span className="text-[12px] text-ds-muted-foreground">Slide {i}</span>
                                </div>
                                <p className="text-[14px] font-medium text-ds-card-foreground">Card Title {i}</p>
                                <p className="text-[12px] text-ds-muted-foreground mt-1">Placeholder content</p>
                            </div>
                        ))}
                    </div>
                    <button className="inline-flex items-center justify-center size-10 rounded-ds-md border border-ds-border bg-ds-background text-ds-foreground shrink-0" aria-label="Next">
                        <ChevronRight className="size-5" />
                    </button>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
