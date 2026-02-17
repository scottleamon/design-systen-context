import PreviewShell, { PreviewSection } from "./PreviewShell"
import { CalendarDays } from "lucide-react"

export default function DatePickerPreview() {
    const days = ["S", "M", "T", "W", "T", "F", "S"]
    const today = 16
    const selected = 14

    return (
        <PreviewShell>
            <PreviewSection title="Date Picker" description="Trigger button and calendar month view.">
                <div className="space-y-4">
                    <button
                        type="button"
                        className="flex items-center gap-2 h-10 px-3 py-2 w-full max-w-[280px] rounded-ds-md border border-ds-input bg-ds-background text-ds-foreground text-[14px] text-left"
                    >
                        <CalendarDays className="size-4 text-ds-muted-foreground shrink-0" />
                        <span className="text-ds-muted-foreground">Pick a date</span>
                    </button>
                    <div className="max-w-[280px] bg-ds-card text-ds-card-foreground border border-ds-border rounded-ds-lg p-4 shadow-ds-sm">
                        <div className="text-center mb-4">
                            <h3 className="text-[16px] font-semibold text-ds-card-foreground">February 2026</h3>
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                            {days.map((d) => (
                                <div
                                    key={d}
                                    className="text-center text-[12px] font-medium text-ds-muted-foreground py-1"
                                >
                                    {d}
                                </div>
                            ))}
                            {Array.from({ length: 28 }).map((_, i) => {
                                const day = i + 1
                                const isToday = day === today
                                const isSelected = day === selected
                                return (
                                    <div
                                        key={day}
                                        className={`aspect-square flex items-center justify-center rounded-ds-md text-[14px] font-medium
                                            ${isToday ? "bg-ds-primary text-ds-primary-foreground" : ""}
                                            ${isSelected && !isToday ? "bg-ds-accent text-ds-accent-foreground" : ""}
                                            ${!isToday && !isSelected ? "text-ds-card-foreground" : ""}`}
                                    >
                                        {day}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
