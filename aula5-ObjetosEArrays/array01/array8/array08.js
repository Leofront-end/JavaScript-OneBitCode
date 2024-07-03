const pessoas = [
    { id: 100, nome:"Leo", idade: 18 },
    { id: 101, nome:"Bia", idade: 15 },
    { id: 102, nome:"Mari", idade: 17 },
    { id: 103, nome:"Gu", idade: 21 },
    { id: 104, nome:"Carla", idade: 46 },
]

let nomePesquisado = prompt("Pesquisar por nome: ")

const pessoaEncontrada = pessoas.find( function(pessoa) {
    return pessoa.nome === nomePesquisado
})

console.log(pessoaEncontrada)