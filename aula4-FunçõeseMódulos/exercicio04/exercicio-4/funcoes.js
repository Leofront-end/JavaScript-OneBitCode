import dayjs from "dayjs";

export function calcularIdade(dataNascimento){
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    const idade = hoje.diff(nascimento, "year")
    return idade
}

export function CalcularDiasRestantesParaAniversario(dataNascimento){
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    let proximoAniversario = nascimento.year(hoje.year())

    if (proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1, "year")
    }

    console.log({proximoAniversario},{hoje})
    const diasRestante = proximoAniversario.diff(hoje,"day")
    return diasRestante
}
