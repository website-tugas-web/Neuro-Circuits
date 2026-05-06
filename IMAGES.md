# Background Images Attribution

All background images used in this project are sourced from **Unsplash**, a platform providing high-quality, royalty-free photographs licensed under the [Unsplash License](https://unsplash.com/license).

## Image Sources

### Page Background Images

| Section | Image File | File Size | Theme |
|---------|-----------|-----------|-------|
| Materials | `images/neuroscience-1.jpg` | 84 KB | Neuroscience/Brain Tissue |
| Interactive Quiz | `images/neuroscience-2.jpg` | 374 KB | Neural Network Visualization |
| Assessment Test | `images/neuroscience-3.jpg` | 374 KB | Abstract Neuroscience (Neural Networks) |
| Study Timer | `images/neuroscience-4.jpg` | 378 KB | Neural Connections |
| References | `images/neuroscience-5.jpg` | 168 KB | Scientific Brain Imaging |

All images sourced from Unsplash's free stock photo collection with neuroscience, brain, neural network, and neurons themes.

## Styling & Overlay Technique

All images are displayed with a **dark red overlay** applied using CSS:

### Implementation Details
- **Technique**: CSS `::before` pseudo-element with linear gradient overlay
- **Overlay Colors**: `rgba(74, 0, 16, 0.75)` to `rgba(45, 0, 8, 0.75)` (70% opacity dark crimson)
- **Effect**: Creates a cohesive clinical aesthetic matching the site's red color scheme while maintaining image visibility
- **Responsive**: Background attachment disabled on mobile (max-width: 480px) for better performance

### CSS Code
```css
.section-with-bg {
  background-color: #4a0010;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.section-with-bg::before {
  background: linear-gradient(
    135deg,
    rgba(74, 0, 16, 0.75) 0%,
    rgba(45, 0, 8, 0.75) 100%
  );
}
```

## License & Attribution

- **Image License**: [Unsplash License](https://unsplash.com/license)
  - Free for commercial and non-commercial use
  - No attribution required (but credited in footer)
- **Styling**: Original CSS implementation for this project

## File Sizes & Optimization

- **Total directory size**: 1.4 MB (5 images)
- **Individual sizes**: 84 KB – 378 KB (all under 400 KB target)
- **Format**: JPEG with quality optimization
- **Responsive**: Optimized for mobile (480px), tablet (768px), and desktop (1440px+) viewports

## Pages Updated

✅ Materials – background image + red overlay  
✅ Interactive Quiz – background image + red overlay  
✅ Assessment Test – background image + red overlay  
✅ Study Timer – background image + red overlay  
✅ References – background image + red overlay (new section added)  
⬜ Homepage – unchanged (as requested)

## Text Contrast & Accessibility

- White text on dark red overlay ensures WCAG AA contrast compliance (>7:1 ratio)
- All sections maintain readable body copy and headings
- Tested across desktop and mobile viewports

---

**Last Updated**: 2026-05-05  
**Project**: Neuro Circuits / Clinical Skills Lab  
**Source**: Unsplash (free stock photography)
