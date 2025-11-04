import webFetch from "../apifetch/webFetch.js";

const exerciseName = document.getElementById("exerciseName")
const exerciseSeries = document.getElementById("exerciseSeries")
const exerciseReps = document.getElementById("exerciseReps")
const exerciseWeight = document.getElementById("exerciseWeight")
const exerciseDay = document.getElementById("exerciseDay")
const addExercise = document.getElementById("addExercise")
const userAlert = document.getElementById("user-alert")

const url = window.location.href
const split = url.split("?id=")
const userId = split[1]

addExercise.addEventListener("click", (e) => {
   
    e.preventDefault()

    if(exerciseName.value.length == 0 || exerciseSeries.value == 0 || exerciseReps.value.length == 0 || exerciseWeight.value.length == 0 || exerciseDay.value.length == 0){
       
        userAlert.innerText = "Preencha tudo antes de enviar"
        setTimeout(function(){
            userAlert.innerText = " "
        }, 2000)

    }else{

        const exercise = {
            name: exerciseName.value,
            series: exerciseSeries.value,
            reps: exerciseReps.value,
            weight: exerciseWeight.value,
            day: exerciseDay.value
        }

        console.log(exercise)

        webFetch(`/user/addExercise/${userId}`, {
            method: "POST",
            body: JSON.stringify(exercise)
        })
        .then((data) => window.location.assign(`/frontend/userPage/userPage.html?id=${data.user._id}`))
        .catch((error) => {
            userAlert.innerText("Aconteceu algum erro, tente novamente mais tarde!")
            setTimeout(function(){
                userAlert.innerText = " "
            }, 2000)
            console.log(error)
        })
        
    }
    

})