import { useState } from "react";
import property, { getAmenitiesByCategory, getPreviewAmenities } from "../../data/property";
import Modal from "../shared/Modal";

/**
 * Amenity SVG Icon component
 */
const AmenityIcon = ({ icon }) => {
  const iconMap = {
    wifi: <path d="M16 24a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-8.485-4.243a12 12 0 0 1 16.97 0l-2.121 2.122a9 9 0 0 0-12.728 0l-2.121-2.122zm-4.243-4.242a18 18 0 0 1 25.456 0l-2.122 2.121a15 15 0 0 0-21.213 0L3.272 15.515z" />,
    kitchen: <path d="M6 2v28h4V18h12v14h4V2H6zm14 12H10V6h10v8z" />,
    ac: <path d="M4 6h24v12H4V6zm2 2v8h20V8H6zm-2 16h24v2H4v-2z" />,
    washer: <path d="M8 2h16c1.1 0 2 .9 2 2v24c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm8 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" />,
    pool: <path d="M2 22c3 0 4-2 7-2s4 2 7 2 4-2 7-2 4 2 7 2v3c-3 0-4-2-7-2s-4 2-7 2-4-2-7-2-4 2-7 2v-3zM2 12c3 0 4-2 7-2s4 2 7 2 4-2 7-2 4 2 7 2v3c-3 0-4-2-7-2s-4 2-7 2-4-2-7-2-4 2-7 2v-3z" />,
    tv: <path d="M28 6H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 16H4V8h24v14zM10 26h12v2H10v-2z" />,
    gym: <path d="M6 10h4v12H6V10zm16 0h4v12h-4V10zM2 14h4v4H2v-4zm24 0h4v4h-4v-4zM10 14h12v4H10v-4z" />,
    beach: <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 25a11 11 0 1 1 11-11 11 11 0 0 1-11 11z" />,
  };

  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current text-text-primary" aria-hidden="true">
      {iconMap[icon] || <path d="M16 2L2 16h4v14h20V16h4L16 2zm0 4.5l8 8V28H8V14.5l8-8z" />}
    </svg>
  );
};

/**
 * Amenities List Component.
 * Shows preview amenities grid on page, plus full modal popup when clicking "Show all amenities".
 */
const AmenitiesList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const previewAmenities = getPreviewAmenities(10);
  const categorizedAmenities = getAmenitiesByCategory();

  return (
    <section aria-label="Amenities" className="py-6 border-b border-border-light">
      <h2 className="text-[22px] font-semibold text-text-primary mb-6">
        What this place offers
      </h2>

      {/* 2-Column Preview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
        {previewAmenities.map((amenity) => (
          <div key={amenity.id} className="flex items-center gap-4">
            <AmenityIcon icon={amenity.icon} />
            <span className="text-base text-text-primary">{amenity.label}</span>
          </div>
        ))}
      </div>

      {/* Show All Button */}
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="mt-8 border border-text-primary text-text-primary px-6 py-3 rounded-lg font-semibold text-base
          hover:bg-bg-secondary transition-colors cursor-pointer active:scale-95"
      >
        Show all {property.amenities.length} amenities
      </button>

      {/* Full Amenities Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="What this place offers"
        size="lg"
      >
        <div className="space-y-8">
          {Object.entries(categorizedAmenities).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-text-primary mb-4 pb-2 border-b border-border-light">
                {category}
              </h3>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <AmenityIcon icon={item.icon} />
                    <span className="text-base text-text-primary">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
};

export default AmenitiesList;
