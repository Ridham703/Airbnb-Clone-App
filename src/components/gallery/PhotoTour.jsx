import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES, KEYS } from "../../utils/constants";
import { getImagesByCategory, getActiveCategories, getImageIndex } from "../../data/property";
import { useGallery } from "../../contexts/useGallery";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import useTrapFocus from "../../hooks/useTrapFocus";

/**
 * Reusable Photo Tour Component.
 * - Full-viewport gallery view displaying all property photos organized by room categories.
 * - Sticky header featuring a clear close/back control and photo count summary.
 * - Category navigation bar with room pills for smooth scrolling to specific photo sections.
 * - Prevents background scrolling when open as an overlay modal.
 * - Accessible keyboard navigation with focus trapping and Escape key handler.
 */
const PhotoTour = ({ isOverlay = false, onClose = null }) => {
  const { isPhotoTourOpen, closePhotoTour, openLightbox, activeCategory, setActiveCategory, totalPhotos } = useGallery();
  const photosByCategory = getImagesByCategory();
  const categories = getActiveCategories();
  const navigate = useNavigate();

  const isOpen = isOverlay ? isPhotoTourOpen : true;

  // Lock body scroll when overlay is open
  useLockBodyScroll(isOpen);

  // Trap focus for keyboard navigation inside overlay
  const trapRef = useTrapFocus(isOpen && isOverlay);

  const [selectedCat, setSelectedCat] = useState(categories[0] || "All");

  // Determine effective category to highlight, preferring activeCategory from context if set
  const effectiveCat = activeCategory || selectedCat;

  // Handle Escape key press to close overlay/view
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === KEYS.ESCAPE || e.key === "Escape") {
        if (onClose) {
          onClose();
        } else if (isOverlay) {
          closePhotoTour();
        } else {
          navigate(ROUTES.LISTING);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isOverlay, onClose, closePhotoTour, navigate]);

  // Scroll smoothly to chosen room category section
  const handleSelectCategory = (cat) => {
    setSelectedCat(cat);
    setActiveCategory(cat);
    const elementId = `category-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCloseControl = () => {
    if (onClose) {
      onClose();
    } else if (isOverlay) {
      closePhotoTour();
    } else {
      navigate(ROUTES.LISTING);
    }
  };

  if (isOverlay && !isPhotoTourOpen) return null;

  const containerClasses = isOverlay
    ? "fixed inset-0 z-[var(--z-overlay)] bg-white text-text-primary flex flex-col w-screen h-screen overflow-hidden animate-[fadeIn_200ms_ease]"
    : "min-h-screen bg-white text-text-primary flex flex-col";

  return (
    <div
      ref={trapRef}
      className={containerClasses}
      role={isOverlay ? "dialog" : "region"}
      aria-modal={isOverlay ? "true" : undefined}
      aria-label="Photo tour gallery view"
    >
      {/* Sticky Top Header Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-border-light px-4 sm:px-8 py-3 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          {isOverlay ? (
            <button
              type="button"
              onClick={handleCloseControl}
              className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary hover:bg-bg-secondary px-3.5 py-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label="Close photo tour (Escape)"
            >
              <svg viewBox="0 0 32 32" className="w-4 h-4 fill-none stroke-current stroke-[3]" aria-hidden="true">
                <path d="M6 6l20 20M26 6L6 26" />
              </svg>
              <span>Close</span>
            </button>
          ) : (
            <Link
              to={ROUTES.LISTING}
              className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary hover:bg-bg-secondary px-3.5 py-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label="Back to listing details"
            >
              <svg viewBox="0 0 32 32" className="w-4 h-4 fill-none stroke-current stroke-[3]" aria-hidden="true">
                <path d="M20 28L8.414 16.414a2 2 0 0 1 0-2.828L20 2" />
              </svg>
              <span>Back to listing</span>
            </Link>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm font-semibold text-text-secondary">
            {totalPhotos} photos
          </span>
        </div>
      </header>

      {/* Sticky Room Category Navigation Bar */}
      <nav
        aria-label="Room categories"
        className="sticky top-[57px] z-20 bg-white border-b border-border-light px-4 sm:px-8 py-2.5 overflow-x-auto no-scrollbar scroll-smooth"
      >
        <div className="max-w-[var(--width-photo-tour)] mx-auto flex items-center gap-2">
          {categories.map((cat) => {
            const count = photosByCategory[cat]?.length || 0;
            const isSelected = effectiveCat === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleSelectCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                  isSelected
                    ? "bg-text-primary text-white font-semibold shadow-xs"
                    : "bg-bg-secondary text-text-secondary hover:text-text-primary hover:bg-gray-200"
                }`}
                aria-current={isSelected ? "true" : undefined}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content Gallery Area */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-8">
        <div className="max-w-[var(--width-photo-tour)] mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 tracking-tight">
            Photo tour
          </h1>

          {Object.entries(photosByCategory).map(([category, photos]) => {
            if (!photos || photos.length === 0) return null;

            const categoryId = `category-${category.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;

            return (
              <section
                key={category}
                id={categoryId}
                className="mb-12 scroll-mt-28"
                aria-labelledby={`${categoryId}-title`}
              >
                <div className="flex items-baseline justify-between mb-4 pb-2 border-b border-border-light">
                  <h2
                    id={`${categoryId}-title`}
                    className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight"
                  >
                    {category}
                  </h2>
                  <span className="text-xs sm:text-sm font-medium text-text-secondary">
                    {photos.length} {photos.length === 1 ? "photo" : "photos"}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {photos.map((photo, idx) => {
                    const globalIdx = getImageIndex(photo.id);

                    return (
                      <button
                        key={photo.id}
                        type="button"
                        onClick={() => openLightbox(globalIdx)}
                        className="group relative w-full text-left p-0 border border-border-light/60 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 bg-bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 flex flex-col"
                        aria-label={`Open photo viewer for photo ${globalIdx + 1}: ${photo.alt}`}
                      >
                        <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 w-full">
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                            loading={idx < 4 ? "eager" : "lazy"}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                        </div>
                        <p className="p-3 text-xs sm:text-sm text-text-secondary bg-white border-t border-border-light font-medium w-full">
                          {photo.alt}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default PhotoTour;
