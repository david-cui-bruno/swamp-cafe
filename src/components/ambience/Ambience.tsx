import { Section } from "../layout/Section";

export function Ambience() {
  return (
    <Section className="py-8 md:py-12">
      {/* Image gallery — placeholder for uploaded images */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-xl bg-surface-dim ${
              index % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]"
            }`}
          />
        ))}
      </div>
    </Section>
  );
}
