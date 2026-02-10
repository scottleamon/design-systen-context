# Create Sales & Marketing Enablement Document

You are helping create a sales and marketing enablement document for features added in the current branch.

This process will follow 3 main phases:

PHASE 1. Analyze the current branch diff
PHASE 2. Generate the enablement document
PHASE 3. Inform the user of completion

Follow each of these phases IN SEQUENCE:

## Multi-Phase Process:

### PHASE 1: Analyze Branch Diff

First, determine the current branch and compare it to main:

```bash
# Get current branch name
git rev-parse --abbrev-ref HEAD

# Show diff summary between current branch and main
git diff main --stat

# Get detailed diff (files changed)
git diff main --name-status
```

Review the changes to understand:
- What files were modified
- What features were added or changed
- What technical changes were made

### PHASE 2: Generate Enablement Document

Use the **enablement-writer** subagent to create the sales and marketing enablement document.

Provide the enablement-writer with:
- The current branch name
- The git diff output from PHASE 1
- Access to all modified files for context

The enablement-writer will:
1. Analyze the technical changes
2. Translate them into business value and customer benefits
3. Create a comprehensive enablement document in non-technical language
4. Save the document to the current spec folder if one exists, or to `agent-os/enablement-docs/`

### PHASE 3: Inform the User

After the enablement-writer completes, inform the user:

```
Sales & Marketing Enablement Document Created! 🎯

✅ Branch analyzed: `[branch-name]`
✅ Files reviewed: [count] files changed
✅ Document created: `[document-path]`

This document is ready to share with your sales and marketing teams to enable millions of dollars in sales!

Key highlights:
- Written in non-technical language
- Focuses on customer benefits and business value
- Includes feature descriptions and use cases
- Provides talking points for sales conversations
```

