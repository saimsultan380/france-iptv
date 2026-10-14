export type PlanTier = "standard" | "premium";

export type Plan = {
  id: string;
  tier: PlanTier;
  duration: string;
  months: 1 | 3 | 6 | 12;
  price: number;
  perks: string[];
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "std-1",
    tier: "standard",
    duration: "1 mois",
    months: 1,
    price: 12,
    perks: ["20 000+ chaînes", "Bibliothèque VOD"],
  },
  {
    id: "std-3",
    tier: "standard",
    duration: "3 mois",
    months: 3,
    price: 20,
    perks: ["Streaming amélioré", "Chaînes européennes"],
  },
  {
    id: "std-6",
    tier: "standard",
    duration: "6 mois",
    months: 6,
    price: 35,
    perks: ["Qualité HD", "Serveurs rapides"],
  },
  {
    id: "std-12",
    tier: "standard",
    duration: "12 mois",
    months: 12,
    price: 50,
    perks: ["Accès complet", "Toutes les fonctionnalités"],
    featured: true,
  },
  {
    id: "prem-1",
    tier: "premium",
    duration: "1 mois",
    months: 1,
    price: 15,
    perks: ["Streaming premium 4K"],
  },
  {
    id: "prem-3",
    tier: "premium",
    duration: "3 mois",
    months: 3,
    price: 25,
    perks: ["Chaînes premium supplémentaires"],
  },
  {
    id: "prem-6",
    tier: "premium",
    duration: "6 mois",
    months: 6,
    price: 40,
    perks: ["Accès sportif", "Contenu international"],
  },
  {
    id: "prem-12",
    tier: "premium",
    duration: "12 mois",
    months: 12,
    price: 60,
    perks: ["Expérience IPTV complète"],
    featured: true,
  },
];

export const TIER_LABELS: Record<PlanTier, string> = {
  standard: "Standard",
  premium: "Premium 4K",
};
