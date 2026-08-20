import property from "../../data/property";
import Avatar from "../shared/Avatar";

/**
 * Reviews Summary Component.
 * Displays total rating score, category rating progress bars, and review cards.
 */
const ReviewsSummary = () => {
  const { rating, reviewCount, categoryRatings, reviews } = property;

  return (
    <section aria-label="Guest reviews" className="py-8 border-b border-border-light">
      {/* Title & Star Rating Header */}
      <div className="flex items-center gap-2 mb-8">
        <svg viewBox="0 0 32 32" className="w-6 h-6 fill-text-primary" aria-hidden="true">
          <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd" />
        </svg>
        <h2 className="text-2xl font-semibold text-text-primary">
          {rating} · {reviewCount} reviews
        </h2>
      </div>

      {/* Category Progress Bars (2 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
        {Object.values(categoryRatings).map((cat) => (
          <div key={cat.label} className="flex items-center justify-between gap-4">
            <span className="text-sm text-text-primary">{cat.label}</span>
            <div className="flex items-center gap-3 w-44">
              <div className="flex-1 bg-border-light rounded-full h-1 overflow-hidden">
                <div
                  className="bg-text-primary h-full rounded-full"
                  style={{ width: `${(cat.score / 5) * 100}%` }}
                />
              </div>
              <span className="text-xs font-semibold text-text-primary w-6 text-right">
                {cat.score.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <article key={review.id} className="space-y-3">
            <div className="flex items-center gap-3">
              <Avatar src={review.avatar} alt={review.author} size="md" />
              <div>
                <h3 className="font-semibold text-base text-text-primary">
                  {review.author}
                </h3>
                <p className="text-xs text-text-secondary">
                  {review.location} · {review.date}
                </p>
              </div>
            </div>
            <p className="text-sm text-text-primary leading-relaxed line-clamp-4">
              {review.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSummary;
