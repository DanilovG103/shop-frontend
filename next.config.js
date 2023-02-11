/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGE_DOMAIN],
  },
}

module.exports = nextConfig
