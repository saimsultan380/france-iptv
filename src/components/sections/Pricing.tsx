"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { PLANS, TIER_LABELS, type PlanTier } from "@/data/plans";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { cn } from "@/lib/cn";

export function Pricing() {
  const [tier, setTier] = useState<PlanTier>("standard");
  const plans = PLANS.filter((p) => p.tier === tier);

  return (
    <Section tone="soft" id="tarifs">
      <Reveal>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl leading-tight tracking-tight md:text-[2.6rem]">
              Découvrez les abonnements disponibles
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
              Comparez les formules, vérifiez leurs caractéristiques et choisissez
              celle qui correspond à votre budget et à vos habitudes de visionnage.
            </p>
          </div>

          <div
            className="inline-flex w-fit shrink-0 self-start rounded-md border border-line bg-surface p-1"
            role="tablist"
            aria-label="Type d'abonnement"
          >
            {(["standard", "premium"] as PlanTier[]).map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tier === t}
                onClick={() => setTier(t)}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition",
                  tier === t
                    ? t === "premium"
                      ? "bg-red text-white"
                      : "bg-blue text-white"
                    : "text-muted hover:text-text",
                )}
              >
                {TIER_LABELS[t]}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AnimatePresence mode="wait">
          {plans.map((plan, i) => (
            <motion.article
              key={plan.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className={cn(
                "relative flex flex-col rounded-lg border bg-surface p-6",
                plan.featured
                  ? "border-red shadow-[0_16px_40px_rgba(237,28,36,0.1)]"
                  : "border-line",
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-5 rounded-md bg-red px-2.5 py-1 text-[11px] font-semibold text-white">
                  Meilleure offre
                </span>
              )}

              <p className="text-sm text-muted">{plan.duration}</p>
              <p className="font-display mt-2 flex items-baseline gap-1">
                <span className="tabular text-5xl tracking-tight text-text">
                  {plan.price}
                </span>
                <span className="text-base text-muted">€</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm text-text/90">
                    <Check
                      className={`mt-0.5 size-4 shrink-0 ${
                        plan.featured ? "text-red" : "text-blue"
                      }`}
                      strokeWidth={2}
                    />
                    {perk}
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                label="Je choisis mon offre"
                message={WHATSAPP_MESSAGES.plan(
                  TIER_LABELS[plan.tier],
                  plan.duration,
                  plan.price,
                )}
                variant={plan.featured ? "accent" : "outlineBlue"}
                className="mt-8 w-auto self-start !px-5"
                showIcon={false}
                eventLabel={`plan_${plan.id}`}
              />
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      <Reveal className="mt-10 text-center">
        <Link
          href="/abonnement-iptv-12-mois/"
          className="text-sm font-medium text-text underline-offset-4 hover:underline"
        >
          Quelle durée choisir&nbsp;?
        </Link>
        <span className="mx-3 text-muted">·</span>
        <Link
          href="/iptv-abonnement-france/"
          className="text-sm font-medium text-text underline-offset-4 hover:underline"
        >
          Voir tous les abonnements
        </Link>
      </Reveal>
    </Section>
  );
}
