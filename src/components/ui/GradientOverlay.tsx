interface GradientOverlayProps {
  className?: string;
}

export function GradientOverlay({ className = "" }: GradientOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent ${className}`}
    />
  );
}
