import { useState } from "react";
import property from "../../data/property";

/**
 * Listing Description Component.
 * Multi-paragraph property description with expandable "Show more" toggle.
 */
const ListingDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const paragraphs = property.description;

  return (
    <section aria-label="Property description" className="py-6 border-b border-border-light">
      <h2 className="sr-only">About this space</h2>
      <div className={`space-y-4 text-text-primary text-base leading-relaxed ${!isExpanded ? "line-clamp-4" : ""}`}>
        {paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
        className="mt-4 inline-flex items-center gap-1 font-semibold underline text-text-primary hover:text-text-secondary cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm"
      >
        <span>{isExpanded ? "Show less" : "Show more"}</span>
        <svg
          viewBox="0 0 32 32"
          className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M16 22L4 10l2.1-2.1L16 17.8l9.9-9.9L28 10z" fill="currentColor" />
        </svg>
      </button>
    </section>
  );
};

export default ListingDescription;
