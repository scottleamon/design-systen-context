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
            <button className="size-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                <div className="size-4" />
            </button>
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="size-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 flex items-center justify-center transition-colors border border-zinc-200 dark:border-zinc-700"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            {theme === "dark" ? (
                <Sun className="size-4 text-zinc-600 dark:text-zinc-400" />
            ) : (
                <Moon className="size-4 text-zinc-600 dark:text-zinc-400" />
            )}
        </button>
    )
}
