/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: '/activities',
        destination: '/sasamai-club',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
