export interface TodoItem {
    id: string
    title: string
    description: string
    category: "a11y" | "decisions" | "governance" | "tokens" | "components" | "patterns"
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

    // Decisions - HIGH PRIORITY
    {
        id: "decision-color-system",
        title: "Color System Rationale",
        description: "Primary color rationale, color relationships, a11y considerations",
        category: "decisions",
        priority: "high",
        filePath: "system/decisions/color-system.md",
        status: "needs-input",
    },
    {
        id: "decision-token-scale",
        title: "Token Scale Rationale",
        description: "4px base unit rationale, breakpoints, border radius, typography scale",
        category: "decisions",
        priority: "high",
        filePath: "system/decisions/token-scale.md",
        status: "needs-input",
    },
    {
        id: "decision-component-library",
        title: "Component Library Choice",
        description: "shadcn/ui + Radix rationale, alternatives evaluated, trade-offs",
        category: "decisions",
        priority: "high",
        filePath: "system/decisions/component-library.md",
        status: "needs-input",
    },
    {
        id: "decision-typography",
        title: "Typography Decisions",
        description: "Adelle Sans rationale, licensing, fallback strategy",
        category: "decisions",
        priority: "high",
        filePath: "system/decisions/typography.md",
        status: "needs-input",
    },
    {
        id: "decision-multi-theme",
        title: "Multi-Theme Architecture",
        description: "3-theme rationale, Member/Campus/Admin strategy",
        category: "decisions",
        priority: "high",
        filePath: "system/decisions/multi-theme.md",
        status: "needs-input",
    },

    // Governance - MEDIUM PRIORITY
    {
        id: "governance-approval",
        title: "Governance Approval Authority",
        description: "Who approves variants, tokens, exceptions; enforcement tooling",
        category: "governance",
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
