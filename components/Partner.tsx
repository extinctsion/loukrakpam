import Image from "next/image";

export default function Partner() {
  return (
    <section
      id="partner"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#7B1C1C" }}
    >
      {/* Decorative background shape */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, #D4A017 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          {/* TODO: Replace with actual product / business partnership photograph */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop&q=85"
              alt="Bulk supply of Loukrakpam Foods snacks"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(91,18,18,0.5) 0%, transparent 60%)" }}
            />
          </div>

          {/* Text Column */}
          <div>
            <p
              style={{ color: "#D4A017", fontFamily: "'Inter', sans-serif" }}
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
            >
              For Wholesalers & Retailers
            </p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF" }}
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
            >
              Partner with
              <br />
              Loukrakpam Foods
            </h2>

            <div style={{ backgroundColor: "#D4A017" }} className="w-14 h-1 mb-6 rounded-full" />

            <p
              style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Inter', sans-serif" }}
              className="text-base leading-relaxed mb-5"
            >
              We offer bulk supply with competitive pricing and flexible partnership
              options for retailers and distributors. Our goal is to be a reliable
              backend supply partner you can always count on.
            </p>
            <p
              style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Inter', sans-serif" }}
              className="text-base leading-relaxed mb-10"
            >
              Let&apos;s grow together with quality you can trust and service that keeps
              your shelves stocked on time, every time.
            </p>

            {/* Benefits */}
            <ul className="space-y-3 mb-10">
              {[
                "Competitive wholesale pricing",
                "Timely delivery, every order",
                "Flexible pack sizes for all needs",
                "Long-term business relationships",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    style={{ backgroundColor: "#D4A017", color: "#2C2C2C" }}
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span
                    style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Inter', sans-serif" }}
                    className="text-sm"
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              style={{
                backgroundColor: "#D4A017",
                color: "#2C2C2C",
                fontFamily: "'Inter', sans-serif",
              }}
              className="inline-block px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide shadow-lg hover:brightness-110 transition-all duration-200 hover:scale-105"
            >
              Become a Distributor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
