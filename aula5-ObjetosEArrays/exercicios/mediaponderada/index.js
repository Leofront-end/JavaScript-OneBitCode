var mediaPonderada = []
var media = []
do {
    media = prompt("Digite um numero da media: ")
    var quantidade = prompt("Digite um valor para quantidade: ")
    mediaPonderada.push(media)
    media.push(media)
    var resposta = prompt("Deseja continuar? [S/N]")
} while (resposta.toLowerCase() !== 'n');

console.log(mediaPonderada)