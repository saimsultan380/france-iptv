import { WHY_SECTION } from "@/data/home";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhyIcon } from "@/components/graphics/WhyIcon";

export function WhyUs() {
  return (
    <Section id="pourquoi" tone="white" hairline>
      <Reveal>
        <h2 className="font-display max-w-3xl text-3xl leading-tight tracking-tight md:text-[2.6rem]">
          {WHY_SECTION.h2}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          {WHY_SECTION.intro}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6">
        {WHY_SECTION.points.map((point) => (
          <Reveal key={point.id}>
            <article className="flex h-full flex-col gap-5 rounded-lg border border-line bg-surface p-6 md:p-8">
              <WhyIcon id={point.id} />
              <div>
                <h3 className="font-display text-xl leading-snug tracking-tight md:text-2xl">
                  {point.h3}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted md:text-base">
                  {point.text}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.08}>
        <div className="mt-10">
          <WhatsAppButton
            label={WHY_SECTION.cta}
            message={WHATSAPP_MESSAGES.decouvrir}
            variant="accent"
            size="lg"
            eventLabel="why_discover"
          />
        </div>
      </Reveal>
    </Section>
  );
}
