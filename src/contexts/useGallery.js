import { useContext } from "react";
import GalleryContext from "./GalleryContext";

/**
 * Custom hook to consume gallery context.
 * Separated from GalleryContext.jsx to satisfy react-refresh/only-export-components.
 * Throws if used outside GalleryProvider.
 */
export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
};
