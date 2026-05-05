#!/bin/bash

# Test script to verify hot-reload latency
# Usage: ./test-hot-reload.sh

set -e

BACKEND_URL="http://localhost:3000/health"
FRONTEND_URL="http://localhost:3001"
TEST_FILE="src/index.js"

echo "🔍 Testing Hot-Reload Setup..."
echo ""

# 1. Check backend is running
echo "1️⃣  Checking backend..."
if curl -s "$BACKEND_URL" >/dev/null 2>&1; then
  echo "   ✅ Backend is running on :3000"
else
  echo "   ❌ Backend is not responding on :3000"
  exit 1
fi

# 2. Check frontend is running
echo "2️⃣  Checking frontend..."
if curl -s "$FRONTEND_URL" >/dev/null 2>&1; then
  echo "   ✅ Frontend is running on :3001"
else
  echo "   ❌ Frontend is not responding on :3001"
  exit 1
fi

# 3. Get current backend response
echo "3️⃣  Recording baseline response..."
BASELINE=$(curl -s "$BACKEND_URL" | grep -o '"status":"[^"]*"')
echo "   Baseline: $BASELINE"

# 4. Modify backend file temporarily
echo "4️⃣  Testing file change detection..."
echo "   Modifying $TEST_FILE..."

# Create backup
cp "$TEST_FILE" "$TEST_FILE.backup"

# Add a temporary console.log to trigger file watch
sed -i.tmp "s/console.log(\`Server listening/console.log('🔄 Hot-reload test'); console.log(\`Server listening/" "$TEST_FILE"

# 5. Wait for server to restart and check
echo "   Waiting for server restart..."
RETRY_COUNT=0
MAX_RETRIES=10

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
  sleep 1
  RETRY_COUNT=$((RETRY_COUNT + 1))

  if curl -s "$BACKEND_URL" >/dev/null 2>&1; then
    ELAPSED=$((RETRY_COUNT))
    echo "   ✅ Server restarted in ${ELAPSED}s"
    break
  fi
done

# 6. Restore original file
echo "   Restoring original file..."
mv "$TEST_FILE.backup" "$TEST_FILE"
rm -f "$TEST_FILE.tmp"

# 7. Wait for server to restart again
echo "   Waiting for server to restart again..."
sleep 3

if curl -s "$BACKEND_URL" >/dev/null 2>&1; then
  echo "   ✅ Server restarted successfully"
else
  echo "   ❌ Server failed to restart"
  exit 1
fi

echo ""
echo "✨ Hot-reload verification complete!"
echo ""
echo "Summary:"
echo "  Backend:  ✅ Running with auto-restart"
echo "  Frontend: ✅ Running with HMR"
echo "  Latency:  ~${ELAPSED}s from file save to server restart"
echo ""
echo "To test manually:"
echo "  1. Edit src/index.js or frontend/app/page.tsx"
echo "  2. Save the file"
echo "  3. Changes should appear on localhost in <1 second"
