---
allowed-tools: Bash(git worktree:*), Bash(git checkout:*), Bash(git branch:*), Bash(git fetch:*), Bash(git pull:*), Bash(pnpm install:*), Bash(mkdir:*), Bash(jq:*), Write, mcp__archon__*
argument-hint: FEATURE_NAME [NUM_VARIANTS] [BASE_BRANCH] [--archon-project-id=PROJECT_ID]
description: Create optimized git worktrees for parallel feature development in Timely Pulse monorepo
---

# Prepare Worktree Command

## Context

- Current git status: !`git status`
- Current branch: !`git branch --show-current`
- Available branches: !`git branch -a`
- Working directory: !`pwd`

## Your task

Create git worktrees for parallel feature development using the provided arguments.

**Parameters:**

- `$1` (FEATURE_NAME): Required, filesystem-safe name (alphanumeric, hyphens only)
- `$2` (NUM_VARIANTS): Optional, defaults to 2, maximum 5
- `$3` (BASE_BRANCH): Optional, defaults to main
- `--archon-project-id`: Optional, Archon project ID for task management integration

**Implementation Steps:**

1. **Parse and Validate Arguments**

   ```bash
   # Parse arguments using individual positional parameters
   FEATURE_NAME="$1"
   NUM_VARIANTS="${2:-2}"
   BASE_BRANCH="${3:-main}"
   ARCHON_PROJECT_ID=""
   
   # Parse optional flags
   for arg in "$@"; do
     if [[ "$arg" =~ ^--archon-project-id=(.+)$ ]]; then
       ARCHON_PROJECT_ID="${BASH_REMATCH[1]}"
     fi
   done
   
   # Validate FEATURE_NAME
   if [[ -z "$FEATURE_NAME" ]]; then
     echo "Error: FEATURE_NAME is required"
     exit 1
   fi
   
   # Check filesystem-safe name (alphanumeric and hyphens only)
   if [[ ! "$FEATURE_NAME" =~ ^[a-zA-Z0-9-]+$ ]]; then
     echo "Error: FEATURE_NAME must contain only alphanumeric characters and hyphens"
     exit 1
   fi
   
   # Validate NUM_VARIANTS
   if [[ ! "$NUM_VARIANTS" =~ ^[1-5]$ ]]; then
     echo "Error: NUM_VARIANTS must be between 1 and 5, got: $NUM_VARIANTS"
     exit 1
   fi
   
   # Verify BASE_BRANCH exists
   if ! git show-ref --verify --quiet "refs/heads/$BASE_BRANCH" && ! git show-ref --verify --quiet "refs/remotes/origin/$BASE_BRANCH"; then
     echo "Error: Branch '$BASE_BRANCH' does not exist"
     exit 1
   fi
   
   # Check if we're in the Timely Pulse monorepo
   if [[ ! -f "package.json" ]] || ! grep -q "timely-pulse-monorepo" package.json; then
     echo "Warning: Not in Timely Pulse monorepo root. Some optimizations may not work."
   fi
   ```

2. **Prepare Base Branch**

   ```bash
   echo "Fetching latest changes from origin..."
   git fetch origin
   
   echo "Checking out base branch: $BASE_BRANCH"
   git checkout "$BASE_BRANCH"
   
   echo "Pulling latest changes..."
   git pull origin "$BASE_BRANCH"
   ```

3. **Create Worktrees**

   ```bash
   echo "Creating $NUM_VARIANTS worktree(s) for feature: $FEATURE_NAME"
   
   # Check for existing directories first
   for i in $(seq 1 $NUM_VARIANTS); do
     WORKTREE_DIR="../timely-pulse-${FEATURE_NAME}-${i}"
     if [[ -d "$WORKTREE_DIR" ]]; then
       echo "Error: Directory $WORKTREE_DIR already exists"
       echo "Please remove existing directories or use a different FEATURE_NAME"
       exit 1
     fi
   done
   
   # Create worktrees
   for i in $(seq 1 $NUM_VARIANTS); do
     WORKTREE_DIR="../timely-pulse-${FEATURE_NAME}-${i}"
     BRANCH_NAME="feature/${FEATURE_NAME}-variant-${i}"
     
     echo "Creating worktree $i: $WORKTREE_DIR"
     echo "Branch: $BRANCH_NAME"
     
     # Create worktree with new branch
     if ! git worktree add "$WORKTREE_DIR" -b "$BRANCH_NAME" "$BASE_BRANCH"; then
       echo "Error: Failed to create worktree $WORKTREE_DIR"
       exit 1
     fi
     
     echo "✅ Created worktree: $WORKTREE_DIR"
   done
   ```

4. **Setup Optimized Dependencies & Configuration**

   ```bash
   echo "Installing and optimizing dependencies in each worktree..."
   
   # Generate port assignments to avoid conflicts
   declare -a PORT_ASSIGNMENTS
   BASE_WEB_PORT=3001
   BASE_API_PORT=4000
   BASE_WORKER_PORT=5000
   
   for i in $(seq 1 $NUM_VARIANTS); do
     WEB_PORT=$((BASE_WEB_PORT + i - 1))
     API_PORT=$((BASE_API_PORT + i - 1))
     WORKER_PORT=$((BASE_WORKER_PORT + i - 1))
     PORT_ASSIGNMENTS[i]="WEB:$WEB_PORT,API:$API_PORT,WORKER:$WORKER_PORT"
   done
   
   for i in $(seq 1 $NUM_VARIANTS); do
     WORKTREE_DIR="../timely-pulse-${FEATURE_NAME}-${i}"
     echo "Setting up worktree $i: $WORKTREE_DIR"
     
     # Change to worktree directory and save current directory
     ORIGINAL_DIR=$(pwd)
     cd "$WORKTREE_DIR"
     
     # Install dependencies with optimized settings
     echo "Installing dependencies with PNPM workspace optimization..."
     if ! PNPM_DEDUPE_PEER_DEPENDENTS=false pnpm install --frozen-lockfile; then
       echo "Error: Failed to install dependencies in $WORKTREE_DIR"
       cd "$ORIGINAL_DIR"
       exit 1
     fi
     
     # Create variant-specific environment file
     if [[ -f ".env.example" ]]; then
       cp .env.example .env.local
       
       # Update ports to avoid conflicts
       WEB_PORT=$((BASE_WEB_PORT + i - 1))
       API_PORT=$((BASE_API_PORT + i - 1))
       WORKER_PORT=$((BASE_WORKER_PORT + i - 1))
       
       echo "# Variant $i - Port assignments" >> .env.local
       echo "PORT=$WEB_PORT" >> .env.local
       echo "API_PORT=$API_PORT" >> .env.local
       echo "WORKER_PORT=$WORKER_PORT" >> .env.local
       echo "# Variant identifier for logging/debugging" >> .env.local
       echo "VARIANT_ID=${FEATURE_NAME}-${i}" >> .env.local
     fi
     
     # Optimize Turbo cache for parallel development
     mkdir -p .turbo
     echo "{\"teamId\":\"${FEATURE_NAME}-${i}\",\"signature\":false}" > .turbo/config.json
     
     # Create variant-specific package.json scripts
     if [[ -f "package.json" ]] && command -v jq >/dev/null 2>&1; then
       jq --arg variant "$i" --arg web_port "$WEB_PORT" \
         '.scripts["dev:variant"] = "PORT=\($web_port) turbo run dev --concurrency=3"' \
         package.json > package.json.tmp && mv package.json.tmp package.json
     fi
     
     # Verify workspace packages are linked
     echo "Verifying workspace packages..."
     pnpm list --depth=0 | grep -E "@timely-pulse/|workspace:" || true
     
     # Return to original directory
     cd "$ORIGINAL_DIR"
     echo "✅ Worktree $i configured: WEB:$((BASE_WEB_PORT + i - 1)), API:$((BASE_API_PORT + i - 1))"
   done
   ```

5. **Generate VS Code Workspace**

   ```bash
   WORKSPACE_FILE="../timely-pulse-${FEATURE_NAME}-workspace.code-workspace"
   echo "Creating VS Code workspace: $WORKSPACE_FILE"
   
   # Generate workspace configuration
   cat > "$WORKSPACE_FILE" << EOF

{
 "folders": [
  {
   "name": "timely-pulse (original)",
   "path": "./timely-pulse"
  }$(for i in $(seq 1 $NUM_VARIANTS); do
  echo ",
  {
   \"name\": \"timely-pulse-${FEATURE_NAME}-${i}\",
   \"path\": \"./timely-pulse-${FEATURE_NAME}-${i}\"
  }"
 done)
 ],
 "settings": {
  "typescript.preferences.includePackageJsonAutoImports": "on",
  "typescript.suggest.autoImports": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
   "source.fixAll": true
  }
 },
 "extensions": {
  "recommendations": [
   "bradlc.vscode-tailwindcss",
   "esbenp.prettier-vscode",
   "ms-typescript.typescript-importer",
   "formulahendry.auto-rename-tag"
  ]
 }
}
EOF

   echo "✅ Created VS Code workspace: $WORKSPACE_FILE"
   echo "Open with: code $WORKSPACE_FILE"

   ```

6. **Archon Task Management Integration**

   ```bash
   # Integrate with Archon if project ID provided
   if [[ -n "$ARCHON_PROJECT_ID" ]]; then
     echo "🎯 Integrating with Archon task management..."
     
     # Create variant-specific tasks for parallel development
     for i in $(seq 1 $NUM_VARIANTS); do
       VARIANT_TITLE="Implement ${FEATURE_NAME} - Variant ${i}"
       VARIANT_DESC="Parallel development variant ${i} for feature: ${FEATURE_NAME}
   
   **Development Environment:**
   - Worktree: ../timely-pulse-${FEATURE_NAME}-${i}
   - Branch: feature/${FEATURE_NAME}-variant-${i}
   - Web Port: $((BASE_WEB_PORT + i - 1))
   - API Port: $((BASE_API_PORT + i - 1))
   
   **Setup Commands:**
   \`\`\`bash
   cd ../timely-pulse-${FEATURE_NAME}-${i}
   pnpm run dev:variant
   \`\`\`
   
   **Comparison Note:** This is variant ${i} of ${NUM_VARIANTS}. Compare implementations when ready."
       
       # Use Claude Code's Archon MCP to create task (this would be executed by Claude)
       echo "Would create Archon task: $VARIANT_TITLE"
       echo "- Project: $ARCHON_PROJECT_ID"
       echo "- Feature: $FEATURE_NAME"
       echo "- Assignee: AI IDE Agent"
     done
     
     echo "✅ Archon integration prepared (tasks will be created by Claude Code)"
   else
     echo "ℹ️ No Archon project ID provided, skipping task management integration"
     echo "   Use --archon-project-id=YOUR_PROJECT_ID to enable Archon integration"
   fi
   ```

7. **Validation & Summary**

   ```bash
   echo "🔍 Validating worktree setup..."
   
   # Verify all worktrees are listed
   echo "Git worktrees:"
   git worktree list
   
   echo ""
   echo "📋 Summary of created worktrees:"
   for i in $(seq 1 $NUM_VARIANTS); do
     WORKTREE_DIR="../timely-pulse-${FEATURE_NAME}-${i}"
     BRANCH_NAME="feature/${FEATURE_NAME}-variant-${i}"
     
     echo "Worktree $i:"
     echo "  Directory: $WORKTREE_DIR"
     echo "  Branch: $BRANCH_NAME"
     
     # Check git status in worktree
     ORIGINAL_DIR=$(pwd)
     cd "$WORKTREE_DIR" 2>/dev/null
     if [ $? -eq 0 ]; then
       echo "  Git Status: $(git status --porcelain | wc -l) changes"
       echo "  Current Branch: $(git branch --show-current)"
       cd "$ORIGINAL_DIR"
     fi
     echo
   done
   
   echo "✅ Setup complete!"
   echo
   echo "🎯 Next Steps:"
   echo "1. Open VS Code workspace: code ../timely-pulse-${FEATURE_NAME}-workspace.code-workspace"
   echo ""
   echo "2. Start development in parallel worktrees:"
   for i in $(seq 1 $NUM_VARIANTS); do
     WEB_PORT=$((BASE_WEB_PORT + i - 1))
     echo "   Variant $i (Port $WEB_PORT):"
     echo "   cd ../timely-pulse-${FEATURE_NAME}-${i}"
     echo "   pnpm run dev:variant  # or pnpm --filter @timely-pulse/web dev"
     echo ""
   done
   
   echo "3. Development Commands (in each worktree):"
   echo "   pnpm build               # Build all packages"
   echo "   pnpm test               # Run tests"
   echo "   pnpm lint               # Check code quality"
   echo "   pnpm type-check         # TypeScript validation"
   echo ""
   
   echo "4. Comparison & Integration:"
   echo "   - Develop different approaches in parallel"
   echo "   - Use 'git diff feature/${FEATURE_NAME}-variant-1..feature/${FEATURE_NAME}-variant-2' to compare"
   echo "   - Cherry-pick best parts: git cherry-pick <commit-hash>"
   echo ""
   
   echo "5. Cleanup when finished:"
   echo "   claude prepare-worktree cleanup-worktree ${FEATURE_NAME}"
   
   if [[ -n "$ARCHON_PROJECT_ID" ]]; then
     echo ""
     echo "6. Archon Task Management:"
     echo "   - Tasks created for each variant in project: $ARCHON_PROJECT_ID"
     echo "   - Update task status as you progress"
     echo "   - Use Claude Code Archon MCP for task management"
   fi
   
   echo ""
   echo "📁 Created Structure:"
   ls -la ../ | grep "timely-pulse" | head -10
   ```

**Error Handling:**

- Gracefully handle existing directories (provide clear error message)
- Validate all git operations succeed before proceeding
- If pnpm install fails in any worktree, report specific location
- Check for git conflicts or uncommitted changes before starting

**Expected Directory Structure After Execution:**

```text
github-repos/
├── timely-pulse/                           # Original repository
├── timely-pulse-{FEATURE_NAME}-1/          # First variant worktree  
├── timely-pulse-{FEATURE_NAME}-2/          # Second variant worktree
└── timely-pulse-{FEATURE_NAME}-workspace.code-workspace
```

You must complete all steps in a single response. Do not ask for confirmation or additional input.
