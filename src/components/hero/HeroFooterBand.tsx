import {
  SITE_HOURS,
  SITE_FACEBOOK_URL,
  SITE_INSTAGRAM_URL,
} from "../../constants/site";

export function HeroFooterBand() {
  return (
    <div className="bg-burgundy px-4 py-5 md:px-6 md:py-7">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        {/* Hours block */}
        <div className="space-y-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] leading-relaxed text-white/90 md:text-xs">
            {SITE_HOURS.monWed}
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] leading-relaxed text-white/90 md:text-xs">
            {SITE_HOURS.thursday}
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] leading-relaxed text-white/90 md:text-xs">
            {SITE_HOURS.friday} &middot; {SITE_HOURS.saturday}
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] leading-relaxed text-white/90 md:text-xs">
            {SITE_HOURS.sunday}
          </p>
        </div>

        {/* Social block */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 md:text-xs">
          Visit us on{" "}
          <a
            href={SITE_FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-white/40 transition-colors hover:decoration-white"
          >
            Facebook
          </a>{" "}
          or{" "}
          <a
            href={SITE_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-white/40 transition-colors hover:decoration-white"
          >
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
}
