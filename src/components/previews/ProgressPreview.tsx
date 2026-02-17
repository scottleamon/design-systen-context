import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function ProgressPreview() {
    const values = [0, 25, 50, 75, 100]
    return (
        <PreviewShell>
            <PreviewSection title="Progress" description="Progress bars at different completion levels.">
                <div className="space-y-6 max-w-md">
                    {values.map((pct) => (
                        <div key={pct}>
                            <p className="text-[13px] text-ds-muted-foreground mb-2">{pct}%</p>
                            <div className="h-2 bg-ds-muted rounded-ds-full overflow-hidden">
                                <div
                                    className="h-full bg-ds-primary rounded-ds-full transition-all"
                                    style={{ width: `${pct}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
