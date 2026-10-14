import Image from "next/image";
import { SPORT_CHIPS } from "@/data/home";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function Sport() {
  return (
    <section className="relative overflow-hidden border-y border-line/60 bg-transparent py-20 md:py-24 lg:py-28">
      <div className="france-hairline absolute inset-x-0 top-0 h-[2px]" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <Reveal>
            <div className="glass-chip inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-text">
              <span className="size-1.5 rounded-full bg-red" />
              Sport en direct
            </div>

            <h2 className="font-display mt-5 max-w-[14ch] text-3xl font-semibold tracking-tight text-text md:text-[2.75rem] md:leading-[1.08]">
              Les grandes compétitions, en direct.
            </h2>

            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Football européen et français — suivez les matchs en HD et 4K, sans
              rater les grands soirs.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 border-t border-line pt-6">
              <div>
                <p className="font-display text-2xl font-semibold text-blue tabular md:text-3xl">
                  4K
                </p>
                <p className="mt-1 text-xs text-muted">Qualité Ultra HD</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-blue tabular md:text-3xl">
                  LIVE
                </p>
                <p className="mt-1 text-xs text-muted">Diffusion en direct</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-blue tabular md:text-3xl">
                  24/7
                </p>
                <p className="mt-1 text-xs text-muted">Support WhatsApp</p>
              </div>
            </div>

            <div className="mt-8">
              <WhatsAppButton
                label="Essai gratuit"
                message={WHATSAPP_MESSAGES.essai}
                variant="primary"
                size="md"
                eventLabel="sport_essai"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[28px] ring-1 ring-line">
                <Image
                  src="/content/content-sports.jpg"
                  alt="Sport en direct — stade et matchs en HD / 4K"
                  width={900}
                  height={620}
                  className="aspect-[4/3] h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00235c]/55 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-red px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
                    LIVE
                  </span>
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-text ring-1 ring-line backdrop-blur-sm">
                    HD / Full HD / 4K
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 md:mt-14">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Compétitions disponibles
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4" stagger={0.05} delay={0.08}>
            {SPORT_CHIPS.map((chip, i) => (
              <StaggerItem key={chip}>
                <div className="glass-card glass-card-hover group flex items-center gap-3 rounded-2xl px-3.5 py-3.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue font-display text-xs font-semibold text-white tabular">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium leading-snug text-text">
                    {chip}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
