"use client"

import { useState } from "react"
import PreviewShell, { PreviewSection } from "./PreviewShell"
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react"

const toggleBase =
    "inline-flex items-center justify-center h-9 px-3 text-[14px] font-medium transition-colors cursor-pointer"

const alignOptions = [
    { key: "left", icon: AlignLeft },
    { key: "center", icon: AlignCenter },
    { key: "right", icon: AlignRight },
    { key: "justify", icon: AlignJustify },
]

const formatOptions = ["Bold", "Italic", "Underline", "Strikethrough"]

export default function ToggleGroupPreview() {
    const [alignment, setAlignment] = useState("left")
    const [formats, setFormats] = useState<Set<string>>(new Set(["Bold", "Italic"]))

    function toggleFormat(key: string) {
        setFormats((prev) => {
            const next = new Set(prev)
            if (next.has(key)) next.delete(key)
            else next.add(key)
            return next
        })
    }

    return (
        <PreviewShell>
            <PreviewSection title="Single Select" description="Click to switch alignment. Only one can be active.">
                <div className="inline-flex overflow-hidden rounded-ds-md border border-ds-border">
                    {alignOptions.map((opt, i) => {
                        const Icon = opt.icon
                        const isLast = i === alignOptions.length - 1
                        return (
                            <button
                                key={opt.key}
                                type="button"
                                onClick={() => setAlignment(opt.key)}
                                className={`${toggleBase} ${!isLast ? "border-r border-ds-border" : ""} ${
                                    alignment === opt.key
                                        ? "bg-ds-accent text-ds-accent-foreground"
                                        : "bg-transparent text-ds-muted-foreground"
                                }`}
                            >
                                <Icon className="size-4" />
                            </button>
                        )
                    })}
                </div>
            </PreviewSection>

            <PreviewSection title="Multi Select" description="Click to toggle. Multiple items can be selected.">
                <div className="inline-flex overflow-hidden rounded-ds-md border border-ds-border">
                    {formatOptions.map((opt, i) => {
                        const isLast = i === formatOptions.length - 1
                        return (
                            <button
                                key={opt}
                                type="button"
                                onClick={() => toggleFormat(opt)}
                                className={`${toggleBase} ${!isLast ? "border-r border-ds-border" : ""} ${
                                    formats.has(opt)
                                        ? "bg-ds-accent text-ds-accent-foreground"
                                        : "bg-transparent text-ds-muted-foreground"
                                }`}
                            >
                                {opt}
                            </button>
                        )
                    })}
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
