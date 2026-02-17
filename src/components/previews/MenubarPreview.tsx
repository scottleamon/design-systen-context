import PreviewShell, { PreviewSection } from "./PreviewShell"

export default function MenubarPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Menubar" description="Horizontal menubar with dropdown menu.">
                <div className="inline-flex flex-col">
                    <div className="flex items-center gap-px bg-ds-card border border-ds-border rounded-ds-md p-1">
                        <button
                            type="button"
                            className="px-3 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm hover:bg-ds-accent"
                        >
                            File
                        </button>
                        <div className="relative">
                            <button
                                type="button"
                                className="px-3 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm bg-ds-accent text-ds-accent-foreground"
                            >
                                Edit
                            </button>
                            <div className="absolute left-0 top-full mt-1 bg-ds-card border border-ds-border rounded-ds-md shadow-ds p-1 min-w-[140px]">
                                <div className="px-3 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm">
                                    Undo
                                </div>
                                <div className="px-3 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm">
                                    Redo
                                </div>
                                <div className="my-1 h-px bg-ds-border" />
                                <div className="px-3 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm">
                                    Cut
                                </div>
                                <div className="px-3 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm">
                                    Copy
                                </div>
                                <div className="px-3 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm">
                                    Paste
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="px-3 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm hover:bg-ds-accent"
                        >
                            View
                        </button>
                        <button
                            type="button"
                            className="px-3 py-1.5 text-[14px] text-ds-foreground rounded-ds-sm hover:bg-ds-accent"
                        >
                            Help
                        </button>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
