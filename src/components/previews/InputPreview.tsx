import PreviewShell, { PreviewSection } from "./PreviewShell"
import { Search } from "lucide-react"

const inputBase = "flex w-full h-9 px-3 py-1 text-[14px] leading-5 bg-transparent border border-ds-input rounded-ds-md shadow-ds-xs text-ds-foreground placeholder:text-ds-muted-foreground outline-none"

export default function InputPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Default Input" description="Standard text input with label and description (vertical layout).">
                <div className="max-w-[360px] space-y-2">
                    <label className="text-[14px] font-semibold leading-5 text-ds-foreground">
                        Email
                    </label>
                    <input
                        type="text"
                        placeholder="name@example.com"
                        className={inputBase}
                        readOnly
                    />
                    <p className="text-[14px] text-ds-muted-foreground">
                        We&apos;ll never share your email.
                    </p>
                </div>
            </PreviewSection>

            <PreviewSection title="With Leading Icon" description="Search input with a prefix icon positioned absolutely.">
                <div className="max-w-[360px] space-y-2">
                    <label className="text-[14px] font-semibold leading-5 text-ds-foreground">
                        Search
                    </label>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-ds-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className={`${inputBase} pl-9`}
                            readOnly
                        />
                    </div>
                </div>
            </PreviewSection>

            <PreviewSection title="States" description="Default, focus, disabled, and error states.">
                <div className="grid grid-cols-2 gap-6 max-w-[500px]">
                    <div className="space-y-2">
                        <label className="text-[14px] font-semibold leading-5 text-ds-foreground">
                            Default
                        </label>
                        <input
                            type="text"
                            placeholder="Placeholder"
                            className={inputBase}
                            readOnly
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[14px] font-semibold leading-5 text-ds-foreground">
                            Focus
                        </label>
                        <input
                            type="text"
                            defaultValue="Focused input"
                            className={`${inputBase} border-ds-ring ring-[3px]`}
                            style={{ ringColor: "var(--ds-ring)", opacity: 0.5 } as React.CSSProperties}
                            readOnly
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[14px] font-semibold leading-5 text-ds-foreground">
                            Disabled
                        </label>
                        <input
                            type="text"
                            placeholder="Disabled"
                            className={`${inputBase} opacity-50 cursor-not-allowed`}
                            disabled
                            readOnly
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[14px] font-semibold leading-5 text-ds-foreground">
                            Error
                        </label>
                        <input
                            type="text"
                            defaultValue="Invalid value"
                            className={`${inputBase} border-ds-destructive`}
                            readOnly
                        />
                        <p className="text-[14px] text-ds-destructive">
                            This field is required.
                        </p>
                    </div>
                </div>
            </PreviewSection>

            <PreviewSection title="Horizontal Layout" description="Label and input side by side for compact forms.">
                <div className="max-w-[420px] space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-4">
                            <label className="w-20 shrink-0 text-right text-[14px] font-semibold leading-5 text-ds-foreground">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Full name"
                                className={inputBase}
                                readOnly
                            />
                        </div>
                        <p className="text-[14px] text-ds-muted-foreground ml-24">
                            Enter your legal name.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <label className="w-20 shrink-0 text-right text-[14px] font-semibold leading-5 text-ds-foreground">
                            Email
                        </label>
                        <input
                            type="text"
                            placeholder="name@example.com"
                            className={inputBase}
                            readOnly
                        />
                    </div>
                </div>
            </PreviewSection>

            <PreviewSection title="Input + Button" description="Combined input and button pattern.">
                <div className="max-w-[360px] flex">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className={`${inputBase} rounded-r-none`}
                        readOnly
                    />
                    <button className="inline-flex items-center justify-center bg-ds-primary text-ds-primary-foreground text-[14px] font-semibold leading-5 h-9 px-4 rounded-ds-md rounded-l-none shadow-ds-xs shrink-0">
                        Subscribe
                    </button>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
