import PreviewShell, { PreviewSection } from "./PreviewShell"
import { ChevronRight } from "lucide-react"

export default function BreadcrumbPreview() {
    return (
        <PreviewShell>
            <PreviewSection title="Breadcrumb Trail" description="Navigation with ChevronRight separators. Last item is current page.">
                <nav className="flex items-center gap-1 text-[14px]">
                    <span className="text-ds-muted-foreground hover:text-ds-foreground">Home</span>
                    <ChevronRight className="size-4 text-ds-muted-foreground shrink-0" />
                    <span className="text-ds-muted-foreground hover:text-ds-foreground">Products</span>
                    <ChevronRight className="size-4 text-ds-muted-foreground shrink-0" />
                    <span className="text-ds-muted-foreground hover:text-ds-foreground">Category</span>
                    <ChevronRight className="size-4 text-ds-muted-foreground shrink-0" />
                    <span className="text-ds-foreground font-medium">Current Page</span>
                </nav>
            </PreviewSection>
        </PreviewShell>
    )
}
