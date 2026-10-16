import { Hero } from "@/components/sections/Hero";
import { Contents } from "@/components/sections/Contents";
import { Pricing } from "@/components/sections/Pricing";
import { Sport } from "@/components/sections/Sport";
import { WhyUs } from "@/components/sections/WhyUs";
import { AbonnementGuide } from "@/components/sections/AbonnementGuide";
import { Compatibility } from "@/components/sections/Compatibility";
import { AppsCompatible } from "@/components/sections/AppsCompatible";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PremiumChannels } from "@/components/sections/PremiumChannels";
import { Reseller } from "@/components/sections/Reseller";
import { SupportRenewal } from "@/components/sections/SupportRenewal";
import { HowToChoose } from "@/components/sections/HowToChoose";
import { M3uXtream } from "@/components/sections/M3uXtream";
import { FreeVsPremium } from "@/components/sections/FreeVsPremium";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { PLANS, TIER_LABELS } from "@/data/plans";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Abonnement IPTV France Premium French IPTV",
  description:
    "Découvrez Premium French IPTV : meilleur IPTV France, abonnements IPTV France, French IP TV, contenus HD et 4K, et applications compatibles.",
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
      <Contents />
      <Pricing />
      <Sport />
      <WhyUs />
      <AbonnementGuide />
      <Compatibility />
      <AppsCompatible />
      <HowItWorks />
      <PremiumChannels />
      <Reseller />
      <SupportRenewal />
      <HowToChoose />
      <M3uXtream />
      <FreeVsPremium />
      <Faq />
      <FinalCta />
    </>
  );
}
