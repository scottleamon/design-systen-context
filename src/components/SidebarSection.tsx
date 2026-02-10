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
        <div className="mb-3">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-3 py-1.5 text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.08em] flex items-center justify-between hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors rounded-md"
            >
                <span className="flex items-center gap-2">
                    <Icon className="size-3.5" />
                    {category}
                </span>
                <span className="flex items-center gap-1.5">
                    <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-600 tabular-nums">
                        {docs.length}
                    </span>
                    {isOpen ? (
                        <ChevronDown className="size-3 text-zinc-400 dark:text-zinc-600" />
                    ) : (
                        <ChevronRight className="size-3 text-zinc-400 dark:text-zinc-600" />
                    )}
                </span>
            </button>
            
            <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="space-y-px pt-1">
                    {docs.map((doc) => (
                        <Link
                            key={doc.slug}
                            href={`/docs/${category}/${doc.slug}`}
                            className="group flex items-center justify-between px-3 py-1.5 text-[13px] text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-150"
                        >
                            {doc.title}
                            <ChevronRight className="size-3 opacity-0 group-hover:opacity-30 -translate-x-1 group-hover:translate-x-0 transition-all" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
