/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Prefer remotePatterns for fine-grained matching
    remotePatterns: [
      {
        protocol: "https",
        hostname: "expert-themes.com",
        pathname: "/html/globex/images/**",
      },
      {
        protocol: "https",
        hostname: "seatechconsulting.com",
        pathname: "/Images/**",
      },
    ],
  },
};

export default nextConfig;
