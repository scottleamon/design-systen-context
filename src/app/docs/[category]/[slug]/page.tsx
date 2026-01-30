import { getDocContent } from "@/lib/system"
import ReactMarkdown from "react-markdown"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, BookOpen } from "lucide-react"
import Link from "next/link"

interface PageProps {
    params: {
        category: string
        slug: string
    }
}

export default async function DocPage({ params }: PageProps) {
    const { category, slug } = params
    const doc = await getDocContent(category, slug)

    if (!doc) {
        return notFound()
    }

    return (
        <div className="min-h-screen bg-zinc-950/20">
            <div className="max-w-4xl mx-auto py-20 px-10">
                <header className="mb-20">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm mb-12 group"
                    >
                        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Overview
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-indigo-500/20">
                            {category}
                        </div>
                        <div className="flex items-center gap-2 text-zinc-500 text-xs">
                            <Clock className="size-3.5" />
                            <span>Autosynced from system/{category}</span>
                        </div>
                    </div>

                    <h1 className="text-6xl font-bold tracking-tight text-white font-['Outfit'] mb-8">
                        {doc.title}
                    </h1>

                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                        <div className="size-10 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/[0.05]">
                            <BookOpen className="size-5 text-zinc-400" />
                        </div>
                        <div>
                            <p className="text-sm text-zinc-300 font-medium">Single Source of Truth</p>
                            <p className="text-xs text-zinc-500">This documentation is the authoritative guide for AI agents and developers.</p>
                        </div>
                    </div>
                </header>

                <article className="prose prose-invert max-w-none">
                    <ReactMarkdown>{doc.content}</ReactMarkdown>
                </article>

                <footer className="mt-40 pt-10 border-t border-zinc-900 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-1">
                        <p className="text-white font-medium">Design System Workbench</p>
                        <p className="text-zinc-500 text-sm">Visualizing the future of AI-driven development.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="px-4 py-2 bg-zinc-900 border border-white/[0.05] rounded-xl text-xs text-zinc-400">
                            v1.0.0
                        </div>
                        <div className="px-4 py-2 bg-zinc-900 border border-white/[0.05] rounded-xl text-xs text-zinc-400">
                            {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
