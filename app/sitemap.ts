import { type MetadataRoute } from 'next';
import { articles } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://peoplealsoask.vercel.app';
  const lastModified = new Date();

  // Generate article URLs
  const articleUrls = Object.keys(articles).map((slug) => ({
    url: `${baseUrl}/question/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }));

  // Static pages with priorities
  const staticPages = [
    { route: '', priority: 1.0 }, // Homepage gets highest priority
    { route: '/questions', priority: 0.9 },
    { route: '/about', priority: 0.7 },
    { route: '/contact', priority: 0.7 },
    { route: '/privacy', priority: 0.6 },
    { route: '/terms', priority: 0.6 },
    { route: '/category/technology', priority: 0.8 },
    { route: '/category/health', priority: 0.8 },
    { route: '/category/science', priority: 0.8 },
    { route: '/category/business', priority: 0.8 }
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority
  }));

  return [...staticPages, ...articleUrls];
}