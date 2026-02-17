"use client"

import { useState } from "react"
import PreviewShell, { PreviewSection } from "./PreviewShell"
import { Bold, Italic, Underline } from "lucide-react"

const toggleBase =
    "inline-flex items-center justify-center h-9 px-3 text-[14px] font-medium rounded-ds-md transition-colors cursor-pointer"

export default function TogglePreview() {
    const [states, setStates] = useState({
        basic: false,
        bold: true,
        italic: false,
        underline: false,
        outline: false,
    })

    function toggle(key: keyof typeof states) {
        setStates((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    return (
        <PreviewShell>
            <PreviewSection title="Toggle States" description="Click to toggle. Off, pressed/on, and disabled.">
                <div className="flex flex-wrap items-center gap-3">
                    <button
                        type="button"
                        onClick={() => toggle("basic")}
                        className={`${toggleBase} ${
                            states.basic
                                ? "bg-ds-accent text-ds-accent-foreground"
                                : "bg-transparent border border-ds-border text-ds-foreground"
                        }`}
                    >
                        {states.basic ? "On" : "Off"}
                    </button>
                    <button
                        type="button"
                        className={`${toggleBase} bg-transparent border border-ds-border text-ds-muted-foreground opacity-50 cursor-not-allowed`}
                    >
                        Disabled
                    </button>
                </div>
            </PreviewSection>

            <PreviewSection title="With Icons" description="Click to toggle format options: Bold, Italic, Underline.">
                <div className="flex items-center gap-1 rounded-ds-md border border-ds-border p-1">
                    <button
                        type="button"
                        onClick={() => toggle("bold")}
                        className={`${toggleBase} size-9 px-0 ${
                            states.bold
                                ? "bg-ds-accent text-ds-accent-foreground"
                                : "bg-transparent text-ds-muted-foreground"
                        }`}
                    >
                        <Bold className="size-4" />
                    </button>
                    <button
                        type="button"
                        onClick={() => toggle("italic")}
                        className={`${toggleBase} size-9 px-0 ${
                            states.italic
                                ? "bg-ds-accent text-ds-accent-foreground"
                                : "bg-transparent text-ds-muted-foreground"
                        }`}
                    >
                        <Italic className="size-4" />
                    </button>
                    <button
                        type="button"
                        onClick={() => toggle("underline")}
                        className={`${toggleBase} size-9 px-0 ${
                            states.underline
                                ? "bg-ds-accent text-ds-accent-foreground"
                                : "bg-transparent text-ds-muted-foreground"
                        }`}
                    >
                        <Underline className="size-4" />
                    </button>
                </div>
            </PreviewSection>

            <PreviewSection title="Outline Variant" description="Click to toggle outline style.">
                <div className="flex flex-wrap items-center gap-3">
                    <button
                        type="button"
                        onClick={() => toggle("outline")}
                        className={`${toggleBase} border ${
                            states.outline
                                ? "border-ds-primary bg-ds-accent text-ds-accent-foreground"
                                : "border-ds-border bg-transparent text-ds-foreground"
                        }`}
                    >
                        {states.outline ? "Selected" : "Outline"}
                    </button>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
