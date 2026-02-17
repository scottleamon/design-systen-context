import { Eye } from "lucide-react"

export default function PreviewPlaceholder() {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="size-12 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center mb-4">
                <Eye className="size-5 text-zinc-400 dark:text-zinc-500" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">
                Preview coming soon
            </h3>
            <p className="text-[13px] text-zinc-500 dark:text-zinc-500 max-w-xs">
                A visual preview for this component will be added in a future update.
                Check the Spec tab for the full documentation.
            </p>
        </div>
    )
}
