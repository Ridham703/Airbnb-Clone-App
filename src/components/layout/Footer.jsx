/**
 * Site footer — minimal shell for initial setup.
 */
const Footer = () => {
  return (
    <footer className="bg-bg-secondary border-t border-border-light">
      <div className="max-w-[var(--width-content-max)] mx-auto px-6 py-8">
        <h2 className="sr-only">Footer links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-text-primary mb-3">Support</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm">Help Center</a></li>
              <li><a href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm">AirCover</a></li>
              <li><a href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm">Safety information</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary mb-3">Hosting</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm">Airbnb your home</a></li>
              <li><a href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm">Hosting resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary mb-3">Airbnb</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm">Newsroom</a></li>
              <li><a href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm">Careers</a></li>
              <li><a href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm">Investors</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border-light flex flex-wrap items-center justify-between gap-4 text-sm text-text-secondary">
          <span>© 2024 Airbnb Clone. Built for Playpower Labs assignment.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm">Privacy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm">Terms</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
