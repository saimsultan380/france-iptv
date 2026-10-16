import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  tone?: "light" | "white" | "soft" | "navy";
  hairline?: boolean;
};

const tones = {
  light: "bg-white text-text",
  white: "bg-white text-text",
  soft: "bg-white text-text",
  navy: "bg-blue text-white",
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  tone = "light",
  hairline = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-16 md:py-20 lg:py-24", tones[tone], className)}
    >
      {hairline && <div className="absolute inset-x-0 top-0 h-px bg-line" />}
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
