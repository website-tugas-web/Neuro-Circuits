# MedReflexed Frontend Take-Home Project

## Overview

Build an **interactive anatomy viewer** component that displays a medical diagram with smooth state transitions, interactive regions, and responsive design. This project evaluates your ability to write clean, production-ready code with attention to animation, accessibility, and user experience.

**Time estimate:** 2–3 hours  
**Tech stack:** React + your choice of styling (CSS/CSS-in-JS/Tailwind) + animation library (Framer Motion, CSS animations, or equivalent)

---

## Project Requirements

### 1. Component: Interactive Anatomy Diagram

Build a React component that:

#### Visual Design
- Displays an anatomy diagram (provided as a reference design)
- Shows 4–6 interactive regions (e.g., heart, lungs, brain, liver, etc.)
- Each region has a distinct color and label
- Responsive layout: works on mobile, tablet, and desktop

#### Interactivity
- **Hover**: Highlight the region on hover with a subtle glow or opacity change
- **Click**: Open a modal or sidebar showing detailed information for that region
  - Information includes: region name, key function, and 1–2 interesting facts
- **Smooth animations**: All state changes (hover, click, open, close) should be smooth and delightful
- **Keyboard navigation**: You must be able to navigate between regions using Tab and Enter keys
- **Mobile support**: Click to open (not hover); swipe or gesture support is a plus

#### State Management
- Track which region is selected
- Track whether a details panel is open
- Ensure transitions between states are smooth (no flashing or jarring changes)

#### Responsiveness
- Mobile: Single-column layout, stacked details
- Tablet: Two-column layout with region list and diagram
- Desktop: Three-column layout with sidebar, diagram, and details panel
- No fixed heights; content should flow naturally

---

## Technical Evaluation Criteria

### Code Quality
- Clean, readable React code with proper component structure
- Logical component breakdown (avoid monoliths)
- Proper use of hooks (useState, useEffect, etc.)
- No console warnings or errors
- TypeScript is a plus, but not required

### Animation & UX
- Smooth transitions (no janky or laggy animations)
- Animations serve a purpose (guide attention, provide feedback)
- Performance: animations run at 60 FPS (check DevTools)
- Accessibility: animations respect prefers-reduced-motion

### Responsiveness & Design
- Works on mobile, tablet, and desktop without horizontal scroll
- Layout adapts gracefully to different screen sizes
- Consistent spacing, typography, and color usage
- Professional appearance (not placeholder quality)

### Accessibility
- Semantic HTML (proper headings, labels, button elements)
- ARIA labels for interactive regions
- Color contrast meets WCAG AA standards
- Keyboard navigation is fully functional

### Testing
- At least 3–5 meaningful tests covering:
  - Component renders correctly
  - Clicking a region opens details
  - Keyboard navigation works
  - Responsive behavior (optional but impressive)
- Use Vitest, Jest, or React Testing Library

### Shipping Readiness
- No console errors or warnings
- Code is well-formatted (use Prettier or similar)
- README explains how to run the project and your architectural decisions
- Git history shows logical commits (not one massive commit)

---

## Data Structure

You'll need to define the anatomy regions. Here's a suggested structure:

```javascript
const regions = [
  {
    id: "brain",
    name: "Brain",
    color: "#FF6B6B",
    position: { top: "15%", left: "50%" },
    description: "Controls thought, memory, and decision-making",
    facts: ["Processes ~11 million bits of information per second", "Uses about 20% of your body's energy"],
  },
  {
    id: "heart",
    name: "Heart",
    color: "#FF1744",
    position: { top: "45%", left: "50%" },
    description: "Pumps blood throughout your body",
    facts: ["Beats ~100,000 times per day", "About the size of your fist"],
  },
  {
    id: "lungs",
    name: "Lungs",
    color: "#64B5F6",
    position: { top: "40%", left: "35%" },
    description: "Exchanges oxygen with carbon dioxide",
    facts: ["Your lungs contain ~300 million alveoli", "Can hold about 3.5 liters of air"],
  },
  {
    id: "liver",
    name: "Liver",
    color: "#A1887F",
    position: { top: "55%", left: "45%" },
    description: "Filters blood and produces digestive bile",
    facts: ["Can regenerate after partial removal", "Largest internal organ by weight"],
  },
  {
    id: "stomach",
    name: "Stomach",
    color: "#F5A623",
    position: { top: "60%", left: "50%" },
    description: "Breaks down food with acid and enzymes",
    facts: ["Acid is strong enough to dissolve metal", "Produces a new lining every 3–5 days"],
  },
  {
    id: "bones",
    name: "Skeleton",
    color: "#F5F5F5",
    position: { top: "50%", left: "50%" },
    description: "Provides structure and support",
    facts: ["Adult humans have 206 bones", "Bones are living tissue that constantly remodel"],
  },
];
```

---

## Deliverables

Submit a GitHub repository (or .zip file) containing:

1. **src/components/AnatomyViewer.jsx** (or .tsx) — the main component
2. **src/components/AnatomyViewer.test.js** — tests
3. **src/data/regions.js** — anatomy data
4. **src/styles/AnatomyViewer.css** (or .module.css) — styling
5. **package.json** — dependencies and scripts
6. **README.md** — instructions and architecture notes (see template)
7. **.git history** — meaningful commits
8. **No node_modules** in the repo
9. No hardcoded API keys or secrets

---

## Running & Testing

Your project must:
- Install with `npm install`
- Start with `npm start` or `npm run dev`
- Run tests with `npm test`
- Build with `npm run build` (if applicable)

---

## Design Reference

See `DESIGN_REFERENCE.md` for the anatomy diagram design spec.

---

## Evaluation Rubric

See `EVALUATION_RUBRIC.md` for detailed scoring criteria.

---

## Tips

- **Start simple:** get the basic component rendering and interactive, then add polish.
- **Animate last:** build the core functionality first, then add animations.
- **Test as you go:** don't leave testing to the end.
- **Accessibility matters:** if you skip keyboard navigation or ARIA, you're missing a key evaluation criterion.
- **Mobile-first:** design for mobile first, then expand to larger screens.
- **Performance:** use React DevTools to check for unnecessary re-renders.
- **Commit often:** show your thought process with clear commit messages.

---

## FAQ

**Q: Can I use a UI library like Material-UI or Shadcn?**  
A: You can use component libraries, but the anatomy viewer itself should be custom-built. Don't just wrap a library component.

**Q: Do I need to use TypeScript?**  
A: No, but it's a strong signal of production experience.

**Q: Can I use a different animation library (Three.js, D3, etc.)?**  
A: Yes, as long as you can explain why. Framer Motion or CSS animations are recommended for simplicity.

**Q: How much time should I spend?**  
A: 2–3 hours is the target. If you're significantly over, you may be over-engineering. Focus on the core requirements first.

**Q: What if I get stuck?**  
A: Submit what you have with clear notes in the README about what you'd do next. Incomplete but honest code is better than missing context.

---

**Good luck! We're excited to see how you approach this problem.**
