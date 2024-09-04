async function executando() {
    const userList = document.getElementById("userList")
    const respostas = await fetch("https://jsonplaceholder.typicode.com/users")
    const dados = await respostas.json()
    console.log(dados)

    dados.forEach(function (users){
        const userElement = document.createElement("article")

        const userUsuario = document.createElement("article")

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

        userUsuario.append(userName, userUsername, userPhone, userEmail, userWebsite)
        //----------------RUA--------------------------
        const userLocalizacao = document.createElement("article")

        const userRua = document.createElement("h3")
        userRua.textContent = 'Rua'

        const userEndereco = document.createElement("p")
        userEndereco.textContent = `Endereço: ${users.address.street}`

        const userCidade = document.createElement("p")
        userCidade.textContent = `Cidade: ${users.address.city}`

        const userSuit = document.createElement("p")
        userSuit.textContent = `Suite: ${users.address.suite}`

        const userZipcode = document.createElement("p")
        userZipcode.textContent = `Zipcode: ${users.address.zipcode}`

        const userGeo = document.createElement("p")
        userGeo.textContent = `Latencia: ${users.address.geo.lat} \nLongitude: ${users.address.geo.lng}`

        userLocalizacao.append(userRua, userEndereco, userCidade, userSuit, userZipcode, userGeo)

        //---------------------COMPANHIA------------------------------------------
        const userEmpresa = document.createElement("article")

        const userCompanhia = document.createElement("h3")
        userCompanhia.textContent = 'Companhia'

        const userCName = document.createElement("p")
        userCName.textContent = `Nome: ${users.company.name}`

        const userPhrase = document.createElement("p")
        userPhrase.textContent = `Bordão: ${users.company.catchPhrase}`

        const userBs = document.createElement("p")
        userBs.textContent = `BS: ${users.company.bs}`

        userEmpresa.append(userCompanhia, userCName, userPhrase, userBs)

        userElement.append(userUsuario, userLocalizacao, userEmpresa,document.createElement("hr"))
        userList.appendChild(userElement)
    })
}


executando()