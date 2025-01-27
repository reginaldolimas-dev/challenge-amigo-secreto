const amigos = [];
const listaAmigos = document.querySelector("#listaAmigos");
const resultado = document.querySelector("#resultado");
const inputAmigo = document.querySelector("#amigo");

function verificaAmigoJaExistente(nome) {
    return amigos.some((e) => e.toLowerCase() === nome.toLowerCase());
}

function mostrarAlerta(mensagem) {
    return alert(mensagem);
}

function atualizaListaAmigos() {
    listaAmigos.innerHTML = "";
    amigos.forEach((e) => {
        const novoItem = document.createElement("li");
        novoItem.textContent = e;
        listaAmigos.appendChild(novoItem);
    })
}

function adicionarAmigo() {
    if (inputAmigo.value !== "") {
        let nomeAmigo = inputAmigo.value.trim();
        if (verificaAmigoJaExistente(nomeAmigo)) {
            alert("O nome do amigo já está na lista.")
            inputAmigo.value = "";
            inputAmigo.focus();
            return;
        }
        amigos.push(nomeAmigo);
        atualizaListaAmigos();
        inputAmigo.value = "";
        inputAmigo.focus();
    } else {
        mostrarAlerta("Por favor, insira um nome.");
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarAlerta("A lista de amigos está vazia.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const novoItem = document.createElement("li");
    const amigoEscolhido = amigos[indiceAleatorio];
    novoItem.textContent = `A pessoa escolhida foi ${amigoEscolhido}`;
    resultado.appendChild(novoItem);
}