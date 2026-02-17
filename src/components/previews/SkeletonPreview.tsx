import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function SkeletonPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Card Skeleton" description="Loading placeholder for a card with image, title, and text.">
                <div className="max-w-[280px] rounded-ds-lg border border-ds-border bg-ds-card p-4 shadow-ds">
                    <div className="mb-3 h-32 w-full rounded-ds-md bg-ds-muted animate-pulse" />
                    <div className="mb-2 h-4 w-3/4 rounded-ds-md bg-ds-muted animate-pulse" />
                    <div className="h-3 w-full rounded-ds-md bg-ds-muted animate-pulse" />
                    <div className="mt-1 h-3 w-5/6 rounded-ds-md bg-ds-muted animate-pulse" />
                </div>
            </PreviewSection>

            <PreviewSection title="List Skeleton" description="Three rows of circle and bar placeholders.">
                <div className="max-w-[320px] space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="size-10 shrink-0 rounded-full bg-ds-muted animate-pulse" />
                            <div className="flex-1 space-y-2">
                                <div className="h-4 w-2/3 rounded-ds-md bg-ds-muted animate-pulse" />
                                <div className="h-3 w-1/2 rounded-ds-md bg-ds-muted animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            </PreviewSection>

            <PreviewSection title="Avatar + Text Skeleton" description="Inline avatar with text lines.">
                <div className="flex items-center gap-3">
                    <div className="size-12 shrink-0 rounded-full bg-ds-muted animate-pulse" />
                    <div className="flex-1 space-y-2">
                        <div className="h-4 w-32 rounded-ds-md bg-ds-muted animate-pulse" />
                        <div className="h-3 w-24 rounded-ds-md bg-ds-muted animate-pulse" />
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
