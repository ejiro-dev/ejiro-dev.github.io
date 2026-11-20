const menuButton = document.getElementById("menu-toggle");
const quickMenu = document.getElementById("quick-menu");

function closeMenu() {
  if (!menuButton || !quickMenu) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open quick links");
  quickMenu.classList.remove("menu-open");
  quickMenu.hidden = true;
}

if (menuButton && quickMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMenu();
      return;
    }
    quickMenu.hidden = false;
    quickMenu.classList.remove("menu-open");
    requestAnimationFrame(() => quickMenu.classList.add("menu-open"));
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close quick links");
  });

  document.addEventListener("click", (event) => {
    if (!quickMenu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });

  quickMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
}

const revealItems = document.querySelectorAll(".project-card, .toolkit-card, .about-content, .cert-copy");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => {
    item.classList.add("reveal");
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
