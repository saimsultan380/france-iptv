import { HOW_STEPS } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorks() {
  return (
    <Section tone="white">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Comment ça marche
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-[2.75rem]">
          Trois étapes. C&apos;est tout.
        </h2>
      </Reveal>

      <div className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-8">
        <div className="pointer-events-none absolute left-[16%] right-[16%] top-7 hidden h-px bg-line md:block" />

        {HOW_STEPS.map((step, i) => (
          <Reveal key={step.step} delay={i * 0.06}>
            <div className="relative">
              <div className="flex size-14 items-center justify-center rounded-full bg-blue font-display text-lg font-semibold text-white">
                {step.step}
              </div>
              <h3 className="font-display mt-6 text-xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-[15px]">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <p className="text-sm text-muted">
          Simple, rapide et sans installation complexe.
        </p>
      </Reveal>
    </Section>
  );
}
