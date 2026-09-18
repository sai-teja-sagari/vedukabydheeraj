import Link from 'next/link';
import Image from 'next/image';
import templePhoto from '../Images/highlights/06_temple_maternity.png';

const WHATSAPP_LINK = 'https://wa.me/919133002002';

// This component relies on 'Poppins' + 'Playfair Display' already being
// loaded — both are imported once, globally, via src/app/globals.css.

const FEATURE_PILLS = ['Instant PDF Estimate', 'Direct Date Lock', 'Fast WhatsApp Follow-up'];

const STATS = [
  { label: 'Response Time', value: 'Quick' },
  { label: 'Coverage', value: 'All Over India' },
  { label: 'Delivery', value: 'Premium' },
];

const WHAT_YOU_GET = ['Custom package summary', 'Luxury booking guidance', 'Fast availability check'];

const CheckIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 12.5 9.5 17 19 7" />
  </svg>
);

const CalendarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
  </svg>
);

const ShieldIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 3.5 19 6.5v5.2c0 4.4-2.9 7.9-7 9-4.1-1.1-7-4.6-7-9V6.5L12 3.5Z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </svg>
);

const ArrowIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#FFFFFF" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.06L2 22l5.11-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm5.68 14.24c-.24.68-1.4 1.32-1.92 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.66-.6-2.92-1.26-4.83-4.2-4.98-4.4-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.28.58-.35.77-.35h.55c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.14.11.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.14-.29.29-.12.57.16.28.75 1.24 1.61 2 1.11 1 2.05 1.3 2.34 1.45.29.14.46.12.63-.05.18-.18.75-.87.95-1.17.2-.29.4-.24.66-.15.27.1 1.7.8 2 .95.29.14.48.21.55.33.07.14.07.72-.17 1.4Z" />
  </svg>
);

function BookingCTA() {
  return (
    <section aria-labelledby="booking-cta-heading" className="bg-[#FBF6EC] px-6 py-14 font-[Poppins] lg:px-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] rounded-[26px] border border-[#E9DCBB] bg-[#F1E7D2] px-[30px] pt-[30px] lg:px-14 lg:pt-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[50px]">
          {/* ===== LEFT COLUMN ===== */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A227] bg-[#FBF6EC] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9C7620]">
              <span aria-hidden="true">✦</span>
              Reserve Your Dates
            </span>

            <h2
              id="booking-cta-heading"
              className="mt-5 font-[Playfair_Display] text-[28px] leading-[1.15] text-[#241C12] lg:text-[46px]"
            >
              Turn your wedding dates into a cinematic plan.
            </h2>

            <p className="mt-4 max-w-[480px] text-[13px] leading-[1.7] text-[#5C5142] lg:text-base">
              Popular wedding dates book quickly across South India. Available for destination &amp; luxury
              weddings nationwide. Start with a premium proposal, review the estimate instantly, and move to
              WhatsApp if you want a fast response.
            </p>

            {/* Feature pills — stacked full-width on mobile, wrapped inline row on desktop */}
            <div className="mt-6 flex flex-col gap-2.5 lg:flex-row lg:flex-wrap lg:gap-3">
              {FEATURE_PILLS.map((label) => (
                <span
                  key={label}
                  className="inline-flex w-full items-center gap-2 rounded-full border border-[#DCC98F] bg-[#FBF6EC] px-4 py-2.5 text-[13px] font-medium text-[#4A3B2A] lg:w-auto"
                >
                  <CheckIcon className="h-4 w-4 shrink-0 text-[#2E9464]" />
                  {label}
                </span>
              ))}
            </div>

            {/* Stats — 3 side-by-side cards on desktop, stacked label/value rows on mobile */}
            <div className="mt-6 flex flex-col gap-3 lg:hidden">
              {STATS.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-xl border border-[#DCC98F] bg-[#FBF6EC] px-4 py-3"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9C7620]">
                    {label}
                  </span>
                  <span className="text-sm font-bold text-[#241C12]">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 hidden grid-cols-3 gap-4 lg:grid">
              {STATS.map(({ label, value }) => (
                <div key={label} className="rounded-xl border border-[#DCC98F] bg-[#FBF6EC] p-4 text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9C7620]">{label}</p>
                  <p className="mt-1.5 text-lg font-bold text-[#241C12]">{value}</p>
                </div>
              ))}
            </div>

            {/* CTA row — stacked full-width on mobile, side by side on desktop */}
            <div className="mt-7 flex flex-col gap-3 lg:flex-row lg:gap-4">
              {/* Package Estimator — see src/Components/Estimator/EstimatorPage.jsx */}
              <Link
                href="/estimator"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0F2A1E] px-8 py-4 text-sm font-semibold text-[#FBF6EC] hover:opacity-90 lg:w-auto"
              >
                Configure Proposal
                <ArrowIcon className="h-4 w-4" />
              </Link>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2E9464] px-8 py-4 text-sm font-semibold text-white hover:opacity-90 lg:w-auto"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Instant WhatsApp
              </a>
            </div>
          </div>

          {/* ===== RIGHT COLUMN: stacked cards + photo ===== */}
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-6">
            <div className="flex flex-col gap-6">
              {/* "What You Get" panel */}
              <div className="rounded-2xl border border-[#DCC98F] bg-[#FBF6EC] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9C7620]">
                  What You Get
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {WHAT_YOU_GET.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#241C12]">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#2E9464]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Availability Note panel — flex-1 at lg so its bottom aligns
                  with the photo column's bottom */}
              <div className="rounded-2xl border border-[#EEE6D2] bg-white p-6 lg:flex-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#9C4A3A]">
                  Availability Note
                </p>
                <h2 className="mt-2 font-[Playfair_Display] text-lg font-bold text-[#241C12]">
                  Best dates are filling fast.
                </h2>
                <p className="mt-2 text-sm leading-[1.6] text-[#5C5142]">
                  If you already know your date, send it now and we&apos;ll help you secure the right package
                  without a long back-and-forth.
                </p>
              </div>
            </div>

            {/* Photo panel */}
            <div className="relative h-[260px] overflow-hidden rounded-2xl lg:h-full">
              <Image
                src={templePhoto}
                alt="Bride and groom in a red saree and white kurta standing before a heritage temple gopuram"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,15,10,0.88)_20%,rgba(20,15,10,0.05)_55%)]" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C9A227] px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#241C12]">
                  <CalendarIcon className="h-3.5 w-3.5" />
                  Date Planning
                </span>

                <h2 className="mt-3 font-[Playfair_Display] text-lg text-white lg:text-xl">
                  A premium way to start the booking conversation.
                </h2>
                <p className="mt-2 text-[13px] leading-[1.6] text-[#E5D9C4]">
                  Share your dates and vision — we&apos;ll turn them into a proposal as considered as the
                  celebration itself.
                </p>

                <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-[#7FC29B]">
                  <ShieldIcon className="h-4 w-4" />
                  Protected Original Work
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*
          Bottom strip text uses #7A5A18 rather than the spec's #9C7620 —
          #9C7620 on this card's #F1E7D2 background only reaches ~3.4:1
          contrast at this text size, short of WCAG AA's 4.5:1 for normal
          text. #7A5A18 keeps the same gold hue but reaches ~5.2:1.
        */}
        <div className="mt-10 border-t border-[#DCC98F] py-5 text-center lg:mt-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7A5A18]">
            Premium booking experience for weddings, pre-weddings, and cinematic storytelling
          </p>
        </div>
      </div>
    </section>
  );
}

export default BookingCTA;
