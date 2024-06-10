import {CalcularDiasRestantesParaAniversario, calcularIdade} from './funcoes.js'

const dataNascimento = prompt("Digite sua data de nascimento (AAAA - MM - DD):")

const idade = calcularIdade(dataNascimento)
const diasRestante = CalcularDiasRestantesParaAniversario(dataNascimento)

alert(`Você tem ${idade} anos e faltam ${diasRestante} dias para o seu aniversario`)