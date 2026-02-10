---
allowed-tools: Bash(git worktree:*), Bash(git branch:*), Bash(ps:*), Bash(lsof:*), Bash(cd:*), Bash(pnpm:*), Write, Read
argument-hint: FEATURE_NAME [VARIANT_NUMBER] [ACTION]
description: Quick development server management for worktree variants
---

# Worktree Development Helper Command

## Context

- Current git status: !`git status`
- Current worktrees: !`git worktree list`
- Working directory: !`pwd`

## Your task

Quickly start, stop, or check development servers for specific worktree variants.

**Parameters:**

- `$1` (FEATURE_NAME): Required, feature name from prepare-worktree
- `$2` (VARIANT_NUMBER): Optional, specific variant (1-5), defaults to 1
- `$3` (ACTION): Optional, action to take: "start", "stop", "status", "restart", defaults to "start"

**Implementation Steps:**

1. **Parse and Validate Arguments**

   ```bash
   # Parse arguments
   FEATURE_NAME="$1"
   VARIANT_NUMBER="${2:-1}"
   ACTION="${3:-start}"
   
   # Validate FEATURE_NAME
   if [[ -z "$FEATURE_NAME" ]]; then
     echo "Error: FEATURE_NAME is required"
     echo "Usage: worktree-dev FEATURE_NAME [VARIANT_NUMBER] [ACTION]"
     echo "Actions: start, stop, status, restart"
     exit 1
   fi
   
   # Validate VARIANT_NUMBER
   if [[ ! "$VARIANT_NUMBER" =~ ^[1-5]$ ]]; then
     echo "Error: VARIANT_NUMBER must be between 1 and 5, got: $VARIANT_NUMBER"
     exit 1
   fi
   
   # Validate ACTION
   case $ACTION in
     start|stop|status|restart)
       ;;
     *)
       echo "Error: Invalid action '$ACTION'. Use: start, stop, status, restart"
       exit 1
       ;;
   esac
   
   # Set up paths
   WORKTREE_DIR="../timely-pulse-${FEATURE_NAME}-${VARIANT_NUMBER}"
   BASE_WEB_PORT=3001
   BASE_API_PORT=4000
   WEB_PORT=$((BASE_WEB_PORT + VARIANT_NUMBER - 1))
   API_PORT=$((BASE_API_PORT + VARIANT_NUMBER - 1))
   
   # Check if worktree exists
   if [[ ! -d "$WORKTREE_DIR" ]]; then
     echo "Error: Worktree not found: $WORKTREE_DIR"
     echo "Use 'claude prepare-worktree $FEATURE_NAME' to create it first"
     exit 1
   fi
   ```

2. **Execute Action**

   ```bash
   case $ACTION in
     "status")
       echo "🔍 Checking development server status for $FEATURE_NAME variant $VARIANT_NUMBER"
       echo ""
       echo "Worktree: $WORKTREE_DIR"
       echo "Ports: Web=$WEB_PORT, API=$API_PORT"
       echo ""
       
       # Check web server
       if lsof -ti:$WEB_PORT >/dev/null 2>&1; then
         WEB_PID=$(lsof -ti:$WEB_PORT)
         WEB_CMD=$(ps -p $WEB_PID -o comm= 2>/dev/null || echo "unknown")
         echo "✅ Web server running on port $WEB_PORT (PID: $WEB_PID, CMD: $WEB_CMD)"
       else
         echo "❌ Web server not running on port $WEB_PORT"
       fi
       
       # Check API server
       if lsof -ti:$API_PORT >/dev/null 2>&1; then
         API_PID=$(lsof -ti:$API_PORT)
         API_CMD=$(ps -p $API_PID -o comm= 2>/dev/null || echo "unknown")
         echo "✅ API server running on port $API_PORT (PID: $API_PID, CMD: $API_CMD)"
       else
         echo "❌ API server not running on port $API_PORT"
       fi
       ;;
       
     "stop")
       echo "🛑 Stopping development servers for $FEATURE_NAME variant $VARIANT_NUMBER"
       
       STOPPED_COUNT=0
       
       # Stop web server
       if lsof -ti:$WEB_PORT >/dev/null 2>&1; then
         WEB_PID=$(lsof -ti:$WEB_PORT)
         echo "Stopping web server (PID: $WEB_PID) on port $WEB_PORT..."
         kill -TERM "$WEB_PID" 2>/dev/null || kill -KILL "$WEB_PID" 2>/dev/null
         STOPPED_COUNT=$((STOPPED_COUNT + 1))
       fi
       
       # Stop API server
       if lsof -ti:$API_PORT >/dev/null 2>&1; then
         API_PID=$(lsof -ti:$API_PORT)
         echo "Stopping API server (PID: $API_PID) on port $API_PORT..."
         kill -TERM "$API_PID" 2>/dev/null || kill -KILL "$API_PID" 2>/dev/null
         STOPPED_COUNT=$((STOPPED_COUNT + 1))
       fi
       
       if [[ $STOPPED_COUNT -eq 0 ]]; then
         echo "ℹ️ No running servers found for variant $VARIANT_NUMBER"
       else
         echo "✅ Stopped $STOPPED_COUNT server(s)"
         sleep 2  # Give processes time to terminate
       fi
       ;;
       
     "start")
       echo "🚀 Starting development servers for $FEATURE_NAME variant $VARIANT_NUMBER"
       echo ""
       
       # Check if servers are already running
       RUNNING_COUNT=0
       if lsof -ti:$WEB_PORT >/dev/null 2>&1; then
         echo "⚠️ Web server already running on port $WEB_PORT"
         RUNNING_COUNT=$((RUNNING_COUNT + 1))
       fi
       if lsof -ti:$API_PORT >/dev/null 2>&1; then
         echo "⚠️ API server already running on port $API_PORT"
         RUNNING_COUNT=$((RUNNING_COUNT + 1))
       fi
       
       if [[ $RUNNING_COUNT -gt 0 ]]; then
         echo ""
         echo "Use 'worktree-dev $FEATURE_NAME $VARIANT_NUMBER restart' to restart running servers"
         exit 0
       fi
       
       # Change to worktree directory
       ORIGINAL_DIR=$(pwd)
       cd "$WORKTREE_DIR"
       
       echo "Worktree: $WORKTREE_DIR"
       echo "Starting servers on ports: Web=$WEB_PORT, API=$API_PORT"
       echo ""
       echo "Commands to run manually:"
       echo "  cd $WORKTREE_DIR"
       echo "  PORT=$WEB_PORT pnpm --filter @timely-pulse/web dev &"
       echo "  API_PORT=$API_PORT pnpm --filter @timely-pulse/campaign-api dev &"
       echo ""
       echo "Or use the optimized variant command:"
       echo "  pnpm run dev:variant"
       
       # Return to original directory
       cd "$ORIGINAL_DIR"
       
       echo ""
       echo "💡 Tip: Use 'worktree-dev $FEATURE_NAME $VARIANT_NUMBER status' to check server status"
       ;;
       
     "restart")
       echo "🔄 Restarting development servers for $FEATURE_NAME variant $VARIANT_NUMBER"
       
       # First stop any running servers
       STOPPED_COUNT=0
       if lsof -ti:$WEB_PORT >/dev/null 2>&1; then
         WEB_PID=$(lsof -ti:$WEB_PORT)
         kill -TERM "$WEB_PID" 2>/dev/null || kill -KILL "$WEB_PID" 2>/dev/null
         STOPPED_COUNT=$((STOPPED_COUNT + 1))
       fi
       if lsof -ti:$API_PORT >/dev/null 2>&1; then
         API_PID=$(lsof -ti:$API_PORT)
         kill -TERM "$API_PID" 2>/dev/null || kill -KILL "$API_PID" 2>/dev/null
         STOPPED_COUNT=$((STOPPED_COUNT + 1))
       fi
       
       if [[ $STOPPED_COUNT -gt 0 ]]; then
         echo "Stopped $STOPPED_COUNT existing server(s)"
         sleep 2  # Give processes time to terminate
       fi
       
       # Now start servers (delegate to start action)
       "$0" "$FEATURE_NAME" "$VARIANT_NUMBER" "start"
       ;;
   esac
   ```

3. **Summary**

   ```bash
   echo ""
   echo "📋 Variant $VARIANT_NUMBER Summary:"
   echo "  Feature: $FEATURE_NAME"
   echo "  Worktree: $WORKTREE_DIR"
   echo "  Web Port: $WEB_PORT"
   echo "  API Port: $API_PORT"
   echo "  Action: $ACTION"
   
   if [[ "$ACTION" == "start" ]]; then
     echo ""
     echo "🔗 Quick Access URLs (when servers are running):"
     echo "  Web App: http://localhost:$WEB_PORT"
     echo "  API: http://localhost:$API_PORT"
   fi
   ```

**Usage Examples:**

```bash
# Check status of variant 1
worktree-dev auth-system 1 status

# Start variant 2 servers
worktree-dev auth-system 2 start

# Stop all servers for variant 1
worktree-dev auth-system 1 stop

# Restart variant 3 servers
worktree-dev auth-system 3 restart
```

**Error Handling:**

- Validate worktree exists before attempting operations
- Check for port conflicts before starting servers
- Graceful process termination with fallback to SIGKILL
- Clear error messages for common issues

You must complete all steps in a single response. Do not ask for confirmation or additional input.
