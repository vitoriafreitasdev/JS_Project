
import webFetch from "../apifetch/webFetch.js"

const divTreinos = document.getElementById("treino")
const addBtn = document.getElementById("addBtn")
const userMessage = document.getElementById("userMessage")

let userExercises

const url = window.location.href
const urlSPlit = url.split("?id=")
const userId = urlSPlit[1]

// divs de cada dia da semana
const segunda = document.getElementById("segunda")
const terca = document.getElementById("terca")
const quarta = document.getElementById("quarta")
const quinta = document.getElementById("quinta")
const sexta = document.getElementById("sexta")
const sabado = document.getElementById("sabado")
const domingo = document.getElementById("domingo")

// Dentro do map, depois de criar o treinoCard, adicione:

const loadUser = () => {
    webFetch(`/user/${userId}`).then((data) => {
        userExercises = data.exercises 

        userExercises.map((exercise) => {
            // divs treino-card vai dentro da treino
            const treinoCard = document.createElement("div")
            treinoCard.classList.add("treino-card")

            // divs treino-info e a card-actions e o h3 vão dentro da treino-card
            const treinoInfo = document.createElement("div")
            treinoInfo.classList.add("treino-info")

            const cardActions = document.createElement("div")
            cardActions.classList.add("card-actions")

            const h3 = document.createElement("h3")
            h3.innerText = exercise.day
            //Vão dentro da treino-info
            const nome = document.createElement("p")
            const series = document.createElement("p")
            const reps = document.createElement("p")
            const peso = document.createElement("p")

            nome.innerText = `Nome: ${exercise.name}`
            series.innerText = `Series: ${exercise.series}`
            reps.innerText = `Repetições: ${exercise.reps}`
            peso.innerText = `Peso: ${exercise.weight}`

            //  buttons que vai dentro da actions um edit ou delete
            treinoInfo.appendChild(nome)
            treinoInfo.appendChild(series)
            treinoInfo.appendChild(reps)
            treinoInfo.appendChild(peso)

            const buttonEdit = document.createElement("button")
            const deleteButton = document.createElement("button")
            buttonEdit.classList.add("edit")
            deleteButton.classList.add("delete")

            buttonEdit.innerText = "Editar"
            deleteButton.innerText = "Deletar"

            treinoCard.appendChild(h3)
            cardActions.appendChild(buttonEdit)
            cardActions.appendChild(deleteButton)
            treinoCard.appendChild(treinoInfo)
            treinoCard.appendChild(cardActions)
           
            if(exercise.day === "segunda" || exercise.day === "segunda-feira"){
                segunda.style.display = "grid"
                segunda.appendChild(treinoCard)
            }

            if(exercise.day === "terça" || exercise.day === "terça-feira"){
                terca.style.display = "grid"
                terca.appendChild(treinoCard)
            }

            if(exercise.day === "quarta" || exercise.day === "quarta-feira"){
                quarta.style.display = "grid"
                quarta.appendChild(treinoCard)
            }

            if(exercise.day === "quinta" || exercise.day === "quinta-feira"){
                quinta.style.display = "grid"
                quinta.appendChild(treinoCard)
            }

            if(exercise.day === "sexta" || exercise.day === "sexta-feira"){
                sexta.style.display = "grid"
                sexta.appendChild(treinoCard)
            }

            if(exercise.day === "sábado" || exercise.day === "sábado"){
                sabado.style.display = "grid"
                sabado.appendChild(treinoCard)
            }

            if(exercise.day === "domingo" || exercise.day === "domingo"){
                domingo.style.display = "grid"
                domingo.appendChild(treinoCard)
            }

           //divTreinos.appendChild(treinoCard)

            
            // botão editar addEventListener

            buttonEdit.addEventListener("click", () => {
                window.location.assign(`/frontend/editExercises/editExercises.html?id=${exercise._id}`)
            })

            // botão deletar addEventListener

            deleteButton.addEventListener("click", () => {
                deleteExercise(exercise._id)
            })


        })


    }).catch((error) => console.log(error))
}

loadUser()

const deleteExercise = (exerciseId) => {
    webFetch(`/user/delete/${exerciseId}`, {
        method: "DELETE"
    })
    .then((data) => {

        userMessage.innerText = `${data.msg}`
        userMessage.style.color = "white"
        setTimeout(function(){
            window.location.reload()
        }, 1000)

    })
    .catch(error => console.log(error))
}

addBtn.addEventListener("click", () => {
    window.location.assign(`/frontend/addExercises/addExercises.html?id=${userId}`)
})