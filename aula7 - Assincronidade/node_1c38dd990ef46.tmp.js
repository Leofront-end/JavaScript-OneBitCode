console.log("Script Iniciado")
let contador = 0
const intervalId = setInterval(function () {
    console.log(`Executado ${contador} vezes apos 2 s`)
    contador++
}, 2 * 1000)

if(contador >= 6){
    clearInterval(intervalId)
}



console.log("Script finalizado")