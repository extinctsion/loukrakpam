import Image from "next/image";

// TODO: Replace product images and details with actual client product photography and information.
// All images below are placeholder stock photos from Unsplash.
const products = [
  {
    id: 1,
    name: "Chilli Banana Chips",
    description:
      "Crispy and spicy banana chips made with real ingredients, seasoned to perfection with a bold chilli blend.",
    // TODO: Replace with actual product image
    image:
      "https://images.unsplash.com/photo-1613919517635-d86a40f59a01?w=600&h=450&fit=crop&q=85",
    imageAlt: "Chilli Banana Chips product",
    packSizes: "Available in 50g, 100g & 200g packs",
  },
  {
    id: 2,
    name: "Masala Namkeen",
    description:
      "A perfect blend of spices and crunch in every bite. A crowd-favourite snack for all occasions.",
    // TODO: Replace with actual product image
    image:
      "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&h=450&fit=crop&q=85",
    imageAlt: "Masala Namkeen product",
    packSizes: "Available in 100g & 250g packs",
  },
  {
    id: 3,
    name: "Jeera Cookies",
    description:
      "Crispy cookies infused with the warm goodness of jeera. A light, savoury snack loved by all ages.",
    // TODO: Replace with actual product image
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=450&fit=crop&q=85",
    imageAlt: "Jeera Cookies product",
    packSizes: "Available in 150g & 300g packs",
  },
  {
    id: 4,
    name: "Creamy Butter Biscuits",
    description:
      "Rich, buttery and crunchy biscuits baked fresh with quality dairy. Every bite feels indulgent.",
    // TODO: Replace with actual product image
    image:
      "https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?w=600&h=450&fit=crop&q=85",
    imageAlt: "Creamy Butter Biscuits product",
    packSizes: "Available in 100g & 200g packs",
  },
];

export default function Products() {
  return (
    <section id="products" style={{ backgroundColor: "#F5EDD8" }} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            style={{ color: "#7B1C1C", fontFamily: "'Inter', sans-serif" }}
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
          >
            What We Make
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", color: "#2C2C2C" }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Our Products
          </h2>
          <p
            style={{ color: "#4A4A4A", fontFamily: "'Inter', sans-serif" }}
            className="text-base max-w-xl mx-auto"
          >
            Quality snacks loved by customers and trusted by businesses.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  style={{ fontFamily: "'Playfair Display', serif", color: "#7B1C1C" }}
                  className="text-lg font-bold mb-2"
                >
                  {product.name}
                </h3>
                <p
                  style={{ color: "#4A4A4A", fontFamily: "'Inter', sans-serif" }}
                  className="text-sm leading-relaxed mb-3 flex-1"
                >
                  {product.description}
                </p>
                <p
                  style={{ color: "#D4A017", fontFamily: "'Inter', sans-serif" }}
                  className="text-xs font-semibold uppercase tracking-wide mb-4"
                >
                  {product.packSizes}
                </p>
                <a
                  href="#contact"
                  style={{
                    backgroundColor: "#7B1C1C",
                    color: "#FDF8F0",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  className="block text-center py-2.5 px-4 rounded-full text-sm font-semibold hover:bg-[#5a1212] transition-colors duration-200"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
