// Central SEO config — every page's metadata is built through
// `buildMetadata()` below so canonical URLs, Open Graph, and Twitter
// card data all stay consistent without copy-pasting boilerplate.
//
export const SITE_URL = 'https://www.vedukabydheeraj.in';

export const SITE_NAME = 'Veduka by Dheeraj';

export const DEFAULT_DESCRIPTION =
  'Veduka by Dheeraj is a wedding photography and cinematography studio based in Tandur, Telangana, creating timeless stories across South India.';

export const BUSINESS = {
  name: SITE_NAME,
  telephone: '+91-91330-02002',
  email: 'vedukabydheeraj@gmail.com',
  address: 'Tandur, Telangana, India',
};

/**
 * Builds a full Next.js Metadata object for a page.
 * @param {Object} opts
 * @param {string} opts.title - Page-specific title (site name is appended automatically).
 * @param {string} opts.description - Unique, page-specific meta description.
 * @param {string} opts.path - Route path starting with "/", e.g. "/wedding-photography".
 * @param {string} [opts.image] - Absolute or root-relative image URL for Open Graph/Twitter previews.
 * @param {boolean} [opts.noIndex] - Set true for utility routes that shouldn't be indexed.
 */
export function buildMetadata({ title, description, path, image, noIndex = false }) {
  const url = new URL(path, SITE_URL).toString();
  const ogImage = image ? new URL(image, SITE_URL).toString() : new URL('/og-default.jpg', SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// LocalBusiness JSON-LD, injected once sitewide in the root layout — helps
// search engines understand this is a real local photography business
// (name/contact/service area), which can surface rich results.
export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: BUSINESS.name,
        url: SITE_URL,
        description: DEFAULT_DESCRIPTION,
      },
      {
        '@type': ['ProfessionalService', 'LocalBusiness'],
        name: BUSINESS.name,
        image: new URL('/og-default.jpg', SITE_URL).toString(),
        url: SITE_URL,
        telephone: BUSINESS.telephone,
        email: BUSINESS.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Tandur',
          addressRegion: 'Telangana',
          addressCountry: 'IN',
        },
        areaServed: 'India',
        priceRange: '₹₹',
        serviceType: [
          'Wedding Photography',
          'Wedding Cinematography',
          'Pre-Wedding Photography',
          'Birthday Photography',
          'Event Photography',
          'Maternity Photography',
        ],
      },
    ],
  };
}
