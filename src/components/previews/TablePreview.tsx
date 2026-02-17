import PreviewShell, { PreviewSection } from "./PreviewShell"

const badgeBase = "inline-flex items-center font-semibold text-[12px] leading-4 px-2 py-0.5 rounded-ds-md"

export default function TablePreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Data Table" description="Table with header, status badges, and footer total.">
                <div className="border border-ds-border rounded-ds-lg overflow-hidden">
                    <table className="w-full text-[14px]">
                        <thead>
                            <tr className="bg-ds-muted">
                                <th className="text-left px-4 py-3 text-[12px] font-semibold text-ds-muted-foreground uppercase tracking-wider">Invoice</th>
                                <th className="text-left px-4 py-3 text-[12px] font-semibold text-ds-muted-foreground uppercase tracking-wider">Status</th>
                                <th className="text-left px-4 py-3 text-[12px] font-semibold text-ds-muted-foreground uppercase tracking-wider">Method</th>
                                <th className="text-right px-4 py-3 text-[12px] font-semibold text-ds-muted-foreground uppercase tracking-wider">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-ds-border">
                                <td className="px-4 py-3 text-ds-foreground font-medium">INV001</td>
                                <td className="px-4 py-3"><span className={`${badgeBase} bg-ds-success text-ds-success-foreground`}>Paid</span></td>
                                <td className="px-4 py-3 text-ds-muted-foreground">Credit Card</td>
                                <td className="px-4 py-3 text-ds-foreground text-right">$250.00</td>
                            </tr>
                            <tr className="border-t border-ds-border bg-ds-muted/30">
                                <td className="px-4 py-3 text-ds-foreground font-medium">INV002</td>
                                <td className="px-4 py-3"><span className={`${badgeBase} bg-ds-warning text-ds-warning-foreground`}>Pending</span></td>
                                <td className="px-4 py-3 text-ds-muted-foreground">PayPal</td>
                                <td className="px-4 py-3 text-ds-foreground text-right">$150.00</td>
                            </tr>
                            <tr className="border-t border-ds-border">
                                <td className="px-4 py-3 text-ds-foreground font-medium">INV003</td>
                                <td className="px-4 py-3"><span className={`${badgeBase} bg-ds-destructive text-ds-destructive-foreground`}>Unpaid</span></td>
                                <td className="px-4 py-3 text-ds-muted-foreground">Bank Transfer</td>
                                <td className="px-4 py-3 text-ds-foreground text-right">$350.00</td>
                            </tr>
                            <tr className="border-t border-ds-border bg-ds-muted/30">
                                <td className="px-4 py-3 text-ds-foreground font-medium">INV004</td>
                                <td className="px-4 py-3"><span className={`${badgeBase} bg-ds-success text-ds-success-foreground`}>Paid</span></td>
                                <td className="px-4 py-3 text-ds-muted-foreground">Credit Card</td>
                                <td className="px-4 py-3 text-ds-foreground text-right">$450.00</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="border-t border-ds-border bg-ds-muted">
                                <td colSpan={3} className="px-4 py-3 text-[14px] font-semibold text-ds-foreground">Total</td>
                                <td className="px-4 py-3 text-[14px] font-semibold text-ds-foreground text-right">$1,200.00</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
