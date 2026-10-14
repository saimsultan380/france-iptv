import { HOME_FAQ } from "@/data/faq";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Section tone="soft">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            FAQ
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-muted">
            Les réponses essentielles avant de démarrer votre abonnement IPTV France.
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="rounded-3xl border border-line bg-surface px-5 md:px-8">
            <FaqAccordion items={HOME_FAQ} />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
