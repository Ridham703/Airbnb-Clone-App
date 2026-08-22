import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

/**
 * Airbnb Brand Logo Component.
 * Icon + wordmark for desktop view.
 */
const HeaderLogo = () => {
  return (
    <Link
      to={ROUTES.LISTING}
      className="flex items-center gap-2 text-airbnb-rausch focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg p-1.5 transition-transform duration-200 active:scale-95"
      aria-label="Airbnb homepage"
    >
      <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current shrink-0" aria-hidden="true">
        <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.907 6.478-6.353 6.478-2.025 0-4.078-.784-5.922-2.394l-.31-.282-.317.29c-1.791 1.57-3.82 2.386-5.838 2.386C7.392 31 4.5 28.61 4.5 24.522l.005-.469c.043-.987.305-1.897.96-3.396l.144-.353c.986-2.296 5.146-11.005 7.1-14.836l.534-1.025C14.537 1.963 15.992 1 16 1z" />
      </svg>
      <span className="font-bold text-xl tracking-tight hidden xl:inline text-airbnb-rausch">
        airbnb
      </span>
    </Link>
  );
};

/**
 * Centered Search Bar Pill Component.
 * 3 sections (Anywhere | Any week | Add guests) with magnifying glass button.
 */
const SearchBar = () => {
  return (
    <button
      type="button"
      className="hidden md:flex items-center border border-border-default rounded-full py-2 pl-6 pr-2 
        shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer active:scale-[0.99]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 group"
      aria-label="Search destinations, dates, and guests"
    >
      <span className="text-sm font-semibold text-text-primary border-r border-border-light pr-4">
        Anywhere
      </span>
      <span className="text-sm font-semibold text-text-primary border-r border-border-light px-4">
        Any week
      </span>
      <span className="text-sm text-text-secondary pl-4 pr-3 font-normal">
        Add guests
      </span>
      <div className="bg-airbnb-rausch text-white rounded-full p-2.5 ml-1 transition-transform duration-200 group-hover:scale-105 flex items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          className="w-3.5 h-3.5 fill-none stroke-current stroke-[4]"
          aria-hidden="true"
        >
          <circle cx="14" cy="14" r="9" />
          <path d="M21 21l7 7" strokeLinecap="round" />
        </svg>
      </div>
    </button>
  );
};

/**
 * User Navigation & Profile Dropdown Component.
 */
const UserNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex items-center gap-2 relative" ref={menuRef}>
      {/* "Airbnb your home" Action Button */}
      <button
        type="button"
        className="text-sm font-semibold text-text-primary hover:bg-bg-secondary rounded-full px-4 py-2.5 
          transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black hidden sm:block active:scale-95"
      >
        Airbnb your home
      </button>

      {/* Globe / Language Selector Button */}
      <button
        type="button"
        aria-label="Choose a language and currency"
        className="p-2.5 hover:bg-bg-secondary rounded-full text-text-primary 
          transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black flex items-center justify-center active:scale-95"
      >
        <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current" aria-hidden="true">
          <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm5.7 6H10a14.3 14.3 0 0 0-1.38-4.43A6.02 6.02 0 0 1 13.7 6zM8 1.54A12.7 12.7 0 0 1 9.47 6H6.53A12.7 12.7 0 0 1 8 1.54zM2.3 6a6.02 6.02 0 0 1 5.08-4.43A14.3 14.3 0 0 0 6 6zm0 4h3.7a14.3 14.3 0 0 0 1.38 4.43A6.02 6.02 0 0 1 2.3 10zm5.7 4.46A12.7 12.7 0 0 1 6.53 10h2.94A12.7 12.7 0 0 1 8 14.46zm5.7-4.46h-3.7a14.3 14.3 0 0 0-1.38 4.43A6.02 6.02 0 0 1 13.7 10zM13.7 8.5h-3.8A12.8 12.8 0 0 0 10 7h3.7a6.03 6.03 0 0 1 0 1.5zM6 7.5a12.8 12.8 0 0 0-.1 1H2.3a6.03 6.03 0 0 1 0-1.5z" />
        </svg>
      </button>

      {/* User Menu Trigger Button */}
      <button
        type="button"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-expanded={isMenuOpen}
        aria-label="User menu"
        className="flex items-center border border-border-default rounded-full py-1.5 px-3 gap-3 
          hover:shadow-card-hover transition-all duration-200 cursor-pointer bg-white active:scale-95
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      >
        {/* Hamburger Icon */}
        <svg viewBox="0 0 32 32" className="w-4 h-4 fill-none stroke-current stroke-[3]" aria-hidden="true">
          <path d="M2 16h28M2 24h28M2 8h28" />
        </svg>

        {/* Profile Avatar Icon */}
        <div className="w-7 h-7 bg-text-secondary text-white rounded-full flex items-center justify-center overflow-hidden">
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current" aria-hidden="true">
            <path d="M16 .5a15.5 15.5 0 1 1 0 31 15.5 15.5 0 0 1 0-31zm0 2a13.5 13.5 0 0 0-8.254 24.199c.715-2.15 3.18-4.199 8.254-4.199s7.539 2.049 8.254 4.199A13.5 13.5 0 0 0 16 2.5zm0 5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z" />
          </svg>
        </div>
      </button>

      {/* User Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-60 bg-white border border-border-light 
            rounded-2xl shadow-dropdown py-2 z-50 animate-[slideUp_180ms_cubic-bezier(0.16,1,0.3,1)]"
          role="menu"
          aria-label="User options"
        >
          <button
            type="button"
            className="w-full text-left px-4 py-3 text-sm font-semibold text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer"
            role="menuitem"
          >
            Sign up
          </button>
          <button
            type="button"
            className="w-full text-left px-4 py-3 text-sm text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer"
            role="menuitem"
          >
            Log in
          </button>
          <hr className="border-t border-border-light my-2" />
          <button
            type="button"
            className="w-full text-left px-4 py-3 text-sm text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer"
            role="menuitem"
          >
            Airbnb your home
          </button>
          <button
            type="button"
            className="w-full text-left px-4 py-3 text-sm text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer"
            role="menuitem"
          >
            Help Center
          </button>
        </div>
      )}
    </div>
  );
};

/**
 * Main Accessible Airbnb Header Component.
 */
const Header = () => {
  return (
    <header className="sticky top-0 z-[var(--z-sticky)] bg-white border-b border-border-light">
      <nav
        aria-label="Main navigation"
        className="max-w-[var(--width-content-max)] mx-auto flex items-center justify-between px-6 py-4"
      >
        <HeaderLogo />
        <SearchBar />
        <UserNav />
      </nav>
    </header>
  );
};

export default Header;
