import { useState } from "react";
import { NAV_LINKS } from "../../constants/navigation";
import { SITE_NAME } from "../../constants/site";

const navLinkClasses =
  "text-[11px] md:text-xs font-medium uppercase tracking-[0.3em] text-white/80 transition-colors hover:text-white";

const outlineButtonClasses =
  "inline-flex items-center justify-center border border-white/70 rounded-sm px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = NAV_LINKS.filter((link) => link.label !== "Home");

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-purple-700/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-3 py-2 md:px-5 lg:px-8">
        {/* Left: name + logo + nav links */}
        <div className="flex items-center gap-6 md:gap-8">
          <a href="#" className="flex items-center">
            <img
              src="/logo.png"
              alt={`${SITE_NAME} logo`}
              className="h-12 w-auto md:h-14 -my-1 -mr-2 -translate-y-1"
            />
            <span className="font-fenway text-lg text-white md:text-xl">
              Swamp Cafe
            </span>
          </a>
          <div className="hidden items-center gap-8 ml-4 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className={navLinkClasses}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: reservations + mobile hamburger */}
        <div className="flex items-center gap-4">
          <a href="#contact" className={`hidden md:inline-flex ${outlineButtonClasses}`}>
            Reservations
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-purple-700/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className={outlineButtonClasses}>
              Reservations
            </a>
          </div>
        </div>
      )}

      {/* Animated Mardi Gras strip */}
      <div className="mardi-gras-strip" aria-hidden="true" />
    </nav>
  );
}
