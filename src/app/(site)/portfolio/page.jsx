import { Suspense } from 'react';
import PortfolioPage from '../../../Components/PortfolioPage';
import { buildMetadata } from '../../../lib/seoConfig';

export const metadata = buildMetadata({
  title: 'Portfolio | Veduka by Dheeraj',
  description:
    'Browse real wedding, pre-wedding, engagement, and maternity photography by Veduka by Dheeraj in Tandur, Telangana.',
  path: '/portfolio',
});

export default function Portfolio() {
  return (
    <Suspense fallback={null}>
      <PortfolioPage />
    </Suspense>
  );
}
