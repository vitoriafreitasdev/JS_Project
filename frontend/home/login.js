import webFetch from "../apifetch/webFetch.js";

const emailInput = document.getElementById("emailInput")
const senhaInput = document.getElementById("senhaInput")
const loginBtn = document.getElementById("loginBtn")

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
        localStorage.setItem("token", data.token)
        window.location.assign(`/frontend/userPage/userPage.html?id=${data.id}`)
    }).catch((error) => console.log(error))
})


// fazer o usuario ser direcionado para outra pagina no Login e cadastro