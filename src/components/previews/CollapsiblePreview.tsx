"use client"

import { useState } from "react"
import PreviewShell, { PreviewSection } from "./PreviewShell"
import { ChevronsUpDown } from "lucide-react"

export default function CollapsiblePreview() {
    const [open, setOpen] = useState(false)

    return (
        <PreviewShell>
            <PreviewSection title="Collapsible" description="Click the trigger to expand or collapse the content.">
                <div className="max-w-[420px] border border-ds-border rounded-ds-lg overflow-hidden">
                    <button
                        type="button"
                        onClick={() => setOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between py-3 px-4 bg-ds-background cursor-pointer"
                    >
                        <span className="text-[14px] font-medium text-ds-foreground">@radix-ui/primitives</span>
                        <ChevronsUpDown
                            className={`size-4 text-ds-muted-foreground shrink-0 transition-transform duration-200 ${
                                open ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-200 ${
                            open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="border-t border-ds-border py-3 px-4 space-y-2">
                            <div className="rounded-ds-md border border-ds-border px-3 py-2 text-[14px] text-ds-foreground">
                                @radix-ui/react-accordion
                            </div>
                            <div className="rounded-ds-md border border-ds-border px-3 py-2 text-[14px] text-ds-foreground">
                                @radix-ui/react-collapsible
                            </div>
                            <div className="rounded-ds-md border border-ds-border px-3 py-2 text-[14px] text-ds-foreground">
                                @radix-ui/react-dialog
                            </div>
                        </div>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
