# 🚀 cubFirst

> **Le framework HTML-first le plus simple au monde**

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/Romtouf/cubfirst/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Size](https://img.shields.io/badge/size-128KB-orange.svg)](dist/cubfirst.min.js)

**cubFirst** = **1 ligne HTML** + **50+ plugins** + **attributs data-plugin** = **Site web interactif complet**

**Zéro JavaScript à écrire. Zéro configuration. Zéro dépendance. Maximum de fonctionnalités.**

---

## ⚡ Usage : 30 secondes

### 1. Ajoutez une ligne dans votre HTML
```html
<script src="https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v2.0.0/dist/cubfirst.min.js" defer></script>
```

### 2. Utilisez les attributs data-plugin
```html
<!-- Modal -->
<button data-plugin="modal" data-options='{"title": "Hello!", "content": "cubFirst fonctionne !"}'>
    Ouvrir Modal
</button>

<!-- Toast Notification -->
<button data-plugin="toast" data-options='{"message": "Super facile !", "type": "success"}'>
    Afficher Toast
</button>

<!-- Carousel -->
<div data-plugin="carousel" data-options='{"autoplay": true}'>
    <img src="image1.jpg" alt="Image 1">
    <img src="image2.jpg" alt="Image 2">
    <img src="image3.jpg" alt="Image 3">
</div>
```

### 3. C'est tout ! ✨

**Ouvrez votre fichier HTML dans le navigateur - tout fonctionne immédiatement.**

---

## 🎯 Plugins Disponibles

**50+ plugins prêts à l'emploi** - Tous activables avec `data-plugin="nom"` :

### 🎨 Interface Utilisateur
| Plugin | Description | Usage |
|--------|-------------|-------|
| **🪟 modal** | Fenêtres modales | `data-plugin="modal"` |
| **🍞 toast** | Notifications temporaires | `data-plugin="toast"` |
| **❓ confirm** | Dialogues de confirmation | `data-plugin="confirm"` |
| **📱 dropdown** | Menus déroulants | `data-plugin="dropdown"` |
| **🍔 hamburger** | Menus hamburger | `data-plugin="hamburger"` |
| **📱 drawer** | Panneaux latéraux | `data-plugin="drawer"` |
| **📧 alert** | Messages d'alerte | `data-plugin="alert"` |
| **⭐ tooltip** | Info-bulles | `data-plugin="tooltip"` |

### 📊 Navigation & Organisation
| Plugin | Description | Usage |
|--------|-------------|-------|
| **📑 tabs** | Système d'onglets | `data-plugin="tabs"` |
| **📊 accordion** | Contenus pliables | `data-plugin="accordion"` |
| **🎠 carousel** | Carrousels d'images | `data-plugin="carousel"` |
| **📄 pagination** | Navigation par pages | `data-plugin="pagination"` |
| **🍞 breadcrumb** | Fil d'Ariane | `data-plugin="breadcrumb"` |
| **🔍 sidebar** | Barres latérales | `data-plugin="sidebar"` |

### 🎛️ Contrôles & Formulaires
| Plugin | Description | Usage |
|--------|-------------|-------|
| **📝 contact-form** | Formulaires de contact | `data-plugin="contact-form"` |
| **🔄 toggle** | Boutons bascule | `data-plugin="toggle"` |
| **🎚️ slider** | Curseurs de valeurs | `data-plugin="slider"` |
| **⭐ rating** | Système de notation | `data-plugin="rating"` |
| **🔍 search** | Barre de recherche | `data-plugin="search"` |
| **📁 file-upload** | Upload de fichiers | `data-plugin="file-upload"` |
| **📅 date-picker** | Sélecteur de dates | `data-plugin="date-picker"` |
| **🕒 time-picker** | Sélecteur d'heures | `data-plugin="time-picker"` |
| **🎨 color-picker** | Sélecteur de couleurs | `data-plugin="color-picker"` |

### 🚀 Interactivité Avancée
| Plugin | Description | Usage |
|--------|-------------|-------|
| **📋 copy** | Copie dans le presse-papier | `data-plugin="copy"` |
| **🎯 scrollto** | Défilement fluide | `data-plugin="scrollto"` |
| **⏱️ countdown** | Compte à rebours | `data-plugin="countdown"` |
| **👁️ reveal** | Animations d'apparition | `data-plugin="reveal"` |
| **🖱️ swipe** | Gestes tactiles | `data-plugin="swipe"` |
| **📍 sticky** | Éléments collants | `data-plugin="sticky"` |
| **🔄 lazy-load** | Chargement différé | `data-plugin="lazy-load"` |

### 📈 Données & Tableaux
| Plugin | Description | Usage |
|--------|-------------|-------|
| **📋 data-table** | Tableaux dynamiques | `data-plugin="data-table"` |
| **🔍 filter** | Filtres de contenu | `data-plugin="filter"` |
| **📊 progress-bar** | Barres de progression | `data-plugin="progress-bar"` |
| **📈 progress-scroll** | Indicateur de défilement | `data-plugin="progress-scroll"` |
| **⚡ load-more** | Chargement progressif | `data-plugin="load-more"` |

### 🎨 Personnalisation
| Plugin | Description | Usage |
|--------|-------------|-------|
| **🌙 darkmode-toggle** | Basculeur thème sombre | `data-plugin="darkmode-toggle"` |
| **🎨 theme-system** | Système de thèmes | `data-plugin="theme-system"` |
| **🎪 card** | Cartes interactives | `data-plugin="card"` |
| **💎 skeleton** | Chargement fantôme | `data-plugin="skeleton"` |

---

## 🎮 Test Immédiat

Copiez ce code dans un fichier `test.html` et ouvrez-le :

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Test cubFirst</title>
    <script src="https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v2.0.0/dist/cubfirst.min.js" defer></script>
    <style>
        body { font-family: Arial, sans-serif; padding: 2rem; background: #f8fafc; }
        button { margin: 0.5rem; padding: 1rem 1.5rem; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; }
        .btn-blue { background: #3b82f6; color: white; }
        .btn-green { background: #10b981; color: white; }
        .btn-purple { background: #8b5cf6; color: white; }
        .carousel-demo { max-width: 500px; margin: 2rem 0; }
        .slide { height: 150px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; border-radius: 8px; }
    </style>
</head>
<body>
    <h1>🚀 cubFirst en Action</h1>
    <p>Cliquez pour tester les fonctionnalités :</p>
    
    <!-- Tests des plugins -->
    <button class="btn-blue" data-plugin="modal" data-options='{"title": "🎉 Ça marche !", "content": "cubFirst fonctionne parfaitement !<br><br>✅ Pas de JavaScript écrit<br>✅ Pas de configuration<br>✅ Juste du HTML !"}'>
        🪟 Tester Modal
    </button>
    
    <button class="btn-green" data-plugin="toast" data-options='{"message": "cubFirst est génial ! 🚀", "type": "success"}'>
        🍞 Tester Toast
    </button>
    
    <button class="btn-purple" data-plugin="confirm" data-options='{"message": "cubFirst vous plaît-il ?", "confirmText": "Oui, j\\'adore !", "cancelText": "Pas encore convaincu"}'>
        ❓ Tester Confirm
    </button>
    
    <!-- Carousel Demo -->
    <h2>🎠 Carousel Automatique</h2>
    <div class="carousel-demo" data-plugin="carousel" data-options='{"autoplay": true, "duration": 2000}'>
        <div class="slide" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
            Slide 1 - Simple
        </div>
        <div class="slide" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
            Slide 2 - Rapide
        </div>
        <div class="slide" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
            Slide 3 - Efficace
        </div>
    </div>
    
    <hr style="margin: 2rem 0;">
    <h2>✅ Si tout fonctionne :</h2>
    <ul>
        <li>🎯 cubFirst est correctement chargé</li>
        <li>🚀 Tous les plugins sont actifs</li>
        <li>✨ Vous êtes prêt à créer des sites interactifs !</li>
    </ul>
</body>
</html>
```

**Résultat ? Un site interactif complet en 0 ligne de JavaScript !** 🎉

---

## 🌟 Pourquoi choisir cubFirst ?

### ✅ **Simplicité Absolue**
- **1 script CDN** : Tout fonctionne immédiatement
- **HTML pur** : Pas de JavaScript à apprendre
- **Attributs data** : Syntaxe intuitive et lisible
- **50+ plugins** : Toutes les fonctionnalités essentielles

### ✅ **Performance**
- **128KB minifié** : Ultra-léger pour +50 plugins
- **Pas de dépendances** : Zéro requête supplémentaire
- **Cache navigateur** : Chargement instantané
- **Optimisé** : Code TypeScript professionnel (7600+ lignes)

### ✅ **Productivité**
- **Développement rapide** : Fonctionnalités prêtes à l'emploi
- **Maintenance facile** : Code HTML lisible et structuré
- **Compatible partout** : Fonctionne sur tous les navigateurs
- **Extensible** : Système de plugins modulaire

---

## 📚 Documentation

- 📖 **[Guide de démarrage](docs/getting-started.md)** - Tutoriels pas à pas
- 🎯 **[Guide avancé](docs/advanced-guide.md)** - Fonctionnalités poussées
- 🎮 **[Exemples pratiques](docs/tutorials.md)** - Projets réels
- 🧪 **[Démonstrations](docs/demos.html)** - Tests interactifs

---

## 🔧 Avancé : Composants Modulaires

**Pour les projets complexes**, cubFirst offre aussi un système de composants :

```html
<!-- Développement avec composants séparés -->
<cub-include src="components/header.html" data-plugin="cub-include"></cub-include>
<main>Mon contenu</main>
<cub-include src="components/footer.html" data-plugin="cub-include"></cub-include>
```

**Build pour production :** Génère automatiquement des fichiers HTML autonomes.

*👉 Voir la [documentation avancée](docs/advanced-guide.md) pour plus de détails.*

---

## 🚀 Philosophie

> **"HTML-first, Zero-config, Maximum-simplicity"**

cubFirst croit que le développement web doit être :
- **Accessible** : Pas de courbe d'apprentissage
- **Immédiat** : Ça marche tout de suite
- **Lisible** : Le HTML reste du HTML
- **Performant** : Optimisé pour la vitesse

---

## 🤝 Communauté

- ⭐ **[Star le projet](https://github.com/Romtouf/cubfirst)** sur GitHub
- 🐛 **[Reporter un bug](https://github.com/Romtouf/cubfirst/issues)**
- 💡 **[Proposer une feature](https://github.com/Romtouf/cubfirst/discussions)**
- 📢 **Partager** cubFirst avec vos collègues !

---

## 📄 Licence

MIT © [Romtouf](https://github.com/Romtouf) - Libre d'utilisation pour tous projets.

---

<div align="center">

**cubFirst v2.0** - *HTML-first Framework for Everyone*

**[🌐 Documentation](docs/) • [🚀 CDN](https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v2.0.0/dist/cubfirst.min.js) • [💬 Community](https://github.com/Romtouf/cubfirst/discussions)**

*Made with ❤️ for developers who love simplicity*

</div>