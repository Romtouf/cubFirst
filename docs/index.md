# 📘 Documentation complète — cubFirst

**cubFirst** est un framework JavaScript ultra léger basé sur une approche **HTML-first**.  
Il permet d'ajouter des comportements dynamiques à vos sites simplement à l’aide d’attributs HTML `data-plugin`, sans aucune dépendance.

> 🔗 Démo officielle : [https://romtouf.github.io/cubFirst-demo](https://romtouf.github.io/cubFirst-demo)

---

## 🚀 Introduction

cubFirst est conçu pour être :

- **Minimaliste** : pas de surcharge, tout tient dans un seul fichier JavaScript.
- **HTML-first** : pas besoin d’écrire de JavaScript, tout se passe dans le HTML.
- **CDN-friendly** : fonctionne immédiatement via `<script>` dans le `<head>`.
- **Modulaire** : chaque plugin fonctionne indépendamment.

---

## ⚙️ Installation

Ajoutez simplement ce script à votre page HTML :

```html
<script
  src="https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v1.0.0/dist/cubfirst.min.js"
  defer
></script>
```

---

## 📌 Utilisation

---

## 🔧 Comprendre `data-options`

Chaque plugin cubFirst peut recevoir des paramètres personnalisés à travers l'attribut `data-options`.  
Cet attribut doit contenir une chaîne JSON avec les options spécifiques au plugin utilisé.

### 📌 Syntaxe générale

```html
<div data-plugin="NOM_DU_PLUGIN" data-options='{"clé": "valeur"}'></div>
```

- **Format** : toujours une chaîne JSON (entourée de `'`)
- **Clé/valeur** : dépend du plugin concerné
- **Types autorisés** : chaînes (`"texte"`), booléens (`true/false`), nombres (`3000`), sélecteurs (`"#id"`)

### 🎯 Exemples concrets

#### Modal

```html
<div data-plugin="modal" data-options='{"trigger": "#ouvrirModal"}'></div>
```

> Le plugin attend un sélecteur CSS pour déclencher l'ouverture.

#### Tooltip

```html
<span data-plugin="tooltip" data-options='{"text": "Bonjour"}'>Info</span>
```

> Le texte sera injecté dans l'attribut `title`.

#### Carousel

```html
<div data-plugin="carousel" data-options='{"interval": 5000}'>...</div>
```

> `interval` en millisecondes pour faire défiler automatiquement.

#### Rating

```html
<div
  data-plugin="rating"
  data-options='{"value": 3.5, "max": 5, "readonly": true}'
></div>
```

#### Input Mask

```html
<input data-plugin="input-mask" data-options='{"type": "phone"}' />
```

---

### ✅ Astuces

- Toujours valider le JSON avec un outil (ex : [jsonlint.com](https://jsonlint.com/)) si tu as une erreur.
- Pour passer plusieurs options, sépare-les par des virgules dans la chaîne JSON.
- Si tu veux passer un booléen, n’utilise pas `"true"` (chaîne), mais bien `true` (valeur logique).

---

Chaque plugin est activé grâce à un attribut :

```html
<div data-plugin="nom-du-plugin" data-options='{"clé": "valeur"}'></div>
```

L’attribut `data-options` permet de passer des paramètres spécifiques au plugin.

---

## 🧩 Liste complète des plugins

| Plugin            | Description                                    |
| ----------------- | ---------------------------------------------- |
| `modal`           | Ouvre/ferme une modale                         |
| `tabs`            | Affiche des contenus en onglets                |
| `accordion`       | Affiche/replie des sections d’éléments         |
| `tooltip`         | Affiche une info-bulle au survol               |
| `toast`           | Affiche une alerte temporaire                  |
| `contact-form`    | Envoie un formulaire AJAX                      |
| `copy`            | Copie du texte dans le presse-papiers          |
| `toggle`          | Affiche ou masque un bloc                      |
| `scrollto`        | Scroll en douceur vers une ancre               |
| `countdown`       | Affiche un compte à rebours                    |
| `darkmode-toggle` | Bascule le mode sombre                         |
| `confirm`         | Confirme une action avec une boîte de dialogue |
| `dropdown`        | Affiche un menu déroulant                      |
| `carousel`        | Carrousel d’images/éléments                    |
| `reveal`          | Animation à l’apparition dans le viewport      |
| `input-mask`      | Formatage de champ (ex. téléphone, date)       |
| `progress-scroll` | Barre de progression en haut de page           |
| `card`            | Génère une carte dynamique                     |
| `filter`          | Filtre des éléments selon leur tag             |
| `grid-expand`     | Zoom sur un élément au clic                    |
| `hover-preview`   | Affiche une prévisualisation au survol         |
| `rating`          | Système d’étoiles d’évaluation                 |
| `load-more`       | Affiche plus d’éléments à la demande           |
| `hamburger`       | Affiche/masque un menu mobile                  |

---

## 🔍 Exemple détaillé

### Exemple : `modal`

```html
<button id="open">Ouvrir</button>
<div data-plugin="modal" data-options='{"trigger": "#open"}' class="hidden">
  <div class="modal-content">Contenu de la modale</div>
</div>
```

---

### Exemple : `carousel`

```html
<div data-plugin="carousel" data-options='{"interval": 3000}'>
  <div class="carousel-slide">Slide 1</div>
  <div class="carousel-slide">Slide 2</div>
  <button data-carousel="prev">‹</button>
  <button data-carousel="next">›</button>
</div>
```

---

## 🎨 Personnalisation

Tous les plugins sont **stylisables avec Tailwind CSS** ou avec vos propres classes.  
cubFirst n’impose aucun style sauf quelques `hidden`, `position`, `z-index` ou `display`.

---

## 🔧 Développement personnalisé

Tu peux développer tes propres plugins :

```ts
function initMonPlugin(el: HTMLElement, options: any) {
  // ta logique ici
}
```

Et l'ajouter au bootstrap :

```ts
case 'mon-plugin': initMonPlugin(el, opts); break;
```

---

## 🔒 Accessibilité

cubFirst encourage une structure accessible, mais certains plugins (modal, tabs) peuvent être étendus avec des rôles ARIA pour une accessibilité renforcée.

---

## 📦 CDN

Tous les fichiers minifiés sont disponibles via jsDelivr :

```html
<script
  src="https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v1.0.0/dist/cubfirst.min.js"
  defer
></script>
```

---

## 🧠 À retenir

- Aucun framework requis (pas de React/Vue)
- Intégrable dans n’importe quel projet web statique
- Compatible avec tout système de templating

---

## 📄 Licence

Projet open-source sous licence **MIT**.

Développé par [Romtouf](https://github.com/Romtouf) — contributions bienvenues.

---

## 🔗 Démo

📺 Voir le framework en action :  
[https://romtouf.github.io/cubFirst-demo](https://romtouf.github.io/cubFirst-demo)
