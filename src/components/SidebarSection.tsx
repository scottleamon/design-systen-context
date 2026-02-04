"use client"

import { useState } from "react"
import Link from "next/link"
import {
    ChevronRight,
    ChevronDown,
    BookOpen,
    Palette,
    Component,
    Rss,
    Smile,
    Scale,
    Accessibility,
    ListChecks
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const iconsMap: Record<string, LucideIcon> = {
    rules: BookOpen,
    tokens: Palette,
    components: Component,
    patterns: Rss,
    icons: Smile,
    decisions: Scale,
    a11y: Accessibility,
    tasks: ListChecks,
}

interface Doc {
    title: string
    slug: string
    category: string
}

interface SidebarSectionProps {
    category: string
    docs: Doc[]
    defaultOpen?: boolean
}

export default function SidebarSection({ category, docs, defaultOpen = false }: SidebarSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen)
    const Icon = iconsMap[category] || BookOpen

    return (
        <div className="mb-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-2 text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] flex items-center justify-between hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-white/[0.02]"
            >
                <span className="flex items-center gap-2">
                    <Icon className="size-3.5" />
                    {category}
                </span>
                <span className="flex items-center gap-2">
                    <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-600 tabular-nums">
                        {docs.length}
                    </span>
                    {isOpen ? (
                        <ChevronDown className="size-3.5 text-zinc-400 dark:text-zinc-600" />
                    ) : (
                        <ChevronRight className="size-3.5 text-zinc-400 dark:text-zinc-600" />
                    )}
                </span>
            </button>
            
            <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="space-y-0.5 pt-2">
                    {docs.map((doc) => (
                        <Link
                            key={doc.slug}
                            href={`/docs/${category}/${doc.slug}`}
                            className="group flex items-center justify-between px-4 py-2 text-[13px] font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-xl hover:bg-zinc-100 dark:hover:bg-white/[0.03] transition-all duration-200 border border-transparent hover:border-zinc-200 dark:hover:border-white/[0.05]"
                        >
                            {doc.title}
                            <ChevronRight className="size-3 opacity-0 group-hover:opacity-40 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
