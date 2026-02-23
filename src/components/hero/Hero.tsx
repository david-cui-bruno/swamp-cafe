import { HeroTitle } from "./HeroTitle";
import { HeroFooterBand } from "./HeroFooterBand";

export function Hero() {
  return (
    <section
      className="relative bg-cover bg-center pt-16 md:pt-20"
      style={{ backgroundImage: "url('/mardi gras.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative">
        <div
          className="mx-auto w-full px-4 pb-32 pt-24
                     md:max-w-[min(92vw,900px)] md:px-6 md:pb-44 md:pt-36
                     lg:max-w-[min(82vw,980px)] lg:px-7
                     xl:max-w-[min(70vw,1050px)]"
        >
          <HeroTitle />
        </div>

        {/* Purple footer band — full width, no gap */}
        <HeroFooterBand />
      </div>
    </section>
  );
}
