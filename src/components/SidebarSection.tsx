"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(defaultOpen)
    const Icon = iconsMap[category] || BookOpen

    return (
        <div className="mb-1">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="sidebar-section-label w-full px-3 py-2 flex items-center justify-between hover:bg-[hsl(var(--sidebar-hover))] rounded-lg transition-colors"
            >
                <span className="flex items-center gap-2.5">
                    <Icon className="size-4 opacity-50" />
                    {category}
                </span>
                <span className="flex items-center gap-2">
                    <span className="text-[10px] font-medium opacity-50 tabular-nums">
                        {docs.length}
                    </span>
                    {isOpen ? (
                        <ChevronDown className="size-3 opacity-40" />
                    ) : (
                        <ChevronRight className="size-3 opacity-40" />
                    )}
                </span>
            </button>
            
            <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="space-y-0.5 pt-1 pb-1">
                    {docs.map((doc) => {
                        const href = `/docs/${category}/${doc.slug}`
                        const isActive = pathname === href
                        return (
                            <Link
                                key={doc.slug}
                                href={href}
                                aria-current={isActive ? "page" : undefined}
                                className={`sidebar-nav-item group flex items-center justify-between pl-10 pr-3 py-[7px] text-[13px] rounded-lg ${isActive ? "active" : ""}`}
                            >
                                <span className="truncate">{doc.title}</span>
                                <ChevronRight className={`size-3 -translate-x-1 transition-all shrink-0 ${isActive ? "opacity-30" : "opacity-0 group-hover:opacity-30 group-hover:translate-x-0"}`} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
