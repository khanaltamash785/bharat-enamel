/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable image optimization for development/simple hosting
  },
  // If you're deploying to a subdirectory, uncomment and set:
  // basePath: '/your-subdirectory',
  // assetPrefix: '/your-subdirectory',
};

export default nextConfig;
