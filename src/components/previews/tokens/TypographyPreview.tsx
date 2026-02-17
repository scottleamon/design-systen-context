"use client"

import { PreviewSection } from "../PreviewShell"

const typeScale = [
    { token: "5xl", size: "48px", lineHeight: "48px", weight: 800, label: "H1 Desktop", sample: "The quick brown fox" },
    { token: "4xl", size: "36px", lineHeight: "40px", weight: 800, label: "H1 Mobile", sample: "The quick brown fox" },
    { token: "3xl", size: "30px", lineHeight: "36px", weight: 600, label: "H2", sample: "The quick brown fox jumps" },
    { token: "2xl", size: "24px", lineHeight: "32px", weight: 600, label: "H3", sample: "The quick brown fox jumps over" },
    { token: "xl", size: "20px", lineHeight: "28px", weight: 600, label: "H4", sample: "The quick brown fox jumps over the lazy dog" },
    { token: "lg", size: "18px", lineHeight: "28px", weight: 600, label: "Large", sample: "The quick brown fox jumps over the lazy dog" },
    { token: "base", size: "16px", lineHeight: "24px", weight: 400, label: "Body", sample: "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs." },
    { token: "sm", size: "14px", lineHeight: "20px", weight: 400, label: "Small", sample: "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs." },
    { token: "xs", size: "12px", lineHeight: "16px", weight: 400, label: "Extra Small", sample: "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs." },
]

const fontWeights = [
    { token: "normal", value: 400, label: "Regular" },
    { token: "medium", value: 500, label: "Medium" },
    { token: "semibold", value: 600, label: "Semibold" },
    { token: "bold", value: 700, label: "Bold" },
    { token: "extrabold", value: 800, label: "Extrabold" },
]

export default function TypographyPreview() {
    return (
        <div className="space-y-0">
            <PreviewSection title="Type Scale" description="Font sizes from xs (12px) to 5xl (48px) with corresponding line heights.">
                <div className="space-y-6">
                    {typeScale.map((t) => (
                        <div key={t.token} className="group">
                            <div className="flex items-baseline gap-3 mb-1.5">
                                <span className="text-[11px] font-mono text-[hsl(var(--muted-foreground))] w-8 shrink-0 tabular-nums">{t.token}</span>
                                <span className="text-[11px] text-[hsl(var(--muted-foreground))]">{t.size} / {t.lineHeight}</span>
                                <span className="text-[10px] px-1.5 py-0.5 bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] rounded font-medium">{t.label}</span>
                            </div>
                            <p
                                className="text-[hsl(var(--foreground))] leading-tight"
                                style={{ fontSize: t.size, lineHeight: t.lineHeight, fontWeight: t.weight }}
                            >
                                {t.sample}
                            </p>
                        </div>
                    ))}
                </div>
            </PreviewSection>

            <PreviewSection title="Font Weights" description="Available font weight tokens rendered at 20px.">
                <div className="space-y-3">
                    {fontWeights.map((w) => (
                        <div key={w.token} className="flex items-center gap-4">
                            <span className="text-[11px] font-mono text-[hsl(var(--muted-foreground))] w-20 shrink-0">{w.value}</span>
                            <span
                                className="text-[20px] text-[hsl(var(--foreground))]"
                                style={{ fontWeight: w.value }}
                            >
                                {w.label} — The quick brown fox
                            </span>
                        </div>
                    ))}
                </div>
            </PreviewSection>

            <PreviewSection title="Font Families" description="Primary sans-serif and monospace families.">
                <div className="space-y-6">
                    <div>
                        <div className="text-[11px] font-mono text-[hsl(var(--muted-foreground))] mb-2">font-sans (Adelle Sans / Inter fallback)</div>
                        <p className="text-[18px] text-[hsl(var(--foreground))] font-sans">
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                            abcdefghijklmnopqrstuvwxyz<br />
                            0123456789 !@#$%^&*()
                        </p>
                    </div>
                    <div>
                        <div className="text-[11px] font-mono text-[hsl(var(--muted-foreground))] mb-2">font-mono (Adelle Mono / system fallback)</div>
                        <p className="text-[18px] text-[hsl(var(--foreground))] font-mono">
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                            abcdefghijklmnopqrstuvwxyz<br />
                            0123456789 !@#$%^&*()
                        </p>
                    </div>
                </div>
            </PreviewSection>
        </div>
    )
}
