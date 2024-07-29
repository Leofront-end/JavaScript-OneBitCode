console.log("Iniciada")

const minhaPromisse = new Promise(function (resolve, reject){
    if(true){
        reject("promisse rejeitada")
    } else {
        setTimeout(function(){
            console.log("Executando a promisse")
            resolve("promisse resolvida")
        }, 3 * 1000)
    }
    

    
})

minhaPromisse.then(function(resultado){
    console.log(resultado)
})

minhaPromisse.catch(function (motivo) {
    console.log(motivo)
})

console.log(minhaPromisse)

console.log("Finalizado")