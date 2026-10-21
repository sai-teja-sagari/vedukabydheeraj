import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../Images/veduka_by_dheeraj_ultraHD_transparent.png';

// "Portfolio", "About Us", and "Contact" are real separate routes; "Services"
// is an anchor on the homepage.
const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact', to: '/contact' },
];

const CONTACT = {
  address: ['Tandur, Telangana,', 'India'],
  phone: '+91 91330 02002',
  phoneHref: 'tel:+919133002002',
  whatsappHref: 'https://wa.me/919133002002',
  email: 'vedukabydheeraj@gmail.com',
};

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/vedukabydheeraj?xtok=MTA1d3lwNjBtcm0zeA==',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: CONTACT.whatsappHref,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 3.5a8.5 8.5 0 0 0-7.35 12.8L3.5 20.5l4.3-1.13A8.5 8.5 0 1 0 12 3.5Z" />
        <path
          d="M9.1 8.3c.18-.4.37-.42.55-.42.14 0 .3 0 .43 0 .14 0 .33-.05.51.4.19.47.65 1.58.71 1.7.06.12.1.26.02.42-.08.15-.12.25-.24.38-.12.14-.25.3-.36.41-.12.12-.24.25-.1.5.13.24.6 1 1.29 1.62.89.79 1.64 1.03 1.9 1.15.19.09.3.07.42-.05.13-.14.55-.62.7-.83.15-.21.29-.18.49-.11.2.07 1.28.6 1.5.71.22.11.37.17.42.26.06.1.06.55-.13 1.08-.19.53-1.1.98-1.5 1.03-.4.06-.9.08-1.45-.09-.34-.1-.77-.24-1.32-.48-2.32-1-3.83-3.34-3.95-3.5-.12-.16-.98-1.3-.98-2.47 0-1.18.62-1.75.85-1.99Z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@dheerajdandudandu7262?si=JDymXyWXPN9QMlam',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="6" width="18" height="12" rx="4" />
        <path d="M11 9.5v5l4-2.5-4-2.5Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

// If portfolioUrl is empty, the credit renders as plain text instead of a link.
const DEVELOPER = {
  name: 'Sai Teja Sagari',
  portfolioUrl: 'https://www.linkedin.com/in/sai-teja-sagari/',
  instagramUrl: 'https://www.instagram.com/sai_teja_sagari?obrf=MXVubnkyaWFmdTVo&utm_source=qr',
};

const CONTACT_ITEMS = [
  { icon: <MapPin size={18} strokeWidth={1.6} />, label: 'Studio address', value: CONTACT.address },
  { icon: <Phone size={18} strokeWidth={1.6} />, label: 'Call / WhatsApp', value: [CONTACT.phone], href: CONTACT.phoneHref },
  { icon: <Mail size={18} strokeWidth={1.6} />, label: 'Email enquiries', value: [CONTACT.email], href: `mailto:${CONTACT.email}` },
];

function Footer() {
  return (
    <footer role="contentinfo" className="veduka-footer bg-[#F1E7D2] border-t border-[#DCC98F]">
      <div className="px-6 py-14 md:px-20 md:py-16">
        <div className="grid grid-cols-1 gap-14 text-center md:grid-cols-[1.3fr_1fr_1.2fr] md:gap-[60px] md:text-left">
          {/* ===== BRAND COLUMN ===== */}
          <div className="flex flex-col items-center md:items-start">
            <Image src={logo} alt="Veduka by Dheeraj" className="h-[46px] md:h-[52px] w-auto" />

            <p className="veduka-footer__tagline mt-5 max-w-[260px] italic leading-[1.6] text-[#6B5A42] md:max-w-[300px]">
              Turning your biggest moments into timeless memories, one frame at a time.
            </p>

            <div className="mt-6 flex gap-[14px]">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="veduka-footer__social flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#C9A227] text-[#9C7620] hover:border-[#9C7620] md:h-10 md:w-10"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ===== QUICK LINKS COLUMN ===== */}
          <div className="border-t border-[#DCC98F] pt-8 md:border-0 md:pt-0">
            <h3 className="text-[12px] font-semibold uppercase tracking-widest text-[#9C7620] md:text-[13px]">
              Quick Links
            </h3>
            <ul className="mt-5 flex flex-col items-center gap-[14px] md:mt-6 md:items-start md:gap-[15px]">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    href={to}
                    className="veduka-footer__link text-[14px] text-[#4A3B2A] hover:text-[#9C7620] md:text-[15px]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== CONTACT COLUMN ===== */}
          <div className="border-t border-[#DCC98F] pt-8 md:border-0 md:pt-0">
            <h3 className="text-[12px] font-semibold uppercase tracking-widest text-[#9C7620] md:text-[13px]">
              Get in Touch
            </h3>
            <div className="mt-5 flex flex-col items-center gap-[18px] md:mt-6 md:items-start">
              {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
                <div key={label} className="flex flex-col items-center gap-1 md:flex-row md:items-start md:gap-3">
                  <span className="hidden shrink-0 text-[#9C7620] md:mt-0.5 md:block">{icon}</span>
                  <div>
                    <p className="text-[11.5px] uppercase tracking-wide text-[#8A6E36]">{label}</p>
                    {href ? (
                      <a href={href} className="veduka-footer__link text-[14px] text-[#4A3B2A] hover:text-[#9C7620] md:text-[15px]">
                        {value.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </a>
                    ) : (
                      <address className="text-[14px] not-italic text-[#4A3B2A] md:text-[15px]">
                        {value.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="mt-14 border-t border-[#DCC98F] pt-6 md:mt-16">
          <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-center md:justify-between md:gap-0 md:text-left">
            <p className="text-[13px] text-[#8A7A5E]">© 2026 Veduka by Dheeraj. All Rights Reserved.</p>
            <div className="flex flex-col items-center gap-2 md:items-end">
              <p className="text-[13px] text-[#8A7A5E]">
                Crafted by{' '}
                {DEVELOPER.portfolioUrl ? (
                  <a
                    href={DEVELOPER.portfolioUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="veduka-footer__link font-medium text-[#9C7620] hover:text-[#4A3B2A]"
                  >
                    {DEVELOPER.name}
                  </a>
                ) : (
                  <span className="font-medium text-[#9C7620]">{DEVELOPER.name}</span>
                )}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={DEVELOPER.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sai Teja Sagari on Instagram"
                  className="veduka-footer__social flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A227] text-[#9C7620] hover:border-[#9C7620]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href={DEVELOPER.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sai Teja Sagari on LinkedIn"
                  className="veduka-footer__social flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A227] text-[#9C7620] hover:border-[#9C7620]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M5.2 3.5a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.4 9h3.6v11.5H3.4V9Zm5.8 0h3.4v1.6h.05a3.7 3.7 0 0 1 3.35-1.85c3.58 0 4.24 2.35 4.24 5.4v6.35h-3.6v-5.63c0-1.35-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.73H9.2V9Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
