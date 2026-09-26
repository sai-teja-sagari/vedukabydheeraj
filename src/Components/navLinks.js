// Shared between the desktop nav and MobileHeader so both stay in sync.
// "Portfolio", "About Us", and "Contact" are real separate routes; "Services"
// is an anchor on the homepage.
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact', to: '/contact' },
];
