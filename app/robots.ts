import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://peoplealsoask.netlify.app';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
        '/search?*', // Only block search with parameters
        '/*?*q=*' // Block query parameters containing searches
      ]
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}