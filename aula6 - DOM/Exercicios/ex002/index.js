function AdicionarFilme(nome){
    const ListaElementos = document.createElement("li")
    ListaElementos.textContent = `Nome do Filme: ${nome}`

    document.getElementById("ListaDeFilmes").appendChild(ListaElementos)
}

const formulario = document.querySelector("form")
formulario.addEventListener("submit",function (evento) {
    evento.preventDefault()
    const nome = document.getElementById("nome").value
    if (nome !== ""){
        AdicionarFilme(nome)
    }
    evento.target.reset()
})