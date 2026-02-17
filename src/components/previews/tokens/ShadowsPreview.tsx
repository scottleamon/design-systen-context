"use client"

import { PreviewSection } from "../PreviewShell"

const shadows = [
    { token: "none", label: "None", css: "none", usage: "No elevation" },
    { token: "sm", label: "Small", css: "0 1px 2px 0 rgb(0 0 0 / 0.05)", usage: "Subtle lift — cards at rest" },
    { token: "DEFAULT", label: "Default", css: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", usage: "Standard shadow" },
    { token: "md", label: "Medium", css: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", usage: "Cards on hover, tooltips" },
    { token: "lg", label: "Large", css: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", usage: "Dropdowns, popovers" },
    { token: "xl", label: "Extra Large", css: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", usage: "Modals, dialogs" },
    { token: "2xl", label: "2X Large", css: "0 25px 50px -12px rgb(0 0 0 / 0.25)", usage: "Maximum elevation" },
    { token: "inner", label: "Inner", css: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", usage: "Pressed/inset states" },
]

const componentUsage = [
    { component: "Cards (resting)", token: "sm" },
    { component: "Cards (hover)", token: "md" },
    { component: "Dropdowns", token: "lg" },
    { component: "Modals / Dialogs", token: "xl" },
    { component: "Buttons (pressed)", token: "inner" },
    { component: "Tooltips", token: "md" },
    { component: "Popovers", token: "lg" },
    { component: "Sticky nav", token: "md" },
]

export default function ShadowsPreview() {
    return (
        <div className="space-y-0">
            <PreviewSection title="Shadow Scale" description="All shadow elevation levels rendered on cards.">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-4">
                    {shadows.map((s) => (
                        <div key={s.token} className="flex flex-col items-center text-center">
                            <div
                                className="w-full aspect-square rounded-xl bg-white dark:bg-zinc-800 border border-[hsl(var(--border)/0.5)] mb-3 flex items-center justify-center"
                                style={{ boxShadow: s.css }}
                            >
                                <span className="text-[11px] font-mono text-[hsl(var(--muted-foreground))]">{s.token}</span>
                            </div>
                            <span className="text-[12px] font-medium text-[hsl(var(--foreground))]">{s.label}</span>
                            <span className="text-[10px] text-[hsl(var(--muted-foreground))] mt-0.5">{s.usage}</span>
                        </div>
                    ))}
                </div>
            </PreviewSection>

            <PreviewSection title="Elevation Comparison" description="Side-by-side elevation levels on identical cards.">
                <div className="flex items-end gap-4 py-4 overflow-x-auto">
                    {shadows.filter(s => s.token !== "inner" && s.token !== "none").map((s, i) => (
                        <div
                            key={s.token}
                            className="shrink-0 w-24 rounded-xl bg-white dark:bg-zinc-800 border border-[hsl(var(--border)/0.3)] p-4 flex flex-col items-center"
                            style={{
                                boxShadow: s.css,
                                transform: `translateY(-${i * 4}px)`,
                            }}
                        >
                            <span className="text-[11px] font-mono text-[hsl(var(--muted-foreground))]">{s.token}</span>
                        </div>
                    ))}
                </div>
            </PreviewSection>

            <PreviewSection title="Component Mapping" description="Which shadow token to use for each component type.">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {componentUsage.map((c) => (
                        <div key={c.component} className="flex items-center justify-between p-3 rounded-lg bg-[hsl(var(--muted)/0.5)] border border-[hsl(var(--border))]">
                            <span className="text-[13px] text-[hsl(var(--foreground))]">{c.component}</span>
                            <span className="text-[11px] font-mono text-[hsl(var(--ring))] font-medium px-2 py-0.5 bg-[hsl(var(--ring)/0.08)] rounded">{c.token}</span>
                        </div>
                    ))}
                </div>
            </PreviewSection>
        </div>
    )
}
