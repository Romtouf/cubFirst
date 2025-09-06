# 📚 Documentation cubFirst - Centre de Ressources

> **Toute la documentation cubFirst en un seul endroit**  
> Guides, tutoriels, exemples et références pour maîtriser le framework HTML-first.

---

## 🎯 Navigation Rapide

| Document | Description | Durée |
|----------|-------------|-------|
| [📖 Documentation Complète](index.md) | Guide de référence complet avec tous les plugins | 30 min |
| [🚀 Guide de Démarrage](getting-started.md) | Apprenez cubFirst en 15 minutes | 15 min |
| [🎮 Démonstrations Interactives](demos.html) | Testez tous les plugins en temps réel | 20 min |
| [🔧 Guide Avancé](advanced-guide.md) | Développement de plugins personnalisés | 45 min |
| [📚 Tutoriels Fondamentaux](tutorials.md) | Notions de base HTML, CSS, JavaScript | 60 min |

---

## 🚀 Démarrage Express

### Installation en 30 secondes

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Site cubFirst</title>
    
    <!-- 🎯 CubFirst - Un seul script ! -->
    <script
        src="https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v1.0.0/dist/cubfirst.min.js"
        defer
    ></script>
    
    <!-- 🎨 Tailwind CSS (optionnel) -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <!-- ✨ Votre premier plugin -->
    <button id="mon-bouton" class="bg-blue-500 text-white px-4 py-2 rounded">
        Cliquez-moi !
    </button>
    
    <div data-plugin="modal" data-options='{"trigger": "#mon-bouton"}' class="hidden">
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-xl font-bold mb-4">Ma première modale !</h2>
            <p>Félicitations ! Vous venez d'utiliser cubFirst ! 🎉</p>
        </div>
    </div>
</body>
</html>
```

---

## 📖 Guides par Niveau

### 🟢 Débutant
- [Guide de Démarrage](getting-started.md) - Vos premiers pas avec cubFirst
- [Tutoriels Fondamentaux](tutorials.md) - HTML, CSS, JavaScript de base
- [Démonstrations Interactives](demos.html) - Explorez les plugins visuellement

### 🟡 Intermédiaire
- [Documentation Complète](index.md) - Guide de référence de tous les plugins
- [Exemples Avancés](index.md#-exemples-avancés) - Cas d'usage complexes
- [Personnalisation](index.md#-personnalisation--styling) - Styling et thèmes

### 🔴 Avancé
- [Guide Avancé](advanced-guide.md) - Développement de plugins personnalisés
- [API JavaScript](index.md#-api-javascript) - Contrôle programmatique
- [Architecture](advanced-guide.md#️-architecture-de-cubfirst) - Comprendre le framework

---

## 🧩 Plugins par Catégorie

### 🎭 Interface & Overlays
- **Modal** - Fenêtres modales élégantes
- **Drawer** - Tiroirs latéraux pour mobile
- **Sidebar** - Barres latérales de navigation
- **Sticky** - Éléments qui restent visibles

### 📑 Navigation & Organisation
- **Tabs** - Système d'onglets
- **Accordion** - Sections pliables
- **Dropdown** - Menus déroulants
- **Breadcrumb** - Fil d'Ariane

### 📝 Formulaires & Saisie
- **Input Mask** - Masques de saisie (téléphone, date, carte)
- **Date Picker** - Sélecteur de date
- **File Upload** - Upload de fichiers avec drag & drop
- **Multi Select** - Sélection multiple
- **Rating** - Système d'étoiles d'évaluation

### 🎨 Contrôles & Interactions
- **Slider** - Curseurs de valeur
- **Switch** - Interrupteurs on/off
- **Color Picker** - Sélecteur de couleur
- **Switch** - Boutons bascule

### 📊 Données & Tableaux
- **Data Table** - Tableaux de données avec tri et recherche
- **Pagination** - Pagination automatique
- **Filter** - Filtrage d'éléments
- **Search** - Recherche en temps réel

### 🎬 Animations & Effets
- **Reveal** - Animations d'apparition
- **Carousel** - Carrousels d'images
- **Hover Preview** - Prévisualisations au survol
- **Grid Expand** - Zoom sur les éléments

### 🔧 Utilitaires & Outils
- **Copy** - Copie dans le presse-papiers
- **Toast** - Notifications temporaires
- **Alert** - Alertes utilisateur
- **Confirm** - Boîtes de confirmation
- **Loader** - Indicateurs de chargement

---

## 🎨 Exemples de Code

### Modal Simple
```html
<button id="ouvrir">Ouvrir</button>
<div data-plugin="modal" data-options='{"trigger": "#ouvrir"}'>
    <div class="modal-content">Contenu de la modal</div>
</div>
```

### Système d'Onglets
```html
<div data-plugin="tabs">
    <div class="tab-headers">
        <button class="tab-title active" data-tab="tab1">Onglet 1</button>
        <button class="tab-title" data-tab="tab2">Onglet 2</button>
    </div>
    <div class="tab-contents">
        <div class="tab-content" data-tab-content="tab1">Contenu 1</div>
        <div class="tab-content hidden" data-tab-content="tab2">Contenu 2</div>
    </div>
</div>
```

### Carousel avec Navigation
```html
<div data-plugin="carousel" data-options='{"interval": 3000, "autoplay": true}'>
    <div class="carousel-slides">
        <div class="carousel-slide">Slide 1</div>
        <div class="carousel-slide">Slide 2</div>
    </div>
    <button class="carousel-prev">‹</button>
    <button class="carousel-next">›</button>
</div>
```

---

## 🔧 Configuration Avancée

### Options des Plugins
```html
<!-- Modal avec options avancées -->
<div data-plugin="modal" data-options='{
    "trigger": "#btn",
    "closeOnBackdrop": true,
    "closeOnEscape": true,
    "animation": "fade"
}'></div>

<!-- Carousel avec configuration -->
<div data-plugin="carousel" data-options='{
    "interval": 5000,
    "autoplay": true,
    "indicators": true,
    "pauseOnHover": true
}'></div>
```

### API JavaScript
```javascript
// Contrôler un plugin programmatiquement
const modal = document.querySelector('[data-plugin="modal"]');
const api = cubFirst.getAPI(modal, 'modal');

api.open();    // Ouvrir
api.close();   // Fermer
api.toggle();  // Basculer

// Écouter les événements
modal.addEventListener('modal:opened', () => {
    console.log('Modal ouverte !');
});
```

---

## 📱 Démonstrations Live

### 🎮 Playground Interactif
Testez tous les plugins cubFirst en temps réel :
- [Démonstrations Complètes](demos.html) - Interface interactive
- [Exemples par Catégorie](demos.html#interface) - Plugins groupés
- [Code Source Visible](demos.html#code-source) - Apprenez en regardant

### 🚀 Projets d'Exemple
- [Site Vitrine](getting-started.md#-projet-complet-10-minutes) - Site complet en 10 minutes
- [Dashboard](index.md#-exemples-avancés) - Interface d'administration
- [E-commerce](index.md#-exemples-avancés) - Boutique en ligne

---

## 🛠️ Développement

### Créer un Plugin Personnalisé
```javascript
function initMonPlugin(element, options) {
    const config = { ...defaultOptions, ...options };
    
    // Logique du plugin
    function setupPlugin() {
        // Votre code ici
    }
    
    // API publique
    element.monPluginAPI = {
        start: () => setupPlugin(),
        stop: () => cleanup(),
        update: (newOptions) => {
            Object.assign(config, newOptions);
            setupPlugin();
        }
    };
    
    setupPlugin();
}
```

### Intégration dans cubFirst
```javascript
// Ajouter au switch case principal
case 'mon-plugin': initMonPlugin(element, options); break;
```

---

## 📚 Ressources Supplémentaires

### 🔗 Liens Utiles
- [GitHub Repository](https://github.com/Romtouf/cubfirst) - Code source et issues
- [CDN jsDelivr](https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v1.0.0/dist/cubfirst.min.js) - Lien direct
- [Communauté](https://github.com/Romtouf/cubfirst/discussions) - Aide et discussions

### 📖 Documentation Externe
- [MDN Web Docs](https://developer.mozilla.org/) - Documentation web
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Can I Use](https://caniuse.com/) - Compatibilité navigateurs

### 🎓 Apprentissage
- [Tutoriels Fondamentaux](tutorials.md) - HTML, CSS, JavaScript
- [Guide de Démarrage](getting-started.md) - Premiers pas
- [Guide Avancé](advanced-guide.md) - Développement avancé

---

## 🤝 Contribution

### Comment Contribuer
1. **Fork** le repository GitHub
2. **Créez** une branche pour votre fonctionnalité
3. **Développez** votre plugin ou amélioration
4. **Testez** avec les exemples fournis
5. **Soumettez** une Pull Request

### Types de Contributions
- 🐛 **Bug fixes** - Correction de bugs
- ✨ **Nouveaux plugins** - Ajout de fonctionnalités
- 📚 **Documentation** - Amélioration des guides
- 🎨 **Exemples** - Nouveaux cas d'usage
- 🧪 **Tests** - Tests unitaires et d'intégration

---

## 📄 Licence

cubFirst est distribué sous licence **MIT**. Voir le fichier [LICENSE](../LICENSE) pour plus de détails.

---

## 🎉 Conclusion

Vous avez maintenant accès à toute la documentation cubFirst ! Choisissez le guide qui correspond à votre niveau et commencez à créer des interfaces web modernes sans JavaScript complexe.

### 🚀 Prochaines Étapes
1. **Commencez** par le [Guide de Démarrage](getting-started.md)
2. **Explorez** les [Démonstrations Interactives](demos.html)
3. **Consultez** la [Documentation Complète](index.md) pour référence
4. **Développez** vos propres plugins avec le [Guide Avancé](advanced-guide.md)

**Bon développement avec cubFirst ! 🎉**

---

<div class="text-center py-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
    <h2 class="text-3xl font-bold mb-4">🎯 Prêt à commencer ?</h2>
    <p class="text-xl mb-6">Choisissez votre niveau et commencez votre aventure cubFirst !</p>
    <div class="flex justify-center space-x-4">
        <a href="getting-started.md" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            🚀 Débuter
        </a>
        <a href="demos.html" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            🎮 Tester
        </a>
    </div>
</div>
