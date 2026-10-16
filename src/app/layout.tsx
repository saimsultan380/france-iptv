import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://premiumfrenchiptv.fr"),
  title: {
    default:
      "Meilleur IPTV France : Abonnements IPTV France - French IP TV",
    template: "%s | Premium French IPTV",
  },
  description:
    "Découvrez Premium French IPTV : meilleur IPTV France, abonnements IPTV France, French IP TV, contenus HD et 4K, et applications compatibles pour vous.",
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Premium French IPTV",
    title: "Meilleur IPTV France : Abonnements IPTV France - French IP TV",
    description:
      "Découvrez Premium French IPTV : meilleur IPTV France, abonnements IPTV France, French IP TV, contenus HD et 4K, et applications compatibles pour vous.",
    images: [{ url: "/logo.jpeg", width: 1200, height: 630, alt: "Premium French IPTV" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meilleur IPTV France : Abonnements IPTV France - French IP TV",
    description:
      "Découvrez Premium French IPTV : meilleur IPTV France, abonnements IPTV France, French IP TV, contenus HD et 4K, et applications compatibles pour vous.",
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
    <html lang="fr" className={`${manrope.variable} ${display.variable} h-full antialiased`}>
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
