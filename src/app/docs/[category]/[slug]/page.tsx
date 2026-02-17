import { getDocContent, ROOT_CATEGORIES } from "@/lib/system"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock } from "lucide-react"
import Link from "next/link"
import DocTabs from "@/components/DocTabs"
import ComponentPreview from "@/components/previews/ComponentPreview"

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

    const { hasPreview: checkHasPreview } = await import("@/components/previews/registry")
    const previewableByCategory = ["components", "icons", "tokens"]
    const hasPreview = previewableByCategory.includes(category) && checkHasPreview(slug)

    const specContent = (
        <article className="prose dark:prose-invert max-w-none prose-table:border-collapse prose-table:w-full prose-th:border prose-th:border-[hsl(var(--border))] prose-th:bg-[hsl(var(--muted))] prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-td:border prose-td:border-[hsl(var(--border))] prose-td:px-4 prose-td:py-2 prose-code:before:content-none prose-code:after:content-none prose-code:bg-[hsl(var(--muted))] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[13px] prose-code:font-mono">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
            >
                {doc.content}
            </ReactMarkdown>
        </article>
    )

    return (
        <div className="min-h-screen">
            <div className="max-w-3xl mx-auto py-12 px-8">
                <header className="mb-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--ring))] transition-colors text-[13px] mb-8 group font-medium"
                    >
                        <ArrowLeft className="size-3.5 group-hover:-translate-x-0.5 transition-transform" />
                        Overview
                    </Link>

                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-[11px] font-semibold text-[hsl(var(--ring))] uppercase tracking-widest">
                            {category}
                        </span>
                        <span className="text-[hsl(var(--border))]">/</span>
                        <div className="flex items-center gap-1.5 text-[hsl(var(--muted-foreground))] text-[11px]">
                            <Clock className="size-3" />
                            <span>{ROOT_CATEGORIES.includes(category) ? category : `system/${category}`}</span>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight">
                        {doc.title}
                    </h1>
                </header>

                {hasPreview ? (
                    <DocTabs
                        specContent={specContent}
                        previewContent={<ComponentPreview slug={slug} />}
                    />
                ) : (
                    specContent
                )}

                <footer className="mt-16 pt-6 border-t border-[hsl(var(--border))] flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <p className="text-[11px] text-[hsl(var(--muted-foreground))]">TimelyCare Design System</p>
                    <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-md text-[11px] text-[hsl(var(--muted-foreground))] font-mono">
                            v1.0.0
                        </span>
                        <span className="px-2.5 py-1 bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-md text-[11px] text-[hsl(var(--muted-foreground))]">
                            {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    )
}
