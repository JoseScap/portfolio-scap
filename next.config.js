/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  redirects: async function() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/es',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
