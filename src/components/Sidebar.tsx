import Link from "next/link"
import { getDocsHierarchy } from "@/lib/system"
import {
    BookOpen,
    Palette,
    Component,
    Rss,
    Smile,
    Home,
    ChevronRight,
    Scale,
    Accessibility,
    ListChecks
} from "lucide-react"

const iconsMap: Record<string, any> = {
    rules: BookOpen,
    tokens: Palette,
    components: Component,
    patterns: Rss,
    icons: Smile,
    decisions: Scale,
    a11y: Accessibility,
    tasks: ListChecks,
}

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
        <aside className="w-72 border-r border-zinc-800/50 bg-zinc-950/50 backdrop-blur-xl flex flex-col h-screen sticky top-0">
            <div className="p-8 pb-4">
                <Link href="/" className="flex items-center gap-3 font-bold text-xl tracking-tight text-white group">
                    <div className="size-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                        <div className="size-5 bg-white/20 backdrop-blur-sm rotate-45 rounded-md border border-white/30" />
                    </div>
                    <span className="font-['Outfit']">Workbench</span>
                </Link>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-6 scrollbar-hide">
                <div className="space-y-1 mb-10">
                    <Link
                        href="/"
                        className="group flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-zinc-400 hover:text-white transition-all duration-200"
                    >
                        <div className="size-8 rounded-lg bg-zinc-900 group-hover:bg-indigo-500/10 flex items-center justify-center transition-colors">
                            <Home className="size-4 group-hover:text-indigo-400 transition-colors" />
                        </div>
                        Overview
                    </Link>
                </div>

                {categories.map((category) => {
                    const Icon = iconsMap[category] || BookOpen
                    return (
                        <div key={category} className="mb-10">
                            <h3 className="px-4 text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4 flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    <Icon className="size-3.5" />
                                    {category}
                                </span>
                            </h3>
                            <div className="space-y-0.5">
                                {hierarchy[category].map((doc) => (
                                    <Link
                                        key={doc.slug}
                                        href={`/docs/${category}/${doc.slug}`}
                                        className="group flex items-center justify-between px-4 py-2 text-[13px] font-medium text-zinc-400 hover:text-white rounded-xl hover:bg-white/[0.03] transition-all duration-200 border border-transparent hover:border-white/[0.05]"
                                    >
                                        {doc.title}
                                        <ChevronRight className="size-3 opacity-0 group-hover:opacity-40 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </nav>

            <div className="p-6 mt-auto">
                <div className="p-4 bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-white/[0.05] shadow-2xl">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="relative">
                            <div className="size-2 bg-emerald-500 rounded-full" />
                            <div className="absolute inset-0 size-2 bg-emerald-500 rounded-full animate-ping" />
                        </div>
                        <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">System Live</p>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                        Connected to <code>/system</code> folder. Edits sync instantly.
                    </p>
                </div>
            </div>
        </aside>
    )
}
