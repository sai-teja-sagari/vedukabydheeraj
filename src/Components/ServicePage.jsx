import Link from 'next/link';
import Image from 'next/image';
import BackButton from './BackButton';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const ChevronIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const ChatBubbleIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 3C6.9 3 3 6.6 3 11c0 2.1 1 4 2.6 5.4L5 21l4.4-1.4c.8.2 1.7.4 2.6.4 5.1 0 9-3.6 9-8s-3.9-9-9-9Z" />
  </svg>
);

const FAQ_WHATSAPP_LINK = 'https://wa.me/919133002002';

/**
 * Shared layout for every service landing page (/wedding-photography,
 * /pre-wedding-photography, etc.) — keeps heading structure (one H1, H2
 * sections, H3 FAQ questions), internal linking, and CTA placement
 * consistent across all of them instead of duplicating markup per page.
 *
 * `sections` and `faqs` are plain server-rendered content — no client JS
 * needed (the FAQ accordion uses native <details>), so these pages stay
 * fast and fully crawlable.
 */
function ServicePage({
  eyebrow,
  h1,
  intro,
  heroImage,
  heroAlt,
  heroFocalPoint,
  sections = [],
  faqs = [],
  relatedServices = [],
  ctaHeading,
  ctaBody,
  children,
}) {
  return (
    <section className="bg-[#FBF6EC] px-6 py-14 font-[Poppins] lg:px-16 lg:py-20">
      <div className="mx-auto max-w-[960px]">
        <BackButton />

        <div className="mt-6 flex items-center gap-4">
          <span className="h-px w-8 bg-[#9C7620] lg:w-10" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9C7620] lg:text-xs">{eyebrow}</p>
        </div>

        <h1 className="veduka-hero__headline mt-4 text-[28px] leading-[1.15] text-[#241C12] lg:text-[44px]">{h1}</h1>

        <p className="mt-5 max-w-[680px] text-[13px] leading-[1.7] text-[#6B5A42] lg:text-base">{intro}</p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/estimator"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F2A1E] px-8 py-3.5 text-sm font-semibold text-[#FBF6EC] hover:opacity-90"
          >
            Get an Instant Estimate
            <ArrowIcon />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#C9A227] px-8 py-3.5 text-sm font-semibold text-[#8A6A1F] hover:bg-[#C9A227]/10"
          >
            Enquire Now
          </Link>
        </div>

        {heroImage && (
          <div className="relative mt-10 h-[260px] w-full overflow-hidden rounded-2xl lg:h-[420px]">
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              priority
              sizes="(min-width: 1024px) 960px, 100vw"
              style={heroFocalPoint ? { objectPosition: heroFocalPoint } : undefined}
              className="object-cover"
            />
          </div>
        )}

        {/* ===== CONTENT SECTIONS ===== */}
        <div className="mt-12 flex flex-col gap-12">
          {sections.map((section) => (
            <div key={section.heading} className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
              <div className={section.image && section.imagePosition === 'right' ? 'lg:order-1' : ''}>
                <h2 className="veduka-services__heading text-[22px] text-[#241C12] lg:text-[28px]">
                  {section.heading}
                </h2>
                <div className="mt-3 flex flex-col gap-3 text-[13px] leading-[1.75] text-[#6B5A42] lg:text-sm">
                  {(Array.isArray(section.body) ? section.body : [section.body]).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              {section.image && (
                <div className={`relative h-[220px] w-full overflow-hidden rounded-xl lg:h-[300px] ${section.imagePosition === 'right' ? 'lg:order-2' : ''}`}>
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 460px, 100vw"
                    style={section.focalPoint ? { objectPosition: section.focalPoint } : undefined}
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ===== FAQ ===== */}
        {faqs.length > 0 && (
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
            {/* Intro copy — left column on desktop, top of stack on mobile */}
            <div className="lg:col-start-1 lg:row-start-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9C7620] lg:text-xs">
                Common Questions
              </p>
              <h2 className="veduka-services__heading mt-3 text-[22px] text-[#241C12] lg:text-[32px]">
                Answers Before You Ask
              </h2>
              <p className="mt-3 max-w-[360px] text-[13px] leading-[1.7] text-[#6B5A42] lg:text-sm">
                Most clients have the same first few questions — here&apos;s what we tell them.
              </p>
            </div>

            {/* Accordion — right column on desktop, spans both intro + CTA rows */}
            <div className="flex flex-col lg:col-start-2 lg:row-start-1 lg:row-span-2">
              {faqs.map(({ q, a }, index) => (
                <details
                  key={q}
                  open={index === 0}
                  className="group border-b border-[#DCC98F] py-5 first:pt-0 last:border-b-0 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span className="flex gap-3">
                      <span className="mt-0.5 text-[11px] font-bold text-[#C9A227]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-sm font-semibold text-[#241C12] lg:text-base">{q}</h3>
                    </span>
                    <ChevronIcon className="mt-1 h-4 w-4 shrink-0 text-[#241C12] transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 pl-[26px] text-[13px] leading-[1.7] text-[#6B5A42]">{a}</p>
                </details>
              ))}
            </div>

            {/* "Still not sure?" CTA — under the intro on desktop, end of stack on mobile */}
            <div className="rounded-2xl bg-[#0F2A1E] p-6 lg:col-start-1 lg:row-start-2">
              <h3 className="text-base font-semibold text-[#FBF6EC]">Still not sure?</h3>
              <p className="mt-2 text-[13px] leading-[1.7] text-[#C9BBA0]">
                Send us your date and venue on WhatsApp — we usually reply within a few hours.
              </p>
              <a
                href={FAQ_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#C9A227] px-6 py-3 text-sm font-semibold text-[#241C12] hover:bg-[#DCC98F]"
              >
                <ChatBubbleIcon />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* ===== RELATED SERVICES ===== */}
        {relatedServices.length > 0 && (
          <div className="mt-14">
            <h2 className="veduka-services__heading text-[22px] text-[#241C12] lg:text-[28px]">
              Explore More Services
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {relatedServices.map(({ href, label, description }) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl border border-[#E9DCBB] bg-white p-5 transition-colors hover:border-[#C9A227]"
                >
                  <p className="text-sm font-semibold text-[#241C12]">{label}</p>
                  <p className="mt-1.5 text-[12.5px] leading-[1.6] text-[#6B5A42]">{description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {children}

        {/* ===== CTA ===== */}
        <div className="mt-14 rounded-2xl border border-[#E9DCBB] bg-[#F1E7D2] p-8 text-center lg:p-12">
          <h2 className="veduka-services__heading text-[20px] text-[#241C12] lg:text-[26px]">{ctaHeading}</h2>
          <p className="mx-auto mt-3 max-w-[520px] text-[13px] leading-[1.7] text-[#6B5A42]">{ctaBody}</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/estimator"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F2A1E] px-8 py-3.5 text-sm font-semibold text-[#FBF6EC] hover:opacity-90"
            >
              Get an Instant Estimate
              <ArrowIcon />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#C9A227] px-8 py-3.5 text-sm font-semibold text-[#8A6A1F] hover:bg-[#C9A227]/10"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicePage;
