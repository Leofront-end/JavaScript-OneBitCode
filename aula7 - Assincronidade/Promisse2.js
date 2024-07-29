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

somaAssincrona(9,7).then(function(resultado){
    console.log(resultado)
}).catch(function(motivo){
    console.log(motivo)
}).finally(function (){
    console.log("Promisse finalizada")
})

console.log("finalizado")