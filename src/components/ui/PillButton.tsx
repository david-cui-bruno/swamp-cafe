import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

type PillButtonProps = AnchorProps | ButtonProps;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-purple-600 text-white hover:bg-purple-500 focus:ring-purple-400",
  secondary:
    "bg-green-600 text-white hover:bg-green-500 focus:ring-green-400",
  outline:
    "border border-primary-400 text-ink hover:bg-purple-600 hover:text-white hover:border-purple-600 focus:ring-purple-400",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-6 py-2 text-sm",
  lg: "px-8 py-3 text-base",
};

function isAnchorProps(props: PillButtonProps): props is AnchorProps {
  return "href" in props;
}

export function PillButton(props: PillButtonProps) {
  const {
    children,
    variant = "outline",
    size = "md",
    className = "",
    ...rest
  } = props;

  const classes = `inline-flex items-center justify-center rounded-full font-sans font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (isAnchorProps(props)) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
