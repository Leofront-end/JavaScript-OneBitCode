function toKebabCase(str){
    return str.split(" ").join("-").toLowerCase()
}

function RemoverLi(id){
    const liParaRemover = document.getElementById(id)
    liParaRemover.remove()
}

function adicionarLi(){
    const jogo = prompt("Insira o nome do jogo que você deseja adicionar a lista:")

    const liElement = document.createElement("li")
    liElement.innerText = jogo
    liElement.id = toKebabCase(jogo)

        const btnRemover = document.createElement("button")
        btnRemover.innerText = "Remover Jogo"
        
        btnRemover.addEventListener("click",function (){
            RemoverLi(liElement.id)
        } )

        liElement.appendChild(btnRemover)

    const ulElement = document.getElementById("ListaDeJogos")
    ulElement.appendChild(liElement)
}

document.getElementById("AdicionarJogo").addEventListener("click", adicionarLi)