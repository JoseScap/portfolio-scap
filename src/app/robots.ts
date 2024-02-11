import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/', '/es', '/en'],
        disallow: '/private/',
      },
    ],
    sitemap: 'https://josescap.tech/sitemap.xml',
  }
}