ROLE
You are a senior product designer + senior Next.js engineer. Rebuild an existing
WordPress/Elementor site as a premium, hand-crafted Next.js website. The result must
look like it was designed by a top studio: confident, editorial, cinematic. It must NOT
look AI-generated or like a template.

PROJECT
Brand: Premium French IPTV (premiumfrenchiptv.fr)
Market: France. Language: French (fr-FR) only. All copy in French.
Goal: convert visitors into WhatsApp conversations (free trial + purchase).
Primary conversion channel: WhatsApp +33 6 44 65 52 24 (wa.me/33644655224).
Contact email: premiumfrenchiptv@gmail.com
Assets: I have added the logo and some graphics in /public. Use them as-is.
Generate any other graphics yourself as SVG/CSS/code (see "Graphics" below).
Do not use stock photos of people, and no placeholder image services.

TECH STACK

- Next.js 15 (App Router), TypeScript strict, Tailwind CSS v4
- Motion (framer-motion) for animation, Lenis for smooth scroll (subtle)
- next/font (self-hosted), next/image, next/link
- MDX (or typed TS content files) for guides
- lucide-react for icons (stroke 1.5, consistent). No emoji as icons.
- No UI kit look: build components from scratch. shadcn primitives allowed only
  for accessibility behavior (Accordion, Dialog, Sheet) and fully restyled.
- Deploy target: Vercel. Lighthouse 95+ on mobile for Performance, SEO, A11y.

PAGES (keep the exact existing URL slugs to preserve SEO)

1. / Accueil
2. /iptv-abonnement-france/ Nos Abonnements (full pricing page)
3. /guide-installation-iptv/ Guide d'Installation (per-device tabs)
4. /revendeur-iptv-france/ Revendeur IPTV (reseller program)
5. /iptv-smarters-pro/ IPTV Smarters Pro (app page)
6. /guides-iptv/ Guides hub (card grid listing guides)
7. /abonnement-iptv-12-mois/ Guide: abonnement 12 mois
8. /abonnement-iptv-12-mois-smart-tv-guide/ Guide: Smart TV Samsung/LG/Android TV
9. /contact-us/ Contact (301 redirect /contact-iptv-france/ here)
10. /mentions-legales, /cgv, /confidentialite legal pages (simple, clean)
    Also: custom 404, sitemap.xml, robots.txt, next.config redirects.

DESIGN DIRECTION: "Cinéma de nuit, esprit français"
Feeling: a premium cinema lobby at night, not a gaming/crypto site, not a SaaS template.
Calm, high-contrast, generous whitespace, big confident typography, restrained color.

Color tokens (France-inspired, used with restraint, never a literal flag banner):

- --bg: #070B14 (near-black navy, main background)
- --surface: #0E1526 (cards)
- --surface-2: #141D33
- --line: rgba(255,255,255,.08)
- --text: #F4F6FB
- --muted: #9AA4BC
- --blue: #2F5BFF (France bleu, links, focus, highlights)
- --red: #E5322D (France rouge, ONLY for key accents: badges, "populaire", small details)
- --cream: #F3EEE6 (warm light sections for contrast, e.g. pricing/FAQ)
- --whatsapp: #25D366 (ONLY on WhatsApp buttons/icons)
  If the logo uses different exact colors, sample them and adjust blue/red to match.
  Alternate dark sections with 1–2 light cream sections for rhythm.
  Use a very subtle blue-white-red hairline detail (1–2px) as a signature accent, e.g. on
  the top of the hero, under the section titles, or in the footer. Not on everything.

Typography (via next/font):

- Display: "Bricolage Grotesque" or "Fraunces" (pick one, large, tight tracking)
- Body/UI: "Inter" or "Geist"
- Hero H1: clamp(2.75rem, 7vw, 6rem), line-height 0.98, weight 600–700
- Numbers (prices): tabular, large, display font

Layout and style rules:

- 12-col grid, max-width 1280px, 8px spacing scale, section padding 96–140px desktop.
- Radius: 16–24px on cards, 999px on pills. Borders 1px var(--line) instead of heavy
  shadows. Soft colored glows only behind the hero and the featured price card.
- Avoid: purple/pink gradients, generic glassmorphism everywhere, centered-everything
  layouts, 3-identical-icon-card rows, "sparkle" emoji, stock robot/AI imagery.
  Mix layouts: split screens, bento grids, asymmetric compositions, big numbers.
- Subtle film-grain overlay (2–3% opacity SVG noise) on the hero for a tactile feel.

Motion (tasteful, 60fps, respect prefers-reduced-motion):

- Hero: staggered text reveal, device mockup floats in with slight parallax.
- Sections: fade/translate-up on scroll (once), 12–24px distance, 500–700ms ease-out.
- Channel/sport logos-style marquee (text chips, not copyrighted logos) with slow loop.
- Price cards: hover lift + border glow; billing toggle with animated number change.
- Header: transparent → blurred solid on scroll, shrinks slightly.
- Buttons: micro-interaction (arrow slides, soft pulse ring on the WhatsApp CTA every ~6s).
  No autoplay sound, no heavy video, no layout shift.

GRAPHICS (generate these yourself in code)

- Hero visual: a stylized TV/Smart TV + phone + tablet mockup built with CSS/SVG
  showing an abstract channel grid UI (gradient tiles, "4K" badge, "LIVE" badge in red).
  Use my supplied graphics where they fit; extend them, don't replace them.
- A simplified France map outline (SVG) as a recurring brand motif (from the logo concept):
  used in the hero background (very faint) and the footer.
- Device icons for compatibility (Samsung, LG, Android TV, Firestick, iPhone/iPad, Windows,
  Android box, MAG) as custom monoline SVGs, no trademarked logos reproduced.
- Sport section: abstract stadium-light / pitch-line SVG artwork, no club logos or
  competition logos. List competitions as typographic chips only.
- Step illustrations for "Comment ça marche" (3 steps) as clean SVG scenes.
- Favicon, OG image (1200x630) generated from the logo + tagline.

GLOBAL UI COMPONENTS

- Header: logo left; nav center: Accueil, Nos Abonnements, Guide d'Installation,
  Revendeur IPTV, IPTV Smarters Pro, Guides IPTV; right: "Essai gratuit" (outline) and
  "Acheter" (solid, WhatsApp green with icon). Mobile: full-screen sheet menu with big
  type and a sticky WhatsApp button.
- Top thin bar: "Activation instantanée · Support 24h/24 7j/7" + WhatsApp number.
- Floating WhatsApp button (bottom-right, all pages) with a tooltip "Une question ?
  Écrivez-nous". On mobile also show a sticky bottom CTA bar on pricing/home.
- Footer: logo, short description, links (Accueil, Abonnements, Smarters Pro, Guide
  d'Installation, Revendeur, Guides, Contact, legal), WhatsApp + email, France-map motif,
  copyright © 2026 Premium French IPTV.
- A single <WhatsAppButton /> component with props: label, message, variant, size, and a
  helper buildWhatsAppUrl(message) → https://wa.me/33644655224?text=<encoded>. Open in a
  new tab with rel="noopener". Track clicks via a dataLayer/gtag event hook (stub).

WHATSAPP MESSAGES (French, pre-filled, unique per CTA)

- Essai: "Bonjour, je souhaite un essai gratuit IPTV France."
- Acheter (général): "Bonjour, je souhaite acheter un abonnement IPTV France."
- Plan: "Bonjour, je souhaite l'abonnement {Standard|Premium 4K} {1|3|6|12} mois à {prix}€."
- Revendeur: "Bonjour, je souhaite devenir revendeur IPTV (panel + crédits)."
- Smarters/Install help: "Bonjour, j'ai besoin d'aide pour installer IPTV sur {appareil}."
  Every plan card and every step must use its OWN message (the old site wrongly reused the
  1-month message everywhere).

PAGE SPECS

1. HOME (/)

- Hero (split): H1 "Premium IPTV France en qualité 4K Ultra HD". Sub: fluid streaming,
  French + international channels, films, séries, sport en direct. Two CTAs: "Commencer
  l'essai gratuit" (WhatsApp) and "Acheter maintenant" (WhatsApp). Under CTAs, a row of 5
  trust chips: Activation instantanée · Smart TV, Android, iPhone, Firestick · HD/Full HD/4K
  · Assistance 24h/24 7j/7 · Essai gratuit. Right: animated device mockup. Small "dès
  12€/mois · 50€/an" price hint to anchor value.
- Trust strip: "20 000+ chaînes", "VOD", "4K", "Support 24/7", "Installation en quelques
  minutes" as big-number stats with count-up.
- "Pourquoi choisir notre IPTV France Premium ?" bento grid: Streaming rapide sans
  buffering, Qualité Ultra HD 4K, Technologie anti-freeze, Mises à jour régulières,
  Support réactif. Varying tile sizes, not equal cards.
- Contenus: chips/tiles for Documentaires, Sports en direct, Films récents, Séries
  populaires, Chaînes françaises premium, Contenus internationaux, Divertissements famille.
- Sport block (dark, dramatic): UEFA Champions League, Europa League, Conference League,
  Ligue 1, Ligue 2, Premier League, Coupe de France, UEFA Nations League (as text chips).
- Compatibilité: 8 devices grid (Samsung, LG, Android TV, Firestick, iPhone/iPad, Windows
  PC, TV Box Android, MAG Box) + apps row: IPTV Smarters Pro, TiviMate, XCIPTV, IPTV
  Smart Player, IBO Player, Smart IPTV, lecteurs M3U (supports M3U + Xtream Codes).
  Link to /abonnement-iptv-12-mois-smart-tv-guide/ and /iptv-smarters-pro/.
- Pricing (cream section): toggle "Standard / Premium 4K". 4 plans each (see data below),
  "12 mois" highlighted as "Meilleure offre", badge in red. Each plan CTA → WhatsApp.
  Link "Quelle durée choisir ?" → /abonnement-iptv-12-mois/.
- "Comment ça marche" 3 steps: 1 Choisissez votre abonnement · 2 Recevez vos identifiants
  · 3 Connectez-vous et regardez. Connected by a drawn line animation. Footer line:
  "Simple, rapide et sans installation complexe."
- Essai gratuit banner: "Vous souhaitez tester avant d'acheter ?" + CTA WhatsApp.
- Avis clients: carousel with PLACEHOLDER data flagged TODO_CLIENT (do not invent
  realistic fake reviews; use clearly marked sample text in a data file the client replaces).
- FAQ (10 questions, accordion, exact content below), with FAQPage JSON-LD.
- Final CTA: "Acheter IPTV France aujourd'hui" with Essai gratuit + Acheter maintenant.

2. ABONNEMENTS: full pricing page, comparison table Standard vs Premium 4K, feature
   checklist, FAQ subset, sticky "Besoin d'aide pour choisir ?" WhatsApp card.
3. GUIDE D'INSTALLATION: tabbed by device (Samsung, LG, Android TV, Firestick, iPhone/iPad,
   Windows, MAG). Numbered steps with simple SVG screenshots-style illustrations. CTA
   "Besoin d'aide ? Écrivez-nous" with device-prefilled WhatsApp message.
4. REVENDEUR: hero "Lancez votre activité IPTV dès aujourd'hui"; sections: Qu'est-ce qu'un
   revendeur IPTV, Comment fonctionne le programme (3 steps: crédits, clients,
   activations), Pourquoi devenir revendeur (4 points), Panel pensé pour les pros
   (gestion activations, crédits, interface intuitive, historique, suivi comptes,
   assistance), Comment fonctionnent les crédits, Devenir revendeur en 3 étapes,
   témoignages (placeholders), FAQ (10), final CTA. Include an abstract dashboard mockup
   (built in code) as the key visual. Avoid income guarantees or hype claims.
5. SMARTERS PRO: what it is, compatible devices, step-by-step setup (M3U / Xtream),
   tips, FAQ, CTA.
6. GUIDES HUB: filterable card grid (Smart TV, Applications, Abonnement, Dépannage).
   7–8) Guides: clean editorial article template: TOC sidebar, reading time, related guides,
   inline CTA cards to WhatsApp.
7. CONTACT: big WhatsApp card (primary), email, response-time note, simple form
   (nom, email, message) → API route sending email (Resend/Nodemailer, env vars),
   honeypot + rate limit.

PRICING DATA (src/data/plans.ts)
Standard: 1 mois 12€ (20 000+ chaînes, bibliothèque VOD) · 3 mois 20€ (streaming
amélioré, chaînes européennes) · 6 mois 35€ (qualité HD, serveurs rapides) · 12 mois 50€
(accès complet, toutes fonctionnalités).
Premium 4K: 1 mois 15€ (streaming premium 4K) · 3 mois 25€ (chaînes premium
supplémentaires) · 6 mois 40€ (accès sportif, contenu international) · 12 mois 60€
(expérience IPTV complète).

FAQ DATA (home) – keep these 10 topics, polish the French wording: meilleur IPTV 2026,
comment acheter, essai gratuit, Smart TV Samsung/LG, vitesse internet recommandée
(15 Mbps HD, plus pour 4K), application recommandée, installation Firestick, multi-
appareils, nombre de chaînes, pourquoi Premium plus stable.

COPY
Keep the original information and keywords, but tighten it. Short punchy headlines,
benefit-led subcopy, concrete details, French typographic rules (espaces insécables
before : ; ? !, « guillemets »). No filler like "révolutionnaire", "à la pointe",
"expérience inégalée", "dans un monde où". Write like a French brand copywriter.
Make CTAs action-led: "Essai gratuit sur WhatsApp", "Je choisis mon offre",
"Activer maintenant".

SEO (must not lose rankings)

- Same URLs; 301 redirects for any changed URL; canonical on every page.
- Per-page metadata (title/description in French, from the original), OG/Twitter images.
- JSON-LD: Organization, WebSite, Product+Offer (plans), FAQPage, BreadcrumbList.
- Semantic headings (one H1/page), descriptive alt text in French, internal linking
  between home ↔ abonnements ↔ guides ↔ smarters pro ↔ revendeur.
- app/sitemap.ts, app/robots.ts, lang="fr", hreflang fr-FR, Core Web Vitals optimized,
  images AVIF/WebP, fonts preloaded, no CLS.

QUALITY BAR

- Mobile-first (most traffic is mobile). Test 360px, 390px, 768px, 1024px, 1440px.
- WCAG AA contrast, visible focus states, keyboard accessible, reduced-motion support.
- Clean folder structure: app/, components/{ui,sections,layout}, data/, lib/, content/.
- Reusable Section, Container, Button, Badge, PricingCard, FaqAccordion, DeviceTile,
  Marquee, StepList components. All content in /data or /content, not hard-coded.
- No lorem ipsum, no broken links, no console errors, no unused deps.
- Add legal pages and a small cookie/consent banner (RGPD) that doesn't block the UI.

BUILD ORDER

1. Setup, tokens, fonts, layout (header/footer/WhatsApp float).
2. Design system components + the WhatsApp helper.
3. Home page, fully polished, then stop and show me before continuing.
4. Abonnements, Guide d'Installation, Revendeur, Smarters Pro, Guides hub + 2 guides, Contact.
5. SEO, redirects, performance pass, accessibility pass.
   Ask me before making any major design decision that deviates from this brief.
