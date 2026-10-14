import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://premiumfrenchiptv.fr"),
  title: {
    default: "Premium IPTV France 4K Ultra HD | Premium French IPTV",
    template: "%s | Premium French IPTV",
  },
  description:
    "Abonnement IPTV France premium : 20 000+ chaînes, VOD, sport en direct, qualité jusqu'en 4K. Essai gratuit et activation rapide sur WhatsApp.",
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Premium French IPTV",
    title: "Premium IPTV France 4K Ultra HD",
    description:
      "Streaming fluide, chaînes françaises et internationales, films, séries et sport — dès 12€/mois.",
    images: [{ url: "/logo.jpeg", width: 1200, height: 630, alt: "Premium French IPTV" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium IPTV France 4K Ultra HD",
    description:
      "Streaming fluide, chaînes françaises et internationales, films, séries et sport — dès 12€/mois.",
    images: ["/logo.jpeg"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: ["/favicon.png"],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Premium French IPTV",
  url: "https://premiumfrenchiptv.fr",
  email: "premiumfrenchiptv@gmail.com",
  logo: "https://premiumfrenchiptv.fr/logo.jpeg",
  sameAs: ["https://wa.me/33644655224"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Premium French IPTV",
  url: "https://premiumfrenchiptv.fr",
  inLanguage: "fr-FR",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${geist.variable} ${display.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg font-sans text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
