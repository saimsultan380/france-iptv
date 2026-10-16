import Image from "next/image";
import { FREE_VS_PREMIUM_SECTION } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function FreeVsPremium() {
  return (
    <Section id="gratuit-vs-premium" tone="white" hairline>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight tracking-tight md:text-[2.6rem]">
            {FREE_VS_PREMIUM_SECTION.h2}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {FREE_VS_PREMIUM_SECTION.p1}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {FREE_VS_PREMIUM_SECTION.p2}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {FREE_VS_PREMIUM_SECTION.p3}
          </p>
          <div className="mt-8">
            <Button href="#tarifs" variant="accent" size="lg">
              Comparer les abonnements
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="relative mx-auto aspect-[16/10] max-h-[220px] w-full max-w-md overflow-hidden rounded-lg sm:aspect-[4/3] sm:max-h-none lg:max-w-none">
            <Image
              src="/section-free-vs.jpg"
              alt="Public dans une salle de cinéma — expérience de visionnage premium"
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
