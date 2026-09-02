import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  narrow?: boolean;
};

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  narrow = false,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 sm:py-24 ${className}`}>
      <Container className={narrow ? "max-w-3xl" : containerClassName}>
        {children}
      </Container>
    </section>
  );
}
