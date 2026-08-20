/**
 * Centralized property data for the Airbnb listing clone.
 *
 * This file is the SINGLE SOURCE OF TRUTH for all listing content.
 * Components read from here — they never hardcode property details.
 */

// High quality curated Unsplash photography for luxury villa
const UNSPLASH = {
  exterior1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
  exterior2: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
  exterior3: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  living1: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  living2: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  bedroom1: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
  bedroom2: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
  bedroom3: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
  bedroom4: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
  bathroom1: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
  bathroom2: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
  kitchen1: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
  kitchen2: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
  pool1: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
  pool2: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=80",
  pool3: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  pool4: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  beach1: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  beach2: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
  gym1: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",

  // Avatars
  host: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
  michael: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  emma: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  james: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  sophie: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  david: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  olivia: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
};

const property = {
  // ── Identity ────────────────────────────────────────────────────────────
  id: "1726619607700183526",
  title: "Luxury Beachfront Villa with Infinity Pool",
  subtitle: "Entire villa in Canggu, Bali, Indonesia",
  propertyType: "Entire villa",

  // ── Location ────────────────────────────────────────────────────────────
  location: {
    address: "Jl. Pantai Berawa No. 99",
    neighborhood: "Berawa Beach",
    city: "Canggu",
    state: "Bali",
    country: "Indonesia",
    coordinates: {
      lat: -8.6478,
      lng: 115.1385,
    },
    description:
      "Nestled along the pristine shores of Berawa Beach, this villa is minutes from Canggu's best surf breaks, beach clubs, and world-class restaurants. The vibrant Seminyak area is a short 15-minute drive away.",
  },

  // ── Host ────────────────────────────────────────────────────────────────
  host: {
    id: "host-001",
    name: "Sarah",
    avatar: UNSPLASH.host,
    isSuperhost: true,
    yearsHosting: 7,
    totalReviews: 342,
    responseRate: "100%",
    responseTime: "within an hour",
    languages: ["English", "Indonesian", "French"],
    about:
      "Hi, I'm Sarah! I fell in love with Bali over a decade ago and now manage several luxury villas along the coast. I'm passionate about creating unforgettable experiences for my guests. When I'm not hosting, you'll find me surfing at Echo Beach or exploring hidden waterfalls.",
  },

  // ── Capacity ────────────────────────────────────────────────────────────
  guests: 8,
  bedrooms: 4,
  beds: 5,
  bathrooms: 3,

  // ── Rating & Reviews ────────────────────────────────────────────────────
  rating: 4.92,
  reviewCount: 318,

  categoryRatings: {
    cleanliness: { label: "Cleanliness", score: 4.9 },
    accuracy: { label: "Accuracy", score: 5.0 },
    checkIn: { label: "Check-in", score: 4.9 },
    communication: { label: "Communication", score: 5.0 },
    location: { label: "Location", score: 4.8 },
    value: { label: "Value", score: 4.7 },
  },

  reviews: [
    {
      id: "r1",
      author: "Michael",
      avatar: UNSPLASH.michael,
      location: "San Francisco, USA",
      date: "July 2024",
      rating: 5,
      text: "Absolutely incredible villa! The ocean views are breathtaking and the staff went above and beyond. The infinity pool at sunset is something you have to experience. Sarah was very responsive and made check-in seamless. Will definitely be back!",
    },
    {
      id: "r2",
      author: "Emma",
      avatar: UNSPLASH.emma,
      location: "London, UK",
      date: "June 2024",
      rating: 5,
      text: "Perfect in every way. The villa is even more stunning than the photos suggest. We loved the private chef service and the proximity to great restaurants and beaches. The outdoor bathtub under the stars was a highlight.",
    },
    {
      id: "r3",
      author: "James",
      avatar: UNSPLASH.james,
      location: "Sydney, Australia",
      date: "May 2024",
      rating: 5,
      text: "Sarah is a wonderful host. Communication was seamless from booking to checkout. The villa itself is luxurious, clean, and thoughtfully designed. A true gem in Bali. The staff were incredibly kind and attentive.",
    },
    {
      id: "r4",
      author: "Sophie",
      avatar: UNSPLASH.sophie,
      location: "Paris, France",
      date: "April 2024",
      rating: 4,
      text: "Beautiful property with amazing views. The only minor issue was the WiFi speed during peak hours, but that's common in the area. Everything else — the rooms, pool, garden, and staff — was absolutely perfect.",
    },
    {
      id: "r5",
      author: "David",
      avatar: UNSPLASH.david,
      location: "Toronto, Canada",
      date: "March 2024",
      rating: 5,
      text: "We stayed for a week and didn't want to leave! The bedrooms are spacious, the pool is gorgeous, and the beach is just steps away. Kids loved it too. Highly recommend for families or groups.",
    },
    {
      id: "r6",
      author: "Olivia",
      avatar: UNSPLASH.olivia,
      location: "Berlin, Germany",
      date: "February 2024",
      rating: 5,
      text: "This was the highlight of our Bali trip. The staff prepared the most amazing meals, and the villa was spotlessly clean every day. Waking up to the sound of waves was magical. An unforgettable experience.",
    },
  ],

  // ── Pricing ─────────────────────────────────────────────────────────────
  pricing: {
    currency: "USD",
    symbol: "$",
    perNight: 450,
    cleaningFee: 85,
    serviceFee: 63,
    taxes: 42,
    minNights: 2,
    weeklyDiscount: 10,
    monthlyDiscount: 20,
  },

  // ── Highlights ──────────────────────────────────────────────────────────
  highlights: [
    {
      id: "h1",
      icon: "door",
      title: "Self check-in",
      subtitle: "Check yourself in with the smart lock.",
    },
    {
      id: "h2",
      icon: "star",
      title: "Sarah is a Superhost",
      subtitle:
        "Superhosts are experienced, highly rated Hosts committed to providing great stays for guests.",
    },
    {
      id: "h3",
      icon: "calendar",
      title: "Free cancellation for 48 hours",
      subtitle:
        "Get a full refund if you change your mind within 48 hours of booking.",
    },
  ],

  // ── Description ─────────────────────────────────────────────────────────
  description: [
    "Welcome to our stunning beachfront villa, nestled along the pristine shores of Berawa Beach in Bali. This meticulously designed retreat offers the perfect blend of luxury and tropical living, with panoramic ocean views from every room.",
    "The villa features four spacious bedrooms, each with en-suite bathrooms and private terraces overlooking the Indian Ocean. The open-plan living area seamlessly connects to the infinity pool, creating an ideal space for both relaxation and entertaining.",
    "Wake up to breathtaking sunrises, enjoy breakfast by the pool, and let the sound of waves lull you to sleep. Our dedicated staff, including a private chef and daily housekeeping, ensures your stay is nothing short of extraordinary.",
    "Located just minutes from Bali's best restaurants, beach clubs, and surf breaks, this villa is the ultimate base for exploring the island while enjoying world-class comfort and privacy.",
  ],

  // ── Amenities ───────────────────────────────────────────────────────────
  amenities: [
    { id: "a1", icon: "wifi", label: "Wifi", category: "Essentials" },
    { id: "a2", icon: "kitchen", label: "Full kitchen", category: "Essentials" },
    { id: "a3", icon: "ac", label: "Air conditioning", category: "Essentials" },
    { id: "a4", icon: "washer", label: "Washer & Dryer", category: "Essentials" },
    { id: "a5", icon: "iron", label: "Iron", category: "Essentials" },
    { id: "a6", icon: "tv", label: '65" Smart TV', category: "Essentials" },
    { id: "a7", icon: "pool", label: "Private infinity pool", category: "Features" },
    { id: "a8", icon: "hot-tub", label: "Hot tub", category: "Features" },
    { id: "a9", icon: "gym", label: "Private gym", category: "Features" },
    { id: "a10", icon: "bbq", label: "BBQ grill", category: "Features" },
    { id: "a11", icon: "workspace", label: "Dedicated workspace", category: "Features" },
    { id: "a12", icon: "parking", label: "Free parking on premises", category: "Features" },
    { id: "a13", icon: "beach", label: "Beach access — Beachfront", category: "Location" },
    { id: "a14", icon: "garden", label: "Garden view", category: "Location" },
    { id: "a15", icon: "safe", label: "Safe", category: "Safety" },
    { id: "a16", icon: "firstaid", label: "First aid kit", category: "Safety" },
    { id: "a17", icon: "fire-extinguisher", label: "Fire extinguisher", category: "Safety" },
    { id: "a18", icon: "smoke-alarm", label: "Smoke alarm", category: "Safety" },
  ],

  // ── Image Categories (ordered) ─────────────────────────────────────────
  imageCategories: [
    "Exterior",
    "Living room",
    "Bedroom",
    "Bathroom",
    "Kitchen & Dining",
    "Pool & Outdoor",
    "Beach",
    "Amenities",
  ],

  // ── Images ──────────────────────────────────────────────────────────────
  images: [
    // Exterior
    {
      id: "img-01",
      src: UNSPLASH.exterior1,
      alt: "Villa exterior with infinity pool at sunset, overlooking the Indian Ocean",
      category: "Exterior",
    },
    {
      id: "img-02",
      src: UNSPLASH.exterior2,
      alt: "Aerial view of the beachfront property surrounded by tropical gardens",
      category: "Exterior",
    },
    {
      id: "img-03",
      src: UNSPLASH.exterior3,
      alt: "Villa entrance featuring Balinese stone carvings and tropical landscaping",
      category: "Exterior",
    },

    // Living room
    {
      id: "img-04",
      src: UNSPLASH.living1,
      alt: "Open-plan living room with floor-to-ceiling windows and panoramic ocean view",
      category: "Living room",
    },
    {
      id: "img-05",
      src: UNSPLASH.living2,
      alt: "Living room lounge area with modern rattan furniture and ceiling fan",
      category: "Living room",
    },

    // Bedroom
    {
      id: "img-06",
      src: UNSPLASH.bedroom1,
      alt: "Master bedroom with king-size canopy bed and direct sea view from the terrace",
      category: "Bedroom",
    },
    {
      id: "img-07",
      src: UNSPLASH.bedroom2,
      alt: "Second bedroom with twin beds and tropical garden outlook",
      category: "Bedroom",
    },
    {
      id: "img-08",
      src: UNSPLASH.bedroom3,
      alt: "Third bedroom with queen bed, mosquito net, and private balcony",
      category: "Bedroom",
    },
    {
      id: "img-09",
      src: UNSPLASH.bedroom4,
      alt: "Fourth bedroom with daybed, writing desk, and garden view",
      category: "Bedroom",
    },

    // Bathroom
    {
      id: "img-10",
      src: UNSPLASH.bathroom1,
      alt: "Marble bathroom with walk-in rain shower and dual vanity",
      category: "Bathroom",
    },
    {
      id: "img-11",
      src: UNSPLASH.bathroom2,
      alt: "Outdoor stone bathtub with ocean view surrounded by frangipani trees",
      category: "Bathroom",
    },

    // Kitchen & Dining
    {
      id: "img-12",
      src: UNSPLASH.kitchen1,
      alt: "Fully equipped modern kitchen with marble island counter and bar stools",
      category: "Kitchen & Dining",
    },
    {
      id: "img-13",
      src: UNSPLASH.kitchen2,
      alt: "Outdoor dining pavilion set for eight guests with ocean backdrop",
      category: "Kitchen & Dining",
    },

    // Pool & Outdoor
    {
      id: "img-14",
      src: UNSPLASH.pool1,
      alt: "16-metre infinity pool with underwater lighting, overlooking Berawa Beach",
      category: "Pool & Outdoor",
    },
    {
      id: "img-15",
      src: UNSPLASH.pool2,
      alt: "Poolside sun loungers with parasols and tropical landscaping",
      category: "Pool & Outdoor",
    },
    {
      id: "img-16",
      src: UNSPLASH.pool3,
      alt: "Outdoor BBQ and entertainment area with teak wood decking",
      category: "Pool & Outdoor",
    },
    {
      id: "img-17",
      src: UNSPLASH.pool4,
      alt: "Tropical garden with stepping stones and a koi pond",
      category: "Pool & Outdoor",
    },

    // Beach
    {
      id: "img-18",
      src: UNSPLASH.beach1,
      alt: "Private gated path leading from the villa directly to Berawa Beach",
      category: "Beach",
    },
    {
      id: "img-19",
      src: UNSPLASH.beach2,
      alt: "Golden sunset over Berawa Beach as seen from the villa terrace",
      category: "Beach",
    },

    // Amenities
    {
      id: "img-20",
      src: UNSPLASH.gym1,
      alt: "Private gym with treadmill, weights, and ocean-view window",
      category: "Amenities",
    },
  ],

  // ── House Rules ─────────────────────────────────────────────────────────
  houseRules: {
    checkIn: { start: "3:00 PM", end: "11:00 PM" },
    checkOut: "11:00 AM",
    rules: [
      "No smoking inside the villa",
      "No parties or events",
      "Pets allowed with prior approval",
      "Quiet hours: 10:00 PM – 7:00 AM",
    ],
  },

  // ── Cancellation Policy ─────────────────────────────────────────────────
  cancellationPolicy: {
    type: "Flexible",
    description:
      "Free cancellation for 48 hours. Cancel before check-in for a partial refund.",
  },

  // ── Sleeping Arrangements ───────────────────────────────────────────────
  sleepingArrangements: [
    { id: "bed-1", room: "Bedroom 1", beds: "1 king bed", icon: "bed-king" },
    { id: "bed-2", room: "Bedroom 2", beds: "2 single beds", icon: "bed-single" },
    { id: "bed-3", room: "Bedroom 3", beds: "1 queen bed", icon: "bed-queen" },
    { id: "bed-4", room: "Bedroom 4", beds: "1 double bed", icon: "bed-double" },
    { id: "bed-common", room: "Common area", beds: "1 sofa bed", icon: "bed-sofa" },
  ],
};

// Helper functions
export const getGridImages = () => property.images.slice(0, 5);

export const getImagesByCategory = () => {
  const grouped = {};
  property.imageCategories.forEach((cat) => {
    grouped[cat] = [];
  });
  property.images.forEach((img) => {
    if (grouped[img.category]) {
      grouped[img.category].push(img);
    }
  });
  return grouped;
};

export const getActiveCategories = () => {
  return property.imageCategories.filter((cat) =>
    property.images.some((img) => img.category === cat)
  );
};

export const getImageIndex = (imageId) => {
  return property.images.findIndex((img) => img.id === imageId);
};

export const getAmenitiesByCategory = () => {
  const grouped = {};
  property.amenities.forEach((amenity) => {
    if (!grouped[amenity.category]) {
      grouped[amenity.category] = [];
    }
    grouped[amenity.category].push(amenity);
  });
  return grouped;
};

export const getPreviewAmenities = (count = 10) => {
  return property.amenities.slice(0, count);
};

export const calculateTotal = (nights) => {
  const { perNight, cleaningFee, serviceFee, taxes } = property.pricing;
  const subtotal = perNight * nights;
  return {
    nights,
    subtotal,
    cleaningFee,
    serviceFee,
    taxes,
    total: subtotal + cleaningFee + serviceFee + taxes,
  };
};

export const formatPrice = (amount) => {
  return `${property.pricing.symbol}${amount.toLocaleString()}`;
};

export default property;
