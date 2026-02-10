export interface TodoItem {
    id: string
    title: string
    description: string
    category: "a11y" | "rules" | "tokens" | "components" | "patterns"
    priority: "high" | "medium" | "low"
    filePath: string
    status: "needs-input" | "in-progress" | "complete"
}

export const systemTodos: TodoItem[] = [
    // Accessibility - HIGH PRIORITY
    {
        id: "a11y-forms",
        title: "Forms Accessibility",
        description: "ARIA patterns, keyboard interactions, validation patterns",
        category: "a11y",
        priority: "high",
        filePath: "system/a11y/forms.md",
        status: "needs-input",
    },
    {
        id: "a11y-dialogs",
        title: "Dialogs Accessibility",
        description: "Focus behavior, keyboard patterns, stacked dialog handling",
        category: "a11y",
        priority: "high",
        filePath: "system/a11y/dialogs.md",
        status: "needs-input",
    },
    {
        id: "a11y-data-tables",
        title: "Data Tables Accessibility",
        description: "Sortable columns, row selection, pagination, filtering",
        category: "a11y",
        priority: "high",
        filePath: "system/a11y/data-tables.md",
        status: "needs-input",
    },
    {
        id: "a11y-navigation",
        title: "Navigation Accessibility",
        description: "Keyboard patterns, ARIA usage, screen reader behavior",
        category: "a11y",
        priority: "high",
        filePath: "system/a11y/navigation.md",
        status: "needs-input",
    },

    // Governance - MEDIUM PRIORITY
    {
        id: "governance-approval",
        title: "Governance Approval Authority",
        description: "Who approves variants, tokens, exceptions; enforcement tooling",
        category: "rules",
        priority: "medium",
        filePath: "system/rules/governance.md",
        status: "needs-input",
    },
]

export function getTodosByPriority(priority: TodoItem["priority"]) {
    return systemTodos.filter((todo) => todo.priority === priority)
}

export function getTodosByCategory(category: TodoItem["category"]) {
    return systemTodos.filter((todo) => todo.category === category)
}

export function getTodosByStatus(status: TodoItem["status"]) {
    return systemTodos.filter((todo) => todo.status === status)
}

export function getIncompleteTodos() {
    return systemTodos.filter((todo) => todo.status !== "complete")
}

export function getTodoStats() {
    const total = systemTodos.length
    const complete = systemTodos.filter((t) => t.status === "complete").length
    const needsInput = systemTodos.filter((t) => t.status === "needs-input").length
    const inProgress = systemTodos.filter((t) => t.status === "in-progress").length
    const highPriority = systemTodos.filter((t) => t.priority === "high" && t.status !== "complete").length

    return { total, complete, needsInput, inProgress, highPriority }
}
