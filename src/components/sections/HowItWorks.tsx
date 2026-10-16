import { SETUP_SECTION } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorks() {
  return (
    <Section id="installation" tone="white" hairline>
      <Reveal>
        <h2 className="font-display max-w-3xl text-3xl leading-tight tracking-tight md:text-[2.6rem]">
          {SETUP_SECTION.h2}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          {SETUP_SECTION.intro}
        </p>
      </Reveal>

      <ol className="mt-12 space-y-0 border-t border-line">
        {SETUP_SECTION.steps.map((step, i) => (
          <Reveal key={step.h3}>
            <li className="grid gap-4 border-b border-line py-8 md:grid-cols-[4rem_1fr] md:gap-8">
              <span
                className={`font-display text-3xl tabular ${
                  i % 2 === 0 ? "text-blue/45" : "text-red/45"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl tracking-tight md:text-2xl">
                  {step.h3}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
