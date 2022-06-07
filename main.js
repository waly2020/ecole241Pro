let titre = document.querySelector(".titre");
let texte = titre.getAttribute("data-texte");
let images = document.querySelectorAll(".img");

let mots = document.getElementById("mots");

let cptImg = 0;
let sec = 0;
let i = 0;

let motsArray = [
    "compétances",
    "besoins",
]

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
        images[sec - 1].classList.add("active");
    }
}

// para.addEventListener("transitionend", () =>{
//     btn_slider.classList.add("active");
// })