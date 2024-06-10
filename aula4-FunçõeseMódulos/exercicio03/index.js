import _ from 'lodash'

let frase = "Esta é uma Frase de Exemplo"
let fraseKebabCase = _.kebabCase(frase)
console.log(fraseKebabCase)

frase = "este é um Titulo Diferente"
fraseKebabCase = _.kebabCase(frase)
console.log(fraseKebabCase)