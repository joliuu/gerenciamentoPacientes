// Funcão para registrar o usuário
function registrar() { //Função para registrar um novo usuário
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (confirmPassword === password) { //Se as senhas nos campos forem iguais.
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            alert("Usuário registrado com sucesso!");
            //redireciona para a tela de login após o cadastro.
            window.location.href = "../login"
        })
        .catch((error) => {
            //alerta caso algum erro ocorrer 
            console.log(error.message)
            alert("Erro: " + error.message);
        });
    } else if (confirmPassword === "") { //Caso não a senha são seja confirmada.
        alert("Antes de prosseguir, confirme sua senha.")
    } else { //Se as senhas não forem iguais. 
        alert("As senhas não são iguais")
    }
}

document.getElementById('cadastro').addEventListener('submit', function(event) {
    event.preventDefault();
});