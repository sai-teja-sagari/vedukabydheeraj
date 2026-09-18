import { Suspense } from 'react';
import PortfolioPage from '../../../Components/PortfolioPage';
import { buildMetadata } from '../../../lib/seoConfig';

export const metadata = buildMetadata({
  title: 'Wedding & Pre-Wedding Photography Portfolio',
  description:
    'Browse real wedding, pre-wedding, engagement, and maternity photography by Veduka by Dheeraj — candid moments and traditional ceremony coverage from real celebrations.',
  path: '/portfolio',
});

export default function Portfolio() {
  return (
    <Suspense fallback={null}>
      <PortfolioPage />
    </Suspense>
  );
}
