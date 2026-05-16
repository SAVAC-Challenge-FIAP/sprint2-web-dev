// // entrada
// let nome = prompt ("Digite seu primeiro nome: ");
// let email = prompt ("Digite seu e-mail: ");

// // validação

// // se o nome estiver vazio
// if (nome === "" || nome === null) {
//     alert("Por favor, digite seu nome.");
// }
// if (nome.length < 2) {
//     alert ("Digite um nome válido.");
// } while (nome.length < 2)


// // se o email estiver vazio
// if (email === ""|| email === null) {
//     alert("Por favor, digite seu e-mail.");
// }

// // se o email inclui @ e . , alertar "cadastro realizado com sucesso!"
// // .includes() serve para checar se um texto contem outro texto
// if (email.includes ("@") && email.includes (".")) {
//     alert ("Cadastro realizado com sucesso!");

// } 
// // senão
//     else { 
//         alert("E-mail inválido.");
// }
// ---------------

function validarCadastro() {

    // Pedindo o nome
    let nome = prompt("Digite seu nome:");

    // Verificando nome vazio
    if (nome.trim() === "") {

        alert("Nome inválido.");
        return;

    }

    // Pedindo email
    let email = prompt("Digite seu e-mail:");

    // Verificando email
    if (email.includes("@") && email.includes(".")) {

        alert("Cadastro realizado com sucesso!");

    } else {

        alert("E-mail inválido.");

    }

}

// Chamando a função
validarCadastro();


