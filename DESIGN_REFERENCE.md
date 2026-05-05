# Design Reference: Interactive Anatomy Viewer

This document provides the design specifications for the anatomy viewer component. You can use this as a reference to build the component, or create your own interpretation that follows these guidelines.

---

## Visual Design System

### Color Palette

| Region | Color | Hex | Usage |
|--------|-------|-----|-------|
| Brain | Red | #FF6B6B | Head region |
| Heart | Crimson | #FF1744 | Chest center |
| Lungs | Light Blue | #64B5F6 | Left/Right sides |
| Liver | Brown | #A1887F | Upper right abdomen |
| Stomach | Orange | #F5A623 | Center abdomen |
| Skeleton/Background | Off-white | #F5F5F5 | Base anatomy outline |
| Primary Text | Dark Gray | #212121 | Labels, descriptions |
| Secondary Text | Medium Gray | #757575 | Smaller text, facts |
| Hover Highlight | Gold | #FFD700 | Interactive feedback |
| Border | Light Gray | #E0E0E0 | Dividers, edges |

### Typography

**Desktop:**
- Region labels: 18px, bold, dark gray
- Panel titles: 24px, bold
- Description text: 16px, regular
- Facts/details: 14px, regular (secondary gray)

**Mobile:**
- Region labels: 14px, bold
- Panel titles: 20px, bold
- Description text: 14px, regular
- Facts/details: 12px, regular

### Spacing

- Region spacing: 16px padding around each interactive region
- Panel padding: 24px (desktop), 16px (mobile)
- Gap between regions: 8px
- Vertical rhythm: 8px baseline (8, 16, 24, 32, etc.)

---

## Layout Specifications

### Desktop Layout (1200px+)

```
┌─────────────────────────────────────────────────────┐
│ Header: "Anatomy Viewer"                            │
├─────────────────────────────────────────────────────┤
│                                                       │
│  Region List │   Diagram    │  Details Panel        │
│  (300px)     │  (400px)     │  (400px)              │
│              │              │                        │
│  • Brain     │   ╱─╲        │ Brain                 │
│  • Heart     │  ╱   ╲       │                       │
│  • Lungs     │ │     │       │ Controls thought...   │
│  • Liver     │ │  ●  │       │                       │
│  • Stomach   │  ╲   ╱        │ • Processes 11M bits  │
│  • Skeleton  │   ╲─╱         │ • Uses 20% energy     │
│              │                │                        │
└─────────────────────────────────────────────────────┘
```

- **Left panel (300px):** Scrollable list of regions
  - Clickable labels
  - Current selection highlighted (light gold background)
  - Hover state: slightly darker

- **Center (400px):** Anatomy diagram
  - SVG or canvas-based diagram
  - Each region is an interactive circle/shape
  - Regions are positioned using percentages (top, left)
  - Hover state: subtle glow effect (#FFD700)
  - Selected state: stronger glow + label fade-in

- **Right panel (400px):** Details panel
  - Appears when a region is selected
  - Smooth slide-in animation from right
  - Title, description, 2–3 facts
  - Close button (X in top right)
  - Optional: related regions or links

### Tablet Layout (768px–1199px)

```
┌────────────────────────────────────┐
│ Header: "Anatomy Viewer"           │
├────────────────────────────────────┤
│                                    │
│  Diagram        │  Details Panel   │
│  (full width)   │  (or below)      │
│                 │                  │
│  Region List    │                  │
│  (horizontal)   │                  │
│                 │                  │
└────────────────────────────────────┘
```

- **Top:** Full-width diagram
- **Right or below:** Details panel (appears/slides in)
- **Bottom or below:** Horizontal region list (scrollable or wrapped)

### Mobile Layout (< 768px)

```
┌──────────────────────────┐
│ Header: "Anatomy Viewer" │
├──────────────────────────┤
│                          │
│   Diagram               │
│   (full width)          │
│                          │
│                          │
├──────────────────────────┤
│ Region List              │
│ • Brain                  │
│ • Heart                  │
│ • Lungs                  │
│ • Liver                  │
├──────────────────────────┤
│ Details Panel            │
│ (slides up from bottom)  │
│ or (replaces list)       │
│                          │
└──────────────────────────┘
```

- **Top:** Full-width diagram
- **Below:** Vertical scrollable region list OR collapsible list
- **Details:** Modal or bottom sheet overlay (slides up from bottom)
- Single column, no fixed heights

---

## Component States

### Region States

1. **Default (unselected)**
   - Opacity: 0.7
   - Color: normal
   - Cursor: pointer
   - Border: 2px solid rgba(0,0,0,0.1)

2. **Hover**
   - Opacity: 1.0
   - Glow: drop-shadow(0 0 8px rgba(255,215,0,0.6))
   - Cursor: pointer
   - Scale: 1.05 (subtle zoom)
   - Transition: all 0.2s ease

3. **Selected**
   - Opacity: 1.0
   - Glow: drop-shadow(0 0 16px rgba(255,215,0,1.0))
   - Scale: 1.1
   - Border: 2px solid #FFD700
   - Label: fade in and highlight

4. **Focused (keyboard)**
   - Same as selected + outline ring

### Details Panel States

1. **Closed**
   - Opacity: 0
   - Transform: translateX(100%) (off-screen right)
   - Pointer-events: none

2. **Opening**
   - Transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1)
   - Opacity: 1
   - Transform: translateX(0)

3. **Open**
   - Opacity: 1
   - Transform: translateX(0)
   - Pointer-events: auto

### Hover Effects

- **Region hover:** Glow effect (shadow), 1.05 scale
- **List item hover:** Light gray background (#F0F0F0), slight indent
- **Button hover:** Opacity change or subtle background color

---

## Anatomy Diagram Specifications

### Position Reference (using %)

The diagram should be a human silhouette with these regions:

```
         (50%, 15%) Brain
        /─────────\
       /           \
      │             │
      │  (35%, 40%) │ (65%, 40%)
      │   Lungs     │   Lungs
      │             │
      │   (50%, 45%)│
      │    Heart    │
      │             │
      │  (45%, 55%) │
      │   Liver     │
      │             │
      │   (50%, 60%)│
      │   Stomach   │
       \           /
        \─────────/
         Skeleton
```

### Interactive Regions

Each region should be a circular or elliptical hit area:

| Region | Position | Size | Shape |
|--------|----------|------|-------|
| Brain | 50%, 15% | 40px radius | Circle |
| Heart | 50%, 45% | 35px radius | Circle |
| Lungs Left | 35%, 40% | 50x60px | Ellipse |
| Lungs Right | 65%, 40% | 50x60px | Ellipse |
| Liver | 45%, 55% | 45x50px | Ellipse |
| Stomach | 50%, 60% | 40x45px | Ellipse |
| Skeleton | 50%, 50% | Background | SVG outline |

---

## Animation Specifications

### Transition Timings

| Action | Duration | Easing |
|--------|----------|--------|
| Region hover | 200ms | ease-out |
| Details panel open | 300ms | cubic-bezier(0.23, 1, 0.32, 1) |
| Details panel close | 200ms | ease-in |
| Label fade-in | 250ms | ease-in-out |
| Glow effect | 300ms | ease-in-out |

### Reduced Motion

For users with `prefers-reduced-motion: reduce`:
- Disable all animations
- Use instant state changes (0ms transitions)
- Keep interactivity fully functional

---

## Accessibility Guidelines

### ARIA & Semantic HTML

- Use `<svg>` or semantic SVG structure
- Each region should have:
  - `role="button"` or `<button>` element
  - `aria-label="Region name"`
  - `aria-pressed="true/false"` for selected state
  - `aria-describedby="panel-id"` linking to details

- Details panel:
  - `role="region"` or `<section>`
  - `aria-label="Region details"`
  - `aria-live="polite"` for updates

### Keyboard Navigation

- **Tab:** Focus through regions left-to-right, top-to-bottom
- **Enter/Space:** Select focused region
- **Escape:** Close details panel
- **Arrow keys** (optional): Navigate between regions

### Color Contrast

- All text vs. background: 4.5:1 (WCAG AA)
- Region on background: 3:1 minimum
- Hover states: sufficient contrast maintained

---

## References

- **Framer Motion Documentation:** https://www.framer.com/motion/
- **React Accessibility:** https://www.w3.org/WAI/tutorials/
- **ARIA Best Practices:** https://www.w3.org/TR/wai-aria-practices-1.1/

---

**This is a reference design. You may deviate based on your design judgment, but ensure the core interaction model and responsive layout are maintained.**
