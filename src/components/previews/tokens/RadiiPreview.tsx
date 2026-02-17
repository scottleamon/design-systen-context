"use client"

import { PreviewSection } from "../PreviewShell"

const radii = [
    { token: "none", value: "0px", px: 0 },
    { token: "sm", value: "6px", px: 6 },
    { token: "DEFAULT", value: "8px", px: 8 },
    { token: "md", value: "8px", px: 8 },
    { token: "lg", value: "10px", px: 10 },
    { token: "xl", value: "14px", px: 14 },
    { token: "2xl", value: "16px", px: 16 },
    { token: "3xl", value: "24px", px: 24 },
    { token: "full", value: "9999px", px: 9999 },
]

const componentUsage = [
    { component: "Buttons", token: "md", value: "8px" },
    { component: "Inputs", token: "md", value: "8px" },
    { component: "Cards", token: "lg", value: "10px" },
    { component: "Dialogs / Modals", token: "xl", value: "14px" },
    { component: "Badges", token: "sm", value: "6px" },
    { component: "Inline code", token: "sm", value: "6px" },
    { component: "Avatars", token: "full", value: "circle" },
    { component: "Tooltips", token: "md", value: "8px" },
]

export default function RadiiPreview() {
    return (
        <div className="space-y-0">
            <PreviewSection title="Radius Scale" description="All border radius tokens applied to shapes.">
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 py-4">
                    {radii.map((r) => (
                        <div key={r.token} className="flex flex-col items-center text-center">
                            <div
                                className="size-20 bg-[hsl(var(--ring)/0.12)] border-2 border-[hsl(var(--ring)/0.3)] mb-3"
                                style={{ borderRadius: r.px === 9999 ? "9999px" : `${r.px}px` }}
                            />
                            <span className="text-[12px] font-medium text-[hsl(var(--foreground))]">{r.token}</span>
                            <span className="text-[10px] font-mono text-[hsl(var(--muted-foreground))]">{r.value}</span>
                        </div>
                    ))}
                </div>
            </PreviewSection>

            <PreviewSection title="Applied to Cards" description="Radius tokens on card-like surfaces.">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {radii.filter(r => r.token !== "full").map((r) => (
                        <div
                            key={r.token}
                            className="bg-white dark:bg-zinc-800 border border-[hsl(var(--border))] p-4 shadow-sm"
                            style={{ borderRadius: `${r.px}px` }}
                        >
                            <div className="text-[12px] font-medium text-[hsl(var(--foreground))]">{r.token}</div>
                            <div className="text-[10px] font-mono text-[hsl(var(--muted-foreground))]">{r.value}</div>
                        </div>
                    ))}
                </div>
            </PreviewSection>

            <PreviewSection title="Component Mapping" description="Recommended radius per component type.">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {componentUsage.map((c) => (
                        <div key={c.component} className="flex items-center justify-between p-3 rounded-lg bg-[hsl(var(--muted)/0.5)] border border-[hsl(var(--border))]">
                            <span className="text-[13px] text-[hsl(var(--foreground))]">{c.component}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-[11px] font-mono text-[hsl(var(--ring))] font-medium px-2 py-0.5 bg-[hsl(var(--ring)/0.08)] rounded">{c.token}</span>
                                <span className="text-[10px] text-[hsl(var(--muted-foreground))]">{c.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </PreviewSection>
        </div>
    )
}
