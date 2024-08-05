function ID(numeros){
    return new Promise(function(resolve){
        const usuario = {
            id: numeros,
            nome: `Usario ${numeros}`,
            email: `usuario${numeros}@email.com`
        }
        resolve(usuario)
    })
}
async function IDsQualquer(){
    var lista = []
    for (let contador = 1; contador <= 5; contador++){
        const numeroAleatorio = Math.floor(Math.random()*100)+1
        lista.push(numeroAleatorio)
    }
    console.log(lista)
    lista.map(function (elementoAtual){
        console.log(ID(elementoAtual))
    })
    
}
IDsQualquer()
