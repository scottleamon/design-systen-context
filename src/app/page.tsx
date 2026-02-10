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
            <div className="max-w-4xl mx-auto py-16 px-8">
                <header className="mb-14">
                    <p className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">TimelyCare Design System</p>
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-3">
                        Workbench
                    </h1>
                    <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                        Internal documentation and component reference for building TimelyCare applications. 
                        Work in progress — the single source of truth for AI agents and developers.
                    </p>
                </header>

                {/* Main navigation cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                    {mainCards.map((card) => (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="group flex items-start gap-4 p-5 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-blue-200 dark:hover:border-blue-500/30 hover:shadow-sm transition-all duration-150"
                        >
                            <div className="size-9 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 transition-colors">
                                <card.icon className="size-4 text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h2 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1 flex items-center justify-between">
                                    {card.title}
                                    <ArrowRight className="size-3.5 text-blue-400 dark:text-blue-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </h2>
                                <p className="text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Secondary navigation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-14">
                    {secondaryCards.map((card) => (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="group p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-150"
                        >
                            <div className="flex items-center gap-2.5 mb-1.5">
                                <card.icon className="size-3.5 text-zinc-500 dark:text-zinc-400" />
                                <h3 className="text-sm font-medium text-zinc-900 dark:text-white">{card.title}</h3>
                            </div>
                            <p className="text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {card.description}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Needs Input Widget */}
                <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <AlertCircle className="size-4 text-zinc-400 dark:text-zinc-500" />
                            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Needs Human Input</h3>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs">
                            <span className="px-2 py-0.5 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded font-medium text-[11px]">
                                {stats.highPriority} high priority
                            </span>
                            <span className="text-zinc-400 text-[11px]">
                                {stats.needsInput} of {stats.total}
                            </span>
                        </div>
                    </div>
                    <div className="space-y-1.5 max-h-72 overflow-y-auto">
                        {incompleteTodos.map((todo) => (
                            <Link
                                key={todo.id}
                                href={`/docs/${todo.category}/${todo.filePath.split('/').pop()?.replace('.md', '')}`}
                                className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-zinc-200 dark:hover:border-zinc-800 transition-all duration-150 group"
                            >
                                {todo.status === "complete" ? (
                                    <CheckCircle2 className="size-4 text-emerald-500 mt-0.5 shrink-0" />
                                ) : (
                                    <Circle className="size-4 text-zinc-300 dark:text-zinc-700 mt-0.5 shrink-0" />
                                )}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[13px] font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {todo.title}
                                        </span>
                                        {todo.priority === "high" && (
                                            <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded">
                                                High
                                            </span>
                                        )}
                                        <span className="px-1.5 py-0.5 text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 rounded">
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
                    <p className="text-[11px] text-zinc-400 mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/50">
                        Click an item to view the file. Update status in <code className="px-1 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-[10px]">src/lib/todos.ts</code>
                    </p>
                </div>

                {/* Quick info */}
                <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">How it works</h3>
                    <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mb-3 leading-relaxed">
                        Documentation is loaded from <code className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-[11px]">design-system-context/</code> folder. 
                        Edits to markdown files sync automatically.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        {['system/tokens/', 'system/components/', 'system/patterns/', 'tasks/'].map((path) => (
                            <span key={path} className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-md text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                                {path}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
