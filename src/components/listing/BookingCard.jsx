import { useState } from "react";
import property, { calculateTotal, formatPrice } from "../../data/property";
import StarRating from "../shared/StarRating";

/**
 * Sticky Booking Sidebar Card.
 * Calculates dynamic stay costs, handles guest selector, and simulates booking reservation.
 */
const BookingCard = () => {
  const [nights, setNights] = useState(5);
  const [guestsCount, setGuestsCount] = useState(2);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [isReserved, setIsReserved] = useState(false);

  const { pricing, guests: maxGuests } = property;
  const totals = calculateTotal(nights);

  const handleReserve = () => {
    setIsReserved(true);
    setTimeout(() => setIsReserved(false), 3000);
  };

  return (
    <aside aria-label="Booking reservation card" className="relative">
      <div className="sticky top-28 border border-border-default rounded-2xl p-6 shadow-card bg-white space-y-6">
        {/* Header: Price per night + Rating */}
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-bold text-text-primary">
              {formatPrice(pricing.perNight)}
            </span>
            <span className="text-base font-normal text-text-secondary"> / night</span>
          </div>
          <StarRating rating={property.rating} reviewCount={property.reviewCount} />
        </div>

        {/* Inputs Container (Check-in / Check-out + Guests) */}
        <div className="border border-border-dark rounded-xl overflow-hidden text-xs focus-within:ring-2 focus-within:ring-black transition-all duration-200">
          {/* Date Picker row */}
          <div className="grid grid-cols-2 border-b border-border-dark divide-x divide-border-dark">
            <div className="p-3 bg-white hover:bg-bg-secondary/50 transition-colors">
              <label htmlFor="checkin-date" className="block font-bold uppercase text-[10px] text-text-primary">
                CHECK-IN
              </label>
              <input
                id="checkin-date"
                type="date"
                defaultValue="2026-09-01"
                className="w-full mt-0.5 text-xs text-text-primary outline-none bg-transparent cursor-pointer font-medium"
                onChange={() => setNights((prev) => Math.max(1, prev))}
              />
            </div>
            <div className="p-3 bg-white hover:bg-bg-secondary/50 transition-colors">
              <label htmlFor="checkout-date" className="block font-bold uppercase text-[10px] text-text-primary">
                CHECKOUT
              </label>
              <input
                id="checkout-date"
                type="date"
                defaultValue="2026-09-06"
                className="w-full mt-0.5 text-xs text-text-primary outline-none bg-transparent cursor-pointer font-medium"
              />
            </div>
          </div>

          {/* Guest Selector Dropdown Header */}
          <div
            className="relative p-3 bg-white hover:bg-bg-secondary/50 transition-colors cursor-pointer"
            onClick={() => setIsGuestOpen((prev) => !prev)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setIsGuestOpen((prev) => !prev)}
            aria-expanded={isGuestOpen}
            aria-label="Guest count selection"
          >
            <label className="block font-bold uppercase text-[10px] text-text-primary pointer-events-none">
              GUESTS
            </label>
            <div className="flex items-center justify-between mt-0.5 text-xs text-text-primary font-medium pointer-events-none">
              <span>{guestsCount} guest{guestsCount > 1 ? "s" : ""}</span>
              <svg viewBox="0 0 32 32" className={`w-3.5 h-3.5 transition-transform duration-200 ${isGuestOpen ? "rotate-180" : ""}`}>
                <path d="M16 22L4 10l2.1-2.1L16 17.8l9.9-9.9L28 10z" fill="currentColor" />
              </svg>
            </div>

            {/* Guest Dropdown Menu */}
            {isGuestOpen && (
              <div
                className="absolute left-0 right-0 top-full mt-1 bg-white border border-border-default rounded-xl p-4 shadow-dropdown z-30 space-y-3 animate-[slideUp_200ms_cubic-bezier(0.16,1,0.3,1)]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-sm text-text-primary block">Adults</span>
                    <span className="text-xs text-text-secondary">Age 13+</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={guestsCount <= 1}
                      onClick={() => setGuestsCount((prev) => Math.max(1, prev - 1))}
                      className="w-7 h-7 rounded-full border border-border-dark flex items-center justify-center text-sm font-bold disabled:opacity-30 hover:border-black active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                      aria-label="Decrease adult count"
                    >
                      -
                    </button>
                    <span className="font-semibold text-sm w-4 text-center">{guestsCount}</span>
                    <button
                      type="button"
                      disabled={guestsCount >= maxGuests}
                      onClick={() => setGuestsCount((prev) => Math.min(maxGuests, prev + 1))}
                      className="w-7 h-7 rounded-full border border-border-dark flex items-center justify-center text-sm font-bold disabled:opacity-30 hover:border-black active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                      aria-label="Increase adult count"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reserve Button */}
        <button
          type="button"
          onClick={handleReserve}
          className={`w-full py-3.5 rounded-xl text-white font-semibold text-base
            bg-gradient-to-r from-airbnb-rausch via-airbnb-rausch-dark to-[#D70466]
            hover:opacity-95 transition-all duration-200 active:scale-[0.98] shadow-md hover:shadow-lg cursor-pointer
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ${
              isReserved ? "animate-[scaleIn_200ms_ease]" : ""
            }`}
        >
          {isReserved ? "Reservation Sent!" : "Reserve"}
        </button>

        <p className="text-center text-xs text-text-secondary">
          You won't be charged yet
        </p>

        {/* Price Breakdown */}
        <div className="space-y-3 pt-2 text-sm text-text-primary">
          <div className="flex items-center justify-between">
            <span className="underline">{formatPrice(pricing.perNight)} x {nights} nights</span>
            <span>{formatPrice(totals.subtotal)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="underline">Cleaning fee</span>
            <span>{formatPrice(totals.cleaningFee)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="underline">Airbnb service fee</span>
            <span>{formatPrice(totals.serviceFee)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="underline">Taxes</span>
            <span>{formatPrice(totals.taxes)}</span>
          </div>

          <hr className="border-t border-border-light pt-3" />

          {/* Total Price */}
          <div className="flex items-center justify-between font-bold text-base text-text-primary">
            <span>Total before taxes</span>
            <span>{formatPrice(totals.total)}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default BookingCard;
