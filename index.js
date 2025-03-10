document.addEventListener("DOMContentLoaded", function () {
  const moreText = document.getElementById("moreText");
  const toggleButton = document.querySelector("[data-bs-target='#moreText']");

  toggleButton.addEventListener("click", function () {
    const isExpanded = moreText.classList.contains("show-more");
    toggleButton.setAttribute("aria-expanded", !isExpanded);
    
    if (isExpanded) {      
      toggleButton.textContent = "Voir plus";
      moreText.classList.remove("show-more");
    } else {      
      toggleButton.textContent = "Voir moins";
      moreText.classList.add("show-more");
    }
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  const backToTop = document.getElementById("backToTop");
  
  // Amélioration de l'accessibilité pour le bouton "Retour en haut"
  backToTop.setAttribute("aria-label", "Retourner en haut de la page");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.classList.remove("d-none");
      backToTop.removeAttribute("aria-hidden");
    } else {
      backToTop.classList.add("d-none");
      backToTop.setAttribute("aria-hidden", "true");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Gestion de la navigation au clavier
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !backToTop.classList.contains("d-none")) {
      backToTop.click();
    }
  });
});

