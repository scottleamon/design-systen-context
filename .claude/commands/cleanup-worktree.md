# Cleanup Worktree Command

---
allowed-tools: Bash(git worktree:*), Bash(git branch:*), Bash(rm:*), Bash(ls:*), Bash(lsof:*), Bash(kill:*), Read, mcp__archon__*
argument-hint: FEATURE_NAME [--force] [--archive-branches] [--archon-project-id=PROJECT_ID]
description: Intelligently remove git worktrees and workspace files with safety checks
---

## Context

- Current git status: !`git status`
- Current worktrees: !`git worktree list`
- Working directory: !`pwd`

## Your task

Clean up git worktrees and related files created by the prepare-worktree command.

**Parameters:**

- `$1` (FEATURE_NAME): Required, must match the name used in prepare-worktree
- `--force`: Optional, skip confirmation prompts and force removal
- `--archive-branches`: Optional, archive branches to backup/ namespace instead of deleting
- `--archon-project-id=PROJECT_ID`: Optional, update Archon task status before cleanup

**Implementation Steps:**

1. **Parse and Validate Arguments**

   ```bash
   # Parse arguments
   FEATURE_NAME="$1"
   FORCE_MODE=""
   ARCHIVE_BRANCHES=""
   ARCHON_PROJECT_ID=""
   
   # Parse all arguments for flags
   for arg in "$@"; do
     case $arg in
       --force)
         FORCE_MODE="--force"
         ;;
       --archive-branches)
         ARCHIVE_BRANCHES="--archive-branches"
         ;;
       --archon-project-id=*)
         ARCHON_PROJECT_ID="${arg#*=}"
         ;;
     esac
   done
   
   # Validate FEATURE_NAME
   if [[ -z "$FEATURE_NAME" ]] || [[ "$FEATURE_NAME" =~ ^-- ]]; then
     echo "Error: FEATURE_NAME is required and must be first argument"
     echo "Usage: cleanup-worktree FEATURE_NAME [--force] [--archive-branches] [--archon-project-id=ID]"
     exit 1
   fi
   
   # Check filesystem-safe name (alphanumeric and hyphens only)
   if [[ ! "$FEATURE_NAME" =~ ^[a-zA-Z0-9-]+$ ]]; then
     echo "Error: FEATURE_NAME must contain only alphanumeric characters and hyphens"
     exit 1
   fi
   ```

2. **Check for Running Development Servers**

   ```bash
   echo "🔍 Checking for running development servers..."
   
   RUNNING_PROCESSES=()
   BASE_WEB_PORT=3001
   BASE_API_PORT=4000
   
   # Check for processes on variant-specific ports
   for i in {1..5}; do
     WEB_PORT=$((BASE_WEB_PORT + i - 1))
     API_PORT=$((BASE_API_PORT + i - 1))
     
     # Check web server port
     if lsof -ti:$WEB_PORT >/dev/null 2>&1; then
       PID=$(lsof -ti:$WEB_PORT)
       PROCESS_NAME=$(ps -p $PID -o comm= 2>/dev/null || echo "unknown")
       RUNNING_PROCESSES+=("PORT:$WEB_PORT PID:$PID CMD:$PROCESS_NAME")
       echo "  ⚠️  Found process on port $WEB_PORT (PID: $PID, CMD: $PROCESS_NAME)"
     fi
     
     # Check API server port
     if lsof -ti:$API_PORT >/dev/null 2>&1; then
       PID=$(lsof -ti:$API_PORT)
       PROCESS_NAME=$(ps -p $PID -o comm= 2>/dev/null || echo "unknown")
       RUNNING_PROCESSES+=("PORT:$API_PORT PID:$PID CMD:$PROCESS_NAME")
       echo "  ⚠️  Found process on port $API_PORT (PID: $PID, CMD: $PROCESS_NAME)"
     fi
   done
   
   # Handle running processes
   if [[ ${#RUNNING_PROCESSES[@]} -gt 0 ]]; then
     echo ""
     echo "⚠️  Found ${#RUNNING_PROCESSES[@]} running development server(s)"
     
     if [[ "$FORCE_MODE" == "--force" ]]; then
       echo "Force mode: Terminating running processes..."
       for process in "${RUNNING_PROCESSES[@]}"; do
         PID=$(echo "$process" | sed -n 's/.*PID:\([0-9]*\).*/\1/p')
         if [[ -n "$PID" ]]; then
           echo "  Terminating PID: $PID"
           kill -TERM "$PID" 2>/dev/null || kill -KILL "$PID" 2>/dev/null
         fi
       done
       sleep 2  # Give processes time to terminate
     else
       echo "Please stop development servers before cleanup, or use --force to terminate them"
       echo "Running processes:"
       for process in "${RUNNING_PROCESSES[@]}"; do
         echo "  - $process"
       done
       exit 1
     fi
   else
     echo "  ✅ No running development servers found"
   fi
   ```

3. **Discover Worktrees to Clean**

   ```bash
   echo "🔍 Discovering worktrees for feature: $FEATURE_NAME"
   
   # Find all worktrees matching the pattern
   WORKTREES_TO_REMOVE=()
   BRANCHES_TO_DELETE=()
   
   # Get list of all worktrees
   while IFS= read -r line; do
     # Extract path from worktree list output
     WORKTREE_PATH=$(echo "$line" | awk '{print $1}')
     WORKTREE_BRANCH=$(echo "$line" | awk '{print $3}' | tr -d '[]')
     
     # Check if this worktree matches our pattern
     if [[ "$WORKTREE_PATH" =~ timely-pulse-${FEATURE_NAME}-[0-9]$ ]]; then
       WORKTREES_TO_REMOVE+=("$WORKTREE_PATH")
       BRANCHES_TO_DELETE+=("$WORKTREE_BRANCH")
     fi
   done < <(git worktree list)
   
   # Check for VS Code workspace file
   WORKSPACE_FILE="../timely-pulse-${FEATURE_NAME}-workspace.code-workspace"
   WORKSPACE_EXISTS=false
   if [[ -f "$WORKSPACE_FILE" ]]; then
     WORKSPACE_EXISTS=true
   fi
   
   # Display what will be removed
   echo ""
   echo "📋 Found the following items to clean up:"
   echo ""
   
   if [[ ${#WORKTREES_TO_REMOVE[@]} -eq 0 ]]; then
     echo "  ❌ No worktrees found for feature: $FEATURE_NAME"
   else
     echo "  Worktrees (${#WORKTREES_TO_REMOVE[@]}):"
     for worktree in "${WORKTREES_TO_REMOVE[@]}"; do
       echo "    - $worktree"
     done
     echo ""
     echo "  Branches (${#BRANCHES_TO_DELETE[@]}):"
     for branch in "${BRANCHES_TO_DELETE[@]}"; do
       echo "    - $branch"
     done
   fi
   
   echo ""
   if [[ "$WORKSPACE_EXISTS" == "true" ]]; then
     echo "  VS Code Workspace:"
     echo "    - $WORKSPACE_FILE"
   else
     echo "  VS Code Workspace: Not found"
   fi
   
   # Exit if nothing to clean
   if [[ ${#WORKTREES_TO_REMOVE[@]} -eq 0 ]] && [[ "$WORKSPACE_EXISTS" == "false" ]]; then
     echo ""
     echo "ℹ️ Nothing to clean up for feature: $FEATURE_NAME"
     exit 0
   fi
   ```

3. **Confirm Cleanup (unless --force)**

   ```bash
   if [[ "$FORCE_MODE" != "--force" ]]; then
     echo ""
     echo "⚠️  WARNING: This will permanently remove the above worktrees and branches"
     echo ""
     read -p "Are you sure you want to continue? (yes/no): " CONFIRMATION
     
     if [[ "$CONFIRMATION" != "yes" ]] && [[ "$CONFIRMATION" != "y" ]]; then
       echo "❌ Cleanup cancelled"
       exit 0
     fi
   else
     echo ""
     echo "🚀 Force mode enabled, proceeding with cleanup..."
   fi
   ```

4. **Check for Uncommitted Changes**

   ```bash
   echo ""
   echo "🔍 Checking for uncommitted changes in worktrees..."
   
   WORKTREES_WITH_CHANGES=()
   
   for worktree in "${WORKTREES_TO_REMOVE[@]}"; do
     if [[ -d "$worktree" ]]; then
       # Save current directory
       ORIGINAL_DIR=$(pwd)
       cd "$worktree" 2>/dev/null
       
       if [ $? -eq 0 ]; then
         # Check for uncommitted changes
         if [[ -n $(git status --porcelain) ]]; then
           WORKTREES_WITH_CHANGES+=("$worktree")
           echo "  ⚠️  Uncommitted changes found in: $worktree"
           git status --short
         else
           echo "  ✅ Clean: $worktree"
         fi
         
         cd "$ORIGINAL_DIR"
       fi
     fi
   done
   
   # Handle uncommitted changes
   if [[ ${#WORKTREES_WITH_CHANGES[@]} -gt 0 ]]; then
     echo ""
     echo "⚠️  Found uncommitted changes in ${#WORKTREES_WITH_CHANGES[@]} worktree(s)"
     
     if [[ "$FORCE_MODE" != "--force" ]]; then
       echo "Please commit or stash changes before cleanup, or use --force to override"
       exit 1
     else
       echo "Force mode: Proceeding despite uncommitted changes"
     fi
   fi
   ```

5. **Archon Task Management Updates**

   ```bash
   # Update Archon tasks if project ID provided
   if [[ -n "$ARCHON_PROJECT_ID" ]]; then
     echo ""
     echo "🎯 Updating Archon task status before cleanup..."
     
     for branch in "${BRANCHES_TO_DELETE[@]}"; do
       # Extract variant number from branch name
       if [[ "$branch" =~ feature/${FEATURE_NAME}-variant-([0-9]+) ]]; then
         VARIANT_NUM="${BASH_REMATCH[1]}"
         echo "Would update Archon task for ${FEATURE_NAME} variant ${VARIANT_NUM} to 'done'"
         echo "- Project: $ARCHON_PROJECT_ID"
         echo "- Feature: $FEATURE_NAME"
         echo "- Status: done -> archived"
       fi
     done
     
     echo "✅ Archon task updates prepared (will be executed by Claude Code)"
   fi
   ```

6. **Remove Worktrees and Manage Branches**

   ```bash
   echo ""
   echo "🗑️  Removing worktrees and managing branches..."
   
   REMOVAL_ERRORS=0
   
   for i in "${!WORKTREES_TO_REMOVE[@]}"; do
     worktree="${WORKTREES_TO_REMOVE[$i]}"
     branch="${BRANCHES_TO_DELETE[$i]}"
     
     echo "Removing worktree: $worktree"
     
     # Remove the worktree
     if git worktree remove "$worktree" --force 2>/dev/null; then
       echo "  ✅ Worktree removed successfully"
     else
       # Try alternative removal if standard removal fails
       echo "  ⚠️  Standard removal failed, attempting force removal..."
       
       # First prune to clean up any stale entries
       git worktree prune
       
       # Try removing again
       if git worktree remove "$worktree" --force 2>/dev/null; then
         echo "  ✅ Worktree removed after pruning"
       else
         # If git worktree remove fails, manually remove directory
         if [[ -d "$worktree" ]]; then
           echo "  ⚠️  Git worktree remove failed, manually removing directory..."
           rm -rf "$worktree"
           if [[ $? -eq 0 ]]; then
             echo "  ✅ Directory removed manually"
             # Prune to update git's worktree list
             git worktree prune
           else
             echo "  ❌ Failed to remove directory: $worktree"
             REMOVAL_ERRORS=$((REMOVAL_ERRORS + 1))
           fi
         fi
       fi
     fi
     
     # Handle the associated branch based on --archive-branches flag
     if [[ "$ARCHIVE_BRANCHES" == "--archive-branches" ]]; then
       # Archive branch instead of deleting
       ARCHIVE_BRANCH="archive/${FEATURE_NAME}-$(date +%Y%m%d)-${branch##*/}"
       echo "  Archiving branch: $branch -> $ARCHIVE_BRANCH"
       if git branch -m "$branch" "$ARCHIVE_BRANCH" 2>/dev/null; then
         echo "  ✅ Branch archived as: $ARCHIVE_BRANCH"
       else
         echo "  ⚠️  Could not archive branch (may not exist locally)"
       fi
     else
       # Delete the branch
       echo "  Deleting branch: $branch"
       if git branch -D "$branch" 2>/dev/null; then
         echo "  ✅ Branch deleted successfully"
       else
         echo "  ⚠️  Could not delete branch (may not exist locally)"
       fi
     fi
   done
   ```

7. **Remove VS Code Workspace File**

   ```bash
   if [[ "$WORKSPACE_EXISTS" == "true" ]]; then
     echo ""
     echo "🗑️  Removing VS Code workspace file..."
     
     if rm "$WORKSPACE_FILE" 2>/dev/null; then
       echo "  ✅ Workspace file removed: $WORKSPACE_FILE"
     else
       echo "  ❌ Failed to remove workspace file: $WORKSPACE_FILE"
       REMOVAL_ERRORS=$((REMOVAL_ERRORS + 1))
     fi
   fi
   ```

8. **Final Verification & Summary**

   ```bash
   echo ""
   echo "🔍 Verifying cleanup..."
   
   # Check remaining worktrees
   REMAINING_WORKTREES=()
   while IFS= read -r line; do
     WORKTREE_PATH=$(echo "$line" | awk '{print $1}')
     if [[ "$WORKTREE_PATH" =~ timely-pulse-${FEATURE_NAME}-[0-9]$ ]]; then
       REMAINING_WORKTREES+=("$WORKTREE_PATH")
     fi
   done < <(git worktree list)
   
   # Final summary
   echo ""
   echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
   echo "📊 Cleanup Summary"
   echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
   
   if [[ ${#REMAINING_WORKTREES[@]} -eq 0 ]] && [[ ! -f "$WORKSPACE_FILE" ]]; then
     echo "✅ All worktrees and files cleaned successfully!"
     echo ""
     echo "Removed:"
     echo "  - ${#WORKTREES_TO_REMOVE[@]} worktree(s)"
     
     if [[ "$ARCHIVE_BRANCHES" == "--archive-branches" ]]; then
       echo "  - ${#BRANCHES_TO_DELETE[@]} branch(es) archived to archive/ namespace"
     else
       echo "  - ${#BRANCHES_TO_DELETE[@]} branch(es) deleted"
     fi
     
     if [[ "$WORKSPACE_EXISTS" == "true" ]]; then
       echo "  - 1 VS Code workspace file"
     fi
     
     if [[ ${#RUNNING_PROCESSES[@]} -gt 0 ]]; then
       echo "  - ${#RUNNING_PROCESSES[@]} development server process(es) terminated"
     fi
     
     if [[ -n "$ARCHON_PROJECT_ID" ]]; then
       echo "  - Archon tasks updated/archived"
     fi
     
     echo ""
     echo "🎉 Cleanup complete! Your workspace is clean and ready for new development."
     
   else
     echo "⚠️  Cleanup completed with issues:"
     
     if [[ ${#REMAINING_WORKTREES[@]} -gt 0 ]]; then
       echo ""
       echo "Failed to remove worktrees:"
       for worktree in "${REMAINING_WORKTREES[@]}"; do
         echo "  - $worktree"
       done
     fi
     
     if [[ -f "$WORKSPACE_FILE" ]]; then
       echo ""
       echo "Failed to remove:"
       echo "  - $WORKSPACE_FILE"
     fi
     
     echo ""
     echo "You may need to manually remove these items"
     echo ""
     echo "Manual cleanup commands:"
     echo "  rm -rf [failed-worktree-path]"
     echo "  git worktree prune"
     if [[ "$ARCHIVE_BRANCHES" != "--archive-branches" ]]; then
       echo "  git branch -D [branch-name]"
     fi
   fi
   
   # Show current worktree status
   echo ""
   echo "Current worktrees:"
   git worktree list
   
   # Exit with appropriate code
   if [[ $REMOVAL_ERRORS -gt 0 ]] || [[ ${#REMAINING_WORKTREES[@]} -gt 0 ]]; then
     exit 1
   else
     exit 0
   fi
   ```

**Error Handling:**

- Check for uncommitted changes before removal (warn or require --force)
- Handle cases where worktree directory doesn't exist but git still tracks it
- Gracefully handle permission errors
- Prune stale worktree entries if removal fails
- Report specific failures while continuing with other removals

**Safety Features:**

- Confirmation prompt before deletion (unless --force)
- Display full list of items to be removed before proceeding
- Check for uncommitted changes in each worktree
- Verify feature name matches expected pattern
- Final verification that cleanup was successful

You must complete all steps in a single response. Do not ask for confirmation or additional input.
