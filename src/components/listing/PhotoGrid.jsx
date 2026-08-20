import { Link } from "react-router-dom";
import { getGridImages } from "../../data/property";
import { ROUTES } from "../../utils/constants";
import { useGallery } from "../../contexts/useGallery";

/**
 * Airbnb 5-image Bento Grid Component.
 * - 1 large hero image on the left (50% width)
 * - 4 smaller images in a 2x2 grid on the right (50% width)
 * - Outer corners are rounded (12px)
 * - "Show all photos" button positioned at bottom-right
 * - Hover darkens images with smooth transition
 * - Clicking any image opens Lightbox at that image index
 */
const PhotoGrid = () => {
  const gridImages = getGridImages();
  const { openLightbox } = useGallery();

  if (!gridImages || gridImages.length === 0) return null;

  const heroImage = gridImages[0];
  const sideImages = gridImages.slice(1, 5);

  return (
    <section aria-label="Property photo grid" className="relative mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-xl overflow-hidden h-[360px] md:h-[440px]">
        {/* Large Hero Image (Left) */}
        <div
          className="relative h-full overflow-hidden cursor-pointer group"
          onClick={() => openLightbox(0)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
          aria-label={`View full photo: ${heroImage.alt}`}
        >
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-90"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        {/* 2x2 Grid (Right) */}
        <div className="grid grid-cols-2 gap-2 h-full">
          {sideImages.map((image, idx) => {
            const actualIndex = idx + 1;
            return (
              <div
                key={image.id}
                className="relative h-full overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(actualIndex)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(actualIndex)}
                aria-label={`View photo ${actualIndex + 1}: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating "Show all photos" Button at Bottom Right */}
      <Link
        to={ROUTES.PHOTOS}
        className="absolute bottom-6 right-6 inline-flex items-center gap-2 bg-white text-text-primary 
          px-4 py-2 rounded-lg text-sm font-semibold shadow-card border border-text-primary 
          hover:bg-bg-secondary hover:shadow-card-hover transition-all duration-200 active:scale-95 z-10"
        aria-label="Show all photos in photo tour"
      >
        {/* 3x3 Grid Icon */}
        <svg
          viewBox="0 0 16 16"
          className="w-4 h-4 fill-current"
          aria-hidden="true"
        >
          <path d="M3 3h3v3H3zm5 0h3v3H8zm5 0h3v3h-3zM3 8h3v3H3zm5 0h3v3H8zm5 0h3v3h-3zM3 13h3v3H3zm5 0h3v3H8zm5 0h3v3h-3z" />
        </svg>
        <span>Show all photos</span>
      </Link>
    </section>
  );
};

export default PhotoGrid;
