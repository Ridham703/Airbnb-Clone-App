import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import useTrapFocus from "../../hooks/useTrapFocus";
import useImagePreloader from "../../hooks/useImagePreloader";
import IconButton from "../shared/IconButton";
import { useGallery } from "../../contexts/useGallery";

/**
 * Accessible Lightbox Modal View.
 * Full-screen dark overlay for viewing individual photos in high resolution.
 * - Keyboard navigation (Left/Right arrows, Escape)
 * - Traps focus for accessibility
 * - Locks body scroll
 * - Preloads adjacent images for seamless navigation
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

  useLockBodyScroll(isLightboxOpen);
  const trapRef = useTrapFocus(isLightboxOpen);
  useImagePreloader(photos, currentPhotoIndex, 2);

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
      aria-label="Photo Lightbox viewer"
    >
      {/* Lightbox Header: Close Button & Counter */}
      <header className="flex items-center justify-between z-10">
        <IconButton
          onClick={closeLightbox}
          ariaLabel="Close photo viewer (Escape)"
          size="lg"
          className="text-white hover:bg-white/10"
        >
          <svg viewBox="0 0 32 32" className="w-5 h-5 fill-none stroke-current stroke-[3]">
            <path d="M6 6l20 20M26 6L6 26" />
          </svg>
        </IconButton>

        <span
          className="text-sm font-medium tracking-wide bg-white/10 px-4 py-1.5 rounded-full"
          aria-live="polite"
        >
          {currentPhotoIndex + 1} / {totalPhotos}
        </span>
      </header>

      {/* Main Image Stage */}
      <main className="relative flex-1 flex items-center justify-center my-4 overflow-hidden select-none">
        {/* Left Nav Arrow Button */}
        {!isFirstPhoto && (
          <button
            type="button"
            onClick={prevPhoto}
            aria-label="Previous photo (Left Arrow)"
            className="absolute left-2 md:left-6 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 active:scale-90"
          >
            <svg viewBox="0 0 32 32" className="w-6 h-6 fill-none stroke-current stroke-[3]">
              <path d="M20 28L8.414 16.414a2 2 0 0 1 0-2.828L20 2" />
            </svg>
          </button>
        )}

        {/* Displayed Image */}
        <div className="max-w-full max-h-full flex items-center justify-center p-2">
          <img
            key={currentPhoto.id}
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className="max-h-[78vh] max-w-[88vw] object-contain rounded-lg shadow-2xl transition-all duration-300 animate-[scaleIn_200ms_ease]"
          />
        </div>

        {/* Right Nav Arrow Button */}
        {!isLastPhoto && (
          <button
            type="button"
            onClick={nextPhoto}
            aria-label="Next photo (Right Arrow)"
            className="absolute right-2 md:right-6 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 active:scale-90"
          >
            <svg viewBox="0 0 32 32" className="w-6 h-6 fill-none stroke-current stroke-[3]">
              <path d="M12 4l11.586 11.586a2 2 0 0 1 0 2.828L12 30" />
            </svg>
          </button>
        )}
      </main>

      {/* Lightbox Footer Caption */}
      <footer className="text-center text-xs md:text-sm text-gray-300 max-w-2xl mx-auto truncate px-4">
        {currentPhoto.alt}
      </footer>
    </div>
  );
};

export default Lightbox;
