function tempo(milisegundos){
    return new Promise(function (resolve){
        setTimeout(function (){
            resolve()
        },milisegundos)
    })
}

async function Executando(){
    alert("Iniciando")

    await tempo(3000)
    alert("3s")

    await tempo(5000)
    alert("5s")

    await tempo(7000)
    alert("7s")
}

let contador = 1
async function numeroAleatorio() {

    const numerosAleatorios = setInterval(function (){
        var qualquerNumero = Math.floor(Math.random()*100)+1
        quantidade(qualquerNumero)
        console.log(`${qualquerNumero} vzs`)
        contador++
        if (contador >= 6){
            clearInterval(numerosAleatorios)
        }
        return qualquerNumero
    }, 3000)
}
let quantidades = []
async function quantidade(a){
    
    quantidades.push(a)
    console.log(quantidades)
}
Executando()
numeroAleatorio()
