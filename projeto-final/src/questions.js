import { createQuestion, deleteQuestion, fetchQuestions, fetchResults } from "./api"
import { button, div, h3, input, label } from "./elements"

export async function createEmptyQuestion(managerElement, results) {
    const question = await createQuestion()

    createQuestionForm(questionManager, question, results)
}

export async function loadQuestionManager(managerElement) {
    managerElement.innerHtml = ""
    const questions = await fetchQuestions()
    const results = await fetchResults()

    questions.forEach((question) => createQuestionForm(managerElement, question,results))
}

function createQuestionForm(managerElement, question, results){
    const questionForm = document.createElement("form")
    questionForm.className = "questionForm"

    const questionFormTitle = h3(`Pergunta ${question.id}`)
    const questionTextLabel = label("Texto da Pergunta", `question-${question.id}-text`)
    const questionTextInput = input("text", {
        id: `question-${question.id}-text`,
        name: "text",
        value: question.text
    })

    const buttonGroup = div({className: "button-group"})

    const submitBtn = button("Salvar Pergunta", {type: "submit"})
    const deleteBtn = button("Excluir Pergunta", {
        type: "button",
        onClick: async () => {
            await deleteQuestion(question.id)
            questionForm.remove()
        }
    })

    buttonGroup.append(submitBtn, deleteBtn)

    questionForm.append(questionFormTitle,questionTextLabel, questionTextInput,buttonGroup)
    managerElement.append(questionForm)
}