"use client"

import { useState } from "react"
import { PreviewSection } from "../PreviewShell"
import { Play, RotateCcw } from "lucide-react"

const durations = [
    { token: "75", ms: 75, usage: "Micro-interactions (opacity)" },
    { token: "100", ms: 100, usage: "Quick feedback (hover)" },
    { token: "150", ms: 150, usage: "Standard transitions" },
    { token: "200", ms: 200, usage: "Slightly slower" },
    { token: "300", ms: 300, usage: "Accordion, collapse" },
    { token: "500", ms: 500, usage: "Page elements" },
    { token: "700", ms: 700, usage: "Dramatic reveals" },
    { token: "1000", ms: 1000, usage: "Extended animations" },
]

const easings = [
    { token: "linear", value: "linear", desc: "Constant speed — progress bars" },
    { token: "ease-in", value: "cubic-bezier(0.4, 0, 1, 1)", desc: "Accelerating — elements leaving" },
    { token: "ease-out", value: "cubic-bezier(0, 0, 0.2, 1)", desc: "Decelerating — elements entering" },
    { token: "ease-in-out", value: "cubic-bezier(0.4, 0, 0.2, 1)", desc: "Smooth — elements moving" },
]

function DurationDemo({ ms, token }: { ms: number; token: string }) {
    const [playing, setPlaying] = useState(false)

    const handlePlay = () => {
        setPlaying(false)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setPlaying(true))
        })
    }

    return (
        <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-[hsl(var(--muted-foreground))] w-12 text-right shrink-0 tabular-nums">{token}ms</span>
            <div className="flex-1 h-8 bg-[hsl(var(--muted)/0.5)] rounded-lg relative overflow-hidden">
                <div
                    className="absolute top-1 bottom-1 left-1 w-8 rounded-md bg-[hsl(var(--ring))]"
                    style={{
                        transform: playing ? "translateX(calc(100% + 200px))" : "translateX(0)",
                        transition: playing ? `transform ${ms}ms ease-out` : "none",
                    }}
                />
            </div>
            <button
                onClick={handlePlay}
                className="size-7 flex items-center justify-center rounded-md bg-[hsl(var(--muted))] hover:bg-[hsl(var(--border))] transition-colors shrink-0"
            >
                {playing ? <RotateCcw className="size-3 text-[hsl(var(--muted-foreground))]" /> : <Play className="size-3 text-[hsl(var(--muted-foreground))]" />}
            </button>
        </div>
    )
}

function EasingDemo({ easing, label }: { easing: string; label: string }) {
    const [playing, setPlaying] = useState(false)

    const handlePlay = () => {
        setPlaying(false)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setPlaying(true))
        })
    }

    return (
        <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-[hsl(var(--muted-foreground))] w-20 shrink-0">{label}</span>
            <div className="flex-1 h-8 bg-[hsl(var(--muted)/0.5)] rounded-lg relative overflow-hidden">
                <div
                    className="absolute top-1 bottom-1 left-1 w-8 rounded-md bg-[hsl(var(--ring))]"
                    style={{
                        transform: playing ? "translateX(calc(100% + 200px))" : "translateX(0)",
                        transition: playing ? `transform 600ms ${easing}` : "none",
                    }}
                />
            </div>
            <button
                onClick={handlePlay}
                className="size-7 flex items-center justify-center rounded-md bg-[hsl(var(--muted))] hover:bg-[hsl(var(--border))] transition-colors shrink-0"
            >
                {playing ? <RotateCcw className="size-3 text-[hsl(var(--muted-foreground))]" /> : <Play className="size-3 text-[hsl(var(--muted-foreground))]" />}
            </button>
        </div>
    )
}

export default function MotionPreview() {
    const [allPlaying, setAllPlaying] = useState(false)

    return (
        <div className="space-y-0">
            <PreviewSection title="Duration Scale" description="Click play to see each duration. Shorter = faster.">
                <div className="space-y-2">
                    {durations.map((d) => (
                        <DurationDemo key={d.token} ms={d.ms} token={d.token} />
                    ))}
                </div>
            </PreviewSection>

            <PreviewSection title="Easing Functions" description="Different easing curves at 600ms duration.">
                <div className="space-y-2">
                    {easings.map((e) => (
                        <EasingDemo key={e.token} easing={e.value} label={e.token} />
                    ))}
                </div>
            </PreviewSection>

            <PreviewSection title="Recommended Defaults" description="Which duration + easing to use for common interactions.">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                        { context: "Hover states", duration: "150ms", easing: "ease-out" },
                        { context: "Focus rings", duration: "150ms", easing: "ease-out" },
                        { context: "Button states", duration: "150ms", easing: "ease-out" },
                        { context: "Accordion expand", duration: "200ms", easing: "ease-in-out" },
                        { context: "Dialog open", duration: "200ms", easing: "ease-out" },
                        { context: "Page transitions", duration: "300ms", easing: "ease-in-out" },
                    ].map((r) => (
                        <div key={r.context} className="flex items-center justify-between p-3 rounded-lg bg-[hsl(var(--muted)/0.5)] border border-[hsl(var(--border))]">
                            <span className="text-[13px] text-[hsl(var(--foreground))]">{r.context}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-[11px] font-mono text-[hsl(var(--ring))] font-medium">{r.duration}</span>
                                <span className="text-[10px] text-[hsl(var(--muted-foreground))]">{r.easing}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </PreviewSection>
        </div>
    )
}
