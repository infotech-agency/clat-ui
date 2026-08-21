import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.clatscholars.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/dashboard', '/api'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
