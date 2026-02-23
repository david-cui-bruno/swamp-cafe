import { Container } from "../layout/Container";
import { CircularText } from "./CircularText";
import { FOOTER_NAV_LINKS } from "../../constants/footer";
import { SITE_NAME, SITE_ADDRESS, SITE_PHONE, SITE_GITHUB_URL } from "../../constants/site";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-primary-300 bg-surface py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr_auto]">
          {/* Left: Circular "COME AND JOIN US" text */}
          <div className="flex justify-center md:justify-start">
            <CircularText text="COME AND JOIN US ·" size={120} />
          </div>

          {/* Center: Address, phone, nav links, copyright */}
          <div className="space-y-4 text-center">
            <p className="text-sm text-muted-ink">
              <span className="block md:inline">{SITE_ADDRESS}</span>
              <span className="hidden md:inline"> | </span>
              <span className="block md:inline">Phone: {SITE_PHONE}</span>
            </p>

            {/* Nav links */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {FOOTER_NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-ink transition-colors hover:text-purple-600"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-xs text-subtle-ink">
              &copy; 2026 {SITE_NAME}. All rights reserved. Website by{" "}
              <a
                href={SITE_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-purple-600"
              >
                David Cui
              </a>
            </p>
          </div>

          {/* Right: TOP button */}
          <div className="flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex flex-col items-center gap-1 text-sm font-medium text-muted-ink transition-colors hover:text-purple-600"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
              TOP
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
