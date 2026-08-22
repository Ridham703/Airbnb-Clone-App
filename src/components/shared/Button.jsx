/**
 * Reusable Button component.
 * Supports primary (Airbnb rausch), secondary (outlined), and ghost variants.
 */
const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  className = "",
  type = "button",
  ariaLabel,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-[var(--duration-normal)] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-airbnb-rausch to-airbnb-rausch-dark text-white hover:from-airbnb-rausch-dark hover:to-[#D70466] hover:shadow-md active:scale-[0.98]",
    secondary:
      "bg-white text-text-primary border border-border-dark hover:bg-bg-secondary hover:border-black active:scale-[0.98]",
    ghost:
      "bg-transparent text-text-primary hover:bg-bg-secondary rounded-full active:scale-[0.98]",
    outline:
      "bg-white text-text-primary border border-text-primary hover:bg-text-primary hover:text-white active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
