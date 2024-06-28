const numeros = [1,5,3,6,4,8]

/*function mostrarElementos(elementoAtual, IndiceAtual, ArrayCompleto){
    console.log(`O elemento no indice ${IndiceAtual} é ${elementoAtual}`)
}
numeros.forEach(mostrarElementos) */

/*
numeros.forEach(function (elementoAtual, IndiceAtual, ArrayCompleto){
    console.log(`O elemento no indice ${IndiceAtual} é ${elementoAtual}`)
}) */

function paraCada(array, funcaoParaExecutar) {
    for (let i = 0; i < array.length; i++){
        funcaoParaExecutar(array[i], i, array)
    } 
}

paraCada(numeros, function(elementoAtual, IndiceAtual, ArrayCompleto){
    console.log(`O elemento no indice ${IndiceAtual} é ${elementoAtual}`)
})
