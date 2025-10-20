
import webFetch from "../apifetch/webFetch.js"

const nameInput = document.getElementById("nameInput")
const emailInput = document.getElementById("emailInput")
const senhaInput = document.getElementById("senhaInput")
const submitCadastro = document.getElementById("submitCadastro")


async function cadastrarUsuario(url, data){

    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json()
}

submitCadastro.addEventListener("click", (e) => {
    e.preventDefault()

    const cadastroForm = {
        name: nameInput.value,
        email: emailInput.value,
        password: senhaInput.value
    }

    

    webFetch("/user/cadastro", {
        method: "POST",
        body: JSON.stringify(cadastroForm)
    }).then(data => {
        localStorage.setItem("token", data.token)
        // window.location.assign(`/frontend/userPage/userPage.html?id=${data.id}`)
    }).catch(error => console.log(error))
})

// fazer o login
// Depois fazer o usuario ser direcionado para outra pagina