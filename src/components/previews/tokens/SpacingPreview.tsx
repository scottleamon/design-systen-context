"use client"

import { PreviewSection } from "../PreviewShell"

const spacingScale = [
    { token: "0", px: 0 },
    { token: "px", px: 1 },
    { token: "0.5", px: 2 },
    { token: "1", px: 4 },
    { token: "1.5", px: 6 },
    { token: "2", px: 8 },
    { token: "3", px: 12 },
    { token: "4", px: 16 },
    { token: "5", px: 20 },
    { token: "6", px: 24 },
    { token: "8", px: 32 },
    { token: "10", px: 40 },
    { token: "12", px: 48 },
    { token: "16", px: 64 },
    { token: "20", px: 80 },
    { token: "24", px: 96 },
]

const commonUsage = [
    { use: "Button padding (x)", token: "4", px: "16px" },
    { use: "Button padding (y)", token: "2", px: "8px" },
    { use: "Card padding", token: "6", px: "24px" },
    { use: "Form field gap", token: "4", px: "16px" },
    { use: "Section gap", token: "8", px: "32px" },
    { use: "Page padding", token: "6–8", px: "24–32px" },
    { use: "Icon-to-text gap", token: "2", px: "8px" },
    { use: "Stack gap (tight)", token: "1.5", px: "6px" },
]

export default function SpacingPreview() {
    return (
        <div className="space-y-0">
            <PreviewSection title="Spacing Scale" description="Visual representation of the spacing token scale.">
                <div className="space-y-2">
                    {spacingScale.map((s) => (
                        <div key={s.token} className="flex items-center gap-4">
                            <span className="text-[11px] font-mono text-[hsl(var(--muted-foreground))] w-8 text-right shrink-0 tabular-nums">{s.token}</span>
                            <span className="text-[11px] text-[hsl(var(--muted-foreground))] w-10 text-right shrink-0 tabular-nums">{s.px}px</span>
                            <div className="flex-1 flex items-center">
                                <div
                                    className="h-6 rounded bg-[hsl(var(--ring)/0.2)] border border-[hsl(var(--ring)/0.3)] transition-all"
                                    style={{ width: `${Math.max(s.px, 1)}px`, minWidth: s.px === 0 ? "1px" : undefined }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </PreviewSection>

            <PreviewSection title="Common Usage" description="Recommended spacing for common UI patterns.">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {commonUsage.map((u) => (
                        <div key={u.use} className="flex items-center justify-between p-3 rounded-lg bg-[hsl(var(--muted)/0.5)] border border-[hsl(var(--border))]">
                            <span className="text-[13px] text-[hsl(var(--foreground))]">{u.use}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-[11px] font-mono text-[hsl(var(--ring))] font-medium">{u.token}</span>
                                <span className="text-[10px] text-[hsl(var(--muted-foreground))]">{u.px}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </PreviewSection>

            <PreviewSection title="Box Model Demo" description="Spacing applied to a card-like element.">
                <div className="flex items-center justify-center py-8">
                    <div className="relative">
                        {/* Margin */}
                        <div className="absolute -inset-8 border-2 border-dashed border-amber-300/40 rounded-xl" />
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-amber-600 bg-amber-50 dark:bg-amber-500/10 px-1.5 py-0.5 rounded">margin: 8 (32px)</div>

                        {/* Padding */}
                        <div className="bg-[hsl(var(--ring)/0.08)] border border-[hsl(var(--ring)/0.2)] rounded-lg p-6">
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[hsl(var(--ring))] bg-[hsl(var(--ring)/0.1)] px-1.5 py-0.5 rounded">padding: 6 (24px)</div>
                            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-md px-4 py-3 text-[13px] text-[hsl(var(--foreground))] mt-4">
                                Content area
                            </div>
                        </div>
                    </div>
                </div>
            </PreviewSection>
        </div>
    )
}
