# AI-Assisted Development Workflow Report

This document transparently details the **AI-assisted development process** used to build the **Airbnb Listing Clone** web application.

> **Note on Implementation Independence**:
> The application source code was written independently from scratch using React 19, Vite, Tailwind CSS, and standard Web APIs. The assignment reference was utilized strictly as the visual and behavioral specification target. No third-party template code or reference source code was copied.

---

## Stage-by-Stage Workflow Breakdown

### 1. Project Planning
- **Objective**: Establish the foundation of the project, including design tokens, route constants, and a centralized property data schema (`property.js`) as the single source of truth.
- **AI Prompt Used**:
  > *"Set up centralized property data for the Airbnb listing clone in property.js as the SINGLE SOURCE OF TRUTH. Define design tokens in index.css for colors, radii, shadows, and z-indices."*
- **What the AI Generated**:
  - `src/data/property.js` containing curated Unsplash photography, host metadata, room categories, pricing, amenities, and helper utilities.
  - Tailwind CSS `@theme` tokens in `src/index.css`.
- **What Was Reviewed Manually**:
  - Verified completeness of photo metadata (20 high-resolution photos categorized by room type).
  - Checked pricing calculation functions (`calculateTotal`, `formatPrice`).
- **What Was Changed After Review**:
  - Refined helper functions `getGridImages()` and `getImagesByCategory()` to return immutable subsets.

---

### 2. Architecture Planning
- **Objective**: Design state management and component boundaries using React Context and modular custom hooks.
- **AI Prompt Used**:
  > *"Design global GalleryContext and custom hooks for lock body scroll, focus trapping, and keyboard navigation to manage photo gallery, photo tour, and lightbox modal states."*
- **What the AI Generated**:
  - `GalleryContext.jsx` and `useGallery.js` context provider.
  - Custom hooks: `useLockBodyScroll.js`, `useTrapFocus.js`, `useKeyboardNavigation.js`, and `useImagePreloader.js`.
- **What Was Reviewed Manually**:
  - Checked that hooks adhere to React 19 rules and handle event listener cleanup properly.
- **What Was Changed After Review**:
  - Unified modal state management inside `GalleryContext` so both full-viewport `PhotoTour` and single-photo `Lightbox` share unified photo data.

---

### 3. Component Generation
- **Objective**: Create reusable, atomic UI primitives for shared elements.
- **AI Prompt Used**:
  > *"Create reusable shared UI components for Button, IconButton, Avatar, StarRating, and Modal with Tailwind styling and accessibility props."*
- **What the AI Generated**:
  - `src/components/shared/Button.jsx`
  - `src/components/shared/IconButton.jsx`
  - `src/components/shared/Avatar.jsx`
  - `src/components/shared/StarRating.jsx`
  - `src/components/shared/Modal.jsx`
- **What Was Reviewed Manually**:
  - Evaluated button variant styling, size options, and focus state accessibility.
- **What Was Changed After Review**:
  - Standardized `:focus-visible:ring-2 focus-visible:ring-black` rings across all interactive primitives.

---

### 4. Listing Page Implementation
- **Objective**: Build the core desktop listing page layout featuring title header, main bento photo grid, details column, and sticky booking sidebar.
- **AI Prompt Used**:
  > *"Construct the desktop listing page layout with 2-column grid: left details column (PropertyOverview, Highlights, Description, Amenities, Reviews, Location, Host) and right sticky BookingCard."*
- **What the AI Generated**:
  - `src/components/listing/ListingPage.jsx`
  - Sub-components: `PropertyHeader.jsx`, `PropertyOverview.jsx`, `ListingHighlights.jsx`, `ListingDescription.jsx`, `AmenitiesList.jsx`, `LocationMap.jsx`, `HostSection.jsx`, and `BookingCard.jsx`.
- **What Was Reviewed Manually**:
  - Verified 2-column grid ratio (`1fr` / `370px`) and section spacing (`py-8 border-b`).
- **What Was Changed After Review**:
  - Refined sticky offset positioning on `BookingCard` to scroll smoothly alongside the main details column.

---

### 5. Gallery Implementation (Photo Grid)
- **Objective**: Recreate the desktop 5-image bento photo grid matching reference layout, corner radii, image gaps, and object-fit cropping.
- **AI Prompt Used**:
  > *"Now focus specifically on the property photo grid. Requirements: Match reference image arrangement, correct aspect ratios, border radius (12px), gaps (8px), object-fit cropping, show 5 images, add Show all photos button at bottom-right, hero image clickable, keyboard accessible."*
- **What the AI Generated**:
  - `src/components/listing/PhotoGrid.jsx` with 1 large Hero image on the left (50%) and 4 sub-images in a 2x2 grid on the right (50%).
- **What Was Reviewed Manually**:
  - Verified image cropping (`object-cover`), 8px grid gaps, 12px outer corner radius, and floating button placement.
- **What Was Changed After Review**:
  - Replaced `div role="button"` elements with semantic `<button type="button">` tags and explicit corner radius utility classes (`md:rounded-l-xl`, `md:rounded-tr-xl`, `md:rounded-br-xl`).

---

### 6. Photo Tour Implementation
- **Objective**: Develop a reusable full-viewport Photo Tour view with sticky header, room category thumbnail bar, and background scroll locking.
- **AI Prompt Used**:
  > *"Implement the Photo Tour view. Behavior: Clicking 'Show all photos' opens Photo Tour, clicking hero image opens photo experience, occupies full viewport, room categories nav bar, close control, prevent background scroll, keyboard accessible. Create reusable PhotoTour component."*
- **What the AI Generated**:
  - `src/components/gallery/PhotoTour.jsx` supporting both overlay modal mode (`isOverlay={true}`) and standalone page route (`/photos`).
- **What Was Reviewed Manually**:
  - Verified full-screen fixed positioning (`fixed inset-0 z-50`), sticky category tabs bar, and scroll locking.
- **What Was Changed After Review**:
  - Resolved a `react-hooks/set-state-in-effect` linting error by deriving the active category dynamically instead of setting state inside an effect.

---

### 7. Lightbox Implementation
- **Objective**: Create a single-photo viewer modal with previous/next controls, image counter, keyboard shortcuts, and boundary handling.
- **AI Prompt Used**:
  > *"Implement the Lightbox / single-photo viewer. Requirements: Open when gallery image clicked, display one large image, previous button, next button, image index counter, close button, ArrowLeft, ArrowRight, Escape, boundary handling on first/last image, smooth transitions, prevent body scroll, trap focus."*
- **What the AI Generated**:
  - `src/components/lightbox/Lightbox.jsx` with dark backdrop (`bg-black/95`), image preloading (`useImagePreloader`), and keyboard navigation (`useKeyboardNavigation`).
- **What Was Reviewed Manually**:
  - Checked boundary behavior: disabled buttons (`disabled` & `aria-disabled="true"`) on first and last photos.
- **What Was Changed After Review**:
  - Updated preloader to handle `.src` property correctly and added explicit focus ring styling to navigation arrows.

---

### 8. Accessibility Implementation
- **Objective**: Conduct a full WCAG 2.1 AA accessibility audit and fix all keyboard, focus, ARIA, and contrast issues.
- **AI Prompt Used**:
  > *"Perform a complete accessibility audit of the current application. Check keyboard navigation, focus states, button semantics, image alt text, aria-labels, modal accessibility, escape key, arrow keys, scroll locking, heading hierarchy, contrast. Fix all issues. Create ACCESSIBILITY.md."*
- **What the AI Generated**:
  - Added screen-reader utility headings (`<h2 className="sr-only">`), ARIA attributes (`aria-live="polite"`, `aria-expanded`), focus rings, and generated `ACCESSIBILITY.md`.
- **What Was Reviewed Manually**:
  - Verified document outline (`h1` -> `h2` -> `h3`), tab order, screen reader announcements, and high contrast colors.
- **What Was Changed After Review**:
  - Confirmed all controls use native button semantics with zero keyboard navigation traps.

---

### 9. Visual QA
- **Objective**: Perform a visual QA audit comparing implementation metrics against reference specifications.
- **AI Prompt Used**:
  > *"Act as a senior UI visual QA engineer. Compare our implementation against assignment reference for overall page width, header height, margins, padding, image dimensions, typography, colors, shadows, booking card positioning..."*
- **What the AI Generated**:
  - Structured visual QA matrix evaluation report.
- **What Was Reviewed Manually**:
  - Audited container centering (`1120px` max-width), booking card sticky top offset (`top-28`), and bento grid height.
- **What Was Changed After Review**:
  - Removed duplicate outer `sticky top-28` wrapper in `ListingPage.jsx` to clean up sticky sidebar scrolling.

---

### 10. Performance Optimization
- **Objective**: Optimize application bundle size, image preloading, and component rendering without changing visual output.
- **AI Prompt Used**:
  > *"Review the project as a production frontend engineer. Optimize without changing visual result. Check re-renders, image loading, dependencies, bundle size, lazy loading..."*
- **What the AI Generated**:
  - Implemented dynamic code-splitting using `React.lazy` and `Suspense` for `PhotoTour` and `Lightbox` overlays in `App.jsx`.
- **What Was Reviewed Manually**:
  - Inspected Vite build output chunks to verify bundle splitting.
- **What Was Changed After Review**:
  - Verified that modal overlays are split into lightweight async chunks (`3.83 kB` Lightbox chunk, `5.44 kB` PhotoTour chunk), keeping the initial entry bundle minimal.

---

### 11. Debugging
- **Objective**: Identify and resolve syntax errors, linter warnings, and shell compatibility issues during development.
- **AI Tooling Used**:
  - `run_command` terminal tool for running `npm run lint` and `npm run build`.
- **Issues Handled**:
  - **PowerShell syntax**: Replaced `&&` chaining with `;` for PowerShell compatibility (`git add . ; git commit ...`).
  - **ESLint React Hooks rule**: Refactored `PhotoTour.jsx` effect state initialization to eliminate cascading re-renders.
  - **Path validation**: Corrected artifact path arguments when writing files.

---

### 12. Final Review
- **Objective**: Conduct final verification of application build stability, documentation accuracy, and automated Git repository pushes.
- **AI Prompt Used**:
  > *"Create AI_WORKFLOW.md documenting actual AI-assisted development process..."*
- **What Was Executed**:
  - Verified `npm run build` passes with **0 errors**.
  - Verified `eslint .` passes with **0 errors**.
  - Verified automatic Git commits and pushes (`git add . ; git commit -m "..." ; git push`) after completing each development step.

---

## Summary of Automated Git Commits
1. `09b0aa1`: `feat: implement accessible desktop bento photo grid and photo tour buttons`
2. `e54b8c6`: `docs: add workspace AGENTS.md rule for automated git commit and push`
3. `4e5d96e`: `feat: implement reusable full-viewport PhotoTour view with category nav and scroll lock`
4. `e04721b`: `feat: implement accessible reusable Lightbox single-photo viewer`
5. `a35319f`: `style: audit and polish all UI micro-interactions, transitions, and focus rings`
6. `ae6c59c`: `docs: complete accessibility audit and create ACCESSIBILITY.md report`
7. `c861a85`: `style: visual QA audit refinements for listing page layout and sticky positioning`
8. `f33178f`: `fix: desktop layout stress test optimizations for 1280px-1920px viewports`
9. `d4e0b9d`: `perf: code-split PhotoTour and Lightbox overlay modals with React.lazy and Suspense`
