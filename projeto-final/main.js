import { fetchResults } from './src/api'
import { createEmptyQuestion, loadQuestionManager } from './src/questions'
import { loadQuestions } from './src/quiz'
import { addSubmitResultListener, loadResults } from './src/results'
import './style.css'

document.addEventListener("DOMContentLoaded", async function (){
    //Formulario
    const newResultForm = document.getElementById("newResultForm")
    if (newResultForm) addSubmitResultListener(newResultForm)

    //Results
    const results = await fetchResults()

    //Lista
    const resultsList = document.getElementById("resultsList")
    if (resultsList) loadResults(resultsList)

    const questionManager = document.getElementById("questionsManager")
    if (questionManager) loadQuestionManager(questionManager)

    const newQuestionBtn = document.getElementById("newQuestion")
    if (newQuestionBtn) newQuestionBtn.addEventListener("click", () => createEmptyQuestion(questionManager, results))

    const quizElement = document.getElementById("quiz")
    if(quizElement) loadQuestions(quizElement)
})