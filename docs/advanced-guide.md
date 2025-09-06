# 🔧 Guide Avancé - Développement de Plugins cubFirst

> **Créez vos propres plugins cubFirst !**  
> Ce guide vous accompagne dans le développement de plugins personnalisés et l'extension du framework.

---

## 📋 Table des Matières

- [🏗️ Architecture de cubFirst](#️-architecture-de-cubfirst)
- [🛠️ Créer votre Premier Plugin](#️-créer-votre-premier-plugin)
- [⚙️ Configuration et Options](#️-configuration-et-options)
- [🎯 API et Événements](#-api-et-événements)
- [🧹 Gestion de la Mémoire](#-gestion-de-la-mémoire)
- [📦 Distribution de Plugins](#-distribution-de-plugins)
- [🔍 Debugging et Tests](#-debugging-et-tests)

---

## 🏗️ Architecture de cubFirst

### Structure du Framework

```javascript
// Structure simplifiée de cubFirst
const cubFirst = {
    // Fonction d'initialisation principale
    init: function(element, options) { /* ... */ },
    
    // Gestionnaire d'événements
    emit: function(element, eventName, data) { /* ... */ },
    
    // API publique pour les plugins
    getAPI: function(element, pluginType) { /* ... */ },
    
    // Gestionnaire de nettoyage
    cleanup: function(element) { /* ... */ }
};
```

### Cycle de Vie d'un Plugin

1. **Détection** : cubFirst scanne le DOM pour les éléments `data-plugin`
2. **Initialisation** : Le plugin est initialisé avec ses options
3. **Activation** : Le plugin devient fonctionnel
4. **Nettoyage** : Le plugin est nettoyé lors de la suppression de l'élément

---

## 🛠️ Créer votre Premier Plugin

### Étape 1 : Structure de Base

```javascript
// Plugin simple : Notification Toast
function initToastPlugin(element, options) {
    // Configuration par défaut
    const config = {
        message: 'Notification',
        duration: 3000,
        type: 'info',
        position: 'top-right',
        ...options
    };
    
    // Logique du plugin
    function showToast() {
        const toast = createToastElement();
        document.body.appendChild(toast);
        
        // Animation d'apparition
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Suppression automatique
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, config.duration);
    }
    
    function createToastElement() {
        const toast = document.createElement('div');
        toast.className = `toast toast-${config.type} toast-${config.position}`;
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-message">${config.message}</span>
                <button class="toast-close">&times;</button>
            </div>
        `;
        
        // Gestionnaire de fermeture
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        });
        
        return toast;
    }
    
    // API publique
    element.toastAPI = {
        show: showToast,
        hide: () => {
            const toasts = document.querySelectorAll('.toast');
            toasts.forEach(t => t.remove());
        }
    };
    
    // Initialisation
    showToast();
}
```

### Étape 2 : Intégration dans cubFirst

```javascript
// Ajouter le plugin au système cubFirst
// Dans le fichier cubfirst.ts, ajouter dans le switch case :

case 'toast':
    initToastPlugin(element, options);
    break;
```

### Étape 3 : Utilisation HTML

```html
<!-- Utilisation du plugin -->
<div data-plugin="toast" data-options='{"message": "Hello World!", "type": "success"}'></div>
```

---

## ⚙️ Configuration et Options

### Système d'Options Avancé

```javascript
function initAdvancedPlugin(element, options) {
    // Configuration par défaut avec validation
    const defaultConfig = {
        // Options requises
        target: null,           // Sélecteur CSS obligatoire
        animation: 'fade',      // Type d'animation
        
        // Options optionnelles
        duration: 300,          // Durée de l'animation
        delay: 0,              // Délai avant exécution
        autoStart: true,       // Démarrage automatique
        loop: false,           // Répétition en boucle
        
        // Callbacks
        onStart: null,         // Fonction appelée au début
        onComplete: null,      // Fonction appelée à la fin
        onError: null          // Fonction appelée en cas d'erreur
    };
    
    // Validation des options
    const config = validateOptions(options, defaultConfig);
    
    function validateOptions(userOptions, defaults) {
        const config = { ...defaults, ...userOptions };
        
        // Validation des options requises
        if (!config.target) {
            throw new Error('Plugin: option "target" est requise');
        }
        
        // Validation des types
        if (typeof config.duration !== 'number' || config.duration < 0) {
            console.warn('Plugin: "duration" doit être un nombre positif, utilisation de la valeur par défaut');
            config.duration = defaults.duration;
        }
        
        // Validation des valeurs énumérées
        const validAnimations = ['fade', 'slide', 'zoom', 'bounce'];
        if (!validAnimations.includes(config.animation)) {
            console.warn('Plugin: animation invalide, utilisation de "fade"');
            config.animation = 'fade';
        }
        
        return config;
    }
}
```

### Options Conditionnelles

```javascript
function initConditionalPlugin(element, options) {
    const config = {
        mode: 'simple',        // 'simple' ou 'advanced'
        data: null,            // Données à traiter
        
        // Options conditionnelles selon le mode
        ...(options.mode === 'advanced' && {
            validation: true,
            errorHandling: 'strict',
            logging: true
        }),
        
        ...options
    };
    
    // Logique conditionnelle
    if (config.mode === 'advanced') {
        setupAdvancedMode(config);
    } else {
        setupSimpleMode(config);
    }
}
```

---

## 🎯 API et Événements

### API Publique Complète

```javascript
function initPluginWithAPI(element, options) {
    const config = { ...defaultOptions, ...options };
    
    // État interne
    let isActive = false;
    let currentStep = 0;
    let timer = null;
    
    // Méthodes publiques
    const api = {
        // Contrôle de base
        start: () => {
            if (isActive) return;
            isActive = true;
            currentStep = 0;
            executeStep();
            emit('started', { step: currentStep });
        },
        
        stop: () => {
            if (!isActive) return;
            isActive = false;
            if (timer) clearTimeout(timer);
            emit('stopped', { step: currentStep });
        },
        
        pause: () => {
            if (!isActive) return;
            if (timer) clearTimeout(timer);
            emit('paused', { step: currentStep });
        },
        
        resume: () => {
            if (!isActive) return;
            executeStep();
            emit('resumed', { step: currentStep });
        },
        
        // Contrôle avancé
        next: () => {
            if (currentStep < maxSteps) {
                currentStep++;
                executeStep();
                emit('stepChanged', { step: currentStep });
            }
        },
        
        previous: () => {
            if (currentStep > 0) {
                currentStep--;
                executeStep();
                emit('stepChanged', { step: currentStep });
            }
        },
        
        goToStep: (step) => {
            if (step >= 0 && step <= maxSteps) {
                currentStep = step;
                executeStep();
                emit('stepChanged', { step: currentStep });
            }
        },
        
        // Getters
        getCurrentStep: () => currentStep,
        getIsActive: () => isActive,
        getConfig: () => ({ ...config }),
        
        // Setters
        updateConfig: (newOptions) => {
            Object.assign(config, newOptions);
            emit('configUpdated', { config });
        },
        
        // Destruction
        destroy: () => {
            stop();
            element.removeAttribute('data-plugin');
            element.pluginAPI = null;
            emit('destroyed');
        }
    };
    
    // Fonction d'émission d'événements
    function emit(eventName, data = {}) {
        const event = new CustomEvent(`plugin:${eventName}`, {
            detail: { ...data, element, config }
        });
        element.dispatchEvent(event);
    }
    
    // Fonction d'exécution des étapes
    function executeStep() {
        if (!isActive) return;
        
        // Logique de l'étape
        performStepAction(currentStep);
        
        // Prochaine étape automatique
        if (config.autoNext && currentStep < maxSteps) {
            timer = setTimeout(() => {
                if (isActive) next();
            }, config.stepDuration);
        }
    }
    
    // Attacher l'API à l'élément
    element.pluginAPI = api;
    
    // Initialisation
    if (config.autoStart) {
        api.start();
    }
}
```

### Système d'Événements Avancé

```javascript
// Écouter les événements du plugin
element.addEventListener('plugin:started', (e) => {
    console.log('Plugin démarré à l\'étape:', e.detail.step);
});

element.addEventListener('plugin:stepChanged', (e) => {
    updateUI(e.detail.step);
});

element.addEventListener('plugin:stopped', (e) => {
    console.log('Plugin arrêté à l\'étape:', e.detail.step);
});

// Événements globaux
document.addEventListener('plugin:error', (e) => {
    console.error('Erreur dans le plugin:', e.detail.error);
    showErrorMessage(e.detail.error.message);
});
```

---

## 🧹 Gestion de la Mémoire

### CleanupManager

```javascript
class CleanupManager {
    constructor() {
        this.cleanupFunctions = new Set();
    }
    
    add(cleanupFunction) {
        this.cleanupFunctions.add(cleanupFunction);
    }
    
    remove(cleanupFunction) {
        this.cleanupFunctions.delete(cleanupFunction);
    }
    
    cleanup() {
        this.cleanupFunctions.forEach(fn => {
            try {
                fn();
            } catch (error) {
                console.error('Erreur lors du nettoyage:', error);
            }
        });
        this.cleanupFunctions.clear();
    }
}

// Utilisation dans un plugin
function initPluginWithCleanup(element, options) {
    const cleanupManager = new CleanupManager();
    
    // Ajouter des écouteurs d'événements
    const clickHandler = (e) => handleClick(e);
    element.addEventListener('click', clickHandler);
    cleanupManager.add(() => element.removeEventListener('click', clickHandler));
    
    // Ajouter des timers
    const timer = setInterval(updateData, 1000);
    cleanupManager.add(() => clearInterval(timer));
    
    // Ajouter des observateurs
    const observer = new MutationObserver(handleMutations);
    observer.observe(element, { childList: true });
    cleanupManager.add(() => observer.disconnect());
    
    // API avec nettoyage
    element.pluginAPI = {
        destroy: () => {
            cleanupManager.cleanup();
            element.pluginAPI = null;
        }
    };
}
```

### Gestion des Fuites Mémoire

```javascript
function initMemorySafePlugin(element, options) {
    // Éviter les références circulaires
    const weakRef = new WeakRef(element);
    
    // Nettoyage automatique lors de la suppression de l'élément
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.removedNodes.forEach((node) => {
                if (node === element || node.contains(element)) {
                    cleanup();
                }
            });
        });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    function cleanup() {
        observer.disconnect();
        // Nettoyage des ressources
        element.pluginAPI = null;
    }
}
```

---

## 📦 Distribution de Plugins

### Structure d'un Plugin Distribuable

```
mon-plugin/
├── package.json
├── README.md
├── src/
│   ├── index.js
│   ├── styles.css
│   └── types.d.ts
├── dist/
│   ├── mon-plugin.min.js
│   └── mon-plugin.css
└── examples/
    └── demo.html
```

### package.json

```json
{
  "name": "cubfirst-mon-plugin",
  "version": "1.0.0",
  "description": "Mon plugin personnalisé pour cubFirst",
  "main": "dist/mon-plugin.min.js",
  "files": ["dist/"],
  "keywords": ["cubfirst", "plugin", "javascript"],
  "author": "Votre Nom",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/votre-username/mon-plugin.git"
  },
  "peerDependencies": {
    "cubfirst": "^1.0.0"
  },
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development --watch"
  }
}
```

### Code du Plugin

```javascript
// src/index.js
(function(global) {
    'use strict';
    
    // Vérifier que cubFirst est disponible
    if (typeof global.cubFirst === 'undefined') {
        console.error('cubFirst est requis pour ce plugin');
        return;
    }
    
    // Définir le plugin
    function initMonPlugin(element, options) {
        // Configuration par défaut
        const config = {
            theme: 'default',
            animation: true,
            ...options
        };
        
        // Logique du plugin
        function setupPlugin() {
            // Implémentation
        }
        
        // API publique
        element.monPluginAPI = {
            update: (newOptions) => {
                Object.assign(config, newOptions);
                setupPlugin();
            },
            destroy: () => {
                // Nettoyage
                element.monPluginAPI = null;
            }
        };
        
        // Initialisation
        setupPlugin();
    }
    
    // Enregistrer le plugin
    if (global.cubFirst && global.cubFirst.registerPlugin) {
        global.cubFirst.registerPlugin('mon-plugin', initMonPlugin);
    } else {
        // Fallback pour l'intégration manuelle
        global.initMonPlugin = initMonPlugin;
    }
    
})(typeof window !== 'undefined' ? window : this);
```

### CSS du Plugin

```css
/* src/styles.css */
.mon-plugin {
    position: relative;
    display: inline-block;
}

.mon-plugin-content {
    padding: 1rem;
    border-radius: 0.5rem;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mon-plugin.animated {
    transition: all 0.3s ease;
}

.mon-plugin.theme-dark .mon-plugin-content {
    background: #1f2937;
    color: white;
}
```

---

## 🔍 Debugging et Tests

### Outils de Debug

```javascript
// Mode debug pour les plugins
function initDebugPlugin(element, options) {
    const config = { ...defaultOptions, ...options };
    
    // Mode debug
    if (config.debug) {
        console.group(`🔧 Plugin Debug: ${element.tagName}`);
        console.log('Element:', element);
        console.log('Options:', config);
        console.log('API:', element.pluginAPI);
        console.groupEnd();
    }
    
    // Logging conditionnel
    function debugLog(message, data = null) {
        if (config.debug) {
            console.log(`[Plugin] ${message}`, data);
        }
    }
    
    // API avec debugging
    element.pluginAPI = {
        start: () => {
            debugLog('Plugin démarré');
            // Logique du plugin
        },
        
        stop: () => {
            debugLog('Plugin arrêté');
            // Logique d'arrêt
        }
    };
}
```

### Tests Unitaires

```javascript
// tests/plugin.test.js
describe('Mon Plugin', () => {
    let element;
    let pluginAPI;
    
    beforeEach(() => {
        // Setup
        element = document.createElement('div');
        element.setAttribute('data-plugin', 'mon-plugin');
        document.body.appendChild(element);
        
        // Initialiser le plugin
        initMonPlugin(element, { debug: true });
        pluginAPI = element.pluginAPI;
    });
    
    afterEach(() => {
        // Cleanup
        if (pluginAPI) pluginAPI.destroy();
        element.remove();
    });
    
    test('doit initialiser correctement', () => {
        expect(pluginAPI).toBeDefined();
        expect(pluginAPI.start).toBeInstanceOf(Function);
    });
    
    test('doit démarrer et s\'arrêter', () => {
        pluginAPI.start();
        expect(pluginAPI.getIsActive()).toBe(true);
        
        pluginAPI.stop();
        expect(pluginAPI.getIsActive()).toBe(false);
    });
    
    test('doit émettre des événements', (done) => {
        element.addEventListener('plugin:started', (e) => {
            expect(e.detail.step).toBe(0);
            done();
        });
        
        pluginAPI.start();
    });
});
```

### Tests d'Intégration

```html
<!-- tests/integration.html -->
<!DOCTYPE html>
<html>
<head>
    <script src="cubfirst.min.js"></script>
    <script src="mon-plugin.min.js"></script>
</head>
<body>
    <div data-plugin="mon-plugin" data-options='{"debug": true}'>
        Test du plugin
    </div>
    
    <script>
        // Tests d'intégration
        const element = document.querySelector('[data-plugin="mon-plugin"]');
        const api = element.monPluginAPI;
        
        // Test 1: Initialisation
        console.assert(api !== null, 'API doit être disponible');
        
        // Test 2: Fonctionnalité de base
        api.start();
        console.assert(api.getIsActive() === true, 'Plugin doit être actif');
        
        // Test 3: Événements
        let eventReceived = false;
        element.addEventListener('plugin:started', () => {
            eventReceived = true;
        });
        
        api.start();
        setTimeout(() => {
            console.assert(eventReceived === true, 'Événement doit être émis');
        }, 100);
    </script>
</body>
</html>
```

---

## 🎉 Conclusion

Vous avez maintenant toutes les clés pour créer des plugins cubFirst avancés ! 

### ✅ Checklist de Développement

- [ ] **Structure** : Plugin bien organisé avec API publique
- [ ] **Configuration** : Options validées et documentées
- [ ] **Événements** : Système d'événements complet
- [ ] **Mémoire** : Gestion propre des ressources
- [ ] **Tests** : Tests unitaires et d'intégration
- [ ] **Documentation** : README et exemples d'utilisation
- [ ] **Distribution** : Package npm ou CDN

### 🚀 Ressources Supplémentaires

- [Documentation cubFirst](index.md) - Guide complet du framework
- [Exemples de Plugins](https://github.com/Romtouf/cubfirst/tree/main/examples) - Plugins de référence
- [Communauté](https://github.com/Romtouf/cubfirst/discussions) - Aide et partage

**Bon développement ! 🎉**
