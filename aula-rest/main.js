const postForm = document.getElementById("postForm")
const titleInput = document.getElementById("title")
const bodyInput = document.getElementById("body")
const postsList = document.getElementById("postsList")

postForm.addEventListener("submit",function (evento){
  evento.preventDefault()

  const title = titleInput.value
  const body = bodyInput.value

  criarPost(title, body)
})

async function criarPost(title, body) {
 const resposta = await fetch("http://localhost:3000/posts", {
  method: "POST",
  body: `{"title":${title},"body":${body}}`
 })
 console.log(resposta)
}