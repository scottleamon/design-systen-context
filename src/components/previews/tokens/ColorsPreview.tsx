"use client"

import { useState } from "react"
import { PreviewSection } from "../PreviewShell"

type Theme = "higher-ed" | "k12" | "admin"

const themes: { id: Theme; label: string; description: string }[] = [
    { id: "higher-ed", label: "Higher Ed", description: "Navy blue primary" },
    { id: "k12", label: "K-12", description: "Blue (placeholder)" },
    { id: "admin", label: "Admin", description: "Neutral primary" },
]

const semanticColors = [
    { token: "primary", var: "--ds-primary", label: "Primary", desc: "Main brand action color" },
    { token: "primary-foreground", var: "--ds-primary-foreground", label: "Primary Foreground", desc: "Text on primary" },
    { token: "secondary", var: "--ds-secondary", label: "Secondary", desc: "Supporting backgrounds" },
    { token: "secondary-foreground", var: "--ds-secondary-foreground", label: "Secondary Foreground", desc: "Text on secondary" },
    { token: "accent", var: "--ds-accent", label: "Accent", desc: "Highlight backgrounds" },
    { token: "accent-foreground", var: "--ds-accent-foreground", label: "Accent Foreground", desc: "Text on accent" },
    { token: "destructive", var: "--ds-destructive", label: "Destructive", desc: "Error, danger actions" },
    { token: "destructive-foreground", var: "--ds-destructive-foreground", label: "Destructive Foreground", desc: "Text on destructive" },
    { token: "muted", var: "--ds-muted", label: "Muted", desc: "Subtle backgrounds" },
    { token: "muted-foreground", var: "--ds-muted-foreground", label: "Muted Foreground", desc: "Subdued text" },
    { token: "success", var: "--ds-success", label: "Success", desc: "Positive feedback" },
    { token: "warning", var: "--ds-warning", label: "Warning", desc: "Caution feedback" },
]

const surfaceColors = [
    { token: "background", var: "--ds-background", label: "Background", desc: "Page background" },
    { token: "foreground", var: "--ds-foreground", label: "Foreground", desc: "Default text" },
    { token: "card", var: "--ds-card", label: "Card", desc: "Card surfaces" },
    { token: "card-foreground", var: "--ds-card-foreground", label: "Card Foreground", desc: "Card text" },
    { token: "border", var: "--ds-border", label: "Border", desc: "Default borders" },
    { token: "input", var: "--ds-input", label: "Input", desc: "Input borders" },
    { token: "ring", var: "--ds-ring", label: "Ring", desc: "Focus ring" },
]

function ColorSwatch({ cssVar, label, desc }: { cssVar: string; label: string; desc: string }) {
    return (
        <div className="flex items-center gap-3 py-2">
            <div
                className="size-10 rounded-lg border border-black/10 shadow-sm shrink-0"
                style={{ backgroundColor: `var(${cssVar})` }}
            />
            <div className="min-w-0">
                <div className="text-[13px] font-medium text-ds-foreground">{label}</div>
                <div className="text-[11px] text-ds-muted-foreground font-mono">{cssVar}</div>
            </div>
            <div className="text-[11px] text-ds-muted-foreground ml-auto hidden sm:block">{desc}</div>
        </div>
    )
}

function PairedSwatch({ bgVar, fgVar, label }: { bgVar: string; fgVar: string; label: string }) {
    return (
        <div
            className="px-4 py-3 rounded-lg text-[13px] font-medium"
            style={{ backgroundColor: `var(${bgVar})`, color: `var(${fgVar})` }}
        >
            {label}
        </div>
    )
}

export default function ColorsPreview() {
    const [activeTheme, setActiveTheme] = useState<Theme>("higher-ed")

    return (
        <div>
            {/* Theme selector */}
            <div className="flex items-center gap-2 mb-8">
                {themes.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setActiveTheme(t.id)}
                        className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
                            activeTheme === t.id
                                ? "bg-[hsl(var(--ring))] text-white shadow-sm"
                                : "bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--border))]"
                        }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <div className={`ds-theme-${activeTheme} bg-ds-background text-ds-foreground font-ds-sans rounded-xl border border-[hsl(var(--border))] p-8`}>
                <PreviewSection title="Paired Previews" description="Background + foreground combinations as they appear in UI.">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <PairedSwatch bgVar="--ds-primary" fgVar="--ds-primary-foreground" label="Primary" />
                        <PairedSwatch bgVar="--ds-secondary" fgVar="--ds-secondary-foreground" label="Secondary" />
                        <PairedSwatch bgVar="--ds-accent" fgVar="--ds-accent-foreground" label="Accent" />
                        <PairedSwatch bgVar="--ds-destructive" fgVar="--ds-destructive-foreground" label="Destructive" />
                        <PairedSwatch bgVar="--ds-muted" fgVar="--ds-muted-foreground" label="Muted" />
                        <PairedSwatch bgVar="--ds-success" fgVar="--ds-success-foreground" label="Success" />
                        <PairedSwatch bgVar="--ds-warning" fgVar="--ds-warning-foreground" label="Warning" />
                        <PairedSwatch bgVar="--ds-card" fgVar="--ds-card-foreground" label="Card" />
                    </div>
                </PreviewSection>

                <PreviewSection title="Semantic Colors" description="All semantic color tokens for the active theme.">
                    <div className="space-y-1 divide-y divide-ds-border">
                        {semanticColors.map((c) => (
                            <ColorSwatch key={c.token} cssVar={c.var} label={c.label} desc={c.desc} />
                        ))}
                    </div>
                </PreviewSection>

                <PreviewSection title="Surface & Layout" description="Background, card, border, and ring tokens (shared across themes).">
                    <div className="space-y-1 divide-y divide-ds-border">
                        {surfaceColors.map((c) => (
                            <ColorSwatch key={c.token} cssVar={c.var} label={c.label} desc={c.desc} />
                        ))}
                    </div>
                </PreviewSection>
            </div>
        </div>
    )
}
