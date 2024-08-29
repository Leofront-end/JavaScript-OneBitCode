const postForm = document.getElementById("postForm")
const titleInput = document.getElementById("title")
const bodyInput = document.getElementById("body")
const postsList = document.getElementById("postsList")

carregarPosts()

postForm.addEventListener("submit", function(event){
  event.preventDefault()

  const title = titleInput.value
  const body = bodyInput.value

  criarPost(title, body)

  titleInput.value = ""
  bodyInput.value = ""
})

async function criarPost(title, body){
  const resposta = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify({ title, body})
  })

  console.log(resposta)
}

async function carregarPosts() {
  const resposta = await fetch("http://localhost:3000/posts")
  const posts = await resposta.json()

  console.log(posts)
}