// filter
const numeros = [0, 2 , 3, 4 , 8, 9 ,10]

const pares = numeros.filter(function (elementoAtual){
    return elementoAtual % 2 === 0
})

const impares = numeros.filter(function (elementoAtual){
    return elementoAtual % 2 !== 0
})

console.log(`Lista Original: [${numeros}]\nLista dos Pares: [${pares}]\nLista dos impares: [${impares}]`)