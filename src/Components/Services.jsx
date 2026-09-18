import Link from 'next/link';

const iconProps = {
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  className: 'h-6 w-6 lg:h-8 lg:w-8',
};

export const EngagementIcon = () => (
  <svg {...iconProps}>
    <circle cx="12.5" cy="19" r="7" />
    <circle cx="19.5" cy="19" r="7" />
    <path d="M16 4v4M13.8 6.3h4.4M14.4 4.9l3.2 3" />
  </svg>
);

export const CameraIcon = () => (
  <svg {...iconProps}>
    <path d="M13 11V9.3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V11" />
    <rect x="4" y="11" width="24" height="15.5" rx="3" />
    <circle cx="16" cy="18.8" r="5" />
  </svg>
);

// NOTE: this "arch/mandap" glyph is the least conventional of the five icons and
// may not read clearly at 24-32px — consider swapping for something more
// universally recognizable (e.g. two rings with a small flame, or a floral
// wreath) if it tests poorly with real users.
export const WeddingIcon = () => (
  <svg {...iconProps}>
    <path d="M9 27V17a7 7 0 0 1 14 0v10" />
    <line x1="6" y1="27" x2="26" y2="27" />
    <circle cx="16" cy="7.5" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

export const MaternityIcon = () => (
  <svg {...iconProps}>
    <path d="M16 26.5s-8.5-5.4-8.5-11.7A5.3 5.3 0 0 1 16 11.4a5.3 5.3 0 0 1 8.5 3.4c0 6.3-8.5 11.7-8.5 11.7Z" />
    <path d="M16 11c.2-1.8 1-2.8 2.2-3.3M16 11c-.2-1.8-1-2.8-2.2-3.3" />
  </svg>
);

export const CakeIcon = () => (
  <svg {...iconProps}>
    <path d="M7 27v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
    <path d="M7 27h18" />
    <path d="M12 18v-4M16 18v-4M20 18v-4" />
    <path d="M12 12.2c0-.9.6-1.4 0-2.2-.6.8 0 1.3 0 2.2Z" />
    <path d="M16 12.2c0-.9.6-1.4 0-2.2-.6.8 0 1.3 0 2.2Z" />
    <path d="M20 12.2c0-.9.6-1.4 0-2.2-.6.8 0 1.3 0 2.2Z" />
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
    Icon: CameraIcon,
    title: 'Pre & Post Wedding',
    description: 'Dreamy sessions before and after the big celebration.',
    href: '/pre-wedding-photography',
  },
  {
    Icon: WeddingIcon,
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
    Icon: CakeIcon,
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
              <Icon />
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

      <div className="mt-8 flex justify-center gap-5 text-[12px] font-medium uppercase tracking-[0.1em] text-[#8A6A1F] lg:mt-10">
        <Link href="/wedding-cinematography" className="hover:underline">
          Wedding Cinematography
        </Link>
        <span className="text-[#DCC98F]">·</span>
        <Link href="/event-photography" className="hover:underline">
          View All Services
        </Link>
      </div>
    </section>
  );
}

export default Services;
