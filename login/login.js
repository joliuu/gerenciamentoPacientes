// Função para fazer login
function login() { //Função para fazer login.
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password) //Procura os dados emitidos no firebase.
        .then((userCredential) => {
            // Usuário logado
            window.location.href = '../'
        })
        .catch((error) => { //caso o usuário não esteja logado.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Erro: " + errorMessage);
        });
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
});