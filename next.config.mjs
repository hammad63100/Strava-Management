/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  ...(process.env.NODE_ENV === 'production' ? { basePath: '/Strava-Management' } : {}),
};
export default nextConfig;
