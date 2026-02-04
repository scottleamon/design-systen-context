"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <span className="text-xs font-medium text-zinc-500">Theme</span>
                <div className="size-4" />
            </button>
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-zinc-800"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                {theme === "dark" ? "Dark" : "Light"} mode
            </span>
            {theme === "dark" ? (
                <Moon className="size-4 text-zinc-500" />
            ) : (
                <Sun className="size-4 text-zinc-500" />
            )}
        </button>
    )
}
