'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const SWIPE_THRESHOLD_PX = 50;

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 6l-6 6 6 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const controlButtonClass =
  'flex items-center justify-center rounded-full border text-white transition-colors duration-150 ' +
  'bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.2)]';

// Self-contained full-screen photo viewer. Renders on top of whatever page
// mounts it (it never navigates anywhere) — the parent is expected to
// conditionally render this component only while a lightbox should be open,
// and to unmount it entirely on close so each open starts from a clean
// `startIndex`. `photos` should already be the *filtered* list the caller
// wants to cycle through (e.g. only the photos matching the active category).
function Lightbox({ photos, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex);

  const containerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const touchStartXRef = useRef(null);

  const canNavigate = photos.length > 1;
  const photo = photos[index];

  const goPrev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const goNext = () => setIndex((i) => (i + 1) % photos.length);

  // Preload the neighboring photos so prev/next feels instant instead of
  // showing a loading flash while the browser fetches a fresh image.
  useEffect(() => {
    if (!canNavigate) return;

    const nextSrc = photos[(index + 1) % photos.length].src;
    const prevSrc = photos[(index - 1 + photos.length) % photos.length].src;
    // `photo.src` is a Next.js static-import object ({ src, width, height }),
    // not a plain URL — pull the actual URL string out before preloading.
    // Uses `window.Image` (not the bare `Image` identifier) since this file
    // also imports the `Image` component from next/image, which would
    // otherwise shadow the native browser constructor.
    [nextSrc, prevSrc].forEach((src) => {
      const preloadImg = new window.Image();
      preloadImg.src = src.src;
    });
  }, [index, photos, canNavigate]);

  // Escape closes, arrow keys navigate, Tab stays trapped inside the dialog.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (canNavigate && e.key === 'ArrowLeft') {
        e.preventDefault();
        setIndex((i) => (i - 1 + photos.length) % photos.length);
        return;
      }

      if (canNavigate && e.key === 'ArrowRight') {
        e.preventDefault();
        setIndex((i) => (i + 1) % photos.length);
        return;
      }

      if (e.key === 'Tab') {
        const focusableSelector = 'a[href], button:not([disabled])';
        const focusables = containerRef.current
          ? Array.from(containerRef.current.querySelectorAll(focusableSelector))
          : [];
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
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [canNavigate, photos.length, onClose]);

  // Runs once per mount: capture the element that had focus (the photo card
  // that was clicked), move focus into the dialog, and lock body scroll.
  // Cleanup restores both on close/unmount.
  useEffect(() => {
    previousFocusRef.current = document.activeElement;
    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      previousFocusRef.current?.focus?.();
    };
  }, []);

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null || !canNavigate) return;

    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;
    if (deltaX > 0) goPrev();
    else goNext();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(10,8,6,0.92)] p-4 lg:p-10"
      onClick={onClose}
    >
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="veduka-lightbox-caption"
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-5xl flex-col items-center"
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close"
          onClick={onClose}
          className={`${controlButtonClass} absolute -top-12 right-0 h-9 w-9 lg:-top-14 lg:h-11 lg:w-11`}
        >
          <CloseIcon />
        </button>

        <div
          className="relative flex w-full items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {canNavigate && (
            <button
              type="button"
              aria-label="Previous photo"
              onClick={goPrev}
              className={`${controlButtonClass} absolute left-1 z-10 h-9 w-9 lg:left-3 lg:h-12 lg:w-12`}
            >
              <ChevronLeftIcon />
            </button>
          )}

          <Image
            src={photo.src}
            alt={photo.alt}
            sizes="90vw"
            className="max-h-[65vh] w-auto max-w-full object-contain lg:max-h-[75vh]"
          />

          {canNavigate && (
            <button
              type="button"
              aria-label="Next photo"
              onClick={goNext}
              className={`${controlButtonClass} absolute right-1 z-10 h-9 w-9 lg:right-3 lg:h-12 lg:w-12`}
            >
              <ChevronRightIcon />
            </button>
          )}
        </div>

        <div id="veduka-lightbox-caption" className="mt-4 text-center lg:mt-6">
          {photo.caption && (
            <p className="veduka-lightbox__caption text-[15px] italic text-white/90 lg:text-lg">{photo.caption}</p>
          )}
          {photo.couple && <p className="mt-1 text-[12px] text-white/60 lg:text-sm">{photo.couple}</p>}
          {canNavigate && (
            <p className="mt-2 text-[11px] text-white/40 lg:text-xs">
              {index + 1} / {photos.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
