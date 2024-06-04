import { nascimento } from "./data.js";
import { Aniversario } from "./aniversario.js";

let ano = prompt("Nasceu em que ano você nasceu?")
let mes = prompt("Nasceu em que mes você nasceu?")
let dia = prompt("Nasceu em que dia você nasceu?")
console.log(nascimento(ano,mes,dia))
console.log(Aniversario(mes,dia))
