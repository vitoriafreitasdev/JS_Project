import webFetch from "../apifetch/webFetch.js";

const exerciseName = document.getElementById("exerciseName")
const exerciseSeries = document.getElementById("exerciseSeries")
const exerciseReps = document.getElementById("exerciseReps")
const exerciseWeight = document.getElementById("exerciseWeight")
const exerciseDay = document.getElementById("exerciseDay")
const addExercise = document.getElementById("addExercise")
const form = document.getElementById("form")
addExercise.addEventListener("click", (e) => {
   
    e.preventDefault()

    if(exerciseName.value.length == 0 || exerciseSeries.value == 0 || exerciseReps.value.length == 0 || exerciseWeight.value.length == 0 || exerciseDay.value.length == 0){
        const userMessage = document.createElement("p")
        form.appendChild(userMessage)
        userMessage.innerText = "Preencha tudo antes de enviar"
    }else{
        const exercise = {
            name: exerciseName.value,
            series: exerciseSeries.value,
            reps: exerciseReps.value,
            weight: exerciseWeight.value,
            day: exerciseDay.value
        }

        // agora realizar o enviou
    }
    

})