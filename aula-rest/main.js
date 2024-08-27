async function Executar() {
  const dados = await fetch("http://localhost:3000/tarefas").then(respota => respota.json())
  console.log(dados)
}

Executar()