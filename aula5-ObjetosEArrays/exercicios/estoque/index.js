let estoque = []

function Adicionar() {
    let nome = prompt("Nome do produto")
    let quantidade = parseInt(prompt("Quantidade:"))
    estoque.push({nome , quantidade})
}

function Listar(){
    estoque.forEach( function (elementoAtual, indice, ArrayCompleto) {
        alert(`${indice} é ${estoque[indice]}`)
    })
}

do {
    var opcao = prompt("1 - Adicionar\n2 - Listar\n0 - Sair")
    if (opcao == 1 ){
        Adicionar()
    } else if (opcao == 2){
        Listar()
    }
} while (opcao != 0);