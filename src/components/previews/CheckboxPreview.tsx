"use client"

import { useState } from "react"
import PreviewShell, { PreviewSection } from "./PreviewShell"
import { Check, Minus } from "lucide-react"

type CheckState = "unchecked" | "checked" | "indeterminate"

function Checkbox({
    state,
    onToggle,
    disabled = false,
}: {
    state: CheckState
    onToggle: () => void
    disabled?: boolean
}) {
    const isChecked = state === "checked" || state === "indeterminate"
    return (
        <button
            type="button"
            onClick={disabled ? undefined : onToggle}
            className={`size-4 rounded-ds-sm shrink-0 flex items-center justify-center transition-colors ${
                disabled
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
            } ${
                isChecked
                    ? "bg-ds-primary"
                    : `border-2 border-ds-input ${disabled ? "bg-ds-muted" : "bg-ds-background"}`
            }`}
        >
            {state === "checked" && (
                <Check className="size-3 text-ds-primary-foreground" strokeWidth={3} />
            )}
            {state === "indeterminate" && (
                <Minus className="size-3 text-ds-primary-foreground" strokeWidth={3} />
            )}
        </button>
    )
}

export default function CheckboxPreview() {
    const [states, setStates] = useState<Record<string, CheckState>>({
        unchecked: "unchecked",
        checked: "checked",
        indeterminate: "indeterminate",
        terms: "checked",
    })

    function toggle(key: string) {
        setStates((prev) => ({
            ...prev,
            [key]: prev[key] === "checked" ? "unchecked" : "checked",
        }))
    }

    return (
        <PreviewShell>
            <PreviewSection title="Checkbox States" description="Click any checkbox to toggle. Unchecked, checked, indeterminate, and disabled states.">
                <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Checkbox state={states.unchecked} onToggle={() => toggle("unchecked")} />
                        <span className="text-[14px] text-ds-foreground">Unchecked</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox state={states.checked} onToggle={() => toggle("checked")} />
                        <span className="text-[14px] text-ds-foreground">Checked</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox state={states.indeterminate} onToggle={() => toggle("indeterminate")} />
                        <span className="text-[14px] text-ds-foreground">Indeterminate</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox state="unchecked" onToggle={() => {}} disabled />
                        <span className="text-[14px] text-ds-muted-foreground">Disabled</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox state={states.terms} onToggle={() => toggle("terms")} />
                        <span className="text-[14px] text-ds-foreground">Accept terms and conditions</span>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
