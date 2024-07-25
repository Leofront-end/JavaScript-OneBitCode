const paragrafo = document.getElementById("contador")
const botao = document.querySelector("button")
var numero = 0

function adicionar(){
    numero++
    paragrafo.textContent = `${numero} clique${numero !== 1 ? "s":""}`
    /* Operador Ternario
      numero !== 1 ? "s":""
      Condição ? valorCasoVerdadeiro : valorCasoFalso   
    */
}

botao.addEventListener("click", function () {
    adicionar()
})