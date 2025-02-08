document.addEventListener("DOMContentLoaded", function () {
  const moreText = document.getElementById("moreText");
  const toggleButton = document.querySelector("[data-bs-target='#moreText']");

  toggleButton.addEventListener("click", function () {
    if (moreText.classList.contains("show")) {
      toggleButton.textContent = "Voir plus";
    } else {
      toggleButton.textContent = "Voir moins";
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.classList.remove("d-none");
    } else {
      backToTop.classList.add("d-none");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });