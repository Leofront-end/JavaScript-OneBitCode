const Paragrafo = document.getElementById("meuParagrafo")
const Botao = document.querySelector("button")

Botao.addEventListener("click", function (){
    Paragrafo.textContent = "Alterado Com Sucesso"
})