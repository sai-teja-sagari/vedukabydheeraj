'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { photos, categories } from '../lib/photos';
import Lightbox from './Lightbox';
import BackButton from './BackButton';

const CATEGORY_PARAM = 'category';

function getValidCategory(value, categoryKeys) {
  return categoryKeys.includes(value) ? value : 'all';
}

function PortfolioPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryKeys = useMemo(() => categories.map((c) => c.key), []);

  // Lazy initializer so the first render already reflects the URL — avoids a
  // flash from "all" to the real filter once an effect runs.
  const [activeCategory, setActiveCategory] = useState(() =>
    getValidCategory(searchParams.get(CATEGORY_PARAM), categoryKeys)
  );
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredPhotos = useMemo(
    () => (activeCategory === 'all' ? photos : photos.filter((photo) => photo.category === activeCategory)),
    [activeCategory]
  );

  const handleCategoryChange = (key) => {
    setActiveCategory(key);
    // The lightbox index is only meaningful within the previously filtered
    // set — close it rather than let it point at the wrong photo.
    setLightboxIndex(null);
    router.push(key === 'all' ? '/portfolio' : `/portfolio?${CATEGORY_PARAM}=${key}`);
  };

  return (
    <section className="veduka-portfolio bg-[#FBF6EC] px-6 py-14 lg:px-16 lg:py-20">
      <BackButton />

      {/* ===== HEADER ===== */}
      <div className="mx-auto mt-6 max-w-[800px] text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-8 bg-[#9C7620] lg:w-10" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9C7620] lg:text-xs">
            The Portfolio
          </p>
          <span className="h-px w-8 bg-[#9C7620] lg:w-10" />
        </div>

        <h1 className="veduka-portfolio__heading mt-4 text-[26px] text-[#241C12] lg:text-5xl">
          Every Frame, A Story
        </h1>

        <p className="mt-4 text-[12px] leading-[1.7] text-[#6B5A42] lg:text-base">
          A living archive of the weddings, pre-wedding shoots, maternity announcements, and engagements
          we&apos;ve had the honor of framing.
        </p>
      </div>

      {/* ===== FILTER PILLS ===== */}
      <div
        role="group"
        aria-label="Filter portfolio by category"
        className="veduka-portfolio__filters mt-8 flex flex-wrap justify-center gap-2 lg:mt-12 lg:gap-2.5"
      >
        {categories.map(({ key, label }) => {
          const isActive = activeCategory === key;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={isActive}
              onClick={() => handleCategoryChange(key)}
              className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-[11px] font-medium transition-colors duration-150 lg:px-5 lg:py-2 lg:text-sm ${
                isActive
                  ? 'border-[#0F2A1E] bg-[#0F2A1E] text-[#FBF6EC]'
                  : 'border-[#DCC98F] bg-transparent text-[#4A3B2A] hover:border-[#9C7620]'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* ===== GRID ===== */}
      <div className="mt-10 grid grid-cols-1 gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-[26px]">
        {filteredPhotos.map((photo, index) => (
          <button
            // Keying on the active category (not just the photo id) forces
            // every visible card to remount when the filter changes, so the
            // mount-in fade animation (see PortfolioPage.css) plays for the
            // whole new set rather than only the cards that are new to it.
            key={`${activeCategory}-${photo.id}`}
            type="button"
            aria-label={photo.alt}
            onClick={() => setLightboxIndex(index)}
            className="veduka-portfolio__card group rounded-sm border border-[#EEE6D2] bg-white p-[14px_14px_30px] text-left shadow-[0_4px_14px_rgba(36,28,18,0.06)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(36,28,18,0.12)]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="veduka-portfolio__caption mt-4 text-center text-[15px] italic text-[#9C7620]">
              {photo.caption}
            </p>
          </button>
        ))}
      </div>

      {filteredPhotos.length === 0 && (
        <p className="mt-14 text-center text-sm text-[#6B5A42]">No photos in this category yet.</p>
      )}

      {lightboxIndex !== null && (
        <Lightbox photos={filteredPhotos} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </section>
  );
}

export default PortfolioPage;
