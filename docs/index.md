# Documentation officielle — cubFirst

Bienvenue dans la documentation complète du framework **cubFirst**, un micro-framework HTML-first léger, modulaire, sans dépendance.

---

## 🧠 Philosophie

cubFirst repose sur 3 piliers :

- **HTML-first** : tout passe par le HTML (aucun JS à écrire)
- **data-plugin** : chaque élément HTML peut déclarer un comportement interactif
- **modularité** : chaque plugin est autonome, activé uniquement si nécessaire

---

## 🚀 Installation

### Via CDN (recommandé)

```html
<script
  src="https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v1.0.0/dist/cubfirst.min.js"
  defer
></script>
```

### Via npm (optionnel)

```bash
npm install cubfirst
```

Puis dans ton JS :

```js
import "cubfirst/dist/cubfirst.min.js";
```

---

## ⚙️ Fonctionnement

CubFirst détecte automatiquement les éléments contenant :

```html
<div data-plugin="NOM" data-options='{"clé": "valeur"}'></div>
```

Chaque plugin reçoit l'élément ciblé (`el`) et les options (`opts`) automatiquement.

---

## 🔌 Plugins intégrés

### ✅ `modal`

```html
<button id="openModal">Ouvrir</button>
<div
  data-plugin="modal"
  data-options='{"trigger": "#openModal"}'
  class="cubfirst-modal hidden"
>
  <div class="modal-content">Contenu ici</div>
</div>
```

Options :

- `trigger`: sélecteur CSS de l’élément qui déclenche la modale

### ✅ `tabs`

```html
<div data-plugin="tabs">
  <div data-tab="a">Onglet A</div>
  <div data-tab="b">Onglet B</div>
  <div class="tab-content" data-tab="a">Contenu A</div>
  <div class="tab-content" data-tab="b">Contenu B</div>
</div>
```

### ✅ `accordion`

Structure :

```html
<div data-plugin="accordion">
  <div class="accordion-item">
    <div class="accordion-header">Titre</div>
    <div class="accordion-content">Contenu</div>
  </div>
</div>
```

### ✅ `tooltip`

```html
<span data-plugin="tooltip" data-options='{"text": "info-bulle"}'>Info</span>
```

### ✅ `copy`

```html
<button data-plugin="copy" data-options='{"target": "#texte"}'>Copier</button>
<p id="texte">À copier</p>
```

### ✅ `toggle`

```html
<button data-plugin="toggle" data-options='{"target": "#bloc"}'>
  Afficher/Masquer
</button>
<div id="bloc" hidden>Contenu</div>
```

### ✅ `scrollto`

```html
<button data-plugin="scrollto" data-options='{"target": "#footer"}'>
  Aller en bas
</button>
```

### ✅ `countdown`

```html
<div data-plugin="countdown" data-options='{"to": "2025-12-31T23:59:59"}'></div>
```

### ✅ `darkmode-toggle`

```html
<button data-plugin="darkmode-toggle">Mode sombre</button>
```

### ✅ `confirm`

```html
<a
  href="/delete"
  data-plugin="confirm"
  data-options='{"message": "Supprimer ?"}'
  >Supprimer</a
>
```

---

## 🎨 Personnalisation avec Tailwind

CubFirst applique uniquement des classes neutres (`cubfirst-modal`, `modal-content`, etc.). Tu peux donc :

- ajouter tes propres classes Tailwind
- overrider via CSS si besoin

Exemple :

```html
<div class="cubfirst-modal flex justify-center items-center bg-black/50"></div>
```

---

## 🔧 Créer ton propre plugin

```ts
function initMyPlugin(el: HTMLElement, options: any) {
  // logique personnalisée
}
```

Ajoute-le dans le switch :

```ts
case 'my-plugin': initMyPlugin(el, opts); break;
```

---

## 🧪 Exemples avancés

Voir le fichier `index.html` complet de démo ou le site officiel prochainement.

---

## ❓ FAQ

- **Et si mon plugin a besoin d’un fichier externe ?**

  > Utilise `import()` dynamique ou intègre directement dans `cubfirst.ts`

- **Peut-on utiliser cubFirst avec Alpine.js ou HTMX ?**
  > Oui, cubFirst ne rentre pas en conflit, car il ne modifie pas le DOM en continu

---

## 🗺️ Roadmap

- Système de chargement lazy des plugins (optionnel)
- Page de démo officielle hébergée
- Intégration Astro / Eleventy docs site

---

## 📜 Licence

MIT © [Romtouf](https://github.com/Romtouf)
