import Link from "next/link"
import { getDocsHierarchy } from "@/lib/system"
import { Home } from "lucide-react"
import SidebarSection from "./SidebarSection"
import { ThemeToggle } from "./ThemeToggle"

// Define category order for consistent display (tasks rendered separately at bottom)
const categoryOrder = [
    "rules",      // Core rules
    "tokens",     // Design tokens
    "components", // Component docs
    "patterns",   // Pattern docs
    "icons",      // Icon inventory
    "decisions",  // Decision documentation
    "a11y",       // Accessibility details
]

// Categories that should be expanded by default
const defaultOpenCategories = ["rules"]

export default async function Sidebar() {
    const hierarchy = await getDocsHierarchy()
    // Sort categories according to defined order, with any unknown categories at the end
    const categories = Object.keys(hierarchy).sort((a, b) => {
        const aIndex = categoryOrder.indexOf(a)
        const bIndex = categoryOrder.indexOf(b)
        if (aIndex === -1 && bIndex === -1) return 0
        if (aIndex === -1) return 1
        if (bIndex === -1) return -1
        return aIndex - bIndex
    })

    return (
        <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex flex-col h-screen sticky top-0">
            <div className="px-6 pt-6 pb-2">
                <Link href="/" className="flex items-center gap-2.5 font-semibold text-base tracking-tight text-zinc-900 dark:text-white group">
                    <div className="size-8 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                        <div className="size-3.5 bg-white/90 dark:bg-zinc-900/90 rotate-45 rounded-[3px]" />
                    </div>
                    <span className="tracking-[-0.01em]">Workbench</span>
                </Link>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4">
                <div className="mb-4">
                    <Link
                        href="/"
                        className="group flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-150"
                    >
                        <Home className="size-4 text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                        Overview
                    </Link>
                </div>

                {categories.filter(c => c !== "tasks").map((category) => (
                    <SidebarSection
                        key={category}
                        category={category}
                        docs={hierarchy[category]}
                        defaultOpen={defaultOpenCategories.includes(category)}
                    />
                ))}

                {hierarchy["tasks"] && (
                    <>
                        <div className="my-3 mx-3 border-t border-zinc-200 dark:border-zinc-800" />
                        <SidebarSection
                            category="tasks"
                            docs={hierarchy["tasks"]}
                            defaultOpen={false}
                        />
                    </>
                )}
            </nav>

            <div className="px-4 py-4 mt-auto border-t border-zinc-200 dark:border-zinc-800">
                <ThemeToggle />
            </div>
        </aside>
    )
}
