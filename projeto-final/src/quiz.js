import { fetchQuestions } from "./api";
import { button, div, h2} from "./elements";

export async function loadQuestions(quizElement) {
    const questions = await fetchQuestions()
    const answers = questions.map((question) => ({questionId: question.id,answer: null}))

    questions.forEach((question, index) => {
        const questionContainer = div({ className: "question"})

        const textElement = h2(question.text)

        const alternatives = div({ className: "" })
        const alternativeBtns = createAlternativeBtns(question, answers)
        console.log(alternativeBtns)
        //operador spread
        //alternatives.append(alternativeBtns[0],alternativeBtns[1],alternativeBtns[2],alternativeBtns[3],alternativeBtns[4])
        alternatives.append(...alternativeBtns)

        questionContainer.append(textElement, alternatives)
        quizElement.append(questionContainer)
    });

    const finishBtnContainer = div({ className: "finish-btn-container"})
    const finishBtn = button("Ver meu resultado!", {
        className: "finish-btn",
        onClick: async () => {
            const result = await calculateResults(questions, answers)
            quizElement.innerHtml = `<div class="result"><h2>Seu resultado foi ${result.name}!<h2><p>${result.description}</p></div>`
        }
    })

    finishBtnContainer.append(finishBtn)
    quizElement.append(finishBtnContainer)
}

async function calculateResults(question, answer) {
    
}

function createAlternativeBtns(question, answers) {
    const fullyDisagreeBtn = button("Discordo Completamente", {
        className: "inline-block",
        onClick: handleSelectAlternative
    })
    fullyDisagreeBtn.addEventListener("click", () => {
        const currentAnswer = answers.find((answer) => answer.questionId === question.id)
        currentAnswer.answer = "fullyDisagree"
        console.log(answers)
    })

    const partiallyDisagreeBtn = button("Discordo Parcialmente", {
        className: "inline-block",
        onClick: handleSelectAlternative
    })
    partiallyDisagreeBtn.addEventListener("click", () => {
        const currentAnswer = answers.find((answer) => answer.questionId === question.id)
        currentAnswer.answer = "partiallyDisagree"
    })

    const dontKnowBtn = button("Não Sei", {
        className: "inline-block",
        onClick: handleSelectAlternative
    })
    dontKnowBtn.addEventListener("click", () => {
        const currentAnswer = answers.find((answer) => answer.questionId === question.id)
        currentAnswer.answer = "dontKnow"
    })

    const partiallyAgreeBtn = button("Concordo Parcialmente", {
        className: "inline-block",
        onClick: handleSelectAlternative
    })
    partiallyAgreeBtn.addEventListener("click", () => {
        const currentAnswer = answers.find((answer) => answer.questionId === question.id)
        currentAnswer.answer = "partiallyAgree"
    })

    const fullyAgreeBtn = button("Concordo Completamente", {
        className: "inline-block",
        onClick: handleSelectAlternative
    })
    fullyAgreeBtn.addEventListener("click", () => {
        const currentAnswer = answers.find((answer) => answer.questionId === question.id)
        currentAnswer.answer = "fullyAgree"
    })

    return [fullyDisagreeBtn, partiallyDisagreeBtn, dontKnowBtn, partiallyAgreeBtn, fullyAgreeBtn]
}

function handleSelectAlternative(event) {
    const clickedBtn = event.target
    clickedBtn.parentElement.childNodes.forEach((node) => {
        node.classList.remove("selected")
    })
    clickedBtn.classList.add("selected")
}