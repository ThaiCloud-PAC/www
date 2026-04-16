import { MetadataRoute } from 'next'
import { navItems, footerItems } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thaicloud.com'

  const routes = [...navItems, ...footerItems].map((route) => ({
    url: `${baseUrl}${route.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route.href === '/' ? 1 : 0.8,
  }))

  return routes;
}
