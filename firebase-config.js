//configuração para o firebase
const firebaseConfig = {
    apiKey: "AIzaSyDJdChe-nhoOVEa2pTlHal0S7P2X2CU-Vw",
    authDomain: "projeto-poo-ecc0e.firebaseapp.com",
    projectId: "projeto-poo-ecc0e",
    storageBucket: "projeto-poo-ecc0e.appspot.com",
    messagingSenderId: "805249642305",
    appId: "1:805249642305:web:6ac870a40316ad34c87bc0",
    measurementId: "G-YJQ7NTB5GW"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();