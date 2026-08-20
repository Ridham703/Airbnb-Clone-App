import { useEffect } from "react";

/**
 * Hook to lock body scroll when an overlay/modal is open.
 * Adds/removes 'scroll-locked' class on the body element.
 *
 * @param {boolean} isLocked - Whether scroll should be locked
 */
const useLockBodyScroll = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      document.body.classList.add("scroll-locked");
    } else {
      document.body.classList.remove("scroll-locked");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("scroll-locked");
    };
  }, [isLocked]);
};

export default useLockBodyScroll;
