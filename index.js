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