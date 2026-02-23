import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { SITE_ABOUT_INTRO, SITE_ABOUT_BODY } from "../../constants/site";

export function About() {
  return (
    <Section id="about" className="bg-green-600">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
        {/* Left: heading + text */}
        <div className="flex flex-col justify-center">
          <SectionHeading
            title="Our Story"
            className="[&_h2]:font-fenway [&_h2]:text-white [&_h2]:[text-shadow:-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,2px_2px_0_#000,0_-2px_0_#000,0_2px_0_#000,-2px_0_0_#000,2px_0_0_#000]"
          />
          <div className="mt-6 rounded-2xl bg-white p-6 text-base leading-relaxed text-black md:text-lg">
            <p>{SITE_ABOUT_INTRO}</p>
            <p className="mt-4">{SITE_ABOUT_BODY}</p>
          </div>
        </div>

        {/* Right: image */}
        <div className="flex items-center justify-center">
          <img
            src="/story.jpeg"
            alt="Our Story"
            className="w-full rounded-xl object-contain md:max-h-128 md:object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
