import type { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullBleed?: boolean;
}

export function Section({
  children,
  className = "",
  id,
  fullBleed = false,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {fullBleed ? children : <Container>{children}</Container>}
    </section>
  );
}
