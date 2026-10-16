"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import type { FaqItem } from "@/data/faq";
import { cn } from "@/lib/cn";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-line">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id} className="py-1">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : item.id)}
              className="flex w-full items-start justify-between gap-6 py-5 text-left text-text transition-colors hover:text-red"
            >
              <span className="font-display text-lg leading-snug tracking-tight md:text-xl">
                {item.question}
              </span>
              <span
                className={cn(
                  "mt-1 flex size-8 shrink-0 items-center justify-center rounded-md ring-1 ring-line transition-all duration-300",
                  open && "rotate-45 bg-red text-white ring-red",
                )}
              >
                <Plus className="size-4" strokeWidth={1.5} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-6 text-base leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
