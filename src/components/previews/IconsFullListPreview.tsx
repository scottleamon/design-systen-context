"use client"

import { useState, useMemo, useCallback } from "react"
import * as LucideIcons from "lucide-react"
import type { LucideProps } from "lucide-react"
import type { ComponentType } from "react"

type IconComponent = ComponentType<LucideProps>

const allIcons: [string, IconComponent][] = Object.entries(LucideIcons)
    .filter(
        ([name, val]) =>
            name[0] === name[0].toUpperCase() &&
            !name.endsWith("Icon") &&
            name !== "default" &&
            name !== "createLucideIcon" &&
            name !== "icons" &&
            val != null &&
            (typeof val === "function" || (typeof val === "object" && "render" in (val as Record<string, unknown>)))
    )
    .sort(([a], [b]) => a.localeCompare(b)) as [string, IconComponent][]

const sizes = [
    { label: "xs", className: "size-3", px: "12px" },
    { label: "sm", className: "size-4", px: "16px" },
    { label: "md", className: "size-5", px: "20px" },
    { label: "lg", className: "size-6", px: "24px" },
    { label: "xl", className: "size-8", px: "32px" },
]

const PAGE_SIZE = 120

export default function IconsFullListPreview() {
    const [query, setQuery] = useState("")
    const [sizeIdx, setSizeIdx] = useState(1)
    const [copied, setCopied] = useState<string | null>(null)
    const [page, setPage] = useState(0)

    const filtered = useMemo(() => {
        if (!query.trim()) return allIcons
        const q = query.toLowerCase()
        return allIcons.filter(([name]) => name.toLowerCase().includes(q))
    }, [query])

    const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
    const visible = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

    const handleCopy = useCallback((name: string) => {
        const importStr = `import { ${name} } from "lucide-react"`
        navigator.clipboard.writeText(importStr).then(() => {
            setCopied(name)
            setTimeout(() => setCopied(null), 1500)
        })
    }, [])

    const currentSize = sizes[sizeIdx]

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    Icon Browser
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {allIcons.length} Lucide icons. Search, browse, and click to copy the import statement.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <LucideIcons.Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-400" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                            setPage(0)
                        }}
                        placeholder="Search icons..."
                        className="w-full h-9 pl-9 pr-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                </div>
                <div className="flex items-center gap-1 border border-zinc-200 dark:border-zinc-700 rounded-lg p-0.5">
                    {sizes.map((s, i) => (
                        <button
                            key={s.label}
                            type="button"
                            onClick={() => setSizeIdx(i)}
                            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                                sizeIdx === i
                                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
                                    : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                            }`}
                        >
                            {s.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="text-xs text-zinc-500 dark:text-zinc-400">
                Showing {visible.length} of {filtered.length} icons
                {currentSize && <span className="ml-2">at {currentSize.px}</span>}
                {query && filtered.length === 0 && (
                    <span className="ml-2 text-amber-600 dark:text-amber-400">— no matches</span>
                )}
            </div>

            {copied && (
                <div className="fixed top-4 right-4 z-50 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-medium px-3 py-2 rounded-lg shadow-lg animate-in fade-in slide-in-from-top-2">
                    Copied: import {"{"} {copied} {"}"} from &quot;lucide-react&quot;
                </div>
            )}

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-1">
                {visible.map(([name, Icon]) => (
                    <button
                        key={name}
                        type="button"
                        onClick={() => handleCopy(name)}
                        title={name}
                        className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-lg border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group cursor-pointer"
                    >
                        <Icon className={`${currentSize.className} text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors`} />
                        <span className="text-[10px] text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 truncate max-w-full transition-colors leading-tight">
                            {name}
                        </span>
                    </button>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-2">
                    <button
                        type="button"
                        onClick={() => setPage((p) => Math.max(0, p - 1))}
                        disabled={page === 0}
                        className="px-3 py-1.5 text-xs font-medium rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-50 dark:hover:bg-zinc-800"
                    >
                        Previous
                    </button>
                    <span className="text-xs text-zinc-500">
                        Page {page + 1} of {totalPages}
                    </span>
                    <button
                        type="button"
                        onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                        disabled={page === totalPages - 1}
                        className="px-3 py-1.5 text-xs font-medium rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-50 dark:hover:bg-zinc-800"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    )
}
