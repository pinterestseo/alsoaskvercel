import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
        '/search', // Prevent crawling of search results pages
        '/*?*', // Prevent crawling of URLs with query parameters
      ]
    },
    sitemap: 'https://peoplealsoask.netlify.app/sitemap.xml',
    host: 'https://peoplealsoask.netlify.app'
  };
}