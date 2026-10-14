import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, LEGAL_LINKS } from "@/data/nav";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/80 backdrop-blur-sm">
      <div className="france-hairline h-[2px] w-full" />

      <Reveal>
      <Container className="grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:py-16">
        <div>
          <Image
            src="/logo.jpeg"
            alt="Premium French IPTV"
            width={80}
            height={24}
            className="h-5 w-auto object-contain"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            IPTV France premium : chaînes françaises et internationales, sport en
            direct, films et séries — jusqu&apos;en 4K Ultra HD.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a
              href="https://wa.me/33644655224"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-medium text-text transition hover:text-blue-bright"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="block text-muted transition hover:text-text"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Navigation
          </p>
          <ul className="mt-5 space-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-text/90 transition hover:text-blue-bright">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Légal
          </p>
          <ul className="mt-5 space-y-3">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-text/90 transition hover:text-blue-bright">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      </Reveal>

      <Container className="flex flex-col gap-3 border-t border-line py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Premium French IPTV. Tous droits réservés.</p>
        <p>premiumfrenchiptv.fr</p>
      </Container>
    </footer>
  );
}
