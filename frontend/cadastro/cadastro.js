const nameInput = document.getElementById("nameInput")
const emailInput = document.getElementById("emailInput")
const senhaInput = document.getElementById("senhaInput")
const submitCadastro = document.getElementById("submitCadastro")

submitCadastro.addEventListener("click", (e) => {
    e.preventDefault()

    const cadastroForm = {
        name: nameInput.value,
        email: emailInput.value,
        password: senhaInput.value
    }
    // continuar aqui com o cadastro
    console.log(cadastroForm)
})