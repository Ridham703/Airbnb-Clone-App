# Airbnb Clone — Development Plan & Execution Strategy

This document outlines the initial engineering plan, architectural strategy, component boundaries, and phase-by-phase execution milestones for the **Airbnb Listing Page Clone** web application.

---

## 1. Project Goal & Requirements Summary

The objective is to independently build a desktop-first, pixel-perfect, accessible React implementation of an Airbnb Property Listing Page based on assignment reference specifications:

- **Desktop Listing Page**: 5-image bento hero photo grid, title/meta header, property overview, highlights, description, amenities list, rating breakdown, location map, host bio drawer, and sticky booking sidebar card.
- **Photo Tour View**: Full-viewport overlay gallery page displaying all property photos organized by room categories (`Exterior`, `Living room`, `Bedroom`, `Bathroom`, `Kitchen`, `Dining`), with a sticky category navigation pill bar, photo counters, and background scroll locking.
- **Lightbox Single-Photo Viewer**: Accessible modal for viewing high-resolution individual photos with previous/next controls, index counter (`1 / 20`), keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`), and image preloading.
- **Micro-Interactions & Polish**: Production-quality CSS animations (wishlist heart pop, share toast slide-up, modal entrance transitions) without heavy third-party UI libraries.
- **WCAG 2.1 AA Accessibility**: Full keyboard navigation, `:focus-visible` ring indicators, semantic `<button type="button">` controls, modal focus trapping (`useTrapFocus`), and screen reader ARIA labels.

---

## 2. Technical Stack Selection

- **Frontend Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (vanilla CSS tokens via `@theme` in `src/index.css`)
- **Routing**: React Router DOM v7
- **Icons & Graphics**: Inline SVG icons (matching Airbnb design tokens)
- **State Management**: React Context API (`GalleryContext.jsx`)
- **Linting & Code Quality**: ESLint v9 (`eslint .`)

---

## 3. Development Phases & Milestones

### Phase 1: Planning & Data Foundation
- Establish `src/data/property.js` as the SINGLE SOURCE OF TRUTH for all listing parameters (photography, host bio, amenities, reviews, pricing).
- Define design tokens (`colors`, `spacing`, `shadows`, `z-indices`) in `src/index.css`.

### Phase 2: Core Components & Layout Shell
- Implement atomic shared primitives (`Button`, `IconButton`, `Avatar`, `StarRating`, `Modal`).
- Build application header (`Header.jsx`) with logo, search pill, and user profile menu.
- Construct desktop 2-column page layout (`ListingPage.jsx`) with left details column (`1fr`) and right sticky booking sidebar (`370px`).

### Phase 3: Desktop Photo Bento Grid
- Build 5-photo Bento Hero grid (`PhotoGrid.jsx`): 1 Hero image (50% width) + 4 sub-images (50% width 2x2 grid).
- Enforce `12px` corner radii (`rounded-xl`), `8px` gaps (`gap-2`), `object-cover` cropping, semantic `<button type="button">` wrappers, and floating "Show all photos" button.

### Phase 4: Full-Viewport Photo Tour View
- Implement `PhotoTour.jsx` supporting overlay modal mode (`isOverlay={true}`) and standalone page route (`/photos`).
- Build sticky top header bar, sticky room category navigation pill bar (`Exterior`, `Living room`, etc.), and 2-column image cards.
- Integrate `useLockBodyScroll` and `useTrapFocus` for modal accessibility.

### Phase 5: Lightbox Single-Photo Viewer
- Implement full-screen dark modal overlay (`Lightbox.jsx`).
- Add index counter badge (`1 / 20`), previous/next navigation buttons with boundary disabled state handling, keyboard shortcuts (`ArrowLeft`, `ArrowRight`, `Escape`), and image preloading (`useImagePreloader.js`).

### Phase 6: Micro-Interactions & CSS Animations
- Add CSS keyframe animations (`heartPop`, `slideUp`, `scaleIn`) in `src/index.css`.
- Enhance wishlist heart button, share link clipboard toast, booking card inputs focus-within outline, and modal entrance transitions.

### Phase 7: Accessibility & Performance Optimization
- Perform full WCAG 2.1 AA accessibility audit (`ACCESSIBILITY.md`).
- Code-split `PhotoTour` and `Lightbox` overlays with `React.lazy()` and `Suspense` in `App.jsx`.

### Phase 8: QA & Production Delivery
- Perform visual QA audit across desktop resolutions (1280px, 1440px, 1600px, 1920px).
- Perform senior-engineer code review and clean up dead files.
- Generate complete documentation (`AI_WORKFLOW.md`, `ARCHITECTURE.md`, `SUBMISSION_CHECKLIST.md`, `.cursor/rules/project-rules.mdc`).

---

## 4. Completion & Verification Criteria

- [x] Desktop Listing Page matching reference layout.
- [x] 5-Image Hero Bento Grid with correct aspect ratios, corner radii, gaps, and floating button.
- [x] Reusable Full-Viewport Photo Tour View.
- [x] Reusable Lightbox Single-Photo Viewer.
- [x] 100% Keyboard Accessible & WCAG 2.1 AA Compliant.
- [x] Zero linting errors (`npm run lint`).
- [x] Zero compilation errors (`npm run build`).
