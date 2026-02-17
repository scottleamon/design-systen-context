import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function ChartPreview() {
    const data = [
        { label: "Jan", value: 60 },
        { label: "Feb", value: 80 },
        { label: "Mar", value: 45 },
        { label: "Apr", value: 90 },
        { label: "May", value: 70 },
        { label: "Jun", value: 95 },
    ]
    const maxHeight = 100

    return (
        <PreviewShell>
            <PreviewSection title="Bar Chart" description="Static visual approximation of a bar chart.">
                <div className="max-w-[400px]">
                    <h4 className="text-[14px] font-semibold text-ds-foreground mb-4">Monthly Revenue</h4>
                    <div className="flex items-end gap-4 h-32">
                        {data.map((item) => (
                            <div key={item.label} className="flex flex-col items-center flex-1 gap-2">
                                <div
                                    className="w-full bg-ds-primary rounded-ds-sm min-h-[4px]"
                                    style={{ height: `${(item.value / maxHeight) * 100}%` }}
                                />
                                <span className="text-[12px] text-ds-muted-foreground">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
