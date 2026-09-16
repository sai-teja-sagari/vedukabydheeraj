import { useEffect, useRef, useState } from 'react';
import '../Styles/FeaturedHighlights.css';
import Lightbox from './Lightbox';
import justUsPhoto from '../Images/highlights/05_bw_watercolor_kick.png';
import momentsPhoto from '../Images/highlights/04_falling_in_love.png';
import foreverPhoto from '../Images/highlights/08_black_suit_couple.png';
import togetherPhoto from '../Images/highlights/10_maternity_collage_momstobe.png';
import collageBlockPhoto from '../Images/highlights/09_maternity_collage_palace.png';
import blessedPhoto from '../Images/highlights/06_temple_maternity.png';
import wanderlustPhoto from '../Images/highlights/07_horse_beach.png';
import enchantedPhoto from '../Images/highlights/01_red_dress_beach.png';
import smittenPhoto from '../Images/highlights/03_dance_dip.png';
import beginningsPhoto from '../Images/highlights/02_pre_wedding_splash.png';
 
// TODO: replace with the real business WhatsApp number.
const WHATSAPP_LINK = 'https://wa.me/919876543210';

// NOTE: most cards below still show the gradient + camera-icon placeholder.
// To add a real photo to a card (existing or new), import the image file and
// set an `image` field on its entry, e.g.:
//   import justUsPhoto from '../Images/highlights/just-us.jpg';
//   { word: 'just us', type: 'photo', image: justUsPhoto, alt: 'Real, specific alt text here' }
// Once `image` is set, `gradient` is ignored and the placeholder is skipped
// automatically. `alt` should describe the actual photo once one is added —
// the placeholder wording below is scaffolding, not final copy.
//
// New cards can be added the same way: append another object to this array.
// The edge-card fade/arrows are computed from the array's contents
// (first/last index), not hardcoded to "N cards", so the layout adapts
// automatically as entries are added.
const CARDS = [
  {
    word: 'just us',
    type: 'photo',
    image: justUsPhoto,
    // All source photos are 1200x1500 (portrait, wider than the tall card
    // frame), so object-cover crops the sides, not the top/bottom — the
    // couple sits just left of center here, so bias slightly right of that.
    focalPoint: '55% center',
    gradient: 'bg-[linear-gradient(160deg,#E8C9C2,#C99A8F)]',
    alt: 'Sirish and Tejaswini laughing together in a playful pose, styled as a black-and-white watercolor keepsake',
  },
  {
    word: 'moments',
    type: 'photo',
    image: momentsPhoto,
    focalPoint: '42% center',
    gradient: 'bg-[linear-gradient(160deg,#D9D2C7,#B8ADA0)]',
    alt: 'Aerial shot of the couple lying together on ocean rocks, styled as a "Falling in Love" poster',
  },
  {
    word: 'cherished',
    type: 'photo',
    image: collageBlockPhoto,
    // The two clear color photos (the proposal-style pregnancy announcement)
    // sit left-of-center; the right edge is a faded monochrome repeat of the
    // same scene, so bias left to keep the crop on the real photos.
    focalPoint: '35% center',
    gradient: 'bg-[linear-gradient(160deg,#EDE1C4,#C9A227)]',
    alt: 'Pregnancy announcement collage of the couple in front of a domed heritage building with the Indian flag',
  },
  {
    word: 'forever',
    type: 'photo',
    image: foreverPhoto,
    gradient: 'bg-[linear-gradient(160deg,#D98B6B,#7C8B6F)]',
    alt: 'Sirish and Tejaswini in elegant black formal wear, sharing a quiet moment beneath the palms',
  },
  {
    word: 'together',
    type: 'photo',
    image: togetherPhoto,
    // The main clear photo (mom-to-be leaning against a tree) is the right
    // half; the left half is smaller inset photos over a faded background
    // portrait — bias right to keep the crop on the main photo.
    focalPoint: '70% center',
    gradient: 'bg-[linear-gradient(160deg,#D6C7B8,#A99884)]',
    alt: 'Maternity photo collage of a mom-to-be forming a heart over her baby bump, branded "Moms & to Be"',
  },
  {
    word: 'blessed',
    type: 'photo',
    image: blessedPhoto,
    gradient: 'bg-[linear-gradient(160deg,#B7C4B0,#7C8B6F)]',
    alt: 'Maternity announcement photo of the couple in a red saree and white kurta before a heritage temple',
  },
  {
    word: 'wanderlust',
    type: 'photo',
    image: wanderlustPhoto,
    // The horse takes up the left third of the frame; bias slightly left of
    // center so it stays in the crop alongside the couple.
    focalPoint: '40% center',
    gradient: 'bg-[linear-gradient(160deg,#CFE0EA,#9FB8C9)]',
    alt: 'Beach photo of the couple walking with a horse along the shore',
  },
  {
    word: 'enchanted',
    type: 'photo',
    image: enchantedPhoto,
    // The couple stands in the left third of the frame; the flowing red
    // dress trails off to the right — bias left to keep the couple in crop.
    focalPoint: '28% center',
    gradient: 'bg-[linear-gradient(160deg,#E7C7C2,#B94A4A)]',
    alt: 'Bride and groom on the beach with a flowing red dress caught in the wind',
  },
  {
    word: 'smitten',
    type: 'photo',
    image: smittenPhoto,
    gradient: 'bg-[linear-gradient(160deg,#C9C9C9,#6B6B6B)]',
    alt: 'Sirish and Tejaswini sharing a dance dip in front of a flower wall',
  },
  {
    word: 'beginnings',
    type: 'photo',
    image: beginningsPhoto,
    gradient: 'bg-[linear-gradient(160deg,#EDE0D6,#C9A89A)]',
    alt: 'Pre-wedding cover photo of Sirish and Tejaswini embracing as a wave splashes behind them, with "Pre Wedding" title text',
  },
];

// The lightbox only cycles through cards that have a real photo — a future
// gradient/camera-icon placeholder card has nothing worth opening full-screen.
const LIGHTBOX_PHOTOS = CARDS.filter((card) => card.image).map((card) => ({
  id: card.word,
  src: card.image,
  alt: card.alt,
  caption: card.word,
  couple: 'Sirish & Tejaswini',
}));

const CameraIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
    <circle cx="12" cy="13.5" r="3.2" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 6l-6 6 6 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#FFFFFF" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.06L2 22l5.11-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm5.68 14.24c-.24.68-1.4 1.32-1.92 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.66-.6-2.92-1.26-4.83-4.2-4.98-4.4-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.28.58-.35.77-.35h.55c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.14.11.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.14-.29.29-.12.57.16.28.75 1.24 1.61 2 1.11 1 2.05 1.3 2.34 1.45.29.14.46.12.63-.05.18-.18.75-.87.95-1.17.2-.29.4-.24.66-.15.27.1 1.7.8 2 .95.29.14.48.21.55.33.07.14.07.72-.17 1.4Z" />
  </svg>
);

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function FeaturedHighlights() {
  const scrollerRef = useRef(null);
  const firstCardRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const updateScrollState = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    setCanScrollPrev(scroller.scrollLeft > 4);
    setCanScrollNext(scroller.scrollLeft < maxScroll - 4);
  };

  useEffect(() => {
    updateScrollState();
  }, []);

  const scrollByCard = (direction) => {
    const scroller = scrollerRef.current;
    const card = firstCardRef.current;
    if (!scroller || !card) return;

    const styles = window.getComputedStyle(scroller);
    const gap = parseFloat(styles.columnGap || styles.gap || '0');
    const distance = card.offsetWidth + gap;

    scroller.scrollBy({
      left: direction === 'next' ? distance : -distance,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  const lastIndex = CARDS.length - 1;

  return (
    <section className="veduka-highlights relative bg-[#FBF6EC] py-14 md:py-20">
      <p className="text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9C7620]">
        Featured Highlights
      </p>

      {/* Wrapping the scroller in its own relative container so the persistent
          mobile arrows below can center on the scroller's height specifically,
          not the whole section (which also contains the heading). */}
      <div className="relative mt-8">
        <div
          ref={scrollerRef}
          role="region"
          aria-label="Featured highlights gallery"
          tabIndex={0}
          onScroll={updateScrollState}
          className="veduka-highlights__scroller flex snap-x snap-mandatory gap-5 overflow-x-auto px-[calc(50%-120px)] pb-2 md:px-16"
        >
        {CARDS.map((card, index) => {
          const isFirst = index === 0;
          const isLast = index === lastIndex;
          const isEdge = isFirst || isLast;
          const CardTag = card.image ? 'button' : 'div';

          return (
            <CardTag
              key={card.word}
              ref={isFirst ? firstCardRef : undefined}
              type={card.image ? 'button' : undefined}
              aria-label={card.image ? card.alt : undefined}
              onClick={
                card.image
                  ? () => setLightboxIndex(LIGHTBOX_PHOTOS.findIndex((photo) => photo.id === card.word))
                  : undefined
              }
              className="veduka-highlights__card relative block shrink-0 snap-center overflow-hidden rounded-[20px] border-0 bg-transparent p-0 text-left w-[240px] h-[350px] md:snap-start md:w-[290px] md:h-[560px]"
            >
              {/* Photo layer — renders a real <img> once a card has an `image` field,
                  otherwise falls back to the gradient + camera-icon placeholder.
                  `focalPoint`/`zoom` let a specific photo be cropped tighter or
                  repositioned so it fills the tall frame without visible
                  baked-in whitespace from the source image. */}
              {card.image ? (
                <img
                  src={card.image}
                  alt={card.alt}
                  style={card.focalPoint ? { objectPosition: card.focalPoint } : undefined}
                  className={`absolute inset-0 h-full w-full object-cover ${card.zoom ?? ''} ${
                    isEdge ? 'opacity-[0.55] grayscale-[40%]' : ''
                  }`}
                />
              ) : (
                <div
                  role="img"
                  aria-label={card.alt}
                  className={`absolute inset-0 flex items-center justify-center ${card.gradient} ${
                    isEdge ? 'opacity-[0.55] grayscale-[40%]' : ''
                  }`}
                >
                  <CameraIcon className="h-9 w-9 text-white/60 md:h-11 md:w-11" />
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              <span className="veduka-highlights__word absolute bottom-4 left-4 text-[18px] text-white md:bottom-5 md:left-5 md:text-[32px]">
                {card.word}
              </span>
            </CardTag>
          );
        })}
        </div>

        {/* Persistent prev/next arrows — pinned to the outer wrapper (not a
            card), so they stay put at the same spot on screen regardless of
            scroll position instead of traveling with the first/last card. */}
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollByCard('prev')}
          disabled={!canScrollPrev}
          className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#241C12] shadow-lg disabled:opacity-40 md:left-3 md:h-12 md:w-12"
        >
          <ChevronLeftIcon />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollByCard('next')}
          disabled={!canScrollNext}
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#241C12] shadow-lg disabled:opacity-40 md:right-3 md:h-12 md:w-12"
        >
          <ChevronRightIcon />
        </button>
      </div>

      {/* Floating action buttons — fixed to the viewport, not the gallery row */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-center gap-3.5 md:bottom-8 md:right-8">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Veduka by Dheeraj on WhatsApp"
          className="veduka-highlights__fab flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] shadow-lg md:h-[46px] md:w-[46px]"
        >
          <WhatsAppIcon className="h-5 w-5 md:h-6 md:w-6" />
        </a>
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          className="veduka-highlights__fab flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#241C12] shadow-lg md:h-[46px] md:w-[46px]"
        >
          <ChevronUpIcon />
        </button>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={LIGHTBOX_PHOTOS}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}

export default FeaturedHighlights;
