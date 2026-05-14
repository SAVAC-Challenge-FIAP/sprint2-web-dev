const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menuLateral");
const fechar = document.getElementById("fecharMenu");

btnMenu.addEventListener("click", function(){

    menu.classList.add("ativo");

});

fechar.addEventListener("click", function(){

    menu.classList.remove("ativo");

});