import { M3U_SECTION } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function M3uXtream() {
  return (
    <Section id="m3u-xtream" tone="soft">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-3xl leading-tight tracking-tight md:text-[2.6rem]">
              {M3U_SECTION.h2}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">{M3U_SECTION.p1}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{M3U_SECTION.p2}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{M3U_SECTION.p3}</p>
            <div className="mt-8">
              <Button href={M3U_SECTION.guideHref} variant="primary" size="lg">
                Guide d&apos;installation IPTV
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-lg border border-line bg-surface p-6">
              <p className="text-sm font-semibold text-blue">Format</p>
              <p className="font-display mt-2 text-3xl tracking-tight">M3U</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Liste de lecture contenant des liens vers des flux multimédias.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-surface p-6">
              <p className="text-sm font-semibold text-red">Connexion</p>
              <p className="font-display mt-2 text-3xl tracking-tight">Xtream Codes</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Méthode utilisée par certains services et lecteurs compatibles.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
