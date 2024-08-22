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

    alert("Fim")
}


Executando()

