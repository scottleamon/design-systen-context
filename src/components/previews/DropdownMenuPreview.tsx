"use client"

import { useState, useRef, useEffect } from "react"
import PreviewShell, { PreviewSection } from "./PreviewShell"
import { User, CreditCard, Users, Receipt, LogOut } from "lucide-react"

export default function DropdownMenuPreview() {
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
            <PreviewSection title="Dropdown Menu" description="Click the button to open/close the menu.">
                <div ref={ref} className="relative inline-block">
                    <button
                        type="button"
                        onClick={() => setOpen((prev) => !prev)}
                        className="h-9 px-4 rounded-ds-md bg-ds-primary text-ds-primary-foreground text-[14px] font-medium cursor-pointer"
                    >
                        Open
                    </button>
                    {open && (
                        <div className="absolute top-full left-0 mt-1 bg-ds-card text-ds-card-foreground border border-ds-border rounded-ds-lg shadow-ds p-1 min-w-[180px] z-10">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="flex w-full items-center gap-2 px-2 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm hover:bg-ds-accent hover:text-ds-accent-foreground cursor-pointer"
                            >
                                <User className="size-4 shrink-0" />
                                Profile
                            </button>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="flex w-full items-center gap-2 px-2 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm hover:bg-ds-accent hover:text-ds-accent-foreground cursor-pointer"
                            >
                                <CreditCard className="size-4 shrink-0" />
                                Billing
                            </button>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="flex w-full items-center gap-2 px-2 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm hover:bg-ds-accent hover:text-ds-accent-foreground cursor-pointer"
                            >
                                <Users className="size-4 shrink-0" />
                                Team
                            </button>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="flex w-full items-center gap-2 px-2 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm hover:bg-ds-accent hover:text-ds-accent-foreground cursor-pointer"
                            >
                                <Receipt className="size-4 shrink-0" />
                                Subscription
                            </button>
                            <div className="my-1 h-px bg-ds-border" />
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="flex w-full items-center gap-2 px-2 py-1.5 text-[14px] text-ds-destructive rounded-ds-sm hover:bg-ds-accent cursor-pointer"
                            >
                                <LogOut className="size-4 shrink-0" />
                                Log out
                            </button>
                        </div>
                    )}
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
