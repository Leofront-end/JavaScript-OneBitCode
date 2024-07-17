let estoque = []

function Adicionar(){

    let nome = prompt("Digite o nome:")
    let quantidade = prompt("Digite a quantidade:")
    if (isNaN(quantidade)|| quantidade <= 0){
        alert('n inv')
        return
    }
    estoque.push({nome,quantidade})
    alert(`${nome} com ${quantidade} quantidade(s) foi adicionado`)
    
    
}


function Listar() {
    if (estoque.length == 0){
        alert('Estoque Vazio')
        return
    }
    estoque.forEach(function (estoquinho, indice){
        alert(`${indice} - ${estoquinho.nome} e ${estoquinho.quantidade}`)
    })
}

function Alterar() {
    let Pesquisar = prompt("O nome que deseja procurar:")
    if (Pesquisar.length == 0 ){
        alert('Digite alto')
        return
    }
    estoque.find(function(estocando) {
        if (estocando.nome == Pesquisar){
            estocando.quantidade = prompt("Digite a nova quantidade")
            if (isNaN(estoque.quantidade)){
                alert('Não é número')
                return
            }
            return estocando.quantidade
        } else {
            alert("Nome não encontrado, tente novamente")
        }
    })
}

function Remover(){
    let Pesquisa = prompt("Digite o nome que está procurando: ")
    

    estoque.find(function (NomeEstoque, indice) {
        if (NomeEstoque.nome == Pesquisa){
            
            estoque.splice(indice, 1)
            alert(`Removendo ...`)
            return
        }
    })
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