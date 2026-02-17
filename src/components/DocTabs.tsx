"use client"

import { useState, type ReactNode } from "react"

interface DocTabsProps {
    specContent: ReactNode
    previewContent: ReactNode
}

export default function DocTabs({ specContent, previewContent }: DocTabsProps) {
    const [activeTab, setActiveTab] = useState<"spec" | "preview">("spec")

    return (
        <div>
            <div className="flex items-center gap-1 mb-8 border-b border-[hsl(var(--border))]">
                <button
                    onClick={() => setActiveTab("spec")}
                    className={`px-4 py-2.5 text-[13px] font-medium transition-colors relative ${
                        activeTab === "spec"
                            ? "text-[hsl(var(--foreground))]"
                            : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                    }`}
                >
                    Spec
                    {activeTab === "spec" && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[hsl(var(--ring))] rounded-full" />
                    )}
                </button>
                <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-4 py-2.5 text-[13px] font-medium transition-colors relative ${
                        activeTab === "preview"
                            ? "text-[hsl(var(--foreground))]"
                            : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                    }`}
                >
                    Preview
                    {activeTab === "preview" && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[hsl(var(--ring))] rounded-full" />
                    )}
                </button>
            </div>

            {activeTab === "spec" ? specContent : previewContent}
        </div>
    )
}
