import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "live.staticflickr.com" },
      { protocol: "https", hostname: "burst.shopifycdn.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
}

export default nextConfig
