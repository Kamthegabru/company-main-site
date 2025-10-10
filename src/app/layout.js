// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeroHeader from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://seatechconsulting.com"),
  title: {
    default: "SeaTech Consulting | IT Consulting, Web & Cloud in Portland, OR",
    template: "%s | SeaTech Consulting",
  },
  description:
    "SeaTech Consulting helps organizations modernize with secure cloud, DevOps, managed IT, and high-performance web/app engineering. Based in Portland, OR—serving the Pacific Northwest.",
  keywords: [
    "IT consulting Portland", "managed IT services", "cybersecurity company",
    "cloud migration", "DevOps consulting", "web development agency Portland",
    "custom software", "SD-WAN", "network infrastructure", "Pacific Northwest IT"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://seatechconsulting.com/",
    siteName: "SeaTech Consulting",
    title: "SeaTech Consulting — Driving Digital Transformation",
    description:
      "Secure cloud, DevOps, managed IT and high-performance web/app development for growth-minded teams.",
    images: [{ url: "/og/og-default.jpg", width: 1200, height: 630, alt: "SeaTech Consulting" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SeaTech Consulting — IT, Web & Cloud",
    description:
      "Modern IT & engineering: cybersecurity, cloud/DevOps, and web/app delivery.",
    images: ["/og/og-default.jpg"],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B4D8F" },
    { media: "(prefers-color-scheme: dark)", color: "#0B4D8F" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  // Organization / Local presence schema
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SeaTech Consulting",
    url: "https://seatechconsulting.com",
    logo: "https://seatechconsulting.com/Images/logo.png",
    image: "https://seatechconsulting.com/Images/logo.png",
    telephone: "+1-206-571-7659",
    email: "info@seatechconsulting.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3055 NW YEON AVE UNTT#271",
      addressLocality: "Portland",
      addressRegion: "OR",
      postalCode: "97210",
      addressCountry: "US"
    },
    areaServed: ["US-OR", "US-WA"],
    sameAs: [
      // Add your official profiles if/when available:
      // "https://www.linkedin.com/company/your-handle",
      // "https://twitter.com/your-handle"
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Managed IT Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cybersecurity & Compliance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud & DevOps" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web/App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding & Digital Marketing" } },
    ],
  };

  const navJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      { "@type": "SiteNavigationElement", position: 1, name: "Home", url: "https://seatechconsulting.com/" },
      { "@type": "SiteNavigationElement", position: 2, name: "Companies", url: "https://seatechconsulting.com/companies" },
      { "@type": "SiteNavigationElement", position: 3, name: "Projects", url: "https://seatechconsulting.com/projects" },
      { "@type": "SiteNavigationElement", position: 4, name: "What We Do", url: "https://seatechconsulting.com/#what" },
      { "@type": "SiteNavigationElement", position: 5, name: "Contact", url: "https://seatechconsulting.com/contact" },
      { "@type": "SiteNavigationElement", position: 6, name: "Privacy Policy", url: "https://seatechconsulting.com/privacy-policy" },
    ],
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* JSON-LD (server-rendered) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(navJsonLd) }} />
        <HeroHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
