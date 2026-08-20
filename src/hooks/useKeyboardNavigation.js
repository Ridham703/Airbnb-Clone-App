import { useEffect } from "react";
import { KEYS } from "../utils/constants";

/**
 * Hook for keyboard navigation in the Lightbox.
 * Handles ArrowLeft, ArrowRight, and Escape key events.
 *
 * @param {object} options
 * @param {Function} options.onNext - Called on ArrowRight
 * @param {Function} options.onPrev - Called on ArrowLeft
 * @param {Function} options.onClose - Called on Escape
 * @param {boolean} options.enabled - Whether the hook is active
 */
const useKeyboardNavigation = ({ onNext, onPrev, onClose, enabled = true }) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event) => {
      switch (event.key) {
        case KEYS.ARROW_RIGHT:
          event.preventDefault();
          onNext?.();
          break;
        case KEYS.ARROW_LEFT:
          event.preventDefault();
          onPrev?.();
          break;
        case KEYS.ESCAPE:
          event.preventDefault();
          onClose?.();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev, onClose, enabled]);
};

export default useKeyboardNavigation;
