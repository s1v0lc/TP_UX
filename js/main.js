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

// Gestion des articles dans le panier
let btnsPlus = document.querySelectorAll(".boiteNb p:nth-child(3)"); // bouton pour ajouter un item
let btnsMoins = document.querySelectorAll(".boiteNb p:nth-child(1)"); // bouton pour enlever un item
let nbItems = document.querySelectorAll(".boiteNb p:nth-child(2)"); // nombre d'items
let totaux = document.querySelectorAll(".total"); 
let prix = 49.99; //temporaire

for (let i = 0; i < btnsPlus.length ; i++) {
    btnsPlus[i].addEventListener("click", augmenteNb);
    btnsMoins[i].addEventListener("click", diminueNb);
    btnsPlus[i].index = i;
    btnsMoins[i].index = i;
    totaux[i].index = i;
}
function augmenteNb(event) {
    let i = event.target.index;
    nbItems[i].innerHTML = Number(nbItems[i].innerHTML) + 1;
    totaux[i].innerHTML = (Number(nbItems[i].innerHTML) * prix).toFixed(2)+ " $";
}
function diminueNb(event) {
    let i = event.target.index;
    if (Number(nbItems[i].innerHTML) > 0) {
        nbItems[i].innerHTML = Number(nbItems[i].innerHTML) - 1;
        totaux[i].innerHTML = (Number(nbItems[i].innerHTML) * prix).toFixed(2)+ " $";
    }
}

// Retirer les articles du panier
let retirer = document.querySelectorAll(".retirer");
for (const bouton of retirer) {
    bouton.addEventListener("click", function (event) {
        event.target.parentElement.parentElement.style.display = "none";
    })
}
// -> s'il n'y a plus de produits afficher message d'erreur
let produits = document.querySelectorAll(".produit");
if (produits.length = 0) {
    // ->faire apparaître message
}