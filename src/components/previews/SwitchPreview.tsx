"use client"

import { useState } from "react"
import PreviewShell, { PreviewSection } from "./PreviewShell"

function Switch({
    on,
    onToggle,
    disabled = false,
}: {
    on: boolean
    onToggle: () => void
    disabled?: boolean
}) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={on}
            onClick={disabled ? undefined : onToggle}
            className={`w-9 h-5 rounded-ds-full relative transition-colors ${
                on ? "bg-ds-primary" : "bg-ds-input"
            } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
            <div
                className={`absolute top-0.5 size-4 bg-white rounded-full shadow-ds-xs transition-all ${
                    on ? "left-[calc(100%-18px)]" : "left-0.5"
                }`}
            />
        </button>
    )
}

export default function SwitchPreview() {
    const [switches, setSwitches] = useState({
        basic: false,
        on: true,
        airplane: true,
    })

    function toggle(key: keyof typeof switches) {
        setSwitches((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    return (
        <PreviewShell>
            <PreviewSection title="States" description="Click to toggle. On, off, and disabled switch states.">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Switch on={switches.basic} onToggle={() => toggle("basic")} />
                        <span className="text-[14px] text-ds-foreground">{switches.basic ? "On" : "Off"}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Switch on={switches.on} onToggle={() => toggle("on")} />
                        <span className="text-[14px] text-ds-foreground">{switches.on ? "On" : "Off"}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Switch on={false} onToggle={() => {}} disabled />
                        <span className="text-[14px] text-ds-foreground">Disabled Off</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Switch on={true} onToggle={() => {}} disabled />
                        <span className="text-[14px] text-ds-foreground">Disabled On</span>
                    </div>
                </div>
            </PreviewSection>

            <PreviewSection title="With Label" description="Switch paired with a label and description.">
                <div className="flex items-start justify-between max-w-[360px]">
                    <div className="space-y-1">
                        <label className="text-[14px] font-semibold text-ds-foreground">Airplane Mode</label>
                        <p className="text-[14px] text-ds-muted-foreground">Disable all wireless connections.</p>
                    </div>
                    <Switch on={switches.airplane} onToggle={() => toggle("airplane")} />
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
