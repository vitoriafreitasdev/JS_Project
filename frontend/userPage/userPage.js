import webFetch from "../apifetch/webFetch.js"

const divTreinos = document.getElementById("divTreinos")
let userExercises

/*
o que preciso fazer:
criar uma div, nome da classe dela => treino-card
criar outra div, nome da classe dela => treino-info
criar outra div, nome da classe dela => card-actions
-treino-info e card-actions vai dentro da treino-card
dentro da treino-card, antes das divs vai um h3 com o nome do dia daquele treino 
dentro da treino-info vai 4 p com as info de cada treino (nome, series, reps e peso)
dentro de cada p vai um strong, dentro vai escrito: nome, serie, reps ou peso

dentro da card-actions vai dois buttons, um com a class edit outro com a delete, escrito dentro do edit esta editar dentro do delete esta deletar

a treino-card vai dentro da divTreinos

*/

const loadUser = () => {
    webFetch("/user").then((data) => {
        userExercises = data.exercises 
        console.log(userExercises)
    }).catch((error) => console.log(error))
}

loadUser()