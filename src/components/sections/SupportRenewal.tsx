import Image from "next/image";
import { SUPPORT_SECTION } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function SupportRenewal() {
  return (
    <Section id="assistance" tone="soft">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight tracking-tight md:text-[2.6rem]">
            {SUPPORT_SECTION.h2}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {SUPPORT_SECTION.p1}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {SUPPORT_SECTION.p2}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {SUPPORT_SECTION.p3}
          </p>
          <div className="mt-8">
            <Button href="/iptv-abonnement-france/" variant="accent" size="lg">
              {SUPPORT_SECTION.cta}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="relative mx-auto aspect-[16/10] max-h-[220px] w-full max-w-md overflow-hidden rounded-lg sm:aspect-[4/3] sm:max-h-none lg:max-w-none">
            <Image
              src="/section-support.jpg"
              alt="Assistance et renouvellement d'abonnement IPTV"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 420px, 520px"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
