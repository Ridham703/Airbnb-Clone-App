import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { getImagesByCategory, getImageIndex } from "../../data/property";
import { useGallery } from "../../contexts/useGallery";

/**
 * Photo Tour View.
 * Full-page scrollable gallery of all listing photos grouped by room categories.
 * Clicking any photo opens the Lightbox modal view at that photo index.
 */
const PhotoTour = () => {
  const photosByCategory = getImagesByCategory();
  const { openLightbox } = useGallery();

  return (
    <div className="min-h-screen bg-white text-text-primary">
      {/* Fixed Sticky Header */}
      <header className="sticky top-0 z-[var(--z-sticky)] bg-white/90 backdrop-blur-md border-b border-border-light px-6 py-4">
        <div className="max-w-[var(--width-photo-tour)] mx-auto flex items-center justify-between">
          <Link
            to={ROUTES.LISTING}
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary 
              hover:bg-bg-secondary px-3 py-2 rounded-full transition-colors"
            aria-label="Back to listing details"
          >
            <svg viewBox="0 0 32 32" className="w-4 h-4" aria-hidden="true">
              <path d="M20 28L8.414 16.414a2 2 0 0 1 0-2.828L20 2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span>Back to listing</span>
          </Link>

          <span className="text-sm font-semibold text-text-secondary">
            Photo tour
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[var(--width-photo-tour)] mx-auto px-6 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">
          Photo tour
        </h1>

        {Object.entries(photosByCategory).map(([category, photos]) => {
          if (!photos || photos.length === 0) return null;

          return (
            <section key={category} className="mb-12" aria-label={`${category} gallery section`}>
              <h2 className="text-xl font-semibold text-text-primary mb-4 pb-2 border-b border-border-light">
                {category}
              </h2>

              <div className="space-y-6">
                {photos.map((photo) => {
                  const globalIdx = getImageIndex(photo.id);

                  return (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => openLightbox(globalIdx)}
                      className="group relative w-full text-left p-0 border-0 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 bg-bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                      aria-label={`Open photo viewer for photo ${globalIdx + 1}: ${photo.alt}`}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-auto object-cover max-h-[600px] group-hover:scale-[1.01] transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                      </div>
                      <p className="p-3 text-xs text-text-secondary bg-white border-t border-border-light">
                        {photo.alt}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default PhotoTour;
