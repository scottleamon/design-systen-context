import Link from "next/link"
import { BookOpen, Palette, Component, Rss, ArrowRight, Scale, Accessibility, ListChecks, AlertCircle, Circle, CheckCircle2 } from "lucide-react"
import { systemTodos, getTodoStats } from "@/lib/todos"

export default function Home() {
    const stats = getTodoStats()
    const incompleteTodos = systemTodos.filter(t => t.status !== "complete")
    const mainCards = [
        {
            title: "Rules",
            description: "Tech stack, project structure, and accessibility requirements.",
            href: "/docs/rules/tech-stack",
            icon: BookOpen,
        },
        {
            title: "Design Tokens",
            description: "Colors, typography, spacing, and theming for Member, Campus, and Admin.",
            href: "/docs/tokens/themes",
            icon: Palette,
        },
        {
            title: "Components",
            description: "Props, variants, and implementation specs for all UI components.",
            href: "/docs/components/button",
            icon: Component,
        },
        {
            title: "Patterns",
            description: "Layout patterns, UI states, and component selection guidance.",
            href: "/docs/patterns/component-match",
            icon: Rss,
        },
    ]

    const secondaryCards = [
        {
            title: "Tasks",
            description: "Workflows for creating, reviewing, and documenting components.",
            href: "/docs/tasks/WORKFLOW",
            icon: ListChecks,
        },
        {
            title: "Decisions",
            description: "Rationale behind color system, typography, and architecture choices.",
            href: "/docs/decisions/README",
            icon: Scale,
        },
        {
            title: "Accessibility",
            description: "Component-specific a11y requirements for forms, dialogs, tables.",
            href: "/docs/a11y/README",
            icon: Accessibility,
        },
    ]

    return (
        <div className="min-h-screen">
            <div className="max-w-5xl mx-auto py-16 px-8">
                <header className="mb-16">
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">TimelyCare Design System</p>
                    <h1 className="text-4xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4 font-['Outfit']">
                        Workbench
                    </h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
                        Internal documentation and component reference for building TimelyCare applications. 
                        This is the single source of truth for AI agents and developers.
                    </p>
                </header>

                {/* Main navigation cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {mainCards.map((card) => (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="group flex items-start gap-4 p-6 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-md dark:hover:shadow-indigo-500/5 transition-all"
                        >
                            <div className="size-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/10 transition-colors">
                                <card.icon className="size-5 text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1 flex items-center justify-between font-['Outfit']">
                                    {card.title}
                                    <ArrowRight className="size-4 text-zinc-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </h2>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    {card.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Secondary navigation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                    {secondaryCards.map((card) => (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="group p-5 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 rounded-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <card.icon className="size-4 text-zinc-500 dark:text-zinc-500" />
                                <h3 className="font-medium text-zinc-900 dark:text-white font-['Outfit']">{card.title}</h3>
                            </div>
                            <p className="text-sm text-zinc-500 dark:text-zinc-500">
                                {card.description}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Needs Input Widget */}
                <div className="p-6 rounded-xl border border-amber-200 dark:border-amber-500/20 bg-amber-50 dark:bg-amber-500/5 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <AlertCircle className="size-5 text-amber-600 dark:text-amber-500" />
                            <h3 className="font-semibold text-zinc-900 dark:text-white font-['Outfit']">Needs Human Input</h3>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                            <span className="px-2 py-1 bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-400 rounded-md font-medium">
                                {stats.highPriority} high priority
                            </span>
                            <span className="text-zinc-500">
                                {stats.needsInput} of {stats.total} items
                            </span>
                        </div>
                    </div>
                    <div className="space-y-2 max-h-80 overflow-y-auto">
                        {incompleteTodos.map((todo) => (
                            <Link
                                key={todo.id}
                                href={`/docs/${todo.category}/${todo.filePath.split('/').pop()?.replace('.md', '')}`}
                                className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-amber-300 dark:hover:border-amber-500/30 transition-colors group"
                            >
                                {todo.status === "complete" ? (
                                    <CheckCircle2 className="size-4 text-emerald-500 mt-0.5 shrink-0" />
                                ) : (
                                    <Circle className="size-4 text-zinc-300 dark:text-zinc-600 mt-0.5 shrink-0" />
                                )}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="font-medium text-sm text-zinc-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                                            {todo.title}
                                        </span>
                                        {todo.priority === "high" && (
                                            <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 rounded">
                                                High
                                            </span>
                                        )}
                                        <span className="px-1.5 py-0.5 text-[10px] font-medium uppercase bg-zinc-100 dark:bg-zinc-800 text-zinc-500 rounded">
                                            {todo.category}
                                        </span>
                                    </div>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-500 truncate">
                                        {todo.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <p className="text-xs text-zinc-500 mt-4">
                        Click an item to view the file. Update status in <code className="px-1 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded text-[10px]">src/lib/todos.ts</code>
                    </p>
                </div>

                {/* Quick info */}
                <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30">
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-3 font-['Outfit']">How it works</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                        Documentation is loaded from <code className="px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded text-xs">.design-system-context/</code> folder. 
                        Edits to markdown files sync automatically.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['system/tokens/', 'system/components/', 'system/patterns/', 'tasks/'].map((path) => (
                            <span key={path} className="px-3 py-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-md text-xs font-mono text-zinc-600 dark:text-zinc-400">
                                {path}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
