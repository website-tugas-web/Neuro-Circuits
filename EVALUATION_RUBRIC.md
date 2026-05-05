# Evaluation Rubric: Frontend Take-Home Project

Use this rubric to assess submissions fairly and consistently. Scores are assigned per category on a 1–5 scale, with final weight applied to get a composite score.

---

## Scoring Scale

| Score | Meaning |
|-------|---------|
| **5** | Exceptional; exceeds expectations |
| **4** | Strong; meets all requirements, some polish |
| **3** | Satisfactory; core requirements met, minor gaps |
| **2** | Needs improvement; missing key elements or quality issues |
| **1** | Inadequate; major gaps or non-functional |
| **0** | Incomplete; doesn't run or not submitted |

---

## Categories & Evaluation Criteria

### 1. Code Quality (25% weight)

#### Structure & Readability
- **5:** Clean component hierarchy, proper separation of concerns, easy to follow logic
- **4:** Good structure, mostly clear, minor organizational issues
- **3:** Acceptable structure, some unclear sections, but generally readable
- **2:** Poor organization, hard to follow, some confusing patterns
- **1:** Messy code, very difficult to understand

#### React Patterns
- **5:** Excellent use of hooks, proper component composition, no anti-patterns
- **4:** Good hook usage, proper component structure, minor issues
- **3:** Functional use of hooks, mostly correct, some inefficiencies
- **2:** Misuse of hooks or improper component design
- **1:** Fundamentally incorrect React patterns

#### TypeScript / Type Safety (if used)
- **5:** Comprehensive types, no `any` abuse, strict mode enabled
- **4:** Good typing, minimal `any` usage, type-safe
- **3:** Basic typing, some areas untyped
- **2:** Inconsistent typing, frequent `any` usage
- **1:** No typing or broken types

#### No Errors / Warnings
- **5:** Zero console errors or warnings
- **4:** Minor warnings, no errors
- **3:** Some warnings, no functional errors
- **2:** Multiple warnings or minor errors
- **1:** Broken state, doesn't run

---

### 2. Animation & Interactivity (25% weight)

#### Smooth Transitions
- **5:** All animations are smooth, 60 FPS, delightful micro-interactions
- **4:** Smooth animations, mostly polished, minor jank
- **3:** Animations work, acceptable smoothness, some flashing
- **2:** Animations present but janky, noticeable performance issues
- **1:** Broken or missing animations

#### Animation Purpose & UX
- **5:** Animations serve clear purpose, guide attention, enhance experience
- **4:** Good use of animation, mostly purposeful
- **3:** Animations present, some feel unnecessary
- **2:** Animations distract or confuse
- **1:** No animation or poor design choices

#### Interaction Completeness
- **5:** All interactions work perfectly (hover, click, keyboard, mobile)
- **4:** Core interactions work, minor bugs or edge cases
- **3:** Main interactions work, some missing (e.g., keyboard)
- **2:** Interactions partially broken or incomplete
- **1:** Doesn't respond to user input

#### Mobile Responsiveness
- **5:** Perfect on mobile, swipe/touch fully optimized
- **4:** Works well on mobile, good touch targets
- **3:** Functional on mobile, some sizing issues
- **2:** Barely usable on mobile, poor touch experience
- **1:** Broken on mobile

---

### 3. Design & Responsiveness (20% weight)

#### Visual Design
- **5:** Professional appearance, thoughtful color/spacing, polished UI
- **4:** Good design, mostly cohesive, minor alignment issues
- **3:** Acceptable design, functional but basic
- **2:** Poor visual hierarchy, inconsistent spacing
- **1:** Looks incomplete or unprofessional

#### Responsive Layout
- **5:** Flawless on all breakpoints, no horizontal scroll, logical reflow
- **4:** Works well at all sizes, minor tweaks needed
- **3:** Mostly responsive, some layout issues at edges
- **2:** Broken at certain breakpoints, layout issues
- **1:** Not responsive, broken layouts

#### Attention to Detail
- **5:** Consistent spacing, typography, color usage, polished
- **4:** Mostly consistent, minor inconsistencies
- **3:** Acceptable consistency, some rough edges
- **2:** Inconsistent spacing or colors
- **1:** Sloppy, inconsistent

---

### 4. Accessibility (15% weight)

#### Semantic HTML & ARIA
- **5:** Perfect semantic structure, comprehensive ARIA labels, accessibility tree correct
- **4:** Good semantic structure, proper ARIA usage
- **3:** Basic semantic HTML, some ARIA missing
- **2:** Poor semantics, incomplete ARIA
- **1:** No accessibility considerations

#### Keyboard Navigation
- **5:** Full keyboard support, logical tab order, Enter/Space/Escape all work
- **4:** Keyboard navigation works, mostly complete
- **3:** Basic keyboard support, some gaps
- **2:** Partial keyboard support, confusing order
- **1:** Not keyboard accessible

#### Color Contrast
- **5:** All text/elements meet WCAG AAA (7:1+)
- **4:** WCAG AA compliance (4.5:1), minor issues
- **3:** Mostly compliant, some borderline contrast
- **2:** Multiple contrast failures
- **1:** Poor contrast throughout

#### Motion Preferences
- **5:** Respects `prefers-reduced-motion`, animations disabled
- **4:** Animations reduced or disabled on preference
- **3:** Attempts to respect preference
- **2:** Ignores preference
- **1:** No consideration

---

### 5. Testing (10% weight)

#### Test Coverage
- **5:** 5+ tests, comprehensive coverage of core functionality
- **4:** 3–4 meaningful tests, good coverage
- **3:** 2–3 tests, basic coverage
- **2:** 1 test or minimal coverage
- **1:** No tests

#### Test Quality
- **5:** Tests are clear, isolated, test behavior not implementation
- **4:** Good tests, mostly behavioral
- **3:** Acceptable tests, some implementation details
- **2:** Weak tests, unclear intent
- **1:** Tests don't work or don't prove functionality

#### Test Execution
- **5:** All tests pass, clear test runner output
- **4:** All tests pass with minor warnings
- **3:** Most tests pass, some failures
- **2:** Tests fail but infrastructure present
- **1:** Tests don't run

---

### 6. Shipping Readiness (5% weight)

#### README & Documentation
- **5:** Clear setup instructions, architecture explained, decisions documented
- **4:** Good README, explains key decisions
- **3:** Basic README, functional instructions
- **2:** Minimal README, missing details
- **1:** No README or unclear instructions

#### Git History
- **5:** Logical commits, clear messages, shows thought process
- **4:** Good commit messages, mostly logical
- **3:** Acceptable history, could be cleaner
- **2:** Large commits, unclear messages
- **1:** Single commit or no meaningful history

#### Submission Completeness
- **5:** All deliverables present, clean repo, no node_modules
- **4:** All deliverables present, minor cleanup needed
- **3:** Most deliverables present, some missing
- **2:** Missing components, messy repo
- **1:** Incomplete submission

---

## Composite Score Calculation

```
Final Score = (CodeQuality × 0.25) + (AnimationInteractivity × 0.25) 
            + (DesignResponsiveness × 0.20) + (Accessibility × 0.15) 
            + (Testing × 0.10) + (ShippingReadiness × 0.05)
```

### Pass Thresholds

| Score | Recommendation |
|-------|-----------------|
| 4.5–5.0 | **Strong yes** — Advance to CEO round |
| 4.0–4.4 | **Yes** — Advance, watch for specific gaps |
| 3.5–3.9 | **Borderline** — Discuss with team, consider edge cases |
| 3.0–3.4 | **No** — Solid engineer but needs growth in specific areas |
| < 3.0 | **Strong no** — Significant gaps, not ready |

---

## Evaluation Process

### Before Scoring

1. **Setup test:** Clone/extract submission, run `npm install` and `npm start`
2. **Verify it runs:** Check that the app starts without errors
3. **Quick visual scan:** Does it look like a real project? Is it incomplete?

### During Scoring

1. **Test on desktop:** Check layout, interactivity, animations
2. **Test on mobile:** Use browser DevTools device emulation
3. **Check keyboard:** Tab through, use Enter/Escape, verify accessibility
4. **Review code:** Read the component, check structure and patterns
5. **Run tests:** Execute `npm test` and verify output
6. **Read README:** Understand the candidate's decisions and approach

### After Scoring

1. **Record individual scores** for each category
2. **Calculate composite score**
3. **Note standout strengths** (e.g., "exceptional animation polish")
4. **Note critical gaps** (e.g., "no keyboard navigation")
5. **Write brief summary** (2–3 sentences) for team discussion

### Red Flags

- Doesn't run without errors
- No tests or broken tests
- Copied code (check uniqueness in phrasing and structure)
- Significant accessibility gaps (keyboard, colors)
- Code quality suggests junior experience level (for senior role)

### Green Flags

- Thoughtful commit messages showing iteration
- Comprehensive error handling
- Custom animations beyond requirements
- Excellent mobile experience
- Accessible from the start (not an afterthought)
- Strong README explaining decisions

---

## Calibration Examples

### Example 1: Strong Submission (Score: 4.7)

```
Code Quality: 5 (clean, well-structured, excellent hooks usage)
Animation: 4 (smooth, purposeful, one minor performance hiccup on mobile)
Design: 5 (polished, responsive, great attention to detail)
Accessibility: 5 (perfect ARIA, keyboard navigation, respects prefers-reduced-motion)
Testing: 4 (4 tests, good coverage, all passing)
Shipping: 5 (clear README, logical commits, clean repo)

Final: (5×0.25) + (4×0.25) + (5×0.20) + (5×0.15) + (4×0.10) + (5×0.05) = 4.65
→ Recommendation: Strong yes, advance to CEO
```

### Example 2: Satisfactory with Gaps (Score: 3.3)

```
Code Quality: 3 (readable but some inefficient patterns)
Animation: 3 (works but not smooth, some janky transitions)
Design: 3 (functional, basic styling, responsive)
Accessibility: 2 (missing ARIA, no keyboard navigation)
Testing: 3 (2 tests, basic coverage)
Shipping: 3 (basic README, could be cleaner)

Final: (3×0.25) + (3×0.25) + (3×0.20) + (2×0.15) + (3×0.10) + (3×0.05) = 2.85
→ Recommendation: No, accessibility and animations need work
```

---

## Notes for Evaluators

- **Be consistent:** Use the same rubric for all candidates; recalibrate if needed
- **Be fair:** A candidate with strong animation skills but weaker testing is not automatically disqualified; consider the role and gaps
- **Be specific:** Comments like "code was good" are less helpful than "component structure was clean but setState was overused"
- **Consider context:** If a candidate notes something in their README, consider whether the decision was justified
- **Discuss edge cases:** Borderline scores (3.5–3.9) should be discussed as a team before deciding

---

**Questions or calibration needs? Discuss with the hiring team before scoring submissions.**
