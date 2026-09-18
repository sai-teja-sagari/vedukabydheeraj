import { SITE_URL } from '../lib/seoConfig';

// /estimator is deliberately excluded — it's a checkout-style utility flow,
// not indexable content.
const ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/wedding-photography', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/pre-wedding-photography', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/wedding-cinematography', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/birthday-photography', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/event-photography', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/portfolio', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified,
    changeFrequency,
    priority,
  }));
}
