let email = document.querySelector("#email")
let texto = document.querySelector("#texto")
let emailOk = false
let textoOk = false

email.style.width = "100%"

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1) {
      txtEmail.innerHTML = "Email Inválido"
        //alert("Email Invalido")
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaTexto() {
    let txtTexto = document.querySelector("#txtTexto")
    if (texto.value.length >= 100) {
        txtTexto.innerHTML = "Texto muito grande, digite no maximo 100 caracteres"
        txtTexto.style.color = "red"
        txtTexto.style.display = "block"
    } else {
        txtTexto.style.display = "none"
        textoOk = true
    }
}

function enviar() {
    if (emailOk == true && textoOk == true) {
        alert("Formulário enviado")
    } else {
        alert("Preencha o formulário corretamente")
    }
}