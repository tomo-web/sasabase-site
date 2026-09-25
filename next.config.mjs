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
      {
        source: '/en/experience/6th-sector',
        destination: '/en/6th-sector',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
