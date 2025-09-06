# 📚 Tutoriels - Notions Fondamentales cubFirst

> **Apprenez les concepts essentiels du développement web avec cubFirst**  
> Ces tutoriels vous guident pas à pas dans l'apprentissage des technologies web modernes.

---

## 📋 Table des Matières

- [🌐 HTML & CSS de Base](#-html--css-de-base)
- [⚡ JavaScript Essentiel](#-javascript-essentiel)
- [🎨 Stylisation Avancée](#-stylisation-avancée)
- [📱 Responsive Design](#-responsive-design)
- [♿ Accessibilité Web](#-accessibilité-web)
- [🚀 Performance Web](#-performance-web)

---

## 🌐 HTML & CSS de Base

### Structure HTML Sémantique

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Site cubFirst</title>
    <script src="cubfirst.min.js" defer></script>
</head>
<body>
    <!-- En-tête principal -->
    <header>
        <nav>
            <ul>
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Contenu principal -->
    <main>
        <section id="accueil">
            <h1>Bienvenue</h1>
            <p>Contenu de la section d'accueil</p>
        </section>
    </main>
    
    <!-- Pied de page -->
    <footer>
        <p>&copy; 2024 Mon Site</p>
    </footer>
</body>
</html>
```

### Sélecteurs CSS Essentiels

```css
/* Sélecteurs de base */
h1 { color: blue; }
.class-name { font-size: 16px; }
#unique-id { background: red; }

/* Sélecteurs combinés */
header nav ul li { margin: 0; }
.parent > .child { padding: 10px; }
.sibling + .sibling { margin-top: 20px; }

/* Pseudo-classes */
a:hover { color: red; }
input:focus { border: 2px solid blue; }
li:first-child { font-weight: bold; }

/* Pseudo-éléments */
p::before { content: "→ "; }
p::after { content: " ←"; }
```

### Flexbox Layout

```css
/* Conteneur flex */
.flex-container {
    display: flex;
    flex-direction: row;        /* row, column, row-reverse, column-reverse */
    justify-content: center;    /* flex-start, center, flex-end, space-between, space-around */
    align-items: center;        /* flex-start, center, flex-end, stretch, baseline */
    flex-wrap: wrap;           /* nowrap, wrap, wrap-reverse */
    gap: 20px;                 /* Espacement entre les éléments */
}

/* Éléments flex */
.flex-item {
    flex: 1;                   /* flex-grow flex-shrink flex-basis */
    flex-grow: 1;              /* Capacité à grandir */
    flex-shrink: 0;            /* Capacité à rétrécir */
    flex-basis: 200px;         /* Taille de base */
}
```

### Grid Layout

```css
/* Conteneur grid */
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;  /* 3 colonnes */
    grid-template-rows: auto 1fr auto;   /* 3 lignes */
    gap: 20px;                           /* Espacement */
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
}

/* Placement des éléments */
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Responsive grid */
@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
        grid-template-areas: 
            "header"
            "main"
            "sidebar"
            "aside"
            "footer";
    }
}
```

---

## ⚡ JavaScript Essentiel

### Variables et Types

```javascript
// Déclarations de variables
let nom = "Jean";              // Variable modifiable
const age = 25;                // Constante
var ancien = "déconseillé";    // Ancienne syntaxe

// Types de données
let string = "Texte";          // Chaîne de caractères
let number = 42;               // Nombre
let boolean = true;            // Booléen
let array = [1, 2, 3];         // Tableau
let object = {                 // Objet
    nom: "Jean",
    age: 25
};
let nullValue = null;          // Valeur nulle
let undefinedValue;            // Non défini

// Vérification de type
typeof string;                 // "string"
Array.isArray(array);          // true
```

### Fonctions

```javascript
// Déclaration de fonction
function maFonction(param1, param2) {
    return param1 + param2;
}

// Fonction fléchée
const maFonctionFleche = (param1, param2) => {
    return param1 + param2;
};

// Fonction fléchée courte
const addition = (a, b) => a + b;

// Fonction anonyme
const nombres = [1, 2, 3, 4, 5];
const doubles = nombres.map(function(n) {
    return n * 2;
});

// Avec fonction fléchée
const doublesFleche = nombres.map(n => n * 2);
```

### Manipulation du DOM

```javascript
// Sélection d'éléments
const element = document.getElementById('mon-id');
const elements = document.querySelectorAll('.ma-classe');
const premier = document.querySelector('.ma-classe');

// Modification du contenu
element.textContent = 'Nouveau texte';
element.innerHTML = '<strong>Texte formaté</strong>';

// Modification des attributs
element.setAttribute('data-value', '123');
element.classList.add('nouvelle-classe');
element.classList.remove('ancienne-classe');
element.classList.toggle('classe-conditionnelle');

// Création d'éléments
const nouveauDiv = document.createElement('div');
nouveauDiv.textContent = 'Nouvel élément';
element.appendChild(nouveauDiv);

// Suppression d'éléments
element.removeChild(nouveauDiv);
```

### Événements

```javascript
// Écouteur d'événement simple
element.addEventListener('click', function(e) {
    console.log('Clic détecté !');
});

// Écouteur avec fonction fléchée
element.addEventListener('click', (e) => {
    console.log('Clic détecté !');
});

// Événements courants
element.addEventListener('mouseover', handler);
element.addEventListener('mouseout', handler);
element.addEventListener('focus', handler);
element.addEventListener('blur', handler);
element.addEventListener('submit', handler);

// Prévention du comportement par défaut
element.addEventListener('click', (e) => {
    e.preventDefault();        // Empêche le comportement par défaut
    e.stopPropagation();      // Empêche la propagation
});

// Suppression d'écouteur
element.removeEventListener('click', handler);
```

### Promesses et Async/Await

```javascript
// Promesse basique
const maPromesse = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Succès !');
    }, 1000);
});

// Utilisation avec .then()
maPromesse
    .then(resultat => {
        console.log(resultat);
    })
    .catch(erreur => {
        console.error(erreur);
    });

// Utilisation avec async/await
async function maFonctionAsync() {
    try {
        const resultat = await maPromesse;
        console.log(resultat);
    } catch (erreur) {
        console.error(erreur);
    }
}

// Fetch API
async function chargerDonnees() {
    try {
        const response = await fetch('/api/donnees');
        const donnees = await response.json();
        return donnees;
    } catch (erreur) {
        console.error('Erreur de chargement:', erreur);
    }
}
```

---

## 🎨 Stylisation Avancée

### Variables CSS

```css
:root {
    /* Couleurs principales */
    --couleur-primaire: #3b82f6;
    --couleur-secondaire: #6b7280;
    --couleur-success: #10b981;
    --couleur-warning: #f59e0b;
    --couleur-error: #ef4444;
    
    /* Espacement */
    --espacement-xs: 0.25rem;
    --espacement-sm: 0.5rem;
    --espacement-md: 1rem;
    --espacement-lg: 1.5rem;
    --espacement-xl: 2rem;
    
    /* Typographie */
    --police-principale: 'Inter', sans-serif;
    --police-mono: 'Fira Code', monospace;
    --taille-texte-sm: 0.875rem;
    --taille-texte-base: 1rem;
    --taille-texte-lg: 1.125rem;
    --taille-texte-xl: 1.25rem;
    
    /* Ombres */
    --ombre-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --ombre-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --ombre-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}

/* Utilisation des variables */
.bouton {
    background-color: var(--couleur-primaire);
    padding: var(--espacement-sm) var(--espacement-md);
    font-family: var(--police-principale);
    box-shadow: var(--ombre-md);
}
```

### Animations CSS

```css
/* Définition d'une animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Application de l'animation */
.element-anime {
    animation: fadeIn 0.5s ease-out;
}

/* Animation avec délai et répétition */
.element-complexe {
    animation: 
        fadeIn 0.5s ease-out 0.2s,
        pulse 2s ease-in-out infinite 1s;
}

/* Transitions */
.element-transition {
    transition: all 0.3s ease;
}

.element-transition:hover {
    transform: scale(1.05);
    box-shadow: var(--ombre-lg);
}

/* Animation de chargement */
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.loader {
    animation: spin 1s linear infinite;
}
```

### Pseudo-classes et Pseudo-éléments

```css
/* Pseudo-classes d'état */
.bouton {
    background: var(--couleur-primaire);
    transition: all 0.2s ease;
}

.bouton:hover {
    background: var(--couleur-primaire-dark);
    transform: translateY(-2px);
}

.bouton:active {
    transform: translateY(0);
}

.bouton:focus {
    outline: 2px solid var(--couleur-primaire);
    outline-offset: 2px;
}

.bouton:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Pseudo-classes structurelles */
.liste li:first-child {
    font-weight: bold;
}

.liste li:last-child {
    border-bottom: none;
}

.liste li:nth-child(even) {
    background: #f9fafb;
}

.liste li:nth-child(odd) {
    background: white;
}

/* Pseudo-éléments */
.citation::before {
    content: '"';
    font-size: 2em;
    color: var(--couleur-primaire);
}

.citation::after {
    content: '"';
    font-size: 2em;
    color: var(--couleur-primaire);
}

/* Tooltip avec pseudo-élément */
.tooltip {
    position: relative;
}

.tooltip::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
}

.tooltip:hover::after {
    opacity: 1;
}
```

---

## 📱 Responsive Design

### Media Queries

```css
/* Mobile First Approach */
.conteneur {
    width: 100%;
    padding: 1rem;
}

/* Tablette */
@media (min-width: 768px) {
    .conteneur {
        max-width: 750px;
        margin: 0 auto;
        padding: 2rem;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .conteneur {
        max-width: 1200px;
        padding: 3rem;
    }
}

/* Large Desktop */
@media (min-width: 1440px) {
    .conteneur {
        max-width: 1400px;
    }
}

/* Orientation */
@media (orientation: landscape) {
    .hero {
        height: 100vh;
    }
}

@media (orientation: portrait) {
    .hero {
        height: 50vh;
    }
}
```

### Breakpoints Responsive

```css
/* Système de breakpoints cohérent */
:root {
    --mobile: 480px;
    --tablet: 768px;
    --desktop: 1024px;
    --large: 1440px;
}

/* Classes utilitaires responsive */
.mobile-only {
    display: block;
}

.tablet-up {
    display: none;
}

@media (min-width: 768px) {
    .mobile-only {
        display: none;
    }
    
    .tablet-up {
        display: block;
    }
}

/* Grid responsive */
.grid-responsive {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 768px) {
    .grid-responsive {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .grid-responsive {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

### Images Responsives

```css
/* Images adaptatives */
.image-responsive {
    width: 100%;
    height: auto;
    max-width: 100%;
}

/* Images avec ratio d'aspect */
.image-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 */
}

.image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Images avec srcset */
.image-optimized {
    width: 100%;
    height: auto;
}

/* CSS pour différentes densités d'écran */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .image-hd {
        background-image: url('image@2x.jpg');
    }
}
```

---

## ♿ Accessibilité Web

### Sémantique HTML

```html
<!-- Structure sémantique -->
<header role="banner">
    <nav role="navigation" aria-label="Navigation principale">
        <ul>
            <li><a href="#accueil" aria-current="page">Accueil</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>

<main role="main">
    <section aria-labelledby="titre-services">
        <h2 id="titre-services">Nos Services</h2>
        <article>
            <h3>Service 1</h3>
            <p>Description du service</p>
        </article>
    </section>
</main>

<footer role="contentinfo">
    <p>&copy; 2024 Mon Site</p>
</footer>
```

### Attributs ARIA

```html
<!-- Boutons avec états -->
<button 
    aria-expanded="false" 
    aria-controls="menu-deroulant"
    aria-haspopup="true"
>
    Menu
</button>

<div id="menu-deroulant" aria-hidden="true">
    <!-- Contenu du menu -->
</div>

<!-- Formulaires accessibles -->
<form>
    <label for="nom">Nom complet</label>
    <input 
        type="text" 
        id="nom" 
        name="nom" 
        required 
        aria-describedby="aide-nom"
        aria-invalid="false"
    >
    <div id="aide-nom" class="aide">
        Saisissez votre nom complet
    </div>
    
    <div role="alert" aria-live="polite" id="erreur-nom" class="erreur">
        <!-- Messages d'erreur dynamiques -->
    </div>
</form>

<!-- Contenu dynamique -->
<div 
    role="status" 
    aria-live="polite" 
    aria-atomic="true"
    id="statut-chargement"
>
    Chargement en cours...
</div>
```

### Navigation au Clavier

```css
/* Focus visible */
*:focus {
    outline: 2px solid var(--couleur-primaire);
    outline-offset: 2px;
}

/* Focus pour les éléments interactifs */
.bouton:focus,
.lien:focus,
input:focus,
textarea:focus,
select:focus {
    outline: 2px solid var(--couleur-primaire);
    outline-offset: 2px;
}

/* Masquer le focus pour la souris */
.bouton:focus:not(:focus-visible) {
    outline: none;
}

/* Skip links */
.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--couleur-primaire);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 1000;
}

.skip-link:focus {
    top: 6px;
}
```

### Contraste et Lisibilité

```css
/* Contraste suffisant */
.texte-normal {
    color: #333333;        /* Contraste 12.63:1 sur blanc */
    background: #ffffff;
}

.texte-secondaire {
    color: #666666;        /* Contraste 4.54:1 sur blanc */
}

/* Tailles de police accessibles */
.texte-xs { font-size: 0.75rem; }    /* 12px */
.texte-sm { font-size: 0.875rem; }   /* 14px */
.texte-base { font-size: 1rem; }     /* 16px */
.texte-lg { font-size: 1.125rem; }   /* 18px */
.texte-xl { font-size: 1.25rem; }    /* 20px */

/* Espacement des lignes */
.texte-lisible {
    line-height: 1.6;
    letter-spacing: 0.025em;
}

/* Réduction de mouvement */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## 🚀 Performance Web

### Optimisation des Images

```html
<!-- Images avec srcset pour différentes résolutions -->
<img 
    src="image-400w.jpg"
    srcset="
        image-400w.jpg 400w,
        image-800w.jpg 800w,
        image-1200w.jpg 1200w
    "
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    alt="Description de l'image"
    loading="lazy"
>

<!-- Images WebP avec fallback -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

### Chargement Asynchrone

```javascript
// Chargement paresseux des images
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Chargement dynamique de modules
async function chargerModule() {
    const module = await import('./mon-module.js');
    module.maFonction();
}

// Preload des ressources critiques
const link = document.createElement('link');
link.rel = 'preload';
link.href = '/fonts/mon-font.woff2';
link.as = 'font';
link.type = 'font/woff2';
link.crossOrigin = 'anonymous';
document.head.appendChild(link);
```

### Optimisation CSS

```css
/* CSS critique inline */
<style>
    /* Styles critiques pour le rendu initial */
    .hero { background: #f0f0f0; }
    .navigation { display: flex; }
</style>

/* Chargement asynchrone du CSS non-critique */
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="styles.css"></noscript>

/* CSS optimisé */
/* Éviter les sélecteurs complexes */
.simple-selector { color: red; }

/* Utiliser les propriétés transform et opacity pour les animations */
.animation-optimisee {
    transform: translateX(0);
    opacity: 1;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.animation-optimisee.animee {
    transform: translateX(100px);
    opacity: 0;
}
```

### Minification et Bundling

```javascript
// Configuration webpack pour l'optimisation
module.exports = {
    mode: 'production',
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
};
```

---

## 🎉 Conclusion

Vous avez maintenant une base solide en développement web moderne ! Ces concepts vous permettront de créer des sites web performants, accessibles et maintenables avec cubFirst.

### ✅ Prochaines Étapes

1. **Pratiquez** avec les exemples fournis
2. **Explorez** les plugins cubFirst
3. **Créez** vos propres projets
4. **Partagez** vos créations

### 📚 Ressources Supplémentaires

- [MDN Web Docs](https://developer.mozilla.org/) - Documentation web complète
- [Can I Use](https://caniuse.com/) - Compatibilité des navigateurs
- [Web.dev](https://web.dev/) - Guides de performance et accessibilité
- [A11y Project](https://www.a11yproject.com/) - Ressources d'accessibilité

**Bon développement ! 🚀**
