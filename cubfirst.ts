// === MODAL ===
function initModal(el: HTMLElement, options: { trigger: string }) {
  const modalContent = el.querySelector(".modal-content") as HTMLElement;
  if (!modalContent || !options.trigger) return;
  el.classList.add("cubfirst-modal");
  modalContent.classList.add("cubfirst-modal-content");

  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.className = "cubfirst-modal-close";
  closeButton.onclick = () => (el.style.display = "none");
  el.appendChild(closeButton);

  const trigger = document.querySelector(options.trigger);
  if (trigger)
    trigger.addEventListener("click", () => (el.style.display = "flex"));

  el.addEventListener("click", (e) => {
    if (e.target === el) el.style.display = "none";
  });

  el.style.display = "none";
}

// === TABS ===
function initTabs(el: HTMLElement) {
  const titles = el.querySelectorAll("[data-tab]");
  const contents = el.querySelectorAll(".tab-content");
  const activate = (id: string) => {
    titles.forEach((t) =>
      t.classList.toggle("active", (t as HTMLElement).dataset.tab === id)
    );
    contents.forEach(
      (c) =>
        ((c as HTMLElement).style.display =
          (c as HTMLElement).dataset.tab === id ? "block" : "none")
    );
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
    content.style.display = "none";
    header.addEventListener("click", () => {
      const open = content.style.display === "block";
      el.querySelectorAll(".accordion-content").forEach(
        (c) => ((c as HTMLElement).style.display = "none")
      );
      if (!open) content.style.display = "block";
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
  el.addEventListener("mouseenter", () => {
    tip.style.display = "block";
    const r = el.getBoundingClientRect();
    tip.style.left = `${r.left + window.scrollX}px`;
    tip.style.top = `${r.top + window.scrollY - tip.offsetHeight - 8}px`;
  });
  el.addEventListener("mouseleave", () => (tip.style.display = "none"));
}

// === TOAST ===
function initToast(
  el: HTMLElement,
  options: { message: string; type?: string; duration?: number }
) {
  if (!options.message) return;
  const toast = document.createElement("div");
  toast.className = `fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded shadow-md text-white z-50 transition-opacity duration-500 ${
    options.type === "success"
      ? "bg-green-600"
      : options.type === "error"
      ? "bg-red-600"
      : "bg-gray-800"
  }`;
  toast.textContent = options.message;
  document.body.appendChild(toast);
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
    const data: Record<string, string> = {};
    new FormData(form).forEach((v, k) => (data[k] = v.toString()));
    try {
      await fetch(options.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      alert("Message envoyé !");
      form.reset();
    } catch {
      alert("Erreur lors de l’envoi");
    }
  });
}

// === COPY ===
function initCopy(el: HTMLElement, options: { target: string }) {
  const target = document.querySelector(options.target) as HTMLElement;
  if (!target) return;
  el.addEventListener("click", async () => {
    const text =
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement
        ? target.value
        : target.textContent || "";
    try {
      await navigator.clipboard.writeText(text);
      el.textContent = "Copié !";
      setTimeout(() => (el.textContent = "Copier"), 2000);
    } catch {
      alert("Échec de la copie");
    }
  });
}

// === TOGGLE ===
function initToggle(el: HTMLElement, options: { target: string }) {
  const target = document.querySelector(options.target) as HTMLElement;
  if (!target) return;
  el.addEventListener("click", () => {
    target.toggleAttribute("hidden");
  });
}

// === SCROLLTO ===
function initScrollTo(
  el: HTMLElement,
  options: { target: string; offset?: number; behavior?: ScrollBehavior }
) {
  const target = document.querySelector(options.target) as HTMLElement;
  if (!target) return;
  el.addEventListener("click", () => {
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
  if (isNaN(target.getTime())) return;
  const update = () => {
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    if (diff <= 0) return (el.textContent = "Temps écoulé");
    const d = Math.floor(diff / 86400000),
      h = Math.floor((diff / 3600000) % 24),
      m = Math.floor((diff / 60000) % 60),
      s = Math.floor((diff / 1000) % 60);
    el.textContent = `${d}j ${h}h ${m}m ${s}s`;
  };
  update();
  setInterval(update, 1000);
}

// === DARKMODE TOGGLE ===
function initDarkModeToggle(el: HTMLElement) {
  el.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
  });
}

// === CONFIRM ===
function initConfirm(el: HTMLElement, options: { message: string }) {
  el.addEventListener("click", (e) => {
    if (!confirm(options.message)) e.preventDefault();
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
    document
      .querySelectorAll(".cubfirst-dropdown-menu")
      .forEach((m) => m.setAttribute("hidden", "true"));
    if (isHidden) menu.removeAttribute("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!el.contains(e.target as Node)) menu.setAttribute("hidden", "true");
  });
}

// === CAROUSEL ===
function initCarousel(el: HTMLElement, options: { interval?: number }) {
  const slides = Array.from(el.querySelectorAll(".carousel-slide"));
  if (slides.length === 0) return;

  let current = 0;
  const bullets = document.createElement("div");
  bullets.className =
    "cubfirst-carousel-bullets flex justify-center gap-2 mt-2";

  const bulletEls = slides.map((_, i) => {
    const b = document.createElement("button");
    b.className = "w-3 h-3 rounded-full bg-gray-400";
    b.addEventListener("click", () => {
      current = i;
      showSlide(current);
    });
    bullets.appendChild(b);
    return b;
  });

  el.appendChild(bullets);

  const showSlide = (i: number) => {
    slides.forEach((s, idx) => {
      (s as HTMLElement).style.display = idx === i ? "block" : "none";
      bulletEls[idx].className =
        idx === i
          ? "w-3 h-3 rounded-full bg-blue-600"
          : "w-3 h-3 rounded-full bg-gray-400";
    });
  };
  showSlide(current);

  const next = () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  };
  const prev = () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

  el.querySelector('[data-carousel="next"]')?.addEventListener("click", next);
  el.querySelector('[data-carousel="prev"]')?.addEventListener("click", prev);

  const interval = options.interval || 0;
  if (interval > 0) setInterval(next, interval);
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
    el.addEventListener("input", () => {
      el.value = el.value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5");
    });
  }
  if (options.type === "date") {
    el.addEventListener("input", () => {
      el.value = el.value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    });
  }
}

// === PROGRESS SCROLL ===
function initProgressScroll(el: HTMLElement) {
  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percent = Math.min(100, (scrollTop / docHeight) * 100);
    el.style.width = `${percent}%`;
  };
  el.style.position = "fixed";
  el.style.top = "0";
  el.style.left = "0";
  el.style.height = "4px";
  el.style.backgroundColor = "#3b82f6";
  el.style.zIndex = "9999";
  window.addEventListener("scroll", update);
  update();
}

// === CARD ===
function initCard(
  el: HTMLElement,
  options: { title?: string; content?: string; image?: string; footer?: string }
) {
  const card = document.createElement("div");
  card.className = "cubfirst-card rounded shadow p-4 bg-white space-y-2";

  if (options.image) {
    const img = document.createElement("img");
    img.src = options.image;
    img.alt = options.title || "";
    img.className = "rounded w-full mb-2";
    card.appendChild(img);
  }

  if (options.title) {
    const h3 = document.createElement("h3");
    h3.textContent = options.title;
    h3.className = "text-lg font-bold";
    card.appendChild(h3);
  }

  if (options.content) {
    const p = document.createElement("p");
    p.textContent = options.content;
    p.className = "text-sm text-gray-700";
    card.appendChild(p);
  }

  if (options.footer) {
    const f = document.createElement("div");
    f.textContent = options.footer;
    f.className = "text-xs text-gray-500 pt-2 border-t";
    card.appendChild(f);
  }

  el.replaceWith(card);
}

// === RATING ===
function initRating(
  el: HTMLElement,
  options: { value?: number; max?: number; readonly?: boolean }
) {
  const rating = options.value || 0;
  const max = options.max || 5;
  const readonly = options.readonly ?? true;
  const stars: HTMLElement[] = [];

  for (let i = 1; i <= max; i++) {
    const star = document.createElement("span");
    star.textContent = "★";
    star.style.cursor = readonly ? "default" : "pointer";
    star.style.fontSize = "1.5rem";
    star.style.color = i <= rating ? "#facc15" : "#d1d5db";

    if (!readonly) {
      star.addEventListener("mouseenter", () => {
        stars.forEach(
          (s, idx) => (s.style.color = idx < i ? "#facc15" : "#d1d5db")
        );
      });
      star.addEventListener("mouseleave", () => {
        stars.forEach(
          (s, idx) => (s.style.color = idx < rating ? "#facc15" : "#d1d5db")
        );
      });
      star.addEventListener("click", () => {
        stars.forEach(
          (s, idx) => (s.style.color = idx < i ? "#facc15" : "#d1d5db")
        );
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
  const items = Array.from(
    document.querySelectorAll<HTMLElement>(options.target)
  );
  let visibleCount = 0;
  const batch = options.batch || 3;

  const showNextBatch = () => {
    const nextItems = items.slice(visibleCount, visibleCount + batch);
    nextItems.forEach((item) => item.classList.remove("hidden"));
    visibleCount += batch;
    if (visibleCount >= items.length) {
      el.style.display = "none";
    }
  };

  el.addEventListener("click", showNextBatch);
  items.forEach((item, index) => {
    if (index >= batch) item.classList.add("hidden");
  });
}

// === HAMBURGER ===
function initHamburger(el: HTMLElement, options: { target: string }) {
  const target = document.querySelector<HTMLElement>(options.target);
  if (!target) return;

  const toggleMenu = () => {
    const isOpen = !target.classList.contains("hidden");
    target.classList.toggle("hidden", isOpen);
    el.classList.toggle("is-active", !isOpen);
  };

  el.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", (e) => {
    if (!target.contains(e.target as Node) && !el.contains(e.target as Node)) {
      target.classList.add("hidden");
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
      const tag = item.dataset.tag || "";
      item.style.display =
        tag.includes(options.value) || options.value === "all" ? "" : "none";
    });
  });
}

// === GRID EXPAND ===
function initGridExpand(el: HTMLElement) {
  el.style.transition = "all 0.3s ease";
  el.classList.add("cursor-pointer");
  el.addEventListener("click", () => {
    const isExpanded = el.classList.toggle("cubfirst-grid-expanded");
    if (isExpanded) {
      el.style.transform = "scale(1.05)";
      el.style.zIndex = "10";
      el.style.position = "relative";
      el.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    } else {
      el.style.transform = "scale(1)";
      el.style.zIndex = "";
      el.style.position = "";
      el.style.boxShadow = "";
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
  preview.className =
    "cubfirst-hover-preview fixed z-50 hidden pointer-events-none";
  preview.style.background = "#fff";
  preview.style.border = "1px solid #ccc";
  preview.style.padding = "6px";
  preview.style.borderRadius = "6px";
  preview.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";

  if (options.image) {
    const img = document.createElement("img");
    img.src = options.image;
    img.style.maxWidth = "200px";
    preview.appendChild(img);
  }
  if (options.text) {
    const txt = document.createElement("p");
    txt.textContent = options.text;
    txt.style.marginTop = "4px";
    txt.style.fontSize = "14px";
    preview.appendChild(txt);
  }

  document.body.appendChild(preview);
  el.addEventListener("mouseenter", () => (preview.style.display = "block"));
  el.addEventListener("mouseleave", () => (preview.style.display = "none"));
  el.addEventListener("mousemove", (e) => {
    preview.style.left = `${e.pageX + 16}px`;
    preview.style.top = `${e.pageY + 16}px`;
  });
}

// === BOOTSTRAP ===
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll<HTMLElement>("[data-plugin]").forEach((el) => {
    const name = el.dataset.plugin;
    const opts = el.dataset.options ? JSON.parse(el.dataset.options) : {};
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
      }
    } catch (err) {
      console.warn(`cubFirst: erreur sur le plugin "${name}"`, err);
    }
  });
});
