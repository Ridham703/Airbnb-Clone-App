/**
 * Application-wide constants.
 * Centralized to avoid magic numbers and strings throughout the codebase.
 */

// Z-Index scale (matches CSS custom properties in index.css)
export const Z_INDEX = {
  STICKY: 100,
  OVERLAY: 200,
  MODAL: 300,
  LIGHTBOX: 400,
  TOOLTIP: 500,
};

// Animation durations in ms (matches CSS custom properties)
export const DURATION = {
  FAST: 150,
  NORMAL: 250,
  SLOW: 350,
};

// Keyboard key codes for event handling
export const KEYS = {
  ESCAPE: "Escape",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ENTER: "Enter",
  SPACE: " ",
  TAB: "Tab",
};

// Route paths
export const ROUTES = {
  LISTING: "/",
  PHOTOS: "/photos",
};

// Layout breakpoints (desktop-first, min-widths)
export const BREAKPOINTS = {
  DESKTOP_SM: 1024,
  DESKTOP_MD: 1280,
  DESKTOP_LG: 1440,
  DESKTOP_XL: 1920,
};

// Photo grid configuration
export const PHOTO_GRID = {
  DISPLAY_COUNT: 5, // Number of photos shown in the hero grid
  HERO_INDEX: 0,    // Index of the large hero image
};
