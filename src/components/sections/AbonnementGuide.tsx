import Link from "next/link";
import { ABONNEMENT_SECTION } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function AbonnementGuide() {
  return (
    <Section id="abonnement" tone="soft">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight tracking-tight md:text-[2.6rem]">
            {ABONNEMENT_SECTION.h2}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {ABONNEMENT_SECTION.intro}
          </p>
          <p className="mt-8 text-sm font-semibold text-text">
            {ABONNEMENT_SECTION.beforeTitle}
          </p>
          <ul className="mt-4 space-y-0">
            {ABONNEMENT_SECTION.checklist.map((item) => (
              <li
                key={item}
                className="border-b border-line py-3.5 text-[15px] leading-relaxed text-text"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-relaxed text-muted">
            {ABONNEMENT_SECTION.compareNote}{" "}
            <Link
              href="/iptv-abonnement-france/"
              className="font-semibold text-blue underline underline-offset-4"
            >
              Voir les offres
            </Link>
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <aside className="rounded-lg border border-line bg-surface p-7 md:p-8">
            <h3 className="font-display text-2xl leading-snug tracking-tight">
              {ABONNEMENT_SECTION.h3_4k}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              {ABONNEMENT_SECTION.text_4k}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              {ABONNEMENT_SECTION.text_4k_2}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["HD", "Full HD", "4K"].map((q, i) => (
                <span
                  key={q}
                  className={`rounded-md border px-3 py-1.5 text-xs font-semibold ${
                    i === 2
                      ? "border-red/25 bg-red/8 text-red"
                      : "border-blue/20 bg-blue/8 text-blue"
                  }`}
                >
                  {q}
                </span>
              ))}
            </div>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
