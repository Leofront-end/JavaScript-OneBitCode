const numeros = [1,2,5,8,6,2,4]

const dobroNumeros = numeros.map(function (elementoAtual, IndiceAtual, ArrayOriginal) {
    console.log(`indice: ${IndiceAtual} | Valor: ${elementoAtual}`)
    return { dobro: elementoAtual*2, metade: elementoAtual / 2, valorOriginal: elementoAtual}
})

console.log(dobroNumeros)