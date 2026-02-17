"use client"

import { useState } from "react"
import PreviewShell, { PreviewSection } from "./PreviewShell"
import { ChevronLeft, ChevronRight } from "lucide-react"

const totalPages = 10

function getVisiblePages(current: number): (number | "ellipsis")[] {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    if (current <= 3) return [1, 2, 3, 4, "ellipsis", totalPages]
    if (current >= totalPages - 2) return [1, "ellipsis", totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    return [1, "ellipsis", current - 1, current, current + 1, "ellipsis", totalPages]
}

const pageBase = "size-9 rounded-ds-md flex items-center justify-center text-[14px] transition-colors cursor-pointer"

export default function PaginationPreview() {
    const [page, setPage] = useState(2)
    const visible = getVisiblePages(page)

    return (
        <PreviewShell>
            <PreviewSection title="Pagination" description="Click page numbers or arrows to navigate.">
                <div className="flex items-center gap-1">
                    <button
                        type="button"
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className={`${pageBase} border border-ds-border bg-transparent text-ds-foreground ${
                            page === 1 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        <ChevronLeft className="size-4" />
                    </button>
                    {visible.map((item, i) =>
                        item === "ellipsis" ? (
                            <span key={`e${i}`} className="px-2 text-ds-muted-foreground">...</span>
                        ) : (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setPage(item)}
                                className={`${pageBase} ${
                                    page === item
                                        ? "bg-ds-primary text-ds-primary-foreground"
                                        : "border border-ds-border bg-transparent text-ds-foreground"
                                }`}
                            >
                                {item}
                            </button>
                        )
                    )}
                    <button
                        type="button"
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className={`${pageBase} border border-ds-border bg-transparent text-ds-foreground ${
                            page === totalPages ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        <ChevronRight className="size-4" />
                    </button>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
