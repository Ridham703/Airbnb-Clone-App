import { useState } from "react";
import property from "../../data/property";
import StarRating from "../shared/StarRating";

/**
 * PropertyHeader Component.
 * Displays title, rating, review count, location, and Share/Save actions.
 */
const PropertyHeader = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }
  };

  return (
    <header className="pt-6 pb-2">
      {/* Title */}
      <h1 className="text-[26px] font-semibold text-text-primary leading-tight tracking-tight">
        {property.title}
      </h1>

      {/* Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-1 text-sm text-text-primary">
        {/* Rating & Location */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <StarRating rating={property.rating} reviewCount={property.reviewCount} />
          <span aria-hidden="true">·</span>
          {property.host.isSuperhost && (
            <>
              <span className="flex items-center gap-1 font-semibold">
                <svg viewBox="0 0 32 32" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M16 1l4.472 8.791 9.718 1.488-7.005 6.897 1.624 9.697L16 23.361l-8.809 4.512 1.624-9.697-7.005-6.897 9.718-1.488z" />
                </svg>
                Superhost
              </span>
              <span aria-hidden="true">·</span>
            </>
          )}
          <a
            href="#location-section"
            className="underline font-semibold hover:text-text-secondary transition-colors"
          >
            {property.location.neighborhood}, {property.location.city}, {property.location.country}
          </a>
        </div>

        {/* Share / Save Actions */}
        <div className="flex items-center gap-2 relative">
          {/* Share Button */}
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-bg-secondary transition-all duration-200 underline font-semibold text-sm cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            aria-label="Share listing link"
          >
            <svg viewBox="0 0 32 32" className="w-4 h-4 fill-none stroke-current stroke-[2.5]" aria-hidden="true">
              <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v19M9 10l7-7 7 7" />
            </svg>
            <span>Share</span>
          </button>

          {/* Share Toast Notification */}
          {showToast && (
            <div className="absolute top-10 right-16 bg-text-primary text-white text-xs font-medium px-3.5 py-2 rounded-lg shadow-lg z-20 whitespace-nowrap animate-[slideUp_200ms_ease-out]">
              Link copied to clipboard!
            </div>
          )}

          {/* Save / Favorite Button */}
          <button
            type="button"
            onClick={() => setIsSaved((prev) => !prev)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-bg-secondary transition-all duration-200 underline font-semibold text-sm cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
          >
            <svg
              viewBox="0 0 32 32"
              className={`w-4 h-4 transition-all duration-300 ${
                isSaved
                  ? "fill-airbnb-rausch stroke-airbnb-rausch animate-[heartPop_300ms_ease-in-out]"
                  : "fill-none stroke-current stroke-[2.5]"
              }`}
              aria-hidden="true"
            >
              <path d="M16 28c7-4.733 14-10 14-17 0-4.418-3.582-8-8-8-2.8 0-5.3 1.5-6.6 3.8C14.1 4.5 11.6 3 8.8 3 4.382 3 .8 6.582.8 11c0 7 7 12.267 14.2 17z" />
            </svg>
            <span>{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default PropertyHeader;
