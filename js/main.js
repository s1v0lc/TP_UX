// Test pour changer icônes du menu avec le checkbox 

// ****BUG******
// animation de fermeture du menu
// Il faudrait trouver un moyen de "restart" l'animation

let btn = document.getElementById('btn'); // checkbox
let iconeOuvert = document.getElementById('ouvrir'); // icône burger
let iconeFerme = document.getElementById('fermer'); // icône X
let nav = document.querySelector('nav'); // barre de navigation

// Lorsque l'utlisateur appuie sur le bouton du menu
btn.addEventListener("click", function() {
    if(btn.checked) { //si le bouton est coché
        // Affichage / Retrait du bouton
        iconeOuvert.style.display = "none";
        iconeFerme.style.display = "unset";
        // Gestion des classes du menu
        if(nav.classList.contains("fermerMenu") == false) {
            nav.classList.add("ouvrirMenu");
        } else {
            nav.classList.replace("fermerMenu", "ouvrirMenu");
        }
    } else { //si le bouton est décoché
        // Affichage / Retrait du bouton
        iconeOuvert.style.display = "unset";
        iconeFerme.style.display = "none";
        // Gestion des classes du menu
        nav.classList.replace("ouvrirMenu", "fermerMenu");
    }
});
// Retrait de la classe une fois l'animation de fermeture terminée
nav.addEventListener("animationiteration", function(event) {
    if(event.animationName == "animerMenu"){
        nav.classList.remove("fermerMenu");
    }
});