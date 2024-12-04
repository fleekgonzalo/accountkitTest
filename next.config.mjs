/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Exclude problematic Node.js modules from the build process
    config.externals.push("pino-pretty", "lokijs", "encoding", "async_hooks");
    return config;
  },
  experimental: {
    runtime: 'edge', // Ensure Edge Runtime is explicitly enabled
  },
};

export default nextConfig;
