import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhyUs } from "@/components/sections/WhyUs";
import { Contents } from "@/components/sections/Contents";
import { Sport } from "@/components/sections/Sport";
import { Compatibility } from "@/components/sections/Compatibility";
import { Pricing } from "@/components/sections/Pricing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrialBanner } from "@/components/sections/TrialBanner";
import { Reviews } from "@/components/sections/Reviews";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { PLANS, TIER_LABELS } from "@/data/plans";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Abonnement IPTV France Premium French IPTV",
  description:
    "Abonnement IPTV France avec chaînes, VOD et sport — formules Standard et Premium 4K.",
  brand: { "@type": "Brand", name: "Premium French IPTV" },
  offers: PLANS.map((plan) => ({
    "@type": "Offer",
    name: `${TIER_LABELS[plan.tier]} — ${plan.duration}`,
    price: plan.price,
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://premiumfrenchiptv.fr/iptv-abonnement-france/",
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Hero />
      <TrustStrip />
      <WhyUs />
      <Contents />
      <Sport />
      <Compatibility />
      <Pricing />
      <HowItWorks />
      <TrialBanner />
      <Reviews />
      <Faq />
      <FinalCta />
    </>
  );
}
