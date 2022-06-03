let titre = document.querySelector(".titre");
let texte = titre.getAttribute("data-texte");
let para = document.querySelector(".decript");
let callToAction = document.querySelector(".cta_header");
let btn_slider = document.querySelector(".slider");

let i = 0;

function addLetters(){
    setTimeout("addLetters()",40);
    
    if(titre.textContent.length < texte.length && i < texte.length){
        if(texte[i] == "{"){
            titre.innerHTML += '<span class="ac ac1">{</span>';
        }
        else if(texte[i] == "}"){
            titre.innerHTML += '<span class="ac">}</span>';
        }
        else{
    
           titre.innerHTML += texte[i];

        }
    }
    if(i >= texte.length){
        titre.classList.add("active");
        para.classList.add("active");
        callToAction.classList.add("active");
    }

    i++;
}

addLetters();

para.addEventListener("transitionend", () =>{
    btn_slider.classList.add("active");
})