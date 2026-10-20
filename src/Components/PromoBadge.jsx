function PromoBadge() {
  return (
    <div className="promo-badge absolute left-0 top-0 z-20 flex h-16 w-16 flex-col items-center justify-center rounded-lg border border-[#E8BE4E]/70 bg-[#0F2A1E] p-1.5 text-center lg:h-24 lg:w-24 lg:p-2">
      <span className="promo-badge__lens" aria-hidden="true" />
      <span className="promo-badge__flash" aria-hidden="true" />
      <span className="font-[Playfair_Display] text-[11px] font-bold leading-none text-[#E8BE4E] lg:text-xl">
        FREE
      </span>
      <span className="mt-1 max-w-[56px] font-[Poppins] text-[5.5px] font-semibold leading-[1.25] text-[#FBF6EC] lg:mt-1.5 lg:max-w-[80px] lg:text-[9px]">
        Instant Event Photo Reel — delivered same day
      </span>
    </div>
  );
}

export default PromoBadge;