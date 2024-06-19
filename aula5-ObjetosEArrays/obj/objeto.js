let pessoa = {
    idade: 28,
    nome: "Leo",
    endereco: {rua: "Qualquer rua", numero: "01"},
    ola: function () {
        alert(`Olá mundo! Aqui é o ${this.nome}`)
    }
}
console.log(pessoa.endereco)

pessoa.nome = "Leozin"
console.log(pessoa.nome)

pessoa.telefone = "11 984025922"

console.log(pessoa)

pessoa.ola()