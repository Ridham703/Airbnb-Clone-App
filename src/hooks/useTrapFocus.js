import { useEffect, useRef } from "react";
import { KEYS } from "../utils/constants";

/**
 * Hook to trap focus within a container element.
 * Essential for modals/lightbox accessibility — prevents Tab from
 * escaping to elements behind the overlay.
 *
 * @param {boolean} isActive - Whether focus trapping is active
 * @returns {React.RefObject} - Ref to attach to the container element
 */
const useTrapFocus = (isActive) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;

    // Query all focusable elements within the container
    const getFocusableElements = () => {
      return container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
    };

    const handleTabKey = (event) => {
      if (event.key !== KEYS.TAB) return;

      const focusable = getFocusableElements();
      if (focusable.length === 0) return;

      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];

      if (event.shiftKey) {
        // Shift+Tab: if on first element, wrap to last
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab: if on last element, wrap to first
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    // Focus the first focusable element when trap activates
    const focusable = getFocusableElements();
    if (focusable.length > 0) {
      focusable[0].focus();
    }

    document.addEventListener("keydown", handleTabKey);
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [isActive]);

  return containerRef;
};

export default useTrapFocus;
