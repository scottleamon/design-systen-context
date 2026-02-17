"use client"

import { useState } from "react"
import PreviewShell, { PreviewSection } from "./PreviewShell"
import { ChevronDown } from "lucide-react"

const items = [
    {
        id: "trial",
        question: "What is included in the free trial?",
        answer: "You get full access to all features for 14 days. No credit card required.",
    },
    {
        id: "cancel",
        question: "How do I cancel my subscription?",
        answer: "You can cancel anytime from your account settings. Your access continues until the end of the billing period.",
    },
    {
        id: "plan",
        question: "Can I change my plan later?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
    },
]

export default function AccordionPreview() {
    const [expanded, setExpanded] = useState<Set<string>>(new Set(["trial"]))

    function toggle(id: string) {
        setExpanded((prev) => {
            const next = new Set(prev)
            if (next.has(id)) next.delete(id)
            else next.add(id)
            return next
        })
    }

    return (
        <PreviewShell>
            <PreviewSection title="FAQ Accordion" description="Click any item to expand or collapse it.">
                <div className="max-w-[480px] border border-ds-border rounded-ds-lg overflow-hidden">
                    {items.map((item, i) => {
                        const isOpen = expanded.has(item.id)
                        const isLast = i === items.length - 1
                        return (
                            <div key={item.id} className={!isLast ? "border-b border-ds-border" : ""}>
                                <button
                                    type="button"
                                    onClick={() => toggle(item.id)}
                                    className="flex w-full items-center justify-between py-4 px-4 cursor-pointer text-left"
                                >
                                    <span className="text-[14px] font-medium text-ds-foreground">{item.question}</span>
                                    <ChevronDown
                                        className={`size-4 text-ds-muted-foreground shrink-0 ml-2 transition-transform duration-200 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-200 ${
                                        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="px-4 pb-4">
                                        <p className="text-[14px] text-ds-muted-foreground leading-5">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
