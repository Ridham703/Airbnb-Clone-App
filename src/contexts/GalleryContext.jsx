import { createContext, useState, useCallback } from "react";
import property from "../data/property";

/**
 * Gallery Context
 * Manages shared state for the photo gallery, photo tour, and lightbox viewer:
 * - Photo tour overlay state and category navigation
 * - Lightbox modal state, selected photo index, and pagination
 * - Photo list and save state
 */

const GalleryContext = createContext(null);

export const GalleryProvider = ({ children }) => {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
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

  /** Open Lightbox modal at a specific photo index */
  const openLightbox = useCallback(
    (index = 0) => {
      if (index >= 0 && index < totalPhotos) {
        setCurrentPhotoIndex(index);
        setIsLightboxOpen(true);
      }
    },
    [totalPhotos]
  );

  /** Close Lightbox modal */
  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  /** Navigate to next photo in Lightbox */
  const nextPhoto = useCallback(() => {
    setCurrentPhotoIndex((prev) => (prev < totalPhotos - 1 ? prev + 1 : prev));
  }, [totalPhotos]);

  /** Navigate to previous photo in Lightbox */
  const prevPhoto = useCallback(() => {
    setCurrentPhotoIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  /** Go directly to a specific photo index in Lightbox */
  const goToPhoto = useCallback(
    (index) => {
      if (index >= 0 && index < totalPhotos) {
        setCurrentPhotoIndex(index);
      }
    },
    [totalPhotos]
  );

  /** Toggle save/favorite state */
  const toggleSave = useCallback(() => {
    setIsSaved((prev) => !prev);
  }, []);

  const value = {
    // Data & Derived State
    photos,
    totalPhotos,
    currentPhotoIndex,
    currentPhoto: photos[currentPhotoIndex] || null,
    isFirstPhoto: currentPhotoIndex === 0,
    isLastPhoto: currentPhotoIndex === totalPhotos - 1,

    // Photo Tour Overlay State & Actions
    isPhotoTourOpen,
    activeCategory,
    openPhotoTour,
    closePhotoTour,
    setActiveCategory,

    // Lightbox Modal State & Actions
    isLightboxOpen,
    openLightbox,
    closeLightbox,
    nextPhoto,
    prevPhoto,
    goToPhoto,

    // Favorite/Save State
    isSaved,
    toggleSave,
  };

  return (
    <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
  );
};

export default GalleryContext;

