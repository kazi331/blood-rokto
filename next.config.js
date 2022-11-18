/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://example.com', 'images.unsplash.com'],
}
}

module.exports = nextConfig
