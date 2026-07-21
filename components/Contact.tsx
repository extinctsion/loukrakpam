"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect this form to a backend or email service (e.g., Formspree, EmailJS, or custom API)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", businessType: "", message: "" });
    }, 3000);
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    color: "#2C2C2C",
    backgroundColor: "#FDF8F0",
    border: "1px solid #E8D5A0",
  };

  return (
    <section id="contact" style={{ backgroundColor: "#F5EDD8" }} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            style={{ color: "#7B1C1C", fontFamily: "'Inter', sans-serif" }}
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
          >
            Reach Out
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", color: "#2C2C2C" }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Get in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Details */}
          <div>
            <div
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8D5A0" }}
              className="p-8 rounded-2xl shadow-sm mb-6"
            >
              <h3
                style={{ fontFamily: "'Playfair Display', serif", color: "#7B1C1C" }}
                className="text-xl font-bold mb-6"
              >
                Loukrakpam Foods
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <span
                    style={{ backgroundColor: "#F5EDD8", color: "#7B1C1C" }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <div>
                    <p
                      style={{ fontFamily: "'Inter', sans-serif", color: "#7B1C1C" }}
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                    >
                      Address
                    </p>
                    {/* TODO: Replace with actual business address */}
                    <p style={{ color: "#4A4A4A", fontFamily: "'Inter', sans-serif" }} className="text-sm leading-relaxed">
                      Thangmeiband, Imphal West,<br />Manipur – 795001
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <span
                    style={{ backgroundColor: "#F5EDD8", color: "#7B1C1C" }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <div>
                    <p
                      style={{ fontFamily: "'Inter', sans-serif", color: "#7B1C1C" }}
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                    >
                      Phone
                    </p>
                    {/* TODO: Replace with actual phone number */}
                    <a href="tel:+919876543210" style={{ color: "#4A4A4A", fontFamily: "'Inter', sans-serif" }} className="text-sm hover:text-[#7B1C1C] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <span
                    style={{ backgroundColor: "#F5EDD8", color: "#16a34a" }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <div>
                    <p
                      style={{ fontFamily: "'Inter', sans-serif", color: "#7B1C1C" }}
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                    >
                      WhatsApp
                    </p>
                    {/* TODO: Replace phone number placeholder 91XXXXXXXXXX with actual WhatsApp number */}
                    <a
                      href="https://wa.me/91XXXXXXXXXX?text=Hi%20Loukrakpam%20Foods%2C%0A%0AI%20came%20across%20your%20website%20and%20I%20am%20interested%20in%20your%20snack%20collection.%20Could%20you%20please%20share%20the%20available%20products%2C%20pack%20sizes%2C%20and%20delivery%20details%3F%0A%0AThank%20you!"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#4A4A4A", fontFamily: "'Inter', sans-serif" }}
                      className="text-sm hover:text-green-600 transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <span
                    style={{ backgroundColor: "#F5EDD8", color: "#7B1C1C" }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <div>
                    <p
                      style={{ fontFamily: "'Inter', sans-serif", color: "#7B1C1C" }}
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                    >
                      Email
                    </p>
                    {/* TODO: Replace with actual business email */}
                    <a href="mailto:info@loukrakpamfoods.com" style={{ color: "#4A4A4A", fontFamily: "'Inter', sans-serif" }} className="text-sm hover:text-[#7B1C1C] transition-colors">
                      info@loukrakpamfoods.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8D5A0" }}
            className="p-8 rounded-2xl shadow-sm"
          >
            <h3
              style={{ fontFamily: "'Playfair Display', serif", color: "#7B1C1C" }}
              className="text-xl font-bold mb-6"
            >
              Send an Enquiry
            </h3>

            {submitted ? (
              <div
                style={{ backgroundColor: "#F5EDD8", border: "1px solid #D4A017" }}
                className="p-6 rounded-xl text-center"
              >
                <div className="text-3xl mb-2">✅</div>
                <p
                  style={{ fontFamily: "'Playfair Display', serif", color: "#7B1C1C" }}
                  className="text-lg font-bold mb-1"
                >
                  Thank you!
                </p>
                <p style={{ color: "#4A4A4A", fontFamily: "'Inter', sans-serif" }} className="text-sm">
                  We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      style={{ fontFamily: "'Inter', sans-serif", color: "#4A4A4A" }}
                      className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#7B1C1C] transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      style={{ fontFamily: "'Inter', sans-serif", color: "#4A4A4A" }}
                      className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={inputStyle}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#7B1C1C] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="businessType"
                    style={{ fontFamily: "'Inter', sans-serif", color: "#4A4A4A" }}
                    className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                  >
                    Business Type
                  </label>
                  <select
                    id="businessType"
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    style={inputStyle}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#7B1C1C] transition-all"
                  >
                    <option value="">Select business type</option>
                    <option value="retailer">Retail Shop</option>
                    <option value="wholesaler">Wholesaler / Distributor</option>
                    <option value="supermarket">Supermarket / Chain</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{ fontFamily: "'Inter', sans-serif", color: "#4A4A4A" }}
                    className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={inputStyle}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#7B1C1C] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: "#7B1C1C",
                    color: "#FDF8F0",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  className="w-full py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-[#5a1212] transition-colors duration-200 shadow"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
