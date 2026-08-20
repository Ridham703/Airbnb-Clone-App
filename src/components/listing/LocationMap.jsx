import property from "../../data/property";

/**
 * Location Map Component.
 * Displays map visual placeholder with location coordinates and neighborhood description.
 */
const LocationMap = () => {
  const { location } = property;

  return (
    <section aria-label="Location map" className="py-8 border-b border-border-light">
      <h2 className="text-2xl font-semibold text-text-primary mb-2">
        Where you'll be
      </h2>
      <p className="text-sm text-text-secondary mb-6">
        {location.neighborhood}, {location.city}, {location.state}, {location.country}
      </p>

      {/* Map Graphic Container */}
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-border-light shadow-sm bg-slate-100 flex items-center justify-center">
        {/* Decorative Map Pattern Background */}
        <div
          className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"
          aria-hidden="true"
        />

        {/* Pin Marker */}
        <div className="relative z-10 flex flex-col items-center animate-bounce">
          <div className="bg-airbnb-rausch text-white p-3 rounded-full shadow-lg">
            <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current" aria-hidden="true">
              <path d="M16 1C9.9 1 5 5.9 5 12c0 8.3 11 19 11 19s11-10.7 11-19c0-6.1-4.9-11-11-11zm0 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
            </svg>
          </div>
          <span className="mt-2 bg-white text-text-primary px-3 py-1 rounded-full text-xs font-semibold shadow-md border border-border-light">
            Exact location provided after booking
          </span>
        </div>
      </div>

      <p className="mt-6 text-sm text-text-primary leading-relaxed">
        {location.description}
      </p>
    </section>
  );
};

export default LocationMap;
