import Image from "next/image";

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "#FDF8F0" }} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            {/* Section label */}
            <p
              style={{ color: "#7B1C1C", fontFamily: "'Inter', sans-serif" }}
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
            >
              Our Story
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#7B1C1C",
              }}
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
            >
              About Loukrakpam Foods
            </h2>

            <div
              style={{ backgroundColor: "#D4A017" }}
              className="w-14 h-1 mb-6 rounded-full"
            />

            <p
              style={{ color: "#4A4A4A", fontFamily: "'Inter', sans-serif" }}
              className="text-base leading-relaxed mb-5"
            >
              Loukrakpam Foods is a trusted name in the snack manufacturing industry.
              We are committed to providing high-quality, delicious snacks made with
              the finest ingredients and strict hygiene standards.
            </p>
            <p
              style={{ color: "#4A4A4A", fontFamily: "'Inter', sans-serif" }}
              className="text-base leading-relaxed mb-8"
            >
              Our goal is to build long-term relationships with wholesalers and retailers
              by delivering consistent quality and timely supply — because your business
              depends on a partner you can trust.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🌿", label: "Natural Ingredients" },
                { icon: "🧼", label: "Hygienic Facility" },
                { icon: "📦", label: "Bulk Supply Ready" },
                { icon: "🤝", label: "Retail Partners" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ backgroundColor: "#F5EDD8", border: "1px solid #E8D5A0" }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span
                    style={{ color: "#2C2C2C", fontFamily: "'Inter', sans-serif" }}
                    className="text-sm font-medium"
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              style={{ backgroundColor: "#F5EDD8" }}
              className="absolute -top-4 -right-4 w-full h-full rounded-2xl"
            />
            {/* TODO: Replace with client's actual factory / production facility photograph */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&q=85"
                alt="Loukrakpam Foods production facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div
              style={{ backgroundColor: "#7B1C1C", color: "#FDF8F0" }}
              className="absolute -bottom-5 -left-5 px-6 py-4 rounded-2xl shadow-lg"
            >
              <p
                style={{ fontFamily: "'Playfair Display', serif", color: "#D4A017" }}
                className="text-2xl font-bold leading-none"
              >
                Since
              </p>
              <p
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-sm tracking-widest mt-1"
              >
                {/* TODO: Replace with actual founding year */}
                Est. 2015
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
