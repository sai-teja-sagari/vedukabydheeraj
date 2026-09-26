'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import founderPortrait from '../Images/about/dheeraj_founder_portrait.jpg';
import candidPhoto from '../Images/about/dheeraj_candid_event_moment.jpg';

// Both source photos are landscape (~3:2), not the portrait crop a photo-mount
// frame usually expects. Each entry's own ratio (its real px width/height) is
// applied to whichever box it's rendered in, so object-cover always has an
// exactly matching box to fill — no cropping, in either the main or inset slot.
// Candid shot is first/default main, per current photo direction; clicking the
// inset photo swaps the two.
const PHOTOS = [
  {
    src: candidPhoto,
    alt: 'Dheeraj on a call while coordinating a live event',
    ratio: 1170 / 774,
  },
  {
    src: founderPortrait,
    alt: 'Dheeraj, founder and lead photographer of Veduka by Dheeraj',
    ratio: 1170 / 759,
  },
];

// NOTE: the four stat figures below (500+, 600+, 10+, 100%) are placeholders —
// replace with real, accurate numbers before publishing.
const STATS = [
  { Icon: HeartIcon, number: '500+', label: 'Happy Clients' },
  { Icon: CalendarIcon, number: '600+', label: 'Events Covered' },
  { Icon: ClockIcon, number: '10+', label: 'Years Experience' },
  { Icon: ShieldCheckIcon, number: '100%', label: 'Client Satisfaction' },
];

function HeartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 21s-7.5-4.686-10-9.333C.5 8.5 2 4.5 6 4.5c2.2 0 3.7 1.2 6 4 2.3-2.8 3.8-4 6-4 4 0 5.5 4 4 7.167C19.5 16.314 12 21 12 21z" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function ShieldCheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function AboutPhotographer({ headingLevel = 'h2' }) {
  const Heading = headingLevel;
  const [mainIndex, setMainIndex] = useState(0);
  const insetIndex = mainIndex === 0 ? 1 : 0;
  const main = PHOTOS[mainIndex];
  const inset = PHOTOS[insetIndex];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="veduka-about bg-[#FBF6EC] px-6 py-16 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[70px]">
        {/* ===== LEFT COLUMN: PHOTO =====
            Both photos below are real placement-ready shots of Dheeraj, not
            generic placeholders — swap the imports in PHOTOS above if a
            different pair of final images is chosen later. */}
        <div className="relative mx-auto w-[280px] lg:mx-0 lg:w-full">
          {/* Decorative offset outline frame — purely cosmetic, sits outside the photo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-3.5 rounded-[24px] border border-[#DCC98F]"
          />

          {/* Main photo */}
          <div
            style={{ aspectRatio: main.ratio }}
            className="relative overflow-hidden rounded-[20px] border-[8px] border-white shadow-xl"
          >
            <Image
              src={main.src}
              alt={main.alt}
              fill
              priority
              sizes="(min-width: 1024px) 480px, 280px"
              className="object-cover"
            />
          </div>

          {/* Secondary/inset photo: click to swap it into the main spot above */}
          <button
            type="button"
            onClick={() => setMainIndex(insetIndex)}
            aria-label={`Show this as the main photo: ${inset.alt}`}
            className="absolute bottom-[-20px] left-[-18px] w-[88px] cursor-pointer transition-transform hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C7620] focus-visible:ring-offset-2 lg:bottom-[-24px] lg:left-[-30px] lg:w-[130px]"
          >
            <span
              style={{ aspectRatio: inset.ratio }}
              className="relative block overflow-hidden rounded-[12px] border-[6px] border-white shadow-lg"
            >
              <Image
                src={inset.src}
                alt={inset.alt}
                fill
                sizes="(min-width: 1024px) 130px, 88px"
                className="object-cover"
              />
            </span>
            <span className="mt-2 block text-center text-[9px] font-semibold uppercase leading-tight tracking-[0.08em] text-[#9C7620] lg:text-[10px] lg:whitespace-nowrap lg:tracking-[0.15em]">
              Behind the Lens
            </span>
          </button>
        </div>

        {/* ===== RIGHT COLUMN: CONTENT ===== */}
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9C7620]">
            About Us
          </p>

          {/* headingLevel defaults to h2 since Hero already owns the homepage's h1;
              the standalone /about page passes headingLevel="h1" instead. */}
          <Heading
            id="about-heading"
            className="veduka-about__heading mt-3 text-[28px] font-bold leading-tight text-[#241C12] lg:text-[42px]"
          >
            Welcome to Veduka by Dheeraj
          </Heading>

          <p className="mt-2 text-sm italic text-[#6B5A42] lg:text-base">
            Founder &amp; Lead Photographer
          </p>

          <p className="veduka-about__lead mt-4 text-lg italic leading-snug text-[#9C7620] lg:text-xl">
            Every photograph should tell a story — not just show a moment.
          </p>

          <p className="mt-6 max-w-[560px] text-sm leading-[1.8] text-[#5C5142] lg:text-base">
            Founded by <span className="font-semibold text-[#9C7620]">Dheeraj Dandu</span>, our lead
            photographer, we&apos;re passionate about capturing genuine emotions, beautiful
            connections, and unforgettable moments that become cherished memories for a lifetime.
            We specialize in wedding photography, pre-wedding shoots, engagements, maternity
            sessions, and special events.
          </p>

          <p className="mt-4 max-w-[560px] text-sm leading-[1.8] text-[#5C5142] lg:text-base">
            Our approach combines candid storytelling with artistic composition, because every
            client and every occasion is unique — and deserves to be captured that way.
          </p>

          <blockquote className="mt-7 border-l-[3px] border-[#C9A227] pl-5">
            <p className="veduka-about__quote text-base italic leading-snug text-[#241C12] lg:text-lg">
              &ldquo;The best wedding photographs are the ones nobody posed for.&rdquo;
            </p>
            <cite className="mt-2 block text-[11px] font-bold uppercase not-italic tracking-[0.12em] text-[#9C7620] lg:text-xs">
              — Dheeraj Dandu, Founder &amp; Lead Photographer
            </cite>
          </blockquote>

          {/* ===== STATS GRID ===== */}
          <div className="mt-9 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {STATS.map(({ Icon, number, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-[#E9DCBB] bg-[#F5EDDC] px-4 py-5 text-center"
              >
                <Icon className="mx-auto h-6 w-6 text-[#9C7620]" />
                <p className="veduka-about__stat-number mt-3 text-xl font-bold text-[#241C12] lg:text-2xl">
                  {number}
                </p>
                <p className="mt-1 text-[11px] text-[#6B5A42] lg:text-xs">{label}</p>
              </div>
            ))}
          </div>

          {/* ===== CTA ROW =====
              TODO: point "Select Your Package" at the estimator flow's real
              entry route if /estimator ever changes. */}
          <div className="mt-8 flex flex-col gap-4 lg:mt-9 lg:flex-row lg:items-center lg:gap-6">
            <Link
              href="/estimator"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0F2A1E] px-8 py-4 text-sm font-medium text-[#FBF6EC] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2A1E] focus-visible:ring-offset-2 lg:w-auto"
            >
              Select Your Package
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/portfolio"
              className="text-center text-sm font-medium text-[#9C7620] underline decoration-[#C9A227] underline-offset-4 hover:opacity-80 lg:text-left"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPhotographer;
