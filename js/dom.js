const lesDivs = document.getElementsByTagName('div');

console.log(lesDivs);

const divBye = lesDivs[1];
const divHello = lesDivs[0];

console.log("La divBye ", divBye.innerHTML);

divBye.style.color = "red";
divHello.style.color = "green";

console.log(divBye.style.color);


const lesParagraphes = document.getElementsByTagName("p");

console.log(lesParagraphes);

const monParagraphe = lesParagraphes[0];

monParagraphe.style.backgroundColor = "yellow";

const deuxiemeParagraphe = lesParagraphes[1];

deuxiemeParagraphe.style.backgroundColor = "orange";

// deuxiemeParagraphe.innerHTML = "<span>Tata</span>";

const monSpan = document.createElement("span");
monSpan.innerText = "Titi";

console.log(monSpan);

deuxiemeParagraphe.innerHTML = "";

deuxiemeParagraphe.appendChild(monSpan);

const premiereCouleur = "white";
const deuxiemeCouleur = "green";


monSpan.style.color = premiereCouleur;

monSpan.style.color = deuxiemeCouleur;

// les événements

const bouton = document.getElementById('bouton');

console.log(bouton);

// bouton.onclick = function(){
//     console.log("Whaow ! I've been clicked !!!!!!");
// };

bouton.addEventListener('click', clicBouton);


// bouton.addEventListener('click', function (){
//     console.log("Whaowwwww ! I've been click !!!!!!");
//     console.log("Couleur du bouton", bouton.style.backgroundColor);

//     if( bouton.style.backgroundColor == "red" ){
//         bouton.style.backgroundColor = "green";
//         document.body.style.backgroundColor = "#FFF";

//     }else{
//         bouton.style.backgroundColor = "red";
//         document.body.style.backgroundColor = "#646464";
//     }

// });
