/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // your existing
      { protocol: "https", hostname: "expert-themes.com", pathname: "/html/globex/images/**" },
      { protocol: "https", hostname: "seatechconsulting.com", pathname: "/Images/**" },

      // Pexels (network images used below)
      { protocol: "https", hostname: "images.pexels.com", pathname: "/photos/**" },

      // (optional backup placeholder service)
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
    ],
  },
};

export default nextConfig;
