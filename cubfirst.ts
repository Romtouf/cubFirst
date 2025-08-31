// === STYLES CSS INTÉGRÉS ===
const injectStyles = () => {
  if (document.getElementById('cubfirst-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'cubfirst-styles';
  style.textContent = `
    /* Styles de base - Namespace cubfirst */
    .cubfirst-hidden { display: none !important; }
    .cubfirst-cursor-pointer { cursor: pointer; }
    
    /* Modal */
    .cubfirst-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    
    .cubfirst-modal-content {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      max-width: 90%;
      max-height: 90%;
      position: relative;
    }
    
    .cubfirst-modal-close {
      position: absolute;
      top: 10px;
      right: 15px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #666;
    }
    
    /* Tabs */
    .cubfirst-tabs .tab-title {
      padding: 0.5rem 1rem;
      cursor: pointer;
      border-bottom: 2px solid transparent;
    }
    
    .cubfirst-tabs .tab-title.active {
      border-bottom-color: #3b82f6;
      color: #3b82f6;
    }
    
    /* Accordion */
    .accordion-header {
      cursor: pointer;
      padding: 1rem;
      border: 1px solid #e5e7eb;
      background: #f9fafb;
    }
    
    .accordion-content {
      padding: 1rem;
      border: 1px solid #e5e7eb;
      border-top: none;
    }
    
    /* Dropdown */
    .cubfirst-dropdown-menu[hidden] {
      display: none !important;
    }
    
    .cubfirst-dropdown-menu {
      position: absolute;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 0.375rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      z-index: 50;
    }
    
    /* Carousel */
    .cubfirst-carousel {
      position: relative;
      overflow: hidden;
    }
    
    .carousel-slide {
      display: none;
    }
    
    .carousel-slide.active {
      display: block;
    }
    
    /* Toast */
    .cubfirst-toast {
      position: fixed;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      color: white;
      z-index: 1000;
      transition: opacity 0.5s ease;
    }
    
    .cubfirst-toast.success { background-color: #10b981; }
    .cubfirst-toast.error { background-color: #ef4444; }
    .cubfirst-toast.info { background-color: #6b7280; }
    
    /* Animations */
    .cubfirst-reveal-fade {
      animation: fadeIn 0.6s ease-in-out;
    }
    
    .cubfirst-reveal-slide {
      animation: slideUp 0.6s ease-in-out;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    /* Hamburger */
    .cubfirst-hamburger {
      display: flex;
      flex-direction: column;
      width: 30px;
      height: 20px;
      cursor: pointer;
    }
    
    .cubfirst-hamburger span {
      width: 100%;
      height: 3px;
      background-color: #333;
      margin: 2px 0;
      transition: 0.3s;
    }
    
    .cubfirst-hamburger.is-active span:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .cubfirst-hamburger.is-active span:nth-child(2) {
      opacity: 0;
    }
    
    .cubfirst-hamburger.is-active span:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  `;
  document.head.appendChild(style);
};

// === MODAL ===
function initModal(el: HTMLElement, options: { trigger: string }) {
  if (!validateOptions('modal', options, ['trigger'])) return;
  
  const modalContent = el.querySelector(".modal-content") as HTMLElement;
  if (!modalContent) {
    console.error('cubFirst: Modal nécessite un élément .modal-content');
    return;
  }
  
  el.classList.add("cubfirst-modal");
  modalContent.classList.add("cubfirst-modal-content");

  const closeButton = document.createElement("button");
  closeButton.textContent = "×";
  closeButton.className = "cubfirst-modal-close";
  
  const open = () => {
    el.style.display = "flex";
    document.body.style.overflow = "hidden";
    el.dispatchEvent(new CustomEvent('modalOpen'));
  };
  
  const close = () => {
    el.style.display = "none";
    document.body.style.overflow = "auto";
    el.dispatchEvent(new CustomEvent('modalClose'));
  };
  
  closeButton.onclick = close;
  modalContent.appendChild(closeButton);

  const trigger = document.querySelector(options.trigger);
  if (trigger) {
    trigger.addEventListener("click", open);
  }

  el.addEventListener("click", (e) => {
    if (e.target === el) close();
  });

  const escapeHandler = (e: KeyboardEvent) => {
    if (e.key === "Escape" && el.style.display === "flex") {
      close();
    }
  };
  document.addEventListener("keydown", escapeHandler);
  
  // API publique
  const api = {
    open,
    close,
    isOpen: () => el.style.display === "flex",
    setContent: (content: string) => {
      const contentEl = modalContent.querySelector(':not(.cubfirst-modal-close)');
      if (contentEl) contentEl.innerHTML = content;
    }
  };
  
  (el as any).modalAPI = api;
  
  cleanupManager.register(el, () => {
    document.removeEventListener("keydown", escapeHandler);
    delete (el as any).modalAPI;
  });

  el.style.display = "none";
}

// === TABS ===
function initTabs(el: HTMLElement) {
  el.classList.add("cubfirst-tabs");
  let titles = el.querySelectorAll("[data-tab]");
  let contents = el.querySelectorAll(".tab-content");
  let currentTab = 0;
  
  titles.forEach(title => title.classList.add("tab-title"));
  
  const activate = (id: string) => {
    const tabIndex = Array.from(titles).findIndex(t => (t as HTMLElement).dataset.tab === id);
    if (tabIndex !== -1) currentTab = tabIndex;
    
    titles.forEach((t) =>
      t.classList.toggle("active", (t as HTMLElement).dataset.tab === id)
    );
    contents.forEach((c) => {
      const content = c as HTMLElement;
      content.style.display = content.dataset.tab === id ? "block" : "none";
    });
    
    el.dispatchEvent(new CustomEvent('tabChange', { 
      detail: { activeTab: id, tabIndex: currentTab } 
    }));
  };
  
  const refresh = () => {
    titles = el.querySelectorAll("[data-tab]");
    contents = el.querySelectorAll(".tab-content");
    titles.forEach(title => title.classList.add("tab-title"));
  };
  
  titles.forEach((t) =>
    t.addEventListener("click", () => activate((t as HTMLElement).dataset.tab!))
  );
  
  // API publique
  const api = {
    goTo: (index: number) => {
      const tabId = (titles[index] as HTMLElement)?.dataset.tab;
      if (tabId) activate(tabId);
    },
    goToTab: (tabId: string) => activate(tabId),
    getCurrentTab: () => currentTab,
    getTotalTabs: () => titles.length,
    addTab: (id: string, title: string, content: string) => {
      const titleEl = document.createElement('div');
      titleEl.setAttribute('data-tab', id);
      titleEl.className = 'tab-title';
      titleEl.textContent = title;
      
      const contentEl = document.createElement('div');
      contentEl.setAttribute('data-tab', id);
      contentEl.className = 'tab-content';
      contentEl.innerHTML = content;
      
      el.querySelector('.tab-nav')?.appendChild(titleEl);
      el.appendChild(contentEl);
      
      refresh();
      titleEl.addEventListener("click", () => activate(id));
    },
    refresh
  };
  
  (el as any).tabsAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).tabsAPI;
  });
  
  const first = (titles[0] as HTMLElement)?.dataset.tab;
  if (first) activate(first);
}

// === ACCORDION ===
function initAccordion(el: HTMLElement) {
  let items = Array.from(el.querySelectorAll(".accordion-item"));
  let openIndex = -1;
  
  const toggle = (index: number) => {
    const item = items[index];
    if (!item) return;
    
    const content = item.querySelector(".accordion-content") as HTMLElement;
    if (!content) return;
    
    const wasOpen = content.style.display === "block";
    
    // Fermer tous
    items.forEach((item, i) => {
      const c = item.querySelector(".accordion-content") as HTMLElement;
      if (c) c.style.display = "none";
    });
    
    // Ouvrir si fermé
    if (!wasOpen) {
      content.style.display = "block";
      openIndex = index;
    } else {
      openIndex = -1;
    }
    
    el.dispatchEvent(new CustomEvent('accordionToggle', { 
      detail: { openIndex, totalItems: items.length } 
    }));
  };
  
  items.forEach((item, index) => {
    const header = item.querySelector(".accordion-header") as HTMLElement;
    const content = item.querySelector(".accordion-content") as HTMLElement;
    
    if (!header || !content) return;
    
    content.style.display = "none";
    header.addEventListener("click", () => toggle(index));
  });
  
  // API publique
  const api = {
    open: (index: number) => {
      if (index >= 0 && index < items.length) {
        const content = items[index].querySelector(".accordion-content") as HTMLElement;
        if (content) {
          items.forEach((item) => {
            const c = item.querySelector(".accordion-content") as HTMLElement;
            if (c) c.style.display = "none";
          });
          content.style.display = "block";
          openIndex = index;
        }
      }
    },
    close: (index: number) => {
      if (index >= 0 && index < items.length) {
        const content = items[index].querySelector(".accordion-content") as HTMLElement;
        if (content) {
          content.style.display = "none";
          if (openIndex === index) openIndex = -1;
        }
      }
    },
    toggle: (index: number) => toggle(index),
    closeAll: () => {
      items.forEach((item) => {
        const c = item.querySelector(".accordion-content") as HTMLElement;
        if (c) c.style.display = "none";
      });
      openIndex = -1;
    },
    getOpenIndex: () => openIndex,
    getTotalItems: () => items.length,
    refresh: () => {
      items = Array.from(el.querySelectorAll(".accordion-item"));
    }
  };
  
  (el as any).accordionAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).accordionAPI;
  });
}

// === TOOLTIP ===
function initTooltip(el: HTMLElement, options: { text: string }) {
  if (!validateOptions('tooltip', options, ['text'])) return;
  
  const tip = document.createElement("div");
  tip.textContent = options.text;
  tip.className = "cubfirst-tooltip";
  Object.assign(tip.style, {
    position: "absolute",
    pointerEvents: "none",
    zIndex: "1000",
    display: "none",
    backgroundColor: "black",
    color: "white",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    whiteSpace: "nowrap",
  });
  
  document.body.appendChild(tip);
  
  const showTooltip = () => {
    tip.style.display = "block";
    const rect = el.getBoundingClientRect();
    tip.style.left = `${rect.left + window.scrollX}px`;
    tip.style.top = `${rect.top + window.scrollY - tip.offsetHeight - 8}px`;
  };
  
  const hideTooltip = () => {
    tip.style.display = "none";
  };
  
  el.addEventListener("mouseenter", showTooltip);
  el.addEventListener("mouseleave", hideTooltip);
  
  // API publique
  const api = {
    show: showTooltip,
    hide: hideTooltip,
    setText: (text: string) => {
      tip.textContent = text;
    },
    setPosition: (position: 'top' | 'bottom' | 'left' | 'right') => {
      // Position sera appliquée lors du prochain show
      (tip as any).position = position;
    },
    isVisible: () => tip.style.display === "block"
  };
  
  (el as any).tooltipAPI = api;
  
  cleanupManager.register(el, () => {
    tip.remove();
    delete (el as any).tooltipAPI;
  });
}

// === TOAST ===
function initToast(
  el: HTMLElement,
  options: { message: string; type?: string; duration?: number }
) {
  let currentMessage = options.message;
  let currentType = options.type || "info";
  let currentDuration = options.duration || 3000;
  let isVisible = false;
  let timeoutId: number | null = null;
  
  el.classList.add("cubfirst-toast", `toast-${currentType}`);
  el.textContent = currentMessage;
  el.style.display = "none";
  
  const show = () => {
    if (isVisible) return;
    isVisible = true;
    el.style.display = "block";
    el.dispatchEvent(new CustomEvent('toastShow'));
    
    if (currentDuration > 0) {
      timeoutId = setTimeout(() => {
        hide();
      }, currentDuration);
    }
  };
  
  const hide = () => {
    if (!isVisible) return;
    isVisible = false;
    el.style.display = "none";
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    el.dispatchEvent(new CustomEvent('toastHide'));
  };
  
  // API publique
  const api = {
    show,
    hide,
    toggle: () => isVisible ? hide() : show(),
    isVisible: () => isVisible,
    setMessage: (message: string) => {
      currentMessage = message;
      el.textContent = message;
    },
    setType: (type: string) => {
      el.classList.remove(`toast-${currentType}`);
      currentType = type;
      el.classList.add(`toast-${type}`);
    },
    setDuration: (duration: number) => {
      currentDuration = duration;
    },
    update: (message: string, type?: string, duration?: number) => {
      if (message) api.setMessage(message);
      if (type) api.setType(type);
      if (duration !== undefined) api.setDuration(duration);
    }
  };
  
  (el as any).toastAPI = api;
  
  cleanupManager.register(el, () => {
    if (timeoutId) clearTimeout(timeoutId);
    delete (el as any).toastAPI;
  });
  
  // Auto-show si spécifié
  if (options.message) {
    show();
  }
}

// === CONTACT FORM ===
function initContactForm(form: HTMLFormElement, options: { endpoint: string }) {
  if (!validateOptions('contact-form', options, ['endpoint'])) return;
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitBtn?.textContent || "Envoyer";
    
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Envoi...";
    }
    
    const data: Record<string, string> = {};
    new FormData(form).forEach((v, k) => (data[k] = v.toString()));
    
    try {
      const response = await fetch(options.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        alert("Message envoyé avec succès !");
        form.reset();
      } else {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de l'envoi du message");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }
  });
}

// === COPY ===
function initCopy(el: HTMLElement, options: { target: string }) {
  if (!validateOptions('copy', options, ['target'])) return;
  
  let target = document.querySelector(options.target) as HTMLElement;
  if (!target) {
    console.error(`cubFirst: Élément cible "${options.target}" introuvable pour le plugin copy`);
    return;
  }
  
  const originalText = el.textContent || "Copier";
  let lastCopiedText = "";
  
  const copy = async (customText?: string) => {
    const text = customText || (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement
        ? target.value
        : target.textContent || ""
    );
    
    try {
      await navigator.clipboard.writeText(text);
      lastCopiedText = text;
      el.textContent = "Copié !";
      setTimeout(() => (el.textContent = originalText), 2000);
      el.dispatchEvent(new CustomEvent('copySuccess', { detail: { text } }));
      return true;
    } catch {
      // Fallback pour les navigateurs plus anciens
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      
      lastCopiedText = text;
      el.textContent = "Copié !";
      setTimeout(() => (el.textContent = originalText), 2000);
      el.dispatchEvent(new CustomEvent('copySuccess', { detail: { text } }));
      return true;
    }
  };
  
  el.addEventListener("click", () => copy());
  
  // API publique
  const api = {
    copy,
    setText: (text: string) => copy(text),
    setTarget: (newTarget: string) => {
      const newEl = document.querySelector(newTarget) as HTMLElement;
      if (newEl) {
        target = newEl;
        options.target = newTarget;
      }
    },
    getLastCopied: () => lastCopiedText,
    getTargetText: () => {
      return target instanceof HTMLInputElement ||
             target instanceof HTMLTextAreaElement
        ? target.value
        : target.textContent || "";
    }
  };
  
  (el as any).copyAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).copyAPI;
  });
}

// === TOGGLE ===
function initToggle(el: HTMLElement, options: { target: string }) {
  const target = document.querySelector(options.target) as HTMLElement;
  if (!target) return;
  
  let isVisible = target.style.display !== "none" && !target.hasAttribute("hidden");
  
  const show = () => {
    if (isVisible) return;
    target.style.display = "";
    target.removeAttribute("hidden");
    isVisible = true;
    el.dispatchEvent(new CustomEvent('toggleShow', { detail: { target: options.target } }));
  };
  
  const hide = () => {
    if (!isVisible) return;
    target.style.display = "none";
    target.setAttribute("hidden", "true");
    isVisible = false;
    el.dispatchEvent(new CustomEvent('toggleHide', { detail: { target: options.target } }));
  };
  
  const toggle = () => {
    isVisible ? hide() : show();
  };
  
  el.addEventListener("click", toggle);
  
  // API publique
  const api = {
    show,
    hide,
    toggle,
    isVisible: () => isVisible,
    setTarget: (newTarget: string) => {
      const newEl = document.querySelector(newTarget) as HTMLElement;
      if (newEl) {
        options.target = newTarget;
        isVisible = newEl.style.display !== "none" && !newEl.hasAttribute("hidden");
      }
    }
  };
  
  (el as any).toggleAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).toggleAPI;
  });
}

// === SCROLLTO ===
function initScrollTo(
  el: HTMLElement,
  options: { target: string; offset?: number; behavior?: ScrollBehavior }
) {
  let target = document.querySelector(options.target) as HTMLElement;
  if (!target) return;
  
  let currentOffset = options.offset || 0;
  let currentBehavior = options.behavior || "smooth";
  
  const scrollTo = (customTarget?: string) => {
    const targetEl = customTarget ? document.querySelector(customTarget) as HTMLElement : target;
    if (!targetEl) return;
    
    const y = targetEl.getBoundingClientRect().top + window.scrollY - currentOffset;
    window.scrollTo({ top: y, behavior: currentBehavior });
    
    el.dispatchEvent(new CustomEvent('scrollToComplete', { 
      detail: { target: customTarget || options.target, offset: currentOffset } 
    }));
  };
  
  el.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo();
  });
  
  // API publique
  const api = {
    scrollTo: (customTarget?: string) => scrollTo(customTarget),
    setTarget: (newTarget: string) => {
      const newEl = document.querySelector(newTarget) as HTMLElement;
      if (newEl) {
        target = newEl;
        options.target = newTarget;
      }
    },
    setOffset: (offset: number) => {
      currentOffset = offset;
    },
    setBehavior: (behavior: ScrollBehavior) => {
      currentBehavior = behavior;
    },
    getTarget: () => options.target,
    getOffset: () => currentOffset
  };
  
  (el as any).scrollToAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).scrollToAPI;
  });
}

// === COUNTDOWN ===
function initCountdown(el: HTMLElement, options: { to: string }) {
  let targetDate = new Date(options.to);
  if (isNaN(targetDate.getTime())) {
    el.textContent = "Date invalide";
    return;
  }
  
  let interval: number | null = null;
  let isPaused = false;
  let isFinished = false;
  
  const update = () => {
    if (isPaused) return;
    
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    
    if (diff <= 0) {
      el.textContent = "Temps écoulé";
      isFinished = true;
      if (interval) clearInterval(interval);
      el.dispatchEvent(new CustomEvent('countdownFinished'));
      return;
    }
    
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff / 3600000) % 24);
    const m = Math.floor((diff / 60000) % 60);
    const s = Math.floor((diff / 1000) % 60);
    
    el.textContent = `${d}j ${h}h ${m}m ${s}s`;
    el.dispatchEvent(new CustomEvent('countdownTick', { 
      detail: { days: d, hours: h, minutes: m, seconds: s, remaining: diff } 
    }));
  };
  
  const start = () => {
    if (interval || isFinished) return;
    interval = setInterval(update, 1000);
    update();
  };
  
  const pause = () => {
    isPaused = true;
  };
  
  const resume = () => {
    isPaused = false;
  };
  
  const reset = () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    isPaused = false;
    isFinished = false;
    update();
  };
  
  // API publique
  const api = {
    start,
    pause,
    resume,
    reset,
    setTarget: (newTarget: string) => {
      const newDate = new Date(newTarget);
      if (!isNaN(newDate.getTime())) {
        targetDate = newDate;
        isFinished = false;
        update();
      }
    },
    getTarget: () => targetDate.toISOString(),
    isPaused: () => isPaused,
    isFinished: () => isFinished,
    getRemaining: () => {
      const diff = targetDate.getTime() - new Date().getTime();
      return Math.max(0, diff);
    }
  };
  
  (el as any).countdownAPI = api;
  
  start();
  
  cleanupManager.register(el, () => {
    if (interval) clearInterval(interval);
    delete (el as any).countdownAPI;
  });
}

// === DARKMODE TOGGLE ===
function initDarkModeToggle(el: HTMLElement) {
  let isDarkMode = localStorage.getItem("darkMode") === "true";
  
  // Restaurer l'état au chargement
  if (isDarkMode) {
    document.documentElement.classList.add("dark-mode");
  }
  
  const toggle = () => {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode.toString());
    el.dispatchEvent(new CustomEvent('darkModeToggle', { detail: { isDark: isDarkMode } }));
  };
  
  const setMode = (dark: boolean) => {
    isDarkMode = dark;
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode.toString());
    el.dispatchEvent(new CustomEvent('darkModeChange', { detail: { isDark: isDarkMode } }));
  };
  
  el.addEventListener("click", toggle);
  
  // API publique
  const api = {
    toggle,
    setMode,
    getMode: () => isDarkMode,
    isEnabled: () => isDarkMode,
    enable: () => setMode(true),
    disable: () => setMode(false)
  };
  
  (el as any).darkModeAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).darkModeAPI;
  });
}

// === CONFIRM ===
function initConfirm(el: HTMLElement, options: { message: string }) {
  let currentMessage = options.message || "Êtes-vous sûr ?";
  let confirmCallback: (() => void) | null = null;
  let cancelCallback: (() => void) | null = null;
  
  const show = (customMessage?: string) => {
    const message = customMessage || currentMessage;
    const result = confirm(message);
    
    if (result) {
      confirmCallback?.();
      el.dispatchEvent(new CustomEvent('confirmAccept', { detail: { message } }));
    } else {
      cancelCallback?.();
      el.dispatchEvent(new CustomEvent('confirmCancel', { detail: { message } }));
    }
    
    return result;
  };
  
  el.addEventListener("click", (e) => {
    if (!show()) {
      e.preventDefault();
    }
  });
  
  // API publique
  const api = {
    show,
    setMessage: (message: string) => {
      currentMessage = message;
    },
    onConfirm: (callback: () => void) => {
      confirmCallback = callback;
    },
    onCancel: (callback: () => void) => {
      cancelCallback = callback;
    },
    getMessage: () => currentMessage
  };
  
  (el as any).confirmAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).confirmAPI;
  });
}

// === DROPDOWN ===
function initDropdown(el: HTMLElement, options: { trigger: string }) {
  const trigger = document.querySelector(options.trigger) as HTMLElement;
  const menu = el.querySelector(".dropdown-menu") as HTMLElement;
  if (!trigger || !menu) return;

  menu.classList.add("cubfirst-dropdown-menu");
  menu.setAttribute("hidden", "true");
  let isOpen = false;

  const open = () => {
    if (isOpen) return;
    // Fermer tous les autres dropdowns
    document
      .querySelectorAll(".cubfirst-dropdown-menu")
      .forEach((m) => m.setAttribute("hidden", "true"));
    
    menu.removeAttribute("hidden");
    isOpen = true;
    el.dispatchEvent(new CustomEvent('dropdownOpen'));
  };

  const close = () => {
    if (!isOpen) return;
    menu.setAttribute("hidden", "true");
    isOpen = false;
    el.dispatchEvent(new CustomEvent('dropdownClose'));
  };

  const toggle = () => {
    isOpen ? close() : open();
  };

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle();
  });

  document.addEventListener("click", (e) => {
    if (!el.contains(e.target as Node)) {
      close();
    }
  });

  // API publique
  const api = {
    open,
    close,
    toggle,
    isOpen: () => isOpen,
    setItems: (items: Array<{text: string, value: string, onClick?: () => void}>) => {
      menu.innerHTML = '';
      items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'dropdown-item';
        menuItem.textContent = item.text;
        menuItem.dataset.value = item.value;
        if (item.onClick) {
          menuItem.addEventListener('click', item.onClick);
        }
        menu.appendChild(menuItem);
      });
    }
  };

  (el as any).dropdownAPI = api;

  cleanupManager.register(el, () => {
    delete (el as any).dropdownAPI;
  });
}

// === CAROUSEL ===
function initCarousel(el: HTMLElement, options: { interval?: number }) {
  let slides = Array.from(el.querySelectorAll(".carousel-slide"));
  if (slides.length === 0) return;

  el.classList.add("cubfirst-carousel");
  let current = 0;
  let autoInterval: number | null = null;
  let currentOptions = { ...options };

  // Créer les bullets container
  let bullets = document.createElement("div");
  bullets.className = "cubfirst-carousel-bullets";
  bullets.style.cssText = "display: flex; justify-content: center; gap: 8px; margin-top: 8px;";
  let bulletEls: HTMLElement[] = [];

  const updateBullets = () => {
    bullets.innerHTML = '';
    bulletEls = slides.map((_, i) => {
      const b = document.createElement("button");
      b.style.cssText = "width: 12px; height: 12px; border-radius: 50%; border: none; background-color: #d1d5db; cursor: pointer;";
      b.addEventListener("click", () => {
        api.goTo(i);
      });
      bullets.appendChild(b);
      return b;
    });
  };

  const showSlide = (i: number) => {
    if (i < 0 || i >= slides.length) return;
    current = i;
    slides.forEach((s, idx) => {
      const slide = s as HTMLElement;
      slide.classList.toggle("active", idx === i);
      if (bulletEls[idx]) {
        bulletEls[idx].style.backgroundColor = idx === i ? "#3b82f6" : "#d1d5db";
      }
    });
    
    // Émettre un événement personnalisé
    el.dispatchEvent(new CustomEvent('carouselChange', { 
      detail: { currentSlide: current, totalSlides: slides.length } 
    }));
  };

  const next = () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  };

  const prev = () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

  const resetAutoplay = () => {
    if (autoInterval) clearInterval(autoInterval);
    const interval = currentOptions.interval || 0;
    if (interval > 0) {
      autoInterval = setInterval(next, interval);
    }
  };

  const refresh = () => {
    slides = Array.from(el.querySelectorAll(".carousel-slide"));
    updateBullets();
    if (current >= slides.length) {
      current = Math.max(0, slides.length - 1);
    }
    showSlide(current);
  };

  // API publique
  const api = {
    next: () => {
      next();
      resetAutoplay();
    },
    prev: () => {
      prev();
      resetAutoplay();
    },
    goTo: (index: number) => {
      if (index >= 0 && index < slides.length) {
        showSlide(index);
        resetAutoplay();
      }
    },
    play: () => {
      resetAutoplay();
    },
    pause: () => {
      if (autoInterval) {
        clearInterval(autoInterval);
        autoInterval = null;
      }
    },
    setSpeed: (interval: number) => {
      currentOptions.interval = interval;
      resetAutoplay();
    },
    refresh: refresh,
    getCurrentSlide: () => current,
    getTotalSlides: () => slides.length,
    isPlaying: () => autoInterval !== null
  };

  // Stocker l'API sur l'élément
  (el as any).carouselAPI = api;

  // Event listeners pour les boutons
  el.querySelector('[data-carousel="next"]')?.addEventListener("click", api.next);
  el.querySelector('[data-carousel="prev"]')?.addEventListener("click", api.prev);

  // Initialisation
  updateBullets();
  el.appendChild(bullets);
  showSlide(current);
  resetAutoplay();

  // Observer pour détecter les changements de slides
  const observer = new MutationObserver(() => {
    const newSlides = Array.from(el.querySelectorAll(".carousel-slide"));
    if (newSlides.length !== slides.length) {
      refresh();
    }
  });
  observer.observe(el, { childList: true, subtree: true });

  // Enregistrer le nettoyage
  cleanupManager.register(el, () => {
    if (autoInterval) clearInterval(autoInterval);
    observer.disconnect();
    delete (el as any).carouselAPI;
  });
}

// === REVEAL-ON-SCROLL ===
function initReveal(el: HTMLElement, options: { animation?: string }) {
  el.style.opacity = "0";
  el.style.transition = "opacity 0.6s ease";
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.classList.add(`cubfirst-reveal-${options.animation || "fade"}`);
          observer.disconnect();
        }
      });
    },
    { threshold: 0.1 }
  );
  
  observer.observe(el);
}

// === INPUT MASK ===
function initInputMask(el: HTMLInputElement, options: { type: string }) {
  if (options.type === "phone") {
    el.setAttribute("maxlength", "14");
    el.addEventListener("input", () => {
      const value = el.value.replace(/\D/g, "");
      if (value.length >= 10) {
        el.value = value.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5");
      } else {
        el.value = value;
      }
    });
  }
  
  if (options.type === "date") {
    el.setAttribute("placeholder", "JJ/MM/AAAA");
    el.setAttribute("maxlength", "10");
    el.addEventListener("input", () => {
      const value = el.value.replace(/\D/g, "");
      if (value.length >= 8) {
        el.value = value.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
      } else if (value.length >= 4) {
        el.value = value.replace(/(\d{2})(\d{2})/, "$1/$2");
      } else {
        el.value = value;
      }
    });
  }
}

// === PROGRESS SCROLL ===
function initProgressScroll(el: HTMLElement) {
  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
    el.style.width = `${percent}%`;
  };
  
  Object.assign(el.style, {
    position: "fixed",
    top: "0",
    left: "0",
    height: "4px",
    backgroundColor: "#3b82f6",
    zIndex: "9999",
    width: "0%",
    transition: "width 0.1s ease"
  });
  
  window.addEventListener("scroll", update);
  update();
}

// === CARD ===
function initCard(
  el: HTMLElement,
  options: { title?: string; content?: string; image?: string; footer?: string }
) {
  // Au lieu de remplacer l'élément, on le modifie
  el.className = "cubfirst-card";
  el.style.cssText = "border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 1rem; background: white; display: flex; flex-direction: column; gap: 0.5rem;";

  if (options.image) {
    const img = document.createElement("img");
    img.src = options.image;
    img.alt = options.title || "";
    img.style.cssText = "border-radius: 6px; width: 100%; object-fit: cover;";
    el.appendChild(img);
  }

  if (options.title) {
    const h3 = document.createElement("h3");
    h3.textContent = options.title;
    h3.style.cssText = "font-size: 1.25rem; font-weight: bold; margin: 0;";
    el.appendChild(h3);
  }

  if (options.content) {
    const p = document.createElement("p");
    p.textContent = options.content;
    p.style.cssText = "font-size: 0.875rem; color: #6b7280; margin: 0;";
    el.appendChild(p);
  }

  if (options.footer) {
    const f = document.createElement("div");
    f.textContent = options.footer;
    f.style.cssText = "font-size: 0.75rem; color: #9ca3af; padding-top: 0.5rem; border-top: 1px solid #e5e7eb;";
    el.appendChild(f);
  }
}

// === RATING ===
function initRating(el: HTMLElement, options: { value?: number; max?: number; readonly?: boolean }) {
  let value = options.value || 0;
  let max = options.max || 5;
  let readonly = options.readonly || false;
  
  el.classList.add("cubfirst-rating");
  
  const render = () => {
    el.innerHTML = '';
    for (let i = 1; i <= max; i++) {
      const star = document.createElement("span");
      star.textContent = "★";
      star.dataset.value = i.toString();
      star.style.cursor = readonly ? "default" : "pointer";
      star.style.color = i <= value ? "#fbbf24" : "#d1d5db";
      
      if (!readonly) {
        star.addEventListener("click", () => {
          value = i;
          render();
          el.dispatchEvent(new CustomEvent("ratingChanged", { detail: { rating: i } }));
        });
      }
      
      el.appendChild(star);
    }
  };
  
  // API publique
  const api = {
    setValue: (newValue: number) => {
      if (newValue >= 0 && newValue <= max) {
        value = newValue;
        render();
        el.dispatchEvent(new CustomEvent("ratingChanged", { detail: { rating: newValue } }));
      }
    },
    getValue: () => value,
    setMax: (newMax: number) => {
      if (newMax > 0) {
        max = newMax;
        if (value > max) value = max;
        render();
      }
    },
    getMax: () => max,
    setReadonly: (isReadonly: boolean) => {
      readonly = isReadonly;
      render();
    },
    isReadonly: () => readonly
  };
  
  (el as any).ratingAPI = api;
  
  cleanupManager.register(el, () => {
    delete (el as any).ratingAPI;
  });
  
  render();
}

// === LOAD MORE ===
function initLoadMore(
  el: HTMLElement,
  options: { target: string; batch?: number }
) {
  const items = Array.from(document.querySelectorAll<HTMLElement>(options.target));
  let visibleCount = 0;
  const batch = options.batch || 3;

  const showNextBatch = () => {
    const nextItems = items.slice(visibleCount, visibleCount + batch);
    nextItems.forEach((item) => {
      item.style.display = "";
      item.removeAttribute("hidden");
    });
    visibleCount += batch;
    
    if (visibleCount >= items.length) {
      el.style.display = "none";
    }
  };

  // Initialiser : cacher les éléments après le premier batch
  items.forEach((item, index) => {
    if (index >= batch) {
      item.style.display = "none";
      item.setAttribute("hidden", "true");
    }
  });

  el.addEventListener("click", showNextBatch);
  
  // Montrer le premier batch
  showNextBatch();
  visibleCount = batch; // Corriger le compteur
}

// === HAMBURGER ===
function initHamburger(el: HTMLElement, options: { target: string }) {
  const target = document.querySelector<HTMLElement>(options.target);
  if (!target) return;

  // Créer l'icône hamburger si elle n'existe pas
  if (!el.querySelector('span')) {
    el.className = "cubfirst-hamburger";
    for (let i = 0; i < 3; i++) {
      const span = document.createElement('span');
      el.appendChild(span);
    }
  }

  const toggleMenu = () => {
    const isHidden = target.style.display === "none" || target.hasAttribute("hidden");
    
    if (isHidden) {
      target.style.display = "";
      target.removeAttribute("hidden");
    } else {
      target.style.display = "none";
      target.setAttribute("hidden", "true");
    }
    
    el.classList.toggle("is-active");
  };

  el.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", (e) => {
    if (!target.contains(e.target as Node) && !el.contains(e.target as Node)) {
      target.style.display = "none";
      target.setAttribute("hidden", "true");
      el.classList.remove("is-active");
    }
  });
}

// === FILTER ===
function initFilter(
  el: HTMLElement,
  options: { target: string; value: string }
) {
  const items = document.querySelectorAll<HTMLElement>(options.target);
  
  el.addEventListener("click", () => {
    items.forEach((item) => {
      const tags = item.dataset.tag || "";
      const shouldShow = tags.includes(options.value) || options.value === "all";
      
      if (shouldShow) {
        item.style.display = "";
        item.removeAttribute("hidden");
      } else {
        item.style.display = "none";
        item.setAttribute("hidden", "true");
      }
    });
  });
}

// === GRID EXPAND ===
function initGridExpand(el: HTMLElement) {
  el.style.transition = "all 0.3s ease";
  el.style.cursor = "pointer";
  
  el.addEventListener("click", () => {
    const isExpanded = el.classList.toggle("cubfirst-grid-expanded");
    
    if (isExpanded) {
      Object.assign(el.style, {
        transform: "scale(1.05)",
        zIndex: "10",
        position: "relative",
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
      });
    } else {
      Object.assign(el.style, {
        transform: "scale(1)",
        zIndex: "",
        position: "",
        boxShadow: ""
      });
    }
  });
}

// === HOVER PREVIEW ===
function initHoverPreview(
  el: HTMLElement,
  options: { image?: string; text?: string }
) {
  if (!options.image && !options.text) return;
  
  const preview = document.createElement("div");
  preview.className = "cubfirst-hover-preview";
  Object.assign(preview.style, {
    position: "fixed",
    zIndex: "50",
    display: "none",
    pointerEvents: "none",
    background: "#fff",
    border: "1px solid #ccc",
    padding: "6px",
    borderRadius: "6px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "250px"
  });

  if (options.image) {
    const img = document.createElement("img");
    img.src = options.image;
    img.style.cssText = "max-width: 200px; width: 100%; height: auto; display: block;";
    preview.appendChild(img);
  }
  
  if (options.text) {
    const txt = document.createElement("p");
    txt.textContent = options.text;
    txt.style.cssText = "margin: 4px 0 0 0; font-size: 14px; color: #333;";
    preview.appendChild(txt);
  }

  document.body.appendChild(preview);
  
  const showPreview = () => {
    preview.style.display = "block";
  };
  
  const hidePreview = () => {
    preview.style.display = "none";
  };
  
  const movePreview = (e: MouseEvent) => {
    const x = e.pageX + 16;
    const y = e.pageY + 16;
    
    // Vérifier les limites de l'écran
    const rect = preview.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width - 20;
    const maxY = window.innerHeight - rect.height - 20;
    
    preview.style.left = `${Math.min(x, maxX)}px`;
    preview.style.top = `${Math.min(y, maxY)}px`;
  };
  
  el.addEventListener("mouseenter", showPreview);
  el.addEventListener("mouseleave", hidePreview);
  el.addEventListener("mousemove", movePreview);
  
  // Nettoyage
  const observer = new MutationObserver(() => {
    if (!document.contains(el)) {
      preview.remove();
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

// === GESTION DES ERREURS ET VALIDATION ===
function parseOptions(optionsStr: string): any {
  if (!optionsStr) return {};
  try {
    return JSON.parse(optionsStr);
  } catch (e) {
    console.warn(`cubFirst: Options JSON invalides "${optionsStr}". Utilisation des options par défaut.`);
    return {};
  }
}

function validateOptions(pluginName: string, options: any, required: string[] = []): boolean {
  for (const key of required) {
    if (!options[key]) {
      console.error(`cubFirst: Option "${key}" requise pour le plugin "${pluginName}"`);
      return false;
    }
  }
  return true;
}

// === GESTIONNAIRE DE NETTOYAGE ===
class CleanupManager {
  private cleanupFunctions = new Map<HTMLElement, (() => void)[]>();
  private observer: MutationObserver;

  constructor() {
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.removedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.cleanupElement(node as HTMLElement);
          }
        });
      });
    });
    this.observer.observe(document.body, { childList: true, subtree: true });
  }

  register(element: HTMLElement, cleanup: () => void) {
    if (!this.cleanupFunctions.has(element)) {
      this.cleanupFunctions.set(element, []);
    }
    this.cleanupFunctions.get(element)!.push(cleanup);
  }

  cleanupElement(element: HTMLElement) {
    const cleanups = this.cleanupFunctions.get(element);
    if (cleanups) {
      cleanups.forEach(cleanup => {
        try {
          cleanup();
        } catch (e) {
          console.warn('cubFirst: Erreur lors du nettoyage:', e);
        }
      });
      this.cleanupFunctions.delete(element);
    }

    // Nettoyer récursivement les enfants
    element.querySelectorAll('[data-plugin]').forEach(child => {
      this.cleanupElement(child as HTMLElement);
    });
  }

  destroy() {
    this.observer.disconnect();
    this.cleanupFunctions.clear();
  }
}

const cleanupManager = new CleanupManager();

// === UTILITAIRES ===
const cubFirst = {
  // Fonction pour initialiser manuellement un plugin
  init: (selector: string, plugin: string, options: any = {}) => {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    elements.forEach(el => {
      el.dataset.plugin = plugin;
      el.dataset.options = JSON.stringify(options);
      initPlugin(el, plugin, options);
    });
  },
  
  // Fonction pour créer un toast programmativement
  toast: (message: string, type: string = 'info', duration: number = 3000) => {
    const div = document.createElement('div');
    initToast(div, { message, type, duration });
  },
  
  // Fonction pour obtenir la version
  version: '2.0.0',
  
  // Fonction pour nettoyer manuellement
  cleanup: (element?: HTMLElement) => {
    if (element) {
      cleanupManager.cleanupElement(element);
    } else {
      cleanupManager.destroy();
    }
  },
  
  // Fonction pour accéder à l'API d'un plugin
  getAPI: (element: HTMLElement | string, pluginType?: string) => {
    const el = typeof element === 'string' ? document.querySelector(element) as HTMLElement : element;
    if (!el) return null;
    
    // Retourner l'API spécifique si demandée
    if (pluginType === 'carousel') return (el as any).carouselAPI || null;
    if (pluginType === 'modal') return (el as any).modalAPI || null;
    if (pluginType === 'tabs') return (el as any).tabsAPI || null;
    if (pluginType === 'accordion') return (el as any).accordionAPI || null;
    if (pluginType === 'rating') return (el as any).ratingAPI || null;
    if (pluginType === 'dropdown') return (el as any).dropdownAPI || null;
    if (pluginType === 'toast') return (el as any).toastAPI || null;
    if (pluginType === 'tooltip') return (el as any).tooltipAPI || null;
    if (pluginType === 'toggle') return (el as any).toggleAPI || null;
    if (pluginType === 'copy') return (el as any).copyAPI || null;
    if (pluginType === 'scrollto') return (el as any).scrollToAPI || null;
    if (pluginType === 'countdown') return (el as any).countdownAPI || null;
    if (pluginType === 'darkmode') return (el as any).darkModeAPI || null;
    if (pluginType === 'confirm') return (el as any).confirmAPI || null;
    
    // Ou retourner toutes les APIs disponibles
    return {
      carousel: (el as any).carouselAPI || null,
      modal: (el as any).modalAPI || null,
      tabs: (el as any).tabsAPI || null,
      accordion: (el as any).accordionAPI || null,
      rating: (el as any).ratingAPI || null,
      dropdown: (el as any).dropdownAPI || null,
      toast: (el as any).toastAPI || null,
      tooltip: (el as any).tooltipAPI || null,
      toggle: (el as any).toggleAPI || null,
      copy: (el as any).copyAPI || null,
      scrollto: (el as any).scrollToAPI || null,
      countdown: (el as any).countdownAPI || null,
      darkmode: (el as any).darkModeAPI || null,
      confirm: (el as any).confirmAPI || null
    };
  }
};

// Fonction auxiliaire pour initialiser un plugin
function initPlugin(el: HTMLElement, name: string, opts: any) {
  try {
    switch (name) {
      case "modal":
        initModal(el, opts);
        break;
      case "tabs":
        initTabs(el);
        break;
      case "accordion":
        initAccordion(el);
        break;
      case "tooltip":
        initTooltip(el, opts);
        break;
      case "contact-form":
        initContactForm(el as HTMLFormElement, opts);
        break;
      case "copy":
        initCopy(el, opts);
        break;
      case "toggle":
        initToggle(el, opts);
        break;
      case "scrollto":
        initScrollTo(el, opts);
        break;
      case "countdown":
        initCountdown(el, opts);
        break;
      case "darkmode-toggle":
        initDarkModeToggle(el);
        break;
      case "confirm":
        initConfirm(el, opts);
        break;
      case "dropdown":
        initDropdown(el, opts);
        break;
      case "carousel":
        initCarousel(el, opts);
        break;
      case "toast":
        initToast(el, opts);
        break;
      case "reveal":
        initReveal(el, opts);
        break;
      case "input-mask":
        initInputMask(el as HTMLInputElement, opts);
        break;
      case "progress-scroll":
        initProgressScroll(el);
        break;
      case "card":
        initCard(el, opts);
        break;
      case "filter":
        initFilter(el, opts);
        break;
      case "grid-expand":
        initGridExpand(el);
        break;
      case "hover-preview":
        initHoverPreview(el, opts);
        break;
      case "rating":
        initRating(el, opts);
        break;
      case "load-more":
        initLoadMore(el, opts);
        break;
      case "hamburger":
        initHamburger(el, opts);
        break;
      default:
        console.warn(`cubFirst: Plugin "${name}" non reconnu`);
    }
  } catch (err) {
    console.error(`cubFirst: Erreur sur le plugin "${name}"`, err);
  }
}

// === BOOTSTRAP ===
document.addEventListener("DOMContentLoaded", () => {
  // Injecter les styles CSS
  injectStyles();
  
  // Initialiser tous les plugins
  document.querySelectorAll<HTMLElement>("[data-plugin]").forEach((el) => {
    const name = el.dataset.plugin;
    if (!name) return;
    
    const opts = parseOptions(el.dataset.options || '{}');
    initPlugin(el, name, opts);
  });
});

// Exposer cubFirst globalement
if (typeof window !== 'undefined') {
  (window as any).cubFirst = cubFirst;
  
  // Ajouter des méthodes de convenance globales
  (window as any).getCarousel = (selector: string) => {
    const el = document.querySelector(selector) as HTMLElement;
    return el ? (el as any).carouselAPI : null;
  };
}
