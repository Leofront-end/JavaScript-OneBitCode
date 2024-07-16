var veiculo = {}

veiculo.modelo = prompt("Digite o modelo do Carro:")
veiculo.passageiros = parseInt(prompt("Digite o numero de passageiros:"))
veiculo.limiteDepassageiros = parseInt(prompt("Digite o limite de passageiros:"))
veiculo.velocidade = parseFloat(prompt("Digite a velocidade (em Km/h):"))

console.log(veiculo)
console.log(veiculo.velocidade)

// Acelerar
function Aumentar(){
    veiculo.AumentarVelocidade = parseFloat(prompt("Digite um novo valor (em Km/h):"))
    if (veiculo.AumentarVelocidade > veiculo.velocidade){
        veiculo.velocidade = veiculo.AumentarVelocidade
        alert(`Sua velocidade atual é ${veiculo.velocidade}`)
    } else {
        alert('Numero menor')
    }
    AdicionarPassageiro()
}

// Diminuir velocidade
function Diminuir(){
    veiculo.DiminuirVelocidade = parseFloat(prompt("Digite um novo valor (em Km/h):"))
    if (veiculo.DiminuirVelocidade < veiculo.velocidade){
        veiculo.velocidade = veiculo.DiminuirVelocidade
        alert(`Sua velocidade atual é ${veiculo.velocidade}`)
    } else {
        alert('Numero maior')
    }
    AdicionarPassageiro()
}

//Adicionando Pessoas
function AdicionarPassageiro(){
    let Adicionar = prompt("Deseja Adicionar passageiro [S/N]:")
    Adicionar = Adicionar.toLowerCase()
    if (Adicionar == 's'){
        let AdicionarQuantos = parseInt(prompt("Quantas pessoas a mais irá adicionar"))
        AdicionarQuantos += veiculo.passageiros
        if (veiculo.velocidade == 0 && AdicionarQuantos <= veiculo.limiteDepassageiros) {
            alert(`Agora tem ${AdicionarQuantos} passageiros`)
        } else {
            alert('Invalido')
        }
    }
}

//Menu
do {
    var opcoes = parseInt(prompt("1- Adicionar Velocidade\n2-Diminuir Velocidade\n3-Sair"))
    if (opcoes == 1 ) {
        Aumentar()
    } else if (opcoes == 2){
        Diminuir()
    } else if (opcoes != 3){ 
        console.log('Opção Invalida')
    }
} while (opcoes !== 3);
