import property from "../../data/property";

/**
 * Highlights icons mapping
 */
const HighlightIcon = ({ icon }) => {
  switch (icon) {
    case "door":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current text-text-primary" aria-hidden="true">
          <path d="M26 2v28H6V2h20zm-2 2H8v24h16V4zm-5 11a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current text-text-primary" aria-hidden="true">
          <path d="M16 1l4.472 8.791 9.718 1.488-7.005 6.897 1.624 9.697L16 23.361l-8.809 4.512 1.624-9.697-7.005-6.897 9.718-1.488z" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current text-text-primary" aria-hidden="true">
          <path d="M26 4h-2V2h-2v2H10V2H8v2H6c-1.1 0-2 .9-2 2v22c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 24H6V10h20v18z" />
        </svg>
      );
    default:
      return null;
  }
};

/**
 * Listing Highlights Component.
 * Renders key selling points with icons (Self check-in, Superhost status, Free cancellation).
 */
const ListingHighlights = () => {
  return (
    <section aria-label="Key highlights" className="py-6 border-b border-border-light">
      <div className="space-y-6">
        {property.highlights.map((highlight) => (
          <div key={highlight.id} className="flex gap-4 items-start">
            <div className="mt-1 flex-shrink-0">
              <HighlightIcon icon={highlight.icon} />
            </div>
            <div>
              <h3 className="font-semibold text-base text-text-primary">
                {highlight.title}
              </h3>
              <p className="text-sm text-text-secondary mt-0.5">
                {highlight.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListingHighlights;
