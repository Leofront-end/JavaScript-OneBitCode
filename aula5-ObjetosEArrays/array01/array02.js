let listaDeFrutas = ["Maça","Laranja","Uva"]

let numeros = [4, 9, 10, 3, false, true, "5"]

console.log(listaDeFrutas)
console.log(numeros)

let novoArray = listaDeFrutas.concat(numeros)
console.log(novoArray)

let listaEmTexto = novoArray.join(" ; ")
console.log(novoArray)
console.log(listaEmTexto)

let resultado = listaEmTexto.split(" ; ")
console.log(resultado)