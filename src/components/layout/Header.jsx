/**
 * Airbnb-style header — minimal shell for initial setup.
 */
const Header = () => {
  return (
    <header className="sticky top-0 z-[var(--z-sticky)] bg-white border-b border-border-light">
      <nav className="max-w-[var(--width-content-max)] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" aria-label="Airbnb Clone home" className="text-airbnb-rausch">
          <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current" aria-hidden="true">
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.907 6.478-6.353 6.478-2.025 0-4.078-.784-5.922-2.394l-.31-.282-.317.29c-1.791 1.57-3.82 2.386-5.838 2.386C7.392 31 4.5 28.61 4.5 24.522l.005-.469c.043-.987.305-1.897.96-3.396l.144-.353c.986-2.296 5.146-11.005 7.1-14.836l.534-1.025C14.537 1.963 15.992 1 16 1z" />
          </svg>
        </a>

        {/* Placeholder search bar */}
        <div className="hidden lg:flex items-center border border-border-default rounded-full py-2 px-4 shadow-card hover:shadow-card-hover transition-shadow duration-[var(--duration-normal)] cursor-pointer">
          <span className="text-sm font-semibold text-text-primary border-r border-border-default pr-4">Anywhere</span>
          <span className="text-sm font-semibold text-text-primary border-r border-border-default px-4">Any week</span>
          <span className="text-sm text-text-secondary px-4">Add guests</span>
          <div className="bg-airbnb-rausch rounded-full p-2 ml-1">
            <svg viewBox="0 0 32 32" className="w-3 h-3 fill-white stroke-white stroke-[4]" aria-hidden="true">
              <path d="M13 0a13 13 0 0 1 10.367 20.893l8.37 8.37-2.828 2.828-8.37-8.37A13 13 0 1 1 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" fill="none" />
            </svg>
          </div>
        </div>

        {/* User menu placeholder */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-text-primary hover:bg-bg-secondary rounded-full px-3 py-2 cursor-pointer transition-colors">
            Airbnb your home
          </span>
          <div className="flex items-center border border-border-default rounded-full py-2 px-3 gap-2.5 hover:shadow-card-hover transition-shadow cursor-pointer">
            <svg viewBox="0 0 32 32" className="w-4 h-4 fill-text-primary" aria-hidden="true">
              <path d="M2 16h28M2 24h28M2 8h28" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
            <svg viewBox="0 0 32 32" className="w-7 h-7 fill-text-secondary" aria-hidden="true">
              <path d="M16 .5a15.5 15.5 0 1 1 0 31 15.5 15.5 0 0 1 0-31zm0 2a13.5 13.5 0 0 0-8.254 24.199c.715-2.15 3.18-4.199 8.254-4.199s7.539 2.049 8.254 4.199A13.5 13.5 0 0 0 16 2.5zm0 5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z" />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
