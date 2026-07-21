const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Hygienic Manufacturing",
    description:
      "We follow stringent hygiene standards at every step of production to ensure safe, pure, and fresh products every time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Consistent Product Quality",
    description:
      "Every batch is crafted with care and precision, delivering the same great taste and texture that your customers expect.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Reliable Local Distribution",
    description:
      "Timely delivery and a strong supply chain to ensure smooth business operations for your wholesale or retail store.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Trusted by Retailers",
    description:
      "We are a preferred supply partner for local retailers and wholesale distributors who value quality and reliability.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ backgroundColor: "#FDF8F0" }} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            style={{ color: "#7B1C1C", fontFamily: "'Inter', sans-serif" }}
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
          >
            Our Strengths
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", color: "#2C2C2C" }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Why Choose Loukrakpam Foods?
          </h2>
          <p
            style={{ color: "#4A4A4A", fontFamily: "'Inter', sans-serif" }}
            className="text-base max-w-lg mx-auto"
          >
            We don't just make snacks — we build dependable supply partnerships rooted
            in quality, trust, and consistency.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-7 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8D5A0",
              }}
            >
              {/* Icon */}
              <div
                style={{ backgroundColor: "#F5EDD8", color: "#7B1C1C" }}
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#7B1C1C] group-hover:text-white transition-colors duration-300"
              >
                {feature.icon}
              </div>

              <h3
                style={{ fontFamily: "'Playfair Display', serif", color: "#2C2C2C" }}
                className="text-lg font-bold mb-3"
              >
                {feature.title}
              </h3>
              <p
                style={{ color: "#4A4A4A", fontFamily: "'Inter', sans-serif" }}
                className="text-sm leading-relaxed"
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
