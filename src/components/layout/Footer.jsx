/**
 * Site footer — minimal shell for initial setup.
 */
const Footer = () => {
  return (
    <footer className="bg-bg-secondary border-t border-border-light">
      <div className="max-w-[var(--width-content-max)] mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-text-primary mb-3">Support</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Safety information</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary mb-3">Hosting</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#" className="hover:underline">Airbnb your home</a></li>
              <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline">Hosting resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary mb-3">Airbnb</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border-light flex items-center justify-between text-sm text-text-secondary">
          <span>© 2024 Airbnb Clone. Built for Playpower Labs assignment.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
