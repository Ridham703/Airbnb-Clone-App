import { useEffect } from "react";

/**
 * Hook to preload images adjacent to the current index.
 * Ensures smooth transitions in the lightbox by loading
 * next and previous images before they're needed.
 *
 * @param {Array} images - Array of image objects with `url` property
 * @param {number} currentIndex - Currently displayed image index
 * @param {number} [preloadCount=1] - Number of images to preload in each direction
 */
const useImagePreloader = (images, currentIndex, preloadCount = 1) => {
  useEffect(() => {
    if (!images || images.length === 0) return;

    const preloadIndices = [];

    for (let i = 1; i <= preloadCount; i++) {
      const nextIdx = currentIndex + i;
      const prevIdx = currentIndex - i;

      if (nextIdx < images.length) preloadIndices.push(nextIdx);
      if (prevIdx >= 0) preloadIndices.push(prevIdx);
    }

    const preloadedImages = preloadIndices
      .filter((idx) => images[idx]?.url)
      .map((idx) => {
        const img = new Image();
        img.src = images[idx].url;
        return img;
      });

    // Cleanup: no explicit teardown needed for Image objects,
    // but we hold references to prevent garbage collection during load
    return () => {
      preloadedImages.length = 0;
    };
  }, [images, currentIndex, preloadCount]);
};

export default useImagePreloader;
