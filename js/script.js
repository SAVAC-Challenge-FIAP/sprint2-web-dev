const modal = document.getElementById("welcomeModal");
const overlay = document.getElementById("overlay");

const newsletter = document.getElementById("newsletter");
const btnNewsletter = document.getElementById("btn-newsletter");
const fecharNewsletter = document.getElementById("fecharNewsletter");


btnNewsletter.addEventListener("click", function(){

    newsletter.classList.add("ativo");

});

fecharNewsletter.addEventListener("click", function(){

    newsletter.classList.remove("ativo");

});


const fecharModal = document.getElementById("fecharModal");
const maisTarde = document.getElementById("maisTarde");
const explorar = document.getElementById("explorar");

function fecharTudo(){

    modal.style.display = "none";
    overlay.style.display = "none";

}

fecharModal.addEventListener("click", fecharTudo);
maisTarde.addEventListener("click", fecharTudo);
explorar.addEventListener("click", fecharTudo);

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
    "./imgs/section-1/imgnocolor1.png",
    "./imgs/section-1/imgcolor2.png"
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

//lógica de download
const btnDownload = document.getElementById("btn-download");

btnDownload.addEventListener("click", () => {

        const nome = prompt("Digite seu nome para baixar o app:");

        if(nome) {
            alert(`Bem-vindo(a), ${nome}! O download começará.`);
        } else {
            alert("Você cancelou o download.");
        }

    }
);

//newsletter — validação de nome e e-mail no popup
const newsletterForm = document.getElementById("newsletterForm");
const declineNewsletter = document.getElementById("declineNewsletter");

newsletterForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const nome = document.getElementById("newsletterNome").value;
    const email = document.getElementById("newsletterEmail").value;
    const mensagem = document.getElementById("mensagemNewsletter");

    mensagem.classList.remove("sucesso", "erro");

    if (nome.trim() === "") {
        mensagem.innerText = "Nome inválido.";
        mensagem.classList.add("erro");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerText = "E-mail inválido.";
        mensagem.classList.add("erro");
        return;
    }

    mensagem.innerText = "Cadastro realizado com sucesso!";
    mensagem.classList.add("sucesso");
    newsletterForm.reset();

});

declineNewsletter.addEventListener("click", () => {

    newsletter.classList.remove("ativo");

});

//logica não disponível
const btnNaoDisponivel = document.querySelectorAll(".nao-disponivel");

btnNaoDisponivel.forEach((btn) => {

    btn.addEventListener("click", () => {

        alert("Função ainda não disponível")

    });

});