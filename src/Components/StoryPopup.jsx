'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

// How far down the page (as a fraction of total scroll height) the visitor
// must reach before the popup fires. 0.58 (~58%) is a starting guess — tune
// this once real page content/length is in place; a short page will hit
// this early, a long one may need a lower ratio to fire at a sane scroll depth.
const SCROLL_TRIGGER_RATIO = 0.58;

const WHATSAPP_LINK =
  "https://wa.me/919133002002?text=Hi!%20I'd%20love%20to%20know%20more%20about%20your%20photography%20packages";

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </svg>
);

const CameraSparkleIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <g fill="none" stroke="#C9A227" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 24l3-5h14l3 5" />
      <rect x="10" y="24" width="44" height="28" rx="5" />
      <circle cx="32" cy="38" r="9" />
    </g>
    <g stroke="#E8BE4E" strokeWidth="2.2" strokeLinecap="round">
      <path d="M12 14v6M9 17h6" />
      <path d="M52 12v6M49 15h6" />
    </g>
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#25D366" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.06L2 22l5.11-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm5.68 14.24c-.24.68-1.4 1.32-1.92 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.66-.6-2.92-1.26-4.83-4.2-4.98-4.4-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.28.58-.35.77-.35h.55c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.14.11.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.14-.29.29-.12.57.16.28.75 1.24 1.61 2 1.11 1 2.05 1.3 2.34 1.45.29.14.46.12.63-.05.18-.18.75-.87.95-1.17.2-.29.4-.24.66-.15.27.1 1.7.8 2 .95.29.14.48.21.55.33.07.14.07.72-.17 1.4Z" />
  </svg>
);

function StoryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const cardRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const closePopup = () => {
    setIsOpen(false);
  };

  // Scroll-depth trigger: watch a sentinel placed partway down the document
  // instead of computing scroll percentage on every scroll event. Fires once
  // per page load/visit — closing it doesn't suppress it on the next visit.
  // StoryPopup lives outside <Routes> (mounted once for the whole app), so
  // this only runs on the homepage — otherwise the sentinel's absolute pixel
  // offset (sized to the homepage) would linger in the DOM after navigating
  // to a shorter route like /contact, inflating that page's scroll height
  // and leaving visible white space below the footer.
  useEffect(() => {
    if (pathname !== '/') return undefined;

    const sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.position = 'absolute';
    sentinel.style.top = `${document.documentElement.scrollHeight * SCROLL_TRIGGER_RATIO}px`;
    sentinel.style.left = '0';
    sentinel.style.width = '1px';
    sentinel.style.height = '1px';
    sentinel.style.pointerEvents = 'none';
    document.body.appendChild(sentinel);

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsOpen(true);
        observer.disconnect();
      }
    });
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, [pathname]);

  // Focus trap + Escape-to-close + restore focus on close, only while open
  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement;
    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const focusableSelector = 'a[href], button:not([disabled])';
    const getFocusables = () =>
      cardRef.current ? Array.from(cardRef.current.querySelectorAll(focusableSelector)) : [];

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closePopup();
        return;
      }

      if (e.key === 'Tab') {
        const focusables = getFocusables();
        if (focusables.length === 0) return;
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
      previousFocusRef.current?.focus?.();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="veduka-popup__backdrop fixed inset-0 z-50 flex items-center justify-center bg-[rgba(10,8,6,0.55)] p-[22px] backdrop-blur-[3px] md:p-0"
      onClick={closePopup}
    >
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="story-popup-headline"
        onClick={(e) => e.stopPropagation()}
        className="veduka-popup__card veduka-popup relative w-full max-w-[640px] rounded-[20px] bg-[#FBF6EC] p-[38px_26px_30px] text-center shadow-[0_60px_120px_rgba(0,0,0,0.5)] md:rounded-[22px] md:p-[56px_56px_44px]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close"
          onClick={closePopup}
          className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#F1E7D2] text-[#8A6A1F] md:right-[22px] md:top-[22px] md:h-[34px] md:w-[34px]"
        >
          <CloseIcon />
        </button>

        <CameraSparkleIcon className="mx-auto mb-4 h-12 w-12 md:mb-[22px] md:h-16 md:w-16" />

        <h2
          id="story-popup-headline"
          className="veduka-popup__headline text-[22px] leading-[1.2] text-[#9C7620] md:text-[34px]"
        >
          Let&apos;s Capture Your Story
        </h2>

        <p className="mt-3 text-[12px] leading-[1.65] text-[#4A3B2A] md:mt-4 md:text-base md:leading-normal">
          Turning your biggest moments into timeless memories, one frame at a time.
        </p>
        <p className="mt-2 text-[12px] leading-[1.65] text-[#4A3B2A] md:text-base md:leading-normal">
          <span className="font-semibold text-[#9C7620]">Connect with us on WhatsApp</span> to discuss your
          dream shoot.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-full border border-[#D9BE7A] bg-[linear-gradient(180deg,#F3E4B8,#E8CE86)] py-3.5 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#241C12] md:mt-7 md:py-[18px] md:text-sm"
        >
          <WhatsAppIcon className="h-[17px] w-[17px] md:h-5 md:w-5" />
          Let&apos;s create magic!
        </a>

        <button
          type="button"
          onClick={closePopup}
          className="mt-4 block w-full text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[#8A7A6E] md:mt-[22px] md:text-xs"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}

export default StoryPopup;
