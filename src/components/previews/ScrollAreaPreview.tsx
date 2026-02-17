import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function ScrollAreaPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Scroll Area" description="Scrollable container with visible scrollbar.">
                <div className="flex gap-2 max-w-sm">
                    <div className="h-48 border border-ds-border rounded-ds-md overflow-hidden flex-1 relative">
                        <div className="p-3 space-y-2">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <div
                                    key={i}
                                    className="h-8 rounded-ds-sm bg-ds-muted/50 flex items-center px-3 text-[13px] text-ds-foreground"
                                >
                                    Item {i}
                                </div>
                            ))}
                        </div>
                        <div className="absolute top-2 right-2 bottom-2 w-1.5 bg-ds-muted rounded-full">
                            <div
                                className="w-full bg-ds-muted-foreground/50 rounded-full"
                                style={{ height: "30%" }}
                            />
                        </div>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
