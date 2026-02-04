import Link from "next/link"
import { BookOpen, Palette, Component, Rss, ArrowRight, Sparkles } from "lucide-react"

export default function Home() {
    const cards = [
        {
            title: "Core Rules",
            description: "Fundamental principles and tech stack requirements for the ecosystem.",
            href: "/docs/rules/tech-stack",
            icon: BookOpen,
            gradient: "from-blue-500/20 to-cyan-500/20",
            accent: "text-blue-400"
        },
        {
            title: "Design Tokens",
            description: "3 themes for 3 properties. Colors, typography, and spacing that adapt across Member, Campus, and Admin.",
            href: "/docs/tokens/themes",
            icon: Palette,
            gradient: "from-purple-500/20 to-pink-500/20",
            accent: "text-purple-400"
        },
        {
            title: "Components",
            description: "Interactive library of UI primitives and implementation specs.",
            href: "/docs/components/button",
            icon: Component,
            gradient: "from-indigo-500/20 to-indigo-500/20",
            accent: "text-indigo-400"
        },
        {
            title: "Patterns",
            description: "Battle-tested solutions for layout and common UX challenges.",
            href: "/docs/patterns/component-match",
            icon: Rss,
            gradient: "from-orange-500/20 to-red-500/20",
            accent: "text-orange-400"
        }
    ]

    return (
        <div className="min-h-screen selection:bg-indigo-500/30">
            {/* Hero Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] size-[50%] bg-indigo-500/10 blur-[120px] rounded-full" />
                <div className="absolute -bottom-[10%] -right-[10%] size-[50%] bg-purple-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto py-32 px-10">
                <header className="mb-32">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                        <Sparkles className="size-3" />
                        V1.0 Developer Preview
                    </div>
                    <h1 className="text-7xl font-extrabold text-white tracking-tight mb-8 font-['Outfit'] leading-[1.1]">
                        Experience your <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                            Design Context.
                        </span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
                        The visual interface for your AI Context Repository. Transform your markdown into a premium developer experience.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cards.map((card) => (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="group block relative p-10 bg-zinc-900/40 backdrop-blur-sm border border-white/[0.05] rounded-[32px] hover:border-white/20 transition-all duration-300"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]`} />

                            <div className="relative z-10">
                                <div className="size-14 bg-zinc-800 rounded-2xl flex items-center justify-center mb-8 border border-white/[0.08] group-hover:scale-110 group-hover:bg-zinc-700 transition-all duration-300">
                                    <card.icon className={`size-6 ${card.accent}`} />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-4 font-['Outfit'] flex items-center justify-between">
                                    {card.title}
                                    <ArrowRight className="size-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </h2>
                                <p className="text-zinc-400 leading-relaxed text-lg font-light">
                                    {card.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-40 p-16 rounded-[48px] border border-white/[0.05] bg-gradient-to-b from-white/[0.02] to-transparent text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <h3 className="text-3xl font-bold text-white mb-6 font-['Outfit'] relative z-10">Real-time Context Sync</h3>
                    <p className="text-zinc-500 max-w-xl mx-auto mb-12 text-lg leading-relaxed relative z-10 font-light">
                        Any changes you make to the markdown files in the <code>/system</code> folder will be instantly reflected here. No reload needed.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                        {['system/tokens/themes.md', 'system/rules/theme-strategy.md', 'system/components/button.md'].map((path) => (
                            <div key={path} className="px-5 py-3 bg-black/40 backdrop-blur-md rounded-xl text-[13px] font-mono text-indigo-300 border border-white/[0.05] shadow-xl">
                                {path}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
