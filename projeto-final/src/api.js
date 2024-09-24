export async function fetchResults() {
    const results = await fetch("http://localhost:3000/results").then((response) => response.json())
    return results 
}

export async function createResult(name, description) {
    const body = JSON.stringify({ name, description})

    await fetch("http://localhost:3000/results", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body
    })
}

export async function deleteResult(resultId) {
    await fetch(`http://localhost:3000/results/${resultId}`, {method:"DELETE"})
}

//função para carregar as perguntas do backend
export async function fetchQuestions() {
    return await fetch("http://localhost:3000/questions").then((response) => response.json())
}

// função para criar uma pergunta vazia
export async function createQuestion(text = "Escreva sua pergunta", points = {
    fullyDesagree: null,
    partiallyDesagree: null,
    dontKnow: null,
    partiallyAgree: null,
    fullyAgree: null
}) {
    const body = JSON.stringify({text: text, points: points})

    await fetch("http://localhost:3000/questions" ,{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: body
    })
}
// funcão para atualizar um pergunta existente
export async function updateQuestion(questionId, text, points) {
    const body = JSON.stringify({text, points})

    await fetch(`http://localhost:3000/questions/${questionId}`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: body
    })
}

// funcção para excluir uma pergunta
export async function deleteQuestion(questionId) {
    await fetch(`http://localhost:3000/questions/${questionId}`, {method:"DELETE"})
}