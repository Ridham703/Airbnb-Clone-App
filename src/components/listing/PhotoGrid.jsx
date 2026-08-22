import { Link } from "react-router-dom";
import { getGridImages } from "../../data/property";
import { ROUTES } from "../../utils/constants";
import { useGallery } from "../../contexts/useGallery";

/**
 * Airbnb 5-image Bento Grid Component.
 * - 1 large hero image on the left (50% width)
 * - 4 smaller images in a 2x2 grid on the right (50% width)
 * - Outer corners are rounded (12px)
 * - 8px gap between images
 * - "Show all photos" button positioned at bottom-right
 * - Hover darkens images with smooth transition and scale zoom
 * - Interactive elements use semantic <button> elements for complete keyboard accessibility
 * - Clicking hero image, side images, or "Show all photos" opens the full Photo Tour view
 */
const PhotoGrid = () => {
  const gridImages = getGridImages();
  const { openLightbox, openPhotoTour, totalPhotos } = useGallery();

  if (!gridImages || gridImages.length === 0) return null;

  const heroImage = gridImages[0];
  const sideImages = gridImages.slice(1, 5);

  return (
    <section aria-label="Property photo gallery" className="relative mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-xl overflow-hidden h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px]">
        {/* Large Hero Image (Left Column - 50% width) */}
        <button
          type="button"
          onClick={() => openLightbox(0)}
          className="relative w-full h-full overflow-hidden cursor-pointer group p-0 border-0 bg-transparent text-left rounded-xl md:rounded-r-none md:rounded-l-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:z-10"
          aria-label={`View photo 1 of ${totalPhotos}: ${heroImage.alt}`}
        >
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 group-focus-visible:bg-black/15 transition-colors duration-300 pointer-events-none" />
        </button>

        {/* 2x2 Sub-Grid (Right Column - 50% width) */}
        <div className="hidden md:grid grid-cols-2 gap-2 h-full">
          {sideImages.map((image, idx) => {
            const actualIndex = idx + 1;
            // Determine corner rounding for outer edges of the 2x2 grid
            let cornerClass = "";
            if (idx === 1) cornerClass = "md:rounded-tr-xl"; // Top right photo
            if (idx === 3) cornerClass = "md:rounded-br-xl"; // Bottom right photo

            return (
              <button
                key={image.id}
                type="button"
                onClick={() => openLightbox(actualIndex)}
                className={`relative w-full h-full overflow-hidden cursor-pointer group p-0 border-0 bg-transparent text-left ${cornerClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:z-10`}
                aria-label={`View photo ${actualIndex + 1} of ${totalPhotos}: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 group-focus-visible:bg-black/15 transition-colors duration-300 pointer-events-none" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Floating "Show all photos" Button at Bottom Right */}
      <Link
        to={ROUTES.PHOTOS}
        onClick={() => {
          openPhotoTour();
        }}
        className="absolute bottom-4 right-4 md:bottom-6 md:right-6 inline-flex items-center gap-2 bg-white text-text-primary 
          px-3.5 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold shadow-md border border-text-primary 
          hover:bg-bg-secondary hover:shadow-lg transition-all duration-200 active:scale-95 z-10 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        aria-label={`Show all ${totalPhotos} photos in photo tour`}
      >
        {/* 9-Dot / 3x3 Grid SVG Icon */}
        <svg
          viewBox="0 0 16 16"
          className="w-4 h-4 fill-current shrink-0"
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
