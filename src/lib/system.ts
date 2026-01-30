import fs from "fs"
import path from "path"
import matter from "gray-matter"

const SYSTEM_DIR = path.join(process.cwd(), ".design-system-context", "system")

export interface DocMetadata {
    title: string
    slug: string
    category: string
    fullPath: string
}

export async function getDocsHierarchy() {
    const categories = ["rules", "tokens", "components", "patterns", "icons"]
    const hierarchy: Record<string, DocMetadata[]> = {}

    for (const category of categories) {
        const categoryPath = path.join(SYSTEM_DIR, category)
        if (!fs.existsSync(categoryPath)) continue

        const files = fs.readdirSync(categoryPath)
        hierarchy[category] = files
            .filter((file) => file.endsWith(".md"))
            .map((file) => {
                const slug = file.replace(/\.md$/, "")
                return {
                    title: slug.split("-").map(word => word.charAt(0) ? word.charAt(0).toUpperCase() + word.slice(1) : word).join(" "),
                    slug,
                    category,
                    fullPath: path.join(category, file)
                }
            })
    }

    return hierarchy
}

export async function getDocContent(category: string, slug: string) {
    const filePath = path.join(SYSTEM_DIR, category, `${slug}.md`)
    if (!fs.existsSync(filePath)) return null

    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContent)

    return {
        meta: data as Partial<DocMetadata>,
        content,
        title: slug.split("-").map(word => word.charAt(0) ? word.charAt(0).toUpperCase() + word.slice(1) : word).join(" "),
    }
}
