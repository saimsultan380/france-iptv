export const TRUST_STATS = [
  { value: 20000, suffix: "+", label: "Chaînes" },
  { value: 1, suffix: "", label: "Bibliothèque VOD", display: "VOD" },
  { value: 4, suffix: "K", label: "Ultra HD" },
  { value: 24, suffix: "/7", label: "Support" },
  { value: 5, suffix: " min", label: "Installation" },
] as const;

export const WHY_TILES = [
  {
    id: "rapide",
    title: "Streaming rapide",
    description: "Flux optimisés pour limiter le buffering, même aux heures de pointe.",
    size: "large" as const,
  },
  {
    id: "4k",
    title: "Qualité Ultra HD 4K",
    description: "Image nette sur Smart TV, Firestick et box Android.",
    size: "medium" as const,
  },
  {
    id: "anti-freeze",
    title: "Technologie anti-freeze",
    description: "Serveurs pensés pour une lecture plus stable.",
    size: "medium" as const,
  },
  {
    id: "updates",
    title: "Mises à jour régulières",
    description: "Chaînes et catalogues enrichis au fil des saisons.",
    size: "small" as const,
  },
  {
    id: "support",
    title: "Support réactif",
    description: "Assistance WhatsApp disponible 24h/24 et 7j/7.",
    size: "small" as const,
  },
] as const;

export const CONTENT_ITEMS = [
  {
    name: "Documentaires",
    image: "/content/content-documentaires.jpg",
  },
  {
    name: "Sports en direct",
    image: "/content/content-sports.jpg",
  },
  {
    name: "Films récents",
    image: "/content/content-films.jpg",
  },
  {
    name: "Séries populaires",
    image: "/content/content-series.jpg",
  },
  {
    name: "Chaînes françaises premium",
    image: "/content/content-france.jpg",
  },
  {
    name: "Contenus internationaux",
    image: "/content/content-international.jpg",
  },
  {
    name: "Divertissements famille",
    image: "/content/content-famille.jpg",
  },
] as const;

export const SPORT_CHIPS = [
  "UEFA Champions League",
  "Europa League",
  "Conference League",
  "Ligue 1",
  "Ligue 2",
  "Premier League",
  "Coupe de France",
  "UEFA Nations League",
] as const;

export const DEVICES = [
  { id: "samsung", label: "Samsung" },
  { id: "lg", label: "LG" },
  { id: "android-tv", label: "Android TV" },
  { id: "firestick", label: "Firestick" },
  { id: "ios", label: "iPhone / iPad" },
  { id: "windows", label: "Windows PC" },
  { id: "android-box", label: "TV Box Android" },
  { id: "mag", label: "MAG Box" },
] as const;

export const APPS = [
  "IPTV Smarters Pro",
  "TiviMate",
  "XCIPTV",
  "IPTV Smart Player",
  "IBO Player",
  "Smart IPTV",
  "Lecteurs M3U",
] as const;

export const HOW_STEPS = [
  {
    step: 1,
    title: "Choisissez votre abonnement",
    description: "Standard ou Premium 4K, de 1 à 12 mois — selon vos usages.",
  },
  {
    step: 2,
    title: "Recevez vos identifiants",
    description: "Activation rapide après validation. Identifiants envoyés sur WhatsApp.",
  },
  {
    step: 3,
    title: "Connectez-vous et regardez",
    description: "Ouvrez votre application préférée et lancez le streaming en HD ou 4K.",
  },
] as const;

/** TODO_CLIENT: replace with real client testimonials */
export const REVIEWS_PLACEHOLDER = [
  {
    id: "todo-1",
    name: "[TODO_CLIENT] Prénom",
    initials: "CL",
    role: "Client · Smart TV",
    device: "Smart TV",
    rating: 5,
    text: "[TODO_CLIENT] Remplacez ce texte d'exemple par un vrai avis client.",
  },
  {
    id: "todo-2",
    name: "[TODO_CLIENT] Prénom",
    initials: "CL",
    role: "Client · Firestick",
    device: "Firestick",
    rating: 5,
    text: "[TODO_CLIENT] Avis placeholder — qualité, sport, installation, support.",
  },
  {
    id: "todo-3",
    name: "[TODO_CLIENT] Prénom",
    initials: "CL",
    role: "Client · Android",
    device: "Android",
    rating: 5,
    text: "[TODO_CLIENT] Sample review à remplacer avant mise en production.",
  },
] as const;

export const TRUST_CHIPS = [
  "Activation instantanée",
  "Smart TV, Android, iPhone, Firestick",
  "HD / Full HD / 4K",
  "Assistance 24h/24 7j/7",
  "Essai gratuit",
] as const;
