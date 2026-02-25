export function HeroTitle() {
  return (
    <div className="flex flex-col items-center pb-8 pt-4 md:pb-12 md:pt-6">
      <h1
        className="text-center font-fenway text-yellow-400
                   text-[12vw] leading-tight
                   md:whitespace-nowrap md:text-[12vw] lg:text-[9vw] xl:text-[7vw]"
        style={{
          textShadow:
            "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
        }}
      >
        Laissez les bon temps rouler!
      </h1>
      <a
        href="tel:+14699865555"
        className="mt-8 inline-flex items-center justify-center rounded-sm border border-white/70
                   bg-purple-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em]
                   text-white transition-colors hover:bg-white hover:text-purple-700
                   md:mt-10 md:px-8 md:py-3.5 md:text-base"
      >
        Place Order
      </a>
    </div>
  );
}
