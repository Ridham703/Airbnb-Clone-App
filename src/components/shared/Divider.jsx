/**
 * Horizontal section divider.
 */
const Divider = ({ className = "" }) => {
  return (
    <hr
      className={`border-t border-border-light my-[var(--spacing-section)] ${className}`}
    />
  );
};

export default Divider;
