import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loukrakpam Foods – Authentic Snacks for Wholesalers & Retailers",
  description:
    "Loukrakpam Foods manufactures high-quality, hygienic snacks for wholesalers and retail partners. Discover our range of chips, namkeen, biscuits and more.",
  keywords:
    "Loukrakpam Foods, snacks manufacturer, wholesale snacks, namkeen, chips, biscuits, Manipur, food manufacturer",
  openGraph: {
    title: "Loukrakpam Foods – Authentic Snacks Crafted with Quality",
    description:
      "Premium snack manufacturing for wholesalers and retailers. Quality ingredients, strict hygiene, reliable supply.",
    type: "website",
    locale: "en_IN",
    siteName: "Loukrakpam Foods",
    // TODO: Replace with actual OG image URL once client provides branding assets
    images: [
      {
        url: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Loukrakpam Foods – Authentic Snacks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loukrakpam Foods – Authentic Snacks Crafted with Quality",
    description:
      "Premium snack manufacturing for wholesalers and retailers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
