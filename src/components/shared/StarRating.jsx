/**
 * Star rating display — shows a star icon with numeric rating.
 */
const StarRating = ({ rating, reviewCount, className = "" }) => {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        className="w-3.5 h-3.5 fill-text-primary"
      >
        <path
          d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
          fillRule="evenodd"
        />
      </svg>
      <span className="text-sm font-semibold">{rating}</span>
      {reviewCount !== undefined && (
        <>
          <span className="text-text-secondary">·</span>
          <span className="text-sm text-text-secondary underline cursor-pointer hover:text-text-primary">
            {reviewCount} review{reviewCount !== 1 ? "s" : ""}
          </span>
        </>
      )}
    </span>
  );
};

export default StarRating;
