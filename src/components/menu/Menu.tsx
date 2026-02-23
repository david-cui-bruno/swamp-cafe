import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { PillButton } from "../ui/PillButton";
import { MENU_PAGES, MENU_PDF_URL } from "../../constants/images";

export function Menu() {
  return (
    <Section id="menu" className="bg-yellow-200">
      <SectionHeading
        title="Our Menu"
        alignment="center"
        className="overflow-visible [&_h2]:font-fenway [&_h2]:text-white [&_h2]:text-5xl [&_h2]:md:text-6xl [&_h2]:lg:text-7xl [&_h2]:py-2 [&_h2]:leading-relaxed [&_h2]:[text-shadow:-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,2px_2px_0_#000,0_-2px_0_#000,0_2px_0_#000,-2px_0_0_#000,2px_0_0_#000]"
      />

      {/* Menu pages displayed side by side on desktop, stacked on mobile */}
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {MENU_PAGES.map((page) => (
          <div
            key={page.alt}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={page.src}
              alt={page.alt}
              loading="lazy"
              className="w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Button to view/download full PDF */}
      <div className="mt-8 text-center">
        <PillButton
          href={MENU_PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="lg"
        >
          Full Screen
        </PillButton>
      </div>
    </Section>
  );
}
