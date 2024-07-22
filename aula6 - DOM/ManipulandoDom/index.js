const titulo = document.querySelector("h1")

console.log(titulo)

titulo.addEventListener("click", function () {
    //titulo.textContent = "Ola, mundo <em> Estamos usando o DOM</em>"
    //titulo.setAttribute("class", "bg-blue")
    titulo.id = "Titulo-Prinipal"
    //titulo.className = "bg-blue"
    titulo.classList.toggle("bg-blue")
})


