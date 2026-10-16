"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { HERO } from "@/data/home";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="france-hairline h-[2px] w-full" />

      <Container className="grid items-center gap-10 py-12 md:gap-12 md:py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-medium"
          >
            <span className="text-blue">Premium French</span>{" "}
            <span className="text-red">IPTV</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.04 }}
            className="font-display mt-4 max-w-[16ch] text-[clamp(2rem,5vw,3.75rem)] leading-[1.12] tracking-[-0.02em] text-text"
          >
            {HERO.h1}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {HERO.lead}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="mt-3 max-w-xl text-base leading-relaxed text-muted"
          >
            {HERO.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="#contenus" variant="primary" size="lg">
              {HERO.cta}
            </Button>
            <WhatsAppButton
              label="Contacter"
              message={WHATSAPP_MESSAGES.contact}
              variant="accent"
              size="lg"
              eventLabel="hero_contact"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative w-full -mx-5 md:-mx-8 lg:mx-0"
        >
          <div className="relative aspect-[16/10] max-h-[220px] overflow-hidden bg-surface-2 sm:aspect-[5/4] sm:max-h-none lg:rounded-lg">
            <Image
              src="/hero-new.jpg"
              alt="Télécommande et écran TV — Premium French IPTV"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
