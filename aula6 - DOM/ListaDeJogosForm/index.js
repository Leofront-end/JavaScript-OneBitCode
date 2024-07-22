function toKebabCase(str){
    return str.split(" ").join("-").toLowerCase()
}

function RemoverLi(nome){
    const liParaRemover = document.getElementById(nome)
    liParaRemover.remove()
}

function adicionarLi(jogo){
    const liElement = document.createElement("li")
    liElement.id = toKebabCase(jogo.nome)
    liElement.textContent = `Nome: ${jogo.nome} | Ano de Lançamento: ${jogo.ano} | Gênero: ${jogo.genero}`

    const btnRemover = document.createElement("button")
    btnRemover.innerText = "Remover Jogo"
    
    btnRemover.addEventListener("click",function (){
        RemoverLi(liElement.id)
    } )

    liElement.appendChild(btnRemover)
    
    document.getElementById("ListaDeJogos").appendChild(liElement)
}

const form = document.getElementById("CadastrarJogo")
form.addEventListener("submit", function(evento){
    evento.preventDefault()
    
    const inputNome = document.getElementById("nome")
    const inputAno = document.getElementById("ano")
    const inputGenero = document.getElementById("genero")

    const jogo = {}
    jogo.nome = inputNome.value
    jogo.ano = inputAno.value
    jogo.genero = inputGenero.value

    adicionarLi(jogo)

    

    evento.target.reset()
})
