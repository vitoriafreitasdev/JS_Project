
import webFetch from "../apifetch/webFetch.js"

const divTreinos = document.getElementById("treino")
let userExercises

/*
o que preciso fazer:

criar uma div, nome da classe dela => treino-card
criar outra div, nome da classe dela => treino-info
criar outra div, nome da classe dela => card-actions
-treino-info e card-actions vai dentro da treino-card

dentro da treino-card, antes das divs vai um h3 com o nome do dia daquele treino 
 dentro da treino-info vai 4 p com as info de cada treino (nome, series, reps e peso)
dentro de cada p dentro vai escrito: nome, serie, reps ou peso

focar nisso => dentro da card-actions vai dois buttons, um com a class edit outro com a delete, escrito dentro do edit esta editar dentro do delete esta deletar

a treino-card vai dentro da divTreinos

*/


const loadUser = () => {
    webFetch("/user").then((data) => {
        userExercises = data.exercises 
        console.log(userExercises)

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

            // Agora fazer os buttons que vai dentro da actions um edit ou delete
            treinoInfo.appendChild(nome)
            treinoInfo.appendChild(series)
            treinoInfo.appendChild(reps)
            treinoInfo.appendChild(peso)


            treinoCard.appendChild(h3)
            treinoCard.appendChild(treinoInfo)
            treinoCard.appendChild(cardActions)
            divTreinos.appendChild(treinoCard)
        })


    }).catch((error) => console.log(error))
}

loadUser()