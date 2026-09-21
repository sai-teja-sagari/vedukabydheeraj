import Link from 'next/link';
import { Camera, Landmark, Cake, Video, LayoutGrid } from 'lucide-react';

// These two are wedding-specific glyphs lucide doesn't have an equivalent
// for (linked rings, a heart cradling a bump) — kept as custom SVGs while
// the rest of the set below comes from lucide-react.
const EngagementIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12.5" cy="19" r="7" />
    <circle cx="19.5" cy="19" r="7" />
    <path d="M16 4v4M13.8 6.3h4.4M14.4 4.9l3.2 3" />
  </svg>
);

const MaternityIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M16 26.5s-8.5-5.4-8.5-11.7A5.3 5.3 0 0 1 16 11.4a5.3 5.3 0 0 1 8.5 3.4c0 6.3-8.5 11.7-8.5 11.7Z" />
    <path d="M16 11c.2-1.8 1-2.8 2.2-3.3M16 11c-.2-1.8-1-2.8-2.2-3.3" />
  </svg>
);

const SERVICES = [
  {
    Icon: EngagementIcon,
    title: 'Engagement',
    description: 'Candid frames of the moment two families become one.',
    href: '/wedding-photography',
  },
  {
    Icon: Camera,
    title: 'Pre & Post Wedding',
    description: 'Dreamy sessions before and after the big celebration.',
    href: '/pre-wedding-photography',
  },
  {
    Icon: Landmark,
    title: 'Wedding',
    description: 'Every ritual, every tear, every laugh — captured in full.',
    href: '/wedding-photography',
  },
  {
    Icon: MaternityIcon,
    title: 'Maternity Shoot',
    description: 'Gentle, glowing portraits of life about to begin.',
    href: '/portfolio?category=maternity',
  },
  {
    Icon: Cake,
    title: 'Birthday & Born Baby Shoots',
    description: 'Milestones and tiny toes, celebrated in style.',
    href: '/birthday-photography',
  },
];

function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="veduka-services bg-[#FBF6EC] px-6 py-14 lg:px-16 lg:py-20"
    >
      {/* ===== HEADER ===== */}
      <div className="mx-auto mb-10 max-w-[720px] text-center lg:mb-14">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-[22px] bg-[#9C7620] lg:w-[34px]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9C7620] lg:text-[12.5px]">
            What we do
          </span>
          <span className="h-px w-[22px] bg-[#9C7620] lg:w-[34px]" />
        </div>

        <h2
          id="services-heading"
          className="veduka-services__heading mt-4 text-[26px] text-[#241C12] lg:text-[44px]"
        >
          Our Services
        </h2>

        <p className="mx-auto mt-4 max-w-[560px] text-[11.5px] text-[#6B5A42] lg:text-sm">
          From the first &quot;haldi&quot; to the hundredth birthday candle — we&apos;re behind the lens for
          every chapter of your story.
        </p>
      </div>

      {/* ===== CARDS ===== */}
      <div className="grid grid-cols-1 gap-[14px] lg:grid-cols-5 lg:gap-[22px]">
        {SERVICES.map(({ Icon, title, description, href }) => (
          <Link
            key={title}
            href={href}
            className="flex items-center gap-4 rounded-md border border-[#E9DCBB] bg-[#F5EDDC] p-5 text-left transition-colors duration-150 hover:border-[#C9A227] lg:flex-col lg:gap-0 lg:px-5 lg:py-9 lg:text-center"
          >
            <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#EDE1C4] text-[#9C7620] lg:mb-[22px] lg:h-[74px] lg:w-[74px]">
              <Icon className="h-6 w-6 lg:h-8 lg:w-8" strokeWidth={1.3} />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-[#241C12] lg:mb-2.5 lg:text-base">{title}</h3>
              <p className="mt-1 text-[11px] leading-[1.6] text-[#6B5A42] lg:mt-0 lg:text-[12.5px]">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 lg:mt-10 lg:flex-row lg:justify-center lg:gap-4">
        <Link
          href="/wedding-cinematography"
          className="flex w-full items-center gap-3 rounded-full border border-[#E9DCBB] bg-[#F5EDDC] py-2 pl-2 pr-6 transition-colors duration-150 hover:border-[#C9A227] lg:w-auto"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0F2A1E] text-[#C9A227]">
            <Video className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold text-[#241C12]">Wedding Cinematography</span>
        </Link>
        <Link
          href="/event-photography"
          className="flex w-full items-center gap-3 rounded-full border border-[#E9DCBB] bg-[#F5EDDC] py-2 pl-2 pr-6 transition-colors duration-150 hover:border-[#C9A227] lg:w-auto"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0F2A1E] text-[#C9A227]">
            <LayoutGrid className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold text-[#241C12]">View All Services</span>
        </Link>
      </div>
    </section>
  );
}

export default Services;
