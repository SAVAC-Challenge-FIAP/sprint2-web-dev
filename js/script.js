const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menuLateral");
const fechar = document.getElementById("fecharMenu");

btnMenu.addEventListener("click", function(){

    menu.classList.add("ativo");

});

fechar.addEventListener("click", function(){

    menu.classList.remove("ativo");

});

//slideshow
const imagens = [
    "./imgs/section-1/Phone mockup.svg",
    "./imgs/section-1/Phone2.svg"
];

let indice = 0;

const slide = document.getElementById("slideshow");

setInterval(() => {

    indice++;

    if(indice >= imagens.length) {
        indice = 0;
    }

    slide.src = imagens[indice];

}, 3000);