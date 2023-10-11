// Récupérez les modales et les éléments de fermeture
const modalBravo = document.getElementById("modalBravo");
const modalPerdu = document.getElementById("modalPerdu");
const closeBravoModal = document.querySelector("#modalBravo .close");
const closePerduModal = document.querySelector("#modalPerdu .close");

// Récupérez les champs du formulaire
const nomInput = document.getElementById("nom");
const prenomInput = document.getElementById("titre");
const adresseInput = document.getElementById("adresse");
const villeInput = document.getElementById("metier");
const emailInput = document.getElementById("ville");
const telephoneInput = document.getElementById("telephone");
const dateNaissanceInput = document.getElementById("mail");

// Récupérez le bouton de validation
const validerButton = document.getElementById("valider");

// Écoutez l'événement de clic sur le bouton de validation
validerButton.addEventListener("click", () => {
    const nom = nomInput.value.trim().toLowerCase(); // Convertir en minuscules
    const prenom = prenomInput.value.trim().toLowerCase(); // Convertir en minuscules
    const adresse = adresseInput.value.trim().toLowerCase(); // Convertir en minuscules
    const ville = villeInput.value.trim().toLowerCase(); // Convertir en minuscules
    const email = emailInput.value.trim().toLowerCase(); // Convertir en minuscules
    const telephone = telephoneInput.value.trim().toLowerCase(); // Convertir en minuscules
    const dateNaissance = dateNaissanceInput.value.trim().toLowerCase(); // Convertir en minuscules

    // Vérifiez si tous les champs ont les bonnes valeurs (en minuscules)
    if (
        nom === "juiphe" &&
        prenom === "docteur" &&
        adresse === "chupacabra" &&
        ville === "psychologue sans diplôme" &&
        email === "paris" &&
        telephone === "06xxxxxxxx" &&
        dateNaissance === "docteur.juiphe@gmail.com"
    ) {
        modalBravo.style.display = "block"; // Affiche la modal de succès (Bravo)
    } else {
        modalPerdu.style.display = "block"; // Affiche la modal d'échec (Perdu)
    }
});

// Écoutez l'événement de clic sur les éléments de fermeture des modales
closeBravoModal.addEventListener("click", () => {
    modalBravo.style.display = "none"; // Masque la modal de succès (Bravo)
});

closePerduModal.addEventListener("click", () => {
    modalPerdu.style.display = "none"; // Masque la modal d'échec (Perdu)
});


