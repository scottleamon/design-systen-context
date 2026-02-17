import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function CalendarPreview() {
    const days = ["S", "M", "T", "W", "T", "F", "S"]
    const daysInMonth = 28
    const firstDayOffset = 0 // Sunday
    const today = 16

    return (
        <PreviewShell>
            <PreviewSection title="Month Calendar" description="February 2026 with day headers, today highlighted, and selected range.">
                <div className="max-w-[320px] bg-ds-card text-ds-card-foreground border border-ds-border rounded-ds-lg p-4 shadow-ds-sm">
                    <div className="text-center mb-4">
                        <h3 className="text-[16px] font-semibold text-ds-card-foreground">February 2026</h3>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                        {days.map((d) => (
                            <div key={d} className="text-center text-[12px] font-medium text-ds-muted-foreground py-1">
                                {d}
                            </div>
                        ))}
                        {Array.from({ length: firstDayOffset }).map((_, i) => (
                            <div key={`empty-${i}`} className="aspect-square" />
                        ))}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                            const day = i + 1
                            const isToday = day === today
                            const isInRange = day >= 12 && day <= 18
                            return (
                                <div
                                    key={day}
                                    className={`aspect-square flex items-center justify-center rounded-ds-md text-[14px] font-medium text-ds-card-foreground
                                        ${isToday ? "bg-ds-primary text-ds-primary-foreground" : ""}
                                        ${isInRange && !isToday ? "bg-ds-accent text-ds-accent-foreground" : ""}
                                        ${!isToday && !isInRange ? "text-ds-card-foreground" : ""}`}
                                >
                                    {day}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
