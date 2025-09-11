# 🚀 cubFirst - Documentation

> **Le framework HTML-first le plus simple au monde**  
> 1 ligne de CDN + attributs HTML = Site web interactif complet

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/Romtouf/cubfirst)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](../LICENSE)
[![CDN](https://img.shields.io/badge/CDN-jsDelivr-orange.svg)](https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v2.0.0/dist/cubfirst.min.js)

---

## ⚡ Démarrage Ultra-Rapide

### 1. **Une seule ligne dans votre HTML**
```html
<script src="https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v2.0.0/dist/cubfirst.min.js" defer></script>
```

### 2. **Utilisez les plugins avec data-plugin**
```html
<button data-plugin="modal" data-options='{"title": "Hello!", "content": "Ça marche !"}'>
    Modal
</button>
```

### 3. **C'est tout ! Ça fonctionne immédiatement** ✨

---

## 🎯 Navigation Documentation

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 2rem 0;">

### 🚀 [Guide de Démarrage](getting-started.md)
*Installation, premiers pas, exemples simples*

### 🎯 [Guide Avancé](advanced-guide.md)  
*Configuration, optimisation, composants modulaires*

### 🎮 [Tutoriels](tutorials.md)
*Projets pratiques, exemples concrets*

### 🧪 [Démonstrations](demos.html)
*Tests interactifs en live*

### 🚀 [Test Rapide](quick-test.html)
*Playground pour essayer immédiatement*

</div>

---

## 🎮 Test Immédiat - Copier/Coller

**Créez un fichier `test-cubfirst.html` et copiez ce code :**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Test cubFirst - Framework HTML-first</title>
    <script src="https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v2.0.0/dist/cubfirst.min.js" defer></script>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            padding: 2rem; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: #333; 
            min-height: 100vh; 
            margin: 0;
        }
        .container { 
            max-width: 1000px; 
            margin: 0 auto; 
            background: white; 
            padding: 2rem; 
            border-radius: 15px; 
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        button { 
            margin: 0.5rem; 
            padding: 1rem 1.5rem; 
            border: none; 
            border-radius: 8px; 
            cursor: pointer; 
            font-weight: bold; 
            transition: transform 0.2s, box-shadow 0.2s;
        }
        button:hover { 
            transform: translateY(-2px); 
            box-shadow: 0 5px 15px rgba(0,0,0,0.2); 
        }
        .btn-blue { background: #3b82f6; color: white; }
        .btn-green { background: #10b981; color: white; }
        .btn-purple { background: #8b5cf6; color: white; }
        .btn-red { background: #ef4444; color: white; }
        .btn-orange { background: #f59e0b; color: white; }
        
        .demo-section { 
            margin: 2rem 0; 
            padding: 1.5rem; 
            background: #f8fafc; 
            border-radius: 10px; 
            border-left: 5px solid #3b82f6;
        }
        
        .carousel-demo { 
            max-width: 600px; 
            margin: 1rem 0; 
            border-radius: 10px; 
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .slide { 
            height: 200px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            color: white; 
            font-size: 24px; 
            font-weight: bold;
        }
        
        .tabs-demo { 
            max-width: 700px; 
            margin: 1rem 0; 
        }
        
        h1 { color: #1e293b; margin-bottom: 0.5rem; }
        h2 { color: #475569; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; }
        
        .success-box {
            background: #dcfce7;
            border: 1px solid #bbf7d0;
            color: #166534;
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 cubFirst - Test Complet</h1>
        <p><strong>Framework HTML-first le plus simple au monde</strong></p>
        <p>Testez toutes les fonctionnalités en cliquant sur les boutons :</p>
        
        <!-- Section Notifications -->
        <div class="demo-section">
            <h2>🍞 Notifications & Dialogues</h2>
            
            <button class="btn-blue" data-plugin="modal" data-options='{"title": "🎉 Modal de Test", "content": "cubFirst fonctionne parfaitement !<br><br>✅ Aucun JavaScript écrit<br>✅ Aucune configuration<br>✅ Juste du HTML + attributs<br><br><strong>C\\'est magique, non ? 🪄</strong>"}'>
                🪟 Ouvrir Modal
            </button>
            
            <button class="btn-green" data-plugin="toast" data-options='{"message": "🚀 cubFirst est génial ! Toast de succès affiché.", "type": "success"}'>
                🍞 Toast Succès
            </button>
            
            <button class="btn-orange" data-plugin="toast" data-options='{"message": "⚠️ Ceci est un avertissement de test.", "type": "warning"}'>
                ⚠️ Toast Warning
            </button>
            
            <button class="btn-purple" data-plugin="confirm" data-options='{"message": "Êtes-vous convaincu par la simplicité de cubFirst ?", "confirmText": "Oui, c\\'est génial !", "cancelText": "Pas encore..."}'>
                ❓ Confirmation
            </button>
        </div>
        
        <!-- Section Carousel -->
        <div class="demo-section">
            <h2>🎠 Carousel Automatique</h2>
            <p>Carousel avec transition automatique toutes les 3 secondes :</p>
            
            <div class="carousel-demo" data-plugin="carousel" data-options='{"autoplay": true, "duration": 3000}'>
                <div class="slide" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                    🚀 Slide 1 - SIMPLE
                </div>
                <div class="slide" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                    ⚡ Slide 2 - RAPIDE
                </div>
                <div class="slide" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                    ✨ Slide 3 - EFFICACE
                </div>
                <div class="slide" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
                    🎯 Slide 4 - PARFAIT
                </div>
            </div>
        </div>
        
        <!-- Section Tabs -->
        <div class="demo-section">
            <h2>📑 Système d'Onglets</h2>
            
            <div class="tabs-demo" data-plugin="tabs">
                <div class="tab-title" style="display: inline-block; padding: 0.75rem 1.5rem; background: #e2e8f0; margin-right: 0.25rem; cursor: pointer; border-radius: 8px 8px 0 0; font-weight: bold;">
                    🎯 Fonctionnalités
                </div>
                <div class="tab-title" style="display: inline-block; padding: 0.75rem 1.5rem; background: #e2e8f0; margin-right: 0.25rem; cursor: pointer; border-radius: 8px 8px 0 0; font-weight: bold;">
                    ✅ Avantages
                </div>
                <div class="tab-title" style="display: inline-block; padding: 0.75rem 1.5rem; background: #e2e8f0; cursor: pointer; border-radius: 8px 8px 0 0; font-weight: bold;">
                    🚀 Workflow
                </div>
                
                <div class="tab-content" style="padding: 1.5rem; background: #f8fafc; border-radius: 0 8px 8px 8px; border: 2px solid #e2e8f0;">
                    <h3>🎯 Fonctionnalités Disponibles</h3>
                    <ul style="line-height: 1.8;">
                        <li><strong>🪟 Modal :</strong> Fenêtres modales élégantes</li>
                        <li><strong>🍞 Toast :</strong> Notifications temporaires</li>
                        <li><strong>❓ Confirm :</strong> Dialogues de confirmation</li>
                        <li><strong>🎠 Carousel :</strong> Carrousels avec transitions</li>
                        <li><strong>📑 Tabs :</strong> Système d'onglets (comme ici !)</li>
                        <li><strong>📊 Accordion :</strong> Contenus pliables</li>
                        <li><strong>📱 Dropdown :</strong> Menus déroulants</li>
                        <li><strong>🍔 Hamburger :</strong> Menus mobile</li>
                    </ul>
                </div>
                
                <div class="tab-content" style="padding: 1.5rem; background: #f8fafc; border-radius: 0 8px 8px 8px; border: 2px solid #e2e8f0; display: none;">
                    <h3>✅ Pourquoi choisir cubFirst ?</h3>
                    <ul style="line-height: 1.8;">
                        <li><strong>🚀 Simplicité :</strong> 1 ligne CDN + attributs HTML</li>
                        <li><strong>⚡ Performance :</strong> 127KB seulement, ultra-rapide</li>
                        <li><strong>🔧 Zero-config :</strong> Aucune configuration requise</li>
                        <li><strong>📱 Responsive :</strong> Fonctionne sur tous appareils</li>
                        <li><strong>🌐 Compatible :</strong> Tous navigateurs modernes</li>
                        <li><strong>📖 Lisible :</strong> Code HTML clair et maintenable</li>
                    </ul>
                </div>
                
                <div class="tab-content" style="padding: 1.5rem; background: #f8fafc; border-radius: 0 8px 8px 8px; border: 2px solid #e2e8f0; display: none;">
                    <h3>🚀 Workflow de Développement</h3>
                    <ol style="line-height: 1.8;">
                        <li><strong>Inclusion :</strong> Ajoutez le script CDN</li>
                        <li><strong>Utilisation :</strong> Ajoutez data-plugin="nom"</li>
                        <li><strong>Configuration :</strong> Ajoutez data-options='{}'</li>
                        <li><strong>Test :</strong> Ouvrez votre HTML dans le navigateur</li>
                        <li><strong>Résultat :</strong> Ça marche immédiatement ! ✨</li>
                    </ol>
                </div>
            </div>
        </div>
        
        <!-- Section Menu Hamburger -->
        <div class="demo-section">
            <h2>🍔 Menu Hamburger</h2>
            <p>Cliquez sur le bouton hamburger pour révéler le menu :</p>
            
            <button class="btn-red" data-plugin="hamburger" data-options='{"target": "#demo-menu"}'>
                ☰ Menu Hamburger
            </button>
            
            <div id="demo-menu" style="display: none; margin-top: 1rem; padding: 1rem; background: #1e293b; color: white; border-radius: 8px;">
                <h4 style="color: #f1f5f9; margin-top: 0;">🎯 Menu de Navigation</h4>
                <ul style="list-style: none; padding: 0; line-height: 2;">
                    <li><a href="#" style="color: #cbd5e1; text-decoration: none;">🏠 Accueil</a></li>
                    <li><a href="#" style="color: #cbd5e1; text-decoration: none;">📖 Documentation</a></li>
                    <li><a href="#" style="color: #cbd5e1; text-decoration: none;">🧪 Démonstrations</a></li>
                    <li><a href="#" style="color: #cbd5e1; text-decoration: none;">💬 Contact</a></li>
                </ul>
            </div>
        </div>
        
        <!-- Section Résultats -->
        <div class="success-box">
            <h2 style="border: none; color: #166534; margin-top: 0;">🎉 Résultats du Test</h2>
            <p><strong>Si toutes les fonctionnalités ci-dessus marchent :</strong></p>
            <ul>
                <li>✅ cubFirst est correctement chargé depuis le CDN</li>
                <li>✅ Tous les plugins sont fonctionnels</li>
                <li>✅ L'approche HTML-first fonctionne parfaitement</li>
                <li>✅ Vous n'avez écrit AUCUNE ligne de JavaScript !</li>
                <li>✅ Vous êtes prêt à créer des sites web interactifs</li>
            </ul>
            
            <p><strong>🚀 Prochaines étapes :</strong></p>
            <ul>
                <li>📖 Consultez le <a href="getting-started.md" style="color: #166534; font-weight: bold;">Guide de démarrage</a></li>
                <li>🎮 Explorez les <a href="tutorials.md" style="color: #166534; font-weight: bold;">Tutoriels pratiques</a></li>
                <li>🔧 Découvrez le <a href="advanced-guide.md" style="color: #166534; font-weight: bold;">Guide avancé</a></li>
            </ul>
        </div>
        
        <hr style="margin: 2rem 0; border: none; height: 2px; background: linear-gradient(to right, #3b82f6, #8b5cf6);">
        
        <div style="text-align: center; color: #64748b;">
            <h3>🎯 cubFirst v2.0</h3>
            <p><em>"Le framework HTML-first le plus simple au monde"</em></p>
            <p>
                <a href="../README.md" style="color: #3b82f6; text-decoration: none; font-weight: bold;">📚 Documentation</a> • 
                <a href="https://github.com/Romtouf/cubfirst" style="color: #3b82f6; text-decoration: none; font-weight: bold;">⭐ GitHub</a> • 
                <a href="https://cdn.jsdelivr.net/gh/Romtouf/cubfirst@v2.0.0/dist/cubfirst.min.js" style="color: #3b82f6; text-decoration: none; font-weight: bold;">🚀 CDN</a>
            </p>
        </div>
    </div>
</body>
</html>
```

**Ouvrez ce fichier dans votre navigateur** → Tout fonctionne immédiatement ! ✨

---

## 🎯 Plugins Disponibles

**50+ plugins prêts à l'emploi** organisés par catégories :

### 🎨 Interface Utilisateur
- **🪟 modal** - Fenêtres modales élégantes
- **🍞 toast** - Notifications temporaires  
- **❓ confirm** - Dialogues de confirmation
- **📱 dropdown** - Menus déroulants
- **🍔 hamburger** - Menus hamburger mobile
- **📱 drawer** - Panneaux latéraux
- **📧 alert** - Messages d'alerte
- **⭐ tooltip** - Info-bulles contextuelles

### 📊 Navigation & Organisation
- **📑 tabs** - Système d'onglets interactifs
- **📊 accordion** - Contenus pliables
- **🎠 carousel** - Carrousels avec transitions
- **📄 pagination** - Navigation par pages
- **🍞 breadcrumb** - Fil d'Ariane
- **🔍 sidebar** - Barres latérales

### 🎛️ Contrôles & Formulaires
- **📝 contact-form** - Formulaires de contact
- **🔄 toggle** - Boutons bascule
- **🎚️ slider** - Curseurs de valeurs
- **⭐ rating** - Système de notation
- **🔍 search** - Barre de recherche
- **📁 file-upload** - Upload de fichiers
- **📅 date-picker** - Sélecteur de dates
- **🕒 time-picker** - Sélecteur d'heures
- **🎨 color-picker** - Sélecteur de couleurs

### 🚀 Interactivité Avancée
- **📋 copy** - Copie dans le presse-papier
- **🎯 scrollto** - Défilement fluide
- **⏱️ countdown** - Compte à rebours
- **👁️ reveal** - Animations d'apparition
- **🖱️ swipe** - Gestes tactiles
- **📍 sticky** - Éléments collants
- **🔄 lazy-load** - Chargement différé

### 📈 Données & Tableaux
- **📋 data-table** - Tableaux dynamiques
- **🔍 filter** - Filtres de contenu
- **📊 progress-bar** - Barres de progression
- **📈 progress-scroll** - Indicateur de défilement
- **⚡ load-more** - Chargement progressif

### Exemples d'Usage

```html
<!-- Modal -->
<button data-plugin="modal" data-options='{"title": "Titre", "content": "Contenu HTML"}'>
    Ouvrir Modal
</button>

<!-- Toast -->
<button data-plugin="toast" data-options='{"message": "Message", "type": "success"}'>
    Afficher Toast
</button>

<!-- Carousel -->
<div data-plugin="carousel" data-options='{"autoplay": true, "duration": 3000}'>
    <img src="image1.jpg">
    <img src="image2.jpg">
</div>

<!-- Système d'onglets -->
<div data-plugin="tabs">
    <div class="tab-title">Onglet 1</div>
    <div class="tab-title">Onglet 2</div>
    <div class="tab-content">Contenu 1</div>
    <div class="tab-content">Contenu 2</div>
</div>
```

---

## 🌟 Philosophie : Simplicité Avant Tout

### ✅ **Principes de cubFirst**
- **HTML-first** : Le HTML reste au centre
- **Zero-config** : Aucune configuration nécessaire
- **CDN-ready** : Fonctionne immédiatement depuis un CDN
- **Plug & Play** : Ajoutez des attributs, ça marche

### ✅ **Ce que cubFirst N'EST PAS**
- ❌ Un framework complexe nécessitant une build
- ❌ Une library avec des dépendances
- ❌ Un outil nécessitant Node.js ou npm
- ❌ Une solution avec courbe d'apprentissage

### ✅ **Ce que cubFirst EST**
- ✅ Un script unique qui fonctionne partout
- ✅ Des attributs HTML simples et lisibles
- ✅ Des fonctionnalités prêtes à l'emploi
- ✅ Une approche qui respecte le web

---

## 🔧 Fonctionnalités Avancées (Optionnel)

**Pour les projets complexes** nécessitant des composants modulaires, cubFirst propose aussi **cub-include** :

```html
<!-- Développement avec composants séparés -->
<cub-include src="components/header.html" data-plugin="cub-include"></cub-include>
<main>Mon contenu principal</main>
<cub-include src="components/footer.html" data-plugin="cub-include"></cub-include>
```

**Note :** Cette fonctionnalité avancée nécessite un serveur local en développement et un processus de build pour la production.

👉 **[Voir le guide avancé](advanced-guide.md)** pour plus de détails sur les composants modulaires.

---

## 📚 Guides Disponibles

### 🌟 **Pour Débutants**
- **[🚀 Getting Started](getting-started.md)** - Installation et premiers pas
- **[🎮 Tutoriels](tutorials.md)** - Projets pratiques avec exemples

### 🔧 **Pour Développeurs Expérimentés**  
- **[🎯 Guide Avancé](advanced-guide.md)** - Optimisation et composants modulaires
- **[🧪 Démonstrations](demos.html)** - Tests interactifs complets

---

## 🤝 Communauté & Support

- ⭐ **[Star le projet](https://github.com/Romtouf/cubfirst)** sur GitHub
- 🐛 **[Reporter un bug](https://github.com/Romtouf/cubfirst/issues)**
- 💡 **[Discussions](https://github.com/Romtouf/cubfirst/discussions)** - Poser des questions
- 📢 **Partager** cubFirst avec vos collègues !

---

<div align="center">

**cubFirst v2.0** - *HTML-first Framework for Everyone*

*1 ligne CDN + Attributs HTML = Site web interactif complet*

**Made with ❤️ for developers who love simplicity**

</div>