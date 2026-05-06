#!/bin/bash
# Verify that all changes have been committed and pushed to origin/main
# Exits with code 1 if there are uncommitted changes or unpushed commits

set -e

echo "🔍 Verifying git state..."

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
  echo "❌ FAIL: Uncommitted changes detected"
  echo ""
  echo "Run: git status"
  echo "Then: git add <files> && git commit -m '<message>' && git push origin main"
  exit 1
fi

# Check for untracked files (excluding .gitignore'd files)
if [ -n "$(git ls-files --others --exclude-standard)" ]; then
  echo "❌ FAIL: Untracked files detected"
  echo ""
  echo "Untracked files:"
  git ls-files --others --exclude-standard
  echo ""
  echo "Either add them to .gitignore or commit them:"
  echo "  git add <files> && git commit -m '<message>' && git push origin main"
  exit 1
fi

# Check for unpushed commits
UNPUSHED=$(git log origin/main..HEAD --oneline)
if [ -n "$UNPUSHED" ]; then
  echo "❌ FAIL: Unpushed commits detected"
  echo ""
  echo "Unpushed commits:"
  echo "$UNPUSHED"
  echo ""
  echo "Run: git push origin main"
  exit 1
fi

echo "✅ PASS: All changes committed and pushed to origin/main"
exit 0
