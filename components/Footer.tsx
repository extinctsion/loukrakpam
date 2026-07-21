const currentYear = new Date().getFullYear();

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Partner With Us", href: "#partner" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2C2C2C", color: "#FDF8F0" }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            {/* TODO: Replace text logo with actual logo image */}
            <div className="mb-4">
              <p
                style={{ fontFamily: "'Playfair Display', serif", color: "#D4A017" }}
                className="text-2xl font-bold"
              >
                Loukrakpam
              </p>
              <p
                style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)" }}
                className="text-xs tracking-[0.3em] uppercase mt-0.5"
              >
                Foods
              </p>
            </div>
            <p
              style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.65)" }}
              className="text-sm leading-relaxed max-w-xs"
            >
              Crafting authentic, hygienic snacks with quality ingredients.
              Your trusted supply partner for wholesale and retail.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{ fontFamily: "'Inter', sans-serif", color: "#D4A017" }}
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-5"
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.7)" }}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{ fontFamily: "'Inter', sans-serif", color: "#D4A017" }}
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-5"
            >
              Contact Details
            </h4>
            <address className="not-italic space-y-3">
              {/* TODO: Replace placeholder address and contact info with actual details */}
              <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.7)" }} className="text-sm">
                Thangmeiband, Imphal West,<br />Manipur – 795001
              </p>
              <a
                href="tel:+919876543210"
                style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.7)" }}
                className="block text-sm hover:text-white transition-colors"
              >
                +91 98765 43210
              </a>
              <a
                href="mailto:info@loukrakpamfoods.com"
                style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.7)" }}
                className="block text-sm hover:text-white transition-colors"
              >
                info@loukrakpamfoods.com
              </a>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div style={{ backgroundColor: "rgba(255,255,255,0.1)" }} className="h-px mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.45)" }}
            className="text-xs"
          >
            © {currentYear} Loukrakpam Foods. All rights reserved.
          </p>
          <p
            style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.35)" }}
            className="text-xs"
          >
            Made with care for quality
          </p>
        </div>
      </div>
    </footer>
  );
}
