let titre = document.querySelector(".titre");
let texte = titre.getAttribute("data-texte");
let para  = document.querySelector(".decript");
let callToAction = document.querySelector(".cta_header");
let btn_slider = document.querySelector(".slider");
let images = document.querySelectorAll(".img");
let textes = ['<span class="rouge" data-texte="{">{</span>',' ','<span class="blanc" data-texte="2">2</span>','<span class="blanc" data-texte="4">4</span>','<span class="blanc" data-texte="1">1</span>','<span class="rouge" data-texte="}">}</span>','<span class="jaune" data-texte="Pro">Pro</span>',' <span class="blanc" data-texte="l\'">l\'</span>','<span class="blanc" data-texte="E">E</span>','<span class="blanc" data-texte="c">c</span>','<span class="blanc" data-texte="o">o</span>','<span class="blanc" data-texte="l">l</span>','<span class="blanc" data-texte="e">e</span>',' ',' <span class="blanc" data-texte="du">du</span> ','<span class="blanc" data-texte="n">n</span>','<span class="blanc" data-texte="u">u</span>','<span class="blanc" data-texte="m">m</span>','<span class="blanc" data-texte="e">e</span>','<span class="blanc" data-texte="r">r</span>','<span class="blanc" data-texte="i">i</span>','<span class="blanc" data-texte="q">q</span>','<span class="blanc" data-texte="u">u','<span class="blanc" data-texte="e">e',' ','<span class="blanc" data-texte="q">q','<span class="blanc" data-texte="u">u','<span class="blanc" data-texte="i">i',' ','<span class="blanc" data-texte="r">r','<span class="blanc" data-texte="e">e</span>','<span class="blanc" data-texte="p">p</span>','<span class="blanc" data-texte="o">o</span>','<span class="blanc" data-texte="n">n</span>','<span class="blanc" data-texte="d">d</span>',' ','<span class="blanc" data-texte="aux">aux</span>',' ','<span class="blanc" data-texte="a">a</span>','<span class="blanc" data-texte="t">t','<span class="blanc" data-texte="t">t','<span class="blanc" data-texte="entes">entes</span>',' ','<span class="blanc" data-texte="d">d</span>','<span class="blanc" data-texte="e">e</span>','<span class="blanc" data-texte="s">s</span>',' ','<span class="jaune" data-texte="pro">pro','<span class="jaune" data-texte="fes">fes','<span class="jaune" data-texte="sio">sio</span>','<span class="jaune" data-texte="nn">nn</span>','<span class="jaune" data-texte="el">el</span>','<span class="jaune" data-texte="s">s</span>','<span class="jaune" data-texte=".">.</span>'];

let cptImg = 0;
let sec = 0;
let i = 0;


function addLetters(){
    setTimeout("addLetters()",40);
    
    if(i < textes.length){
        titre.innerHTML += textes[i];
        i++;
    }
    if(i >= textes.length){
        titre.classList.add("active");
        para.classList.add("active");
        callToAction.classList.add("active");
    }
    compteur();
    //slideImages();
}

addLetters();

function slideImages(){
    for(let i = 0; i < images.length; i++){
        let img = images[i];
        img.classList.remove("active");
    }
    
}

function compteur(){
    cptImg += 10;
    if(sec >= 4){
        sec = 0;
    }
    if (cptImg >= 800){
        cptImg = 0;
        slideImages();
        sec += 1;
        console.log(sec);
        images[sec - 1].classList.add("active");
    }
}

para.addEventListener("transitionend", () =>{
    btn_slider.classList.add("active");
})
// variable des caroussels
// const banner = document.getElementsByClassName("carousel")[0];
// let atomes = document.getElementsByClassName("atome");

// for(let i = 1; i < 100; i++){
//     banner.innerHTML += '<div class="atome"></div>';
//     let duration = Math.random()*8;
//     atomes[i].style.animationDuration = 2 + duration + "s";
//     atomes[i].style.animationDelay = duration + "s";
// }

// fin animation carossel