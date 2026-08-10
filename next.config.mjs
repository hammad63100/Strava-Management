/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you notice broken styles or images on GitHub pages, you may need to uncomment and use the lines below:
  // basePath: '/Strava-Management',
};
export default nextConfig;
