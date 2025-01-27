//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function verificaAmigoJaExistente(nome) {
    if (amigos.length) {
        const existe = amigos.some((e) => e.toLowerCase() === nome.toLowerCase());
        if (existe) {
            alert("Nome já está na lista.");
            return true;
        }
    }
    return false;
}

function adicionarAmigo() {
    let pessoa = document.getElementById("amigo");
    let listaAmigos = document.getElementById("listaAmigos");

    if (pessoa.value !== "") {
        let nomeAmigo = pessoa.value.trim();
        if (verificaAmigoJaExistente(nomeAmigo)) return;
        const novoItem = document.createElement("li");
        novoItem.textContent = nomeAmigo;
        listaAmigos.appendChild(novoItem);
        amigos.push(nomeAmigo);
        pessoa.value = "";
        pessoa.focus();
    } else {
        alert("O nome não deve ser vazio.");
    }
    console.log(amigos);
}

