"use client"

import { PreviewSection } from "../PreviewShell"

const breakpoints = [
    { token: "sm", width: 640, target: "Large phones (landscape)", color: "bg-violet-500" },
    { token: "md", width: 768, target: "Tablets", color: "bg-blue-500" },
    { token: "lg", width: 1024, target: "Small laptops", color: "bg-emerald-500" },
    { token: "xl", width: 1280, target: "Desktops", color: "bg-amber-500" },
    { token: "2xl", width: 1536, target: "Large desktops", color: "bg-rose-500" },
]

const maxWidth = 1536

export default function BreakpointsPreview() {
    return (
        <div className="space-y-0">
            <PreviewSection title="Breakpoint Scale" description="Mobile-first breakpoints — styles apply at this width and above.">
                <div className="space-y-4 py-2">
                    {breakpoints.map((bp) => (
                        <div key={bp.token} className="space-y-1.5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="text-[13px] font-mono font-medium text-[hsl(var(--foreground))]">{bp.token}</span>
                                    <span className="text-[11px] text-[hsl(var(--muted-foreground))]">{bp.target}</span>
                                </div>
                                <span className="text-[11px] font-mono text-[hsl(var(--muted-foreground))] tabular-nums">{bp.width}px</span>
                            </div>
                            <div className="h-3 bg-[hsl(var(--muted)/0.5)] rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${bp.color} rounded-full opacity-60`}
                                    style={{ width: `${(bp.width / maxWidth) * 100}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </PreviewSection>

            <PreviewSection title="Visual Comparison" description="Relative widths of all breakpoints.">
                <div className="space-y-2 py-4">
                    {/* Base (mobile) */}
                    <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono text-[hsl(var(--muted-foreground))] w-8 shrink-0">base</span>
                        <div className="h-10 bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-lg flex items-center justify-center" style={{ width: "100%" }}>
                            <span className="text-[10px] text-[hsl(var(--muted-foreground))]">0px +</span>
                        </div>
                    </div>
                    {breakpoints.map((bp) => (
                        <div key={bp.token} className="flex items-center gap-3">
                            <span className="text-[11px] font-mono text-[hsl(var(--muted-foreground))] w-8 shrink-0">{bp.token}</span>
                            <div
                                className={`h-10 ${bp.color} opacity-20 border border-current rounded-lg flex items-center justify-center`}
                                style={{ width: `${(bp.width / maxWidth) * 100}%` }}
                            >
                                <span className="text-[10px] text-[hsl(var(--foreground))] font-mono">{bp.width}px +</span>
                            </div>
                        </div>
                    ))}
                </div>
            </PreviewSection>

            <PreviewSection title="Common Patterns" description="Typical responsive patterns using these breakpoints.">
                <div className="space-y-3">
                    {[
                        { pattern: "Stack to Row", code: "flex flex-col md:flex-row", desc: "Vertical on mobile, horizontal on tablet+" },
                        { pattern: "Grid Columns", code: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", desc: "Responsive grid that adds columns" },
                        { pattern: "Show/Hide", code: "hidden md:block", desc: "Hide on mobile, show on tablet+" },
                        { pattern: "Sidebar Layout", code: "flex flex-col lg:flex-row", desc: "Stacked on mobile, sidebar on laptop+" },
                    ].map((p) => (
                        <div key={p.pattern} className="p-3 rounded-lg bg-[hsl(var(--muted)/0.5)] border border-[hsl(var(--border))]">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-[13px] font-medium text-[hsl(var(--foreground))]">{p.pattern}</span>
                            </div>
                            <code className="text-[11px] font-mono text-[hsl(var(--ring))]">{p.code}</code>
                            <p className="text-[11px] text-[hsl(var(--muted-foreground))] mt-1">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </PreviewSection>
        </div>
    )
}
