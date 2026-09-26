'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '../Images/veduka_by_dheeraj_ultraHD_transparent.png';
import { NAV_LINKS } from './navLinks';
import MobileHeader from './MobileHeader';

function Navbar() {
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

      {/* ===== MOBILE HEADER (< lg) ===== */}
      <MobileHeader className="lg:hidden" />
    </div>
  );
}

export default Navbar;
