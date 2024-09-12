const livrosForm = document.getElementById("livroForm")
const titleInput = document.getElementById("title")
const generoInput = document.getElementById("genero")
const paginaAtualInput = document.getElementById("paginaAtual")
const totalPaginasInput = document.getElementById("totalPaginas")
const livrosList = document.getElementById("livrosList")



carregarLivros()

livrosForm.addEventListener("submit", function (evento){
    evento.preventDefault()

    const title = titleInput.value
    const genero = generoInput.value
    const paginaAtual = paginaAtualInput.value
    const totalPaginas = totalPaginasInput.value


    criarLivro(title, genero, paginaAtual, totalPaginas)
})

async function criarLivro(title, genero, paginaAtual, totalPaginas,) {
    const resposta = await fetch("http://localhost:3000/Livros", {
        method: "POST",
        headers: {
            'Content-Type': "apllication/json"
        },
        body: JSON.stringify({title, genero, paginaAtual,totalPaginas,})
    })

    if (!resposta.ok) {
        console.log(`Um erro ocorreu! ${resposta.status} - ${resposta.statusText}`)
    } else {
        carregarLivros()
    }
}

async function carregarLivros() {
    const resposta = await fetch("http://localhost:3000/Livros")
    const livros = await resposta.json()

    console.log(livros)
    exibirLivros(livros)
}

function exibirLivros(livros){
    livrosList.innerHTML = ""
    livros.forEach(function (livro){
        // const listarItem = document.createElement("li")
        // listarItem.innerHTML = `<article><h3>${livro.title}</h3><p>Genero: ${livro.genero}</p><p>Pagina atual: ${livro.paginaAtual}</p><p>Total de paginas: ${livro.totalPaginas}</p><buton>oi</button></article><hr>`
        // livrosList.appendChild(listarItem)

        // if (livro.paginaAtual == livro.totalPaginas){
        //     listarItem.style.backgroundColor = '#3cf13c54'
        // }

        const listarLivros = document.createElement("li")

        const titulo = document.createElement("h2")
        titulo.textContent = livro.title

        const genero = document.createElement("p")
        genero.textContent = `Genero: ${livro.genero}`

        const paginas = document.createElement("p")
        paginas.textContent = `Paginas ${livro.paginaAtual}/${livro.totalPaginas}`

        

        

        const deleteButton = document.createElement("button")
        deleteButton.textContent = `Excluir`
        deleteButton.addEventListener("click",() => deleteLivro(livro.id))

        
        listarLivros.append(titulo,genero,paginas)

        if (livro.paginaAtual < livro.totalPaginas){
            const  editbutton = document.createElement("button")
            editbutton.textContent = `Atualizar`
            editbutton.addEventListener("click", () => editBook(livro))
            listarLivros.append(editbutton)
        } else {
            listarLivros.style.backgroundColor = '#6b8e23'
        }

        listarLivros.append(deleteButton)
        livrosList.appendChild(listarLivros)

    })
}

async function editBook(livro){
    const paginaAtual = parseInt(prompt("Digite o numero da pagina atual de agora: "))
    if (isNaN(paginaAtual) || paginaAtual < 0 || paginaAtual > livro.totalPaginas) {
        return alert("Insira uma quantidade de paginas validas!")
    }

    const body = JSON.stringify({paginaAtual: parseInt(paginaAtual)})

    await fetch(`http://localhost:3000/Livros/${livro.id}`,{
        method:"PATCH",
        headers: {
            'Content-Type': "apllication/json"
        },
        body: body
    })
}

async function deleteLivro(id){
    await fetch(`http://localhost:3000/Livros/${id}`,{ method:"DELETE"})
}