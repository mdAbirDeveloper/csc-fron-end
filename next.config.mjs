/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cities-systems.sa",
        port: '',
        pathname: '/my-bucket/**',
      },
    ],
  },
};

export default nextConfig;
