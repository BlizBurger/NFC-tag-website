/**
 * ============================================================
 *  SITE CONFIGURATION — EDIT THIS FILE TO UPDATE YOUR PAGE
 * ============================================================
 *  All content is here. No code knowledge needed.
 *  Read GUIDE.md for step-by-step instructions.
 * ============================================================
 */

window.SiteConfig = {

  /* ── BRAND ─────────────────────────────────────────────── */
  brand: {
    name:       "ÉCLAT",
    tagline:    "Where Prestige Meets the Night",
    subTagline: "Tap into the experience",
    logo:       "", // URL to your logo image. Leave empty to use text logo.
    accentColor:"#C9A96E", // Gold color — change to match your brand
  },

  /* ── VENUE INFO ─────────────────────────────────────────── */
  venue: {
    name:        "Éclat Lounge & Restaurant",
    description: "An intimate world where gastronomy, art, and music converge. Nestled in the heart of the Riviera, Éclat redefines luxury nightlife with curated experiences for the most discerning guests.",
    address:     "12 Boulevard de la Croisette, Monaco",
    phone:       "+377 99 00 00 00",
    whatsapp:    "+37799000000", // No spaces or +
    email:       "reservation@eclat-lounge.com",
    mapsUrl:     "#", // Google Maps link
    hours: [
      { day: "Monday – Thursday", time: "19:00 – 02:00" },
      { day: "Friday – Saturday",  time: "19:00 – 04:00" },
      { day: "Sunday",             time: "19:00 – 01:00" },
    ],
  },

  /* ── INSTAGRAM ──────────────────────────────────────────── */
  instagram: {
    handle:   "@eclat.lounge",
    url:      "#",
    posts: [
      { image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80", caption: "Friday nights at Éclat ✨" },
      { image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=400&q=80", caption: "Signature cocktails crafted with passion 🥂" },
      { image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80", caption: "Gastronomy elevated 🍽️" },
      { image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80", caption: "Dance until dawn 🎶" },
      { image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=400&q=80", caption: "Dom Pérignon nights 🍾" },
      { image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=400&q=80", caption: "Private events & VIP tables 💎" },
    ],
  },

  /* ── REVIEWS ────────────────────────────────────────────── */
  reviews: {
    googleRating: 4.9,
    totalReviews: 312,
    googleReviewUrl: "#",
    testimonials: [
      { name: "Alexandre M.", rating: 5, text: "An unparalleled experience. The ambiance, the service, the music — everything was flawless. We will be back.", avatar: "AM" },
      { name: "Sophia R.",    rating: 5, text: "Éclat is simply the best venue on the Riviera. The champagne selection is extraordinary.", avatar: "SR" },
      { name: "James K.",     rating: 5, text: "Impeccable service from start to finish. The VIP table experience exceeded every expectation.", avatar: "JK" },
      { name: "Isabelle D.",  rating: 5, text: "The DJ set was phenomenal. Music, lighting, cocktails — all perfect. A night to remember.", avatar: "ID" },
      { name: "Marco V.",     rating: 5, text: "Came for a birthday celebration. The team went above and beyond. Highly recommend the Dom Pérignon bottle service.", avatar: "MV" },
    ],
  },

  /* ── SPOTIFY PLAYLISTS ──────────────────────────────────── */
  spotify: {
    playlists: [
      {
        label:     "Lounge",
        icon:      "🕯️",
        embedUrl:  "https://open.spotify.com/embed/playlist/37i9dQZF1DX2TRYkJECvfC",
      },
      {
        label:    "Afro House",
        icon:     "🌍",
        embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWYkaDif7Ztbp",
      },
      {
        label:    "Deep House",
        icon:     "🎛️",
        embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX2TRYkJECvfC",
      },
      {
        label:    "Chill",
        icon:     "🌙",
        embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZd79rJ6a7lp",
      },
    ],
  },

  /* ── DJS ────────────────────────────────────────────────── */
  djs: {
    featured: {
      name:      "DJ SULTAN",
      bio:       "Resident DJ of the year. Sultan brings a fusion of Afro House, Melodic Techno and Deep House that has become the signature sound of Éclat.",
      image:     "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&q=80",
      instagram: "#",
      nextSet:   "Friday 25 May — 00:00",
    },
    lineup: [
      {
        name:      "SULTAN",
        genre:     "Afro House · Deep House",
        image:     "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&q=80",
        instagram: "#",
        nextSet:   "Fri 25 May · 00:00",
        resident:  true,
      },
      {
        name:      "NOVA",
        genre:     "Melodic Techno · Progressive",
        image:     "https://images.unsplash.com/photo-1593697972646-2f348765e73e?w=400&q=80",
        instagram: "#",
        nextSet:   "Sat 26 May · 23:30",
        resident:  false,
      },
      {
        name:      "ARIA",
        genre:     "Lounge · Chill Vibes",
        image:     "https://images.unsplash.com/photo-1598387993441-a364f854cfn?w=400&q=80",
        instagram: "#",
        nextSet:   "Sun 27 May · 21:00",
        resident:  false,
      },
    ],
  },

  /* ── RESERVATION ────────────────────────────────────────── */
  reservation: {
    whatsapp:    "+37799000000",
    phone:       "+377 99 00 00 00",
    email:       "vip@eclat-lounge.com",
    description: "Reserve your VIP table or private event. Our concierge team is available 7 days a week to curate your perfect evening.",
  },

  /* ── FOOD MENU ──────────────────────────────────────────── */
  foodMenu: [
    {
      category: "Entrées",
      icon: "🌿",
      items: [
        { name: "Caviar Osciètre",       description: "30g, blinis maison, crème fraîche citronnée",  price: "€95"  },
        { name: "Foie Gras de Canard",   description: "Chutney de figues, brioche toastée, fleur de sel", price: "€38" },
        { name: "Tartare de Thon",        description: "Avocat, sésame noir, émulsion yuzu",          price: "€29"  },
        { name: "Burrata Truffe Noire",   description: "Tomates cerises, basilic, huile d'olive AOP", price: "€32"  },
      ],
    },
    {
      category: "Plats",
      icon: "🍽️",
      items: [
        { name: "Wagyu A5 Japonais",     description: "250g, jus corsé, pomme purée à la truffe",    price: "€145" },
        { name: "Homard Bleu Rôti",      description: "Beurre aux algues, légumes de saison",        price: "€88"  },
        { name: "Risotto aux Truffes",   description: "Parmesan 24 mois, truffe noire du Périgord",  price: "€65"  },
        { name: "Sole Meunière",          description: "Câpres, citron confit, herbes fraîches",     price: "€72"  },
      ],
    },
    {
      category: "Desserts",
      icon: "🍰",
      items: [
        { name: "Soufflé au Grand Marnier", description: "Sorbet mandarine, tuile croustillante",    price: "€22"  },
        { name: "Mille-Feuille Vanille",    description: "Vanille de Tahiti, caramel beurre salé",   price: "€18"  },
        { name: "Plateau de Fromages",      description: "Sélection affinée, confitures, noix",      price: "€26"  },
      ],
    },
  ],

  /* ── DRINKS MENU ────────────────────────────────────────── */
  drinksMenu: [
    {
      category: "Champagne & Pétillants",
      icon: "🍾",
      items: [
        { name: "Dom Pérignon 2015",         description: "Moët & Chandon — Blanc",              price: "€350" },
        { name: "Dom Pérignon Rosé 2008",    description: "Cuvée prestige rosé",                 price: "€580" },
        { name: "Cristal Roederer 2016",     description: "Louis Roederer — Brut",               price: "€420" },
        { name: "Krug Grande Cuvée",         description: "Multi-millésime — 170ème Édition",    price: "€390" },
        { name: "Armand de Brignac Gold",    description: "Ace of Spades — Brut",                price: "€450" },
      ],
    },
    {
      category: "Cocktails Signature",
      icon: "🍸",
      items: [
        { name: "Éclat Royal",   description: "Champagne, hibiscus, litchi, or comestible",        price: "€28" },
        { name: "Monaco Nights", description: "Grey Goose, bergamote, rose, eau tonique premium",  price: "€24" },
        { name: "Riviera Gold",  description: "Tequila Patrón, gingembre, yuzu, miel de Manuka",   price: "€26" },
        { name: "Black Pearl",   description: "Rum Diplomatico, cacao noir, caramel salé, crème",  price: "€22" },
        { name: "Minuit Bleu",   description: "Hendrick's Gin, lavande, myrtille, citron",         price: "€24" },
      ],
    },
    {
      category: "Spiritueux Premium",
      icon: "🥃",
      items: [
        { name: "Hennessy Paradis",   description: "Cognac d'exception — 3cl",   price: "€85"  },
        { name: "Macallan 18 ans",    description: "Single Malt Scotch — 3cl",   price: "€65"  },
        { name: "Patrón El Alto",     description: "Tequila Extra Añejo — 3cl",  price: "€55"  },
        { name: "Grey Goose",         description: "Vodka française — 3cl",      price: "€18"  },
        { name: "Hibiki Harmony",     description: "Japanese Whisky — 3cl",      price: "€42"  },
      ],
    },
    {
      category: "Sans Alcool",
      icon: "🌊",
      items: [
        { name: "Riviera Breeze",    description: "Eau de coco, mangue, citron vert, menthe",       price: "€14" },
        { name: "Gold Detox",        description: "Curcuma, gingembre, pomme verte, miel",          price: "€12" },
        { name: "Perrier Jouet",     description: "Eau minérale pétillante premium — 75cl",         price: "€16" },
      ],
    },
  ],

  /* ── EVENTS ─────────────────────────────────────────────── */
  events: [
    {
      title:       "WHITE NIGHT",
      subtitle:    "Dress Code: All White",
      date:        "2026-05-30",
      displayDate: "Friday 30 May 2026",
      time:        "22:00 — 04:00",
      description: "Our most anticipated annual event. All-white dress code, international DJs, Dom Pérignon open bar, and an experience you will never forget.",
      tag:         "SOLD OUT LAST YEAR",
      image:       "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    },
    {
      title:       "ROSÉ SUNSET",
      subtitle:    "Terrace Opening Night",
      date:        "2026-06-07",
      displayDate: "Sunday 7 June 2026",
      time:        "19:00 — 02:00",
      description: "Welcome summer on our rooftop terrace. Rosé wine selection, live jazz quartet, and a breathtaking sunset over the Mediterranean.",
      tag:         "SUMMER OPENING",
      image:       "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80",
    },
    {
      title:       "BLACK & GOLD",
      subtitle:    "Exclusive Gala Night",
      date:        "2026-07-12",
      displayDate: "Saturday 12 July 2026",
      time:        "20:00 — 05:00",
      description: "A night of pure opulence. Black tie optional. Celebrity DJ headliner. Limited to 150 guests.",
      tag:         "LIMITED TICKETS",
      image:       "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
    },
  ],

  /* ── NFC EXPERIENCE SECTION ─────────────────────────────── */
  nfcExperience: {
    headline:    "The Lumière Experience",
    description: "Each bottle you see is a unique piece of art — a recycled Dom Pérignon transformed into a luxury lamp. Inside, an NFC chip connects your world to an immersive digital experience crafted exclusively for this venue.",
    features: [
      { icon: "📲", title: "Instant Access", text: "One tap. No app needed. Your full venue experience opens instantly." },
      { icon: "🍾", title: "Premium Bottles", text: "Each lamp is a hand-crafted piece made from authentic Dom Pérignon bottles." },
      { icon: "✨", title: "Live Updates", text: "Menus, events, and playlists update in real time — always current." },
      { icon: "💎", title: "Bespoke Design", text: "Every page is custom-designed for the establishment's identity and clientele." },
    ],
  },

  /* ── FOOTER ─────────────────────────────────────────────── */
  footer: {
    tagline:   "Crafted with prestige. Experienced with a tap.",
    copyright: "© 2026 Éclat Lounge. All rights reserved.",
    social: [
      { label: "Instagram", icon: "📸", url: "#" },
      { label: "Facebook",  icon: "🔵", url: "#" },
      { label: "TikTok",    icon: "🎵", url: "#" },
    ],
    madeWith: "Powered by Lumière NFC Experience",
  },

};
