# Accessibility (a11y) Implementation Audit & Report

This document details the complete WCAG 2.1 AA accessibility features implemented in the **Airbnb Listing Clone** application.

---

## 1. Keyboard Navigation
- Every interactive element (buttons, links, photo grid cards, category tabs, dropdown triggers) is focusable in logical DOM order using the `Tab` and `Shift+Tab` keys.
- Action elements respond to `Enter` and `Space` key presses natively.
- Focus trapping prevents focus from escaping active modal overlays (`PhotoTour`, `Lightbox`, and `Modal`).

## 2. Visible Focus States
- Custom `:focus-visible` ring indicators (`focus-visible:ring-2 focus-visible:ring-black` or `focus-visible:ring-white`) are enforced across all controls.
- Outline offset (`focus-visible:ring-offset-2`) prevents focus rings from distorting UI borders.
- Focus states work seamlessly without visual layout shifts during scale/hover animations.

## 3. Button Semantics
- Replaced non-semantic clickable elements (`<div onClick>`) with native `<button type="button">`, `<a href="...">`, or React Router `<Link>`.
- All buttons include `type="button"` to prevent unintended form submissions.
- Interactive states feature explicit disabled attributes (`disabled` and `aria-disabled="true"`).

## 4. Image Alt Text
- All property photography features detailed, descriptive `alt` text describing room layout, lighting, view, and furnishings.
- Avatar images include descriptive alt tags (e.g. `Host Sarah`, `Michael`).
- Decorative SVG icons feature `aria-hidden="true"` to prevent redundant screen reader announcements.

## 5. ARIA Labels & Roles
- Interactive icon-only buttons include explicit `aria-label` attributes (e.g. `aria-label="Close photo viewer (Escape)"`, `aria-label="Previous photo (ArrowLeft)"`).
- Modals declare `role="dialog"`, `aria-modal="true"`, and `aria-label` / `aria-labelledby`.
- Navigation bars specify `aria-label="Main navigation"` and `aria-label="Room categories"`.

## 6. Modal Accessibility
- Generic `Modal` component enforces `role="dialog"`, `aria-modal="true"`, and `aria-label`.
- Background scroll locking (`useLockBodyScroll`) activates automatically when a modal opens.
- Focus is trapped inside the active modal overlay (`useTrapFocus`).
- Pressing `Escape` closes active modal windows and returns focus to the initiating control.

## 7. Lightbox Focus Management
- `Lightbox` single-photo viewer traps keyboard focus on open.
- The Close button receives initial focus when the Lightbox activates.
- Focus cycles smoothly between Close, Previous photo, Next photo, and photo stage without escaping to the underlying page.

## 8. Escape Key Behavior
- Pressing `Escape` instantly closes:
  * Lightbox single-photo viewer
  * Photo Tour full-viewport overlay
  * Amenities & host modals
  * User menu profile dropdown

## 9. Arrow Key Behavior
- In `Lightbox` single-photo viewer:
  * `ArrowLeft`: Navigates to previous image (`prevPhoto()`).
  * `ArrowRight`: Navigates to next image (`nextPhoto()`).
- Boundary safety: `ArrowLeft` is a no-op on the first image, and `ArrowRight` is a no-op on the last image.

## 10. Background Scroll Locking
- `useLockBodyScroll` hook dynamically toggles `body.scroll-locked` (`overflow: hidden`) whenever a modal, overlay, or lightbox is active.
- Cleans up scroll lock reliably upon modal unmount.

## 11. Heading Hierarchy
- Document outline follows a single `h1` per view:
  * Listing Page: `h1` ("Luxury Beachfront Villa with Infinity Pool")
  * Photo Tour Page: `h1` ("Photo tour")
- Section headings use logical `h2` elements (`What this place offers`, `Where you'll be`, `Hosted by Sarah`, `Guest reviews`).
- Subsections use `h3` elements (`Support`, `Hosting`, `Airbnb`, review author cards).
- Screen-reader-only utility headings (`<h2 className="sr-only">`) fill visual header gaps to ensure no heading levels are skipped.

## 12. Color Contrast
- Body text color (`#222222` on `#FFFFFF`) achieves **15.9:1** contrast ratio (exceeds WCAG AAA).
- Secondary text color (`#717171` on `#FFFFFF`) achieves **4.6:1** contrast ratio (meets WCAG AA).
- Primary brand accent (`#FF385C`) meets large text and UI contrast requirements.

## 13. Screen-Reader-Friendly Labels
- Dynamic counters (e.g. `1 / 20` photo indicator) declare `aria-live="polite"` for non-disruptive announcements.
- Status notifications (e.g. `Link copied to clipboard!`, `Reservation Sent!`) notify screen readers smoothly.
- Hidden decorative separators use `aria-hidden="true"`.
