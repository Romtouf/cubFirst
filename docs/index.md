# 📚 Documentation Complète - cubFirst Framework

> **Le framework JavaScript HTML-first le plus simple au monde**  
> Aucun JavaScript à écrire - Tout se fait depuis le HTML avec des attributs `data-plugin`

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Romtouf/cubfirst)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![CDN](https://img.shields.io/badge/CDN-jsDelivr-orange.svg)](https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v1.0.0/dist/cubfirst.min.js)

> 📖 **Nouveau !** Consultez le [Centre de Ressources](README.md) pour une navigation complète de toute la documentation.

---

## 🎯 Table des Matières

- [🚀 Démarrage Rapide](#-démarrage-rapide)
- [📖 Concepts Fondamentaux](#-concepts-fondamentaux)
- [🧩 Guide Complet des Plugins](#-guide-complet-des-plugins)
- [🎨 Personnalisation & Styling](#-personnalisation--styling)
- [🔧 Développement Avancé](#-développement-avancé)
- [📱 Démonstrations Interactives](#-démonstrations-interactives)
- [❓ FAQ & Dépannage](#-faq--dépannage)

---

## 🚀 Démarrage Rapide

### Installation en 30 secondes

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Site avec cubFirst</title>
    
    <!-- 🎯 CubFirst - Un seul script ! -->
    <script
        src="https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v1.0.0/dist/cubfirst.min.js"
        defer
    ></script>
    
    <!-- 🎨 Tailwind CSS (optionnel mais recommandé) -->
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

### 🎯 Votre Premier Projet (5 minutes)

1. **Créez un fichier HTML** avec le script cubFirst
2. **Ajoutez un plugin** avec `data-plugin="nom-du-plugin"`
3. **Configurez** avec `data-options='{"param": "valeur"}'`
4. **Stylisez** avec vos classes CSS préférées
5. **Testez** dans votre navigateur !

---

## 📖 Concepts Fondamentaux

### 🧠 Philosophie HTML-First

cubFirst repose sur une approche révolutionnaire : **tout se fait depuis le HTML**. Pas besoin d'écrire du JavaScript, pas de configuration complexe, pas de build process.

```html
<!-- ❌ Approche traditionnelle -->
<script>
document.getElementById('btn').addEventListener('click', function() {
    // 50 lignes de code...
});
</script>

<!-- ✅ Approche cubFirst -->
<div data-plugin="modal" data-options='{"trigger": "#btn"}'>
    <!-- Votre contenu -->
</div>
```

### 🔧 Anatomie d'un Plugin

Chaque plugin cubFirst suit cette structure :

```html
<div 
    data-plugin="NOM_DU_PLUGIN"           <!-- 🎯 Type de plugin -->
    data-options='{"param1": "valeur"}'   <!-- ⚙️ Configuration -->
    class="vos-classes-css"               <!-- 🎨 Styling -->
>
    <!-- 📦 Contenu du plugin -->
</div>
```

### 📋 Types de Données dans `data-options`

| Type | Exemple | Description |
|------|---------|-------------|
| **String** | `"Hello World"` | Texte simple |
| **Number** | `3000` | Nombre (pas de guillemets) |
| **Boolean** | `true` ou `false` | Valeur logique |
| **Selector** | `"#mon-id"` | Sélecteur CSS |
| **Object** | `{"key": "value"}` | Objet JSON |
| **Array** | `["item1", "item2"]` | Tableau JSON |

### 🎨 Système de Classes CSS

cubFirst utilise un namespace `.cubfirst-` pour éviter les conflits :

```css
/* Classes utilitaires */
.cubfirst-hidden { display: none !important; }
.cubfirst-cursor-pointer { cursor: pointer; }

/* Classes de plugins */
.cubfirst-modal { /* Styles de modale */ }
.cubfirst-tabs { /* Styles d'onglets */ }
.cubfirst-accordion { /* Styles d'accordéon */ }
```

---

## 🧩 Guide Complet des Plugins

### 📊 Vue d'Ensemble (47 Plugins Disponibles)

| Catégorie | Plugins | Description |
|-----------|---------|-------------|
| **🎭 Interface** | modal, drawer, sidebar, sticky | Composants d'interface principaux |
| **📑 Navigation** | tabs, accordion, dropdown, breadcrumb | Systèmes de navigation |
| **📝 Formulaires** | input-mask, date-picker, file-upload, multi-select | Champs de saisie avancés |
| **🎨 Contrôles** | slider, switch, color-picker, rating | Éléments de contrôle |
| **📊 Données** | data-table, pagination, filter, search | Gestion de données |
| **🎬 Animation** | reveal, carousel, hover-preview, grid-expand | Effets visuels |
| **🔧 Utilitaires** | copy, toast, alert, confirm, loader | Outils pratiques |
| **📱 Mobile** | hamburger, swipe, touch-friendly | Optimisations mobiles |

---

### 🎭 Interface & Overlays

#### Modal - Fenêtres modales

```html
<!-- Exemple basique -->
<button id="ouvrir-modal" class="bg-blue-500 text-white px-4 py-2 rounded">
    Ouvrir Modal
</button>

<div data-plugin="modal" data-options='{"trigger": "#ouvrir-modal"}' class="hidden">
    <div class="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto">
        <h2 class="text-2xl font-bold mb-4">Titre de la Modal</h2>
        <p class="mb-4">Contenu de votre modal ici...</p>
        <button class="bg-gray-500 text-white px-4 py-2 rounded" onclick="this.closest('[data-plugin=modal]').style.display='none'">
            Fermer
        </button>
    </div>
</div>
```

**Options disponibles :**
```json
{
    "trigger": "#bouton",           // Sélecteur du bouton d'ouverture
    "closeOnBackdrop": true,        // Fermer en cliquant à l'extérieur
    "closeOnEscape": true,          // Fermer avec la touche Échap
    "animation": "fade",            // Type d'animation (fade, slide)
    "backdrop": true               // Afficher l'arrière-plan sombre
}
```

**API JavaScript :**
```javascript
// Ouvrir/fermer programmatiquement
const modal = document.querySelector('[data-plugin="modal"]');
const api = cubFirst.getAPI(modal, 'modal');

api.open();    // Ouvrir
api.close();   // Fermer
api.toggle();  // Basculer
```

#### Drawer - Tiroirs latéraux

```html
<button id="ouvrir-drawer" class="bg-green-500 text-white px-4 py-2 rounded">
    Ouvrir Drawer
</button>

<div data-plugin="drawer" data-options='{"trigger": "#ouvrir-drawer", "position": "right"}' class="hidden">
    <div class="bg-white h-full w-80 p-6 shadow-xl">
        <h2 class="text-xl font-bold mb-4">Menu Latéral</h2>
        <nav class="space-y-2">
            <a href="#" class="block py-2 hover:bg-gray-100">Accueil</a>
            <a href="#" class="block py-2 hover:bg-gray-100">À propos</a>
            <a href="#" class="block py-2 hover:bg-gray-100">Contact</a>
        </nav>
    </div>
</div>
```

**Options disponibles :**
```json
{
    "trigger": "#bouton",
    "position": "left|right|top|bottom",
    "width": "300px",
    "height": "400px",
    "closeOnBackdrop": true
}
```

---

### 📑 Navigation & Organisation

#### Tabs - Système d'onglets

```html
<div data-plugin="tabs" class="w-full">
    <!-- En-têtes des onglets -->
    <div class="flex border-b">
        <button class="tab-title px-4 py-2 border-b-2 border-blue-500 text-blue-600" data-tab="tab1">
            Premier Onglet
        </button>
        <button class="tab-title px-4 py-2" data-tab="tab2">
            Deuxième Onglet
        </button>
        <button class="tab-title px-4 py-2" data-tab="tab3">
            Troisième Onglet
        </button>
    </div>
    
    <!-- Contenu des onglets -->
    <div class="p-4">
        <div class="tab-content" data-tab-content="tab1">
            <h3 class="text-lg font-semibold mb-2">Contenu du premier onglet</h3>
            <p>Voici le contenu de votre premier onglet...</p>
        </div>
        
        <div class="tab-content hidden" data-tab-content="tab2">
            <h3 class="text-lg font-semibold mb-2">Contenu du deuxième onglet</h3>
            <p>Voici le contenu de votre deuxième onglet...</p>
        </div>
        
        <div class="tab-content hidden" data-tab-content="tab3">
            <h3 class="text-lg font-semibold mb-2">Contenu du troisième onglet</h3>
            <p>Voici le contenu de votre troisième onglet...</p>
        </div>
    </div>
</div>
```

**Options disponibles :**
```json
{
    "activeTab": "tab1",           // Onglet actif par défaut
    "animation": "fade",           // Animation de transition
    "autoHeight": true,            // Ajustement automatique de la hauteur
    "lazyLoad": false              // Chargement paresseux du contenu
}
```

#### Accordion - Accordéons

```html
<div data-plugin="accordion" class="space-y-2">
    <div class="border rounded">
        <button class="accordion-header w-full text-left p-4 bg-gray-50 hover:bg-gray-100" data-accordion="item1">
            <h3 class="font-semibold">Section 1</h3>
        </button>
        <div class="accordion-content hidden p-4 border-t">
            <p>Contenu de la première section de l'accordéon...</p>
        </div>
    </div>
    
    <div class="border rounded">
        <button class="accordion-header w-full text-left p-4 bg-gray-50 hover:bg-gray-100" data-accordion="item2">
            <h3 class="font-semibold">Section 2</h3>
        </button>
        <div class="accordion-content hidden p-4 border-t">
            <p>Contenu de la deuxième section de l'accordéon...</p>
        </div>
    </div>
</div>
```

**Options disponibles :**
```json
{
    "multiple": false,             // Permettre plusieurs sections ouvertes
    "animation": "slide",          // Type d'animation
    "duration": 300,               // Durée de l'animation (ms)
    "activeClass": "active"        // Classe CSS pour l'état actif
}
```

---

### 📝 Formulaires & Saisie

#### Input Mask - Masques de saisie

```html
<!-- Téléphone français -->
<input 
    type="tel" 
    data-plugin="input-mask" 
    data-options='{"type": "phone", "format": "+33 (0)X XX XX XX XX"}'
    placeholder="+33 (0)X XX XX XX XX"
    class="border rounded px-3 py-2 w-full"
>

<!-- Date -->
<input 
    type="text" 
    data-plugin="input-mask" 
    data-options='{"type": "date", "format": "DD/MM/YYYY"}'
    placeholder="JJ/MM/AAAA"
    class="border rounded px-3 py-2 w-full"
>

<!-- Carte bancaire -->
<input 
    type="text" 
    data-plugin="input-mask" 
    data-options='{"type": "card", "format": "XXXX XXXX XXXX XXXX"}'
    placeholder="1234 5678 9012 3456"
    class="border rounded px-3 py-2 w-full"
>
```

**Types de masques disponibles :**
- `phone` - Numéros de téléphone
- `date` - Dates (DD/MM/YYYY, MM/DD/YYYY)
- `card` - Cartes bancaires
- `currency` - Montants monétaires
- `custom` - Format personnalisé

#### Date Picker - Sélecteur de date

```html
<input 
    type="text" 
    data-plugin="date-picker"
    data-options='{"format": "DD/MM/YYYY", "locale": "fr", "minDate": "today"}'
    placeholder="Sélectionnez une date"
    class="border rounded px-3 py-2 w-full"
>
```

**Options disponibles :**
```json
{
    "format": "DD/MM/YYYY",        // Format d'affichage
    "locale": "fr",                // Langue (fr, en, es, de)
    "minDate": "today",            // Date minimum
    "maxDate": "2025-12-31",       // Date maximum
    "disabledDates": ["2024-12-25"], // Dates désactivées
    "firstDayOfWeek": 1,           // Premier jour de la semaine (1=lundi)
    "showToday": true,             // Bouton "Aujourd'hui"
    "showClear": true              // Bouton "Effacer"
}
```

#### File Upload - Upload de fichiers

```html
<div data-plugin="file-upload" data-options='{"multiple": true, "maxSize": "5MB", "accept": "image/*"}'>
    <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <div class="upload-area">
            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p class="mt-2 text-sm text-gray-600">
                <span class="font-medium">Cliquez pour télécharger</span> ou glissez-déposez
            </p>
            <p class="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 5MB</p>
        </div>
        <div class="file-list mt-4 hidden">
            <!-- Liste des fichiers sélectionnés -->
        </div>
    </div>
</div>
```

---

### 🎨 Contrôles & Interactions

#### Rating - Système d'étoiles

```html
<!-- Évaluation simple -->
<div data-plugin="rating" data-options='{"value": 3.5, "max": 5, "readonly": false}'></div>

<!-- Évaluation avec labels -->
<div data-plugin="rating" data-options='{"value": 0, "max": 5, "labels": ["Terrible", "Mauvais", "Moyen", "Bien", "Excellent"]}'></div>

<!-- Évaluation en mode lecture seule -->
<div data-plugin="rating" data-options='{"value": 4, "max": 5, "readonly": true}'></div>
```

**Options disponibles :**
```json
{
    "value": 0,                    // Note initiale
    "max": 5,                      // Note maximale
    "readonly": false,             // Mode lecture seule
    "labels": ["Label1", "Label2"], // Labels personnalisés
    "size": "medium",              // Taille (small, medium, large)
    "color": "#fbbf24",            // Couleur des étoiles
    "halfRatings": true            // Permettre les demi-notes
}
```

#### Slider - Curseur de valeur

```html
<div data-plugin="slider" data-options='{"min": 0, "max": 100, "value": 50, "step": 1}'>
    <div class="slider-container">
        <input type="range" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
        <div class="slider-value text-center mt-2 font-semibold">50</div>
    </div>
</div>
```

#### Switch - Interrupteur

```html
<div data-plugin="switch" data-options='{"checked": false, "size": "medium"}'>
    <label class="flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only">
        <div class="switch-track bg-gray-300 rounded-full p-1 transition-colors">
            <div class="switch-thumb bg-white rounded-full shadow transition-transform"></div>
        </div>
        <span class="ml-3 text-sm font-medium">Activer les notifications</span>
    </label>
</div>
```

---

### 📊 Données & Tableaux

#### Data Table - Tableau de données

```html
<div data-plugin="data-table" data-options='{"searchable": true, "sortable": true, "pagination": true}'>
    <table class="w-full border-collapse border border-gray-300">
        <thead>
            <tr class="bg-gray-100">
                <th class="border border-gray-300 px-4 py-2">Nom</th>
                <th class="border border-gray-300 px-4 py-2">Email</th>
                <th class="border border-gray-300 px-4 py-2">Âge</th>
                <th class="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-gray-300 px-4 py-2">Jean Dupont</td>
                <td class="border border-gray-300 px-4 py-2">jean@example.com</td>
                <td class="border border-gray-300 px-4 py-2">25</td>
                <td class="border border-gray-300 px-4 py-2">
                    <button class="text-blue-600 hover:underline">Modifier</button>
                </td>
            </tr>
            <!-- Plus de lignes... -->
        </tbody>
    </table>
</div>
```

#### Pagination - Pagination

```html
<div data-plugin="pagination" data-options='{"totalPages": 10, "currentPage": 1, "showNumbers": true}'>
    <nav class="flex justify-center space-x-2">
        <button class="px-3 py-2 border rounded hover:bg-gray-100" data-page="prev">Précédent</button>
        <div class="page-numbers flex space-x-1">
            <!-- Les numéros de page seront générés automatiquement -->
        </div>
        <button class="px-3 py-2 border rounded hover:bg-gray-100" data-page="next">Suivant</button>
    </nav>
</div>
```

---

### 🎬 Animations & Effets

#### Reveal - Animation d'apparition

```html
<div data-plugin="reveal" data-options='{"animation": "fadeInUp", "delay": 200, "duration": 600}'>
    <div class="bg-blue-100 p-6 rounded-lg">
        <h3 class="text-xl font-bold mb-2">Contenu animé</h3>
        <p>Ce contenu apparaîtra avec une animation quand il sera visible dans le viewport.</p>
    </div>
</div>

<div data-plugin="reveal" data-options='{"animation": "slideInLeft", "delay": 400}'>
    <div class="bg-green-100 p-6 rounded-lg">
        <h3 class="text-xl font-bold mb-2">Autre contenu animé</h3>
        <p>Ce contenu aura une animation différente et un délai plus long.</p>
    </div>
</div>
```

**Animations disponibles :**
- `fadeIn` - Apparition en fondu
- `fadeInUp` - Apparition en fondu vers le haut
- `fadeInDown` - Apparition en fondu vers le bas
- `slideInLeft` - Glissement depuis la gauche
- `slideInRight` - Glissement depuis la droite
- `zoomIn` - Zoom d'apparition
- `bounceIn` - Apparition avec rebond

#### Carousel - Carrousel

```html
<div data-plugin="carousel" data-options='{"interval": 3000, "autoplay": true, "indicators": true}'>
    <div class="carousel-container relative overflow-hidden rounded-lg">
        <div class="carousel-slides flex">
            <div class="carousel-slide w-full flex-shrink-0 bg-blue-100 p-8 text-center">
                <h3 class="text-2xl font-bold mb-4">Slide 1</h3>
                <p>Contenu du premier slide</p>
            </div>
            <div class="carousel-slide w-full flex-shrink-0 bg-green-100 p-8 text-center">
                <h3 class="text-2xl font-bold mb-4">Slide 2</h3>
                <p>Contenu du deuxième slide</p>
            </div>
            <div class="carousel-slide w-full flex-shrink-0 bg-purple-100 p-8 text-center">
                <h3 class="text-2xl font-bold mb-4">Slide 3</h3>
                <p>Contenu du troisième slide</p>
            </div>
        </div>
        
        <!-- Contrôles de navigation -->
        <button class="carousel-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2">
            ‹
        </button>
        <button class="carousel-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2">
            ›
        </button>
        
        <!-- Indicateurs -->
        <div class="carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button class="w-3 h-3 rounded-full bg-white bg-opacity-75 hover:bg-opacity-100" data-slide="0"></button>
            <button class="w-3 h-3 rounded-full bg-white bg-opacity-50" data-slide="1"></button>
            <button class="w-3 h-3 rounded-full bg-white bg-opacity-50" data-slide="2"></button>
        </div>
    </div>
</div>
```

---

### 🔧 Utilitaires & Outils

#### Toast - Notifications temporaires

```html
<!-- Bouton pour déclencher un toast -->
<button id="show-toast" class="bg-green-500 text-white px-4 py-2 rounded">
    Afficher Toast
</button>

<!-- Le toast sera créé dynamiquement -->
<div data-plugin="toast" data-options='{"trigger": "#show-toast", "message": "Opération réussie !", "type": "success"}'></div>
```

**Types de toast disponibles :**
- `success` - Succès (vert)
- `error` - Erreur (rouge)
- `warning` - Avertissement (orange)
- `info` - Information (bleu)

#### Copy - Copie dans le presse-papiers

```html
<div data-plugin="copy" data-options='{"text": "Texte à copier", "successMessage": "Copié !"}'>
    <button class="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
        Copier le texte
    </button>
</div>
```

#### Loader - Indicateur de chargement

```html
<div data-plugin="loader" data-options='{"type": "spinner", "size": "medium", "color": "#3b82f6"}'>
    <div class="loader-container flex justify-center items-center p-8">
        <!-- Le loader sera généré automatiquement -->
    </div>
</div>
```

**Types de loader disponibles :**
- `spinner` - Spinner classique
- `dots` - Points animés
- `pulse` - Pulsation
- `bars` - Barres animées

---

## 🎨 Personnalisation & Styling

### 🎯 Approche CSS-First

cubFirst est conçu pour être stylisé avec n'importe quel framework CSS. Voici comment personnaliser l'apparence :

#### Avec Tailwind CSS (Recommandé)

```html
<div data-plugin="modal" data-options='{"trigger": "#btn"}'>
    <div class="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-2xl shadow-2xl">
        <h2 class="text-3xl font-bold text-white mb-4">Modal Personnalisée</h2>
        <p class="text-white opacity-90">Contenu avec un style moderne</p>
    </div>
</div>
```

#### Avec CSS Personnalisé

```css
/* Styles personnalisés pour les modales */
.custom-modal .cubfirst-modal-content {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

.custom-modal .cubfirst-modal-close {
    color: white;
    font-size: 28px;
    top: 15px;
    right: 20px;
}
```

### 🎨 Thèmes et Variables CSS

```css
:root {
    /* Variables cubFirst personnalisables */
    --cubfirst-primary: #3b82f6;
    --cubfirst-secondary: #6b7280;
    --cubfirst-success: #10b981;
    --cubfirst-warning: #f59e0b;
    --cubfirst-error: #ef4444;
    
    /* Espacement */
    --cubfirst-spacing-xs: 0.25rem;
    --cubfirst-spacing-sm: 0.5rem;
    --cubfirst-spacing-md: 1rem;
    --cubfirst-spacing-lg: 1.5rem;
    --cubfirst-spacing-xl: 2rem;
    
    /* Bordures */
    --cubfirst-border-radius: 0.375rem;
    --cubfirst-border-width: 1px;
    
    /* Ombres */
    --cubfirst-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --cubfirst-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --cubfirst-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

### 📱 Responsive Design

cubFirst inclut des classes utilitaires pour le responsive :

```html
<!-- Masquer sur mobile -->
<div class="cubfirst-mobile-hidden">
    Contenu visible sur tablette et desktop
</div>

<!-- Masquer sur tablette -->
<div class="cubfirst-tablet-hidden">
    Contenu visible sur mobile et desktop
</div>

<!-- Masquer sur desktop -->
<div class="cubfirst-desktop-hidden">
    Contenu visible sur mobile et tablette
</div>
```

---

## 🔧 Développement Avancé

### 🚀 API JavaScript

cubFirst expose une API JavaScript complète pour contrôler les plugins programmatiquement :

```javascript
// Initialiser un plugin manuellement
cubFirst.init(element, options);

// Obtenir l'API d'un plugin
const api = cubFirst.getAPI(element, 'modal');

// Exemples d'utilisation
api.open();           // Ouvrir la modal
api.close();          // Fermer la modal
api.toggle();         // Basculer l'état

// Écouter les événements
element.addEventListener('modal:opened', (e) => {
    console.log('Modal ouverte !');
});
```

### 🎯 Événements Personnalisés

Chaque plugin émet des événements que vous pouvez écouter :

```javascript
// Événements de modal
element.addEventListener('modal:opened', handler);
element.addEventListener('modal:closed', handler);

// Événements de carousel
element.addEventListener('carousel:slideChanged', handler);
element.addEventListener('carousel:autoplayStarted', handler);

// Événements de tabs
element.addEventListener('tabs:tabChanged', handler);
```

### 🛠️ Créer un Plugin Personnalisé

```javascript
// Définir votre plugin
function initMonPlugin(element, options) {
    // Configuration par défaut
    const config = {
        message: 'Hello World',
        duration: 3000,
        ...options
    };
    
    // Logique du plugin
    function showMessage() {
        const toast = document.createElement('div');
        toast.className = 'fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded';
        toast.textContent = config.message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, config.duration);
    }
    
    // API publique
    element.monPluginAPI = {
        show: showMessage,
        hide: () => console.log('Hide not implemented')
    };
    
    // Initialisation
    showMessage();
}

// Ajouter au système cubFirst
// (À ajouter dans le switch case principal)
case 'mon-plugin': initMonPlugin(element, options); break;
```

### 🔄 Gestion de la Mémoire

cubFirst inclut un système de nettoyage automatique :

```javascript
// Nettoyage automatique lors de la suppression d'éléments
const cleanupManager = new CleanupManager();

// Ajouter des nettoyages
cleanupManager.add(() => {
    // Code de nettoyage
    eventListeners.forEach(listener => {
        element.removeEventListener(listener.event, listener.handler);
    });
});
```

---

## 📱 Démonstrations Interactives

### 🎮 Playground en Ligne

Testez cubFirst directement dans votre navigateur :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cubFirst Playground</title>
    <script src="https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v1.0.0/dist/cubfirst.min.js" defer></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto space-y-8">
        <h1 class="text-4xl font-bold text-center mb-8">🎮 cubFirst Playground</h1>
        
        <!-- Modal Demo -->
        <section class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-2xl font-semibold mb-4">Modal Demo</h2>
            <button id="modal-demo" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Ouvrir Modal
            </button>
            <div data-plugin="modal" data-options='{"trigger": "#modal-demo"}' class="hidden">
                <div class="bg-white p-6 rounded-lg shadow-xl max-w-md">
                    <h3 class="text-xl font-bold mb-4">Modal de Démonstration</h3>
                    <p class="mb-4">Ceci est une modal créée avec cubFirst !</p>
                    <button class="bg-gray-500 text-white px-4 py-2 rounded" onclick="this.closest('[data-plugin=modal]').style.display='none'">
                        Fermer
                    </button>
                </div>
            </div>
        </section>
        
        <!-- Tabs Demo -->
        <section class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-2xl font-semibold mb-4">Tabs Demo</h2>
            <div data-plugin="tabs">
                <div class="flex border-b">
                    <button class="tab-title px-4 py-2 border-b-2 border-blue-500 text-blue-600" data-tab="tab1">
                        Premier
                    </button>
                    <button class="tab-title px-4 py-2" data-tab="tab2">
                        Deuxième
                    </button>
                    <button class="tab-title px-4 py-2" data-tab="tab3">
                        Troisième
                    </button>
                </div>
                <div class="p-4">
                    <div class="tab-content" data-tab-content="tab1">
                        <h3 class="text-lg font-semibold mb-2">Contenu du premier onglet</h3>
                        <p>Voici le contenu de votre premier onglet...</p>
                    </div>
                    <div class="tab-content hidden" data-tab-content="tab2">
                        <h3 class="text-lg font-semibold mb-2">Contenu du deuxième onglet</h3>
                        <p>Voici le contenu de votre deuxième onglet...</p>
                    </div>
                    <div class="tab-content hidden" data-tab-content="tab3">
                        <h3 class="text-lg font-semibold mb-2">Contenu du troisième onglet</h3>
                        <p>Voici le contenu de votre troisième onglet...</p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Rating Demo -->
        <section class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-2xl font-semibold mb-4">Rating Demo</h2>
            <div data-plugin="rating" data-options='{"value": 0, "max": 5, "labels": ["Terrible", "Mauvais", "Moyen", "Bien", "Excellent"]}'></div>
        </section>
        
        <!-- Carousel Demo -->
        <section class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-2xl font-semibold mb-4">Carousel Demo</h2>
            <div data-plugin="carousel" data-options='{"interval": 3000, "autoplay": true, "indicators": true}'>
                <div class="carousel-container relative overflow-hidden rounded-lg h-64">
                    <div class="carousel-slides flex h-full">
                        <div class="carousel-slide w-full flex-shrink-0 bg-blue-100 flex items-center justify-center">
                            <div class="text-center">
                                <h3 class="text-2xl font-bold mb-2">Slide 1</h3>
                                <p>Premier slide du carousel</p>
                            </div>
                        </div>
                        <div class="carousel-slide w-full flex-shrink-0 bg-green-100 flex items-center justify-center">
                            <div class="text-center">
                                <h3 class="text-2xl font-bold mb-2">Slide 2</h3>
                                <p>Deuxième slide du carousel</p>
                            </div>
                        </div>
                        <div class="carousel-slide w-full flex-shrink-0 bg-purple-100 flex items-center justify-center">
                            <div class="text-center">
                                <h3 class="text-2xl font-bold mb-2">Slide 3</h3>
                                <p>Troisième slide du carousel</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2">
                        ‹
                    </button>
                    <button class="carousel-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2">
                        ›
                    </button>
                    <div class="carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        <button class="w-3 h-3 rounded-full bg-white bg-opacity-75" data-slide="0"></button>
                        <button class="w-3 h-3 rounded-full bg-white bg-opacity-50" data-slide="1"></button>
                        <button class="w-3 h-3 rounded-full bg-white bg-opacity-50" data-slide="2"></button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</body>
</html>
```

---

## ❓ FAQ & Dépannage

### 🤔 Questions Fréquentes

**Q: Puis-je utiliser cubFirst avec React/Vue/Angular ?**
R: Absolument ! cubFirst est framework-agnostic et fonctionne avec n'importe quel framework JavaScript.

**Q: Est-ce que cubFirst est accessible ?**
R: Oui, cubFirst respecte les standards d'accessibilité et peut être étendu avec des attributs ARIA.

**Q: Puis-je personnaliser les styles ?**
R: Complètement ! cubFirst n'impose aucun style visuel, vous avez le contrôle total.

**Q: Est-ce que cubFirst fonctionne sur mobile ?**
R: Oui, cubFirst est entièrement responsive et optimisé pour mobile.

**Q: Puis-je créer mes propres plugins ?**
R: Bien sûr ! L'architecture est extensible et documentée.

### 🐛 Dépannage Courant

**Problème : Le plugin ne s'initialise pas**
```html
<!-- ❌ Mauvaise syntaxe -->
<div data-plugin="modal" data-options="trigger: #btn"></div>

<!-- ✅ Bonne syntaxe -->
<div data-plugin="modal" data-options='{"trigger": "#btn"}'></div>
```

**Problème : Les styles ne s'appliquent pas**
```css
/* Assurez-vous que le script cubFirst est chargé avant vos styles */
.cubfirst-modal {
    /* Vos styles personnalisés */
}
```

**Problème : Les événements ne fonctionnent pas**
```javascript
// Attendez que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Votre code ici
});
```

### 📞 Support & Communauté

- **GitHub Issues** : [Signaler un bug](https://github.com/Romtouf/cubfirst/issues)
- **Discussions** : [Poser une question](https://github.com/Romtouf/cubfirst/discussions)
- **Documentation** : [Guide complet](https://github.com/Romtouf/cubfirst/wiki)

---

## 🎉 Conclusion

cubFirst révolutionne le développement web en proposant une approche **HTML-first** simple et puissante. Avec 47+ plugins prêts à l'emploi, vous pouvez créer des interfaces modernes sans écrire une seule ligne de JavaScript !

### 🚀 Prochaines Étapes

1. **Installez cubFirst** dans votre projet
2. **Explorez les plugins** avec les démos interactives
3. **Personnalisez** avec vos styles CSS
4. **Développez** vos propres plugins si nécessaire
5. **Partagez** vos créations avec la communauté !

---

<div class="text-center py-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
    <h2 class="text-3xl font-bold mb-4">🎯 Prêt à commencer ?</h2>
    <p class="text-xl mb-6">Ajoutez cubFirst à votre projet en 30 secondes !</p>
    <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Commencer maintenant
    </button>
</div>

---

**Développé avec ❤️ par [Romtouf](https://github.com/Romtouf)**  
*Framework open-source sous licence MIT*