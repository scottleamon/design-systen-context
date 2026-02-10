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
                <div className="flex items-center gap-2">
                    <Sun className="size-3.5 text-zinc-400" />
                    <span className="text-[11px] text-zinc-400">Theme</span>
                </div>
                <div className="w-8 h-[18px] rounded-full bg-zinc-200 dark:bg-zinc-800" />
            </div>
        )
    }

    return (
        <div className="flex items-center justify-between px-3 py-2">
            <div className="flex items-center gap-2">
                {isDark ? (
                    <Moon className="size-3.5 text-zinc-500" />
                ) : (
                    <Sun className="size-3.5 text-zinc-400" />
                )}
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    {isDark ? "Dark" : "Light"}
                </span>
            </div>
            <button
                role="switch"
                aria-checked={isDark}
                aria-label="Toggle dark mode"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className={`relative w-8 h-[18px] rounded-full transition-colors ${
                    isDark ? "bg-zinc-600" : "bg-zinc-300"
                }`}
            >
                <span
                    className={`absolute top-[3px] left-[3px] size-3 rounded-full bg-white shadow-sm transition-transform ${
                        isDark ? "translate-x-[14px]" : "translate-x-0"
                    }`}
                />
            </button>
        </div>
    )
}
