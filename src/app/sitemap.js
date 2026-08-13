import { site } from '@/content/site'
import { services } from '@/content/services'
import { posts } from '@/content/posts'


export default function sitemap() {
  const now = new Date()

  const staticRoutes = [
    { path: '', priority: 1, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/statistics', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/clients', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/about-us', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'yearly' },
  ].map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const postRoutes = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...postRoutes]
}
