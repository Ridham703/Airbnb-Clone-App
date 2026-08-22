import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import useTrapFocus from "../../hooks/useTrapFocus";
import useImagePreloader from "../../hooks/useImagePreloader";
import IconButton from "../shared/IconButton";
import { useGallery } from "../../contexts/useGallery";

/**
 * Reusable Accessible Lightbox Modal View.
 * Full-screen dark overlay for viewing individual photos in high resolution.
 * - Displays single large image with high clarity
 * - Previous/Next controls with boundary disabled states
 * - Current image index counter (e.g. 1 / 20)
 * - Keyboard navigation (ArrowLeft, ArrowRight, Escape)
 * - Focus trapping and body scroll locking while open
 * - Preloads adjacent images for instant transition rendering
 */
const Lightbox = () => {
  const {
    isLightboxOpen,
    closeLightbox,
    currentPhoto,
    currentPhotoIndex,
    totalPhotos,
    nextPhoto,
    prevPhoto,
    isFirstPhoto,
    isLastPhoto,
    photos,
  } = useGallery();

  // Lock body scroll while Lightbox is active
  useLockBodyScroll(isLightboxOpen);

  // Trap focus inside Lightbox overlay
  const trapRef = useTrapFocus(isLightboxOpen);

  // Preload adjacent photos for smooth navigation
  useImagePreloader(photos, currentPhotoIndex, 2);

  // Keyboard navigation hook for ArrowLeft, ArrowRight, and Escape
  useKeyboardNavigation({
    onNext: nextPhoto,
    onPrev: prevPhoto,
    onClose: closeLightbox,
    enabled: isLightboxOpen,
  });

  if (!isLightboxOpen || !currentPhoto) return null;

  return (
    <div
      ref={trapRef}
      className="fixed inset-0 z-[var(--z-lightbox)] bg-black/95 text-white flex flex-col justify-between p-4 md:p-6 animate-[fadeIn_200ms_ease]"
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox single-photo viewer"
    >
      {/* Lightbox Header: Close Button & Image Counter */}
      <header className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto">
        <IconButton
          onClick={closeLightbox}
          ariaLabel="Close photo viewer (Escape)"
          size="lg"
          className="text-white hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white"
        >
          <svg viewBox="0 0 32 32" className="w-5 h-5 fill-none stroke-current stroke-[3]" aria-hidden="true">
            <path d="M6 6l20 20M26 6L6 26" />
          </svg>
        </IconButton>

        <span
          className="text-xs sm:text-sm font-semibold tracking-wide bg-white/10 border border-white/20 px-4 py-1.5 rounded-full"
          aria-live="polite"
        >
          {currentPhotoIndex + 1} / {totalPhotos}
        </span>
      </header>

      {/* Main Image Stage */}
      <main className="relative flex-1 flex items-center justify-center my-4 overflow-hidden select-none">
        {/* Previous Image Button */}
        <button
          type="button"
          onClick={prevPhoto}
          disabled={isFirstPhoto}
          aria-disabled={isFirstPhoto}
          aria-label="Previous photo (ArrowLeft)"
          className={`absolute left-2 md:left-6 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
            isFirstPhoto
              ? "bg-white/5 text-white/30 cursor-not-allowed border border-white/10"
              : "bg-white/15 hover:bg-white/30 text-white cursor-pointer active:scale-95 border border-white/20 shadow-md"
          }`}
        >
          <svg viewBox="0 0 32 32" className="w-6 h-6 fill-none stroke-current stroke-[3]" aria-hidden="true">
            <path d="M20 28L8.414 16.414a2 2 0 0 1 0-2.828L20 2" />
          </svg>
        </button>

        {/* Currently Displayed Photo */}
        <div className="max-w-full max-h-full flex items-center justify-center p-2">
          <img
            key={currentPhoto.id}
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className="max-h-[76vh] max-w-[86vw] object-contain rounded-lg shadow-2xl transition-all duration-300 animate-[scaleIn_200ms_ease]"
          />
        </div>

        {/* Next Image Button */}
        <button
          type="button"
          onClick={nextPhoto}
          disabled={isLastPhoto}
          aria-disabled={isLastPhoto}
          aria-label="Next photo (ArrowRight)"
          className={`absolute right-2 md:right-6 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
            isLastPhoto
              ? "bg-white/5 text-white/30 cursor-not-allowed border border-white/10"
              : "bg-white/15 hover:bg-white/30 text-white cursor-pointer active:scale-95 border border-white/20 shadow-md"
          }`}
        >
          <svg viewBox="0 0 32 32" className="w-6 h-6 fill-none stroke-current stroke-[3]" aria-hidden="true">
            <path d="M12 4l11.586 11.586a2 2 0 0 1 0 2.828L12 30" />
          </svg>
        </button>
      </main>

      {/* Lightbox Footer Caption */}
      <footer className="text-center text-xs md:text-sm text-gray-300 max-w-2xl mx-auto truncate px-4 py-1">
        {currentPhoto.alt}
      </footer>
    </div>
  );
};

export default Lightbox;
