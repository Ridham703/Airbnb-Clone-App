/**
 * Circular avatar component for host and reviewer photos.
 */
const Avatar = ({ src, alt, size = "md", className = "" }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-14 h-14",
    xl: "w-16 h-16",
  };

  // Fallback: show initials if no src provided
  const initials = alt
    ? alt
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "?";

  return (
    <div
      className={`${sizes[size]} rounded-full overflow-hidden flex-shrink-0 ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div
          className="w-full h-full bg-text-primary text-white flex items-center justify-center text-sm font-semibold"
          aria-label={alt}
        >
          {initials}
        </div>
      )}
    </div>
  );
};

export default Avatar;
