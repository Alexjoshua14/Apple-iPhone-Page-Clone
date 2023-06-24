/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.apple.com',
        pathname: '/**',
      }
    ]
  }

}

module.exports = nextConfig
