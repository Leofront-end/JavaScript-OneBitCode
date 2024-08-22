function tempo(milisegundos){
    return new Promise(function (resolve){
        setTimeout(function (){
            resolve()
        },milisegundos)
    })
}



async function gerarNumeroAleatorio(){
    await tempo(3000)
    return Math.floor(Math.random() * 100)
}

async function gerarNumerosAleatorios(quantidade){
    const numerosAleatorios = []

    for(let i = 1;i <= quantidade;i++){
        console.log(`Gerando ${i} numero${i>1?'s':''}`)
        const numero = await gerarNumeroAleatorio()
        numerosAleatorios.push(numero)
    }

    return numerosAleatorios
}

async function executar(){
    const numeros = await gerarNumerosAleatorios(5)
    console.log(numeros) 
}

executar()