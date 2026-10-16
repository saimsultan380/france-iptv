export const WHATSAPP_NUMBER = "33644655224";
export const WHATSAPP_DISPLAY = "+33 6 44 65 52 24";
export const CONTACT_EMAIL = "premiumfrenchiptv@gmail.com";

export const WHATSAPP_MESSAGES = {
  essai: "Bonjour, je souhaite un essai gratuit IPTV France.",
  acheter: "Bonjour, je souhaite acheter un abonnement IPTV France.",
  contact:
    "Bonjour, je souhaite obtenir des informations sur Premium French IPTV.",
  decouvrir:
    "Bonjour, je souhaite découvrir Premium French IPTV et les abonnements disponibles.",
  revendeur:
    "Bonjour, je souhaite des informations sur les options de revente IPTV.",
  plan: (tier: string, duration: string, price: number) =>
    `Bonjour, je souhaite l'abonnement ${tier} ${duration} à ${price}€.`,
  install: (device: string) =>
    `Bonjour, j'ai besoin d'aide pour installer IPTV sur ${device}.`,
} as const;

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
