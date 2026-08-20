import { useEffect } from "react";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import useTrapFocus from "../../hooks/useTrapFocus";
import IconButton from "./IconButton";

/**
 * Generic accessible modal overlay.
 * Handles body scroll lock, focus trapping, and backdrop click-to-close.
 */
const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  className = "",
}) => {
  useLockBodyScroll(isOpen);
  const trapRef = useTrapFocus(isOpen);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    full: "max-w-[90vw]",
  };

  return (
    <div
      className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4"
      role="presentation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bg-overlay animate-[fadeIn_200ms_ease]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        ref={trapRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`relative bg-white rounded-xl shadow-dropdown w-full ${sizes[size]} 
          max-h-[85vh] overflow-y-auto animate-[scaleIn_200ms_ease]
          ${className}`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-center bg-white border-b border-border-light px-6 py-4 rounded-t-xl">
          <IconButton
            onClick={onClose}
            ariaLabel="Close"
            className="absolute left-4"
            size="md"
          >
            <svg
              viewBox="0 0 32 32"
              className="w-4 h-4 fill-none stroke-current stroke-[3]"
              aria-hidden="true"
            >
              <path d="M6 6l20 20M26 6L6 26" />
            </svg>
          </IconButton>
          {title && (
            <h2 className="text-base font-semibold text-text-primary">
              {title}
            </h2>
          )}
        </div>

        {/* Body */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
