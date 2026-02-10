import { getDocContent, ROOT_CATEGORIES } from "@/lib/system"
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
        <div className="min-h-screen">
            <div className="max-w-3xl mx-auto py-12 px-8">
                <header className="mb-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-[13px] mb-8 group"
                    >
                        <ArrowLeft className="size-3.5 group-hover:-translate-x-0.5 transition-transform" />
                        Overview
                    </Link>

                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                            {category}
                        </span>
                        <span className="text-zinc-300 dark:text-zinc-700">/</span>
                        <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-500 text-[11px]">
                            <Clock className="size-3" />
                            <span>{ROOT_CATEGORIES.includes(category) ? category : `system/${category}`}</span>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        {doc.title}
                    </h1>
                </header>

                <article className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown>{doc.content}</ReactMarkdown>
                </article>

                <footer className="mt-16 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <p className="text-[11px] text-zinc-500">TimelyCare Design System</p>
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded text-[11px] text-zinc-500 font-mono">
                            v1.0.0
                        </span>
                        <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded text-[11px] text-zinc-500">
                            {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    )
}
