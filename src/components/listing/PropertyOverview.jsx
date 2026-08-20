import property from "../../data/property";
import Avatar from "../shared/Avatar";

/**
 * PropertyOverview Component.
 * Displays host avatar, hosting title, and room capacity parameters.
 */
const PropertyOverview = () => {
  const { host, propertyType, guests, bedrooms, beds, bathrooms } = property;

  return (
    <section aria-label="Property summary" className="py-6 border-b border-border-light">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-[22px] font-semibold text-text-primary leading-snug">
            {propertyType} hosted by {host.name}
          </h2>
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-text-primary mt-1">
            <li>{guests} guests</li>
            <li aria-hidden="true">·</li>
            <li>{bedrooms} bedrooms</li>
            <li aria-hidden="true">·</li>
            <li>{beds} beds</li>
            <li aria-hidden="true">·</li>
            <li>{bathrooms} baths</li>
          </ol>
        </div>

        <div className="relative flex-shrink-0">
          <Avatar src={host.avatar} alt={`Host ${host.name}`} size="lg" />
          {host.isSuperhost && (
            <div
              className="absolute -bottom-1 -right-1 bg-airbnb-rausch text-white rounded-full p-1 shadow-sm"
              title="Superhost"
            >
              <svg viewBox="0 0 32 32" className="w-3 h-3 fill-current" aria-hidden="true">
                <path d="M16 1l4.472 8.791 9.718 1.488-7.005 6.897 1.624 9.697L16 23.361l-8.809 4.512 1.624-9.697-7.005-6.897 9.718-1.488z" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertyOverview;
