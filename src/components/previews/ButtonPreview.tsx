import PreviewShell, { PreviewSection } from "./PreviewShell"
import { Mail, ArrowRight, Settings, LoaderCircle } from "lucide-react"

export default function ButtonPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Variants" description="All 6 button variants using the active theme's primary color.">
                <div className="flex flex-wrap items-center gap-3">
                    <button className="inline-flex items-center justify-center bg-ds-primary text-ds-primary-foreground text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs transition-colors">
                        Default
                    </button>
                    <button className="inline-flex items-center justify-center bg-ds-secondary text-ds-secondary-foreground text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs transition-colors">
                        Secondary
                    </button>
                    <button className="inline-flex items-center justify-center bg-ds-destructive text-ds-destructive-foreground text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs transition-colors">
                        Destructive
                    </button>
                    <button className="inline-flex items-center justify-center bg-transparent text-ds-primary border border-ds-border text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs transition-colors">
                        Outline
                    </button>
                    <button className="inline-flex items-center justify-center bg-transparent text-ds-primary text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md transition-colors">
                        Ghost
                    </button>
                    <button className="inline-flex items-center justify-center bg-transparent text-ds-primary text-[14px] font-semibold leading-5 underline underline-offset-4 h-9 px-4 py-2 transition-colors">
                        Link
                    </button>
                </div>
            </PreviewSection>

            <PreviewSection title="Sizes" description="4 size options: default (36px), small (32px), large (40px), and icon (36x36px).">
                <div className="flex flex-wrap items-end gap-3">
                    <button className="inline-flex items-center justify-center bg-ds-primary text-ds-primary-foreground text-[14px] font-semibold leading-5 h-8 px-3 rounded-ds-md shadow-ds-xs">
                        Small
                    </button>
                    <button className="inline-flex items-center justify-center bg-ds-primary text-ds-primary-foreground text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs">
                        Default
                    </button>
                    <button className="inline-flex items-center justify-center bg-ds-primary text-ds-primary-foreground text-[14px] font-semibold leading-5 h-10 px-8 rounded-ds-md shadow-ds-xs">
                        Large
                    </button>
                    <button className="inline-flex items-center justify-center bg-ds-primary text-ds-primary-foreground size-9 rounded-ds-md shadow-ds-xs" aria-label="Settings">
                        <Settings className="size-4" />
                    </button>
                </div>
            </PreviewSection>

            <PreviewSection title="With Icons" description="Icons at 16x16px with 8px gap between icon and text.">
                <div className="flex flex-wrap items-center gap-3">
                    <button className="inline-flex items-center justify-center gap-2 bg-ds-primary text-ds-primary-foreground text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs">
                        <Mail className="size-4" />
                        Login with Email
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 bg-ds-primary text-ds-primary-foreground text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs">
                        Continue
                        <ArrowRight className="size-4" />
                    </button>
                    <button className="inline-flex items-center justify-center bg-transparent text-ds-primary border border-ds-border text-[14px] font-semibold leading-5 size-9 rounded-ds-md shadow-ds-xs" aria-label="Settings">
                        <Settings className="size-4" />
                    </button>
                </div>
            </PreviewSection>

            <PreviewSection title="States" description="Disabled and loading states apply 50% opacity.">
                <div className="flex flex-wrap items-center gap-3">
                    <button className="inline-flex items-center justify-center bg-ds-primary text-ds-primary-foreground text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs opacity-50 pointer-events-none">
                        Disabled
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 bg-ds-primary text-ds-primary-foreground text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs opacity-50 pointer-events-none">
                        <LoaderCircle className="size-4 animate-spin" />
                        Loading
                    </button>
                    <button className="inline-flex items-center justify-center bg-ds-secondary text-ds-secondary-foreground text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs opacity-50 pointer-events-none">
                        Disabled Secondary
                    </button>
                    <button className="inline-flex items-center justify-center bg-ds-destructive text-ds-destructive-foreground text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs opacity-50 pointer-events-none">
                        Disabled Destructive
                    </button>
                </div>
            </PreviewSection>

            <PreviewSection title="Button Group" description="Common pattern: outline cancel + primary action.">
                <div className="flex items-center gap-2">
                    <button className="inline-flex items-center justify-center bg-transparent text-ds-primary border border-ds-border text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs">
                        Cancel
                    </button>
                    <button className="inline-flex items-center justify-center bg-ds-primary text-ds-primary-foreground text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs">
                        Save Changes
                    </button>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
