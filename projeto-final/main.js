import { addSubmitResultListener } from './src/results'
import './style.css'

document.addEventListener("DOMContentLoaded", function (){
    const newResultForm = document.getElementById("newResultForm")

    if (newResultForm) addSubmitResultListener(newResultForm)
})