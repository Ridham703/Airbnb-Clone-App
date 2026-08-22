import PropertyHeader from "./PropertyHeader";
import PhotoGrid from "./PhotoGrid";
import PropertyOverview from "./PropertyOverview";
import ListingHighlights from "./ListingHighlights";
import Description from "./Description";
import Amenities from "./Amenities";
import ReviewsSummary from "./ReviewsSummary";
import LocationMap from "./LocationMap";
import HostSection from "./HostSection";
import BookingCard from "./BookingCard";

/**
 * Main Desktop Listing Page.
 * Structure:
 * - PropertyHeader (Title, rating, location, share/save)
 * - PhotoGrid (5-image Bento layout)
 * - 2-Column Content Grid:
 *     Left (max-w-[650px]): PropertyOverview, Highlights, Description, Amenities, ReviewsSummary, LocationMap, HostSection
 *     Right (w-[370px]): Sticky BookingCard
 */
const ListingPage = () => {
  return (
    <main className="max-w-[var(--width-content-max)] mx-auto px-6 md:px-10 py-4">
      {/* Property Title & Meta Actions */}
      <PropertyHeader />

      {/* 5-Image Hero Bento Grid */}
      <PhotoGrid />

      {/* Main Content & Sticky Booking Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_370px] gap-12 mt-8 items-start">
        {/* Left Column: Listing Details & Sections */}
        <div className="min-w-0">
          <PropertyOverview />
          <ListingHighlights />
          <Description />
          <Amenities />
          <ReviewsSummary />
          <div id="location-section">
            <LocationMap />
          </div>
          <HostSection />
        </div>

        {/* Right Column: Sticky Booking Sidebar Card */}
        <div className="w-full">
          <BookingCard />
        </div>
      </div>
    </main>
  );
};

export default ListingPage;
