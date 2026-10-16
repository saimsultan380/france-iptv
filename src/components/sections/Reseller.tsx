import { RESELLER_SECTION } from "@/data/home";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/Button";

export function Reseller() {
  return (
    <Section id="revendeur" tone="white" hairline>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight tracking-tight md:text-[2.6rem]">
            {RESELLER_SECTION.h2}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {RESELLER_SECTION.intro}
          </p>
          <p className="mt-8 text-sm font-semibold text-text">
            {RESELLER_SECTION.before}
          </p>
          <ul className="mt-4">
            {RESELLER_SECTION.points.map((point) => (
              <li
                key={point}
                className="border-b border-line py-3 text-[15px] leading-relaxed text-text"
              >
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-relaxed text-muted">
            {RESELLER_SECTION.contact}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="rounded-lg border border-line bg-surface p-7 md:sticky md:top-28 md:p-8">
            <p className="font-display text-2xl tracking-tight">Programme revendeur</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Demandez les conditions, les outils de gestion et les modalités avant
              de démarrer.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <WhatsAppButton
                label={RESELLER_SECTION.cta}
                message={WHATSAPP_MESSAGES.revendeur}
                variant="accent"
                size="lg"
                className="w-full"
                eventLabel="reseller_info"
              />
              <Button
                href="/revendeur-iptv-france/"
                variant="outlineBlue"
                size="md"
                className="w-full"
              >
                Page revendeur
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
