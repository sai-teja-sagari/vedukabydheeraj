// Shared between the desktop nav and MobileHeader so both stay in sync.
// "Portfolio" and "Contact" are real separate routes; the rest are anchors
// on the homepage.
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About Us', to: '/#about' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact', to: '/contact' },
];
