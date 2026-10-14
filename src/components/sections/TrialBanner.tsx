import Image from "next/image";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function TrialBanner() {
  return (
    <Section tone="soft" className="!py-16 md:!py-20">
      <Reveal>
        <div className="glass-panel grid rounded-3xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-8 md:px-12 md:py-14">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Vous souhaitez tester avant d&apos;acheter&nbsp;?
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Demandez un essai gratuit sur WhatsApp et jugez la qualité par vous-même.
            </p>
            <div className="mt-8 flex flex-row items-center gap-2 sm:gap-3">
              <WhatsAppButton
                label="Essai gratuit"
                message={WHATSAPP_MESSAGES.essai}
                variant="primary"
                size="sm"
                className="min-w-0 flex-1 sm:flex-none sm:!h-14 sm:!px-6 sm:text-[15px]"
                eventLabel="trial_banner"
              />
              <WhatsAppButton
                label="Acheter"
                message={WHATSAPP_MESSAGES.acheter}
                variant="outline"
                size="sm"
                showIcon={false}
                className="min-w-0 flex-1 sm:flex-none sm:!h-14 sm:!px-6 sm:text-[15px]"
                eventLabel="trial_banner_acheter"
              />
            </div>
          </div>

          <div className="relative flex items-center justify-center border-t border-line p-6 sm:p-8 lg:border-t-0 lg:border-l lg:p-10">
            <Image
              src="/areas.webp"
              alt="Couverture IPTV France — Live TV, stabilité, haute qualité"
              width={720}
              height={560}
              className="h-auto w-full max-w-[420px] object-contain"
              sizes="(max-width: 1024px) 90vw, 420px"
              priority={false}
            />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
