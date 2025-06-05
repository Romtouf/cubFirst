// === STYLES CSS INTÉGRÉS ===
const injectStyles = () => {
  if (document.getElementById('cubfirst-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'cubfirst-styles';
  style.textContent = `
    /* Styles de base */
    .hidden { display: none !important; }
    .cursor-pointer { cursor: pointer; }
    
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
  const modalContent = el.querySelector(".modal-content") as HTMLElement;
  if (!modalContent || !options.trigger) return;
  
  el.classList.add("cubfirst-modal");
  modalContent.classList.add("cubfirst-modal-content");

  const closeButton = document.createElement("button");
  closeButton.textContent = "×";
  closeButton.className = "cubfirst-modal-close";
  closeButton.onclick = () => {
    el.style.display = "none";
    document.body.style.overflow = "auto";
  };
  modalContent.appendChild(closeButton);

  const trigger = document.querySelector(options.trigger);
  if (trigger) {
    trigger.addEventListener("click", () => {
      el.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  }

  el.addEventListener("click", (e) => {
    if (e.target === el) {
      el.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Fermer avec Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && el.style.display === "flex") {
      el.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  el.style.display = "none";
}

// === TABS ===
function initTabs(el: HTMLElement) {
  el.classList.add("cubfirst-tabs");
  const titles = el.querySelectorAll("[data-tab]");
  const contents = el.querySelectorAll(".tab-content");
  
  titles.forEach(title => title.classList.add("tab-title"));
  
  const activate = (id: string) => {
    titles.forEach((t) =>
      t.classList.toggle("active", (t as HTMLElement).dataset.tab === id)
    );
    contents.forEach((c) => {
      const content = c as HTMLElement;
      content.style.display = content.dataset.tab === id ? "block" : "none";
    });
  };
  
  titles.forEach((t) =>
    t.addEventListener("click", () => activate((t as HTMLElement).dataset.tab!))
  );
  
  const first = (titles[0] as HTMLElement)?.dataset.tab;
  if (first) activate(first);
}

// === ACCORDION ===
function initAccordion(el: HTMLElement) {
  el.querySelectorAll(".accordion-item").forEach((item) => {
    const header = item.querySelector(".accordion-header") as HTMLElement;
    const content = item.querySelector(".accordion-content") as HTMLElement;
    
    if (!header || !content) return;
    
    content.style.display = "none";
    header.addEventListener("click", () => {
      const isOpen = content.style.display === "block";
      
      // Fermer tous les autres
      el.querySelectorAll(".accordion-content").forEach(
        (c) => ((c as HTMLElement).style.display = "none")
      );
      
      // Ouvrir celui-ci si il était fermé
      if (!isOpen) content.style.display = "block";
    });
  });
}

// === TOOLTIP ===
function initTooltip(el: HTMLElement, options: { text: string }) {
  if (!options.text) return;
  
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
  
  // Nettoyage quand l'élément est supprimé
  const observer = new MutationObserver(() => {
    if (!document.contains(el)) {
      tip.remove();
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

// === TOAST ===
function initToast(
  el: HTMLElement,
  options: { message: string; type?: string; duration?: number }
) {
  if (!options.message) return;
  
  const toast = document.createElement("div");
  toast.className = `cubfirst-toast ${options.type || 'info'}`;
  toast.textContent = options.message;
  
  document.body.appendChild(toast);
  
  // Animation d'entrée
  setTimeout(() => toast.style.opacity = "1", 10);
  
  // Suppression automatique
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 500);
  }, options.duration || 3000);
}

// === CONTACT FORM ===
function initContactForm(form: HTMLFormElement, options: { endpoint: string }) {
  if (!options.endpoint) return;
  
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
  const target = document.querySelector(options.target) as HTMLElement;
  if (!target) return;
  
  const originalText = el.textContent || "Copier";
  
  el.addEventListener("click", async () => {
    const text =
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement
        ? target.value
        : target.textContent || "";
    
    try {
      await navigator.clipboard.writeText(text);
      el.textContent = "Copié !";
      setTimeout(() => (el.textContent = originalText), 2000);
    } catch {
      // Fallback pour les navigateurs plus anciens
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      
      el.textContent = "Copié !";
      setTimeout(() => (el.textContent = originalText), 2000);
    }
  });
}

// === TOGGLE ===
function initToggle(el: HTMLElement, options: { target: string }) {
  const target = document.querySelector(options.target) as HTMLElement;
  if (!target) return;
  
  el.addEventListener("click", () => {
    const isHidden = target.style.display === "none" || target.hasAttribute("hidden");
    
    if (isHidden) {
      target.style.display = "";
      target.removeAttribute("hidden");
    } else {
      target.style.display = "none";
      target.setAttribute("hidden", "true");
    }
  });
}

// === SCROLLTO ===
function initScrollTo(
  el: HTMLElement,
  options: { target: string; offset?: number; behavior?: ScrollBehavior }
) {
  const target = document.querySelector(options.target) as HTMLElement;
  if (!target) return;
  
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const y =
      target.getBoundingClientRect().top +
      window.scrollY -
      (options.offset || 0);
    window.scrollTo({ top: y, behavior: options.behavior || "smooth" });
  });
}

// === COUNTDOWN ===
function initCountdown(el: HTMLElement, options: { to: string }) {
  const target = new Date(options.to);
  if (isNaN(target.getTime())) {
    el.textContent = "Date invalide";
    return;
  }
  
  const update = () => {
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    
    if (diff <= 0) {
      el.textContent = "Temps écoulé";
      return;
    }
    
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff / 3600000) % 24);
    const m = Math.floor((diff / 60000) % 60);
    const s = Math.floor((diff / 1000) % 60);
    
    el.textContent = `${d}j ${h}h ${m}m ${s}s`;
  };
  
  update();
  const interval = setInterval(update, 1000);
  
  // Nettoyage
  const observer = new MutationObserver(() => {
    if (!document.contains(el)) {
      clearInterval(interval);
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

// === DARKMODE TOGGLE ===
function initDarkModeToggle(el: HTMLElement) {
  el.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDark.toString());
  });
  
  // Restaurer l'état au chargement
  if (localStorage.getItem("darkMode") === "true") {
    document.documentElement.classList.add("dark-mode");
  }
}

// === CONFIRM ===
function initConfirm(el: HTMLElement, options: { message: string }) {
  el.addEventListener("click", (e) => {
    if (!confirm(options.message || "Êtes-vous sûr ?")) {
      e.preventDefault();
    }
  });
}

// === DROPDOWN ===
function initDropdown(el: HTMLElement, options: { trigger: string }) {
  const trigger = document.querySelector(options.trigger) as HTMLElement;
  const menu = el.querySelector(".dropdown-menu") as HTMLElement;
  if (!trigger || !menu) return;

  menu.classList.add("cubfirst-dropdown-menu");
  menu.setAttribute("hidden", "true");

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isHidden = menu.hasAttribute("hidden");
    
    // Fermer tous les autres dropdowns
    document
      .querySelectorAll(".cubfirst-dropdown-menu")
      .forEach((m) => m.setAttribute("hidden", "true"));
    
    if (isHidden) menu.removeAttribute("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!el.contains(e.target as Node)) {
      menu.setAttribute("hidden", "true");
    }
  });
}

// === CAROUSEL ===
function initCarousel(el: HTMLElement, options: { interval?: number }) {
  const slides = Array.from(el.querySelectorAll(".carousel-slide"));
  if (slides.length === 0) return;

  el.classList.add("cubfirst-carousel");
  let current = 0;
  let autoInterval: number | null = null;

  // Créer les bullets
  const bullets = document.createElement("div");
  bullets.className = "cubfirst-carousel-bullets";
  bullets.style.cssText = "display: flex; justify-content: center; gap: 8px; margin-top: 8px;";

  const bulletEls = slides.map((_, i) => {
    const b = document.createElement("button");
    b.style.cssText = "width: 12px; height: 12px; border-radius: 50%; border: none; background-color: #d1d5db; cursor: pointer;";
    b.addEventListener("click", () => {
      current = i;
      showSlide(current);
      resetAutoplay();
    });
    bullets.appendChild(b);
    return b;
  });

  el.appendChild(bullets);

  const showSlide = (i: number) => {
    slides.forEach((s, idx) => {
      const slide = s as HTMLElement;
      slide.classList.toggle("active", idx === i);
      bulletEls[idx].style.backgroundColor = idx === i ? "#3b82f6" : "#d1d5db";
    });
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
    const interval = options.interval || 0;
    if (interval > 0) {
      autoInterval = setInterval(next, interval);
    }
  };

  el.querySelector('[data-carousel="next"]')?.addEventListener("click", () => {
    next();
    resetAutoplay();
  });
  
  el.querySelector('[data-carousel="prev"]')?.addEventListener("click", () => {
    prev();
    resetAutoplay();
  });

  showSlide(current);
  resetAutoplay();
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
function initRating(
  el: HTMLElement,
  options: { value?: number; max?: number; readonly?: boolean }
) {
  let currentRating = options.value || 0;
  const max = options.max || 5;
  const readonly = options.readonly ?? true;
  const stars: HTMLElement[] = [];

  el.style.cssText = "display: flex; gap: 2px;";

  for (let i = 1; i <= max; i++) {
    const star = document.createElement("span");
    star.textContent = "★";
    star.style.cssText = `cursor: ${readonly ? "default" : "pointer"}; font-size: 1.5rem; color: ${i <= currentRating ? "#facc15" : "#d1d5db"}; user-select: none;`;

    if (!readonly) {
      star.addEventListener("mouseenter", () => {
        stars.forEach((s, idx) => {
          s.style.color = idx < i ? "#facc15" : "#d1d5db";
        });
      });
      
      star.addEventListener("mouseleave", () => {
        stars.forEach((s, idx) => {
          s.style.color = idx < currentRating ? "#facc15" : "#d1d5db";
        });
      });
      
      star.addEventListener("click", () => {
        currentRating = i;
        stars.forEach((s, idx) => {
          s.style.color = idx < i ? "#facc15" : "#d1d5db";
        });
        
        // Émettre un événement personnalisé
        el.dispatchEvent(new CustomEvent("ratingChanged", { detail: { rating: currentRating } }));
      });
    }

    stars.push(star);
    el.appendChild(star);
  }
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
  version: '2.0.0'
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
    
    const opts = el.dataset.options ? JSON.parse(el.dataset.options) : {};
    initPlugin(el, name, opts);
  });
});

// Exposer cubFirst globalement
if (typeof window !== 'undefined') {
  (window as any).cubFirst = cubFirst;
}
