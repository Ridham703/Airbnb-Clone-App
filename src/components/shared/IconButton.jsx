/**
 * Circular icon button — used for close, navigation arrows, etc.
 * Renders a circular button with hover background.
 */
const IconButton = ({
  children,
  onClick,
  ariaLabel,
  size = "md",
  className = "",
  disabled = false,
  ...props
}) => {
  const sizes = {
    sm: "w-7 h-7",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-12 h-12",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-full 
        transition-all duration-[var(--duration-fast)]
        hover:bg-bg-secondary active:scale-95
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-airbnb-rausch
        ${sizes[size]}
        ${disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
