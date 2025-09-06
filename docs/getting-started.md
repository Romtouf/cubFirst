# 🚀 Guide de Démarrage Rapide - cubFirst

> **Apprenez à utiliser cubFirst en 15 minutes !**  
> Ce guide vous accompagne étape par étape pour créer votre premier projet avec cubFirst.

---

## 📋 Table des Matières

- [⚡ Installation Express (2 minutes)](#-installation-express-2-minutes)
- [🎯 Votre Premier Plugin (5 minutes)](#-votre-premier-plugin-5-minutes)
- [🎨 Stylisation avec Tailwind (3 minutes)](#-stylisation-avec-tailwind-3-minutes)
- [🔧 Configuration Avancée (5 minutes)](#-configuration-avancée-5-minutes)
- [📱 Projet Complet (10 minutes)](#-projet-complet-10-minutes)

---

## ⚡ Installation Express (2 minutes)

### Méthode 1 : CDN (Recommandée)

Créez un fichier `index.html` et ajoutez cubFirst :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Premier Projet cubFirst</title>
    
    <!-- 🎯 CubFirst - Un seul script ! -->
    <script
        src="https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v1.0.0/dist/cubfirst.min.js"
        defer
    ></script>
    
    <!-- 🎨 Tailwind CSS (optionnel mais recommandé) -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <h1>Mon Premier Projet cubFirst</h1>
    <!-- Votre contenu ici -->
</body>
</html>
```

### Méthode 2 : Téléchargement Local

1. **Téléchargez** le fichier `cubfirst.min.js` depuis [GitHub](https://github.com/Romtouf/cubfirst)
2. **Placez-le** dans votre dossier de projet
3. **Incluez-le** dans votre HTML :

```html
<script src="cubfirst.min.js" defer></script>
```

### ✅ Vérification de l'Installation

Ouvrez la console de votre navigateur (F12) et tapez :

```javascript
console.log(typeof cubFirst); // Devrait afficher "object"
```

Si vous voyez `"object"`, cubFirst est correctement installé ! 🎉

---

## 🎯 Votre Premier Plugin (5 minutes)

### Étape 1 : Créer une Modal Simple

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premier Plugin cubFirst</title>
    <script src="https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v1.0.0/dist/cubfirst.min.js" defer></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-8">
    <div class="max-w-md mx-auto">
        <!-- Bouton pour ouvrir la modal -->
        <button 
            id="ouvrir-modal" 
            class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
            Cliquez-moi !
        </button>
        
        <!-- Modal cubFirst -->
        <div 
            data-plugin="modal" 
            data-options='{"trigger": "#ouvrir-modal"}' 
            class="hidden"
        >
            <div class="bg-white p-8 rounded-xl shadow-2xl max-w-sm mx-auto">
                <h2 class="text-2xl font-bold mb-4 text-gray-800">
                    🎉 Félicitations !
                </h2>
                <p class="text-gray-600 mb-6">
                    Vous venez de créer votre première modal avec cubFirst !
                </p>
                <button 
                    class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
                    onclick="this.closest('[data-plugin=modal]').style.display='none'"
                >
                    Fermer
                </button>
            </div>
        </div>
    </div>
</body>
</html>
```

### 🎯 Explication du Code

```html
<!-- 1. Bouton déclencheur -->
<button id="ouvrir-modal">Cliquez-moi !</button>

<!-- 2. Modal avec plugin cubFirst -->
<div 
    data-plugin="modal"                    <!-- Type de plugin -->
    data-options='{"trigger": "#ouvrir-modal"}'  <!-- Configuration -->
    class="hidden"                         <!-- Masquée par défaut -->
>
    <!-- 3. Contenu de la modal -->
    <div class="modal-content">...</div>
</div>
```

### Étape 2 : Ajouter un Système d'Onglets

```html
<div data-plugin="tabs" class="w-full">
    <!-- En-têtes des onglets -->
    <div class="flex border-b">
        <button class="tab-title px-4 py-2 border-b-2 border-blue-500 text-blue-600" data-tab="accueil">
            🏠 Accueil
        </button>
        <button class="tab-title px-4 py-2 text-gray-600 hover:text-blue-600" data-tab="profil">
            👤 Profil
        </button>
        <button class="tab-title px-4 py-2 text-gray-600 hover:text-blue-600" data-tab="parametres">
            ⚙️ Paramètres
        </button>
    </div>
    
    <!-- Contenu des onglets -->
    <div class="p-6">
        <div class="tab-content" data-tab-content="accueil">
            <h3 class="text-xl font-semibold mb-4">Page d'Accueil</h3>
            <p>Bienvenue sur votre site !</p>
        </div>
        
        <div class="tab-content hidden" data-tab-content="profil">
            <h3 class="text-xl font-semibold mb-4">Mon Profil</h3>
            <p>Informations personnelles...</p>
        </div>
        
        <div class="tab-content hidden" data-tab-content="parametres">
            <h3 class="text-xl font-semibold mb-4">Paramètres</h3>
            <p>Configuration de votre compte...</p>
        </div>
    </div>
</div>
```

### Étape 3 : Créer un Carousel

```html
<div data-plugin="carousel" data-options='{"interval": 3000, "autoplay": true}'>
    <div class="carousel-container relative overflow-hidden rounded-lg h-64">
        <div class="carousel-slides flex h-full">
            <div class="carousel-slide w-full flex-shrink-0 bg-blue-100 flex items-center justify-center">
                <div class="text-center">
                    <h3 class="text-2xl font-bold">Slide 1</h3>
                    <p>Premier slide</p>
                </div>
            </div>
            <div class="carousel-slide w-full flex-shrink-0 bg-green-100 flex items-center justify-center">
                <div class="text-center">
                    <h3 class="text-2xl font-bold">Slide 2</h3>
                    <p>Deuxième slide</p>
                </div>
            </div>
        </div>
        
        <!-- Contrôles -->
        <button class="carousel-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2">
            ‹
        </button>
        <button class="carousel-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2">
            ›
        </button>
    </div>
</div>
```

---

## 🎨 Stylisation avec Tailwind (3 minutes)

### Configuration Tailwind Personnalisée

Créez un fichier `tailwind.config.js` :

```javascript
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cubfirst': {
          'primary': '#3b82f6',
          'secondary': '#6b7280',
          'success': '#10b981',
          'warning': '#f59e0b',
          'error': '#ef4444',
        }
      }
    },
  },
  plugins: [],
}
```

### Classes CSS Personnalisées

```css
/* styles.css */
.cubfirst-btn {
    @apply px-4 py-2 rounded-lg font-semibold transition-colors;
}

.cubfirst-btn-primary {
    @apply bg-blue-500 text-white hover:bg-blue-600;
}

.cubfirst-btn-secondary {
    @apply bg-gray-500 text-white hover:bg-gray-600;
}

.cubfirst-card {
    @apply bg-white rounded-lg shadow-lg p-6;
}

.cubfirst-modal-content {
    @apply bg-white rounded-xl shadow-2xl p-8 max-w-md mx-auto;
}
```

### Utilisation des Classes

```html
<!-- Boutons stylisés -->
<button class="cubfirst-btn cubfirst-btn-primary">
    Bouton Principal
</button>

<button class="cubfirst-btn cubfirst-btn-secondary">
    Bouton Secondaire
</button>

<!-- Card stylisée -->
<div class="cubfirst-card">
    <h3 class="text-xl font-bold mb-4">Titre de la Card</h3>
    <p>Contenu de la card avec un style cohérent.</p>
</div>
```

---

## 🔧 Configuration Avancée (5 minutes)

### Options des Plugins

Chaque plugin accepte des options via `data-options` :

```html
<!-- Modal avec options avancées -->
<div 
    data-plugin="modal" 
    data-options='{
        "trigger": "#btn",
        "closeOnBackdrop": true,
        "closeOnEscape": true,
        "animation": "fade"
    }'
>
    <!-- Contenu -->
</div>

<!-- Carousel avec options -->
<div 
    data-plugin="carousel" 
    data-options='{
        "interval": 5000,
        "autoplay": true,
        "indicators": true,
        "pauseOnHover": true
    }'
>
    <!-- Contenu -->
</div>

<!-- Rating avec options -->
<div 
    data-plugin="rating" 
    data-options='{
        "value": 0,
        "max": 5,
        "labels": ["Terrible", "Mauvais", "Moyen", "Bien", "Excellent"],
        "readonly": false
    }'
></div>
```

### API JavaScript

Contrôlez vos plugins programmatiquement :

```javascript
// Obtenir l'API d'un plugin
const modal = document.querySelector('[data-plugin="modal"]');
const modalAPI = cubFirst.getAPI(modal, 'modal');

// Contrôler la modal
modalAPI.open();    // Ouvrir
modalAPI.close();   // Fermer
modalAPI.toggle();  // Basculer

// Écouter les événements
modal.addEventListener('modal:opened', () => {
    console.log('Modal ouverte !');
});

modal.addEventListener('modal:closed', () => {
    console.log('Modal fermée !');
});
```

### Événements Personnalisés

```javascript
// Événements de carousel
carousel.addEventListener('carousel:slideChanged', (e) => {
    console.log('Nouveau slide :', e.detail.currentSlide);
});

// Événements de tabs
tabs.addEventListener('tabs:tabChanged', (e) => {
    console.log('Nouvel onglet :', e.detail.activeTab);
});

// Événements de rating
rating.addEventListener('rating:changed', (e) => {
    console.log('Nouvelle note :', e.detail.value);
});
```

---

## 📱 Projet Complet (10 minutes)

Créons un mini-site complet avec cubFirst :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Site cubFirst</title>
    <script src="https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v1.0.0/dist/cubfirst.min.js" defer></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .hero-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <h1 class="text-2xl font-bold text-blue-600">Mon Site cubFirst</h1>
                </div>
                <div class="flex items-center space-x-4">
                    <a href="#accueil" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Accueil</a>
                    <a href="#services" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                    <a href="#contact" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    <button id="menu-mobile" class="md:hidden bg-blue-500 text-white px-4 py-2 rounded">
                        Menu
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="accueil" class="hero-bg text-white py-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl font-bold mb-6">Bienvenue sur Mon Site</h1>
            <p class="text-xl mb-8">Créé avec cubFirst - Aucun JavaScript requis !</p>
            <button id="cta-button" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Découvrir
            </button>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center mb-12">Nos Services</h2>
            
            <!-- Tabs pour les services -->
            <div data-plugin="tabs" class="w-full">
                <div class="flex justify-center border-b">
                    <button class="tab-title px-6 py-3 border-b-2 border-blue-500 text-blue-600 font-semibold" data-tab="web">
                        🌐 Développement Web
                    </button>
                    <button class="tab-title px-6 py-3 text-gray-600 hover:text-blue-600" data-tab="mobile">
                        📱 Applications Mobile
                    </button>
                    <button class="tab-title px-6 py-3 text-gray-600 hover:text-blue-600" data-tab="design">
                        🎨 Design UI/UX
                    </button>
                </div>
                
                <div class="p-8">
                    <div class="tab-content" data-tab-content="web">
                        <div class="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-2xl font-semibold mb-4">Développement Web</h3>
                                <p class="text-gray-600 mb-6">Création de sites web modernes et responsives avec les dernières technologies.</p>
                                <ul class="space-y-2 text-gray-600">
                                    <li>✅ Sites vitrine</li>
                                    <li>✅ E-commerce</li>
                                    <li>✅ Applications web</li>
                                    <li>✅ API REST</li>
                                </ul>
                            </div>
                            <div class="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                                <div class="text-center">
                                    <div class="text-4xl mb-4">💻</div>
                                    <p class="text-gray-600">Illustration du service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-content hidden" data-tab-content="mobile">
                        <div class="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-2xl font-semibold mb-4">Applications Mobile</h3>
                                <p class="text-gray-600 mb-6">Développement d'applications mobiles natives et cross-platform.</p>
                                <ul class="space-y-2 text-gray-600">
                                    <li>✅ iOS & Android</li>
                                    <li>✅ React Native</li>
                                    <li>✅ Flutter</li>
                                    <li>✅ PWA</li>
                                </ul>
                            </div>
                            <div class="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                                <div class="text-center">
                                    <div class="text-4xl mb-4">📱</div>
                                    <p class="text-gray-600">Illustration du service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-content hidden" data-tab-content="design">
                        <div class="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-2xl font-semibold mb-4">Design UI/UX</h3>
                                <p class="text-gray-600 mb-6">Conception d'interfaces utilisateur intuitives et esthétiques.</p>
                                <ul class="space-y-2 text-gray-600">
                                    <li>✅ Wireframes</li>
                                    <li>✅ Prototypes</li>
                                    <li>✅ Design System</li>
                                    <li>✅ Tests utilisateurs</li>
                                </ul>
                            </div>
                            <div class="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                                <div class="text-center">
                                    <div class="text-4xl mb-4">🎨</div>
                                    <p class="text-gray-600">Illustration du service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Carousel -->
    <section class="py-16 bg-gray-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center mb-12">Nos Réalisations</h2>
            
            <div data-plugin="carousel" data-options='{"interval": 4000, "autoplay": true, "indicators": true}'>
                <div class="carousel-container relative overflow-hidden rounded-lg">
                    <div class="carousel-slides flex">
                        <div class="carousel-slide w-full flex-shrink-0 bg-white p-8">
                            <div class="text-center">
                                <div class="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <span class="text-4xl">🌐</span>
                                </div>
                                <h3 class="text-2xl font-bold mb-4">Site E-commerce</h3>
                                <p class="text-gray-600">Plateforme de vente en ligne avec panier et paiement sécurisé.</p>
                            </div>
                        </div>
                        <div class="carousel-slide w-full flex-shrink-0 bg-white p-8">
                            <div class="text-center">
                                <div class="w-32 h-32 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <span class="text-4xl">📱</span>
                                </div>
                                <h3 class="text-2xl font-bold mb-4">App Mobile</h3>
                                <p class="text-gray-600">Application mobile de gestion de tâches avec synchronisation cloud.</p>
                            </div>
                        </div>
                        <div class="carousel-slide w-full flex-shrink-0 bg-white p-8">
                            <div class="text-center">
                                <div class="w-32 h-32 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <span class="text-4xl">🎨</span>
                                </div>
                                <h3 class="text-2xl font-bold mb-4">Design System</h3>
                                <p class="text-gray-600">Système de design complet pour une marque internationale.</p>
                            </div>
                        </div>
                    </div>
                    
                    <button class="carousel-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-3">
                        ‹
                    </button>
                    <button class="carousel-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-3">
                        ›
                    </button>
                    
                    <div class="carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        <button class="w-3 h-3 rounded-full bg-white bg-opacity-75" data-slide="0"></button>
                        <button class="w-3 h-3 rounded-full bg-white bg-opacity-50" data-slide="1"></button>
                        <button class="w-3 h-3 rounded-full bg-white bg-opacity-50" data-slide="2"></button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
            
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Formulaire de contact -->
                <div>
                    <form data-plugin="contact-form" data-options='{"action": "/api/contact", "method": "POST"}'>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                                <input type="text" name="name" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input type="email" name="email" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea name="message" rows="4" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                                Envoyer le message
                            </button>
                        </div>
                    </form>
                </div>
                
                <!-- Informations de contact -->
                <div class="space-y-6">
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span class="text-blue-600">📧</span>
                        </div>
                        <div>
                            <h3 class="font-semibold">Email</h3>
                            <p class="text-gray-600">contact@monsite.com</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <span class="text-green-600">📞</span>
                        </div>
                        <div>
                            <h3 class="font-semibold">Téléphone</h3>
                            <p class="text-gray-600">+33 1 23 45 67 89</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                            <span class="text-purple-600">📍</span>
                        </div>
                        <div>
                            <h3 class="font-semibold">Adresse</h3>
                            <p class="text-gray-600">123 Rue de la Paix<br>75001 Paris, France</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 class="text-2xl font-bold mb-4">Merci d'avoir visité notre site !</h3>
            <p class="text-gray-300 mb-6">Entièrement créé avec cubFirst - Aucun JavaScript personnalisé requis</p>
            <div class="flex justify-center space-x-4">
                <button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    Voir le Code Source
                </button>
                <button class="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors">
                    Documentation
                </button>
            </div>
        </div>
    </footer>

    <!-- Modales -->
    <div data-plugin="modal" data-options='{"trigger": "#cta-button"}' class="hidden">
        <div class="bg-white p-8 rounded-xl shadow-2xl max-w-md mx-auto">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">🎉 Merci !</h2>
            <p class="text-gray-600 mb-6">Merci pour votre intérêt ! Nous vous contacterons bientôt.</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors" onclick="this.closest('[data-plugin=modal]').style.display='none'">
                Fermer
            </button>
        </div>
    </div>

    <!-- Menu mobile -->
    <div data-plugin="drawer" data-options='{"trigger": "#menu-mobile", "position": "right"}' class="hidden">
        <div class="bg-white h-full w-80 p-6 shadow-xl">
            <h4 class="text-xl font-bold mb-6">Menu</h4>
            <nav class="space-y-3">
                <a href="#accueil" class="block py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors">🏠 Accueil</a>
                <a href="#services" class="block py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors">🛠️ Services</a>
                <a href="#contact" class="block py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors">📞 Contact</a>
            </nav>
        </div>
    </div>

    <!-- Script pour le smooth scroll -->
    <script>
        // Smooth scroll pour la navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>
</body>
</html>
```

---

## 🎉 Félicitations !

Vous venez de créer un site web complet avec cubFirst ! Voici ce que vous avez appris :

### ✅ Ce que vous maîtrisez maintenant

- **Installation** de cubFirst via CDN
- **Création de modales** avec `data-plugin="modal"`
- **Système d'onglets** avec `data-plugin="tabs"`
- **Carrousels** avec `data-plugin="carousel"`
- **Formulaires** avec `data-plugin="contact-form"`
- **Stylisation** avec Tailwind CSS
- **Configuration** via `data-options`
- **API JavaScript** pour le contrôle programmatique

### 🚀 Prochaines Étapes

1. **Explorez** tous les plugins disponibles dans la [documentation complète](index.md)
2. **Testez** les [démonstrations interactives](demos.html)
3. **Personnalisez** les styles selon vos besoins
4. **Développez** vos propres plugins si nécessaire
5. **Partagez** vos créations avec la communauté !

### 📚 Ressources Utiles

- [Documentation Complète](index.md) - Guide de référence complet
- [Démonstrations Interactives](demos.html) - Testez tous les plugins
- [GitHub Repository](https://github.com/Romtouf/cubfirst) - Code source et issues
- [Communauté](https://github.com/Romtouf/cubfirst/discussions) - Aide et discussions

---

**Bon développement avec cubFirst ! 🎉**
