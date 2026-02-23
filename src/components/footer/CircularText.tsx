interface CircularTextProps {
  text: string;
  size?: number;
  className?: string;
}

export function CircularText({
  text,
  size = 120,
  className = "",
}: CircularTextProps) {
  const radius = size / 2 - 30;
  const center = size / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <path
          id="circlePath"
          d={`M ${center},${center} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
        />
      </defs>
      <text
        className="fill-ink"
        style={{
          fontSize: `${size * 0.13}px`,
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <textPath href="#circlePath" startOffset="0%">
          {text}
        </textPath>
      </text>
    </svg>
  );
}
