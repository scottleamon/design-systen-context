import PreviewShell, { PreviewSection } from "./PreviewShell"
import { Check } from "lucide-react"

export default function DataTablePreview() {
    const rows = [
        { status: "Active", name: "John Doe", email: "john@example.com", amount: "$250.00" },
        { status: "Pending", name: "Jane Smith", email: "jane@example.com", amount: "$150.00" },
        { status: "Active", name: "Bob Wilson", email: "bob@example.com", amount: "$350.00" },
        { status: "Cancelled", name: "Alice Brown", email: "alice@example.com", amount: "$75.00" },
    ]

    return (
        <PreviewShell>
            <PreviewSection title="Data Table" description="Table with header row, checkbox column, and data rows.">
                <div className="max-w-[600px] border border-ds-border rounded-ds-lg overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-ds-muted text-ds-muted-foreground text-[12px] uppercase tracking-wider">
                                <th className="w-12 px-4 py-3 border-b border-ds-border">
                                    <div className="size-4 rounded border border-ds-input flex items-center justify-center">
                                        <Check className="size-3" />
                                    </div>
                                </th>
                                <th className="px-4 py-3 border-b border-ds-border font-medium">Status</th>
                                <th className="px-4 py-3 border-b border-ds-border font-medium">Name</th>
                                <th className="px-4 py-3 border-b border-ds-border font-medium">Email</th>
                                <th className="px-4 py-3 border-b border-ds-border font-medium">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr key={i} className="text-ds-foreground text-[14px] border-b border-ds-border last:border-b-0">
                                    <td className="px-4 py-3">
                                        <div className="size-4 rounded border border-ds-input" />
                                    </td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`inline-flex px-2 py-0.5 rounded-ds-sm text-[12px] font-medium ${
                                                row.status === "Active"
                                                    ? "bg-ds-success/20 text-ds-success-foreground"
                                                    : row.status === "Pending"
                                                      ? "bg-ds-warning/20 text-ds-warning-foreground"
                                                      : "bg-ds-destructive/20 text-ds-destructive-foreground"
                                            }`}
                                        >
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">{row.name}</td>
                                    <td className="px-4 py-3 text-ds-muted-foreground">{row.email}</td>
                                    <td className="px-4 py-3">{row.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </PreviewSection>
        </PreviewShell>
    )
}
