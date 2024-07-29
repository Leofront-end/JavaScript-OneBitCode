const titulo = document.getElementById("NumeroAleatorio")

setInterval(function () {
    const NumeroAleatorio = Math.floor(Math.random() * 1000000) + 1
    const numeroFormatado = NumeroAleatorio.toString().padStart(6,'0')
    titulo.textContent = numeroFormatado
}, 10 * 1000)