console.log("Script Iniciado")
let contador = 1
const intervalId = setInterval(function () {
    console.log(`Executado ${contador} vezes apos 2 s`)
    contador++
    if(contador >= 6){
        clearInterval(intervalId)
    }
}, 2 * 1000)

console.log("Script finalizado")