"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const isDark = theme === "dark"

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2.5">
                    <Sun className="size-4 text-[hsl(var(--sidebar-text-muted))]" />
                    <span className="text-xs text-[hsl(var(--sidebar-text-muted))]">Theme</span>
                </div>
                <div className="w-9 h-5 rounded-full bg-[hsl(var(--border))]" />
            </div>
        )
    }

    return (
        <div className="flex items-center justify-between px-3 py-2">
            <div className="flex items-center gap-2.5">
                {isDark ? (
                    <Moon className="size-4 text-[hsl(var(--sidebar-text-muted))]" />
                ) : (
                    <Sun className="size-4 text-[hsl(var(--sidebar-text-muted))]" />
                )}
                <span className="text-xs text-[hsl(var(--sidebar-text-muted))] font-medium">
                    {isDark ? "Dark" : "Light"}
                </span>
            </div>
            <button
                role="switch"
                aria-checked={isDark}
                aria-label="Toggle dark mode"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className={`relative w-9 h-5 rounded-full transition-colors ${
                    isDark ? "bg-blue-600" : "bg-[hsl(var(--border))]"
                }`}
            >
                <span
                    className={`absolute top-[3px] left-[3px] size-3.5 rounded-full bg-white shadow-sm transition-transform ${
                        isDark ? "translate-x-[16px]" : "translate-x-0"
                    }`}
                />
            </button>
        </div>
    )
}
