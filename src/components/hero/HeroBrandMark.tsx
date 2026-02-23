import { SITE_NAME } from "../../constants/site";

export function HeroBrandMark() {
  return (
    <img
      src="/logo.png"
      alt={`${SITE_NAME} logo`}
      className="h-20 w-auto md:h-24 -mb-3 -mt-4 md:-mb-4 md:-mt-5"
    />
  );
}
