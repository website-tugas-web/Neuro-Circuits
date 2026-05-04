# Frontend Engineer Onboarding

Welcome to MedReflexed! This guide will help you set up and get productive in your first week.

## Day 1: Setup & Access (Monday)

### GitHub Repository Access
1. Request access to the MedReflexed GitHub organization (CTO will send invite)
2. Clone the backend repo: `git clone https://github.com/medreflexed/backend.git`
3. Install dependencies: `npm install`
4. Start the dev server: `npm run dev` (should run on http://localhost:3000)
5. Verify health endpoint: `curl http://localhost:3000/health`

**Goal**: Backend running locally, health endpoint responding.

### Design & Collaboration Tools
1. **Figma access**: Request access to MedReflexed design workspace (will be shared by design lead)
2. **Slack**: Ensure you're invited to #frontend and #engineering channels
3. **GitHub Project**: You'll be added to the engineering project board for task tracking

### Environment Setup
- Node.js >= 18.0.0 (verify: `node -v`)
- npm >= 9 (verify: `npm -v`)
- Code editor: VS Code recommended (install ESLint, Prettier, React extensions)
- Git configured: `git config user.name` and `git config user.email`

---

## Technical Architecture Overview

### Frontend Tech Stack (Proposed)

The frontend will be a **React 18+ application** communicating with the Express backend. Core decisions:

#### Framework & Rendering
- **React 18** with modern hooks (useState, useContext, useReducer for state)
- **Next.js 14+** (recommended) for SSR, file-based routing, API layer simplification, and built-in optimization
  - Alternative: Create React App + React Router if lighter-weight setup preferred (discuss with team)

#### State Management
- **React Context + useReducer** for shared application state (auth, user, theme)
- **TanStack Query (React Query)** for server state management (caching, auto-refetch, pagination)
  - Reduces redundant state; keeps backend in sync
- **Zustand** (if needed) for complex client-side state beyond Context
  - Lightweight, performant; use only if Context becomes unwieldy

#### Styling & Components
- **Tailwind CSS** for utility-first styling (fast, maintainable, scalable)
- **Headless UI** or **Radix UI** for accessible, unstyled component primitives
- **Component library**: Build a shared component system (Button, Card, Form, Modal, etc.)
  - Start with high-frequency patterns; expand as product grows

#### Animation & Interaction
- **Framer Motion** for smooth animations, transitions, and gesture handling
  - Critical for MedReflexed UX: form feedback, loading states, data transitions
- Consider **Lottie** for complex illustration animations (if design requires)

#### Testing & Quality
- **Vitest** or **Jest** + **React Testing Library** for component and hook testing
- **Playwright** or **Cypress** for end-to-end user flows
- **ESLint** + **Prettier** for code consistency
- **TypeScript** (optional but recommended): improved DX, fewer runtime bugs

#### API Communication
- **Axios** or **fetch** for HTTP calls to backend
- **Environment variables** for API base URL (dev vs. staging vs. prod)

### Directory Structure (Proposed)

```
frontend/
├── app/                    # Next.js app directory (if using Next.js)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── (dashboard)        # Grouped routes
│       └── page.tsx
├── components/            # Reusable React components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Form/
│   └── ...
├── hooks/                 # Custom React hooks
│   ├── useAuth.ts
│   ├── useFetch.ts
│   └── ...
├── context/               # Context providers
│   ├── AuthContext.tsx
│   └── AppContext.tsx
├── lib/                   # Utilities, helpers, API client
│   ├── api.ts            # Axios instance + endpoints
│   ├── format.ts         # Date, currency formatting
│   └── ...
├── styles/                # Global styles
│   └── globals.css       # Tailwind + custom CSS
├── tests/                 # Test files
├── .env.local            # Local environment variables (not committed)
├── package.json
├── tailwind.config.js    # Tailwind customization
├── tsconfig.json         # TypeScript config
└── next.config.js        # Next.js config (if applicable)
```

---

## Week 1: Learning & Foundation Goals

### Monday (Day 1)
- ✅ **Setup**: GitHub, design tools, environment, backend running
- **Pairing session** (1 hour): CTO walks through backend API, database schema, current endpoints
- **Goal**: Understand the problem domain and backend capabilities

### Tuesday (Day 2)
- **Codebase exploration**: Review backend code, API contracts, error handling
- **Design file review** (30 min with design lead if available): Understand product vision, initial mockups
- **Pairing session** (1 hour): Discuss frontend architecture decisions, React setup approach
- **Goal**: Clarify tech stack, get designer's input on component library direction

### Wednesday (Day 3)
- **Create first PR**: Initialize frontend repo (Next.js or CRA scaffold, Tailwind config, folder structure)
- **Pairing session** (1 hour): Code review of scaffold, discuss patterns, git workflow
- **Milestone**: Frontend repo is set up with initial structure, CI/CD ready
- **Goal**: Get comfortable with git, review process, tooling

### Thursday (Day 4)
- **Build first feature**: Simple component (e.g., login form, dashboard header)
  - Must include: JSX, styling with Tailwind, basic validation, error states
  - Review with CTO: code quality, pattern adherence, animation approach
- **Pairing session** (1 hour): Live component building with CTO (pair programming)
- **Goal**: Ship a small, polished feature; internalize code standards

### Friday (Day 5)
- **Retrospective & feedback**: What went well? What's confusing? Adjust onboarding if needed
- **Look ahead**: Upcoming sprints, priority features, team capacity
- **Social**: Team lunch or coffee to build relationships
- **Goal**: Reflect, course-correct, build team cohesion

---

## First Pairing Sessions (Setup in Advance)

| Session | Day | Time | Duration | Topic | Attendees |
|---------|-----|------|----------|-------|-----------|
| 1. Backend walkthrough | Mon | 2 PM | 1 hour | API contracts, data flow, current endpoints | CTO + FE |
| 2. Architecture sync | Tue | 10 AM | 1 hour | React stack decision, state management, styling | CTO + Designer (if available) + FE |
| 3. Code review & git | Wed | 3 PM | 1 hour | Repo scaffold, review process, standards | CTO + FE |
| 4. Pair programming | Thu | 10 AM | 1.5 hours | Build first feature together, live coding | CTO + FE |
| 5. Retro & roadmap | Fri | 2 PM | 1 hour | Week review, feedback, next steps | CTO + FE |

---

## Component Library Kickoff (Week 2+)

Once the frontend engineer is ramped, component library design will kick off in parallel with feature development:

1. **Design audit** (with designer): Identify UI patterns in design system (buttons, cards, forms, modals, etc.)
2. **Component inventory**: Map each pattern to a React component + Tailwind utility structure
3. **Living documentation**: Storybook or Chromatic for component showcase, accessibility testing
4. **Iteration**: Grow the library as product features demand

Initial focus: High-frequency components (Button, Card, Form fields, Modal, Toast).

---

## Communication & Expectations

### Daily Standups
- **Time**: 10 AM PT, 5 min async update on Slack (preferred) or 10 min sync in person
- **What**: What you shipped, what's next, any blockers?

### Code Review Standards
- All PRs reviewed by CTO before merge to main
- Expectations: clean code, tests, no console errors, accessibility considered
- Target: 24-hour review turnaround

### Questions & Blockers
- **Slack first** (#frontend): quick questions, design clarifications
- **GitHub issue**: technical discussion, design decisions that need documenting
- **Weekly sync** (Friday 2 PM): big-picture feedback, career growth, company direction

### Time Off & Scheduling
- Let the team know 2+ weeks in advance for time off
- Core hours: 10 AM–3 PM PT for collaboration and pairing
- Async work outside core hours: reviews, exploration, PR prep

---

## Success Criteria: End of Week 1

- ✅ GitHub access configured, backend repo cloned and running
- ✅ Design files reviewed and understood
- ✅ Frontend repo initialized with agreed tech stack (Next.js or CRA, Tailwind, folder structure)
- ✅ First feature sketched or started (e.g., login form component)
- ✅ Code standards and git workflow understood
- ✅ Comfortable with CTO's expectations, team culture, project roadmap
- ✅ No critical blockers for week 2

---

## Resources & Docs

- **Backend API**: See `README.md` in backend repo for current endpoints and schemas
- **Design System** (coming): Figma link will be shared
- **React Learning**: [React Docs](https://react.dev), [Next.js Docs](https://nextjs.org/docs)
- **Tailwind**: [Tailwind CSS Docs](https://tailwindcss.com/docs)
- **Framer Motion**: [Framer Motion Docs](https://www.framer.com/motion/)
- **TanStack Query**: [React Query Docs](https://tanstack.com/query/latest)

---

## Questions Before Day 1?

If anything is unclear or needs adjustment, reach out to the CTO before your start date. This plan is flexible; we'll refine it together.

**Start date**: TBD (expected June 9–20)
**Contact**: [CTO email] | Slack: @cto
