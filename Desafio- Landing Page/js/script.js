let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let texto = document.querySelector("#texto")
let emailOk = false
let assuntoOk = false
let textoOk = false

email.style.width = "100%"

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaTexto() {
    let txtAssunto = document.querySelector("#txtTexto")
    if (texto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito grande, digite no maximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if (emailOk == true && assuntoOk == true && textoOk == true) {
        alert("Formulário enviado")
    } else {
        alert("Preencha o formulário corretamente")
    }
}