# 📖 Guide de Personnalisation — Lumière NFC Experience

> **Pour les propriétaires et gérants d'établissements**
> Pas besoin de connaissances techniques. Suivez ce guide étape par étape.

---

## 🗂️ Structure des fichiers

```
votre-site/
├── index.html          ← La page (ne pas modifier)
├── styles.css          ← Le design (ne pas modifier)
├── app.js              ← Le moteur (ne pas modifier)
├── data/
│   └── config.js       ← ⭐ VOTRE FICHIER D'ÉDITION ⭐
└── assets/
    └── images/         ← Vos photos ici
```

**👉 Vous n'avez besoin de modifier qu'UN SEUL fichier : `data/config.js`**

---

## ✏️ Comment ouvrir et modifier `config.js`

1. Ouvrez le fichier `data/config.js` avec :
   - **Windows** : Notepad, Notepad++ ou VS Code
   - **Mac** : TextEdit (mode texte brut) ou VS Code
   - **En ligne** : cPanel de Hostinger → Gestionnaire de fichiers → Éditeur

2. Modifiez les textes entre guillemets `"..."` uniquement
3. **Ne supprimez jamais** les virgules `,`, les guillemets ou les accolades `{}`
4. Sauvegardez le fichier et rechargez la page

---

## 📋 Sommaire des modifications

| Ce que vous voulez changer | Section dans config.js |
|---|---|
| Nom & slogan | `brand` |
| Adresse, téléphone, horaires | `venue` |
| Instagram | `instagram` |
| Avis Google | `reviews` |
| Playlists Spotify | `spotify` |
| DJs | `djs` |
| Informations de réservation | `reservation` |
| Menu food | `foodMenu` |
| Carte des boissons | `drinksMenu` |
| Événements | `events` |
| Section NFC | `nfcExperience` |
| Pied de page | `footer` |

---

## 1️⃣ Changer le nom & l'identité visuelle

Repérez cette partie dans `config.js` :

```js
brand: {
  name:       "ÉCLAT",           // ← Votre nom d'établissement
  tagline:    "Where Prestige Meets the Night",  // ← Votre slogan
  subTagline: "Tap into the experience",
  logo:       "",                // ← URL de votre logo (optionnel)
  accentColor:"#C9A96E",         // ← Couleur dorée (code hexadécimal)
},
```

**Exemple :**
```js
name: "LE BAROQUE",
tagline: "L'art de vivre à la française",
```

> 💡 Pour changer la couleur : rendez-vous sur [htmlcolorcodes.com](https://htmlcolorcodes.com) et copiez le code hexadécimal (#XXXXXX)

---

## 2️⃣ Modifier l'adresse et les horaires

```js
venue: {
  name:        "Éclat Lounge & Restaurant",
  description: "Une description de votre établissement...",
  address:     "12 Boulevard de la Croisette, Monaco",
  phone:       "+377 99 00 00 00",
  whatsapp:    "+37799000000",   // ← Sans espaces ni symbole +
  email:       "reservation@votrerestaurant.com",
  mapsUrl:     "https://maps.google.com/?q=...",  // ← Votre lien Google Maps
  hours: [
    { day: "Lundi – Jeudi",      time: "19:00 – 02:00" },
    { day: "Vendredi – Samedi",  time: "19:00 – 04:00" },
    { day: "Dimanche",           time: "19:00 – 01:00" },
  ],
},
```

**Pour obtenir votre lien Google Maps :**
1. Cherchez votre établissement sur Google Maps
2. Cliquez sur "Partager" → "Copier le lien"
3. Collez ce lien dans `mapsUrl`

---

## 3️⃣ Mettre à jour Instagram

```js
instagram: {
  handle:   "@votre.compte",    // ← Votre @
  url:      "https://instagram.com/votre.compte",
  posts: [
    {
      image: "https://images.unsplash.com/...",  // ← URL de votre photo
      caption: "Votre légende ici"
    },
    // Ajoutez jusqu'à 6 posts de la même façon
  ],
},
```

**Pour utiliser vos propres photos :**
1. Uploadez votre photo dans `assets/images/`
2. Remplacez l'URL par : `"assets/images/ma-photo.jpg"`

---

## 4️⃣ Modifier les avis Google

```js
reviews: {
  googleRating: 4.9,           // ← Votre note (ex: 4.8)
  totalReviews: 312,            // ← Nombre total d'avis
  googleReviewUrl: "https://g.page/...",  // ← Lien pour laisser un avis
  testimonials: [
    {
      name:   "Alexandre M.",
      rating: 5,
      text:   "Texte de l'avis...",
      avatar: "AM"              // ← Initiales du client
    },
    // Ajoutez autant d'avis que vous voulez
  ],
},
```

**Pour obtenir votre lien Google Reviews :**
1. Cherchez votre établissement sur Google
2. Cliquez sur "Écrire un avis"
3. Copiez l'URL de la page

---

## 5️⃣ Changer les playlists Spotify

```js
spotify: {
  playlists: [
    {
      label:    "Lounge",      // ← Nom de l'onglet
      icon:     "🕯️",
      embedUrl: "https://open.spotify.com/embed/playlist/XXXXXXX",
    },
    // ...
  ],
},
```

**Pour obtenir un lien d'intégration Spotify :**
1. Ouvrez Spotify et trouvez votre playlist
2. Cliquez sur `...` → "Partager" → "Copier le lien vers la playlist"
3. Le lien ressemble à : `https://open.spotify.com/playlist/37i9dQZF1DX...`
4. Transformez-le en : `https://open.spotify.com/embed/playlist/37i9dQZF1DX...`
   (ajoutez simplement `/embed/` après `spotify.com/`)

---

## 6️⃣ Ajouter ou retirer des DJs

### DJ Vedette (carte principale) :
```js
djs: {
  featured: {
    name:      "DJ SULTAN",
    bio:       "Biographie du DJ...",
    image:     "assets/images/dj-sultan.jpg",  // ← Votre photo
    instagram: "https://instagram.com/djsultan",
    nextSet:   "Vendredi 30 Mai — 00:00",
  },
```

### Ajouter un DJ dans la grille :
```js
lineup: [
  {
    name:      "NOM DU DJ",
    genre:     "Afro House · Deep House",
    image:     "assets/images/dj-nom.jpg",
    instagram: "https://instagram.com/...",
    nextSet:   "Sam 31 Mai · 23:30",
    resident:  false,  // ← true = badge "Resident" affiché
  },
  // Copiez-collez ce bloc pour ajouter un DJ
],
```

**Pour supprimer un DJ :** Supprimez son bloc entier (de `{` à `},`)

---

## 7️⃣ Modifier les événements

```js
events: [
  {
    title:       "WHITE NIGHT",
    subtitle:    "Dress Code: All White",
    date:        "2026-05-30",          // ← Format: AAAA-MM-JJ (pour le compte à rebours)
    displayDate: "Vendredi 30 Mai 2026",// ← Texte affiché
    time:        "22:00 — 04:00",
    description: "Description de l'événement...",
    tag:         "SOLD OUT LAST YEAR",  // ← Badge (laissez "" pour ne pas afficher)
    image:       "assets/images/event-white-night.jpg",
  },
  // Copiez-collez ce bloc pour un nouvel événement
],
```

> ⚠️ Le format de `date` doit être exactement `"AAAA-MM-JJ"` pour que le compte à rebours fonctionne.

---

## 8️⃣ Mettre à jour le menu food

```js
foodMenu: [
  {
    category: "Entrées",
    icon: "🌿",
    items: [
      {
        name:        "Caviar Osciètre",
        description: "30g, blinis maison, crème fraîche",
        price:       "€95"
      },
      // Ajoutez des plats de la même façon
    ],
  },
  // Ajoutez une catégorie de la même façon
],
```

**Pour supprimer un plat :** Supprimez les lignes de `{` à `},`

**Pour ajouter une catégorie :** Copiez un bloc entier `{ category: ..., items: [...] }` et collez-le avant le dernier `]`

---

## 9️⃣ Mettre à jour la carte des boissons

Même principe que le menu food, dans la section `drinksMenu` :

```js
drinksMenu: [
  {
    category: "Champagne & Pétillants",
    icon: "🍾",
    items: [
      { name: "Dom Pérignon 2015", description: "...", price: "€350" },
    ],
  },
],
```

---

## 🔟 Modifier les informations de réservation

```js
reservation: {
  whatsapp:    "+33600000000",     // ← Votre numéro WhatsApp (sans +)
  phone:       "+33 6 00 00 00 00",
  email:       "vip@monrestaurant.com",
  description: "Texte d'introduction pour la réservation...",
},
```

---

## 🖼️ Remplacer les images

**Méthode recommandée :**
1. Nommez votre image simplement : `photo-ambiance.jpg`
2. Uploadez-la dans le dossier `assets/images/`
3. Dans `config.js`, remplacez l'URL par : `"assets/images/photo-ambiance.jpg"`

**Formats conseillés :**
- Photos : JPG (qualité 80%), largeur max 800px
- Logo : PNG avec fond transparent
- DJs : format carré (ex: 400×400px)

---

## 🚀 Déploiement sur Hostinger

### Première mise en ligne :
1. Connectez-vous à votre panneau Hostinger
2. Allez dans **Gestionnaire de fichiers** → `public_html`
3. Uploadez **tous les fichiers** (index.html, styles.css, app.js, data/, assets/)
4. Votre site est en ligne !

### Mettre à jour le contenu :
1. Modifiez `data/config.js` sur votre ordinateur
2. Dans Hostinger : Gestionnaire de fichiers → `public_html/data/`
3. Supprimez l'ancien `config.js`
4. Uploadez le nouveau `config.js`
5. ✅ Votre site est mis à jour instantanément

> 💡 Vous pouvez aussi éditer directement dans Hostinger via l'éditeur en ligne dans le Gestionnaire de fichiers

---

## ❓ Problèmes fréquents

| Problème | Solution |
|---|---|
| La page ne se charge pas | Vérifiez que tous les fichiers sont uploadés dans `public_html` |
| Le texte ne change pas | Vérifiez que vous avez bien sauvegardé `config.js` |
| Erreur JavaScript | Vérifiez que les guillemets et virgules sont bien en place |
| Image non affichée | Vérifiez le nom exact du fichier (majuscules/minuscules) |
| Compte à rebours incorrect | Vérifiez le format de date : `"AAAA-MM-JJ"` |

---

## 📞 Support

Pour toute demande de personnalisation avancée ou en cas de problème technique, contactez l'équipe **Lumière NFC Experience**.

> *Ce site a été créé spécifiquement pour votre établissement. Toute modification du fichier `config.js` est sans risque — si quelque chose ne va pas, il vous suffit de remettre l'ancienne version du fichier.*

---

*Lumière NFC Experience — La technologie au service du luxe.*
