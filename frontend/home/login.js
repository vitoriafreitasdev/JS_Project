import webFetch from "../apifetch/webFetch.js";

const emailInput = document.getElementById("emailInput")
const senhaInput = document.getElementById("senhaInput")
const loginBtn = document.getElementById("loginBtn")
const userMessage = document.getElementById("userMessage")

loginBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const user = {
        email: emailInput.value,
        password: senhaInput.value
    }

    webFetch("/user/login", {
        method: "POST",
        body: JSON.stringify(user)
    }).then((data) => {

        if(data.msg === "Senha errada."){
            return userMessage.innerText = `${data.msg}`
        }

        const tokenLocalStorage = localStorage.getItem("token")

        if(tokenLocalStorage) {
            localStorage.removeItem("token")
        }
        
        localStorage.setItem("token", data.token)
        window.location.assign(`/frontend/userPage/userPage.html?id=${data.id}`)
    }).catch((error) => console.log(error))
})


// fazer o usuario ser direcionado para outra pagina no Login e cadastro