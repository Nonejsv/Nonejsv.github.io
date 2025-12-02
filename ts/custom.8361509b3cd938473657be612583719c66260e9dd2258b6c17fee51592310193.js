(() => {
  // <stdin>
  function enhanceArticleCards() {
    const cards = document.querySelectorAll(".article-list article");
    cards.forEach((card) => {
      card.style.cursor = "pointer";
      card.addEventListener("click", (event) => {
        if (event.button !== 0) return;
        const target = event.target;
        if (target && target.closest("a")) return;
        const link = card.querySelector("a[href]");
        if (!link) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          link.target = "_blank";
          link.click();
          return;
        }
        window.location.assign(link.href);
      });
    });
  }
  function attachMouseRipple() {
    const body = document.body;
    if (!body) return;
    body.addEventListener("click", (event) => {
      if (event.button !== 0) return;
      const target = event.target;
      if (target && target.closest("a, button, input, textarea, select, label")) {
        return;
      }
      const ripple = document.createElement("span");
      ripple.className = "mouse-ripple";
      const x = event.clientX;
      const y = event.clientY;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);
      ripple.addEventListener("animationend", () => {
        if (ripple.parentElement) {
          ripple.parentElement.removeChild(ripple);
        }
      });
    });
  }
  function initCustomEnhancements() {
    enhanceArticleCards();
    attachMouseRipple();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCustomEnhancements);
  } else {
    initCustomEnhancements();
  }
})();
