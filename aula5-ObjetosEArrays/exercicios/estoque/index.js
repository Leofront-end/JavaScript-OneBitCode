let estoque = []

function Adicionar(){

    estoque.push({nome:prompt("Digite o nome:"), quantidade:prompt("Digite a quantidade:")})
    
    console.log(estoque)
    
}

function Listar() {
    if (estoque.length == 0){
        alert('Estoque Vazio')
    }
    estoque.forEach(function (estoquinho, indice){
        alert(`${indice} - ${estoquinho.nome} e ${estoquinho.quantidade}`)
    })
}

function Alterar() {
    let Pesquisar = prompt("O nome que deseja procurar:")
    estoque.find(function(estocando) {
        if (estocando.nome == Pesquisar){
            estocando.quantidade = prompt("Digite a nova quantidade")
            return estocando.quantidade
        } else {
            alert("Nome não encontrado, tente novamente")
        }
    })
}

function Remover(){
    let Pesquisa = prompt("Digite o nome que está procurando: ")
    

    var encontrando = estoque.find(function (NomeEstoque, indice) {
        if (NomeEstoque.nome == Pesquisa){
            NomeEstoque = estoque
            alert(`Removendo ...`)
            return NomeEstoque.splice(indice, 1)
        }
        return null
    })

    if (encontrando == null){
        alert('não encontrado')
    }
}

do {
    var opcao = parseFloat(prompt('1 - Adiciona\n2 - Lista\n3 - Alterar\n4 - Remover\n0 - Sair'))
    if (opcao == 1 ){
        Adicionar()
    } else if (opcao == 2){
        Listar()
    } else if (opcao == 3){
        Alterar()
    } else if (opcao == 4){
        Remover()
    } else if(opcao != 0) {
        alert("Número Invalido")
    }
} while (opcao != 0);