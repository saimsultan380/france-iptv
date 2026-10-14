import Image from "next/image";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Image
        src="/devices.webp"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#00235c]/92" />
      <div className="france-hairline absolute inset-x-0 top-0 z-10 h-[2px]" />

      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
              Acheter IPTV France aujourd&apos;hui
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-white/75">
              Essai gratuit ou activation immédiate — une conversation WhatsApp suffit.
            </p>
            <div className="mt-9 flex flex-row items-center justify-center gap-2 sm:gap-3">
              <WhatsAppButton
                label="Essai gratuit"
                message={WHATSAPP_MESSAGES.essai}
                variant="inverse"
                size="sm"
                className="min-w-0 flex-1 sm:flex-none sm:!h-14 sm:!px-6 sm:text-[15px]"
                eventLabel="final_essai"
              />
              <WhatsAppButton
                label="Acheter"
                message={WHATSAPP_MESSAGES.acheter}
                variant="outlineLight"
                size="sm"
                showIcon={false}
                className="min-w-0 flex-1 sm:flex-none sm:!h-14 sm:!px-6 sm:text-[15px]"
                eventLabel="final_acheter"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
