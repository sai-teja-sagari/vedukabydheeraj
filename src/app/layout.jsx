import './globals.css';
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, buildLocalBusinessSchema } from '../lib/seoConfig';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Wedding Photography & Cinematography`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  const schema = buildLocalBusinessSchema();

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
