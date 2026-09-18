'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '../Images/veduka_by_dheeraj_ultraHD_transparent.png';

// "Portfolio" and "Contact" are real separate routes; the rest are anchors
// on the homepage.
const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About Us', to: '/#about' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // defaults closed - no hydration flash
  const [activeLink, setActiveLink] = useState('Home');
  const pathname = usePathname();

  // Navbar is shared across routes, so derive the Portfolio/Contact
  // highlight from the actual URL rather than only from local click state.
  const currentActive =
    pathname === '/contact'
      ? 'Contact'
      : pathname === '/portfolio'
      ? 'Portfolio'
      : activeLink;

  const hamburgerRef = useRef(null);
  const panelRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    hamburgerRef.current?.focus(); // restore focus to the trigger on close
  };

  const handleLinkClick = (label) => {
    setActiveLink(label);
    closeMenu();
  };

  // Escape to close, focus trap while open, and lock body scroll
  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = 'hidden';

    const focusableSelector =
      'a[href], button:not([disabled])';
    const panel = panelRef.current;
    const focusables = panel
      ? Array.from(panel.querySelectorAll(focusableSelector))
      : [];
    focusables[0]?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu();
        return;
      }

      if (e.key === 'Tab' && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  // Clicking outside the menu panel closes it
  const handleOverlayClick = (e) => {
    if (panelRef.current && !panelRef.current.contains(e.target)) {
      closeMenu();
    }
  };

  return (
    <div className="veduka-navbar">
      {/* ===== DESKTOP BAR (>= lg) ===== */}
      <nav
        aria-label="Main navigation"
        className="hidden lg:flex h-[104px] items-center justify-between bg-[#FBF6EC] border-b border-[#DCC98F] px-16"
      >
        <Link href="/" onClick={() => setActiveLink('Home')} aria-label="Veduka by Dheeraj home">
          <Image src={logo} alt="Veduka by Dheeraj" priority className="h-[58px] w-auto" />
        </Link>

        <div className="flex items-center gap-11">
          {NAV_LINKS.map(({ label, to }) => {
            const isActive = currentActive === label;
            return (
              <Link
                key={label}
                href={to}
                onClick={() => setActiveLink(label)}
                className={`veduka-navbar__link relative pb-2 text-[13px] font-medium uppercase tracking-[0.15em] transition-colors ${
                  isActive ? 'text-[#8A6A1F]' : 'text-[#4A3B2A] hover:text-[#8A6A1F]'
                }`}
              >
                {label}
                {/* ===== LINK UNDERLINE LOGIC ===== */}
                <span
                  className={`veduka-navbar__underline absolute left-0 -bottom-0 h-[2px] w-full bg-[#C9A227] ${
                    isActive ? 'veduka-navbar__underline--active' : ''
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* ===== CTA BUTTON (desktop) ===== */}
        <Link
          href="/estimator"
          className="rounded-full bg-[#C9A227] px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.15em] text-[#FBF6EC] transition-colors hover:bg-[#B08D1F]"
        >
          Select your package
        </Link>
      </nav>

      {/* ===== MOBILE BAR (< lg) ===== */}
      <nav
        aria-label="Main navigation"
        className="lg:hidden flex h-[78px] items-center justify-between bg-[#FBF6EC] border-b border-[#DCC98F] px-6"
      >
        <Link href="/" onClick={() => setActiveLink('Home')} aria-label="Veduka by Dheeraj home">
          <Image src={logo} alt="Veduka by Dheeraj" className="h-[34px] w-auto" />
        </Link>

        <button
          ref={hamburgerRef}
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-[6px]"
        >
          <span
            className={`veduka-navbar__bar block h-[2px] w-6 bg-[#4A3B2A] ${
              menuOpen ? 'veduka-navbar__bar--top-open' : ''
            }`}
          />
          <span
            className={`veduka-navbar__bar block h-[2px] w-6 bg-[#4A3B2A] ${
              menuOpen ? 'veduka-navbar__bar--mid-open' : ''
            }`}
          />
          <span
            className={`veduka-navbar__bar block h-[2px] w-6 bg-[#4A3B2A] ${
              menuOpen ? 'veduka-navbar__bar--bottom-open' : ''
            }`}
          />
        </button>
      </nav>

      {/* ===== MOBILE OVERLAY MENU ===== */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        onClick={handleOverlayClick}
        className={`veduka-navbar__overlay lg:hidden fixed inset-0 z-50 bg-[#FBF6EC] ${
          menuOpen ? 'veduka-navbar__overlay--open' : 'pointer-events-none'
        }`}
      >
        <div ref={panelRef} className="flex h-full flex-col">
          <div className="flex h-[78px] items-center justify-between px-6">
            <Link href="/" onClick={() => handleLinkClick('Home')} aria-label="Veduka by Dheeraj home">
              <Image src={logo} alt="Veduka by Dheeraj" className="h-[34px] w-auto" />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="text-[#4A3B2A]"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-0">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={label}
                href={to}
                onClick={() => handleLinkClick(label)}
                className="w-[220px] border-b border-[#E9DCC0] py-4 text-center text-[17px] font-medium uppercase tracking-[0.1em] text-[#4A3B2A] hover:text-[#8A6A1F]"
              >
                {label}
              </Link>
            ))}

            {/* ===== CTA BUTTON (mobile overlay) ===== */}
            <Link
              href="/estimator"
              onClick={closeMenu}
              className="mt-10 rounded-full bg-[#C9A227] px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.15em] text-[#FBF6EC] transition-colors hover:bg-[#B08D1F]"
            >
              Select your package
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
