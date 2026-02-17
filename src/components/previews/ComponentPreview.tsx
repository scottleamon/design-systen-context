"use client"

import { getPreviewComponent } from "./registry"
import PreviewPlaceholder from "./PreviewPlaceholder"

interface ComponentPreviewProps {
    slug: string
}

export default function ComponentPreview({ slug }: ComponentPreviewProps) {
    const PreviewComponent = getPreviewComponent(slug)

    if (!PreviewComponent) {
        return <PreviewPlaceholder />
    }

    return <PreviewComponent />
}
