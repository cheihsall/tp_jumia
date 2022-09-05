let imgcenter = document.getElementsByClassName("imgcenter");
let etape = 0;
let nbrimg = imgcenter.length;

let precedant = document.querySelector('.precedant');
let suivant = document.querySelector('.suivant');

function enleverActiveImage(){
    for(let i=0 ;i<nbrimg ; i++ ){ imgcenter[i].classList.remove('active');
}
}

suivant.addEventListener('click' ,function(){
    etape++;
    if(etape >= nbrimg){
        etape = 0;
    }
    enleverActiveImage();
    imgcenter[etape].classList.add('active');

})

precedant.addEventListener('click' ,function(){ 
    etape--;
    if(etape < 0){
        etape = nbrimg-1;
    }
    enleverActiveImage();
    imgcenter[etape].classList.add('active');
     } )
     setInterval(function(){
        etape++;
        if(etape >= nbrimg){
            etape = 0;
        }
        enleverActiveImage();
        imgcenter[etape].classList.add('active');

     }, 3000)

     let bas1 = document.getElementsByClassName("bas1")[0];
     let bntleft = document.getElementsByClassName("btnleft")[0];
     let btnright =document.getElementsByClassName("btnright")[0];

     function defilerImages(defil){
        bas1.scrollBy({top:0 , left:defil ,behavior:"smooth" })
     }

     btnright.addEventListener('click', function(){
        defilerImages(700)

     })
     bntleft.addEventListener('click' ,function(){
        defilerImages(-700)

     })




/* Lorsque l'utilisateur clique sur le bouton, basculer entre le masquage et l'affichage du contenu de la liste déroulante *function maFonction1(){     document.getElementById("sous_menu1").classList.toggle("change"); }function maFonction2(){     document.getElementById("sous_menu2").classList.toggle("change"); } 
  //Fermez le menu déroulant si l'utilisateur clique en dehors de celui-ci window.onclick = function(e) {     if (!e.target.matches('.mybutton')) {       var sousOnglets = document.getElementsByClassName("sous_onglet");       for (var i = 0; i < sousOnglets.length; i++) {         var afficher = sousOnglets[i];         if (afficher.classList.contains('change')) {           afficher.classList.remove('change');         }       }     }   }
/* Lorsque l'utilisateur clique sur le bouton,
basculer entre le masquage et l'affichage du contenu de la liste déroulante */
function maFonction1(){
    document.getElementById("sous_menu1").classList.toggle("change");
}
function maFonction2(){
    document.getElementById("sous_menu2").classList.toggle("change");
}

//Fermez le menu déroulant si l'utilisateur clique en dehors de celui-ci
window.onclick = function(e) {
    if (!e.target.matches('.mybutton')) {
      var sousOnglets = document.getElementsByClassName("sous_onglet");
      for (var i = 0; i < sousOnglets.length; i++) {
        var afficher = sousOnglets[i];
        if (afficher.classList.contains('change')) {
          afficher.classList.remove('change');
        }
      }
    }
  }


