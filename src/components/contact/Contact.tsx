import { Section } from "../layout/Section";
import { PillButton } from "../ui/PillButton";
import {
  SITE_ADDRESS,
  SITE_PHONE,
  SITE_EMAIL,
  SITE_DIRECTIONS_URL,
  SITE_CHEF_OWNER,
  SITE_RESERVATION_URL,
  SITE_INSTAGRAM_URL,
} from "../../constants/site";

export function Contact() {
  return (
    <Section id="contact">
      {/* Heading */}
      <h2 className="text-center font-display text-4xl font-semibold tracking-tight text-ink md:text-6xl lg:text-7xl">
        Contact
      </h2>

      {/* Decorative hatched divider */}
      <div
        aria-hidden="true"
        className="mx-auto mt-6 h-1 w-48 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 3px, currentColor 3px, currentColor 4px), repeating-linear-gradient(-45deg, transparent, transparent 3px, currentColor 3px, currentColor 4px)",
        }}
      />

      {/* Two-column layout */}
      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left column: address + phone */}
        <div className="space-y-4 border-l-2 border-primary-400 pl-6">
          <p className="text-base text-ink">
            {SITE_ADDRESS}
          </p>
          <a
            href={SITE_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-purple-600 underline underline-offset-2 transition-colors hover:text-purple-500"
          >
            Get Directions
          </a>
          <p className="text-base text-ink">
            P:{" "}
            <a
              href={`tel:${SITE_PHONE.replace(/[^+\d]/g, "")}`}
              className="transition-colors hover:text-purple-600"
            >
              {SITE_PHONE}
            </a>
          </p>
        </div>

        {/* Right column: reservation CTA */}
        <div className="space-y-4">
          <p className="font-display text-xl font-semibold italic text-ink">
            Feel like dining with us tonight?
          </p>
          <p className="text-sm text-muted-ink">
            Simply make a reservation below or reach us by phone at{" "}
            {SITE_PHONE}
          </p>

          <div className="mt-2">
            <PillButton href={SITE_RESERVATION_URL} variant="outline" size="lg">
              Make a Reservation
            </PillButton>
          </div>
        </div>
      </div>

      {/* Staff + social row */}
      <div className="mt-12 grid grid-cols-1 gap-8 border-t border-primary-300 pt-8 sm:grid-cols-2">
        {/* Chef/Owner */}
        <div className="border-l-2 border-primary-400 pl-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-ink">
            {SITE_CHEF_OWNER.title}
          </p>
          <p className="mt-1 font-display text-lg text-ink">
            {SITE_CHEF_OWNER.name}
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-end gap-6">
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="text-sm font-semibold uppercase tracking-wider text-muted-ink underline underline-offset-2 transition-colors hover:text-purple-600"
          >
            Email Us
          </a>
          <a
            href={SITE_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold uppercase tracking-wider text-muted-ink underline underline-offset-2 transition-colors hover:text-purple-600"
          >
            Instagram
          </a>
        </div>
      </div>
    </Section>
  );
}
