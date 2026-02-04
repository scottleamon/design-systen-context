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
            <div className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                    <Sun className="size-4 text-zinc-400" />
                    <span className="text-xs font-medium text-zinc-500">Theme</span>
                </div>
                <div className="w-9 h-5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            </div>
        )
    }

    return (
        <div className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2">
                {isDark ? (
                    <Moon className="size-4 text-zinc-500" />
                ) : (
                    <Sun className="size-4 text-amber-500" />
                )}
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    {isDark ? "Dark" : "Light"} mode
                </span>
            </div>
            <button
                role="switch"
                aria-checked={isDark}
                aria-label="Toggle dark mode"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className={`relative w-9 h-5 rounded-full transition-colors ${
                    isDark ? "bg-indigo-600" : "bg-zinc-300"
                }`}
            >
                <span
                    className={`absolute top-0.5 left-0.5 size-4 rounded-full bg-white shadow-sm transition-transform ${
                        isDark ? "translate-x-4" : "translate-x-0"
                    }`}
                />
            </button>
        </div>
    )
}
