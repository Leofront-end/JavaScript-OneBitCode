function somaAssincrona(a, b){
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

async function somaAsync(a, b) {
    const numA = parseFloat(a)
    const numB = parseFloat(b)

    if(isNaN(numA)||isNaN(numB)){
        return Promise.reject("números invalidos")
    }
    return numA + numB
}
somaAsync("texto",7).then(function (resultado){
    console.log(resultado)
}).catch(function(motivo){
    console.log(motivo)
})

console.log("finalizado")