//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo() {
    let pessoa = document.getElementById("amigo");
    let listaAmigos = document.getElementById("listaAmigos");

    if (pessoa.value !== "") {
        let nomeAmigo = pessoa.value.trim();
        const novoItem = document.createElement("li");
        novoItem.textContent = nomeAmigo;
        listaAmigos.appendChild(novoItem);
        pessoa.value = "";
        pessoa.focus();
    } else {
        alert("O nome não deve ser vazio.");
    }

}

