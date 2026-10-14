"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { TRUST_CHIPS } from "@/data/home";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="france-hairline h-[2px] w-full" />

      <Container className="grid items-center gap-8 py-10 md:gap-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-muted"
          >
            Premium French IPTV
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display mt-4 max-w-[12ch] text-[clamp(2.1rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-text"
          >
            Premium IPTV France en qualité 4K Ultra HD
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-4 max-w-lg text-sm leading-relaxed text-muted md:mt-5 md:text-lg"
          >
            Streaming fluide, chaînes françaises et internationales, films, séries
            et sport en direct — activé en quelques minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 flex flex-row items-center gap-2 sm:mt-8 sm:gap-3"
          >
            <WhatsAppButton
              label="Essai gratuit"
              message={WHATSAPP_MESSAGES.essai}
              variant="primary"
              size="sm"
              className="min-w-0 flex-1 !px-3 sm:flex-none sm:!h-14 sm:!px-6 sm:text-[15px]"
              eventLabel="hero_essai"
            />
            <WhatsAppButton
              label="Acheter"
              message={WHATSAPP_MESSAGES.acheter}
              variant="outline"
              size="sm"
              showIcon={false}
              className="min-w-0 flex-1 !px-3 sm:flex-none sm:!h-14 sm:!px-6 sm:text-[15px]"
              eventLabel="hero_acheter"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            className="mt-5 text-sm text-muted"
          >
            <span className="font-medium tabular text-text">dès 12€/mois</span>
            <span className="mx-2 text-line">·</span>
            <span className="tabular">50€/an</span>
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.34 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {TRUST_CHIPS.map((chip) => (
              <li
                key={chip}
                className="glass-chip rounded-full px-3 py-1.5 text-xs font-medium text-muted"
              >
                {chip}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-[8px]">
            <Image
              src="/hero.webp"
              alt="Premium French IPTV — streaming 4K sur Smart TV"
              width={960}
              height={720}
              priority
              className="h-auto max-h-[240px] w-full rounded-[8px] object-cover object-center sm:max-h-[320px] lg:max-h-none"
              sizes="(max-width: 1024px) 420px, 520px"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
