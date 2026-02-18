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
            color: "blue",
        },
        {
            title: "Design Tokens",
            description: "Colors, typography, spacing, and theming for Member, Campus, and Admin.",
            href: "/docs/tokens/themes",
            icon: Palette,
            color: "violet",
        },
        {
            title: "Components",
            description: "Props, variants, and implementation specs for all UI components.",
            href: "/docs/components/button",
            icon: Component,
            color: "emerald",
        },
        {
            title: "Patterns",
            description: "Layout patterns, UI states, and component selection guidance.",
            href: "/docs/patterns/component-match",
            icon: Rss,
            color: "amber",
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

    const iconColorMap: Record<string, string> = {
        blue: "text-blue-600 dark:text-blue-400",
        violet: "text-violet-600 dark:text-violet-400",
        emerald: "text-emerald-600 dark:text-emerald-400",
        amber: "text-amber-600 dark:text-amber-400",
    }

    const bgColorMap: Record<string, string> = {
        blue: "bg-blue-50 dark:bg-blue-500/10",
        violet: "bg-violet-50 dark:bg-violet-500/10",
        emerald: "bg-emerald-50 dark:bg-emerald-500/10",
        amber: "bg-amber-50 dark:bg-amber-500/10",
    }

    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto py-16 px-8">
                {/* Header */}
                <header className="mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 mb-5">
                        <div className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-wide">TimelyCare Experience Design System</span>
                    </div>
                    <h1 className="text-[2rem] font-bold tracking-tight mb-3 leading-tight">
                        Helix<br />
                        <span className="text-[hsl(var(--muted-foreground))]">Experience Design System</span>
                    </h1>
                    <p className="text-[15px] text-[hsl(var(--muted-foreground))] max-w-xl leading-relaxed">
                        The design system lives in markdown. This is the front-end to read it — structured for humans, readable by machines. Every page is a file; every file is the source of truth for developers and AI agents building TimelyCare products.
                    </p>
                </header>

                {/* Main navigation cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {mainCards.map((card) => (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="group flex items-start gap-4 p-5 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl hover:border-[hsl(var(--ring)/0.3)] hover:shadow-md transition-all duration-200"
                        >
                            <div className={`size-10 ${bgColorMap[card.color]} rounded-xl flex items-center justify-center shrink-0`}>
                                <card.icon className={`size-[18px] ${iconColorMap[card.color]}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h2 className="text-sm font-semibold mb-1.5 flex items-center justify-between">
                                    {card.title}
                                    <ArrowRight className="size-3.5 text-[hsl(var(--ring))] opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all" />
                                </h2>
                                <p className="text-[13px] text-[hsl(var(--muted-foreground))] leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Secondary navigation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
                    {secondaryCards.map((card) => (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="group p-4 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl hover:border-[hsl(var(--ring)/0.3)] hover:shadow-sm transition-all duration-200"
                        >
                            <div className="flex items-center gap-2.5 mb-2">
                                <card.icon className="size-4 text-[hsl(var(--muted-foreground))]" />
                                <h3 className="text-sm font-semibold">{card.title}</h3>
                            </div>
                            <p className="text-[13px] text-[hsl(var(--muted-foreground))] leading-relaxed">
                                {card.description}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Needs Input Widget */}
                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] mb-6 shadow-sm">
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2.5">
                            <div className="size-7 bg-amber-50 dark:bg-amber-500/10 rounded-lg flex items-center justify-center">
                                <AlertCircle className="size-4 text-amber-600 dark:text-amber-400" />
                            </div>
                            <h3 className="text-sm font-semibold">Needs Human Input</h3>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                            <span className="px-2.5 py-1 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 rounded-md font-semibold text-[11px]">
                                {stats.highPriority} high priority
                            </span>
                            <span className="text-[hsl(var(--muted-foreground))] text-[11px]">
                                {stats.needsInput} of {stats.total}
                            </span>
                        </div>
                    </div>
                    <div className="space-y-1 max-h-72 overflow-y-auto">
                        {incompleteTodos.map((todo) => (
                            <Link
                                key={todo.id}
                                href={`/docs/${todo.category}/${todo.filePath.split('/').pop()?.replace('.md', '')}`}
                                className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:bg-[hsl(var(--muted)/0.5)] hover:border-[hsl(var(--border))] transition-all duration-150 group"
                            >
                                {todo.status === "complete" ? (
                                    <CheckCircle2 className="size-4 text-emerald-500 mt-0.5 shrink-0" />
                                ) : (
                                    <Circle className="size-4 text-[hsl(var(--border))] mt-0.5 shrink-0" />
                                )}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[13px] font-medium group-hover:text-[hsl(var(--ring))] transition-colors">
                                            {todo.title}
                                        </span>
                                        {todo.priority === "high" && (
                                            <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 rounded">
                                                High
                                            </span>
                                        )}
                                        <span className="px-1.5 py-0.5 text-[10px] font-medium bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] rounded">
                                            {todo.category}
                                        </span>
                                    </div>
                                    <p className="text-xs text-[hsl(var(--muted-foreground))] truncate">
                                        {todo.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <p className="text-[11px] text-[hsl(var(--muted-foreground))] mt-4 pt-4 border-t border-[hsl(var(--border)/0.5)]">
                        Click an item to view the file. Update status in <code className="px-1.5 py-0.5 bg-[hsl(var(--muted))] rounded text-[10px] font-mono">src/lib/todos.ts</code>
                    </p>
                </div>

                {/* Quick info */}
                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-sm">
                    <h3 className="text-sm font-semibold mb-2.5">How it works</h3>
                    <p className="text-[13px] text-[hsl(var(--muted-foreground))] mb-4 leading-relaxed">
                        Documentation is loaded from <code className="px-1.5 py-0.5 bg-[hsl(var(--muted))] rounded text-[11px] font-mono">design-system-context/</code> folder. 
                        Edits to markdown files sync automatically.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['system/tokens/', 'system/components/', 'system/patterns/', 'tasks/'].map((path) => (
                            <span key={path} className="px-3 py-1.5 bg-[hsl(var(--muted))] rounded-lg text-[11px] font-mono text-[hsl(var(--muted-foreground))]">
                                {path}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
