"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { REVIEWS_PLACEHOLDER } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < count ? "fill-[#F5B301] text-[#F5B301]" : "fill-transparent text-line",
          )}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + REVIEWS_PLACEHOLDER.length) % REVIEWS_PLACEHOLDER.length);
  const next = () => setIndex((i) => (i + 1) % REVIEWS_PLACEHOLDER.length);

  return (
    <Section tone="white">
      <Reveal>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Avis clients
              </p>
              <Badge tone="soft">TODO_CLIENT</Badge>
            </div>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Ce que disent nos abonnés
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted">
              Placeholders à remplacer par de vrais témoignages clients.
            </p>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={prev}
              aria-label="Avis précédent"
              className="flex size-11 items-center justify-center rounded-full border border-line bg-white transition hover:border-blue hover:text-blue"
            >
              <ChevronLeft strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Avis suivant"
              className="flex size-11 items-center justify-center rounded-full bg-blue text-white transition hover:bg-[#001a45]"
            >
              <ChevronRight strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </Reveal>

      {/* Desktop: 3 visible cards, active highlighted */}
      <div className="mt-10 hidden gap-4 lg:grid lg:grid-cols-3">
        {REVIEWS_PLACEHOLDER.map((review, i) => {
          const active = i === index;
          return (
            <button
              key={review.id}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "group relative flex h-full flex-col rounded-3xl border p-6 text-left transition duration-300",
                active
                  ? "border-transparent bg-blue text-white shadow-[0_24px_50px_rgba(0,35,92,.28)]"
                  : "border-line bg-white hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_16px_40px_rgba(0,35,92,.08)]",
              )}
            >
              <div className="france-hairline absolute inset-x-6 top-0 h-[2px] rounded-full opacity-80" />
              <div className="flex items-start justify-between gap-3">
                <div
                  className={cn(
                    "flex size-12 items-center justify-center rounded-full text-sm font-semibold",
                    active ? "bg-white/15 text-white" : "bg-blue text-white",
                  )}
                >
                  {review.initials}
                </div>
                <Quote
                  className={cn(
                    "size-8",
                    active ? "text-white/25" : "text-red/25",
                  )}
                  strokeWidth={1.25}
                />
              </div>

              <div className="mt-5">
                <Stars count={review.rating} />
              </div>

              <p
                className={cn(
                  "font-display mt-4 flex-1 text-lg leading-snug tracking-tight",
                  active ? "text-white" : "text-text",
                )}
              >
                «&nbsp;{review.text}&nbsp;»
              </p>

              <div className="mt-6 flex items-center justify-between gap-3 border-t pt-5"
                style={{ borderColor: active ? "rgba(255,255,255,.15)" : "rgba(11,27,58,.1)" }}
              >
                <div>
                  <p className={cn("font-semibold", active ? "text-white" : "text-text")}>
                    {review.name}
                  </p>
                  <p className={cn("mt-0.5 text-sm", active ? "text-white/65" : "text-muted")}>
                    {review.role}
                  </p>
                </div>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-[11px] font-medium",
                    active ? "bg-white/15 text-white" : "bg-surface-2 text-muted",
                  )}
                >
                  {review.device}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile / tablet: single featured card carousel */}
      <div className="mt-8 lg:hidden">
        <AnimatePresence mode="wait">
          <motion.article
            key={REVIEWS_PLACEHOLDER[index].id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-3xl bg-blue p-6 text-white shadow-[0_20px_48px_rgba(0,35,92,.25)] sm:p-8"
          >
            <div className="france-hairline absolute inset-x-0 top-0 h-[2px]" />
            <div className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -bottom-10 -left-6 size-36 rounded-full bg-red/20 blur-2xl" />

            <div className="relative flex items-start justify-between">
              <div className="flex size-12 items-center justify-center rounded-full bg-white/15 text-sm font-semibold">
                {REVIEWS_PLACEHOLDER[index].initials}
              </div>
              <Quote className="size-10 text-white/20" strokeWidth={1.25} />
            </div>

            <div className="relative mt-5">
              <Stars count={REVIEWS_PLACEHOLDER[index].rating} />
            </div>

            <p className="font-display relative mt-4 text-xl leading-snug tracking-tight sm:text-2xl">
              «&nbsp;{REVIEWS_PLACEHOLDER[index].text}&nbsp;»
            </p>

            <div className="relative mt-8 flex items-center justify-between gap-3 border-t border-white/15 pt-5">
              <div>
                <p className="font-semibold">{REVIEWS_PLACEHOLDER[index].name}</p>
                <p className="mt-0.5 text-sm text-white/65">
                  {REVIEWS_PLACEHOLDER[index].role}
                </p>
              </div>
              <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium">
                {REVIEWS_PLACEHOLDER[index].device}
              </span>
            </div>
          </motion.article>
        </AnimatePresence>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Avis précédent"
              className="flex size-11 items-center justify-center rounded-full border border-line bg-white transition hover:border-blue"
            >
              <ChevronLeft strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Avis suivant"
              className="flex size-11 items-center justify-center rounded-full bg-blue text-white"
            >
              <ChevronRight strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex items-center gap-1.5">
            {REVIEWS_PLACEHOLDER.map((r, i) => (
              <button
                key={r.id}
                type="button"
                aria-label={`Avis ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-6 bg-blue" : "w-1.5 bg-line",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
