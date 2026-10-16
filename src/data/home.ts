export const HERO = {
  h1: "Premium French IPTV : votre abonnement IPTV en France en HD et 4K",
  lead:
    "Profitez d'une expérience IPTV France Premium avec une solution pensée pour les utilisateurs français. Découvrez des contenus télévisés, du sport, des films et des séries sur vos appareils compatibles.",
  sub: "Découvrez notre service et trouvez l'abonnement IPTV adapté à vos besoins.",
  cta: "Découvrir notre IPTV",
} as const;

export const CONTENTS_SECTION = {
  h2: "Profitez des meilleurs contenus IPTV en France",
  intro:
    "Avec Premium French IPTV, explorez une sélection de contenus pour différents goûts et préférences. Que vous recherchiez des chaînes françaises, des événements sportifs, des films récents ou des séries populaires, découvrez les options disponibles pour votre expérience de streaming.",
  items: [
    { name: "Chaînes françaises premium", image: "/content/content-france.jpg" },
    { name: "Sports en direct", image: "/content/content-sports.jpg" },
    { name: "Films et séries", image: "/content/content-films.jpg" },
    { name: "Documentaires", image: "/content/content-documentaires.jpg" },
    {
      name: "Divertissements pour toute la famille",
      image: "/content/content-famille.jpg",
    },
    {
      name: "Contenus internationaux",
      image: "/content/content-international.jpg",
    },
  ],
  qualityNote:
    "Options de qualité HD et 4K, selon la disponibilité du contenu et la compatibilité de votre appareil",
  footer:
    "Notre objectif est de proposer une expérience simple, accessible et adaptée aux habitudes de visionnage en France.",
} as const;

export const SPORT_SECTION = {
  h2: "Retrouvez les grandes compétitions sportives suivies en France",
  intro:
    "Vous recherchez une solution IPTV France pour suivre vos sports préférés ? Explorez les options de contenus sportifs disponibles et vérifiez les compétitions incluses dans votre abonnement.",
  competitions: [
    {
      id: "ucl",
      name: "UEFA Champions League",
      logo: "/leagues/ucl.png",
    },
    {
      id: "uel",
      name: "UEFA Europa League",
      logo: "/leagues/uel.png",
    },
    {
      id: "uecl",
      name: "UEFA Conference League",
      logo: "/leagues/uecl.png",
    },
    { id: "l1", name: "Ligue 1", logo: "/leagues/l1.png" },
    { id: "l2", name: "Ligue 2", logo: "/leagues/l2.png" },
    { id: "pl", name: "Premier League", logo: "/leagues/pl.png" },
    { id: "cdf", name: "Coupe de France", logo: "/leagues/cdf.png" },
    {
      id: "unl",
      name: "UEFA Nations League",
      logo: "/leagues/unl.png",
    },
  ],
  note:
    "La disponibilité des événements dépend des contenus proposés par le service et des droits de diffusion applicables.",
} as const;

export const WHY_SECTION = {
  h2: "Pourquoi choisir Premium French IPTV ?",
  intro:
    "Choisir une solution IPTV France Premium, c'est rechercher une expérience qui correspond à vos préférences, à vos appareils et à votre utilisation quotidienne.",
  points: [
    {
      id: "france",
      h3: "Une expérience adaptée aux utilisateurs français",
      text: "Explorez les contenus français et internationaux disponibles selon vos intérêts.",
    },
    {
      id: "quality",
      h3: "Des options de qualité d'image",
      text: "Profitez des formats disponibles, notamment HD, Full HD et 4K lorsque le contenu et votre équipement le permettent.",
    },
    {
      id: "apps",
      h3: "Des applications compatibles",
      text: "Utilisez une application IPTV prise en charge par votre téléviseur, smartphone, ordinateur ou appareil de streaming.",
    },
    {
      id: "setup",
      h3: "Une installation accessible",
      text: "Suivez les instructions de configuration de votre application compatible pour commencer à utiliser votre service.",
    },
  ],
  cta: "Découvrir Premium French IPTV",
} as const;

export const ABONNEMENT_SECTION = {
  h2: "Abonnement IPTV France : une solution adaptée à vos besoins",
  intro:
    "Vous recherchez un abonnement IPTV pour regarder vos contenus préférés sur un appareil compatible ? Premium French IPTV vous permet d'explorer les options proposées et de choisir celle qui correspond à votre utilisation.",
  beforeTitle: "Avant de choisir parmi les abonnements IPTV France, vérifiez les éléments essentiels :",
  checklist: [
    "Les chaînes et les catégories de contenus incluses",
    "La disponibilité des contenus sportifs recherchés",
    "La qualité d'image proposée",
    "La compatibilité avec vos applications",
    "Les conditions d'utilisation et la durée de l'abonnement",
    "Les possibilités d'assistance et de renouvellement",
  ],
  compareNote:
    "Si vous comparez les abonnements IPTV France prix, consultez notre page d'offres pour vérifier les tarifs et les conditions à jour.",
  h3_4k: "IPTV France 4K : une qualité d'image adaptée à votre écran",
  text_4k:
    "Vous recherchez un service IPTV France 4K ? La qualité d'image dépend du flux disponible, de votre connexion Internet, de votre application et des capacités de votre écran.",
  text_4k_2:
    "Les utilisateurs qui recherchent des abonnements IPTV France 4K doivent donc vérifier que le contenu souhaité est réellement proposé en 4K et que leur équipement prend en charge ce format.",
} as const;

export const DEVICES = [
  { id: "samsung", label: "Samsung Smart TV" },
  { id: "lg", label: "LG Smart TV" },
  { id: "android-tv", label: "Android TV" },
  { id: "firestick", label: "Amazon Fire TV Stick" },
  { id: "android-box", label: "Android TV Box" },
  { id: "android-phone", label: "Smartphones Android" },
  { id: "ios", label: "iPhone et iPad" },
  { id: "mac", label: "Mac" },
  { id: "mag", label: "Boîtiers MAG compatibles" },
  { id: "tablets", label: "Smartphones et tablettes" },
  { id: "windows", label: "Ordinateurs Windows" },
] as const;

export const DEVICES_SECTION = {
  h2: "Appareils compatibles avec French IPTV",
  intro:
    "Selon le service, le lecteur et le modèle utilisé, les appareils compatibles peuvent inclure :",
  note: "Vérifiez la compatibilité de votre appareil et de votre application avant de souscrire.",
} as const;

export const APPS_SECTION = {
  h2: "Applications compatibles avec Premium French IPTV",
  intro:
    "Vous pouvez utiliser une application IPTV compatible avec votre appareil pour configurer votre service. La disponibilité et les fonctionnalités peuvent varier selon le modèle, le système d'exploitation et la version de l'application.",
  groups: [
    {
      id: "smart-tv" as const,
      h3: "Applications pour Smart TV",
      apps: [
        "Ibo TV Player",
        "Ibo Pro Player",
        "Hot IPTV",
        "Smart One IPTV",
        "Bob Player",
        "MyTV Online",
        "IPTV Smarters Pro",
      ],
    },
    {
      id: "ios" as const,
      h3: "Applications pour iOS",
      apps: ["iPlayTV", "Ibo Player Pro", "GSE Smart IPTV", "VU IPTV Player"],
    },
    {
      id: "desktop" as const,
      h3: "Applications pour Windows et macOS",
      apps: ["Ibo Player", "IPTV Expert", "VLC Media Player", "Kodi"],
    },
    {
      id: "android" as const,
      h3: "Applications pour Android",
      apps: [
        "IPTV Smarters Pro",
        "TiviMate",
        "Ibo Player",
        "GSE Smart IPTV",
        "Perfect Player",
      ],
    },
  ],
  important:
    "Important : ces applications sont des lecteurs multimédias. Leur présence dans cette liste ne signifie pas qu'un abonnement, une playlist ou un contenu est fourni automatiquement avec chacune d'elles. Vérifiez les fonctionnalités de l'application et les instructions de configuration avant de commencer.",
} as const;

export const SETUP_SECTION = {
  h2: "Comment configurer votre abonnement IPTV ?",
  intro:
    "La configuration dépend de l'application et de l'appareil que vous utilisez. En général, les étapes sont les suivantes :",
  steps: [
    {
      h3: "Étape 1 : Choisissez une application compatible",
      text: "Sélectionnez un lecteur IPTV adapté à votre appareil.",
    },
    {
      h3: "Étape 2 : Préparez vos informations de connexion",
      text: "Utilisez les informations de configuration fournies par votre service, si cette méthode est prise en charge.",
    },
    {
      h3: "Étape 3 : Configurez votre lecteur",
      text: "Suivez les instructions de l'application pour ajouter les informations ou la playlist compatibles.",
    },
    {
      h3: "Étape 4 : Vérifiez la lecture",
      text: "Testez votre connexion et la lecture des contenus disponibles. En cas de problème, vérifiez votre réseau, les paramètres de l'application et les informations de connexion.",
    },
  ],
} as const;

export const PREMIUM_CHANNELS_SECTION = {
  h2: "Premium Channels IPTV : explorez vos contenus préférés",
  p1: "La recherche de premium channels IPTV concerne souvent les utilisateurs qui souhaitent regrouper différents types de contenus dans une seule interface. Selon l'offre et les droits applicables, les catégories recherchées peuvent comprendre les chaînes de télévision, le sport, le cinéma, les séries et les programmes internationaux.",
  p2: "Avec Premium French IPTV, consultez les détails de l'offre pour vérifier les chaînes et les catégories réellement disponibles avant de vous abonner.",
  p3: "Que vous recherchiez French IPTV, French IP TV ou une solution d'IPTV premium en France, privilégiez toujours une offre transparente sur son contenu, ses conditions et ses droits de diffusion.",
} as const;

export const RESELLER_SECTION = {
  h2: "IPTV pour les revendeurs : découvrez les options disponibles",
  intro:
    "Vous souhaitez développer une activité autour des services IPTV ? Les options destinées aux revendeurs peuvent vous intéresser si vous recherchez une solution commerciale structurée.",
  before:
    "Avant de choisir un IPTV provider France pour une activité de revente, vérifiez les points suivants :",
  points: [
    "Les conditions du programme de revente",
    "Les autorisations de distribution et les droits de diffusion",
    "Les outils de gestion disponibles",
    "Les conditions de paiement et d'assistance",
    "Les modalités de gestion des clients et des renouvellements",
  ],
  contact:
    "Contactez notre équipe pour demander des informations sur les éventuelles options pour revendeurs et leurs conditions.",
  cta: "Demander des informations sur la revente",
} as const;

export const SUPPORT_SECTION = {
  h2: "Renouvellement et assistance IPTV",
  p1: "Vous utilisez déjà un abonnement IPTV et souhaitez continuer à accéder à votre service ? Avant de renouveler, vérifiez la durée restante, les conditions de renouvellement, la compatibilité de votre application et les modalités de votre offre.",
  p2: "Si votre service rencontre un problème, commencez par vérifier votre connexion Internet, redémarrer l'application et confirmer que vos informations de configuration sont toujours valides.",
  p3: "Pour toute question concernant votre abonnement, les conditions de renouvellement ou les options disponibles, consultez les informations de contact et d'assistance de notre site.",
  cta: "Consulter les options d'abonnement",
} as const;

export const CHOOSE_SECTION = {
  h2: "Comment choisir le meilleur IPTV France ?",
  intro:
    "Le terme Meilleur IPTV France peut désigner différentes choses selon vos besoins. Une solution adaptée doit correspondre à vos habitudes de visionnage, à votre appareil et aux contenus que vous souhaitez regarder.",
  before: "Avant de choisir une offre, comparez :",
  criteria: [
    {
      id: "content",
      title: "Le contenu",
      text: "vérifiez les chaînes et programmes annoncés.",
    },
    {
      id: "quality",
      title: "La qualité",
      text: "confirmez la disponibilité réelle de la HD ou de la 4K.",
    },
    {
      id: "compat",
      title: "La compatibilité",
      text: "vérifiez que votre application et votre appareil sont pris en charge.",
    },
    {
      id: "transparency",
      title: "La transparence",
      text: "lisez les conditions, les tarifs et les modalités de renouvellement.",
    },
    {
      id: "rights",
      title: "Les droits de diffusion",
      text: "privilégiez un service autorisé à proposer les contenus concernés.",
    },
  ],
  footer:
    "Ces critères sont plus utiles qu'une simple recherche de Meilleur France IPTV, IPTV premium France IPTV ou premiumiptv sans vérifier les caractéristiques réelles du service.",
} as const;

export const M3U_SECTION = {
  h2: "M3U et Xtream Codes : quelle différence ?",
  p1: "M3U désigne un format de liste de lecture qui peut contenir des liens vers des flux multimédias. Xtream Codes désigne une méthode de connexion utilisée par certains services et lecteurs compatibles.",
  p2: "Le format requis dépend du service et de l'application. Utilisez uniquement les informations d'accès fournies par un service autorisé et ne communiquez pas vos identifiants à des tiers.",
  p3: "Pour plus d'informations, consultez notre guide d'installation IPTV.",
  guideHref: "/guide-installation-iptv/",
} as const;

export const FREE_VS_PREMIUM_SECTION = {
  h2: "Playlists IPTV gratuites ou abonnement premium ?",
  p1: "Une recherche comme playlist IPTV populaire gratuite sport peut mener à des playlists de disponibilité et de qualité variables. Certaines playlists gratuites peuvent être temporaires, incomplètes ou ne pas disposer des autorisations nécessaires pour diffuser les contenus concernés.",
  p2: "Un abonnement payant ne garantit pas, à lui seul, la qualité, la disponibilité ou la légalité des chaînes proposées. Vérifiez toujours les contenus inclus, les conditions d'accès et les droits de diffusion.",
  p3: "Si vous recherchez une solution IPTV premium, comparez les informations disponibles avant de faire votre choix. Vérifiez également les conditions des éventuelles offres promotionnelles ou des IPTV discounts premium, sans vous fier uniquement au prix annoncé.",
} as const;

export const FINAL_SECTION = {
  h2: "Découvrez les abonnements Premium French IPTV",
  p1: "Vous souhaitez comparer les offres avant de faire votre choix ?",
  p2: "Consultez les formules Premium French IPTV, vérifiez leurs caractéristiques et choisissez celle qui correspond à votre budget, à votre appareil et à vos habitudes de visionnage.",
  p3: "Prenez le temps de vérifier les conditions de votre abonnement, la compatibilité de votre équipement et les contenus effectivement autorisés.",
  p4: "Découvrez les abonnements disponibles et choisissez votre formule en toute connaissance de cause.",
  ctaOffers: "Voir les abonnements IPTV",
  ctaContact: "Contacter notre équipe",
} as const;
