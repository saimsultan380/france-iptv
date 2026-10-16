"use client";

import { useState } from "react";
import { HOME_FAQ } from "@/data/faq";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Button } from "@/components/ui/Button";

const INITIAL_COUNT = 6;

export function Faq() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? HOME_FAQ : HOME_FAQ.slice(0, INITIAL_COUNT);
  const hiddenCount = HOME_FAQ.length - INITIAL_COUNT;

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
    <Section id="faq" tone="white" hairline>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight tracking-tight md:text-[2.6rem]">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Tout ce qu&apos;il faut savoir avant de choisir un abonnement IPTV en
            France.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="rounded-lg border border-line bg-surface px-1 md:px-2">
            <FaqAccordion items={visible} />
          </div>
          {hiddenCount > 0 && (
            <div className="mt-6">
              <Button
                type="button"
                variant={expanded ? "outlineBlue" : "accent"}
                size="md"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
              >
                {expanded
                  ? "Voir moins"
                  : `Voir plus (${hiddenCount} autres)`}
              </Button>
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
