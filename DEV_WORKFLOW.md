# Local Development Workflow

This document explains how to develop MedReflexed with instant hot-reload for all code changes.

## Quick Start

### Start All Servers (Recommended)
Run both frontend and backend with live reload:

```bash
npm run dev:both
```

This starts:
- **Backend (Express)** on `http://localhost:3000` with automatic restart on file changes
- **Frontend (Next.js)** on `http://localhost:3001` with Hot Module Replacement (HMR)

### Start Only Backend
```bash
npm run dev
```

Watches all files in `/src` and restarts the server on any change.

### Start Only Frontend
```bash
cd frontend && npm run dev
```

Runs Next.js dev server with HMR. Accessible at `http://localhost:3001`.

## Architecture

```
┌─────────────────────────────────────┐
│  Frontend (Next.js on :3001)        │
│  - React components                 │
│  - TypeScript pages in app/         │
│  - Hot Module Replacement enabled   │
│  - API calls to backend on :3000    │
└─────────────────────────────────────┘
              ↓↑ (HTTP)
┌─────────────────────────────────────┐
│  Backend (Express on :3000)         │
│  - REST API endpoints               │
│  - Auto-restart on file changes     │
│  - Watched via nodemon              │
└─────────────────────────────────────┘
```

## How Hot Reload Works

### Backend (Express + nodemon)
- **File Watching**: Monitored via `nodemon.json`
- **Watched Paths**: `/src` directory for `.js`, `.json`, `.ts`, `.tsx` files
- **Reload Delay**: 200ms aggregation to batch rapid changes
- **Behavior**: Server restarts completely on file change
- **Latency**: ~500-800ms from file save to server restart

### Frontend (Next.js)
- **File Watching**: Built-in Next.js webpack watching
- **Watched Types**: `.tsx`, `.ts`, `.jsx`, `.js`, `.css` files
- **HMR**: Hot Module Replacement for instant updates without full reload
- **Behavior**: Code reloads in browser automatically
- **Latency**: ~300-500ms for HMR, <100ms for CSS changes

## File Change Detection

All changes are detected and reloaded automatically:

### Backend
- ✅ TypeScript/JavaScript files in `/src`
- ✅ JSON configuration files
- ✅ `.env` changes (restart server manually for these)

### Frontend
- ✅ React components (`.tsx`, `.jsx`)
- ✅ Styles (`.css`, Tailwind classes)
- ✅ Assets in `/public`
- ✅ API layer (`lib/api.ts`)
- ✅ Configuration files

## Tips for Development

1. **Make a change, save, and wait**: Changes appear on localhost in <1 second
2. **Browser page won't refresh automatically**: HMR updates in place; refresh for layout changes
3. **Backend restart causes frontend errors briefly**: Normal; frontend reconnects after server restarts
4. **Environment variables**: Restart the backend server (Ctrl+C, then npm run dev) for `.env` changes
5. **CSS changes**: Appear instantly via HMR
6. **Console logs**: Check terminal for backend, browser dev tools for frontend

## Monitoring Changes

### Terminal Output

**Backend (nodemon):**
```
[nodemon] restarting due to changes...
[nodemon] starting `node src/index.js`
Server listening on port 3000
```

**Frontend (Next.js):**
```
- ready started server on 0.0.0.0:3001, url: http://localhost:3001
- event compiled client and server successfully (156 modules, 0 warnings)
```

### Browser Console
Check the browser's Dev Tools (F12) for frontend errors and logs.

## Troubleshooting

### Servers Not Starting?
```bash
# Kill any stuck processes
pkill -f "node.*src/index.js"
pkill -f "next dev"

# Try again
npm run dev:both
```

### Port Already in Use?
```bash
# Find process on port 3000 (backend)
lsof -i :3000

# Find process on port 3001 (frontend)
lsof -i :3001

# Kill with: kill -9 <PID>
```

### Frontend Can't Connect to Backend?
1. Check backend is running: `curl http://localhost:3000/health`
2. Check console for errors: Open browser DevTools (F12)
3. Backend may be restarting; wait a few seconds and refresh

### Changes Not Reflecting?
1. **Backend**: Check terminal for nodemon restart logs
2. **Frontend**: Check browser console for errors; hard refresh (Ctrl+Shift+R)
3. Clear Next.js cache: `rm -rf frontend/.next` and restart

## Performance Notes

- **Reload latency**: <1 second for most changes
- **Backend restart**: ~500-800ms from save to server listening again
- **Frontend HMR**: ~300-500ms for code updates, <100ms for CSS
- **Build time**: First build (cold start) takes ~10-15 seconds
- **Subsequent rebuilds**: <2 seconds for localized changes

## Production Builds

```bash
# Build frontend for production
npm run build:frontend

# Deploy to AWS S3 + CloudFront
npm run deploy --prefix frontend
```

Development is isolated from production; this dev workflow has zero impact on deployed systems.

## Vercel Deployment Discipline

**CRITICAL**: Every HTML/CSS/JS/asset edit must ship to production immediately. Vercel auto-deploys from `main` on push.

### Push-on-Edit Rule

After ANY edit to the site (HTML, CSS, JS, images, config):

1. **Add** your changes:
   ```bash
   git add <edited-files>
   ```

2. **Commit** with a clear message:
   ```bash
   git commit -m "feat: describe what changed"
   ```

3. **Push** to origin/main:
   ```bash
   git push origin main
   ```

4. **Verify** clean state:
   ```bash
   git status  # should show "nothing to commit, working tree clean"
   git log origin/main..HEAD  # should be empty (no unpushed commits)
   ```

### Verification Script

Run this before marking any task complete:

```bash
./scripts/verify-shipped.sh
```

This script fails if:
- There are uncommitted changes
- There are unpushed commits on `main`

### Why This Matters

- **Live site**: https://neuro-circuits.vercel.app
- **Vercel deploys**: Automatically from `main` branch on every push
- **No manual deploys**: Push = deploy. If it's not pushed, it's not live.
- **Task completion**: An edit is NOT done until `git status` is clean and `git log origin/main..HEAD` is empty.

### Agent Responsibility

All agents working on this project (CTO, WebDesigner, Animator) must:
- Work in the CTO workspace: `/Users/wrayns/.paperclip/instances/default/workspaces/57260184-a844-430a-b5b5-5deab8bff56a/`
- Follow the push-on-edit rule above
- Run `./scripts/verify-shipped.sh` before claiming "done"
- Never leave uncommitted changes or unpushed commits

Failure to follow this discipline means the live site is out of sync with local work.
