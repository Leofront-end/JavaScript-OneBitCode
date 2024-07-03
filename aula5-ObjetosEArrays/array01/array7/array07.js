const pessoas = [
    { id: 100, nume:"Leo", idade: 18 },
    { id: 101, nume:"Bia", idade: 15 },
    { id: 102, nume:"Mari", idade: 17 },
    { id: 103, nume:"Gu", idade: 21 },
    { id: 104, nume:"Carla", idade: 46 },
]

let idadeMaxima = parseFloat(prompt("Escolha uma idade maxima: "))

const pessoasDentroLimite = pessoas.filter(function (pessoa) {
    return pessoa.idade <= idadeMaxima
})

console.log(pessoasDentroLimite)