import Image from "next/image";
import Link from "next/link";
import { FINAL_SECTION } from "@/data/home";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <Image
        src="/cta-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={false}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="france-hairline absolute inset-x-0 top-0 z-10 h-[2px]" />

      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl leading-tight tracking-tight text-white md:text-[2.75rem] md:leading-[1.15]">
              {FINAL_SECTION.h2}
            </h2>
            <div className="mx-auto mt-5 max-w-3xl space-y-2.5 text-base leading-relaxed text-white/80 md:text-[17px]">
              <p>{FINAL_SECTION.p1}</p>
              <p>{FINAL_SECTION.p2}</p>
              <p>{FINAL_SECTION.p3}</p>
              <p>{FINAL_SECTION.p4}</p>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/iptv-abonnement-france/" variant="accent" size="lg">
                {FINAL_SECTION.ctaOffers}
              </Button>
              <WhatsAppButton
                label={FINAL_SECTION.ctaContact}
                message={WHATSAPP_MESSAGES.contact}
                variant="outlineLight"
                size="lg"
                eventLabel="final_contact"
              />
            </div>
            <p className="mt-5 text-sm text-white/55">
              Ou consultez{" "}
              <Link
                href="#tarifs"
                className="font-medium text-white underline underline-offset-4"
              >
                les tarifs
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
