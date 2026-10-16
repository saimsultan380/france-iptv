import {
  Clapperboard,
  MonitorPlay,
  Scale,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { CHOOSE_SECTION } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const ICONS: Record<string, LucideIcon> = {
  content: Clapperboard,
  quality: MonitorPlay,
  compat: Smartphone,
  transparency: Scale,
  rights: ShieldCheck,
};

export function HowToChoose() {
  return (
    <Section id="choisir" tone="white" hairline>
      <Reveal>
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl leading-tight tracking-tight md:text-[2.6rem]">
            {CHOOSE_SECTION.h2}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {CHOOSE_SECTION.intro}
          </p>
          <p className="mt-6 text-sm font-semibold text-text">
            {CHOOSE_SECTION.before}
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CHOOSE_SECTION.criteria.map((item, i) => {
          const Icon = ICONS[item.id] ?? ShieldCheck;
          const red = i % 2 === 1;
          return (
            <Reveal key={item.id} delay={i * 0.04}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition hover:shadow-[0_12px_32px_rgba(11,27,58,0.06)]",
                  i === 4 && "sm:col-span-2 lg:col-span-1",
                )}
              >
                <span
                  className={cn(
                    "mb-5 inline-flex size-11 items-center justify-center rounded-lg",
                    red ? "bg-red/10 text-red" : "bg-blue/10 text-blue",
                  )}
                >
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <span
                  className={cn(
                    "mb-3 text-xs font-bold uppercase tracking-[0.14em]",
                    red ? "text-red" : "text-blue",
                  )}
                >
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl tracking-tight md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted first-letter:uppercase">
                  {item.text}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-10 max-w-3xl rounded-lg border border-line bg-surface-2/60 px-5 py-4 text-[15px] leading-relaxed text-muted">
          {CHOOSE_SECTION.footer}
        </p>
      </Reveal>
    </Section>
  );
}
