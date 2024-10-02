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
    event.target.parentElement.childNodes.forEach()
}