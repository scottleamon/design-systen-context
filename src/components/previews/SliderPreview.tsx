"use client"

import { useState, useRef, useCallback } from "react"
import PreviewShell, { PreviewSection } from "./PreviewShell"

function useSlider(initial: number) {
    const [value, setValue] = useState(initial)
    const trackRef = useRef<HTMLDivElement>(null)
    const dragging = useRef(false)

    const updateValue = useCallback((clientX: number) => {
        const track = trackRef.current
        if (!track) return
        const rect = track.getBoundingClientRect()
        const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
        setValue(Math.round(pct))
    }, [])

    const onPointerDown = useCallback(
        (e: React.PointerEvent) => {
            dragging.current = true
            ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
            updateValue(e.clientX)
        },
        [updateValue]
    )

    const onPointerMove = useCallback(
        (e: React.PointerEvent) => {
            if (!dragging.current) return
            updateValue(e.clientX)
        },
        [updateValue]
    )

    const onPointerUp = useCallback(() => {
        dragging.current = false
    }, [])

    return { value, trackRef, onPointerDown, onPointerMove, onPointerUp }
}

export default function SliderPreview() {
    const single = useSlider(50)
    const rangeMin = useSlider(25)
    const rangeMax = useSlider(75)

    return (
        <PreviewShell>
            <PreviewSection title="Default Slider" description="Drag the thumb or click the track to adjust.">
                <div className="max-w-[360px] space-y-2">
                    <div
                        ref={single.trackRef}
                        className="relative flex items-center w-full h-5 cursor-pointer"
                        onPointerDown={single.onPointerDown}
                        onPointerMove={single.onPointerMove}
                        onPointerUp={single.onPointerUp}
                    >
                        <div className="absolute w-full h-1.5 bg-ds-muted rounded-ds-full" />
                        <div
                            className="absolute h-1.5 bg-ds-primary rounded-ds-full"
                            style={{ width: `${single.value}%` }}
                        />
                        <div
                            className="absolute size-4 bg-white border-2 border-ds-primary rounded-full shadow-ds-xs"
                            style={{ left: `calc(${single.value}% - 8px)` }}
                        />
                    </div>
                    <div className="flex justify-between text-[12px] text-ds-muted-foreground">
                        <span>0</span>
                        <span>{single.value}</span>
                        <span>100</span>
                    </div>
                </div>
            </PreviewSection>

            <PreviewSection title="Range Slider" description="Drag either thumb to adjust the range.">
                <div className="max-w-[360px] space-y-2">
                    <div
                        className="relative flex items-center w-full h-5 cursor-pointer"
                    >
                        <div
                            ref={rangeMin.trackRef}
                            className="absolute left-0 h-5 cursor-pointer"
                            style={{ width: "50%" }}
                            onPointerDown={rangeMin.onPointerDown}
                            onPointerMove={rangeMin.onPointerMove}
                            onPointerUp={rangeMin.onPointerUp}
                        />
                        <div
                            ref={rangeMax.trackRef}
                            className="absolute right-0 h-5 cursor-pointer"
                            style={{ width: "50%" }}
                            onPointerDown={rangeMax.onPointerDown}
                            onPointerMove={rangeMax.onPointerMove}
                            onPointerUp={rangeMax.onPointerUp}
                        />
                        <div className="absolute w-full h-1.5 bg-ds-muted rounded-ds-full" />
                        <div
                            className="absolute h-1.5 bg-ds-primary rounded-ds-full"
                            style={{
                                left: `${Math.min(rangeMin.value, rangeMax.value)}%`,
                                width: `${Math.abs(rangeMax.value - rangeMin.value)}%`,
                            }}
                        />
                        <div
                            className="absolute size-4 bg-white border-2 border-ds-primary rounded-full shadow-ds-xs z-10"
                            style={{ left: `calc(${rangeMin.value}% - 8px)` }}
                        />
                        <div
                            className="absolute size-4 bg-white border-2 border-ds-primary rounded-full shadow-ds-xs z-10"
                            style={{ left: `calc(${rangeMax.value}% - 8px)` }}
                        />
                    </div>
                    <div className="flex justify-between text-[12px] text-ds-muted-foreground">
                        <span>{Math.min(rangeMin.value, rangeMax.value)}</span>
                        <span>{Math.max(rangeMin.value, rangeMax.value)}</span>
                    </div>
                </div>
            </PreviewSection>

            <PreviewSection title="Disabled" description="Slider with reduced opacity.">
                <div className="max-w-[360px] opacity-50">
                    <div className="relative flex items-center w-full h-5">
                        <div className="absolute w-full h-1.5 bg-ds-muted rounded-ds-full" />
                        <div className="absolute h-1.5 bg-ds-primary rounded-ds-full" style={{ width: "30%" }} />
                        <div
                            className="absolute size-4 bg-white border-2 border-ds-primary rounded-full shadow-ds-xs"
                            style={{ left: "calc(30% - 8px)" }}
                        />
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
