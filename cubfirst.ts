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
  const root = document.documentElement;
  const cls = "dark-mode";
  const saved = localStorage.getItem("theme");
  if (
    saved === "dark" ||
    (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    root.classList.add(cls);
  }
  el.addEventListener("click", () => {
    const dark = root.classList.toggle(cls);
    localStorage.setItem("theme", dark ? "dark" : "light");
  });
}

// === CONFIRM ===
function initConfirm(
  el: HTMLElement,
  options: { message: string; action?: string }
) {
  el.addEventListener("click", (e) => {
    const confirmResult = window.confirm(options.message);
    if (!confirmResult) return e.preventDefault();
    if (options.action) {
      const target = document.querySelector(options.action);
      if (target instanceof HTMLFormElement) target.submit();
      if (target instanceof HTMLAnchorElement)
        window.location.href = target.href;
    }
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
      }
    } catch (err) {
      console.warn(`cubFirst: erreur sur le plugin "${name}"`, err);
    }
  });
});
