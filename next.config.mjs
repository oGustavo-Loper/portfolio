// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    compress: false,
    images: {
      unoptimized: true
    }
  }
  
export default nextConfig