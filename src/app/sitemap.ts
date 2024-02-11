import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://josescap.tech',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://josescap.tech/es',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: .8,
    },
    {
      url: 'https://josescap.tech/en',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: .8,
    },
  ]
}