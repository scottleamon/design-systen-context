import Link from "next/link"
import { getDocsHierarchy } from "@/lib/system"
import { Home } from "lucide-react"
import SidebarSection from "./SidebarSection"
import { ThemeToggle } from "./ThemeToggle"

// Define category order for consistent display
const categoryOrder = [
    "tasks",      // Workflow/tasks first - how to use the system
    "rules",      // Core rules
    "tokens",     // Design tokens
    "components", // Component docs
    "patterns",   // Pattern docs
    "icons",      // Icon inventory
    "decisions",  // Decision documentation
    "a11y",       // Accessibility details
]

// Categories that should be expanded by default
const defaultOpenCategories = ["tasks", "rules"]

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
        <aside className="w-72 border-r border-zinc-200 dark:border-zinc-800/50 bg-zinc-50 dark:bg-zinc-950/50 backdrop-blur-xl flex flex-col h-screen sticky top-0">
            <div className="p-8 pb-4">
                <Link href="/" className="flex items-center gap-3 font-bold text-xl tracking-tight text-zinc-900 dark:text-white group">
                    <div className="size-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                        <div className="size-5 bg-white/20 backdrop-blur-sm rotate-45 rounded-md border border-white/30" />
                    </div>
                    <span className="font-['Outfit']">Workbench</span>
                </Link>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-6 scrollbar-hide">
                <div className="space-y-1 mb-6">
                    <Link
                        href="/"
                        className="group flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-200"
                    >
                        <div className="size-8 rounded-lg bg-zinc-200 dark:bg-zinc-900 group-hover:bg-indigo-500/10 flex items-center justify-center transition-colors">
                            <Home className="size-4 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors" />
                        </div>
                        Overview
                    </Link>
                </div>

                {categories.map((category) => (
                    <SidebarSection
                        key={category}
                        category={category}
                        docs={hierarchy[category]}
                        defaultOpen={defaultOpenCategories.includes(category)}
                    />
                ))}
            </nav>

            <div className="p-6 mt-auto space-y-4">
                <div className="p-4 bg-zinc-100 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-black rounded-2xl border border-zinc-200 dark:border-white/[0.05] shadow-sm dark:shadow-2xl">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="relative">
                            <div className="size-2 bg-emerald-500 rounded-full" />
                            <div className="absolute inset-0 size-2 bg-emerald-500 rounded-full animate-ping" />
                        </div>
                        <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Live Sync</p>
                    </div>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        Edits to <code className="text-zinc-700 dark:text-zinc-300">.design-system-context/</code> sync instantly.
                    </p>
                </div>
                <ThemeToggle />
            </div>
        </aside>
    )
}
