import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      {/* TODO: Replace this Unsplash image with client's own hero product photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=1600&h=900&fit=crop&q=90"
          alt="Premium snacks background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(91,18,18,0.88) 0%, rgba(44,44,44,0.70) 60%, rgba(44,44,44,0.50) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-left md:max-w-3xl lg:max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span
            style={{
              backgroundColor: "#D4A017",
              color: "#2C2C2C",
              fontFamily: "'Inter', sans-serif",
            }}
            className="text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow"
          >
            Premium Quality Snacks
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#FFFFFF",
          }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          Authentic Snacks
          <br />
          <span style={{ color: "#D4A017" }}>Crafted with Quality</span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "rgba(255,255,255,0.88)",
          }}
          className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
        >
          Loukrakpam Foods is dedicated to manufacturing delicious, hygienic and
          high-quality snacks for wholesalers and retail partners across the region.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#products"
            style={{
              backgroundColor: "#D4A017",
              color: "#2C2C2C",
              fontFamily: "'Inter', sans-serif",
            }}
            className="inline-block text-center px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide shadow-lg hover:brightness-110 transition-all duration-200 hover:scale-105"
          >
            View Products
          </a>
          <a
            href="#contact"
            style={{
              border: "2px solid rgba(255,255,255,0.7)",
              color: "#FFFFFF",
              fontFamily: "'Inter', sans-serif",
            }}
            className="inline-block text-center px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-white/10 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-14 flex flex-wrap gap-8">
          {[
            { num: "4+", label: "Product Lines" },
            { num: "100%", label: "Hygienic Process" },
            { num: "Local", label: "Reliable Delivery" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col">
              <span
                style={{ color: "#D4A017", fontFamily: "'Playfair Display', serif" }}
                className="text-2xl font-bold"
              >
                {item.num}
              </span>
              <span
                style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Inter', sans-serif" }}
                className="text-xs tracking-wide uppercase mt-0.5"
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
