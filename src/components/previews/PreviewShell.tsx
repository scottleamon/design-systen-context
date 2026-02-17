"use client"

import { useState, type ReactNode } from "react"
import ThemeSwitcher, { type DSTheme } from "./ThemeSwitcher"

interface PreviewShellProps {
    children: ReactNode
}

export default function PreviewShell({ children }: PreviewShellProps) {
    const [theme, setTheme] = useState<DSTheme>("higher-ed")

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <ThemeSwitcher activeTheme={theme} onThemeChange={setTheme} />
            </div>

            <div
                className={`ds-theme-${theme} bg-ds-background text-ds-foreground font-ds-sans rounded-xl border border-zinc-200 dark:border-zinc-800 p-8`}
            >
                {children}
            </div>
        </div>
    )
}

interface PreviewSectionProps {
    title: string
    description?: string
    children: ReactNode
}

export function PreviewSection({ title, description, children }: PreviewSectionProps) {
    return (
        <div className="mb-10 last:mb-0">
            <h3 className="text-[13px] font-semibold text-ds-foreground uppercase tracking-wider mb-1">
                {title}
            </h3>
            {description && (
                <p className="text-[12px] text-ds-muted-foreground mb-4">{description}</p>
            )}
            {!description && <div className="mb-4" />}
            {children}
        </div>
    )
}
