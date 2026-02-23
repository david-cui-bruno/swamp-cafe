import { NAV_LINKS } from "../../constants/navigation";
import { HeroBrandMark } from "./HeroBrandMark";

const outlineButtonClasses =
  "inline-flex items-center justify-center border border-white/70 rounded-sm px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700";

const navLinkClasses =
  "text-[11px] md:text-xs font-medium uppercase tracking-[0.3em] text-white/80 transition-colors hover:text-white";

function NavLinks() {
  const links = NAV_LINKS.filter((link) => link.label !== "Home");

  return (
    <>
      {links.map((link) => (
        <a key={link.href} href={link.href} className={navLinkClasses}>
          {link.label}
        </a>
      ))}
    </>
  );
}

export function HeroNav() {
  return (
    <nav aria-label="Main navigation" className="py-6 md:py-8">
      {/* Mobile layout */}
      <div className="flex items-center justify-between md:hidden">
        <div className="flex items-center gap-6">
          <HeroBrandMark />
          <NavLinks />
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden w-full items-center justify-between md:flex">
        <div className="flex items-center gap-8">
          <HeroBrandMark />
          <NavLinks />
        </div>
        <a href="#contact" className={outlineButtonClasses}>
          Reservations
        </a>
      </div>
    </nav>
  );
}
