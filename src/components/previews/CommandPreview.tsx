"use client"

import { useState, type ComponentType } from "react"
import PreviewShell, { PreviewSection } from "./PreviewShell"
import { Calendar, Search, Settings, User, CreditCard } from "lucide-react"

interface CommandItem {
    label: string
    icon: ComponentType<{ className?: string }>
    group: string
}

const items: CommandItem[] = [
    { label: "Calendar", icon: Calendar, group: "Suggestions" },
    { label: "Search", icon: Search, group: "Suggestions" },
    { label: "Settings", icon: Settings, group: "Suggestions" },
    { label: "Profile", icon: User, group: "Settings" },
    { label: "Billing", icon: CreditCard, group: "Settings" },
]

export default function CommandPreview() {
    const [query, setQuery] = useState("")
    const [highlighted, setHighlighted] = useState("Calendar")

    const filtered = items.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
    )

    const groups = Array.from(new Set(filtered.map((i) => i.group)))

    return (
        <PreviewShell>
            <PreviewSection title="Command Palette" description="Type to filter commands. Click to select.">
                <div className="max-w-[360px] bg-ds-card text-ds-card-foreground border border-ds-border rounded-ds-lg shadow-ds overflow-hidden">
                    <div className="flex items-center gap-2 px-3 py-2 border-b border-ds-border">
                        <Search className="size-4 text-ds-muted-foreground shrink-0" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Type a command or search..."
                            className="flex-1 bg-transparent text-ds-foreground text-[14px] outline-none placeholder:text-ds-muted-foreground"
                        />
                    </div>
                    <div className="p-1">
                        {filtered.length === 0 ? (
                            <div className="px-3 py-6 text-center text-[14px] text-ds-muted-foreground">
                                No results found.
                            </div>
                        ) : (
                            groups.map((group) => (
                                <div key={group}>
                                    <div className="px-2 py-1.5 text-[11px] font-medium text-ds-muted-foreground uppercase tracking-wider">
                                        {group}
                                    </div>
                                    {filtered
                                        .filter((i) => i.group === group)
                                        .map((item) => {
                                            const Icon = item.icon
                                            const isActive = highlighted === item.label
                                            return (
                                                <button
                                                    key={item.label}
                                                    type="button"
                                                    onClick={() => setHighlighted(item.label)}
                                                    onMouseEnter={() => setHighlighted(item.label)}
                                                    className={`flex w-full items-center gap-2 px-2 py-1.5 text-[14px] rounded-ds-sm cursor-pointer ${
                                                        isActive
                                                            ? "bg-ds-accent text-ds-accent-foreground"
                                                            : "text-ds-foreground"
                                                    }`}
                                                >
                                                    <Icon
                                                        className={`size-4 shrink-0 ${
                                                            isActive ? "" : "text-ds-muted-foreground"
                                                        }`}
                                                    />
                                                    {item.label}
                                                </button>
                                            )
                                        })}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
