"use client"

import { PreviewSection } from "../PreviewShell"

const themeTokens = [
    { token: "primary", var: "--ds-primary" },
    { token: "primary-fg", var: "--ds-primary-foreground" },
    { token: "accent", var: "--ds-accent" },
    { token: "accent-fg", var: "--ds-accent-foreground" },
    { token: "accent-border", var: "--ds-accent-border" },
]

const sharedTokens = [
    { token: "background", var: "--ds-background" },
    { token: "foreground", var: "--ds-foreground" },
    { token: "secondary", var: "--ds-secondary" },
    { token: "muted", var: "--ds-muted" },
    { token: "destructive", var: "--ds-destructive" },
    { token: "border", var: "--ds-border" },
    { token: "success", var: "--ds-success" },
    { token: "warning", var: "--ds-warning" },
]

function ThemeCard({ theme, label, description }: { theme: string; label: string; description: string }) {
    return (
        <div className={`ds-theme-${theme} bg-ds-background rounded-xl border border-ds-border p-5 space-y-4`}>
            <div>
                <h4 className="text-[14px] font-semibold text-ds-foreground">{label}</h4>
                <p className="text-[11px] text-ds-muted-foreground">{description}</p>
            </div>

            {/* Mini button preview */}
            <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-md text-[12px] font-semibold bg-ds-primary text-ds-primary-foreground">
                    Primary
                </button>
                <button className="px-3 py-1.5 rounded-md text-[12px] font-semibold bg-ds-secondary text-ds-secondary-foreground">
                    Secondary
                </button>
                <button className="px-3 py-1.5 rounded-md text-[12px] font-semibold bg-ds-destructive text-ds-destructive-foreground">
                    Delete
                </button>
            </div>

            {/* Accent bar */}
            <div className="p-3 rounded-lg bg-ds-accent border border-ds-accent-border">
                <span className="text-[12px] font-medium text-ds-accent-foreground">Accent surface example</span>
            </div>

            {/* Token swatches */}
            <div className="flex flex-wrap gap-1.5">
                {themeTokens.map((t) => (
                    <div key={t.token} className="flex items-center gap-1.5">
                        <div
                            className="size-4 rounded border border-black/10"
                            style={{ backgroundColor: `var(${t.var})` }}
                        />
                        <span className="text-[10px] font-mono text-ds-muted-foreground">{t.token}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function ThemesPreview() {
    return (
        <div className="space-y-0">
            <PreviewSection title="Side-by-Side Themes" description="All 3 themes rendered with identical UI elements.">
                <div className="grid grid-cols-1 gap-4">
                    <ThemeCard theme="higher-ed" label="Higher Ed (Blue)" description="Navy blue primary — Higher Ed portal" />
                    <ThemeCard theme="k12" label="K-12 (Blue)" description="Placeholder — same as Higher Ed for now" />
                    <ThemeCard theme="admin" label="Admin (Neutral)" description="Near-black primary — Admin dashboard" />
                </div>
            </PreviewSection>

            <PreviewSection title="Shared Tokens" description="These tokens are identical across all themes.">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {sharedTokens.map((t) => (
                        <div key={t.token} className="ds-theme-higher-ed flex items-center gap-2 p-2 rounded-lg bg-[hsl(var(--muted)/0.5)] border border-[hsl(var(--border))]">
                            <div
                                className="size-6 rounded border border-black/10 shrink-0"
                                style={{ backgroundColor: `var(${t.var})` }}
                            />
                            <span className="text-[11px] font-mono text-[hsl(var(--muted-foreground))] truncate">{t.token}</span>
                        </div>
                    ))}
                </div>
            </PreviewSection>

            <PreviewSection title="Theme Selection Guide" description="When to use each theme.">
                <div className="space-y-2">
                    {[
                        { theme: "Higher Ed", when: "Building features for the Higher Ed portal (student wellness, member-facing)", color: "bg-blue-500" },
                        { theme: "K-12", when: "Building features for K-12 school portal (admin, counselor features)", color: "bg-blue-400" },
                        { theme: "Admin", when: "Building internal tools, system administration, back-office features", color: "bg-zinc-700" },
                    ].map((t) => (
                        <div key={t.theme} className="flex items-start gap-3 p-3 rounded-lg bg-[hsl(var(--muted)/0.5)] border border-[hsl(var(--border))]">
                            <div className={`size-3 rounded-full ${t.color} mt-1 shrink-0`} />
                            <div>
                                <span className="text-[13px] font-medium text-[hsl(var(--foreground))]">{t.theme}</span>
                                <p className="text-[11px] text-[hsl(var(--muted-foreground))]">{t.when}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </PreviewSection>
        </div>
    )
}
