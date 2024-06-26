let listaDeFrutas = ["Maça","Laranja","Uva","Banana","Abacaxi"]

const duasPrimeiras = listaDeFrutas.slice(2,4)
console.log(duasPrimeiras)

listaDeFrutas.splice(2,1,"limão")
console.log(listaDeFrutas)