/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    // Modern formats first
    formats: ["image/avif", "image/webp"],

    // Let next/image handle crisp responsive srcsets
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 24, 32, 48, 64, 96, 128],

    // Allow SVG icons (e.g., Simple Icons, Devicons)
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // Remote images you’re using
    remotePatterns: [
      // Existing
      { protocol: "https", hostname: "expert-themes.com", pathname: "/html/globex/images/**" },
      { protocol: "https", hostname: "seatechconsulting.netlify.app", pathname: "/Images/**" },

      // Pexels (network images)
      { protocol: "https", hostname: "images.pexels.com", pathname: "/photos/**" },

      // Unsplash (stock images)
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },

      // Simple Icons (SVG tech logos like Laravel, React, etc.)
      { protocol: "https", hostname: "cdn.simpleicons.org", pathname: "/**" },

      // Devicons hosted on jsDelivr (Angular, React, etc.)
      { protocol: "https", hostname: "cdn.jsdelivr.net", pathname: "/gh/devicons/**" },

      // Optional placeholder service
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
    ],

    // Cache hint for optimized images (in seconds)
    minimumCacheTTL: 60 * 60 * 24, // 24h
  },

  // (Optional) trims bundle size a bit when importing icons/components
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
