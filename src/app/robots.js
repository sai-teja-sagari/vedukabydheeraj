import { SITE_URL } from '../lib/seoConfig';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/estimator', '/api/'],
    },
    sitemap: new URL('/sitemap.xml', SITE_URL).toString(),
  };
}
