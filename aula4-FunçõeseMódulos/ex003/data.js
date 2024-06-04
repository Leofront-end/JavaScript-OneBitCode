export function nascimento (ano, mes, dia) {
    let dataAtual = new Date()
    let nascimento = new Date(ano, mes, dia)
    let diferenca = dataAtual.getTime() - nascimento.getTime();
    let idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
    
    return idade
}