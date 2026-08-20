import { useState } from "react";
import property from "../../data/property";
import StarRating from "../shared/StarRating";

/**
 * Listing Header Component.
 * Contains property title, location, ratings summary, and Share/Save actions.
 */
const ListingHeader = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2500);
    }
  };

  const toggleSave = () => {
    setIsSaved((prev) => !prev);
  };

  return (
    <header className="pt-6">
      {/* Title */}
      <h1 className="text-2xl md:text-[26px] font-semibold text-text-primary leading-tight">
        {property.title}
      </h1>

      {/* Top Meta Line: Rating, Location & Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-2 text-sm text-text-primary">
        {/* Rating & Location */}
        <div className="flex items-center gap-2 flex-wrap">
          <StarRating rating={property.rating} reviewCount={property.reviewCount} />
          <span>·</span>
          {property.host.isSuperhost && (
            <>
              <span className="flex items-center gap-1 font-semibold">
                <svg viewBox="0 0 32 32" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M16 1l4.472 8.791 9.718 1.488-7.005 6.897 1.624 9.697L16 23.361l-8.809 4.512 1.624-9.697-7.005-6.897 9.718-1.488z" />
                </svg>
                Superhost
              </span>
              <span>·</span>
            </>
          )}
          <span className="underline font-medium cursor-pointer hover:text-text-secondary">
            {property.location.neighborhood}, {property.location.city}, {property.location.country}
          </span>
        </div>

        {/* Action Buttons (Share & Save) */}
        <div className="flex items-center gap-3 relative">
          {/* Share Button */}
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-bg-secondary transition-colors underline font-medium cursor-pointer"
            aria-label="Share this listing"
          >
            <svg viewBox="0 0 32 32" className="w-4 h-4 fill-none stroke-current stroke-[2.5]" aria-hidden="true">
              <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v19M9 10l7-7 7 7" />
            </svg>
            <span>Share</span>
          </button>

          {/* Toast for Share */}
          {showShareToast && (
            <div className="absolute top-10 right-20 bg-text-primary text-white text-xs px-3 py-1.5 rounded shadow-lg animate-bounce z-20 whitespace-nowrap">
              Link copied to clipboard!
            </div>
          )}

          {/* Save Button */}
          <button
            type="button"
            onClick={toggleSave}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-bg-secondary transition-colors underline font-medium cursor-pointer"
            aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
          >
            <svg
              viewBox="0 0 32 32"
              className={`w-4 h-4 transition-transform duration-300 ${
                isSaved
                  ? "fill-airbnb-rausch stroke-airbnb-rausch scale-110"
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

export default ListingHeader;
