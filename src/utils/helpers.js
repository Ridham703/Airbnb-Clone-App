/**
 * Utility / helper functions.
 * Pure functions with no side effects — safe to use anywhere.
 */

/**
 * Format a price with currency symbol.
 * @param {number} amount
 * @param {string} symbol - e.g. "$"
 * @returns {string} e.g. "$450"
 */
export const formatPrice = (amount, symbol = "$") => {
  return `${symbol}${amount.toLocaleString()}`;
};

/**
 * Pluralize a word based on count.
 * @param {number} count
 * @param {string} singular
 * @param {string} [plural] - defaults to singular + "s"
 * @returns {string} e.g. "4 bedrooms"
 */
export const pluralize = (count, singular, plural) => {
  const word = count === 1 ? singular : (plural || `${singular}s`);
  return `${count} ${word}`;
};

/**
 * Generate a short summary of property capacity.
 * @param {object} listing
 * @returns {string} e.g. "8 guests · 4 bedrooms · 5 beds · 3 bathrooms"
 */
export const getCapacitySummary = (listing) => {
  const parts = [
    pluralize(listing.guests.max, "guest"),
    pluralize(listing.bedrooms, "bedroom"),
    pluralize(listing.beds, "bed"),
    pluralize(listing.bathrooms, "bathroom"),
  ];
  return parts.join(" · ");
};

/**
 * Clamp a number between min and max.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Generate a placeholder gradient for images that haven't loaded yet.
 * @param {number} index - used to vary the hue
 * @returns {string} CSS gradient string
 */
export const getPlaceholderGradient = (index = 0) => {
  const hue = (index * 47 + 200) % 360;
  return `linear-gradient(135deg, hsl(${hue}, 30%, 85%), hsl(${(hue + 40) % 360}, 25%, 75%))`;
};
