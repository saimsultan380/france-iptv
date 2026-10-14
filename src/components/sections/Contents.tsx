import { CONTENT_ITEMS } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { Container } from "@/components/ui/Container";

export function Contents() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <Container>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Contenus
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Du sport au cinéma, tout ce que vous regardez — au même endroit.
          </h2>
        </Reveal>
      </Container>
      <div className="mt-10">
        <Marquee items={CONTENT_ITEMS} />
      </div>
    </section>
  );
}
