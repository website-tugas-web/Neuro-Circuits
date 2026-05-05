# Submission Instructions

Please follow these instructions carefully when submitting your take-home project.

---

## What to Submit

Create a **GitHub repository** (preferred) or a **zip file** containing:

```
├── src/
│   ├── components/
│   │   ├── AnatomyViewer.jsx       # Main component
│   │   └── AnatomyViewer.test.js   # Tests
│   ├── data/
│   │   └── regions.js              # Anatomy data
│   ├── styles/
│   │   └── AnatomyViewer.css       # Styling
│   ├── App.jsx                     # Root app component
│   └── index.jsx                   # Entry point
├── public/
│   └── index.html                  # HTML template
├── package.json                    # Dependencies & scripts
├── package-lock.json
├── README.md                       # Setup & architecture
├── .gitignore                      # (exclude node_modules!)
└── .git                           # (if using GitHub)
```

---

## Setup Requirements

Your submission must:

1. **Install:** `npm install` works without errors
2. **Start:** `npm start` or `npm run dev` runs without errors
3. **Test:** `npm test` runs without errors
4. **Build:** `npm run build` succeeds (if applicable)

**No `node_modules/` in the repo.** Add to `.gitignore`:

```
node_modules/
dist/
build/
.env
.DS_Store
```

---

## README Template

Your README.md should include:

```markdown
# Anatomy Viewer Component

## Overview
Brief description of what you built and your approach.

## Setup

### Prerequisites
- Node.js >= 18.0.0
- npm

### Installation
\`\`\`bash
npm install
\`\`\`

### Running Locally
\`\`\`bash
npm start
\`\`\`

The app will open at http://localhost:3000.

### Running Tests
\`\`\`bash
npm test
\`\`\`

## Architecture

### Component Structure
- **AnatomyViewer:** Main component managing state and layout
- **RegionButton:** Individual interactive region
- **DetailsPanel:** Display region information

### State Management
- useState for selected region and panel state
- (Optional: Context, Redux, etc. if you used it)

### Styling Approach
- CSS Modules / Tailwind / CSS-in-JS (describe your choice)
- Mobile-first responsive design

### Animation Library
- Framer Motion / CSS animations / other (explain your choice)

## Design Decisions

### Why I chose [framework/pattern]
Brief explanation of key technical decisions.

### What I'd do differently with more time
- Add [feature]
- Improve [area]
- Refactor [component]

## Accessibility
- Keyboard navigation (Tab, Enter, Escape)
- ARIA labels and semantic HTML
- Color contrast (WCAG AA)
- Respects prefers-reduced-motion

## Performance
- No unnecessary re-renders (optimized with useMemo/useCallback if needed)
- Animations run at 60 FPS

## Testing
- 3–5 tests covering core functionality
- Test command: \`npm test\`

## Known Issues
- (if any)

## Future Improvements
- (if applicable)
```

---

## Code Style

Use Prettier or similar formatter. Your code should:

- Have consistent indentation (2 or 4 spaces)
- Use meaningful variable and function names
- Include comments only where the "why" is non-obvious
- Be free of console.log() calls (remove debug logs)

**Recommended:**

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80
}
```

---

## Git Commits

Write clear commit messages. Examples:

✅ Good:
```
feat: add anatomy diagram with interactive regions
feat: implement smooth hover and click animations
fix: add keyboard navigation support
test: add tests for region selection
style: improve mobile layout responsiveness
```

❌ Poor:
```
wip
update stuff
fixes
final version
```

---

## Submission Methods

### Option 1: GitHub Repository (Preferred)

1. Create a public GitHub repository
2. Push your code with meaningful commits
3. Send the GitHub URL to: [hiring contact email]
4. Subject: "Take-Home Submission: [Your Name]"

**Example:**
```
Subject: Take-Home Submission: Jane Doe
Message: 
Hi [Hiring Manager],

I've completed the anatomy viewer take-home project. 
Here's my submission: https://github.com/janedoe/anatomy-viewer

The project should run with:
  npm install
  npm start

Tests: npm test

I'd appreciate any feedback!

Jane
```

### Option 2: Zip File

1. Remove `node_modules/` and other large files
2. Create a zip: `zip -r anatomy-viewer.zip . -x "node_modules/*" ".git/*" "dist/*"`
3. Send via email or file sharing (Google Drive, Dropbox, etc.)
4. Include a README with setup instructions

---

## Quality Checklist

Before submitting, verify:

- [ ] Project runs: `npm install` → `npm start` ✓
- [ ] Tests pass: `npm test` all green ✓
- [ ] No console errors or warnings ✓
- [ ] Mobile layout works in DevTools ✓
- [ ] Keyboard navigation works (Tab, Enter, Escape) ✓
- [ ] README is complete and clear ✓
- [ ] Git history shows logical commits ✓
- [ ] No node_modules/ in repo ✓
- [ ] No API keys or secrets in code ✓
- [ ] Code is formatted consistently ✓

---

## Evaluation Timeline

- **Submission deadline:** May 23, 11:59 PM (your timezone)
- **Review period:** May 24–25
- **Decisions:** May 26
- **Next steps:** CEO round (if approved)

---

## FAQ

**Q: Can I submit late?**  
A: We'll review submissions up to May 24 at 9 AM, but earlier is better.

**Q: What if I didn't finish?**  
A: Submit what you have. Include notes in the README about what you'd do next.

**Q: Can I use [framework/library]?**  
A: Yes, as long as you explain your choice. Avoid over-engineering.

**Q: Do I need TypeScript?**  
A: No, but it's a strong signal of production experience.

**Q: Can I share your project spec or ask for help?**  
A: This is an individual assessment. Don't share code or specs; you can ask clarifying questions about the requirements.

**Q: How long should this take?**  
A: 2–3 hours is typical. If you're significantly over, you may be over-engineering.

---

## Contact

Questions about the project? Reach out to:

📧 **[Hiring Contact Email]**  
⏰ **Response time:** Usually within 24 hours

---

**We're excited to see what you build. Good luck!**
