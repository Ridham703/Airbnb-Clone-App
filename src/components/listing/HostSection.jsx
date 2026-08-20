import { useState } from "react";
import property from "../../data/property";
import Avatar from "../shared/Avatar";
import Button from "../shared/Button";

/**
 * HostSection Component.
 * Comprehensive host profile section detailing Superhost stats, host bio, response rates, and contact button.
 */
const HostSection = () => {
  const { host } = property;
  const [showContactMsg, setShowContactMsg] = useState(false);

  return (
    <section aria-label="Host details" className="py-8 border-b border-border-light">
      <div className="flex items-center gap-4 mb-6">
        <Avatar src={host.avatar} alt={host.name} size="xl" />
        <div>
          <h2 className="text-2xl font-semibold text-text-primary">
            Hosted by {host.name}
          </h2>
          <p className="text-sm text-text-secondary mt-0.5">
            Joined in {2026 - host.yearsHosting} · {host.yearsHosting} years hosting
          </p>
        </div>
      </div>

      {/* Host Stats Badge Row */}
      <div className="flex items-center gap-6 mb-6 text-sm text-text-primary">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current text-text-primary" aria-hidden="true">
            <path d="M16 1l4.472 8.791 9.718 1.488-7.005 6.897 1.624 9.697L16 23.361l-8.809 4.512 1.624-9.697-7.005-6.897 9.718-1.488z" />
          </svg>
          <span className="font-semibold">{host.totalReviews} Reviews</span>
        </div>

        {host.isSuperhost && (
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current text-text-primary" aria-hidden="true">
              <path d="M16 1C7.7 1 1 7.7 1 16s6.7 15 15 15 15-6.7 15-15S24.3 1 16 1zm0 28C8.8 29 3 23.2 3 16S8.8 3 16 3s13 5.8 13 13-5.8 13-13 13z" />
            </svg>
            <span className="font-semibold">Superhost</span>
          </div>
        )}
      </div>

      {/* Host Bio */}
      <p className="text-base text-text-primary leading-relaxed max-w-2xl mb-6">
        {host.about}
      </p>

      {/* Response Details & Languages */}
      <div className="space-y-2 text-sm text-text-primary mb-6">
        <p><span className="font-semibold">Response rate:</span> {host.responseRate}</p>
        <p><span className="font-semibold">Response time:</span> {host.responseTime}</p>
        <p><span className="font-semibold">Languages:</span> {host.languages.join(", ")}</p>
      </div>

      {/* Contact Host Button */}
      <Button
        variant="secondary"
        onClick={() => setShowContactMsg((prev) => !prev)}
        ariaLabel={`Contact ${host.name}`}
      >
        Contact Host
      </Button>

      {showContactMsg && (
        <div className="mt-4 p-4 bg-bg-secondary rounded-xl border border-border-light text-sm text-text-primary max-w-md animate-[fadeIn_150ms_ease]">
          <p className="font-semibold mb-1">Send a message to {host.name}:</p>
          <textarea
            rows={3}
            placeholder="Hi Sarah, I'd love to know more about..."
            className="w-full p-2.5 border border-border-default rounded-lg text-sm outline-none focus:border-text-primary bg-white"
          />
          <button
            type="button"
            onClick={() => setShowContactMsg(false)}
            className="mt-2 bg-text-primary text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-black transition-colors"
          >
            Send Message
          </button>
        </div>
      )}
    </section>
  );
};

export default HostSection;
