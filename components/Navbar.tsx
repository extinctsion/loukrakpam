"use client";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Partner", href: "#partner" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "#7B1C1C" }}
      className="fixed top-0 left-0 right-0 z-50 shadow-lg"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          {/* TODO: Replace this text logo with actual client logo image */}
          <div className="flex flex-col leading-tight">
            <span
              style={{ fontFamily: "'Playfair Display', serif", color: "#D4A017" }}
              className="text-xl font-bold tracking-wide"
            >
              Loukrakpam
            </span>
            <span
              className="text-xs tracking-[0.2em] uppercase text-white/80"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Foods
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{ fontFamily: "'Inter', sans-serif", color: "#FDF8F0" }}
                className="text-sm font-medium hover:text-yellow-300 transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              style={{
                backgroundColor: "#D4A017",
                fontFamily: "'Inter', sans-serif",
                color: "#2C2C2C",
              }}
              className="px-5 py-2 rounded-full text-sm font-semibold hover:brightness-110 transition-all duration-200 shadow"
            >
              Enquire Now
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ backgroundColor: "#5a1212" }} className="md:hidden px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'Inter', sans-serif", color: "#FDF8F0" }}
              className="block py-3 text-sm font-medium border-b border-white/10 hover:text-yellow-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              backgroundColor: "#D4A017",
              fontFamily: "'Inter', sans-serif",
              color: "#2C2C2C",
            }}
            className="mt-4 block text-center px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}
