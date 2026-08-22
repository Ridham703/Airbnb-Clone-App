import { createContext, useState, useCallback } from "react";
import property from "../data/property";

/**
 * Gallery Context
 * Manages shared state for the photo gallery and photo tour:
 * - Whether the Photo Tour overlay is open
 * - Active room category filter
 * - Photo list and save state
 */

const GalleryContext = createContext(null);

export const GalleryProvider = ({ children }) => {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const photos = property.images;
  const totalPhotos = photos.length;

  /** Open Photo Tour overlay, optionally scrolling to a specific category */
  const openPhotoTour = useCallback((category = null) => {
    setActiveCategory(category);
    setIsPhotoTourOpen(true);
  }, []);

  /** Close Photo Tour overlay */
  const closePhotoTour = useCallback(() => {
    setIsPhotoTourOpen(false);
    setActiveCategory(null);
  }, []);

  /** Toggle save/favorite state */
  const toggleSave = useCallback(() => {
    setIsSaved((prev) => !prev);
  }, []);

  const value = {
    // State
    photos,
    totalPhotos,
    isPhotoTourOpen,
    activeCategory,
    isSaved,

    // Actions
    openPhotoTour,
    closePhotoTour,
    setActiveCategory,
    toggleSave,
  };

  return (
    <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
  );
};

export default GalleryContext;

