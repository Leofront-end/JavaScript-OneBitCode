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