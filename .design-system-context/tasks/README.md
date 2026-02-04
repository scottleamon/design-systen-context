# Task-Specific Context Files

## Purpose

This folder contains **task-oriented** context files for AI agents and developers. Instead of loading all design system documentation for every task, load only the context relevant to your current task.

This follows the "routing to specialists" pattern from the Taste 1.0 model:

> "Do not ask every model to solve everything. First figure out what kind of problem this is. Then route it to the right specialist."

---

## How to Use

1. **Identify your task type** from the list below
2. **Load the task-specific file** plus `../README.md` (core context)
3. **Follow the workflow** in the task file
4. **Load additional context** only as needed (components, tokens, patterns)

---

## Available Task Files

| Task | File | When to Use |
|------|------|-------------|
| Create a Component | [create-component.md](./create-component.md) | Building a new UI component |
| Review UI | [review-ui.md](./review-ui.md) | Evaluating existing UI for consistency/quality |
| Rapid Prototype | [prototype.md](./prototype.md) | Building a quick proof-of-concept |
| Migrate Legacy | [migrate.md](./migrate.md) | Updating old code to design system standards |
| Document Component | [document-component.md](./document-component.md) | Writing/updating component documentation |

---

## Task Routing Decision Tree

```
┌─────────────────────────────────────────┐
│ What are you trying to do?              │
└──────────────┬──────────────────────────┘
               │
    ┌──────────┼──────────┬───────────┬────────────┐
    │          │          │           │            │
    ▼          ▼          ▼           ▼            ▼
 Building   Reviewing  Prototyping  Updating    Writing
 new UI?    UI code?   quickly?     old code?   docs?
    │          │          │           │            │
    ▼          ▼          ▼           ▼            ▼
 create-   review-    prototype    migrate    document-
component    ui         .md         .md       component
   .md       .md                                 .md
```

---

## What Each Task File Contains

Each task file includes:
1. **Goal** - What this task accomplishes
2. **Pre-requisites** - What to check/load before starting
3. **Workflow** - Step-by-step process
4. **Checklist** - Validation criteria
5. **Common Mistakes** - Anti-patterns to avoid
6. **Related Context** - Links to relevant documentation

---

*Load the appropriate task file before starting work.*
