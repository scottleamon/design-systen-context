"use client"

import { useState, useRef, useEffect } from "react"
import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function PopoverPreview() {
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        if (open) document.addEventListener("mousedown", handleClick)
        return () => document.removeEventListener("mousedown", handleClick)
    }, [open])

    return (
        <PreviewShell>
            <PreviewSection title="Popover" description="Click the button to open/close the popover.">
                <div ref={ref} className="relative inline-block">
                    <button
                        type="button"
                        onClick={() => setOpen((prev) => !prev)}
                        className="h-9 px-4 rounded-ds-md bg-ds-primary text-ds-primary-foreground text-[14px] font-medium cursor-pointer"
                    >
                        Open popover
                    </button>
                    {open && (
                        <div className="absolute top-full left-0 mt-2 bg-ds-card border border-ds-border rounded-ds-lg shadow-ds-md p-4 w-80 z-10">
                            <h4 className="text-[14px] font-semibold text-ds-foreground mb-4">Dimensions</h4>
                            <div className="grid gap-4">
                                <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
                                    <label className="text-[13px] text-ds-muted-foreground">Width</label>
                                    <input
                                        readOnly
                                        value="100%"
                                        className="h-8 px-3 rounded-ds-md border border-ds-input bg-ds-background text-[13px] text-ds-foreground"
                                    />
                                </div>
                                <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
                                    <label className="text-[13px] text-ds-muted-foreground">Max Width</label>
                                    <input
                                        readOnly
                                        value="300px"
                                        className="h-8 px-3 rounded-ds-md border border-ds-input bg-ds-background text-[13px] text-ds-foreground"
                                    />
                                </div>
                                <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
                                    <label className="text-[13px] text-ds-muted-foreground">Height</label>
                                    <input
                                        readOnly
                                        value="25px"
                                        className="h-8 px-3 rounded-ds-md border border-ds-input bg-ds-background text-[13px] text-ds-foreground"
                                    />
                                </div>
                                <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
                                    <label className="text-[13px] text-ds-muted-foreground">Max Height</label>
                                    <input
                                        readOnly
                                        value="none"
                                        className="h-8 px-3 rounded-ds-md border border-ds-input bg-ds-background text-[13px] text-ds-foreground"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
