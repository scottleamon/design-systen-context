"use client"

import { useState, useRef, useEffect } from "react"
import PreviewShell, { PreviewSection } from "./PreviewShell"
import { ChevronDown, Check } from "lucide-react"

const fruits = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]

export default function SelectPreview() {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState("Apple")
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
            <PreviewSection title="Select" description="Click the trigger to open the dropdown, then select an option.">
                <div ref={ref} className="relative w-64">
                    <button
                        type="button"
                        onClick={() => setOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between h-9 px-3 rounded-ds-md border border-ds-input bg-ds-background text-[14px] cursor-pointer"
                    >
                        <span className={selected ? "text-ds-foreground" : "text-ds-muted-foreground"}>
                            {selected || "Select a fruit..."}
                        </span>
                        <ChevronDown
                            className={`size-4 text-ds-muted-foreground shrink-0 transition-transform duration-200 ${
                                open ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                    {open && (
                        <div className="absolute top-full left-0 mt-1 w-full bg-ds-card border border-ds-border rounded-ds-lg shadow-ds p-1 z-10">
                            {fruits.map((fruit) => (
                                <button
                                    key={fruit}
                                    type="button"
                                    onClick={() => {
                                        setSelected(fruit)
                                        setOpen(false)
                                    }}
                                    className="flex w-full items-center justify-between px-2 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm hover:bg-ds-accent hover:text-ds-accent-foreground cursor-pointer"
                                >
                                    {fruit}
                                    {selected === fruit && (
                                        <Check className="size-4 text-ds-primary shrink-0" />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
