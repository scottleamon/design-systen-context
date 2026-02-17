import Link from "next/link"
import { getDocsHierarchy } from "@/lib/system"
import { Home, Sparkles } from "lucide-react"
import SidebarSection from "./SidebarSection"
import { ThemeToggle } from "./ThemeToggle"

const categoryOrder = [
    "rules",
    "tokens",
    "components",
    "patterns",
    "icons",
    "decisions",
    "a11y",
]

const defaultOpenCategories = ["rules"]

export default async function Sidebar() {
    const hierarchy = await getDocsHierarchy()
    const categories = Object.keys(hierarchy).sort((a, b) => {
        const aIndex = categoryOrder.indexOf(a)
        const bIndex = categoryOrder.indexOf(b)
        if (aIndex === -1 && bIndex === -1) return 0
        if (aIndex === -1) return 1
        if (bIndex === -1) return -1
        return aIndex - bIndex
    })

    return (
        <aside className="sidebar-chrome w-[268px] border-r flex flex-col h-screen sticky top-0">
            {/* Brand header */}
            <div className="px-5 pt-5 pb-4">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="size-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-[1.02] transition-all">
                        <Sparkles className="size-4 text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[14px] font-semibold tracking-tight text-[hsl(var(--foreground))] leading-tight">Design System</span>
                        <span className="text-[11px] text-[hsl(var(--sidebar-text-muted))] leading-none">TimelyCare</span>
                    </div>
                </Link>
            </div>

            {/* Divider */}
            <div className="mx-4 border-t border-[hsl(var(--sidebar-border))]" />

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-3 py-4">
                <div className="mb-3">
                    <Link
                        href="/"
                        className="sidebar-nav-item group flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg"
                    >
                        <Home className="size-[18px] opacity-60 group-hover:opacity-100 transition-opacity" />
                        Overview
                    </Link>
                </div>

                <div className="space-y-1">
                    {categories.filter(c => c !== "tasks").map((category) => (
                        <SidebarSection
                            key={category}
                            category={category}
                            docs={hierarchy[category]}
                            defaultOpen={defaultOpenCategories.includes(category)}
                        />
                    ))}
                </div>

                {hierarchy["tasks"] && (
                    <>
                        <div className="my-4 mx-3 border-t border-[hsl(var(--sidebar-border))]" />
                        <SidebarSection
                            category="tasks"
                            docs={hierarchy["tasks"]}
                            defaultOpen={false}
                        />
                    </>
                )}
            </nav>

            {/* Footer */}
            <div className="px-4 py-3 mt-auto border-t border-[hsl(var(--sidebar-border))]">
                <ThemeToggle />
            </div>
        </aside>
    )
}
