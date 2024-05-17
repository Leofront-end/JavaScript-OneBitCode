import { dobro, somar, subtrair } from "./funcoes.js"


do {
    let opcao = prompt("1 - Dobro\n2 - Somar\n3 - Subtrair\n4 - Sair")

    if (opcao == 1){
        let m = prompt("DIgite um numero")
        alert(dobro(m))  
    } else if ( opcao == 2) {
        let n1 = parseFloat(prompt("Digite um numero: "))
        let n2 = parseFloat(prompt("Digite outro numero: "))
        alert(somar(n1,n2))
    } else if (opcao == 3) {
        let num1 = parseFloat(prompt("Digite um numero: "))
        let num2 = parseFloat(prompt("Digite outro numero: "))
        alert(subtrair(n1,n2))
    } else if (opcao != 4){
        alert("Numero Invalido")
    }
      
} while (opcao != 4);
