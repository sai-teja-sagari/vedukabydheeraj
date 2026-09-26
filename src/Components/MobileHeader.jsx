'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import logo from '../Images/veduka_by_dheeraj_ultraHD_transparent.png';
import { NAV_LINKS } from './navLinks';

function MobileHeader({ className = '' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const panelRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    hamburgerRef.current?.focus(); // restore focus to the trigger on close
  };

  // Escape to close, focus trap while open, and lock body scroll
  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = 'hidden';

    const focusableSelector = 'a[href], button:not([disabled])';
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
    <header
      role="banner"
      className={`veduka-mobile-header relative bg-[#FBF6EC] border-b border-[#DCC98F] px-5 py-7 ${className}`}
    >
      <div className="flex justify-center">
        <Link href="/" aria-label="Veduka by Dheeraj home">
          {/*
            Logo is displayed ~2x larger here than the old compact mobile bar
            (68px vs 34px tall). The current export still holds up at this
            size, but if it's ever re-exported, keep it comfortably above 2x
            the display height (~272px tall) so it stays sharp on retina
            screens.
          */}
          <Image src={logo} alt="Veduka by Dheeraj" className="h-[68px] w-auto" />
        </Link>
      </div>

      <button
        ref={hamburgerRef}
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#DCC98F] bg-transparent"
      >
        {menuOpen ? (
          <X size={18} className="text-[#4A3B2A]" />
        ) : (
          <Menu size={18} className="text-[#4A3B2A]" />
        )}
      </button>

      {/* ===== MOBILE OVERLAY MENU =====
          top-[125px] sits flush below the header (py-7 top/bottom + h-[68px]
          logo + 1px border = 125px), so the header - and the hamburger button
          inside it - stays in normal flow above the overlay instead of being
          covered by it. Keep this in sync if the header's padding/logo size
          change. */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        onClick={handleOverlayClick}
        className={`veduka-mobile-header__overlay fixed inset-x-0 bottom-0 top-[125px] z-40 bg-[#FBF6EC] ${
          menuOpen ? 'veduka-mobile-header__overlay--open' : 'pointer-events-none'
        }`}
      >
        <div ref={panelRef} className="flex h-full flex-col">
          <div className="flex flex-1 flex-col items-center justify-center gap-0">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={label}
                href={to}
                onClick={closeMenu}
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
    </header>
  );
}

export default MobileHeader;
