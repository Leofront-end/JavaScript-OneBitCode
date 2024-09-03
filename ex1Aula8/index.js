async function executando() {
    const userList = document.getElementById("userList")
    const respostas = await fetch("https://jsonplaceholder.typicode.com/users")
    const dados = await respostas.json()
    console.log(dados)

    dados.forEach(function (users){
        const userElement = document.createElement("article")

        const userName = document.createElement("h2")
        userName.textContent = users.name

        const userUsername = document.createElement("h3")
        userUsername.textContent = users.username

        const userPhone = document.createElement("p")
        userPhone.textContent = `Telefone: ${users.phone}`

        const userEmail = document.createElement("p")
        userEmail.textContent = `Email: ${users.email}`

        const userWebsite = document.createElement("a")
        userWebsite.textContent = users.website
        userWebsite.href = users.website

        const userRua = document.createElement("h4")
        userRua.textContent = 'Rua'

        userElement.append(userName, userUsername, userPhone, userEmail, userWebsite, userRua,document.createElement("hr"))
        userList.appendChild(userElement)
    })
}


executando()