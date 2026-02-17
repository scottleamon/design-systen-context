"use client"

import { useState, useRef, useEffect } from "react"
import PreviewShell, { PreviewSection } from "./PreviewShell"
import { Search, Check, ChevronsUpDown } from "lucide-react"

const frameworks = ["React", "Vue", "Svelte", "Angular", "Solid", "Preact"]

export default function ComboboxPreview() {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState("React")
    const [query, setQuery] = useState("")
    const ref = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const filtered = frameworks.filter((f) =>
        f.toLowerCase().includes(query.toLowerCase())
    )

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false)
                setQuery("")
            }
        }
        if (open) document.addEventListener("mousedown", handleClick)
        return () => document.removeEventListener("mousedown", handleClick)
    }, [open])

    useEffect(() => {
        if (open && inputRef.current) inputRef.current.focus()
    }, [open])

    return (
        <PreviewShell>
            <PreviewSection title="Combobox" description="Click to open, type to search, click an option to select.">
                <div ref={ref} className="relative max-w-[320px]">
                    <button
                        type="button"
                        onClick={() => setOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between h-10 rounded-ds-md border border-ds-input bg-ds-background px-3 py-2 cursor-pointer"
                    >
                        <span className={`text-[14px] ${selected ? "text-ds-foreground" : "text-ds-muted-foreground"}`}>
                            {selected || "Select framework..."}
                        </span>
                        <ChevronsUpDown className="size-4 text-ds-muted-foreground shrink-0" />
                    </button>
                    {open && (
                        <div className="absolute top-full left-0 right-0 mt-1 border border-ds-border rounded-ds-lg bg-ds-card shadow-ds overflow-hidden z-10">
                            <div className="flex items-center gap-2 px-3 py-2 border-b border-ds-border">
                                <Search className="size-4 text-ds-muted-foreground shrink-0" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search framework..."
                                    className="flex-1 bg-transparent text-ds-foreground text-[14px] outline-none placeholder:text-ds-muted-foreground"
                                />
                            </div>
                            <div className="p-1 max-h-[200px] overflow-y-auto">
                                {filtered.length === 0 ? (
                                    <div className="px-3 py-2 text-[14px] text-ds-muted-foreground">
                                        No framework found.
                                    </div>
                                ) : (
                                    filtered.map((f) => (
                                        <button
                                            key={f}
                                            type="button"
                                            onClick={() => {
                                                setSelected(f)
                                                setOpen(false)
                                                setQuery("")
                                            }}
                                            className={`flex w-full items-center gap-2 px-2 py-1.5 text-[14px] rounded-ds-sm cursor-pointer ${
                                                selected === f
                                                    ? "bg-ds-accent text-ds-accent-foreground"
                                                    : "text-ds-foreground hover:bg-ds-accent hover:text-ds-accent-foreground"
                                            }`}
                                        >
                                            <span className="size-4 shrink-0 flex items-center justify-center">
                                                {selected === f && <Check className="size-4" />}
                                            </span>
                                            {f}
                                        </button>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
