# 🎮 RetroPlay

**RetroPlay** est une plateforme web dédiée au retrogaming permettant de découvrir et de lancer des jeux rétro directement depuis un navigateur.

Le projet est développé avec **React** et intègre **EmulatorJS** comme moteur d'émulation.  
L'objectif est de proposer une expérience simple et moderne autour de plusieurs consoles rétro, sans installation côté utilisateur.

> 🚧 RetroPlay est actuellement en cours de développement.

---

## ✨ Fonctionnalités

### Disponibles

- 🎮 Catalogue de jeux rétro
- 🔎 Recherche de jeux
- 🕹️ Filtrage par console
- 📚 Navigation entre les différentes consoles
- 🎠 Carrousel de jeux avec pagination
- ▶️ Lancement d'un jeu depuis sa fiche
- ⚙️ Chargement dynamique de la ROM et du core correspondant
- 🖥️ Émulation directement dans le navigateur avec EmulatorJS
- 🎨 Écran de lancement personnalisé RetroPlay
- 🔗 Communication entre React et EmulatorJS via `postMessage`
- 📱 Interface construite avec React et SCSS

### Consoles actuellement prises en charge

| Console | Core / Support |
| --- | --- |
| Game Boy | EmulatorJS |
| Game Boy Color | EmulatorJS |
| Game Boy Advance | EmulatorJS |
| Nintendo Entertainment System | EmulatorJS |
| Super Nintendo | EmulatorJS |
| Sega Mega Drive | EmulatorJS |

---

## 🛠️ Technologies

### Front-end

- React
- JavaScript
- React Router
- SCSS
- Vite
- Lucide React

### Émulation

- EmulatorJS

### Données

Le catalogue est actuellement alimenté à partir de données JSON locales.

Une architecture back-end pourra être ajoutée ultérieurement afin de gérer dynamiquement le catalogue et certaines fonctionnalités utilisateur.

---

## 🧩 Architecture

```text
RetroPlay/
│
├── public/
│   ├── background/
│   ├── emulator/
│   │   └── player.html
│   ├── gamecover/
│   └── roms/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Emulator/
│   │   ├── GameCard/
│   │   ├── GameCarousel/
│   │   ├── Header/
│   │   └── ...
│   │
│   ├── data/
│   │   └── games.json
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Library/
│   │   ├── Console/
│   │   └── Game/
│   │
│   └── ...
│
├── package.json
└── README.md
```

---

## 🎮 Fonctionnement de l'émulateur

RetroPlay utilise **EmulatorJS** pour exécuter les jeux directement dans le navigateur.

L'émulateur est volontairement isolé du reste de l'application dans une `iframe`.

```text
React
  │
  ├── Interface RetroPlay
  │
  └── Emulator.jsx
          │
          ▼
      iframe
          │
          ▼
   player.html
          │
          ▼
     EmulatorJS
          │
          ▼
        ROM
```

Lorsqu'un utilisateur sélectionne un jeu, RetroPlay récupère les informations correspondantes depuis le catalogue :

```json
{
  "id": 1,
  "title": "Pokemon Rouge",
  "console": "Gameboy",
  "year": 1999,
  "cover": "/gamecover/gameboy/pokemon-rouge-gameboy.svg",
  "rom": "/roms/gameboy/PokemonRouge.gb"
}
```

Le chemin de la ROM et la console sont ensuite transmis au lecteur.

Le core EmulatorJS approprié est sélectionné automatiquement selon la console :

```text
Game Boy          → gb
Game Boy Color    → gb
Game Boy Advance  → gba
NES               → nes
Super Nintendo    → snes
Sega Mega Drive   → genesis_plus_gx
```

---

## 🔗 Communication React ↔ EmulatorJS

RetroPlay possède sa propre interface afin de ne pas dépendre visuellement des contrôles natifs d'EmulatorJS.

La communication entre l'application React et l'émulateur repose sur `window.postMessage()`.

Par exemple, lorsqu'un utilisateur clique sur le bouton de lancement RetroPlay :

```text
Utilisateur
     │
     ▼
START GAME
     │
     ▼
React
     │
     │ postMessage()
     ▼
player.html
     │
     ▼
EmulatorJS
     │
     ▼
Démarrage du jeu
```

Cette architecture permettra également d'ajouter progressivement des contrôles RetroPlay personnalisés.

---


## 🎯 Roadmap

Plusieurs fonctionnalités sont prévues pour faire évoluer RetroPlay :

- ⏯️ Contrôles Play / Pause personnalisés
- 🔄 Redémarrage d'un jeu
- 🖥️ Mode plein écran
- 💾 Sauvegarde des parties
- 📂 Chargement d'une sauvegarde
- ⌨️ Configuration personnalisée des touches
- 🎮 Support amélioré des manettes
- 📚 Enrichissement du catalogue
- 🗄️ Mise en place d'un back-end
- 🔐 Système de sauvegarde sans compte
- 📱 Amélioration du responsive design

---

## 💾 Système de sauvegarde envisagé

À terme, RetroPlay prévoit de permettre la récupération d'une sauvegarde sans imposer la création d'un compte.

Le principe envisagé est le suivant :

```text
Sauvegarde d'une partie
        │
        ▼
Création d'une sauvegarde
        │
        ▼
Génération d'un code unique
        │
        ▼
       XXXX
        │
        ▼
L'utilisateur conserve son code
        │
        ▼
Saisie du code sur RetroPlay
        │
        ▼
Récupération de la sauvegarde
```

Cette fonctionnalité est actuellement au stade de conception.

---

## 📁 Ajouter un jeu

Les jeux sont actuellement déclarés dans :

```text
src/data/games.json
```

Exemple :

```json
{
  "id": 1,
  "title": "Pokemon Rouge",
  "console": "Gameboy",
  "year": 1999,
  "cover": "/gamecover/gameboy/pokemon-rouge-gameboy.svg",
  "rom": "/roms/gameboy/PokemonRouge.gb"
}
```

Les ROMs sont chargées depuis le dossier :

```text
public/roms/
```

> Les fichiers de jeux ne devraient être distribués que lorsque leur utilisation et leur distribution sont légalement autorisées. Les ROMs protégées par le droit d'auteur ne sont pas destinées à être incluses dans le dépôt public sans autorisation.

---

## 🧠 Objectifs du projet

RetroPlay est également un projet d'apprentissage permettant de travailler plusieurs concepts du développement web moderne :

- architecture d'une application React ;
- composants réutilisables ;
- gestion du state ;
- rendu conditionnel ;
- React Router ;
- manipulation et filtrage de données ;
- intégration d'une technologie externe ;
- communication entre une application et une `iframe` ;
- conception d'une interface utilisateur personnalisée ;
- organisation d'un projet destiné à évoluer vers une architecture full-stack.

---

## 📸 Aperçu

Des captures d'écran et une démonstration du projet pourront être ajoutées ici.

```text
Home → Catalogue → Jeu → RetroPlay Launcher → EmulatorJS
```

---

## ⚖️ Avertissement

RetroPlay est un projet personnel et éducatif.

Les marques, noms de consoles et noms de jeux mentionnés appartiennent à leurs propriétaires respectifs.

EmulatorJS est un projet tiers utilisé comme moteur d'émulation. RetroPlay n'est pas affilié aux fabricants de consoles ou aux éditeurs des jeux émulés.

---

## 👨‍💻 Auteur

Projet développé par **Mael** dans le cadre de son apprentissage du développement web et de la création de projets personnels.

---

## 📄 Licence

La licence du code source de RetroPlay reste à définir.

Les éventuelles licences applicables aux dépendances et technologies tierces utilisées par le projet restent celles de leurs auteurs respectifs.