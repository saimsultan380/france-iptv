"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS } from "@/data/nav";
import { WHATSAPP_DISPLAY, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="relative z-[60] bg-blue text-[11px] text-white/80 sm:text-xs">
        <div className="france-hairline h-[2px] w-full" />
        <Container className="flex h-8 items-center justify-between gap-4">
          <p className="truncate">
            <span className="text-red">●</span>{" "}
            Activation instantanée · Support 24h/24 7j/7
          </p>
          <a
            href="https://wa.me/33644655224"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-medium text-white transition hover:text-[#ffb3b6]"
          >
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
        </Container>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-line bg-surface/90 py-2 shadow-[0_8px_30px_rgba(11,27,58,.06)] backdrop-blur-xl md:py-2.5"
            : "border-b border-line/60 bg-surface py-2 md:py-3",
        )}
      >
        <Container className="flex items-center justify-between gap-3 md:gap-4">
          <Link href="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
            <Image
              src="/logo-transparent.png"
              alt="Premium French IPTV"
              width={128}
              height={40}
              className="h-5 w-auto object-contain md:h-7"
              sizes="(max-width: 768px) 80px, 112px"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-[13px] text-muted transition hover:bg-surface-2 hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <WhatsAppButton
              label="Essai gratuit"
              message={WHATSAPP_MESSAGES.essai}
              variant="outlineBlue"
              size="sm"
              eventLabel="header_essai"
            />
            <WhatsAppButton
              label="Acheter"
              message={WHATSAPP_MESSAGES.acheter}
              variant="accent"
              size="sm"
              showIcon={false}
              eventLabel="header_acheter"
            />
          </div>

          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-md ring-1 ring-line xl:hidden"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen(true)}
          >
            <Menu strokeWidth={1.5} className="size-5" />
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-white xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col px-6 pb-8 pt-6">
              <div className="mb-6 flex items-center justify-between">
                <Image
                  src="/logo-transparent.png"
                  alt="Premium French IPTV"
                  width={64}
                  height={20}
                  className="h-5 w-auto object-contain"
                  sizes="80px"
                />
                <button
                  type="button"
                  aria-label="Fermer le menu"
                  onClick={() => setOpen(false)}
                  className="flex size-10 items-center justify-center rounded-md bg-surface-2 text-text ring-1 ring-line transition hover:bg-red hover:text-white hover:ring-red"
                >
                  <X strokeWidth={1.75} className="size-5" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-display block border-b border-line py-4 text-2xl tracking-tight text-text"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="flex flex-row items-center gap-2 pt-4">
                <WhatsAppButton
                  label="Essai gratuit"
                  message={WHATSAPP_MESSAGES.essai}
                  variant="outlineBlue"
                  size="sm"
                  className="min-w-0 flex-1"
                  eventLabel="mobile_menu_essai"
                />
                <WhatsAppButton
                  label="Acheter"
                  message={WHATSAPP_MESSAGES.acheter}
                  variant="accent"
                  size="sm"
                  showIcon={false}
                  className="min-w-0 flex-1"
                  eventLabel="mobile_menu_acheter"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
