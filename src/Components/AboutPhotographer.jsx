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

const APPROACH_POINTS = [
  { number: '01', title: 'Real Moments', body: 'Natural emotions over forced poses.' },
  {
    number: '02',
    title: 'Thoughtful Storytelling',
    body: 'We focus on the moments and details that make your celebration unique.',
  },
  {
    number: '03',
    title: 'Personal Attention',
    body: 'Clear communication and thoughtful planning from enquiry to delivery.',
  },
];

const BRAND_VALUES = [
  { title: 'Photography + Films', body: 'Complete visual storytelling' },
  { title: 'Tandur Based', body: 'Serving celebrations from Tandur and beyond' },
  { title: 'Candid Storytelling', body: 'Real moments, naturally captured' },
  { title: 'Personal Approach', body: 'A thoughtful experience from enquiry to delivery' },
];

const STORIES = [
  {
    title: 'Weddings',
    body: 'Capturing the emotions, rituals, people and celebrations that make your wedding yours.',
  },
  {
    title: 'Pre-weddings',
    body: 'Natural couple portraits and location-based storytelling.',
  },
  {
    title: 'Cinematography',
    body: 'Cinematic films that bring the emotions and atmosphere of your celebration back to life.',
  },
  {
    title: 'Celebrations',
    body: 'Engagements, birthdays, maternity and other meaningful occasions.',
  },
];

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
      className="veduka-about bg-[#FBF6EC] px-6 py-14 lg:px-16 lg:py-16"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[70px]">
          <div className="mx-auto w-full max-w-[480px] lg:mx-0">
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3.5 rounded-[24px] border border-[#DCC98F]"
              />

              <div
                style={{ aspectRatio: main.ratio }}
                className="relative overflow-hidden rounded-[20px] border-[8px] border-white shadow-xl"
              >
                <Image
                  src={main.src}
                  alt={main.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, (min-width: 640px) 480px, calc(100vw - 48px)"
                  className="object-cover"
                />
              </div>

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

            <div className="mt-12 max-w-[360px] pl-2 lg:mt-14">
              <p className="font-[Playfair_Display] text-sm italic leading-relaxed text-[#6B5A42]">
                Behind every frame is a person who cares about the story.
              </p>
              <p className="mt-3 text-xs font-semibold text-[#241C12]">Dheeraj Dandu</p>
              <p className="text-[11px] text-[#7A6A4A]">Founder &amp; Lead Photographer</p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9C7620] lg:text-xs">
              About Veduka by Dheeraj
            </p>

            <Heading
              id="about-heading"
              className="veduka-about__heading mt-3 text-[28px] font-bold leading-tight text-[#241C12] sm:text-[32px] lg:text-[40px]"
            >
              <span className="block">Meet Dheeraj —</span>
              <span className="block">The Story Behind Veduka</span>
            </Heading>

            <p className="mt-2 text-sm italic text-[#6B5A42] lg:text-base">
              Founder &amp; Lead Photographer
            </p>

            <p className="veduka-about__lead mt-4 text-base italic leading-snug text-[#9C7620] lg:text-lg">
              Every photograph should tell a story — not just show a moment.
            </p>

            <div className="mt-6 max-w-[600px] space-y-3 text-sm leading-[1.8] text-[#5C5142] lg:text-base">
              <p className="font-medium text-[#241C12]">Hi, I&apos;m Dheeraj.</p>
              <p>
                I&apos;m the founder and lead photographer behind Veduka by Dheeraj, based in Tandur,
                Telangana. I believe the most meaningful photographs are often the moments that
                happen naturally — the laughter, happy tears, nervous smiles, family hugs, and
                little moments that make every celebration unique.
              </p>
              <p>
                My approach is simple: be present, observe carefully, and let your story unfold
                naturally in front of the camera.
              </p>
            </div>

            <div className="mt-7 border-l-2 border-[#DCC98F] pl-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9C7620]">
                Our Approach
              </p>
              <h3 className="veduka-about__heading mt-2 text-xl font-bold text-[#241C12] lg:text-2xl">
                Candid first. Story always.
              </h3>
              <p className="mt-2 max-w-[600px] text-sm leading-[1.75] text-[#5C5142]">
                We focus on genuine emotions, natural interactions, and the details that make your
                celebration yours. From the quiet moments before the ceremony to the energy of the
                celebrations, we aim to create photographs and films that feel authentic and
                timeless.
              </p>
            </div>

            <blockquote className="mt-6 border-l-[3px] border-[#C9A227] pl-4">
              <p className="veduka-about__quote text-sm italic leading-snug text-[#241C12] lg:text-base">
                &ldquo;The best wedding photographs are the ones nobody posed for.&rdquo;
              </p>
              <cite className="mt-2 block text-[10px] font-bold uppercase not-italic tracking-[0.1em] text-[#9C7620]">
                — Dheeraj Dandu, Founder &amp; Lead Photographer
              </cite>
            </blockquote>

            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {APPROACH_POINTS.map(({ number, title, body }) => (
                <div key={number} className="rounded-lg border border-[#E9DCBB] bg-white/50 px-3 py-3">
                  <p className="text-[10px] font-semibold text-[#9C7620]">{number}</p>
                  <h3 className="mt-1 text-[10px] font-semibold uppercase leading-snug tracking-[0.06em] text-[#241C12]">
                    {title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#6B5A42]">{body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3">
              {BRAND_VALUES.map(({ title, body }) => (
                <div key={title} className="border-t border-[#DCC98F] pt-2.5">
                  <p className="text-[9px] font-semibold uppercase leading-snug tracking-[0.08em] text-[#9C7620] sm:text-[10px]">
                    {title}
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#5C5142] sm:text-xs">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#E9DCBB] pt-8 lg:mt-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9C7620]">
            Stories We Love to Capture
          </p>
          <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {STORIES.map(({ title, body }) => (
              <div key={title} className="border-t border-[#DCC98F] pt-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[#241C12]">{title}</h3>
                <p className="mt-1.5 text-xs leading-[1.7] text-[#6B5A42]">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-5 border-t border-[#E9DCBB] pt-6 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-[640px] text-sm leading-[1.75] text-[#5C5142]">
              Based in Tandur, Telangana, Veduka by Dheeraj is available for weddings, pre-weddings
              and celebrations in Tandur and other locations based on availability.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/portfolio"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0F2A1E] px-7 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#FBF6EC] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2A1E] focus-visible:ring-offset-2 sm:w-auto"
              >
                View Our Work
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/estimator"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#C9A227] px-7 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#6B5130] hover:bg-[#F5EDDC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C7620] focus-visible:ring-offset-2 sm:w-auto"
              >
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPhotographer;
