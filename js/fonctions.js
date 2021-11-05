function clicBouton(){
    console.log("Whaowwwww ! I've been click !!!!!!");
    console.log("Couleur du bouton", bouton.style.backgroundColor);

    if( bouton.style.backgroundColor == "red" ){
        bouton.style.backgroundColor = "green";
        document.body.style.backgroundColor = "#FFF";

    }else{
        bouton.style.backgroundColor = "red";
        document.body.style.backgroundColor = "#646464";
    }
}