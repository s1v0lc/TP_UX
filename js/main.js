// Test pour changer icônes du menu avec le checkbox
let btn = document.getElementById('btn');
let iconeOuvert = document.getElementById('ouvrir');
let iconeFerme = document.getElementById('fermer');
// Lorsque l'utlisateur appuie sur le bouton du menu
btn.addEventListener("click", function() {
    if(btn.checked) { //si le bouton est coché
        iconeOuvert.style.display = "none";
        iconeFerme.style.display = "unset";
    } else { //si le bouton est décoché
        iconeOuvert.style.display = "unset";
        iconeFerme.style.display = "none";
    }
});