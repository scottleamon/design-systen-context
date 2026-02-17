"use client"

import { useState, useCallback } from "react"
import {
    LoaderCircle, X, ChevronDown, ChevronLeft, ChevronRight, Menu,
    Search, Settings, User, Plus, Trash2, Pencil, Check, AlertCircle,
    Info, ExternalLink, Copy, Download, Upload, MoreHorizontal, Calendar,
    CircleCheck, TriangleAlert, PanelLeft, ChevronsUpDown, MessageSquare,
    MessageCircle, UserRound, CircleUser, Pen, CircleHelp,
} from "lucide-react"
import type { LucideProps } from "lucide-react"
import type { ComponentType } from "react"

type IconEntry = { name: string; icon: ComponentType<LucideProps>; note?: string }

const mostUsed: IconEntry[] = [
    { name: "LoaderCircle", icon: LoaderCircle, note: "Loading/spinner" },
    { name: "X", icon: X, note: "Close/dismiss" },
    { name: "ChevronDown", icon: ChevronDown, note: "Dropdown indicator" },
    { name: "ChevronLeft", icon: ChevronLeft, note: "Nav prev" },
    { name: "ChevronRight", icon: ChevronRight, note: "Nav next" },
    { name: "Menu", icon: Menu, note: "Menu toggle" },
    { name: "Search", icon: Search, note: "Search" },
    { name: "Settings", icon: Settings, note: "Settings" },
    { name: "User", icon: User, note: "User/profile" },
    { name: "Plus", icon: Plus, note: "Add/create" },
    { name: "Trash2", icon: Trash2, note: "Delete" },
    { name: "Pencil", icon: Pencil, note: "Edit" },
    { name: "Check", icon: Check, note: "Success/check" },
    { name: "AlertCircle", icon: AlertCircle, note: "Error/warning" },
    { name: "Info", icon: Info, note: "Info" },
    { name: "ExternalLink", icon: ExternalLink, note: "External link" },
    { name: "Copy", icon: Copy, note: "Copy" },
    { name: "Download", icon: Download, note: "Download" },
    { name: "Upload", icon: Upload, note: "Upload" },
    { name: "MoreHorizontal", icon: MoreHorizontal, note: "More options" },
    { name: "Calendar", icon: Calendar, note: "Calendar/date" },
]

const statusIcons: { name: string; icon: ComponentType<LucideProps>; color: string; label: string }[] = [
    { name: "CircleCheck", icon: CircleCheck, color: "text-green-600", label: "Success" },
    { name: "AlertCircle", icon: AlertCircle, color: "text-red-500", label: "Error" },
    { name: "TriangleAlert", icon: TriangleAlert, color: "text-yellow-600", label: "Warning" },
    { name: "Info", icon: Info, color: "text-blue-600", label: "Info" },
]

const componentIcons: { component: string; purpose: string; name: string; icon: ComponentType<LucideProps> }[] = [
    { component: "Button (loading)", purpose: "Spinner", name: "LoaderCircle", icon: LoaderCircle },
    { component: "Select", purpose: "Dropdown", name: "ChevronDown", icon: ChevronDown },
    { component: "Dialog / Sheet", purpose: "Close", name: "X", icon: X },
    { component: "Accordion", purpose: "Expand", name: "ChevronDown", icon: ChevronDown },
    { component: "Collapsible", purpose: "Toggle", name: "ChevronsUpDown", icon: ChevronsUpDown },
    { component: "DropdownMenu", purpose: "Submenu", name: "ChevronRight", icon: ChevronRight },
    { component: "Breadcrumb", purpose: "Separator", name: "ChevronRight", icon: ChevronRight },
    { component: "Pagination", purpose: "Nav arrows", name: "ChevronLeft", icon: ChevronLeft },
    { component: "Sidebar", purpose: "Collapse", name: "PanelLeft", icon: PanelLeft },
    { component: "Command", purpose: "Search", name: "Search", icon: Search },
]

const namingGotchas: { wrong: string; correct: string; icon: ComponentType<LucideProps> }[] = [
    { wrong: "Spinner", correct: "LoaderCircle", icon: LoaderCircle },
    { wrong: "Close", correct: "X", icon: X },
    { wrong: "Trash", correct: "Trash2", icon: Trash2 },
    { wrong: "Hamburger", correct: "Menu", icon: Menu },
    { wrong: "Caret", correct: "ChevronDown", icon: ChevronDown },
    { wrong: "Edit", correct: "Pencil", icon: Pencil },
    { wrong: "Gear", correct: "Settings", icon: Settings },
]

const sizeClasses = [
    { label: "xs", className: "size-3", px: "12px", use: "Badge icons" },
    { label: "sm (default)", className: "size-4", px: "16px", use: "Buttons, inputs, inline" },
    { label: "md", className: "size-5", px: "20px", use: "Medium emphasis" },
    { label: "lg", className: "size-6", px: "24px", use: "Sidebar nav, emphasis" },
    { label: "xl", className: "size-8", px: "32px", use: "Large display" },
    { label: "2xl", className: "size-12", px: "48px", use: "Card headers, features" },
]

export default function IconInventoryPreview() {
    const [copied, setCopied] = useState<string | null>(null)

    const handleCopy = useCallback((name: string) => {
        const importStr = `import { ${name} } from "lucide-react"`
        navigator.clipboard.writeText(importStr).then(() => {
            setCopied(name)
            setTimeout(() => setCopied(null), 1500)
        })
    }, [])

    return (
        <div className="space-y-10">
            {copied && (
                <div className="fixed top-4 right-4 z-50 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-medium px-3 py-2 rounded-lg shadow-lg">
                    Copied: import {"{"} {copied} {"}"} from &quot;lucide-react&quot;
                </div>
            )}

            {/* Most Used */}
            <section className="space-y-3">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Most Used Icons</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Click any icon to copy its import statement.</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-1">
                    {mostUsed.map(({ name, icon: Icon, note }) => (
                        <button
                            key={name}
                            type="button"
                            onClick={() => handleCopy(name)}
                            title={`${name} — ${note}`}
                            className="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group cursor-pointer"
                        >
                            <Icon className="size-5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white" />
                            <span className="text-[10px] text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 truncate max-w-full leading-tight">{name}</span>
                        </button>
                    ))}
                </div>
            </section>

            {/* Size Classes */}
            <section className="space-y-3">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Size Classes</h3>
                <div className="grid gap-3">
                    {sizeClasses.map((s) => (
                        <div key={s.label} className="flex items-center gap-4 p-3 rounded-lg border border-zinc-100 dark:border-zinc-800">
                            <div className="w-12 flex items-center justify-center">
                                <Search className={s.className + " text-zinc-700 dark:text-zinc-300"} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-zinc-900 dark:text-white">{s.label}</span>
                                    <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-600 dark:text-zinc-400">{s.className}</code>
                                    <span className="text-xs text-zinc-400">{s.px}</span>
                                </div>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{s.use}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Status Icons */}
            <section className="space-y-3">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Status Icons</h3>
                <div className="flex flex-wrap gap-4">
                    {statusIcons.map(({ name, icon: Icon, color, label }) => (
                        <button
                            key={name}
                            type="button"
                            onClick={() => handleCopy(name)}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer"
                        >
                            <Icon className={`size-5 ${color}`} />
                            <div className="text-left">
                                <span className="text-sm font-medium text-zinc-900 dark:text-white block">{label}</span>
                                <span className="text-[10px] text-zinc-400">{name}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {/* Component Icons */}
            <section className="space-y-3">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Icons Used in Components</h3>
                <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                                <th className="text-left px-4 py-2 font-semibold text-zinc-900 dark:text-white">Component</th>
                                <th className="text-left px-4 py-2 font-semibold text-zinc-900 dark:text-white">Purpose</th>
                                <th className="text-left px-4 py-2 font-semibold text-zinc-900 dark:text-white">Icon</th>
                            </tr>
                        </thead>
                        <tbody>
                            {componentIcons.map((row, i) => {
                                const Icon = row.icon
                                return (
                                    <tr key={i} className="border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                                        <td className="px-4 py-2 text-zinc-700 dark:text-zinc-300">{row.component}</td>
                                        <td className="px-4 py-2 text-zinc-500 dark:text-zinc-400">{row.purpose}</td>
                                        <td className="px-4 py-2">
                                            <button
                                                type="button"
                                                onClick={() => handleCopy(row.name)}
                                                className="inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white cursor-pointer"
                                            >
                                                <Icon className="size-4" />
                                                <span className="text-xs">{row.name}</span>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Naming Gotchas */}
            <section className="space-y-3">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Common Naming Gotchas</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">AI models frequently guess wrong. Use the correct names below.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {namingGotchas.map(({ wrong, correct, icon: Icon }) => (
                        <div key={wrong} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-100 dark:border-zinc-800">
                            <Icon className="size-4 text-zinc-700 dark:text-zinc-300 shrink-0" />
                            <div className="flex items-center gap-1.5 text-sm min-w-0">
                                <span className="text-red-500 line-through">{wrong}</span>
                                <span className="text-zinc-400">→</span>
                                <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-green-600 dark:text-green-400 font-medium">{correct}</code>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
