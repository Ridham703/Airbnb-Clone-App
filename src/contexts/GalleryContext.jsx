import { createContext, useState, useCallback } from "react";
import property from "../data/property";

/**
 * Gallery Context
 * Manages shared state for the photo gallery and lightbox:
 * - Which photo is currently selected
 * - Whether the lightbox is open
 * - Navigation between photos
 */

const GalleryContext = createContext(null);

export const GalleryProvider = ({ children }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const photos = property.images;
  const totalPhotos = photos.length;

  /** Open lightbox at a specific photo index */
  const openLightbox = useCallback((index = 0) => {
    setCurrentPhotoIndex(index);
    setIsLightboxOpen(true);
  }, []);

  /** Close lightbox */
  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  /** Navigate to next photo */
  const nextPhoto = useCallback(() => {
    setCurrentPhotoIndex((prev) =>
      prev < totalPhotos - 1 ? prev + 1 : prev
    );
  }, [totalPhotos]);

  /** Navigate to previous photo */
  const prevPhoto = useCallback(() => {
    setCurrentPhotoIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  /** Go to a specific photo by index */
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
    // State
    photos,
    totalPhotos,
    currentPhotoIndex,
    isLightboxOpen,
    isSaved,
    currentPhoto: photos[currentPhotoIndex] || null,

    // Derived
    isFirstPhoto: currentPhotoIndex === 0,
    isLastPhoto: currentPhotoIndex === totalPhotos - 1,

    // Actions
    openLightbox,
    closeLightbox,
    nextPhoto,
    prevPhoto,
    goToPhoto,
    toggleSave,
  };

  return (
    <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
  );
};

export default GalleryContext;

