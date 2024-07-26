let notas = [];

const div_notas = document.getElementById("notas");

// Classe "Nota" para instanciar cada nota que o usuário salvar //
class Nota {
    constructor(titulo, anotacao) {
        this.titulo = titulo
        this.anotacao = anotacao
    }

    adicionarNota() {
        notas.push(this);
    }

    mostrarNotas() {
        div_notas.innerHTML = "";
        notas.map(nota => {
            const div_nota = document.createElement("div");
            div_nota.setAttribute("class", "nota");

            const titulo_nota = document.createElement("h3");
            titulo_nota.setAttribute("id", "titulo_nota");
            titulo_nota.innerHTML = nota.titulo;

            const anotacao_nota = document.createElement("p");
            anotacao_nota.setAttribute("id", "anotacao_nota");
            anotacao_nota.innerHTML = nota.anotacao;

            div_nota.appendChild(titulo_nota);
            div_nota.appendChild(anotacao_nota);
            div_notas.appendChild(div_nota);
        })

    }

    deletarNota(nota) {
        verificaNotas();
    }

    deletarTodasNotas() {
        verificaNotas();
    }
}

// Funções do Sistema //
function verificaNotas() {
    if (!div_notas.hasChildNodes) {
        div_notas.innerHTML = "<h3>Nenhuma anotação encontrada.</h3>";
    }
}

function retornaCampos() {
    return [...document.querySelectorAll(".campo")];
}

function limparCampos(campos) {
    campos.forEach(campo => campo.value = "");
}

function salvarAnotacao(campos) {
    const nota = new Nota(campos[0].value, campos[1].value);
    nota.adicionarNota();
    nota.mostrarNotas();
}

// Botões de ação dos campos de anotação //
const btn_limpar = document.getElementById("btn_limpar");
const btn_salvar = document.getElementById("btn_salvar");

btn_limpar.addEventListener("click", () => {
    limparCampos(retornaCampos());
});

btn_salvar.addEventListener("click", () => {
    salvarAnotacao(retornaCampos());
});