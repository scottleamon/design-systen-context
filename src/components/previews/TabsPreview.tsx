"use client"

import { useState } from "react"
import PreviewShell, { PreviewSection } from "./PreviewShell"

const inputBase = "flex w-full h-9 px-3 py-1 text-[14px] leading-5 bg-transparent border border-ds-input rounded-ds-md shadow-ds-xs text-ds-foreground placeholder:text-ds-muted-foreground outline-none"

const tabs = ["Account", "Password", "Settings"] as const
type Tab = (typeof tabs)[number]

export default function TabsPreview() {
    const [active, setActive] = useState<Tab>("Account")

    return (
        <PreviewShell>
            <PreviewSection title="Default Tabs" description="Click tabs to switch between panels.">
                <div className="max-w-[420px]">
                    <div className="flex border-b border-ds-border">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => setActive(tab)}
                                className={`px-4 py-2 text-[14px] font-medium transition-colors cursor-pointer ${
                                    active === tab
                                        ? "text-ds-foreground border-b-2 border-ds-primary -mb-px"
                                        : "text-ds-muted-foreground"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="pt-6 space-y-4">
                        {active === "Account" && (
                            <>
                                <div className="space-y-2">
                                    <label className="text-[14px] font-semibold leading-5 text-ds-foreground">Name</label>
                                    <input type="text" defaultValue="Pedro Duarte" className={inputBase} readOnly />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[14px] font-semibold leading-5 text-ds-foreground">Username</label>
                                    <input type="text" defaultValue="@peduarte" className={inputBase} readOnly />
                                </div>
                            </>
                        )}
                        {active === "Password" && (
                            <>
                                <div className="space-y-2">
                                    <label className="text-[14px] font-semibold leading-5 text-ds-foreground">Current Password</label>
                                    <input type="password" defaultValue="password" className={inputBase} readOnly />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[14px] font-semibold leading-5 text-ds-foreground">New Password</label>
                                    <input type="password" placeholder="Enter new password" className={inputBase} readOnly />
                                </div>
                            </>
                        )}
                        {active === "Settings" && (
                            <>
                                <div className="space-y-2">
                                    <label className="text-[14px] font-semibold leading-5 text-ds-foreground">Language</label>
                                    <input type="text" defaultValue="English" className={inputBase} readOnly />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[14px] font-semibold leading-5 text-ds-foreground">Timezone</label>
                                    <input type="text" defaultValue="UTC-5 (Eastern)" className={inputBase} readOnly />
                                </div>
                            </>
                        )}
                        <button className="inline-flex items-center justify-center bg-ds-primary text-ds-primary-foreground text-[14px] font-semibold leading-5 h-9 px-4 py-2 rounded-ds-md shadow-ds-xs">
                            Save changes
                        </button>
                    </div>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
