document.addEventListener("DOMContentLoaded", () => {
  const scrollUpButton = document.getElementById("scrollUp");
  const scrollDownButton = document.getElementById("scrollDown");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  // Vérifie si les éléments sont bien sélectionnés
  if (!scrollUpButton || !scrollDownButton || !header || !footer) {
    console.log("Erreur : les boutons, le header ou le footer ne sont pas trouvés.");
    return;
  }

  // Fonction pour vérifier le défilement et afficher ou cacher les boutons
  function toggleScrollButtons() {
    const headerBottom = header.getBoundingClientRect().bottom;
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Affiche ou cache la flèche de défilement vers le haut
    if (headerBottom < 0) {
      scrollUpButton.classList.add("visible");
    } else {
      scrollUpButton.classList.remove("visible");
    }

    // Affiche ou cache la flèche de défilement vers le bas
    if (footerTop > windowHeight) {
      scrollDownButton.classList.add("visible");
    } else {
      scrollDownButton.classList.remove("visible");
    }
  }

  // Masque la flèche de défilement vers le haut au chargement initial
  scrollUpButton.classList.remove("visible");
  scrollDownButton.classList.add("visible");

  // Appelle toggleScrollButtons au défilement
  window.addEventListener("scroll", toggleScrollButtons);

  // Défilement vers le haut de la page
  scrollUpButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Défilement vers le bas de la page
  scrollDownButton.addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });

  // Appelle toggleScrollButtons pour initialiser l'état correct des boutons
  toggleScrollButtons();
});
