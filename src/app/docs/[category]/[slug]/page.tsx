import { getDocContent } from "@/lib/system"
import ReactMarkdown from "react-markdown"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock } from "lucide-react"
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
        <div className="min-h-screen bg-white dark:bg-zinc-950/20">
            <div className="max-w-4xl mx-auto py-12 px-8">
                <header className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm mb-8 group"
                    >
                        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Overview
                    </Link>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-indigo-200 dark:border-indigo-500/20">
                            {category}
                        </div>
                        <div className="flex items-center gap-2 text-zinc-500 text-xs">
                            <Clock className="size-3.5" />
                            <span>system/{category}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white font-['Outfit']">
                        {doc.title}
                    </h1>
                </header>

                <article className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown>{doc.content}</ReactMarkdown>
                </article>

                <footer className="mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <p className="text-sm text-zinc-500">TimelyCare Design System</p>
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-zinc-500">
                            v1.0.0
                        </span>
                        <span className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-zinc-500">
                            {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    )
}
