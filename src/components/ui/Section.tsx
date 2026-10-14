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
  light: "bg-transparent text-text",
  white: "bg-transparent text-text",
  soft: "bg-transparent text-text",
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
      className={cn("relative py-20 md:py-24 lg:py-28", tones[tone], className)}
    >
      {hairline && (
        <div className="france-hairline absolute inset-x-0 top-0 h-[2px]" />
      )}
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
