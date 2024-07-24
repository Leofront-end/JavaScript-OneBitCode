const form = document.querySelector("form")


function adicionar(tarefa) {
    const listaElementos = document.createElement("li")

    listaElementos.textContent = `Tarefa: ${tarefa} | concluida: `
    
    Concluida(listaElementos)
    Remove(listaElementos)



    document.getElementById("ListaDeTarefas").appendChild(listaElementos)
}

function Concluida(listaElementos){
    const concluir = document.createElement("input")
    concluir.setAttribute("type", "checkbox")
    concluir.addEventListener("click", function(){
        listaElementos.classList.toggle("conclusao")
    })
    listaElementos.appendChild(concluir)
}

function Remove(listaElementos){
    const botaoRemover = document.createElement("button")
    botaoRemover.innerHTML = "Remova"

    botaoRemover.addEventListener("click", function(){
        listaElementos.remove()
    })

    listaElementos.appendChild(botaoRemover)
}

form.addEventListener("submit", function (evento) {
    evento.preventDefault()
    const tarefa = document.getElementById("tarefa").value
    adicionar(tarefa)
    evento.target.reset()
})