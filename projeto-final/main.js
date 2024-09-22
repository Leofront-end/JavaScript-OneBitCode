import { addSubmitResultListener, loadResults } from './src/results'
import './style.css'

document.addEventListener("DOMContentLoaded", function (){
    //Formulario
    const newResultForm = document.getElementById("newResultForm")
    if (newResultForm) addSubmitResultListener(newResultForm)

    //Lista
    const resultsList = document.getElementById("resultsList")
    if (resultsList) loadResults(resultsList)
})