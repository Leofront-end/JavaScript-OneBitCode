const paragrafo = document.getElementById("contador")
const botao = document.querySelector("button")
var numero = 0

function adicionar(){
    numero++
    paragrafo.textContent = `${numero} cliques`
}

botao.addEventListener("click", function () {
    adicionar()
})