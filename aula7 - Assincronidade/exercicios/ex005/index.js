function ID(id){
    /*Arrow function
    (args) =>  {return 42}    
    */

    return new Promise((resolve) => {
        const usuario = {
            id,
            nome: `Usario ${id}`,
            email: `usuario${id}@email.com`
        };
        resolve(usuario)
    })
}

async function mapearIDsparaUsuarios(ids){
    const usuarios = []

    for(let i = 0;i < ids.length; i++){
        const id = ids[i]
        const usuario = await ID(id)
        usuarios.push(usuario)
    }

    return usuarios
}

async function Exemplo(){
    const ids = [18, 32, 77, 55,75]
    const usuarios = await mapearIDsparaUsuarios(ids)
    console.log(usuarios)
}
Exemplo()