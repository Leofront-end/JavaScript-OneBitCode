function somaComPromise(a, b){
    return new Promise(function(resolve,reject){
        const numA = parseFloat(a)
        const numB = parseFloat(b)
        if(isNaN(numA)|| isNaN(numB)) {
            reject("numeros invalidos")
        } else {
            resolve(numA + numB)
        }
    })
}
somaComPromise(3,9).then(function(resultado){
    console.log(resultado)
}).catch(function (erro){
    console.log(erro)
})

async function somaAsync(a, b) {
    const numA = parseFloat(a)
    const numB = parseFloat(b)

    if(isNaN(numA)||isNaN(numB)){
        return Promise.reject("números invalidos")
    }
    return numA + numB
}
async function executar(){
    try {
        const resultado = await somaAsync(3,"errado")
        console.log("executando...")
        console.log(resultado)
    } catch (erro){
        console.log(erro)
    }
    
}

executar()

console.log("finalizado")