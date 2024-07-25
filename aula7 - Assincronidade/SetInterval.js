console.log("Script Iniciado")
const intervalId = setInterval(function () {
    console.log("Executado apos 2 s")

}, 2 * 1000)

clearInterval(intervalId)

console.log("Script finalizado")