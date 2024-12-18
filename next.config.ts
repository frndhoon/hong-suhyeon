import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'img1.daumcdn.net',
      },
    ],
  },
};

export default nextConfig;
