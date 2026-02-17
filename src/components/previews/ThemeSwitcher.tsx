"use client"

type DSTheme = "higher-ed" | "k12" | "admin"

interface ThemeSwitcherProps {
    activeTheme: DSTheme
    onThemeChange: (theme: DSTheme) => void
}

const themes: { id: DSTheme; label: string; color: string }[] = [
    { id: "higher-ed", label: "Higher Ed", color: "#19518B" },
    { id: "k12", label: "K-12", color: "#19518B" },
    { id: "admin", label: "Admin", color: "#18181B" },
]

export default function ThemeSwitcher({ activeTheme, onThemeChange }: ThemeSwitcherProps) {
    return (
        <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mr-1">
                Theme
            </span>
            {themes.map((theme) => (
                <button
                    key={theme.id}
                    onClick={() => onThemeChange(theme.id)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] font-medium transition-all ${
                        activeTheme === theme.id
                            ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-sm"
                            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                    }`}
                >
                    <span
                        className="size-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: theme.color }}
                    />
                    {theme.label}
                </button>
            ))}
        </div>
    )
}

export type { DSTheme }
