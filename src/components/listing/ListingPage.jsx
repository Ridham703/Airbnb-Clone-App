import PhotoGrid from "./PhotoGrid";
import ListingHeader from "./ListingHeader";
import HostInfo from "./HostInfo";
import ListingHighlights from "./ListingHighlights";
import ListingDescription from "./ListingDescription";
import AmenitiesList from "./AmenitiesList";
import ReviewsSummary from "./ReviewsSummary";
import LocationMap from "./LocationMap";
import BookingCard from "./BookingCard";

/**
 * Main Listing Page View.
 * Assembles photo grid, listing details, host info, amenities, reviews, map, and sticky booking card.
 */
const ListingPage = () => {
  return (
    <main className="max-w-[var(--width-content-max)] mx-auto px-6 py-4">
      {/* Listing Header (Title, Location, Share/Save) */}
      <ListingHeader />

      {/* Hero 5-Image Bento Photo Grid */}
      <PhotoGrid />

      {/* Main Content Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_370px] gap-12 mt-8">
        {/* Left Column: Details & Sections */}
        <div className="min-w-0">
          <HostInfo />
          <ListingHighlights />
          <ListingDescription />
          <AmenitiesList />
          <ReviewsSummary />
          <LocationMap />
        </div>

        {/* Right Column: Sticky Booking Card */}
        <div>
          <BookingCard />
        </div>
      </div>
    </main>
  );
};

export default ListingPage;
