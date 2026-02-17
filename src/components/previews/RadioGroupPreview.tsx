"use client"

import { useState } from "react"
import PreviewShell, { PreviewSection } from "./PreviewShell"

const options = ["Default", "Comfortable", "Compact"]

function Radio({
    selected,
    onSelect,
    disabled = false,
}: {
    selected: boolean
    onSelect: () => void
    disabled?: boolean
}) {
    return (
        <button
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={disabled ? undefined : onSelect}
            className={`size-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${
                selected ? "border-ds-primary" : "border-ds-input"
            } ${disabled ? "opacity-50 cursor-not-allowed bg-ds-muted" : "bg-ds-background cursor-pointer"}`}
        >
            {selected && <div className="size-2 rounded-full bg-ds-primary" />}
        </button>
    )
}

export default function RadioGroupPreview() {
    const [selected, setSelected] = useState("Comfortable")

    return (
        <PreviewShell>
            <PreviewSection title="Radio Group" description="Click to select. Radio options with selected and disabled states.">
                <div className="flex flex-col gap-4">
                    {options.map((option) => (
                        <div key={option} className="flex items-center gap-2">
                            <Radio
                                selected={selected === option}
                                onSelect={() => setSelected(option)}
                            />
                            <span className="text-[14px] text-ds-foreground">{option}</span>
                        </div>
                    ))}
                    <div className="flex items-center gap-2">
                        <Radio selected={false} onSelect={() => {}} disabled />
                        <span className="text-[14px] text-ds-muted-foreground">Disabled</span>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
