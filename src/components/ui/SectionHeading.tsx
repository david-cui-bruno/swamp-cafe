interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  alignment = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = alignment === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`}>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-muted-ink md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
