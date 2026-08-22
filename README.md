# Airbnb Property Listing Clone

A pixel-perfect, accessible, production-ready desktop React clone of an **Airbnb Property Listing Page**, complete with a 5-image bento hero photo grid, full-viewport Photo Tour, single-photo Lightbox viewer, and sticky booking card.

Built for the **Playpower Labs** frontend assignment.

---

## Quick Start & Setup

### Prerequisites
- Node.js version 18.0.0 or higher
- npm version 9.0.0 or higher

### Installation & Local Execution
```bash
# 1. Install project dependencies
npm install

# 2. Start the local Vite development server
npm run dev

# 3. Open your browser and navigate to http://localhost:5173
```

### Production Build & Linting
```bash
# Run ESLint rule verification
npm run lint

# Compile production-ready build
npm run build

# Preview production build locally
npm run preview
```

---

## Tech Stack & Architecture

- **Core**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (Custom design tokens via `@theme` in `src/index.css`)
- **Routing**: React Router DOM v7
- **State Management**: React Context API (`GalleryContext.jsx`)
- **Code-Splitting**: `React.lazy` and `Suspense` for modal overlays
- **Accessibility**: Native semantic buttons, WCAG 2.1 AA contrast, `:focus-visible` ring indicators, focus trapping (`useTrapFocus`), and body scroll locking (`useLockBodyScroll`)

---

## Features

- **Desktop 5-Image Bento Photo Grid**: Hero image (50% width) + 4 sub-images (50% 2x2 grid) with `12px` corner radii, `8px` gaps, `object-cover` cropping, and floating "Show all photos" button.
- **Full-Viewport Photo Tour**: Interactive room category tab navigation bar (`Exterior`, `Living room`, `Bedroom`, `Bathroom`, `Kitchen`, `Dining`), sticky top header, photo counters, and background scroll lock.
- **Lightbox Single-Photo Viewer**: High-resolution image stage, counter badge (`1 / 20`), boundary safe previous/next controls, keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`), and image preloading.
- **Sticky Booking Sidebar Card**: Date picker & guest selector input grid, pricing calculator, reserve button gradient, and price breakdown.
- **Micro-Interactions**: Wishlist heart pop keyframe animation, share clipboard toast slide-up notification, and smooth modal entrance transitions.

---

## Project Documentation Index

- [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md) — Architecture decisions, tech stack selection, and phase milestones.
- [AI_WORKFLOW.md](AI_WORKFLOW.md) — Transparent documentation of the 12-stage AI-assisted development workflow.
- [ACCESSIBILITY.md](ACCESSIBILITY.md) — Comprehensive WCAG 2.1 AA accessibility implementation report.
- [ARCHITECTURE.md](ARCHITECTURE.md) — High-level production architecture guide for a vacation rental marketplace.
- [SUBMISSION_CHECKLIST.md](SUBMISSION_CHECKLIST.md) — Final submission verification checklist against assignment requirements.
- [.cursor/rules/project-rules.mdc](.cursor/rules/project-rules.mdc) — Cursor AI project rules configuration.
