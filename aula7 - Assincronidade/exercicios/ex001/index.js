const botao = document.getElementById("add")
const paragrafo = document.getElementById("msg")
botao.addEventListener("click", function(){
    let contador = 1
    const Intervalo = setInterval(function(){
        paragrafo.textContent = `Mensagem de 5 segundos ${contador}`
        contador ++
        if (contador > 5){
            paragrafo.textContent = ""
            clearInterval(Intervalo)
        }
    }, 1 * 1000)
})

