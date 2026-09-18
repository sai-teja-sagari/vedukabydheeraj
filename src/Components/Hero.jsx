import Link from 'next/link';
import Image from 'next/image';
import heroPhoto from '../Images/Front-page.jpg';
import accentPhoto from '../Images/image.png';

// NOTE: the floating badge's "500+" figure below is still a placeholder —
// update it to reflect real numbers before launch.

const CameraIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
    <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
    <circle cx="12" cy="13.5" r="3.2" />
  </svg>
);

const HeartIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
    <path d="M12 20s-7.5-4.6-9.8-9A5 5 0 0 1 12 6a5 5 0 0 1 9.8 5c-2.3 4.4-9.8 9-9.8 9Z" />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
    <path d="m12 3 2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L12 3Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const STATS = [
  { icon: CameraIcon, number: '500+', label: 'Celebrations captured' },
  { icon: HeartIcon, number: '10+', label: 'Years behind the lens' },
  { icon: StarIcon, number: '100%', label: 'Happy celebrations' },
];

function Hero() {
  return (
    <section id="home" className="veduka-hero bg-[#FBF6EC] px-6 py-14 lg:px-16 lg:py-20">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-[60px]">
        {/* ===== LEFT COLUMN: CONTENT ===== */}
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#B79B5B] lg:text-[13px]">
            Wedding photography &amp; event styling
          </p>

          <h1
            className="veduka-hero__headline mt-4 leading-[1.05]"
            aria-label="Every celebration deserves a beautiful story"
          >
            <span aria-hidden="true" className="block text-[30px] font-bold text-[#241C12] lg:text-[56px]">
              Every celebration
            </span>
            <span
              aria-hidden="true"
              className="veduka-hero__script mt-1 block text-[28px] font-bold text-[#9C7620] lg:mt-0 lg:text-[52px]"
            >
              deserves a beautiful story
            </span>
          </h1>

          <p className="mt-5 max-w-[460px] text-[13px] leading-[1.7] text-[#6B5A42] lg:text-base">
            From the first &quot;haldi&quot; to the last dance, we capture every unscripted moment — so your
            story stays exactly as it felt, not just as it looked.
          </p>

          {/* ===== CTA BUTTONS ===== */}
          <div className="mt-7 flex flex-col gap-4 lg:flex-row lg:items-center">
            <Link
              href="/estimator"
              className="veduka-hero__cta inline-flex items-center justify-center gap-2 rounded-full bg-[#0F2A1E] px-[30px] py-4 text-sm font-medium text-[#FBF6EC] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2A1E] focus-visible:ring-offset-2"
            >
              Select your package
              <ArrowIcon />
            </Link>
            <Link
              href="/portfolio"
              className="veduka-hero__cta inline-flex items-center justify-center rounded-full border border-[#C9A227] px-[30px] py-4 text-sm font-medium text-[#8A6A1F] hover:bg-[#C9A227]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2"
            >
              View portfolio
            </Link>
          </div>

          {/* ===== STATS ROW ===== */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#DCC98F] pt-6 lg:gap-6">
            {STATS.map(({ icon: Icon, number, label }) => (
              <div key={label}>
                <Icon className="h-5 w-5 text-[#9C7620] lg:h-[26px] lg:w-[26px]" />
                <p className="veduka-hero__stat-number mt-2 text-lg font-bold text-[#241C12] lg:text-[22px]">
                  {number}
                </p>
                <p className="mt-1 text-[11px] text-[#6B5A42] lg:text-[12px]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT COLUMN: PHOTO COLLAGE ===== */}
        <div className="relative h-[300px] w-full lg:h-[600px]">
          {/* Main photo */}
          <div className="absolute right-0 top-0 h-[280px] w-[230px] overflow-hidden rounded-md border-[6px] border-[#FBF6EC] shadow-lg ring-1 ring-[#DCC98F] lg:h-[520px] lg:w-[420px]">
            <Image
              src={heroPhoto}
              alt="Bride and groom during their wedding celebration"
              fill
              priority
              sizes="(min-width: 1024px) 420px, 230px"
              className="object-cover"
            />
          </div>

          {/* Accent photo */}
          <div className="absolute bottom-0 left-0 h-[160px] w-[140px] overflow-hidden rounded-md border-[6px] border-[#FBF6EC] shadow-lg ring-1 ring-[#DCC98F] lg:h-[270px] lg:w-[230px]">
            <Image
              src={accentPhoto}
              alt="Candid moment from a wedding celebration"
              fill
              sizes="(min-width: 1024px) 230px, 140px"
              className="object-cover"
            />
          </div>

          {/* Floating stats badge */}
          <div className="absolute bottom-[-16px] left-[92px] flex h-[108px] w-[108px] flex-col items-center justify-center rounded-full bg-[#0F2A1E] p-3 text-center shadow-xl lg:bottom-[-24px] lg:left-[150px] lg:h-[150px] lg:w-[150px] lg:p-4">
            <span className="veduka-hero__badge-number text-lg font-bold text-[#E8BE4E] lg:text-2xl">500+</span>
            <span className="mt-1 text-[9px] leading-tight text-[#D8C7A0] lg:text-[11px]">
              Weddings &amp; events planned with love
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
