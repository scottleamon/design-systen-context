import fs from "fs"
import path from "path"
import matter from "gray-matter"

const CONTEXT_DIR = path.join(process.cwd(), ".design-system-context")
const SYSTEM_DIR = path.join(CONTEXT_DIR, "system")

export interface DocMetadata {
    title: string
    slug: string
    category: string
    fullPath: string
}

// Categories under system/ folder
const SYSTEM_CATEGORIES = ["rules", "tokens", "components", "patterns", "icons", "decisions", "a11y"]

// Categories at root of .design-system-context/
const ROOT_CATEGORIES = ["tasks"]

export async function getDocsHierarchy() {
    const hierarchy: Record<string, DocMetadata[]> = {}

    // Process system/ categories
    for (const category of SYSTEM_CATEGORIES) {
        const categoryPath = path.join(SYSTEM_DIR, category)
        if (!fs.existsSync(categoryPath)) continue

        const files = fs.readdirSync(categoryPath)
        hierarchy[category] = files
            .filter((file) => file.endsWith(".md"))
            .map((file) => {
                const slug = file.replace(/\.md$/, "")
                return {
                    title: formatTitle(slug),
                    slug,
                    category,
                    fullPath: path.join(category, file)
                }
            })
    }

    // Process root-level categories (like tasks/)
    for (const category of ROOT_CATEGORIES) {
        const categoryPath = path.join(CONTEXT_DIR, category)
        if (!fs.existsSync(categoryPath)) continue

        const files = fs.readdirSync(categoryPath)
        hierarchy[category] = files
            .filter((file) => file.endsWith(".md"))
            .map((file) => {
                const slug = file.replace(/\.md$/, "")
                return {
                    title: formatTitle(slug),
                    slug,
                    category,
                    fullPath: path.join(category, file)
                }
            })
    }

    // Add WORKFLOW.md as a special entry in tasks if it exists
    const workflowPath = path.join(CONTEXT_DIR, "WORKFLOW.md")
    if (fs.existsSync(workflowPath)) {
        if (!hierarchy["tasks"]) {
            hierarchy["tasks"] = []
        }
        // Add workflow at the beginning
        hierarchy["tasks"].unshift({
            title: "AI Agent Workflow",
            slug: "WORKFLOW",
            category: "tasks",
            fullPath: "WORKFLOW.md"
        })
    }

    return hierarchy
}

function formatTitle(slug: string): string {
    return slug
        .split("-")
        .map(word => word.charAt(0) ? word.charAt(0).toUpperCase() + word.slice(1) : word)
        .join(" ")
}

export async function getDocContent(category: string, slug: string) {
    // Handle root-level files like WORKFLOW.md
    if (category === "tasks" && slug === "WORKFLOW") {
        const filePath = path.join(CONTEXT_DIR, "WORKFLOW.md")
        if (!fs.existsSync(filePath)) return null
        
        const fileContent = fs.readFileSync(filePath, "utf8")
        const { data, content } = matter(fileContent)
        
        return {
            meta: data as Partial<DocMetadata>,
            content,
            title: "AI Agent Workflow",
        }
    }

    // Handle root-level categories (tasks/)
    if (ROOT_CATEGORIES.includes(category)) {
        const filePath = path.join(CONTEXT_DIR, category, `${slug}.md`)
        if (!fs.existsSync(filePath)) return null

        const fileContent = fs.readFileSync(filePath, "utf8")
        const { data, content } = matter(fileContent)

        return {
            meta: data as Partial<DocMetadata>,
            content,
            title: formatTitle(slug),
        }
    }

    // Handle system/ categories
    const filePath = path.join(SYSTEM_DIR, category, `${slug}.md`)
    if (!fs.existsSync(filePath)) return null

    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContent)

    return {
        meta: data as Partial<DocMetadata>,
        content,
        title: formatTitle(slug),
    }
}
