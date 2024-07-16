var mediaPonderada = []
var media = []
let SomaMedia = 0
let SomaMediaPonderada = 0
//Laço de Repetição
do {
    let ValorMedia = parseFloat(prompt("Digite um numero da media: "))
    let quantidade = parseFloat(prompt("Digite um valor para quantidade: "))
    let valores = ValorMedia * quantidade
    if (isNaN(ValorMedia)|| isNaN(quantidade)){
        alert("Numeros invalidos")
    } else {
        media.push(ValorMedia)
        mediaPonderada.push(valores)
    }
    var resposta = prompt("Deseja continuar? [S/N]")
} while (resposta.toLowerCase() !== 'n');

//soma da Media Ponderada
const SomandoMediaPonderada = mediaPonderada.map(function SomandoValoresDaMediaPonderada(elementoAtual){
    SomaMediaPonderada = elementoAtual + SomaMediaPonderada
    return SomaMediaPonderada
})

var ultimoMediaPonderada = SomandoMediaPonderada[SomandoMediaPonderada.length-1]

//soma da Media de Baixo
const SomaDasMedias = media.map(function Somando(elementoAtual){
    SomaMedia = elementoAtual + SomaMedia
    return SomaMedia
})
var ultimoMedia = SomaDasMedias[SomaDasMedias.length-1]

//Dividir os Valores
let divisão = ultimoMediaPonderada/ultimoMedia

//Resultado
if (isNaN(divisão)){
    alert('erro')
} else {
    alert(`O valor da Media ponderada é ${divisão.toFixed(2)}`)
}
